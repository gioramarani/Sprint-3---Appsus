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
                    <span class="material-symbols-outlined delete" 
                        @click="onRemoveNote(note.id)">delete</span> 
                        <span class="material-symbols-outlined pin"
                        @click="onPinNote(note.id)" >push_pin</span>

                        <a class="material-symbols-outlined" @click="onAddColor">format_color_fill</a>
                       <input v-if="(isBackgroundColored)" type="color" v-model="backgroundColor"
                        @input="backgroundColor" />

                        <!-- <span class="material-symbols-outlined img"
                        @click="onAttachImg(note.id)">image</span> -->
                    </section>
        `,
created() {},
  data() {
    return {
      isBackgroundColored: false,
      backgroundColor: '',
    }
  },
  methods: {
    onAddColor() {
      this.isBackgroundColored = true
    },
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
