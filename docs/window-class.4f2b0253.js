parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"ya15":[function(require,module,exports) {
for(var r=self.crypto||self.msCrypto,o="-_",t=36;t--;)o+=t.toString(36);for(t=36;t---10;)o+=t.toString(36).toUpperCase();module.exports=function(e){var n="",a=r.getRandomValues(new Uint8Array(e||21));for(t=e||21;t--;)n+=o[63&a[t]];return n};
},{}],"SpQD":[function(require,module,exports) {
var define;
var t;!function(e,i){"function"==typeof t&&t.amd?t(i):"object"==typeof module&&module.exports?module.exports=i():e.getSize=i()}(window,function(){"use strict";function t(t){var e=parseFloat(t);return-1==t.indexOf("%")&&!isNaN(e)&&e}var e="undefined"==typeof console?function(){}:function(t){console.error(t)},i=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],o=i.length;function r(t){var i=getComputedStyle(t);return i||e("Style returned "+i+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),i}var d,n=!1;function h(e){if(function(){if(!n){n=!0;var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(e);var o=r(e);d=200==Math.round(t(o.width)),h.isBoxSizeOuter=d,i.removeChild(e)}}(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var a=r(e);if("none"==a.display)return function(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;e<o;e++)t[i[e]]=0;return t}();var g={};g.width=e.offsetWidth,g.height=e.offsetHeight;for(var p=g.isBorderBox="border-box"==a.boxSizing,u=0;u<o;u++){var f=i[u],m=a[f],s=parseFloat(m);g[f]=isNaN(s)?0:s}var l=g.paddingLeft+g.paddingRight,c=g.paddingTop+g.paddingBottom,b=g.marginLeft+g.marginRight,x=g.marginTop+g.marginBottom,y=g.borderLeftWidth+g.borderRightWidth,v=g.borderTopWidth+g.borderBottomWidth,W=p&&d,w=t(a.width);!1!==w&&(g.width=w+(W?0:l+y));var B=t(a.height);return!1!==B&&(g.height=B+(W?0:c+v)),g.innerWidth=g.width-(l+y),g.innerHeight=g.height-(c+v),g.outerWidth=g.width+b,g.outerHeight=g.height+x,g}}return h});
},{}],"BQvw":[function(require,module,exports) {
var define;
var global = arguments[3];
var t,e=arguments[3];!function(e,n){"function"==typeof t&&t.amd?t(n):"object"==typeof module&&module.exports?module.exports=n():e.EvEmitter=n()}("undefined"!=typeof window?window:this,function(){"use strict";function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var n=this._events=this._events||{},i=n[t]=n[t]||[];return-1==i.indexOf(e)&&i.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var n=this._onceEvents=this._onceEvents||{};return(n[t]=n[t]||{})[e]=!0,this}},e.off=function(t,e){var n=this._events&&this._events[t];if(n&&n.length){var i=n.indexOf(e);return-1!=i&&n.splice(i,1),this}},e.emitEvent=function(t,e){var n=this._events&&this._events[t];if(n&&n.length){n=n.slice(0),e=e||[];for(var i=this._onceEvents&&this._onceEvents[t],s=0;s<n.length;s++){var o=n[s];i&&i[o]&&(this.off(t,o),delete i[o]),o.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t});
},{}],"tBFV":[function(require,module,exports) {
var define;
var t;!function(n,e){"function"==typeof t&&t.amd?t(["ev-emitter/ev-emitter"],function(t){return e(n,t)}):"object"==typeof module&&module.exports?module.exports=e(n,require("ev-emitter")):n.Unipointer=e(n,n.EvEmitter)}(window,function(t,n){"use strict";function e(){}var o=e.prototype=Object.create(n.prototype);o.bindStartEvent=function(t){this._bindStartEvent(t,!0)},o.unbindStartEvent=function(t){this._bindStartEvent(t,!1)},o._bindStartEvent=function(n,e){var o=(e=void 0===e||e)?"addEventListener":"removeEventListener",i="mousedown";t.PointerEvent?i="pointerdown":"ontouchstart"in t&&(i="touchstart"),n[o](i,this)},o.handleEvent=function(t){var n="on"+t.type;this[n]&&this[n](t)},o.getTouch=function(t){for(var n=0;n<t.length;n++){var e=t[n];if(e.identifier==this.pointerIdentifier)return e}},o.onmousedown=function(t){var n=t.button;n&&0!==n&&1!==n||this._pointerDown(t,t)},o.ontouchstart=function(t){this._pointerDown(t,t.changedTouches[0])},o.onpointerdown=function(t){this._pointerDown(t,t)},o._pointerDown=function(t,n){t.button||this.isPointerDown||(this.isPointerDown=!0,this.pointerIdentifier=void 0!==n.pointerId?n.pointerId:n.identifier,this.pointerDown(t,n))},o.pointerDown=function(t,n){this._bindPostStartEvents(t),this.emitEvent("pointerDown",[t,n])};var i={mousedown:["mousemove","mouseup"],touchstart:["touchmove","touchend","touchcancel"],pointerdown:["pointermove","pointerup","pointercancel"]};return o._bindPostStartEvents=function(n){if(n){var e=i[n.type];e.forEach(function(n){t.addEventListener(n,this)},this),this._boundPointerEvents=e}},o._unbindPostStartEvents=function(){this._boundPointerEvents&&(this._boundPointerEvents.forEach(function(n){t.removeEventListener(n,this)},this),delete this._boundPointerEvents)},o.onmousemove=function(t){this._pointerMove(t,t)},o.onpointermove=function(t){t.pointerId==this.pointerIdentifier&&this._pointerMove(t,t)},o.ontouchmove=function(t){var n=this.getTouch(t.changedTouches);n&&this._pointerMove(t,n)},o._pointerMove=function(t,n){this.pointerMove(t,n)},o.pointerMove=function(t,n){this.emitEvent("pointerMove",[t,n])},o.onmouseup=function(t){this._pointerUp(t,t)},o.onpointerup=function(t){t.pointerId==this.pointerIdentifier&&this._pointerUp(t,t)},o.ontouchend=function(t){var n=this.getTouch(t.changedTouches);n&&this._pointerUp(t,n)},o._pointerUp=function(t,n){this._pointerDone(),this.pointerUp(t,n)},o.pointerUp=function(t,n){this.emitEvent("pointerUp",[t,n])},o._pointerDone=function(){this._pointerReset(),this._unbindPostStartEvents(),this.pointerDone()},o._pointerReset=function(){this.isPointerDown=!1,delete this.pointerIdentifier},o.pointerDone=function(){},o.onpointercancel=function(t){t.pointerId==this.pointerIdentifier&&this._pointerCancel(t,t)},o.ontouchcancel=function(t){var n=this.getTouch(t.changedTouches);n&&this._pointerCancel(t,n)},o._pointerCancel=function(t,n){this._pointerDone(),this.pointerCancel(t,n)},o.pointerCancel=function(t,n){this.emitEvent("pointerCancel",[t,n])},e.getPointerPoint=function(t){return{x:t.pageX,y:t.pageY}},e});
},{"ev-emitter":"BQvw"}],"LICs":[function(require,module,exports) {
var define;
var t;!function(i,n){"function"==typeof t&&t.amd?t(["unipointer/unipointer"],function(t){return n(i,t)}):"object"==typeof module&&module.exports?module.exports=n(i,require("unipointer")):i.Unidragger=n(i,i.Unipointer)}(window,function(t,i){"use strict";function n(){}var e=n.prototype=Object.create(i.prototype);e.bindHandles=function(){this._bindHandles(!0)},e.unbindHandles=function(){this._bindHandles(!1)},e._bindHandles=function(i){for(var n=(i=void 0===i||i)?"addEventListener":"removeEventListener",e=i?this._touchActionValue:"",o=0;o<this.handles.length;o++){var r=this.handles[o];this._bindStartEvent(r,i),r[n]("click",this),t.PointerEvent&&(r.style.touchAction=e)}},e._touchActionValue="none",e.pointerDown=function(t,i){this.okayPointerDown(t)&&(this.pointerDownPointer=i,t.preventDefault(),this.pointerDownBlur(),this._bindPostStartEvents(t),this.emitEvent("pointerDown",[t,i]))};var o={TEXTAREA:!0,INPUT:!0,SELECT:!0,OPTION:!0},r={radio:!0,checkbox:!0,button:!0,submit:!0,image:!0,file:!0};return e.okayPointerDown=function(t){var i=o[t.target.nodeName],n=r[t.target.type],e=!i||n;return e||this._pointerReset(),e},e.pointerDownBlur=function(){var t=document.activeElement;t&&t.blur&&t!=document.body&&t.blur()},e.pointerMove=function(t,i){var n=this._dragPointerMove(t,i);this.emitEvent("pointerMove",[t,i,n]),this._dragMove(t,i,n)},e._dragPointerMove=function(t,i){var n={x:i.pageX-this.pointerDownPointer.pageX,y:i.pageY-this.pointerDownPointer.pageY};return!this.isDragging&&this.hasDragStarted(n)&&this._dragStart(t,i),n},e.hasDragStarted=function(t){return Math.abs(t.x)>3||Math.abs(t.y)>3},e.pointerUp=function(t,i){this.emitEvent("pointerUp",[t,i]),this._dragPointerUp(t,i)},e._dragPointerUp=function(t,i){this.isDragging?this._dragEnd(t,i):this._staticClick(t,i)},e._dragStart=function(t,i){this.isDragging=!0,this.isPreventingClicks=!0,this.dragStart(t,i)},e.dragStart=function(t,i){this.emitEvent("dragStart",[t,i])},e._dragMove=function(t,i,n){this.isDragging&&this.dragMove(t,i,n)},e.dragMove=function(t,i,n){t.preventDefault(),this.emitEvent("dragMove",[t,i,n])},e._dragEnd=function(t,i){this.isDragging=!1,setTimeout(function(){delete this.isPreventingClicks}.bind(this)),this.dragEnd(t,i)},e.dragEnd=function(t,i){this.emitEvent("dragEnd",[t,i])},e.onclick=function(t){this.isPreventingClicks&&t.preventDefault()},e._staticClick=function(t,i){this.isIgnoringMouseUp&&"mouseup"==t.type||(this.staticClick(t,i),"mouseup"!=t.type&&(this.isIgnoringMouseUp=!0,setTimeout(function(){delete this.isIgnoringMouseUp}.bind(this),400)))},e.staticClick=function(t,i){this.emitEvent("staticClick",[t,i])},n.getPointerPoint=i.getPointerPoint,n});
},{"unipointer":"tBFV"}],"fFZT":[function(require,module,exports) {
var define;
var t;!function(i,e){"function"==typeof t&&t.amd?t(["get-size/get-size","unidragger/unidragger"],function(t,n){return e(i,t,n)}):"object"==typeof module&&module.exports?module.exports=e(i,require("get-size"),require("unidragger")):i.Draggabilly=e(i,i.getSize,i.Unidragger)}(window,function(t,i,e){"use strict";function n(t,i){for(var e in i)t[e]=i[e];return t}var s=t.jQuery;function o(t,i){this.element="string"==typeof t?document.querySelector(t):t,s&&(this.$element=s(this.element)),this.options=n({},this.constructor.defaults),this.option(i),this._create()}var r=o.prototype=Object.create(e.prototype);o.defaults={},r.option=function(t){n(this.options,t)};var a={relative:!0,absolute:!0,fixed:!0};function h(t,i,e){return e=e||"round",i?Math[e](t/i)*i:t}return r._create=function(){this.position={},this._getPosition(),this.startPoint={x:0,y:0},this.dragPoint={x:0,y:0},this.startPosition=n({},this.position);var t=getComputedStyle(this.element);a[t.position]||(this.element.style.position="relative"),this.on("pointerDown",this.onPointerDown),this.on("pointerMove",this.onPointerMove),this.on("pointerUp",this.onPointerUp),this.enable(),this.setHandles()},r.setHandles=function(){this.handles=this.options.handle?this.element.querySelectorAll(this.options.handle):[this.element],this.bindHandles()},r.dispatchEvent=function(t,i,e){var n=[i].concat(e);this.emitEvent(t,n),this.dispatchJQueryEvent(t,i,e)},r.dispatchJQueryEvent=function(i,e,n){var s=t.jQuery;if(s&&this.$element){var o=s.Event(e);o.type=i,this.$element.trigger(o,n)}},r._getPosition=function(){var t=getComputedStyle(this.element),i=this._getPositionCoord(t.left,"width"),e=this._getPositionCoord(t.top,"height");this.position.x=isNaN(i)?0:i,this.position.y=isNaN(e)?0:e,this._addTransformPosition(t)},r._getPositionCoord=function(t,e){if(-1!=t.indexOf("%")){var n=i(this.element.parentNode);return n?parseFloat(t)/100*n[e]:0}return parseInt(t,10)},r._addTransformPosition=function(t){var i=t.transform;if(0===i.indexOf("matrix")){var e=i.split(","),n=0===i.indexOf("matrix3d")?12:4,s=parseInt(e[n],10),o=parseInt(e[n+1],10);this.position.x+=s,this.position.y+=o}},r.onPointerDown=function(t,i){this.element.classList.add("is-pointer-down"),this.dispatchJQueryEvent("pointerDown",t,[i])},r.dragStart=function(t,i){this.isEnabled&&(this._getPosition(),this.measureContainment(),this.startPosition.x=this.position.x,this.startPosition.y=this.position.y,this.setLeftTop(),this.dragPoint.x=0,this.dragPoint.y=0,this.element.classList.add("is-dragging"),this.dispatchEvent("dragStart",t,[i]),this.animate())},r.measureContainment=function(){var t=this.getContainer();if(t){var e=i(this.element),n=i(t),s=this.element.getBoundingClientRect(),o=t.getBoundingClientRect(),r=n.borderLeftWidth+n.borderRightWidth,a=n.borderTopWidth+n.borderBottomWidth,h=this.relativeStartPosition={x:s.left-(o.left+n.borderLeftWidth),y:s.top-(o.top+n.borderTopWidth)};this.containSize={width:n.width-r-h.x-e.width,height:n.height-a-h.y-e.height}}},r.getContainer=function(){var t=this.options.containment;if(t)return t instanceof HTMLElement?t:"string"==typeof t?document.querySelector(t):this.element.parentNode},r.onPointerMove=function(t,i,e){this.dispatchJQueryEvent("pointerMove",t,[i,e])},r.dragMove=function(t,i,e){if(this.isEnabled){var n=e.x,s=e.y,o=this.options.grid,r=o&&o[0],a=o&&o[1];n=h(n,r),s=h(s,a),n=this.containDrag("x",n,r),s=this.containDrag("y",s,a),n="y"==this.options.axis?0:n,s="x"==this.options.axis?0:s,this.position.x=this.startPosition.x+n,this.position.y=this.startPosition.y+s,this.dragPoint.x=n,this.dragPoint.y=s,this.dispatchEvent("dragMove",t,[i,e])}},r.containDrag=function(t,i,e){if(!this.options.containment)return i;var n="x"==t?"width":"height",s=h(-this.relativeStartPosition[t],e,"ceil"),o=this.containSize[n];return o=h(o,e,"floor"),Math.max(s,Math.min(o,i))},r.onPointerUp=function(t,i){this.element.classList.remove("is-pointer-down"),this.dispatchJQueryEvent("pointerUp",t,[i])},r.dragEnd=function(t,i){this.isEnabled&&(this.element.style.transform="",this.setLeftTop(),this.element.classList.remove("is-dragging"),this.dispatchEvent("dragEnd",t,[i]))},r.animate=function(){if(this.isDragging){this.positionDrag();var t=this;requestAnimationFrame(function(){t.animate()})}},r.setLeftTop=function(){this.element.style.left=this.position.x+"px",this.element.style.top=this.position.y+"px"},r.positionDrag=function(){this.element.style.transform="translate3d( "+this.dragPoint.x+"px, "+this.dragPoint.y+"px, 0)"},r.staticClick=function(t,i){this.dispatchEvent("staticClick",t,[i])},r.setPosition=function(t,i){this.position.x=t,this.position.y=i,this.setLeftTop()},r.enable=function(){this.isEnabled=!0},r.disable=function(){this.isEnabled=!1,this.isDragging&&this.dragEnd()},r.destroy=function(){this.disable(),this.element.style.transform="",this.element.style.left="",this.element.style.top="",this.element.style.position="",this.unbindHandles(),this.$element&&this.$element.removeData("draggabilly")},r._init=function(){},s&&s.bridget&&s.bridget("draggabilly",o),o});
},{"get-size":"SpQD","unidragger":"LICs"}],"gpOw":[function(require,module,exports) {
function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function i(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}var o=require("nanoid"),s=require("draggabilly"),a=function(){function n(e){t(this,n),this.title=e.title||"Window",this.content=e.content||document.createRange().createContextualFragment('<div class="content"></div>'),this.id=e.id||"w"+o(),this.customClass=e.customClass||[],this.customCSS=e.customCSS||void 0,this.eventListeners=e.eventListeners||void 0,this.size=e.size||void 0,this.onLoadFunction=e.onLoadFunction||void 0,this.draggie=void 0,this.DOMElement=this.getDOMElement(),window.WindowInstances&&window.WindowInstances.push(this)}return i(n,[{key:"registerEventListeners",value:function(e){var t=this;e.length>0&&e.forEach(function(e){"string"==typeof e.element?document.querySelector(e.element).addEventListener(e.type,e.handler):document.getElementById(t.id).addEventListener(e.type,e.handler)})}},{key:"addToDOM",value:function(e){var t=this.DOMElement.window,i=this.DOMElement.taskbarButton;e&&(e.position&&(t.style.top="".concat(e.position.y,"px"),t.style.left="".concat(e.position.x,"px")),e.active&&(n.resetAllActive(this.DOMElement),t.classList.add("active"),i.classList.add("active"),window.State.focused_window_id=this.id));var o=document.getElementById(this.id)?document.getElementById(this.id):document.querySelector(".main-area").appendChild(t);document.getElementById("task-"+this.id)||document.querySelector(".taskbar .windows").appendChild(i);var a=new s(o,{containment:".main-area",handle:".titlebar"});this.draggie=a,void 0!==this.onLoadFunction&&this.onLoadFunction(),void 0!==this.eventListeners&&this.registerEventListeners(this.eventListeners)}},{key:"removeFromDOM",value:function(){document.querySelector("#".concat(this.id)).remove(),document.querySelector("#task-".concat(this.id)).remove()}},{key:"show",value:function(){document.querySelector("#".concat(this.id)).style.display=""}},{key:"hide",value:function(){document.querySelector("#".concat(this.id)).style.display="none"}},{key:"makeActive",value:function(){n.resetAllActive(this.DOMElement),document.querySelector("#".concat(this.id)).classList.add("active"),document.querySelector("#task-".concat(this.id)).classList.add("active"),window.State.focused_window_id=this.id}},{key:"getDOMElement",value:function(){var t=this,n=document.createElement("div");n.className="window",n.id=this.id,n._windowClass=this,"string"==typeof this.customClass&&n.classList.add(this.customClass),"object"===e(this.customClass)&&this.customClass.length>0&&this.customClass.forEach(function(e){return n.classList.add(e)}),void 0!==this.size&&"object"===e(this.size)&&Object.keys(this.size).forEach(function(e){n.style[e]=t.size[e]});var i=document.createElement("div");i.className="titlebar";var o=document.createElement("div");o.className="title",o.textContent=this.title;var s=document.createElement("div");s.className="controls";var a=document.createElement("div");a.className="exit button",a.innerHTML="&#10005;";var d=document.createElement("div");d.className="minimize button",d.innerHTML="&#8722;",s.appendChild(d),s.appendChild(a),i.appendChild(o),i.appendChild(s);var c=document.createElement("div");if(c.className="content",c.appendChild(this.content),c.innerHTML=c.innerHTML,void 0!==this.customCSS&&this.customCSS.length>0){var l=document.createElement("style");l.id="style-"+this.id,l.innerHTML=this.customCSS,n.appendChild(l)}n.appendChild(i),n.appendChild(c);var r=document.createElement("div");return r.className="task button",r.textContent=this.title,r.id="task-"+this.id,{window:n,taskbarButton:r}}},{key:"isMinimized",get:function(){return"none"===document.getElementById(this.id).style.display}}],[{key:"resetAllActive",value:function(e){var t=void 0!==e?e.window:void 0,n=void 0!==e?e.taskbarButton:void 0;document.querySelectorAll(".active").forEach(function(e){e.isEqualNode(t)||e.isEqualNode(n)||(window.State.focused_window_id=null,e.classList.remove("active"))})}}]),n}();module.exports={WindowClass:a};
},{"nanoid":"ya15","draggabilly":"fFZT"}]},{},["gpOw"], null)
//# sourceMappingURL=window-class.4f2b0253.js.map