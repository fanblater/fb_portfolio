<template>
    <div class="row">
        <div class="col-sm-4">
            <form @submit.prevent="addQuestion">
                <input type="hidden" name="user_id" v-model="form.user_id">
                <label for="question">Question</label>
                <input type="text" class="form-control" v-model="form.question">
                <label for="question_active">is_active</label>
                <input type="checkbox" v-model="form.is_active">
                <button type="submit" class="btn btn-success">Créer la question </button>
            </form>

                <div class="alert alert-success" v-if="alert === true" >Votre question à été ajouté</div>

                <div class="alert alert-danger" v-if="alert === false" >Une erreur s'est produite et trouve ton bug ;)</div>

        </div>
        <div class="col-sm-4">
            <label for="choix">Réponse</label>
            <input type="text" class="form-control" v-model="formChoix.choix">
            <form @submit.prevent="addChoix">
                <select v-model="formChoix.id_question" >
                    <option v-for="q in questions" v-bind:value="q.id" >
                       {{ q.id }} - {{q.question}}
                    </option>
                </select>
                <label for="choix_valide">Bonne réponse</label>
                <input type="checkbox" v-model="formChoix.is_valide">
                <button type="submit" class="btn btn-success">Créer la réponse </button>
            </form>
            <div class="alert alert-success" v-if="alertchoix === true" >Votre question à été ajouté</div>

                <div class="alert alert-danger" v-if="alertchoix === false" >Une erreur s'est produite et trouve ton bug ;)</div>
        </div>
        <div class="col-sm-4">
            <form @submit.prevent="deleteChoix">
                <select v-model="id_choix">
                    <option v-for="c in choix" v-bind:value="c.id">
                        {{c.id}} - {{c.choix}}
                    </option>
                </select>
                <button type="submit" class="btn btn-danger">Supprimer ce choix</button>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return{
            form:{
                question:'',
                is_active:false,
                user_id: 0,
            },
            formChoix:{
                id_question:0,
                is_valide: false,
                choix:''
            },
            questions:{},
            selected: '',
            choix: {},
            id_choix:0 ,
            alert: null,
            alertchoix: null,
            }

    },created(){
        axios.get('http://127.0.0.1:8000/quizzlist')
        .then((response) => {
            console.log(response.data)
            this.questions = response.data
        }).catch((err) => {
            console.log(err);
        });
        axios.get('http://127.0.01:8000/choixlist')
            .then((response)=> {
                this.choix = response.data
            }).catch((err) => {
                console.log(err)
            })
    }, mounted() {
        this.form.user_id = parseInt(this.$route.params.Pid)
    },
    methods: {
        addQuestion(){
            axios.post('/api/storequestion',this.form)
                .then(()=> {
                    console.log(this.form)
                    this.alert = true;
                }).catch((err) => {
                    this.alert = false;
                    console.log(err)
                })
        },
        addChoix(){
            axios.post('/api/storechoix', this.formChoix)
                .then(() => {
                    console.log(this.formChoix)
                    this.alertchoix = true;
                    window.location.reload();
                }).catch((err)=>{
                    console.log(err)
                    this.alertchoix = false;
                })
        },
        deleteChoix(){
            console.log(this.id_choix)
            axios.delete(`/api/deletechoix/${this.id_choix}`).then((response) => {
                console.log(response);
                window.location.reload();
            }).catch((err) => {
                console.log(err)
            })
        }
    }

}
</script>
