import { noteService } from "../../services/notes/noteService.js";

export default {
  name:'NoteDetails',
  props: [],
  template: `
            <section v-if="note" class="note-details" :class="getHidden" >
           
              <h2>{{ note.info.title }}</h2>
            
              <p contenteditable="true" @blur="save(note)" >
                {{ note.info.txt }}</p>

                <span class="material-symbols-outlined pin"
                        @click="onPinNoteToggle(note)" >push_pin</span>
                
               <span @click="back" class="close-btn">close</span>
               

                <span class="material-symbols-outlined delete" 
                    @click="onRemoveNote(note.id)">delete</span> 
                </section>

        `,
created() {
   const noteId = this.$route.params.noteId 
   noteService.get(noteId)
   .then(note => {
    console.log(note)
    this.note = note})
   
},
  data() {
    return {
      note: null,
      hideDetails: false
    }
  },
  methods: {
    save(ev) {
      console.log(ev);
      console.log(this.note);
      noteService.save(this.note)
         .then(() => {
         console.log(this.note);
          this.$emit('SaveNewTxt' ,this.note) 
    })
    },
    back() {
      this.hideDetails = true
      console.log('back')
      this.$router.push('/note')
    },
    onRemoveNote(noteId) {
      console.log(noteId)
      this.$emit('remove', noteId)
      this.$router.push('/note')
      this.hideDetails = true

    },
    onPinNoteToggle(note) {
      note.isPinned= !note.isPinned
      console.log(note);
    }
  },
  
  computed: {
    getHidden() {
      if(this.hideDetails) return 'hidden'
    }
  },
components:{
},
}
