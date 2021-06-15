<template>
  <div class="flex">
    <main-side-bar :user="user"></main-side-bar>

    <div class="w-full h-screen overflow-y-scroll">
      <slot></slot>
    </div>
    <floating-error :errors="errors"></floating-error>
  </div>
</template>

<script>
import FloatingError from "../Messages/FloatingError.vue";
import MainSideBar from './MainSideBar.vue';

export default {
  components: { FloatingError, MainSideBar },
  props: {
    errors: Object,
    user: Object
  },
  methods: {
    isRoute: name => {
      const current = route().current();
      return !!current.includes(name);
    }
  }
};
</script>
