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
          <MailSideBar @open-compose-modal="composeEmail"/>
          <MailList :mails="filteredMails" 
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
      const newMail = {
        id: '',
        subject: '',
        body: '',
        isRead: false,
        sentAt: Date.now(),
        removedAt: null,
        isSent: true,
        from: 'tal',
        to: '',
      }
      emailService.save(newMail)
        .then(savedMail => {
          console.log(savedMail)
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
      const mailIndex = this.mails.findIndex(mail => mail.id === mailId)
      if (mailIndex !== -1) {
        const mail = this.mails[mailIndex]
        if (!mail.removedAt) {
          const currTime = new Date()
          mail.removedAt = utilService.formatDate(currTime)
          emailService.save(mail)
            .then(() => {
              this.mails.splice(mailIndex, 1)
            })
            .catch(error => {
              console.log('Failed to remove mail:', error)
            })
        }
      }
    },
  },
  computed: {
    filteredMails() {
      return this.mails.filter(mail => mail.removedAt === null)
    }
  },
  components: {
    MailList,
    MailSideBar,
    MailComposeModal
  },
}

