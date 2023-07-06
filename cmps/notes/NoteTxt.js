import NoteDetails from './NoteDetails.js'

export default {
  name:'NoteTxt',
  props: ['note'],
  template: `

            <article class="note-txt">
                <!-- <pre>{{ note }}</pre> -->
                <h2>{{ note.info.title }}</h2>
                <!-- <h4 @click="onEditNote(note.id)">{{ note.info.txt }}</h4> -->
                <RouterLink 
                :to="'/note/' + note.id "
                >
                {{ note.info.txt }}</RouterLink>
                <NoteDetails
                :note="note"
                />

                <h6>{{ note.type }}</h6>
            </article>
        `,
created() {},
  data() {
    return {}
  },
  methods: {
//   onEditNote(noteId) {
//       console.log(noteId)
//       this.$router.push('/note/' + noteId)
// },
  },
  computed: {},
components:{
  NoteDetails,
},
}
