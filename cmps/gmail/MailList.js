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
            <MailPreview :mail="mail"  @click="onUpdate(mail.id)"/>
            <!-- <button @click="onRemoveBook(book.id)" class="close">x</button> -->

        </li>
    </ul>
  </section>
        `,
    created() { },
    data() {
        return {}
    },
    methods: {
        // onRemoveBook(bookId) {
        //     this.$emit('remove', bookId)
        // }
        onUpdate(mailId) {
            this.$emit('update', mailId)
            console.log(mailId)
        }
    },
    computed: {},
    components: {
        MailPreview,
        MailSideBar,
    },
}
