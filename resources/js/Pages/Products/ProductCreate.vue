<template>
  <basic-form
    :errors="errors"
    :formHandler="handleForm"
    title="ADD NEW PRODUCT"
  >
    <label class="">
      Name
    </label>
    <input
      type="text"
      placeholder="Name"
      autocomplete="off"
      required
      v-model="data.name"
      :class="{ 'border border-red-600': errors.name }"
      class="w-full h-10 px-3 py-2 mb-3 border rounded shadow-md focus:outline-none focus:border-yellow-500"
    />
    <label class="">
      Cost Price
    </label>
    <input
      type="text"
      placeholder="Cost Price"
      autocomplete="off"
      required
      v-money="money"
      v-model="data.cost_price"
      :class="{ 'border border-red-600': errors.cost_price }"
      class="w-full h-10 px-3 py-2 mb-3 border rounded shadow-md focus:outline-none focus:border-yellow-500"
    />
    <label class="">
      Sell Price
    </label>
    <input
      type="text"
      placeholder="Sell Price"
      autocomplete="off"
      required
      v-money="money"
      v-model="data.sell_price"
      :class="{ 'border border-red-600': errors.sell_price }"
      class="w-full h-10 px-3 py-2 mb-3 border rounded shadow-md focus:outline-none focus:border-yellow-500"
    />
    <label class="">
      Description
    </label>
    <input
      type="text"
      placeholder="Description"
      autocomplete="off"
      required
      v-model="data.description"
      :class="{ 'border border-red-600': errors.description }"
      class="w-full h-10 px-3 py-2 mb-3 border rounded shadow-md focus:outline-none focus:border-yellow-500"
    />
    <button
      class="px-3 py-1 text-lg font-bold text-white bg-yellow-600 rounded shadow hover:bg-yellow-600 focus:outline-none"
    >
      Save
    </button>
  </basic-form>
</template>

<script>
import BasicForm from "../../Components/Forms/BasicForm.vue";
import MasterLayout from "../../Components/Layouts/MasterLayout.vue";
import { VMoney } from "v-money";

export default {
  layout: MasterLayout,
  directives: { money: VMoney },
  components: { MasterLayout, BasicForm },
  props: {
    errors: Object
  },
  data() {
    return {
      data: {
        name: "",
        sell_price: "",
        cost_price: "",
        description: ""
      },
      money: {
        decimal: ",",
        thousands: ".",
        prefix: "R$ ",
        suffix: "",
        precision: 2
      }
    };
  },
  methods: {
    handleForm() {
      this.$inertia.post(route("products.store"), this.data);
    }
  }
};
</script>

<style></style>
