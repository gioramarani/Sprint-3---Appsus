import { NoteService } from '../../services/notes/NoteService.js'

import NoteTxt from './NoteTxt.js'
import NoteImg from './NoteImg.js'
import NoteVideo from './NoteVideo.js'
import NoteTodos from './NoteTodos.js'

export default {
  name:'NotePreview',
  props: ['notes'],
  template: `
            <section class="note-preview">
                <!-- <button @click="$emit('create')">Add Note</button> -->
              <form  @submit="onCreate" >
                <input type="text"
                placeholder="Take a note..." v-model="txt"/>
                <button>Make Note</button>
                </form>
            <section class="notes">
            <section class="note" v-for="note in notes" :key="note.id">
               <!-- <RouterLink to="">Add Note</RouterLink> -->

                <component 
                :is = "note.type"
                :note = "note"
                />
            </section>
            </section>
            </section>

        `,
created() {},
  data() {
    return {
      txt: ''
    }
  },
  methods: {
    onCreate(){
      this.$emit('create', this.txt)
      console.log(this.txt)

    }
  },
  computed: {},
components:{
    NoteTxt,
    NoteImg,
    NoteVideo,
    NoteTodos,
},
}
