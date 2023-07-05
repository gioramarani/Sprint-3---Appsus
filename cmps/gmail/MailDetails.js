export default {
    name: 'MailDetails',
    props: ['mail'],
    template: `
      <div>
        <h2>{{ mail.subject }}</h2>
        <p>{{ mail.body }}</p>
        <p>From: {{ mail.from }}</p>
        <p>To: {{ mail.to }}</p>
      </div>
    `,
    methods: {
    },
}