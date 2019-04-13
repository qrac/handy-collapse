"use strict";function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}var HandyCollapse=function(){function HandyCollapse(){var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,HandyCollapse);var defaultOptions={nameSpace:"hc",toggleButtonAttr:"data-".concat(options.nameSpace||"hc","-control"),toggleContentAttr:"data-".concat(options.nameSpace||"hc","-content"),activeClass:"is-active",isAnimation:true,closeOthers:true,changeHeight:true,animationSpeed:400,cssEasing:"ease-in-out",onSlideStart:function onSlideStart(){return false;},onSlideEnd:function onSlideEnd(){return false;}};_extends(this,defaultOptions,options);this.toggleBodyEls=document.querySelectorAll("[".concat(this.toggleContentAttr,"]"));this.toggleButtomEls=document.querySelectorAll("[".concat(this.toggleButtonAttr,"]"));this.itemsStatus={};this.init();}_createClass(HandyCollapse,[{key:"init",value:function init(){if(this.toggleBodyEls){this.initItems();}if(this.toggleButtomEls){this.setListner();}}},{key:"initItems",value:function initItems(){var _this=this;this.itemsStatus={};Array.prototype.slice.call(this.toggleBodyEls).forEach(function(contentEl){_this.setItem(contentEl);});}},{key:"setItem",value:function setItem(element){element.style.overflow="hidden";element.style.maxHeight="none";var isOpen=element.classList.contains(this.activeClass);var id=element.getAttribute(this.toggleContentAttr);this.setItemStatus(id,isOpen);if(!isOpen){this.close(id,false,false,this.changeHeight);}else{this.open(id,false,false);}}},{key:"setListner",value:function setListner(){var _this2=this;Array.prototype.slice.call(this.toggleButtomEls).forEach(function(buttonEl){var id=buttonEl.getAttribute(_this2.toggleButtonAttr);if(id){buttonEl.addEventListener("click",function(e){e.preventDefault();_this2.toggleSlide(id,buttonEl);},false);}});}},{key:"setItemStatus",value:function setItemStatus(id,isOpen){this.itemsStatus[id]={isOpen:isOpen,isAnimating:false};}},{key:"toggleSlide",value:function toggleSlide(id){var isRunCallback=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;if(this.itemsStatus[id].isAnimating)return;if(this.itemsStatus[id].isOpen===false){this.open(id,isRunCallback,this.isAnimation);}else{this.close(id,isRunCallback,this.isAnimation,this.changeHeight);}}},{key:"open",value:function open(id){var _this3=this;var isRunCallback=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;var isAnimation=arguments.length>2&&arguments[2]!==undefined?arguments[2]:true;if(!id)return;if(!this.itemsStatus.hasOwnProperty(id)){this.setItemStatus(id,false);}this.itemsStatus[id].isAnimating=true;if(this.closeOthers){Array.prototype.slice.call(this.toggleBodyEls).forEach(function(contentEl,index){var closeId=contentEl.getAttribute(_this3.toggleContentAttr);if(closeId!==id)_this3.close(closeId,false,isAnimation);});}if(isRunCallback!==false)this.onSlideStart(true,id);var toggleBody=document.querySelector("[".concat(this.toggleContentAttr,"='").concat(id,"']"));var clientHeight=this.getTargetHeight(toggleBody);toggleBody.classList.add(this.activeClass);var toggleButton=document.querySelectorAll("[".concat(this.toggleButtonAttr,"='").concat(id,"']"));if(toggleButton.length>0){Array.prototype.slice.call(toggleButton).forEach(function(button,index){button.classList.add(_this3.activeClass);});}if(isAnimation){toggleBody.style.overflow="hidden";toggleBody.style.transition="".concat(this.animationSpeed,"ms ").concat(this.cssEasing);toggleBody.style.maxHeight=(clientHeight||"1000")+"px";setTimeout(function(){if(isRunCallback!==false)_this3.onSlideEnd(true,id);toggleBody.style.maxHeight="none";toggleBody.style.transition="";toggleBody.style.overflow="";_this3.itemsStatus[id].isAnimating=false;},this.animationSpeed);}else{toggleBody.style.maxHeight="none";toggleBody.style.overflow="";this.itemsStatus[id].isAnimating=false;}this.itemsStatus[id].isOpen=true;}},{key:"close",value:function close(id){var _this4=this;var isRunCallback=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;var isAnimation=arguments.length>2&&arguments[2]!==undefined?arguments[2]:true;var changeHeight=arguments.length>3&&arguments[3]!==undefined?arguments[3]:true;if(!id)return;if(!this.itemsStatus.hasOwnProperty(id)){this.setItemStatus(id,false);}this.itemsStatus[id].isAnimating=true;if(isRunCallback!==false)this.onSlideStart(false,id);var toggleBody=document.querySelector("[".concat(this.toggleContentAttr,"='").concat(id,"']"));toggleBody.style.overflow="hidden";toggleBody.classList.remove(this.activeClass);if(changeHeight){toggleBody.style.maxHeight=toggleBody.clientHeight+"px";setTimeout(function(){toggleBody.style.maxHeight="0px";},5);}var toggleButton=document.querySelectorAll("[".concat(this.toggleButtonAttr,"='").concat(id,"']"));if(toggleButton.length>0){Array.prototype.slice.call(toggleButton).forEach(function(button,index){button.classList.remove(_this4.activeClass);});}if(isAnimation){toggleBody.style.transition="".concat(this.animationSpeed,"ms ").concat(this.cssEasing);setTimeout(function(){if(isRunCallback!==false)_this4.onSlideEnd(false,id);toggleBody.style.transition="";_this4.itemsStatus[id].isAnimating=false;},this.animationSpeed);}else{this.onSlideEnd(false,id);this.itemsStatus[id].isAnimating=false;}if(this.itemsStatus.hasOwnProperty(id)){this.itemsStatus[id].isOpen=false;}}},{key:"getTargetHeight",value:function getTargetHeight(targetEl){if(!targetEl)return;var cloneEl=targetEl.cloneNode(true);var parentEl=targetEl.parentNode;cloneEl.style.maxHeight="none";cloneEl.style.opacity="0";parentEl.appendChild(cloneEl);var clientHeight=cloneEl.clientHeight;parentEl.removeChild(cloneEl);return clientHeight;}}]);return HandyCollapse;}();if((typeof module==="undefined"?"undefined":_typeof(module))==="object"){module.exports=HandyCollapse;}
