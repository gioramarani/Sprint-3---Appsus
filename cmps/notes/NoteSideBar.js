export default {
  name:'NoteSideBar',
  props: [],
  template: `
  <div class="note-sidebar">

        <section class="notes" :class="marked" @click="toggle(notes)"> <span class="material-symbols-outlined notes">lightbulb</span>Notes </section>
        <section class="reminders" :class="marked" @click="toggle(reminders)"> <span class="material-symbols-outlined">notifications</span>Reminders </section>
        <section class="archive" :class="marked" @click="toggle(archive)"> <span class="material-symbols-outlined">archive</span>Archive </section>
        <section class="delete" :class="marked" @click="toggle(delet)"> <span class="material-symbols-outlined">delete</span>Bin </section>
    </div>
        `,
created() {},
  data() {
    return {
      notes: false,
      reminders: false,
      archive: false,
      delete: false,
    }
  },
  methods: {
   
      toggle() {
        this.sideBar = !this.sideBar
        console.log(this.sideBar)
      }
  },
  computed: {
    marked(){
      if(this.notes) return 'clicked'
      if(this.reminders) return 'clicked'
      if(this.archive) return 'clicked'
      if(this.delete) return 'clicked'
    },
  },
components:{},
}
