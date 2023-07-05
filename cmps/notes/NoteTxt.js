export default {
  name:'NoteTxt',
  props: ['note'],
  template: `

            <section class="note-txt">
                <!-- <pre>{{ note }}</pre> -->
                <h1>{{ note.type }}</h1>
                <!-- <h1>{{ note.id }}</h1> -->
                <h1>{{ note.info.txt }}</h1>

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
