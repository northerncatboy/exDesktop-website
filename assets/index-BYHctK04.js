(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function cc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Xa={exports:{}},ii={},Ya={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jn=Symbol.for("react.element"),dc=Symbol.for("react.portal"),pc=Symbol.for("react.fragment"),fc=Symbol.for("react.strict_mode"),mc=Symbol.for("react.profiler"),hc=Symbol.for("react.provider"),gc=Symbol.for("react.context"),vc=Symbol.for("react.forward_ref"),xc=Symbol.for("react.suspense"),yc=Symbol.for("react.memo"),wc=Symbol.for("react.lazy"),Fo=Symbol.iterator;function kc(e){return e===null||typeof e!="object"?null:(e=Fo&&e[Fo]||e["@@iterator"],typeof e=="function"?e:null)}var Ja={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Za=Object.assign,es={};function un(e,t,n){this.props=e,this.context=t,this.refs=es,this.updater=n||Ja}un.prototype.isReactComponent={};un.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};un.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ts(){}ts.prototype=un.prototype;function Hl(e,t,n){this.props=e,this.context=t,this.refs=es,this.updater=n||Ja}var Vl=Hl.prototype=new ts;Vl.constructor=Hl;Za(Vl,un.prototype);Vl.isPureReactComponent=!0;var Uo=Array.isArray,ns=Object.prototype.hasOwnProperty,$l={current:null},rs={key:!0,ref:!0,__self:!0,__source:!0};function is(e,t,n){var r,i={},l=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(l=""+t.key),t)ns.call(t,r)&&!rs.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),d=0;d<a;d++)u[d]=arguments[d+2];i.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Jn,type:e,key:l,ref:o,props:i,_owner:$l.current}}function _c(e,t){return{$$typeof:Jn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Wl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Jn}function Sc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Bo=/\/+/g;function Si(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Sc(""+e.key):t.toString(36)}function _r(e,t,n,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Jn:case dc:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Si(o,0):r,Uo(i)?(n="",e!=null&&(n=e.replace(Bo,"$&/")+"/"),_r(i,t,n,"",function(d){return d})):i!=null&&(Wl(i)&&(i=_c(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Bo,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Uo(e))for(var a=0;a<e.length;a++){l=e[a];var u=r+Si(l,a);o+=_r(l,t,n,u,i)}else if(u=kc(e),typeof u=="function")for(e=u.call(e),a=0;!(l=e.next()).done;)l=l.value,u=r+Si(l,a++),o+=_r(l,t,n,u,i);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function lr(e,t,n){if(e==null)return e;var r=[],i=0;return _r(e,r,"","",function(l){return t.call(n,l,i++)}),r}function Cc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ce={current:null},Sr={transition:null},Lc={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:Sr,ReactCurrentOwner:$l};function ls(){throw Error("act(...) is not supported in production builds of React.")}z.Children={map:lr,forEach:function(e,t,n){lr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return lr(e,function(){t++}),t},toArray:function(e){return lr(e,function(t){return t})||[]},only:function(e){if(!Wl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};z.Component=un;z.Fragment=pc;z.Profiler=mc;z.PureComponent=Hl;z.StrictMode=fc;z.Suspense=xc;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lc;z.act=ls;z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Za({},e.props),i=e.key,l=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,o=$l.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)ns.call(t,u)&&!rs.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var d=0;d<u;d++)a[d]=arguments[d+2];r.children=a}return{$$typeof:Jn,type:e.type,key:i,ref:l,props:r,_owner:o}};z.createContext=function(e){return e={$$typeof:gc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:hc,_context:e},e.Consumer=e};z.createElement=is;z.createFactory=function(e){var t=is.bind(null,e);return t.type=e,t};z.createRef=function(){return{current:null}};z.forwardRef=function(e){return{$$typeof:vc,render:e}};z.isValidElement=Wl;z.lazy=function(e){return{$$typeof:wc,_payload:{_status:-1,_result:e},_init:Cc}};z.memo=function(e,t){return{$$typeof:yc,type:e,compare:t===void 0?null:t}};z.startTransition=function(e){var t=Sr.transition;Sr.transition={};try{e()}finally{Sr.transition=t}};z.unstable_act=ls;z.useCallback=function(e,t){return ce.current.useCallback(e,t)};z.useContext=function(e){return ce.current.useContext(e)};z.useDebugValue=function(){};z.useDeferredValue=function(e){return ce.current.useDeferredValue(e)};z.useEffect=function(e,t){return ce.current.useEffect(e,t)};z.useId=function(){return ce.current.useId()};z.useImperativeHandle=function(e,t,n){return ce.current.useImperativeHandle(e,t,n)};z.useInsertionEffect=function(e,t){return ce.current.useInsertionEffect(e,t)};z.useLayoutEffect=function(e,t){return ce.current.useLayoutEffect(e,t)};z.useMemo=function(e,t){return ce.current.useMemo(e,t)};z.useReducer=function(e,t,n){return ce.current.useReducer(e,t,n)};z.useRef=function(e){return ce.current.useRef(e)};z.useState=function(e){return ce.current.useState(e)};z.useSyncExternalStore=function(e,t,n){return ce.current.useSyncExternalStore(e,t,n)};z.useTransition=function(){return ce.current.useTransition()};z.version="18.3.1";Ya.exports=z;var G=Ya.exports;const Nc=cc(G);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jc=G,Ec=Symbol.for("react.element"),Pc=Symbol.for("react.fragment"),zc=Object.prototype.hasOwnProperty,Tc=jc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Mc={key:!0,ref:!0,__self:!0,__source:!0};function os(e,t,n){var r,i={},l=null,o=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)zc.call(t,r)&&!Mc.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Ec,type:e,key:l,ref:o,props:i,_owner:Tc.current}}ii.Fragment=Pc;ii.jsx=os;ii.jsxs=os;Xa.exports=ii;var s=Xa.exports,qi={},as={exports:{}},_e={},ss={exports:{}},us={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,E){var P=C.length;C.push(E);e:for(;0<P;){var W=P-1>>>1,Y=C[W];if(0<i(Y,E))C[W]=E,C[P]=Y,P=W;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var E=C[0],P=C.pop();if(P!==E){C[0]=P;e:for(var W=0,Y=C.length,rr=Y>>>1;W<rr;){var wt=2*(W+1)-1,_i=C[wt],kt=wt+1,ir=C[kt];if(0>i(_i,P))kt<Y&&0>i(ir,_i)?(C[W]=ir,C[kt]=P,W=kt):(C[W]=_i,C[wt]=P,W=wt);else if(kt<Y&&0>i(ir,P))C[W]=ir,C[kt]=P,W=kt;else break e}}return E}function i(C,E){var P=C.sortIndex-E.sortIndex;return P!==0?P:C.id-E.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var u=[],d=[],h=1,m=null,g=3,y=!1,k=!1,w=!1,R=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(C){for(var E=n(d);E!==null;){if(E.callback===null)r(d);else if(E.startTime<=C)r(d),E.sortIndex=E.expirationTime,t(u,E);else break;E=n(d)}}function v(C){if(w=!1,f(C),!k)if(n(u)!==null)k=!0,wi(S);else{var E=n(d);E!==null&&ki(v,E.startTime-C)}}function S(C,E){k=!1,w&&(w=!1,p(j),j=-1),y=!0;var P=g;try{for(f(E),m=n(u);m!==null&&(!(m.expirationTime>E)||C&&!ze());){var W=m.callback;if(typeof W=="function"){m.callback=null,g=m.priorityLevel;var Y=W(m.expirationTime<=E);E=e.unstable_now(),typeof Y=="function"?m.callback=Y:m===n(u)&&r(u),f(E)}else r(u);m=n(u)}if(m!==null)var rr=!0;else{var wt=n(d);wt!==null&&ki(v,wt.startTime-E),rr=!1}return rr}finally{m=null,g=P,y=!1}}var L=!1,N=null,j=-1,$=5,T=-1;function ze(){return!(e.unstable_now()-T<$)}function pn(){if(N!==null){var C=e.unstable_now();T=C;var E=!0;try{E=N(!0,C)}finally{E?fn():(L=!1,N=null)}}else L=!1}var fn;if(typeof c=="function")fn=function(){c(pn)};else if(typeof MessageChannel<"u"){var bo=new MessageChannel,uc=bo.port2;bo.port1.onmessage=pn,fn=function(){uc.postMessage(null)}}else fn=function(){R(pn,0)};function wi(C){N=C,L||(L=!0,fn())}function ki(C,E){j=R(function(){C(e.unstable_now())},E)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){k||y||(k=!0,wi(S))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(C){switch(g){case 1:case 2:case 3:var E=3;break;default:E=g}var P=g;g=E;try{return C()}finally{g=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,E){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var P=g;g=C;try{return E()}finally{g=P}},e.unstable_scheduleCallback=function(C,E,P){var W=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?W+P:W):P=W,C){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=P+Y,C={id:h++,callback:E,priorityLevel:C,startTime:P,expirationTime:Y,sortIndex:-1},P>W?(C.sortIndex=P,t(d,C),n(u)===null&&C===n(d)&&(w?(p(j),j=-1):w=!0,ki(v,P-W))):(C.sortIndex=Y,t(u,C),k||y||(k=!0,wi(S))),C},e.unstable_shouldYield=ze,e.unstable_wrapCallback=function(C){var E=g;return function(){var P=g;g=E;try{return C.apply(this,arguments)}finally{g=P}}}})(us);ss.exports=us;var Dc=ss.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ac=G,ke=Dc;function x(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var cs=new Set,Rn={};function At(e,t){tn(e,t),tn(e+"Capture",t)}function tn(e,t){for(Rn[e]=t,e=0;e<t.length;e++)cs.add(t[e])}var qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xi=Object.prototype.hasOwnProperty,Rc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ho={},Vo={};function Ic(e){return Xi.call(Vo,e)?!0:Xi.call(Ho,e)?!1:Rc.test(e)?Vo[e]=!0:(Ho[e]=!0,!1)}function Oc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function bc(e,t,n,r){if(t===null||typeof t>"u"||Oc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function de(e,t,n,r,i,l,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=o}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new de(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ne[t]=new de(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new de(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new de(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new de(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new de(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new de(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new de(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new de(e,5,!1,e.toLowerCase(),null,!1,!1)});var Gl=/[\-:]([a-z])/g;function Ql(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Gl,Ql);ne[t]=new de(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Gl,Ql);ne[t]=new de(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Gl,Ql);ne[t]=new de(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new de(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new de("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new de(e,1,!1,e.toLowerCase(),null,!0,!0)});function Kl(e,t,n,r){var i=ne.hasOwnProperty(t)?ne[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(bc(t,n,i,r)&&(n=null),r||i===null?Ic(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ze=Ac.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,or=Symbol.for("react.element"),Ot=Symbol.for("react.portal"),bt=Symbol.for("react.fragment"),ql=Symbol.for("react.strict_mode"),Yi=Symbol.for("react.profiler"),ds=Symbol.for("react.provider"),ps=Symbol.for("react.context"),Xl=Symbol.for("react.forward_ref"),Ji=Symbol.for("react.suspense"),Zi=Symbol.for("react.suspense_list"),Yl=Symbol.for("react.memo"),tt=Symbol.for("react.lazy"),fs=Symbol.for("react.offscreen"),$o=Symbol.iterator;function mn(e){return e===null||typeof e!="object"?null:(e=$o&&e[$o]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,Ci;function _n(e){if(Ci===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ci=t&&t[1]||""}return`
`+Ci+e}var Li=!1;function Ni(e,t){if(!e||Li)return"";Li=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,a=l.length-1;1<=o&&0<=a&&i[o]!==l[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==l[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==l[a]){var u=`
`+i[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=a);break}}}finally{Li=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?_n(e):""}function Fc(e){switch(e.tag){case 5:return _n(e.type);case 16:return _n("Lazy");case 13:return _n("Suspense");case 19:return _n("SuspenseList");case 0:case 2:case 15:return e=Ni(e.type,!1),e;case 11:return e=Ni(e.type.render,!1),e;case 1:return e=Ni(e.type,!0),e;default:return""}}function el(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case bt:return"Fragment";case Ot:return"Portal";case Yi:return"Profiler";case ql:return"StrictMode";case Ji:return"Suspense";case Zi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ps:return(e.displayName||"Context")+".Consumer";case ds:return(e._context.displayName||"Context")+".Provider";case Xl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Yl:return t=e.displayName||null,t!==null?t:el(e.type)||"Memo";case tt:t=e._payload,e=e._init;try{return el(e(t))}catch{}}return null}function Uc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return el(t);case 8:return t===ql?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ht(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ms(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Bc(e){var t=ms(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ar(e){e._valueTracker||(e._valueTracker=Bc(e))}function hs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ms(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ar(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function tl(e,t){var n=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Wo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ht(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function gs(e,t){t=t.checked,t!=null&&Kl(e,"checked",t,!1)}function nl(e,t){gs(e,t);var n=ht(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?rl(e,t.type,n):t.hasOwnProperty("defaultValue")&&rl(e,t.type,ht(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Go(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function rl(e,t,n){(t!=="number"||Ar(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Sn=Array.isArray;function qt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ht(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function il(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(x(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Qo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(x(92));if(Sn(n)){if(1<n.length)throw Error(x(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ht(n)}}function vs(e,t){var n=ht(t.value),r=ht(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ko(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function xs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ll(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?xs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var sr,ys=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(sr=sr||document.createElement("div"),sr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=sr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function In(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Nn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hc=["Webkit","ms","Moz","O"];Object.keys(Nn).forEach(function(e){Hc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Nn[t]=Nn[e]})});function ws(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Nn.hasOwnProperty(e)&&Nn[e]?(""+t).trim():t+"px"}function ks(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ws(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Vc=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ol(e,t){if(t){if(Vc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(x(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(x(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(x(61))}if(t.style!=null&&typeof t.style!="object")throw Error(x(62))}}function al(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sl=null;function Jl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ul=null,Xt=null,Yt=null;function qo(e){if(e=tr(e)){if(typeof ul!="function")throw Error(x(280));var t=e.stateNode;t&&(t=ui(t),ul(e.stateNode,e.type,t))}}function _s(e){Xt?Yt?Yt.push(e):Yt=[e]:Xt=e}function Ss(){if(Xt){var e=Xt,t=Yt;if(Yt=Xt=null,qo(e),t)for(e=0;e<t.length;e++)qo(t[e])}}function Cs(e,t){return e(t)}function Ls(){}var ji=!1;function Ns(e,t,n){if(ji)return e(t,n);ji=!0;try{return Cs(e,t,n)}finally{ji=!1,(Xt!==null||Yt!==null)&&(Ls(),Ss())}}function On(e,t){var n=e.stateNode;if(n===null)return null;var r=ui(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(x(231,t,typeof n));return n}var cl=!1;if(qe)try{var hn={};Object.defineProperty(hn,"passive",{get:function(){cl=!0}}),window.addEventListener("test",hn,hn),window.removeEventListener("test",hn,hn)}catch{cl=!1}function $c(e,t,n,r,i,l,o,a,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(h){this.onError(h)}}var jn=!1,Rr=null,Ir=!1,dl=null,Wc={onError:function(e){jn=!0,Rr=e}};function Gc(e,t,n,r,i,l,o,a,u){jn=!1,Rr=null,$c.apply(Wc,arguments)}function Qc(e,t,n,r,i,l,o,a,u){if(Gc.apply(this,arguments),jn){if(jn){var d=Rr;jn=!1,Rr=null}else throw Error(x(198));Ir||(Ir=!0,dl=d)}}function Rt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function js(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Xo(e){if(Rt(e)!==e)throw Error(x(188))}function Kc(e){var t=e.alternate;if(!t){if(t=Rt(e),t===null)throw Error(x(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return Xo(i),e;if(l===r)return Xo(i),t;l=l.sibling}throw Error(x(188))}if(n.return!==r.return)n=i,r=l;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=l;break}if(a===r){o=!0,r=i,n=l;break}a=a.sibling}if(!o){for(a=l.child;a;){if(a===n){o=!0,n=l,r=i;break}if(a===r){o=!0,r=l,n=i;break}a=a.sibling}if(!o)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?e:t}function Es(e){return e=Kc(e),e!==null?Ps(e):null}function Ps(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ps(e);if(t!==null)return t;e=e.sibling}return null}var zs=ke.unstable_scheduleCallback,Yo=ke.unstable_cancelCallback,qc=ke.unstable_shouldYield,Xc=ke.unstable_requestPaint,Q=ke.unstable_now,Yc=ke.unstable_getCurrentPriorityLevel,Zl=ke.unstable_ImmediatePriority,Ts=ke.unstable_UserBlockingPriority,Or=ke.unstable_NormalPriority,Jc=ke.unstable_LowPriority,Ms=ke.unstable_IdlePriority,li=null,Be=null;function Zc(e){if(Be&&typeof Be.onCommitFiberRoot=="function")try{Be.onCommitFiberRoot(li,e,void 0,(e.current.flags&128)===128)}catch{}}var Re=Math.clz32?Math.clz32:nd,ed=Math.log,td=Math.LN2;function nd(e){return e>>>=0,e===0?32:31-(ed(e)/td|0)|0}var ur=64,cr=4194304;function Cn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function br(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Cn(a):(l&=o,l!==0&&(r=Cn(l)))}else o=n&~i,o!==0?r=Cn(o):l!==0&&(r=Cn(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Re(t),i=1<<n,r|=e[n],t&=~i;return r}function rd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function id(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-Re(l),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=rd(a,t)):u<=t&&(e.expiredLanes|=a),l&=~a}}function pl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ds(){var e=ur;return ur<<=1,!(ur&4194240)&&(ur=64),e}function Ei(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Zn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Re(t),e[t]=n}function ld(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Re(n),l=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~l}}function eo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Re(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var D=0;function As(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Rs,to,Is,Os,bs,fl=!1,dr=[],at=null,st=null,ut=null,bn=new Map,Fn=new Map,rt=[],od="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jo(e,t){switch(e){case"focusin":case"focusout":at=null;break;case"dragenter":case"dragleave":st=null;break;case"mouseover":case"mouseout":ut=null;break;case"pointerover":case"pointerout":bn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fn.delete(t.pointerId)}}function gn(e,t,n,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},t!==null&&(t=tr(t),t!==null&&to(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function ad(e,t,n,r,i){switch(t){case"focusin":return at=gn(at,e,t,n,r,i),!0;case"dragenter":return st=gn(st,e,t,n,r,i),!0;case"mouseover":return ut=gn(ut,e,t,n,r,i),!0;case"pointerover":var l=i.pointerId;return bn.set(l,gn(bn.get(l)||null,e,t,n,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Fn.set(l,gn(Fn.get(l)||null,e,t,n,r,i)),!0}return!1}function Fs(e){var t=Ct(e.target);if(t!==null){var n=Rt(t);if(n!==null){if(t=n.tag,t===13){if(t=js(n),t!==null){e.blockedOn=t,bs(e.priority,function(){Is(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Cr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ml(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);sl=r,n.target.dispatchEvent(r),sl=null}else return t=tr(n),t!==null&&to(t),e.blockedOn=n,!1;t.shift()}return!0}function Zo(e,t,n){Cr(e)&&n.delete(t)}function sd(){fl=!1,at!==null&&Cr(at)&&(at=null),st!==null&&Cr(st)&&(st=null),ut!==null&&Cr(ut)&&(ut=null),bn.forEach(Zo),Fn.forEach(Zo)}function vn(e,t){e.blockedOn===t&&(e.blockedOn=null,fl||(fl=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,sd)))}function Un(e){function t(i){return vn(i,e)}if(0<dr.length){vn(dr[0],e);for(var n=1;n<dr.length;n++){var r=dr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(at!==null&&vn(at,e),st!==null&&vn(st,e),ut!==null&&vn(ut,e),bn.forEach(t),Fn.forEach(t),n=0;n<rt.length;n++)r=rt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<rt.length&&(n=rt[0],n.blockedOn===null);)Fs(n),n.blockedOn===null&&rt.shift()}var Jt=Ze.ReactCurrentBatchConfig,Fr=!0;function ud(e,t,n,r){var i=D,l=Jt.transition;Jt.transition=null;try{D=1,no(e,t,n,r)}finally{D=i,Jt.transition=l}}function cd(e,t,n,r){var i=D,l=Jt.transition;Jt.transition=null;try{D=4,no(e,t,n,r)}finally{D=i,Jt.transition=l}}function no(e,t,n,r){if(Fr){var i=ml(e,t,n,r);if(i===null)bi(e,t,r,Ur,n),Jo(e,r);else if(ad(i,e,t,n,r))r.stopPropagation();else if(Jo(e,r),t&4&&-1<od.indexOf(e)){for(;i!==null;){var l=tr(i);if(l!==null&&Rs(l),l=ml(e,t,n,r),l===null&&bi(e,t,r,Ur,n),l===i)break;i=l}i!==null&&r.stopPropagation()}else bi(e,t,r,null,n)}}var Ur=null;function ml(e,t,n,r){if(Ur=null,e=Jl(r),e=Ct(e),e!==null)if(t=Rt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=js(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ur=e,null}function Us(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Yc()){case Zl:return 1;case Ts:return 4;case Or:case Jc:return 16;case Ms:return 536870912;default:return 16}default:return 16}}var lt=null,ro=null,Lr=null;function Bs(){if(Lr)return Lr;var e,t=ro,n=t.length,r,i="value"in lt?lt.value:lt.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[l-r];r++);return Lr=i.slice(e,1<r?1-r:void 0)}function Nr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function pr(){return!0}function ea(){return!1}function Se(e){function t(n,r,i,l,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?pr:ea,this.isPropagationStopped=ea,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=pr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=pr)},persist:function(){},isPersistent:pr}),t}var cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},io=Se(cn),er=H({},cn,{view:0,detail:0}),dd=Se(er),Pi,zi,xn,oi=H({},er,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xn&&(xn&&e.type==="mousemove"?(Pi=e.screenX-xn.screenX,zi=e.screenY-xn.screenY):zi=Pi=0,xn=e),Pi)},movementY:function(e){return"movementY"in e?e.movementY:zi}}),ta=Se(oi),pd=H({},oi,{dataTransfer:0}),fd=Se(pd),md=H({},er,{relatedTarget:0}),Ti=Se(md),hd=H({},cn,{animationName:0,elapsedTime:0,pseudoElement:0}),gd=Se(hd),vd=H({},cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xd=Se(vd),yd=H({},cn,{data:0}),na=Se(yd),wd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_d={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=_d[e])?!!t[e]:!1}function lo(){return Sd}var Cd=H({},er,{key:function(e){if(e.key){var t=wd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Nr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?kd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lo,charCode:function(e){return e.type==="keypress"?Nr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Nr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ld=Se(Cd),Nd=H({},oi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ra=Se(Nd),jd=H({},er,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lo}),Ed=Se(jd),Pd=H({},cn,{propertyName:0,elapsedTime:0,pseudoElement:0}),zd=Se(Pd),Td=H({},oi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Md=Se(Td),Dd=[9,13,27,32],oo=qe&&"CompositionEvent"in window,En=null;qe&&"documentMode"in document&&(En=document.documentMode);var Ad=qe&&"TextEvent"in window&&!En,Hs=qe&&(!oo||En&&8<En&&11>=En),ia=" ",la=!1;function Vs(e,t){switch(e){case"keyup":return Dd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $s(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ft=!1;function Rd(e,t){switch(e){case"compositionend":return $s(t);case"keypress":return t.which!==32?null:(la=!0,ia);case"textInput":return e=t.data,e===ia&&la?null:e;default:return null}}function Id(e,t){if(Ft)return e==="compositionend"||!oo&&Vs(e,t)?(e=Bs(),Lr=ro=lt=null,Ft=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Hs&&t.locale!=="ko"?null:t.data;default:return null}}var Od={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function oa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Od[e.type]:t==="textarea"}function Ws(e,t,n,r){_s(r),t=Br(t,"onChange"),0<t.length&&(n=new io("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Pn=null,Bn=null;function bd(e){nu(e,0)}function ai(e){var t=Ht(e);if(hs(t))return e}function Fd(e,t){if(e==="change")return t}var Gs=!1;if(qe){var Mi;if(qe){var Di="oninput"in document;if(!Di){var aa=document.createElement("div");aa.setAttribute("oninput","return;"),Di=typeof aa.oninput=="function"}Mi=Di}else Mi=!1;Gs=Mi&&(!document.documentMode||9<document.documentMode)}function sa(){Pn&&(Pn.detachEvent("onpropertychange",Qs),Bn=Pn=null)}function Qs(e){if(e.propertyName==="value"&&ai(Bn)){var t=[];Ws(t,Bn,e,Jl(e)),Ns(bd,t)}}function Ud(e,t,n){e==="focusin"?(sa(),Pn=t,Bn=n,Pn.attachEvent("onpropertychange",Qs)):e==="focusout"&&sa()}function Bd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ai(Bn)}function Hd(e,t){if(e==="click")return ai(t)}function Vd(e,t){if(e==="input"||e==="change")return ai(t)}function $d(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Oe=typeof Object.is=="function"?Object.is:$d;function Hn(e,t){if(Oe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Xi.call(t,i)||!Oe(e[i],t[i]))return!1}return!0}function ua(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ca(e,t){var n=ua(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ua(n)}}function Ks(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ks(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function qs(){for(var e=window,t=Ar();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ar(e.document)}return t}function ao(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Wd(e){var t=qs(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ks(n.ownerDocument.documentElement,n)){if(r!==null&&ao(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=ca(n,l);var o=ca(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Gd=qe&&"documentMode"in document&&11>=document.documentMode,Ut=null,hl=null,zn=null,gl=!1;function da(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gl||Ut==null||Ut!==Ar(r)||(r=Ut,"selectionStart"in r&&ao(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zn&&Hn(zn,r)||(zn=r,r=Br(hl,"onSelect"),0<r.length&&(t=new io("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ut)))}function fr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Bt={animationend:fr("Animation","AnimationEnd"),animationiteration:fr("Animation","AnimationIteration"),animationstart:fr("Animation","AnimationStart"),transitionend:fr("Transition","TransitionEnd")},Ai={},Xs={};qe&&(Xs=document.createElement("div").style,"AnimationEvent"in window||(delete Bt.animationend.animation,delete Bt.animationiteration.animation,delete Bt.animationstart.animation),"TransitionEvent"in window||delete Bt.transitionend.transition);function si(e){if(Ai[e])return Ai[e];if(!Bt[e])return e;var t=Bt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Xs)return Ai[e]=t[n];return e}var Ys=si("animationend"),Js=si("animationiteration"),Zs=si("animationstart"),eu=si("transitionend"),tu=new Map,pa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vt(e,t){tu.set(e,t),At(t,[e])}for(var Ri=0;Ri<pa.length;Ri++){var Ii=pa[Ri],Qd=Ii.toLowerCase(),Kd=Ii[0].toUpperCase()+Ii.slice(1);vt(Qd,"on"+Kd)}vt(Ys,"onAnimationEnd");vt(Js,"onAnimationIteration");vt(Zs,"onAnimationStart");vt("dblclick","onDoubleClick");vt("focusin","onFocus");vt("focusout","onBlur");vt(eu,"onTransitionEnd");tn("onMouseEnter",["mouseout","mouseover"]);tn("onMouseLeave",["mouseout","mouseover"]);tn("onPointerEnter",["pointerout","pointerover"]);tn("onPointerLeave",["pointerout","pointerover"]);At("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));At("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));At("onBeforeInput",["compositionend","keypress","textInput","paste"]);At("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));At("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));At("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ln="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qd=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ln));function fa(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Qc(r,t,void 0,e),e.currentTarget=null}function nu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,d=a.currentTarget;if(a=a.listener,u!==l&&i.isPropagationStopped())break e;fa(i,a,d),l=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,d=a.currentTarget,a=a.listener,u!==l&&i.isPropagationStopped())break e;fa(i,a,d),l=u}}}if(Ir)throw e=dl,Ir=!1,dl=null,e}function O(e,t){var n=t[kl];n===void 0&&(n=t[kl]=new Set);var r=e+"__bubble";n.has(r)||(ru(t,e,2,!1),n.add(r))}function Oi(e,t,n){var r=0;t&&(r|=4),ru(n,e,r,t)}var mr="_reactListening"+Math.random().toString(36).slice(2);function Vn(e){if(!e[mr]){e[mr]=!0,cs.forEach(function(n){n!=="selectionchange"&&(qd.has(n)||Oi(n,!1,e),Oi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[mr]||(t[mr]=!0,Oi("selectionchange",!1,t))}}function ru(e,t,n,r){switch(Us(t)){case 1:var i=ud;break;case 4:i=cd;break;default:i=no}n=i.bind(null,t,n,e),i=void 0,!cl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function bi(e,t,n,r,i){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Ct(a),o===null)return;if(u=o.tag,u===5||u===6){r=l=o;continue e}a=a.parentNode}}r=r.return}Ns(function(){var d=l,h=Jl(n),m=[];e:{var g=tu.get(e);if(g!==void 0){var y=io,k=e;switch(e){case"keypress":if(Nr(n)===0)break e;case"keydown":case"keyup":y=Ld;break;case"focusin":k="focus",y=Ti;break;case"focusout":k="blur",y=Ti;break;case"beforeblur":case"afterblur":y=Ti;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=ta;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=fd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Ed;break;case Ys:case Js:case Zs:y=gd;break;case eu:y=zd;break;case"scroll":y=dd;break;case"wheel":y=Md;break;case"copy":case"cut":case"paste":y=xd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=ra}var w=(t&4)!==0,R=!w&&e==="scroll",p=w?g!==null?g+"Capture":null:g;w=[];for(var c=d,f;c!==null;){f=c;var v=f.stateNode;if(f.tag===5&&v!==null&&(f=v,p!==null&&(v=On(c,p),v!=null&&w.push($n(c,v,f)))),R)break;c=c.return}0<w.length&&(g=new y(g,k,null,n,h),m.push({event:g,listeners:w}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",g&&n!==sl&&(k=n.relatedTarget||n.fromElement)&&(Ct(k)||k[Xe]))break e;if((y||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,y?(k=n.relatedTarget||n.toElement,y=d,k=k?Ct(k):null,k!==null&&(R=Rt(k),k!==R||k.tag!==5&&k.tag!==6)&&(k=null)):(y=null,k=d),y!==k)){if(w=ta,v="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(w=ra,v="onPointerLeave",p="onPointerEnter",c="pointer"),R=y==null?g:Ht(y),f=k==null?g:Ht(k),g=new w(v,c+"leave",y,n,h),g.target=R,g.relatedTarget=f,v=null,Ct(h)===d&&(w=new w(p,c+"enter",k,n,h),w.target=f,w.relatedTarget=R,v=w),R=v,y&&k)t:{for(w=y,p=k,c=0,f=w;f;f=It(f))c++;for(f=0,v=p;v;v=It(v))f++;for(;0<c-f;)w=It(w),c--;for(;0<f-c;)p=It(p),f--;for(;c--;){if(w===p||p!==null&&w===p.alternate)break t;w=It(w),p=It(p)}w=null}else w=null;y!==null&&ma(m,g,y,w,!1),k!==null&&R!==null&&ma(m,R,k,w,!0)}}e:{if(g=d?Ht(d):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var S=Fd;else if(oa(g))if(Gs)S=Vd;else{S=Bd;var L=Ud}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(S=Hd);if(S&&(S=S(e,d))){Ws(m,S,n,h);break e}L&&L(e,g,d),e==="focusout"&&(L=g._wrapperState)&&L.controlled&&g.type==="number"&&rl(g,"number",g.value)}switch(L=d?Ht(d):window,e){case"focusin":(oa(L)||L.contentEditable==="true")&&(Ut=L,hl=d,zn=null);break;case"focusout":zn=hl=Ut=null;break;case"mousedown":gl=!0;break;case"contextmenu":case"mouseup":case"dragend":gl=!1,da(m,n,h);break;case"selectionchange":if(Gd)break;case"keydown":case"keyup":da(m,n,h)}var N;if(oo)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else Ft?Vs(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(Hs&&n.locale!=="ko"&&(Ft||j!=="onCompositionStart"?j==="onCompositionEnd"&&Ft&&(N=Bs()):(lt=h,ro="value"in lt?lt.value:lt.textContent,Ft=!0)),L=Br(d,j),0<L.length&&(j=new na(j,e,null,n,h),m.push({event:j,listeners:L}),N?j.data=N:(N=$s(n),N!==null&&(j.data=N)))),(N=Ad?Rd(e,n):Id(e,n))&&(d=Br(d,"onBeforeInput"),0<d.length&&(h=new na("onBeforeInput","beforeinput",null,n,h),m.push({event:h,listeners:d}),h.data=N))}nu(m,t)})}function $n(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Br(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=On(e,n),l!=null&&r.unshift($n(e,l,i)),l=On(e,t),l!=null&&r.push($n(e,l,i))),e=e.return}return r}function It(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ma(e,t,n,r,i){for(var l=t._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,d=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&d!==null&&(a=d,i?(u=On(n,l),u!=null&&o.unshift($n(n,u,a))):i||(u=On(n,l),u!=null&&o.push($n(n,u,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Xd=/\r\n?/g,Yd=/\u0000|\uFFFD/g;function ha(e){return(typeof e=="string"?e:""+e).replace(Xd,`
`).replace(Yd,"")}function hr(e,t,n){if(t=ha(t),ha(e)!==t&&n)throw Error(x(425))}function Hr(){}var vl=null,xl=null;function yl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var wl=typeof setTimeout=="function"?setTimeout:void 0,Jd=typeof clearTimeout=="function"?clearTimeout:void 0,ga=typeof Promise=="function"?Promise:void 0,Zd=typeof queueMicrotask=="function"?queueMicrotask:typeof ga<"u"?function(e){return ga.resolve(null).then(e).catch(ep)}:wl;function ep(e){setTimeout(function(){throw e})}function Fi(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Un(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Un(t)}function ct(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function va(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var dn=Math.random().toString(36).slice(2),Ue="__reactFiber$"+dn,Wn="__reactProps$"+dn,Xe="__reactContainer$"+dn,kl="__reactEvents$"+dn,tp="__reactListeners$"+dn,np="__reactHandles$"+dn;function Ct(e){var t=e[Ue];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Xe]||n[Ue]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=va(e);e!==null;){if(n=e[Ue])return n;e=va(e)}return t}e=n,n=e.parentNode}return null}function tr(e){return e=e[Ue]||e[Xe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ht(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(x(33))}function ui(e){return e[Wn]||null}var _l=[],Vt=-1;function xt(e){return{current:e}}function b(e){0>Vt||(e.current=_l[Vt],_l[Vt]=null,Vt--)}function I(e,t){Vt++,_l[Vt]=e.current,e.current=t}var gt={},ae=xt(gt),me=xt(!1),Pt=gt;function nn(e,t){var n=e.type.contextTypes;if(!n)return gt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function he(e){return e=e.childContextTypes,e!=null}function Vr(){b(me),b(ae)}function xa(e,t,n){if(ae.current!==gt)throw Error(x(168));I(ae,t),I(me,n)}function iu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(x(108,Uc(e)||"Unknown",i));return H({},n,r)}function $r(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||gt,Pt=ae.current,I(ae,e),I(me,me.current),!0}function ya(e,t,n){var r=e.stateNode;if(!r)throw Error(x(169));n?(e=iu(e,t,Pt),r.__reactInternalMemoizedMergedChildContext=e,b(me),b(ae),I(ae,e)):b(me),I(me,n)}var We=null,ci=!1,Ui=!1;function lu(e){We===null?We=[e]:We.push(e)}function rp(e){ci=!0,lu(e)}function yt(){if(!Ui&&We!==null){Ui=!0;var e=0,t=D;try{var n=We;for(D=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}We=null,ci=!1}catch(i){throw We!==null&&(We=We.slice(e+1)),zs(Zl,yt),i}finally{D=t,Ui=!1}}return null}var $t=[],Wt=0,Wr=null,Gr=0,Ce=[],Le=0,zt=null,Ge=1,Qe="";function _t(e,t){$t[Wt++]=Gr,$t[Wt++]=Wr,Wr=e,Gr=t}function ou(e,t,n){Ce[Le++]=Ge,Ce[Le++]=Qe,Ce[Le++]=zt,zt=e;var r=Ge;e=Qe;var i=32-Re(r)-1;r&=~(1<<i),n+=1;var l=32-Re(t)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ge=1<<32-Re(t)+i|n<<i|r,Qe=l+e}else Ge=1<<l|n<<i|r,Qe=e}function so(e){e.return!==null&&(_t(e,1),ou(e,1,0))}function uo(e){for(;e===Wr;)Wr=$t[--Wt],$t[Wt]=null,Gr=$t[--Wt],$t[Wt]=null;for(;e===zt;)zt=Ce[--Le],Ce[Le]=null,Qe=Ce[--Le],Ce[Le]=null,Ge=Ce[--Le],Ce[Le]=null}var we=null,xe=null,F=!1,Ae=null;function au(e,t){var n=Ne(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function wa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,we=e,xe=ct(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,we=e,xe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=zt!==null?{id:Ge,overflow:Qe}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ne(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,we=e,xe=null,!0):!1;default:return!1}}function Sl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Cl(e){if(F){var t=xe;if(t){var n=t;if(!wa(e,t)){if(Sl(e))throw Error(x(418));t=ct(n.nextSibling);var r=we;t&&wa(e,t)?au(r,n):(e.flags=e.flags&-4097|2,F=!1,we=e)}}else{if(Sl(e))throw Error(x(418));e.flags=e.flags&-4097|2,F=!1,we=e}}}function ka(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;we=e}function gr(e){if(e!==we)return!1;if(!F)return ka(e),F=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!yl(e.type,e.memoizedProps)),t&&(t=xe)){if(Sl(e))throw su(),Error(x(418));for(;t;)au(e,t),t=ct(t.nextSibling)}if(ka(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(x(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){xe=ct(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}xe=null}}else xe=we?ct(e.stateNode.nextSibling):null;return!0}function su(){for(var e=xe;e;)e=ct(e.nextSibling)}function rn(){xe=we=null,F=!1}function co(e){Ae===null?Ae=[e]:Ae.push(e)}var ip=Ze.ReactCurrentBatchConfig;function yn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,e));var i=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(o){var a=i.refs;o===null?delete a[l]:a[l]=o},t._stringRef=l,t)}if(typeof e!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,e))}return e}function vr(e,t){throw e=Object.prototype.toString.call(t),Error(x(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function _a(e){var t=e._init;return t(e._payload)}function uu(e){function t(p,c){if(e){var f=p.deletions;f===null?(p.deletions=[c],p.flags|=16):f.push(c)}}function n(p,c){if(!e)return null;for(;c!==null;)t(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function i(p,c){return p=mt(p,c),p.index=0,p.sibling=null,p}function l(p,c,f){return p.index=f,e?(f=p.alternate,f!==null?(f=f.index,f<c?(p.flags|=2,c):f):(p.flags|=2,c)):(p.flags|=1048576,c)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,c,f,v){return c===null||c.tag!==6?(c=Qi(f,p.mode,v),c.return=p,c):(c=i(c,f),c.return=p,c)}function u(p,c,f,v){var S=f.type;return S===bt?h(p,c,f.props.children,v,f.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===tt&&_a(S)===c.type)?(v=i(c,f.props),v.ref=yn(p,c,f),v.return=p,v):(v=Dr(f.type,f.key,f.props,null,p.mode,v),v.ref=yn(p,c,f),v.return=p,v)}function d(p,c,f,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=Ki(f,p.mode,v),c.return=p,c):(c=i(c,f.children||[]),c.return=p,c)}function h(p,c,f,v,S){return c===null||c.tag!==7?(c=Et(f,p.mode,v,S),c.return=p,c):(c=i(c,f),c.return=p,c)}function m(p,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Qi(""+c,p.mode,f),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case or:return f=Dr(c.type,c.key,c.props,null,p.mode,f),f.ref=yn(p,null,c),f.return=p,f;case Ot:return c=Ki(c,p.mode,f),c.return=p,c;case tt:var v=c._init;return m(p,v(c._payload),f)}if(Sn(c)||mn(c))return c=Et(c,p.mode,f,null),c.return=p,c;vr(p,c)}return null}function g(p,c,f,v){var S=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return S!==null?null:a(p,c,""+f,v);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case or:return f.key===S?u(p,c,f,v):null;case Ot:return f.key===S?d(p,c,f,v):null;case tt:return S=f._init,g(p,c,S(f._payload),v)}if(Sn(f)||mn(f))return S!==null?null:h(p,c,f,v,null);vr(p,f)}return null}function y(p,c,f,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return p=p.get(f)||null,a(c,p,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case or:return p=p.get(v.key===null?f:v.key)||null,u(c,p,v,S);case Ot:return p=p.get(v.key===null?f:v.key)||null,d(c,p,v,S);case tt:var L=v._init;return y(p,c,f,L(v._payload),S)}if(Sn(v)||mn(v))return p=p.get(f)||null,h(c,p,v,S,null);vr(c,v)}return null}function k(p,c,f,v){for(var S=null,L=null,N=c,j=c=0,$=null;N!==null&&j<f.length;j++){N.index>j?($=N,N=null):$=N.sibling;var T=g(p,N,f[j],v);if(T===null){N===null&&(N=$);break}e&&N&&T.alternate===null&&t(p,N),c=l(T,c,j),L===null?S=T:L.sibling=T,L=T,N=$}if(j===f.length)return n(p,N),F&&_t(p,j),S;if(N===null){for(;j<f.length;j++)N=m(p,f[j],v),N!==null&&(c=l(N,c,j),L===null?S=N:L.sibling=N,L=N);return F&&_t(p,j),S}for(N=r(p,N);j<f.length;j++)$=y(N,p,j,f[j],v),$!==null&&(e&&$.alternate!==null&&N.delete($.key===null?j:$.key),c=l($,c,j),L===null?S=$:L.sibling=$,L=$);return e&&N.forEach(function(ze){return t(p,ze)}),F&&_t(p,j),S}function w(p,c,f,v){var S=mn(f);if(typeof S!="function")throw Error(x(150));if(f=S.call(f),f==null)throw Error(x(151));for(var L=S=null,N=c,j=c=0,$=null,T=f.next();N!==null&&!T.done;j++,T=f.next()){N.index>j?($=N,N=null):$=N.sibling;var ze=g(p,N,T.value,v);if(ze===null){N===null&&(N=$);break}e&&N&&ze.alternate===null&&t(p,N),c=l(ze,c,j),L===null?S=ze:L.sibling=ze,L=ze,N=$}if(T.done)return n(p,N),F&&_t(p,j),S;if(N===null){for(;!T.done;j++,T=f.next())T=m(p,T.value,v),T!==null&&(c=l(T,c,j),L===null?S=T:L.sibling=T,L=T);return F&&_t(p,j),S}for(N=r(p,N);!T.done;j++,T=f.next())T=y(N,p,j,T.value,v),T!==null&&(e&&T.alternate!==null&&N.delete(T.key===null?j:T.key),c=l(T,c,j),L===null?S=T:L.sibling=T,L=T);return e&&N.forEach(function(pn){return t(p,pn)}),F&&_t(p,j),S}function R(p,c,f,v){if(typeof f=="object"&&f!==null&&f.type===bt&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case or:e:{for(var S=f.key,L=c;L!==null;){if(L.key===S){if(S=f.type,S===bt){if(L.tag===7){n(p,L.sibling),c=i(L,f.props.children),c.return=p,p=c;break e}}else if(L.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===tt&&_a(S)===L.type){n(p,L.sibling),c=i(L,f.props),c.ref=yn(p,L,f),c.return=p,p=c;break e}n(p,L);break}else t(p,L);L=L.sibling}f.type===bt?(c=Et(f.props.children,p.mode,v,f.key),c.return=p,p=c):(v=Dr(f.type,f.key,f.props,null,p.mode,v),v.ref=yn(p,c,f),v.return=p,p=v)}return o(p);case Ot:e:{for(L=f.key;c!==null;){if(c.key===L)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){n(p,c.sibling),c=i(c,f.children||[]),c.return=p,p=c;break e}else{n(p,c);break}else t(p,c);c=c.sibling}c=Ki(f,p.mode,v),c.return=p,p=c}return o(p);case tt:return L=f._init,R(p,c,L(f._payload),v)}if(Sn(f))return k(p,c,f,v);if(mn(f))return w(p,c,f,v);vr(p,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(n(p,c.sibling),c=i(c,f),c.return=p,p=c):(n(p,c),c=Qi(f,p.mode,v),c.return=p,p=c),o(p)):n(p,c)}return R}var ln=uu(!0),cu=uu(!1),Qr=xt(null),Kr=null,Gt=null,po=null;function fo(){po=Gt=Kr=null}function mo(e){var t=Qr.current;b(Qr),e._currentValue=t}function Ll(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Zt(e,t){Kr=e,po=Gt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(fe=!0),e.firstContext=null)}function Ee(e){var t=e._currentValue;if(po!==e)if(e={context:e,memoizedValue:t,next:null},Gt===null){if(Kr===null)throw Error(x(308));Gt=e,Kr.dependencies={lanes:0,firstContext:e}}else Gt=Gt.next=e;return t}var Lt=null;function ho(e){Lt===null?Lt=[e]:Lt.push(e)}function du(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ho(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ye(e,r)}function Ye(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var nt=!1;function go(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ke(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function dt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ye(e,n)}return i=r.interleaved,i===null?(t.next=t,ho(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ye(e,n)}function jr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,eo(e,n)}}function Sa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=o:l=l.next=o,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function qr(e,t,n,r){var i=e.updateQueue;nt=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,d=u.next;u.next=null,o===null?l=d:o.next=d,o=u;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=d:a.next=d,h.lastBaseUpdate=u))}if(l!==null){var m=i.baseState;o=0,h=d=u=null,a=l;do{var g=a.lane,y=a.eventTime;if((r&g)===g){h!==null&&(h=h.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var k=e,w=a;switch(g=t,y=n,w.tag){case 1:if(k=w.payload,typeof k=="function"){m=k.call(y,m,g);break e}m=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=w.payload,g=typeof k=="function"?k.call(y,m,g):k,g==null)break e;m=H({},m,g);break e;case 2:nt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else y={eventTime:y,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(d=h=y,u=m):h=h.next=y,o|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(h===null&&(u=m),i.baseState=u,i.firstBaseUpdate=d,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);Mt|=o,e.lanes=o,e.memoizedState=m}}function Ca(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(x(191,i));i.call(r)}}}var nr={},He=xt(nr),Gn=xt(nr),Qn=xt(nr);function Nt(e){if(e===nr)throw Error(x(174));return e}function vo(e,t){switch(I(Qn,t),I(Gn,e),I(He,nr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ll(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ll(t,e)}b(He),I(He,t)}function on(){b(He),b(Gn),b(Qn)}function fu(e){Nt(Qn.current);var t=Nt(He.current),n=ll(t,e.type);t!==n&&(I(Gn,e),I(He,n))}function xo(e){Gn.current===e&&(b(He),b(Gn))}var U=xt(0);function Xr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Bi=[];function yo(){for(var e=0;e<Bi.length;e++)Bi[e]._workInProgressVersionPrimary=null;Bi.length=0}var Er=Ze.ReactCurrentDispatcher,Hi=Ze.ReactCurrentBatchConfig,Tt=0,B=null,q=null,J=null,Yr=!1,Tn=!1,Kn=0,lp=0;function re(){throw Error(x(321))}function wo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Oe(e[n],t[n]))return!1;return!0}function ko(e,t,n,r,i,l){if(Tt=l,B=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Er.current=e===null||e.memoizedState===null?up:cp,e=n(r,i),Tn){l=0;do{if(Tn=!1,Kn=0,25<=l)throw Error(x(301));l+=1,J=q=null,t.updateQueue=null,Er.current=dp,e=n(r,i)}while(Tn)}if(Er.current=Jr,t=q!==null&&q.next!==null,Tt=0,J=q=B=null,Yr=!1,t)throw Error(x(300));return e}function _o(){var e=Kn!==0;return Kn=0,e}function Fe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?B.memoizedState=J=e:J=J.next=e,J}function Pe(){if(q===null){var e=B.alternate;e=e!==null?e.memoizedState:null}else e=q.next;var t=J===null?B.memoizedState:J.next;if(t!==null)J=t,q=e;else{if(e===null)throw Error(x(310));q=e,e={memoizedState:q.memoizedState,baseState:q.baseState,baseQueue:q.baseQueue,queue:q.queue,next:null},J===null?B.memoizedState=J=e:J=J.next=e}return J}function qn(e,t){return typeof t=="function"?t(e):t}function Vi(e){var t=Pe(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=q,i=r.baseQueue,l=n.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,r=r.baseState;var a=o=null,u=null,d=l;do{var h=d.lane;if((Tt&h)===h)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var m={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(a=u=m,o=r):u=u.next=m,B.lanes|=h,Mt|=h}d=d.next}while(d!==null&&d!==l);u===null?o=r:u.next=a,Oe(r,t.memoizedState)||(fe=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do l=i.lane,B.lanes|=l,Mt|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function $i(e){var t=Pe(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);Oe(l,t.memoizedState)||(fe=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function mu(){}function hu(e,t){var n=B,r=Pe(),i=t(),l=!Oe(r.memoizedState,i);if(l&&(r.memoizedState=i,fe=!0),r=r.queue,So(xu.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||J!==null&&J.memoizedState.tag&1){if(n.flags|=2048,Xn(9,vu.bind(null,n,r,i,t),void 0,null),Z===null)throw Error(x(349));Tt&30||gu(n,t,i)}return i}function gu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=B.updateQueue,t===null?(t={lastEffect:null,stores:null},B.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function vu(e,t,n,r){t.value=n,t.getSnapshot=r,yu(t)&&wu(e)}function xu(e,t,n){return n(function(){yu(t)&&wu(e)})}function yu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Oe(e,n)}catch{return!0}}function wu(e){var t=Ye(e,1);t!==null&&Ie(t,e,1,-1)}function La(e){var t=Fe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qn,lastRenderedState:e},t.queue=e,e=e.dispatch=sp.bind(null,B,e),[t.memoizedState,e]}function Xn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=B.updateQueue,t===null?(t={lastEffect:null,stores:null},B.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ku(){return Pe().memoizedState}function Pr(e,t,n,r){var i=Fe();B.flags|=e,i.memoizedState=Xn(1|t,n,void 0,r===void 0?null:r)}function di(e,t,n,r){var i=Pe();r=r===void 0?null:r;var l=void 0;if(q!==null){var o=q.memoizedState;if(l=o.destroy,r!==null&&wo(r,o.deps)){i.memoizedState=Xn(t,n,l,r);return}}B.flags|=e,i.memoizedState=Xn(1|t,n,l,r)}function Na(e,t){return Pr(8390656,8,e,t)}function So(e,t){return di(2048,8,e,t)}function _u(e,t){return di(4,2,e,t)}function Su(e,t){return di(4,4,e,t)}function Cu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Lu(e,t,n){return n=n!=null?n.concat([e]):null,di(4,4,Cu.bind(null,t,e),n)}function Co(){}function Nu(e,t){var n=Pe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&wo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ju(e,t){var n=Pe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&wo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Eu(e,t,n){return Tt&21?(Oe(n,t)||(n=Ds(),B.lanes|=n,Mt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,fe=!0),e.memoizedState=n)}function op(e,t){var n=D;D=n!==0&&4>n?n:4,e(!0);var r=Hi.transition;Hi.transition={};try{e(!1),t()}finally{D=n,Hi.transition=r}}function Pu(){return Pe().memoizedState}function ap(e,t,n){var r=ft(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},zu(e))Tu(t,n);else if(n=du(e,t,n,r),n!==null){var i=ue();Ie(n,e,r,i),Mu(n,t,r)}}function sp(e,t,n){var r=ft(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(zu(e))Tu(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,a=l(o,n);if(i.hasEagerState=!0,i.eagerState=a,Oe(a,o)){var u=t.interleaved;u===null?(i.next=i,ho(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=du(e,t,i,r),n!==null&&(i=ue(),Ie(n,e,r,i),Mu(n,t,r))}}function zu(e){var t=e.alternate;return e===B||t!==null&&t===B}function Tu(e,t){Tn=Yr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Mu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,eo(e,n)}}var Jr={readContext:Ee,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},up={readContext:Ee,useCallback:function(e,t){return Fe().memoizedState=[e,t===void 0?null:t],e},useContext:Ee,useEffect:Na,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Pr(4194308,4,Cu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Pr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Pr(4,2,e,t)},useMemo:function(e,t){var n=Fe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Fe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ap.bind(null,B,e),[r.memoizedState,e]},useRef:function(e){var t=Fe();return e={current:e},t.memoizedState=e},useState:La,useDebugValue:Co,useDeferredValue:function(e){return Fe().memoizedState=e},useTransition:function(){var e=La(!1),t=e[0];return e=op.bind(null,e[1]),Fe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=B,i=Fe();if(F){if(n===void 0)throw Error(x(407));n=n()}else{if(n=t(),Z===null)throw Error(x(349));Tt&30||gu(r,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,Na(xu.bind(null,r,l,e),[e]),r.flags|=2048,Xn(9,vu.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Fe(),t=Z.identifierPrefix;if(F){var n=Qe,r=Ge;n=(r&~(1<<32-Re(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Kn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=lp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},cp={readContext:Ee,useCallback:Nu,useContext:Ee,useEffect:So,useImperativeHandle:Lu,useInsertionEffect:_u,useLayoutEffect:Su,useMemo:ju,useReducer:Vi,useRef:ku,useState:function(){return Vi(qn)},useDebugValue:Co,useDeferredValue:function(e){var t=Pe();return Eu(t,q.memoizedState,e)},useTransition:function(){var e=Vi(qn)[0],t=Pe().memoizedState;return[e,t]},useMutableSource:mu,useSyncExternalStore:hu,useId:Pu,unstable_isNewReconciler:!1},dp={readContext:Ee,useCallback:Nu,useContext:Ee,useEffect:So,useImperativeHandle:Lu,useInsertionEffect:_u,useLayoutEffect:Su,useMemo:ju,useReducer:$i,useRef:ku,useState:function(){return $i(qn)},useDebugValue:Co,useDeferredValue:function(e){var t=Pe();return q===null?t.memoizedState=e:Eu(t,q.memoizedState,e)},useTransition:function(){var e=$i(qn)[0],t=Pe().memoizedState;return[e,t]},useMutableSource:mu,useSyncExternalStore:hu,useId:Pu,unstable_isNewReconciler:!1};function Me(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Nl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:H({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var pi={isMounted:function(e){return(e=e._reactInternals)?Rt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ue(),i=ft(e),l=Ke(r,i);l.payload=t,n!=null&&(l.callback=n),t=dt(e,l,i),t!==null&&(Ie(t,e,i,r),jr(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ue(),i=ft(e),l=Ke(r,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=dt(e,l,i),t!==null&&(Ie(t,e,i,r),jr(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ue(),r=ft(e),i=Ke(n,r);i.tag=2,t!=null&&(i.callback=t),t=dt(e,i,r),t!==null&&(Ie(t,e,r,n),jr(t,e,r))}};function ja(e,t,n,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):t.prototype&&t.prototype.isPureReactComponent?!Hn(n,r)||!Hn(i,l):!0}function Du(e,t,n){var r=!1,i=gt,l=t.contextType;return typeof l=="object"&&l!==null?l=Ee(l):(i=he(t)?Pt:ae.current,r=t.contextTypes,l=(r=r!=null)?nn(e,i):gt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=pi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function Ea(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&pi.enqueueReplaceState(t,t.state,null)}function jl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},go(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=Ee(l):(l=he(t)?Pt:ae.current,i.context=nn(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Nl(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&pi.enqueueReplaceState(i,i.state,null),qr(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function an(e,t){try{var n="",r=t;do n+=Fc(r),r=r.return;while(r);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function Wi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function El(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var pp=typeof WeakMap=="function"?WeakMap:Map;function Au(e,t,n){n=Ke(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ei||(ei=!0,bl=r),El(e,t)},n}function Ru(e,t,n){n=Ke(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){El(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){El(e,t),typeof r!="function"&&(pt===null?pt=new Set([this]):pt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Pa(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new pp;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Np.bind(null,e,t,n),t.then(e,e))}function za(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ta(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ke(-1,1),t.tag=2,dt(n,t,1))),n.lanes|=1),e)}var fp=Ze.ReactCurrentOwner,fe=!1;function se(e,t,n,r){t.child=e===null?cu(t,null,n,r):ln(t,e.child,n,r)}function Ma(e,t,n,r,i){n=n.render;var l=t.ref;return Zt(t,i),r=ko(e,t,n,r,l,i),n=_o(),e!==null&&!fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Je(e,t,i)):(F&&n&&so(t),t.flags|=1,se(e,t,r,i),t.child)}function Da(e,t,n,r,i){if(e===null){var l=n.type;return typeof l=="function"&&!Mo(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Iu(e,t,l,r,i)):(e=Dr(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&i)){var o=l.memoizedProps;if(n=n.compare,n=n!==null?n:Hn,n(o,r)&&e.ref===t.ref)return Je(e,t,i)}return t.flags|=1,e=mt(l,r),e.ref=t.ref,e.return=t,t.child=e}function Iu(e,t,n,r,i){if(e!==null){var l=e.memoizedProps;if(Hn(l,r)&&e.ref===t.ref)if(fe=!1,t.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(fe=!0);else return t.lanes=e.lanes,Je(e,t,i)}return Pl(e,t,n,r,i)}function Ou(e,t,n){var r=t.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},I(Kt,ve),ve|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,I(Kt,ve),ve|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,I(Kt,ve),ve|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,I(Kt,ve),ve|=r;return se(e,t,i,n),t.child}function bu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Pl(e,t,n,r,i){var l=he(n)?Pt:ae.current;return l=nn(t,l),Zt(t,i),n=ko(e,t,n,r,l,i),r=_o(),e!==null&&!fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Je(e,t,i)):(F&&r&&so(t),t.flags|=1,se(e,t,n,i),t.child)}function Aa(e,t,n,r,i){if(he(n)){var l=!0;$r(t)}else l=!1;if(Zt(t,i),t.stateNode===null)zr(e,t),Du(t,n,r),jl(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var u=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=Ee(d):(d=he(n)?Pt:ae.current,d=nn(t,d));var h=n.getDerivedStateFromProps,m=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==d)&&Ea(t,o,r,d),nt=!1;var g=t.memoizedState;o.state=g,qr(t,r,o,i),u=t.memoizedState,a!==r||g!==u||me.current||nt?(typeof h=="function"&&(Nl(t,n,h,r),u=t.memoizedState),(a=nt||ja(t,n,a,r,g,u,d))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=d,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,pu(e,t),a=t.memoizedProps,d=t.type===t.elementType?a:Me(t.type,a),o.props=d,m=t.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ee(u):(u=he(n)?Pt:ae.current,u=nn(t,u));var y=n.getDerivedStateFromProps;(h=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==m||g!==u)&&Ea(t,o,r,u),nt=!1,g=t.memoizedState,o.state=g,qr(t,r,o,i);var k=t.memoizedState;a!==m||g!==k||me.current||nt?(typeof y=="function"&&(Nl(t,n,y,r),k=t.memoizedState),(d=nt||ja(t,n,d,r,g,k,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,k,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,k,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),o.props=r,o.state=k,o.context=u,r=d):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return zl(e,t,n,r,l,i)}function zl(e,t,n,r,i,l){bu(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&ya(t,n,!1),Je(e,t,l);r=t.stateNode,fp.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=ln(t,e.child,null,l),t.child=ln(t,null,a,l)):se(e,t,a,l),t.memoizedState=r.state,i&&ya(t,n,!0),t.child}function Fu(e){var t=e.stateNode;t.pendingContext?xa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&xa(e,t.context,!1),vo(e,t.containerInfo)}function Ra(e,t,n,r,i){return rn(),co(i),t.flags|=256,se(e,t,n,r),t.child}var Tl={dehydrated:null,treeContext:null,retryLane:0};function Ml(e){return{baseLanes:e,cachePool:null,transitions:null}}function Uu(e,t,n){var r=t.pendingProps,i=U.current,l=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),I(U,i&1),e===null)return Cl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,l?(r=t.mode,l=t.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=hi(o,r,0,null),e=Et(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Ml(n),t.memoizedState=Tl,e):Lo(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return mp(e,t,o,r,a,i,n);if(l){l=r.fallback,o=t.mode,i=e.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=mt(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?l=mt(a,l):(l=Et(l,o,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,o=e.child.memoizedState,o=o===null?Ml(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~n,t.memoizedState=Tl,r}return l=e.child,e=l.sibling,r=mt(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Lo(e,t){return t=hi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function xr(e,t,n,r){return r!==null&&co(r),ln(t,e.child,null,n),e=Lo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function mp(e,t,n,r,i,l,o){if(n)return t.flags&256?(t.flags&=-257,r=Wi(Error(x(422))),xr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,i=t.mode,r=hi({mode:"visible",children:r.children},i,0,null),l=Et(l,i,o,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&ln(t,e.child,null,o),t.child.memoizedState=Ml(o),t.memoizedState=Tl,l);if(!(t.mode&1))return xr(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(x(419)),r=Wi(l,r,void 0),xr(e,t,o,r)}if(a=(o&e.childLanes)!==0,fe||a){if(r=Z,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Ye(e,i),Ie(r,e,i,-1))}return To(),r=Wi(Error(x(421))),xr(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=jp.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,xe=ct(i.nextSibling),we=t,F=!0,Ae=null,e!==null&&(Ce[Le++]=Ge,Ce[Le++]=Qe,Ce[Le++]=zt,Ge=e.id,Qe=e.overflow,zt=t),t=Lo(t,r.children),t.flags|=4096,t)}function Ia(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ll(e.return,t,n)}function Gi(e,t,n,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i)}function Bu(e,t,n){var r=t.pendingProps,i=r.revealOrder,l=r.tail;if(se(e,t,r.children,n),r=U.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ia(e,n,t);else if(e.tag===19)Ia(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(I(U,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Xr(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Gi(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Xr(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Gi(t,!0,n,null,l);break;case"together":Gi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function zr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Je(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Mt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(x(153));if(t.child!==null){for(e=t.child,n=mt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=mt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function hp(e,t,n){switch(t.tag){case 3:Fu(t),rn();break;case 5:fu(t);break;case 1:he(t.type)&&$r(t);break;case 4:vo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;I(Qr,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(I(U,U.current&1),t.flags|=128,null):n&t.child.childLanes?Uu(e,t,n):(I(U,U.current&1),e=Je(e,t,n),e!==null?e.sibling:null);I(U,U.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Bu(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),I(U,U.current),r)break;return null;case 22:case 23:return t.lanes=0,Ou(e,t,n)}return Je(e,t,n)}var Hu,Dl,Vu,$u;Hu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Dl=function(){};Vu=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Nt(He.current);var l=null;switch(n){case"input":i=tl(e,i),r=tl(e,r),l=[];break;case"select":i=H({},i,{value:void 0}),r=H({},r,{value:void 0}),l=[];break;case"textarea":i=il(e,i),r=il(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Hr)}ol(n,r);var o;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var a=i[d];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Rn.hasOwnProperty(d)?l||(l=[]):(l=l||[]).push(d,null));for(d in r){var u=r[d];if(a=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&u!==a&&(u!=null||a!=null))if(d==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(l||(l=[]),l.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(l=l||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(l=l||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Rn.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&O("scroll",e),l||a===u||(l=[])):(l=l||[]).push(d,u))}n&&(l=l||[]).push("style",n);var d=l;(t.updateQueue=d)&&(t.flags|=4)}};$u=function(e,t,n,r){n!==r&&(t.flags|=4)};function wn(e,t){if(!F)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function gp(e,t,n){var r=t.pendingProps;switch(uo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(t),null;case 1:return he(t.type)&&Vr(),ie(t),null;case 3:return r=t.stateNode,on(),b(me),b(ae),yo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(gr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ae!==null&&(Bl(Ae),Ae=null))),Dl(e,t),ie(t),null;case 5:xo(t);var i=Nt(Qn.current);if(n=t.type,e!==null&&t.stateNode!=null)Vu(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(x(166));return ie(t),null}if(e=Nt(He.current),gr(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[Ue]=t,r[Wn]=l,e=(t.mode&1)!==0,n){case"dialog":O("cancel",r),O("close",r);break;case"iframe":case"object":case"embed":O("load",r);break;case"video":case"audio":for(i=0;i<Ln.length;i++)O(Ln[i],r);break;case"source":O("error",r);break;case"img":case"image":case"link":O("error",r),O("load",r);break;case"details":O("toggle",r);break;case"input":Wo(r,l),O("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},O("invalid",r);break;case"textarea":Qo(r,l),O("invalid",r)}ol(n,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var a=l[o];o==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&hr(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&hr(r.textContent,a,e),i=["children",""+a]):Rn.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&O("scroll",r)}switch(n){case"input":ar(r),Go(r,l,!0);break;case"textarea":ar(r),Ko(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Hr)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=xs(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Ue]=t,e[Wn]=r,Hu(e,t,!1,!1),t.stateNode=e;e:{switch(o=al(n,r),n){case"dialog":O("cancel",e),O("close",e),i=r;break;case"iframe":case"object":case"embed":O("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ln.length;i++)O(Ln[i],e);i=r;break;case"source":O("error",e),i=r;break;case"img":case"image":case"link":O("error",e),O("load",e),i=r;break;case"details":O("toggle",e),i=r;break;case"input":Wo(e,r),i=tl(e,r),O("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=H({},r,{value:void 0}),O("invalid",e);break;case"textarea":Qo(e,r),i=il(e,r),O("invalid",e);break;default:i=r}ol(n,i),a=i;for(l in a)if(a.hasOwnProperty(l)){var u=a[l];l==="style"?ks(e,u):l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&ys(e,u)):l==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&In(e,u):typeof u=="number"&&In(e,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Rn.hasOwnProperty(l)?u!=null&&l==="onScroll"&&O("scroll",e):u!=null&&Kl(e,l,u,o))}switch(n){case"input":ar(e),Go(e,r,!1);break;case"textarea":ar(e),Ko(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ht(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?qt(e,!!r.multiple,l,!1):r.defaultValue!=null&&qt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Hr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ie(t),null;case 6:if(e&&t.stateNode!=null)$u(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(x(166));if(n=Nt(Qn.current),Nt(He.current),gr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ue]=t,(l=r.nodeValue!==n)&&(e=we,e!==null))switch(e.tag){case 3:hr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&hr(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ue]=t,t.stateNode=r}return ie(t),null;case 13:if(b(U),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(F&&xe!==null&&t.mode&1&&!(t.flags&128))su(),rn(),t.flags|=98560,l=!1;else if(l=gr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(x(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(x(317));l[Ue]=t}else rn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ie(t),l=!1}else Ae!==null&&(Bl(Ae),Ae=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||U.current&1?X===0&&(X=3):To())),t.updateQueue!==null&&(t.flags|=4),ie(t),null);case 4:return on(),Dl(e,t),e===null&&Vn(t.stateNode.containerInfo),ie(t),null;case 10:return mo(t.type._context),ie(t),null;case 17:return he(t.type)&&Vr(),ie(t),null;case 19:if(b(U),l=t.memoizedState,l===null)return ie(t),null;if(r=(t.flags&128)!==0,o=l.rendering,o===null)if(r)wn(l,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Xr(e),o!==null){for(t.flags|=128,wn(l,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return I(U,U.current&1|2),t.child}e=e.sibling}l.tail!==null&&Q()>sn&&(t.flags|=128,r=!0,wn(l,!1),t.lanes=4194304)}else{if(!r)if(e=Xr(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),wn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!F)return ie(t),null}else 2*Q()-l.renderingStartTime>sn&&n!==1073741824&&(t.flags|=128,r=!0,wn(l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(n=l.last,n!==null?n.sibling=o:t.child=o,l.last=o)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Q(),t.sibling=null,n=U.current,I(U,r?n&1|2:n&1),t):(ie(t),null);case 22:case 23:return zo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ve&1073741824&&(ie(t),t.subtreeFlags&6&&(t.flags|=8192)):ie(t),null;case 24:return null;case 25:return null}throw Error(x(156,t.tag))}function vp(e,t){switch(uo(t),t.tag){case 1:return he(t.type)&&Vr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return on(),b(me),b(ae),yo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return xo(t),null;case 13:if(b(U),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(x(340));rn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return b(U),null;case 4:return on(),null;case 10:return mo(t.type._context),null;case 22:case 23:return zo(),null;case 24:return null;default:return null}}var yr=!1,le=!1,xp=typeof WeakSet=="function"?WeakSet:Set,_=null;function Qt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){V(e,t,r)}else n.current=null}function Al(e,t,n){try{n()}catch(r){V(e,t,r)}}var Oa=!1;function yp(e,t){if(vl=Fr,e=qs(),ao(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,d=0,h=0,m=e,g=null;t:for(;;){for(var y;m!==n||i!==0&&m.nodeType!==3||(a=o+i),m!==l||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(y=m.firstChild)!==null;)g=m,m=y;for(;;){if(m===e)break t;if(g===n&&++d===i&&(a=o),g===l&&++h===r&&(u=o),(y=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=y}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(xl={focusedElem:e,selectionRange:n},Fr=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var w=k.memoizedProps,R=k.memoizedState,p=t.stateNode,c=p.getSnapshotBeforeUpdate(t.elementType===t.type?w:Me(t.type,w),R);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(v){V(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return k=Oa,Oa=!1,k}function Mn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&Al(t,n,l)}i=i.next}while(i!==r)}}function fi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Rl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Wu(e){var t=e.alternate;t!==null&&(e.alternate=null,Wu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ue],delete t[Wn],delete t[kl],delete t[tp],delete t[np])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Gu(e){return e.tag===5||e.tag===3||e.tag===4}function ba(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Gu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Il(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Hr));else if(r!==4&&(e=e.child,e!==null))for(Il(e,t,n),e=e.sibling;e!==null;)Il(e,t,n),e=e.sibling}function Ol(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ol(e,t,n),e=e.sibling;e!==null;)Ol(e,t,n),e=e.sibling}var ee=null,De=!1;function et(e,t,n){for(n=n.child;n!==null;)Qu(e,t,n),n=n.sibling}function Qu(e,t,n){if(Be&&typeof Be.onCommitFiberUnmount=="function")try{Be.onCommitFiberUnmount(li,n)}catch{}switch(n.tag){case 5:le||Qt(n,t);case 6:var r=ee,i=De;ee=null,et(e,t,n),ee=r,De=i,ee!==null&&(De?(e=ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ee.removeChild(n.stateNode));break;case 18:ee!==null&&(De?(e=ee,n=n.stateNode,e.nodeType===8?Fi(e.parentNode,n):e.nodeType===1&&Fi(e,n),Un(e)):Fi(ee,n.stateNode));break;case 4:r=ee,i=De,ee=n.stateNode.containerInfo,De=!0,et(e,t,n),ee=r,De=i;break;case 0:case 11:case 14:case 15:if(!le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&Al(n,t,o),i=i.next}while(i!==r)}et(e,t,n);break;case 1:if(!le&&(Qt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){V(n,t,a)}et(e,t,n);break;case 21:et(e,t,n);break;case 22:n.mode&1?(le=(r=le)||n.memoizedState!==null,et(e,t,n),le=r):et(e,t,n);break;default:et(e,t,n)}}function Fa(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new xp),t.forEach(function(r){var i=Ep.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Te(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var l=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:ee=a.stateNode,De=!1;break e;case 3:ee=a.stateNode.containerInfo,De=!0;break e;case 4:ee=a.stateNode.containerInfo,De=!0;break e}a=a.return}if(ee===null)throw Error(x(160));Qu(l,o,i),ee=null,De=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(d){V(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ku(t,e),t=t.sibling}function Ku(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Te(t,e),be(e),r&4){try{Mn(3,e,e.return),fi(3,e)}catch(w){V(e,e.return,w)}try{Mn(5,e,e.return)}catch(w){V(e,e.return,w)}}break;case 1:Te(t,e),be(e),r&512&&n!==null&&Qt(n,n.return);break;case 5:if(Te(t,e),be(e),r&512&&n!==null&&Qt(n,n.return),e.flags&32){var i=e.stateNode;try{In(i,"")}catch(w){V(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=n!==null?n.memoizedProps:l,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&gs(i,l),al(a,o);var d=al(a,l);for(o=0;o<u.length;o+=2){var h=u[o],m=u[o+1];h==="style"?ks(i,m):h==="dangerouslySetInnerHTML"?ys(i,m):h==="children"?In(i,m):Kl(i,h,m,d)}switch(a){case"input":nl(i,l);break;case"textarea":vs(i,l);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var y=l.value;y!=null?qt(i,!!l.multiple,y,!1):g!==!!l.multiple&&(l.defaultValue!=null?qt(i,!!l.multiple,l.defaultValue,!0):qt(i,!!l.multiple,l.multiple?[]:"",!1))}i[Wn]=l}catch(w){V(e,e.return,w)}}break;case 6:if(Te(t,e),be(e),r&4){if(e.stateNode===null)throw Error(x(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(w){V(e,e.return,w)}}break;case 3:if(Te(t,e),be(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Un(t.containerInfo)}catch(w){V(e,e.return,w)}break;case 4:Te(t,e),be(e);break;case 13:Te(t,e),be(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(Eo=Q())),r&4&&Fa(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(le=(d=le)||h,Te(t,e),le=d):Te(t,e),be(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!h&&e.mode&1)for(_=e,h=e.child;h!==null;){for(m=_=h;_!==null;){switch(g=_,y=g.child,g.tag){case 0:case 11:case 14:case 15:Mn(4,g,g.return);break;case 1:Qt(g,g.return);var k=g.stateNode;if(typeof k.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(w){V(r,n,w)}}break;case 5:Qt(g,g.return);break;case 22:if(g.memoizedState!==null){Ba(m);continue}}y!==null?(y.return=g,_=y):Ba(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{i=m.stateNode,d?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=ws("display",o))}catch(w){V(e,e.return,w)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(w){V(e,e.return,w)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Te(t,e),be(e),r&4&&Fa(e);break;case 21:break;default:Te(t,e),be(e)}}function be(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Gu(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(In(i,""),r.flags&=-33);var l=ba(e);Ol(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=ba(e);Il(e,a,o);break;default:throw Error(x(161))}}catch(u){V(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function wp(e,t,n){_=e,qu(e)}function qu(e,t,n){for(var r=(e.mode&1)!==0;_!==null;){var i=_,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||yr;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||le;a=yr;var d=le;if(yr=o,(le=u)&&!d)for(_=i;_!==null;)o=_,u=o.child,o.tag===22&&o.memoizedState!==null?Ha(i):u!==null?(u.return=o,_=u):Ha(i);for(;l!==null;)_=l,qu(l),l=l.sibling;_=i,yr=a,le=d}Ua(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,_=l):Ua(e)}}function Ua(e){for(;_!==null;){var t=_;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:le||fi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!le)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Me(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Ca(t,l,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ca(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&Un(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}le||t.flags&512&&Rl(t)}catch(g){V(t,t.return,g)}}if(t===e){_=null;break}if(n=t.sibling,n!==null){n.return=t.return,_=n;break}_=t.return}}function Ba(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var n=t.sibling;if(n!==null){n.return=t.return,_=n;break}_=t.return}}function Ha(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{fi(4,t)}catch(u){V(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){V(t,i,u)}}var l=t.return;try{Rl(t)}catch(u){V(t,l,u)}break;case 5:var o=t.return;try{Rl(t)}catch(u){V(t,o,u)}}}catch(u){V(t,t.return,u)}if(t===e){_=null;break}var a=t.sibling;if(a!==null){a.return=t.return,_=a;break}_=t.return}}var kp=Math.ceil,Zr=Ze.ReactCurrentDispatcher,No=Ze.ReactCurrentOwner,je=Ze.ReactCurrentBatchConfig,M=0,Z=null,K=null,te=0,ve=0,Kt=xt(0),X=0,Yn=null,Mt=0,mi=0,jo=0,Dn=null,pe=null,Eo=0,sn=1/0,$e=null,ei=!1,bl=null,pt=null,wr=!1,ot=null,ti=0,An=0,Fl=null,Tr=-1,Mr=0;function ue(){return M&6?Q():Tr!==-1?Tr:Tr=Q()}function ft(e){return e.mode&1?M&2&&te!==0?te&-te:ip.transition!==null?(Mr===0&&(Mr=Ds()),Mr):(e=D,e!==0||(e=window.event,e=e===void 0?16:Us(e.type)),e):1}function Ie(e,t,n,r){if(50<An)throw An=0,Fl=null,Error(x(185));Zn(e,n,r),(!(M&2)||e!==Z)&&(e===Z&&(!(M&2)&&(mi|=n),X===4&&it(e,te)),ge(e,r),n===1&&M===0&&!(t.mode&1)&&(sn=Q()+500,ci&&yt()))}function ge(e,t){var n=e.callbackNode;id(e,t);var r=br(e,e===Z?te:0);if(r===0)n!==null&&Yo(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Yo(n),t===1)e.tag===0?rp(Va.bind(null,e)):lu(Va.bind(null,e)),Zd(function(){!(M&6)&&yt()}),n=null;else{switch(As(r)){case 1:n=Zl;break;case 4:n=Ts;break;case 16:n=Or;break;case 536870912:n=Ms;break;default:n=Or}n=rc(n,Xu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Xu(e,t){if(Tr=-1,Mr=0,M&6)throw Error(x(327));var n=e.callbackNode;if(en()&&e.callbackNode!==n)return null;var r=br(e,e===Z?te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ni(e,r);else{t=r;var i=M;M|=2;var l=Ju();(Z!==e||te!==t)&&($e=null,sn=Q()+500,jt(e,t));do try{Cp();break}catch(a){Yu(e,a)}while(!0);fo(),Zr.current=l,M=i,K!==null?t=0:(Z=null,te=0,t=X)}if(t!==0){if(t===2&&(i=pl(e),i!==0&&(r=i,t=Ul(e,i))),t===1)throw n=Yn,jt(e,0),it(e,r),ge(e,Q()),n;if(t===6)it(e,r);else{if(i=e.current.alternate,!(r&30)&&!_p(i)&&(t=ni(e,r),t===2&&(l=pl(e),l!==0&&(r=l,t=Ul(e,l))),t===1))throw n=Yn,jt(e,0),it(e,r),ge(e,Q()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(x(345));case 2:St(e,pe,$e);break;case 3:if(it(e,r),(r&130023424)===r&&(t=Eo+500-Q(),10<t)){if(br(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ue(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=wl(St.bind(null,e,pe,$e),t);break}St(e,pe,$e);break;case 4:if(it(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Re(r);l=1<<o,o=t[o],o>i&&(i=o),r&=~l}if(r=i,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*kp(r/1960))-r,10<r){e.timeoutHandle=wl(St.bind(null,e,pe,$e),r);break}St(e,pe,$e);break;case 5:St(e,pe,$e);break;default:throw Error(x(329))}}}return ge(e,Q()),e.callbackNode===n?Xu.bind(null,e):null}function Ul(e,t){var n=Dn;return e.current.memoizedState.isDehydrated&&(jt(e,t).flags|=256),e=ni(e,t),e!==2&&(t=pe,pe=n,t!==null&&Bl(t)),e}function Bl(e){pe===null?pe=e:pe.push.apply(pe,e)}function _p(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],l=i.getSnapshot;i=i.value;try{if(!Oe(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function it(e,t){for(t&=~jo,t&=~mi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Re(t),r=1<<n;e[n]=-1,t&=~r}}function Va(e){if(M&6)throw Error(x(327));en();var t=br(e,0);if(!(t&1))return ge(e,Q()),null;var n=ni(e,t);if(e.tag!==0&&n===2){var r=pl(e);r!==0&&(t=r,n=Ul(e,r))}if(n===1)throw n=Yn,jt(e,0),it(e,t),ge(e,Q()),n;if(n===6)throw Error(x(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,St(e,pe,$e),ge(e,Q()),null}function Po(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(sn=Q()+500,ci&&yt())}}function Dt(e){ot!==null&&ot.tag===0&&!(M&6)&&en();var t=M;M|=1;var n=je.transition,r=D;try{if(je.transition=null,D=1,e)return e()}finally{D=r,je.transition=n,M=t,!(M&6)&&yt()}}function zo(){ve=Kt.current,b(Kt)}function jt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Jd(n)),K!==null)for(n=K.return;n!==null;){var r=n;switch(uo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Vr();break;case 3:on(),b(me),b(ae),yo();break;case 5:xo(r);break;case 4:on();break;case 13:b(U);break;case 19:b(U);break;case 10:mo(r.type._context);break;case 22:case 23:zo()}n=n.return}if(Z=e,K=e=mt(e.current,null),te=ve=t,X=0,Yn=null,jo=mi=Mt=0,pe=Dn=null,Lt!==null){for(t=0;t<Lt.length;t++)if(n=Lt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,l=n.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}n.pending=r}Lt=null}return e}function Yu(e,t){do{var n=K;try{if(fo(),Er.current=Jr,Yr){for(var r=B.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Yr=!1}if(Tt=0,J=q=B=null,Tn=!1,Kn=0,No.current=null,n===null||n.return===null){X=1,Yn=t,K=null;break}e:{var l=e,o=n.return,a=n,u=t;if(t=te,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,h=a,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=za(o);if(y!==null){y.flags&=-257,Ta(y,o,a,l,t),y.mode&1&&Pa(l,d,t),t=y,u=d;var k=t.updateQueue;if(k===null){var w=new Set;w.add(u),t.updateQueue=w}else k.add(u);break e}else{if(!(t&1)){Pa(l,d,t),To();break e}u=Error(x(426))}}else if(F&&a.mode&1){var R=za(o);if(R!==null){!(R.flags&65536)&&(R.flags|=256),Ta(R,o,a,l,t),co(an(u,a));break e}}l=u=an(u,a),X!==4&&(X=2),Dn===null?Dn=[l]:Dn.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var p=Au(l,u,t);Sa(l,p);break e;case 1:a=u;var c=l.type,f=l.stateNode;if(!(l.flags&128)&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(pt===null||!pt.has(f)))){l.flags|=65536,t&=-t,l.lanes|=t;var v=Ru(l,a,t);Sa(l,v);break e}}l=l.return}while(l!==null)}ec(n)}catch(S){t=S,K===n&&n!==null&&(K=n=n.return);continue}break}while(!0)}function Ju(){var e=Zr.current;return Zr.current=Jr,e===null?Jr:e}function To(){(X===0||X===3||X===2)&&(X=4),Z===null||!(Mt&268435455)&&!(mi&268435455)||it(Z,te)}function ni(e,t){var n=M;M|=2;var r=Ju();(Z!==e||te!==t)&&($e=null,jt(e,t));do try{Sp();break}catch(i){Yu(e,i)}while(!0);if(fo(),M=n,Zr.current=r,K!==null)throw Error(x(261));return Z=null,te=0,X}function Sp(){for(;K!==null;)Zu(K)}function Cp(){for(;K!==null&&!qc();)Zu(K)}function Zu(e){var t=nc(e.alternate,e,ve);e.memoizedProps=e.pendingProps,t===null?ec(e):K=t,No.current=null}function ec(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=vp(n,t),n!==null){n.flags&=32767,K=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,K=null;return}}else if(n=gp(n,t,ve),n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);X===0&&(X=5)}function St(e,t,n){var r=D,i=je.transition;try{je.transition=null,D=1,Lp(e,t,n,r)}finally{je.transition=i,D=r}return null}function Lp(e,t,n,r){do en();while(ot!==null);if(M&6)throw Error(x(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(x(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(ld(e,l),e===Z&&(K=Z=null,te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wr||(wr=!0,rc(Or,function(){return en(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=je.transition,je.transition=null;var o=D;D=1;var a=M;M|=4,No.current=null,yp(e,n),Ku(n,e),Wd(xl),Fr=!!vl,xl=vl=null,e.current=n,wp(n),Xc(),M=a,D=o,je.transition=l}else e.current=n;if(wr&&(wr=!1,ot=e,ti=i),l=e.pendingLanes,l===0&&(pt=null),Zc(n.stateNode),ge(e,Q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ei)throw ei=!1,e=bl,bl=null,e;return ti&1&&e.tag!==0&&en(),l=e.pendingLanes,l&1?e===Fl?An++:(An=0,Fl=e):An=0,yt(),null}function en(){if(ot!==null){var e=As(ti),t=je.transition,n=D;try{if(je.transition=null,D=16>e?16:e,ot===null)var r=!1;else{if(e=ot,ot=null,ti=0,M&6)throw Error(x(331));var i=M;for(M|=4,_=e.current;_!==null;){var l=_,o=l.child;if(_.flags&16){var a=l.deletions;if(a!==null){for(var u=0;u<a.length;u++){var d=a[u];for(_=d;_!==null;){var h=_;switch(h.tag){case 0:case 11:case 15:Mn(8,h,l)}var m=h.child;if(m!==null)m.return=h,_=m;else for(;_!==null;){h=_;var g=h.sibling,y=h.return;if(Wu(h),h===d){_=null;break}if(g!==null){g.return=y,_=g;break}_=y}}}var k=l.alternate;if(k!==null){var w=k.child;if(w!==null){k.child=null;do{var R=w.sibling;w.sibling=null,w=R}while(w!==null)}}_=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,_=o;else e:for(;_!==null;){if(l=_,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Mn(9,l,l.return)}var p=l.sibling;if(p!==null){p.return=l.return,_=p;break e}_=l.return}}var c=e.current;for(_=c;_!==null;){o=_;var f=o.child;if(o.subtreeFlags&2064&&f!==null)f.return=o,_=f;else e:for(o=c;_!==null;){if(a=_,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:fi(9,a)}}catch(S){V(a,a.return,S)}if(a===o){_=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,_=v;break e}_=a.return}}if(M=i,yt(),Be&&typeof Be.onPostCommitFiberRoot=="function")try{Be.onPostCommitFiberRoot(li,e)}catch{}r=!0}return r}finally{D=n,je.transition=t}}return!1}function $a(e,t,n){t=an(n,t),t=Au(e,t,1),e=dt(e,t,1),t=ue(),e!==null&&(Zn(e,1,t),ge(e,t))}function V(e,t,n){if(e.tag===3)$a(e,e,n);else for(;t!==null;){if(t.tag===3){$a(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pt===null||!pt.has(r))){e=an(n,e),e=Ru(t,e,1),t=dt(t,e,1),e=ue(),t!==null&&(Zn(t,1,e),ge(t,e));break}}t=t.return}}function Np(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ue(),e.pingedLanes|=e.suspendedLanes&n,Z===e&&(te&n)===n&&(X===4||X===3&&(te&130023424)===te&&500>Q()-Eo?jt(e,0):jo|=n),ge(e,t)}function tc(e,t){t===0&&(e.mode&1?(t=cr,cr<<=1,!(cr&130023424)&&(cr=4194304)):t=1);var n=ue();e=Ye(e,t),e!==null&&(Zn(e,t,n),ge(e,n))}function jp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),tc(e,n)}function Ep(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(t),tc(e,n)}var nc;nc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||me.current)fe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return fe=!1,hp(e,t,n);fe=!!(e.flags&131072)}else fe=!1,F&&t.flags&1048576&&ou(t,Gr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;zr(e,t),e=t.pendingProps;var i=nn(t,ae.current);Zt(t,n),i=ko(null,t,r,e,i,n);var l=_o();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,he(r)?(l=!0,$r(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,go(t),i.updater=pi,t.stateNode=i,i._reactInternals=t,jl(t,r,e,n),t=zl(null,t,r,!0,l,n)):(t.tag=0,F&&l&&so(t),se(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(zr(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=zp(r),e=Me(r,e),i){case 0:t=Pl(null,t,r,e,n);break e;case 1:t=Aa(null,t,r,e,n);break e;case 11:t=Ma(null,t,r,e,n);break e;case 14:t=Da(null,t,r,Me(r.type,e),n);break e}throw Error(x(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Me(r,i),Pl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Me(r,i),Aa(e,t,r,i,n);case 3:e:{if(Fu(t),e===null)throw Error(x(387));r=t.pendingProps,l=t.memoizedState,i=l.element,pu(e,t),qr(t,r,null,n);var o=t.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=an(Error(x(423)),t),t=Ra(e,t,r,n,i);break e}else if(r!==i){i=an(Error(x(424)),t),t=Ra(e,t,r,n,i);break e}else for(xe=ct(t.stateNode.containerInfo.firstChild),we=t,F=!0,Ae=null,n=cu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(rn(),r===i){t=Je(e,t,n);break e}se(e,t,r,n)}t=t.child}return t;case 5:return fu(t),e===null&&Cl(t),r=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,yl(r,i)?o=null:l!==null&&yl(r,l)&&(t.flags|=32),bu(e,t),se(e,t,o,n),t.child;case 6:return e===null&&Cl(t),null;case 13:return Uu(e,t,n);case 4:return vo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ln(t,null,r,n):se(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Me(r,i),Ma(e,t,r,i,n);case 7:return se(e,t,t.pendingProps,n),t.child;case 8:return se(e,t,t.pendingProps.children,n),t.child;case 12:return se(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,l=t.memoizedProps,o=i.value,I(Qr,r._currentValue),r._currentValue=o,l!==null)if(Oe(l.value,o)){if(l.children===i.children&&!me.current){t=Je(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var a=l.dependencies;if(a!==null){o=l.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(l.tag===1){u=Ke(-1,n&-n),u.tag=2;var d=l.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?u.next=u:(u.next=h.next,h.next=u),d.pending=u}}l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),Ll(l.return,n,t),a.lanes|=n;break}u=u.next}}else if(l.tag===10)o=l.type===t.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(x(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ll(o,n,t),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===t){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}se(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Zt(t,n),i=Ee(i),r=r(i),t.flags|=1,se(e,t,r,n),t.child;case 14:return r=t.type,i=Me(r,t.pendingProps),i=Me(r.type,i),Da(e,t,r,i,n);case 15:return Iu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Me(r,i),zr(e,t),t.tag=1,he(r)?(e=!0,$r(t)):e=!1,Zt(t,n),Du(t,r,i),jl(t,r,i,n),zl(null,t,r,!0,e,n);case 19:return Bu(e,t,n);case 22:return Ou(e,t,n)}throw Error(x(156,t.tag))};function rc(e,t){return zs(e,t)}function Pp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ne(e,t,n,r){return new Pp(e,t,n,r)}function Mo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function zp(e){if(typeof e=="function")return Mo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Xl)return 11;if(e===Yl)return 14}return 2}function mt(e,t){var n=e.alternate;return n===null?(n=Ne(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Dr(e,t,n,r,i,l){var o=2;if(r=e,typeof e=="function")Mo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case bt:return Et(n.children,i,l,t);case ql:o=8,i|=8;break;case Yi:return e=Ne(12,n,t,i|2),e.elementType=Yi,e.lanes=l,e;case Ji:return e=Ne(13,n,t,i),e.elementType=Ji,e.lanes=l,e;case Zi:return e=Ne(19,n,t,i),e.elementType=Zi,e.lanes=l,e;case fs:return hi(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ds:o=10;break e;case ps:o=9;break e;case Xl:o=11;break e;case Yl:o=14;break e;case tt:o=16,r=null;break e}throw Error(x(130,e==null?e:typeof e,""))}return t=Ne(o,n,t,i),t.elementType=e,t.type=r,t.lanes=l,t}function Et(e,t,n,r){return e=Ne(7,e,r,t),e.lanes=n,e}function hi(e,t,n,r){return e=Ne(22,e,r,t),e.elementType=fs,e.lanes=n,e.stateNode={isHidden:!1},e}function Qi(e,t,n){return e=Ne(6,e,null,t),e.lanes=n,e}function Ki(e,t,n){return t=Ne(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Tp(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ei(0),this.expirationTimes=Ei(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ei(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Do(e,t,n,r,i,l,o,a,u){return e=new Tp(e,t,n,a,u),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Ne(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},go(l),e}function Mp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ot,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ic(e){if(!e)return gt;e=e._reactInternals;e:{if(Rt(e)!==e||e.tag!==1)throw Error(x(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(he(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(x(171))}if(e.tag===1){var n=e.type;if(he(n))return iu(e,n,t)}return t}function lc(e,t,n,r,i,l,o,a,u){return e=Do(n,r,!0,e,i,l,o,a,u),e.context=ic(null),n=e.current,r=ue(),i=ft(n),l=Ke(r,i),l.callback=t??null,dt(n,l,i),e.current.lanes=i,Zn(e,i,r),ge(e,r),e}function gi(e,t,n,r){var i=t.current,l=ue(),o=ft(i);return n=ic(n),t.context===null?t.context=n:t.pendingContext=n,t=Ke(l,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=dt(i,t,o),e!==null&&(Ie(e,i,o,l),jr(e,i,o)),o}function ri(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Wa(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ao(e,t){Wa(e,t),(e=e.alternate)&&Wa(e,t)}function Dp(){return null}var oc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ro(e){this._internalRoot=e}vi.prototype.render=Ro.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(x(409));gi(e,t,null,null)};vi.prototype.unmount=Ro.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Dt(function(){gi(null,e,null,null)}),t[Xe]=null}};function vi(e){this._internalRoot=e}vi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Os();e={blockedOn:null,target:e,priority:t};for(var n=0;n<rt.length&&t!==0&&t<rt[n].priority;n++);rt.splice(n,0,e),n===0&&Fs(e)}};function Io(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function xi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ga(){}function Ap(e,t,n,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var d=ri(o);l.call(d)}}var o=lc(t,r,e,0,null,!1,!1,"",Ga);return e._reactRootContainer=o,e[Xe]=o.current,Vn(e.nodeType===8?e.parentNode:e),Dt(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var d=ri(u);a.call(d)}}var u=Do(e,0,!1,null,null,!1,!1,"",Ga);return e._reactRootContainer=u,e[Xe]=u.current,Vn(e.nodeType===8?e.parentNode:e),Dt(function(){gi(t,u,n,r)}),u}function yi(e,t,n,r,i){var l=n._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var a=i;i=function(){var u=ri(o);a.call(u)}}gi(t,o,e,i)}else o=Ap(n,t,e,i,r);return ri(o)}Rs=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Cn(t.pendingLanes);n!==0&&(eo(t,n|1),ge(t,Q()),!(M&6)&&(sn=Q()+500,yt()))}break;case 13:Dt(function(){var r=Ye(e,1);if(r!==null){var i=ue();Ie(r,e,1,i)}}),Ao(e,1)}};to=function(e){if(e.tag===13){var t=Ye(e,134217728);if(t!==null){var n=ue();Ie(t,e,134217728,n)}Ao(e,134217728)}};Is=function(e){if(e.tag===13){var t=ft(e),n=Ye(e,t);if(n!==null){var r=ue();Ie(n,e,t,r)}Ao(e,t)}};Os=function(){return D};bs=function(e,t){var n=D;try{return D=e,t()}finally{D=n}};ul=function(e,t,n){switch(t){case"input":if(nl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ui(r);if(!i)throw Error(x(90));hs(r),nl(r,i)}}}break;case"textarea":vs(e,n);break;case"select":t=n.value,t!=null&&qt(e,!!n.multiple,t,!1)}};Cs=Po;Ls=Dt;var Rp={usingClientEntryPoint:!1,Events:[tr,Ht,ui,_s,Ss,Po]},kn={findFiberByHostInstance:Ct,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ip={bundleType:kn.bundleType,version:kn.version,rendererPackageName:kn.rendererPackageName,rendererConfig:kn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ze.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Es(e),e===null?null:e.stateNode},findFiberByHostInstance:kn.findFiberByHostInstance||Dp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kr.isDisabled&&kr.supportsFiber)try{li=kr.inject(Ip),Be=kr}catch{}}_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rp;_e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Io(t))throw Error(x(200));return Mp(e,t,null,n)};_e.createRoot=function(e,t){if(!Io(e))throw Error(x(299));var n=!1,r="",i=oc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Do(e,1,!1,null,null,n,!1,r,i),e[Xe]=t.current,Vn(e.nodeType===8?e.parentNode:e),new Ro(t)};_e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(x(188)):(e=Object.keys(e).join(","),Error(x(268,e)));return e=Es(t),e=e===null?null:e.stateNode,e};_e.flushSync=function(e){return Dt(e)};_e.hydrate=function(e,t,n){if(!xi(t))throw Error(x(200));return yi(null,e,t,!0,n)};_e.hydrateRoot=function(e,t,n){if(!Io(e))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,i=!1,l="",o=oc;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=lc(t,null,e,1,n??null,i,!1,l,o),e[Xe]=t.current,Vn(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new vi(t)};_e.render=function(e,t,n){if(!xi(t))throw Error(x(200));return yi(null,e,t,!1,n)};_e.unmountComponentAtNode=function(e){if(!xi(e))throw Error(x(40));return e._reactRootContainer?(Dt(function(){yi(null,null,e,!1,function(){e._reactRootContainer=null,e[Xe]=null})}),!0):!1};_e.unstable_batchedUpdates=Po;_e.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!xi(n))throw Error(x(200));if(e==null||e._reactInternals===void 0)throw Error(x(38));return yi(e,t,n,!1,r)};_e.version="18.3.1-next-f1338f8080-20240426";function ac(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ac)}catch(e){console.error(e)}}ac(),as.exports=_e;var Op=as.exports,Qa=Op;qi.createRoot=Qa.createRoot,qi.hydrateRoot=Qa.hydrateRoot;const ye=e=>`./${e.startsWith("/")?e.slice(1):e}`,A=({name:e,size:t=22,className:n="",color:r="currentColor"})=>s.jsx("span",{className:`inline-icon ${n}`,style:{display:"inline-block",width:t,height:t,minWidth:t,minHeight:t,backgroundColor:r,WebkitMaskImage:`url(${ye(`assets/icons/${e}.svg`)})`,maskImage:`url(${ye(`assets/icons/${e}.svg`)})`,WebkitMaskRepeat:"no-repeat",maskRepeat:"no-repeat",WebkitMaskPosition:"center",maskPosition:"center",WebkitMaskSize:"contain",maskSize:"contain"},"aria-hidden":"true"}),oe={wiki:"/wiki",download:"https://github.com/metawka/exDesktop/releases/latest",github:"https://github.com/metawka/exDesktop",telegram:"https://t.me/exDesktop",telegramChat:"https://t.me/exDesktopChat",changelog:"https://t.me/exDesktopChangelog",contact:"https://t.me/metawka",pluginSdk:"https://exdesktop.xyz/docs/"},bp=`curl -fsSL 
  https://raw.githubusercontent.com/metawka/exDesktop/main/install.sh | sh`,Fp="curl -fsSL https://raw.githubusercontent.com/metawka/exDesktop/main/install.sh | sh",Up=[{id:"feature-plugins",title:"Система плагинов",description:"Поддержка привычных плагинов с exteraGram и разработка своих под exDesktop.",iconName:"code"},{id:"feature-privacy",title:"AyuGram",description:"Режим стримера, сохранение удаленок и весь функционал AyuGram",iconName:"shield"},{id:"feature-appearance",title:"Визуал",description:"MD Expressive, Smooth Scrolling, иконки, настройка интерфейса, скрытие номера и другое...",iconName:"tune"}],Bp=[{id:"col-progress",status:"progress",title:"В разработке",items:[{id:"rm-1",title:"Доработка совместимости с плагинами exteraGram, Xposted эмуляция Java и Android, сообщения, уведомления, файлы, изображения, библиотеки плагинов",status:"progress",version:"High priority"},{id:"rm-2",title:"Доработка ИИ-переноса плагинов",status:"progress",version:"High priority"}]},{id:"col-planned",status:"planned",title:"Запланировано",items:[{id:"rm-3",title:"Плагины с DEX и нативными библиотеками .so",status:"planned",version:"Medium priority"},{id:"rm-4",title:"Добавление каталога плагинов",status:"planned",version:"Lowest priority"},{id:"rm-5",title:"Глубокая настройка профиля с кастомными полями, баннеры, ссылки",status:"planned",version:"Lowest priority"}]},{id:"col-done",status:"done",title:"Готово",items:[{id:"rm-6",title:"Material Design 3",status:"done",version:"7.4.3.2"},{id:"rm-7",title:"Формат плагинов Elyx (.elyx, .eaf)",status:"done",version:"7.3.3.10"},{id:"rm-8",title:"Перенос Android-плагинов с помощью ИИ на своём ключе, в фоне, с проверкой результата",status:"done",version:"7.3.3.10"},{id:"rm-9",title:"PluginGuard: проверка плагина перед установкой (правила, своя модель и ИИ-арбитр), блокировка опасных, жалобы на плагины",status:"done",version:"7.3.3.9"},{id:"rm-10",title:"Функции AyuGram",status:"done",version:"7.3.3.9"},{id:"rm-11",title:"curl-установка на Linux / MacOS",status:"done",version:"7.3.3.9"},{id:"rm-12",title:"Движок плагинов на Linux и macOS",status:"done",version:"7.3.3.9"},{id:"rm-13",title:"TG WS Proxy",status:"done",version:"7.3.3.6"}]}],Ve=[{id:"wiki-cat-01",number:"01",title:"Форматы плагинов",anchor:"форматы-плагинов",items:[{id:"wiki-01-01",question:"Форматы плагинов",category:"Форматы плагинов",answer:"Метаданные однофайлового плагина читаются из констант верхнего уровня (__id__, __name__, __version__, __description__, __author__, __icon__, __app_version__, __min_version__, __sdk_version__, __requirements__, __category__) без выполнения кода.",bullets:[],code:"",table:{headers:["Формат","Расширения","Поддержка"],rows:[["Однофайловый плагин",".plugin, .py","полная"],["Elyx",".elyx, .eaf, .elyx.zip, .eaf.zip","полная, кроме зашифрованных архивов"]]}}]},{id:"wiki-cat-02",number:"02",title:"Что работает так же, как на Android",anchor:"что-работает-так-же-как-на-android",items:[{id:"wiki-02-01",question:"Что работает так же, как на Android",category:"Что работает так же, как на Android",answer:"",bullets:["Жизненный цикл: on_plugin_load, on_plugin_unload, on_app_event.","Хуки запросов и обновлений Telegram: add_hook, pre_request_hook, post_request_hook, on_update_hook, on_updates_hook. Имена запросов совпадают с TL-схемой (TL_messages_sendMessage и другие).","Хук отправки сообщения: add_on_send_message_hook, on_send_message_hook, стратегии HookStrategy.DEFAULT, CANCEL, MODIFY, MODIFY_FINAL.","Пункты меню MenuItemType: контекстное меню сообщения, меню чата (плюс значок плагинов в шапке чата: одно действие выполняется сразу, несколько открывают список), боковое меню и меню профиля.","Настройки ui.settings: Header, Divider, Switch, Selector, Input, Text, EditText, вложенные страницы, get_setting, set_setting, export_settings, import_settings.","client_utils: send_request, send_text, send_message, send_photo, send_document, send_video, send_audio, edit_message, run_on_queue, мультиаккаунт (get_selected_account, get_hook_account, client(account)).","android_utils: run_on_ui_thread, copy_to_clipboard, R, OnClickListener, OnLongClickListener.","ui.bulletin.BulletinHelper и ui.alert.AlertDialogBuilder: заголовок, текст, пункты, три кнопки, make_button_red, set_view (Android-вью внутри окна), окно загрузки с set_progress, set_cancelable, set_canceled_on_touch_outside, dismiss закрывает окно, get_button, get_context.","log_utils: get_logger, Logger с уровнями, child, timed, dump, обработчиками; BasePlugin.logger возвращает такой логгер.","markdown_utils.parse_markdown возвращает ParsedMessage с RawEntity; RawEntity.to_tlrpc_object() создаёт TL-объект сущности. Разметка как в exteraGram: **жирный**, __курсив__, --подчёркнутый--, ~~зачёркнутый~~, ||спойлер||, экранирование символов через \\. extera_utils.text_formatting.HTML.unparse и Markdown.unparse собирают разметку обратно из текста и сущностей.","BasePlugin: name, description, author, version, min_version, icon, requirements из метаданных, initialized, stop_event (устанавливается при выгрузке), register_cleanup; PluginMetadata, PluginError.","plugin_settings: get_setting, set_setting, get_all_settings, set_all_settings, clear_settings; hook_utils.get_private_field, set_private_field и статические варианты читают и меняют поля объектов.","file_utils: папки плагина, чтение, запись, список файлов. FilesController.register(FileInfo(ext, on_click, whitelist_places=..., blacklist_places=...)) и BasePlugin.add_file_hook: нажатие на скачанный документ с этим расширением в чате вызывает on_click с OnClickArgs (place, file, file_name, message, activity, parent_fragment) вместо открытия файла.","extera_utils.text_formatting.parse_text с режимами HTML и Markdown.","intents: обработка ссылок tg://. IntentsManager.HandlerInfo с scheme, host, path (шаблоны вида /user/{id}), required_path_args_names, флагами и приоритетом; BasePlugin.add_intent_hook(info, IntentHookType.BEFORE) и remove_intent_hook.","Зависимости __requirements__: устанавливаются только чистые Python-пакеты, как и на Android, загрузка идёт в фоне. Встроены requests, beautifulsoup4, lxml, pillow, PyYAML, packaging.","Плагины-библиотеки (zwylib и другие): плагин импортирует библиотеку по её id. Если библиотека не установлена, в карточке плагина указывается, какую библиотеку нужно установить."],code:"",table:null}]},{id:"wiki-cat-03",number:"03",title:"Эмуляция Java и Android",anchor:"эмуляция-java-и-android",items:[{id:"wiki-03-01",question:"Эмуляция Java и Android",category:"Эмуляция Java и Android",answer:`Код плагина импортирует Java-классы (from java.util import ArrayList, find_class("android.graphics.Color")). На ПК Java нет, поэтому самые используемые классы реализованы на Python и ведут себя как оригиналы.

LocaleController.getInstance().getCurrentLocale().getLanguage() и Locale.getDefault() возвращают язык интерфейса exDesktop.

Классы Telegram, которые работают по-настоящему:

Эмулированные классы находятся и через find_class, jclass и Class.forName, а не только через import. У них есть методы рефлексии (getName, getDeclaredMethods, getDeclaredMethod), поэтому плагин может передать такой метод в hook_method. org.telegram.ui.ActionBar.AlertDialog.Builder с setMessage, setItems, setPositiveButton и другими кнопками показывает настоящее окно exDesktop, LayoutHelper.createLinear и createFrame задают размеры элементов.

Класс, которого нет в эмуляции, по-прежнему заменяется пустым объектом: обращение к нему не вызывает ошибку, но и ничего не делает. Плагин продолжает работать, а функция, завязанная на такой класс, недоступна.`,bullets:["NotificationCenter.getInstance(account).addObserver(delegate, NotificationCenter.didReceiveNewMessages): делегат получает didReceivedNotification(id, account, dialog_id, messages, scheduled) для каждого нового сообщения. postNotificationName передаёт собственные уведомления между плагинами.","SendMessagesHelper.getInstance(account).sendMessage(SendMessageParams.of(text, dialog_id)) отправляет текст, prepareSendingDocument и prepareSendingPhoto отправляют файл.","PluginsController.getInstance(): список plugins, getPlugin, isPluginEnabled, setPluginEnabled. PythonPluginsEngine.loadPlugin, unloadPlugin, isPluginActive загружают и выгружают плагин, loadPluginFromFile устанавливает файл после проверки PluginGuard (файл с критичными или высокими угрозами не устанавливается).","Context.getSystemService(Context.CLIPBOARD_SERVICE).setPrimaryClip(ClipData.newPlainText(label, text)) копирует текст в буфер обмена.","BitmapFactory читает изображения через Pillow, Bitmap.compress сохраняет их в PNG, JPEG или WEBP.","R.drawable.имя и R.string.имя возвращают имя ресурса.","FileLoader возвращает пути в кэше плагина: файлы Telegram для плагинов не загружаются."],code:"",table:{headers:["Пакет","Классы"],rows:[["java.lang","Object, Integer, Long, Short, Byte, Float, Double, Boolean, Character, String, StringBuilder, System, Thread, Math, Class, Runnable"],["java.util","ArrayList, LinkedList, List, HashMap, LinkedHashMap, TreeMap, Map, HashSet, Set, Locale, Date, Random, UUID, Collections, Arrays"],["java.io, java.nio","File, FileInputStream, FileOutputStream, ByteArrayInputStream, ByteArrayOutputStream, ByteBuffer, ByteOrder"],["android.graphics","Color (parseColor, argb, rgb, компоненты, HSV), BitmapFactory (decodeFile, decodeByteArray, decodeStream, Options), Bitmap (getWidth, getHeight, compress, createScaledBitmap), PorterDuff, PorterDuffColorFilter"],["android.content","Context (константы сервисов, getSystemService), ClipData, ClipboardManager, DialogInterface"],["android.os","Build (SDK_INT = 34), Build.VERSION_CODES, Looper, Handler, Bundle, SystemClock"],["android.util, android.view, android.text","TypedValue, Log, Base64, MotionEvent, TextUtils, InputType, ViewGroup.LayoutParams"],["org.telegram.messenger","R, UserObject, ChatObject, LocaleController, BuildVars, FileLog, Utilities (Callback, очереди), MessagesController, UserConfig, NotificationCenter, SendMessagesHelper, FileLoader"],["com.exteragram.messenger","ExteraConfig, PluginsController, Plugin, PythonPluginsEngine"],["de.robv.android.xposed","XposedBridge, XposedHelpers, XC_MethodHook с MethodHookParam и Unhook, XC_MethodReplacement (returnConstant, DO_NOTHING)"],["com.exteragram.messenger.plugins","PyMethodHook, PyMethodReplacement, hooks.HookFilter"],["org.telegram.tgnet","TLRPC, TLObject, ConnectionsManager, RequestDelegate"]]}}]},{id:"wiki-cat-04",number:"04",title:"Хуки методов (Xposed)",anchor:"хуки-методов-xposed",items:[{id:"wiki-04-01",question:"Хуки методов (Xposed)",category:"Хуки методов (Xposed)",answer:`На Android плагин может перехватить любой Java-метод Telegram (hook_method, hook_all_methods, hook_all_constructors). В exDesktop нет Java-классов Android-клиента, поэтому срабатывают только перехваты из списка ниже и перехваты методов эмулированных классов. Остальные вызовы проходят без ошибки, но перехват не выполняется. Функции, построенные на перехвате интерфейса Android (ячейки сообщений, отрисовка, камера), на ПК недоступны.

Методы эмулированных классов (AlertDialog.Builder, BottomSheet, AndroidUtilities, Browser и другие из раздела «Эмуляция Java и Android») перехватываются по-настоящему: before_hooked_method и after_hooked_method получают аргументы и результат, param.setResult() заменяет результат и отменяет вызов оригинала, replace_hooked_method заменяет метод целиком.`,bullets:[],code:"",table:null},{id:"wiki-04-02",question:"API перехвата",category:"Хуки методов (Xposed)",answer:"Перехват устроен так же, как в exteraGram:",bullets:["hook_method(метод, хук, priority) возвращает XC_MethodHook.Unhook; unhook.unhook() или self.unhook_method(unhook) снимает перехват. hook_all_methods и hook_all_constructors возвращают список таких объектов. Если перехват на ПК невозможен, возвращается None, как у оригинала.","Хук задаётся классом MethodHook, MethodReplacement, XC_MethodHook, XC_MethodReplacement, функцией или аргументами before= и after=.","Порядок как в Xposed: хуки с большим priority выполняются раньше в before_hooked_method и позже в after_hooked_method. param.setResult() или param.setThrowable() в before_hooked_method отменяет вызов оригинала, остальные after_hooked_method выполняются.","MethodHookParam: method, thisObject, args (изменяемый список), getResult, setResult, getThrowable, setThrowable, hasThrowable, getResultOrThrowable, getObjectExtra, setObjectExtra.","Конструкторы перехватываются через hook_all_constructors или getDeclaredConstructor(); в after_hooked_method param.thisObject содержит созданный объект.","Рефлексия эмулированных классов возвращает настоящие объекты: getDeclaredMethods, getMethods, getDeclaredMethod, getDeclaredConstructors, getDeclaredFields, getDeclaredField. У метода есть getName, getParameterCount, getParameterTypes, getModifiers, invoke."],code:"",table:null},{id:"wiki-04-03",question:"Фильтры",category:"Хуки методов (Xposed)",answer:`Фильтры отсекают вызовы до запуска кода хука, как HookFilter в exteraGram:

Поддерживаются все фильтры SDK: ArgumentIsNull, ArgumentNotNull, ArgumentIsTrue, ArgumentIsFalse, ArgumentEqual, ArgumentNotEqual, ArgumentIsInstanceOf, RESULT_IS_NULL, RESULT_NOT_NULL, RESULT_IS_TRUE, RESULT_IS_FALSE, ResultEqual, ResultNotEqual, ResultIsInstanceOf, Or, Condition. Условие Condition записывается на MVEL, как на Android: доступны param, result, object, this, поля thisObject по имени, полные имена классов (org.telegram.messenger.NotificationCenter.didReceiveNewMessages), операторы &&, ||, !, ==, instanceof, null, true, false.`,bullets:[],code:`from base_plugin import HookFilter, hook_filters, MethodHook

class OnlyTrue(MethodHook):
    @hook_filters(HookFilter.ArgumentIsTrue(0), HookFilter.Condition("param.thisObject != null"))
    def before_hooked_method(self, param):
        ...

self.hook_method(method, after=on_after, after_filters=[HookFilter.RESULT_NOT_NULL])`,table:null},{id:"wiki-04-04",question:"XposedHelpers",category:"Хуки методов (Xposed)",answer:`findClass, findClassIfExists, findMethodExact, findMethodBestMatch, findConstructorExact, findAndHookMethod, findAndHookConstructor, findField, getObjectField и setObjectField (а также варианты для int, long, boolean и других типов и статических полей), callMethod, callStaticMethod, newInstance, setAdditionalInstanceField, getAdditionalInstanceField, removeAdditionalInstanceField и статические варианты. XposedBridge.hookMethod, hookAllMethods, hookAllConstructors, unhookMethod, invokeOriginalMethod, log.

PyMethodHook и PyMethodReplacement из com.exteragram.messenger.plugins.xposed работают как в exteraGram, включая setBeforeHookedFilters и setAfterHookedFilters: такие хуки используют библиотеки вроде ZwyLib.`,bullets:[],code:"",table:null},{id:"wiki-04-05",question:"Перехват действий клиента",category:"Хуки методов (Xposed)",answer:`Действия пользователя в exDesktop проходят через те же методы, что и на Android, поэтому их перехват срабатывает:

param.setResult(None) в before_hooked_method отменяет действие.`,bullets:[],code:"",table:{headers:["Метод","Когда вызывается"],rows:[["PluginsController.setPluginEnabled(id, enabled)","включение или выключение плагина в списке"],["PythonPluginsEngine.loadPlugin(id, path)","загрузка плагина"],["PythonPluginsEngine.unloadPlugin(id)","выгрузка плагина, в том числе при удалении и обновлении"],["LocaleController.applyLanguage(info, ...)","смена языка через applyLanguage"]]}},{id:"wiki-04-06",question:"Наследование Java-классов",category:"Хуки методов (Xposed)",answer:`extera_utils.classes позволяет унаследовать эмулированный класс на Python:

self.java возвращает Java-объект, который передаётся в методы клиента; вызовы его переопределённых методов попадают в Python. Поддерживаются joverride, joverload (имя Java-метода отличается от имени в Python), jmethod, jfield с jgetmethod и jsetmethod, jconstructor, jpreconstructor, методы на MVEL (jMVELmethod, jMVELoverride), Base.from_java, new_instance, class_proxy с ClassInterceptor, release_plugin и collect_peers. Объекты плагина освобождаются при его выгрузке.

Исключение составляет SendMessagesHelper.sendMessage: такой хук подключается к конвейеру отправки exDesktop. В before_hooked_method первый аргумент param.args[0] содержит параметры отправки, изменение message меняет текст, param.setResult(None) отменяет отправку. replace_hooked_method тоже отменяет отправку.

Хук на MessagesController.processNewMessages или NotificationsController.processNewMessages вызывается для каждого нового сообщения. param.args[0] содержит список из одного MessageObject с полями messageOwner.id, messageOwner.message, messageOwner.date, messageOwner.out, messageOwner.dialog_id, messageOwner.peer_id, messageOwner.from_id и методами getId(), getDialogId(), isOut(), getFromChatId(). Отменить получение сообщения нельзя.

Хуки на события экранов выполняются по сигналам exDesktop:

Методы эмулированных классов перехватываются напрямую: хук на BottomSheet.show, MediaController.playMessage или любой другой реализованный метод срабатывает при каждом его вызове из плагина или из exDesktop. Получение метода через рефлексию (find_class(...).getClass().getDeclaredMethod(name)) возвращает тот же метод.

MessageObject в аргументах хуков содержит данные сообщения: тип (type, isPhoto(), isVideo(), isVoice(), isMusic(), isSticker(), isGif(), isRoundVideo(), isDocument()), документ (getDocument() с id, mime_type, size и атрибутами имени файла, аудио, видео и стикера), getMusicTitle(), getMusicAuthor(), getDuration(), getStickerEmoji(), сущности текста в messageOwner.entities, ответ (isReply(), getReplyMsgId()), пересылку (isForwarded(), messageOwner.fwd_from), isEdited(), getGroupId(), isPost().

MessagesController отдаёт данные клиента: getAllDialogs(), getDialogs(folder_id), getDialog(id) (TL_dialog с unread_count, pinned, folder_id, top_message), getDialogFilters() (папки с name и dialogs), isDialogMuted, isForum, и выполняет действия: openByUserName, deleteMessages, pinDialog, markDialogAsRead.

Поле ввода текущего чата доступно через ChatActivity.getChatActivityEnterView(): getFieldText(), setFieldText(text), hasText(), getEditField().getText() (с append, insert, replace, clear) и getEditField().setText(text) читают и меняют текст поля в exDesktop.

MediaController управляет плеером exDesktop: getPlayingMessageObject(), isPlayingMessage, isMessagePaused, playMessage, pauseMessage, resumeAudio, playNextMessage, playPreviousMessage, cleanupPlayer, seekToProgress. BottomSheet показывает окно с setCustomView, setTitle, show, dismiss, isShowing и setOnDismissListener; BottomSheet.Builder поддерживает setItems: список открывается окном exDesktop с заголовком из setTitle, выбор пункта вызывает слушатель с номером пункта. client_utils.get_media_controller(), get_notifications_controller() и другие функции возвращают эти же классы.

Эти хуки работают с семантикой Xposed: все before_hooked_method в порядке приоритета, затем действие клиента, если его не отменили, затем after_hooked_method. Изменить интерфейс Android в них нельзя: обращения к его элементам ничего не делают.

Плагин, который ставит остальные хуки, отмечается в списке плагинов пометкой «Работает частично». По нажатию на пометку открывается список перехватов, недоступных на ПК.

Для переноса таких функций используется перенос плагина под ПК: логика переписывается на хуки запросов, хук отправки, меню и настройки. Порядок описан в руководстве по переносу для ИИ.`,bullets:[],code:`from extera_utils.classes import Base, java_subclass, joverride, jfield
from android.widget import FrameLayout

@java_subclass(FrameLayout)
class Cell(Base):
    size = jfield("int", default=48)

    def on_post_init(self, context):
        self.setWillNotDraw(False)

    @joverride()
    def onMeasure(self, width_spec, height_spec):
        ...`,table:{headers:["Хук Android","Когда вызывается на ПК","param.thisObject"],rows:[["ChatActivity.onResume, createView, onFragmentCreate","открытие чата","ChatActivity с getDialogId(), getCurrentUser(), getCurrentChat()"],["ChatActivity.onPause, onFragmentDestroy","переход в другой чат","то же"],["ProfileActivity.onResume, createView","открытие профиля","ProfileActivity с getUserId(), getChatId()"],["DialogsActivity.onResume, createView","закрытие чата, показ списка","DialogsActivity"],["LaunchActivity.onActivityResult, BaseFragment.onActivityResultFragment","после выбора файла","param.args: код запроса, RESULT_OK (-1) или RESULT_CANCELED (0), Intent с getData()"],["ProfileActivity.onPause, onFragmentDestroy","переход из профиля в чат","ProfileActivity"],["DialogsActivity.onPause, onFragmentDestroy","открытие чата из списка","DialogsActivity"],["LaunchActivity.onCreate","сразу после загрузки плагина","LaunchActivity"],["LaunchActivity.onResume, onStart","окно exDesktop стало активным","LaunchActivity"],["LaunchActivity.onPause, onStop","окно exDesktop потеряло фокус","LaunchActivity"],["Browser.openUrl","нажатие на любую внешнюю ссылку в клиенте","param.args[1]: адрес; param.setResult(None) не даёт открыть ссылку"],["LaunchActivity.handleIntent","открытие ссылки tg:// в клиенте","param.args[0]: Intent с getData(); param.setResult(True) отменяет обработку ссылки"],["MediaController.playMessage","запуск аудио, голосового или видеосообщения в чате","param.args[0]: MessageObject; param.setResult(False) отменяет воспроизведение"],["AudioPlayerAlert.updateTitle","после запуска аудио","AudioPlayerAlert"],["ChatActivityEnterView.setReplyingMessageObject","выбор сообщения для ответа","param.args[0]: MessageObject; param.setResult(None) отменяет выбор"],["VoIPHelper.startCall","начало исходящего звонка","param.args[0]: пользователь TL_user, param.args[1]: видеозвонок; param.setResult(None) отменяет звонок"],["ChatMessageCell.setMessageObject, setMessageContent","построение текста сообщения в чате","param.args[0]: MessageObject; присваивание messageText или messageOwner.message меняет показанный текст (только на экране, сообщение не меняется)"],["ChatAvatarContainer.updateSubtitle, setSubtitle","обновление статуса в шапке чата","ChatAvatarContainer с getDialogId(), setSubtitle(), getSubtitleTextView().setText(); новый текст показывается вместо статуса"],["ChatActivity.createMenu, fillMessageMenu","правый клик по сообщению","ChatActivity; param.args[0]: ячейка с getMessageObject(); param.setResult(None) не даёт открыть меню"],["TranscribeButton.onTap","нажатие на кнопку расшифровки голосового или видеосообщения","TranscribeButton с getMessageObject(); param.setResult(None) отменяет расшифровку"],["SendMessagesHelper.sendReaction","постановка или снятие реакции","param.args[0]: MessageObject, param.args[1]: список VisibleReaction (emojicon, documentId), пустой при снятии; param.setResult(None) отменяет реакцию"],["NotificationsController.showOrUpdateNotification","показ уведомления о новом сообщении","NotificationsController с pushMessages; param.setResult(None) скрывает уведомление"],["ChatAvatarContainer.onAvatarClick, ChatActivity.openProfile","нажатие на шапку чата","ChatAvatarContainer с getDialogId(); param.setResult(None) не даёт открыть профиль"],["MediaController.playNextMessage, playNextMessageWithoutOrder, playPreviousMessage","переход к следующему или предыдущему треку, в том числе автоматический","MediaController; param.setResult(None) отменяет переход"],["MediaController.cleanupPlayer","закрытие плеера","MediaController; param.setResult(None) оставляет плеер открытым"],["MediaController.setPlaylist","запуск аудио, перед playMessage","param.args[0]: список сообщений, param.args[1]: текущее"],["AudioPlayerAlert (конструктор), AudioPlayerAlert.onSubItemClick","открытие полноэкранного плеера и выбор пункта его меню","AudioPlayerAlert с полем optionsButton; пункты из optionsButton.addSubItem(id, icon, text) показываются по правому клику в плеере, setSubItemShown скрывает пункт"],["AndroidUtilities.openForView","открытие файла из чата","param.args[0]: MessageObject; param.setResult(None) отменяет открытие"],["LaunchActivity.onNewIntent","открытие ссылки tg://","то же, что handleIntent"],["MainTabsActivity.onResume, createView","показ списка чатов","DialogsActivity"],["ChatActivity.onTransitionAnimationEnd","открытие чата","ChatActivity"],["ProfileActivity.updateProfileData","открытие профиля","ProfileActivity"],["ChatMessageCell.setMessageObjectInternal","построение текста сообщения","как у setMessageObject"],["ChatActivity.getMessageContent","«Копировать текст» в меню сообщения","param.args[0]: MessageObject; результат, заданный через param.setResult(text) в after_hooked_method, попадает в буфер обмена"],["SettingsActivity.fillItems, SettingsActivity.onClick","построение главного меню exDesktop и выбор пункта","param.args[0]: список UItem с пунктом id == -1; пункты, добавленные плагином (UItem.asButton(id, icon, text)), показываются в главном меню, клик вызывает onClick с param.args[0]: выбранный UItem"],["ProfileActivity.updateRowsIds, ProfileActivity$ListAdapter.onBindViewHolder","построение блока информации в профиле","у ProfileActivity есть поля rowCount, phoneRow, usernameRow, bioRow (у канала channelInfoRow), infoHeaderRow, infoSectionRow, userId, chatId, их можно читать и менять через рефлексию; onBindViewHolder получает holder.itemView типа TextDetailCell, setTextAndValue в строке телефона, юзернейма или описания заменяет текст, в новой строке (после увеличения rowCount) добавляет строку в конец блока"],["ChatActivity.addToSelectedMessages","выделение сообщения","param.args[0]: MessageObject; param.setResult(None) не даёт выделить"],["ChatActivity.sendMedia, SendMessagesHelper.prepareSendingMedia, prepareSendingDocuments","отправка файлов и фото","param.args[0]: первый PhotoEntry с path и caption, param.args[5]: все файлы; param.setResult(None) отменяет отправку"],["DialogCell.update, buildLayout, setDialog","построение имени чата в списке чатов","DialogCell с currentDialogId, getCurrentUser(), getCurrentChat(), nameString; изменение first_name, last_name пользователя из MessagesController.getUser или title чата в before_hooked_method меняет показанное имя, как в Android-плагинах локального переименования"],["ChatAvatarContainer.setTitle, ChatActivity.updateTitle","построение названия в шапке чата","ChatAvatarContainer с getDialogId(); изменённый param.args[0] или вызов setTitle() меняет показанное название"]]}}]},{id:"wiki-cat-05",number:"05",title:"Веб-окна плагинов",anchor:"веб-окна-плагинов",items:[{id:"wiki-05-01",question:"Веб-окна плагинов",category:"Веб-окна плагинов",answer:"Плагин может показать свой интерфейс на HTML в отдельном окне exDesktop. Это замена мобильных всплывающих окон с WebView:",bullets:["В странице доступен объект exd: exd.send(data) передаёт данные в on_message плагина, exd.onMessage(fn) получает данные из app.send(data), exd.close() закрывает окно. app.eval(js) выполняет JavaScript, app.close() закрывает окно, on_close и on_load вызываются при закрытии и загрузке.","android.webkit.WebView работает так же, как на Android: loadData, loadDataWithBaseURL, loadUrl (только https://), addJavascriptInterface (вызовы из JS выполняются асинхронно), evaluateJavascript, WebViewClient.shouldOverrideUrlLoading и onPageFinished. WebView внутри AlertDialog, BottomSheet или AlertDialogBuilder.set_view открывается в веб-окне.","Защита: окно открывается от имени плагина, которому оно принадлежит. Сетевые запросы из страницы разрешены только по HTTPS и запрещены полностью, если плагину отключён интернет в разрешениях. Переход по ссылке передаётся плагину, иначе ссылка открывается в браузере с подтверждением, как обычная ссылка из плагина. Окна закрываются при выключении плагина."],code:`from ui.webapp import WebApp

app = WebApp("Статистика", html="<button onclick=\\"exd.send({click: 1})\\">OK</button>",
             width=480, height=640, on_message=lambda data: app.send({"reply": data}))
app.show()`,table:null}]},{id:"wiki-cat-06",number:"06",title:"Виджеты Android",anchor:"виджеты-android",items:[{id:"wiki-06-01",question:"Виджеты Android",category:"Виджеты Android",answer:`Кроме TextView, EditText, ImageView, LinearLayout, FrameLayout и ScrollView в окнах плагинов отображаются Button, CheckBox, Switch (setChecked, setOnCheckedChangeListener), SeekBar (setMax, setProgress, OnSeekBarChangeListener) и ProgressBar (в том числе setIndeterminate). TextWatcher у EditText получает beforeTextChanged, onTextChanged и afterTextChanged.

Контекст Android (ApplicationLoader.applicationContext, LaunchActivity) возвращает рабочие объекты: getClassLoader().loadClass, getResources() (getIdentifier, getDisplayMetrics, getConfiguration, getString, getColor), getPackageManager().getPackageInfo, getWindow(), getSystemService для window, connectivity, audio, notification (уведомление показывается плашкой в клиенте), power, input_method, activity, clipboard.`,bullets:[],code:"",table:null}]},{id:"wiki-cat-07",number:"07",title:"Выбор чатов и пользователей",anchor:"выбор-чатов-и-пользователей",items:[{id:"wiki-07-01",question:"Выбор чатов и пользователей",category:"Выбор чатов и пользователей",answer:`Экраны выбора из Android открываются окном выбора exDesktop, когда плагин показывает их через presentFragment:

При закрытии окна без выбора делегат не вызывается. presentFragment(PluginSettingsActivity(plugin)) открывает окно настроек плагина.`,bullets:["DialogsActivity(args) с делегатом DialogsActivityDelegate: выбор одного чата. Аргументы allowUsers, allowBots, allowGroups, allowChannels ограничивают список, selectAlertString задаёт заголовок. После выбора вызывается didSelectDialogs со списком из одного TopicKey (dialogId, topicId).","GroupCreateActivity с делегатом GroupCreateActivityDelegate: выбор нескольких пользователей, групп и каналов, select(ids) отмечает выбранных заранее. После выбора вызывается didSelectUsers со списком id."],code:"",table:null}]},{id:"wiki-cat-08",number:"08",title:"Перенос при помощи ИИ",anchor:"перенос-при-помощи-ии",items:[{id:"wiki-08-01",question:"Перенос при помощи ИИ",category:"Перенос при помощи ИИ",answer:`В карточке плагина с Android-хуками, DEX-кодом или ошибкой загрузки и в окне его установки есть действие «Перенести при помощи ИИ». Перед запуском открывается окно с объёмом запроса и подсказками, в нём выбираются сервис, модель, ключ API и режим проверки. Те же параметры задаются в настройках движка плагинов, раздел «ИИ-перенос плагинов»:

Используется только ключ пользователя. Модель и адрес можно задать вручную. Бесплатных тарифов Groq и OpenRouter (несколько тысяч токенов на запрос) хватает только на маленькие плагины. Для Ollama по умолчанию используется qwen2.5-coder:7b с контекстом 32 тысячи токенов.

Порядок работы:

Слабые и локальные модели переносят хуже: часть функций может не сохраниться.`,bullets:["Клиент отправляет модели короткую инструкцию, подсказки по найденным в плагине перехватам, подходящие разделы справочника и исходный код без комментариев и двоичных вставок. Модель может запросить дополнительные разделы строкой NEED: раздел.","Ответ проверяется: синтаксис, импорты из модулей SDK, метаданные (__id__ с суффиксом _exd, __desktop__, __ported_from__, __desktop_os__), запрещённые модули и вызовы, пути Android, новые сетевые адреса, критичные находки PluginGuard. Недостающие импорты SDK дописываются, а неподдерживаемые перехваты удаляются автоматически, без лишней попытки.","В режиме «С проверкой и исправлением» ошибки возвращаются модели, до четырёх попыток. В режиме «Один запрос» результат с ошибками отклоняется сразу.","Прошедший проверку плагин сохраняется в папку ai_ports и устанавливается отдельно от оригинала через обычное окно установки с проверкой PluginGuard. В окне установки и в карточке он отмечен «Перенесено с Android при помощи ИИ»."],code:"",table:{headers:["Сервис","Ключ API","Адрес по умолчанию"],rows:[["ChatGPT (OpenAI)","нужен","api.openai.com"],["Claude (Anthropic)","нужен","api.anthropic.com"],["OpenRouter, Groq, DeepSeek","нужен","адрес сервиса"],["Ollama","не нужен","localhost:11434"],["LM Studio","не нужен","localhost:1234"],["Свой адрес","по необходимости","OpenAI-совместимый API"],["Gemini (Google)","нужен, есть бесплатный ключ Google AI Studio","generativelanguage.googleapis.com"]]}}]},{id:"wiki-cat-09",number:"09",title:"Защита",anchor:"защита",items:[{id:"wiki-09-01",question:"Защита",category:"Защита",answer:"Плагин выполняется в защитной среде. Она ограничивает доступ к файлам, сети и системе и не зависит от того, что написано в коде плагина.",bullets:[],code:"",table:null},{id:"wiki-09-02",question:"Файлы",category:"Защита",answer:`При обращении к обычной папке пользователь видит окно «Доступ к файлам» с кнопками «Разрешить на свой страх и риск» и «Запретить». Разрешение запоминается для папки.

Пути Android перенаправляются в папку плагина: /sdcard/..., /storage/emulated/0/..., /data/user/0/com.exteragram.messenger/....`,bullets:[],code:"",table:{headers:["Где","Доступ"],rows:[["Своя папка плагина (file_utils.get_plugin_dir()), свой кэш, общие папки медиа плагинов","чтение и запись"],["Папки, в имени которых есть id плагина, внутри папки файлов и домашней папки","чтение и запись"],["Библиотеки Python, SDK, установленные зависимости","только чтение"],["Данные Telegram и exDesktop (tdata), чужие плагины и их данные, настройки плагинов","запрещено всегда"],["Профили браузеров, кошельки, ключи SSH и GPG, менеджеры паролей, Discord, Steam","запрещено всегда"],["Остальные папки (Рабочий стол, Загрузки, Документы и другие)","по разрешению пользователя"]]}},{id:"wiki-09-03",question:"Выбор файла",category:"Защита",answer:`file_utils.pick_file(callback, title="", filters="", multiple=False) открывает системный диалог, callback получает список путей. Путь Android тоже работает: startActivityForResult с Intent.ACTION_GET_CONTENT, ACTION_OPEN_DOCUMENT или ACTION_PICK открывает диалог, результат приходит в хук onActivityResult, файл читается через getContentResolver().openInputStream(uri) или по uri.getPath(). Плагин получает доступ только к выбранным файлам, до перезапуска клиента.

Относительный путь в open() и sqlite3.connect() отсчитывается от папки плагина, как и на Android. getFilesDir(), getFilesDirFixed() и getCacheDir() возвращают папку плагина и его кэш. Базы SQLite проверяются по тем же правилам, что и обычные файлы.`,bullets:[],code:"",table:null},{id:"wiki-09-04",question:"Сеть",category:"Защита",answer:`Плагин подключается к сайтам в интернете без запросов. Подключения к localhost тоже разрешены. Разрешение пользователя нужно в двух случаях:

В обоих окнах есть кнопки «Разрешить всегда», «Один раз» и «Запретить», решение запоминается для пары «плагин и адрес». Открыть порт для входящих подключений из сети нельзя.`,bullets:["подключение к устройству в локальной сети (частные адреса, имена .local, .lan, .home, .internal): окно «Запрос доступа к локальной сети»;","отправка UDP-пакетов на внешний адрес: окно «Запрос отправки UDP-пакетов»."],code:"",table:null},{id:"wiki-09-05",question:"Защищённые данные",category:"Защита",answer:`Всё, что плагин отправляет в сеть или в Telegram (send_message, send_request, edit_message, отправка файлов), проверяется на защищённые данные:

При совпадении отправка останавливается до решения пользователя. В окне «Отправка защищённых данных» указано, что и куда отправляется, и есть кнопки «Запретить», «Один раз», «Разрешить всегда» и «Отключить плагин». Если ответить некому (неизвестный источник вызова), отправка блокируется.`,bullets:["ключи сессии Telegram;","код входа в Telegram;","номер телефона аккаунта и номера телефонов контактов;","приватные ключи и сид-фразы криптокошельков;","данные браузера;","данные компьютера (аппаратные адреса и идентификаторы);","токены ботов и API-ключи, если в настройках движка плагинов включена «Защита токенов ботов и API-ключей»."],code:"",table:null},{id:"wiki-09-06",question:"Разрешения и журнал",category:"Защита",answer:`В меню плагина есть раздел «Разрешения и журнал».

Если у плагина нет своих настроек, кнопка настроек в карточке всё равно показывается ради этого раздела.`,bullets:["«Разрешения»: доступ в интернет целиком, буфер обмена, уведомления, открытие ссылок без подтверждения, а также выданные решения по адресам, UDP, защищённым данным и папкам. Нажатие на строку сбрасывает решение, после чего плагин запросит его повторно. Кнопка «Сбросить все разрешения» очищает всё сразу.","«Журнал»: подключения к адресам, открытые папки и заблокированные действия (запуск программ, прямой доступ к системе, чтение реестра, отправка защищённых данных). Журнал ведётся с момента запуска клиента. Из журнала можно сразу запретить подключения к адресу."],code:"",table:null},{id:"wiki-09-07",question:"Система",category:"Защита",answer:`Запрещены запуск программ (subprocess, os.system, os.startfile), вызов системных функций через ctypes, запись в реестр Windows и доступ к внутренностям интерпретатора (gc.get_objects, sys.settrace, создание байткода вручную). Попытка блокируется, пользователь видит плашку с названием плагина.

Попытки обойти защиту отмечаются проверкой PluginGuard как критическая угроза.`,bullets:[],code:"",table:null}]},{id:"wiki-cat-10",number:"10",title:"Проверка PluginGuard",anchor:"проверка-pluginguard",items:[{id:"wiki-10-01",question:"Проверка PluginGuard",category:"Проверка PluginGuard",answer:`Перед установкой каждый плагин проверяется без запуска его кода. Проверка идёт в три этапа:

Итог показывается одним из уровней: «угроз нет», «низкий риск», «средний риск», «критическая угроза». Плагин с критической угрозой не устанавливается и помечается нежелательным, повторная установка того же файла тоже невозможна.

Установку блокируют:

Одно лишь сходство с вредоносными плагинами установку не блокирует, если ИИ-арбитр признал плагин безопасным.`,bullets:["Статические правила разбирают код: сеть, файлы, вызовы системы, работа с данными аккаунта, обфускация.","Векторная модель сравнивает фрагменты кода с базой чистых и вредоносных плагинов.","ИИ-арбитр получает находки и спорные фрагменты и отделяет реальную угрозу от обычной функциональности. Арбитр включается в настройках движка плагинов: сервис (Groq, OpenRouter, DeepSeek, OpenAI, Mistral) и свой ключ API.","явная обфускация кода;","поведение, характерное для вредоносных плагинов (сходство с базой в нескольких опасных фрагментах);","отправка защищённых данных (сессии, кодов входа, ключей) на сторонние адреса;","дропперы: плагин скачивает файл, сохраняет его и запускает или подключает;","загрузка кода во время работы: плагин скачивает DEX, нативную библиотеку, Python-модуль или другой плагин и загружает его. Такой код нельзя проверить до установки, поэтому плагин блокируется, даже если сам загрузчик выглядит безобидно;","встроенные исполняемые файлы Windows или Linux вместе с кодом их загрузки."],code:"",table:null},{id:"wiki-10-02",question:"Зашифрованные плагины",category:"Проверка PluginGuard",answer:`Зашифрованный или упакованный код (base64, zlib, XOR, вложенные exec и подобные слои) расшифровывается статически, без выполнения. Расшифровка ограничена по глубине, объёму и времени.

Окно просмотра кода в окне установки показывает расшифрованный код под исходным. Двоичные вставки (DEX, нативные библиотеки) заменяются строкой с их типом и размером.`,bullets:["Если код не удалось расшифровать полностью, плагин блокируется.","Полностью расшифрованный код проверяется теми же правилами. Плагин устанавливается, только если в расшифрованном коде нет находок среднего уровня и выше и ИИ-арбитр признал его безопасным. Без настроенного арбитра такой плагин не устанавливается."],code:"",table:null}]},{id:"wiki-cat-11",number:"11",title:"Сервер разработки",anchor:"сервер-разработки",items:[{id:"wiki-11-01",question:"Сервер разработки",category:"Сервер разработки",answer:`Переключатель «Сервер разработки плагинов» в настройках движка плагинов запускает dev_server.DevServer на 127.0.0.1:42690. Протокол совпадает с exteraGram, поэтому клиент горячей перезагрузки из exteragram-utils работает без изменений (команда adb forward на ПК не нужна): сообщения {"@": команда, "#": номер, ...}, ответ содержит тот же # и success.

Сервер принимает только локальные подключения. Запустить его или отладчик может только exDesktop: вызов DevServer.start_server() из плагина отклоняется, а импорт dev_server в плагине отмечается проверкой.`,bullets:[],code:"",table:{headers:["Команда","Аргументы","Действие"],rows:[["ping","","проверка соединения"],["get_plugins","","список установленных плагинов с именем, версией и состоянием"],["write_plugin","plugin_id, content","установка или обновление плагина после проверки PluginGuard; критичные и высокие угрозы блокируют установку"],["reload_plugin","plugin_id","перезапуск плагина"],["enable_plugin, disable_plugin","plugin_id","включение и выключение"],["remove_plugin","plugin_id","удаление"],["start_debugger, stop_debugger","host, port, platform (vscode или pycharm)","подключение отладчика (debugpy для VS Code)"]]}}]},{id:"wiki-cat-12",number:"12",title:"Elyx",anchor:"elyx",items:[{id:"wiki-12-01",question:"Elyx",category:"Elyx",answer:`Поддерживаются:

Не поддерживаются зашифрованные архивы и файлы .dex. Методы ассетов, которые на Android создают Drawable (to_drawable, to_svg_drawable и другие), возвращают путь к файлу.`,bullets:["refmap.yaml, refmap.yml, refmap.json с ключами main, metainfo, assets, strings, wheels; ключи без значения получают значения по умолчанию;","метаданные YAML и JSON, подстановка {ключ} из строк локализации в названии и описании;","отдельное пространство модулей ElyxPlugins.<id>: локальные модули разных плагинов с одинаковыми именами не пересекаются;","обычный и относительный импорт локальных модулей, импорт JSON, YAML и TXT как модулей, elyx.import_module;","from elyx import metainfo, refmap, assets, strings, settings, import_module, get_environment, классы Strings, SettingsController, Assets, Asset;","колёса .whl из папки wheels;","проверка зависимостей requires с минимальной версией."],code:"",table:null}]},{id:"wiki-cat-13",number:"13",title:"Windows, Linux и macOS",anchor:"windows-linux-и-macos",items:[{id:"wiki-13-01",question:"Windows, Linux и macOS",category:"Windows, Linux и macOS",answer:`Движок плагинов одинаково работает на всех трёх системах. Встроенные пакеты (requests, beautifulsoup4, lxml, pillow, PyYAML, packaging) входят в сборки для всех систем. Зависимости __requirements__ с нативным кодом устанавливаются из колёс для текущей системы и процессора.

Чтобы плагин работал везде:

ИИ-перенос проверяет эти правила и указывает систему, для которой плагин перенесён, в __desktop_os__.

При ошибке запуска движка её текст выводится в разделе плагинов настроек, а полный трейс Python записывается в log.txt.`,bullets:["пути строятся через os.path.join и file_utils.get_plugin_dir(), без обратной косой черты, букв дисков, %APPDATA%, /home/... и ~/Library;","имена файлов на Linux различают регистр;",'текстовые файлы открываются с encoding="utf-8";',"модули одной системы (winreg, msvcrt, winsound, fcntl, termios) импортируются внутри try/except ImportError."],code:"",table:null}]},{id:"wiki-cat-14",number:"14",title:"Отличия от Android",anchor:"отличия-от-android",items:[{id:"wiki-14-01",question:"Отличия от Android",category:"Отличия от Android",answer:"",bullets:["Нет Java и Chaquopy: модули java, android, org.telegram эмулируются.","Нет Xposed: срабатывают только перехваты из раздела «Хуки методов» и методы эмулированных классов.","Нет View Android: собственные экраны и Custom в настройках отображаются в упрощённом виде.","Плагин не может запускать программы и загружать нативные библиотеки.","Плагин не может скачивать и загружать код во время работы: такие плагины не проходят проверку PluginGuard.","Файлы вне своей папки доступны только по разрешению пользователя."],code:"",table:null}]}],Hp=({currentPath:e,theme:t,onToggleTheme:n,onOpenMobileMenu:r,onNavigate:i})=>{const l=e.startsWith("/wiki"),o=(a,u)=>{a.preventDefault(),i(u)};return s.jsxs("header",{className:"site-header",children:[s.jsxs("a",{href:"/",onClick:a=>o(a,"/"),className:"brand-link","aria-label":"exDesktop Главная",children:[s.jsx("div",{className:"brand-mark",children:s.jsx("img",{src:ye("assets/markSvg.svg"),alt:"",width:44,height:44})}),s.jsx("span",{className:"brand-text",children:"exDesktop"})]}),s.jsxs("nav",{className:"desktop-nav","aria-label":"Основная навигация",children:[s.jsx("a",{href:"/",onClick:a=>o(a,"/"),className:`nav-pill ${l?"":"active"}`,"aria-current":l?void 0:"page",children:"Главная"}),s.jsx("a",{href:"/#installation",onClick:a=>o(a,"/#installation"),className:"nav-pill",children:"Установка"}),s.jsx("a",{href:"/wiki",onClick:a=>o(a,"/wiki"),className:`nav-pill ${l?"active":""}`,"aria-current":l?"page":void 0,children:"WIKI"})]}),s.jsxs("div",{className:"header-actions",children:[s.jsx("button",{onClick:n,className:"theme-toggle-btn","aria-label":t==="dark"?"Включить светлую тему":"Включить тёмную тему",title:t==="dark"?"Включить светлую тему":"Включить тёмную тему",children:s.jsx(A,{name:t==="dark"?"sun":"moon",size:22,color:"var(--accent-primary)"})}),s.jsxs("a",{href:oe.github,target:"_blank",rel:"noopener noreferrer",className:"desktop-github-btn","aria-label":"GitHub репозиторий exDesktop",children:[s.jsx(A,{name:"code",size:22,color:"currentColor"}),s.jsx("span",{children:"GitHub"})]}),s.jsx("button",{onClick:r,className:"mobile-burger-btn","aria-label":"Открыть мобильное меню","aria-expanded":"false",children:s.jsx(A,{name:"menu",size:24,color:"var(--accent-primary)"})})]}),s.jsx("style",{children:`
        .site-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 96px;
          width: 100%;
          position: relative;
        }

        .brand-link {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }

        .brand-mark {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          overflow: hidden;
          transition: transform 150ms ease;
        }

        .brand-link:hover .brand-mark {
          transform: scale(1.05);
        }

        .brand-text {
          font-size: 24px;
          font-weight: 700;
          line-height: 30px;
          letter-spacing: -0.02em;
          color: var(--text-primary);
        }

        /* Capsule Nav */
        .desktop-nav {
          display: flex;
          align-items: center;
          background-color: var(--surface-soft);
          border-radius: 24px;
          padding: 4px;
          gap: 4px;
          width: 380px;
          height: 48px;
        }

        .nav-pill {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 40px;
          border-radius: 20px;
          font-size: 15px;
          font-weight: 500;
          line-height: 1.25;
          color: var(--text-secondary);
          transition: background-color 150ms ease, color 150ms ease;
        }

        .nav-pill:nth-child(1) { width: 116px; }
        .nav-pill:nth-child(2) { width: 132px; }
        .nav-pill:nth-child(3) { width: 116px; }

        .nav-pill:hover {
          color: var(--text-primary);
          background-color: rgba(255, 255, 255, 0.04);
        }

        .nav-pill.active {
          background-color: var(--accent-container);
          color: var(--text-primary);
          font-weight: 600;
        }

        /* Actions */
        .header-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .theme-toggle-btn {
          width: 48px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 22px;
          background-color: var(--surface-soft);
          transition: background-color 150ms ease, transform 150ms ease;
        }

        .theme-toggle-btn:hover {
          background-color: var(--surface-raised);
          transform: scale(1.05);
        }

        .desktop-github-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 188px;
          height: 52px;
          border-radius: 26px;
          background-color: var(--surface-soft);
          color: var(--text-primary);
          font-size: 16px;
          font-weight: 600;
          transition: background-color 150ms ease, transform 150ms ease;
        }

        .desktop-github-btn:hover {
          background-color: var(--surface-raised);
          transform: translateY(-1px);
        }

        .mobile-burger-btn {
          display: none;
          width: 44px;
          height: 44px;
          align-items: center;
          justify-content: center;
          border-radius: 22px;
          background-color: var(--surface-soft);
        }

        /* Responsive Breakpoints */
        @media (max-width: 1199px) {
          .desktop-nav {
            width: 320px;
          }
          .nav-pill:nth-child(1),
          .nav-pill:nth-child(3) { width: 95px; }
          .nav-pill:nth-child(2) { width: 120px; }
          .desktop-github-btn {
            width: 140px;
          }
        }

        @media (max-width: 767px) {
          .site-header {
            height: 64px;
            margin-bottom: 8px;
          }
          .brand-mark {
            width: 36px;
            height: 36px;
          }
          .brand-text {
            font-size: 20px;
          }
          .header-actions {
            gap: 8px;
          }
          .theme-toggle-btn {
            width: 40px;
            height: 40px;
            border-radius: 20px;
          }
          .desktop-nav,
          .desktop-github-btn {
            display: none;
          }
          .mobile-burger-btn {
            display: flex;
            width: 40px;
            height: 40px;
            border-radius: 20px;
          }
        }
      `})]})},Vp=({isOpen:e,onClose:t,onNavigate:n})=>{const r=G.useRef(null);if(G.useEffect(()=>{if(e){document.body.style.overflow="hidden";const l=o=>{o.key==="Escape"&&t()};return window.addEventListener("keydown",l),()=>{document.body.style.overflow="",window.removeEventListener("keydown",l)}}else document.body.style.overflow=""},[e,t]),!e)return null;const i=(l,o)=>{l.preventDefault(),n(o),t()};return s.jsxs("div",{className:"mobile-menu-overlay",onClick:t,children:[s.jsxs("div",{className:"mobile-menu-panel",ref:r,onClick:l=>l.stopPropagation(),role:"dialog","aria-modal":"true","aria-label":"Мобильная навигация",children:[s.jsxs("div",{className:"mobile-menu-header",children:[s.jsxs("div",{className:"menu-brand",children:[s.jsx("img",{src:ye("assets/markSvg.svg"),alt:"",width:36,height:36}),s.jsx("span",{className:"menu-brand-text",children:"exDesktop"})]}),s.jsx("button",{onClick:t,className:"menu-close-btn","aria-label":"Закрыть мобильное меню",children:s.jsx(A,{name:"close",size:24,color:"var(--text-primary)"})})]}),s.jsxs("nav",{className:"mobile-menu-nav",children:[s.jsx("a",{href:"/",onClick:l=>i(l,"/"),className:"menu-item",children:"Главная"}),s.jsx("a",{href:"/#preview",onClick:l=>i(l,"/#preview"),className:"menu-item",children:"Превью"}),s.jsx("a",{href:"/#features",onClick:l=>i(l,"/#features"),className:"menu-item",children:"Возможности"}),s.jsx("a",{href:"/#installation",onClick:l=>i(l,"/#installation"),className:"menu-item",children:"Установка"}),s.jsx("a",{href:"/#roadmap",onClick:l=>i(l,"/#roadmap"),className:"menu-item",children:"Roadmap"}),s.jsx("a",{href:"/wiki",onClick:l=>i(l,"/wiki"),className:"menu-item",children:"WIKI"}),s.jsxs("a",{href:oe.github,target:"_blank",rel:"noopener noreferrer",className:"menu-item external",children:[s.jsx("span",{children:"GitHub"}),s.jsx(A,{name:"arrow_external",size:20,color:"var(--text-secondary)"})]})]}),s.jsx("div",{className:"mobile-menu-cta",children:s.jsxs("a",{href:oe.download,target:"_blank",rel:"noopener noreferrer",className:"pill-button primary",style:{width:"100%"},children:[s.jsx(A,{name:"download",size:22,color:"var(--text-on-accent)"}),s.jsx("span",{children:"Скачать exDesktop"})]})})]}),s.jsx("style",{children:`
        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.65);
          backdrop-filter: blur(8px);
          z-index: 1000;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding: 16px;
        }

        .mobile-menu-panel {
          width: 100%;
          max-width: 390px;
          background-color: var(--surface-soft);
          border-radius: 32px;
          padding: 24px 20px 28px 20px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.35);
          animation: slideDown 200ms ease;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .mobile-menu-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .menu-brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .menu-brand-text {
          font-size: 22px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .menu-close-btn {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 22px;
          background-color: var(--surface-card);
        }

        .mobile-menu-nav {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .menu-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 18px;
          border-radius: 20px;
          font-size: 18px;
          font-weight: 600;
          color: var(--text-primary);
          background-color: transparent;
          transition: background-color 150ms ease;
        }

        .menu-item:hover {
          background-color: var(--surface-card);
        }

        .menu-item.external {
          color: var(--text-secondary);
        }

        .mobile-menu-cta {
          margin-top: 8px;
        }
      `})]})},Ka="7.4.3.2",qa="https://github.com/metawka/exDesktop/releases/latest";function Oo(){const[e,t]=G.useState({version:Ka,rawTag:`v${Ka}`,releaseUrl:qa,isLoading:!0});return G.useEffect(()=>{let n=!0;async function r(){try{const i=await fetch("https://api.github.com/repos/metawka/exDesktop/releases/latest");if(!i.ok)throw new Error(`GitHub API HTTP ${i.status}`);const l=await i.json();if(n&&l.tag_name){const o=String(l.tag_name),a=o.replace(/^v/,"");t({version:a,rawTag:o,releaseUrl:l.html_url||qa,publishedAt:l.published_at,isLoading:!1})}}catch{n&&t(i=>({...i,isLoading:!1}))}}return r(),()=>{n=!1}},[]),e}const $p=({onNavigate:e})=>{const{version:t,releaseUrl:n}=Oo();return s.jsxs("section",{className:"hero-section",children:[s.jsx("svg",{width:"0",height:"0",style:{position:"absolute"},children:s.jsx("defs",{children:s.jsx("clipPath",{id:"avatar-cookie-mask",clipPathUnits:"userSpaceOnUse",children:s.jsx("path",{d:"M 151.9788055419922 0 L 157.3349151611328 0.621101975440979 L 162.5776824951172 2.42891788482666 L 167.6116943359375 5.262959957122803 L 172.37478637695312 8.875022888183594 L 176.84869384765625 12.955833435058594 L 181.06332397460938 17.168109893798828 L 185.09396362304688 21.182355880737305 L 189.05169677734375 24.711458206176758 L 193.06805419921875 27.540287017822266 L 197.2759552001953 29.547109603881836 L 201.7893524169922 30.71457862854004 L 206.6844024658203 31.129234313964844 L 211.9846649169922 30.969768524169922 L 217.65261840820312 30.485523223876953 L 223.58880615234375 29.96784210205078 L 229.6391143798828 29.717531204223633 L 235.60964965820312 30.012187957763672 L 241.28759765625 31.076984405517578 L 246.46585083007812 33.06210708618164 L 250.9680938720703 36.02915573120117 L 254.671875 39.94778823852539 L 257.5260314941406 44.70264434814453 L 259.5606384277344 50.10944747924805 L 260.8875732421875 55.93810272216797 L 261.6916809082031 61.93995666503906 L 262.2126770019531 67.8758544921875 L 262.72003173828125 73.54179382324219 L 263.4833679199219 78.78923034667969 L 264.7417297363281 83.53790283203125 L 266.6752014160156 87.77999877929688 L 269.3822326660156 91.57548522949219 L 272.86553955078125 95.03961181640625 L 277.02825927734375 98.32439422607422 L 281.6814270019531 101.59673309326172 L 286.56158447265625 105.01587677001953 L 291.3572692871094 108.71318817138672 L 295.7415771484375 112.77668762207031 L 299.4067077636719 117.24209594726562 L 302.0974426269531 122.09129333496094 L 303.6391906738281 127.2581787109375 L 303.9576110839844 132.64077758789062 L 303.087646484375 138.11781311035156 L 301.1708068847656 143.56747436523438 L 298.44073486328125 148.88543701171875 L 295.19879150390625 154 L 291.7823791503906 158.88204956054688 L 288.529052734375 163.54852294921875 L 285.7408142089844 168.0589599609375 L 283.6523742675781 172.50550842285156 L 282.40673828125 176.9979705810547 L 282.0407409667969 181.64552307128906 L 282.482421875 186.5382080078125 L 283.5598449707031 191.73025512695312 L 285.0209655761719 197.22801208496094 L 286.56158447265625 202.984130859375 L 287.85870361328125 208.8990478515625 L 288.6053161621094 214.8300323486328 L 288.54266357421875 220.6066436767578 L 287.48687744140625 226.05091857910156 L 285.3467102050781 231 L 282.1307678222656 235.32797241210938 L 277.94378662109375 238.96444702148438 L 272.972412109375 241.90699768066406 L 267.4627380371094 244.22593688964844 L 261.6916809082031 246.06004333496094 L 255.9364471435547 247.6038818359375 L 250.44468688964844 249.08738708496094 L 245.40951538085938 250.75033569335938 L 240.95150756835938 252.81419372558594 L 237.10960388183594 255.45492553710938 L 233.8418426513672 258.7799072265625 L 231.03521728515625 262.8117980957031 L 228.523193359375 267.4817199707031 L 226.10858154296875 272.6324157714844 L 223.58880615234375 278.03216552734375 L 220.78042602539062 283.39703369140625 L 217.53997802734375 288.42034912109375 L 213.7788543701172 292.8052062988281 L 209.4705810546875 296.297119140625 L 204.64990234375 298.7126770019531 L 199.40438842773438 299.9609069824219 L 193.85948181152344 300.0552673339844 L 188.15975952148438 299.1138610839844 L 182.44851684570312 297.34869384765625 L 176.84869384765625 295.0441589355469 L 171.44757080078125 292.52740478515625 L 166.28704833984375 290.1338195800781 L 161.3609619140625 288.1711730957031 L 156.6193084716797 286.8865966796875 L 151.9788055419922 286.44000244140625 L 147.3383026123047 286.8865966796875 L 142.59664916992188 288.1711730957031 L 137.67056274414062 290.1338195800781 L 132.5100555419922 292.52740478515625 L 127.10891723632812 295.0441589355469 L 121.50910186767578 297.34869384765625 L 115.79785919189453 299.1138610839844 L 110.09813690185547 300.0552673339844 L 104.55323028564453 299.9609069824219 L 99.30770111083984 298.7126770019531 L 94.4870376586914 296.297119140625 L 90.17874908447266 292.8052062988281 L 86.4176254272461 288.42034912109375 L 83.17718505859375 283.39703369140625 L 80.36880493164062 278.03216552734375 L 77.84903717041016 272.6324157714844 L 75.4344253540039 267.4817199707031 L 72.92239379882812 262.8117980957031 L 70.11576843261719 258.7799072265625 L 66.84801483154297 255.45492553710938 L 63.006107330322266 252.81419372558594 L 58.548091888427734 250.75033569335938 L 53.51293182373047 249.08738708496094 L 48.02117156982422 247.6038818359375 L 42.26592254638672 246.06004333496094 L 36.49488067626953 244.22593688964844 L 30.985197067260742 241.90699768066406 L 26.013839721679688 238.96444702148438 L 21.826839447021484 235.32797241210938 L 18.61089515686035 231 L 16.47072982788086 226.05091857910156 L 15.414958000183105 220.6066436767578 L 15.35230541229248 214.8300323486328 L 16.09889793395996 208.8990478515625 L 17.396028518676758 202.984130859375 L 18.936655044555664 197.22801208496094 L 20.39777374267578 191.73025512695312 L 21.47519874572754 186.5382080078125 L 21.91685676574707 181.64552307128906 L 21.550867080688477 176.9979705810547 L 20.305227279663086 172.50550842285156 L 18.216808319091797 168.0589599609375 L 15.428573608398438 163.54852294921875 L 12.175226211547852 158.88204956054688 L 8.758806228637695 154 L 5.516878128051758 148.88543701171875 L 2.7867932319641113 143.56747436523438 L 0.8699530959129333 138.11781311035156 L 0 132.64077758789062 L 0.31841254234313965 127.2581787109375 L 1.8601571321487427 122.09129333496094 L 4.550906181335449 117.24209594726562 L 8.216039657592773 112.77668762207031 L 12.600329399108887 108.71318817138672 L 17.396028518676758 105.01587677001953 L 22.276172637939453 101.59673309326172 L 26.929346084594727 98.32439422607422 L 31.09208869934082 95.03961181640625 L 34.575374603271484 91.57548522949219 L 37.28240203857422 87.77999877929688 L 39.215877532958984 83.53790283203125 L 40.47425079345703 78.78923034667969 L 41.237586975097656 73.54179382324219 L 41.744930267333984 67.8758544921875 L 42.26592254638672 61.93995666503906 L 43.070037841796875 55.93810272216797 L 44.39698791503906 50.10944747924805 L 46.43157958984375 44.70264434814453 L 49.28573226928711 39.94778823852539 L 52.9895133972168 36.02915573120117 L 57.49176788330078 33.06210708618164 L 62.67000961303711 31.076984405517578 L 68.34796905517578 30.012187957763672 L 74.3185043334961 29.717531204223633 L 80.36880493164062 29.96784210205078 L 86.30499267578125 30.485523223876953 L 91.97295379638672 30.969768524169922 L 97.2732162475586 31.129234313964844 L 102.16826629638672 30.71457862854004 L 106.68165588378906 29.547109603881836 L 110.88955688476562 27.540287017822266 L 114.90591430664062 24.711458206176758 L 118.8636474609375 21.182355880737305 L 122.894287109375 17.168109893798828 L 127.10891723632812 12.955833435058594 L 131.58282470703125 8.875022888183594 L 136.34591674804688 5.262959957122803 L 141.3799285888672 2.42891788482666 L 146.62269592285156 0.621101975440979 L 151.9788055419922 0 Z"})})})}),s.jsx("div",{className:"hero-decor flower anim-flower","aria-hidden":"true",children:s.jsx("img",{src:ye("assets/flowerSvg.svg"),alt:"",width:310,height:310})}),s.jsx("div",{className:"hero-decor clover anim-clover","aria-hidden":"true",children:s.jsx("img",{src:ye("assets/cloverSvg.svg"),alt:"",width:130,height:130})}),s.jsxs("div",{className:"hero-content",children:[s.jsxs("a",{href:n,target:"_blank",rel:"noopener noreferrer",className:"version-badge",title:`Открыть актуальный релиз ${t} на GitHub`,"aria-label":`Актуальная версия ${t}`,children:[s.jsx(A,{name:"check",size:18,color:"var(--accent-primary)"}),s.jsxs("span",{children:[t," — Актуальная версия"]})]}),s.jsx("h1",{className:"hero-title",children:"exDesktop"}),s.jsx("p",{className:"hero-description",children:"Модифицированный кросс-платформенный клиент для Windows, Linux и macOS на основе исходного кода Telegram"}),s.jsxs("div",{className:"hero-actions",children:[s.jsxs("a",{href:n||oe.download,target:"_blank",rel:"noopener noreferrer",className:"pill-button primary hero-download-btn",children:[s.jsx(A,{name:"download",size:22,color:"var(--text-on-accent)"}),s.jsx("span",{children:"Скачать exDesktop"})]}),s.jsxs("a",{href:"/wiki",onClick:i=>{i.preventDefault(),e("/wiki")},className:"pill-button secondary hero-learn-btn",children:[s.jsx("span",{children:"Узнать больше"}),s.jsx(A,{name:"arrow_right",size:22,color:"var(--text-primary)"})]})]})]}),s.jsxs("div",{className:"hero-portrait-wrapper",children:[s.jsxs("div",{className:"portrait-container",children:[s.jsx("div",{className:"sunny-ring anim-sunny","aria-hidden":"true",children:s.jsx("img",{src:ye("assets/sunnySvg.svg"),alt:"",width:348,height:348})}),s.jsx("div",{className:"avatar-cookie-container",children:s.jsx("div",{className:"avatar-border-line",children:s.jsx("img",{src:ye("avatar.jpg"),alt:"Аватар METAWKA, разработчика exDesktop",className:"avatar-image",width:304,height:300})})})]}),s.jsx("div",{className:"developer-signature",children:s.jsx("span",{children:"METAWKA — Разработчик"})})]}),s.jsx("style",{children:`
        .hero-section {
          background-color: var(--surface-soft);
          border-radius: 40px;
          min-height: 544px;
          width: 100%;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 44px 64px 44px 48px;
          margin-top: 24px;
        }

        /* Decorative background shapes */
        .hero-decor {
          position: absolute;
          pointer-events: none;
          z-index: 1;
        }

        .hero-decor.flower {
          top: -120px;
          right: 20px;
          opacity: 0.85;
        }

        .hero-decor.clover {
          bottom: -20px;
          right: 480px;
          opacity: 0.85;
        }

        /* Left Content */
        .hero-content {
          max-width: 600px;
          display: flex;
          flex-direction: column;
          z-index: 2;
        }

        .version-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: var(--badge-bg);
          color: var(--badge-text);
          font-size: 13px;
          font-weight: 500;
          line-height: 16px;
          padding: 6px 16px;
          border-radius: 16px;
          width: fit-content;
          margin-bottom: 20px;
          text-decoration: none;
          transition: background-color 150ms ease, transform 150ms ease, box-shadow 150ms ease;
          cursor: pointer;
        }

        .version-badge:hover {
          background-color: var(--surface-raised);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .hero-title {
          font-size: 108px;
          font-weight: 700;
          line-height: 1.05;
          letter-spacing: -0.04em;
          color: var(--text-primary);
          margin-bottom: 16px;
        }

        .hero-slogan {
          font-size: 29px;
          font-weight: 500;
          line-height: 1.25;
          color: var(--text-primary);
          margin-bottom: 16px;
        }

        .hero-description {
          font-size: 20px;
          font-weight: 400;
          line-height: 1.5;
          color: var(--text-secondary);
          max-width: 568px;
          margin-bottom: 36px;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .hero-download-btn {
          width: 244px;
        }

        .hero-learn-btn {
          width: 205px;
        }

        /* Portrait & Label */
        .hero-portrait-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .portrait-container {
          position: relative;
          width: 348px;
          height: 348px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sunny-ring {
          position: absolute;
          top: 0;
          left: 0;
          width: 348px;
          height: 348px;
          pointer-events: none;
        }

        .avatar-cookie-container {
          position: relative;
          width: 304px;
          height: 300px;
          clip-path: url(#avatar-cookie-mask);
          -webkit-clip-path: url(#avatar-cookie-mask);
          background-color: var(--surface-soft);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .avatar-border-line {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 6px solid var(--surface-soft);
          box-sizing: border-box;
          overflow: hidden;
        }

        .avatar-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .developer-signature {
          margin-top: 24px;
          width: 340px;
          height: 62px;
          background-color: var(--surface-card);
          border-radius: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-weight: 600;
          color: var(--text-primary);
        }

        /* Responsive */
        @media (max-width: 1199px) {
          .hero-section {
            flex-direction: column;
            padding: 40px 32px;
            align-items: center;
            text-align: center;
          }
          .hero-content {
            align-items: center;
            max-width: 100%;
            margin-bottom: 40px;
          }
          .hero-title {
            font-size: 76px;
          }
          .hero-description {
            max-width: 100%;
          }
          .hero-decor.clover {
            display: none;
          }
        }

        @media (max-width: 767px) {
          .hero-section {
            border-radius: 28px;
            padding: 28px 16px;
            margin-top: 16px;
          }
          .version-badge {
            font-size: 12px;
            padding: 6px 12px;
            margin-bottom: 16px;
            max-width: 100%;
          }
          .hero-title {
            font-size: clamp(38px, 11vw, 54px);
            word-break: break-word;
          }
          .hero-slogan {
            font-size: clamp(20px, 5.5vw, 24px);
            line-height: 1.25;
            margin-bottom: 12px;
          }
          .hero-description {
            font-size: clamp(15px, 4vw, 17px);
            line-height: 1.45;
            margin-bottom: 24px;
          }
          .hero-actions {
            flex-direction: column;
            width: 100%;
            gap: 10px;
          }
          .hero-download-btn,
          .hero-learn-btn {
            width: 100%;
            height: 48px;
            font-size: 15px;
          }
          .hero-decor.flower {
            transform: scale(0.55);
            top: -90px;
            right: -40px;
            opacity: 0.35;
          }
          .portrait-container {
            width: 348px;
            height: 348px;
            transform: scale(0.82);
            transform-origin: center center;
            margin: -24px auto -20px auto;
          }
          .developer-signature {
            width: 100%;
            max-width: 280px;
            height: 50px;
            font-size: 15px;
            margin-top: 4px;
            border-radius: 20px;
          }
        }

        @media (max-width: 380px) {
          .portrait-container {
            transform: scale(0.72);
            margin: -36px auto -30px auto;
          }
          .developer-signature {
            max-width: 240px;
            height: 44px;
            font-size: 14px;
          }
        }
      `})]})},Wp=()=>s.jsxs("section",{className:"preview-section",id:"preview",children:[s.jsx("div",{className:"section-header",children:s.jsx("h2",{className:"section-title",children:"Скриншоты exDesktop"})}),s.jsxs("div",{className:"preview-grid",children:[s.jsxs("a",{href:ye("screenshots/settings.webp"),target:"_blank",rel:"noopener noreferrer",className:"preview-card","aria-label":"Скриншот Настройки клиента (открыть оригинал в новой вкладке)",children:[s.jsx("div",{className:"preview-image-wrapper",children:s.jsx("img",{src:ye("screenshots/settings.webp"),alt:"Скриншот настроек exDesktop",className:"preview-image",loading:"lazy"})}),s.jsxs("div",{className:"preview-card-footer",children:[s.jsx("span",{className:"card-label",children:"Настройки клиента"}),s.jsx(A,{name:"arrow_external",size:20,color:"var(--text-secondary)"})]})]}),s.jsxs("a",{href:ye("screenshots/appearance.webp"),target:"_blank",rel:"noopener noreferrer",className:"preview-card","aria-label":"Скриншот Оформление под себя (открыть оригинал в новой вкладке)",children:[s.jsx("div",{className:"preview-image-wrapper",children:s.jsx("img",{src:ye("screenshots/appearance.webp"),alt:"Скриншот оформления exDesktop",className:"preview-image",loading:"lazy"})}),s.jsxs("div",{className:"preview-card-footer",children:[s.jsx("span",{className:"card-label",children:"Оформление под себя"}),s.jsx(A,{name:"arrow_external",size:20,color:"var(--text-secondary)"})]})]})]}),s.jsx("style",{children:`
        .preview-section {
          margin-top: 64px;
          width: 100%;
        }

        .section-header {
          margin-bottom: 24px;
        }

        .section-title {
          font-size: 32px;
          font-weight: 600;
          line-height: 1.25;
          color: var(--text-primary);
          margin-bottom: 8px;
        }

        .section-subtitle {
          font-size: 18px;
          font-weight: 400;
          color: var(--text-secondary);
        }

        .preview-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .preview-card {
          background-color: var(--surface-card);
          border-radius: 28px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          text-decoration: none;
          transition: transform 200ms ease, box-shadow 200ms ease;
        }

        .preview-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
        }

        .preview-image-wrapper {
          width: 100%;
          aspect-ratio: 2000 / 1228;
          overflow: hidden;
          background-color: rgba(0, 0, 0, 0.2);
        }

        .preview-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 250ms ease;
        }

        .preview-card:hover .preview-image {
          transform: scale(1.02);
        }

        .preview-card-footer {
          padding: 20px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .card-label {
          font-size: 21px;
          font-weight: 600;
          color: var(--text-primary);
        }

        @media (max-width: 1199px) {
          .preview-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }

        @media (max-width: 767px) {
          .preview-section {
            margin-top: 40px;
          }
          .section-title {
            font-size: 24px;
          }
          .preview-card {
            border-radius: 22px;
          }
          .preview-card-footer {
            padding: 16px 18px;
          }
          .card-label {
            font-size: 17px;
          }
        }
      `})]}),Gp=()=>s.jsxs("section",{className:"features-section",id:"features",children:[s.jsx("div",{className:"section-header",children:s.jsx("h2",{className:"section-title",children:"Функционал exDesktop"})}),s.jsx("div",{className:"features-grid",children:Up.map(e=>s.jsxs("div",{className:"feature-card",children:[s.jsx("div",{className:"feature-icon-tile",children:s.jsx(A,{name:e.iconName,size:24,color:"var(--accent-primary)"})}),s.jsx("h3",{className:"feature-title",children:e.title}),s.jsx("p",{className:"feature-desc",children:e.description})]},e.id))}),s.jsx("style",{children:`
        .features-section {
          margin-top: 64px;
          width: 100%;
        }

        .section-header {
          margin-bottom: 24px;
        }

        .section-title {
          font-size: 32px;
          font-weight: 600;
          line-height: 1.25;
          color: var(--text-primary);
          margin-bottom: 8px;
        }

        .section-subtitle {
          font-size: 18px;
          font-weight: 400;
          color: var(--text-secondary);
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .feature-card {
          background-color: var(--surface-card);
          border-radius: 28px;
          padding: 24px;
          min-height: 200px;
          display: flex;
          flex-direction: column;
          position: relative;
          transition: transform 150ms ease, background-color 150ms ease;
        }

        .feature-card:hover {
          transform: translateY(-2px);
          background-color: var(--surface-raised);
        }

        .feature-icon-tile {
          width: 44px;
          height: 44px;
          border-radius: 16px;
          background-color: var(--surface-soft);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }

        .feature-title {
          font-size: 21px;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 8px;
        }

        .feature-desc {
          font-size: 16px;
          line-height: 1.45;
          color: var(--text-secondary);
        }

        @media (max-width: 1199px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 767px) {
          .features-section {
            margin-top: 40px;
          }
          .features-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }
          .feature-card {
            border-radius: 22px;
            padding: 20px 18px;
            min-height: auto;
          }
          .section-title {
            font-size: 24px;
          }
          .feature-title {
            font-size: 19px;
          }
          .feature-desc {
            font-size: 15px;
          }
        }
      `})]}),Qp=()=>{const[e,t]=G.useState(!1),{version:n,releaseUrl:r}=Oo(),i=()=>{navigator.clipboard.writeText(Fp).then(()=>{t(!0),setTimeout(()=>t(!1),2e3)})};return s.jsxs("section",{className:"installation-section",id:"installation",children:[s.jsxs("div",{className:"install-grid",children:[s.jsxs("div",{className:"install-card",children:[s.jsxs("div",{className:"install-header",children:[s.jsx("h2",{className:"install-title",children:"Установить exDesktop"}),s.jsx("p",{className:"install-subtitle",children:"Для Linux / macOS выполни команду"})]}),s.jsxs("div",{className:"terminal-box",onClick:i,title:"Нажмите, чтобы скопировать команду",children:[s.jsxs("div",{className:"terminal-top",children:[s.jsx("span",{className:"terminal-label",children:"TERMINAL / LINUX · macOS"}),s.jsxs("button",{type:"button",className:"copy-btn","aria-label":"Скопировать команду установки",children:[s.jsx(A,{name:e?"check":"terminal",size:16,color:"var(--terminal-sub)"}),s.jsx("span",{children:e?"Скопировано!":"Копировать"})]})]}),s.jsx("pre",{className:"terminal-code",children:s.jsx("code",{children:bp})})]}),s.jsx("div",{className:"windows-link-wrapper",children:s.jsxs("a",{href:r||oe.download,target:"_blank",rel:"noopener noreferrer",className:"windows-link",title:`Скачать установщик версии ${n} с GitHub Releases`,children:[s.jsxs("span",{children:["На Windows? Скачай установщик (",n,") со страницы релизов"]}),s.jsx(A,{name:"arrow_external",size:18,color:"var(--accent-primary)"})]})})]}),s.jsxs("div",{className:"repository-card",children:[s.jsxs("div",{className:"repo-top",children:[s.jsx("div",{className:"repo-icon-tile",children:s.jsx(A,{name:"github",size:28,color:"var(--text-primary)"})}),s.jsx("a",{href:oe.github,target:"_blank",rel:"noopener noreferrer",className:"repo-out-link","aria-label":"Открыть GitHub репозиторий",children:s.jsx(A,{name:"arrow_external",size:24,color:"var(--repo-desc)"})})]}),s.jsxs("div",{className:"repo-text-group",children:[s.jsxs("h3",{className:"repo-title",children:["Открытый исходный код.",s.jsx("br",{}),"Лицензия GPL 3.0"]}),s.jsx("p",{className:"repo-desc",children:"Смотри, как всё устроено, предлагай идеи и участвуй в развитии."})]}),s.jsxs("a",{href:oe.github,target:"_blank",rel:"noopener noreferrer",className:"repo-action-btn",children:[s.jsx("span",{children:"metawka / exDesktop"}),s.jsx(A,{name:"arrow_right",size:20,color:"currentColor"})]})]})]}),s.jsx("style",{children:`
        .installation-section {
          margin-top: 64px;
          width: 100%;
        }

        .install-grid {
          display: grid;
          grid-template-columns: 858fr 430fr;
          gap: 24px;
        }

        /* Left Card */
        .install-card {
          background-color: var(--surface-card);
          border-radius: 32px;
          padding: 32px 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 352px;
          min-width: 0;
        }

        .install-title {
          font-size: 30px;
          font-weight: 600;
          line-height: 42px;
          color: var(--text-primary);
          margin-bottom: 6px;
        }

        .install-subtitle {
          font-size: 17px;
          color: var(--text-secondary);
        }

        .terminal-box {
          background-color: var(--terminal-bg);
          border-radius: 24px;
          padding: 16px 20px;
          margin: 20px 0 16px 0;
          cursor: pointer;
          transition: background-color 150ms ease, box-shadow 150ms ease;
          border: 1px solid rgba(255, 255, 255, 0.05);
          min-width: 0;
          max-width: 100%;
        }

        .terminal-box:hover {
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
        }

        .terminal-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 8px;
          flex-wrap: wrap;
          gap: 8px;
        }

        .terminal-label {
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.05em;
          color: var(--terminal-sub);
          font-family: var(--font-mono);
        }

        .copy-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: var(--terminal-sub);
          padding: 4px 8px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.05);
        }

        .terminal-code {
          font-family: var(--font-mono);
          font-size: 14px;
          line-height: 1.6;
          color: var(--terminal-command);
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          white-space: pre;
          margin: 0;
        }

        .windows-link-wrapper {
          display: flex;
          align-items: center;
        }

        .windows-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 15px;
          line-height: 1.4;
          color: var(--accent-primary);
          font-weight: 500;
          text-decoration: none;
          flex-wrap: wrap;
        }

        .windows-link:hover {
          text-decoration: underline;
        }

        /* Right Card */
        .repository-card {
          background-color: var(--surface-card);
          border-radius: 32px;
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 352px;
          position: relative;
          min-width: 0;
        }

        .repo-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .repo-icon-tile {
          width: 56px;
          height: 56px;
          border-radius: 20px;
          background-color: var(--surface-soft);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .repo-out-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
        }

        .repo-title {
          font-size: 29px;
          font-weight: 600;
          line-height: 33.35px;
          color: var(--repo-title);
          margin-bottom: 12px;
        }

        .repo-desc {
          font-size: 17px;
          line-height: 23.8px;
          color: var(--repo-desc);
        }

        .repo-action-btn {
          height: 48px;
          border-radius: 24px;
          background-color: var(--repo-btn-bg);
          color: var(--repo-btn-text);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          transition: transform 150ms ease, opacity 150ms ease;
        }

        .repo-action-btn:hover {
          transform: translateY(-2px);
          opacity: 0.95;
        }

        @media (max-width: 1199px) {
          .install-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 767px) {
          .installation-section {
            margin-top: 40px;
          }
          .install-card,
          .repository-card {
            border-radius: 22px;
            padding: 22px 18px;
            min-height: auto;
          }
          .install-title {
            font-size: 24px;
            line-height: 1.25;
          }
          .install-subtitle {
            font-size: 15px;
          }
          .terminal-box {
            border-radius: 18px;
            padding: 14px 16px;
            margin: 16px 0 14px 0;
          }
          .terminal-label {
            font-size: 11px;
          }
          .terminal-code {
            font-size: 12.5px;
            padding-bottom: 4px;
          }
          .windows-link {
            font-size: 13.5px;
          }
          .repo-title {
            font-size: 22px;
            line-height: 1.25;
          }
          .repo-desc {
            font-size: 15px;
            line-height: 1.45;
          }
        }
      `})]})},Kp=()=>s.jsxs("section",{className:"roadmap-section",id:"roadmap",children:[s.jsx("div",{className:"section-header",children:s.jsx("h2",{className:"section-title",children:"Roadmap"})}),s.jsx("div",{className:"rm-grid",children:Bp.map(e=>s.jsxs("div",{className:`rm-col rm-${e.status}`,children:[s.jsxs("div",{className:"rm-head",children:[s.jsx("span",{className:"rm-dot","aria-hidden":"true"}),s.jsx("span",{className:"rm-col-title",children:e.title}),s.jsx("span",{className:"rm-count",children:e.items.length})]}),s.jsx("ul",{className:"rm-list",children:e.items.map(t=>s.jsxs("li",{className:"rm-item",children:[s.jsx("div",{className:"rm-item-title",children:t.title}),t.text&&s.jsx("div",{className:"rm-item-text",children:t.text}),t.version&&s.jsx("span",{className:"rm-ver-badge",children:t.version})]},t.id))})]},e.id))}),s.jsx("style",{children:`
        .roadmap-section {
          margin-top: 64px;
          width: 100%;
        }

        .section-header {
          margin-bottom: 24px;
        }

        .section-title {
          font-size: 32px;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 8px;
        }

        .rm-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .rm-col {
          background-color: var(--surface-card);
          border: 1px solid var(--border-subtle);
          border-radius: 24px;
          padding: 24px 22px 16px;
          display: flex;
          flex-direction: column;
          min-width: 0;
          transition: border-color 200ms ease, background-color 200ms ease;
        }

        .rm-col:hover {
          background-color: var(--surface-raised);
          border-color: var(--accent-outline);
        }

        .rm-head {
          display: flex;
          align-items: center;
          gap: 10px;
          padding-bottom: 14px;
          border-bottom: 1px solid var(--border-subtle);
          font-weight: 600;
          font-size: 16px;
          color: var(--text-primary);
        }

        .rm-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          flex: none;
          background-color: var(--text-secondary);
        }

        .rm-progress .rm-dot {
          background-color: var(--accent-primary);
          box-shadow: 0 0 8px rgba(255, 180, 169, 0.4);
        }

        .rm-done .rm-dot {
          background-color: #4fb27a;
          box-shadow: 0 0 8px rgba(79, 178, 122, 0.4);
        }

        .rm-count {
          margin-left: auto;
          font-family: var(--font-mono);
          font-size: 13px;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .rm-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
        }

        .rm-item {
          padding: 16px 0;
          border-bottom: 1px solid var(--border-subtle);
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .rm-item:last-child {
          border-bottom: none;
        }

        .rm-item-title {
          font-weight: 500;
          font-size: 15px;
          line-height: 1.45;
          color: var(--text-primary);
          word-break: break-word;
        }

        .rm-item-text {
          color: var(--text-secondary);
          font-size: 13.5px;
          line-height: 1.5;
        }

        .rm-ver-badge {
          display: inline-block;
          align-self: flex-start;
          margin-top: 4px;
          font-family: var(--font-mono);
          font-size: 12px;
          padding: 3px 8px;
          border-radius: 6px;
          background-color: var(--surface-soft);
          color: var(--text-secondary);
        }

        .rm-progress .rm-ver-badge {
          background-color: var(--accent-container);
          color: var(--accent-primary);
        }

        .rm-done .rm-ver-badge {
          background-color: rgba(79, 178, 122, 0.15);
          color: #4fb27a;
        }

        @media (max-width: 1024px) {
          .rm-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }

        @media (max-width: 767px) {
          .roadmap-section {
            margin-top: 40px;
          }
          .section-title {
            font-size: 24px;
          }
          .rm-col {
            padding: 18px 16px 10px;
            border-radius: 20px;
          }
          .rm-item-title {
            font-size: 14.5px;
          }
          .rm-item-text {
            font-size: 13px;
          }
        }
      `})]}),qp=({onNavigate:e})=>s.jsxs("section",{className:"quick-wiki-section",id:"wiki",children:[s.jsxs("div",{className:"quick-wiki-grid",children:[s.jsxs("div",{className:"wiki-intro-card",children:[s.jsxs("div",{className:"intro-top",children:[s.jsx("div",{className:"wiki-icon-emblem",children:s.jsx(A,{name:"help",size:40,color:"var(--accent-primary)"})}),s.jsxs("h2",{className:"intro-headline",children:["Остались вопросы?",s.jsx("br",{}),"Хотите что-то узнать?"]})]}),s.jsxs("a",{href:oe.wiki,onClick:t=>{t.preventDefault(),e("/wiki")},className:"full-wiki-btn",children:[s.jsx("span",{children:"Открыть WIKI"}),s.jsx(A,{name:"arrow_right",size:22,color:"currentColor"})]})]}),s.jsxs("div",{className:"wiki-list-col",children:[s.jsxs("div",{className:"wiki-expanded-card",children:[s.jsxs("div",{className:"wiki-card-header",children:[s.jsx("h3",{className:"question-title",children:"Форматы плагинов и совместимость"}),s.jsx("div",{className:"wiki-chevron-down",children:s.jsx(A,{name:"arrow_down",size:24,color:"var(--text-secondary)"})})]}),s.jsxs("div",{className:"answer-content",children:[s.jsx("p",{children:"exDesktop запускает плагины exteraGram на компьютере. Движок плагинов совместим с SDK exteraGram 1.4.6.2: плагин из каталога устанавливается без изменений, а его функции работают в той мере, в которой у них есть аналог на ПК."}),s.jsx("p",{style:{marginTop:"8px"},children:"Поддерживаются форматы однофайловых плагинов (.plugin, .py) и архивы Elyx (.elyx, .eaf). Метаданные читаются безопасно из констант верхнего уровня без выполнения кода."})]})]}),s.jsxs("a",{href:"/wiki#что-работает-так-же-как-на-android",onClick:t=>{t.preventDefault(),e("/wiki#что-работает-так-же-как-на-android")},className:"wiki-link-row",children:[s.jsx("span",{className:"question-row-title",children:"Что работает так же, как на Android?"}),s.jsx("div",{className:"wiki-chevron-right",children:s.jsx(A,{name:"arrow_right",size:24,color:"var(--text-secondary)"})})]}),s.jsxs("a",{href:"/wiki#эмуляция-java-и-android",onClick:t=>{t.preventDefault(),e("/wiki#эмуляция-java-и-android")},className:"wiki-link-row",children:[s.jsx("span",{className:"question-row-title",children:"Эмуляция Java, Android и Xposed-хуки"}),s.jsx("div",{className:"wiki-chevron-right",children:s.jsx(A,{name:"arrow_right",size:24,color:"var(--text-secondary)"})})]}),s.jsxs("a",{href:"/wiki#защита",onClick:t=>{t.preventDefault(),e("/wiki#защита")},className:"wiki-link-row",children:[s.jsx("span",{className:"question-row-title",children:"Песочница, защита данных и PluginGuard"}),s.jsx("div",{className:"wiki-chevron-right",children:s.jsx(A,{name:"arrow_right",size:24,color:"var(--text-secondary)"})})]})]})]}),s.jsx("style",{children:`
        .quick-wiki-section {
          margin-top: 64px;
          width: 100%;
        }

        .quick-wiki-grid {
          display: grid;
          grid-template-columns: 430fr 858fr;
          gap: 24px;
        }

        /* Intro Card */
        .wiki-intro-card {
          background-color: var(--surface-card);
          border-radius: 32px;
          padding: 32px 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 468px;
          min-width: 0;
        }

        .wiki-icon-emblem {
          width: 64px;
          height: 64px;
          border-radius: 24px;
          background-color: var(--surface-soft);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }

        .intro-headline {
          font-size: 42px;
          font-weight: 600;
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: var(--text-primary);
        }

        .full-wiki-btn {
          height: 60px;
          border-radius: 30px;
          background-color: var(--accent-primary);
          color: var(--text-on-accent);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 24px;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          transition: transform 150ms ease, opacity 150ms ease;
        }

        .full-wiki-btn:hover {
          transform: translateY(-2px);
          opacity: 0.95;
        }

        /* Right Column */
        .wiki-list-col {
          display: flex;
          flex-direction: column;
          gap: 16px;
          min-width: 0;
        }

        .wiki-expanded-card {
          background-color: var(--surface-card);
          border-radius: 28px;
          padding: 28px;
          min-width: 0;
        }

        .wiki-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
          gap: 12px;
        }

        .question-title {
          font-size: 21px;
          font-weight: 600;
          color: var(--text-primary);
        }

        .answer-content {
          font-size: 17px;
          line-height: 1.55;
          color: var(--text-secondary);
        }

        .wiki-link-row {
          background-color: var(--surface-card);
          border-radius: 24px;
          padding: 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-decoration: none;
          transition: background-color 150ms ease, transform 150ms ease;
          min-height: 96px;
          min-width: 0;
          gap: 16px;
        }

        .wiki-link-row:hover {
          background-color: var(--surface-raised);
          transform: translateX(4px);
        }

        .question-row-title {
          font-size: 21px;
          font-weight: 500;
          color: var(--text-primary);
        }

        @media (max-width: 1199px) {
          .quick-wiki-grid {
            grid-template-columns: 1fr;
          }
          .wiki-intro-card {
            min-height: auto;
            gap: 24px;
          }
        }

        @media (max-width: 767px) {
          .quick-wiki-section {
            margin-top: 40px;
          }
          .wiki-intro-card {
            border-radius: 22px;
            padding: 22px 18px;
          }
          .intro-headline {
            font-size: clamp(24px, 6.5vw, 30px);
            line-height: 1.2;
          }
          .full-wiki-btn {
            height: 48px;
            border-radius: 24px;
            padding: 0 18px;
            font-size: 15px;
          }
          .question-title,
          .question-row-title {
            font-size: 16px;
            line-height: 1.35;
          }
          .answer-content {
            font-size: 14.5px;
            line-height: 1.5;
          }
          .wiki-expanded-card,
          .wiki-link-row {
            padding: 18px 16px;
            border-radius: 20px;
            min-height: auto;
          }
        }
      `})]}),Xp=({onNavigate:e})=>{var d;const[t,n]=G.useState(((d=Ve[0])==null?void 0:d.anchor)||"форматы-плагинов"),[r,i]=G.useState(!1),l=G.useRef(!1),o=G.useRef(null),a=G.useRef(null);G.useEffect(()=>{const h=window.location.hash.replace("#",""),m=h?decodeURIComponent(h):"";if(m){n(m);const w=document.getElementById(m);w&&w.scrollIntoView({behavior:"smooth"})}let g=!1;const y=()=>{if(l.current)return;if(window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-60){n(Ve[Ve.length-1].anchor);return}const w=180;let R=Ve[0].anchor;for(let p=0;p<Ve.length;p++){const c=Ve[p],f=document.getElementById(c.anchor);if(!f)continue;if(f.getBoundingClientRect().top<=w)R=c.anchor;else break}n(R)},k=()=>{g||(window.requestAnimationFrame(()=>{y(),g=!1}),g=!0)};return window.addEventListener("scroll",k,{passive:!0}),y(),()=>{window.removeEventListener("scroll",k),o.current&&clearTimeout(o.current)}},[]),G.useEffect(()=>{if(!a.current)return;const h=a.current,m=h.querySelector(".toc-item.active");if(m){const g=h.getBoundingClientRect(),y=m.getBoundingClientRect();(y.top<g.top+20||y.bottom>g.bottom-20)&&h.scrollTo({top:m.offsetTop-h.offsetTop-h.clientHeight/2+m.clientHeight/2,behavior:"smooth"})}},[t]);const u=(h,m)=>{h.preventDefault(),n(m),i(!1),window.history.pushState(null,"",`/wiki#${m}`),l.current=!0,o.current&&clearTimeout(o.current),o.current=window.setTimeout(()=>{l.current=!1},800);const g=document.getElementById(m);g&&g.scrollIntoView({behavior:"smooth"})};return s.jsxs("div",{className:"full-wiki-page",children:[s.jsxs("section",{className:"wiki-heading-zone",children:[s.jsxs("div",{className:"heading-left",children:[s.jsxs("a",{href:"/",onClick:h=>{h.preventDefault(),e("/")},className:"back-home-btn",children:[s.jsx(A,{name:"arrow_left",size:20,color:"var(--text-primary)"}),s.jsx("span",{children:"На главную"})]}),s.jsx("div",{className:"wiki-eyebrow",children:"ДОКУМЕНТАЦИЯ / WIKI"}),s.jsx("h1",{className:"wiki-page-title",children:"SDK плагинов exDesktop"}),s.jsx("p",{className:"wiki-lead-desc",children:"exDesktop запускает плагины exteraGram на компьютере. Совместимость с SDK 1.4.6.2, эмуляция Android, хуки, защита и особенности ПК."}),s.jsx("div",{className:"wiki-version-note",children:"Описание соответствует exDesktop 7.4.3.2."})]}),s.jsx("div",{className:"heading-right-emblem","aria-hidden":"true",children:s.jsx("img",{src:ye("assets/questionEmblemSvg.svg"),alt:"",width:148,height:148})})]}),s.jsxs("div",{className:"wiki-main-layout",children:[s.jsxs("aside",{className:"wiki-sidebar",ref:a,children:[s.jsxs("div",{className:"wiki-toc-card",children:[s.jsxs("button",{type:"button",className:"toc-header-toggle",onClick:()=>i(!r),"aria-expanded":r,children:[s.jsxs("span",{className:"toc-title",children:["РАЗДЕЛЫ WIKI (",Ve.length,")"]}),s.jsx("span",{className:`toc-toggle-indicator ${r?"open":""}`,"aria-hidden":"true",children:s.jsx(A,{name:"arrow_down",size:20,color:"var(--text-primary)"})})]}),s.jsx("nav",{className:`toc-list ${r?"mobile-open":""}`,"aria-label":"Оглавление WIKI",children:Ve.map(h=>s.jsxs("a",{href:`/wiki#${h.anchor}`,onClick:m=>u(m,h.anchor),className:`toc-item ${t===h.anchor?"active":""}`,children:[s.jsx("span",{className:"toc-num",children:h.number}),s.jsx("span",{className:"toc-label",children:h.title})]},h.id))})]}),s.jsxs("a",{href:oe.telegramChat,target:"_blank",rel:"noopener noreferrer",className:"community-hint-card desktop-only","aria-label":"Задать вопрос в Telegram Chat сообщества",children:[s.jsx("div",{className:"hint-icon",children:s.jsx(A,{name:"chat",size:28,color:"var(--accent-primary)"})}),s.jsx("h3",{className:"hint-heading",children:"Не нашёл ответ?"}),s.jsx("p",{className:"hint-body",children:"Загляни в чат сообщества. Вместе разберёмся."})]})]}),s.jsxs("main",{className:"wiki-articles-content",children:[Ve.map(h=>s.jsxs("article",{id:h.anchor,className:"wiki-article-section",children:[s.jsxs("div",{className:"article-header",children:[s.jsx("span",{className:"section-number",children:h.number}),s.jsx("h2",{className:"section-title",children:h.title})]}),s.jsx("div",{className:"questions-container",children:h.items.map(m=>s.jsxs("div",{className:"article-item",children:[m.question&&m.question!==h.title&&s.jsx("h3",{className:"item-question",children:m.question}),m.answer&&s.jsx("p",{className:"item-answer",children:m.answer}),m.code&&s.jsx("pre",{className:"code-block",children:s.jsx("code",{children:m.code})}),m.bullets&&m.bullets.length>0&&s.jsx("ul",{className:"item-bullets",children:m.bullets.map((g,y)=>s.jsx("li",{children:g},y))}),m.table&&s.jsx("div",{className:"table-container",children:s.jsxs("table",{className:"wiki-doc-table",children:[m.table.headers&&s.jsx("thead",{children:s.jsx("tr",{children:m.table.headers.map((g,y)=>s.jsx("th",{children:g},y))})}),s.jsx("tbody",{children:m.table.rows.map((g,y)=>s.jsx("tr",{children:g.map((k,w)=>s.jsx("td",{children:k},w))},y))})]})})]},m.id))})]},h.id)),s.jsxs("a",{href:oe.telegramChat,target:"_blank",rel:"noopener noreferrer",className:"community-hint-card mobile-only","aria-label":"Задать вопрос в Telegram Chat сообщества",children:[s.jsx("div",{className:"hint-icon",children:s.jsx(A,{name:"chat",size:28,color:"var(--accent-primary)"})}),s.jsx("h3",{className:"hint-heading",children:"Не нашёл ответ?"}),s.jsx("p",{className:"hint-body",children:"Загляни в чат сообщества. Вместе разберёмся."})]})]})]}),s.jsx("style",{children:`
        .full-wiki-page {
          width: 100%;
          margin-top: 24px;
          min-width: 0;
        }

        /* Heading Zone */
        .wiki-heading-zone {
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-height: 220px;
          padding: 16px 0 32px 0;
          position: relative;
        }

        .heading-left {
          max-width: 850px;
          min-width: 0;
        }

        .back-home-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          height: 44px;
          border-radius: 22px;
          padding: 0 20px;
          background-color: var(--surface-card);
          color: var(--text-primary);
          font-size: 15px;
          font-weight: 500;
          margin-bottom: 24px;
          transition: background-color 150ms ease, transform 150ms ease;
          border: 1px solid var(--border-subtle);
        }

        .back-home-btn:hover {
          background-color: var(--surface-raised);
          transform: translateX(-2px);
        }

        .wiki-eyebrow {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: var(--accent-primary);
          margin-bottom: 12px;
        }

        .wiki-page-title {
          font-size: clamp(34px, 5.5vw, 68px);
          font-weight: 600;
          line-height: 1.15;
          letter-spacing: -0.025em;
          color: var(--text-primary);
          margin-bottom: 8px;
          word-break: break-word;
        }

        .wiki-lead-desc {
          font-size: 17px;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-top: 12px;
          max-width: 780px;
        }

        .wiki-version-note {
          display: inline-block;
          margin-top: 14px;
          padding: 8px 14px;
          border-radius: 12px;
          background-color: var(--surface-card);
          border: 1px solid var(--border-subtle);
          font-size: 13.5px;
          color: var(--text-secondary);
          font-family: var(--font-mono);
          word-break: break-word;
        }

        .heading-right-emblem {
          transform: rotate(8deg);
          user-select: none;
          pointer-events: none;
          flex-shrink: 0;
        }

        /* Main Layout */
        .wiki-main-layout {
          display: grid;
          grid-template-columns: 340px 1fr;
          gap: 28px;
          margin-top: 24px;
          align-items: start;
          min-width: 0;
        }

        /* Sidebar */
        .wiki-sidebar {
          display: flex;
          flex-direction: column;
          gap: 16px;
          position: sticky;
          top: 96px;
          max-height: calc(100vh - 120px);
          overflow-y: auto;
          padding-right: 6px;
          min-width: 0;
        }

        .wiki-sidebar::-webkit-scrollbar {
          width: 6px;
        }

        .wiki-sidebar::-webkit-scrollbar-thumb {
          background-color: rgba(255, 255, 255, 0.15);
          border-radius: 3px;
        }

        .wiki-toc-card {
          background-color: var(--surface-soft);
          border-radius: 28px;
          padding: 20px 12px;
          border: 1px solid var(--border-subtle);
          min-width: 0;
        }

        .toc-header-toggle {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 12px;
          margin-bottom: 12px;
          cursor: default;
          text-align: left;
          background: none;
          border: none;
          font: inherit;
          color: inherit;
          outline: none;
          appearance: none;
          -webkit-appearance: none;
          -webkit-tap-highlight-color: transparent;
        }

        .toc-title {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: var(--text-secondary);
          display: block;
        }

        .toc-toggle-indicator {
          display: none;
          transition: transform 200ms ease;
        }

        .toc-toggle-indicator.open {
          transform: rotate(180deg);
        }

        .toc-list {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .toc-item {
          display: flex;
          align-items: center;
          gap: 12px;
          min-height: 48px;
          border-radius: 16px;
          padding: 10px 14px;
          font-size: 14.5px;
          font-weight: 500;
          line-height: 1.35;
          color: var(--text-secondary);
          text-decoration: none;
          transition: background-color 150ms ease, color 150ms ease;
          min-width: 0;
        }

        .toc-item:hover {
          background-color: rgba(255, 255, 255, 0.04);
          color: var(--text-primary);
        }

        .toc-item.active {
          background-color: var(--accent-container);
          color: var(--text-primary);
          font-weight: 600;
        }

        .toc-num {
          font-family: var(--font-mono);
          font-size: 13px;
          opacity: 0.75;
          flex-shrink: 0;
        }

        .toc-label {
          flex: 1;
          word-break: break-word;
        }

        /* Community Hint */
        .community-hint-card {
          background-color: var(--surface-card);
          border-radius: 28px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          text-decoration: none;
          border: 1px solid var(--border-subtle);
          transition: transform 150ms ease, background-color 150ms ease;
        }

        .community-hint-card:hover {
          transform: translateY(-2px);
          background-color: var(--surface-raised);
        }

        .community-hint-card.desktop-only {
          display: flex;
        }

        .community-hint-card.mobile-only {
          display: none;
        }

        .hint-icon {
          margin-bottom: 16px;
        }

        .hint-heading {
          font-size: 23px;
          font-weight: 600;
          line-height: 32.2px;
          color: var(--text-primary);
          margin-bottom: 8px;
        }

        .hint-body {
          font-size: 16px;
          line-height: 23px;
          color: var(--text-secondary);
        }

        /* Articles */
        .wiki-articles-content {
          display: flex;
          flex-direction: column;
          gap: 24px;
          min-width: 0;
        }

        .wiki-article-section {
          background-color: var(--surface-card);
          border-radius: 28px;
          padding: 32px 32px;
          scroll-margin-top: 84px;
          border: 1px solid var(--border-subtle);
          min-width: 0;
        }

        .article-header {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--border-subtle);
        }

        .section-number {
          font-family: var(--font-mono);
          font-size: 24px;
          font-weight: 600;
          color: var(--accent-primary);
          line-height: 1.3;
          flex-shrink: 0;
          padding-top: 1px;
        }

        .section-title {
          font-size: 26px;
          font-weight: 600;
          line-height: 1.3;
          color: var(--text-primary);
          word-break: break-word;
          overflow-wrap: break-word;
        }

        .questions-container {
          display: flex;
          flex-direction: column;
          gap: 24px;
          min-width: 0;
        }

        .article-item {
          display: flex;
          flex-direction: column;
          gap: 12px;
          min-width: 0;
        }

        .item-question {
          font-size: 20px;
          font-weight: 600;
          line-height: 28px;
          color: var(--text-primary);
          word-break: break-word;
        }

        .item-answer {
          font-size: 16px;
          line-height: 25px;
          color: var(--text-secondary);
          white-space: pre-line;
          word-break: break-word;
          overflow-wrap: break-word;
        }

        /* Code block */
        .code-block {
          background-color: var(--surface-soft);
          border-radius: 16px;
          padding: 16px 20px;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          font-family: var(--font-mono);
          font-size: 13.5px;
          line-height: 1.5;
          color: var(--text-primary);
          border: 1px solid var(--divider);
          margin-top: 4px;
          max-width: 100%;
          box-sizing: border-box;
        }

        .code-block code {
          font-family: inherit;
          white-space: pre;
        }

        /* Bullet lists */
        .item-bullets {
          margin: 4px 0 0 0;
          padding-left: 22px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          color: var(--text-secondary);
          font-size: 15px;
          line-height: 1.55;
          min-width: 0;
        }

        .item-bullets li {
          word-break: break-word;
          overflow-wrap: break-word;
        }

        /* Documentation tables */
        .table-container {
          width: 100%;
          max-width: 100%;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          border-radius: 16px;
          border: 1px solid var(--divider);
          margin-top: 8px;
          background-color: var(--surface-soft);
          box-sizing: border-box;
        }

        .wiki-doc-table {
          width: 100%;
          min-width: 520px;
          border-collapse: collapse;
          font-size: 14px;
          text-align: left;
        }

        .wiki-doc-table th {
          background-color: var(--surface-raised);
          padding: 12px 18px;
          font-weight: 600;
          color: var(--text-primary);
          border-bottom: 1px solid var(--divider);
          white-space: nowrap;
        }

        .wiki-doc-table td {
          padding: 14px 18px;
          color: var(--text-secondary);
          border-bottom: 1px solid var(--divider);
          vertical-align: top;
          line-height: 1.5;
          word-break: break-word;
        }

        .wiki-doc-table tr:last-child td {
          border-bottom: none;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1199px) {
          .wiki-main-layout {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .wiki-sidebar {
            position: static;
            max-height: none;
            overflow-y: visible;
            padding-right: 0;
          }

          .wiki-toc-card {
            padding: 12px 14px;
            border-radius: 22px;
          }

          .toc-header-toggle {
            cursor: pointer;
            padding: 10px 12px;
            margin-bottom: 0;
            border-radius: 14px;
            background-color: rgba(255, 255, 255, 0.03);
          }

          .toc-title {
            font-size: 13px;
            color: var(--text-primary);
          }

          .toc-toggle-indicator {
            display: flex;
            align-items: center;
          }

          .toc-list {
            display: none;
            margin-top: 10px;
            max-height: 380px;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
          }

          .toc-list.mobile-open {
            display: flex;
          }

          .community-hint-card.desktop-only {
            display: none !important;
          }

          .community-hint-card.mobile-only {
            display: flex !important;
            margin-top: 8px;
          }

          .wiki-heading-zone {
            flex-direction: column;
            align-items: flex-start;
            min-height: auto;
            padding: 12px 0 24px 0;
          }

          .heading-right-emblem {
            display: none;
          }
        }

        @media (max-width: 767px) {
          .full-wiki-page {
            margin-top: 12px;
          }

          .wiki-heading-zone {
            padding: 8px 0 20px 0;
          }

          .back-home-btn {
            height: 40px;
            padding: 0 16px;
            font-size: 14px;
            margin-bottom: 18px;
            border-radius: 20px;
          }

          .wiki-page-title {
            font-size: clamp(26px, 7.5vw, 36px);
            line-height: 1.2;
          }

          .wiki-lead-desc {
            font-size: 15px;
            line-height: 1.5;
            margin-top: 10px;
          }

          .wiki-version-note {
            font-size: 12px;
            padding: 6px 12px;
            margin-top: 10px;
          }

          .wiki-article-section {
            padding: 20px 16px;
            border-radius: 22px;
            scroll-margin-top: 76px;
          }

          .article-header {
            gap: 12px;
            margin-bottom: 16px;
            padding-bottom: 12px;
          }

          .section-number {
            font-size: 20px;
          }

          .section-title {
            font-size: 20px;
            line-height: 1.3;
          }

          .item-question {
            font-size: 17px;
            line-height: 1.35;
          }

          .item-answer {
            font-size: 14.5px;
            line-height: 1.55;
          }

          .code-block {
            padding: 12px 14px;
            font-size: 12.5px;
            border-radius: 12px;
          }

          .item-bullets {
            padding-left: 18px;
            font-size: 14px;
            gap: 8px;
          }

          .wiki-doc-table th,
          .wiki-doc-table td {
            padding: 10px 12px;
            font-size: 12.5px;
          }

          .community-hint-card {
            border-radius: 22px;
            padding: 20px 18px;
          }

          .hint-heading {
            font-size: 20px;
            line-height: 1.3;
          }

          .hint-body {
            font-size: 14.5px;
            line-height: 1.45;
          }
        }
      `})]})},Yp=()=>{const{version:e}=Oo(),t=[{label:"Telegram",url:oe.telegram,icon:"telegram"},{label:"Telegram Chat",url:oe.telegramChat,icon:"chat"},{label:"Changelog",url:oe.changelog,icon:"changelog"},{label:"Contact",url:oe.contact,icon:"mail"},{label:"Github",url:oe.github,icon:"github"},{label:"PluginSDK",url:oe.pluginSdk,icon:"code"}];return s.jsxs("footer",{className:"site-footer",children:[s.jsx("h2",{className:"footer-title",children:"Может быть интересно"}),s.jsx("div",{className:"footer-links-row",children:t.map(n=>s.jsxs("a",{href:n.url,target:"_blank",rel:"noopener noreferrer",className:"footer-pill-btn",children:[s.jsx(A,{name:n.icon,size:22,color:"currentColor"}),s.jsx("span",{children:n.label})]},n.label))}),s.jsx("div",{className:"footer-divider"}),s.jsxs("div",{className:"footer-bottom-info",children:[s.jsxs("span",{className:"copyright-text",children:["© 2026 exDesktop ",e?`v${e} `:"","· GPL-3.0"]}),s.jsx("span",{className:"disclaimer-text",children:"Неофициальный проект. Не связан с Telegram FZ-LLC."})]}),s.jsx("style",{children:`
        .site-footer {
          margin-top: 64px;
          background-color: var(--surface-soft);
          border-radius: 32px;
          padding: 28px 32px 32px 32px;
          width: 100%;
        }

        .footer-title {
          font-size: 29px;
          font-weight: 500;
          line-height: 40.6px;
          color: var(--text-primary);
          margin-bottom: 24px;
        }

        .footer-links-row {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 12px;
        }

        .footer-pill-btn {
          height: 52px;
          border-radius: 26px;
          background-color: var(--surface-raised);
          color: var(--text-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-size: 15px;
          font-weight: 500;
          text-decoration: none;
          transition: background-color 150ms ease, transform 150ms ease;
        }

        .footer-pill-btn:hover {
          background-color: var(--surface-card);
          transform: translateY(-2px);
        }

        .footer-divider {
          width: 100%;
          height: 1px;
          background-color: var(--divider);
          margin: 24px 0 20px 0;
        }

        .footer-bottom-info {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 13px;
          line-height: 18.2px;
          color: var(--text-secondary);
        }

        @media (max-width: 1199px) {
          .footer-links-row {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 767px) {
          .site-footer {
            margin-top: 40px;
            padding: 22px 18px;
            border-radius: 22px;
          }
          .footer-title {
            font-size: 22px;
            margin-bottom: 16px;
          }
          .footer-links-row {
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
          }
          .footer-pill-btn {
            font-size: 13.5px;
            height: 46px;
            padding: 0 10px;
            gap: 8px;
            min-width: 0;
            white-space: nowrap;
          }
          .footer-bottom-info {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
        }

        @media (max-width: 420px) {
          .footer-links-row {
            grid-template-columns: 1fr;
          }
        }
      `})]})},Jp=()=>{const[e,t]=G.useState(()=>{const d=localStorage.getItem("exdesktop_theme");return d==="dark"||d==="light"?d:window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}),[n,r]=G.useState(()=>{const d=window.location.pathname;if(d.startsWith("/faq")){const h=d.replace(/^\/faq/,"/wiki");return window.history.replaceState(null,"",h+window.location.hash),h}return d}),[i,l]=G.useState(!1);G.useEffect(()=>{document.documentElement.setAttribute("data-theme",e),localStorage.setItem("exdesktop_theme",e)},[e]),G.useEffect(()=>{const d=()=>{const h=window.location.pathname;if(h.startsWith("/faq")){const m=h.replace(/^\/faq/,"/wiki");window.history.replaceState(null,"",m+window.location.hash),r(m)}else r(h)};return window.addEventListener("popstate",d),()=>window.removeEventListener("popstate",d)},[]),G.useEffect(()=>{n.startsWith("/wiki")?document.title="WIKI — exDesktop":document.title="exDesktop — кастомный клиент Telegram"},[n]);const o=d=>{const h=d.startsWith("/faq")?d.replace(/^\/faq/,"/wiki"):d,[m,g]=h.split("#"),y=m===""?"/":m;if(y===n&&g){window.history.pushState(null,"",h);const w=document.getElementById(g);w&&w.scrollIntoView({behavior:"smooth"});return}window.history.pushState(null,"",h),r(y),g?setTimeout(()=>{const w=document.getElementById(g);w&&w.scrollIntoView({behavior:"smooth"})},50):window.scrollTo({top:0,behavior:"smooth"})},a=()=>{t(d=>d==="dark"?"light":"dark")},u=n.startsWith("/wiki");return s.jsxs("div",{className:"app-container",children:[s.jsx(Hp,{currentPath:n,theme:e,onToggleTheme:a,onOpenMobileMenu:()=>l(!0),onNavigate:o}),s.jsx(Vp,{isOpen:i,onClose:()=>l(!1),onNavigate:o}),u?s.jsx(Xp,{onNavigate:o}):s.jsxs("main",{children:[s.jsx($p,{onNavigate:o}),s.jsx(Wp,{}),s.jsx(Gp,{}),s.jsx(Qp,{}),s.jsx(Kp,{}),s.jsx(qp,{onNavigate:o})]}),s.jsx(Yp,{})]})},sc=document.getElementById("root");if(!sc)throw new Error("Failed to find root element");qi.createRoot(sc).render(s.jsx(Nc.StrictMode,{children:s.jsx(Jp,{})}));
