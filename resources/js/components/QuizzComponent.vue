<template>
    <div class="row">
        <div class="col-md-12">

            <div class="quizz-head" v-if="displayHeadQ">
                <h1>Êtes vous prêt ?</h1>
                <button v-on:click="openQuizz">Gooooooooooo !</button>
            </div>

            <transition name="slide" mode="out-in">
                <div class="quizz-block" v-if="displayQuizz">
                    <div class="question" v-for="(item, index) in questionchoix" :key="index">
                        <!--  {{item.question}} - {{index}} -->
                        <div class="question-reponse" v-if="questionIndex === index">
                            <h5>{{item.question}}</h5>
                            <div class="reponseQ" v-for="(r, i) in item.choix" :key="i">
                                <label for="reponse">
                                    <input type="radio" v-bind:value="r.is_valide" v-bind:name="index"
                                        v-model="userResponses[index]"> {{r.choix}}
                                </label>
                            </div>
                            <button v-on:click="next">Prochaine question</button>
                        </div>
                    </div>
                    <div class="score" v-if="questionIndex === questionchoix.length">
                        <p>{{score()}} / {{questionIndex}}</p>
                        <div class="congrat-message" v-if="score() === questionIndex">
                            {{scoremessage}}
                        </div>
                        <div class="oops-message" v-if="score() < questionIndex">
                            {{scoremessageunder}}
                            <button @click.prevent="tryagain()">On réessaie !</button>
                            <button @click.prevent="gotoContact()">Contact</button>
                        </div>

                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>
<script>
export default {

 data: function(){
     return{
         questionchoix: {},
         displayQuizz: false,
         displayHeadQ: true,
         questionIndex: 0,
         userResponses: Array(),
         counter: 0,
         scoremessage: 'Felicitation c\'est un sans fautes !',
         scoremessageunder : 'Bon ce n\'est pas encore ça mais n\'hesitez pas à me contacter pour en savoir plus'
     }
 },
 beforeCreate(){
     // get question choix and
     // group by question with creation new array of choix
        axios.get('http://127.0.0.1:8000/choixlist').then((result) => {
            this.questionchoix = _(result.data[0]).groupBy('question')
         .map(function(group, question){
             return {
                 question: question,
                 choix: _.map(group, _.partial(_.omit, _, 'question'))
             }
         }).value();

        }).catch((err) => {
            console.log(err);
        });


 },
 methods: {
    // Display quizz on click openquizz
     openQuizz(){
         this.displayQuizz= true;

         setTimeout(()=> {
             this.displayHeadQ = false;
         },1000)

     },
    // next question on click with incrementation of index
    next: function(){
        this.questionIndex++;
    },
    // score function to return val length by filtering
    score: function(){
        return this.userResponses.filter(function(val) {
            return val
            }).length
    },
    tryagain: function(){

    },
    gotoContact: function(){
        this.$router.push({name: 'contact'});
    }
 }
}
</script>
