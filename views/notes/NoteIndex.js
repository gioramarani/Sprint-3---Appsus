import { NoteService } from '../../services/notes/NoteService.js'

import NoteList from '../../cmps/notes/NoteList.js'
import NoteAdd from '../../cmps/notes/NoteAdd.js'

export default {
    name: 'NoteIndex',
    props: [],
    template: `
        <section class="note-index">
            <NoteAdd
            @create="createNewNote"
            />

            <NoteList
            :notes="getNotes"
            
            />
            
        </section>
        `,
    created() {
        NoteService.getNotesFromService()
            .then(notes => { 
                this.notes = notes
                 console.log(this.notes)})

    },
    data() {
        return {
            notes: [],
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
    computed: {
            getNotes() {
                return this.notes
            }
    },
    components: {
        NoteList,
        NoteAdd,
    },
}
