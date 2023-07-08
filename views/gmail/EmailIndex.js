import { emailService } from "../../services/gmail/email.service.js"
import MailList from "../../cmps/gmail/MailList.js"
import MailSideBar from "../../cmps/gmail/MailSideBar.js"
import MailComposeModal from "../../cmps/gmail/MailComposeModal.js"
import MailSearchBar from "../../cmps/gmail/MailSearchBar.js"
import EmailDetails from "./EmailDetails.js"
import { utilService } from "../../services/util.service.js"

export default {
  name: 'EmailIndex',
  props: [],
  components: {
    MailList,
    MailSideBar,
    MailComposeModal,
    MailSearchBar,
    EmailDetails
  },
  template: `
          <MailSearchBar 
          :mails="filteredMails"
          @search="search"/>
          <section class="mail-index">
          <MailSideBar 
          @open-compose-modal="composeEmail"
          @filter-change="handleFilterChange"
          @label-change="handleLabelChange"/>
          <MailList 
          :mails = "displayMails"
          @update="update" 
          v-if="$route.name === 'email'"
          @remove="removeMail"
          @starred="starredMail"/>
          <RouterView v-else :mails="mails"/>
          <MailComposeModal
            v-if="showComposeModal"
            @close-compose-modal="showComposeModal = false"
            @open-compose-modal="composeEmail"

          />
        </section>
        `,
  created() {
    emailService.query()
      .then(mails => {
        this.mails = mails
      })
  },
  data() {
    return {
      mails: [],
      showComposeModal: false,
      gFilterBy: {
        txt: "",
        status: "inbox",
      },
      gLabel: '',
      loggedinUser: {
        email: 'gaash@gmail.com',
        fullname: 'Gaash Shmilovich',
      },
      searchResults: [],
    }
  },
  methods: {

    update(mailId) {
      const mail = this.mails.find(mail => mail.id === mailId)
      mail.isRead = true
      emailService.save(mail)
        .then(mail => this.mail = mail)
      // this.$router.push({ name: 'EmailDetails', params: { mailId } })
    },
    composeEmail() {
      console.log('compose')
      const newMail = emailService.getEmptyMail()
      emailService.save(newMail)
        .then(savedMail => {
          this.showComposeModal = true
          this.$router.push({ name: 'email', query: { compose: savedMail.id } })
        })
        .catch(error => {
          console.log('Failed to save new mail:', error)
        })
    },
    closeComposeModal() {
      this.showComposeModal = false
    },
    removeMail(mailId) {
      const mailIdx = this.mails.findIndex(mail => mail.id === mailId)
      const mail = this.mails.find(mail => mail.id === mailId)
      const currTime = new Date()
      mail.removedAt = utilService.formatDate(currTime)

      if (this.gFilterBy.status === 'trash') {
        emailService.remove(mailId)
          .then(() => {
            this.mails.splice(mailIdx, 1)
          })
          .catch(error => {
            console.log('error', error)
          })
      }
      else
        emailService.save(mail)
          .then(() => {
            console.log('mailIdx', mailIdx)
          })
          .catch(error => {
            console.log('Failed to remove mail:', error)
          })
    },
    starredMail(mailId) {
      const mailIdx = this.mails.findIndex(mail => mail.id === mailId)
      const mail = this.mails.find(mail => mail.id === mailId)
      mail.isStarred = !mail.isStarred
      console.log('mailId', mailId)
      emailService.save(mail)
        .catch(error => {
          console.log('Failed to remove mail:', error)
        })
    },
    filterMails() {
      let filteredMails = this.mails
      console.log('this.mails', this.mails)

      if (this.gFilterBy.txt) {
        const regex = new RegExp(this.gFilterBy.txt, "i")
        filteredMails = filteredMails.filter(
          (mail) =>
            regex.test(mail.subject) || regex.test(mail.body)
        )
      }

      if (this.gFilterBy.status) {
        switch (this.gFilterBy.status) {
          case "inbox":
            filteredMails = filteredMails.filter(
              (mail) =>
                mail.to === this.loggedinUser.email && mail.removedAt === null
            )
            break
          case "starred":
            filteredMails = filteredMails.filter(
              (mail) => mail.isStarred === true
            )
            break
          case "sent":
            filteredMails = filteredMails.filter(
              (mail) =>
                mail.isSent === true && mail.sentAt !== null
            )
            break
          case "trash":
            filteredMails = filteredMails.filter(
              (mail) => mail.removedAt !== null
            )
            break
          case "draft":
            filteredMails = filteredMails.filter(
              (mail) =>
                mail.sentAt !== null && mail.isSent === false && mail.from === this.loggedinUser.fullname
            )
            break
        }
      }
      console.log('filteredMails', filteredMails)
      return filteredMails
    },
    handleFilterChange(filter) {
      this.gFilterBy.status = filter
      console.log('Selected filter:', filter)
    },
    handleLabelChange(label) {
      this.gLabel = label
    },
    search(searchResults) {
      this.searchResults = searchResults
    },
  },
  computed: {
    filteredMails() {
      return this.filterMails()
    },
    displayMails() {
      if (this.searchResults && this.searchResults.length > 0) {
        return this.searchResults
      } else {
        return this.filteredMails
      }
    },
  }
}

