<template>
  <!-- component -->
    <div class="flex w-full h-screen">
        <img src="https://images.unsplash.com/photo-1540569876033-6e5d046a1d77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt="background" class="hidden object-cover object-center h-screen lg:block lg:w-7/12">
        <form @submit.prevent="handleForm" class="flex flex-col items-center justify-center w-full bg-white lg:w-5/12">
          <h1 class="mb-2 text-3xl font-bold text-yellow-500">ADD NEW USER</h1>
          <div class="w-1/2 text-center">
          <input type="text" name="name" placeholder="Name" autocomplete="off" required v-model="data.name" :class="{'border border-red-600' : errors.name}"
                class="w-full h-10 px-3 py-2 mb-3 border rounded shadow-md focus:outline-none focus:border-yellow-500">
            <input type="text" name="email" placeholder="Email" autocomplete="off" required v-model="data.email" :class="{'border border-red-600' : errors.email}"
                class="w-full h-10 px-3 py-2 mb-3 border rounded shadow-md focus:outline-none focus:border-yellow-500">
            <input type="password" name="password" placeholder="Password" autocomplete="off" required v-model="data.password" :class="{'border border-red-600' : errors.password}"
                class="w-full h-10 px-3 py-2 mb-3 border rounded shadow-md focus:outline-none focus:border-yellow-500">
            <input type="password" name="password_confirmation" placeholder="Password Repeat" autocomplete="off" required v-model="data.password_confirmation" :class="{'border border-red-600' : errors.password}"
            class="w-full h-10 px-3 py-2 mb-3 border rounded shadow-md focus:outline-none focus:border-yellow-500">
            <button class="px-3 py-1 text-lg font-bold text-white bg-yellow-600 rounded shadow hover:bg-yellow-600 focus:outline-none">Save</button>
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
            data: {
                name: '',
                email: '',
                password: '',
                password_confirmation : ''
            }
        }
    },
    methods: {
        handleForm() {
            this.$inertia.post(route('users.store'), this.data );
        }
    }
};
</script>

<style></style>
