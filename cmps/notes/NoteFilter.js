export default {
  name:'NoteFilter',
  props: ['notes'],
  template: `
            <form class="note-filter" >
                <input type="text" placeholder="Search" @click="onFilterBy" />
                <span class="material-symbols-outlined">
                search
                </span>
            </form>
            <!-- Put this form in the header and make on click- to send to this component -->
            <!-- then the filter option types are not a modal, and are the page -->
            <article v-if="(filterByModal)" class="filter-by-modal">
                <h2>Types</h2>
                <button @click="filterBy(notes,'Txt')">
                <span class="material-symbols-outlined">article</span>Text Notes</button>
                
                <button @click="filterBy(notes,'Todos')">
                <span class="material-symbols-outlined">edit_note</span>Todo Lists</button>
                
                <button @click="filterBy(notes,'Img')">
                <span class="material-symbols-outlined">image</span>Images</button>
                
                <button @click="filterBy(notes,'Video')">
                <span class="material-symbols-outlined">play_circle</span>Videos</button>

            </article>
        `,
created() {},
  data() {
    return {
        filterByModal: false,
        filteredNotes: [],
    }
  },
  methods: {
        onFilterBy() {
            this.filterByModal= !this.filterByModal
        },
        filterBy(unFilteredNotes ,type) {
            console.log(unFilteredNotes)
            console.log(type)
            this.filteredNotes = unFilteredNotes.filter(note => note.type === `Note${type}`)
            console.log(this.filteredNotes)
        }
  },
  computed: {},
components:{},
}
