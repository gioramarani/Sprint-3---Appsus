import { NoteService } from "../../services/notes/NoteService.js"

export default {
  name: 'NoteAdd',
  props: [],
  template: `
            <section class="note-add">
            <form @submit.prevent="onCreate" >
                <input type="text"
                placeholder="Title" v-model="title"/> <br/>
                <input v-if="(isTodo)" v-for="line in todoLineCount.length" 
                type="text" placeholder="List item" v-model="todotxt"/>
                <input v-else type="text"
                placeholder="Take a note..." v-model="txt"/>
                <span v-if="(todotxt)" @click="addTodoLine"
                 class="material-symbols-outlined">add</span>
                <!-- <select v-model="type">Select type
                  <option value="NoteTxt">Text</option>
                  <option value="Img">Image</option> -->
                  <!-- <input type="text"
                placeholder="Type of note..." v-model="type"/> -->
                  <!-- <option value="Todos">To-Do's</option>
                  <option value="Video">Video</option> -->
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
      todotxt: '',
      todoLineCount: ['line'],


    }
  },
  methods: {
    addTodoLine(){
      this.todoLineCount.push('line')
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
            title: this.txt
          },
          type: 'NoteVideo',
          createdAt: this.createdAt,
          isPinned: this.isPinned,
        }
      } else if (this.isTodo) {
        this.newNote = {
          info: {
            title: this.title,
            todos: [
              {txt: this.todotxt, doneAt: null},
              {txt: this.todotxt, doneAt: null}
            ]
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
