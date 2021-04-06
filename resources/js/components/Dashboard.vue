<template>
<div v-if="user">
<div class="row mb-5">
<div class="col-sm-10">
User information :

user id = > {{user.id}}
You'r logged as {{user.name}}
You'r email is {{user.email}}

</div>
<div class="col-sm-2">
<button class="btn btn-warning" @click.prevent="logout">Logout</button>
<button class="btn btn-primary" @click.prevent="GoToQuestion(user.id)">Create question</button>
</div>
</div>

<div class="row">
<div class="col-sm-10">

<table class="table">
    <thead class="thead-dark">
        <tr>
            <th class="col">id</th>
            <th class="col">date</th>
            <th class="col">titre</th>
            <th class="col">formation</th>
            <th class="col">projets</th>
            <th class="col">contenu projets</th>
            <th class="col">projets_annexes</th>
            <th class="col">contenu projets annexes</th>
            <th class="col" >Actions</th>
            <th class="col">

                <router-link to="/create">Create timeline</router-link>

            </th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="timeline in timelines" :key="timeline.id">
            <th scope="row" >{{timeline.id}}</th>
            <td>{{ timeline.date}}</td>
            <td>{{timeline.titre}}</td>
            <td>{{timeline.formation}}</td>
            <td>{{timeline.projets}}</td>
            <td>{{timeline.content_projets}}</td>
            <td>{{timeline.projets_annexes}}</td>
            <td>{{timeline.content_projets_annexes}}</td>
            <td>
                <div class="btn-group" role="group">
                    <router-link :to="{name: 'update', params: { id: timeline.id}}" class="btn btn-success">Edit</router-link>
                    <button class="btn btn-danger" @click.prevent="deleteTimeline(timeline.id)">Delete</button>
                </div>
            </td>
        </tr>
    </tbody>
</table>


</div>
<div class="col-sm-2">



</div>
</div>



</div>


</template>
<script>


export default {
     data() {
        return{
            user:null,
            timelines: {}
        }
    },
        created(){
            axios.get('http://127.0.0.1:8000/timelinelist')
            .then(response => {this.timelines = response.data; console.log(this.timelines)})
            .catch(error => console.log(error));
        console.log(this.timelines)
        },
        beforeCreate(){
        axios.get('/api/user').then((res) => {
            this.user = res.data
        })
    },methods:{
        deleteTimeline(id){
        axios.delete(`/api/delete/${id}`).then(response => {
            console.log(response);
            window.location.reload();
        })
        },
        GoToQuestion(id){
            this.$router.push({name: 'editquizz', params:{ Pid:id }});
        }
    }

}
</script>
