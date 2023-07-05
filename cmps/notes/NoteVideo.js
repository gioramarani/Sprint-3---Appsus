export default {
  name:'NoteVideo',
  props: ['note'],
  template: `

            <section class="note-video">
              <h1>{{ note.type }}</h1>
              <pre>{{ note.info.title }}</pre>
            </section>
        `,
created() {},
  data() {
    return {}
  },
  methods: {},
  computed: {},
components:{},
}
