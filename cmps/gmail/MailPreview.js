import MailSideBar from "./MailSideBar.js"
import { utilService } from "../../services/util.service.js"

export default {
    name: 'MailPreview',
    props: ['mail'],
    components: {
        MailSideBar,
    },
    template: `
        <article class="mail-preview" @click="navigateTo" :class="{ 'read': mail.isRead }">
            <h4>
            <i 
            class="material-symbols-outlined star" 
            @click.stop="starredMail"
            :class="{ 'yellow-star': mail.isStarred }">
            star
            </i>
            </h4>
            <div class="from">
            <h4>{{mail.from}}</h4>
            </div>
            <div class="subject-body">
            <h4>{{mail.subject}} -</h4>
            <h4 class="mail-body">{{mail.body}}</h4>
            </div>
            <h4>{{formatted}}</h4>
            <section class="actions">
            <i 
            class="material-symbols-outlined" 
            @click.stop="removeMail">delete</i>
            </section>
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
        },
        starredMail() {
            this.$emit('star', this.mail.id)
        },

    }
}