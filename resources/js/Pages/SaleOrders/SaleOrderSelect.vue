<template>
<div>
  <label id="listbox-label" class="block">
    
  </label>

  
  <div class="relative mt-1">
    <button  @click="toggleShow" type="button" class="relative w-full py-2 pl-3 pr-10 text-left bg-white border border-gray-300 rounded-md shadow-sm cursor-default focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
      <span class="flex items-center">
        <span class="block ml-3 truncate">
          {{getName()}}
        </span>
      </span>
      <span class="absolute inset-y-0 right-0 flex items-center pr-2 ml-3 pointer-events-none">
        <!-- Heroicon name: solid/selector -->
        <svg class="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </span>
    </button>


    <ul v-if="shouldShow" class="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white border border-yellow-500 rounded-md shadow-lg max-h-53 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm" tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3">

    <slot></slot>

      <li @click="setSelected(item)" v-for="item in data" :key="item.id" class="relative py-2 pl-3 text-gray-900 cursor-default select-none pr-9 hover:text-white hover:bg-yellow-600" id="listbox-option-0" role="option">
        <div class="flex items-center">
          <span class="block ml-3 font-normal truncate">
            {{item.name}}
          </span>
        </div>
        <span class="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600" v-if="selected === item.name">
          <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </span>
      </li>


    </ul>
  </div>
</div>
</template>

<script>
export default {
  props: {
    data: Object,
    title: {
        type: String,
        default: 'Select'
    },
    name: {
        type: String,
        default: null
    }
  },
  data() {
    return {
      shouldShow: false,
      selected: this.title,
      item: ''
    };
  },
  methods: {
    toggleShow: function() {
      this.shouldShow = !this.shouldShow;
    },
    getName: function() {
      if (this.name !== null) {
        return this.name
      }

      return this.selected
    },
    setSelected: function(item) {
      this.selected = item.name;
      this.shouldShow = false;
      this.item = item
      this.$emit('selectedProduct', item)
    }
  }
};
</script>

<style></style>
