export default {
    name: 'MailSideBar',
    props: ['mail'],
    template: `
    <div class="mail-sidebar">
    <div class="icon"><span class="material-symbols-outlined">
        inbox
        </span>Inbox</div>
        <div class="icon"><span class="material-symbols-outlined">
        star
        </span>Starred</div>
        </div>
    `,
    computed: {
    },
    methods: {
    },

}