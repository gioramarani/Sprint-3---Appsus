export default {
  name:'NoteSearch',
  props: [],
  template: `
            <form class="note-search" @submit="">
                <input type="text" placeholder="Search" @click="onFilterBy" />
                <span class="material-symbols-outlined">
                search
                </span>
            </form>

            <article v-if="(filterByModal)" class="filter-by-modal">
                <h2>Types</h2>
                <button @click="filterBy(Txt)">
                <span class="material-symbols-outlined">article</span>Text Notes</button>
                
                <button @click="filterBy(Todo)">
                <span class="material-symbols-outlined">edit_note</span> Todo Lists</button>
                
                <button @click="filterBy(Img)">
                <span class="material-symbols-outlined">image</span>  Images</button>
                
                <button @click="filterBy(Video)">
                <span class="material-symbols-outlined">play_circle</span>Videos</button>

            </article>
        `,
created() {},
  data() {
    return {
        filterByModal: false,
    }
  },
  methods: {
        onFilterBy() {
            this.filterByModal= !this.filterByModal
        },
        filterBy(type) {
            this.$emit('filter', type)
        }
  },
  computed: {},
components:{},
}
