import { NoteService } from "../../services/notes/NoteService.js"

export default {
  name: 'NoteAdd',
  props: [],
  template: `
            <section class="note-add">
            <form @submit.prevent="onCreate" >
                <input type="text"
                placeholder="Title" v-model="txt"/> <br/>
                <input type="text"
                placeholder="Take a note..." v-model="txt"/>
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
      txt: '',
      type: '',
      isImg: false,
      isVideo: false,
      isTodo: false
    }
  },
  methods: {
    toggleTodo() {
      this.isTodo = true
    },
    toggleImg() {
      this.isImg = true
    },
    toggleVideo() {
      this.isVideo = true
    },
    onCreate() {
      console.log(this.newNote)
    
      if (this.isImg) {
        this.newNote = {
          info: {
            title: this.txt
          },
          type: 'NoteImg'
        }
      } else if (this.isVideo) {
        this.newNote = {
          info: {
            title: this.txt
          },
          type: 'NoteVideo'
        }
      } else if (this.isTodo) {
        this.newNote = {
          info: {
            title: this.txt
          },
          type: 'NoteTodos'
        }
      } else {
        this.newNote = {
          info: {
            txt: this.txt
          },
          type: 'NoteTxt'
        }
      }
      // this.$emit('create', this.newNote, this.type ,this.txt)
      this.$emit('create', this.newNote)
      console.log(this.newNote)
      this.txt = ''
      this.newNote = {}
      this.type = ''
      this.isImg = false
      this.isVideo = false
      this.isTodo = false

      console.log(this.newNote)

    },

  },
  computed: {},
  components: {},
}
