<template>
  <table-menu :routes="routes"></table-menu>
  <simple-with-actions :data="data" :rows="rows"></simple-with-actions>
  <pagination :paginate="data"></pagination>
</template>

<script>
import TableMenu from "../Components/Menus/TableMenu.vue";
import Pagination from "../Components/Pagination/Pagination.vue";
import SimpleWithActions from "../Components/Tables/SimpleWithActions.vue";
export default {
  components: { SimpleWithActions, Pagination, TableMenu },
  props: {
    data: Object
  },
  data() {
    return {
      rows: ["id", "name", "email"],
      routes: {
        create: "users.create",
        search: "users.index"
      }
    };
  }
};
</script>

<style></style>
