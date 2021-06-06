<template>
  <table-menu :routes="routes"></table-menu>
  <simple-with-actions
    :data="data"
    :rows="rows"
    :routes="routes2"
  ></simple-with-actions>
  <pagination :paginate="data"></pagination>
</template>

<script>
import TableMenu from "../../Components/Menus/TableMenu.vue";
import Pagination from "../../Components/Pagination/Pagination.vue";
import SimpleWithActions from "../../Components/Tables/SimpleWithActions.vue";
import MasterLayout from "../../Components/Layouts/MasterLayout.vue";

export default {
  layout: (h, page) => h(MasterLayout, [page]),
  components: { SimpleWithActions, Pagination, TableMenu, MasterLayout },
  props: {
    data: Object
  },
  data() {
    return {
      rows: ["id", "name", "email"],
      routes: {
        create: "users.create",
        search: "users.index"
      },
      routes2: {
        edit: "users.edit",
        delete: "users.destroy"
      }
    };
  }
};
</script>

<style></style>
