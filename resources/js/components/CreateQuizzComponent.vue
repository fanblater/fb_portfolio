<template>
    <div class="row">
        <div class="col-sm-6">
            <form @submit.prevent="addQuestion">
                <input type="hidden" name="user_id" v-model="form.user_id">
                <label for="question">Question</label>
                <input type="text" class="form-control" v-model="form.question">
                <label for="question_active">is_active</label>
                <input type="checkbox" v-model="form.is_active">
                <button type="submit" class="btn btn-success">Créer la question </button>
            </form>
        </div>
        <div class="col-sm-6">
            <label for="choix">Réponse</label>
            <input type="text" class="form-control" v-model="formChoix.choix">
            <form @submit.prevent="addChoix">
                <select v-model="formChoix.id_question">
                    <option v-for="q in questions" v-bind:key="q.id">
                        {{q.question}}
                    </option>
                </select>
                <label for="choix_valide">Bonne réponse</label>
                <input type="checkbox" v-model="formChoix.is_valide">
                <button type="submit" class="btn btn-success">Créer la réponse </button>
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
                is_active:'',
                user_id: null,
            },
            formChoix:{
                id_question:'',
                is_valide: '',
                choix:''
            },
            questions:{},
            selected: '',

            }

    },created(){
        axios.get('http://127.0.0.1:8000/quizzlist')
        .then((response) => {
            console.log(response.data)
            this.questions = response.data
        }).catch((err) => {
            console.log(err);
        });
    }, mounted() {
        this.form.user_id = parseInt(this.$route.params.Pid)
    },
    methods: {
        addQuestion(){
            axios.post('/api/storequestion',this.form)
                .then(()=> {
                    console.log(this.form)
                }).catch((err) => {
                    console.log(err)
                })
        },
        addChoix(){

        }
    }

}
</script>
