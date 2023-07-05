export default {
  name:'NoteAdd',
  props: [],
  template: `
            <form  @submit="onCreate" >
                <input type="text"
                placeholder="Take a note..." v-model="txt"/>
                <button>Make Note</button>
                </form>
        `,
created() {},
  data() {
    return {
      txt: '',
    }
  },
  methods: {
    onCreate(){
      this.$emit('create', this.txt)
      console.log(this.txt)

    }
  },
  computed: {},
components:{},
}
