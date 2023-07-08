import NoteDetails from '/NoteDetails.js'

export default {
  name:'NoteTodos',
  props: ['note'],
  template: `

            <section v-bind:style="{ 'background-color': note.style.backgroundColor }" class="note-todos">
              <h2>{{ note.info.title }}</h2>
              <ul >
                <li v-for="line in lines" class="todo-input" @click="toDetails">
                {{ note.info.todos[lineNum].txt }}
                <!-- <span v-if="(lines[0].txt)" @click="addTodoLine"
                   class="material-symbols-outlined add-todo-line">add</span> -->
              </li>
              </ul>
              <!-- <h4 v-for="line in lines" v-model="todoTxt"
              class="todo-input">{{ note.info.todos[lineNum].txt }}</h4> -->
              
              
              <!-- <span v-if="(todoTxt)" class="material-symbols-outlined add">add</span> -->
              <!-- <h4>{{ note.info.todos[0].txt }}</h4> -->
              <h5>{{ note.type }}</h5>

              <span class="material-symbols-outlined delete" 
                        @click="onRemoveNote(note.id)">delete</span> 
                        <span class="material-symbols-outlined pin"
                        @click="onPinNoteToggle(note)" >push_pin</span>

                        <a class="material-symbols-outlined colorPicker" @click="onAddColor">format_color_fill</a>
                       <input v-if="(isBackgroundColored)" type="color" v-model="backgroundColor"
                        @input="onBackgroundColor" />

                        <!-- <span class="material-symbols-outlined img"
                        @click="onAttachImg(note.id)">image</span> -->
            </section>
        `,
created() {},
  data() {
    return {
      lines: this.note.info.todos,
      lineNum: 0,
      todoTxt: '',
      isBackgroundColored: false,
      backgroundColor: '',
    }
  },
  methods: {
    onAddColor() {
      this.isBackgroundColored = true
    },
    onRemoveNote(noteId) {
        console.log(noteId)
        this.$emit('remove', noteId)
    },
    onPinNoteToggle(note) {
      note.isPinned= !note.isPinned
      console.log(note);
    },
    onBackgroundColor() {
      this.note.style.backgroundColor = this.backgroundColor
      console.log(this.note);
    },
    lineCount() {
      return this.lines.length 
     },
     toDetails() {
      console.log('open details')
      this.$router.push('/note/' + this.note.id)
    },
     addTodoLine(){
      this.todoLines.push({txt: '', doneAt: null})
    },
  },
  computed: {
    lineDecrease() {
      this.lineNum = this.lines.length
    }
  },
components:{
  NoteDetails
},
}
