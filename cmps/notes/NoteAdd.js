import { noteService } from "../../services/notes/noteService.js"

export default {
  name: 'NoteAdd',
  props: [],
  template: `
            <section class="note-add">
            <form @submit.prevent="onCreate" >
              
                <input type="text" class="title-input"
                placeholder="Title" v-model="title"/> 

                <input v-if="(isTodo)" v-for="line in todoLines.length" class="todo-input"
                type="text" placeholder="List item" v-model="todoLinesTxt"/>

                <input v-else type="text" class="txt-input"
                placeholder="Take a note..." v-model="txt"/>

               
              
               
                
                <button  class="material-symbols-outlined">check_box</button>
                <section class="feature-btns">
                  <a class="material-symbols-outlined" @click="toggleVideo">play_circle</a>
                  <a class="material-symbols-outlined" @click="toggleTodo">edit_note</a>
                  <a class="material-symbols-outlined" @click="toggleImg">image</a>
                  
                
                  </section>
              </form>

                
               <input v-if="(isImg)" @change="onUploadImg" id="file" name="file" type="file" />
               
              </section>
        `,
  created() { },
  data() {
    return {
      newNote: noteService.getEmptyNote(),
      title: '',
      txt: '',
      type: '',
      isImg: false,
      isVideo: false,
      isTodo: false,
      isPinned: false, //add toggle button,
      createdAt: Date.now(),
      todoLinesTxt: '',
      imgUrl: '',
      videoUrl: '',
    }
  },
  methods: {
    
    onUploadImg(ev) {
      noteService.createImg(ev)
        .then(url => this.imgUrl = url)
    },
    onUploadVideo() {
      noteService.getYoutubeResults()
      // something//
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
            url: this.imgUrl,
          },
          style: {
            backgroundColor: ''
          },
          createdAt: this.createdAt,
          isPinned: this.isPinned,
        }
      } else if (this.isVideo) {
        this.newNote = {
          type: 'NoteVideo',
          info: {
            title: this.title,
            url: this.videoUrl,
          },
          style: {
            backgroundColor: ''
          },
          createdAt: this.createdAt,
          isPinned: this.isPinned,
        }
      } else if (this.isTodo) {
        this.newNote = {
          type: 'NoteTodos',
          info: {
            title: this.title,
            todos: this.todoLinesTxt
          },
          createdAt: this.createdAt,
          isPinned: this.isPinned,
          style: {
            backgroundColor: ''
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
            backgroundColor: ''
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
      this.todoLines = []
      // isPinned = false
      // style = {}



      console.log(this.newNote)

    },

  },
  computed: {},
  components: {},
}
