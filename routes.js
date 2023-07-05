import HomePage from './views/HomePage.js'
import AboutUs from './views/AboutUs.js'
import NoteIndex from './views/notes/NoteIndex.js'
import EmailIndex from './views/gmail/EmailIndex.js'
import MailDetails from './cmps/gmail/MailDetails.js'

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
			children: [
				{
					path: 'details/:id',
					component: MailDetails,
					props: true,
				}
			]
		},
	],
}

export const router = createRouter(routerOptions)
