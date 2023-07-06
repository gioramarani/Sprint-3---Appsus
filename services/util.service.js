export const utilService = {
    makeId,
    saveToStorage,
    loadFromStorage,
    debounce,
    formatDate,
}

function formatDate(date) {
    const sentDate = new Date(date)
    const day = sentDate.getDate()
    const month = sentDate.getMonth() + 1
    const year = sentDate.getFullYear() % 100
    return `${day}/${month}/${year}`
}

function makeId(length = 5) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

function loadFromStorage(key) {
    const data = localStorage.getItem(key)
    return (data) ? JSON.parse(data) : undefined
}

function debounce(func, wait) {
    let timeout
    return function (...args) {
        const later = () => {
            clearTimeout(timeout)
            func(...args)
        }
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
    }
}