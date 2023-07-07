// import NoteIndex from "../views/notes/NoteIndex.js"

import { NoteService } from "../../services/notes/NoteService.js";

export default {
  name:'NoteDetails',
  props: ['note'],
  template: `
            <section class="note-details" v-if="(!hideDetails)" >
              <section class="title-container">
              <h2>{{ note }}</h2>
              </section>
              <p contenteditable="true" @blur="save(note)" >
                {{ note }}</p>
                
                <section class="close-btn">
               <RouterLink to="/note"
                @click="back">close</RouterLink>
                </section>

                <span class="material-symbols-outlined" 
                    @click="onRemoveNote(note.id)">delete</span> 
                </section>

        `,
created() {},
  data() {
    return {
      hideDetails: false,
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
      this.hideDetails= true
      // this.$emit('close')
    }
  },
  computed: {},
components:{
      // NoteIndex,
},
}
