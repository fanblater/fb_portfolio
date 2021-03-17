<template>
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <form @submit.prevent="updateTimeline">
                <div class="form-group">
                    <label for="date">Date</label>
                    <input type="date" class="form-control" v-model="timeline.date">
                    <label for="titre">titre</label>
                    <input type="text" class="form-control" v-model="timeline.titre">
                    <label for="formation">formation</label>
                    <input type="text" class="form-control" v-model="timeline.formation">
                    <label for="projets">projets</label>
                    <input type="text" class="form-control" v-model="timeline.projets">
                    <label for="projets_annexes">projets annexes</label>
                    <input type="text" class="form-control" v-model="timeline.projets_annexes">
                </div>
                <button type="submit" class="btn btn-primary">Update</button>
            </form>
        </div>
    </div>
</div>
</template>
<script>


export default {
    data(){
        return {
            timeline: {}
        }
    },
    created(){
        axios.get(`/api/timeline/${this.$route.params.id}`).then((res) => {
            this.timeline = res.data;
        })
    },methods: {
        updateTimeline(){
            console.log(this.timeline)
            axios.put(`/api/update/${this.$route.params.id}`, this.timeline).then((res ) => {
                console.log(res)
                this.$router.push({name: 'Dashboard'});
            })
        }
    }
}
</script>
