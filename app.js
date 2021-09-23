
// setting app variable to Vue object (with access from the cdn) and call createApp method
// createApp method takes in an object which you can pass in different things e.g. template
const app = Vue.createApp({
    data() {
        return {
            firstName: 'Jerry',
            lastName: 'Got Milk',
            email: 'JerryGotMilk@gotmilk.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()

            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large
        },
    },
})

//mount the app to the div with an id="app"
app.mount('#app')