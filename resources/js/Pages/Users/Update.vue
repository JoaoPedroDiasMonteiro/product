<template>
  <div>
    <basic-form
      :errors="errors"
      :title="'EDIT USER #' + user.id"
      :formHandler="handleForm"
    >
      <input
        type="text"
        placeholder="Name"
        autocomplete="off"
        required
        v-model="data.name"
        :class="{ 'border border-red-600': errors.name }"
        class="w-full h-10 px-3 py-2 mb-3 border rounded shadow-md focus:outline-none focus:border-yellow-500"
      />
      <input
        type="email"
        placeholder="Email"
        autocomplete="off"
        required
        v-model="data.email"
        :class="{ 'border border-red-600': errors.email }"
        class="w-full h-10 px-3 py-2 mb-3 border rounded shadow-md focus:outline-none focus:border-yellow-500"
      />
      <input
        type="password"
        placeholder="Password"
        autocomplete="off"
        v-model="data.password"
        :class="{ 'border border-red-600': errors.password }"
        class="w-full h-10 px-3 py-2 mb-3 border rounded shadow-md focus:outline-none focus:border-yellow-500"
      />
      <input
        type="password"
        placeholder="Password Confirmation"
        autocomplete="off"
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
  </div>
</template>

<script>
import BasicForm from "../../Components/Forms/BasicForm.vue";
import MasterLayout from "../../Components/Layouts/MasterLayout.vue";

export default {
  layout: MasterLayout,
  components: { BasicForm, MasterLayout },
  props: {
    errors: Object,
    user: Object
  },
  data() {
    return {
      data: {
        name: this.user.name,
        email: this.user.email,
        password: "",
        password_confirmation: "",
        is_admin: this.user.is_admin
      }
    };
  },
  methods: {
    handleForm() {
      this.$inertia.patch(route("users.update", this.user.id), this.data);
    }
  }
};
</script>

<style></style>
