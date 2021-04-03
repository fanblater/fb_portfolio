<template>

        <div class="tuile">
                <div class="tuile-dates">
                    <ul v-for="(item, date) in orderByDate" :key="date">
                        <li v-on:click.prevent="showSelfData(item, $event)" >{{date}}</li>
                    </ul>
                </div>
                <div class="tuile-content">
                    <transition name="expand" v-show="display">
                            <ul v-for="(content, i)  in itemTimeline" v-bind:key="i">
                                <li>
                                    <p class="title"> {{content.titre}}</p>
                                </li>
                                <li>
                                    <p class="timeline-title" v-if="content.formation">{{content.formation}}</p>
                                </li>
                                <li>
                                    <p class="project-name">{{content.projets}}</p>
                                </li>
                                <li>
                                    <p> {{content.content_projets}}</p>
                                </li>
                                <li>
                                    <p class="timeline-title" v-if="content.projets_annexes">A côté : {{content.projets_annexes}}</p>
                                </li>
                                <li>
                                    <p>{{content.content_projets_annexes}}</p>
                                </li>
                            </ul>
                    </transition>
                </div>
            </div>

</template>

<script>

export default {

    data() {
        return {
            display: false,
            timelines: {},
            itemTimeline : {},
        }
    },
    computed: {
        orderByDate() {
            return _.groupBy(this.timelines, 'date')
        }
    },
    watch:{
        itemTimeline: function(val){

            this.itemTimeline = val;

        }
    },
    methods: {
        showSelfData(value, event){

            this.itemTimeline = value;

            if(this.display === false){
                this.display = true;
            }


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

