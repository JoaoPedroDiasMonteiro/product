<template>
  <div>
    <nav
      class="flex flex-col w-64 h-screen px-0 bg-yellow-500 border border-yellow-500 tex-gray-900"
    >
      <!-- Profile Photo && Name -->
      <div class="flex flex-wrap mt-8">
        <div class="text-center" style="width: 100%">
          <span class="block mb-3 font-semibold text-white">Ava Harper</span>
          <img
            src="https://randomuser.me/api/portraits/women/21.jpg"
            class="w-40 h-40 mx-auto rounded-full"
          />
        </div>
      </div>

      <!-- Dashboard Links -->
      <div class="mt-3 mb-4">
        <ul class="ml-0">
          <li>
            <inertia-link
              :class="{ active: isRoute('admin.dashboard.index') }"
              href="/"
              class="flex flex-row px-4 py-4 mb-2 text-gray-100 border-gray-300 rounded-lg hover:text-black hover:bg-gray-300 hover:font-bold hover:cursor-pointer"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
              </span>
              <span class="ml-2">Dashboard</span>
            </inertia-link>
          </li>

          <li>
            <inertia-link
              :class="{ active: isRoute('admin.dashboard.products.') }"
              href="route('admin.dashboard.products.index')"
              class="flex flex-row px-4 py-4 mb-2 text-gray-100 border-gray-300 rounded-lg hover:text-black hover:bg-gray-300 hover:font-bold hover:cursor-pointer"
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
              <span class="ml-2">Produtos</span>
            </inertia-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    isRoute: name => {
      const current = route().current();
      return !!current.includes(name);
    }
  }
};
</script>

<style scoped>
.active {
  color: rgba(0, 0, 0, var(--tw-text-opacity));
  background-color: rgba(209, 213, 219, var(--tw-bg-opacity));
}
</style>
