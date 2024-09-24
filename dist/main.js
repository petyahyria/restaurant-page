/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 208:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

body{
    background-color: #cbd5e1;
    font-family: "Montserrat", sans-serif;
}

header, #content{
    width: 70vw;
    margin: 0 auto;
    background-color: #fafafa;
}

header{
    padding: 20px;
}

header>nav{
    display: flex;
    gap: 20px;
    justify-content: center;
}

header > nav > button{
    display: block;
    width: 300px;
    padding: 8px 16px;
    border-style: none;
    background-color: #020617;
    color: #fafafa;
    font-size: 16px;
    border: 3px solid transparent;
}

header > nav > button:hover{
    background-color: #fafafa;
    color: #020617;
    border: 3px solid #020617;
}

.active-btn{
    background-color: #fafafa;
    color: #020617;
    border: 3px solid #020617;
}

.active-btn:hover{
    background-color: #020617;
    color: #fafafa;
    border: 3px solid transparent;
}

#content{
    padding: 20px;
}

.hero-image{
    display: block;
    height: auto;
    width: 100%;
    aspect-ratio: 16/7;
}

.description{
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-weight: 500;
    font-size: 16px;
}

/* menu */

.starters, .main-dishes, .sides, .desserts , .drinks{
    padding: 10px;
    gap: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(calc(70vw/2.6),1fr));
}

.starters > div,
.main-dishes > div, 
.sides>div, 
.desserts > div, 
.drinks > div{
    padding: 10px;
    border: 3px solid #020617;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.starters > div > img, 
.main-dishes > div > img, 
.sides > div > img, 
.desserts > div > img, 
.drinks > div > img {
    display: block;
    width: 100%;
    height: auto;
    border: 3px solid #cbd5e1;
    aspect-ratio: 16/9;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,UAAU;IACV,SAAS;AACb;;AAEA;IACI,yBAAyB;IACzB,qCAAqC;AACzC;;AAEA;IACI,WAAW;IACX,cAAc;IACd,yBAAyB;AAC7B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,SAAS;IACT,uBAAuB;AAC3B;;AAEA;IACI,cAAc;IACd,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,yBAAyB;IACzB,cAAc;IACd,eAAe;IACf,6BAA6B;AACjC;;AAEA;IACI,yBAAyB;IACzB,cAAc;IACd,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;IACzB,cAAc;IACd,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;IACzB,cAAc;IACd,6BAA6B;AACjC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,YAAY;IACZ,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,gBAAgB;IAChB,eAAe;AACnB;;AAEA,SAAS;;AAET;IACI,aAAa;IACb,SAAS;IACT,aAAa;IACb,mEAAmE;AACvE;;AAEA;;;;;IAKI,aAAa;IACb,yBAAyB;IACzB,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;;;;;IAKI,cAAc;IACd,WAAW;IACX,YAAY;IACZ,yBAAyB;IACzB,kBAAkB;AACtB","sourcesContent":["*{\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\n\nbody{\n    background-color: #cbd5e1;\n    font-family: \"Montserrat\", sans-serif;\n}\n\nheader, #content{\n    width: 70vw;\n    margin: 0 auto;\n    background-color: #fafafa;\n}\n\nheader{\n    padding: 20px;\n}\n\nheader>nav{\n    display: flex;\n    gap: 20px;\n    justify-content: center;\n}\n\nheader > nav > button{\n    display: block;\n    width: 300px;\n    padding: 8px 16px;\n    border-style: none;\n    background-color: #020617;\n    color: #fafafa;\n    font-size: 16px;\n    border: 3px solid transparent;\n}\n\nheader > nav > button:hover{\n    background-color: #fafafa;\n    color: #020617;\n    border: 3px solid #020617;\n}\n\n.active-btn{\n    background-color: #fafafa;\n    color: #020617;\n    border: 3px solid #020617;\n}\n\n.active-btn:hover{\n    background-color: #020617;\n    color: #fafafa;\n    border: 3px solid transparent;\n}\n\n#content{\n    padding: 20px;\n}\n\n.hero-image{\n    display: block;\n    height: auto;\n    width: 100%;\n    aspect-ratio: 16/7;\n}\n\n.description{\n    padding: 20px 10px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    font-weight: 500;\n    font-size: 16px;\n}\n\n/* menu */\n\n.starters, .main-dishes, .sides, .desserts , .drinks{\n    padding: 10px;\n    gap: 20px;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(calc(70vw/2.6),1fr));\n}\n\n.starters > div,\n.main-dishes > div, \n.sides>div, \n.desserts > div, \n.drinks > div{\n    padding: 10px;\n    border: 3px solid #020617;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.starters > div > img, \n.main-dishes > div > img, \n.sides > div > img, \n.desserts > div > img, \n.drinks > div > img {\n    display: block;\n    width: 100%;\n    height: auto;\n    border: 3px solid #cbd5e1;\n    aspect-ratio: 16/9;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 314:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 354:
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ 72:
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 659:
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ 540:
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ 56:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 825:
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ 113:
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "./";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(72);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(825);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(659);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(56);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(540);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(113);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/style.css
var style = __webpack_require__(208);
;// CONCATENATED MODULE: ./src/style.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(style/* default */.A, options);




       /* harmony default export */ const src_style = (style/* default */.A && style/* default */.A.locals ? style/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./src/modules/variables.js


const root = document.querySelector("#content");

;// CONCATENATED MODULE: ./src/images/homepage-img.jpg
const homepage_img_namespaceObject = __webpack_require__.p + "3ee405960d06e05ec2e9.jpg";
;// CONCATENATED MODULE: ./src/modules/loadHomepage.js




function loadHomepage(){
    
    const homepageImage = document.createElement("img");
    homepageImage.src = homepage_img_namespaceObject;
    homepageImage.classList.add("hero-image");
    
    const header = document.createElement("h1");
    header.textContent = "Welcome to Manna Garden";
    const descriptionDiv = document.createElement("div");
    descriptionDiv.classList.add("description");
    descriptionDiv.innerHTML = `
    <p>At Manna Garden, we believe that food is a divine gift, meant to nourish both body and soul. Inspired by the clean, wholesome principles found in the Bible, our meals are crafted with the finest organic ingredients, ensuring that every dish is pure, natural, and bursting with life-giving nutrients.</p>

    <p>Our menu is rooted in the abundance of the earth, offering a rich selection of plant-based and clean, ethically-sourced proteins. From garden-fresh produce to ancient grains, each ingredient is handpicked for its purity, sustainability, and alignment with Biblical dietary principles.</p>

    <p>We also take great care in providing clean meats, carefully chosen based on biblical standards. Each selection of meat is sourced from ethically raised animals, free from additives or artificial treatments. Whether it's grass-fed beef, pasture-raised poultry, or sustainably sourced fish, we ensure that all our meats are both wholesome and in harmony with ancient guidelines for clean, healthy living.</p>

    <p>At Manna Garden, we invite you to experience a sacred connection with your food. Every meal is prepared with care, honoring the earth's bounty and delivering flavors that are as nourishing as they are delicious.</p>

    <p>Whether you’re seeking a peaceful meal or a gathering with loved ones, our serene atmosphere reflects the tranquility of a garden—perfect for savoring life’s most essential blessings.</p>

    <p>Come and dine with us, where every meal is a gift, and every bite is a celebration of health, wholeness, and faith.</p>
`;


    root.appendChild(header);
    root.appendChild(homepageImage);
    root.appendChild(descriptionDiv);
}
;// CONCATENATED MODULE: ./src/images/gardenOfEdenSalad.jpeg
const gardenOfEdenSalad_namespaceObject = __webpack_require__.p + "6e9281e15105873ea952.jpeg";
;// CONCATENATED MODULE: ./src/images/lentilAndHerbSoap.jpg
const lentilAndHerbSoap_namespaceObject = __webpack_require__.p + "07ba9b476ad0b856d13d.jpg";
;// CONCATENATED MODULE: ./src/images/oliveAndFlatbreadPlatter.jpg
const oliveAndFlatbreadPlatter_namespaceObject = __webpack_require__.p + "4ae37858653cb86f03d7.jpg";
;// CONCATENATED MODULE: ./src/images/ancientGrainAndHerb.jpg
const ancientGrainAndHerb_namespaceObject = __webpack_require__.p + "fa4f0f3dfc1be3b826fc.jpg";
;// CONCATENATED MODULE: ./src/images/grilledLamb.jpg
const grilledLamb_namespaceObject = __webpack_require__.p + "4cc156af6da3eb44916d.jpg";
;// CONCATENATED MODULE: ./src/images/mannaBowl.jpg
const mannaBowl_namespaceObject = __webpack_require__.p + "9772aa64ee52a49407b5.jpg";
;// CONCATENATED MODULE: ./src/images/fishGalilee.jpg
const fishGalilee_namespaceObject = __webpack_require__.p + "c949946f773fbe3be1db.jpg";
;// CONCATENATED MODULE: ./src/images/grapeLeavesWithQuinoa.jpg
const grapeLeavesWithQuinoa_namespaceObject = __webpack_require__.p + "615e8079acf5cf75e444.jpg";
;// CONCATENATED MODULE: ./src/images/harvestPlate.jpg
const harvestPlate_namespaceObject = __webpack_require__.p + "0aa2da72dda95be0df61.jpg";
;// CONCATENATED MODULE: ./src/images/salmonWithHoney.jpg
const salmonWithHoney_namespaceObject = __webpack_require__.p + "5669b14fb3060dc87f0e.jpg";
;// CONCATENATED MODULE: ./src/images/rootVegetables.jpg
const rootVegetables_namespaceObject = __webpack_require__.p + "13f9c994e7435a5cb5fc.jpg";
;// CONCATENATED MODULE: ./src/images/grainPillaf.jpg
const grainPillaf_namespaceObject = __webpack_require__.p + "947e4de43173ac4b484a.jpg";
;// CONCATENATED MODULE: ./src/images/sauteedGreens.jpg
const sauteedGreens_namespaceObject = __webpack_require__.p + "1faace68a49bb609bff0.jpg";
;// CONCATENATED MODULE: ./src/images/roastedCauliFlower.jpg
const roastedCauliFlower_namespaceObject = __webpack_require__.p + "3e726b27fcdd7103cd82.jpg";
;// CONCATENATED MODULE: ./src/images/honeyAndFigTart.jpg
const honeyAndFigTart_namespaceObject = __webpack_require__.p + "fe840c4370701601176e.jpg";
;// CONCATENATED MODULE: ./src/images/almondAndDateCake.jpg
const almondAndDateCake_namespaceObject = __webpack_require__.p + "e119716eb4fd67829075.jpg";
;// CONCATENATED MODULE: ./src/images/pomegranateSorbet.jpg
const pomegranateSorbet_namespaceObject = __webpack_require__.p + "97a6f14efb9ec4e059d2.jpg";
;// CONCATENATED MODULE: ./src/images/coconutAlmondBlissBites.jpg
const coconutAlmondBlissBites_namespaceObject = __webpack_require__.p + "c4109e96c6b5dc3d9b73.jpg";
;// CONCATENATED MODULE: ./src/images/herbalInfusionTea.jpg
const herbalInfusionTea_namespaceObject = __webpack_require__.p + "53e481e6baf4490b3557.jpg";
;// CONCATENATED MODULE: ./src/images/pomegranateAndOrangeSpitzer.jpg
const pomegranateAndOrangeSpitzer_namespaceObject = __webpack_require__.p + "8341fd334bd1b0896acf.jpg";
;// CONCATENATED MODULE: ./src/images/cucumberAndLemonWater.jpg
const cucumberAndLemonWater_namespaceObject = __webpack_require__.p + "71efc5ce4c67e9c45172.jpg";
;// CONCATENATED MODULE: ./src/images/figAndHoneyIcedTea.jpg
const figAndHoneyIcedTea_namespaceObject = __webpack_require__.p + "8549e3b2dde5c5342993.jpg";
;// CONCATENATED MODULE: ./src/modules/loadMenu.js

;
























function loadMenupage(){
    const content = document.createElement("div");

    content.innerHTML = `
    
    <h1>Starters:</h1>
    <div class="starters">
        <div>
            <h2>Garden of Eden Salad</h2>
            <img src="${gardenOfEdenSalad_namespaceObject}" alt="salad">
            <p>A fresh mix of organic greens, heirloom tomatoes, cucumbers, olives, and figs, dressed with cold-pressed olive oil and a sprinkle of sea salt.</p>
        </div>
        <div>
            <h2>Lentil & Herb Soup</h2>
            <img src="${lentilAndHerbSoap_namespaceObject}" alt="soup">
            <p>A hearty, biblical-inspired soup made with organic lentils, fresh herbs, garlic, and a hint of lemon.</p>
        </div>

        <div>
            <h2>Olive & Flatbread Platter</h2>
            <img src="${oliveAndFlatbreadPlatter_namespaceObject}" alt="bread with olives">
            <p>House-baked flatbread served with a trio of marinated olives, hummus, and extra-virgin olive oil.</p>
        </div>
        <div>
            <h2>Ancient Grain & Herb Fritters</h2>
            <img src="${ancientGrainAndHerb_namespaceObject}" alt="crispy fritters">
            <p>Crispy fritters made from a blend of organic quinoa, millet, and fresh herbs, lightly fried and served with a tangy yogurt dipping sauce.</p>
        </div>
    </div>

    <h1>Main Dishes:</h1>
    <div class="main-dishes">
        <div>
            <h2>Grilled Pasture-Raised Lamb with Herbs</h2>
            <img src="${grilledLamb_namespaceObject}" alt="grilled lamb with roots">
            <p>Tender lamb marinated in a blend of rosemary, thyme, and garlic, served with roasted root vegetables and a side of ancient grains.</p>
        </div>
        <div>
            <h2>Manna Bowl</h2>
            <img src="${mannaBowl_namespaceObject}" alt="roasted cheakpeas">
            <p>A nourishing bowl filled with quinoa, roasted chickpeas, sweet potatoes, avocado, and drizzled with tahini dressing.</p>
        </div>
        <div>
            <h2>Fish of Galilee</h2>
            <img src="${fishGalilee_namespaceObject}" alt="fish and lemon">
            <p>Grilled sustainably-sourced fish (such as tilapia or sea bass) seasoned with herbs and lemon, served alongside wild rice and sautéed greens.</p>
        </div>
        <div>
            <h2>Stuffed Grape Leaves with Quinoa & Pomegranate</h2>
            <img src="${grapeLeavesWithQuinoa_namespaceObject}" alt="quinoa">
            <p>Grape leaves stuffed with a mixture of quinoa, pine nuts, herbs, and pomegranate seeds, served with a lemon yogurt sauce.</p>
        </div>    
        <div>
            <h2>Biblical Harvest Plate</h2>
            <img src="${harvestPlate_namespaceObject}" alt="salad">
            <p>A colorful medley of roasted seasonal vegetables, ancient grains, and a variety of legumes, topped with fresh herbs and a drizzle of olive oil.</p>
        </div>
        <div>
            <h2>Cedar Plank Salmon with Honey Glaze</h2>
            <img src="${salmonWithHoney_namespaceObject}" alt="salmon">
            <p>Wild-caught salmon, marinated in a delicate honey and herb glaze, roasted on a cedar plank for a smoky flavor. Served with roasted asparagus and a side of ancient grain pilaf.</p>
        </div>

    </div>
    
    <h1>Sides:</h1>
    <div class="sides">
        <div>
            <h2>Roasted Root Vegetables</h2>
            <img src="${rootVegetables_namespaceObject}" alt="roasted vegetables">
            <p>A blend of carrots, parsnips, and beets roasted with honey and olive oil.</p>
        </div>
        <div>
            <h2>Ancient Grain Pilaf</h2>
            <img src="${grainPillaf_namespaceObject}" alt="cereal">
            <p>A mix of quinoa, farro, and barley, seasoned with fresh herbs and lemon zest.</p>
        </div>
        <div>
            <h2>Sautéed Greens with Garlic & Olive Oil</h2>
            <img src="${sauteedGreens_namespaceObject}" alt="green salad">
            <p>A simple but flavorful side of organic greens, lightly sautéed in garlic and olive oil.</p>
        </div>
        <div>
            <h1>Tahini Roasted Cauliflower</h1>
            <img src="${roastedCauliFlower_namespaceObject}" alt="cauliflover salad">
            <p>Oven-roasted cauliflower florets tossed in a creamy tahini sauce, topped with toasted pine nuts and fresh parsley for a burst of flavor.</p>
        </div>
    </div>
    <h1>Desserts:</h1>
    <div class="desserts">
        <div>
            <h2>Honey & Fig Tart</h2>
            <img src="${honeyAndFigTart_namespaceObject}" alt="crispy fritters">
            <p>A delightful tart made with whole wheat crust, filled with figs and drizzled with raw honey.</p>
        </div>
        <div>
            <h2>Almond & Date Cake</h2>
            <img src="${almondAndDateCake_namespaceObject}" alt="crispy fritters">
            <p>A moist, naturally sweet cake made from almond flour, dates, and a touch of cinnamon.</p>
        </div>    
        <div>
            <h2>Pomegranate Sorbet</h2>
            <img src="${pomegranateSorbet_namespaceObject}" alt="crispy fritters">
            <p>A refreshing, dairy-free sorbet made from fresh pomegranate juice and a hint of mint.</p>
        </div>    
        <div>
            <h2>Coconut Almond Bliss Bites</h2>
            <img src="${coconutAlmondBlissBites_namespaceObject}" alt="crispy fritters">
            <p>A delightful, no-bake treat made from shredded coconut, almond flour, and dates, rolled into bite-sized pieces and drizzled with dark chocolate.</p>
        </div>    
    </div>

    <h1>Drinks:</h1>
    <div class="drinks">
        <div>
            <h2>Herbal Infusion Tea</h2>
            <img src="${herbalInfusionTea_namespaceObject}" alt="crispy fritters">
            <p>A soothing blend of mint, chamomile, and lavender, served hot or iced.</p>
        </div>
        <div>
            <h2>Pomegranate & Orange Spritzer</h2>
            <img src="${pomegranateAndOrangeSpitzer_namespaceObject}" alt="crispy fritters">
            <p>A refreshing drink made from fresh pomegranate juice, orange, and sparkling water.</p>
        </div>
        <div>    
            <h2>Cucumber & Lemon Water</h2>
            <img src="${cucumberAndLemonWater_namespaceObject}" alt="crispy fritters">
            <p>Hydrating cucumber and lemon-infused water with a hint of fresh mint.</p>
        </div>            
        <div>    
            <h2>Fig & Honey Iced Tea</h2>
            <img src="${figAndHoneyIcedTea_namespaceObject}" alt="crispy fritters">
            <p>A refreshing blend of brewed herbal tea infused with the natural sweetness of figs and a touch of raw honey, served over ice with a slice of lemon.</p>
        </div>            
    </div>
    `;

    root.appendChild(content);
};
;// CONCATENATED MODULE: ./src/images/aboutpageImage.jpg
const aboutpageImage_namespaceObject = __webpack_require__.p + "bb5162daa8ef7151ab96.jpg";
;// CONCATENATED MODULE: ./src/modules/loadAboutpage.js

;


function loadAboutpage(){

    const aboutpageImage = document.createElement("img");
    aboutpageImage.src = aboutpageImage_namespaceObject;
    aboutpageImage.classList.add("hero-image");

    const header = document.createElement("h1");
    header.textContent = "Nourishing Body & Soul with Every Meal";
    
    const descriptionDiv = document.createElement("div");
    descriptionDiv.classList.add("description");
    descriptionDiv.innerHTML = `
    <h2>Address:</h2>
        <p>123 Harvest Lane<p>
        <p>Eden Valley, CA 90210<p>

    <h2>Contact Information:</h2>
    <p><strong>Phone:</strong> (555) 123-4567</p>
    <p><strong>Email:</strong> info@mannagarden.com</p>

    <h2>Hours of Operation:</h2>
    <p><strong>Sunday:</strong> 12:00 PM - 8:00 PM</p>
    <p><strong>Monday - Thursday:</strong> 11:00 AM - 9:00 PM</p>
    <p><strong>Friday:</strong> 11:00 AM - 3:00 PM</p>
    <p><strong>Saturday:</strong> Closed</p>

    <h2>Follow us on social media:</h2>
    <p><strong>Instagram:</strong> @MannaGardenDining</p>
    <p><strong>Facebook:</strong> facebook.com/MannaGarden</p>
`;

    root.appendChild(header);
    root.appendChild(aboutpageImage);
    root.appendChild(descriptionDiv);
}
;// CONCATENATED MODULE: ./src/modules/loadFunction.js







function loadFunction(){
        loadMenupage();
        root.innerHTML = "";
        loadHomepage();

        const homeBtn = document.querySelector("#home-btn");
        const menuBtn = document.querySelector("#menu-btn");
        const aboutBtn = document.querySelector("#about-btn");

        const buttons = [homeBtn, menuBtn, aboutBtn]
        const removeClassActive = () => {buttons.forEach(el=> el.classList.remove("active-btn"))};

        const navButtons = document.querySelector(".nav");
        navButtons.addEventListener("click", e=>{
            const target = e.target;
            switch (target.id) {
                case "home-btn":
                    root.innerHTML = ""
                    loadHomepage();
                    removeClassActive();
                    target.classList.add("active-btn");
                    break;
                case "menu-btn":
                    root.innerHTML = ""
                    loadMenupage();
                    removeClassActive();
                    target.classList.add("active-btn");
                    break;
                case "about-btn":
                    root.innerHTML = ""
                    loadAboutpage();
                    removeClassActive();
                    target.classList.add("active-btn");
                    break;
            }
        })
};

;// CONCATENATED MODULE: ./src/script.js



loadFunction();
/******/ })()
;
//# sourceMappingURL=main.js.map