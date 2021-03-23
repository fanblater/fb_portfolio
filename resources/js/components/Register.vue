<template>
 <div>
   <form>
    <p class="h4 text-center mb-4">Sign up</p>
    <label for="name" class="grey-text">Your name</label>
    <span v-if="errors.name">{{errors.name[0]}}</span>
    <input type="text" id="name" class="form-control" v-model="form.name" name="name"/>
    <br/>
    <label for="email" class="grey-text">Your email</label>
    <input type="email" id="email" class="form-control" v-model="form.email" name="email"/>
    <br/>
    <label for="password" class="grey-text">Your password</label>
    <input type="password" id="password" class="form-control" v-model="form.password" name="password"/>
    <br/>
    <label for="password_confirmation" class="grey-text">Confirm your password</label>
    <input type="password" id="password_confirmation" class="form-control" v-model="form.password_confirmation" name="confirm_password"/>
    <br/>
    <div class="text-center mt-4">
      <button class="btn btn-primary" type="submit" @click.prevent="saveUser">Register</button>
    </div>
  </form>
 </div>
</template>
<script>


export default {


    data() {
        return{
            form:{
                name: '',
                email: '',
                password: '',
                password_confirmation: ''
            },
            errors: []
        }
    },
    methods:{
        saveUser(){

            console.log(this.form);
            axios.post('/api/register', this.form).then(() => {
                console.log('saved');

                this.$router.push({name: 'Dashboard'})
            }).catch((err) => {
                console.log(err.response.data.errors)
               this.errors = err.response.data.errors;
            });
        }
    }
}
</script>
