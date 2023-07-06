export default {
    name: 'MailComposeModal',
    template: `
        <div class="email-compose-modal">
            <h1></h1>

            <button @click="closeComposeModal">Close</button>
        </div>
    `,
    data() {
        return {


        }
    },
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