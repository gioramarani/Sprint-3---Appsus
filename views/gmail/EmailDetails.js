import { emailService } from "../../services/gmail/email.service.js"

export default {
    template: `
        <section class="mail-details-container" v-if="mail">
            <h2>{{ mail.subject }} </h2>
            <h3>{{ mail.from }} </h3>
            <h4>{{ mail.body }}</h4>
            <button @click="returnToList">Return</button>
        </section>
    `,
    data() {
        return {
            mail: null,
        }
    },
    created() {
        this.loadMail()
    },
    methods: {
        loadMail() {
            const { mailId } = this.$route.params
            emailService
                .get(mailId)
                .then(mail => {
                    this.mail = mail
                })
                .catch(err => {
                    alert('Cannot load car')
                    this.$router.push('/mail')
                })
        },
        returnToList() {
            this.$router.push('/email')
            this.showDetails = false
        }
    },
    watch: {
        mailId() {
            this.loadMail()
        },
    },
    computed: {
        bookId() {
            return this.$route.params.bookId
        },
    },
}
