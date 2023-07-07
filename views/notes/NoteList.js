import NotePreview from '../../cmps/notes/NotePreview.js'


export default {
  name:'NoteList',
  props: ['notes'],
  template: `

            <section>
                <ul class="note-list" >
                    <li  v-for="note in notes" :key="note.id">
                    <NotePreview 
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
components:{
    NotePreview,
},
}
