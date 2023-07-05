import HomePage from './views/HomePage.js'
import AboutUs from './views/AboutUs.js'
import NoteIndex from './views/notes/NoteIndex.js'
import EmailIndex from './views/gmail/EmailIndex.js'
import EmailDetails from './views/gmail/EmailDetails.js'


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
		},
		{
			path: '/email',
			component: EmailIndex,
		},
		{
			path: '/email/:mailId',
			component: EmailDetails
		},
	],
}

export const router = createRouter(routerOptions)
