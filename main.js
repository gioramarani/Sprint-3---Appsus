const { createApp } = Vue

import { router } from './routes.js'

import AppHeader from './cmps/AppHeader.js'
import AppFooter from './cmps/AppFooter.js'
import UserMsg from './cmps/UserMsg.js'

const options = {
    template: `
        <section class="main-layout">
            <AppHeader />
            <section class="main-content">
                <RouterView />
            </section>
            <UserMsg />
        </section>
    `,
    components: {
        AppHeader,
        UserMsg,
    },
}

const app = createApp(options)
app.use(router)
app.mount('#app')
