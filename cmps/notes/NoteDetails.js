// import NoteIndex from "../views/notes/NoteIndex.js"

import { NoteService } from "../../services/notes/NoteService.js";

export default {
  name:'NoteDetails',
  props: ['note'],
  template: `
            <section class="note-details" :class="getHidden" >
              
              <h2>{{ note.info.title }}</h2>
            
              <!-- <p contenteditable="true" @blur="save(note)" >
                {{ note }}</p> -->
                
               <span @click="back" class="close-btn">close</span>

                <!-- <span class="material-symbols-outlined" 
                    @click="onRemoveNote(note.id)">delete</span>  -->
                </section>

        `,
created() {},
  data() {
    return {
      hideDetails: false,
    }
  },
  methods: {
    showPopup() {
      this.hideDetails = false
    },
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
      this.hideDetails= true
      this.$router.push('/note')
      this.$emit('close')
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
