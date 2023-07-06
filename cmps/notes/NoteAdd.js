import { NoteService } from "../../services/notes/NoteService.js"

export default {
  name: 'NoteAdd',
  props: [],
  template: `
            <section class="note-add">
            <form @submit.prevent="onCreate" >
              
                <input type="text" class="title-input"
                placeholder="Title" v-model="title"/> <br/>

                <input v-if="(isTodo)" v-for="line in todoLines.length" class="todo-input"
                type="text" placeholder="List item" v-model="todoLines[0].txt"/>

                <input v-else type="text" class="txt-input"
                placeholder="Take a note..." v-model="txt"/>

                <span v-if="(todoLines[0].txt)" @click="addTodoLine"
                 class="material-symbols-outlined add-todo-line">add</span>
              
               
                
                <button class="material-symbols-outlined">check_box</button>
              </form>
              <section class="features">
                <span class="material-symbols-outlined" @click="toggleVideo">play_circle</span>
                <span class="material-symbols-outlined" @click="toggleTodo">edit_note</span>
                <span class="material-symbols-outlined" @click="toggleImg">image</span>
                
                <span class="material-symbols-outlined" @click="onAddColor">format_color_fill</span>
                <input v-if="(isBackgroundColored)" type="color" v-model="backgroundColor"
                @input="backgroundColor" />
                
                <span v-if="(isImg)" @click="onUploadImg">Img upload try</span>
              </section>  
              
                <!-- <form v-if="(isImg)" action="/api" method="post"
                 enctype="multipart/form-data" class="img-upload">
                  <label for="file"></label>
                  <input id="file" name="file" type="file" />
                  <button>Upload</button>
                </form>  -->

                
              
              </section>
        `,
  created() { },
  data() {
    return {
      newNote: NoteService.getEmptyNote(),
      title: '',
      txt: '',
      type: '',
      isImg: false,
      isVideo: false,
      isTodo: false,
      isPinned: false, //add toggle button,
      createdAt: Date.now(),
      todoLines: [
        {txt: '', doneAt: null},
      ],
      imgUrl: '',
      isBackgroundColored: false,
      backgroundColor: '',


    }
  },
  methods: {
    onAddColor() {
      this.isBackgroundColored = true
    },
    onUploadImg() {
      NoteService.doUploadImg(this.imgUrl)
    },
    addTodoLine(){
      this.todoLines.push({txt: '', doneAt: null})
    },
    toggleTodo() {
      this.isTodo = !this.isTodo
    },
    toggleImg() {
      this.isImg = !this.isImg
    },
    toggleVideo() {
      this.isVideo = !this.isVideo
    },
    onCreate() {
      console.log(this.newNote)
    
      if (this.isImg) {
        this.newNote = {
          type: 'NoteImg',
          info: {
            title: this.txt,
            // url: this.imgUrl
          },
          createdAt: this.createdAt,
          isPinned: this.isPinned,
        }
      } else if (this.isVideo) {
        this.newNote = {
          type: 'NoteVideo',
          info: {
            title: this.title
          },
          createdAt: this.createdAt,
          isPinned: this.isPinned,
        }
      } else if (this.isTodo) {
        this.newNote = {
          type: 'NoteTodos',
          info: {
            title: this.title,
            todos: this.todoLines
          },
          createdAt: this.createdAt,
          isPinned: this.isPinned,
          style: {
            backgroundColor: this.backgroundColor
        },
        }
      } else {
        this.newNote = {
          type: 'NoteTxt',
          info: {
            title: this.title,
            txt: this.txt
          },
          createdAt: this.createdAt,
          isPinned: this.isPinned,
          style: {
            backgroundColor: this.backgroundColor
        },
        }
      }
      // this.$emit('create', this.newNote, this.type ,this.txt)
      this.$emit('create', this.newNote)
      console.log(this.newNote)
      this.title = ''
      this.txt = ''
      this.newNote = {}
      this.type = ''
      this.isImg = false
      this.isVideo = false
      this.isTodo = false
      this.todoLineCount = []
      // isPinned = false
      // style = {}



      console.log(this.newNote)

    },

  },
  computed: {},
  components: {},
}
