<template>
        <div class="row justify-content-center">
            <div class="col-sm-4">
                <img class="img_rounded" :src="'/img/profil_lkd_fanny.jpg'" alt="photo de profil">
            </div>
            <div class="col-sm-1">
                <div class="slash"></div>
            </div>
            <div class="col-sm-7 heading-content">
                <h2>{{data.prenom}}{{data.nom}}</h2>
                <p >{{data.metier}}</p>
            </div>
        </div>
</template>

<script>
    export default {
        data(){
            return {
                nom: "BELLAIS",
                prenom: "Fanny",
                metier: "Développeuse web"
            }
        },
        mounted() {
            console.log('Home component mounted.')
        }
    }
</script>
