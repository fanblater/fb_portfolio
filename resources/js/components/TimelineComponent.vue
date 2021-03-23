<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
            <div class="tuile-date" v-for="(timeline, date) in orderByDate" v-bind:key="date">
            <button v-on:click="show = !show">{{date}}</button>
               <div class="content-project"  v-if="!show">
                    <ul v-for="time in timeline" :key="time.date">
                        <li><h2>{{time.titre}}</h2></li>
                        <li v-if="time.formation"><p>{{time.formation}}</p></li>
                        <li><p>{{time.projets}}</p></li>
                    </ul>
            </div>
            </div>


            </div>
        </div>
    </div>
</template>

<script>
    export default {

        data(){
            return{
                show: false,
                timelines: {}
            }
        },
        computed: {
            orderByDate(){
                return _.groupBy(this.timelines, 'date')
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
