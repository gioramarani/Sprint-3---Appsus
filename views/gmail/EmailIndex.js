import { emailService } from "../../services/gmail/email.service.js"
import MailList from "../../cmps/gmail/MailList.js"
import MailSideBar from "../../cmps/gmail/MailSideBar.js"

export default {
  name: 'EmailIndex',
  props: [],
  template: `
          <section class="mail-index">
          <MailSideBar/>
          <MailList :mails="mails" @update="update" v-if="$route.name !== 'EmailDetails'" />
    <router-view v-else />
        </section>
        `,
  created() {
    emailService.query()
      .then(mails => this.mails = mails)
  },
  data() {
    return {
      mails: [],
    }
  },
  methods: {
    update(mailId) {
      const mail = this.mails.find(mail => mail.id === mailId)
      mail.isRead = true
      emailService.save(mail)
        .then(mail => this.mail = mail)
      this.$router.push({ name: 'EmailDetails', params: { mailId } })
    }
  },
  computed: {},
  components: {
    MailList,
    MailSideBar
  },
}
