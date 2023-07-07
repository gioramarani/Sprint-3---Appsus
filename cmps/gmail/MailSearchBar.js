export default {
    name: 'MailSearchBar',
    props: ['mails'],
    template: `
        <div class="search-bar">
            <input
            type="text"
            v-model="searchQuery"
            @input="search"
            placeholder="Search mail..."
            />
        </div>
    `,
    data() {
        return {
            searchQuery: '',
            searchResults: [],
        }
    },
    computed: {
    },
    methods: {
        search() {
            if (this.searchQuery.trim() === '') {
                this.searchResults = []
                this.$emit('search', this.searchResults)
                return
            }
            this.searchResults = this.mails.filter(mail =>
                mail.subject.toLowerCase().includes(this.searchQuery.toLowerCase())
            )
            console.log('this.searchResults', this.searchResults)
            this.$emit('search', this.searchResults)
        },
    },
}
