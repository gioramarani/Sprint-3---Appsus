export default {
  name:'NoteDetails',
  props: [],
  template: `
            <section class="note-details">
              <h2>Hello</h2>
                <RouterLink :to="/note">x</RouterLink>
                <button @click="onClose">x</button>
                </section>
        `,
created() {},
  data() {
    return {}
  },
  methods: {
    onClose() {
      this.$routes = '/note/'
    }
  },
  computed: {},
components:{},
}
