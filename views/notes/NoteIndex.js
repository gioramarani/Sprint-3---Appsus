import { NoteService } from '../../services/notes/NoteService.js'
// import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'


import NoteList from '../../cmps/notes/NoteList.js'
import NoteAdd from '../../cmps/notes/NoteAdd.js'

export default {
    name: 'NoteIndex',
    props: [],
    template: `
        <section class="note-index">
            <NoteAdd
            @create="saveNewNote"
            />

            <NoteList
            :notes="notes"
            
            />
            
        </section>
        `,
    created() {

        NoteService.getNotesFromService()
            .then(notes => {
            this.notes = notes
            if(!this.notes || !this.notes.length){
            NoteService.query()
            .then(notes => {
                this.notes = notes
           })}})
               
              
            }
        ,
    data() {
        return {
            notes: [],
        }
    },
    methods: {
        saveNewNote(note) {
            // note.info.txt = txt
            // note.type = type
            // console.log(note)
            NoteService.save(note)
                .then(savedNote => {
                    this.notes.push(savedNote)
                    console.log(this.notes)
                })
            // showSuccessMsg('Note saved!')
            //    NoteService.crateNote('NoteTxt', txt)
            //         .then(notes => this.notes = notes)
            //         console.log(this.notes)
        },

    },
    computed: {
        getNotes() {
            return this.notes
        },
    },
    components: {
        NoteList,
        NoteAdd,
    },
}
