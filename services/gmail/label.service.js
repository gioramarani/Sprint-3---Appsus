import { storageService } from '../async-storage.service.js'
import { utilService } from '../util.service.js'

const LABEL_KEY = 'labelDB'

export const labelService = {
    query,
    get,
    remove,
    save,
}

const gLabel = [{
    id: utilService.makeId(),
    label: ''
}]


function query() {
    return storageService.query(LABEL_KEY)
}

function get(labelID) {
    return storageService.get(LABEL_KEY, labelID)
}

function remove(labelID) {
    return storageService.remove(LABEL_KEY, labelID)
}

function save(label) {
    if (label.id) {
        return storageService.put(LABEL_KEY, label)
    } else {
        return storageService.post(LABEL_KEY, label)
    }
}