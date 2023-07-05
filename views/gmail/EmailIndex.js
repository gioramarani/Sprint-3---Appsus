import { emailService } from "../../services/gmail/email.service.js"
import MailList from "../../cmps/gmail/MailList.js"
import MailSideBar from "../../cmps/gmail/MailSideBar.js"

export default {
  name: 'EmailIndex',
  props: [],
  template: `
          <section class="mail-index">
          <MailSideBar/>
          <MailList 
            :mails="mails"
            @update="update"
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
    }
  },
  methods: {
    update(mailId) {
      const mail = this.mails.find(mail => mail.id === mailId)
      mail.isRead = true
      emailService.save(mail)
        .then(mail => this.mail = mail)
      console.log(mail)

    }
  },
  computed: {},
  components: {
    MailList,
    MailSideBar
  },
}
