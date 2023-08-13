export default {
  name:'NoteFilter',
  props: ['notes'],
  template: `
            <form class="note-filter" >
                <input v-model="filterBy.txt" type="text" placeholder="Search"
                @input="onSetFilterBy" @click="onFilterBy" />
                <span class="material-symbols-outlined search-btn">
                search
                </span>
            </form>
            <!-- Put this form in the header and make on click- to send to this component -->
            <!-- then the filter option types are not a modal, and are the page -->
            <article v-if="(filterByModal)" class="filter-by-modal">
                <h2>Types</h2>
                <button @click="filterByType('Txt')">
                <span class="material-symbols-outlined">article</span>Text Notes</button>
                
                <button @click="filterByType('Todos')">
                <span class="material-symbols-outlined">edit_note</span>Todo Lists</button>
                
                <button @click="filterByType('Img')">
                <span class="material-symbols-outlined">image</span>Images</button>
                
                <button @click="filterByType('Video')">
                <span class="material-symbols-outlined">play_circle</span>Videos</button>

            </article>
        `,
created() {},
  data() {
    return {
        filterByModal: false,
        filteredNotes: [],
        filterBy: {
            txt: '',
            type: ''
        }
    }
  },
  methods: {
        onFilterBy() {
            this.filterByModal= !this.filterByModal
        },
        // filterBy(unFilteredNotes ,type) {
        //     console.log(unFilteredNotes)
        //     console.log(type)
        //     this.filteredNotes = unFilteredNotes.filter(note => note.type === `Note${type}`)
        //     console.log(this.filteredNotes)
        // },
        filterByType(type) {
            this.filterBy.type = type
        },
        onSetFilterBy() {
            this.$emit('filter', this.filterBy)
        }
  },
  computed: {},
components:{},
}
