export default {
  name:'NoteTxt',
  props: ['note'],
  template: `

            <article class="note-txt">
                <!-- <pre>{{ note }}</pre> -->
                <h2>{{ note.info.title }}</h2>
                <h4>{{ note.info.txt }}</h4>
                <!-- <h1>{{ note.id }}</h1> --><br/>
                <h6>{{ note.type }}</h6>
            </article>
        `,
created() {},
  data() {
    return {}
  },
  methods: {},
  computed: {},
components:{},
}
