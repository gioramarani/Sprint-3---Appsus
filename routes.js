import HomePage from './views/HomePage.js'
import AboutUs from './views/AboutUs.js'

import NoteIndex from './views/notes/NoteIndex.js'
import NoteDetails from './cmps/notes/NoteDetails.js'
import NoteList from './cmps/notes/NoteList.js'
import NoteArchive from './cmps/notes/NoteArchive.js'
import NoteBin from './cmps/notes/NoteBin.js'
import NoteReminders from './cmps/notes/NoteReminders.js'

import EmailIndex from './views/gmail/EmailIndex.js'
import EmailDetails from './views/gmail/EmailDetails.js'
// import NoteReminders from './cmps/notes/NoteReminders.js'


const { createRouter, createWebHashHistory } = VueRouter

const routerOptions = {
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			component: HomePage,
		},
		{
			path: '/about',
			component: AboutUs,
		},
		{
			path: '/note',
			component: NoteIndex,
			children: [
				{
					path: ':noteId',
					component: NoteDetails,
				},
				{
					path: 'filter',
					component: NoteList,
				},
				{
					path: 'reminders',
					component: NoteReminders
				},
				{
					path: 'archive',
					component: NoteArchive
				},
				{
					path: 'bin',
					component: NoteBin
				}
			],
		},
		{
			path: '/email',
			component: EmailIndex,
			name: 'email',
			children: [
				{
					path: '/mail/:mailId',
					name: 'EmailDetails',
					component: EmailDetails
				},
			]
		},
	],
}

export const router = createRouter(routerOptions)
