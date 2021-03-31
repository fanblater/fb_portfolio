<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
            <div  v-for="(item, date) in orderByDate" :key="date" >
                <button class="tuile-dates" @click="showSelfData(item)" >
                    {{date}}
                </button>
            </div>
            <div>
                <div v-for="(item, date)  in itemTimeline" v-bind:key="date">
                    <h1>Titre : {{item.titre}}</h1>
                    <h2 v-if="item.formation">Formation : {{item.formation}}</h2>
                    <h3>Projet : {{item.projets}}</h3>
                    <p>Contenu du projet : {{item.content_projets}}</p>
                    <h4 v-if="item.projets_annexes">A côté : {{item.projets_annexes}}</h4>
                    <p>{{item.content_projets_annexes}}</p>
                </div>
            </div>

            </div>
        </div>
    </div>
</template>

<script>

export default {

    data() {
        return {
            display: false,
            timelines: {},
            itemTimeline : {}
        }
    },
    computed: {
        orderByDate() {
            return _.groupBy(this.timelines, 'date')
        }
    },
    methods: {
        showSelfData(value){
            this.itemTimeline = value
        }
    },
    created() {
    axios.get('http://127.0.0.1:8000/timelinelist')
            .then(response => this.timelines = response.data)
            .catch(error => console.log(error));
    },
    mounted() {
        console.log('Timelines mounted')
    }
}
</script>

