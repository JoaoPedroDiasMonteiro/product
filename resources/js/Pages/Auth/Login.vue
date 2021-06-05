<template>
  <!-- component -->
    <div class="flex w-full h-screen">
        <img src="https://images.unsplash.com/photo-1540569876033-6e5d046a1d77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt="background" class="hidden object-cover object-center h-screen lg:block lg:w-7/12">
        <form @submit.prevent="handleForm" class="flex flex-col items-center justify-center w-full bg-white lg:w-5/12">
          <h1 class="mb-2 text-3xl font-bold text-yellow-500">LOGIN</h1>
          <div class="w-1/2 text-center">
            <input type="text" name="email" placeholder="Email" autocomplete="off" required v-model="email" :class="{'border border-red-600' : errors.email}"
                class="w-full h-10 px-3 py-2 mb-3 border rounded shadow-md focus:outline-none focus:border-yellow-500">
            <input type="password" name="password" placeholder="Password" autocomplete="off" required v-model="password" :class="{'border border-red-600' : errors.password}"
                class="w-full h-10 px-3 py-2 mb-3 border rounded shadow-md focus:outline-none focus:border-yellow-500">
            <button class="px-3 py-1 text-lg font-bold text-white bg-yellow-600 rounded shadow hover:bg-yellow-600 focus:outline-none">Sign In</button>
          </div>
        </form>
        <floating-error :errors="errors"></floating-error>
    </div>
</template>


<script>
import FloatingError from '../Components/Messages/FloatingError.vue';
export default {
  components: { FloatingError },
    props: {
        errors: Object
    },
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        handleForm() {
            this.$inertia.post(route('auth.login.attempt'), {
                email: this.email,
                password: this.password
            });
        }
    }
};
</script>

<style></style>
