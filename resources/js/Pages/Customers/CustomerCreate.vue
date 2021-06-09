<template>
  <basic-form
    :errors="errors"
    :formHandler="handleForm"
    title="ADD NEW CUSTOMER"
  >
    <div class="relative my-2 rounded shadow-md pin-t pin-l">
      <ul class="list-reset">
        <li @click="setDocumentType('CPF')">
          <p class="block p-2 text-black cursor-pointer hover:bg-grey-light">
            CPF
            <svg
              v-if="documentType == 'CPF'"
              class="float-right"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <path
                d="M6.61 11.89L3.5 8.78 2.44 9.84 6.61 14l8.95-8.95L14.5 4z"
              />
            </svg>
          </p>
        </li>
        <li @click="setDocumentType('CNPJ')" class="border-t border-gray-200">
          <p class="block p-2 text-black cursor-pointer hover:bg-grey-light">
            CNPJ
            <svg
              v-if="documentType == 'CNPJ'"
              class="float-right"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <path
                d="M6.61 11.89L3.5 8.78 2.44 9.84 6.61 14l8.95-8.95L14.5 4z"
              />
            </svg>
          </p>
        </li>
      </ul>
    </div>

    <input
      type="text"
      placeholder="Name"
      autocomplete="off"
      v-model="data.name"
      :class="{ 'border border-red-600': errors.name }"
      class="w-full h-10 px-3 py-2 mb-3 border rounded shadow-md focus:outline-none focus:border-yellow-500"
    />

    <input
      v-if="documentType === 'CPF'"
      type="text"
      placeholder="Document (CPF)"
      autocomplete="off"
      v-mask="'###.###.###-##'"
      v-model="data.document"
      :class="{ 'border border-red-600': errors.document }"
      class="w-full h-10 px-3 py-2 mb-3 border rounded shadow-md focus:outline-none focus:border-yellow-500"
    />

    <input
      v-if="documentType === 'CNPJ'"
      type="text"
      placeholder="Document (CNPJ)"
      autocomplete="off"
      v-mask="'##.###.##/####-##'"
      v-model="data.document"
      :class="{ 'border border-red-600': errors.document }"
      class="w-full h-10 px-3 py-2 mb-3 border rounded shadow-md focus:outline-none focus:border-yellow-500"
    />

    <input
      type="text"
      placeholder="Document Secondary"
      autocomplete="off"
      v-model="data.document_secondary"
      :class="{ 'border border-red-600': errors.document_secondary }"
      class="w-full h-10 px-3 py-2 mb-3 border rounded shadow-md focus:outline-none focus:border-yellow-500"
    />

    <input
      type="text"
      placeholder="Street"
      autocomplete="off"
      v-model="data.street"
      :class="{ 'border border-red-600': errors.street }"
      class="w-full h-10 px-3 py-2 mb-3 border rounded shadow-md focus:outline-none focus:border-yellow-500"
    />

    <input
      type="text"
      placeholder="Number"
      autocomplete="off"
      v-model="data.number"
      :class="{ 'border border-red-600': errors.number }"
      class="w-full h-10 px-3 py-2 mb-3 border rounded shadow-md focus:outline-none focus:border-yellow-500"
    />

    <input
      type="text"
      placeholder="Complement"
      autocomplete="off"
      v-model="data.complement"
      :class="{ 'border border-red-600': errors.complement }"
      class="w-full h-10 px-3 py-2 mb-3 border rounded shadow-md focus:outline-none focus:border-yellow-500"
    />

    <input
      type="text"
      placeholder="Neighborhood"
      autocomplete="off"
      v-model="data.neighborhood"
      :class="{ 'border border-red-600': errors.neighborhood }"
      class="w-full h-10 px-3 py-2 mb-3 border rounded shadow-md focus:outline-none focus:border-yellow-500"
    />

    <input
      type="text"
      placeholder="Zipcode"
      autocomplete="off"
      v-mask="'#####-###'"
      v-model="data.zipcode"
      :class="{ 'border border-red-600': errors.zipcode }"
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
import { mask } from "vue-the-mask";

export default {
  layout: MasterLayout,
  directives: { mask },
  components: { MasterLayout, BasicForm },
  props: {
    errors: Object
  },
  data() {
    return {
      documentType: "CPF",
      data: {
        name: "",
        document: "",
        document_secondary: "",
        street: "",
        number: "",
        complement: "",
        neighborhood: "",
        zipcode: ""
      }
    };
  },
  methods: {
    handleForm() {
      this.$inertia.post(route("customers.store"), this.data);
    },
    setDocumentType($value) {
      this.documentType = $value;
    }
  }
};
</script>

<style></style>
