<template>
 <div v-if="user">
 User information :
 You'r logged as {{user.name}}
 You'r email is {{user.email}}
 <button @click.prevent="logout">Logout</button>
 </div>
</template>
<script>


export default {
    data() {
        return{
            user:null
        }
    },
    methods: {
        logout(){
            axios.post('/api/logout').then(() => {
                this.$router.push({name: 'Home'})
            })
        }
    },
    mounted(){
        axios.get('/api/user').then((res) => {
            this.user = res.data
        })
    }
}
</script>
