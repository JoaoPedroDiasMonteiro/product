<template>
  <nav class="bg-white shadow" role="navigation">
    <div
      class="container flex flex-wrap items-center p-4 mx-auto md:flex-no-wrap"
    >
      <div class="mr-4 md:mr-8">
        <slot name="iconOrText"></slot>
      </div>
      <div class="w-full md:w-auto md:flex-grow md:flex md:items-center">
        <ul
          class="flex flex-col pt-4 mt-4 -mx-4 border-t md:flex-row md:items-center md:mx-0 md:ml-auto md:mt-0 md:pt-0 md:border-0"
        >
          <li class="relative block">
            <span
              class="absolute inset-y-0 left-0 flex items-center h-full pl-2"
            >
              <svg
                viewBox="0 0 24 24"
                class="w-4 h-4 text-gray-500 fill-current"
              >
                <path
                  d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"
                ></path>
              </svg>
            </span>
            <input
              placeholder="Search"
              v-model="search"
              @click="handleSearch"
              @keydown="handleSearch"
              type="search"
              class="block w-full py-2 pl-8 pr-6 text-sm text-gray-700 placeholder-gray-400 bg-white border border-b border-gray-400 rounded-l rounded-r appearance-none sm:rounded-l-none focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
            />
          </li>

          <li class="relative block">
            <span
              class="absolute inset-y-0 left-0 flex items-center h-full pl-2"
            >
            </span>
            <inertia-link
              :href="resolvedCreate"
              class="block px-6 py-2 ml-1 text-white bg-yellow-500 rounded-md shadow cursor-pointer hover:bg-yellow-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="inline w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </inertia-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    routes: {
      default: { search: "test", create: "test" },
      type: Object
    },
    searchProp: {
      default: '',
      type: String
    }
  },
  data() {
    return {
      search: this.searchProp,
      timeout: null
    };
  },
  computed: {
    resolvedCreate: function() {
      return route(this.routes.create);
    },
    resolvedSearch: function() {
      return route(this.routes.search);
    }
  },
  methods: {
    handleSearch() {
      window.clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.$inertia.get(
          this.resolvedSearch,
          { search: this.search },
          { preserveState: true }
        );
      }, 264);
    }
  }
};
</script>

<style></style>
