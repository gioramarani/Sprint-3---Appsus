import { NoteService } from '../../services/notes/NoteService.js'

import NotePreview from '../../cmps/notes/NotePreview.js'

export default {
    name: 'NoteIndex',
    props: [],
    template: `
        <section class="note-index">

            <NotePreview
            
            :notes="notes"
            @create="createNewNote"
            />
            
        </section>
        `,
    created() {
        // this.notes = NoteService.getNotesFromService()
        // console.log(this.notes)

        // NoteService.query()
        //     .then(notes => this.notes = notes)
        //     console.log({...this.notes})

        NoteService.getNotesFromService()
            .then(notes => { 
                this.notes = notes
                 console.log(this.notes)})

    },
    data() {
        return {
            notes: []
        }
    },
    methods: {
        createNewNote(txt) {
            const newNote = NoteService.crateNote('NoteTxt', txt)
            console.log(newNote)
            console.log(this.notes)
            return newNote
        }
    },
    computed: {},
    components: {
        NotePreview,

    },
}
