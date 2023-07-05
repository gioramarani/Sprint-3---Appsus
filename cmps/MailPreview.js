export default {
    name: 'MailPreview',
    props: ['mail'],
    template: `
        <article class="mail-preview">
            <!-- <h2>Subject: {{ mail.subject }}</h2> -->
            <h2>{{mail.id}}</h2>
            <h2>{{mail.subject}}</h2>
        </article>
    `,
}