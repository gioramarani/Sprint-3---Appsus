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
            <section v-for="note in notes" :key="note.id">
               <RouterLink to="">Add Note</RouterLink>

                <component 
                :is = "note.type"
                :note = "note"
                />
            </section>
            </section>

        `,
created() {},
  data() {
    return {}
  },
  methods: {
    
  },
  computed: {},
components:{
    NoteTxt,
    NoteImg,
    NoteVideo,
    NoteTodos,
},
}
