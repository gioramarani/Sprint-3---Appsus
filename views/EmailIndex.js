import { emailService } from "../services/email.service.js"

export default {
  name: 'EmailIndex',
  props: [],
  template: `
          <section class="mail-index">
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
  components: {},
}
