<template>
<div v-if="user">
User information :

user id = > {{user.id}}
You'r logged as {{user.name}}
You'r email is {{user.email}}
<button @click.prevent="logout">Logout</button>

<form>
    <p>Création d'un nouvelle étape de la timeline</p>

    <input type="hidden" name="user_id" v-model="form.user_id">
    <label for="date">Date</label>
    <input type="date" v-model="form.date">
    <br/>
    <label for="titre">Titre</label>
    <input type="text" v-model="form.titre">
    <br/>
    <label for="formation">Formation</label>
    <input type="text" v-model="form.formation">
    <br/>
    <label for="projets">Projets</label>
    <input type="text" v-model="form.projets">
    <br/>
    <label for="content_projets">Contenu du projet</label>
    <input type="text" v-model="form.content_projets">
    <br/>
    <label for="projets_annexes">Projets_annexes</label>
    <input type="text" v-model="form.projets_annexes">
    <br/>
    <label for="content_projets_annexes">Contenu des projets annexes</label>
    <input type="text" v-model="form.content_projets_annexes">
    <br/>
    <button @click.prevent="createTimeline" class="btn btn-primary">Créer mon étape</button>
</form>

</div>
</template>
<script>


export default {
    props: [
        'id_user'
    ],
    data() {
        return{
            user:null,
            form: {
                user_id: 0,
                date: '',
                titre: '',
                formation: '',
                projets: '',
                content_projets: '',
                projets_annexes: '',
                content_projets_annexes: ''
            },errors: []
        }
    },
    methods: {
        logout(){
            axios.post('/api/logout').then(() => {
                this.$router.push({name: 'Home'})
            })
        },
        createTimeline(){
            this.form.user_id = this.user.id
            axios.post('/api/create', this.form).then(() => {

                this.$router.push({name: 'Dashboard'})
                console.log(this.form)
            }).catch((err) => {
                console.log(err)
                this.errors = err.response.data.errors
            })
        }
    },
    beforeCreate(){
        axios.get('/api/user').then((res) => {
            this.user = res.data
            console.log(this.user.id)
        })
    }
}
</script>
