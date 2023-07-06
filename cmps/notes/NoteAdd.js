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
              
                </select>
                
                <button class="material-symbols-outlined">check_box</button>
              </form>
              <section class="features">
                <span class="material-symbols-outlined" @click="toggleVideo">play_circle</span>
                <span class="material-symbols-outlined" @click="toggleTodo">edit_note</span>
                <!-- <form action="/api" method="post" enctype="multipart/form-data">
                  <label for="file"></label>
                  <input id="file" name="file" type="file" />
                  <span class="material-symbols-outlined" @click="toggleImg">image</span>
                  <button>Upload</button>
                </form>  -->
              
              </section>  
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
      // todotxt: '',
      todoLines: [
        {txt: '', doneAt: null},
      ],


    }
  },
  methods: {
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
          info: {
            title: this.txt
          },
          type: 'NoteImg',
          createdAt: this.createdAt,
          isPinned: this.isPinned,
        }
      } else if (this.isVideo) {
        this.newNote = {
          info: {
            title: this.title
          },
          type: 'NoteVideo',
          createdAt: this.createdAt,
          isPinned: this.isPinned,
        }
      } else if (this.isTodo) {
        this.newNote = {
          info: {
            title: this.title,
            todos: this.todoLines
          },
          type: 'NoteTodos',
          createdAt: this.createdAt,
          isPinned: this.isPinned,
        }
      } else {
        this.newNote = {
          info: {
            title: this.title,
            txt: this.txt
          },
          type: 'NoteTxt',
          createdAt: this.createdAt,
          isPinned: this.isPinned,
          style: {
            backgroundColor: '#00d'
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
