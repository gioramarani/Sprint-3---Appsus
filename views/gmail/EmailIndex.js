import { emailService } from "../../services/gmail/email.service.js"
import MailList from "../../cmps/gmail/MailList.js"
import MailSideBar from "../../cmps/gmail/MailSideBar.js"
import MailComposeModal from "../../cmps/gmail/MailComposeModal.js"
// import { utilService } from "../../services/util.service.js"

export default {
  name: 'EmailIndex',
  props: [],
  template: `
          <section class="mail-index">
          <MailSideBar @open-compose-modal="composeEmail"/>
          <MailList :mails = "mails"
          @update="update" 
          v-if="$route.name === 'email'"
          @remove="removeMail"/>
          <RouterView v-else />
          <MailComposeModal
            v-if="showComposeModal"
            @close-compose-modal="showComposeModal = false"
            @open-compose-modal="composeEmail"

          />
        </section>
        `,
  created() {
    emailService.query()
      .then(mails => this.mails = mails)
  },
  data() {
    return {
      mails: [],
      showComposeModal: false,
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
      console.log(mailId)
      const currTime = new Date()

      // mail.removedAt = utilService.formatDate(currTime)
      // console.log(mail)
      emailService.remove(mailId)
        .then(() => {
          this.mails.splice(mailIdx, 1)
        })
        .catch(error => {
          console.log('Failed to remove mail:', error)
        })
    },
  },
  computed: {
  },
  components: {
    MailList,
    MailSideBar,
    MailComposeModal
  },
}

