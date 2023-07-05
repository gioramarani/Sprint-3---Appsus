export default {
    name: 'MailPreview',
    props: ['mail'],
    template: `
        <article class="mail-preview">
            <!-- <h2>Subject: {{ mail.subject }}</h2> -->
            <h4>{{mail.from}}</h4>
            <h4>{{mail.subject}}</h4>
            <h4>{{mail.body}}</h4>
            <h4>{{formatDate}}</h4>
        </article>
    `,
    computed: {
        formatDate() {
            const sentDate = new Date(this.mail.sentAt)
            const day = sentDate.getDate()
            const month = sentDate.getMonth() + 1
            const year = sentDate.getFullYear() % 100
            return `${day}/${month}/${year}`
        }
    },
}