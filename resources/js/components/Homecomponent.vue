<template>
    <div class="container">
        <div class="row justify-content-center">
        <div class="col-sm-4">
        <img class="img_rounded" :src="'/img/profil_lkd_fanny.jpg'" alt="photo de profil">
        </div>
        <div class="col-sm-1">
            <div class="slash"></div>
        </div>
        <div class="col-sm-7 heading-content">

                <h2>Développeuse web</h2>
                <p >Mais pas que !</p>

        </div>

        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
