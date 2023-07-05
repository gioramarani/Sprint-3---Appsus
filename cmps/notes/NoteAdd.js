import { NoteService } from "../../services/notes/NoteService.js"

export default {
  name:'NoteAdd',
  props: [],
  template: `
            <form  @submit="onCreate" >
                <input type="text"
                placeholder="Take a note..." v-model="txt"/> <br/>
                <!-- <select v-model="type">Select type
                  <option value="NoteTxt">Text</option>
                  <option value="Img">Image</option> -->
                  <!-- <input type="text"
                placeholder="Type of note..." v-model="type"/> -->
                  <!-- <option value="Todos">To-Do's</option>
                  <option value="Video">Video</option> -->
                </select>
                <button>Make Note</button>
                </form>
        `,
created() {},
  data() {
    return {
      newNote: NoteService.getEmptyNote(),
      txt: '',
      type: '',
    }
  },
  methods: {
    onCreate(){
      console.log(this.newNote)
      // if(this.txt === 'TxtNote') {
      //   console.log('Txt note')
      //   this.newNote.info = {
      //     txt: this.txt
      //   }
      //   this.newNote.type = this.type
      // }
      // if(this.type === 'Img') {
      //   console.log('Img note')
      //   this.newNote.info = {
      //     title: this.txt
      //   }
      //   this.newNote.type = this.type

      // }
      this.newNote= {
        info: {
          txt: this.txt
        },
        type: 'NoteTxt'
        }
      // this.$emit('create', this.newNote, this.type ,this.txt)
      this.$emit('create', this.newNote)
      console.log(this.newNote)
      this.txt = ''
      this.newNote = {}
      this.type= ''
      console.log(this.newNote)

    }
  },
  computed: {},
components:{},
}
