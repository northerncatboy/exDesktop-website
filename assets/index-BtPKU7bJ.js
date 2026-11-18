(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function pc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ya={exports:{}},oi={},Ja={exports:{}},T={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jn=Symbol.for("react.element"),fc=Symbol.for("react.portal"),mc=Symbol.for("react.fragment"),hc=Symbol.for("react.strict_mode"),gc=Symbol.for("react.profiler"),vc=Symbol.for("react.provider"),xc=Symbol.for("react.context"),yc=Symbol.for("react.forward_ref"),wc=Symbol.for("react.suspense"),kc=Symbol.for("react.memo"),_c=Symbol.for("react.lazy"),Ul=Symbol.iterator;function Sc(e){return e===null||typeof e!="object"?null:(e=Ul&&e[Ul]||e["@@iterator"],typeof e=="function"?e:null)}var Za={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},es=Object.assign,ts={};function sn(e,t,n){this.props=e,this.context=t,this.refs=ts,this.updater=n||Za}sn.prototype.isReactComponent={};sn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};sn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ns(){}ns.prototype=sn.prototype;function Wo(e,t,n){this.props=e,this.context=t,this.refs=ts,this.updater=n||Za}var $o=Wo.prototype=new ns;$o.constructor=Wo;es($o,sn.prototype);$o.isPureReactComponent=!0;var Bl=Array.isArray,rs=Object.prototype.hasOwnProperty,Go={current:null},is={key:!0,ref:!0,__self:!0,__source:!0};function os(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)rs.call(t,r)&&!is.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var u=Array(s),d=0;d<s;d++)u[d]=arguments[d+2];i.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Jn,type:e,key:o,ref:l,props:i,_owner:Go.current}}function Cc(e,t){return{$$typeof:Jn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function qo(e){return typeof e=="object"&&e!==null&&e.$$typeof===Jn}function Nc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Hl=/\/+/g;function Ci(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Nc(""+e.key):t.toString(36)}function Sr(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Jn:case fc:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Ci(l,0):r,Bl(i)?(n="",e!=null&&(n=e.replace(Hl,"$&/")+"/"),Sr(i,t,n,"",function(d){return d})):i!=null&&(qo(i)&&(i=Cc(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Hl,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Bl(e))for(var s=0;s<e.length;s++){o=e[s];var u=r+Ci(o,s);l+=Sr(o,t,n,u,i)}else if(u=Sc(e),typeof u=="function")for(e=u.call(e),s=0;!(o=e.next()).done;)o=o.value,u=r+Ci(o,s++),l+=Sr(o,t,n,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function or(e,t,n){if(e==null)return e;var r=[],i=0;return Sr(e,r,"","",function(o){return t.call(n,o,i++)}),r}function jc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var de={current:null},Cr={transition:null},Lc={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:Cr,ReactCurrentOwner:Go};function ls(){throw Error("act(...) is not supported in production builds of React.")}T.Children={map:or,forEach:function(e,t,n){or(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return or(e,function(){t++}),t},toArray:function(e){return or(e,function(t){return t})||[]},only:function(e){if(!qo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};T.Component=sn;T.Fragment=mc;T.Profiler=gc;T.PureComponent=Wo;T.StrictMode=hc;T.Suspense=wc;T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lc;T.act=ls;T.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=es({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=Go.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)rs.call(t,u)&&!is.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var d=0;d<u;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:Jn,type:e.type,key:i,ref:o,props:r,_owner:l}};T.createContext=function(e){return e={$$typeof:xc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:vc,_context:e},e.Consumer=e};T.createElement=os;T.createFactory=function(e){var t=os.bind(null,e);return t.type=e,t};T.createRef=function(){return{current:null}};T.forwardRef=function(e){return{$$typeof:yc,render:e}};T.isValidElement=qo;T.lazy=function(e){return{$$typeof:_c,_payload:{_status:-1,_result:e},_init:jc}};T.memo=function(e,t){return{$$typeof:kc,type:e,compare:t===void 0?null:t}};T.startTransition=function(e){var t=Cr.transition;Cr.transition={};try{e()}finally{Cr.transition=t}};T.unstable_act=ls;T.useCallback=function(e,t){return de.current.useCallback(e,t)};T.useContext=function(e){return de.current.useContext(e)};T.useDebugValue=function(){};T.useDeferredValue=function(e){return de.current.useDeferredValue(e)};T.useEffect=function(e,t){return de.current.useEffect(e,t)};T.useId=function(){return de.current.useId()};T.useImperativeHandle=function(e,t,n){return de.current.useImperativeHandle(e,t,n)};T.useInsertionEffect=function(e,t){return de.current.useInsertionEffect(e,t)};T.useLayoutEffect=function(e,t){return de.current.useLayoutEffect(e,t)};T.useMemo=function(e,t){return de.current.useMemo(e,t)};T.useReducer=function(e,t,n){return de.current.useReducer(e,t,n)};T.useRef=function(e){return de.current.useRef(e)};T.useState=function(e){return de.current.useState(e)};T.useSyncExternalStore=function(e,t,n){return de.current.useSyncExternalStore(e,t,n)};T.useTransition=function(){return de.current.useTransition()};T.version="18.3.1";Ja.exports=T;var U=Ja.exports;const Ec=pc(U);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pc=U,bc=Symbol.for("react.element"),Tc=Symbol.for("react.fragment"),Mc=Object.prototype.hasOwnProperty,zc=Pc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ac={key:!0,ref:!0,__self:!0,__source:!0};function as(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Mc.call(t,r)&&!Ac.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:bc,type:e,key:o,ref:l,props:i,_owner:zc.current}}oi.Fragment=Tc;oi.jsx=as;oi.jsxs=as;Ya.exports=oi;var a=Ya.exports,Xi={},ss={exports:{}},_e={},us={exports:{}},cs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,P){var b=C.length;C.push(P);e:for(;0<b;){var G=b-1>>>1,Y=C[G];if(0<i(Y,P))C[G]=P,C[b]=Y,b=G;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var P=C[0],b=C.pop();if(b!==P){C[0]=b;e:for(var G=0,Y=C.length,rr=Y>>>1;G<rr;){var yt=2*(G+1)-1,Si=C[yt],wt=yt+1,ir=C[wt];if(0>i(Si,b))wt<Y&&0>i(ir,Si)?(C[G]=ir,C[wt]=b,G=wt):(C[G]=Si,C[yt]=b,G=yt);else if(wt<Y&&0>i(ir,b))C[G]=ir,C[wt]=b,G=wt;else break e}}return P}function i(C,P){var b=C.sortIndex-P.sortIndex;return b!==0?b:C.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var u=[],d=[],v=1,x=null,h=3,m=!1,g=!1,y=!1,E=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(C){for(var P=n(d);P!==null;){if(P.callback===null)r(d);else if(P.startTime<=C)r(d),P.sortIndex=P.expirationTime,t(u,P);else break;P=n(d)}}function w(C){if(y=!1,f(C),!g)if(n(u)!==null)g=!0,ki(S);else{var P=n(d);P!==null&&_i(w,P.startTime-C)}}function S(C,P){g=!1,y&&(y=!1,p(L),L=-1),m=!0;var b=h;try{for(f(P),x=n(u);x!==null&&(!(x.expirationTime>P)||C&&!be());){var G=x.callback;if(typeof G=="function"){x.callback=null,h=x.priorityLevel;var Y=G(x.expirationTime<=P);P=e.unstable_now(),typeof Y=="function"?x.callback=Y:x===n(u)&&r(u),f(P)}else r(u);x=n(u)}if(x!==null)var rr=!0;else{var yt=n(d);yt!==null&&_i(w,yt.startTime-P),rr=!1}return rr}finally{x=null,h=b,m=!1}}var N=!1,j=null,L=-1,$=5,M=-1;function be(){return!(e.unstable_now()-M<$)}function dn(){if(j!==null){var C=e.unstable_now();M=C;var P=!0;try{P=j(!0,C)}finally{P?pn():(N=!1,j=null)}}else N=!1}var pn;if(typeof c=="function")pn=function(){c(dn)};else if(typeof MessageChannel<"u"){var Fl=new MessageChannel,dc=Fl.port2;Fl.port1.onmessage=dn,pn=function(){dc.postMessage(null)}}else pn=function(){E(dn,0)};function ki(C){j=C,N||(N=!0,pn())}function _i(C,P){L=E(function(){C(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){g||m||(g=!0,ki(S))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(C){switch(h){case 1:case 2:case 3:var P=3;break;default:P=h}var b=h;h=P;try{return C()}finally{h=b}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,P){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var b=h;h=C;try{return P()}finally{h=b}},e.unstable_scheduleCallback=function(C,P,b){var G=e.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?G+b:G):b=G,C){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=b+Y,C={id:v++,callback:P,priorityLevel:C,startTime:b,expirationTime:Y,sortIndex:-1},b>G?(C.sortIndex=b,t(d,C),n(u)===null&&C===n(d)&&(y?(p(L),L=-1):y=!0,_i(w,b-G))):(C.sortIndex=Y,t(u,C),g||m||(g=!0,ki(S))),C},e.unstable_shouldYield=be,e.unstable_wrapCallback=function(C){var P=h;return function(){var b=h;h=P;try{return C.apply(this,arguments)}finally{h=b}}}})(cs);us.exports=cs;var Dc=us.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ic=U,ke=Dc;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ds=new Set,Dn={};function zt(e,t){en(e,t),en(e+"Capture",t)}function en(e,t){for(Dn[e]=t,e=0;e<t.length;e++)ds.add(t[e])}var Ke=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yi=Object.prototype.hasOwnProperty,Rc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vl={},Wl={};function Oc(e){return Yi.call(Wl,e)?!0:Yi.call(Vl,e)?!1:Rc.test(e)?Wl[e]=!0:(Vl[e]=!0,!1)}function Fc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Uc(e,t,n,r){if(t===null||typeof t>"u"||Fc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function pe(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ne[t]=new pe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ko=/[\-:]([a-z])/g;function Qo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ko,Qo);ne[t]=new pe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ko,Qo);ne[t]=new pe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ko,Qo);ne[t]=new pe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new pe(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Xo(e,t,n,r){var i=ne.hasOwnProperty(t)?ne[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Uc(t,n,i,r)&&(n=null),r||i===null?Oc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Je=Ic.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,lr=Symbol.for("react.element"),It=Symbol.for("react.portal"),Rt=Symbol.for("react.fragment"),Yo=Symbol.for("react.strict_mode"),Ji=Symbol.for("react.profiler"),ps=Symbol.for("react.provider"),fs=Symbol.for("react.context"),Jo=Symbol.for("react.forward_ref"),Zi=Symbol.for("react.suspense"),eo=Symbol.for("react.suspense_list"),Zo=Symbol.for("react.memo"),et=Symbol.for("react.lazy"),ms=Symbol.for("react.offscreen"),$l=Symbol.iterator;function fn(e){return e===null||typeof e!="object"?null:(e=$l&&e[$l]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,Ni;function _n(e){if(Ni===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ni=t&&t[1]||""}return`
`+Ni+e}var ji=!1;function Li(e,t){if(!e||ji)return"";ji=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,s=o.length-1;1<=l&&0<=s&&i[l]!==o[s];)s--;for(;1<=l&&0<=s;l--,s--)if(i[l]!==o[s]){if(l!==1||s!==1)do if(l--,s--,0>s||i[l]!==o[s]){var u=`
`+i[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=s);break}}}finally{ji=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?_n(e):""}function Bc(e){switch(e.tag){case 5:return _n(e.type);case 16:return _n("Lazy");case 13:return _n("Suspense");case 19:return _n("SuspenseList");case 0:case 2:case 15:return e=Li(e.type,!1),e;case 11:return e=Li(e.type.render,!1),e;case 1:return e=Li(e.type,!0),e;default:return""}}function to(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Rt:return"Fragment";case It:return"Portal";case Ji:return"Profiler";case Yo:return"StrictMode";case Zi:return"Suspense";case eo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case fs:return(e.displayName||"Context")+".Consumer";case ps:return(e._context.displayName||"Context")+".Provider";case Jo:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Zo:return t=e.displayName||null,t!==null?t:to(e.type)||"Memo";case et:t=e._payload,e=e._init;try{return to(e(t))}catch{}}return null}function Hc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return to(t);case 8:return t===Yo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function mt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function hs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Vc(e){var t=hs(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ar(e){e._valueTracker||(e._valueTracker=Vc(e))}function gs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=hs(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Dr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function no(e,t){var n=t.checked;return V({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Gl(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=mt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function vs(e,t){t=t.checked,t!=null&&Xo(e,"checked",t,!1)}function ro(e,t){vs(e,t);var n=mt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?io(e,t.type,n):t.hasOwnProperty("defaultValue")&&io(e,t.type,mt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ql(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function io(e,t,n){(t!=="number"||Dr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Sn=Array.isArray;function Kt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+mt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function oo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return V({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Kl(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(Sn(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:mt(n)}}function xs(e,t){var n=mt(t.value),r=mt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ql(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ys(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ys(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var sr,ws=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(sr=sr||document.createElement("div"),sr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=sr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function In(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var jn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wc=["Webkit","ms","Moz","O"];Object.keys(jn).forEach(function(e){Wc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),jn[t]=jn[e]})});function ks(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||jn.hasOwnProperty(e)&&jn[e]?(""+t).trim():t+"px"}function _s(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ks(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var $c=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ao(e,t){if(t){if($c[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function so(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var uo=null;function el(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var co=null,Qt=null,Xt=null;function Xl(e){if(e=tr(e)){if(typeof co!="function")throw Error(k(280));var t=e.stateNode;t&&(t=ci(t),co(e.stateNode,e.type,t))}}function Ss(e){Qt?Xt?Xt.push(e):Xt=[e]:Qt=e}function Cs(){if(Qt){var e=Qt,t=Xt;if(Xt=Qt=null,Xl(e),t)for(e=0;e<t.length;e++)Xl(t[e])}}function Ns(e,t){return e(t)}function js(){}var Ei=!1;function Ls(e,t,n){if(Ei)return e(t,n);Ei=!0;try{return Ns(e,t,n)}finally{Ei=!1,(Qt!==null||Xt!==null)&&(js(),Cs())}}function Rn(e,t){var n=e.stateNode;if(n===null)return null;var r=ci(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var po=!1;if(Ke)try{var mn={};Object.defineProperty(mn,"passive",{get:function(){po=!0}}),window.addEventListener("test",mn,mn),window.removeEventListener("test",mn,mn)}catch{po=!1}function Gc(e,t,n,r,i,o,l,s,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(v){this.onError(v)}}var Ln=!1,Ir=null,Rr=!1,fo=null,qc={onError:function(e){Ln=!0,Ir=e}};function Kc(e,t,n,r,i,o,l,s,u){Ln=!1,Ir=null,Gc.apply(qc,arguments)}function Qc(e,t,n,r,i,o,l,s,u){if(Kc.apply(this,arguments),Ln){if(Ln){var d=Ir;Ln=!1,Ir=null}else throw Error(k(198));Rr||(Rr=!0,fo=d)}}function At(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Es(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Yl(e){if(At(e)!==e)throw Error(k(188))}function Xc(e){var t=e.alternate;if(!t){if(t=At(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Yl(i),e;if(o===r)return Yl(i),t;o=o.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function Ps(e){return e=Xc(e),e!==null?bs(e):null}function bs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=bs(e);if(t!==null)return t;e=e.sibling}return null}var Ts=ke.unstable_scheduleCallback,Jl=ke.unstable_cancelCallback,Yc=ke.unstable_shouldYield,Jc=ke.unstable_requestPaint,q=ke.unstable_now,Zc=ke.unstable_getCurrentPriorityLevel,tl=ke.unstable_ImmediatePriority,Ms=ke.unstable_UserBlockingPriority,Or=ke.unstable_NormalPriority,ed=ke.unstable_LowPriority,zs=ke.unstable_IdlePriority,li=null,Be=null;function td(e){if(Be&&typeof Be.onCommitFiberRoot=="function")try{Be.onCommitFiberRoot(li,e,void 0,(e.current.flags&128)===128)}catch{}}var De=Math.clz32?Math.clz32:id,nd=Math.log,rd=Math.LN2;function id(e){return e>>>=0,e===0?32:31-(nd(e)/rd|0)|0}var ur=64,cr=4194304;function Cn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Fr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~i;s!==0?r=Cn(s):(o&=l,o!==0&&(r=Cn(o)))}else l=n&~i,l!==0?r=Cn(l):o!==0&&(r=Cn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-De(t),i=1<<n,r|=e[n],t&=~i;return r}function od(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ld(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-De(o),s=1<<l,u=i[l];u===-1?(!(s&n)||s&r)&&(i[l]=od(s,t)):u<=t&&(e.expiredLanes|=s),o&=~s}}function mo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function As(){var e=ur;return ur<<=1,!(ur&4194240)&&(ur=64),e}function Pi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Zn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-De(t),e[t]=n}function ad(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-De(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function nl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-De(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var D=0;function Ds(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Is,rl,Rs,Os,Fs,ho=!1,dr=[],lt=null,at=null,st=null,On=new Map,Fn=new Map,nt=[],sd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zl(e,t){switch(e){case"focusin":case"focusout":lt=null;break;case"dragenter":case"dragleave":at=null;break;case"mouseover":case"mouseout":st=null;break;case"pointerover":case"pointerout":On.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fn.delete(t.pointerId)}}function hn(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=tr(t),t!==null&&rl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function ud(e,t,n,r,i){switch(t){case"focusin":return lt=hn(lt,e,t,n,r,i),!0;case"dragenter":return at=hn(at,e,t,n,r,i),!0;case"mouseover":return st=hn(st,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return On.set(o,hn(On.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Fn.set(o,hn(Fn.get(o)||null,e,t,n,r,i)),!0}return!1}function Us(e){var t=St(e.target);if(t!==null){var n=At(t);if(n!==null){if(t=n.tag,t===13){if(t=Es(n),t!==null){e.blockedOn=t,Fs(e.priority,function(){Rs(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Nr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=go(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);uo=r,n.target.dispatchEvent(r),uo=null}else return t=tr(n),t!==null&&rl(t),e.blockedOn=n,!1;t.shift()}return!0}function ea(e,t,n){Nr(e)&&n.delete(t)}function cd(){ho=!1,lt!==null&&Nr(lt)&&(lt=null),at!==null&&Nr(at)&&(at=null),st!==null&&Nr(st)&&(st=null),On.forEach(ea),Fn.forEach(ea)}function gn(e,t){e.blockedOn===t&&(e.blockedOn=null,ho||(ho=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,cd)))}function Un(e){function t(i){return gn(i,e)}if(0<dr.length){gn(dr[0],e);for(var n=1;n<dr.length;n++){var r=dr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(lt!==null&&gn(lt,e),at!==null&&gn(at,e),st!==null&&gn(st,e),On.forEach(t),Fn.forEach(t),n=0;n<nt.length;n++)r=nt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<nt.length&&(n=nt[0],n.blockedOn===null);)Us(n),n.blockedOn===null&&nt.shift()}var Yt=Je.ReactCurrentBatchConfig,Ur=!0;function dd(e,t,n,r){var i=D,o=Yt.transition;Yt.transition=null;try{D=1,il(e,t,n,r)}finally{D=i,Yt.transition=o}}function pd(e,t,n,r){var i=D,o=Yt.transition;Yt.transition=null;try{D=4,il(e,t,n,r)}finally{D=i,Yt.transition=o}}function il(e,t,n,r){if(Ur){var i=go(e,t,n,r);if(i===null)Fi(e,t,r,Br,n),Zl(e,r);else if(ud(i,e,t,n,r))r.stopPropagation();else if(Zl(e,r),t&4&&-1<sd.indexOf(e)){for(;i!==null;){var o=tr(i);if(o!==null&&Is(o),o=go(e,t,n,r),o===null&&Fi(e,t,r,Br,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Fi(e,t,r,null,n)}}var Br=null;function go(e,t,n,r){if(Br=null,e=el(r),e=St(e),e!==null)if(t=At(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Es(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Br=e,null}function Bs(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zc()){case tl:return 1;case Ms:return 4;case Or:case ed:return 16;case zs:return 536870912;default:return 16}default:return 16}}var it=null,ol=null,jr=null;function Hs(){if(jr)return jr;var e,t=ol,n=t.length,r,i="value"in it?it.value:it.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return jr=i.slice(e,1<r?1-r:void 0)}function Lr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function pr(){return!0}function ta(){return!1}function Se(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?pr:ta,this.isPropagationStopped=ta,this}return V(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=pr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=pr)},persist:function(){},isPersistent:pr}),t}var un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ll=Se(un),er=V({},un,{view:0,detail:0}),fd=Se(er),bi,Ti,vn,ai=V({},er,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:al,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vn&&(vn&&e.type==="mousemove"?(bi=e.screenX-vn.screenX,Ti=e.screenY-vn.screenY):Ti=bi=0,vn=e),bi)},movementY:function(e){return"movementY"in e?e.movementY:Ti}}),na=Se(ai),md=V({},ai,{dataTransfer:0}),hd=Se(md),gd=V({},er,{relatedTarget:0}),Mi=Se(gd),vd=V({},un,{animationName:0,elapsedTime:0,pseudoElement:0}),xd=Se(vd),yd=V({},un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),wd=Se(yd),kd=V({},un,{data:0}),ra=Se(kd),_d={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Cd[e])?!!t[e]:!1}function al(){return Nd}var jd=V({},er,{key:function(e){if(e.key){var t=_d[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Lr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Sd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:al,charCode:function(e){return e.type==="keypress"?Lr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Lr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ld=Se(jd),Ed=V({},ai,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ia=Se(Ed),Pd=V({},er,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:al}),bd=Se(Pd),Td=V({},un,{propertyName:0,elapsedTime:0,pseudoElement:0}),Md=Se(Td),zd=V({},ai,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ad=Se(zd),Dd=[9,13,27,32],sl=Ke&&"CompositionEvent"in window,En=null;Ke&&"documentMode"in document&&(En=document.documentMode);var Id=Ke&&"TextEvent"in window&&!En,Vs=Ke&&(!sl||En&&8<En&&11>=En),oa=" ",la=!1;function Ws(e,t){switch(e){case"keyup":return Dd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $s(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ot=!1;function Rd(e,t){switch(e){case"compositionend":return $s(t);case"keypress":return t.which!==32?null:(la=!0,oa);case"textInput":return e=t.data,e===oa&&la?null:e;default:return null}}function Od(e,t){if(Ot)return e==="compositionend"||!sl&&Ws(e,t)?(e=Hs(),jr=ol=it=null,Ot=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Vs&&t.locale!=="ko"?null:t.data;default:return null}}var Fd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function aa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Fd[e.type]:t==="textarea"}function Gs(e,t,n,r){Ss(r),t=Hr(t,"onChange"),0<t.length&&(n=new ll("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Pn=null,Bn=null;function Ud(e){ru(e,0)}function si(e){var t=Bt(e);if(gs(t))return e}function Bd(e,t){if(e==="change")return t}var qs=!1;if(Ke){var zi;if(Ke){var Ai="oninput"in document;if(!Ai){var sa=document.createElement("div");sa.setAttribute("oninput","return;"),Ai=typeof sa.oninput=="function"}zi=Ai}else zi=!1;qs=zi&&(!document.documentMode||9<document.documentMode)}function ua(){Pn&&(Pn.detachEvent("onpropertychange",Ks),Bn=Pn=null)}function Ks(e){if(e.propertyName==="value"&&si(Bn)){var t=[];Gs(t,Bn,e,el(e)),Ls(Ud,t)}}function Hd(e,t,n){e==="focusin"?(ua(),Pn=t,Bn=n,Pn.attachEvent("onpropertychange",Ks)):e==="focusout"&&ua()}function Vd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return si(Bn)}function Wd(e,t){if(e==="click")return si(t)}function $d(e,t){if(e==="input"||e==="change")return si(t)}function Gd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Re=typeof Object.is=="function"?Object.is:Gd;function Hn(e,t){if(Re(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Yi.call(t,i)||!Re(e[i],t[i]))return!1}return!0}function ca(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function da(e,t){var n=ca(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ca(n)}}function Qs(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Qs(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Xs(){for(var e=window,t=Dr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Dr(e.document)}return t}function ul(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function qd(e){var t=Xs(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Qs(n.ownerDocument.documentElement,n)){if(r!==null&&ul(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=da(n,o);var l=da(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Kd=Ke&&"documentMode"in document&&11>=document.documentMode,Ft=null,vo=null,bn=null,xo=!1;function pa(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xo||Ft==null||Ft!==Dr(r)||(r=Ft,"selectionStart"in r&&ul(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),bn&&Hn(bn,r)||(bn=r,r=Hr(vo,"onSelect"),0<r.length&&(t=new ll("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ft)))}function fr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ut={animationend:fr("Animation","AnimationEnd"),animationiteration:fr("Animation","AnimationIteration"),animationstart:fr("Animation","AnimationStart"),transitionend:fr("Transition","TransitionEnd")},Di={},Ys={};Ke&&(Ys=document.createElement("div").style,"AnimationEvent"in window||(delete Ut.animationend.animation,delete Ut.animationiteration.animation,delete Ut.animationstart.animation),"TransitionEvent"in window||delete Ut.transitionend.transition);function ui(e){if(Di[e])return Di[e];if(!Ut[e])return e;var t=Ut[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ys)return Di[e]=t[n];return e}var Js=ui("animationend"),Zs=ui("animationiteration"),eu=ui("animationstart"),tu=ui("transitionend"),nu=new Map,fa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gt(e,t){nu.set(e,t),zt(t,[e])}for(var Ii=0;Ii<fa.length;Ii++){var Ri=fa[Ii],Qd=Ri.toLowerCase(),Xd=Ri[0].toUpperCase()+Ri.slice(1);gt(Qd,"on"+Xd)}gt(Js,"onAnimationEnd");gt(Zs,"onAnimationIteration");gt(eu,"onAnimationStart");gt("dblclick","onDoubleClick");gt("focusin","onFocus");gt("focusout","onBlur");gt(tu,"onTransitionEnd");en("onMouseEnter",["mouseout","mouseover"]);en("onMouseLeave",["mouseout","mouseover"]);en("onPointerEnter",["pointerout","pointerover"]);en("onPointerLeave",["pointerout","pointerover"]);zt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zt("onBeforeInput",["compositionend","keypress","textInput","paste"]);zt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yd=new Set("cancel close invalid load scroll toggle".split(" ").concat(Nn));function ma(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Qc(r,t,void 0,e),e.currentTarget=null}function ru(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],u=s.instance,d=s.currentTarget;if(s=s.listener,u!==o&&i.isPropagationStopped())break e;ma(i,s,d),o=u}else for(l=0;l<r.length;l++){if(s=r[l],u=s.instance,d=s.currentTarget,s=s.listener,u!==o&&i.isPropagationStopped())break e;ma(i,s,d),o=u}}}if(Rr)throw e=fo,Rr=!1,fo=null,e}function R(e,t){var n=t[So];n===void 0&&(n=t[So]=new Set);var r=e+"__bubble";n.has(r)||(iu(t,e,2,!1),n.add(r))}function Oi(e,t,n){var r=0;t&&(r|=4),iu(n,e,r,t)}var mr="_reactListening"+Math.random().toString(36).slice(2);function Vn(e){if(!e[mr]){e[mr]=!0,ds.forEach(function(n){n!=="selectionchange"&&(Yd.has(n)||Oi(n,!1,e),Oi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[mr]||(t[mr]=!0,Oi("selectionchange",!1,t))}}function iu(e,t,n,r){switch(Bs(t)){case 1:var i=dd;break;case 4:i=pd;break;default:i=il}n=i.bind(null,t,n,e),i=void 0,!po||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Fi(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;l=l.return}for(;s!==null;){if(l=St(s),l===null)return;if(u=l.tag,u===5||u===6){r=o=l;continue e}s=s.parentNode}}r=r.return}Ls(function(){var d=o,v=el(n),x=[];e:{var h=nu.get(e);if(h!==void 0){var m=ll,g=e;switch(e){case"keypress":if(Lr(n)===0)break e;case"keydown":case"keyup":m=Ld;break;case"focusin":g="focus",m=Mi;break;case"focusout":g="blur",m=Mi;break;case"beforeblur":case"afterblur":m=Mi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=na;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=hd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=bd;break;case Js:case Zs:case eu:m=xd;break;case tu:m=Md;break;case"scroll":m=fd;break;case"wheel":m=Ad;break;case"copy":case"cut":case"paste":m=wd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=ia}var y=(t&4)!==0,E=!y&&e==="scroll",p=y?h!==null?h+"Capture":null:h;y=[];for(var c=d,f;c!==null;){f=c;var w=f.stateNode;if(f.tag===5&&w!==null&&(f=w,p!==null&&(w=Rn(c,p),w!=null&&y.push(Wn(c,w,f)))),E)break;c=c.return}0<y.length&&(h=new m(h,g,null,n,v),x.push({event:h,listeners:y}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",h&&n!==uo&&(g=n.relatedTarget||n.fromElement)&&(St(g)||g[Qe]))break e;if((m||h)&&(h=v.window===v?v:(h=v.ownerDocument)?h.defaultView||h.parentWindow:window,m?(g=n.relatedTarget||n.toElement,m=d,g=g?St(g):null,g!==null&&(E=At(g),g!==E||g.tag!==5&&g.tag!==6)&&(g=null)):(m=null,g=d),m!==g)){if(y=na,w="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(y=ia,w="onPointerLeave",p="onPointerEnter",c="pointer"),E=m==null?h:Bt(m),f=g==null?h:Bt(g),h=new y(w,c+"leave",m,n,v),h.target=E,h.relatedTarget=f,w=null,St(v)===d&&(y=new y(p,c+"enter",g,n,v),y.target=f,y.relatedTarget=E,w=y),E=w,m&&g)t:{for(y=m,p=g,c=0,f=y;f;f=Dt(f))c++;for(f=0,w=p;w;w=Dt(w))f++;for(;0<c-f;)y=Dt(y),c--;for(;0<f-c;)p=Dt(p),f--;for(;c--;){if(y===p||p!==null&&y===p.alternate)break t;y=Dt(y),p=Dt(p)}y=null}else y=null;m!==null&&ha(x,h,m,y,!1),g!==null&&E!==null&&ha(x,E,g,y,!0)}}e:{if(h=d?Bt(d):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var S=Bd;else if(aa(h))if(qs)S=$d;else{S=Vd;var N=Hd}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=Wd);if(S&&(S=S(e,d))){Gs(x,S,n,v);break e}N&&N(e,h,d),e==="focusout"&&(N=h._wrapperState)&&N.controlled&&h.type==="number"&&io(h,"number",h.value)}switch(N=d?Bt(d):window,e){case"focusin":(aa(N)||N.contentEditable==="true")&&(Ft=N,vo=d,bn=null);break;case"focusout":bn=vo=Ft=null;break;case"mousedown":xo=!0;break;case"contextmenu":case"mouseup":case"dragend":xo=!1,pa(x,n,v);break;case"selectionchange":if(Kd)break;case"keydown":case"keyup":pa(x,n,v)}var j;if(sl)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Ot?Ws(e,n)&&(L="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(Vs&&n.locale!=="ko"&&(Ot||L!=="onCompositionStart"?L==="onCompositionEnd"&&Ot&&(j=Hs()):(it=v,ol="value"in it?it.value:it.textContent,Ot=!0)),N=Hr(d,L),0<N.length&&(L=new ra(L,e,null,n,v),x.push({event:L,listeners:N}),j?L.data=j:(j=$s(n),j!==null&&(L.data=j)))),(j=Id?Rd(e,n):Od(e,n))&&(d=Hr(d,"onBeforeInput"),0<d.length&&(v=new ra("onBeforeInput","beforeinput",null,n,v),x.push({event:v,listeners:d}),v.data=j))}ru(x,t)})}function Wn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Hr(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Rn(e,n),o!=null&&r.unshift(Wn(e,o,i)),o=Rn(e,t),o!=null&&r.push(Wn(e,o,i))),e=e.return}return r}function Dt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ha(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var s=n,u=s.alternate,d=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&d!==null&&(s=d,i?(u=Rn(n,o),u!=null&&l.unshift(Wn(n,u,s))):i||(u=Rn(n,o),u!=null&&l.push(Wn(n,u,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Jd=/\r\n?/g,Zd=/\u0000|\uFFFD/g;function ga(e){return(typeof e=="string"?e:""+e).replace(Jd,`
`).replace(Zd,"")}function hr(e,t,n){if(t=ga(t),ga(e)!==t&&n)throw Error(k(425))}function Vr(){}var yo=null,wo=null;function ko(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _o=typeof setTimeout=="function"?setTimeout:void 0,ep=typeof clearTimeout=="function"?clearTimeout:void 0,va=typeof Promise=="function"?Promise:void 0,tp=typeof queueMicrotask=="function"?queueMicrotask:typeof va<"u"?function(e){return va.resolve(null).then(e).catch(np)}:_o;function np(e){setTimeout(function(){throw e})}function Ui(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Un(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Un(t)}function ut(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function xa(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var cn=Math.random().toString(36).slice(2),Ue="__reactFiber$"+cn,$n="__reactProps$"+cn,Qe="__reactContainer$"+cn,So="__reactEvents$"+cn,rp="__reactListeners$"+cn,ip="__reactHandles$"+cn;function St(e){var t=e[Ue];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Qe]||n[Ue]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=xa(e);e!==null;){if(n=e[Ue])return n;e=xa(e)}return t}e=n,n=e.parentNode}return null}function tr(e){return e=e[Ue]||e[Qe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Bt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function ci(e){return e[$n]||null}var Co=[],Ht=-1;function vt(e){return{current:e}}function O(e){0>Ht||(e.current=Co[Ht],Co[Ht]=null,Ht--)}function I(e,t){Ht++,Co[Ht]=e.current,e.current=t}var ht={},ae=vt(ht),he=vt(!1),Et=ht;function tn(e,t){var n=e.type.contextTypes;if(!n)return ht;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ge(e){return e=e.childContextTypes,e!=null}function Wr(){O(he),O(ae)}function ya(e,t,n){if(ae.current!==ht)throw Error(k(168));I(ae,t),I(he,n)}function ou(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(k(108,Hc(e)||"Unknown",i));return V({},n,r)}function $r(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ht,Et=ae.current,I(ae,e),I(he,he.current),!0}function wa(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=ou(e,t,Et),r.__reactInternalMemoizedMergedChildContext=e,O(he),O(ae),I(ae,e)):O(he),I(he,n)}var We=null,di=!1,Bi=!1;function lu(e){We===null?We=[e]:We.push(e)}function op(e){di=!0,lu(e)}function xt(){if(!Bi&&We!==null){Bi=!0;var e=0,t=D;try{var n=We;for(D=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}We=null,di=!1}catch(i){throw We!==null&&(We=We.slice(e+1)),Ts(tl,xt),i}finally{D=t,Bi=!1}}return null}var Vt=[],Wt=0,Gr=null,qr=0,Ce=[],Ne=0,Pt=null,$e=1,Ge="";function kt(e,t){Vt[Wt++]=qr,Vt[Wt++]=Gr,Gr=e,qr=t}function au(e,t,n){Ce[Ne++]=$e,Ce[Ne++]=Ge,Ce[Ne++]=Pt,Pt=e;var r=$e;e=Ge;var i=32-De(r)-1;r&=~(1<<i),n+=1;var o=32-De(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,$e=1<<32-De(t)+i|n<<i|r,Ge=o+e}else $e=1<<o|n<<i|r,Ge=e}function cl(e){e.return!==null&&(kt(e,1),au(e,1,0))}function dl(e){for(;e===Gr;)Gr=Vt[--Wt],Vt[Wt]=null,qr=Vt[--Wt],Vt[Wt]=null;for(;e===Pt;)Pt=Ce[--Ne],Ce[Ne]=null,Ge=Ce[--Ne],Ce[Ne]=null,$e=Ce[--Ne],Ce[Ne]=null}var we=null,ye=null,F=!1,Ae=null;function su(e,t){var n=je(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ka(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,we=e,ye=ut(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,we=e,ye=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Pt!==null?{id:$e,overflow:Ge}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=je(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,we=e,ye=null,!0):!1;default:return!1}}function No(e){return(e.mode&1)!==0&&(e.flags&128)===0}function jo(e){if(F){var t=ye;if(t){var n=t;if(!ka(e,t)){if(No(e))throw Error(k(418));t=ut(n.nextSibling);var r=we;t&&ka(e,t)?su(r,n):(e.flags=e.flags&-4097|2,F=!1,we=e)}}else{if(No(e))throw Error(k(418));e.flags=e.flags&-4097|2,F=!1,we=e}}}function _a(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;we=e}function gr(e){if(e!==we)return!1;if(!F)return _a(e),F=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ko(e.type,e.memoizedProps)),t&&(t=ye)){if(No(e))throw uu(),Error(k(418));for(;t;)su(e,t),t=ut(t.nextSibling)}if(_a(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ye=ut(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ye=null}}else ye=we?ut(e.stateNode.nextSibling):null;return!0}function uu(){for(var e=ye;e;)e=ut(e.nextSibling)}function nn(){ye=we=null,F=!1}function pl(e){Ae===null?Ae=[e]:Ae.push(e)}var lp=Je.ReactCurrentBatchConfig;function xn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var s=i.refs;l===null?delete s[o]:s[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function vr(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Sa(e){var t=e._init;return t(e._payload)}function cu(e){function t(p,c){if(e){var f=p.deletions;f===null?(p.deletions=[c],p.flags|=16):f.push(c)}}function n(p,c){if(!e)return null;for(;c!==null;)t(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function i(p,c){return p=ft(p,c),p.index=0,p.sibling=null,p}function o(p,c,f){return p.index=f,e?(f=p.alternate,f!==null?(f=f.index,f<c?(p.flags|=2,c):f):(p.flags|=2,c)):(p.flags|=1048576,c)}function l(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,c,f,w){return c===null||c.tag!==6?(c=Ki(f,p.mode,w),c.return=p,c):(c=i(c,f),c.return=p,c)}function u(p,c,f,w){var S=f.type;return S===Rt?v(p,c,f.props.children,w,f.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===et&&Sa(S)===c.type)?(w=i(c,f.props),w.ref=xn(p,c,f),w.return=p,w):(w=Ar(f.type,f.key,f.props,null,p.mode,w),w.ref=xn(p,c,f),w.return=p,w)}function d(p,c,f,w){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=Qi(f,p.mode,w),c.return=p,c):(c=i(c,f.children||[]),c.return=p,c)}function v(p,c,f,w,S){return c===null||c.tag!==7?(c=Lt(f,p.mode,w,S),c.return=p,c):(c=i(c,f),c.return=p,c)}function x(p,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Ki(""+c,p.mode,f),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case lr:return f=Ar(c.type,c.key,c.props,null,p.mode,f),f.ref=xn(p,null,c),f.return=p,f;case It:return c=Qi(c,p.mode,f),c.return=p,c;case et:var w=c._init;return x(p,w(c._payload),f)}if(Sn(c)||fn(c))return c=Lt(c,p.mode,f,null),c.return=p,c;vr(p,c)}return null}function h(p,c,f,w){var S=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return S!==null?null:s(p,c,""+f,w);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case lr:return f.key===S?u(p,c,f,w):null;case It:return f.key===S?d(p,c,f,w):null;case et:return S=f._init,h(p,c,S(f._payload),w)}if(Sn(f)||fn(f))return S!==null?null:v(p,c,f,w,null);vr(p,f)}return null}function m(p,c,f,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(f)||null,s(c,p,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case lr:return p=p.get(w.key===null?f:w.key)||null,u(c,p,w,S);case It:return p=p.get(w.key===null?f:w.key)||null,d(c,p,w,S);case et:var N=w._init;return m(p,c,f,N(w._payload),S)}if(Sn(w)||fn(w))return p=p.get(f)||null,v(c,p,w,S,null);vr(c,w)}return null}function g(p,c,f,w){for(var S=null,N=null,j=c,L=c=0,$=null;j!==null&&L<f.length;L++){j.index>L?($=j,j=null):$=j.sibling;var M=h(p,j,f[L],w);if(M===null){j===null&&(j=$);break}e&&j&&M.alternate===null&&t(p,j),c=o(M,c,L),N===null?S=M:N.sibling=M,N=M,j=$}if(L===f.length)return n(p,j),F&&kt(p,L),S;if(j===null){for(;L<f.length;L++)j=x(p,f[L],w),j!==null&&(c=o(j,c,L),N===null?S=j:N.sibling=j,N=j);return F&&kt(p,L),S}for(j=r(p,j);L<f.length;L++)$=m(j,p,L,f[L],w),$!==null&&(e&&$.alternate!==null&&j.delete($.key===null?L:$.key),c=o($,c,L),N===null?S=$:N.sibling=$,N=$);return e&&j.forEach(function(be){return t(p,be)}),F&&kt(p,L),S}function y(p,c,f,w){var S=fn(f);if(typeof S!="function")throw Error(k(150));if(f=S.call(f),f==null)throw Error(k(151));for(var N=S=null,j=c,L=c=0,$=null,M=f.next();j!==null&&!M.done;L++,M=f.next()){j.index>L?($=j,j=null):$=j.sibling;var be=h(p,j,M.value,w);if(be===null){j===null&&(j=$);break}e&&j&&be.alternate===null&&t(p,j),c=o(be,c,L),N===null?S=be:N.sibling=be,N=be,j=$}if(M.done)return n(p,j),F&&kt(p,L),S;if(j===null){for(;!M.done;L++,M=f.next())M=x(p,M.value,w),M!==null&&(c=o(M,c,L),N===null?S=M:N.sibling=M,N=M);return F&&kt(p,L),S}for(j=r(p,j);!M.done;L++,M=f.next())M=m(j,p,L,M.value,w),M!==null&&(e&&M.alternate!==null&&j.delete(M.key===null?L:M.key),c=o(M,c,L),N===null?S=M:N.sibling=M,N=M);return e&&j.forEach(function(dn){return t(p,dn)}),F&&kt(p,L),S}function E(p,c,f,w){if(typeof f=="object"&&f!==null&&f.type===Rt&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case lr:e:{for(var S=f.key,N=c;N!==null;){if(N.key===S){if(S=f.type,S===Rt){if(N.tag===7){n(p,N.sibling),c=i(N,f.props.children),c.return=p,p=c;break e}}else if(N.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===et&&Sa(S)===N.type){n(p,N.sibling),c=i(N,f.props),c.ref=xn(p,N,f),c.return=p,p=c;break e}n(p,N);break}else t(p,N);N=N.sibling}f.type===Rt?(c=Lt(f.props.children,p.mode,w,f.key),c.return=p,p=c):(w=Ar(f.type,f.key,f.props,null,p.mode,w),w.ref=xn(p,c,f),w.return=p,p=w)}return l(p);case It:e:{for(N=f.key;c!==null;){if(c.key===N)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){n(p,c.sibling),c=i(c,f.children||[]),c.return=p,p=c;break e}else{n(p,c);break}else t(p,c);c=c.sibling}c=Qi(f,p.mode,w),c.return=p,p=c}return l(p);case et:return N=f._init,E(p,c,N(f._payload),w)}if(Sn(f))return g(p,c,f,w);if(fn(f))return y(p,c,f,w);vr(p,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(n(p,c.sibling),c=i(c,f),c.return=p,p=c):(n(p,c),c=Ki(f,p.mode,w),c.return=p,p=c),l(p)):n(p,c)}return E}var rn=cu(!0),du=cu(!1),Kr=vt(null),Qr=null,$t=null,fl=null;function ml(){fl=$t=Qr=null}function hl(e){var t=Kr.current;O(Kr),e._currentValue=t}function Lo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Jt(e,t){Qr=e,fl=$t=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(me=!0),e.firstContext=null)}function Ee(e){var t=e._currentValue;if(fl!==e)if(e={context:e,memoizedValue:t,next:null},$t===null){if(Qr===null)throw Error(k(308));$t=e,Qr.dependencies={lanes:0,firstContext:e}}else $t=$t.next=e;return t}var Ct=null;function gl(e){Ct===null?Ct=[e]:Ct.push(e)}function pu(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,gl(t)):(n.next=i.next,i.next=n),t.interleaved=n,Xe(e,r)}function Xe(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var tt=!1;function vl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function qe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ct(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,A&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Xe(e,n)}return i=r.interleaved,i===null?(t.next=t,gl(r)):(t.next=i.next,i.next=t),r.interleaved=t,Xe(e,n)}function Er(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,nl(e,n)}}function Ca(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Xr(e,t,n,r){var i=e.updateQueue;tt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var u=s,d=u.next;u.next=null,l===null?o=d:l.next=d,l=u;var v=e.alternate;v!==null&&(v=v.updateQueue,s=v.lastBaseUpdate,s!==l&&(s===null?v.firstBaseUpdate=d:s.next=d,v.lastBaseUpdate=u))}if(o!==null){var x=i.baseState;l=0,v=d=u=null,s=o;do{var h=s.lane,m=s.eventTime;if((r&h)===h){v!==null&&(v=v.next={eventTime:m,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=e,y=s;switch(h=t,m=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){x=g.call(m,x,h);break e}x=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,h=typeof g=="function"?g.call(m,x,h):g,h==null)break e;x=V({},x,h);break e;case 2:tt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[s]:h.push(s))}else m={eventTime:m,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},v===null?(d=v=m,u=x):v=v.next=m,l|=h;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;h=s,s=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(v===null&&(u=x),i.baseState=u,i.firstBaseUpdate=d,i.lastBaseUpdate=v,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Tt|=l,e.lanes=l,e.memoizedState=x}}function Na(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var nr={},He=vt(nr),Gn=vt(nr),qn=vt(nr);function Nt(e){if(e===nr)throw Error(k(174));return e}function xl(e,t){switch(I(qn,t),I(Gn,e),I(He,nr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:lo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=lo(t,e)}O(He),I(He,t)}function on(){O(He),O(Gn),O(qn)}function mu(e){Nt(qn.current);var t=Nt(He.current),n=lo(t,e.type);t!==n&&(I(Gn,e),I(He,n))}function yl(e){Gn.current===e&&(O(He),O(Gn))}var B=vt(0);function Yr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Hi=[];function wl(){for(var e=0;e<Hi.length;e++)Hi[e]._workInProgressVersionPrimary=null;Hi.length=0}var Pr=Je.ReactCurrentDispatcher,Vi=Je.ReactCurrentBatchConfig,bt=0,H=null,Q=null,J=null,Jr=!1,Tn=!1,Kn=0,ap=0;function re(){throw Error(k(321))}function kl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Re(e[n],t[n]))return!1;return!0}function _l(e,t,n,r,i,o){if(bt=o,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Pr.current=e===null||e.memoizedState===null?dp:pp,e=n(r,i),Tn){o=0;do{if(Tn=!1,Kn=0,25<=o)throw Error(k(301));o+=1,J=Q=null,t.updateQueue=null,Pr.current=fp,e=n(r,i)}while(Tn)}if(Pr.current=Zr,t=Q!==null&&Q.next!==null,bt=0,J=Q=H=null,Jr=!1,t)throw Error(k(300));return e}function Sl(){var e=Kn!==0;return Kn=0,e}function Fe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?H.memoizedState=J=e:J=J.next=e,J}function Pe(){if(Q===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=Q.next;var t=J===null?H.memoizedState:J.next;if(t!==null)J=t,Q=e;else{if(e===null)throw Error(k(310));Q=e,e={memoizedState:Q.memoizedState,baseState:Q.baseState,baseQueue:Q.baseQueue,queue:Q.queue,next:null},J===null?H.memoizedState=J=e:J=J.next=e}return J}function Qn(e,t){return typeof t=="function"?t(e):t}function Wi(e){var t=Pe(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=Q,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=l=null,u=null,d=o;do{var v=d.lane;if((bt&v)===v)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var x={lane:v,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(s=u=x,l=r):u=u.next=x,H.lanes|=v,Tt|=v}d=d.next}while(d!==null&&d!==o);u===null?l=r:u.next=s,Re(r,t.memoizedState)||(me=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,H.lanes|=o,Tt|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function $i(e){var t=Pe(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Re(o,t.memoizedState)||(me=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function hu(){}function gu(e,t){var n=H,r=Pe(),i=t(),o=!Re(r.memoizedState,i);if(o&&(r.memoizedState=i,me=!0),r=r.queue,Cl(yu.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||J!==null&&J.memoizedState.tag&1){if(n.flags|=2048,Xn(9,xu.bind(null,n,r,i,t),void 0,null),Z===null)throw Error(k(349));bt&30||vu(n,t,i)}return i}function vu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function xu(e,t,n,r){t.value=n,t.getSnapshot=r,wu(t)&&ku(e)}function yu(e,t,n){return n(function(){wu(t)&&ku(e)})}function wu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Re(e,n)}catch{return!0}}function ku(e){var t=Xe(e,1);t!==null&&Ie(t,e,1,-1)}function ja(e){var t=Fe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qn,lastRenderedState:e},t.queue=e,e=e.dispatch=cp.bind(null,H,e),[t.memoizedState,e]}function Xn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function _u(){return Pe().memoizedState}function br(e,t,n,r){var i=Fe();H.flags|=e,i.memoizedState=Xn(1|t,n,void 0,r===void 0?null:r)}function pi(e,t,n,r){var i=Pe();r=r===void 0?null:r;var o=void 0;if(Q!==null){var l=Q.memoizedState;if(o=l.destroy,r!==null&&kl(r,l.deps)){i.memoizedState=Xn(t,n,o,r);return}}H.flags|=e,i.memoizedState=Xn(1|t,n,o,r)}function La(e,t){return br(8390656,8,e,t)}function Cl(e,t){return pi(2048,8,e,t)}function Su(e,t){return pi(4,2,e,t)}function Cu(e,t){return pi(4,4,e,t)}function Nu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ju(e,t,n){return n=n!=null?n.concat([e]):null,pi(4,4,Nu.bind(null,t,e),n)}function Nl(){}function Lu(e,t){var n=Pe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&kl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Eu(e,t){var n=Pe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&kl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Pu(e,t,n){return bt&21?(Re(n,t)||(n=As(),H.lanes|=n,Tt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,me=!0),e.memoizedState=n)}function sp(e,t){var n=D;D=n!==0&&4>n?n:4,e(!0);var r=Vi.transition;Vi.transition={};try{e(!1),t()}finally{D=n,Vi.transition=r}}function bu(){return Pe().memoizedState}function up(e,t,n){var r=pt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Tu(e))Mu(t,n);else if(n=pu(e,t,n,r),n!==null){var i=ce();Ie(n,e,r,i),zu(n,t,r)}}function cp(e,t,n){var r=pt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Tu(e))Mu(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,s=o(l,n);if(i.hasEagerState=!0,i.eagerState=s,Re(s,l)){var u=t.interleaved;u===null?(i.next=i,gl(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=pu(e,t,i,r),n!==null&&(i=ce(),Ie(n,e,r,i),zu(n,t,r))}}function Tu(e){var t=e.alternate;return e===H||t!==null&&t===H}function Mu(e,t){Tn=Jr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function zu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,nl(e,n)}}var Zr={readContext:Ee,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},dp={readContext:Ee,useCallback:function(e,t){return Fe().memoizedState=[e,t===void 0?null:t],e},useContext:Ee,useEffect:La,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,br(4194308,4,Nu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return br(4194308,4,e,t)},useInsertionEffect:function(e,t){return br(4,2,e,t)},useMemo:function(e,t){var n=Fe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Fe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=up.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=Fe();return e={current:e},t.memoizedState=e},useState:ja,useDebugValue:Nl,useDeferredValue:function(e){return Fe().memoizedState=e},useTransition:function(){var e=ja(!1),t=e[0];return e=sp.bind(null,e[1]),Fe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=H,i=Fe();if(F){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),Z===null)throw Error(k(349));bt&30||vu(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,La(yu.bind(null,r,o,e),[e]),r.flags|=2048,Xn(9,xu.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Fe(),t=Z.identifierPrefix;if(F){var n=Ge,r=$e;n=(r&~(1<<32-De(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Kn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ap++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},pp={readContext:Ee,useCallback:Lu,useContext:Ee,useEffect:Cl,useImperativeHandle:ju,useInsertionEffect:Su,useLayoutEffect:Cu,useMemo:Eu,useReducer:Wi,useRef:_u,useState:function(){return Wi(Qn)},useDebugValue:Nl,useDeferredValue:function(e){var t=Pe();return Pu(t,Q.memoizedState,e)},useTransition:function(){var e=Wi(Qn)[0],t=Pe().memoizedState;return[e,t]},useMutableSource:hu,useSyncExternalStore:gu,useId:bu,unstable_isNewReconciler:!1},fp={readContext:Ee,useCallback:Lu,useContext:Ee,useEffect:Cl,useImperativeHandle:ju,useInsertionEffect:Su,useLayoutEffect:Cu,useMemo:Eu,useReducer:$i,useRef:_u,useState:function(){return $i(Qn)},useDebugValue:Nl,useDeferredValue:function(e){var t=Pe();return Q===null?t.memoizedState=e:Pu(t,Q.memoizedState,e)},useTransition:function(){var e=$i(Qn)[0],t=Pe().memoizedState;return[e,t]},useMutableSource:hu,useSyncExternalStore:gu,useId:bu,unstable_isNewReconciler:!1};function Me(e,t){if(e&&e.defaultProps){t=V({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Eo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:V({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var fi={isMounted:function(e){return(e=e._reactInternals)?At(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ce(),i=pt(e),o=qe(r,i);o.payload=t,n!=null&&(o.callback=n),t=ct(e,o,i),t!==null&&(Ie(t,e,i,r),Er(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ce(),i=pt(e),o=qe(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=ct(e,o,i),t!==null&&(Ie(t,e,i,r),Er(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ce(),r=pt(e),i=qe(n,r);i.tag=2,t!=null&&(i.callback=t),t=ct(e,i,r),t!==null&&(Ie(t,e,r,n),Er(t,e,r))}};function Ea(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Hn(n,r)||!Hn(i,o):!0}function Au(e,t,n){var r=!1,i=ht,o=t.contextType;return typeof o=="object"&&o!==null?o=Ee(o):(i=ge(t)?Et:ae.current,r=t.contextTypes,o=(r=r!=null)?tn(e,i):ht),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=fi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Pa(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&fi.enqueueReplaceState(t,t.state,null)}function Po(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},vl(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ee(o):(o=ge(t)?Et:ae.current,i.context=tn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Eo(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&fi.enqueueReplaceState(i,i.state,null),Xr(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ln(e,t){try{var n="",r=t;do n+=Bc(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Gi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function bo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var mp=typeof WeakMap=="function"?WeakMap:Map;function Du(e,t,n){n=qe(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ti||(ti=!0,Uo=r),bo(e,t)},n}function Iu(e,t,n){n=qe(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){bo(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){bo(e,t),typeof r!="function"&&(dt===null?dt=new Set([this]):dt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function ba(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new mp;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Ep.bind(null,e,t,n),t.then(e,e))}function Ta(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ma(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=qe(-1,1),t.tag=2,ct(n,t,1))),n.lanes|=1),e)}var hp=Je.ReactCurrentOwner,me=!1;function se(e,t,n,r){t.child=e===null?du(t,null,n,r):rn(t,e.child,n,r)}function za(e,t,n,r,i){n=n.render;var o=t.ref;return Jt(t,i),r=_l(e,t,n,r,o,i),n=Sl(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ye(e,t,i)):(F&&n&&cl(t),t.flags|=1,se(e,t,r,i),t.child)}function Aa(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!zl(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Ru(e,t,o,r,i)):(e=Ar(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Hn,n(l,r)&&e.ref===t.ref)return Ye(e,t,i)}return t.flags|=1,e=ft(o,r),e.ref=t.ref,e.return=t,t.child=e}function Ru(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Hn(o,r)&&e.ref===t.ref)if(me=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(me=!0);else return t.lanes=e.lanes,Ye(e,t,i)}return To(e,t,n,r,i)}function Ou(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},I(qt,xe),xe|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,I(qt,xe),xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,I(qt,xe),xe|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,I(qt,xe),xe|=r;return se(e,t,i,n),t.child}function Fu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function To(e,t,n,r,i){var o=ge(n)?Et:ae.current;return o=tn(t,o),Jt(t,i),n=_l(e,t,n,r,o,i),r=Sl(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ye(e,t,i)):(F&&r&&cl(t),t.flags|=1,se(e,t,n,i),t.child)}function Da(e,t,n,r,i){if(ge(n)){var o=!0;$r(t)}else o=!1;if(Jt(t,i),t.stateNode===null)Tr(e,t),Au(t,n,r),Po(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var u=l.context,d=n.contextType;typeof d=="object"&&d!==null?d=Ee(d):(d=ge(n)?Et:ae.current,d=tn(t,d));var v=n.getDerivedStateFromProps,x=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function";x||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||u!==d)&&Pa(t,l,r,d),tt=!1;var h=t.memoizedState;l.state=h,Xr(t,r,l,i),u=t.memoizedState,s!==r||h!==u||he.current||tt?(typeof v=="function"&&(Eo(t,n,v,r),u=t.memoizedState),(s=tt||Ea(t,n,s,r,h,u,d))?(x||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=d,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,fu(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:Me(t.type,s),l.props=d,x=t.pendingProps,h=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ee(u):(u=ge(n)?Et:ae.current,u=tn(t,u));var m=n.getDerivedStateFromProps;(v=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==x||h!==u)&&Pa(t,l,r,u),tt=!1,h=t.memoizedState,l.state=h,Xr(t,r,l,i);var g=t.memoizedState;s!==x||h!==g||he.current||tt?(typeof m=="function"&&(Eo(t,n,m,r),g=t.memoizedState),(d=tt||Ea(t,n,d,r,h,g,u)||!1)?(v||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,g,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,g,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),l.props=r,l.state=g,l.context=u,r=d):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Mo(e,t,n,r,o,i)}function Mo(e,t,n,r,i,o){Fu(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&wa(t,n,!1),Ye(e,t,o);r=t.stateNode,hp.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=rn(t,e.child,null,o),t.child=rn(t,null,s,o)):se(e,t,s,o),t.memoizedState=r.state,i&&wa(t,n,!0),t.child}function Uu(e){var t=e.stateNode;t.pendingContext?ya(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ya(e,t.context,!1),xl(e,t.containerInfo)}function Ia(e,t,n,r,i){return nn(),pl(i),t.flags|=256,se(e,t,n,r),t.child}var zo={dehydrated:null,treeContext:null,retryLane:0};function Ao(e){return{baseLanes:e,cachePool:null,transitions:null}}function Bu(e,t,n){var r=t.pendingProps,i=B.current,o=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),I(B,i&1),e===null)return jo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=gi(l,r,0,null),e=Lt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ao(n),t.memoizedState=zo,e):jl(t,l));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return gp(e,t,l,r,s,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,s=i.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=ft(i,u),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=ft(s,o):(o=Lt(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?Ao(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=zo,r}return o=e.child,e=o.sibling,r=ft(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function jl(e,t){return t=gi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function xr(e,t,n,r){return r!==null&&pl(r),rn(t,e.child,null,n),e=jl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function gp(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=Gi(Error(k(422))),xr(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=gi({mode:"visible",children:r.children},i,0,null),o=Lt(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&rn(t,e.child,null,l),t.child.memoizedState=Ao(l),t.memoizedState=zo,o);if(!(t.mode&1))return xr(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(k(419)),r=Gi(o,r,void 0),xr(e,t,l,r)}if(s=(l&e.childLanes)!==0,me||s){if(r=Z,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Xe(e,i),Ie(r,e,i,-1))}return Ml(),r=Gi(Error(k(421))),xr(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Pp.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ye=ut(i.nextSibling),we=t,F=!0,Ae=null,e!==null&&(Ce[Ne++]=$e,Ce[Ne++]=Ge,Ce[Ne++]=Pt,$e=e.id,Ge=e.overflow,Pt=t),t=jl(t,r.children),t.flags|=4096,t)}function Ra(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Lo(e.return,t,n)}function qi(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Hu(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(se(e,t,r.children,n),r=B.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ra(e,n,t);else if(e.tag===19)Ra(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(I(B,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Yr(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),qi(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Yr(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}qi(t,!0,n,null,o);break;case"together":qi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Tr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ye(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Tt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=ft(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ft(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function vp(e,t,n){switch(t.tag){case 3:Uu(t),nn();break;case 5:mu(t);break;case 1:ge(t.type)&&$r(t);break;case 4:xl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;I(Kr,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(I(B,B.current&1),t.flags|=128,null):n&t.child.childLanes?Bu(e,t,n):(I(B,B.current&1),e=Ye(e,t,n),e!==null?e.sibling:null);I(B,B.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Hu(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),I(B,B.current),r)break;return null;case 22:case 23:return t.lanes=0,Ou(e,t,n)}return Ye(e,t,n)}var Vu,Do,Wu,$u;Vu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Do=function(){};Wu=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Nt(He.current);var o=null;switch(n){case"input":i=no(e,i),r=no(e,r),o=[];break;case"select":i=V({},i,{value:void 0}),r=V({},r,{value:void 0}),o=[];break;case"textarea":i=oo(e,i),r=oo(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Vr)}ao(n,r);var l;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var s=i[d];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Dn.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var u=r[d];if(s=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&u!==s&&(u!=null||s!=null))if(d==="style")if(s){for(l in s)!s.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&s[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(o||(o=[]),o.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(o=o||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Dn.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&R("scroll",e),o||s===u||(o=[])):(o=o||[]).push(d,u))}n&&(o=o||[]).push("style",n);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};$u=function(e,t,n,r){n!==r&&(t.flags|=4)};function yn(e,t){if(!F)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function xp(e,t,n){var r=t.pendingProps;switch(dl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(t),null;case 1:return ge(t.type)&&Wr(),ie(t),null;case 3:return r=t.stateNode,on(),O(he),O(ae),wl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(gr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ae!==null&&(Vo(Ae),Ae=null))),Do(e,t),ie(t),null;case 5:yl(t);var i=Nt(qn.current);if(n=t.type,e!==null&&t.stateNode!=null)Wu(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return ie(t),null}if(e=Nt(He.current),gr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ue]=t,r[$n]=o,e=(t.mode&1)!==0,n){case"dialog":R("cancel",r),R("close",r);break;case"iframe":case"object":case"embed":R("load",r);break;case"video":case"audio":for(i=0;i<Nn.length;i++)R(Nn[i],r);break;case"source":R("error",r);break;case"img":case"image":case"link":R("error",r),R("load",r);break;case"details":R("toggle",r);break;case"input":Gl(r,o),R("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},R("invalid",r);break;case"textarea":Kl(r,o),R("invalid",r)}ao(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var s=o[l];l==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&hr(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&hr(r.textContent,s,e),i=["children",""+s]):Dn.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&R("scroll",r)}switch(n){case"input":ar(r),ql(r,o,!0);break;case"textarea":ar(r),Ql(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Vr)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ys(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Ue]=t,e[$n]=r,Vu(e,t,!1,!1),t.stateNode=e;e:{switch(l=so(n,r),n){case"dialog":R("cancel",e),R("close",e),i=r;break;case"iframe":case"object":case"embed":R("load",e),i=r;break;case"video":case"audio":for(i=0;i<Nn.length;i++)R(Nn[i],e);i=r;break;case"source":R("error",e),i=r;break;case"img":case"image":case"link":R("error",e),R("load",e),i=r;break;case"details":R("toggle",e),i=r;break;case"input":Gl(e,r),i=no(e,r),R("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=V({},r,{value:void 0}),R("invalid",e);break;case"textarea":Kl(e,r),i=oo(e,r),R("invalid",e);break;default:i=r}ao(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var u=s[o];o==="style"?_s(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&ws(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&In(e,u):typeof u=="number"&&In(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Dn.hasOwnProperty(o)?u!=null&&o==="onScroll"&&R("scroll",e):u!=null&&Xo(e,o,u,l))}switch(n){case"input":ar(e),ql(e,r,!1);break;case"textarea":ar(e),Ql(e);break;case"option":r.value!=null&&e.setAttribute("value",""+mt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Kt(e,!!r.multiple,o,!1):r.defaultValue!=null&&Kt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Vr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ie(t),null;case 6:if(e&&t.stateNode!=null)$u(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=Nt(qn.current),Nt(He.current),gr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ue]=t,(o=r.nodeValue!==n)&&(e=we,e!==null))switch(e.tag){case 3:hr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&hr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ue]=t,t.stateNode=r}return ie(t),null;case 13:if(O(B),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(F&&ye!==null&&t.mode&1&&!(t.flags&128))uu(),nn(),t.flags|=98560,o=!1;else if(o=gr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(k(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(k(317));o[Ue]=t}else nn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ie(t),o=!1}else Ae!==null&&(Vo(Ae),Ae=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||B.current&1?X===0&&(X=3):Ml())),t.updateQueue!==null&&(t.flags|=4),ie(t),null);case 4:return on(),Do(e,t),e===null&&Vn(t.stateNode.containerInfo),ie(t),null;case 10:return hl(t.type._context),ie(t),null;case 17:return ge(t.type)&&Wr(),ie(t),null;case 19:if(O(B),o=t.memoizedState,o===null)return ie(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)yn(o,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Yr(e),l!==null){for(t.flags|=128,yn(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return I(B,B.current&1|2),t.child}e=e.sibling}o.tail!==null&&q()>an&&(t.flags|=128,r=!0,yn(o,!1),t.lanes=4194304)}else{if(!r)if(e=Yr(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),yn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!F)return ie(t),null}else 2*q()-o.renderingStartTime>an&&n!==1073741824&&(t.flags|=128,r=!0,yn(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=q(),t.sibling=null,n=B.current,I(B,r?n&1|2:n&1),t):(ie(t),null);case 22:case 23:return Tl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?xe&1073741824&&(ie(t),t.subtreeFlags&6&&(t.flags|=8192)):ie(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function yp(e,t){switch(dl(t),t.tag){case 1:return ge(t.type)&&Wr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return on(),O(he),O(ae),wl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return yl(t),null;case 13:if(O(B),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));nn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O(B),null;case 4:return on(),null;case 10:return hl(t.type._context),null;case 22:case 23:return Tl(),null;case 24:return null;default:return null}}var yr=!1,oe=!1,wp=typeof WeakSet=="function"?WeakSet:Set,_=null;function Gt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){W(e,t,r)}else n.current=null}function Io(e,t,n){try{n()}catch(r){W(e,t,r)}}var Oa=!1;function kp(e,t){if(yo=Ur,e=Xs(),ul(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,s=-1,u=-1,d=0,v=0,x=e,h=null;t:for(;;){for(var m;x!==n||i!==0&&x.nodeType!==3||(s=l+i),x!==o||r!==0&&x.nodeType!==3||(u=l+r),x.nodeType===3&&(l+=x.nodeValue.length),(m=x.firstChild)!==null;)h=x,x=m;for(;;){if(x===e)break t;if(h===n&&++d===i&&(s=l),h===o&&++v===r&&(u=l),(m=x.nextSibling)!==null)break;x=h,h=x.parentNode}x=m}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(wo={focusedElem:e,selectionRange:n},Ur=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,E=g.memoizedState,p=t.stateNode,c=p.getSnapshotBeforeUpdate(t.elementType===t.type?y:Me(t.type,y),E);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(w){W(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return g=Oa,Oa=!1,g}function Mn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Io(t,n,o)}i=i.next}while(i!==r)}}function mi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ro(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Gu(e){var t=e.alternate;t!==null&&(e.alternate=null,Gu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ue],delete t[$n],delete t[So],delete t[rp],delete t[ip])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function qu(e){return e.tag===5||e.tag===3||e.tag===4}function Fa(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||qu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Oo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Vr));else if(r!==4&&(e=e.child,e!==null))for(Oo(e,t,n),e=e.sibling;e!==null;)Oo(e,t,n),e=e.sibling}function Fo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Fo(e,t,n),e=e.sibling;e!==null;)Fo(e,t,n),e=e.sibling}var ee=null,ze=!1;function Ze(e,t,n){for(n=n.child;n!==null;)Ku(e,t,n),n=n.sibling}function Ku(e,t,n){if(Be&&typeof Be.onCommitFiberUnmount=="function")try{Be.onCommitFiberUnmount(li,n)}catch{}switch(n.tag){case 5:oe||Gt(n,t);case 6:var r=ee,i=ze;ee=null,Ze(e,t,n),ee=r,ze=i,ee!==null&&(ze?(e=ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ee.removeChild(n.stateNode));break;case 18:ee!==null&&(ze?(e=ee,n=n.stateNode,e.nodeType===8?Ui(e.parentNode,n):e.nodeType===1&&Ui(e,n),Un(e)):Ui(ee,n.stateNode));break;case 4:r=ee,i=ze,ee=n.stateNode.containerInfo,ze=!0,Ze(e,t,n),ee=r,ze=i;break;case 0:case 11:case 14:case 15:if(!oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Io(n,t,l),i=i.next}while(i!==r)}Ze(e,t,n);break;case 1:if(!oe&&(Gt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){W(n,t,s)}Ze(e,t,n);break;case 21:Ze(e,t,n);break;case 22:n.mode&1?(oe=(r=oe)||n.memoizedState!==null,Ze(e,t,n),oe=r):Ze(e,t,n);break;default:Ze(e,t,n)}}function Ua(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new wp),t.forEach(function(r){var i=bp.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Te(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:ee=s.stateNode,ze=!1;break e;case 3:ee=s.stateNode.containerInfo,ze=!0;break e;case 4:ee=s.stateNode.containerInfo,ze=!0;break e}s=s.return}if(ee===null)throw Error(k(160));Ku(o,l,i),ee=null,ze=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(d){W(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Qu(t,e),t=t.sibling}function Qu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Te(t,e),Oe(e),r&4){try{Mn(3,e,e.return),mi(3,e)}catch(y){W(e,e.return,y)}try{Mn(5,e,e.return)}catch(y){W(e,e.return,y)}}break;case 1:Te(t,e),Oe(e),r&512&&n!==null&&Gt(n,n.return);break;case 5:if(Te(t,e),Oe(e),r&512&&n!==null&&Gt(n,n.return),e.flags&32){var i=e.stateNode;try{In(i,"")}catch(y){W(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&vs(i,o),so(s,l);var d=so(s,o);for(l=0;l<u.length;l+=2){var v=u[l],x=u[l+1];v==="style"?_s(i,x):v==="dangerouslySetInnerHTML"?ws(i,x):v==="children"?In(i,x):Xo(i,v,x,d)}switch(s){case"input":ro(i,o);break;case"textarea":xs(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?Kt(i,!!o.multiple,m,!1):h!==!!o.multiple&&(o.defaultValue!=null?Kt(i,!!o.multiple,o.defaultValue,!0):Kt(i,!!o.multiple,o.multiple?[]:"",!1))}i[$n]=o}catch(y){W(e,e.return,y)}}break;case 6:if(Te(t,e),Oe(e),r&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){W(e,e.return,y)}}break;case 3:if(Te(t,e),Oe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Un(t.containerInfo)}catch(y){W(e,e.return,y)}break;case 4:Te(t,e),Oe(e);break;case 13:Te(t,e),Oe(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Pl=q())),r&4&&Ua(e);break;case 22:if(v=n!==null&&n.memoizedState!==null,e.mode&1?(oe=(d=oe)||v,Te(t,e),oe=d):Te(t,e),Oe(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!v&&e.mode&1)for(_=e,v=e.child;v!==null;){for(x=_=v;_!==null;){switch(h=_,m=h.child,h.tag){case 0:case 11:case 14:case 15:Mn(4,h,h.return);break;case 1:Gt(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(y){W(r,n,y)}}break;case 5:Gt(h,h.return);break;case 22:if(h.memoizedState!==null){Ha(x);continue}}m!==null?(m.return=h,_=m):Ha(x)}v=v.sibling}e:for(v=null,x=e;;){if(x.tag===5){if(v===null){v=x;try{i=x.stateNode,d?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=x.stateNode,u=x.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=ks("display",l))}catch(y){W(e,e.return,y)}}}else if(x.tag===6){if(v===null)try{x.stateNode.nodeValue=d?"":x.memoizedProps}catch(y){W(e,e.return,y)}}else if((x.tag!==22&&x.tag!==23||x.memoizedState===null||x===e)&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===e)break e;for(;x.sibling===null;){if(x.return===null||x.return===e)break e;v===x&&(v=null),x=x.return}v===x&&(v=null),x.sibling.return=x.return,x=x.sibling}}break;case 19:Te(t,e),Oe(e),r&4&&Ua(e);break;case 21:break;default:Te(t,e),Oe(e)}}function Oe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(qu(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(In(i,""),r.flags&=-33);var o=Fa(e);Fo(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,s=Fa(e);Oo(e,s,l);break;default:throw Error(k(161))}}catch(u){W(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function _p(e,t,n){_=e,Xu(e)}function Xu(e,t,n){for(var r=(e.mode&1)!==0;_!==null;){var i=_,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||yr;if(!l){var s=i.alternate,u=s!==null&&s.memoizedState!==null||oe;s=yr;var d=oe;if(yr=l,(oe=u)&&!d)for(_=i;_!==null;)l=_,u=l.child,l.tag===22&&l.memoizedState!==null?Va(i):u!==null?(u.return=l,_=u):Va(i);for(;o!==null;)_=o,Xu(o),o=o.sibling;_=i,yr=s,oe=d}Ba(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,_=o):Ba(e)}}function Ba(e){for(;_!==null;){var t=_;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:oe||mi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!oe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Me(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Na(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Na(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var v=d.memoizedState;if(v!==null){var x=v.dehydrated;x!==null&&Un(x)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}oe||t.flags&512&&Ro(t)}catch(h){W(t,t.return,h)}}if(t===e){_=null;break}if(n=t.sibling,n!==null){n.return=t.return,_=n;break}_=t.return}}function Ha(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var n=t.sibling;if(n!==null){n.return=t.return,_=n;break}_=t.return}}function Va(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{mi(4,t)}catch(u){W(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){W(t,i,u)}}var o=t.return;try{Ro(t)}catch(u){W(t,o,u)}break;case 5:var l=t.return;try{Ro(t)}catch(u){W(t,l,u)}}}catch(u){W(t,t.return,u)}if(t===e){_=null;break}var s=t.sibling;if(s!==null){s.return=t.return,_=s;break}_=t.return}}var Sp=Math.ceil,ei=Je.ReactCurrentDispatcher,Ll=Je.ReactCurrentOwner,Le=Je.ReactCurrentBatchConfig,A=0,Z=null,K=null,te=0,xe=0,qt=vt(0),X=0,Yn=null,Tt=0,hi=0,El=0,zn=null,fe=null,Pl=0,an=1/0,Ve=null,ti=!1,Uo=null,dt=null,wr=!1,ot=null,ni=0,An=0,Bo=null,Mr=-1,zr=0;function ce(){return A&6?q():Mr!==-1?Mr:Mr=q()}function pt(e){return e.mode&1?A&2&&te!==0?te&-te:lp.transition!==null?(zr===0&&(zr=As()),zr):(e=D,e!==0||(e=window.event,e=e===void 0?16:Bs(e.type)),e):1}function Ie(e,t,n,r){if(50<An)throw An=0,Bo=null,Error(k(185));Zn(e,n,r),(!(A&2)||e!==Z)&&(e===Z&&(!(A&2)&&(hi|=n),X===4&&rt(e,te)),ve(e,r),n===1&&A===0&&!(t.mode&1)&&(an=q()+500,di&&xt()))}function ve(e,t){var n=e.callbackNode;ld(e,t);var r=Fr(e,e===Z?te:0);if(r===0)n!==null&&Jl(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Jl(n),t===1)e.tag===0?op(Wa.bind(null,e)):lu(Wa.bind(null,e)),tp(function(){!(A&6)&&xt()}),n=null;else{switch(Ds(r)){case 1:n=tl;break;case 4:n=Ms;break;case 16:n=Or;break;case 536870912:n=zs;break;default:n=Or}n=ic(n,Yu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Yu(e,t){if(Mr=-1,zr=0,A&6)throw Error(k(327));var n=e.callbackNode;if(Zt()&&e.callbackNode!==n)return null;var r=Fr(e,e===Z?te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ri(e,r);else{t=r;var i=A;A|=2;var o=Zu();(Z!==e||te!==t)&&(Ve=null,an=q()+500,jt(e,t));do try{jp();break}catch(s){Ju(e,s)}while(!0);ml(),ei.current=o,A=i,K!==null?t=0:(Z=null,te=0,t=X)}if(t!==0){if(t===2&&(i=mo(e),i!==0&&(r=i,t=Ho(e,i))),t===1)throw n=Yn,jt(e,0),rt(e,r),ve(e,q()),n;if(t===6)rt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Cp(i)&&(t=ri(e,r),t===2&&(o=mo(e),o!==0&&(r=o,t=Ho(e,o))),t===1))throw n=Yn,jt(e,0),rt(e,r),ve(e,q()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:_t(e,fe,Ve);break;case 3:if(rt(e,r),(r&130023424)===r&&(t=Pl+500-q(),10<t)){if(Fr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ce(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=_o(_t.bind(null,e,fe,Ve),t);break}_t(e,fe,Ve);break;case 4:if(rt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-De(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Sp(r/1960))-r,10<r){e.timeoutHandle=_o(_t.bind(null,e,fe,Ve),r);break}_t(e,fe,Ve);break;case 5:_t(e,fe,Ve);break;default:throw Error(k(329))}}}return ve(e,q()),e.callbackNode===n?Yu.bind(null,e):null}function Ho(e,t){var n=zn;return e.current.memoizedState.isDehydrated&&(jt(e,t).flags|=256),e=ri(e,t),e!==2&&(t=fe,fe=n,t!==null&&Vo(t)),e}function Vo(e){fe===null?fe=e:fe.push.apply(fe,e)}function Cp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Re(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function rt(e,t){for(t&=~El,t&=~hi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-De(t),r=1<<n;e[n]=-1,t&=~r}}function Wa(e){if(A&6)throw Error(k(327));Zt();var t=Fr(e,0);if(!(t&1))return ve(e,q()),null;var n=ri(e,t);if(e.tag!==0&&n===2){var r=mo(e);r!==0&&(t=r,n=Ho(e,r))}if(n===1)throw n=Yn,jt(e,0),rt(e,t),ve(e,q()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,_t(e,fe,Ve),ve(e,q()),null}function bl(e,t){var n=A;A|=1;try{return e(t)}finally{A=n,A===0&&(an=q()+500,di&&xt())}}function Mt(e){ot!==null&&ot.tag===0&&!(A&6)&&Zt();var t=A;A|=1;var n=Le.transition,r=D;try{if(Le.transition=null,D=1,e)return e()}finally{D=r,Le.transition=n,A=t,!(A&6)&&xt()}}function Tl(){xe=qt.current,O(qt)}function jt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ep(n)),K!==null)for(n=K.return;n!==null;){var r=n;switch(dl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Wr();break;case 3:on(),O(he),O(ae),wl();break;case 5:yl(r);break;case 4:on();break;case 13:O(B);break;case 19:O(B);break;case 10:hl(r.type._context);break;case 22:case 23:Tl()}n=n.return}if(Z=e,K=e=ft(e.current,null),te=xe=t,X=0,Yn=null,El=hi=Tt=0,fe=zn=null,Ct!==null){for(t=0;t<Ct.length;t++)if(n=Ct[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}Ct=null}return e}function Ju(e,t){do{var n=K;try{if(ml(),Pr.current=Zr,Jr){for(var r=H.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Jr=!1}if(bt=0,J=Q=H=null,Tn=!1,Kn=0,Ll.current=null,n===null||n.return===null){X=1,Yn=t,K=null;break}e:{var o=e,l=n.return,s=n,u=t;if(t=te,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,v=s,x=v.tag;if(!(v.mode&1)&&(x===0||x===11||x===15)){var h=v.alternate;h?(v.updateQueue=h.updateQueue,v.memoizedState=h.memoizedState,v.lanes=h.lanes):(v.updateQueue=null,v.memoizedState=null)}var m=Ta(l);if(m!==null){m.flags&=-257,Ma(m,l,s,o,t),m.mode&1&&ba(o,d,t),t=m,u=d;var g=t.updateQueue;if(g===null){var y=new Set;y.add(u),t.updateQueue=y}else g.add(u);break e}else{if(!(t&1)){ba(o,d,t),Ml();break e}u=Error(k(426))}}else if(F&&s.mode&1){var E=Ta(l);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Ma(E,l,s,o,t),pl(ln(u,s));break e}}o=u=ln(u,s),X!==4&&(X=2),zn===null?zn=[o]:zn.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=Du(o,u,t);Ca(o,p);break e;case 1:s=u;var c=o.type,f=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(dt===null||!dt.has(f)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=Iu(o,s,t);Ca(o,w);break e}}o=o.return}while(o!==null)}tc(n)}catch(S){t=S,K===n&&n!==null&&(K=n=n.return);continue}break}while(!0)}function Zu(){var e=ei.current;return ei.current=Zr,e===null?Zr:e}function Ml(){(X===0||X===3||X===2)&&(X=4),Z===null||!(Tt&268435455)&&!(hi&268435455)||rt(Z,te)}function ri(e,t){var n=A;A|=2;var r=Zu();(Z!==e||te!==t)&&(Ve=null,jt(e,t));do try{Np();break}catch(i){Ju(e,i)}while(!0);if(ml(),A=n,ei.current=r,K!==null)throw Error(k(261));return Z=null,te=0,X}function Np(){for(;K!==null;)ec(K)}function jp(){for(;K!==null&&!Yc();)ec(K)}function ec(e){var t=rc(e.alternate,e,xe);e.memoizedProps=e.pendingProps,t===null?tc(e):K=t,Ll.current=null}function tc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=yp(n,t),n!==null){n.flags&=32767,K=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,K=null;return}}else if(n=xp(n,t,xe),n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);X===0&&(X=5)}function _t(e,t,n){var r=D,i=Le.transition;try{Le.transition=null,D=1,Lp(e,t,n,r)}finally{Le.transition=i,D=r}return null}function Lp(e,t,n,r){do Zt();while(ot!==null);if(A&6)throw Error(k(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(ad(e,o),e===Z&&(K=Z=null,te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wr||(wr=!0,ic(Or,function(){return Zt(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Le.transition,Le.transition=null;var l=D;D=1;var s=A;A|=4,Ll.current=null,kp(e,n),Qu(n,e),qd(wo),Ur=!!yo,wo=yo=null,e.current=n,_p(n),Jc(),A=s,D=l,Le.transition=o}else e.current=n;if(wr&&(wr=!1,ot=e,ni=i),o=e.pendingLanes,o===0&&(dt=null),td(n.stateNode),ve(e,q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ti)throw ti=!1,e=Uo,Uo=null,e;return ni&1&&e.tag!==0&&Zt(),o=e.pendingLanes,o&1?e===Bo?An++:(An=0,Bo=e):An=0,xt(),null}function Zt(){if(ot!==null){var e=Ds(ni),t=Le.transition,n=D;try{if(Le.transition=null,D=16>e?16:e,ot===null)var r=!1;else{if(e=ot,ot=null,ni=0,A&6)throw Error(k(331));var i=A;for(A|=4,_=e.current;_!==null;){var o=_,l=o.child;if(_.flags&16){var s=o.deletions;if(s!==null){for(var u=0;u<s.length;u++){var d=s[u];for(_=d;_!==null;){var v=_;switch(v.tag){case 0:case 11:case 15:Mn(8,v,o)}var x=v.child;if(x!==null)x.return=v,_=x;else for(;_!==null;){v=_;var h=v.sibling,m=v.return;if(Gu(v),v===d){_=null;break}if(h!==null){h.return=m,_=h;break}_=m}}}var g=o.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var E=y.sibling;y.sibling=null,y=E}while(y!==null)}}_=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,_=l;else e:for(;_!==null;){if(o=_,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Mn(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,_=p;break e}_=o.return}}var c=e.current;for(_=c;_!==null;){l=_;var f=l.child;if(l.subtreeFlags&2064&&f!==null)f.return=l,_=f;else e:for(l=c;_!==null;){if(s=_,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:mi(9,s)}}catch(S){W(s,s.return,S)}if(s===l){_=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,_=w;break e}_=s.return}}if(A=i,xt(),Be&&typeof Be.onPostCommitFiberRoot=="function")try{Be.onPostCommitFiberRoot(li,e)}catch{}r=!0}return r}finally{D=n,Le.transition=t}}return!1}function $a(e,t,n){t=ln(n,t),t=Du(e,t,1),e=ct(e,t,1),t=ce(),e!==null&&(Zn(e,1,t),ve(e,t))}function W(e,t,n){if(e.tag===3)$a(e,e,n);else for(;t!==null;){if(t.tag===3){$a(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(dt===null||!dt.has(r))){e=ln(n,e),e=Iu(t,e,1),t=ct(t,e,1),e=ce(),t!==null&&(Zn(t,1,e),ve(t,e));break}}t=t.return}}function Ep(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ce(),e.pingedLanes|=e.suspendedLanes&n,Z===e&&(te&n)===n&&(X===4||X===3&&(te&130023424)===te&&500>q()-Pl?jt(e,0):El|=n),ve(e,t)}function nc(e,t){t===0&&(e.mode&1?(t=cr,cr<<=1,!(cr&130023424)&&(cr=4194304)):t=1);var n=ce();e=Xe(e,t),e!==null&&(Zn(e,t,n),ve(e,n))}function Pp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),nc(e,n)}function bp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),nc(e,n)}var rc;rc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||he.current)me=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return me=!1,vp(e,t,n);me=!!(e.flags&131072)}else me=!1,F&&t.flags&1048576&&au(t,qr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Tr(e,t),e=t.pendingProps;var i=tn(t,ae.current);Jt(t,n),i=_l(null,t,r,e,i,n);var o=Sl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ge(r)?(o=!0,$r(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,vl(t),i.updater=fi,t.stateNode=i,i._reactInternals=t,Po(t,r,e,n),t=Mo(null,t,r,!0,o,n)):(t.tag=0,F&&o&&cl(t),se(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Tr(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Mp(r),e=Me(r,e),i){case 0:t=To(null,t,r,e,n);break e;case 1:t=Da(null,t,r,e,n);break e;case 11:t=za(null,t,r,e,n);break e;case 14:t=Aa(null,t,r,Me(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Me(r,i),To(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Me(r,i),Da(e,t,r,i,n);case 3:e:{if(Uu(t),e===null)throw Error(k(387));r=t.pendingProps,o=t.memoizedState,i=o.element,fu(e,t),Xr(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=ln(Error(k(423)),t),t=Ia(e,t,r,n,i);break e}else if(r!==i){i=ln(Error(k(424)),t),t=Ia(e,t,r,n,i);break e}else for(ye=ut(t.stateNode.containerInfo.firstChild),we=t,F=!0,Ae=null,n=du(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(nn(),r===i){t=Ye(e,t,n);break e}se(e,t,r,n)}t=t.child}return t;case 5:return mu(t),e===null&&jo(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,ko(r,i)?l=null:o!==null&&ko(r,o)&&(t.flags|=32),Fu(e,t),se(e,t,l,n),t.child;case 6:return e===null&&jo(t),null;case 13:return Bu(e,t,n);case 4:return xl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=rn(t,null,r,n):se(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Me(r,i),za(e,t,r,i,n);case 7:return se(e,t,t.pendingProps,n),t.child;case 8:return se(e,t,t.pendingProps.children,n),t.child;case 12:return se(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,I(Kr,r._currentValue),r._currentValue=l,o!==null)if(Re(o.value,l)){if(o.children===i.children&&!he.current){t=Ye(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){l=o.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=qe(-1,n&-n),u.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var v=d.pending;v===null?u.next=u:(u.next=v.next,v.next=u),d.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Lo(o.return,n,t),s.lanes|=n;break}u=u.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(k(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Lo(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}se(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Jt(t,n),i=Ee(i),r=r(i),t.flags|=1,se(e,t,r,n),t.child;case 14:return r=t.type,i=Me(r,t.pendingProps),i=Me(r.type,i),Aa(e,t,r,i,n);case 15:return Ru(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Me(r,i),Tr(e,t),t.tag=1,ge(r)?(e=!0,$r(t)):e=!1,Jt(t,n),Au(t,r,i),Po(t,r,i,n),Mo(null,t,r,!0,e,n);case 19:return Hu(e,t,n);case 22:return Ou(e,t,n)}throw Error(k(156,t.tag))};function ic(e,t){return Ts(e,t)}function Tp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function je(e,t,n,r){return new Tp(e,t,n,r)}function zl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Mp(e){if(typeof e=="function")return zl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Jo)return 11;if(e===Zo)return 14}return 2}function ft(e,t){var n=e.alternate;return n===null?(n=je(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ar(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")zl(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Rt:return Lt(n.children,i,o,t);case Yo:l=8,i|=8;break;case Ji:return e=je(12,n,t,i|2),e.elementType=Ji,e.lanes=o,e;case Zi:return e=je(13,n,t,i),e.elementType=Zi,e.lanes=o,e;case eo:return e=je(19,n,t,i),e.elementType=eo,e.lanes=o,e;case ms:return gi(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ps:l=10;break e;case fs:l=9;break e;case Jo:l=11;break e;case Zo:l=14;break e;case et:l=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=je(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Lt(e,t,n,r){return e=je(7,e,r,t),e.lanes=n,e}function gi(e,t,n,r){return e=je(22,e,r,t),e.elementType=ms,e.lanes=n,e.stateNode={isHidden:!1},e}function Ki(e,t,n){return e=je(6,e,null,t),e.lanes=n,e}function Qi(e,t,n){return t=je(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function zp(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pi(0),this.expirationTimes=Pi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Al(e,t,n,r,i,o,l,s,u){return e=new zp(e,t,n,s,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=je(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},vl(o),e}function Ap(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:It,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function oc(e){if(!e)return ht;e=e._reactInternals;e:{if(At(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ge(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(ge(n))return ou(e,n,t)}return t}function lc(e,t,n,r,i,o,l,s,u){return e=Al(n,r,!0,e,i,o,l,s,u),e.context=oc(null),n=e.current,r=ce(),i=pt(n),o=qe(r,i),o.callback=t??null,ct(n,o,i),e.current.lanes=i,Zn(e,i,r),ve(e,r),e}function vi(e,t,n,r){var i=t.current,o=ce(),l=pt(i);return n=oc(n),t.context===null?t.context=n:t.pendingContext=n,t=qe(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ct(i,t,l),e!==null&&(Ie(e,i,l,o),Er(e,i,l)),l}function ii(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ga(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Dl(e,t){Ga(e,t),(e=e.alternate)&&Ga(e,t)}function Dp(){return null}var ac=typeof reportError=="function"?reportError:function(e){console.error(e)};function Il(e){this._internalRoot=e}xi.prototype.render=Il.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));vi(e,t,null,null)};xi.prototype.unmount=Il.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Mt(function(){vi(null,e,null,null)}),t[Qe]=null}};function xi(e){this._internalRoot=e}xi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Os();e={blockedOn:null,target:e,priority:t};for(var n=0;n<nt.length&&t!==0&&t<nt[n].priority;n++);nt.splice(n,0,e),n===0&&Us(e)}};function Rl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function yi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function qa(){}function Ip(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var d=ii(l);o.call(d)}}var l=lc(t,r,e,0,null,!1,!1,"",qa);return e._reactRootContainer=l,e[Qe]=l.current,Vn(e.nodeType===8?e.parentNode:e),Mt(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var d=ii(u);s.call(d)}}var u=Al(e,0,!1,null,null,!1,!1,"",qa);return e._reactRootContainer=u,e[Qe]=u.current,Vn(e.nodeType===8?e.parentNode:e),Mt(function(){vi(t,u,n,r)}),u}function wi(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var s=i;i=function(){var u=ii(l);s.call(u)}}vi(t,l,e,i)}else l=Ip(n,t,e,i,r);return ii(l)}Is=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Cn(t.pendingLanes);n!==0&&(nl(t,n|1),ve(t,q()),!(A&6)&&(an=q()+500,xt()))}break;case 13:Mt(function(){var r=Xe(e,1);if(r!==null){var i=ce();Ie(r,e,1,i)}}),Dl(e,1)}};rl=function(e){if(e.tag===13){var t=Xe(e,134217728);if(t!==null){var n=ce();Ie(t,e,134217728,n)}Dl(e,134217728)}};Rs=function(e){if(e.tag===13){var t=pt(e),n=Xe(e,t);if(n!==null){var r=ce();Ie(n,e,t,r)}Dl(e,t)}};Os=function(){return D};Fs=function(e,t){var n=D;try{return D=e,t()}finally{D=n}};co=function(e,t,n){switch(t){case"input":if(ro(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ci(r);if(!i)throw Error(k(90));gs(r),ro(r,i)}}}break;case"textarea":xs(e,n);break;case"select":t=n.value,t!=null&&Kt(e,!!n.multiple,t,!1)}};Ns=bl;js=Mt;var Rp={usingClientEntryPoint:!1,Events:[tr,Bt,ci,Ss,Cs,bl]},wn={findFiberByHostInstance:St,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Op={bundleType:wn.bundleType,version:wn.version,rendererPackageName:wn.rendererPackageName,rendererConfig:wn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Je.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ps(e),e===null?null:e.stateNode},findFiberByHostInstance:wn.findFiberByHostInstance||Dp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kr.isDisabled&&kr.supportsFiber)try{li=kr.inject(Op),Be=kr}catch{}}_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rp;_e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rl(t))throw Error(k(200));return Ap(e,t,null,n)};_e.createRoot=function(e,t){if(!Rl(e))throw Error(k(299));var n=!1,r="",i=ac;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Al(e,1,!1,null,null,n,!1,r,i),e[Qe]=t.current,Vn(e.nodeType===8?e.parentNode:e),new Il(t)};_e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Ps(t),e=e===null?null:e.stateNode,e};_e.flushSync=function(e){return Mt(e)};_e.hydrate=function(e,t,n){if(!yi(t))throw Error(k(200));return wi(null,e,t,!0,n)};_e.hydrateRoot=function(e,t,n){if(!Rl(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=ac;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=lc(t,null,e,1,n??null,i,!1,o,l),e[Qe]=t.current,Vn(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new xi(t)};_e.render=function(e,t,n){if(!yi(t))throw Error(k(200));return wi(null,e,t,!1,n)};_e.unmountComponentAtNode=function(e){if(!yi(e))throw Error(k(40));return e._reactRootContainer?(Mt(function(){wi(null,null,e,!1,function(){e._reactRootContainer=null,e[Qe]=null})}),!0):!1};_e.unstable_batchedUpdates=bl;_e.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!yi(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return wi(e,t,n,!1,r)};_e.version="18.3.1-next-f1338f8080-20240426";function sc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sc)}catch(e){console.error(e)}}sc(),ss.exports=_e;var Fp=ss.exports,Ka=Fp;Xi.createRoot=Ka.createRoot,Xi.hydrateRoot=Ka.hydrateRoot;const ue=e=>`./${e.startsWith("/")?e.slice(1):e}`,z=({name:e,size:t=22,className:n="",color:r="currentColor"})=>a.jsx("span",{className:`inline-icon ${n}`,style:{display:"inline-block",width:t,height:t,minWidth:t,minHeight:t,backgroundColor:r,WebkitMaskImage:`url(${ue(`assets/icons/${e}.svg`)})`,maskImage:`url(${ue(`assets/icons/${e}.svg`)})`,WebkitMaskRepeat:"no-repeat",maskRepeat:"no-repeat",WebkitMaskPosition:"center",maskPosition:"center",WebkitMaskSize:"contain",maskSize:"contain"},"aria-hidden":"true"}),uc='# exDesktop plugins\n\nexDesktop runs exteraGram plugins (Python, SDK 1.4.6.2) on Windows, Linux and macOS. The plugin API is the same as on Android. There is no Java and no Android UI: the most used Java and Android classes are emulated in Python, and a large set of Android method hooks is mapped to desktop events with real Xposed semantics. Hooks outside that set are accepted but never fire. Everything that depends on them must be rewritten with the plugin API.\n\nFull documentation: https://exdesktop.xyz/docs/\n\n## Task\n\n1. List every feature of the plugin from its settings, menu items, hooks and texts.\n2. For each feature decide: keep as is, keep through a supported hook, rewrite with the replacement table, or drop.\n3. Write the plugin with the minimal number of changes. Keep the original strings, settings keys and network hosts.\n4. Check the result against the hard rules and the self check.\n5. After the code, write a short REPORT with three sections: kept, changed, dropped.\n\n## Plugin file\n\n```python\nfrom base_plugin import BasePlugin, HookResult, HookStrategy, MenuItemData, MenuItemType\nfrom ui.settings import Header, Divider, Switch, Selector, Input, Text\nfrom ui.bulletin import BulletinHelper\nfrom client_utils import send_text, send_request, run_on_queue\n\n__id__ = "example_exd"\n__name__ = "Example"\n__version__ = "1.0"\n__author__ = "@author"\n__description__ = "What the plugin does"\n__icon__ = "exteraPlugins/1"\n__desktop__ = True\n__ported_from__ = "example 1.0"\n__desktop_os__ = "windows"\n\n\nclass ExamplePlugin(BasePlugin):\n    def on_plugin_load(self):\n        self.add_on_send_message_hook()\n\n    def on_send_message_hook(self, account, params):\n        if params.message and params.message.startswith(".hi"):\n            params.message = "Hello"\n            return HookResult(strategy=HookStrategy.MODIFY, params=params)\n        return HookResult()\n```\n\nRules for the file:\n- Metadata is literal: no expressions, no f-strings.\n- A ported plugin keeps `__author__`, `__description__`, `__icon__`, `__requirements__`, `__name__` and `__version__`. `__id__` is the original id plus `_exd`, at most 32 characters. `__ported_from__` is `"<original id> <original version>"`.\n- `__desktop_os__` is `windows`, `linux` or `macos`: the system the plugin was tested on. The same file must work on all three systems.\n- Exactly one class that inherits `BasePlugin`. A library plugin (imported by other plugins, for example `zwylib`) has no such class and keeps its original id.\n\n## Windows, Linux and macOS\n\n- Build paths with `os.path.join(file_utils.get_plugin_dir(), "data.json")` or `pathlib`. Never use backslashes, drive letters, `%APPDATA%`, `os.environ["APPDATA"]`, `/home/...` or `~/Library`.\n- File names are case-sensitive on Linux: `Data.json` and `data.json` are different files.\n- Open text files with `encoding="utf-8"`. Windows uses another default encoding.\n- `winreg`, `msvcrt`, `winsound` exist only on Windows, `fcntl`, `termios`, `pwd` only on Linux and macOS. Import them inside `try/except ImportError` and keep a fallback, or do not use them.\n- Open links with `Browser.openUrl` or `webbrowser.open`.\n- Use `time.monotonic()` for intervals, `os.linesep` only when writing files for other programs.\n\n## Hard rules\n\nThe sandbox enforces these rules, and PluginGuard blocks installation of a plugin that breaks the last three.\n\n- Never use `subprocess`, `os.system`, `os.startfile`, `ctypes`, `cffi`, `winreg`, `marshal`, `gc`, `sys.settrace`, `sys.addaudithook`, `exec` or `eval`.\n- Read and write files only in `file_utils.get_plugin_dir()` and `file_utils.get_plugin_cache_dir()`, or in files the user picked with `file_utils.pick_file`. Other folders need the user\'s permission, `tdata`, other plugins, browser profiles, wallets and SSH keys are never available.\n- Never hard-code Android paths (`/sdcard`, `/storage/emulated/0`, `/data/user/0/...`).\n- Never add network hosts that the original plugin did not use. Internet access needs no prompt, but local network devices and UDP need the user\'s permission, and sending session keys, login codes, phone numbers, private keys, seed phrases or browser data is stopped until the user decides.\n- Never load `.dex`, `.so`, `.dll` or `.pyd` files, and never download code (DEX, native libraries, Python modules, other plugins) to load it at runtime. Such plugins are blocked because the downloaded code cannot be checked.\n- Never embed executables or archives with code.\n- No obfuscation: no base64, zlib or XOR wrapped code. Encrypted plugins are decoded for the check and install only after a safe verdict of the AI arbiter.\n\n## API that works as on Android\n\n- Lifecycle: `on_plugin_load`, `on_plugin_unload`, `on_app_event`. `self.stop_event` is set on unload, `self.register_cleanup(fn)` runs on unload.\n- Telegram requests and updates: `self.add_hook("TL_messages_sendMessage")` with `pre_request_hook(self, request_name, account, request)` and `post_request_hook(self, request_name, account, response, error)`; `self.add_hook("TL_updateNewMessage")` with `on_update_hook(self, update_name, account, update)`; `on_updates_hook`. `add_hook` takes one TL name only.\n- Sending: `self.add_on_send_message_hook()` and `on_send_message_hook(self, account, params)` with `HookStrategy.DEFAULT`, `CANCEL`, `MODIFY`, `MODIFY_FINAL`.\n- Menus: `self.add_menu_item(MenuItemData(menu_type=MenuItemType.MESSAGE_CONTEXT_MENU, text="...", on_click=fn))`. Types: `MESSAGE_CONTEXT_MENU` (context has `message` and `dialog_id`), `CHAT_ACTION_MENU` (also shown as a plugin icon in the chat header), `DRAWER_MENU`, `PROFILE_ACTION_MENU`.\n- Settings: `create_settings(self)` returns a list of `Header`, `Divider`, `Switch`, `Selector`, `Input`, `Text`, `EditText`; sub pages through `Text(..., create_sub_fragment=fn)`. `get_setting`, `set_setting`, `export_settings`, `import_settings`.\n- `client_utils`: `send_request`, `send_text`, `send_message`, `send_photo`, `send_document`, `send_video`, `send_audio`, `edit_message`, `run_on_queue`, `get_messages_controller`, `get_media_controller`, `get_notifications_controller`, `get_user_config`, `get_last_fragment`, `get_selected_account`, `get_hook_account`, `client(account)`.\n- `android_utils`: `run_on_ui_thread(fn, delay=0)`, `copy_to_clipboard(text)`, `R`, `OnClickListener`, `OnLongClickListener`.\n- `ui.bulletin.BulletinHelper.show_info / show_success / show_error`. `ui.alert.AlertDialogBuilder` with title, message, items, three buttons, `make_button_red`, `set_view`, a progress dialog with `set_progress`, `set_cancelable`, `dismiss`, `get_button`.\n- `ui.webapp.WebApp(title, html=..., width=..., height=..., on_message=fn)`: an HTML window with `exd.send`, `exd.onMessage`, `exd.close` in the page and `app.send`, `app.eval`, `app.close`, `on_load`, `on_close` in Python. `android.webkit.WebView` (`loadData`, `loadUrl` with `https://` only, `addJavascriptInterface`, `evaluateJavascript`, `WebViewClient`) opens in the same kind of window.\n- `file_utils`: `get_plugin_dir`, `get_plugin_cache_dir`, `pick_file(callback, title, filters, multiple)`, read, write, list. `FilesController.register(FileInfo(ext, on_click, ...))` and `self.add_file_hook` handle clicks on downloaded documents with that extension.\n- `hook_utils`: `find_class`, `get_private_field`, `set_private_field` and static variants.\n- `log_utils.get_logger`, `self.logger`, `markdown_utils.parse_markdown`, `extera_utils.text_formatting` (`parse_text`, `HTML.unparse`, `Markdown.unparse`), `intents` with `self.add_intent_hook(IntentsManager.HandlerInfo(...), IntentHookType.BEFORE)` for `tg://` links.\n- `__requirements__`: pure Python packages from PyPI. `requests`, `beautifulsoup4`, `lxml`, `pillow`, `PyYAML`, `packaging` are built in.\n- Standard modules: `json`, `re`, `time`, `threading`, `sqlite3`, `urllib` and others.\n\n## Emulated Java and Android\n\n`java.lang`, `java.util`, `java.io`, `java.nio.ByteBuffer`, `android.graphics` (Color, BitmapFactory, Bitmap, PorterDuff, PorterDuffColorFilter, GradientDrawable), `android.os` (Build, Looper, Handler, Bundle, SystemClock), `android.util` (TypedValue, Log, Base64), `android.text` (TextUtils, InputType, TextWatcher), `android.content` (Context, ClipData, ClipboardManager, DialogInterface), `android.widget` (TextView, EditText, ImageView, Button, CheckBox, Switch, SeekBar, ProgressBar, LinearLayout, FrameLayout, ScrollView), `org.telegram.messenger` (R, UserObject, ChatObject, LocaleController, MessagesController, MediaController, NotificationCenter, SendMessagesHelper, UserConfig, AndroidUtilities, ApplicationLoader, FileLoader, Utilities), `org.telegram.tgnet` (TLRPC, TLObject, ConnectionsManager), `org.telegram.ui.ActionBar.AlertDialog.Builder`, `BottomSheet` and `BottomSheet.Builder` with `setItems`, `Browser`, `LayoutHelper`, `com.exteragram.messenger` (ExteraConfig, PluginsController, PythonPluginsEngine), `de.robv.android.xposed` (XposedBridge, XposedHelpers, XC_MethodHook, XC_MethodReplacement). Any other class is a silent stub: calls do nothing. Prefer plain Python.\n\nWorking Telegram classes:\n- `NotificationCenter.getInstance(account).addObserver(delegate, NotificationCenter.didReceiveNewMessages)`: the delegate gets `didReceivedNotification(id, account, dialog_id, messages, scheduled)` for every new message. `postNotificationName` delivers custom notifications between plugins.\n- `SendMessagesHelper.getInstance(account).sendMessage(SendMessagesHelper.SendMessageParams.of(text, dialog_id))` sends a text message, `prepareSendingDocument` and `prepareSendingPhoto` send files.\n- `MessagesController`: `getAllDialogs`, `getDialogs(folder_id)`, `getDialog(id)`, `getDialogFilters`, `isDialogMuted`, `getUser`, `getChat`, `openByUserName`, `deleteMessages`, `pinDialog`, `markDialogAsRead`.\n- `MediaController` controls the desktop player: `getPlayingMessageObject`, `playMessage`, `pauseMessage`, `resumeAudio`, `playNextMessage`, `playPreviousMessage`, `cleanupPlayer`, `seekToProgress`.\n- `ChatActivity.getChatActivityEnterView()`: `getFieldText()`, `setFieldText(text)`, `getEditField().getText()` read and change the message field of the open chat.\n- `PluginsController.getInstance()`: `plugins`, `getPlugin(id)`, `isPluginEnabled(id)`, `setPluginEnabled(id, enabled)`.\n- `presentFragment(DialogsActivity(args))` with `DialogsActivityDelegate` opens a chat picker, `GroupCreateActivity` with `GroupCreateActivityDelegate` picks several users or chats, `PluginSettingsActivity(plugin)` opens the plugin settings.\n- `FileLoader` paths point to the plugin cache: Telegram files are not downloaded for plugins.\n\n## Method hooks\n\n`self.hook_method(method, handler, priority)`, `self.hook_all_methods(cls, name, handler)`, `self.hook_all_constructors(cls, handler)` and `XposedBridge` / `XposedHelpers.findAndHookMethod` work as in exteraGram. The handler is a `MethodHook` or `XC_MethodHook` with `before_hooked_method(self, param)` and `after_hooked_method(self, param)`, a `MethodReplacement` with `replace_hooked_method`, or `before=` / `after=` functions. Higher `priority` runs earlier before and later after. `param.setResult()` in `before_hooked_method` cancels the original. `HookFilter` and `hook_filters` work, including MVEL `Condition`. The returned `Unhook` removes the hook.\n\nHooks that fire on desktop:\n\n| Hook | Called on desktop | Notes |\n|---|---|---|\n| `SendMessagesHelper.sendMessage` | every outgoing message | `param.args[0].message` is the text, `param.setResult(None)` cancels |\n| `MessagesController.processNewMessages`, `NotificationsController.processNewMessages` | every new message | `param.args[0]` is a list with one `MessageObject` |\n| `ChatActivity.onResume`, `createView`, `onFragmentCreate`, `onTransitionAnimationEnd` / `onPause`, `onFragmentDestroy` | chat opened / left | `param.thisObject.getDialogId()` |\n| `ProfileActivity.onResume`, `createView`, `updateProfileData` / `onPause` | profile opened / closed | `getUserId()`, `getChatId()` |\n| `ProfileActivity.updateRowsIds`, `ProfileActivity$ListAdapter.onBindViewHolder` | profile info rows | change rows through `rowCount` and `TextDetailCell.setTextAndValue` |\n| `DialogsActivity.onResume`, `MainTabsActivity.onResume` / `DialogsActivity.onPause` | chat list shown / chat opened | |\n| `DialogCell.update`, `buildLayout`, `setDialog` | chat name in the chat list | change `first_name`, `last_name` or `title` in `before_hooked_method` to rename locally |\n| `ChatAvatarContainer.setTitle`, `ChatActivity.updateTitle` | chat header title | change `param.args[0]` or call `setTitle()` |\n| `ChatAvatarContainer.updateSubtitle`, `setSubtitle` | chat header status | `setSubtitle()` replaces the status |\n| `ChatAvatarContainer.onAvatarClick`, `ChatActivity.openProfile` | click on the chat header | `param.setResult(None)` keeps the profile closed |\n| `ChatMessageCell.setMessageObject`, `setMessageContent`, `setMessageObjectInternal` | message text built in the chat | assigning `messageText` changes the shown text only |\n| `ChatActivity.createMenu`, `fillMessageMenu` | right click on a message | `param.setResult(None)` keeps the menu closed |\n| `ChatActivity.getMessageContent` | "Copy text" in the message menu | `param.setResult(text)` in `after_hooked_method` changes the copied text |\n| `ChatActivity.addToSelectedMessages` | message selected | `param.setResult(None)` cancels |\n| `ChatActivityEnterView.setReplyingMessageObject` | reply chosen | `param.setResult(None)` cancels |\n| `ChatActivity.sendMedia`, `SendMessagesHelper.prepareSendingMedia`, `prepareSendingDocuments` | files and photos sent | `param.setResult(None)` cancels |\n| `SendMessagesHelper.sendReaction` | reaction set or removed | `param.args[1]` lists `VisibleReaction`, `param.setResult(None)` cancels |\n| `NotificationsController.showOrUpdateNotification` | new message notification | `param.setResult(None)` hides it |\n| `MediaController.playMessage`, `setPlaylist`, `playNextMessage`, `playPreviousMessage`, `cleanupPlayer` | player actions | `param.setResult(...)` cancels |\n| `AudioPlayerAlert` constructor, `updateTitle`, `onSubItemClick` | full screen player | `optionsButton.addSubItem` adds items to its right click menu |\n| `TranscribeButton.onTap` | voice transcription button | `param.setResult(None)` cancels |\n| `VoIPHelper.startCall` | outgoing call | `param.setResult(None)` cancels |\n| `AndroidUtilities.openForView` | file opened from a chat | `param.setResult(None)` cancels |\n| `SettingsActivity.fillItems`, `onClick` | main menu built and clicked | add `UItem.asButton(id, icon, text)` items |\n| `LaunchActivity.onCreate` / `onResume`, `onStart` / `onPause`, `onStop` | plugin loaded / window activated / deactivated | |\n| `LaunchActivity.onActivityResult`, `BaseFragment.onActivityResultFragment` | after a file was picked | request code, result code, `Intent.getData()` |\n| `LaunchActivity.handleIntent`, `onNewIntent` | `tg://` link opened | `param.setResult(True)` stops handling |\n| `Browser.openUrl` | every external link click | `param.args[1]` is the url, `param.setResult(None)` stops opening |\n| `PluginsController.setPluginEnabled`, `PythonPluginsEngine.loadPlugin`, `unloadPlugin` | plugin enabled, loaded, unloaded | `param.setResult(None)` cancels |\n| methods of emulated classes | when called | arguments, result and `setResult` work |\n\nHooks on drawing and layout (`onDraw`, `onMeasure`, `onLayout`, `Theme` colors of cells, camera, `PhotoViewer`, `ChatAttachAlert`) never fire. Remove them and use the replacement table. A plugin that keeps unsupported hooks is marked "Works partially" in the plugin list.\n\n## Replacement table\n\n| Android pattern | Desktop replacement |\n|---|---|\n| Hook on the send button | `add_on_send_message_hook` and `on_send_message_hook`, edit `params.message`, return `HookResult(strategy=HookStrategy.MODIFY, params=params)` |\n| Hook on `processUpdates` | `self.add_hook("TL_updateNewMessage")`, `self.add_hook("TL_updateNewChannelMessage")`, `on_update_hook` |\n| Hook on a TL request | `self.add_hook("TL_<request>")` and `pre_request_hook` / `post_request_hook` |\n| Button added to the chat header view | `MenuItemType.CHAT_ACTION_MENU` |\n| Action on a message by long press | `MenuItemType.MESSAGE_CONTEXT_MENU` |\n| Drawer or profile buttons | `MenuItemType.DRAWER_MENU`, `MenuItemType.PROFILE_ACTION_MENU` |\n| Custom `View` screens | `create_settings` rows and sub pages, `AlertDialogBuilder` with `set_items` or `set_view`, `WebApp` for rich screens |\n| `Toast.makeText` | `BulletinHelper.show_info(text)` |\n| `SharedPreferences` | `self.get_setting(key, default)`, `self.set_setting(key, value)` |\n| `getFilesDir()`, `/sdcard/...` | `file_utils.get_plugin_dir()` |\n| `AndroidUtilities.runOnUIThread(r, delay)` | `run_on_ui_thread(fn, delay)` |\n| Drawing on `Canvas` in chat cells | drop, or change text through `ChatMessageCell.setMessageObject` |\n| Hooks on `isPremium`, `premiumFeaturesBlocked` | drop: exDesktop has local Premium settings |\n| Camera, `PhotoViewer`, `ChatAttachAlert` | drop |\n| Embedded DEX code | find what it does from the Python call sites; rewrite sending, request or update logic in Python, drop drawing and screens, delete the blob |\n| DEX or native code downloaded at runtime | rewrite in Python or drop: such plugins are blocked |\n| Native libraries through `ctypes` | use a pure Python package from PyPI or drop |\n\n## Self check\n\n- The file parses as Python 3.11 and every name used is imported or defined.\n- Metadata is literal, `__desktop__ = True`, `__desktop_os__` is set, a ported `__id__` ends with `_exd`.\n- No forbidden module, call, path, new host, embedded binary or runtime code download.\n- `add_hook` gets one TL name. Android method hooks are only from the supported table or methods of emulated classes.\n- Every dropped feature is listed in REPORT.\n',le={wiki:"/wiki",download:"https://github.com/metawka/exDesktop/releases/latest",github:"https://github.com/metawka/exDesktop",telegram:"https://t.me/exDesktop",telegramChat:"https://t.me/exDesktopChat",changelog:"https://t.me/exDesktopChangelog",contact:"https://t.me/metawka",pluginSdk:"https://exdesktop.xyz/docs/"},Up=`curl -fsSL 
  https://raw.githubusercontent.com/metawka/exDesktop/main/install.sh | sh`,Bp="curl -fsSL https://raw.githubusercontent.com/metawka/exDesktop/main/install.sh | sh",Hp=[{id:"feature-plugins",title:"Система плагинов",description:"Поддержка привычных плагинов с exteraGram и разработка своих под exDesktop.",iconName:"code"},{id:"feature-privacy",title:"AyuGram",description:"Режим стримера, сохранение удаленок и весь функционал AyuGram",iconName:"shield"},{id:"feature-appearance",title:"Визуал",description:"MD Expressive, Smooth Scrolling, иконки, настройка интерфейса, скрытие номера и другое...",iconName:"tune"}],Vp=[{id:"col-progress",status:"progress",title:"В разработке",items:[{id:"rm-1",title:"Доработка совместимости с плагинами exteraGram, Xposted эмуляция Java и Android, сообщения, уведомления, файлы, изображения, библиотеки плагинов",status:"progress",version:"High priority"},{id:"rm-2",title:"Доработка ИИ-переноса плагинов",status:"progress",version:"High priority"}]},{id:"col-planned",status:"planned",title:"Запланировано",items:[{id:"rm-3",title:"Плагины с DEX и нативными библиотеками .so",status:"planned",version:"Medium priority"},{id:"rm-4",title:"Добавление каталога плагинов",status:"planned",version:"Lowest priority"},{id:"rm-5",title:"Глубокая настройка профиля с кастомными полями, баннеры, ссылки",status:"planned",version:"Lowest priority"}]},{id:"col-done",status:"done",title:"Готово",items:[{id:"rm-6",title:"Material Design 3",status:"done",version:"7.4.3.2"},{id:"rm-7",title:"Формат плагинов Elyx (.elyx, .eaf)",status:"done",version:"7.3.3.10"},{id:"rm-8",title:"Перенос Android-плагинов с помощью ИИ на своём ключе, в фоне, с проверкой результата",status:"done",version:"7.3.3.10"},{id:"rm-9",title:"PluginGuard: проверка плагина перед установкой (правила, своя модель и ИИ-арбитр), блокировка опасных, жалобы на плагины",status:"done",version:"7.3.3.9"},{id:"rm-10",title:"Функции AyuGram",status:"done",version:"7.3.3.9"},{id:"rm-11",title:"curl-установка на Linux / MacOS",status:"done",version:"7.3.3.9"},{id:"rm-12",title:"Движок плагинов на Linux и macOS",status:"done",version:"7.3.3.9"},{id:"rm-13",title:"TG WS Proxy",status:"done",version:"7.3.3.6"}]}],Wp=[{id:"wiki-cat-01",number:"01",title:"Форматы плагинов",anchor:"форматы-плагинов",items:[{id:"wiki-01-01",question:"Форматы плагинов",category:"Форматы плагинов",answer:"Метаданные однофайлового плагина читаются из констант верхнего уровня (__id__, __name__, __version__, __description__, __author__, __icon__, __app_version__, __min_version__, __sdk_version__, __requirements__, __category__) без выполнения кода.",bullets:[],code:"",table:{headers:["Формат","Расширения","Поддержка"],rows:[["Однофайловый плагин",".plugin, .py","полная"],["Elyx",".elyx, .eaf, .elyx.zip, .eaf.zip","полная, кроме зашифрованных архивов"]]}}]},{id:"wiki-cat-02",number:"02",title:"Что работает так же, как на Android",anchor:"что-работает-так-же-как-на-android",items:[{id:"wiki-02-01",question:"Что работает так же, как на Android",category:"Что работает так же, как на Android",answer:"",bullets:["Жизненный цикл: on_plugin_load, on_plugin_unload, on_app_event.","Хуки запросов и обновлений Telegram: add_hook, pre_request_hook, post_request_hook, on_update_hook, on_updates_hook. Имена запросов совпадают с TL-схемой (TL_messages_sendMessage и другие).","Хук отправки сообщения: add_on_send_message_hook, on_send_message_hook, стратегии HookStrategy.DEFAULT, CANCEL, MODIFY, MODIFY_FINAL.","Пункты меню MenuItemType: контекстное меню сообщения, меню чата (плюс значок плагинов в шапке чата: одно действие выполняется сразу, несколько открывают список), боковое меню и меню профиля.","Настройки ui.settings: Header, Divider, Switch, Selector, Input, Text, EditText, вложенные страницы, get_setting, set_setting, export_settings, import_settings.","client_utils: send_request, send_text, send_message, send_photo, send_document, send_video, send_audio, edit_message, run_on_queue, мультиаккаунт (get_selected_account, get_hook_account, client(account)).","android_utils: run_on_ui_thread, copy_to_clipboard, R, OnClickListener, OnLongClickListener.","ui.bulletin.BulletinHelper и ui.alert.AlertDialogBuilder: заголовок, текст, пункты, три кнопки, make_button_red, set_view (Android-вью внутри окна), окно загрузки с set_progress, set_cancelable, set_canceled_on_touch_outside, dismiss закрывает окно, get_button, get_context.","log_utils: get_logger, Logger с уровнями, child, timed, dump, обработчиками; BasePlugin.logger возвращает такой логгер.","markdown_utils.parse_markdown возвращает ParsedMessage с RawEntity; RawEntity.to_tlrpc_object() создаёт TL-объект сущности. Разметка как в exteraGram: **жирный**, __курсив__, --подчёркнутый--, ~~зачёркнутый~~, ||спойлер||, экранирование символов через \\. extera_utils.text_formatting.HTML.unparse и Markdown.unparse собирают разметку обратно из текста и сущностей.","BasePlugin: name, description, author, version, min_version, icon, requirements из метаданных, initialized, stop_event (устанавливается при выгрузке), register_cleanup; PluginMetadata, PluginError.","plugin_settings: get_setting, set_setting, get_all_settings, set_all_settings, clear_settings; hook_utils.get_private_field, set_private_field и статические варианты читают и меняют поля объектов.","file_utils: папки плагина, чтение, запись, список файлов. FilesController.register(FileInfo(ext, on_click, whitelist_places=..., blacklist_places=...)) и BasePlugin.add_file_hook: нажатие на скачанный документ с этим расширением в чате вызывает on_click с OnClickArgs (place, file, file_name, message, activity, parent_fragment) вместо открытия файла.","extera_utils.text_formatting.parse_text с режимами HTML и Markdown.","intents: обработка ссылок tg://. IntentsManager.HandlerInfo с scheme, host, path (шаблоны вида /user/{id}), required_path_args_names, флагами и приоритетом; BasePlugin.add_intent_hook(info, IntentHookType.BEFORE) и remove_intent_hook.","Зависимости __requirements__: устанавливаются только чистые Python-пакеты, как и на Android, загрузка идёт в фоне. Встроены requests, beautifulsoup4, lxml, pillow, PyYAML, packaging.","Плагины-библиотеки (zwylib и другие): плагин импортирует библиотеку по её id. Если библиотека не установлена, в карточке плагина указывается, какую библиотеку нужно установить."],code:"",table:null}]},{id:"wiki-cat-03",number:"03",title:"Эмуляция Java и Android",anchor:"эмуляция-java-и-android",items:[{id:"wiki-03-01",question:"Эмуляция Java и Android",category:"Эмуляция Java и Android",answer:`Код плагина импортирует Java-классы (from java.util import ArrayList, find_class("android.graphics.Color")). На ПК Java нет, поэтому самые используемые классы реализованы на Python и ведут себя как оригиналы.

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

При ошибке запуска движка её текст выводится в разделе плагинов настроек, а полный трейс Python записывается в log.txt.`,bullets:["пути строятся через os.path.join и file_utils.get_plugin_dir(), без обратной косой черты, букв дисков, %APPDATA%, /home/... и ~/Library;","имена файлов на Linux различают регистр;",'текстовые файлы открываются с encoding="utf-8";',"модули одной системы (winreg, msvcrt, winsound, fcntl, termios) импортируются внутри try/except ImportError."],code:"",table:null}]},{id:"wiki-cat-14",number:"14",title:"Отличия от Android",anchor:"отличия-от-android",items:[{id:"wiki-14-01",question:"Отличия от Android",category:"Отличия от Android",answer:"",bullets:["Нет Java и Chaquopy: модули java, android, org.telegram эмулируются.","Нет Xposed: срабатывают только перехваты из раздела «Хуки методов» и методы эмулированных классов.","Нет View Android: собственные экраны и Custom в настройках отображаются в упрощённом виде.","Плагин не может запускать программы и загружать нативные библиотеки.","Плагин не может скачивать и загружать код во время работы: такие плагины не проходят проверку PluginGuard.","Файлы вне своей папки доступны только по разрешению пользователя."],code:"",table:null}]}],kn=Wp,_r=[{id:"wiki-ai-01",number:"01",title:"Инструменты для ИИ",anchor:"ai-tools",items:[{id:"wiki-ai-01-01",question:"Скилл для Claude Code и промпт для чата",category:"Инструменты для ИИ",answer:"Инструкция для языковых моделей, которые пишут плагины exDesktop или переносят на ПК плагины exteraGram. В ней описаны API, работающие перехваты Android, таблица замен и правила защиты."}]},{id:"wiki-ai-02",number:"02",title:"Установка скилла",anchor:"install",items:[{id:"wiki-ai-02-01",question:"Установка скилла",category:"Установка скилла",answer:"В Windows папка скиллов находится в %USERPROFILE%\\.claude\\skills.",code:`mkdir -p ~/.claude/skills/exdesktop-plugins
curl -fsSL https://exdesktop.xyz/docs/ai/exdesktop-plugins/SKILL.md -o ~/.claude/skills/exdesktop-plugins/SKILL.md`}]},{id:"wiki-ai-03",number:"03",title:"Порядок работы",anchor:"usage",items:[{id:"wiki-ai-03-01",question:"Порядок работы",category:"Порядок работы",answer:"Встроенный в exDesktop ИИ-перенос использует тот же набор правил, но отправляет модели только нужные разделы и сам проверяет результат.",bullets:["Модель получает промпт и полный исходный код плагина.","В ответ она возвращает готовый файл .plugin и отчёт с разделами kept, changed и dropped.","Файл устанавливается в exDesktop через обычное окно установки с проверкой PluginGuard."]}]},{id:"wiki-ai-04",number:"04",title:"Текст промпта",anchor:"text",items:[{id:"wiki-ai-04-01",question:"Текст промпта",category:"Текст промпта",code:uc}]}],$p=({currentPath:e,theme:t,onToggleTheme:n,onOpenMobileMenu:r,onNavigate:i})=>{const o=e.startsWith("/wiki"),l=(s,u)=>{s.preventDefault(),i(u)};return a.jsxs("header",{className:"site-header",children:[a.jsxs("a",{href:"/",onClick:s=>l(s,"/"),className:"brand-link","aria-label":"exDesktop Главная",children:[a.jsx("div",{className:"brand-mark",children:a.jsx("img",{src:ue("assets/markSvg.svg"),alt:"",width:44,height:44})}),a.jsx("span",{className:"brand-text",children:"exDesktop"})]}),a.jsxs("nav",{className:"desktop-nav","aria-label":"Основная навигация",children:[a.jsx("a",{href:"/",onClick:s=>l(s,"/"),className:`nav-pill ${o?"":"active"}`,"aria-current":o?void 0:"page",children:"Главная"}),a.jsx("a",{href:"/#installation",onClick:s=>l(s,"/#installation"),className:"nav-pill",children:"Установка"}),a.jsx("a",{href:"/wiki",onClick:s=>l(s,"/wiki"),className:`nav-pill ${o?"active":""}`,"aria-current":o?"page":void 0,children:"WIKI"})]}),a.jsxs("div",{className:"header-actions",children:[a.jsx("button",{onClick:n,className:"theme-toggle-btn","aria-label":t==="dark"?"Включить светлую тему":"Включить тёмную тему",title:t==="dark"?"Включить светлую тему":"Включить тёмную тему",children:a.jsx(z,{name:t==="dark"?"sun":"moon",size:22,color:"var(--accent-primary)"})}),a.jsxs("a",{href:le.github,target:"_blank",rel:"noopener noreferrer",className:"desktop-github-btn","aria-label":"GitHub репозиторий exDesktop",children:[a.jsx(z,{name:"code",size:22,color:"currentColor"}),a.jsx("span",{children:"GitHub"})]}),a.jsx("button",{onClick:r,className:"mobile-burger-btn","aria-label":"Открыть мобильное меню","aria-expanded":"false",children:a.jsx(z,{name:"menu",size:24,color:"var(--accent-primary)"})})]}),a.jsx("style",{children:`
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
      `})]})},Gp=({isOpen:e,onClose:t,onNavigate:n})=>{const r=U.useRef(null);if(U.useEffect(()=>{if(e){document.body.style.overflow="hidden";const o=l=>{l.key==="Escape"&&t()};return window.addEventListener("keydown",o),()=>{document.body.style.overflow="",window.removeEventListener("keydown",o)}}else document.body.style.overflow=""},[e,t]),!e)return null;const i=(o,l)=>{o.preventDefault(),n(l),t()};return a.jsxs("div",{className:"mobile-menu-overlay",onClick:t,children:[a.jsxs("div",{className:"mobile-menu-panel",ref:r,onClick:o=>o.stopPropagation(),role:"dialog","aria-modal":"true","aria-label":"Мобильная навигация",children:[a.jsxs("div",{className:"mobile-menu-header",children:[a.jsxs("div",{className:"menu-brand",children:[a.jsx("img",{src:ue("assets/markSvg.svg"),alt:"",width:36,height:36}),a.jsx("span",{className:"menu-brand-text",children:"exDesktop"})]}),a.jsx("button",{onClick:t,className:"menu-close-btn","aria-label":"Закрыть мобильное меню",children:a.jsx(z,{name:"close",size:24,color:"var(--text-primary)"})})]}),a.jsxs("nav",{className:"mobile-menu-nav",children:[a.jsx("a",{href:"/",onClick:o=>i(o,"/"),className:"menu-item",children:"Главная"}),a.jsx("a",{href:"/#preview",onClick:o=>i(o,"/#preview"),className:"menu-item",children:"Превью"}),a.jsx("a",{href:"/#features",onClick:o=>i(o,"/#features"),className:"menu-item",children:"Возможности"}),a.jsx("a",{href:"/#installation",onClick:o=>i(o,"/#installation"),className:"menu-item",children:"Установка"}),a.jsx("a",{href:"/#roadmap",onClick:o=>i(o,"/#roadmap"),className:"menu-item",children:"Roadmap"}),a.jsx("a",{href:"/wiki",onClick:o=>i(o,"/wiki"),className:"menu-item",children:"WIKI"}),a.jsxs("a",{href:le.github,target:"_blank",rel:"noopener noreferrer",className:"menu-item external",children:[a.jsx("span",{children:"GitHub"}),a.jsx(z,{name:"arrow_external",size:20,color:"var(--text-secondary)"})]})]}),a.jsx("div",{className:"mobile-menu-cta",children:a.jsxs("a",{href:le.download,target:"_blank",rel:"noopener noreferrer",className:"pill-button primary",style:{width:"100%"},children:[a.jsx(z,{name:"download",size:22,color:"var(--text-on-accent)"}),a.jsx("span",{children:"Скачать exDesktop"})]})})]}),a.jsx("style",{children:`
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
      `})]})},Qa="7.4.3.2",Xa="https://github.com/metawka/exDesktop/releases/latest";function Ol(){const[e,t]=U.useState({version:Qa,rawTag:`v${Qa}`,releaseUrl:Xa,isLoading:!0});return U.useEffect(()=>{let n=!0;async function r(){try{const i=await fetch("https://api.github.com/repos/metawka/exDesktop/releases/latest");if(!i.ok)throw new Error(`GitHub API HTTP ${i.status}`);const o=await i.json();if(n&&o.tag_name){const l=String(o.tag_name),s=l.replace(/^v/,"");t({version:s,rawTag:l,releaseUrl:o.html_url||Xa,publishedAt:o.published_at,isLoading:!1})}}catch{n&&t(i=>({...i,isLoading:!1}))}}return r(),()=>{n=!1}},[]),e}const qp=({onNavigate:e})=>{const{version:t,releaseUrl:n}=Ol();return a.jsxs("section",{className:"hero-section",children:[a.jsx("svg",{width:"0",height:"0",style:{position:"absolute"},children:a.jsx("defs",{children:a.jsx("clipPath",{id:"avatar-cookie-mask",clipPathUnits:"userSpaceOnUse",children:a.jsx("path",{d:"M 151.9788055419922 0 L 157.3349151611328 0.621101975440979 L 162.5776824951172 2.42891788482666 L 167.6116943359375 5.262959957122803 L 172.37478637695312 8.875022888183594 L 176.84869384765625 12.955833435058594 L 181.06332397460938 17.168109893798828 L 185.09396362304688 21.182355880737305 L 189.05169677734375 24.711458206176758 L 193.06805419921875 27.540287017822266 L 197.2759552001953 29.547109603881836 L 201.7893524169922 30.71457862854004 L 206.6844024658203 31.129234313964844 L 211.9846649169922 30.969768524169922 L 217.65261840820312 30.485523223876953 L 223.58880615234375 29.96784210205078 L 229.6391143798828 29.717531204223633 L 235.60964965820312 30.012187957763672 L 241.28759765625 31.076984405517578 L 246.46585083007812 33.06210708618164 L 250.9680938720703 36.02915573120117 L 254.671875 39.94778823852539 L 257.5260314941406 44.70264434814453 L 259.5606384277344 50.10944747924805 L 260.8875732421875 55.93810272216797 L 261.6916809082031 61.93995666503906 L 262.2126770019531 67.8758544921875 L 262.72003173828125 73.54179382324219 L 263.4833679199219 78.78923034667969 L 264.7417297363281 83.53790283203125 L 266.6752014160156 87.77999877929688 L 269.3822326660156 91.57548522949219 L 272.86553955078125 95.03961181640625 L 277.02825927734375 98.32439422607422 L 281.6814270019531 101.59673309326172 L 286.56158447265625 105.01587677001953 L 291.3572692871094 108.71318817138672 L 295.7415771484375 112.77668762207031 L 299.4067077636719 117.24209594726562 L 302.0974426269531 122.09129333496094 L 303.6391906738281 127.2581787109375 L 303.9576110839844 132.64077758789062 L 303.087646484375 138.11781311035156 L 301.1708068847656 143.56747436523438 L 298.44073486328125 148.88543701171875 L 295.19879150390625 154 L 291.7823791503906 158.88204956054688 L 288.529052734375 163.54852294921875 L 285.7408142089844 168.0589599609375 L 283.6523742675781 172.50550842285156 L 282.40673828125 176.9979705810547 L 282.0407409667969 181.64552307128906 L 282.482421875 186.5382080078125 L 283.5598449707031 191.73025512695312 L 285.0209655761719 197.22801208496094 L 286.56158447265625 202.984130859375 L 287.85870361328125 208.8990478515625 L 288.6053161621094 214.8300323486328 L 288.54266357421875 220.6066436767578 L 287.48687744140625 226.05091857910156 L 285.3467102050781 231 L 282.1307678222656 235.32797241210938 L 277.94378662109375 238.96444702148438 L 272.972412109375 241.90699768066406 L 267.4627380371094 244.22593688964844 L 261.6916809082031 246.06004333496094 L 255.9364471435547 247.6038818359375 L 250.44468688964844 249.08738708496094 L 245.40951538085938 250.75033569335938 L 240.95150756835938 252.81419372558594 L 237.10960388183594 255.45492553710938 L 233.8418426513672 258.7799072265625 L 231.03521728515625 262.8117980957031 L 228.523193359375 267.4817199707031 L 226.10858154296875 272.6324157714844 L 223.58880615234375 278.03216552734375 L 220.78042602539062 283.39703369140625 L 217.53997802734375 288.42034912109375 L 213.7788543701172 292.8052062988281 L 209.4705810546875 296.297119140625 L 204.64990234375 298.7126770019531 L 199.40438842773438 299.9609069824219 L 193.85948181152344 300.0552673339844 L 188.15975952148438 299.1138610839844 L 182.44851684570312 297.34869384765625 L 176.84869384765625 295.0441589355469 L 171.44757080078125 292.52740478515625 L 166.28704833984375 290.1338195800781 L 161.3609619140625 288.1711730957031 L 156.6193084716797 286.8865966796875 L 151.9788055419922 286.44000244140625 L 147.3383026123047 286.8865966796875 L 142.59664916992188 288.1711730957031 L 137.67056274414062 290.1338195800781 L 132.5100555419922 292.52740478515625 L 127.10891723632812 295.0441589355469 L 121.50910186767578 297.34869384765625 L 115.79785919189453 299.1138610839844 L 110.09813690185547 300.0552673339844 L 104.55323028564453 299.9609069824219 L 99.30770111083984 298.7126770019531 L 94.4870376586914 296.297119140625 L 90.17874908447266 292.8052062988281 L 86.4176254272461 288.42034912109375 L 83.17718505859375 283.39703369140625 L 80.36880493164062 278.03216552734375 L 77.84903717041016 272.6324157714844 L 75.4344253540039 267.4817199707031 L 72.92239379882812 262.8117980957031 L 70.11576843261719 258.7799072265625 L 66.84801483154297 255.45492553710938 L 63.006107330322266 252.81419372558594 L 58.548091888427734 250.75033569335938 L 53.51293182373047 249.08738708496094 L 48.02117156982422 247.6038818359375 L 42.26592254638672 246.06004333496094 L 36.49488067626953 244.22593688964844 L 30.985197067260742 241.90699768066406 L 26.013839721679688 238.96444702148438 L 21.826839447021484 235.32797241210938 L 18.61089515686035 231 L 16.47072982788086 226.05091857910156 L 15.414958000183105 220.6066436767578 L 15.35230541229248 214.8300323486328 L 16.09889793395996 208.8990478515625 L 17.396028518676758 202.984130859375 L 18.936655044555664 197.22801208496094 L 20.39777374267578 191.73025512695312 L 21.47519874572754 186.5382080078125 L 21.91685676574707 181.64552307128906 L 21.550867080688477 176.9979705810547 L 20.305227279663086 172.50550842285156 L 18.216808319091797 168.0589599609375 L 15.428573608398438 163.54852294921875 L 12.175226211547852 158.88204956054688 L 8.758806228637695 154 L 5.516878128051758 148.88543701171875 L 2.7867932319641113 143.56747436523438 L 0.8699530959129333 138.11781311035156 L 0 132.64077758789062 L 0.31841254234313965 127.2581787109375 L 1.8601571321487427 122.09129333496094 L 4.550906181335449 117.24209594726562 L 8.216039657592773 112.77668762207031 L 12.600329399108887 108.71318817138672 L 17.396028518676758 105.01587677001953 L 22.276172637939453 101.59673309326172 L 26.929346084594727 98.32439422607422 L 31.09208869934082 95.03961181640625 L 34.575374603271484 91.57548522949219 L 37.28240203857422 87.77999877929688 L 39.215877532958984 83.53790283203125 L 40.47425079345703 78.78923034667969 L 41.237586975097656 73.54179382324219 L 41.744930267333984 67.8758544921875 L 42.26592254638672 61.93995666503906 L 43.070037841796875 55.93810272216797 L 44.39698791503906 50.10944747924805 L 46.43157958984375 44.70264434814453 L 49.28573226928711 39.94778823852539 L 52.9895133972168 36.02915573120117 L 57.49176788330078 33.06210708618164 L 62.67000961303711 31.076984405517578 L 68.34796905517578 30.012187957763672 L 74.3185043334961 29.717531204223633 L 80.36880493164062 29.96784210205078 L 86.30499267578125 30.485523223876953 L 91.97295379638672 30.969768524169922 L 97.2732162475586 31.129234313964844 L 102.16826629638672 30.71457862854004 L 106.68165588378906 29.547109603881836 L 110.88955688476562 27.540287017822266 L 114.90591430664062 24.711458206176758 L 118.8636474609375 21.182355880737305 L 122.894287109375 17.168109893798828 L 127.10891723632812 12.955833435058594 L 131.58282470703125 8.875022888183594 L 136.34591674804688 5.262959957122803 L 141.3799285888672 2.42891788482666 L 146.62269592285156 0.621101975440979 L 151.9788055419922 0 Z"})})})}),a.jsx("div",{className:"hero-decor flower anim-flower","aria-hidden":"true",children:a.jsx("img",{src:ue("assets/flowerSvg.svg"),alt:"",width:310,height:310})}),a.jsx("div",{className:"hero-decor clover anim-clover","aria-hidden":"true",children:a.jsx("img",{src:ue("assets/cloverSvg.svg"),alt:"",width:130,height:130})}),a.jsxs("div",{className:"hero-content",children:[a.jsxs("a",{href:n,target:"_blank",rel:"noopener noreferrer",className:"version-badge",title:`Открыть актуальный релиз ${t} на GitHub`,"aria-label":`Актуальная версия ${t}`,children:[a.jsx(z,{name:"check",size:18,color:"var(--accent-primary)"}),a.jsxs("span",{children:[t," — Актуальная версия"]})]}),a.jsx("h1",{className:"hero-title",children:"exDesktop"}),a.jsx("p",{className:"hero-description",children:"Модифицированный кросс-платформенный клиент для Windows, Linux и macOS на основе исходного кода Telegram"}),a.jsxs("div",{className:"hero-actions",children:[a.jsxs("a",{href:n||le.download,target:"_blank",rel:"noopener noreferrer",className:"pill-button primary hero-download-btn",children:[a.jsx(z,{name:"download",size:22,color:"var(--text-on-accent)"}),a.jsx("span",{children:"Скачать exDesktop"})]}),a.jsxs("a",{href:"/wiki",onClick:i=>{i.preventDefault(),e("/wiki")},className:"pill-button secondary hero-learn-btn",children:[a.jsx("span",{children:"Узнать больше"}),a.jsx(z,{name:"arrow_right",size:22,color:"var(--text-primary)"})]})]})]}),a.jsxs("div",{className:"hero-portrait-wrapper",children:[a.jsxs("div",{className:"portrait-container",children:[a.jsx("div",{className:"sunny-ring anim-sunny","aria-hidden":"true",children:a.jsx("img",{src:ue("assets/sunnySvg.svg"),alt:"",width:348,height:348})}),a.jsx("div",{className:"avatar-cookie-container",children:a.jsx("div",{className:"avatar-border-line",children:a.jsx("img",{src:ue("avatar.jpg"),alt:"Аватар METAWKA, разработчика exDesktop",className:"avatar-image",width:304,height:300})})})]}),a.jsx("div",{className:"developer-signature",children:a.jsx("span",{children:"METAWKA — Разработчик"})})]}),a.jsx("style",{children:`
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
      `})]})},Kp=()=>a.jsxs("section",{className:"preview-section",id:"preview",children:[a.jsx("div",{className:"section-header",children:a.jsx("h2",{className:"section-title",children:"Скриншоты exDesktop"})}),a.jsxs("div",{className:"preview-grid",children:[a.jsxs("a",{href:ue("screenshots/settings.webp"),target:"_blank",rel:"noopener noreferrer",className:"preview-card","aria-label":"Скриншот Настройки клиента (открыть оригинал в новой вкладке)",children:[a.jsx("div",{className:"preview-image-wrapper",children:a.jsx("img",{src:ue("screenshots/settings.webp"),alt:"Скриншот настроек exDesktop",className:"preview-image",loading:"lazy"})}),a.jsxs("div",{className:"preview-card-footer",children:[a.jsx("span",{className:"card-label",children:"Настройки клиента"}),a.jsx(z,{name:"arrow_external",size:20,color:"var(--text-secondary)"})]})]}),a.jsxs("a",{href:ue("screenshots/appearance.webp"),target:"_blank",rel:"noopener noreferrer",className:"preview-card","aria-label":"Скриншот Оформление под себя (открыть оригинал в новой вкладке)",children:[a.jsx("div",{className:"preview-image-wrapper",children:a.jsx("img",{src:ue("screenshots/appearance.webp"),alt:"Скриншот оформления exDesktop",className:"preview-image",loading:"lazy"})}),a.jsxs("div",{className:"preview-card-footer",children:[a.jsx("span",{className:"card-label",children:"Оформление под себя"}),a.jsx(z,{name:"arrow_external",size:20,color:"var(--text-secondary)"})]})]})]}),a.jsx("style",{children:`
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
      `})]}),Qp=()=>a.jsxs("section",{className:"features-section",id:"features",children:[a.jsx("div",{className:"section-header",children:a.jsx("h2",{className:"section-title",children:"Функционал exDesktop"})}),a.jsx("div",{className:"features-grid",children:Hp.map(e=>a.jsxs("div",{className:"feature-card",children:[a.jsx("div",{className:"feature-icon-tile",children:a.jsx(z,{name:e.iconName,size:24,color:"var(--accent-primary)"})}),a.jsx("h3",{className:"feature-title",children:e.title}),a.jsx("p",{className:"feature-desc",children:e.description})]},e.id))}),a.jsx("style",{children:`
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
      `})]}),Xp=()=>{const[e,t]=U.useState(!1),{version:n,releaseUrl:r}=Ol(),i=()=>{navigator.clipboard.writeText(Bp).then(()=>{t(!0),setTimeout(()=>t(!1),2e3)})};return a.jsxs("section",{className:"installation-section",id:"installation",children:[a.jsxs("div",{className:"install-grid",children:[a.jsxs("div",{className:"install-card",children:[a.jsxs("div",{className:"install-header",children:[a.jsx("h2",{className:"install-title",children:"Установить exDesktop"}),a.jsx("p",{className:"install-subtitle",children:"Для Linux / macOS выполни команду"})]}),a.jsxs("div",{className:"terminal-box",onClick:i,title:"Нажмите, чтобы скопировать команду",children:[a.jsxs("div",{className:"terminal-top",children:[a.jsx("span",{className:"terminal-label",children:"TERMINAL / LINUX · macOS"}),a.jsxs("button",{type:"button",className:"copy-btn","aria-label":"Скопировать команду установки",children:[a.jsx(z,{name:e?"check":"terminal",size:16,color:"var(--terminal-sub)"}),a.jsx("span",{children:e?"Скопировано!":"Копировать"})]})]}),a.jsx("pre",{className:"terminal-code",children:a.jsx("code",{children:Up})})]}),a.jsx("div",{className:"windows-link-wrapper",children:a.jsxs("a",{href:r||le.download,target:"_blank",rel:"noopener noreferrer",className:"windows-link",title:`Скачать установщик версии ${n} с GitHub Releases`,children:[a.jsxs("span",{children:["На Windows? Скачай установщик (",n,") со страницы релизов"]}),a.jsx(z,{name:"arrow_external",size:18,color:"var(--accent-primary)"})]})})]}),a.jsxs("div",{className:"repository-card",children:[a.jsxs("div",{className:"repo-top",children:[a.jsx("div",{className:"repo-icon-tile",children:a.jsx(z,{name:"github",size:28,color:"var(--text-primary)"})}),a.jsx("a",{href:le.github,target:"_blank",rel:"noopener noreferrer",className:"repo-out-link","aria-label":"Открыть GitHub репозиторий",children:a.jsx(z,{name:"arrow_external",size:24,color:"var(--repo-desc)"})})]}),a.jsxs("div",{className:"repo-text-group",children:[a.jsxs("h3",{className:"repo-title",children:["Открытый исходный код.",a.jsx("br",{}),"Лицензия GPL 3.0"]}),a.jsx("p",{className:"repo-desc",children:"Смотри, как всё устроено, предлагай идеи и участвуй в развитии."})]}),a.jsxs("a",{href:le.github,target:"_blank",rel:"noopener noreferrer",className:"repo-action-btn",children:[a.jsx("span",{children:"metawka / exDesktop"}),a.jsx(z,{name:"arrow_right",size:20,color:"currentColor"})]})]})]}),a.jsx("style",{children:`
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
      `})]})},Yp=()=>a.jsxs("section",{className:"roadmap-section",id:"roadmap",children:[a.jsx("div",{className:"section-header",children:a.jsx("h2",{className:"section-title",children:"Roadmap"})}),a.jsx("div",{className:"rm-grid",children:Vp.map(e=>a.jsxs("div",{className:`rm-col rm-${e.status}`,children:[a.jsxs("div",{className:"rm-head",children:[a.jsx("span",{className:"rm-dot","aria-hidden":"true"}),a.jsx("span",{className:"rm-col-title",children:e.title}),a.jsx("span",{className:"rm-count",children:e.items.length})]}),a.jsx("ul",{className:"rm-list",children:e.items.map(t=>a.jsxs("li",{className:"rm-item",children:[a.jsx("div",{className:"rm-item-title",children:t.title}),t.text&&a.jsx("div",{className:"rm-item-text",children:t.text}),t.version&&a.jsx("span",{className:"rm-ver-badge",children:t.version})]},t.id))})]},e.id))}),a.jsx("style",{children:`
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
      `})]}),Jp=({onNavigate:e})=>a.jsxs("section",{className:"quick-wiki-section",id:"wiki",children:[a.jsxs("div",{className:"quick-wiki-grid",children:[a.jsxs("div",{className:"wiki-intro-card",children:[a.jsxs("div",{className:"intro-top",children:[a.jsx("div",{className:"wiki-icon-emblem",children:a.jsx(z,{name:"help",size:40,color:"var(--accent-primary)"})}),a.jsxs("h2",{className:"intro-headline",children:["Остались вопросы?",a.jsx("br",{}),"Хотите что-то узнать?"]})]}),a.jsxs("a",{href:le.wiki,onClick:t=>{t.preventDefault(),e("/wiki")},className:"full-wiki-btn",children:[a.jsx("span",{children:"Открыть WIKI"}),a.jsx(z,{name:"arrow_right",size:22,color:"currentColor"})]})]}),a.jsxs("div",{className:"wiki-list-col",children:[a.jsxs("div",{className:"wiki-expanded-card",children:[a.jsxs("div",{className:"wiki-card-header",children:[a.jsx("h3",{className:"question-title",children:"Форматы плагинов и совместимость"}),a.jsx("div",{className:"wiki-chevron-down",children:a.jsx(z,{name:"arrow_down",size:24,color:"var(--text-secondary)"})})]}),a.jsxs("div",{className:"answer-content",children:[a.jsx("p",{children:"exDesktop запускает плагины exteraGram на компьютере. Движок плагинов совместим с SDK exteraGram 1.4.6.2: плагин из каталога устанавливается без изменений, а его функции работают в той мере, в которой у них есть аналог на ПК."}),a.jsx("p",{style:{marginTop:"8px"},children:"Поддерживаются форматы однофайловых плагинов (.plugin, .py) и архивы Elyx (.elyx, .eaf). Метаданные читаются безопасно из констант верхнего уровня без выполнения кода."})]})]}),a.jsxs("a",{href:"/wiki#что-работает-так-же-как-на-android",onClick:t=>{t.preventDefault(),e("/wiki#что-работает-так-же-как-на-android")},className:"wiki-link-row",children:[a.jsx("span",{className:"question-row-title",children:"Что работает так же, как на Android?"}),a.jsx("div",{className:"wiki-chevron-right",children:a.jsx(z,{name:"arrow_right",size:24,color:"var(--text-secondary)"})})]}),a.jsxs("a",{href:"/wiki#эмуляция-java-и-android",onClick:t=>{t.preventDefault(),e("/wiki#эмуляция-java-и-android")},className:"wiki-link-row",children:[a.jsx("span",{className:"question-row-title",children:"Эмуляция Java, Android и Xposed-хуки"}),a.jsx("div",{className:"wiki-chevron-right",children:a.jsx(z,{name:"arrow_right",size:24,color:"var(--text-secondary)"})})]}),a.jsxs("a",{href:"/wiki#защита",onClick:t=>{t.preventDefault(),e("/wiki#защита")},className:"wiki-link-row",children:[a.jsx("span",{className:"question-row-title",children:"Песочница, защита данных и PluginGuard"}),a.jsx("div",{className:"wiki-chevron-right",children:a.jsx(z,{name:"arrow_right",size:24,color:"var(--text-secondary)"})})]}),a.jsxs("a",{href:"/wiki/ai",onClick:t=>{t.preventDefault(),e("/wiki/ai")},className:"wiki-link-row",children:[a.jsx("span",{className:"question-row-title",children:"Скилл и промпт для ИИ (написание плагинов)"}),a.jsx("div",{className:"wiki-chevron-right",children:a.jsx(z,{name:"arrow_right",size:24,color:"var(--text-secondary)"})})]})]})]}),a.jsx("style",{children:`
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
      `})]}),Zp=({onNavigate:e})=>{const t=[...kn,..._r],[n,r]=U.useState(()=>{var m;if(typeof window<"u"){const g=window.location.hash.replace("#",""),y=g?decodeURIComponent(g):"";if(y)return y}return((m=kn[0])==null?void 0:m.anchor)||"форматы-плагинов"}),[i,o]=U.useState(!1),[l,s]=U.useState(!1),u=U.useRef(!1),d=U.useRef(null),v=U.useRef(null);U.useEffect(()=>{const m=()=>{const g=window.location.hash.replace("#",""),y=g?decodeURIComponent(g):"";y&&(r(y),setTimeout(()=>{const E=document.getElementById(y);E&&E.scrollIntoView({behavior:"smooth"})},60))};return m(),window.addEventListener("popstate",m),()=>window.removeEventListener("popstate",m)},[]),U.useEffect(()=>{let m=!1;const g=()=>{if(u.current)return;if(window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-60){r(t[t.length-1].anchor);return}const E=180;let p=t[0].anchor;for(let c=0;c<t.length;c++){const f=t[c],w=document.getElementById(f.anchor);if(!w)continue;if(w.getBoundingClientRect().top<=E)p=f.anchor;else break}r(p)},y=()=>{m||(window.requestAnimationFrame(()=>{g(),m=!1}),m=!0)};return window.addEventListener("scroll",y,{passive:!0}),g(),()=>{window.removeEventListener("scroll",y),d.current&&clearTimeout(d.current)}},[t]),U.useEffect(()=>{if(!v.current)return;const m=v.current,g=m.querySelector(".toc-item.active");if(g){const y=m.getBoundingClientRect(),E=g.getBoundingClientRect();(E.top<y.top+20||E.bottom>y.bottom-20)&&m.scrollTo({top:g.offsetTop-m.offsetTop-m.clientHeight/2+g.clientHeight/2,behavior:"smooth"})}},[n]);const x=(m,g)=>{m.preventDefault(),r(g),o(!1),window.history.pushState(null,"",`/wiki#${g}`),u.current=!0,d.current&&clearTimeout(d.current),d.current=window.setTimeout(()=>{u.current=!1},800);const y=document.getElementById(g);y&&y.scrollIntoView({behavior:"smooth"})},h=()=>{navigator.clipboard.writeText(uc).then(()=>{s(!0),setTimeout(()=>s(!1),2e3)})};return a.jsxs("div",{className:"full-wiki-page",children:[a.jsx("div",{className:"wiki-top-nav",children:a.jsxs("a",{href:"/",onClick:m=>{m.preventDefault(),e("/")},className:"back-home-btn",children:[a.jsx(z,{name:"arrow_left",size:20,color:"var(--text-primary)"}),a.jsx("span",{children:"На главную"})]})}),a.jsxs("section",{className:"wiki-heading-zone",children:[a.jsxs("div",{className:"heading-left",children:[a.jsx("div",{className:"wiki-eyebrow",children:"ДОКУМЕНТАЦИЯ / WIKI"}),a.jsx("h1",{className:"wiki-page-title",children:"WIKI exDesktop"})]}),a.jsx("div",{className:"heading-right-emblem","aria-hidden":"true",children:a.jsx("img",{src:ue("assets/questionEmblemSvg.svg"),alt:"",width:148,height:148})})]}),a.jsxs("div",{className:"wiki-main-layout",children:[a.jsxs("aside",{className:"wiki-sidebar",ref:v,children:[a.jsxs("div",{className:"wiki-toc-card",children:[a.jsxs("button",{type:"button",className:"toc-header-toggle",onClick:()=>o(!i),"aria-expanded":i,children:[a.jsxs("span",{className:"toc-title",children:["ОГЛАВЛЕНИЕ WIKI (",t.length,")"]}),a.jsx("span",{className:`toc-toggle-indicator ${i?"open":""}`,"aria-hidden":"true",children:a.jsx(z,{name:"arrow_down",size:20,color:"var(--text-primary)"})})]}),a.jsxs("div",{className:`toc-groups-container ${i?"mobile-open":""}`,children:[a.jsxs("div",{className:"toc-group",children:[a.jsxs("div",{className:"toc-group-header",children:[a.jsx("span",{className:"group-title-text",children:"SDK плагинов exDesktop"}),a.jsx("span",{className:"group-badge",children:kn.length})]}),a.jsx("nav",{className:"toc-list","aria-label":"Оглавление SDK плагинов",children:kn.map(m=>a.jsxs("a",{href:`/wiki#${m.anchor}`,onClick:g=>x(g,m.anchor),className:`toc-item ${n===m.anchor?"active":""}`,children:[a.jsx("span",{className:"toc-num",children:m.number}),a.jsx("span",{className:"toc-label",children:m.title})]},m.id))})]}),a.jsxs("div",{className:"toc-group",children:[a.jsxs("div",{className:"toc-group-header",children:[a.jsx("span",{className:"group-title-text",children:"Скилл и промпт для ИИ"}),a.jsx("span",{className:"group-badge",children:_r.length})]}),a.jsx("nav",{className:"toc-list","aria-label":"Оглавление инструментов для ИИ",children:_r.map(m=>a.jsxs("a",{href:`/wiki#${m.anchor}`,onClick:g=>x(g,m.anchor),className:`toc-item ${n===m.anchor?"active":""}`,children:[a.jsx("span",{className:"toc-num",children:m.number}),a.jsx("span",{className:"toc-label",children:m.title})]},m.id))})]})]})]}),a.jsxs("a",{href:le.telegramChat,target:"_blank",rel:"noopener noreferrer",className:"community-hint-card desktop-only","aria-label":"Задать вопрос в Telegram Chat сообщества",children:[a.jsx("div",{className:"hint-icon",children:a.jsx(z,{name:"chat",size:28,color:"var(--accent-primary)"})}),a.jsx("h3",{className:"hint-heading",children:"Не нашёл ответ?"}),a.jsx("p",{className:"hint-body",children:"Загляни в чат сообщества. Вместе разберёмся."})]})]}),a.jsxs("main",{className:"wiki-articles-content",children:[a.jsxs("div",{className:"major-section-banner",id:"sdk-plugins",children:[a.jsx("div",{className:"banner-eyebrow",children:"РАЗДЕЛ I"}),a.jsx("h2",{className:"banner-title",children:"SDK плагинов exDesktop"})]}),kn.map(m=>a.jsxs("article",{id:m.anchor,className:"wiki-article-section",children:[a.jsxs("div",{className:"article-header",children:[a.jsx("span",{className:"section-number",children:m.number}),a.jsx("h3",{className:"section-title",children:m.title})]}),a.jsx("div",{className:"questions-container",children:m.items.map(g=>a.jsxs("div",{className:"article-item",children:[g.question&&g.question!==m.title&&a.jsx("h4",{className:"item-question",children:g.question}),g.answer&&a.jsx("p",{className:"item-answer",children:g.answer}),g.code&&a.jsx("pre",{className:"code-block",children:a.jsx("code",{children:g.code})}),g.bullets&&g.bullets.length>0&&a.jsx("ul",{className:"item-bullets",children:g.bullets.map((y,E)=>a.jsx("li",{children:y},E))}),g.table&&a.jsx("div",{className:"table-container",children:a.jsxs("table",{className:"wiki-doc-table",children:[g.table.headers&&a.jsx("thead",{children:a.jsx("tr",{children:g.table.headers.map((y,E)=>a.jsx("th",{children:y},E))})}),a.jsx("tbody",{children:g.table.rows.map((y,E)=>a.jsx("tr",{children:y.map((p,c)=>a.jsx("td",{children:p},c))},E))})]})})]},g.id))})]},m.id)),a.jsxs("div",{className:"major-section-banner ai-banner",id:"ai-docs",children:[a.jsx("div",{className:"banner-eyebrow",children:"РАЗДЕЛ II"}),a.jsx("h2",{className:"banner-title",children:"Скилл и промпт для ИИ"}),a.jsx("p",{className:"banner-desc",children:"Инструкция для языковых моделей, которые пишут плагины exDesktop или переносят на ПК плагины exteraGram. В ней описаны API, работающие перехваты Android, таблица замен и правила защиты."})]}),_r.map(m=>a.jsxs("article",{id:m.anchor,className:"wiki-article-section",children:[a.jsxs("div",{className:"article-header",children:[a.jsx("span",{className:"section-number",children:m.number}),a.jsx("h3",{className:"section-title",children:m.title})]}),m.anchor==="ai-tools"&&a.jsxs("div",{className:"ai-tools-cards-grid",children:[a.jsxs("div",{className:"ai-card",children:[a.jsxs("div",{className:"ai-card-header",children:[a.jsx("div",{className:"ai-card-icon",children:a.jsx(z,{name:"code",size:24,color:"var(--accent-primary)"})}),a.jsx("h4",{className:"ai-card-title",children:"Скилл для Claude Code"})]}),a.jsxs("p",{className:"ai-card-desc",children:["Файл ",a.jsx("code",{children:"SKILL.md"})," помещается в папку ",a.jsx("code",{children:"~/.claude/skills/exdesktop-plugins/"}),". Claude применяет его сам, когда речь идёт о плагинах exDesktop."]}),a.jsx("div",{className:"ai-card-actions",children:a.jsxs("a",{href:ue("docs/ai/exdesktop-plugins/SKILL.md"),download:"SKILL.md",className:"pill-button primary ai-btn",children:[a.jsx(z,{name:"download",size:18,color:"var(--text-on-accent)"}),a.jsx("span",{children:"Скачать SKILL.md"})]})})]}),a.jsxs("div",{className:"ai-card",children:[a.jsxs("div",{className:"ai-card-header",children:[a.jsx("div",{className:"ai-card-icon",children:a.jsx(z,{name:"chat",size:24,color:"var(--accent-primary)"})}),a.jsx("h4",{className:"ai-card-title",children:"Промпт для чата"})]}),a.jsx("p",{className:"ai-card-desc",children:"Тот же текст без служебного заголовка. Вставляется первым сообщением или в системный промпт ChatGPT, Gemini, DeepSeek и локальных моделей, следом отправляется исходный код плагина."}),a.jsxs("div",{className:"ai-card-actions",children:[a.jsxs("button",{type:"button",className:"pill-button primary ai-btn",onClick:h,children:[a.jsx(z,{name:l?"check":"terminal",size:18,color:"var(--text-on-accent)"}),a.jsx("span",{children:l?"Скопировано!":"Скопировать промпт"})]}),a.jsxs("a",{href:ue("docs/ai/prompt.md"),target:"_blank",rel:"noopener noreferrer",className:"pill-button secondary ai-btn",children:[a.jsx("span",{children:"Открыть файл"}),a.jsx(z,{name:"arrow_external",size:16,color:"currentColor"})]})]})]})]}),m.anchor==="text"&&a.jsxs("div",{className:"prompt-top-action-bar",children:[a.jsx("span",{className:"prompt-meta-note",children:"Полный текст системного промпта для языковых моделей"}),a.jsxs("button",{type:"button",className:"copy-prompt-btn",onClick:h,title:"Скопировать весь промпт в буфер обмена",children:[a.jsx(z,{name:l?"check":"terminal",size:16,color:"var(--accent-primary)"}),a.jsx("span",{children:l?"Скопировано!":"Скопировать промпт"})]})]}),a.jsx("div",{className:"questions-container",children:m.items.map(g=>a.jsxs("div",{className:"article-item",children:[g.question&&g.question!==m.title&&a.jsx("h4",{className:"item-question",children:g.question}),g.answer&&a.jsx("p",{className:"item-answer",children:g.answer}),g.code&&a.jsx("pre",{className:"code-block",children:a.jsx("code",{children:g.code})}),g.bullets&&g.bullets.length>0&&a.jsx("ul",{className:"item-bullets",children:g.bullets.map((y,E)=>a.jsx("li",{children:y},E))}),g.table&&a.jsx("div",{className:"table-container",children:a.jsxs("table",{className:"wiki-doc-table",children:[g.table.headers&&a.jsx("thead",{children:a.jsx("tr",{children:g.table.headers.map((y,E)=>a.jsx("th",{children:y},E))})}),a.jsx("tbody",{children:g.table.rows.map((y,E)=>a.jsx("tr",{children:y.map((p,c)=>a.jsx("td",{children:p},c))},E))})]})})]},g.id))})]},m.id)),a.jsxs("a",{href:le.telegramChat,target:"_blank",rel:"noopener noreferrer",className:"community-hint-card mobile-only","aria-label":"Задать вопрос в Telegram Chat сообщества",children:[a.jsx("div",{className:"hint-icon",children:a.jsx(z,{name:"chat",size:28,color:"var(--accent-primary)"})}),a.jsx("h3",{className:"hint-heading",children:"Не нашёл ответ?"}),a.jsx("p",{className:"hint-body",children:"Загляни в чат сообщества. Вместе разберёмся."})]})]})]}),a.jsx("style",{children:`
        .full-wiki-page {
          width: 100%;
          margin-top: 24px;
          min-width: 0;
        }

        /* Top Navigation Bar */
        .wiki-top-nav {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
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
          transition: background-color 150ms ease, transform 150ms ease;
          border: 1px solid var(--border-subtle);
        }

        .back-home-btn:hover {
          background-color: var(--surface-raised);
          transform: translateX(-2px);
        }

        /* Heading Zone */
        .wiki-heading-zone {
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-height: 120px;
          padding: 8px 0 24px 0;
          position: relative;
        }

        .heading-left {
          max-width: 850px;
          min-width: 0;
        }

        .wiki-eyebrow {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: var(--accent-primary);
          margin-bottom: 8px;
        }

        .wiki-page-title {
          font-size: clamp(34px, 5.5vw, 56px);
          font-weight: 600;
          line-height: 1.15;
          letter-spacing: -0.025em;
          color: var(--text-primary);
          word-break: break-word;
        }

        .heading-right-emblem {
          transform: rotate(8deg);
          user-select: none;
          pointer-events: none;
          flex-shrink: 0;
        }

        /* Major Section Banner */
        .major-section-banner {
          background-color: var(--surface-soft);
          border: 1px solid var(--border-subtle);
          border-radius: 24px;
          padding: 24px 28px;
          margin-bottom: 16px;
        }

        .major-section-banner.ai-banner {
          margin-top: 36px;
        }

        .banner-eyebrow {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: var(--accent-primary);
          margin-bottom: 6px;
        }

        .banner-title {
          font-size: 28px;
          font-weight: 700;
          line-height: 1.25;
          color: var(--text-primary);
        }

        .banner-desc {
          font-size: 15.5px;
          line-height: 1.55;
          color: var(--text-secondary);
          margin-top: 10px;
          max-width: 780px;
        }

        /* Main Layout */
        .wiki-main-layout {
          display: grid;
          grid-template-columns: 340px 1fr;
          gap: 28px;
          margin-top: 16px;
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
          padding: 18px 14px;
          border: 1px solid var(--border-subtle);
          min-width: 0;
        }

        .toc-header-toggle {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 10px;
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

        .toc-groups-container {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .toc-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .toc-group-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 4px 10px;
          color: var(--accent-primary);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .group-title-text {
          flex: 1;
        }

        .group-badge {
          font-family: var(--font-mono);
          font-size: 11px;
          padding: 2px 6px;
          border-radius: 6px;
          background-color: var(--surface-card);
          color: var(--text-secondary);
        }

        .toc-list {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .toc-item {
          display: flex;
          align-items: center;
          gap: 10px;
          min-height: 40px;
          border-radius: 12px;
          padding: 8px 12px;
          font-size: 13.5px;
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
          font-size: 12px;
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

        /* Articles Content */
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

        /* AI Cards Grid */
        .ai-tools-cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-bottom: 24px;
        }

        .ai-card {
          background-color: var(--surface-soft);
          border: 1px solid var(--border-subtle);
          border-radius: 22px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 16px;
        }

        .ai-card-header {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .ai-card-icon {
          width: 44px;
          height: 44px;
          border-radius: 14px;
          background-color: var(--surface-card);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .ai-card-title {
          font-size: 19px;
          font-weight: 600;
          color: var(--text-primary);
        }

        .ai-card-desc {
          font-size: 14.5px;
          line-height: 1.55;
          color: var(--text-secondary);
        }

        .ai-card-desc code {
          background-color: var(--surface-raised);
          padding: 2px 6px;
          border-radius: 6px;
          font-family: var(--font-mono);
          font-size: 13px;
        }

        .ai-card-actions {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .ai-btn {
          height: 44px;
          font-size: 14px;
          padding: 0 16px;
          border-radius: 22px;
        }

        /* Prompt Top Action Bar */
        .prompt-top-action-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          padding: 12px 16px;
          background-color: var(--surface-soft);
          border-radius: 14px;
          border: 1px solid var(--border-subtle);
          margin-bottom: 16px;
        }

        .prompt-meta-note {
          font-size: 13.5px;
          color: var(--text-secondary);
        }

        .copy-prompt-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 20px;
          background-color: var(--surface-raised);
          color: var(--text-primary);
          font-size: 13px;
          font-weight: 600;
          transition: background-color 150ms ease, transform 150ms ease;
          border: 1px solid var(--border-subtle);
        }

        .copy-prompt-btn:hover {
          background-color: var(--accent-container);
          transform: translateY(-1px);
        }

        /* Questions / Items */
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
          max-height: 600px;
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

          .toc-groups-container {
            display: none;
            margin-top: 10px;
            max-height: 380px;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
          }

          .toc-groups-container.mobile-open {
            display: flex;
          }

          .community-hint-card.desktop-only {
            display: none !important;
          }

          .community-hint-card.mobile-only {
            display: flex !important;
            margin-top: 8px;
          }

          .ai-tools-cards-grid {
            grid-template-columns: 1fr;
          }

          .wiki-heading-zone {
            flex-direction: column;
            align-items: flex-start;
            min-height: auto;
            padding: 8px 0 20px 0;
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
            padding: 6px 0 14px 0;
          }

          .back-home-btn {
            height: 40px;
            padding: 0 16px;
            font-size: 14px;
            border-radius: 20px;
          }

          .wiki-page-title {
            font-size: clamp(26px, 7.5vw, 36px);
            line-height: 1.2;
          }

          .major-section-banner {
            padding: 18px 16px;
            border-radius: 20px;
          }

          .banner-title {
            font-size: 22px;
          }

          .banner-desc {
            font-size: 14px;
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

          .ai-card {
            padding: 18px 16px;
            border-radius: 18px;
          }

          .ai-card-title {
            font-size: 17px;
          }

          .ai-card-desc {
            font-size: 13.5px;
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
      `})]})},ef=()=>{const{version:e}=Ol(),t=[{label:"Telegram",url:le.telegram,icon:"telegram"},{label:"Telegram Chat",url:le.telegramChat,icon:"chat"},{label:"Changelog",url:le.changelog,icon:"changelog"},{label:"Contact",url:le.contact,icon:"mail"},{label:"Github",url:le.github,icon:"github"},{label:"PluginSDK",url:le.pluginSdk,icon:"code"}];return a.jsxs("footer",{className:"site-footer",children:[a.jsx("h2",{className:"footer-title",children:"Может быть интересно"}),a.jsx("div",{className:"footer-links-row",children:t.map(n=>a.jsxs("a",{href:n.url,target:"_blank",rel:"noopener noreferrer",className:"footer-pill-btn",children:[a.jsx(z,{name:n.icon,size:22,color:"currentColor"}),a.jsx("span",{children:n.label})]},n.label))}),a.jsx("div",{className:"footer-divider"}),a.jsxs("div",{className:"footer-bottom-info",children:[a.jsxs("span",{className:"copyright-text",children:["© 2026 exDesktop ",e?`v${e} `:"","· GPL-3.0"]}),a.jsx("span",{className:"disclaimer-text",children:"Неофициальный проект. Не связан с Telegram FZ-LLC."})]}),a.jsx("style",{children:`
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
      `})]})},tf=()=>{const[e,t]=U.useState(()=>{const d=localStorage.getItem("exdesktop_theme");return d==="dark"||d==="light"?d:window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}),[n,r]=U.useState(()=>{const d=window.location.pathname;if(d.startsWith("/faq")){const v=d.replace(/^\/faq/,"/wiki");return window.history.replaceState(null,"",v+window.location.hash),v}return d}),[i,o]=U.useState(!1);U.useEffect(()=>{document.documentElement.setAttribute("data-theme",e),localStorage.setItem("exdesktop_theme",e)},[e]),U.useEffect(()=>{const d=()=>{const v=window.location.pathname;if(v.startsWith("/faq")){const x=v.replace(/^\/faq/,"/wiki");window.history.replaceState(null,"",x+window.location.hash),r(x)}else r(v)};return window.addEventListener("popstate",d),()=>window.removeEventListener("popstate",d)},[]),U.useEffect(()=>{n.startsWith("/wiki")?document.title="WIKI — exDesktop":document.title="exDesktop — кастомный клиент Telegram"},[n]);const l=d=>{const v=d.startsWith("/faq")?d.replace(/^\/faq/,"/wiki"):d,[x,h]=v.split("#"),m=x===""?"/":x;if(m===n&&h){window.history.pushState(null,"",v);const y=document.getElementById(h);y&&y.scrollIntoView({behavior:"smooth"});return}window.history.pushState(null,"",v),r(m),h?setTimeout(()=>{const y=document.getElementById(h);y&&y.scrollIntoView({behavior:"smooth"})},50):window.scrollTo({top:0,behavior:"smooth"})},s=()=>{t(d=>d==="dark"?"light":"dark")},u=n.startsWith("/wiki");return a.jsxs("div",{className:"app-container",children:[a.jsx($p,{currentPath:n,theme:e,onToggleTheme:s,onOpenMobileMenu:()=>o(!0),onNavigate:l}),a.jsx(Gp,{isOpen:i,onClose:()=>o(!1),onNavigate:l}),u?a.jsx(Zp,{onNavigate:l,currentPath:n}):a.jsxs("main",{children:[a.jsx(qp,{onNavigate:l}),a.jsx(Kp,{}),a.jsx(Qp,{}),a.jsx(Xp,{}),a.jsx(Yp,{}),a.jsx(Jp,{onNavigate:l})]}),a.jsx(ef,{})]})},cc=document.getElementById("root");if(!cc)throw new Error("Failed to find root element");Xi.createRoot(cc).render(a.jsx(Ec.StrictMode,{children:a.jsx(tf,{})}));
