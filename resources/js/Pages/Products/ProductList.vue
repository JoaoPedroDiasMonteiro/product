<template>
  <div class="m-3">
    <main-nav-bar class="mb-6" :routes="routes" :searchProp="searchProp">
      <template v-slot:iconOrText>
        <h1 class="text-2xl">Products</h1>
      </template>
    </main-nav-bar>
    <simple-with-actions
      :data="data"
      :rows="rows"
      :routes="routes2"
    ></simple-with-actions>
    <pagination :paginate="data"></pagination>
  </div>
</template>

<script>
import TableMenu from "../../Components/Menus/TableMenu.vue";
import Pagination from "../../Components/Pagination/Pagination.vue";
import SimpleWithActions from "../../Components/Tables/SimpleWithActions.vue";
import MasterLayout from "../../Components/Layouts/MasterLayout.vue";
import MainNavBar from "../../Components/Menus/MainNavBar.vue";

export default {
  layout: MasterLayout,
  components: {
    SimpleWithActions,
    Pagination,
    TableMenu,
    MasterLayout,
    MainNavBar
  },
  props: {
    data: Object,
    searchProp: String
  },
  data() {
    return {
      rows: ["id", "name", "cost_price", "sell_price", "description"],
      routes: {
        create: "products.create",
        search: "products.index"
      },
      routes2: {
        edit: "products.edit",
        delete: "products.destroy"
      }
    };
  }
};
</script>

<style></style>
