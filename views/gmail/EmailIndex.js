import { emailService } from "../../services/gmail/email.service.js"
import MailList from "../../cmps/gmail/MailList.js"
import MailSideBar from "../../cmps/gmail/MailSideBar.js"
import MailComposeModal from "../../cmps/gmail/MailComposeModal.js"
import { utilService } from "../../services/util.service.js"

export default {
  name: 'EmailIndex',
  props: [],
  template: `
          <section class="mail-index">
          <MailSideBar @open-compose-modal="showComposeModal = true"/>
          <MailList :mails="mails" 
          @update="update" 
          @remove="removeMail"
          v-if="$route.name !== 'EmailDetails'"
          />
          <router-view v-else />
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
      this.$router.push({ name: 'EmailDetails', params: { mailId } })
    },
    composeEmail() {
      const newMail = {
        id: '',
        subject: '',
        body: '',
        isRead: false,
        sentAt: Date.now(),
        removedAt: null,
        isSent: true,
        from: loggedinUser.email,
        to: '',
      }
      emailService.save(newMail)
        .then(savedMail => {
          this.$emit('open-compose-modal', savedMail)
        })
        .catch(error => {
          console.log('Failed to save new mail:', error)
        })
    },
    closeComposeModal() {
      this.showComposeModal = false
    },
    removeMail(mailId) {
      const mailIndex = this.mails.findIndex(mail => mail.id === mailId)
      if (mailIndex !== -1) {
        const mail = this.mails[mailIndex]
        const currTime = new Date()
        mail.removedAt = utilService.formatDate(currTime)
        emailService.remove(mailId) // This saves the updated state to the storage
          .then(() => {
            this.mails.splice(mailIndex, 1)
          })
          .catch(error => {
            console.log('Failed to remove mail:', error)
          })
      }
    },
  },
  components: {
    MailList,
    MailSideBar,
    MailComposeModal
  },
}

