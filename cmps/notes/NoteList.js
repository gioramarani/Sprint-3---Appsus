import NotePreview from './NotePreview.js'


export default {
  name:'NoteList',
  props: ['notes'],
  template: `

            <section>
                <ul  class="note-list">
                    <li v-for="note in notes" :key="note.id">
                    <NotePreview 
                    :note="note"
                    />
                    <span class="material-symbols-outlined" 
                    @click="onRemoveNote(note.id)">delete</span> 
                    <span class="material-symbols-outlined"
                    @click="onEditNote(note.id)">edit</span>
                    </li>
                </ul>
            </section>
        `,
created() {
  
},
  data() {
    return {}
  },
  methods: {},
  computed: {},
components:{
    NotePreview,
},
}
