import { emailService } from "../../services/gmail/email.service.js"

export default {
    name: 'MailComposeModal',
    template: `
        <div class="email-compose-modal" v-if="mail">
            <input type="text" v-model="mail.to" @blur="update"/>
            <input type="text" v-model="mail.subject"/>
            <input type="text" v-model="mail.body"/>
            <pre>{{mail}}</pre>
            <button @click="closeComposeModal">Close</button>
        </div>
    `,
    data() {
        return {
            mail: null,
        }
    },
    created() {
        this.params()
    },
    computed: {
        mailId() {
            return this.$route.query.mailId
        }
    },
    methods: {
        composeEmail() {
            this.$emit('open-compose-modal')
        },
        closeComposeModal() {
            this.$emit('close-compose-modal')
        },
        update() {
            emailService.save(this.mail)
        },
        params() {
            const mailId = this.$route.query
            emailService.
                get(mailId)
                .then(mail => {
                    this.mail = mail
                })
        },

    },

    watch: {
        mailId() {
            this.params()
        }
    },
}