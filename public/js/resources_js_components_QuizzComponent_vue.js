(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_QuizzComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/QuizzComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/QuizzComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      questionchoix: {},
      displayQuizz: false,
      displayHeadQ: true,
      questionIndex: 0,
      userResponses: Array(),
      counter: 0,
      scoremessage: 'Felicitation c\'est un sans fautes !',
      scoremessageunder: 'Bon ce n\'est pas encore ça mais n\'hesitez pas à me contacter pour en savoir plus'
    };
  },
  beforeCreate: function beforeCreate() {
    var _this = this;

    // get question choix and
    // group by question with creation new array of choix
    axios.get('http://127.0.0.1:8000/choixlist').then(function (result) {
      _this.questionchoix = _(result.data[0]).groupBy('question').map(function (group, question) {
        return {
          question: question,
          choix: _.map(group, _.partial(_.omit, _, 'question'))
        };
      }).value();
    })["catch"](function (err) {
      console.log(err);
    });
  },
  methods: {
    // Display quizz on click openquizz
    openQuizz: function openQuizz() {
      var _this2 = this;

      this.displayQuizz = true;
      setTimeout(function () {
        _this2.displayHeadQ = false;
      }, 1000);
    },
    // next question on click with incrementation of index
    next: function next() {
      this.questionIndex++;
    },
    // score function to return val length by filtering
    score: function score() {
      return this.userResponses.filter(function (val) {
        return val;
      }).length;
    },
    tryagain: function tryagain() {},
    gotoContact: function gotoContact() {
      this.$router.push({
        name: 'contact'
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/QuizzComponent.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/QuizzComponent.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _QuizzComponent_vue_vue_type_template_id_5913f0e3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuizzComponent.vue?vue&type=template&id=5913f0e3& */ "./resources/js/components/QuizzComponent.vue?vue&type=template&id=5913f0e3&");
/* harmony import */ var _QuizzComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuizzComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/QuizzComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _QuizzComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _QuizzComponent_vue_vue_type_template_id_5913f0e3___WEBPACK_IMPORTED_MODULE_0__.render,
  _QuizzComponent_vue_vue_type_template_id_5913f0e3___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/QuizzComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/QuizzComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/QuizzComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizzComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QuizzComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/QuizzComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizzComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/QuizzComponent.vue?vue&type=template&id=5913f0e3&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/QuizzComponent.vue?vue&type=template&id=5913f0e3& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizzComponent_vue_vue_type_template_id_5913f0e3___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizzComponent_vue_vue_type_template_id_5913f0e3___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizzComponent_vue_vue_type_template_id_5913f0e3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QuizzComponent.vue?vue&type=template&id=5913f0e3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/QuizzComponent.vue?vue&type=template&id=5913f0e3&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/QuizzComponent.vue?vue&type=template&id=5913f0e3&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/QuizzComponent.vue?vue&type=template&id=5913f0e3& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    _c(
      "div",
      { staticClass: "col-md-12" },
      [
        _vm.displayHeadQ
          ? _c("div", { staticClass: "quizz-head" }, [
              _c("h1", [_vm._v("Êtes vous prêt ?")]),
              _vm._v(" "),
              _c("button", { on: { click: _vm.openQuizz } }, [
                _vm._v("Gooooooooooo !")
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("transition", { attrs: { name: "slide", mode: "out-in" } }, [
          _vm.displayQuizz
            ? _c(
                "div",
                { staticClass: "quizz-block" },
                [
                  _vm._l(_vm.questionchoix, function(item, index) {
                    return _c("div", { key: index, staticClass: "question" }, [
                      _vm.questionIndex === index
                        ? _c(
                            "div",
                            { staticClass: "question-reponse" },
                            [
                              _c("h5", [_vm._v(_vm._s(item.question))]),
                              _vm._v(" "),
                              _vm._l(item.choix, function(r, i) {
                                return _c(
                                  "div",
                                  { key: i, staticClass: "reponseQ" },
                                  [
                                    _c("label", { attrs: { for: "reponse" } }, [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.userResponses[index],
                                            expression: "userResponses[index]"
                                          }
                                        ],
                                        attrs: { type: "radio", name: index },
                                        domProps: {
                                          value: r.is_valide,
                                          checked: _vm._q(
                                            _vm.userResponses[index],
                                            r.is_valide
                                          )
                                        },
                                        on: {
                                          change: function($event) {
                                            return _vm.$set(
                                              _vm.userResponses,
                                              index,
                                              r.is_valide
                                            )
                                          }
                                        }
                                      }),
                                      _vm._v(
                                        " " +
                                          _vm._s(r.choix) +
                                          "\n                            "
                                      )
                                    ])
                                  ]
                                )
                              }),
                              _vm._v(" "),
                              _c("button", { on: { click: _vm.next } }, [
                                _vm._v("Prochaine question")
                              ])
                            ],
                            2
                          )
                        : _vm._e()
                    ])
                  }),
                  _vm._v(" "),
                  _vm.questionIndex === _vm.questionchoix.length
                    ? _c("div", { staticClass: "score" }, [
                        _c("p", [
                          _vm._v(
                            _vm._s(_vm.score()) +
                              " / " +
                              _vm._s(_vm.questionIndex)
                          )
                        ]),
                        _vm._v(" "),
                        _vm.score() === _vm.questionIndex
                          ? _c("div", { staticClass: "congrat-message" }, [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(_vm.scoremessage) +
                                  "\n                    "
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.score() < _vm.questionIndex
                          ? _c("div", { staticClass: "oops-message" }, [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(_vm.scoremessageunder) +
                                  "\n                        "
                              ),
                              _c(
                                "button",
                                {
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.tryagain()
                                    }
                                  }
                                },
                                [_vm._v("On réessaie !")]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.gotoContact()
                                    }
                                  }
                                },
                                [_vm._v("Contact")]
                              )
                            ])
                          : _vm._e()
                      ])
                    : _vm._e()
                ],
                2
              )
            : _vm._e()
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);