import { NoteService } from '../../services/notes/NoteService.js'

import NotePreview from '../../cmps/notes/NotePreview.js'

export default {
    name: 'NoteIndex',
    props: [],
    template: `
        <section class="note-index">

            <NotePreview
            
            :notes="notes"
            @create="createNote"
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
        createNote() {
            const newNote = NoteService.getEmptyNote('', 'NoteTxt', '')
            console.log(newNote)
            this.notes.push(newNote)
            console.log(this.notes)
            return newNote

        }
    },
    computed: {},
    components: {
        NotePreview,

    },
}
