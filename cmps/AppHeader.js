export default {
	template: `
        <header class="app-header">
            <h1>AppSus</h1>
            <form v-if="(isKeep)" class="note-search" @submit="">
                <input type="text" placeholder="Search" />
                <span class="material-symbols-outlined">
                search
                </span>
            </form>
            
            <nav>
                <RouterLink @click="offKeep" to="/">Home</RouterLink>
                <RouterLink @click="onKeep" to="/note">Keep</RouterLink>
                <RouterLink @click="offKeep" to="/email">Gmail</RouterLink>
                <RouterLink @click="offKeep" to="/about">About Us</RouterLink>
            </nav>

        </header>
    `,

data()  {
    return {
        isKeep: false,
    }
},
methods: {
    onKeep() {
        this.isKeep= true
    },
    offKeep() {
        this.isKeep= false
    }
}
}