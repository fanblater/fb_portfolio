<template>
<form>
    <p class="h4 text-center mb-4">Write to us</p>

    <!-- Default input name -->
    <label for="defaultFormContactNameEx" class="grey-text">Your name</label>
    <input type="text" id="defaultFormContactNameEx" class="form-control">

    <br>

    <!-- Default input email -->
    <label for="defaultFormContactEmailEx" class="grey-text">Your email</label>
    <input type="email" id="defaultFormContactEmailEx" class="form-control">

    <br>

    <!-- Default input subject -->
    <label for="defaultFormContactSubjectEx" class="grey-text">Subject</label>
    <input type="text" id="defaultFormContactSubjectEx" class="form-control">

    <br>

    <!-- Default textarea message -->
    <label for="defaultFormContactMessageEx" class="grey-text">Your message</label>
    <textarea type="text" id="defaultFormContactMessageEx" class="form-control" rows="3"></textarea>

    <div class="text-center mt-4">
        <button class="btn btn-outline-warning" type="submit">Send<i class="far fa-paper-plane ml-2"></i></button>
    </div>
  </form>
</template>
<script>


export default {
    data() {
        return{

        }
    },
}
</script>
