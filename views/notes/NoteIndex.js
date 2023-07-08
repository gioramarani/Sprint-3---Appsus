import { noteService } from '../../services/notes/noteService.js'
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
            @filter="setFilterBy"
            />
            <NoteAdd
            @create="saveNewNote"
            />

            <NoteList
            :notes="filteredNotes"
            @remove="removeNote"
            />

            <RouterView></RouterView>
            
        </section>
        `,
    created() {
            noteService.query()
            .then(notes => {
                this.notes = notes
           })
            }
        ,
    data() {
        return {
            notes: [],
            filterBy: {},
        }
    },
    methods: {
        saveNewNote(note) {
            // note.info.txt = txt
            // note.type = type
            // console.log(note)
            noteService.save(note)
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
            noteService.remove(noteId)
                .then(() => {
                    const idx = this.notes.findIndex(note => note.id === noteId)
                    this.notes.splice(idx, 1)
                    showSuccessMsg('Note removed')
                })
                .catch(err => {
                    console.log(noteId)
                    // NoteService.removeFromHardCodedList(noteId)
                    const idx = this.notes.findIndex(note => note.id === noteId)
                    this.notes.splice(idx, 1)
                })
        },
        setFilterBy(filterBy) {
            console.log(filterBy);
            this.filterBy = filterBy
        },
    },
    computed: {
        getNotes() {
            return this.notes
        },
        filteredNotes() {
            var filteredNotes = this.notes
            const regex = new RegExp(this.filterBy.txt, 'i')
            filteredNotes = filteredNotes.filter(note => regex.test(note.info.title))

            if(this.filterBy.type){
            filteredNotes = filteredNotes.filter(note => note.type === this.filterBy.type)
            }
            // if(this.filterBy.isPinned){
            //     filteredNotes = filteredNotes.filter(note => note.isPinned === this.filterBy.isPinned)
            // }

            return filteredNotes 
        }
    },
    components: {
        NoteList,
        NoteAdd,
        NoteSideBar,
        NoteFilter,
    },
}
