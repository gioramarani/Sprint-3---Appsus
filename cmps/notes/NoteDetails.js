// import NoteIndex from "../views/notes/NoteIndex.js"

import { NoteService } from "../../services/notes/NoteService.js";

export default {
  name:'NoteDetails',
  props: [],
  template: `
            <section v-if="note" class="note-details"  >
           
              <h2>{{ note.info.title }}</h2>
            
              <p contenteditable="true" @blur="save(note)" >
                {{ note.info.txt }}</p>

                <span class="material-symbols-outlined pin"
                        @click="onPinNote(note.id)" >push_pin</span>
                
               <span @click="back" class="close-btn">close</span>
               

                <span class="material-symbols-outlined delete" 
                    @click="onRemoveNote(note.id)">delete</span> 
                </section>

        `,
created() {
   const noteId = this.$route.params.noteId 
   NoteService.get(noteId)
   .then(note => {
    console.log(note)
    this.note = note})
   
},
  data() {
    return {
      // hideDetails: false,
      note: null
    }
  },
  methods: {
    save(ev) {
      console.log(ev);
      console.log(this.note);
      NoteService.save(this.note)
         .then(() => {
         console.log(this.note);
          this.$emit('SaveNewTxt' ,this.note) 
    })
    },
    back() {
      console.log('back')
      // this.hideDetails= true
      this.$router.push('/note')
      // this.$emit('close')
    }
  },
  computed: {
    getHidden() {
      if(this.hideDetails) return 'hidden'
    }
  },
components:{
      // NoteIndex,
},
}
