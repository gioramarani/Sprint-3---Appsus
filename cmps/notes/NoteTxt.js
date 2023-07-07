import NoteDetails from './NoteDetails.js'
//:style="{color: note.style.backgroundColor}"
export default {
  name:'NoteTxt',
  props: ['note'],
  template: `

            <section class="note-txt" :class="getBlur" >
               
                <h2>{{ note.info.title }} I am one freaking buggg ~~</h2>
                <!-- <h4 @click="onEditNote(note.id)">{{ note.info.txt }}</h4> -->
                <p @click="toDetails(note.id)"> {{ note.info.txt }}</p>

                <NoteDetails
                v-if="(isToDetails)"
                :note="note"
                @close="fromDetails"
                @SaveNewTxt="editTxt"
                />

                <h6>{{ note.type }}</h6>
            </section>
        `,
created() {},
  data() {
    return {
      isToDetails: false,
      isBlur: true
    }
  },
  methods: {
//   onEditNote(noteId) {
//       console.log(noteId)
//       this.$router.push('/note/' + noteId)
// },
toDetails(noteId) {
  this.isBlur = true
  this.$router.push('/note/' + noteId)
  this.isToDetails= true

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

},

  },
  computed: {
    getBlur() {
      if(this.isBlur) return 'blur'
    },
  },
components:{
  NoteDetails,
},
}
