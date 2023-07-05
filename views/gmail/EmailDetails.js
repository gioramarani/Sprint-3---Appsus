import { emailService } from "../../services/gmail/email.service.js"

export default {
    template: `
        <section class="mail-details" v-if="mail">
            <!-- <h2>{{ mail.title }}</h2>
            <h3>{{ mail.body }}</h3> -->
            <pre>{{mail}}</pre>

            <!-- <RouterLink :to="'/car/' + car.nextCarId">Next Car</RouterLink> |
            <RouterLink :to="'/car/' + car.prevCarId">Prev Car</RouterLink> | -->
            
            <!-- <RouterLink to="/car">Back to List</RouterLink> -->
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
