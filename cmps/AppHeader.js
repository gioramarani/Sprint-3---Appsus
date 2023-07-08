export default {
    template: `
        <header class="app-header">
            <div class="logo">
            <img src="../img/google.png" alt="" class="google-logo"/>
            <h1>Google</h1>
            </div>
            
            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/note">Keep</RouterLink>
                <RouterLink to="/email">Gmail</RouterLink>
                <RouterLink to="/about">About Us</RouterLink>
            </nav>

        </header>
    `,

    data() {
        return {

        }
    },
    methods: {

    }
}