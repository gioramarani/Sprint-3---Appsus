export default {
  name:'NoteTodos',
  props: ['note'],
  template: `

            <section>
                <pre>{{ note }}</pre>
                <h1>{{ note.type }}</h1>
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