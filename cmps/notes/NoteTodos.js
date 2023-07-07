export default {
  name:'NoteTodos',
  props: ['note'],
  template: `

            <section class="note-todos">
              <h2>{{ note.info.title }}</h2>
              <ul >
                <li v-for="line in lines" v-model="todoTxt" class="todo-input">
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
            </section>
        `,
created() {},
  data() {
    return {
      lines: this.note.info.todos,
      lineNum: 0,
      todoTxt: ''
    }
  },
  methods: {
    lineCount() {
      return this.lines.length
      
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
components:{},
}
