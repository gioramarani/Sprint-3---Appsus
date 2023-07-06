export default {
    name: 'MailComposeModal',
    template: `
        <div class="email-compose-modal">
            <!-- Modal content and form -->
            <h1>hi</h1>

            <button @click="closeComposeModal">Close</button>
        </div>
    `,
    computed: {
    },
    methods: {
        composeEmail() {
            this.$emit('open-compose-modal')
        },
        closeComposeModal() {
            this.$emit('close-compose-modal')
        },
    },

}