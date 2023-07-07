import NoteDetails from './NoteDetails.js'

export default {
  name:'NoteTxt',
  props: ['note'],
  template: `

            <article class="note-txt" :style="{color: note.style.backgroundColor}">
                <!-- <pre>{{ note }}</pre> -->
                <h2>{{ note.info.title }}</h2>
                <!-- <h4 @click="onEditNote(note.id)">{{ note.info.txt }}</h4> -->
                <p @click="toDetails(note.id)"> {{ note.info.txt }}</p>

                <NoteDetails
                :note="note"
                @close="fromDetails"
                @SaveNewTxt="editTxt"
                />

                <h6>{{ note.type }}</h6>
            </article>
        `,
created() {},
  data() {
    return {
      // isToDetails: false,
      
    }
  },
  methods: {
//   onEditNote(noteId) {
//       console.log(noteId)
//       this.$router.push('/note/' + noteId)
// },
toDetails(noteId) {
  this.$router.push('/note/' + noteId)
  // this.isToDetails= true

},
fromDetails() {
  console.log('close')
  // this.isToDetails= false
},
editTxt(newTxt){
  console.log(this.note);
  console.log(newTxt);
  this.note.info.txt = newTxt
  console.log(this.note);

}
  },
  computed: {},
components:{
  NoteDetails,
},
}
