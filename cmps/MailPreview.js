export default {
    props: ['mail'],
    template: `
        <article class="mail-preview">
            <h2>Subject: {{ mail.subject }}</h2>
        </article>
    `,
}