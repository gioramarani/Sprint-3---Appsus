import { emailService } from "../../services/gmail/email.service.js"
import { utilService } from "../../services/util.service.js"

export default {
    props: ['mails'],
    template: `
        <section class="mail-details-container" v-if="mail">
            <section class="actions">
                    <span class="material-symbols-outlined" @click="returnToList">
                        arrow_back
                    </span>
                    <span class="material-symbols-outlined"
                    @click="removeMail">
                        delete
                    </span>
                    <span class="material-symbols-outlined">
                        mail
                    </span>
            </section>
            <h2>{{ mail.subject }} </h2>
            <h3>{{ mail.from }} </h3>
            <h4>{{ mail.body }}</h4>
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
        },
        removeMail(mailId) {
            const mailIdx = this.mails.findIndex(mail => mail.id === mailId)
            const currTime = new Date()
            this.mail.removedAt = utilService.formatDate(currTime)
            emailService.save(this.mail)
                .then(() => {
                    this.mails.splice(mailIdx, 1)
                })
                .catch(error => {
                    console.log('Failed to remove mail:', error)
                })
        },
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
