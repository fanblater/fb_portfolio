<template>
 <div>
   <form>
    <p class="h4 text-center mb-4">Log in</p>
    <label for="loginemail" class="grey-text">Your email</label>
    <input type="email" id="loginemail" class="form-control" v-model="form.email"/>
    <br/>
    <label for="loginpassword" class="grey-text">Your password</label>
    <input type="password" id="loginpassword" class="form-control" v-model="form.password"/>
    <div class="text-center mt-4">
      <button class="btn btn-primary" type="submit" @click.prevent="loginUser">Login</button>
    </div>
  </form>
 </div>
</template>
<script>


export default {
    data() {
        return{
            form: {
                email: '',
                password: ''
            }, error: []
        }
    },
    methods: {
        loginUser(){
            axios.post('/api/login', this.form).then(() => {
                this.$router.push({name: 'Dashboard'});
            }).catch( (error) => {
                this.errors = error.response.data.errors
            })
        }
    }
}
</script>
