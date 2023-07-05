import { emailService } from "../services/email.service.js"
import MailList from "../cmps/MailList.js"

export default {
  name: 'EmailIndex',
  props: [],
  template: `
          <section class="mail-index">
          <MailList 
            :mails="mails"
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
  methods: {},
  computed: {},
  components: {
    MailList,
  },
}
