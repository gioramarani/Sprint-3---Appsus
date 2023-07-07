import { NoteService } from '../../services/notes/NoteService.js'
// import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'



import NoteList from './NoteList.js'
import NoteAdd from '../../cmps/notes/NoteAdd.js'
import NoteSideBar from '../../cmps/notes/NoteSideBar.js'
import NoteFilter from '../../cmps/notes/NoteFilter.js'
import { showErrorMsg, showSuccessMsg } from '../../services/event-bus.service.js'

export default {
    name: 'NoteIndex',
    props: [],
    template: `
        <section class="note-index">
            <NoteSideBar/>
            <NoteFilter
            :notes="notes"
            
            />
            <NoteAdd
            @create="saveNewNote"
            />

            <NoteList
            :notes="notes"
            @remove="removeNote"
            />

            <RouterView></RouterView>
            
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
        removeNote(noteId) {
            NoteService.remove(noteId)
                .then(() => {
                    const idx = this.notes.findIndex(note => note.id === noteId)
                    this.notes.splice(idx, 1)
                    showSuccessMsg('Nore removed')
                })
                .catch(err => {
                    console.log(noteId)
                    // NoteService.removeFromHardCodedList(noteId)
                    const idx = this.notes.findIndex(note => note.id === noteId)
                    this.notes.splice(idx, 1)
                })
        },
        filterNotesBy(type) {
            console.log(type)
            // return this.notes.filter(note => note.type === type)
        }
    },
    computed: {
        getNotes() {
            return this.notes
        },
    },
    components: {
        NoteList,
        NoteAdd,
        NoteSideBar,
        NoteFilter,
    },
}
