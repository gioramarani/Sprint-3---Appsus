export default {
  name:'NoteSideBar',
  props: [],
  template: `
  <div class="note-sidebar">

        <section class="notes"> <span class="material-symbols-outlined">lightbulb</span>Notes </section>
        <section class="reminders"> <span class="material-symbols-outlined">notifications</span>Reminders </section>
        <section class="archive"> <span class="material-symbols-outlined">archive</span>Archive </section>
        <section class="delete"> <span class="material-symbols-outlined">delete</span>Bin </section>
    </div>
        `,
created() {},
  data() {
    return {}
  },
  methods: {},
  computed: {},
components:{},
}
