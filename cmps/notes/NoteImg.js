export default {
    name: 'NoteImg',
    props: ['note'],
    template: `

            <section class="note-img">
                <h1>{{ note.type }}</h1>
                <h1>{{ note.info.title }}</h1>
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
