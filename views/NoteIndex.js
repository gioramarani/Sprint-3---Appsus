import { NoteService } from '../services/NoteService.js'

import NotePreview from '../cmps/NotePreview.js'

export default {
  name:'NoteIndex',
  props: [],
  template: `
        <section class="note-index">

            <NotePreview/>

            :notes=""
        </section>
        `,
created() {
        // this.notes = NoteService.getNotesFromService()
        // console.log(this.notes)

        NoteService.query()
            .then(notes => this.notes = notes)
            console.log({...this.notes})

},
  data() {
    return {
            notes: []
    }
  },
  methods: {},
  computed: {},
components:{
    NotePreview,

},
}
