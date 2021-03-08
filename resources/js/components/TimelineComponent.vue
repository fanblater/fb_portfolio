<template>
    <div class="container">
        <div class="row justify-content-center">
            <ul class="list-group">
                <li class="list-group-item" v-for="timeline in timelines" :key="timeline.id">
                <span>{{timeline.date}}</span>
                <h1>{{timeline.titre}}</h1>
                <p>{{timeline.projets}}</p>
                </li>

            </ul>
        </div>
    </div>
</template>

<script>
    export default {

        data(){
            return{
                timelines: {}
            }
        },
        created(){
            axios.get('http://127.0.0.1:8000/timelinelist')
            .then(response => this.timelines = response.data)
            .catch(error => console.log(error));

        },

        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
