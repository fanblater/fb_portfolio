(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Dashboard_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      user: null,
      timelines: {}
    };
  },
  created: function created() {
    var _this = this;

    axios.get('http://127.0.0.1:8000/timelinelist').then(function (response) {
      _this.timelines = response.data;
      console.log(_this.timelines);
    })["catch"](function (error) {
      return console.log(error);
    });
    console.log(this.timelines);
  },
  beforeCreate: function beforeCreate() {
    var _this2 = this;

    axios.get('/api/user').then(function (res) {
      _this2.user = res.data;
    });
  },
  methods: {
    deleteTimeline: function deleteTimeline(id) {
      axios["delete"]("/api/delete/".concat(id)).then(function (response) {
        console.log(response);
        window.location.reload();
      });
    },
    GoToQuestion: function GoToQuestion(id) {
      this.$router.push({
        name: 'editquizz',
        params: {
          Pid: id
        }
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Dashboard.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/Dashboard.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dashboard_vue_vue_type_template_id_040e2ab9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=040e2ab9& */ "./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/components/Dashboard.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Dashboard_vue_vue_type_template_id_040e2ab9___WEBPACK_IMPORTED_MODULE_0__.render,
  _Dashboard_vue_vue_type_template_id_040e2ab9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Dashboard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Dashboard.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/Dashboard.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_040e2ab9___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_040e2ab9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_040e2ab9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=template&id=040e2ab9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.user
    ? _c("div", [
        _c("div", { staticClass: "row mb-5" }, [
          _c("div", { staticClass: "col-sm-10" }, [
            _vm._v(
              "\nUser information :\n\nuser id = > " +
                _vm._s(_vm.user.id) +
                "\nYou'r logged as " +
                _vm._s(_vm.user.name) +
                "\nYou'r email is " +
                _vm._s(_vm.user.email) +
                "\n\n"
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-2" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-warning",
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.logout($event)
                  }
                }
              },
              [_vm._v("Logout")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-primary",
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.GoToQuestion(_vm.user.id)
                  }
                }
              },
              [_vm._v("Create question")]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-sm-10" }, [
            _c("table", { staticClass: "table" }, [
              _c("thead", { staticClass: "thead-dark" }, [
                _c("tr", [
                  _c("th", { staticClass: "col" }, [_vm._v("id")]),
                  _vm._v(" "),
                  _c("th", { staticClass: "col" }, [_vm._v("date")]),
                  _vm._v(" "),
                  _c("th", { staticClass: "col" }, [_vm._v("titre")]),
                  _vm._v(" "),
                  _c("th", { staticClass: "col" }, [_vm._v("formation")]),
                  _vm._v(" "),
                  _c("th", { staticClass: "col" }, [_vm._v("projets")]),
                  _vm._v(" "),
                  _c("th", { staticClass: "col" }, [_vm._v("contenu projets")]),
                  _vm._v(" "),
                  _c("th", { staticClass: "col" }, [_vm._v("projets_annexes")]),
                  _vm._v(" "),
                  _c("th", { staticClass: "col" }, [
                    _vm._v("contenu projets annexes")
                  ]),
                  _vm._v(" "),
                  _c("th", { staticClass: "col" }, [_vm._v("Actions")]),
                  _vm._v(" "),
                  _c(
                    "th",
                    { staticClass: "col" },
                    [
                      _c("router-link", { attrs: { to: "/create" } }, [
                        _vm._v("Create timeline")
                      ])
                    ],
                    1
                  )
                ])
              ]),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.timelines, function(timeline) {
                  return _c("tr", { key: timeline.id }, [
                    _c("th", { attrs: { scope: "row" } }, [
                      _vm._v(_vm._s(timeline.id))
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(timeline.date))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(timeline.titre))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(timeline.formation))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(timeline.projets))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(timeline.content_projets))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(timeline.projets_annexes))]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(_vm._s(timeline.content_projets_annexes))
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c(
                        "div",
                        { staticClass: "btn-group", attrs: { role: "group" } },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "btn btn-success",
                              attrs: {
                                to: {
                                  name: "update",
                                  params: { id: timeline.id }
                                }
                              }
                            },
                            [_vm._v("Edit")]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-danger",
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.deleteTimeline(timeline.id)
                                }
                              }
                            },
                            [_vm._v("Delete")]
                          )
                        ],
                        1
                      )
                    ])
                  ])
                }),
                0
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-2" })
        ])
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);