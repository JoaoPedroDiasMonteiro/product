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
              :class="{ active: isRoute('users.destroy') }"
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
                    d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"
                  />
                </svg>
              </span>
              <span class="ml-2">Products</span>
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
  background-color: white;
}
</style>
