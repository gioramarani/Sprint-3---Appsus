export default {
  name:'NoteTxt',
  props: ['note'],
  template: `

            <section>
                <pre>{{ note }}</pre>
                <h1>{{ note.type }}</h1>

                <button></button>
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
