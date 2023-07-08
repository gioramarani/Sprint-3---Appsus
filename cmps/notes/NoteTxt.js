import NoteDetails from './NoteDetails.js'
//:style="{color: note.style.backgroundColor}"
export default {
  name:'NoteTxt',
  props: ['note'],
  template: `

            <section class="note-txt">
               
                <h2>{{ note.info.title }} </h2>
                <!-- <h4 @click="onEditNote(note.id)">{{ note.info.txt }}</h4> -->
                <p @click="toDetails"> {{ note.info.txt }}</p>

              
                <h6>{{ note.type }}</h6>
            </section>
        `,
created() {},
  data() {
    return {
   
    }
  },
  methods: {
//   onEditNote(noteId) {
//       console.log(noteId)
//       this.$router.push('/note/' + noteId)
// },
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
