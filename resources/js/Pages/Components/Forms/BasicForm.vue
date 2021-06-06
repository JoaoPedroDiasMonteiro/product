<template>
  <!-- component -->
    <div class="flex w-full h-screen">
        <form @submit.prevent="formHandler" class="flex flex-col items-center justify-center w-full bg-white">
          <h1 class="mb-2 text-3xl font-bold text-yellow-500">{{title}}</h1>
          <div class="w-full px-4 text-center md:px-0 md:w-1/2">
            <div class="max-w-md mx-auto">
                <slot></slot>
            </div>
            
            <!-- Example
                <input type="text" name="name" placeholder="Name" autocomplete="off" required v-model="data.name" :class="{'border border-red-600' : errors.name}"
                    class="w-full h-10 px-3 py-2 mb-3 border rounded shadow-md focus:outline-none focus:border-yellow-500">
                <input type="text" name="email" placeholder="Email" autocomplete="off" required v-model="data.email" :class="{'border border-red-600' : errors.email}"
                    class="w-full h-10 px-3 py-2 mb-3 border rounded shadow-md focus:outline-none focus:border-yellow-500">
                <input type="password" name="password" placeholder="Password" autocomplete="off" v-model="data.password" :class="{'border border-red-600' : errors.password}"
                    class="w-full h-10 px-3 py-2 mb-3 border rounded shadow-md focus:outline-none focus:border-yellow-500">
                <input type="password" name="password_confirmation" placeholder="Password Repeat" autocomplete="off" v-model="data.password_confirmation" :class="{'border border-red-600' : errors.password}"
                    class="w-full h-10 px-3 py-2 mb-3 border rounded shadow-md focus:outline-none focus:border-yellow-500">
                <button class="px-3 py-1 text-lg font-bold text-white bg-yellow-600 rounded shadow hover:bg-yellow-600 focus:outline-none">Save</button>
             -->
          </div>
        </form>
        <floating-error :errors="errors"></floating-error>
    </div>
</template>


<script>
import FloatingError from '../Messages/FloatingError.vue';
export default {
  components: { FloatingError },
    props: {
        errors: Object,
        title: String,
        formHandler: Function
    }
};
</script>

<style></style>
