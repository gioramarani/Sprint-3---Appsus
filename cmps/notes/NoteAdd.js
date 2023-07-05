import { NoteService } from "../../services/notes/NoteService.js"

export default {
  name:'NoteAdd',
  props: [],
  template: `
            <form  @submit="onCreate" >
                <input type="text"
                placeholder="Take a note..." v-model="txt"/> <br/>
                <select v-model="type">Select type
                  <option value="Txt">Text</option>
                  <option value="Img">Image</option>
                  <option value="Todos">To-Do's</option>
                  <option value="Video">Video</option>
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
      this.$emit('create', this.newNote, this.type ,this.txt)
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
