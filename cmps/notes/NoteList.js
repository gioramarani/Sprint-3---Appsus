import NotePreview from './NotePreview.js'


export default {
  name:'NoteList',
  props: ['notes'],
  template: `

            <section>
                <ul class="note-list" >
                    <li  v-for="note in notes" :key="note.id">
                    <NotePreview 
                    :note="note"
                    @click="onEditNote(note.id)"
                    />
                    <span class="material-symbols-outlined" 
                    @click="onRemoveNote(note.id)">delete</span> 
                    <span class="material-symbols-outlined"
                   >edit</span>
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
        onEditNote(noteId) {
            console.log(noteId)
            this.$emit('edit', noteId)
    },
        onRemoveNote(noteId) {
            console.log(noteId)
            this.$emit('remove', noteId)
        }
  },
  computed: {},
components:{
    NotePreview,
},
}
