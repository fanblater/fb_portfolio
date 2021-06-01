(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_CreateQuizzComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CreateQuizzComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CreateQuizzComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      form: {
        question: '',
        is_active: false,
        user_id: 0
      },
      formChoix: {
        id_question: 0,
        is_valide: false,
        choix: ''
      },
      questions: {},
      selected: '',
      choix: {},
      id_choix: 0,
      alert: null,
      alertchoix: null
    };
  },
  created: function created() {
    var _this = this;

    axios.get('http://127.0.0.1:8000/quizzlist').then(function (response) {
      console.log(response.data);
      _this.questions = response.data;
    })["catch"](function (err) {
      console.log(err);
    });
    axios.get('http://127.0.01:8000/choixlist').then(function (response) {
      _this.choix = response.data;
    })["catch"](function (err) {
      console.log(err);
    });
  },
  mounted: function mounted() {
    this.form.user_id = parseInt(this.$route.params.Pid);
  },
  methods: {
    addQuestion: function addQuestion() {
      var _this2 = this;

      axios.post('/api/storequestion', this.form).then(function () {
        console.log(_this2.form);
        _this2.alert = true;
      })["catch"](function (err) {
        _this2.alert = false;
        console.log(err);
      });
    },
    addChoix: function addChoix() {
      var _this3 = this;

      axios.post('/api/storechoix', this.formChoix).then(function () {
        console.log(_this3.formChoix);
        _this3.alertchoix = true;
        window.location.reload();
      })["catch"](function (err) {
        console.log(err);
        _this3.alertchoix = false;
      });
    },
    deleteChoix: function deleteChoix() {
      console.log(this.id_choix);
      axios["delete"]("/api/deletechoix/".concat(this.id_choix)).then(function (response) {
        console.log(response);
        window.location.reload();
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/CreateQuizzComponent.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/CreateQuizzComponent.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CreateQuizzComponent_vue_vue_type_template_id_ec50e682___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateQuizzComponent.vue?vue&type=template&id=ec50e682& */ "./resources/js/components/CreateQuizzComponent.vue?vue&type=template&id=ec50e682&");
/* harmony import */ var _CreateQuizzComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateQuizzComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/CreateQuizzComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _CreateQuizzComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _CreateQuizzComponent_vue_vue_type_template_id_ec50e682___WEBPACK_IMPORTED_MODULE_0__.render,
  _CreateQuizzComponent_vue_vue_type_template_id_ec50e682___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/CreateQuizzComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/CreateQuizzComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/CreateQuizzComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateQuizzComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreateQuizzComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CreateQuizzComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateQuizzComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/CreateQuizzComponent.vue?vue&type=template&id=ec50e682&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/CreateQuizzComponent.vue?vue&type=template&id=ec50e682& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateQuizzComponent_vue_vue_type_template_id_ec50e682___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateQuizzComponent_vue_vue_type_template_id_ec50e682___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateQuizzComponent_vue_vue_type_template_id_ec50e682___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreateQuizzComponent.vue?vue&type=template&id=ec50e682& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CreateQuizzComponent.vue?vue&type=template&id=ec50e682&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CreateQuizzComponent.vue?vue&type=template&id=ec50e682&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CreateQuizzComponent.vue?vue&type=template&id=ec50e682& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-sm-4" }, [
      _c(
        "form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.addQuestion($event)
            }
          }
        },
        [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.user_id,
                expression: "form.user_id"
              }
            ],
            attrs: { type: "hidden", name: "user_id" },
            domProps: { value: _vm.form.user_id },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "user_id", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _c("label", { attrs: { for: "question" } }, [_vm._v("Question")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.question,
                expression: "form.question"
              }
            ],
            staticClass: "form-control",
            attrs: { type: "text" },
            domProps: { value: _vm.form.question },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "question", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _c("label", { attrs: { for: "question_active" } }, [
            _vm._v("is_active")
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.is_active,
                expression: "form.is_active"
              }
            ],
            attrs: { type: "checkbox" },
            domProps: {
              checked: Array.isArray(_vm.form.is_active)
                ? _vm._i(_vm.form.is_active, null) > -1
                : _vm.form.is_active
            },
            on: {
              change: function($event) {
                var $$a = _vm.form.is_active,
                  $$el = $event.target,
                  $$c = $$el.checked ? true : false
                if (Array.isArray($$a)) {
                  var $$v = null,
                    $$i = _vm._i($$a, $$v)
                  if ($$el.checked) {
                    $$i < 0 &&
                      _vm.$set(_vm.form, "is_active", $$a.concat([$$v]))
                  } else {
                    $$i > -1 &&
                      _vm.$set(
                        _vm.form,
                        "is_active",
                        $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                      )
                  }
                } else {
                  _vm.$set(_vm.form, "is_active", $$c)
                }
              }
            }
          }),
          _vm._v(" "),
          _c(
            "button",
            { staticClass: "btn btn-success", attrs: { type: "submit" } },
            [_vm._v("Créer la question ")]
          )
        ]
      ),
      _vm._v(" "),
      _vm.alert === true
        ? _c("div", { staticClass: "alert alert-success" }, [
            _vm._v("Votre question à été ajouté")
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.alert === false
        ? _c("div", { staticClass: "alert alert-danger" }, [
            _vm._v("Une erreur s'est produite et trouve ton bug ;)")
          ])
        : _vm._e()
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-sm-4" }, [
      _c("label", { attrs: { for: "choix" } }, [_vm._v("Réponse")]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.formChoix.choix,
            expression: "formChoix.choix"
          }
        ],
        staticClass: "form-control",
        attrs: { type: "text" },
        domProps: { value: _vm.formChoix.choix },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.formChoix, "choix", $event.target.value)
          }
        }
      }),
      _vm._v(" "),
      _c(
        "form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.addChoix($event)
            }
          }
        },
        [
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.formChoix.id_question,
                  expression: "formChoix.id_question"
                }
              ],
              on: {
                change: function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.$set(
                    _vm.formChoix,
                    "id_question",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                }
              }
            },
            _vm._l(_vm.questions, function(q) {
              return _c("option", { domProps: { value: q.id } }, [
                _vm._v(
                  "\n                   " +
                    _vm._s(q.id) +
                    " - " +
                    _vm._s(q.question) +
                    "\n                "
                )
              ])
            }),
            0
          ),
          _vm._v(" "),
          _c("label", { attrs: { for: "choix_valide" } }, [
            _vm._v("Bonne réponse")
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.formChoix.is_valide,
                expression: "formChoix.is_valide"
              }
            ],
            attrs: { type: "checkbox" },
            domProps: {
              checked: Array.isArray(_vm.formChoix.is_valide)
                ? _vm._i(_vm.formChoix.is_valide, null) > -1
                : _vm.formChoix.is_valide
            },
            on: {
              change: function($event) {
                var $$a = _vm.formChoix.is_valide,
                  $$el = $event.target,
                  $$c = $$el.checked ? true : false
                if (Array.isArray($$a)) {
                  var $$v = null,
                    $$i = _vm._i($$a, $$v)
                  if ($$el.checked) {
                    $$i < 0 &&
                      _vm.$set(_vm.formChoix, "is_valide", $$a.concat([$$v]))
                  } else {
                    $$i > -1 &&
                      _vm.$set(
                        _vm.formChoix,
                        "is_valide",
                        $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                      )
                  }
                } else {
                  _vm.$set(_vm.formChoix, "is_valide", $$c)
                }
              }
            }
          }),
          _vm._v(" "),
          _c(
            "button",
            { staticClass: "btn btn-success", attrs: { type: "submit" } },
            [_vm._v("Créer la réponse ")]
          )
        ]
      ),
      _vm._v(" "),
      _vm.alertchoix === true
        ? _c("div", { staticClass: "alert alert-success" }, [
            _vm._v("Votre question à été ajouté")
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.alertchoix === false
        ? _c("div", { staticClass: "alert alert-danger" }, [
            _vm._v("Une erreur s'est produite et trouve ton bug ;)")
          ])
        : _vm._e()
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-sm-4" }, [
      _c(
        "form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.deleteChoix($event)
            }
          }
        },
        [
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.id_choix,
                  expression: "id_choix"
                }
              ],
              on: {
                change: function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.id_choix = $event.target.multiple
                    ? $$selectedVal
                    : $$selectedVal[0]
                }
              }
            },
            _vm._l(_vm.choix, function(c) {
              return _c("option", { domProps: { value: c.id } }, [
                _vm._v(
                  "\n                    " +
                    _vm._s(c.id) +
                    " - " +
                    _vm._s(c.choix) +
                    "\n                "
                )
              ])
            }),
            0
          ),
          _vm._v(" "),
          _c(
            "button",
            { staticClass: "btn btn-danger", attrs: { type: "submit" } },
            [_vm._v("Supprimer ce choix")]
          )
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);