(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_EditTimeline_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EditTimeline.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EditTimeline.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      timeline: {}
    };
  },
  created: function created() {
    var _this = this;

    axios.get("/api/timeline/".concat(this.$route.params.id)).then(function (res) {
      _this.timeline = res.data;
      console.log(_this.timeline);
    });
  },
  methods: {
    updateTimeline: function updateTimeline() {
      var _this2 = this;

      console.log(this.timeline);
      axios.put("/api/update/".concat(this.$route.params.id), this.timeline).then(function (res) {
        console.log(res);

        _this2.$router.push({
          name: 'Dashboard'
        });
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/EditTimeline.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/EditTimeline.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EditTimeline_vue_vue_type_template_id_c8cb7a54___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditTimeline.vue?vue&type=template&id=c8cb7a54& */ "./resources/js/components/EditTimeline.vue?vue&type=template&id=c8cb7a54&");
/* harmony import */ var _EditTimeline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditTimeline.vue?vue&type=script&lang=js& */ "./resources/js/components/EditTimeline.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _EditTimeline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _EditTimeline_vue_vue_type_template_id_c8cb7a54___WEBPACK_IMPORTED_MODULE_0__.render,
  _EditTimeline_vue_vue_type_template_id_c8cb7a54___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/EditTimeline.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/EditTimeline.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/EditTimeline.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditTimeline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditTimeline.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EditTimeline.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditTimeline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/EditTimeline.vue?vue&type=template&id=c8cb7a54&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/EditTimeline.vue?vue&type=template&id=c8cb7a54& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditTimeline_vue_vue_type_template_id_c8cb7a54___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditTimeline_vue_vue_type_template_id_c8cb7a54___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditTimeline_vue_vue_type_template_id_c8cb7a54___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditTimeline.vue?vue&type=template&id=c8cb7a54& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EditTimeline.vue?vue&type=template&id=c8cb7a54&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EditTimeline.vue?vue&type=template&id=c8cb7a54&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EditTimeline.vue?vue&type=template&id=c8cb7a54& ***!
  \************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c(
          "form",
          {
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.updateTimeline($event)
              }
            }
          },
          [
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "date" } }, [_vm._v("Date")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.timeline.date,
                    expression: "timeline.date"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "date" },
                domProps: { value: _vm.timeline.date },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.timeline, "date", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c("label", { attrs: { for: "titre" } }, [_vm._v("titre")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.timeline.titre,
                    expression: "timeline.titre"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text" },
                domProps: { value: _vm.timeline.titre },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.timeline, "titre", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c("label", { attrs: { for: "formation" } }, [
                _vm._v("formation")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.timeline.formation,
                    expression: "timeline.formation"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text" },
                domProps: { value: _vm.timeline.formation },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.timeline, "formation", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c("label", { attrs: { for: "projets" } }, [_vm._v("projets")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.timeline.projets,
                    expression: "timeline.projets"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text" },
                domProps: { value: _vm.timeline.projets },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.timeline, "projets", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c("label", { attrs: { for: "content_projets" } }, [
                _vm._v("Contenu du projet")
              ]),
              _vm._v(" "),
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.timeline.content_projets,
                    expression: "timeline.content_projets"
                  }
                ],
                staticClass: "form-control",
                domProps: { value: _vm.timeline.content_projets },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.timeline,
                      "content_projets",
                      $event.target.value
                    )
                  }
                }
              }),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("label", { attrs: { for: "projets_annexes" } }, [
                _vm._v("Projets_annexes")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.timeline.projets_annexes,
                    expression: "timeline.projets_annexes"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text" },
                domProps: { value: _vm.timeline.projets_annexes },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.timeline,
                      "projets_annexes",
                      $event.target.value
                    )
                  }
                }
              }),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("label", { attrs: { for: "content_projets_annexes" } }, [
                _vm._v("Contenu des projets annexes")
              ]),
              _vm._v(" "),
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.timeline.content_projets_annexes,
                    expression: "timeline.content_projets_annexes"
                  }
                ],
                staticClass: "form-control",
                domProps: { value: _vm.timeline.content_projets_annexes },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.timeline,
                      "content_projets_annexes",
                      $event.target.value
                    )
                  }
                }
              }),
              _vm._v(" "),
              _c("br")
            ]),
            _vm._v(" "),
            _c(
              "button",
              { staticClass: "btn btn-primary", attrs: { type: "submit" } },
              [_vm._v("Update")]
            )
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);