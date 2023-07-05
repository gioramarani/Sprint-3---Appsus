export default {
  name:'NoteTodos',
  props: ['note'],
  template: `

            <section class="note-todos">
              <h1>{{ note.type }}</h1>
                <pre>{{ note.info.title }}</pre>
                <pre>{{ note.info.todos.txt }}</pre>
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
