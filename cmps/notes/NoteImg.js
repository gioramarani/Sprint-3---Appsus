export default {
    name: 'NoteImg',
    props: ['note'],
    template: `

            <section class="note-img">
                <h1>Type: {{ note.type }}</h1>
                <h1>Title: {{ note.info.title }}</h1>
                <img :src="note.info.url" alt="" />
            </section>
        `,
    created() { },
    data() {
        return {}
    },
    methods: {},
    computed: {},
    components: {},
}
