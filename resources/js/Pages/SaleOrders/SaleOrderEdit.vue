<template>
  <basic-form
    :errors="errors"
    :formHandler="handleForm"
    :title="'EDIT SALE ORDER #' + saleOrder.id"
  >

<sale-order-select :name="data.customer_name" :data="customers.data" title="Select a Customer" class="mb-7" @selectedProduct="handleSelectCustomer">
  <li class="relative p-2 text-gray-900 cursor-default select-none" id="listbox-option-0" role="option">
      <input
        type="search"
        placeholder="Search a Customer"
        autocomplete="off"
        required
        v-model="searchCustomer"
        @click="handleSearch('customer')"
        @keydown="handleSearch('customer')"
        :class="{ 'border border-red-600': errors.name }"
        class="w-full h-10 px-3 py-2 border rounded shadow-md focus:outline-none focus:border-yellow-500"
      />
  </li>
</sale-order-select>






<div v-for="product in productsCount" :key="product" class="mb-7">

<div v-if="deletedProducts[product] !== true">

  <div>
    <svg @click="deleteProductItem(product)" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 ml-auto text-red-500 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
  </div>
  <sale-order-select :name="handleProductName(product)" :data="productsList.data"  title="Select a Product" @selectedProduct='handleSelectProduct($event, product)'>
    <li class="relative p-2 text-gray-900 cursor-default select-none" id="listbox-option-0" role="option">
        <input
          type="search"
          placeholder="Search a Product"
          autocomplete="off"
          required
          v-model="searchProduct"
          @click="handleSearch('product')"
          @keydown="handleSearch('product')"
          :class="{ 'border border-red-600': errors.name }"
          class="w-full h-10 px-3 py-2 border rounded shadow-md focus:outline-none focus:border-yellow-500"
        />
    </li>
  </sale-order-select>

    <input
      type="number"
      value="1"
      placeholder="Quantity"
      autocomplete="off"
      required
      v-if="data.products[product]"
      v-model="data.products[product].quantity"
      :class="{ 'border border-red-600': errors.name }"
      class="w-full h-10 px-3 py-2 border rounded shadow-md focus:outline-none focus:border-yellow-500"/>
      
    <input
      type="text"
      placeholder="Sell Price"
      autocomplete="off"
      required
      v-money="money"
      v-if="data.products[product]"
      v-model.lazy="data.products[product].unitary_value"
      :class="{ 'border border-red-600': errors.unitary_value }"
      class="w-full h-10 px-3 py-2 border rounded shadow-md focus:outline-none focus:border-yellow-500"/>
</div>

</div>

<div class="mt-3 mb-3">
  <span class="inline-block border border-gray-400 rounded-md cursor-pointer" @click="incrementProductsCount">
    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
    <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
    </svg>
  </span>
</div>



    




    


    <button class="px-3 py-1 text-lg font-bold text-white bg-yellow-600 rounded shadow hover:bg-yellow-600 focus:outline-none">
      Save
    </button>
  </basic-form>
</template>

<script>
import BasicForm from "../../Components/Forms/BasicForm.vue";
import MasterLayout from "../../Components/Layouts/MasterLayout.vue";
import { VMoney } from "v-money";
import SaleOrderSelect from './SaleOrderSelect.vue';

export default {
  layout: MasterLayout,
  directives: { money: VMoney },
  components: { MasterLayout, BasicForm, SaleOrderSelect },
  props: {
    errors: Object,
    customers: Object,
    productsList: Object,
    saleOrder: Object,
    saleOrderProducts: Object,
  },
  data() {
    return {
      data: {
        customer_name: this.saleOrder.customer.name,
        customer_id: this.saleOrder.customer.id,
        products: {},
      },
      money: {
        decimal: ",",
        thousands: ".",
        prefix: "R$ ",
        suffix: "",
        precision: 2
      },
      searchCustomer: '',
      searchProduct: '',
      timeout: null,
      productsCount: this.saleOrderProducts.length,
      deletedProducts: {}
    };
  },
  mounted() {
      this.$nextTick(function () {
          let key = 1;
          this.saleOrderProducts.forEach(element => {
              this.data.products[key] = element;
              let objKey = key;
              let unitaryValue = element.unitary_value
              setTimeout(() => {
                 this.data.products[objKey].unitary_value = unitaryValue
              }, 33);
              key++;
          });
      })
  },
  methods: {
    handleForm() {
      this.$inertia.put(route("sale-orders.update", this.saleOrder.id), this.data);
    },
    incrementProductsCount() {
      this.productsCount += 1
    },
    deleteProductItem(index) {
      this.data.products[index] = null
      this.deletedProducts[index] = true
    },
    handleProductName(product) {
        if (typeof this.data.products[product] !== 'undefined') {
            return this.data.products[product].name
        }
        
        return 'Select a Product';
    },
    handleSelectCustomer(item) {
      this.data.customer_name = item.name
      this.data.customer_id = item.id
    },
    handleSelectProduct(item, count) {
      this.data.products[count] = {
        product_id: item.id,
        quantity: 1,
        unitary_value: item.sell_price,
      }
      setTimeout(() => {
         this.data.products[count].unitary_value = item.sell_price
      }, 50);
    },
    handleSearch(param) {
      window.clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {

        let data = {};
        if (param == 'customer') {
          data = {customer : this.searchCustomer}
        }
  
        if (param == 'product') {
          data = {product : this.searchProduct}
        } 
      

        this.$inertia.get(
          this.route('sale-orders.edit', this.saleOrder.id),
          data,
          { preserveState: true }
        );
      }, 264);
    }
  }
};
</script>

<style></style>
