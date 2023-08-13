import NoteTxt from '../notes/NoteTxt.js'
import NoteImg from '../notes/NoteImg.js'
import NoteVideo from '../notes/NoteVideo.js'
import NoteTodos from '../notes/NoteTodos.js'

export default {
  name:'NotePreview',
  props: ['note'],
  template: `
                <section class="note-preview">
                <component 
                    class="rendered-note"
                    :is="note.type"
                    :note="note"
                    @remove="onRemoveNote"
                    
                    />
                </section>
        `,
created() {},
  data() {
    return {
    
    }
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
