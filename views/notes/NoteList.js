import NotePreview from '../../cmps/notes/NotePreview.js'


export default {
  name: 'NoteList',
  props: ['notes'],
  template: `

            <section>
              <h3>Pinned</h3>
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
            <h3>Unpinned</h3>
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
