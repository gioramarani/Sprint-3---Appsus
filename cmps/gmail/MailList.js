import MailPreview from './MailPreview.js'
import { emailService } from '../../services/gmail/email.service.js'


export default {
    name: 'MailList',
    props: ['mails'],
    template: `
  <section class="mail-list">
    <ul>
        <li v-for="mail in mails" :key="mail.id" @click="markAsRead(mail)">
            <MailPreview :mail="mail"/>
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
        markAsRead(mail) {
            mail.isRead = true
            emailService.save(mail)
                .then(mail => this.mail = mail)
                .catch(error => {
                    console.error(error)
                })
        }
        // onRemoveBook(bookId) {
        //     this.$emit('remove', bookId)
        // }
    },
    computed: {},
    components: {
        MailPreview,
    },
}
