import { utilService } from '../util.service.js'
import { storageService } from '../async-storage.service.js'

const MAIL_KEY = 'mailDB'

export const emailService = {
    query,
    get,
    remove,
    save,
    getEmptyMail
    // getMailFromService
}

const gEmail = [{
    id: 'e101',
    subject: 'Miss you!',
    body: 'Would love to catch up sometimes',
    isRead: false,
    sentAt: 1551133930594,
    removedAt: null,
    isSent: false,
    isStarred: false,
    from: 'momo@momo.com',
    to: 'gaash@gmail.com'
},
{
    id: 'e102',
    subject: 'Important Announcement',
    body: 'Please read this message carefully.',
    isRead: false,
    sentAt: 1632344000000,
    removedAt: null,
    isSent: false,
    isStarred: false,
    from: 'notification@example.com',
    to: 'gaash@gmail.com'
},
{
    id: 'e103',
    subject: 'Invitation to a party!',
    body: 'Join us for a fun-filled evening.',
    isRead: false,
    sentAt: 1632406800000,
    removedAt: null,
    isSent: false,
    isStarred: false,
    from: 'events@party.com',
    to: 'gaash@gmail.com'
},
{
    id: 'e104',
    subject: 'Reminder: Deadline approaching',
    body: 'Just a friendly reminder about the upcoming deadline.',
    isRead: false,
    sentAt: 1632469200000,
    removedAt: null,
    isSent: false,
    isStarred: false,
    from: 'reminders@company.com',
    to: 'gaash@gmail.com'
},
{
    id: 'e106',
    subject: 'Weekly Newsletter',
    body: 'Stay updated with our weekly newsletter.',
    isRead: false,
    sentAt: 1632594000000,
    removedAt: null,
    isSent: false,
    isStarred: false,
    from: 'newsletter@company.com',
    to: 'gaash@gmail.com'
},
{
    id: 'e107',
    subject: 'Job Opportunity',
    body: 'Exciting job opportunity at our company.',
    isRead: false,
    sentAt: 1632656400000,
    removedAt: null,
    isSent: false,
    isStarred: false,
    from: 'careers@company.com',
    to: 'gaash@gmail.com'
},
{
    id: 'e108',
    subject: 'Payment Confirmation',
    body: 'Your payment has been successfully processed.',
    isRead: false,
    sentAt: 1632718800000,
    removedAt: null,
    isSent: false,
    isStarred: false,
    from: 'billing@company.com',
    to: 'gaash@gmail.com'
},
{
    id: 'e109',
    subject: 'Travel Discounts',
    body: 'Exclusive travel discounts for our valued customers.',
    isRead: false,
    sentAt: 1632781200000,
    removedAt: null,
    isSent: false,
    isStarred: false,
    from: 'travel@company.com',
    to: 'gaash@gmail.com'
},
{
    id: 'e110',
    subject: 'New Feature Announcement',
    body: 'We have added exciting new features to our platform.',
    isRead: false,
    sentAt: 1632843600000,
    removedAt: null,
    isSent: false,
    isStarred: false,
    from: 'updates@company.com',
    to: 'gaash@gmail.com'
},
{
    id: 'e111',
    subject: 'Upcoming Event',
    body: 'Save the date for our upcoming event.',
    isRead: false,
    sentAt: 1632906000000,
    removedAt: null,
    isSent: false,
    isStarred: false,
    from: 'events@company.com',
    to: 'gaash@gmail.com'
},
{
    id: 'e112',
    subject: 'Greetings from a distant land!',
    body: 'Hello there! I hope this message finds you well. I just wanted to drop a quick note to say hello and let you know that Im thinking of you. It has been too long since we last caught up, and I miss our conversations. Lets plan a get-together soon and make some new memories. Take care!',
    isRead: false,
    sentAt: 1632968400000,
    removedAt: null,
    isSent: false,
    isStarred: false,
    from: 'adventurer@world.com',
    to: 'gaash@gmail.com'
},
{
    id: 'e113',
    subject: 'Volunteer Opportunity',
    body: 'Dear recipient, we are reaching out to inform you about an exciting volunteer opportunity in your community. We are organizing a local event to support a worthy cause, and we would greatly appreciate your participation. Your efforts can make a significant impact and help create a positive change. Please let us know if youre interested, and well provide you with more details. Thank you!',
    isRead: false,
    sentAt: 1633030800000,
    removedAt: null,
    isSent: false,
    isStarred: false,
    from: 'volunteers@community.org',
    to: 'gaash@gmail.com'
},
{
    id: 'e114',
    subject: 'Exciting News - New Book Release!',
    body: 'Hello book lover! Were thrilled to announce the release of a highly anticipated book, "The Enigmatic Puzzle." This captivating novel is filled with suspense, mystery, and unexpected twists that will keep you on the edge of your seat.Get ready to embark on a thrilling reading journey that will leave you wanting more.Visit our website or your favorite bookstore to grab your copy today!',
    isRead: false,
    sentAt: 1633093200000,
    removedAt: null,
    isSent: false,
    isStarred: false,
    from: 'books@publishing.com',
    to: 'gaash@gmail.com'
},
{
    id: 'e115',
    subject: 'Exclusive Membership Offer',
    body: 'Dear valued customer, as a token of our appreciation, we are delighted to offer you an exclusive membership opportunity. By becoming a member, you will enjoy a wide range of benefits, including discounts, early access to new releases, and personalized recommendations. Join our community of book enthusiasts and elevate your reading experience to new heights. Dont miss out on this limited - time offer!',
    isRead: false,
    sentAt: 1633155600000,
    removedAt: null,
    isSent: false,
    isStarred: false,
    from: 'membership@books.com',
    to: 'gaash@gmail.com'
},
{
    id: 'e116',
    subject: 'Important Security Notice',
    body: 'Attention! We have detected unusual activity on your account. To ensure the safety and security of your personal information, we recommend immediate action. Please log in to your account and review your recent transactions. If you notice any unauthorized activity or have any concerns, please contact our support team immediately. Your security is our top priority, and we appreciate your cooperation.',
    isRead: false,
    sentAt: 1633218000000,
    removedAt: null,
    isSent: false,
    isStarred: false,
    from: 'security@company.com',
    to: 'gaash@gmail.com'
},
]

_createMails()

const loggedinUser = {
    email: 'gaash@gmail.com',
    fullname: 'Gaash Shmilovich',
}

function query() {
    return storageService.query(MAIL_KEY)
    // .then(mails => {

    // })
}

function get(mailId) {
    return storageService.get(MAIL_KEY, mailId)
    // .then(book => _setNextPrevBookId(book))
}

function remove(mailId) {
    return storageService.remove(MAIL_KEY, mailId)
}

function save(mail) {
    if (mail.id) {
        return storageService.put(MAIL_KEY, mail)
    } else {
        return storageService.post(MAIL_KEY, mail)
    }
}

// function getMailFromService() {
//     return Promise.resolve(email)
// }

// function addReview(bookId, review){
//     return get(bookId).then(book => {
//         if(!book.reviews) book.reviews = []
//         review.id = utilService.makeId()
//         book.reviews.push(review)
//         return save(book)
//     })
// }

// function removeReview(bookId, reviewId) {
//     return get(bookId)
//         .then(book => {
//             const idx = book.reviews.findIndex(review => review.id === reviewId)
//             book.reviews.splice(idx, 1)
//             return save(book)
//         })
// }

function getEmptyMail() {
    return {
        id: '',
        subject: '',
        body: '',
        isRead: false,
        sentAt: Date.now(),
        removedAt: null,
        isStarred: false,
        isSent: false,
        from: loggedinUser.fullname,
        to: '',
    }
}

function _createMails() {

    let mails = utilService.loadFromStorage(MAIL_KEY)
    if (!mails || !mails.length) {
        utilService.saveToStorage(MAIL_KEY, gEmail)
    }
}

