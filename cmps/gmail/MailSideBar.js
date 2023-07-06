export default {
    name: 'MailSideBar',
    props: ['mail'],
    template: `
    <div class="mail-sidebar">
    <div class="compose" @click="composeEmail"><div class="material-symbols-outlined">
        edit
        </div >Compose</div>
    <div class="icon inbox"><span class="material-symbols-outlined">
        inbox
        </span>Inbox</div>
        <div class="icon starred"><span class="material-symbols-outlined">
        star
        </span>Starred</div>
        <div class="icon send"><span class="material-symbols-outlined">
        send
        </span>Sent</div>
        <div class="icon draft"><span class="material-symbols-outlined">
        draft
        </span>Draft</div>
        <div class="icon delete"><span class="material-symbols-outlined">
        delete
        </span>Thrash</div>
        </div>
    `,
    computed: {
    },
    methods: {
        composeEmail() {
            this.$emit('open-compose-modal')
        },
    },

}