<template>
  <div>
    <nav
      class="flex flex-col w-64 h-screen px-0 bg-yellow-500 border border-yellow-500 tex-gray-900"
    >
      <!-- Profile Photo && Name -->
      <div class="flex flex-wrap mt-8">
        <div class="text-center" style="width: 100%">
          <span class="block mb-3 font-semibold text-white">{{user.name}}</span>
          <img
            src="https://picsum.photos/200"
            class="w-40 h-40 mx-auto rounded-full"
          />
        </div>
      </div>

      <!-- Dashboard Links -->
      <div class="mt-3 mb-4">
        <ul class="ml-0">
          <li>
            <inertia-link
              :class="{ active: isRoute('users.index') }"
              :href="route('users.index')"
              class="flex flex-row px-4 py-4 mb-2 text-gray-100 border-gray-300 rounded-lg hover:text-black hover:bg-white hover:font-bold hover:cursor-pointer"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              <span class="ml-2">Users</span>
            </inertia-link>
          </li>

          <li>
            <inertia-link
              :class="{ active: isRoute('products.') }"
              :href="route('products.index')"
              class="flex flex-row px-4 py-4 mb-2 text-gray-100 border-gray-300 rounded-lg hover:text-black hover:bg-white hover:font-bold hover:cursor-pointer"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"
                  />
                </svg>
              </span>
              <span class="ml-2">Products</span>
            </inertia-link>
          </li>

          <li>
            <inertia-link
              :class="{ active: isRoute('customers.') }"
              :href="route('customers.index')"
              class="flex flex-row px-4 py-4 mb-2 text-gray-100 border-gray-300 rounded-lg hover:text-black hover:bg-white hover:font-bold hover:cursor-pointer"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
                  />
                </svg>
              </span>
              <span class="ml-2">Customers</span>
            </inertia-link>

            <inertia-link
              :class="{ active: isRoute('sale-orders.') }"
              :href="route('sale-orders.index')"
              class="flex flex-row px-4 py-4 mb-2 text-gray-100 border-gray-300 rounded-lg hover:text-black hover:bg-white hover:font-bold hover:cursor-pointer"
            >
              <span>
               <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" />
                </svg>
              </span>
              <span class="ml-2">Sale Orders</span>
            </inertia-link>


            <inertia-link
              :class="{ active: isRoute('auth.login.logout') }"
              :href="route('auth.login.logout')"
              class="absolute bottom-0 flex flex-row px-4 py-4 mb-2 text-gray-100 border-gray-300 rounded-lg hover:text-black hover:bg-white hover:font-bold hover:cursor-pointer"
            >
              <span>
               <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd" />
              </svg>
              </span>
              <span class="ml-2">Sair</span>
            </inertia-link>


          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      default: {name: 'user', id: 1 },
      type: Object
    },
  },
  methods: {
    isRoute: name => {
      const current = route().current();
      return !!current.includes(name);
    }
  }
};
</script>

<style scoped>
.sactive {
  color: rgba(0, 0, 0, var(--tw-text-opacity));
  background-color: white;
}
</style>
