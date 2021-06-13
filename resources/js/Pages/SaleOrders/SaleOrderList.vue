<template>
  <div class="m-3">
    <main-nav-bar class="mb-6" :routes="routes" :searchProp="searchProp">
      <template v-slot:iconOrText>
        <h1 class="text-2xl">Products</h1>
      </template>
    </main-nav-bar>
    <sale-order-table
      :data="data.data"
      :routes="routes2"
    ></sale-order-table>
    <pagination :paginate="data"></pagination>
  </div>
</template>

<script>
import TableMenu from "../../Components/Menus/TableMenu.vue";
import Pagination from "../../Components/Pagination/Pagination.vue";
import MasterLayout from "../../Components/Layouts/MasterLayout.vue";
import MainNavBar from "../../Components/Menus/MainNavBar.vue";
import SaleOrderTable from './SaleOrderTable.vue';

export default {
  layout: MasterLayout,
  components: {
    Pagination,
    TableMenu,
    MasterLayout,
    MainNavBar,
    SaleOrderTable
  },
  props: {
    data: Object,
    searchProp: String
  },
  data() {
    return {
      routes: {
        create: "sale-orders.create",
        search: "sale-orders.index"
      },
      routes2: {
        edit: "sale-orders.edit",
        delete: "sale-orders.destroy"
      }
    };
  }
};
</script>

<style></style>
