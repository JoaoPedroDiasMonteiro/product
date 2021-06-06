<template>
  <div class="flex flex-col items-center px-5 py-5 bg-white border-t xs:flex-row xs:justify-between">
    <span class="text-xs text-gray-900 xs:text-sm">
        Showing {{paginate.from}} to {{paginate.to}} of {{paginate.total}} Entries
    </span>
    <div class="inline-flex mt-2 xs:mt-0">
      <inertia-link v-if="paginate.prev_page_url" :href="paginate.prev_page_url" class="px-4 py-2 text-sm font-semibold text-gray-800 bg-gray-300 rounded-l hover:bg-gray-400">
        Prev
      </inertia-link>
      <inertia-link v-if="paginate.next_page_url" :href="paginate.next_page_url" class="px-4 py-2 text-sm font-semibold text-gray-800 bg-gray-300 rounded-r hover:bg-gray-400">
        Next
      </inertia-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    paginate: Object
  }
}
</script>

<style></style>
