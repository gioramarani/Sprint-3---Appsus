import MailSideBar from "./MailSideBar.js"
import { utilService } from "../../services/util.service.js"

export default {
    name: 'MailPreview',
    props: ['mail'],
    template: `
        <article class="mail-preview" :class="{ 'read': mail.isRead }">
            <!-- <h2>Subject: {{ mail.subject }}</h2> -->
            <h4>{{mail.from}}</h4>
            <span>
            <h4>{{mail.subject}}</h4>
            <h4>{{mail.body}}</h4>
            </span>
            <h4>{{formatted}}</h4>
            <span class="material-symbols-outlined" @click="removeMail">delete</span>
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
        }
    },
    components: {
        MailSideBar,
    }



}