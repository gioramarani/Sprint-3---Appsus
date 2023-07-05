import NoteTxt from './NoteTxt.js'
import NoteImg from './NoteImg.js'
import NoteVideo from './NoteVideo.js'
import NoteTodos from './NoteTodos.js'

export default {
  name:'NotePreview',
  props: ['note'],
  template: `
                <section>
                <component 
                    :is="note.type"
                    :note="note"
                    
                    
                />
                
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
