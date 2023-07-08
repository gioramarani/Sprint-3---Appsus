export default {
    name: 'NoteImg',
    props: ['note'],
    template: `

            <section v-bind:style="{ 'background-color': note.style.backgroundColor }" class="note-img">
                <h1 >Type: {{ note.type }}</h1>
                <h1>Title: {{ note.info.title }}</h1>
                <img :src="note.info.url" alt="" />

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
    created() { },
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
    components: {},
}
