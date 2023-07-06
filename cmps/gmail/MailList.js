import MailSideBar from './MailSideBar.js'
import MailPreview from './MailPreview.js'
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
            @remove="removeMail(mail.id)"/>
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
            this.$emit('remove', mailId)
        }
    },
    computed: {},
    components: {
        MailPreview,
        MailSideBar,
    },
}
