import NoteDetails from '/NoteDetails.js'

export default {
  name:'NoteTxt',
  props: ['note'],
  template: `

            <section v-bind:style="{ 'background-color': note.style.backgroundColor }" class="note-txt">
               
                <h2>{{ note.info.title }} </h2>
                <!-- <h4 @click="onEditNote(note.id)">{{ note.info.txt }}</h4> -->
                <p @click="toDetails"> {{ note.info.txt }}</p>

              
                <h6>{{ note.type }}</h6>
                <span class="material-symbols-outlined delete" 
                        @click="onRemoveNote(note.id)">delete</span> 
                        <span class="material-symbols-outlined pin"
                        @click="onPinNoteToggle(note)" >push_pin</span>

                        <a class="material-symbols-outlined colorPicker" @click="onAddColor">format_color_fill</a>
                       <input v-if="(isBackgroundColored)" type="color" v-model="backgroundColor"
                        @input="onBackgroundColor" />

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
//   onEditNote(noteId) {
//       console.log(noteId)
//       this.$router.push('/note/' + noteId)
// },
onAddColor() {
  this.isBackgroundColored = true
},
onRemoveNote(noteId) {
    console.log(noteId)
    this.$emit('remove', noteId)
},
onPinNoteToggle(note) {
  note.isPinned= !note.isPinned
  console.log(note);
},
onBackgroundColor() {
  this.note.style.backgroundColor = this.backgroundColor
  console.log(this.note);
},
toDetails() {
  console.log('open details')
  this.$router.push('/note/' + this.note.id)
  
},
fromDetails() {
  console.log('close')
},
editTxt(newTxt){
  console.log(this.note);
  console.log(newTxt);
  this.note.info.txt = newTxt
  console.log(this.note);

},

  },
  computed: {
   
  },
components:{
  NoteDetails,
},
}
