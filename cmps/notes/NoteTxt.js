export default {
  name:'NoteTxt',
  props: ['note'],
  template: `

            <article class="note-txt">
                <!-- <pre>{{ note }}</pre> -->
                <h2>{{ note.info.title }}</h2>
                <h4 @click="onEditNote(note.id)">{{ note.info.txt }}</h4>
                <!-- <RouterLink :to="'edit/' + note.id ">{{ note.info.txt }}</RouterLink> -->
                <!-- <h1>{{ note.id }}</h1> --><br/>
                <h6>{{ note.type }}</h6>
            </article>
        `,
created() {},
  data() {
    return {}
  },
  methods: {
  onEditNote(noteId) {
      console.log(noteId)
      this.$router.push('/note/' + noteId)
},
  },
  computed: {},
components:{},
}
