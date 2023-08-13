import MailSideBar from '../gmail/MailSideBar.js'
import MailPreview from '../gmail/MailPreview.js'
import { emailService } from '../../services/gmail/email.service.js'


export default {
    name: 'MailList',
    props: ['mails'],
    template: `
  <section class="mail-list">
    <ul>
        <li v-for="mail in mails" :key="mail.id"  >
           
            <MailPreview :mail="mail" 
            @click.stop="onUpdate(mail.id)" 
            @remove="removeMail(mail.id)"
            @star="starredMail(mail.id)"/>
            <section class="actions">
           
            </section>
       

        </li>
    </ul>
  </section>
        `,
    created() { },
    data() {
        return {}
    },
    methods: {
        onUpdate(mailId) {
            this.$emit('update', mailId)
            console.log(mailId)
        },
        removeMail(mailId) {
            console.log('mailId', mailId)
            this.$emit('remove', mailId)
        },
        starredMail(mailId) {
            this.$emit('starred', mailId)
            console.log('hi')
        }
    },
    computed: {},
    components: {
        MailPreview,
        MailSideBar,
    },
}
