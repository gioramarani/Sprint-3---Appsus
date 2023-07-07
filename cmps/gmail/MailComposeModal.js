import { emailService } from "../../services/gmail/email.service.js"

export default {
    name: 'MailComposeModal',
    template: `
            <div class="email-compose-modal" v-if="mail">
                <div class="compose-header">New Message
                    <span 
                    class="material-symbols-outlined close-button"        
                    @click="closeComposeModal">close
                    </span>
                </div>
                <input type="text" v-model="mail.to" @blur="update" class="compose-input compose-to" placeholder="Recipients">
                <input type="text" v-model="mail.subject" class="compose-input compose-subject" placeholder="Subject">
                <textarea v-model="mail.body" class="compose-body"></textarea>
                <button class="compose-button" @click="send">Send</button>
            </div>
    `,
    data() {
        return {
            mail: null,
        }
    },
    created() {
        // this.params()
    },
    computed: {
        mailId() {
            return this.$route.query.compose
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
            const mailId = this.$route.query.compose
            console.log('mailId', mailId)
            emailService.get(mailId)
                .then(mail => {
                    this.mail = mail
                })
        },
        send() {
            this.mail.isSent = true
            emailService.save(this.mail)
                .then(mail => {
                    this.mail = mail
                })
            console.log('mail', this.mail)
        }

    },

    watch: {
        mailId() {
            this.params()
        }
    },
}