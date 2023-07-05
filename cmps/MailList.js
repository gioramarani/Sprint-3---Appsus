import MailPreview from './MailPreview.js'


export default {
    name: 'MailList',
    props: ['mails'],
    template: `
  <section className="mail-list">
    <ul>
        <li v-for="mail in mails" :key="mail.id">
            <MailPreview :mail="mail"/>
            <!-- <button @click="onRemoveBook(book.id)" class="close">x</button> -->
        </li>
    </ul>
  </section>
        `,
    created() { },
    data() {
        return {}
    },
    methods: {
        // onRemoveBook(bookId) {
        //     this.$emit('remove', bookId)
        // }
    },
    computed: {},
    components: {
        MailPreview,
    },
}
