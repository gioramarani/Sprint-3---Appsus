import { labelService } from "../../services/gmail/label.service.js"
import { utilService } from "../../services/util.service.js"

export default {
  name: 'MailSideBar',
  props: ['mail'],
  template: `
      <div class="mail-sidebar">
        <section class="filters">
          <div class="compose" @click="composeEmail"><div class="material-symbols-outlined">
              edit
              </div >Compose</div>
              <div class="mail-sidebar">
          <div
            class="icon inbox"
            :class="{ active: selectedFilter === 'inbox' }"
            @click="selectFilter('inbox')"
          >
            <span class="material-symbols-outlined">inbox</span>Inbox
          </div>
          <div
            class="icon starred"
            :class="{ active: selectedFilter === 'starred' }"
            @click="selectFilter('starred')"
          >
            <span class="material-symbols-outlined">star</span>Starred
          </div>
          <div
            class="icon send"
            :class="{ active: selectedFilter === 'sent' }"
            @click="selectFilter('sent')"
          >
            <span class="material-symbols-outlined">send</span>Sent
          </div>
          <div
            class="icon draft"
            :class="{ active: selectedFilter === 'draft' }"
            @click="selectFilter('draft')"
          >
            <span class="material-symbols-outlined">draft</span>Draft
          </div>
          <div
            class="icon delete"
            :class="{ active: selectedFilter === 'trash' }"
            @click="selectFilter('trash')"
          >
            <span class="material-symbols-outlined">delete</span>Thrash
          </div>
        </div>
      </section>
      <section class="labels">
          <div class="add-label">       
            <h3>Labels</h3>
            <span  
            @click="addLabel" class="material-symbols-outlined">add</span>
          </div>
            <div v-if="isAddingLabel">
              <input 
              type="text" 
              v-model="newLabel"       placeholder="Enter label name">
            <button 
              @click="saveLabel">
                Save
            </button>
            </div>
 
            <div 
            v-for="label in labels" 
            :key="label.id" 
            class="label-div"
            :style="{ backgroundColor: labelBackgroundColor(label) }">
        <span class="material-symbols-outlined">Label</span>{{ label.label }}
        <span class="material-symbols-outlined label-options" @click="showLabelOptions(label)">
          more_vert
        </span>
        <div v-if="showOptions === label.id" class="options-modal">
          <div class="color-options">
            <div
              v-for="color in pastelColors"
              :key="color"
              class="color-option"
              :style="{ backgroundColor: color }"
              @click="handleColorSelection(label, color)"
            ></div>
          </div>
          <button @click="removeLabel(label)">Remove Label</button>
        </div>
      </div>
    </section>
    </div>
      `,
  data() {
    return {
      selectedFilter: 'inbox',
      selectedLabel: '',
      isAddingLabel: false,
      labels: [],
      newLabel: '',
      showOptions: null,
      pastelColors: ['#FFD3C6', '#D4E8E2', '#FFEDB5', '#E8D3F0', '#FFDFE7', '#D4F0E8', '#F0D4D4', '#E2E8D4', '#FFE8D4', '#E8FFD4']
    }
  },
  created() {
    labelService.query()
      .then(labels => {
        this.labels = labels
      })

  },
  computed: {
    labelBackgroundColor() {
      return function (label) {
        return label.backgroundColor
      }
    }
  },
  methods: {
    composeEmail() {
      this.$emit('open-compose-modal')
    },
    selectFilter(filter) {
      this.selectedFilter = filter
      this.$emit('filter-change', filter)
    },
    selectLabel(label) {
      this.selectedLabel = label
      this.$emit('label-change', label)
    },
    addLabel() {
      this.isAddingLabel = true
    },
    saveLabel() {
      if (this.newLabel) {
        const label = { label: this.newLabel }
        labelService
          .save(label)
          .then(() => {
            this.newLabel = ''
            this.isAddingLabel = false
            this.labels.push(label)
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    removeLabel(label) {
      labelService
        .remove(label.id)
        .then(() => {
          const index = this.labels.findIndex(l => l.id === label.id)
          if (index !== -1) {
            this.labels.splice(index, 1)
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    showLabelOptions(label) {
      if (this.showOptions === label.id) {
        this.showOptions = null
      } else {
        this.showOptions = label.id
      }
    },
    pickBackgroundColor(color) {
      this.selectedLabel.backgroundColor = color
    },
    handleColorSelection(label, color) {
      label.backgroundColor = color
      labelService.save(label)
        .catch(error => console.log(error))
    }

  }
}
