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
    subject: 'Hate you!',
    body: 'Would love to catch up sometimes',
    isRead: false,
    sentAt: 1551133930594,
    removedAt: null,
    isStarred: false,
    isSent: false,
    from: 'momo@momo.com',
    to: 'gaash@gmail.com'
},
{
    id: 'e103',
    subject: 'Love you!',
    body: 'Would love to catch up sometimes',
    isRead: false,
    sentAt: 1551133930594,
    removedAt: null,
    isStarred: false,
    isSent: false,
    from: 'momo@momo.com',
    to: 'gaash@gmail.com'
}
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

