export default {
  name: 'MailSideBar',
  props: ['mail'],
  template: `
      <div class="mail-sidebar">
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
      </div>
      `,
  data() {
    return {
      selectedFilter: '',
    }
  },
  computed: {
  },
  methods: {
    composeEmail() {
      this.$emit('open-compose-modal')
    },
    selectFilter(filter) {
      this.selectedFilter = filter
      this.$emit('filter-change', filter)
    },

  }
}