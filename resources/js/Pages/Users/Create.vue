<template>
  <basic-form :errors="errors" :formHandler="handleForm" title="ADD NEW USER">
    <input
          type="text"
          name="name"
          placeholder="Name"
          autocomplete="off"
          required
          v-model="data.name"
          :class="{ 'border border-red-600': errors.name }"
          class="w-full h-10 px-3 py-2 mb-3 border rounded shadow-md focus:outline-none focus:border-yellow-500"
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          autocomplete="off"
          required
          v-model="data.email"
          :class="{ 'border border-red-600': errors.email }"
          class="w-full h-10 px-3 py-2 mb-3 border rounded shadow-md focus:outline-none focus:border-yellow-500"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          autocomplete="off"
          required
          v-model="data.password"
          :class="{ 'border border-red-600': errors.password }"
          class="w-full h-10 px-3 py-2 mb-3 border rounded shadow-md focus:outline-none focus:border-yellow-500"
        />
        <input
          type="password"
          name="password_confirmation"
          placeholder="Password Repeat"
          autocomplete="off"
          required
          v-model="data.password_confirmation"
          :class="{ 'border border-red-600': errors.password }"
          class="w-full h-10 px-3 py-2 mb-3 border rounded shadow-md focus:outline-none focus:border-yellow-500"
        />
        <label for="" class="block w-full">
          <span class="relative mr-2 leading-9" style="top:-3px">Is Admin?</span>
          <input
          type="checkbox"
          name="is_admin"
          placeholder="Is Admin?"
          autocomplete="off"
          v-model="data.is_admin"
          :class="{ 'border border-red-600': errors.is_admin }"
          class="w-5 h-5 border rounded shadow-md focus:outline-none focus:border-yellow-500"
        />
        </label>
        <button
          class="px-3 py-1 text-lg font-bold text-white bg-yellow-600 rounded shadow hover:bg-yellow-600 focus:outline-none"
        >
          Save
        </button>
  </basic-form>
  
</template>

<script>
import BasicForm from '../../Components/Forms/BasicForm.vue';
import MasterLayout from "../../Components/Layouts/MasterLayout.vue";

export default {
  layout: MasterLayout,
  components: { MasterLayout, BasicForm },
  props: {
        errors: Object
  },
  data() {
    return {
      data: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        is_admin: false
      }
    };
  },
  methods: {
    handleForm() {
      this.$inertia.post(route("users.store"), this.data);
    }
  }
};
</script>

<style></style>
