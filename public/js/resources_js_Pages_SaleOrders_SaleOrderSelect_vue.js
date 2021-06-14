(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_SaleOrders_SaleOrderSelect_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SaleOrders/SaleOrderSelect.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SaleOrders/SaleOrderSelect.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    data: Object,
    title: {
      type: String,
      "default": 'Select'
    },
    name: {
      type: String,
      "default": null
    }
  },
  data: function data() {
    return {
      shouldShow: false,
      selected: this.title,
      item: ''
    };
  },
  methods: {
    toggleShow: function toggleShow() {
      this.shouldShow = !this.shouldShow;
    },
    getName: function getName() {
      if (this.name !== null) {
        return this.name;
      }

      return this.selected;
    },
    setSelected: function setSelected(item) {
      this.selected = item.name;
      this.shouldShow = false;
      this.item = item;
      this.$emit('selectedProduct', item);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SaleOrders/SaleOrderSelect.vue?vue&type=template&id=35b55969":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SaleOrders/SaleOrderSelect.vue?vue&type=template&id=35b55969 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  id: "listbox-label",
  "class": "block"
}, null, -1
/* HOISTED */
);

var _hoisted_2 = {
  "class": "relative mt-1"
};
var _hoisted_3 = {
  "class": "flex items-center"
};
var _hoisted_4 = {
  "class": "block ml-3 truncate"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "absolute inset-y-0 right-0 flex items-center pr-2 ml-3 pointer-events-none"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Heroicon name: solid/selector "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  "class": "w-5 h-5 text-gray-400",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "fill-rule": "evenodd",
  d: "M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
  "clip-rule": "evenodd"
})])], -1
/* HOISTED */
);

var _hoisted_6 = {
  key: 0,
  "class": "absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white border border-yellow-500 rounded-md shadow-lg max-h-53 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
  tabindex: "-1",
  role: "listbox",
  "aria-labelledby": "listbox-label",
  "aria-activedescendant": "listbox-option-3"
};
var _hoisted_7 = {
  "class": "flex items-center"
};
var _hoisted_8 = {
  "class": "block ml-3 font-normal truncate"
};
var _hoisted_9 = {
  key: 0,
  "class": "absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  "class": "w-5 h-5",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "fill-rule": "evenodd",
  d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
  "clip-rule": "evenodd"
})], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.toggleShow && $options.toggleShow.apply($options, arguments);
    }),
    type: "button",
    "class": "relative w-full py-2 pl-3 pr-10 text-left bg-white border border-gray-300 rounded-md shadow-sm cursor-default focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm",
    "aria-haspopup": "listbox",
    "aria-expanded": "true",
    "aria-labelledby": "listbox-label"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getName()), 1
  /* TEXT */
  )]), _hoisted_5]), $data.shouldShow ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("ul", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default"), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.data, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("li", {
      onClick: function onClick($event) {
        return $options.setSelected(item);
      },
      key: item.id,
      "class": "relative py-2 pl-3 text-gray-900 cursor-default select-none pr-9 hover:text-white hover:bg-yellow-600",
      id: "listbox-option-0",
      role: "option"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name), 1
    /* TEXT */
    )]), $data.selected === item.name ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_9, [_hoisted_10])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8
    /* PROPS */
    , ["onClick"]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]);
}

/***/ }),

/***/ "./resources/js/Pages/SaleOrders/SaleOrderSelect.vue":
/*!***********************************************************!*\
  !*** ./resources/js/Pages/SaleOrders/SaleOrderSelect.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SaleOrderSelect_vue_vue_type_template_id_35b55969__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SaleOrderSelect.vue?vue&type=template&id=35b55969 */ "./resources/js/Pages/SaleOrders/SaleOrderSelect.vue?vue&type=template&id=35b55969");
/* harmony import */ var _SaleOrderSelect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SaleOrderSelect.vue?vue&type=script&lang=js */ "./resources/js/Pages/SaleOrders/SaleOrderSelect.vue?vue&type=script&lang=js");



_SaleOrderSelect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _SaleOrderSelect_vue_vue_type_template_id_35b55969__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_SaleOrderSelect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Pages/SaleOrders/SaleOrderSelect.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_SaleOrderSelect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Pages/SaleOrders/SaleOrderSelect.vue?vue&type=script&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/SaleOrders/SaleOrderSelect.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SaleOrderSelect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SaleOrderSelect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SaleOrderSelect.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SaleOrders/SaleOrderSelect.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/SaleOrders/SaleOrderSelect.vue?vue&type=template&id=35b55969":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/SaleOrders/SaleOrderSelect.vue?vue&type=template&id=35b55969 ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SaleOrderSelect_vue_vue_type_template_id_35b55969__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SaleOrderSelect_vue_vue_type_template_id_35b55969__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SaleOrderSelect.vue?vue&type=template&id=35b55969 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SaleOrders/SaleOrderSelect.vue?vue&type=template&id=35b55969");


/***/ })

}]);