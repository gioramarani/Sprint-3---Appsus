import NoteTxt from './NoteTxt.js'
import NoteImg from './NoteImg.js'
import NoteVideo from './NoteVideo.js'
import NoteTodos from './NoteTodos.js'

export default {
  name:'NotePreview',
  props: ['note'],
  template: `
                <section class="note-preview">
                <component 
                    class="rendered-note"
                    :is="note.type"
                    :note="note"
                   
                    
                />
                <span class="material-symbols-outlined" 
                    @click="onRemoveNote(note.id)">delete</span> 
                </section>
        `,
created() {},
  data() {
    return {}
  },
  methods: {
    onRemoveNote(noteId) {
        console.log(noteId)
        this.$emit('remove', noteId)
    },
   
  },
  computed: {},
components:{
    NoteTxt,
    NoteImg,
    NoteVideo,
    NoteTodos,
},
}
