import { NoteService } from '../services/NoteService.js'

import NoteTxt from './NoteTxt.js'
import NoteImg from './NoteImg.js'
import NoteVideo from './NoteVideo.js'
import NoteTodos from './NoteTodos.js'

export default {
  name:'NotePreview',
  props: ['notes'],
  template: `
            <section v-for="note in notes" :key="note.id">
                <pre>

                </pre>

                <component 
                :is = "note.type"
                :note = "note"
                />
                <button></button>
            </section>

        `,
created() {},
  data() {
    return {}
  },
  methods: {},
  computed: {},
components:{
    NoteTxt,
    NoteImg,
    NoteVideo,
    NoteTodos,
},
}
