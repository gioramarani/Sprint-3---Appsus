import { utilService } from '../util.service.js'
import { storageService } from '../async-storage.service.js'

const NOTE_KEY = 'noteDB'

const gNotes = [
    {
        id: 'n101',
        createdAt: 1112222,
        type: 'NoteTxt',
        isPinned: true,
        style: {
            backgroundColor: '#00d'
        },
        info: {
            title: 'Hello',
            txt: 'Fullstack Me Baby!'
        }
    },
    {
        id: 'n102',
        type: 'NoteImg',
        isPinned: false,
        info: {
            url: 'http://some-img/me',
            title: 'Bobi and Me'
        },
        style: {
            backgroundColor: '#00d'
        }
    },
    {
        id: 'n103',
        type: 'NoteVideo',
        isPinned: false,
        info: {
            url: 'http://some-img/me',
            title: 'Bobi and Me'
        },
        style: {
            backgroundColor: '#00d'
        }
    },
    {
        id: 'n104',
        type: 'NoteTodos',
        isPinned: false,
        info: {
            title: 'Get my stuff together',
            todos: [
                { txt: 'Driving license', doneAt: null },
                { txt: 'Coding power', doneAt: 187111111 }
            ]
        }
    }
]

export const NoteService = {
    getNotesFromService,
    query,
    get,
    remove,
    save,
    getEmptyNote,
    doUploadImg,
    removeFromHardCodedList,
    // crateNote
}

// function getNotesFromService() {
//     return gNotes
// }

function getNotesFromService() {
    return Promise.resolve(gNotes)
}

function query() {
    return storageService.query(NOTE_KEY)
        .then(notes => {
            // if (gFilterBy.title) {
            //     const regex = new RegExp(gFilterBy.title, 'i')
            //     books = books.filter(book => regex.test(book.title))
            // }
            // if (gFilterBy.amount) {
            //     books = books.filter(book => book.amount >= gFilterBy.amount)
            // }
            // if (gPageIdx !== undefined) {
            //     const startIdx = gPageIdx * PAGE_SIZE
            //     books = books.slice(startIdx, startIdx + PAGE_SIZE)
            // }
            // if (gSortBy.amount !== undefined) {
            //     books.sort((c1, c2) => (c1.amount - c2.amount) * gSortBy.amount)
            // } else if (gSortBy.title !== undefined) {
            //     books.sort((c1, c2) => c1.title.localeCompare(c2.title) * gSortBy.title)
            // }

            return notes
        })
}

function get(noteId) {
    return storageService.get(NOTE_KEY, noteId)
            .then(note => _setNextPrevBookId(note))
}


function remove(noteId) {
    return storageService.remove(NOTE_KEY, noteId)
}

function removeFromHardCodedList(noteId) {
         const idx = gNotes.findIndex(note => note.id === noteId)
         gNotes.splice(idx, 1)
         return gNotes
}

function save(note) {
    if (note.id) {
        return storageService.put(NOTE_KEY, note)
    } else {
        return storageService.post(NOTE_KEY, note)
    }
}

function getEmptyNote(id = '', type = '' , info = {}) {
    return { id, type, info }
}

// function crateNote(type, txt) {
//     var newId = utilService.makeId()
//     const note = {
//         id: newId,
//         type: type,
//         info: {
//             txt: txt
//         }
//     }
//     gNotes.push(note)
//     return Promise.resolve(gNotes)
// }


function _createNotes() {
    let notes = utilService.loadFromStorage(NOTE_KEY)
    if (!notes || !notes.length) {
        // books = []
        // books.push(_createBook('Harry Poter', 300))
        // books.push(_createBook('Great Jiants', 720))
        // books.push(_createBook('Looloo Land', 100))
        utilService.saveToStorage(NOTE_KEY, gNotes)
        console.log(notes)
    }
}

function doUploadImg(imgDataUrl, onSuccess) {
    // Pack the image for delivery
    const formData = new FormData()
    formData.append('img', imgDataUrl)

    // Send a post req with the image to the server
    const XHR = new XMLHttpRequest()
    XHR.onreadystatechange = () => {
        // If the request is not done, we have no business here yet, so return
        if (XHR.readyState !== XMLHttpRequest.DONE) return
        // if the response is not ok, show an error
        if (XHR.status !== 200) return console.error('Error uploading image')
        const { responseText: url } = XHR
        // Same as
        // const url = XHR.responseText

        // If the response is ok, call the onSuccess callback function, 
        // that will create the link to facebook using the url we got
        console.log('Got back live url:', url)
        onSuccess(url)
    }
    XHR.onerror = (req, ev) => {
        console.error('Error connecting to server with request:', req, '\nGot response data:', ev)
    }
    XHR.open('POST', '//ca-upload.com/here/upload.php')
    XHR.send(formData)
}

// function _setNextPrevBookId(book) {
//     return storageService.query(BOOK_KEY)
//         .then(books => {
//             const bookIdx = books.findIndex(currBook => currBook.id === book.id)
//             book.nextBookId = books[bookIdx + 1] ? books[bookIdx + 1].id : books[0].id
//             book.prevBookId = books[bookIdx - 1]
//                 ? books[bookIdx - 1].id
//                 : books[books.length - 1].id
//             return book
//         })
// }




// function addGoogleBook(item) {
//     console.log(item);
//     // const book= GoogleList.find(book=> book.id === item.id)
//     // console.log(book);
//     save(item)
//     return Promise.resolve()
//     // return save(item)
//     //         .then(GoogleList.pop(item))   //??//

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
// function getFilterBy() {
//     return { ...gFilterBy }
// }

// function setFilterBy(filterBy = {}) {
//     if (filterBy.title !== undefined) gFilterBy.title = filterBy.title
//     if (filterBy.listPrice.amount !== undefined) gFilterBy.amount = filterBy.listPrice.amount
//     return gFilterBy
// }

// function getNextbookId(bookId) {
//     return storageService.query(BOOK_KEY)
//         .then(books => {
//             var idx = books.findIndex(book => book.id === bookId)
//             if (idx === books.length - 1) idx = -1
//             return books[idx + 1].id
//         })
// }
