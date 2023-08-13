import NotePreview from '../../cmps/notes/NotePreview.js'


export default {
  name: 'NoteList',
  props: ['notes'],
  template: `

            <section>
              <span class="pin-title">Pinned</span>
                <ul class="note-list pinned-notes" >
                    <li  v-for="note in notes" :key="note.id">
                    <NotePreview 
                    v-if="note.isPinned"
                    :note="note"
                    @remove="onRemoveNote"
                    /> 
                    </li>
                </ul>
            </section>
            <section>
            <span class="pin-title">Unpinned</span>
                <ul class="note-list unpinned-notes" >
                    <li  v-for="note in notes" :key="note.id">
                    <NotePreview 
                    v-if="!note.isPinned"
                    :note="note"
                    @remove="onRemoveNote"
                    /> 
                    </li>
                </ul>
            </section>
   
        `,
  created() {

  },
  data() {
    return {}
  },
  methods: {

    onRemoveNote(noteId) {
      console.log(noteId)
      this.$emit('remove', noteId)
    }
  },
  computed: {},
  components: {
    NotePreview,
  },
}
