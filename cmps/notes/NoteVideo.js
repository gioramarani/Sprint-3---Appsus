export default {
  name:'NoteVideo',
  props: ['note'],
  template: `

            <section v-bind:style="{ 'background-color': note.style.backgroundColor }" class="note-video">
              <h1>{{ note.type }}</h1>
              <pre>{{ note.info.title }}</pre>

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
  },
  computed: {},
components:{},
}
