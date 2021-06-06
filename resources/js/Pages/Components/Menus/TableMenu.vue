<template>
  <div>
    <div>
      <h2 class="text-2xl font-semibold leading-tight">{{title}}</h2>
    </div>
    <div class="flex flex-col sm:flex-row">
      <div class="flex flex-row mb-1 sm:mb-0">
        <div class="relative">
          <!-- <select
            class="block w-full h-full px-4 py-2 pr-8 leading-tight text-gray-700 bg-white border border-gray-400 rounded-l appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
          >
            <option>5</option>
            <option>10</option>
            <option>20</option>
          </select> -->
          <div
            class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none"
          >
            <svg
              class="w-4 h-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
          </div>
        </div>
        <!-- <div class="relative">
          <select
            class="block w-full h-full px-4 py-2 pr-8 leading-tight text-gray-700 bg-white border-t border-b border-r border-gray-400 rounded-r appearance-none sm:rounded-r-none sm:border-r-0 focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500"
          >
            <option>All</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
          <div
            class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none"
          >
            <svg
              class="w-4 h-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
          </div>
        </div> -->
      </div>
      <div class="relative block">
        <span class="absolute inset-y-0 left-0 flex items-center h-full pl-2">
          <svg viewBox="0 0 24 24" class="w-4 h-4 text-gray-500 fill-current">
            <path
              d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"
            ></path>
          </svg>
        </span>
        <input
          placeholder="Search"
          v-model="search"
          @keydown="handleSearch"
          class="block w-full py-2 pl-8 pr-6 text-sm text-gray-700 placeholder-gray-400 bg-white border border-b border-gray-400 rounded-l rounded-r appearance-none sm:rounded-l-none focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
        />
      </div>

      <div class="relative block">
        <span class="absolute inset-y-0 left-0 flex items-center h-full pl-2">
        </span>
        <inertia-link :href='resolvedCreate' class="block px-6 py-2 ml-1 text-white bg-green-500 rounded-md shadow cursor-pointer hover:bg-green-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="inline w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
            </svg>
        </inertia-link>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
    props: {
        title: {
            default: '',
            type: String
        },
        routes: {
            default : {search: 'test', create: 'test'},
            type: Object
        }
    },
    data() {
        return {
            search: '',
            timeout: null
        }
    },
    computed: {
        resolvedCreate: function() {
            return route(this.routes.create)
        },
        resolvedSearch: function() {
            return route(this.routes.search)
        }
    },
    methods: {
        handleSearch() {
            window.clearTimeout(this.timeout)
            this.timeout = setTimeout(() => {
                this.$inertia.get(this.resolvedSearch, {search: this.search}, { preserveState: true })
            }, 333)
        }
    }
};
</script>

<style></style>
