<template>
        <div class="home-content">
        <img class="balise-left" :src="'/img/arrow-left.svg'" alt="balise-left">
            <div >
                <img class="img_rounded" :src="'/img/profil_lkd_fanny.jpg'" alt="photo de profil">
            </div>
            <div >
                <div class="slash"></div>
            </div>
            <div class="heading-content">
                <h2>{{prenom}} {{nom}}</h2>
                <p >{{metier}}</p>
            </div>
        <img class="balise-right" :src="'/img/arrow-right.svg'" alt="balise-right">

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
