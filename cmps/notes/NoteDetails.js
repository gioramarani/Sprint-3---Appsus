// import NoteIndex from "../views/notes/NoteIndex.js"

export default {
  name:'NoteDetails',
  props: ['note'],
  template: `
            <section class="note-details">
              <h2>{{ note.info.title }}</h2>
              
              <p contenteditable="true" @blur="save" >{{ note.info.txt }}</p>
                <!-- <RouterLink :to="/note">x</RouterLink> -->
                <button @click="onClose">x</button>
              
               <!-- <RouterLink 
                :to="/note"
                >
                x</RouterLink> -->

                <!-- <NoteIndex/> -->
                </section>
        `,
created() {},
  data() {
    return {}
  },
  methods: {
    onClose() {
      console.log('close')
      this.$routes = '/note'
    },
    save() {
      this.note.info.txt 
    }
  },
  computed: {},
components:{
      // NoteIndex,
},
}
