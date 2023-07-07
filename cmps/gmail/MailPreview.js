import MailSideBar from "./MailSideBar.js"
import { utilService } from "../../services/util.service.js"

export default {
    name: 'MailPreview',
    props: ['mail'],
    template: `
        <article class="mail-preview" @click="navigateTo" :class="{ 'read': mail.isRead }">
            <h4>
            <span class="material-symbols-outlined">
            star
            </span>
            </h4>
            <div class="from">
            <h4>{{mail.from}}</h4>
            </div>
            <div class="subject-body">
            <h4>{{mail.subject}} -</h4>
            <h4>{{mail.body}}</h4>
            </div>
            <h4>{{formatted}}</h4>
            <section class="actions">
            <i class="material-symbols-outlined" @click.stop="removeMail">delete</i>
            </section>
        <!-- <pre>{{mail}}</pre> -->
        </article>
        
    `,
    computed: {
        formatted() {
            return utilService.formatDate(this.mail.sentAt)
        }

    },
    methods: {
        removeMail() {
            this.$emit('remove', this.mail.id)
        },
        navigateTo() {
            this.$router.push('mail/' + this.mail.id)
        }
    },
    components: {
        MailSideBar,
    }



}