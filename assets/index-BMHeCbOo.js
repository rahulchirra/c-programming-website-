(function(){const q=document.createElement("link").relList;if(q&&q.supports&&q.supports("modulepreload"))return;for(const z of document.querySelectorAll('link[rel="modulepreload"]'))f(z);new MutationObserver(z=>{for(const j of z)if(j.type==="childList")for(const J of j.addedNodes)J.tagName==="LINK"&&J.rel==="modulepreload"&&f(J)}).observe(document,{childList:!0,subtree:!0});function D(z){const j={};return z.integrity&&(j.integrity=z.integrity),z.referrerPolicy&&(j.referrerPolicy=z.referrerPolicy),z.crossOrigin==="use-credentials"?j.credentials="include":z.crossOrigin==="anonymous"?j.credentials="omit":j.credentials="same-origin",j}function f(z){if(z.ep)return;z.ep=!0;const j=D(z);fetch(z.href,j)}})();function sd(v){return v&&v.__esModule&&Object.prototype.hasOwnProperty.call(v,"default")?v.default:v}var Fu={exports:{}},bl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pf;function Dp(){if(Pf)return bl;Pf=1;var v=Symbol.for("react.transitional.element"),q=Symbol.for("react.fragment");function D(f,z,j){var J=null;if(j!==void 0&&(J=""+j),z.key!==void 0&&(J=""+z.key),"key"in z){j={};for(var se in z)se!=="key"&&(j[se]=z[se])}else j=z;return z=j.ref,{$$typeof:v,type:f,key:J,ref:z!==void 0?z:null,props:j}}return bl.Fragment=q,bl.jsx=D,bl.jsxs=D,bl}var ed;function jp(){return ed||(ed=1,Fu.exports=Dp()),Fu.exports}var h=jp(),$u={exports:{}},V={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var td;function Lp(){if(td)return V;td=1;var v=Symbol.for("react.transitional.element"),q=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),z=Symbol.for("react.profiler"),j=Symbol.for("react.consumer"),J=Symbol.for("react.context"),se=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),S=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),W=Symbol.iterator;function te(s){return s===null||typeof s!="object"?null:(s=W&&s[W]||s["@@iterator"],typeof s=="function"?s:null)}var be={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},pe=Object.assign,Ge={};function Me(s,_,O){this.props=s,this.context=_,this.refs=Ge,this.updater=O||be}Me.prototype.isReactComponent={},Me.prototype.setState=function(s,_){if(typeof s!="object"&&typeof s!="function"&&s!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,s,_,"setState")},Me.prototype.forceUpdate=function(s){this.updater.enqueueForceUpdate(this,s,"forceUpdate")};function hn(){}hn.prototype=Me.prototype;function Ct(s,_,O){this.props=s,this.context=_,this.refs=Ge,this.updater=O||be}var Ue=Ct.prototype=new hn;Ue.constructor=Ct,pe(Ue,Me.prototype),Ue.isPureReactComponent=!0;var ht=Array.isArray,F={H:null,A:null,T:null,S:null,V:null},Ke=Object.prototype.hasOwnProperty;function Je(s,_,O,N,L,$){return O=$.ref,{$$typeof:v,type:s,key:_,ref:O!==void 0?O:null,props:$}}function Ie(s,_){return Je(s.type,_,void 0,void 0,void 0,s.props)}function bt(s){return typeof s=="object"&&s!==null&&s.$$typeof===v}function Ln(s){var _={"=":"=0",":":"=2"};return"$"+s.replace(/[=:]/g,function(O){return _[O]})}var zt=/\/+/g;function De(s,_){return typeof s=="object"&&s!==null&&s.key!=null?Ln(""+s.key):_.toString(36)}function gn(){}function yn(s){switch(s.status){case"fulfilled":return s.value;case"rejected":throw s.reason;default:switch(typeof s.status=="string"?s.then(gn,gn):(s.status="pending",s.then(function(_){s.status==="pending"&&(s.status="fulfilled",s.value=_)},function(_){s.status==="pending"&&(s.status="rejected",s.reason=_)})),s.status){case"fulfilled":return s.value;case"rejected":throw s.reason}}throw s}function je(s,_,O,N,L){var $=typeof s;($==="undefined"||$==="boolean")&&(s=null);var Y=!1;if(s===null)Y=!0;else switch($){case"bigint":case"string":case"number":Y=!0;break;case"object":switch(s.$$typeof){case v:case q:Y=!0;break;case R:return Y=s._init,je(Y(s._payload),_,O,N,L)}}if(Y)return L=L(s),Y=N===""?"."+De(s,0):N,ht(L)?(O="",Y!=null&&(O=Y.replace(zt,"$&/")+"/"),je(L,_,O,"",function(Vt){return Vt})):L!=null&&(bt(L)&&(L=Ie(L,O+(L.key==null||s&&s.key===L.key?"":(""+L.key).replace(zt,"$&/")+"/")+Y)),_.push(L)),1;Y=0;var We=N===""?".":N+":";if(ht(s))for(var fe=0;fe<s.length;fe++)N=s[fe],$=We+De(N,fe),Y+=je(N,_,O,$,L);else if(fe=te(s),typeof fe=="function")for(s=fe.call(s),fe=0;!(N=s.next()).done;)N=N.value,$=We+De(N,fe++),Y+=je(N,_,O,$,L);else if($==="object"){if(typeof s.then=="function")return je(yn(s),_,O,N,L);throw _=String(s),Error("Objects are not valid as a React child (found: "+(_==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":_)+"). If you meant to render a collection of children, use an array instead.")}return Y}function x(s,_,O){if(s==null)return s;var N=[],L=0;return je(s,N,"","",function($){return _.call(O,$,L++)}),N}function w(s){if(s._status===-1){var _=s._result;_=_(),_.then(function(O){(s._status===0||s._status===-1)&&(s._status=1,s._result=O)},function(O){(s._status===0||s._status===-1)&&(s._status=2,s._result=O)}),s._status===-1&&(s._status=0,s._result=_)}if(s._status===1)return s._result.default;throw s._result}var G=typeof reportError=="function"?reportError:function(s){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var _=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof s=="object"&&s!==null&&typeof s.message=="string"?String(s.message):String(s),error:s});if(!window.dispatchEvent(_))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",s);return}console.error(s)};function ue(){}return V.Children={map:x,forEach:function(s,_,O){x(s,function(){_.apply(this,arguments)},O)},count:function(s){var _=0;return x(s,function(){_++}),_},toArray:function(s){return x(s,function(_){return _})||[]},only:function(s){if(!bt(s))throw Error("React.Children.only expected to receive a single React element child.");return s}},V.Component=Me,V.Fragment=D,V.Profiler=z,V.PureComponent=Ct,V.StrictMode=f,V.Suspense=C,V.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,V.__COMPILER_RUNTIME={__proto__:null,c:function(s){return F.H.useMemoCache(s)}},V.cache=function(s){return function(){return s.apply(null,arguments)}},V.cloneElement=function(s,_,O){if(s==null)throw Error("The argument must be a React element, but you passed "+s+".");var N=pe({},s.props),L=s.key,$=void 0;if(_!=null)for(Y in _.ref!==void 0&&($=void 0),_.key!==void 0&&(L=""+_.key),_)!Ke.call(_,Y)||Y==="key"||Y==="__self"||Y==="__source"||Y==="ref"&&_.ref===void 0||(N[Y]=_[Y]);var Y=arguments.length-2;if(Y===1)N.children=O;else if(1<Y){for(var We=Array(Y),fe=0;fe<Y;fe++)We[fe]=arguments[fe+2];N.children=We}return Je(s.type,L,void 0,void 0,$,N)},V.createContext=function(s){return s={$$typeof:J,_currentValue:s,_currentValue2:s,_threadCount:0,Provider:null,Consumer:null},s.Provider=s,s.Consumer={$$typeof:j,_context:s},s},V.createElement=function(s,_,O){var N,L={},$=null;if(_!=null)for(N in _.key!==void 0&&($=""+_.key),_)Ke.call(_,N)&&N!=="key"&&N!=="__self"&&N!=="__source"&&(L[N]=_[N]);var Y=arguments.length-2;if(Y===1)L.children=O;else if(1<Y){for(var We=Array(Y),fe=0;fe<Y;fe++)We[fe]=arguments[fe+2];L.children=We}if(s&&s.defaultProps)for(N in Y=s.defaultProps,Y)L[N]===void 0&&(L[N]=Y[N]);return Je(s,$,void 0,void 0,null,L)},V.createRef=function(){return{current:null}},V.forwardRef=function(s){return{$$typeof:se,render:s}},V.isValidElement=bt,V.lazy=function(s){return{$$typeof:R,_payload:{_status:-1,_result:s},_init:w}},V.memo=function(s,_){return{$$typeof:S,type:s,compare:_===void 0?null:_}},V.startTransition=function(s){var _=F.T,O={};F.T=O;try{var N=s(),L=F.S;L!==null&&L(O,N),typeof N=="object"&&N!==null&&typeof N.then=="function"&&N.then(ue,G)}catch($){G($)}finally{F.T=_}},V.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},V.use=function(s){return F.H.use(s)},V.useActionState=function(s,_,O){return F.H.useActionState(s,_,O)},V.useCallback=function(s,_){return F.H.useCallback(s,_)},V.useContext=function(s){return F.H.useContext(s)},V.useDebugValue=function(){},V.useDeferredValue=function(s,_){return F.H.useDeferredValue(s,_)},V.useEffect=function(s,_,O){var N=F.H;if(typeof O=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return N.useEffect(s,_)},V.useId=function(){return F.H.useId()},V.useImperativeHandle=function(s,_,O){return F.H.useImperativeHandle(s,_,O)},V.useInsertionEffect=function(s,_){return F.H.useInsertionEffect(s,_)},V.useLayoutEffect=function(s,_){return F.H.useLayoutEffect(s,_)},V.useMemo=function(s,_){return F.H.useMemo(s,_)},V.useOptimistic=function(s,_){return F.H.useOptimistic(s,_)},V.useReducer=function(s,_,O){return F.H.useReducer(s,_,O)},V.useRef=function(s){return F.H.useRef(s)},V.useState=function(s){return F.H.useState(s)},V.useSyncExternalStore=function(s,_,O){return F.H.useSyncExternalStore(s,_,O)},V.useTransition=function(){return F.H.useTransition()},V.version="19.1.0",V}var nd;function lo(){return nd||(nd=1,$u.exports=Lp()),$u.exports}var Ze=lo();const Hp=sd(Ze);var Pu={exports:{}},xl={},eo={exports:{}},to={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ad;function Bp(){return ad||(ad=1,function(v){function q(x,w){var G=x.length;x.push(w);e:for(;0<G;){var ue=G-1>>>1,s=x[ue];if(0<z(s,w))x[ue]=w,x[G]=s,G=ue;else break e}}function D(x){return x.length===0?null:x[0]}function f(x){if(x.length===0)return null;var w=x[0],G=x.pop();if(G!==w){x[0]=G;e:for(var ue=0,s=x.length,_=s>>>1;ue<_;){var O=2*(ue+1)-1,N=x[O],L=O+1,$=x[L];if(0>z(N,G))L<s&&0>z($,N)?(x[ue]=$,x[L]=G,ue=L):(x[ue]=N,x[O]=G,ue=O);else if(L<s&&0>z($,G))x[ue]=$,x[L]=G,ue=L;else break e}}return w}function z(x,w){var G=x.sortIndex-w.sortIndex;return G!==0?G:x.id-w.id}if(v.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var j=performance;v.unstable_now=function(){return j.now()}}else{var J=Date,se=J.now();v.unstable_now=function(){return J.now()-se}}var C=[],S=[],R=1,W=null,te=3,be=!1,pe=!1,Ge=!1,Me=!1,hn=typeof setTimeout=="function"?setTimeout:null,Ct=typeof clearTimeout=="function"?clearTimeout:null,Ue=typeof setImmediate<"u"?setImmediate:null;function ht(x){for(var w=D(S);w!==null;){if(w.callback===null)f(S);else if(w.startTime<=x)f(S),w.sortIndex=w.expirationTime,q(C,w);else break;w=D(S)}}function F(x){if(Ge=!1,ht(x),!pe)if(D(C)!==null)pe=!0,Ke||(Ke=!0,De());else{var w=D(S);w!==null&&je(F,w.startTime-x)}}var Ke=!1,Je=-1,Ie=5,bt=-1;function Ln(){return Me?!0:!(v.unstable_now()-bt<Ie)}function zt(){if(Me=!1,Ke){var x=v.unstable_now();bt=x;var w=!0;try{e:{pe=!1,Ge&&(Ge=!1,Ct(Je),Je=-1),be=!0;var G=te;try{t:{for(ht(x),W=D(C);W!==null&&!(W.expirationTime>x&&Ln());){var ue=W.callback;if(typeof ue=="function"){W.callback=null,te=W.priorityLevel;var s=ue(W.expirationTime<=x);if(x=v.unstable_now(),typeof s=="function"){W.callback=s,ht(x),w=!0;break t}W===D(C)&&f(C),ht(x)}else f(C);W=D(C)}if(W!==null)w=!0;else{var _=D(S);_!==null&&je(F,_.startTime-x),w=!1}}break e}finally{W=null,te=G,be=!1}w=void 0}}finally{w?De():Ke=!1}}}var De;if(typeof Ue=="function")De=function(){Ue(zt)};else if(typeof MessageChannel<"u"){var gn=new MessageChannel,yn=gn.port2;gn.port1.onmessage=zt,De=function(){yn.postMessage(null)}}else De=function(){hn(zt,0)};function je(x,w){Je=hn(function(){x(v.unstable_now())},w)}v.unstable_IdlePriority=5,v.unstable_ImmediatePriority=1,v.unstable_LowPriority=4,v.unstable_NormalPriority=3,v.unstable_Profiling=null,v.unstable_UserBlockingPriority=2,v.unstable_cancelCallback=function(x){x.callback=null},v.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ie=0<x?Math.floor(1e3/x):5},v.unstable_getCurrentPriorityLevel=function(){return te},v.unstable_next=function(x){switch(te){case 1:case 2:case 3:var w=3;break;default:w=te}var G=te;te=w;try{return x()}finally{te=G}},v.unstable_requestPaint=function(){Me=!0},v.unstable_runWithPriority=function(x,w){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var G=te;te=x;try{return w()}finally{te=G}},v.unstable_scheduleCallback=function(x,w,G){var ue=v.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?ue+G:ue):G=ue,x){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=G+s,x={id:R++,callback:w,priorityLevel:x,startTime:G,expirationTime:s,sortIndex:-1},G>ue?(x.sortIndex=G,q(S,x),D(C)===null&&x===D(S)&&(Ge?(Ct(Je),Je=-1):Ge=!0,je(F,G-ue))):(x.sortIndex=s,q(C,x),pe||be||(pe=!0,Ke||(Ke=!0,De()))),x},v.unstable_shouldYield=Ln,v.unstable_wrapCallback=function(x){var w=te;return function(){var G=te;te=w;try{return x.apply(this,arguments)}finally{te=G}}}}(to)),to}var ld;function Gp(){return ld||(ld=1,eo.exports=Bp()),eo.exports}var no={exports:{}},Be={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var id;function qp(){if(id)return Be;id=1;var v=lo();function q(C){var S="https://react.dev/errors/"+C;if(1<arguments.length){S+="?args[]="+encodeURIComponent(arguments[1]);for(var R=2;R<arguments.length;R++)S+="&args[]="+encodeURIComponent(arguments[R])}return"Minified React error #"+C+"; visit "+S+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function D(){}var f={d:{f:D,r:function(){throw Error(q(522))},D,C:D,L:D,m:D,X:D,S:D,M:D},p:0,findDOMNode:null},z=Symbol.for("react.portal");function j(C,S,R){var W=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:z,key:W==null?null:""+W,children:C,containerInfo:S,implementation:R}}var J=v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function se(C,S){if(C==="font")return"";if(typeof S=="string")return S==="use-credentials"?S:""}return Be.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=f,Be.createPortal=function(C,S){var R=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!S||S.nodeType!==1&&S.nodeType!==9&&S.nodeType!==11)throw Error(q(299));return j(C,S,null,R)},Be.flushSync=function(C){var S=J.T,R=f.p;try{if(J.T=null,f.p=2,C)return C()}finally{J.T=S,f.p=R,f.d.f()}},Be.preconnect=function(C,S){typeof C=="string"&&(S?(S=S.crossOrigin,S=typeof S=="string"?S==="use-credentials"?S:"":void 0):S=null,f.d.C(C,S))},Be.prefetchDNS=function(C){typeof C=="string"&&f.d.D(C)},Be.preinit=function(C,S){if(typeof C=="string"&&S&&typeof S.as=="string"){var R=S.as,W=se(R,S.crossOrigin),te=typeof S.integrity=="string"?S.integrity:void 0,be=typeof S.fetchPriority=="string"?S.fetchPriority:void 0;R==="style"?f.d.S(C,typeof S.precedence=="string"?S.precedence:void 0,{crossOrigin:W,integrity:te,fetchPriority:be}):R==="script"&&f.d.X(C,{crossOrigin:W,integrity:te,fetchPriority:be,nonce:typeof S.nonce=="string"?S.nonce:void 0})}},Be.preinitModule=function(C,S){if(typeof C=="string")if(typeof S=="object"&&S!==null){if(S.as==null||S.as==="script"){var R=se(S.as,S.crossOrigin);f.d.M(C,{crossOrigin:R,integrity:typeof S.integrity=="string"?S.integrity:void 0,nonce:typeof S.nonce=="string"?S.nonce:void 0})}}else S==null&&f.d.M(C)},Be.preload=function(C,S){if(typeof C=="string"&&typeof S=="object"&&S!==null&&typeof S.as=="string"){var R=S.as,W=se(R,S.crossOrigin);f.d.L(C,R,{crossOrigin:W,integrity:typeof S.integrity=="string"?S.integrity:void 0,nonce:typeof S.nonce=="string"?S.nonce:void 0,type:typeof S.type=="string"?S.type:void 0,fetchPriority:typeof S.fetchPriority=="string"?S.fetchPriority:void 0,referrerPolicy:typeof S.referrerPolicy=="string"?S.referrerPolicy:void 0,imageSrcSet:typeof S.imageSrcSet=="string"?S.imageSrcSet:void 0,imageSizes:typeof S.imageSizes=="string"?S.imageSizes:void 0,media:typeof S.media=="string"?S.media:void 0})}},Be.preloadModule=function(C,S){if(typeof C=="string")if(S){var R=se(S.as,S.crossOrigin);f.d.m(C,{as:typeof S.as=="string"&&S.as!=="script"?S.as:void 0,crossOrigin:R,integrity:typeof S.integrity=="string"?S.integrity:void 0})}else f.d.m(C)},Be.requestFormReset=function(C){f.d.r(C)},Be.unstable_batchedUpdates=function(C,S){return C(S)},Be.useFormState=function(C,S,R){return J.H.useFormState(C,S,R)},Be.useFormStatus=function(){return J.H.useHostTransitionStatus()},Be.version="19.1.0",Be}var rd;function kp(){if(rd)return no.exports;rd=1;function v(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v)}catch(q){console.error(q)}}return v(),no.exports=qp(),no.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ud;function Yp(){if(ud)return xl;ud=1;var v=Gp(),q=lo(),D=kp();function f(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function z(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function j(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function J(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function se(e){if(j(e)!==e)throw Error(f(188))}function C(e){var t=e.alternate;if(!t){if(t=j(e),t===null)throw Error(f(188));return t!==e?null:e}for(var n=e,a=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(a=l.return,a!==null){n=a;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return se(l),e;if(i===a)return se(l),t;i=i.sibling}throw Error(f(188))}if(n.return!==a.return)n=l,a=i;else{for(var r=!1,u=l.child;u;){if(u===n){r=!0,n=l,a=i;break}if(u===a){r=!0,a=l,n=i;break}u=u.sibling}if(!r){for(u=i.child;u;){if(u===n){r=!0,n=i,a=l;break}if(u===a){r=!0,a=i,n=l;break}u=u.sibling}if(!r)throw Error(f(189))}}if(n.alternate!==a)throw Error(f(190))}if(n.tag!==3)throw Error(f(188));return n.stateNode.current===n?e:t}function S(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=S(e),t!==null)return t;e=e.sibling}return null}var R=Object.assign,W=Symbol.for("react.element"),te=Symbol.for("react.transitional.element"),be=Symbol.for("react.portal"),pe=Symbol.for("react.fragment"),Ge=Symbol.for("react.strict_mode"),Me=Symbol.for("react.profiler"),hn=Symbol.for("react.provider"),Ct=Symbol.for("react.consumer"),Ue=Symbol.for("react.context"),ht=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),Ke=Symbol.for("react.suspense_list"),Je=Symbol.for("react.memo"),Ie=Symbol.for("react.lazy"),bt=Symbol.for("react.activity"),Ln=Symbol.for("react.memo_cache_sentinel"),zt=Symbol.iterator;function De(e){return e===null||typeof e!="object"?null:(e=zt&&e[zt]||e["@@iterator"],typeof e=="function"?e:null)}var gn=Symbol.for("react.client.reference");function yn(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===gn?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case pe:return"Fragment";case Me:return"Profiler";case Ge:return"StrictMode";case F:return"Suspense";case Ke:return"SuspenseList";case bt:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case be:return"Portal";case Ue:return(e.displayName||"Context")+".Provider";case Ct:return(e._context.displayName||"Context")+".Consumer";case ht:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Je:return t=e.displayName||null,t!==null?t:yn(e.type)||"Memo";case Ie:t=e._payload,e=e._init;try{return yn(e(t))}catch{}}return null}var je=Array.isArray,x=q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,w=D.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G={pending:!1,data:null,method:null,action:null},ue=[],s=-1;function _(e){return{current:e}}function O(e){0>s||(e.current=ue[s],ue[s]=null,s--)}function N(e,t){s++,ue[s]=e.current,e.current=t}var L=_(null),$=_(null),Y=_(null),We=_(null);function fe(e,t){switch(N(Y,t),N($,e),N(L,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?zf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=zf(t),e=Nf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}O(L),N(L,e)}function Vt(){O(L),O($),O(Y)}function Li(e){e.memoizedState!==null&&N(We,e);var t=L.current,n=Nf(t,e.type);t!==n&&(N($,e),N(L,n))}function Sl(e){$.current===e&&(O(L),O($)),We.current===e&&(O(We),pl._currentValue=G)}var Hi=Object.prototype.hasOwnProperty,Bi=v.unstable_scheduleCallback,Gi=v.unstable_cancelCallback,dd=v.unstable_shouldYield,md=v.unstable_requestPaint,xt=v.unstable_now,pd=v.unstable_getCurrentPriorityLevel,io=v.unstable_ImmediatePriority,ro=v.unstable_UserBlockingPriority,Al=v.unstable_NormalPriority,hd=v.unstable_LowPriority,uo=v.unstable_IdlePriority,gd=v.log,yd=v.unstable_setDisableYieldValue,Aa=null,Fe=null;function Xt(e){if(typeof gd=="function"&&yd(e),Fe&&typeof Fe.setStrictMode=="function")try{Fe.setStrictMode(Aa,e)}catch{}}var $e=Math.clz32?Math.clz32:xd,vd=Math.log,bd=Math.LN2;function xd(e){return e>>>=0,e===0?32:31-(vd(e)/bd|0)|0}var El=256,_l=4194304;function vn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Tl(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var l=0,i=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var u=a&134217727;return u!==0?(a=u&~i,a!==0?l=vn(a):(r&=u,r!==0?l=vn(r):n||(n=u&~e,n!==0&&(l=vn(n))))):(u=a&~i,u!==0?l=vn(u):r!==0?l=vn(r):n||(n=a&~e,n!==0&&(l=vn(n)))),l===0?0:t!==0&&t!==l&&(t&i)===0&&(i=l&-l,n=t&-t,i>=n||i===32&&(n&4194048)!==0)?t:l}function Ea(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Sd(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function oo(){var e=El;return El<<=1,(El&4194048)===0&&(El=256),e}function so(){var e=_l;return _l<<=1,(_l&62914560)===0&&(_l=4194304),e}function qi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function _a(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ad(e,t,n,a,l,i){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var u=e.entanglements,o=e.expirationTimes,p=e.hiddenUpdates;for(n=r&~n;0<n;){var b=31-$e(n),E=1<<b;u[b]=0,o[b]=-1;var g=p[b];if(g!==null)for(p[b]=null,b=0;b<g.length;b++){var y=g[b];y!==null&&(y.lane&=-536870913)}n&=~E}a!==0&&co(e,a,0),i!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=i&~(r&~t))}function co(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-$e(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&4194090}function fo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-$e(n),l=1<<a;l&t|e[a]&t&&(e[a]|=t),n&=~l}}function ki(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Yi(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function mo(){var e=w.p;return e!==0?e:(e=window.event,e===void 0?32:Kf(e.type))}function Ed(e,t){var n=w.p;try{return w.p=e,t()}finally{w.p=n}}var Qt=Math.random().toString(36).slice(2),Le="__reactFiber$"+Qt,ke="__reactProps$"+Qt,Hn="__reactContainer$"+Qt,Vi="__reactEvents$"+Qt,_d="__reactListeners$"+Qt,Td="__reactHandles$"+Qt,po="__reactResources$"+Qt,Ta="__reactMarker$"+Qt;function Xi(e){delete e[Le],delete e[ke],delete e[Vi],delete e[_d],delete e[Td]}function Bn(e){var t=e[Le];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Hn]||n[Le]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Mf(e);e!==null;){if(n=e[Le])return n;e=Mf(e)}return t}e=n,n=e.parentNode}return null}function Gn(e){if(e=e[Le]||e[Hn]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Ca(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(f(33))}function qn(e){var t=e[po];return t||(t=e[po]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Te(e){e[Ta]=!0}var ho=new Set,go={};function bn(e,t){kn(e,t),kn(e+"Capture",t)}function kn(e,t){for(go[e]=t,e=0;e<t.length;e++)ho.add(t[e])}var Cd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),yo={},vo={};function zd(e){return Hi.call(vo,e)?!0:Hi.call(yo,e)?!1:Cd.test(e)?vo[e]=!0:(yo[e]=!0,!1)}function Cl(e,t,n){if(zd(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function zl(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Nt(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}var Qi,bo;function Yn(e){if(Qi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Qi=t&&t[1]||"",bo=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qi+e+bo}var Zi=!1;function Ki(e,t){if(!e||Zi)return"";Zi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var E=function(){throw Error()};if(Object.defineProperty(E.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(E,[])}catch(y){var g=y}Reflect.construct(e,[],E)}else{try{E.call()}catch(y){g=y}e.call(E.prototype)}}else{try{throw Error()}catch(y){g=y}(E=e())&&typeof E.catch=="function"&&E.catch(function(){})}}catch(y){if(y&&g&&typeof y.stack=="string")return[y.stack,g.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),r=i[0],u=i[1];if(r&&u){var o=r.split(`
`),p=u.split(`
`);for(l=a=0;a<o.length&&!o[a].includes("DetermineComponentFrameRoot");)a++;for(;l<p.length&&!p[l].includes("DetermineComponentFrameRoot");)l++;if(a===o.length||l===p.length)for(a=o.length-1,l=p.length-1;1<=a&&0<=l&&o[a]!==p[l];)l--;for(;1<=a&&0<=l;a--,l--)if(o[a]!==p[l]){if(a!==1||l!==1)do if(a--,l--,0>l||o[a]!==p[l]){var b=`
`+o[a].replace(" at new "," at ");return e.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",e.displayName)),b}while(1<=a&&0<=l);break}}}finally{Zi=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Yn(n):""}function Nd(e){switch(e.tag){case 26:case 27:case 5:return Yn(e.type);case 16:return Yn("Lazy");case 13:return Yn("Suspense");case 19:return Yn("SuspenseList");case 0:case 15:return Ki(e.type,!1);case 11:return Ki(e.type.render,!1);case 1:return Ki(e.type,!0);case 31:return Yn("Activity");default:return""}}function xo(e){try{var t="";do t+=Nd(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function rt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function So(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function wd(e){var t=So(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(r){a=""+r,i.call(this,r)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(r){a=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Nl(e){e._valueTracker||(e._valueTracker=wd(e))}function Ao(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=So(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function wl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Od=/[\n"\\]/g;function ut(e){return e.replace(Od,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ji(e,t,n,a,l,i,r,u){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+rt(t)):e.value!==""+rt(t)&&(e.value=""+rt(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?Ii(e,r,rt(t)):n!=null?Ii(e,r,rt(n)):a!=null&&e.removeAttribute("value"),l==null&&i!=null&&(e.defaultChecked=!!i),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.name=""+rt(u):e.removeAttribute("name")}function Eo(e,t,n,a,l,i,r,u){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||n!=null){if(!(i!=="submit"&&i!=="reset"||t!=null))return;n=n!=null?""+rt(n):"",t=t!=null?""+rt(t):n,u||t===e.value||(e.value=t),e.defaultValue=t}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=u?e.checked:!!a,e.defaultChecked=!!a,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r)}function Ii(e,t,n){t==="number"&&wl(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Vn(e,t,n,a){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&a&&(e[n].defaultSelected=!0)}else{for(n=""+rt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function _o(e,t,n){if(t!=null&&(t=""+rt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+rt(n):""}function To(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(f(92));if(je(a)){if(1<a.length)throw Error(f(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=rt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a)}function Xn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Rd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Co(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||Rd.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function zo(e,t,n){if(t!=null&&typeof t!="object")throw Error(f(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var l in t)a=t[l],t.hasOwnProperty(l)&&n[l]!==a&&Co(e,l,a)}else for(var i in t)t.hasOwnProperty(i)&&Co(e,i,t[i])}function Wi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Md=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ud=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ol(e){return Ud.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Fi=null;function $i(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Qn=null,Zn=null;function No(e){var t=Gn(e);if(t&&(e=t.stateNode)){var n=e[ke]||null;e:switch(e=t.stateNode,t.type){case"input":if(Ji(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+ut(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var l=a[ke]||null;if(!l)throw Error(f(90));Ji(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&Ao(a)}break e;case"textarea":_o(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Vn(e,!!n.multiple,t,!1)}}}var Pi=!1;function wo(e,t,n){if(Pi)return e(t,n);Pi=!0;try{var a=e(t);return a}finally{if(Pi=!1,(Qn!==null||Zn!==null)&&(hi(),Qn&&(t=Qn,e=Zn,Zn=Qn=null,No(t),e)))for(t=0;t<e.length;t++)No(e[t])}}function za(e,t){var n=e.stateNode;if(n===null)return null;var a=n[ke]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(f(231,t,typeof n));return n}var wt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),er=!1;if(wt)try{var Na={};Object.defineProperty(Na,"passive",{get:function(){er=!0}}),window.addEventListener("test",Na,Na),window.removeEventListener("test",Na,Na)}catch{er=!1}var Zt=null,tr=null,Rl=null;function Oo(){if(Rl)return Rl;var e,t=tr,n=t.length,a,l="value"in Zt?Zt.value:Zt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var r=n-e;for(a=1;a<=r&&t[n-a]===l[i-a];a++);return Rl=l.slice(e,1<a?1-a:void 0)}function Ml(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ul(){return!0}function Ro(){return!1}function Ye(e){function t(n,a,l,i,r){this._reactName=n,this._targetInst=l,this.type=a,this.nativeEvent=i,this.target=r,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ul:Ro,this.isPropagationStopped=Ro,this}return R(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ul)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ul)},persist:function(){},isPersistent:Ul}),t}var xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dl=Ye(xn),wa=R({},xn,{view:0,detail:0}),Dd=Ye(wa),nr,ar,Oa,jl=R({},wa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ir,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Oa&&(Oa&&e.type==="mousemove"?(nr=e.screenX-Oa.screenX,ar=e.screenY-Oa.screenY):ar=nr=0,Oa=e),nr)},movementY:function(e){return"movementY"in e?e.movementY:ar}}),Mo=Ye(jl),jd=R({},jl,{dataTransfer:0}),Ld=Ye(jd),Hd=R({},wa,{relatedTarget:0}),lr=Ye(Hd),Bd=R({},xn,{animationName:0,elapsedTime:0,pseudoElement:0}),Gd=Ye(Bd),qd=R({},xn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),kd=Ye(qd),Yd=R({},xn,{data:0}),Uo=Ye(Yd),Vd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Qd[e])?!!t[e]:!1}function ir(){return Zd}var Kd=R({},wa,{key:function(e){if(e.key){var t=Vd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ml(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Xd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ir,charCode:function(e){return e.type==="keypress"?Ml(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ml(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Jd=Ye(Kd),Id=R({},jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Do=Ye(Id),Wd=R({},wa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ir}),Fd=Ye(Wd),$d=R({},xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pd=Ye($d),em=R({},jl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),tm=Ye(em),nm=R({},xn,{newState:0,oldState:0}),am=Ye(nm),lm=[9,13,27,32],rr=wt&&"CompositionEvent"in window,Ra=null;wt&&"documentMode"in document&&(Ra=document.documentMode);var im=wt&&"TextEvent"in window&&!Ra,jo=wt&&(!rr||Ra&&8<Ra&&11>=Ra),Lo=" ",Ho=!1;function Bo(e,t){switch(e){case"keyup":return lm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Go(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Kn=!1;function rm(e,t){switch(e){case"compositionend":return Go(t);case"keypress":return t.which!==32?null:(Ho=!0,Lo);case"textInput":return e=t.data,e===Lo&&Ho?null:e;default:return null}}function um(e,t){if(Kn)return e==="compositionend"||!rr&&Bo(e,t)?(e=Oo(),Rl=tr=Zt=null,Kn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return jo&&t.locale!=="ko"?null:t.data;default:return null}}var om={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!om[e.type]:t==="textarea"}function ko(e,t,n,a){Qn?Zn?Zn.push(a):Zn=[a]:Qn=a,t=Si(t,"onChange"),0<t.length&&(n=new Dl("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Ma=null,Ua=null;function sm(e){Af(e,0)}function Ll(e){var t=Ca(e);if(Ao(t))return e}function Yo(e,t){if(e==="change")return t}var Vo=!1;if(wt){var ur;if(wt){var or="oninput"in document;if(!or){var Xo=document.createElement("div");Xo.setAttribute("oninput","return;"),or=typeof Xo.oninput=="function"}ur=or}else ur=!1;Vo=ur&&(!document.documentMode||9<document.documentMode)}function Qo(){Ma&&(Ma.detachEvent("onpropertychange",Zo),Ua=Ma=null)}function Zo(e){if(e.propertyName==="value"&&Ll(Ua)){var t=[];ko(t,Ua,e,$i(e)),wo(sm,t)}}function cm(e,t,n){e==="focusin"?(Qo(),Ma=t,Ua=n,Ma.attachEvent("onpropertychange",Zo)):e==="focusout"&&Qo()}function fm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ll(Ua)}function dm(e,t){if(e==="click")return Ll(t)}function mm(e,t){if(e==="input"||e==="change")return Ll(t)}function pm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Pe=typeof Object.is=="function"?Object.is:pm;function Da(e,t){if(Pe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var l=n[a];if(!Hi.call(t,l)||!Pe(e[l],t[l]))return!1}return!0}function Ko(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Jo(e,t){var n=Ko(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ko(n)}}function Io(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Io(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Wo(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=wl(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=wl(e.document)}return t}function sr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var hm=wt&&"documentMode"in document&&11>=document.documentMode,Jn=null,cr=null,ja=null,fr=!1;function Fo(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fr||Jn==null||Jn!==wl(a)||(a=Jn,"selectionStart"in a&&sr(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),ja&&Da(ja,a)||(ja=a,a=Si(cr,"onSelect"),0<a.length&&(t=new Dl("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Jn)))}function Sn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var In={animationend:Sn("Animation","AnimationEnd"),animationiteration:Sn("Animation","AnimationIteration"),animationstart:Sn("Animation","AnimationStart"),transitionrun:Sn("Transition","TransitionRun"),transitionstart:Sn("Transition","TransitionStart"),transitioncancel:Sn("Transition","TransitionCancel"),transitionend:Sn("Transition","TransitionEnd")},dr={},$o={};wt&&($o=document.createElement("div").style,"AnimationEvent"in window||(delete In.animationend.animation,delete In.animationiteration.animation,delete In.animationstart.animation),"TransitionEvent"in window||delete In.transitionend.transition);function An(e){if(dr[e])return dr[e];if(!In[e])return e;var t=In[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in $o)return dr[e]=t[n];return e}var Po=An("animationend"),es=An("animationiteration"),ts=An("animationstart"),gm=An("transitionrun"),ym=An("transitionstart"),vm=An("transitioncancel"),ns=An("transitionend"),as=new Map,mr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");mr.push("scrollEnd");function gt(e,t){as.set(e,t),bn(t,[e])}var ls=new WeakMap;function ot(e,t){if(typeof e=="object"&&e!==null){var n=ls.get(e);return n!==void 0?n:(t={value:e,source:t,stack:xo(t)},ls.set(e,t),t)}return{value:e,source:t,stack:xo(t)}}var st=[],Wn=0,pr=0;function Hl(){for(var e=Wn,t=pr=Wn=0;t<e;){var n=st[t];st[t++]=null;var a=st[t];st[t++]=null;var l=st[t];st[t++]=null;var i=st[t];if(st[t++]=null,a!==null&&l!==null){var r=a.pending;r===null?l.next=l:(l.next=r.next,r.next=l),a.pending=l}i!==0&&is(n,l,i)}}function Bl(e,t,n,a){st[Wn++]=e,st[Wn++]=t,st[Wn++]=n,st[Wn++]=a,pr|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function hr(e,t,n,a){return Bl(e,t,n,a),Gl(e)}function Fn(e,t){return Bl(e,null,null,t),Gl(e)}function is(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var l=!1,i=e.return;i!==null;)i.childLanes|=n,a=i.alternate,a!==null&&(a.childLanes|=n),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(l=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,l&&t!==null&&(l=31-$e(n),e=i.hiddenUpdates,a=e[l],a===null?e[l]=[t]:a.push(t),t.lane=n|536870912),i):null}function Gl(e){if(50<rl)throw rl=0,Su=null,Error(f(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var $n={};function bm(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(e,t,n,a){return new bm(e,t,n,a)}function gr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ot(e,t){var n=e.alternate;return n===null?(n=et(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function rs(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ql(e,t,n,a,l,i){var r=0;if(a=e,typeof e=="function")gr(e)&&(r=1);else if(typeof e=="string")r=Sp(e,n,L.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case bt:return e=et(31,n,t,l),e.elementType=bt,e.lanes=i,e;case pe:return En(n.children,l,i,t);case Ge:r=8,l|=24;break;case Me:return e=et(12,n,t,l|2),e.elementType=Me,e.lanes=i,e;case F:return e=et(13,n,t,l),e.elementType=F,e.lanes=i,e;case Ke:return e=et(19,n,t,l),e.elementType=Ke,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case hn:case Ue:r=10;break e;case Ct:r=9;break e;case ht:r=11;break e;case Je:r=14;break e;case Ie:r=16,a=null;break e}r=29,n=Error(f(130,e===null?"null":typeof e,"")),a=null}return t=et(r,n,t,l),t.elementType=e,t.type=a,t.lanes=i,t}function En(e,t,n,a){return e=et(7,e,a,t),e.lanes=n,e}function yr(e,t,n){return e=et(6,e,null,t),e.lanes=n,e}function vr(e,t,n){return t=et(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Pn=[],ea=0,kl=null,Yl=0,ct=[],ft=0,_n=null,Rt=1,Mt="";function Tn(e,t){Pn[ea++]=Yl,Pn[ea++]=kl,kl=e,Yl=t}function us(e,t,n){ct[ft++]=Rt,ct[ft++]=Mt,ct[ft++]=_n,_n=e;var a=Rt;e=Mt;var l=32-$e(a)-1;a&=~(1<<l),n+=1;var i=32-$e(t)+l;if(30<i){var r=l-l%5;i=(a&(1<<r)-1).toString(32),a>>=r,l-=r,Rt=1<<32-$e(t)+l|n<<l|a,Mt=i+e}else Rt=1<<i|n<<l|a,Mt=e}function br(e){e.return!==null&&(Tn(e,1),us(e,1,0))}function xr(e){for(;e===kl;)kl=Pn[--ea],Pn[ea]=null,Yl=Pn[--ea],Pn[ea]=null;for(;e===_n;)_n=ct[--ft],ct[ft]=null,Mt=ct[--ft],ct[ft]=null,Rt=ct[--ft],ct[ft]=null}var qe=null,he=null,ee=!1,Cn=null,St=!1,Sr=Error(f(519));function zn(e){var t=Error(f(418,""));throw Ba(ot(t,e)),Sr}function os(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[Le]=e,t[ke]=a,n){case"dialog":K("cancel",t),K("close",t);break;case"iframe":case"object":case"embed":K("load",t);break;case"video":case"audio":for(n=0;n<ol.length;n++)K(ol[n],t);break;case"source":K("error",t);break;case"img":case"image":case"link":K("error",t),K("load",t);break;case"details":K("toggle",t);break;case"input":K("invalid",t),Eo(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),Nl(t);break;case"select":K("invalid",t);break;case"textarea":K("invalid",t),To(t,a.value,a.defaultValue,a.children),Nl(t)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||Cf(t.textContent,n)?(a.popover!=null&&(K("beforetoggle",t),K("toggle",t)),a.onScroll!=null&&K("scroll",t),a.onScrollEnd!=null&&K("scrollend",t),a.onClick!=null&&(t.onclick=Ai),t=!0):t=!1,t||zn(e)}function ss(e){for(qe=e.return;qe;)switch(qe.tag){case 5:case 13:St=!1;return;case 27:case 3:St=!0;return;default:qe=qe.return}}function La(e){if(e!==qe)return!1;if(!ee)return ss(e),ee=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Hu(e.type,e.memoizedProps)),n=!n),n&&he&&zn(e),ss(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(f(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){he=vt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}he=null}}else t===27?(t=he,sn(e.type)?(e=ku,ku=null,he=e):he=t):he=qe?vt(e.stateNode.nextSibling):null;return!0}function Ha(){he=qe=null,ee=!1}function cs(){var e=Cn;return e!==null&&(Qe===null?Qe=e:Qe.push.apply(Qe,e),Cn=null),e}function Ba(e){Cn===null?Cn=[e]:Cn.push(e)}var Ar=_(null),Nn=null,Ut=null;function Kt(e,t,n){N(Ar,t._currentValue),t._currentValue=n}function Dt(e){e._currentValue=Ar.current,O(Ar)}function Er(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function _r(e,t,n,a){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var i=l.dependencies;if(i!==null){var r=l.child;i=i.firstContext;e:for(;i!==null;){var u=i;i=l;for(var o=0;o<t.length;o++)if(u.context===t[o]){i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Er(i.return,n,e),a||(r=null);break e}i=u.next}}else if(l.tag===18){if(r=l.return,r===null)throw Error(f(341));r.lanes|=n,i=r.alternate,i!==null&&(i.lanes|=n),Er(r,n,e),r=null}else r=l.child;if(r!==null)r.return=l;else for(r=l;r!==null;){if(r===e){r=null;break}if(l=r.sibling,l!==null){l.return=r.return,r=l;break}r=r.return}l=r}}function Ga(e,t,n,a){e=null;for(var l=t,i=!1;l!==null;){if(!i){if((l.flags&524288)!==0)i=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var r=l.alternate;if(r===null)throw Error(f(387));if(r=r.memoizedProps,r!==null){var u=l.type;Pe(l.pendingProps.value,r.value)||(e!==null?e.push(u):e=[u])}}else if(l===We.current){if(r=l.alternate,r===null)throw Error(f(387));r.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(pl):e=[pl])}l=l.return}e!==null&&_r(t,e,n,a),t.flags|=262144}function Vl(e){for(e=e.firstContext;e!==null;){if(!Pe(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function wn(e){Nn=e,Ut=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function He(e){return fs(Nn,e)}function Xl(e,t){return Nn===null&&wn(e),fs(e,t)}function fs(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ut===null){if(e===null)throw Error(f(308));Ut=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ut=Ut.next=t;return n}var xm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Sm=v.unstable_scheduleCallback,Am=v.unstable_NormalPriority,Ee={$$typeof:Ue,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Tr(){return{controller:new xm,data:new Map,refCount:0}}function qa(e){e.refCount--,e.refCount===0&&Sm(Am,function(){e.controller.abort()})}var ka=null,Cr=0,ta=0,na=null;function Em(e,t){if(ka===null){var n=ka=[];Cr=0,ta=Nu(),na={status:"pending",value:void 0,then:function(a){n.push(a)}}}return Cr++,t.then(ds,ds),t}function ds(){if(--Cr===0&&ka!==null){na!==null&&(na.status="fulfilled");var e=ka;ka=null,ta=0,na=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function _m(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(a.status="rejected",a.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),a}var ms=x.S;x.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Em(e,t),ms!==null&&ms(e,t)};var On=_(null);function zr(){var e=On.current;return e!==null?e:ce.pooledCache}function Ql(e,t){t===null?N(On,On.current):N(On,t.pool)}function ps(){var e=zr();return e===null?null:{parent:Ee._currentValue,pool:e}}var Ya=Error(f(460)),hs=Error(f(474)),Zl=Error(f(542)),Nr={then:function(){}};function gs(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Kl(){}function ys(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Kl,Kl),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,bs(e),e;default:if(typeof t.status=="string")t.then(Kl,Kl);else{if(e=ce,e!==null&&100<e.shellSuspendCounter)throw Error(f(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=a}},function(a){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,bs(e),e}throw Va=t,Ya}}var Va=null;function vs(){if(Va===null)throw Error(f(459));var e=Va;return Va=null,e}function bs(e){if(e===Ya||e===Zl)throw Error(f(483))}var Jt=!1;function wr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Or(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function It(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Wt(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(ne&2)!==0){var l=a.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),a.pending=t,t=Gl(e),is(e,null,n),t}return Bl(e,a,t,n),Gl(e)}function Xa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,fo(e,n)}}function Rr(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};i===null?l=i=r:i=i.next=r,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Mr=!1;function Qa(){if(Mr){var e=na;if(e!==null)throw e}}function Za(e,t,n,a){Mr=!1;var l=e.updateQueue;Jt=!1;var i=l.firstBaseUpdate,r=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var o=u,p=o.next;o.next=null,r===null?i=p:r.next=p,r=o;var b=e.alternate;b!==null&&(b=b.updateQueue,u=b.lastBaseUpdate,u!==r&&(u===null?b.firstBaseUpdate=p:u.next=p,b.lastBaseUpdate=o))}if(i!==null){var E=l.baseState;r=0,b=p=o=null,u=i;do{var g=u.lane&-536870913,y=g!==u.lane;if(y?(I&g)===g:(a&g)===g){g!==0&&g===ta&&(Mr=!0),b!==null&&(b=b.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});e:{var k=e,H=u;g=t;var re=n;switch(H.tag){case 1:if(k=H.payload,typeof k=="function"){E=k.call(re,E,g);break e}E=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=H.payload,g=typeof k=="function"?k.call(re,E,g):k,g==null)break e;E=R({},E,g);break e;case 2:Jt=!0}}g=u.callback,g!==null&&(e.flags|=64,y&&(e.flags|=8192),y=l.callbacks,y===null?l.callbacks=[g]:y.push(g))}else y={lane:g,tag:u.tag,payload:u.payload,callback:u.callback,next:null},b===null?(p=b=y,o=E):b=b.next=y,r|=g;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;y=u,u=y.next,y.next=null,l.lastBaseUpdate=y,l.shared.pending=null}}while(!0);b===null&&(o=E),l.baseState=o,l.firstBaseUpdate=p,l.lastBaseUpdate=b,i===null&&(l.shared.lanes=0),ln|=r,e.lanes=r,e.memoizedState=E}}function xs(e,t){if(typeof e!="function")throw Error(f(191,e));e.call(t)}function Ss(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)xs(n[e],t)}var aa=_(null),Jl=_(0);function As(e,t){e=kt,N(Jl,e),N(aa,t),kt=e|t.baseLanes}function Ur(){N(Jl,kt),N(aa,aa.current)}function Dr(){kt=Jl.current,O(aa),O(Jl)}var Ft=0,X=null,le=null,xe=null,Il=!1,la=!1,Rn=!1,Wl=0,Ka=0,ia=null,Tm=0;function ye(){throw Error(f(321))}function jr(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Pe(e[n],t[n]))return!1;return!0}function Lr(e,t,n,a,l,i){return Ft=i,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,x.H=e===null||e.memoizedState===null?ic:rc,Rn=!1,i=n(a,l),Rn=!1,la&&(i=_s(t,n,a,l)),Es(e),i}function Es(e){x.H=ni;var t=le!==null&&le.next!==null;if(Ft=0,xe=le=X=null,Il=!1,Ka=0,ia=null,t)throw Error(f(300));e===null||Ce||(e=e.dependencies,e!==null&&Vl(e)&&(Ce=!0))}function _s(e,t,n,a){X=e;var l=0;do{if(la&&(ia=null),Ka=0,la=!1,25<=l)throw Error(f(301));if(l+=1,xe=le=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}x.H=Mm,i=t(n,a)}while(la);return i}function Cm(){var e=x.H,t=e.useState()[0];return t=typeof t.then=="function"?Ja(t):t,e=e.useState()[0],(le!==null?le.memoizedState:null)!==e&&(X.flags|=1024),t}function Hr(){var e=Wl!==0;return Wl=0,e}function Br(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Gr(e){if(Il){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Il=!1}Ft=0,xe=le=X=null,la=!1,Ka=Wl=0,ia=null}function Ve(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xe===null?X.memoizedState=xe=e:xe=xe.next=e,xe}function Se(){if(le===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=le.next;var t=xe===null?X.memoizedState:xe.next;if(t!==null)xe=t,le=e;else{if(e===null)throw X.alternate===null?Error(f(467)):Error(f(310));le=e,e={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},xe===null?X.memoizedState=xe=e:xe=xe.next=e}return xe}function qr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ja(e){var t=Ka;return Ka+=1,ia===null&&(ia=[]),e=ys(ia,e,t),t=X,(xe===null?t.memoizedState:xe.next)===null&&(t=t.alternate,x.H=t===null||t.memoizedState===null?ic:rc),e}function Fl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ja(e);if(e.$$typeof===Ue)return He(e)}throw Error(f(438,String(e)))}function kr(e){var t=null,n=X.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=X.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=qr(),X.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=Ln;return t.index++,n}function jt(e,t){return typeof t=="function"?t(e):t}function $l(e){var t=Se();return Yr(t,le,e)}function Yr(e,t,n){var a=e.queue;if(a===null)throw Error(f(311));a.lastRenderedReducer=n;var l=e.baseQueue,i=a.pending;if(i!==null){if(l!==null){var r=l.next;l.next=i.next,i.next=r}t.baseQueue=l=i,a.pending=null}if(i=e.baseState,l===null)e.memoizedState=i;else{t=l.next;var u=r=null,o=null,p=t,b=!1;do{var E=p.lane&-536870913;if(E!==p.lane?(I&E)===E:(Ft&E)===E){var g=p.revertLane;if(g===0)o!==null&&(o=o.next={lane:0,revertLane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),E===ta&&(b=!0);else if((Ft&g)===g){p=p.next,g===ta&&(b=!0);continue}else E={lane:0,revertLane:p.revertLane,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},o===null?(u=o=E,r=i):o=o.next=E,X.lanes|=g,ln|=g;E=p.action,Rn&&n(i,E),i=p.hasEagerState?p.eagerState:n(i,E)}else g={lane:E,revertLane:p.revertLane,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},o===null?(u=o=g,r=i):o=o.next=g,X.lanes|=E,ln|=E;p=p.next}while(p!==null&&p!==t);if(o===null?r=i:o.next=u,!Pe(i,e.memoizedState)&&(Ce=!0,b&&(n=na,n!==null)))throw n;e.memoizedState=i,e.baseState=r,e.baseQueue=o,a.lastRenderedState=i}return l===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Vr(e){var t=Se(),n=t.queue;if(n===null)throw Error(f(311));n.lastRenderedReducer=e;var a=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var r=l=l.next;do i=e(i,r.action),r=r.next;while(r!==l);Pe(i,t.memoizedState)||(Ce=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,a]}function Ts(e,t,n){var a=X,l=Se(),i=ee;if(i){if(n===void 0)throw Error(f(407));n=n()}else n=t();var r=!Pe((le||l).memoizedState,n);r&&(l.memoizedState=n,Ce=!0),l=l.queue;var u=Ns.bind(null,a,l,e);if(Ia(2048,8,u,[e]),l.getSnapshot!==t||r||xe!==null&&xe.memoizedState.tag&1){if(a.flags|=2048,ra(9,Pl(),zs.bind(null,a,l,n,t),null),ce===null)throw Error(f(349));i||(Ft&124)!==0||Cs(a,t,n)}return n}function Cs(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=X.updateQueue,t===null?(t=qr(),X.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function zs(e,t,n,a){t.value=n,t.getSnapshot=a,ws(t)&&Os(e)}function Ns(e,t,n){return n(function(){ws(t)&&Os(e)})}function ws(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Pe(e,n)}catch{return!0}}function Os(e){var t=Fn(e,2);t!==null&&it(t,e,2)}function Xr(e){var t=Ve();if(typeof e=="function"){var n=e;if(e=n(),Rn){Xt(!0);try{n()}finally{Xt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jt,lastRenderedState:e},t}function Rs(e,t,n,a){return e.baseState=n,Yr(e,le,typeof a=="function"?a:jt)}function zm(e,t,n,a,l){if(ti(e))throw Error(f(485));if(e=t.action,e!==null){var i={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){i.listeners.push(r)}};x.T!==null?n(!0):i.isTransition=!1,a(i),n=t.pending,n===null?(i.next=t.pending=i,Ms(t,i)):(i.next=n.next,t.pending=n.next=i)}}function Ms(e,t){var n=t.action,a=t.payload,l=e.state;if(t.isTransition){var i=x.T,r={};x.T=r;try{var u=n(l,a),o=x.S;o!==null&&o(r,u),Us(e,t,u)}catch(p){Qr(e,t,p)}finally{x.T=i}}else try{i=n(l,a),Us(e,t,i)}catch(p){Qr(e,t,p)}}function Us(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){Ds(e,t,a)},function(a){return Qr(e,t,a)}):Ds(e,t,n)}function Ds(e,t,n){t.status="fulfilled",t.value=n,js(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Ms(e,n)))}function Qr(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,js(t),t=t.next;while(t!==a)}e.action=null}function js(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ls(e,t){return t}function Hs(e,t){if(ee){var n=ce.formState;if(n!==null){e:{var a=X;if(ee){if(he){t:{for(var l=he,i=St;l.nodeType!==8;){if(!i){l=null;break t}if(l=vt(l.nextSibling),l===null){l=null;break t}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){he=vt(l.nextSibling),a=l.data==="F!";break e}}zn(a)}a=!1}a&&(t=n[0])}}return n=Ve(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ls,lastRenderedState:t},n.queue=a,n=nc.bind(null,X,a),a.dispatch=n,a=Xr(!1),i=Wr.bind(null,X,!1,a.queue),a=Ve(),l={state:t,dispatch:null,action:e,pending:null},a.queue=l,n=zm.bind(null,X,l,i,n),l.dispatch=n,a.memoizedState=e,[t,n,!1]}function Bs(e){var t=Se();return Gs(t,le,e)}function Gs(e,t,n){if(t=Yr(e,t,Ls)[0],e=$l(jt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Ja(t)}catch(r){throw r===Ya?Zl:r}else a=t;t=Se();var l=t.queue,i=l.dispatch;return n!==t.memoizedState&&(X.flags|=2048,ra(9,Pl(),Nm.bind(null,l,n),null)),[a,i,e]}function Nm(e,t){e.action=t}function qs(e){var t=Se(),n=le;if(n!==null)return Gs(t,n,e);Se(),t=t.memoizedState,n=Se();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function ra(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=X.updateQueue,t===null&&(t=qr(),X.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function Pl(){return{destroy:void 0,resource:void 0}}function ks(){return Se().memoizedState}function ei(e,t,n,a){var l=Ve();a=a===void 0?null:a,X.flags|=e,l.memoizedState=ra(1|t,Pl(),n,a)}function Ia(e,t,n,a){var l=Se();a=a===void 0?null:a;var i=l.memoizedState.inst;le!==null&&a!==null&&jr(a,le.memoizedState.deps)?l.memoizedState=ra(t,i,n,a):(X.flags|=e,l.memoizedState=ra(1|t,i,n,a))}function Ys(e,t){ei(8390656,8,e,t)}function Vs(e,t){Ia(2048,8,e,t)}function Xs(e,t){return Ia(4,2,e,t)}function Qs(e,t){return Ia(4,4,e,t)}function Zs(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ks(e,t,n){n=n!=null?n.concat([e]):null,Ia(4,4,Zs.bind(null,t,e),n)}function Zr(){}function Js(e,t){var n=Se();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&jr(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function Is(e,t){var n=Se();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&jr(t,a[1]))return a[0];if(a=e(),Rn){Xt(!0);try{e()}finally{Xt(!1)}}return n.memoizedState=[a,t],a}function Kr(e,t,n){return n===void 0||(Ft&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=$c(),X.lanes|=e,ln|=e,n)}function Ws(e,t,n,a){return Pe(n,t)?n:aa.current!==null?(e=Kr(e,n,a),Pe(e,t)||(Ce=!0),e):(Ft&42)===0?(Ce=!0,e.memoizedState=n):(e=$c(),X.lanes|=e,ln|=e,t)}function Fs(e,t,n,a,l){var i=w.p;w.p=i!==0&&8>i?i:8;var r=x.T,u={};x.T=u,Wr(e,!1,t,n);try{var o=l(),p=x.S;if(p!==null&&p(u,o),o!==null&&typeof o=="object"&&typeof o.then=="function"){var b=_m(o,a);Wa(e,t,b,lt(e))}else Wa(e,t,a,lt(e))}catch(E){Wa(e,t,{then:function(){},status:"rejected",reason:E},lt())}finally{w.p=i,x.T=r}}function wm(){}function Jr(e,t,n,a){if(e.tag!==5)throw Error(f(476));var l=$s(e).queue;Fs(e,l,t,G,n===null?wm:function(){return Ps(e),n(a)})}function $s(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:G,baseState:G,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:jt,lastRenderedState:G},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:jt,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ps(e){var t=$s(e).next.queue;Wa(e,t,{},lt())}function Ir(){return He(pl)}function ec(){return Se().memoizedState}function tc(){return Se().memoizedState}function Om(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=lt();e=It(n);var a=Wt(t,e,n);a!==null&&(it(a,t,n),Xa(a,t,n)),t={cache:Tr()},e.payload=t;return}t=t.return}}function Rm(e,t,n){var a=lt();n={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},ti(e)?ac(t,n):(n=hr(e,t,n,a),n!==null&&(it(n,e,a),lc(n,t,a)))}function nc(e,t,n){var a=lt();Wa(e,t,n,a)}function Wa(e,t,n,a){var l={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(ti(e))ac(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var r=t.lastRenderedState,u=i(r,n);if(l.hasEagerState=!0,l.eagerState=u,Pe(u,r))return Bl(e,t,l,0),ce===null&&Hl(),!1}catch{}finally{}if(n=hr(e,t,l,a),n!==null)return it(n,e,a),lc(n,t,a),!0}return!1}function Wr(e,t,n,a){if(a={lane:2,revertLane:Nu(),action:a,hasEagerState:!1,eagerState:null,next:null},ti(e)){if(t)throw Error(f(479))}else t=hr(e,n,a,2),t!==null&&it(t,e,2)}function ti(e){var t=e.alternate;return e===X||t!==null&&t===X}function ac(e,t){la=Il=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function lc(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,fo(e,n)}}var ni={readContext:He,use:Fl,useCallback:ye,useContext:ye,useEffect:ye,useImperativeHandle:ye,useLayoutEffect:ye,useInsertionEffect:ye,useMemo:ye,useReducer:ye,useRef:ye,useState:ye,useDebugValue:ye,useDeferredValue:ye,useTransition:ye,useSyncExternalStore:ye,useId:ye,useHostTransitionStatus:ye,useFormState:ye,useActionState:ye,useOptimistic:ye,useMemoCache:ye,useCacheRefresh:ye},ic={readContext:He,use:Fl,useCallback:function(e,t){return Ve().memoizedState=[e,t===void 0?null:t],e},useContext:He,useEffect:Ys,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,ei(4194308,4,Zs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ei(4194308,4,e,t)},useInsertionEffect:function(e,t){ei(4,2,e,t)},useMemo:function(e,t){var n=Ve();t=t===void 0?null:t;var a=e();if(Rn){Xt(!0);try{e()}finally{Xt(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=Ve();if(n!==void 0){var l=n(t);if(Rn){Xt(!0);try{n(t)}finally{Xt(!1)}}}else l=t;return a.memoizedState=a.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},a.queue=e,e=e.dispatch=Rm.bind(null,X,e),[a.memoizedState,e]},useRef:function(e){var t=Ve();return e={current:e},t.memoizedState=e},useState:function(e){e=Xr(e);var t=e.queue,n=nc.bind(null,X,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Zr,useDeferredValue:function(e,t){var n=Ve();return Kr(n,e,t)},useTransition:function(){var e=Xr(!1);return e=Fs.bind(null,X,e.queue,!0,!1),Ve().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=X,l=Ve();if(ee){if(n===void 0)throw Error(f(407));n=n()}else{if(n=t(),ce===null)throw Error(f(349));(I&124)!==0||Cs(a,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Ys(Ns.bind(null,a,i,e),[e]),a.flags|=2048,ra(9,Pl(),zs.bind(null,a,i,n,t),null),n},useId:function(){var e=Ve(),t=ce.identifierPrefix;if(ee){var n=Mt,a=Rt;n=(a&~(1<<32-$e(a)-1)).toString(32)+n,t="«"+t+"R"+n,n=Wl++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=Tm++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Ir,useFormState:Hs,useActionState:Hs,useOptimistic:function(e){var t=Ve();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Wr.bind(null,X,!0,n),n.dispatch=t,[e,t]},useMemoCache:kr,useCacheRefresh:function(){return Ve().memoizedState=Om.bind(null,X)}},rc={readContext:He,use:Fl,useCallback:Js,useContext:He,useEffect:Vs,useImperativeHandle:Ks,useInsertionEffect:Xs,useLayoutEffect:Qs,useMemo:Is,useReducer:$l,useRef:ks,useState:function(){return $l(jt)},useDebugValue:Zr,useDeferredValue:function(e,t){var n=Se();return Ws(n,le.memoizedState,e,t)},useTransition:function(){var e=$l(jt)[0],t=Se().memoizedState;return[typeof e=="boolean"?e:Ja(e),t]},useSyncExternalStore:Ts,useId:ec,useHostTransitionStatus:Ir,useFormState:Bs,useActionState:Bs,useOptimistic:function(e,t){var n=Se();return Rs(n,le,e,t)},useMemoCache:kr,useCacheRefresh:tc},Mm={readContext:He,use:Fl,useCallback:Js,useContext:He,useEffect:Vs,useImperativeHandle:Ks,useInsertionEffect:Xs,useLayoutEffect:Qs,useMemo:Is,useReducer:Vr,useRef:ks,useState:function(){return Vr(jt)},useDebugValue:Zr,useDeferredValue:function(e,t){var n=Se();return le===null?Kr(n,e,t):Ws(n,le.memoizedState,e,t)},useTransition:function(){var e=Vr(jt)[0],t=Se().memoizedState;return[typeof e=="boolean"?e:Ja(e),t]},useSyncExternalStore:Ts,useId:ec,useHostTransitionStatus:Ir,useFormState:qs,useActionState:qs,useOptimistic:function(e,t){var n=Se();return le!==null?Rs(n,le,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:kr,useCacheRefresh:tc},ua=null,Fa=0;function ai(e){var t=Fa;return Fa+=1,ua===null&&(ua=[]),ys(ua,e,t)}function $a(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function li(e,t){throw t.$$typeof===W?Error(f(525)):(e=Object.prototype.toString.call(t),Error(f(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function uc(e){var t=e._init;return t(e._payload)}function oc(e){function t(d,c){if(e){var m=d.deletions;m===null?(d.deletions=[c],d.flags|=16):m.push(c)}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function a(d){for(var c=new Map;d!==null;)d.key!==null?c.set(d.key,d):c.set(d.index,d),d=d.sibling;return c}function l(d,c){return d=Ot(d,c),d.index=0,d.sibling=null,d}function i(d,c,m){return d.index=m,e?(m=d.alternate,m!==null?(m=m.index,m<c?(d.flags|=67108866,c):m):(d.flags|=67108866,c)):(d.flags|=1048576,c)}function r(d){return e&&d.alternate===null&&(d.flags|=67108866),d}function u(d,c,m,A){return c===null||c.tag!==6?(c=yr(m,d.mode,A),c.return=d,c):(c=l(c,m),c.return=d,c)}function o(d,c,m,A){var M=m.type;return M===pe?b(d,c,m.props.children,A,m.key):c!==null&&(c.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Ie&&uc(M)===c.type)?(c=l(c,m.props),$a(c,m),c.return=d,c):(c=ql(m.type,m.key,m.props,null,d.mode,A),$a(c,m),c.return=d,c)}function p(d,c,m,A){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=vr(m,d.mode,A),c.return=d,c):(c=l(c,m.children||[]),c.return=d,c)}function b(d,c,m,A,M){return c===null||c.tag!==7?(c=En(m,d.mode,A,M),c.return=d,c):(c=l(c,m),c.return=d,c)}function E(d,c,m){if(typeof c=="string"&&c!==""||typeof c=="number"||typeof c=="bigint")return c=yr(""+c,d.mode,m),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case te:return m=ql(c.type,c.key,c.props,null,d.mode,m),$a(m,c),m.return=d,m;case be:return c=vr(c,d.mode,m),c.return=d,c;case Ie:var A=c._init;return c=A(c._payload),E(d,c,m)}if(je(c)||De(c))return c=En(c,d.mode,m,null),c.return=d,c;if(typeof c.then=="function")return E(d,ai(c),m);if(c.$$typeof===Ue)return E(d,Xl(d,c),m);li(d,c)}return null}function g(d,c,m,A){var M=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return M!==null?null:u(d,c,""+m,A);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case te:return m.key===M?o(d,c,m,A):null;case be:return m.key===M?p(d,c,m,A):null;case Ie:return M=m._init,m=M(m._payload),g(d,c,m,A)}if(je(m)||De(m))return M!==null?null:b(d,c,m,A,null);if(typeof m.then=="function")return g(d,c,ai(m),A);if(m.$$typeof===Ue)return g(d,c,Xl(d,m),A);li(d,m)}return null}function y(d,c,m,A,M){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return d=d.get(m)||null,u(c,d,""+A,M);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case te:return d=d.get(A.key===null?m:A.key)||null,o(c,d,A,M);case be:return d=d.get(A.key===null?m:A.key)||null,p(c,d,A,M);case Ie:var Q=A._init;return A=Q(A._payload),y(d,c,m,A,M)}if(je(A)||De(A))return d=d.get(m)||null,b(c,d,A,M,null);if(typeof A.then=="function")return y(d,c,m,ai(A),M);if(A.$$typeof===Ue)return y(d,c,m,Xl(c,A),M);li(c,A)}return null}function k(d,c,m,A){for(var M=null,Q=null,U=c,B=c=0,Ne=null;U!==null&&B<m.length;B++){U.index>B?(Ne=U,U=null):Ne=U.sibling;var P=g(d,U,m[B],A);if(P===null){U===null&&(U=Ne);break}e&&U&&P.alternate===null&&t(d,U),c=i(P,c,B),Q===null?M=P:Q.sibling=P,Q=P,U=Ne}if(B===m.length)return n(d,U),ee&&Tn(d,B),M;if(U===null){for(;B<m.length;B++)U=E(d,m[B],A),U!==null&&(c=i(U,c,B),Q===null?M=U:Q.sibling=U,Q=U);return ee&&Tn(d,B),M}for(U=a(U);B<m.length;B++)Ne=y(U,d,B,m[B],A),Ne!==null&&(e&&Ne.alternate!==null&&U.delete(Ne.key===null?B:Ne.key),c=i(Ne,c,B),Q===null?M=Ne:Q.sibling=Ne,Q=Ne);return e&&U.forEach(function(pn){return t(d,pn)}),ee&&Tn(d,B),M}function H(d,c,m,A){if(m==null)throw Error(f(151));for(var M=null,Q=null,U=c,B=c=0,Ne=null,P=m.next();U!==null&&!P.done;B++,P=m.next()){U.index>B?(Ne=U,U=null):Ne=U.sibling;var pn=g(d,U,P.value,A);if(pn===null){U===null&&(U=Ne);break}e&&U&&pn.alternate===null&&t(d,U),c=i(pn,c,B),Q===null?M=pn:Q.sibling=pn,Q=pn,U=Ne}if(P.done)return n(d,U),ee&&Tn(d,B),M;if(U===null){for(;!P.done;B++,P=m.next())P=E(d,P.value,A),P!==null&&(c=i(P,c,B),Q===null?M=P:Q.sibling=P,Q=P);return ee&&Tn(d,B),M}for(U=a(U);!P.done;B++,P=m.next())P=y(U,d,B,P.value,A),P!==null&&(e&&P.alternate!==null&&U.delete(P.key===null?B:P.key),c=i(P,c,B),Q===null?M=P:Q.sibling=P,Q=P);return e&&U.forEach(function(Up){return t(d,Up)}),ee&&Tn(d,B),M}function re(d,c,m,A){if(typeof m=="object"&&m!==null&&m.type===pe&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case te:e:{for(var M=m.key;c!==null;){if(c.key===M){if(M=m.type,M===pe){if(c.tag===7){n(d,c.sibling),A=l(c,m.props.children),A.return=d,d=A;break e}}else if(c.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Ie&&uc(M)===c.type){n(d,c.sibling),A=l(c,m.props),$a(A,m),A.return=d,d=A;break e}n(d,c);break}else t(d,c);c=c.sibling}m.type===pe?(A=En(m.props.children,d.mode,A,m.key),A.return=d,d=A):(A=ql(m.type,m.key,m.props,null,d.mode,A),$a(A,m),A.return=d,d=A)}return r(d);case be:e:{for(M=m.key;c!==null;){if(c.key===M)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){n(d,c.sibling),A=l(c,m.children||[]),A.return=d,d=A;break e}else{n(d,c);break}else t(d,c);c=c.sibling}A=vr(m,d.mode,A),A.return=d,d=A}return r(d);case Ie:return M=m._init,m=M(m._payload),re(d,c,m,A)}if(je(m))return k(d,c,m,A);if(De(m)){if(M=De(m),typeof M!="function")throw Error(f(150));return m=M.call(m),H(d,c,m,A)}if(typeof m.then=="function")return re(d,c,ai(m),A);if(m.$$typeof===Ue)return re(d,c,Xl(d,m),A);li(d,m)}return typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint"?(m=""+m,c!==null&&c.tag===6?(n(d,c.sibling),A=l(c,m),A.return=d,d=A):(n(d,c),A=yr(m,d.mode,A),A.return=d,d=A),r(d)):n(d,c)}return function(d,c,m,A){try{Fa=0;var M=re(d,c,m,A);return ua=null,M}catch(U){if(U===Ya||U===Zl)throw U;var Q=et(29,U,null,d.mode);return Q.lanes=A,Q.return=d,Q}finally{}}}var oa=oc(!0),sc=oc(!1),dt=_(null),At=null;function $t(e){var t=e.alternate;N(_e,_e.current&1),N(dt,e),At===null&&(t===null||aa.current!==null||t.memoizedState!==null)&&(At=e)}function cc(e){if(e.tag===22){if(N(_e,_e.current),N(dt,e),At===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(At=e)}}else Pt()}function Pt(){N(_e,_e.current),N(dt,dt.current)}function Lt(e){O(dt),At===e&&(At=null),O(_e)}var _e=_(0);function ii(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||qu(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Fr(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:R({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var $r={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=lt(),l=It(a);l.payload=t,n!=null&&(l.callback=n),t=Wt(e,l,a),t!==null&&(it(t,e,a),Xa(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=lt(),l=It(a);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Wt(e,l,a),t!==null&&(it(t,e,a),Xa(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=lt(),a=It(n);a.tag=2,t!=null&&(a.callback=t),t=Wt(e,a,n),t!==null&&(it(t,e,n),Xa(t,e,n))}};function fc(e,t,n,a,l,i,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,r):t.prototype&&t.prototype.isPureReactComponent?!Da(n,a)||!Da(l,i):!0}function dc(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&$r.enqueueReplaceState(t,t.state,null)}function Mn(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=R({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}var ri=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function mc(e){ri(e)}function pc(e){console.error(e)}function hc(e){ri(e)}function ui(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function gc(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Pr(e,t,n){return n=It(n),n.tag=3,n.payload={element:null},n.callback=function(){ui(e,t)},n}function yc(e){return e=It(e),e.tag=3,e}function vc(e,t,n,a){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var i=a.value;e.payload=function(){return l(i)},e.callback=function(){gc(t,n,a)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){gc(t,n,a),typeof l!="function"&&(rn===null?rn=new Set([this]):rn.add(this));var u=a.stack;this.componentDidCatch(a.value,{componentStack:u!==null?u:""})})}function Um(e,t,n,a,l){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&Ga(t,n,l,!0),n=dt.current,n!==null){switch(n.tag){case 13:return At===null?Eu():n.alternate===null&&ge===0&&(ge=3),n.flags&=-257,n.flags|=65536,n.lanes=l,a===Nr?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),Tu(e,a,l)),!1;case 22:return n.flags|=65536,a===Nr?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),Tu(e,a,l)),!1}throw Error(f(435,n.tag))}return Tu(e,a,l),Eu(),!1}if(ee)return t=dt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,a!==Sr&&(e=Error(f(422),{cause:a}),Ba(ot(e,n)))):(a!==Sr&&(t=Error(f(423),{cause:a}),Ba(ot(t,n))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,a=ot(a,n),l=Pr(e.stateNode,a,l),Rr(e,l),ge!==4&&(ge=2)),!1;var i=Error(f(520),{cause:a});if(i=ot(i,n),il===null?il=[i]:il.push(i),ge!==4&&(ge=2),t===null)return!0;a=ot(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=Pr(n.stateNode,a,e),Rr(n,e),!1;case 1:if(t=n.type,i=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(rn===null||!rn.has(i))))return n.flags|=65536,l&=-l,n.lanes|=l,l=yc(l),vc(l,e,n,a),Rr(n,l),!1}n=n.return}while(n!==null);return!1}var bc=Error(f(461)),Ce=!1;function we(e,t,n,a){t.child=e===null?sc(t,null,n,a):oa(t,e.child,n,a)}function xc(e,t,n,a,l){n=n.render;var i=t.ref;if("ref"in a){var r={};for(var u in a)u!=="ref"&&(r[u]=a[u])}else r=a;return wn(t),a=Lr(e,t,n,r,i,l),u=Hr(),e!==null&&!Ce?(Br(e,t,l),Ht(e,t,l)):(ee&&u&&br(t),t.flags|=1,we(e,t,a,l),t.child)}function Sc(e,t,n,a,l){if(e===null){var i=n.type;return typeof i=="function"&&!gr(i)&&i.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=i,Ac(e,t,i,a,l)):(e=ql(n.type,null,a,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!uu(e,l)){var r=i.memoizedProps;if(n=n.compare,n=n!==null?n:Da,n(r,a)&&e.ref===t.ref)return Ht(e,t,l)}return t.flags|=1,e=Ot(i,a),e.ref=t.ref,e.return=t,t.child=e}function Ac(e,t,n,a,l){if(e!==null){var i=e.memoizedProps;if(Da(i,a)&&e.ref===t.ref)if(Ce=!1,t.pendingProps=a=i,uu(e,l))(e.flags&131072)!==0&&(Ce=!0);else return t.lanes=e.lanes,Ht(e,t,l)}return eu(e,t,n,a,l)}function Ec(e,t,n){var a=t.pendingProps,l=a.children,i=e!==null?e.memoizedState:null;if(a.mode==="hidden"){if((t.flags&128)!==0){if(a=i!==null?i.baseLanes|n:n,e!==null){for(l=t.child=e.child,i=0;l!==null;)i=i|l.lanes|l.childLanes,l=l.sibling;t.childLanes=i&~a}else t.childLanes=0,t.child=null;return _c(e,t,a,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ql(t,i!==null?i.cachePool:null),i!==null?As(t,i):Ur(),cc(t);else return t.lanes=t.childLanes=536870912,_c(e,t,i!==null?i.baseLanes|n:n,n)}else i!==null?(Ql(t,i.cachePool),As(t,i),Pt(),t.memoizedState=null):(e!==null&&Ql(t,null),Ur(),Pt());return we(e,t,l,n),t.child}function _c(e,t,n,a){var l=zr();return l=l===null?null:{parent:Ee._currentValue,pool:l},t.memoizedState={baseLanes:n,cachePool:l},e!==null&&Ql(t,null),Ur(),cc(t),e!==null&&Ga(e,t,a,!0),null}function oi(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(f(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function eu(e,t,n,a,l){return wn(t),n=Lr(e,t,n,a,void 0,l),a=Hr(),e!==null&&!Ce?(Br(e,t,l),Ht(e,t,l)):(ee&&a&&br(t),t.flags|=1,we(e,t,n,l),t.child)}function Tc(e,t,n,a,l,i){return wn(t),t.updateQueue=null,n=_s(t,a,n,l),Es(e),a=Hr(),e!==null&&!Ce?(Br(e,t,i),Ht(e,t,i)):(ee&&a&&br(t),t.flags|=1,we(e,t,n,i),t.child)}function Cc(e,t,n,a,l){if(wn(t),t.stateNode===null){var i=$n,r=n.contextType;typeof r=="object"&&r!==null&&(i=He(r)),i=new n(a,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=$r,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=a,i.state=t.memoizedState,i.refs={},wr(t),r=n.contextType,i.context=typeof r=="object"&&r!==null?He(r):$n,i.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(Fr(t,n,r,a),i.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(r=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),r!==i.state&&$r.enqueueReplaceState(i,i.state,null),Za(t,a,i,l),Qa(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){i=t.stateNode;var u=t.memoizedProps,o=Mn(n,u);i.props=o;var p=i.context,b=n.contextType;r=$n,typeof b=="object"&&b!==null&&(r=He(b));var E=n.getDerivedStateFromProps;b=typeof E=="function"||typeof i.getSnapshotBeforeUpdate=="function",u=t.pendingProps!==u,b||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u||p!==r)&&dc(t,i,a,r),Jt=!1;var g=t.memoizedState;i.state=g,Za(t,a,i,l),Qa(),p=t.memoizedState,u||g!==p||Jt?(typeof E=="function"&&(Fr(t,n,E,a),p=t.memoizedState),(o=Jt||fc(t,n,o,a,g,p,r))?(b||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=p),i.props=a,i.state=p,i.context=r,a=o):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{i=t.stateNode,Or(e,t),r=t.memoizedProps,b=Mn(n,r),i.props=b,E=t.pendingProps,g=i.context,p=n.contextType,o=$n,typeof p=="object"&&p!==null&&(o=He(p)),u=n.getDerivedStateFromProps,(p=typeof u=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r!==E||g!==o)&&dc(t,i,a,o),Jt=!1,g=t.memoizedState,i.state=g,Za(t,a,i,l),Qa();var y=t.memoizedState;r!==E||g!==y||Jt||e!==null&&e.dependencies!==null&&Vl(e.dependencies)?(typeof u=="function"&&(Fr(t,n,u,a),y=t.memoizedState),(b=Jt||fc(t,n,b,a,g,y,o)||e!==null&&e.dependencies!==null&&Vl(e.dependencies))?(p||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,y,o),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,y,o)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||r===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=y),i.props=a,i.state=y,i.context=o,a=b):(typeof i.componentDidUpdate!="function"||r===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),a=!1)}return i=a,oi(e,t),a=(t.flags&128)!==0,i||a?(i=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&a?(t.child=oa(t,e.child,null,l),t.child=oa(t,null,n,l)):we(e,t,n,l),t.memoizedState=i.state,e=t.child):e=Ht(e,t,l),e}function zc(e,t,n,a){return Ha(),t.flags|=256,we(e,t,n,a),t.child}var tu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function nu(e){return{baseLanes:e,cachePool:ps()}}function au(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=mt),e}function Nc(e,t,n){var a=t.pendingProps,l=!1,i=(t.flags&128)!==0,r;if((r=i)||(r=e!==null&&e.memoizedState===null?!1:(_e.current&2)!==0),r&&(l=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(ee){if(l?$t(t):Pt(),ee){var u=he,o;if(o=u){e:{for(o=u,u=St;o.nodeType!==8;){if(!u){u=null;break e}if(o=vt(o.nextSibling),o===null){u=null;break e}}u=o}u!==null?(t.memoizedState={dehydrated:u,treeContext:_n!==null?{id:Rt,overflow:Mt}:null,retryLane:536870912,hydrationErrors:null},o=et(18,null,null,0),o.stateNode=u,o.return=t,t.child=o,qe=t,he=null,o=!0):o=!1}o||zn(t)}if(u=t.memoizedState,u!==null&&(u=u.dehydrated,u!==null))return qu(u)?t.lanes=32:t.lanes=536870912,null;Lt(t)}return u=a.children,a=a.fallback,l?(Pt(),l=t.mode,u=si({mode:"hidden",children:u},l),a=En(a,l,n,null),u.return=t,a.return=t,u.sibling=a,t.child=u,l=t.child,l.memoizedState=nu(n),l.childLanes=au(e,r,n),t.memoizedState=tu,a):($t(t),lu(t,u))}if(o=e.memoizedState,o!==null&&(u=o.dehydrated,u!==null)){if(i)t.flags&256?($t(t),t.flags&=-257,t=iu(e,t,n)):t.memoizedState!==null?(Pt(),t.child=e.child,t.flags|=128,t=null):(Pt(),l=a.fallback,u=t.mode,a=si({mode:"visible",children:a.children},u),l=En(l,u,n,null),l.flags|=2,a.return=t,l.return=t,a.sibling=l,t.child=a,oa(t,e.child,null,n),a=t.child,a.memoizedState=nu(n),a.childLanes=au(e,r,n),t.memoizedState=tu,t=l);else if($t(t),qu(u)){if(r=u.nextSibling&&u.nextSibling.dataset,r)var p=r.dgst;r=p,a=Error(f(419)),a.stack="",a.digest=r,Ba({value:a,source:null,stack:null}),t=iu(e,t,n)}else if(Ce||Ga(e,t,n,!1),r=(n&e.childLanes)!==0,Ce||r){if(r=ce,r!==null&&(a=n&-n,a=(a&42)!==0?1:ki(a),a=(a&(r.suspendedLanes|n))!==0?0:a,a!==0&&a!==o.retryLane))throw o.retryLane=a,Fn(e,a),it(r,e,a),bc;u.data==="$?"||Eu(),t=iu(e,t,n)}else u.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=o.treeContext,he=vt(u.nextSibling),qe=t,ee=!0,Cn=null,St=!1,e!==null&&(ct[ft++]=Rt,ct[ft++]=Mt,ct[ft++]=_n,Rt=e.id,Mt=e.overflow,_n=t),t=lu(t,a.children),t.flags|=4096);return t}return l?(Pt(),l=a.fallback,u=t.mode,o=e.child,p=o.sibling,a=Ot(o,{mode:"hidden",children:a.children}),a.subtreeFlags=o.subtreeFlags&65011712,p!==null?l=Ot(p,l):(l=En(l,u,n,null),l.flags|=2),l.return=t,a.return=t,a.sibling=l,t.child=a,a=l,l=t.child,u=e.child.memoizedState,u===null?u=nu(n):(o=u.cachePool,o!==null?(p=Ee._currentValue,o=o.parent!==p?{parent:p,pool:p}:o):o=ps(),u={baseLanes:u.baseLanes|n,cachePool:o}),l.memoizedState=u,l.childLanes=au(e,r,n),t.memoizedState=tu,a):($t(t),n=e.child,e=n.sibling,n=Ot(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function lu(e,t){return t=si({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function si(e,t){return e=et(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function iu(e,t,n){return oa(t,e.child,null,n),e=lu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function wc(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Er(e.return,t,n)}function ru(e,t,n,a,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=n,i.tailMode=l)}function Oc(e,t,n){var a=t.pendingProps,l=a.revealOrder,i=a.tail;if(we(e,t,a.children,n),a=_e.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wc(e,n,t);else if(e.tag===19)wc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}switch(N(_e,a),l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&ii(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),ru(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&ii(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}ru(t,!0,n,null,i);break;case"together":ru(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ht(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ln|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ga(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(f(153));if(t.child!==null){for(e=t.child,n=Ot(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ot(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function uu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Vl(e)))}function Dm(e,t,n){switch(t.tag){case 3:fe(t,t.stateNode.containerInfo),Kt(t,Ee,e.memoizedState.cache),Ha();break;case 27:case 5:Li(t);break;case 4:fe(t,t.stateNode.containerInfo);break;case 10:Kt(t,t.type,t.memoizedProps.value);break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?($t(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Nc(e,t,n):($t(t),e=Ht(e,t,n),e!==null?e.sibling:null);$t(t);break;case 19:var l=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(Ga(e,t,n,!1),a=(n&t.childLanes)!==0),l){if(a)return Oc(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),N(_e,_e.current),a)break;return null;case 22:case 23:return t.lanes=0,Ec(e,t,n);case 24:Kt(t,Ee,e.memoizedState.cache)}return Ht(e,t,n)}function Rc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ce=!0;else{if(!uu(e,n)&&(t.flags&128)===0)return Ce=!1,Dm(e,t,n);Ce=(e.flags&131072)!==0}else Ce=!1,ee&&(t.flags&1048576)!==0&&us(t,Yl,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var a=t.elementType,l=a._init;if(a=l(a._payload),t.type=a,typeof a=="function")gr(a)?(e=Mn(a,e),t.tag=1,t=Cc(null,t,a,e,n)):(t.tag=0,t=eu(null,t,a,e,n));else{if(a!=null){if(l=a.$$typeof,l===ht){t.tag=11,t=xc(null,t,a,e,n);break e}else if(l===Je){t.tag=14,t=Sc(null,t,a,e,n);break e}}throw t=yn(a)||a,Error(f(306,t,""))}}return t;case 0:return eu(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,l=Mn(a,t.pendingProps),Cc(e,t,a,l,n);case 3:e:{if(fe(t,t.stateNode.containerInfo),e===null)throw Error(f(387));a=t.pendingProps;var i=t.memoizedState;l=i.element,Or(e,t),Za(t,a,null,n);var r=t.memoizedState;if(a=r.cache,Kt(t,Ee,a),a!==i.cache&&_r(t,[Ee],n,!0),Qa(),a=r.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=zc(e,t,a,n);break e}else if(a!==l){l=ot(Error(f(424)),t),Ba(l),t=zc(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(he=vt(e.firstChild),qe=t,ee=!0,Cn=null,St=!0,n=sc(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ha(),a===l){t=Ht(e,t,n);break e}we(e,t,a,n)}t=t.child}return t;case 26:return oi(e,t),e===null?(n=Lf(t.type,null,t.pendingProps,null))?t.memoizedState=n:ee||(n=t.type,e=t.pendingProps,a=Ei(Y.current).createElement(n),a[Le]=t,a[ke]=e,Re(a,n,e),Te(a),t.stateNode=a):t.memoizedState=Lf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Li(t),e===null&&ee&&(a=t.stateNode=Uf(t.type,t.pendingProps,Y.current),qe=t,St=!0,l=he,sn(t.type)?(ku=l,he=vt(a.firstChild)):he=l),we(e,t,t.pendingProps.children,n),oi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ee&&((l=a=he)&&(a=op(a,t.type,t.pendingProps,St),a!==null?(t.stateNode=a,qe=t,he=vt(a.firstChild),St=!1,l=!0):l=!1),l||zn(t)),Li(t),l=t.type,i=t.pendingProps,r=e!==null?e.memoizedProps:null,a=i.children,Hu(l,i)?a=null:r!==null&&Hu(l,r)&&(t.flags|=32),t.memoizedState!==null&&(l=Lr(e,t,Cm,null,null,n),pl._currentValue=l),oi(e,t),we(e,t,a,n),t.child;case 6:return e===null&&ee&&((e=n=he)&&(n=sp(n,t.pendingProps,St),n!==null?(t.stateNode=n,qe=t,he=null,e=!0):e=!1),e||zn(t)),null;case 13:return Nc(e,t,n);case 4:return fe(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=oa(t,null,a,n):we(e,t,a,n),t.child;case 11:return xc(e,t,t.type,t.pendingProps,n);case 7:return we(e,t,t.pendingProps,n),t.child;case 8:return we(e,t,t.pendingProps.children,n),t.child;case 12:return we(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,Kt(t,t.type,a.value),we(e,t,a.children,n),t.child;case 9:return l=t.type._context,a=t.pendingProps.children,wn(t),l=He(l),a=a(l),t.flags|=1,we(e,t,a,n),t.child;case 14:return Sc(e,t,t.type,t.pendingProps,n);case 15:return Ac(e,t,t.type,t.pendingProps,n);case 19:return Oc(e,t,n);case 31:return a=t.pendingProps,n=t.mode,a={mode:a.mode,children:a.children},e===null?(n=si(a,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=Ot(e.child,a),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return Ec(e,t,n);case 24:return wn(t),a=He(Ee),e===null?(l=zr(),l===null&&(l=ce,i=Tr(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=n),l=i),t.memoizedState={parent:a,cache:l},wr(t),Kt(t,Ee,l)):((e.lanes&n)!==0&&(Or(e,t),Za(t,null,null,n),Qa()),l=e.memoizedState,i=t.memoizedState,l.parent!==a?(l={parent:a,cache:a},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),Kt(t,Ee,a)):(a=i.cache,Kt(t,Ee,a),a!==l.cache&&_r(t,[Ee],n,!0))),we(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(f(156,t.tag))}function Bt(e){e.flags|=4}function Mc(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!kf(t)){if(t=dt.current,t!==null&&((I&4194048)===I?At!==null:(I&62914560)!==I&&(I&536870912)===0||t!==At))throw Va=Nr,hs;e.flags|=8192}}function ci(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?so():536870912,e.lanes|=t,da|=t)}function Pa(e,t){if(!ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags&65011712,a|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function jm(e,t,n){var a=t.pendingProps;switch(xr(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return me(t),null;case 1:return me(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Dt(Ee),Vt(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(La(t)?Bt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,cs())),me(t),null;case 26:return n=t.memoizedState,e===null?(Bt(t),n!==null?(me(t),Mc(t,n)):(me(t),t.flags&=-16777217)):n?n!==e.memoizedState?(Bt(t),me(t),Mc(t,n)):(me(t),t.flags&=-16777217):(e.memoizedProps!==a&&Bt(t),me(t),t.flags&=-16777217),null;case 27:Sl(t),n=Y.current;var l=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Bt(t);else{if(!a){if(t.stateNode===null)throw Error(f(166));return me(t),null}e=L.current,La(t)?os(t):(e=Uf(l,a,n),t.stateNode=e,Bt(t))}return me(t),null;case 5:if(Sl(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Bt(t);else{if(!a){if(t.stateNode===null)throw Error(f(166));return me(t),null}if(e=L.current,La(t))os(t);else{switch(l=Ei(Y.current),e){case 1:e=l.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=l.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof a.is=="string"?l.createElement("select",{is:a.is}):l.createElement("select"),a.multiple?e.multiple=!0:a.size&&(e.size=a.size);break;default:e=typeof a.is=="string"?l.createElement(n,{is:a.is}):l.createElement(n)}}e[Le]=t,e[ke]=a;e:for(l=t.child;l!==null;){if(l.tag===5||l.tag===6)e.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break e;for(;l.sibling===null;){if(l.return===null||l.return===t)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=e;e:switch(Re(e,n,a),n){case"button":case"input":case"select":case"textarea":e=!!a.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Bt(t)}}return me(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&Bt(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(f(166));if(e=Y.current,La(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,l=qe,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}e[Le]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||Cf(e.nodeValue,n)),e||zn(t)}else e=Ei(e).createTextNode(a),e[Le]=t,t.stateNode=e}return me(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=La(t),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(f(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(f(317));l[Le]=t}else Ha(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;me(t),l=!1}else l=cs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Lt(t),t):(Lt(t),null)}if(Lt(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=a!==null,e=e!==null&&e.memoizedState!==null,n){a=t.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool);var i=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==l&&(a.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),ci(t,t.updateQueue),me(t),null;case 4:return Vt(),e===null&&Mu(t.stateNode.containerInfo),me(t),null;case 10:return Dt(t.type),me(t),null;case 19:if(O(_e),l=t.memoizedState,l===null)return me(t),null;if(a=(t.flags&128)!==0,i=l.rendering,i===null)if(a)Pa(l,!1);else{if(ge!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=ii(e),i!==null){for(t.flags|=128,Pa(l,!1),e=i.updateQueue,t.updateQueue=e,ci(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)rs(n,e),n=n.sibling;return N(_e,_e.current&1|2),t.child}e=e.sibling}l.tail!==null&&xt()>mi&&(t.flags|=128,a=!0,Pa(l,!1),t.lanes=4194304)}else{if(!a)if(e=ii(i),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,ci(t,e),Pa(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!ee)return me(t),null}else 2*xt()-l.renderingStartTime>mi&&n!==536870912&&(t.flags|=128,a=!0,Pa(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=xt(),t.sibling=null,e=_e.current,N(_e,a?e&1|2:e&1),t):(me(t),null);case 22:case 23:return Lt(t),Dr(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(me(t),t.subtreeFlags&6&&(t.flags|=8192)):me(t),n=t.updateQueue,n!==null&&ci(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&O(On),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Dt(Ee),me(t),null;case 25:return null;case 30:return null}throw Error(f(156,t.tag))}function Lm(e,t){switch(xr(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Dt(Ee),Vt(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Sl(t),null;case 13:if(Lt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(f(340));Ha()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O(_e),null;case 4:return Vt(),null;case 10:return Dt(t.type),null;case 22:case 23:return Lt(t),Dr(),e!==null&&O(On),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Dt(Ee),null;case 25:return null;default:return null}}function Uc(e,t){switch(xr(t),t.tag){case 3:Dt(Ee),Vt();break;case 26:case 27:case 5:Sl(t);break;case 4:Vt();break;case 13:Lt(t);break;case 19:O(_e);break;case 10:Dt(t.type);break;case 22:case 23:Lt(t),Dr(),e!==null&&O(On);break;case 24:Dt(Ee)}}function el(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var l=a.next;n=l;do{if((n.tag&e)===e){a=void 0;var i=n.create,r=n.inst;a=i(),r.destroy=a}n=n.next}while(n!==l)}}catch(u){oe(t,t.return,u)}}function en(e,t,n){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var i=l.next;a=i;do{if((a.tag&e)===e){var r=a.inst,u=r.destroy;if(u!==void 0){r.destroy=void 0,l=t;var o=n,p=u;try{p()}catch(b){oe(l,o,b)}}}a=a.next}while(a!==i)}}catch(b){oe(t,t.return,b)}}function Dc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Ss(t,n)}catch(a){oe(e,e.return,a)}}}function jc(e,t,n){n.props=Mn(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){oe(e,t,a)}}function tl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(l){oe(e,t,l)}}function Et(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(l){oe(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){oe(e,t,l)}else n.current=null}function Lc(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(l){oe(e,e.return,l)}}function ou(e,t,n){try{var a=e.stateNode;ap(a,e.type,n,t),a[ke]=t}catch(l){oe(e,e.return,l)}}function Hc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&sn(e.type)||e.tag===4}function su(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Hc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&sn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function cu(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ai));else if(a!==4&&(a===27&&sn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(cu(e,t,n),e=e.sibling;e!==null;)cu(e,t,n),e=e.sibling}function fi(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&sn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(fi(e,t,n),e=e.sibling;e!==null;)fi(e,t,n),e=e.sibling}function Bc(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);Re(t,a,n),t[Le]=e,t[ke]=n}catch(i){oe(e,e.return,i)}}var Gt=!1,ve=!1,fu=!1,Gc=typeof WeakSet=="function"?WeakSet:Set,ze=null;function Hm(e,t){if(e=e.containerInfo,ju=wi,e=Wo(e),sr(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var l=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var r=0,u=-1,o=-1,p=0,b=0,E=e,g=null;t:for(;;){for(var y;E!==n||l!==0&&E.nodeType!==3||(u=r+l),E!==i||a!==0&&E.nodeType!==3||(o=r+a),E.nodeType===3&&(r+=E.nodeValue.length),(y=E.firstChild)!==null;)g=E,E=y;for(;;){if(E===e)break t;if(g===n&&++p===l&&(u=r),g===i&&++b===a&&(o=r),(y=E.nextSibling)!==null)break;E=g,g=E.parentNode}E=y}n=u===-1||o===-1?null:{start:u,end:o}}else n=null}n=n||{start:0,end:0}}else n=null;for(Lu={focusedElem:e,selectionRange:n},wi=!1,ze=t;ze!==null;)if(t=ze,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,ze=e;else for(;ze!==null;){switch(t=ze,i=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,n=t,l=i.memoizedProps,i=i.memoizedState,a=n.stateNode;try{var k=Mn(n.type,l,n.elementType===n.type);e=a.getSnapshotBeforeUpdate(k,i),a.__reactInternalSnapshotBeforeUpdate=e}catch(H){oe(n,n.return,H)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Gu(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Gu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(f(163))}if(e=t.sibling,e!==null){e.return=t.return,ze=e;break}ze=t.return}}function qc(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:tn(e,n),a&4&&el(5,n);break;case 1:if(tn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){oe(n,n.return,r)}else{var l=Mn(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){oe(n,n.return,r)}}a&64&&Dc(n),a&512&&tl(n,n.return);break;case 3:if(tn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Ss(e,t)}catch(r){oe(n,n.return,r)}}break;case 27:t===null&&a&4&&Bc(n);case 26:case 5:tn(e,n),t===null&&a&4&&Lc(n),a&512&&tl(n,n.return);break;case 12:tn(e,n);break;case 13:tn(e,n),a&4&&Vc(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Zm.bind(null,n),cp(e,n))));break;case 22:if(a=n.memoizedState!==null||Gt,!a){t=t!==null&&t.memoizedState!==null||ve,l=Gt;var i=ve;Gt=a,(ve=t)&&!i?nn(e,n,(n.subtreeFlags&8772)!==0):tn(e,n),Gt=l,ve=i}break;case 30:break;default:tn(e,n)}}function kc(e){var t=e.alternate;t!==null&&(e.alternate=null,kc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Xi(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var de=null,Xe=!1;function qt(e,t,n){for(n=n.child;n!==null;)Yc(e,t,n),n=n.sibling}function Yc(e,t,n){if(Fe&&typeof Fe.onCommitFiberUnmount=="function")try{Fe.onCommitFiberUnmount(Aa,n)}catch{}switch(n.tag){case 26:ve||Et(n,t),qt(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ve||Et(n,t);var a=de,l=Xe;sn(n.type)&&(de=n.stateNode,Xe=!1),qt(e,t,n),cl(n.stateNode),de=a,Xe=l;break;case 5:ve||Et(n,t);case 6:if(a=de,l=Xe,de=null,qt(e,t,n),de=a,Xe=l,de!==null)if(Xe)try{(de.nodeType===9?de.body:de.nodeName==="HTML"?de.ownerDocument.body:de).removeChild(n.stateNode)}catch(i){oe(n,t,i)}else try{de.removeChild(n.stateNode)}catch(i){oe(n,t,i)}break;case 18:de!==null&&(Xe?(e=de,Rf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),vl(e)):Rf(de,n.stateNode));break;case 4:a=de,l=Xe,de=n.stateNode.containerInfo,Xe=!0,qt(e,t,n),de=a,Xe=l;break;case 0:case 11:case 14:case 15:ve||en(2,n,t),ve||en(4,n,t),qt(e,t,n);break;case 1:ve||(Et(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&jc(n,t,a)),qt(e,t,n);break;case 21:qt(e,t,n);break;case 22:ve=(a=ve)||n.memoizedState!==null,qt(e,t,n),ve=a;break;default:qt(e,t,n)}}function Vc(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{vl(e)}catch(n){oe(t,t.return,n)}}function Bm(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Gc),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Gc),t;default:throw Error(f(435,e.tag))}}function du(e,t){var n=Bm(e);t.forEach(function(a){var l=Km.bind(null,e,a);n.has(a)||(n.add(a),a.then(l,l))})}function tt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a],i=e,r=t,u=r;e:for(;u!==null;){switch(u.tag){case 27:if(sn(u.type)){de=u.stateNode,Xe=!1;break e}break;case 5:de=u.stateNode,Xe=!1;break e;case 3:case 4:de=u.stateNode.containerInfo,Xe=!0;break e}u=u.return}if(de===null)throw Error(f(160));Yc(i,r,l),de=null,Xe=!1,i=l.alternate,i!==null&&(i.return=null),l.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Xc(t,e),t=t.sibling}var yt=null;function Xc(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:tt(t,e),nt(e),a&4&&(en(3,e,e.return),el(3,e),en(5,e,e.return));break;case 1:tt(t,e),nt(e),a&512&&(ve||n===null||Et(n,n.return)),a&64&&Gt&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var l=yt;if(tt(t,e),nt(e),a&512&&(ve||n===null||Et(n,n.return)),a&4){var i=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,l=l.ownerDocument||l;t:switch(a){case"title":i=l.getElementsByTagName("title")[0],(!i||i[Ta]||i[Le]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=l.createElement(a),l.head.insertBefore(i,l.querySelector("head > title"))),Re(i,a,n),i[Le]=e,Te(i),a=i;break e;case"link":var r=Gf("link","href",l).get(a+(n.href||""));if(r){for(var u=0;u<r.length;u++)if(i=r[u],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(u,1);break t}}i=l.createElement(a),Re(i,a,n),l.head.appendChild(i);break;case"meta":if(r=Gf("meta","content",l).get(a+(n.content||""))){for(u=0;u<r.length;u++)if(i=r[u],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(u,1);break t}}i=l.createElement(a),Re(i,a,n),l.head.appendChild(i);break;default:throw Error(f(468,a))}i[Le]=e,Te(i),a=i}e.stateNode=a}else qf(l,e.type,e.stateNode);else e.stateNode=Bf(l,a,e.memoizedProps);else i!==a?(i===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):i.count--,a===null?qf(l,e.type,e.stateNode):Bf(l,a,e.memoizedProps)):a===null&&e.stateNode!==null&&ou(e,e.memoizedProps,n.memoizedProps)}break;case 27:tt(t,e),nt(e),a&512&&(ve||n===null||Et(n,n.return)),n!==null&&a&4&&ou(e,e.memoizedProps,n.memoizedProps);break;case 5:if(tt(t,e),nt(e),a&512&&(ve||n===null||Et(n,n.return)),e.flags&32){l=e.stateNode;try{Xn(l,"")}catch(y){oe(e,e.return,y)}}a&4&&e.stateNode!=null&&(l=e.memoizedProps,ou(e,l,n!==null?n.memoizedProps:l)),a&1024&&(fu=!0);break;case 6:if(tt(t,e),nt(e),a&4){if(e.stateNode===null)throw Error(f(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(y){oe(e,e.return,y)}}break;case 3:if(Ci=null,l=yt,yt=_i(t.containerInfo),tt(t,e),yt=l,nt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{vl(t.containerInfo)}catch(y){oe(e,e.return,y)}fu&&(fu=!1,Qc(e));break;case 4:a=yt,yt=_i(e.stateNode.containerInfo),tt(t,e),nt(e),yt=a;break;case 12:tt(t,e),nt(e);break;case 13:tt(t,e),nt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(vu=xt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,du(e,a)));break;case 22:l=e.memoizedState!==null;var o=n!==null&&n.memoizedState!==null,p=Gt,b=ve;if(Gt=p||l,ve=b||o,tt(t,e),ve=b,Gt=p,nt(e),a&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(n===null||o||Gt||ve||Un(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){o=n=t;try{if(i=o.stateNode,l)r=i.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{u=o.stateNode;var E=o.memoizedProps.style,g=E!=null&&E.hasOwnProperty("display")?E.display:null;u.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(y){oe(o,o.return,y)}}}else if(t.tag===6){if(n===null){o=t;try{o.stateNode.nodeValue=l?"":o.memoizedProps}catch(y){oe(o,o.return,y)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,du(e,n))));break;case 19:tt(t,e),nt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,du(e,a)));break;case 30:break;case 21:break;default:tt(t,e),nt(e)}}function nt(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(Hc(a)){n=a;break}a=a.return}if(n==null)throw Error(f(160));switch(n.tag){case 27:var l=n.stateNode,i=su(e);fi(e,i,l);break;case 5:var r=n.stateNode;n.flags&32&&(Xn(r,""),n.flags&=-33);var u=su(e);fi(e,u,r);break;case 3:case 4:var o=n.stateNode.containerInfo,p=su(e);cu(e,p,o);break;default:throw Error(f(161))}}catch(b){oe(e,e.return,b)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Qc(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Qc(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function tn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)qc(e,t.alternate,t),t=t.sibling}function Un(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:en(4,t,t.return),Un(t);break;case 1:Et(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&jc(t,t.return,n),Un(t);break;case 27:cl(t.stateNode);case 26:case 5:Et(t,t.return),Un(t);break;case 22:t.memoizedState===null&&Un(t);break;case 30:Un(t);break;default:Un(t)}e=e.sibling}}function nn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,l=e,i=t,r=i.flags;switch(i.tag){case 0:case 11:case 15:nn(l,i,n),el(4,i);break;case 1:if(nn(l,i,n),a=i,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(p){oe(a,a.return,p)}if(a=i,l=a.updateQueue,l!==null){var u=a.stateNode;try{var o=l.shared.hiddenCallbacks;if(o!==null)for(l.shared.hiddenCallbacks=null,l=0;l<o.length;l++)xs(o[l],u)}catch(p){oe(a,a.return,p)}}n&&r&64&&Dc(i),tl(i,i.return);break;case 27:Bc(i);case 26:case 5:nn(l,i,n),n&&a===null&&r&4&&Lc(i),tl(i,i.return);break;case 12:nn(l,i,n);break;case 13:nn(l,i,n),n&&r&4&&Vc(l,i);break;case 22:i.memoizedState===null&&nn(l,i,n),tl(i,i.return);break;case 30:break;default:nn(l,i,n)}t=t.sibling}}function mu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&qa(n))}function pu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&qa(e))}function _t(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Zc(e,t,n,a),t=t.sibling}function Zc(e,t,n,a){var l=t.flags;switch(t.tag){case 0:case 11:case 15:_t(e,t,n,a),l&2048&&el(9,t);break;case 1:_t(e,t,n,a);break;case 3:_t(e,t,n,a),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&qa(e)));break;case 12:if(l&2048){_t(e,t,n,a),e=t.stateNode;try{var i=t.memoizedProps,r=i.id,u=i.onPostCommit;typeof u=="function"&&u(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(o){oe(t,t.return,o)}}else _t(e,t,n,a);break;case 13:_t(e,t,n,a);break;case 23:break;case 22:i=t.stateNode,r=t.alternate,t.memoizedState!==null?i._visibility&2?_t(e,t,n,a):nl(e,t):i._visibility&2?_t(e,t,n,a):(i._visibility|=2,sa(e,t,n,a,(t.subtreeFlags&10256)!==0)),l&2048&&mu(r,t);break;case 24:_t(e,t,n,a),l&2048&&pu(t.alternate,t);break;default:_t(e,t,n,a)}}function sa(e,t,n,a,l){for(l=l&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var i=e,r=t,u=n,o=a,p=r.flags;switch(r.tag){case 0:case 11:case 15:sa(i,r,u,o,l),el(8,r);break;case 23:break;case 22:var b=r.stateNode;r.memoizedState!==null?b._visibility&2?sa(i,r,u,o,l):nl(i,r):(b._visibility|=2,sa(i,r,u,o,l)),l&&p&2048&&mu(r.alternate,r);break;case 24:sa(i,r,u,o,l),l&&p&2048&&pu(r.alternate,r);break;default:sa(i,r,u,o,l)}t=t.sibling}}function nl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,l=a.flags;switch(a.tag){case 22:nl(n,a),l&2048&&mu(a.alternate,a);break;case 24:nl(n,a),l&2048&&pu(a.alternate,a);break;default:nl(n,a)}t=t.sibling}}var al=8192;function ca(e){if(e.subtreeFlags&al)for(e=e.child;e!==null;)Kc(e),e=e.sibling}function Kc(e){switch(e.tag){case 26:ca(e),e.flags&al&&e.memoizedState!==null&&Ep(yt,e.memoizedState,e.memoizedProps);break;case 5:ca(e);break;case 3:case 4:var t=yt;yt=_i(e.stateNode.containerInfo),ca(e),yt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=al,al=16777216,ca(e),al=t):ca(e));break;default:ca(e)}}function Jc(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ll(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];ze=a,Wc(a,e)}Jc(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ic(e),e=e.sibling}function Ic(e){switch(e.tag){case 0:case 11:case 15:ll(e),e.flags&2048&&en(9,e,e.return);break;case 3:ll(e);break;case 12:ll(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,di(e)):ll(e);break;default:ll(e)}}function di(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];ze=a,Wc(a,e)}Jc(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:en(8,t,t.return),di(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,di(t));break;default:di(t)}e=e.sibling}}function Wc(e,t){for(;ze!==null;){var n=ze;switch(n.tag){case 0:case 11:case 15:en(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:qa(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,ze=a;else e:for(n=e;ze!==null;){a=ze;var l=a.sibling,i=a.return;if(kc(a),a===n){ze=null;break e}if(l!==null){l.return=i,ze=l;break e}ze=i}}}var Gm={getCacheForType:function(e){var t=He(Ee),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},qm=typeof WeakMap=="function"?WeakMap:Map,ne=0,ce=null,Z=null,I=0,ae=0,at=null,an=!1,fa=!1,hu=!1,kt=0,ge=0,ln=0,Dn=0,gu=0,mt=0,da=0,il=null,Qe=null,yu=!1,vu=0,mi=1/0,pi=null,rn=null,Oe=0,un=null,ma=null,pa=0,bu=0,xu=null,Fc=null,rl=0,Su=null;function lt(){if((ne&2)!==0&&I!==0)return I&-I;if(x.T!==null){var e=ta;return e!==0?e:Nu()}return mo()}function $c(){mt===0&&(mt=(I&536870912)===0||ee?oo():536870912);var e=dt.current;return e!==null&&(e.flags|=32),mt}function it(e,t,n){(e===ce&&(ae===2||ae===9)||e.cancelPendingCommit!==null)&&(ha(e,0),on(e,I,mt,!1)),_a(e,n),((ne&2)===0||e!==ce)&&(e===ce&&((ne&2)===0&&(Dn|=n),ge===4&&on(e,I,mt,!1)),Tt(e))}function Pc(e,t,n){if((ne&6)!==0)throw Error(f(327));var a=!n&&(t&124)===0&&(t&e.expiredLanes)===0||Ea(e,t),l=a?Vm(e,t):_u(e,t,!0),i=a;do{if(l===0){fa&&!a&&on(e,t,0,!1);break}else{if(n=e.current.alternate,i&&!km(n)){l=_u(e,t,!1),i=!1;continue}if(l===2){if(i=t,e.errorRecoveryDisabledLanes&i)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;e:{var u=e;l=il;var o=u.current.memoizedState.isDehydrated;if(o&&(ha(u,r).flags|=256),r=_u(u,r,!1),r!==2){if(hu&&!o){u.errorRecoveryDisabledLanes|=i,Dn|=i,l=4;break e}i=Qe,Qe=l,i!==null&&(Qe===null?Qe=i:Qe.push.apply(Qe,i))}l=r}if(i=!1,l!==2)continue}}if(l===1){ha(e,0),on(e,t,0,!0);break}e:{switch(a=e,i=l,i){case 0:case 1:throw Error(f(345));case 4:if((t&4194048)!==t)break;case 6:on(a,t,mt,!an);break e;case 2:Qe=null;break;case 3:case 5:break;default:throw Error(f(329))}if((t&62914560)===t&&(l=vu+300-xt(),10<l)){if(on(a,t,mt,!an),Tl(a,0,!0)!==0)break e;a.timeoutHandle=wf(ef.bind(null,a,n,Qe,pi,yu,t,mt,Dn,da,an,i,2,-0,0),l);break e}ef(a,n,Qe,pi,yu,t,mt,Dn,da,an,i,0,-0,0)}}break}while(!0);Tt(e)}function ef(e,t,n,a,l,i,r,u,o,p,b,E,g,y){if(e.timeoutHandle=-1,E=t.subtreeFlags,(E&8192||(E&16785408)===16785408)&&(ml={stylesheets:null,count:0,unsuspend:Ap},Kc(t),E=_p(),E!==null)){e.cancelPendingCommit=E(of.bind(null,e,t,i,n,a,l,r,u,o,b,1,g,y)),on(e,i,r,!p);return}of(e,t,i,n,a,l,r,u,o)}function km(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var l=n[a],i=l.getSnapshot;l=l.value;try{if(!Pe(i(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function on(e,t,n,a){t&=~gu,t&=~Dn,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var l=t;0<l;){var i=31-$e(l),r=1<<i;a[i]=-1,l&=~r}n!==0&&co(e,n,t)}function hi(){return(ne&6)===0?(ul(0),!1):!0}function Au(){if(Z!==null){if(ae===0)var e=Z.return;else e=Z,Ut=Nn=null,Gr(e),ua=null,Fa=0,e=Z;for(;e!==null;)Uc(e.alternate,e),e=e.return;Z=null}}function ha(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,ip(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Au(),ce=e,Z=n=Ot(e.current,null),I=t,ae=0,at=null,an=!1,fa=Ea(e,t),hu=!1,da=mt=gu=Dn=ln=ge=0,Qe=il=null,yu=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var l=31-$e(a),i=1<<l;t|=e[l],a&=~i}return kt=t,Hl(),n}function tf(e,t){X=null,x.H=ni,t===Ya||t===Zl?(t=vs(),ae=3):t===hs?(t=vs(),ae=4):ae=t===bc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,at=t,Z===null&&(ge=1,ui(e,ot(t,e.current)))}function nf(){var e=x.H;return x.H=ni,e===null?ni:e}function af(){var e=x.A;return x.A=Gm,e}function Eu(){ge=4,an||(I&4194048)!==I&&dt.current!==null||(fa=!0),(ln&134217727)===0&&(Dn&134217727)===0||ce===null||on(ce,I,mt,!1)}function _u(e,t,n){var a=ne;ne|=2;var l=nf(),i=af();(ce!==e||I!==t)&&(pi=null,ha(e,t)),t=!1;var r=ge;e:do try{if(ae!==0&&Z!==null){var u=Z,o=at;switch(ae){case 8:Au(),r=6;break e;case 3:case 2:case 9:case 6:dt.current===null&&(t=!0);var p=ae;if(ae=0,at=null,ga(e,u,o,p),n&&fa){r=0;break e}break;default:p=ae,ae=0,at=null,ga(e,u,o,p)}}Ym(),r=ge;break}catch(b){tf(e,b)}while(!0);return t&&e.shellSuspendCounter++,Ut=Nn=null,ne=a,x.H=l,x.A=i,Z===null&&(ce=null,I=0,Hl()),r}function Ym(){for(;Z!==null;)lf(Z)}function Vm(e,t){var n=ne;ne|=2;var a=nf(),l=af();ce!==e||I!==t?(pi=null,mi=xt()+500,ha(e,t)):fa=Ea(e,t);e:do try{if(ae!==0&&Z!==null){t=Z;var i=at;t:switch(ae){case 1:ae=0,at=null,ga(e,t,i,1);break;case 2:case 9:if(gs(i)){ae=0,at=null,rf(t);break}t=function(){ae!==2&&ae!==9||ce!==e||(ae=7),Tt(e)},i.then(t,t);break e;case 3:ae=7;break e;case 4:ae=5;break e;case 7:gs(i)?(ae=0,at=null,rf(t)):(ae=0,at=null,ga(e,t,i,7));break;case 5:var r=null;switch(Z.tag){case 26:r=Z.memoizedState;case 5:case 27:var u=Z;if(!r||kf(r)){ae=0,at=null;var o=u.sibling;if(o!==null)Z=o;else{var p=u.return;p!==null?(Z=p,gi(p)):Z=null}break t}}ae=0,at=null,ga(e,t,i,5);break;case 6:ae=0,at=null,ga(e,t,i,6);break;case 8:Au(),ge=6;break e;default:throw Error(f(462))}}Xm();break}catch(b){tf(e,b)}while(!0);return Ut=Nn=null,x.H=a,x.A=l,ne=n,Z!==null?0:(ce=null,I=0,Hl(),ge)}function Xm(){for(;Z!==null&&!dd();)lf(Z)}function lf(e){var t=Rc(e.alternate,e,kt);e.memoizedProps=e.pendingProps,t===null?gi(e):Z=t}function rf(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Tc(n,t,t.pendingProps,t.type,void 0,I);break;case 11:t=Tc(n,t,t.pendingProps,t.type.render,t.ref,I);break;case 5:Gr(t);default:Uc(n,t),t=Z=rs(t,kt),t=Rc(n,t,kt)}e.memoizedProps=e.pendingProps,t===null?gi(e):Z=t}function ga(e,t,n,a){Ut=Nn=null,Gr(t),ua=null,Fa=0;var l=t.return;try{if(Um(e,l,t,n,I)){ge=1,ui(e,ot(n,e.current)),Z=null;return}}catch(i){if(l!==null)throw Z=l,i;ge=1,ui(e,ot(n,e.current)),Z=null;return}t.flags&32768?(ee||a===1?e=!0:fa||(I&536870912)!==0?e=!1:(an=e=!0,(a===2||a===9||a===3||a===6)&&(a=dt.current,a!==null&&a.tag===13&&(a.flags|=16384))),uf(t,e)):gi(t)}function gi(e){var t=e;do{if((t.flags&32768)!==0){uf(t,an);return}e=t.return;var n=jm(t.alternate,t,kt);if(n!==null){Z=n;return}if(t=t.sibling,t!==null){Z=t;return}Z=t=e}while(t!==null);ge===0&&(ge=5)}function uf(e,t){do{var n=Lm(e.alternate,e);if(n!==null){n.flags&=32767,Z=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Z=e;return}Z=e=n}while(e!==null);ge=6,Z=null}function of(e,t,n,a,l,i,r,u,o){e.cancelPendingCommit=null;do yi();while(Oe!==0);if((ne&6)!==0)throw Error(f(327));if(t!==null){if(t===e.current)throw Error(f(177));if(i=t.lanes|t.childLanes,i|=pr,Ad(e,n,i,r,u,o),e===ce&&(Z=ce=null,I=0),ma=t,un=e,pa=n,bu=i,xu=l,Fc=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Jm(Al,function(){return mf(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=x.T,x.T=null,l=w.p,w.p=2,r=ne,ne|=4;try{Hm(e,t,n)}finally{ne=r,w.p=l,x.T=a}}Oe=1,sf(),cf(),ff()}}function sf(){if(Oe===1){Oe=0;var e=un,t=ma,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=x.T,x.T=null;var a=w.p;w.p=2;var l=ne;ne|=4;try{Xc(t,e);var i=Lu,r=Wo(e.containerInfo),u=i.focusedElem,o=i.selectionRange;if(r!==u&&u&&u.ownerDocument&&Io(u.ownerDocument.documentElement,u)){if(o!==null&&sr(u)){var p=o.start,b=o.end;if(b===void 0&&(b=p),"selectionStart"in u)u.selectionStart=p,u.selectionEnd=Math.min(b,u.value.length);else{var E=u.ownerDocument||document,g=E&&E.defaultView||window;if(g.getSelection){var y=g.getSelection(),k=u.textContent.length,H=Math.min(o.start,k),re=o.end===void 0?H:Math.min(o.end,k);!y.extend&&H>re&&(r=re,re=H,H=r);var d=Jo(u,H),c=Jo(u,re);if(d&&c&&(y.rangeCount!==1||y.anchorNode!==d.node||y.anchorOffset!==d.offset||y.focusNode!==c.node||y.focusOffset!==c.offset)){var m=E.createRange();m.setStart(d.node,d.offset),y.removeAllRanges(),H>re?(y.addRange(m),y.extend(c.node,c.offset)):(m.setEnd(c.node,c.offset),y.addRange(m))}}}}for(E=[],y=u;y=y.parentNode;)y.nodeType===1&&E.push({element:y,left:y.scrollLeft,top:y.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<E.length;u++){var A=E[u];A.element.scrollLeft=A.left,A.element.scrollTop=A.top}}wi=!!ju,Lu=ju=null}finally{ne=l,w.p=a,x.T=n}}e.current=t,Oe=2}}function cf(){if(Oe===2){Oe=0;var e=un,t=ma,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=x.T,x.T=null;var a=w.p;w.p=2;var l=ne;ne|=4;try{qc(e,t.alternate,t)}finally{ne=l,w.p=a,x.T=n}}Oe=3}}function ff(){if(Oe===4||Oe===3){Oe=0,md();var e=un,t=ma,n=pa,a=Fc;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Oe=5:(Oe=0,ma=un=null,df(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(rn=null),Yi(n),t=t.stateNode,Fe&&typeof Fe.onCommitFiberRoot=="function")try{Fe.onCommitFiberRoot(Aa,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=x.T,l=w.p,w.p=2,x.T=null;try{for(var i=e.onRecoverableError,r=0;r<a.length;r++){var u=a[r];i(u.value,{componentStack:u.stack})}}finally{x.T=t,w.p=l}}(pa&3)!==0&&yi(),Tt(e),l=e.pendingLanes,(n&4194090)!==0&&(l&42)!==0?e===Su?rl++:(rl=0,Su=e):rl=0,ul(0)}}function df(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,qa(t)))}function yi(e){return sf(),cf(),ff(),mf()}function mf(){if(Oe!==5)return!1;var e=un,t=bu;bu=0;var n=Yi(pa),a=x.T,l=w.p;try{w.p=32>n?32:n,x.T=null,n=xu,xu=null;var i=un,r=pa;if(Oe=0,ma=un=null,pa=0,(ne&6)!==0)throw Error(f(331));var u=ne;if(ne|=4,Ic(i.current),Zc(i,i.current,r,n),ne=u,ul(0,!1),Fe&&typeof Fe.onPostCommitFiberRoot=="function")try{Fe.onPostCommitFiberRoot(Aa,i)}catch{}return!0}finally{w.p=l,x.T=a,df(e,t)}}function pf(e,t,n){t=ot(n,t),t=Pr(e.stateNode,t,2),e=Wt(e,t,2),e!==null&&(_a(e,2),Tt(e))}function oe(e,t,n){if(e.tag===3)pf(e,e,n);else for(;t!==null;){if(t.tag===3){pf(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(rn===null||!rn.has(a))){e=ot(n,e),n=yc(2),a=Wt(t,n,2),a!==null&&(vc(n,a,t,e),_a(a,2),Tt(a));break}}t=t.return}}function Tu(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new qm;var l=new Set;a.set(t,l)}else l=a.get(t),l===void 0&&(l=new Set,a.set(t,l));l.has(n)||(hu=!0,l.add(n),e=Qm.bind(null,e,t,n),t.then(e,e))}function Qm(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,ce===e&&(I&n)===n&&(ge===4||ge===3&&(I&62914560)===I&&300>xt()-vu?(ne&2)===0&&ha(e,0):gu|=n,da===I&&(da=0)),Tt(e)}function hf(e,t){t===0&&(t=so()),e=Fn(e,t),e!==null&&(_a(e,t),Tt(e))}function Zm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),hf(e,n)}function Km(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(f(314))}a!==null&&a.delete(t),hf(e,n)}function Jm(e,t){return Bi(e,t)}var vi=null,ya=null,Cu=!1,bi=!1,zu=!1,jn=0;function Tt(e){e!==ya&&e.next===null&&(ya===null?vi=ya=e:ya=ya.next=e),bi=!0,Cu||(Cu=!0,Wm())}function ul(e,t){if(!zu&&bi){zu=!0;do for(var n=!1,a=vi;a!==null;){if(e!==0){var l=a.pendingLanes;if(l===0)var i=0;else{var r=a.suspendedLanes,u=a.pingedLanes;i=(1<<31-$e(42|e)+1)-1,i&=l&~(r&~u),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(n=!0,bf(a,i))}else i=I,i=Tl(a,a===ce?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||Ea(a,i)||(n=!0,bf(a,i));a=a.next}while(n);zu=!1}}function Im(){gf()}function gf(){bi=Cu=!1;var e=0;jn!==0&&(lp()&&(e=jn),jn=0);for(var t=xt(),n=null,a=vi;a!==null;){var l=a.next,i=yf(a,t);i===0?(a.next=null,n===null?vi=l:n.next=l,l===null&&(ya=n)):(n=a,(e!==0||(i&3)!==0)&&(bi=!0)),a=l}ul(e)}function yf(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var r=31-$e(i),u=1<<r,o=l[r];o===-1?((u&n)===0||(u&a)!==0)&&(l[r]=Sd(u,t)):o<=t&&(e.expiredLanes|=u),i&=~u}if(t=ce,n=I,n=Tl(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(ae===2||ae===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Gi(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Ea(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&Gi(a),Yi(n)){case 2:case 8:n=ro;break;case 32:n=Al;break;case 268435456:n=uo;break;default:n=Al}return a=vf.bind(null,e),n=Bi(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&Gi(a),e.callbackPriority=2,e.callbackNode=null,2}function vf(e,t){if(Oe!==0&&Oe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(yi()&&e.callbackNode!==n)return null;var a=I;return a=Tl(e,e===ce?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Pc(e,a,t),yf(e,xt()),e.callbackNode!=null&&e.callbackNode===n?vf.bind(null,e):null)}function bf(e,t){if(yi())return null;Pc(e,t,!0)}function Wm(){rp(function(){(ne&6)!==0?Bi(io,Im):gf()})}function Nu(){return jn===0&&(jn=oo()),jn}function xf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ol(""+e)}function Sf(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Fm(e,t,n,a,l){if(t==="submit"&&n&&n.stateNode===l){var i=xf((l[ke]||null).action),r=a.submitter;r&&(t=(t=r[ke]||null)?xf(t.formAction):r.getAttribute("formAction"),t!==null&&(i=t,r=null));var u=new Dl("action","action",null,a,l);e.push({event:u,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(jn!==0){var o=r?Sf(l,r):new FormData(l);Jr(n,{pending:!0,data:o,method:l.method,action:i},null,o)}}else typeof i=="function"&&(u.preventDefault(),o=r?Sf(l,r):new FormData(l),Jr(n,{pending:!0,data:o,method:l.method,action:i},i,o))},currentTarget:l}]})}}for(var wu=0;wu<mr.length;wu++){var Ou=mr[wu],$m=Ou.toLowerCase(),Pm=Ou[0].toUpperCase()+Ou.slice(1);gt($m,"on"+Pm)}gt(Po,"onAnimationEnd"),gt(es,"onAnimationIteration"),gt(ts,"onAnimationStart"),gt("dblclick","onDoubleClick"),gt("focusin","onFocus"),gt("focusout","onBlur"),gt(gm,"onTransitionRun"),gt(ym,"onTransitionStart"),gt(vm,"onTransitionCancel"),gt(ns,"onTransitionEnd"),kn("onMouseEnter",["mouseout","mouseover"]),kn("onMouseLeave",["mouseout","mouseover"]),kn("onPointerEnter",["pointerout","pointerover"]),kn("onPointerLeave",["pointerout","pointerover"]),bn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),bn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),bn("onBeforeInput",["compositionend","keypress","textInput","paste"]),bn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),bn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),bn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ol="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ep=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ol));function Af(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],l=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var r=a.length-1;0<=r;r--){var u=a[r],o=u.instance,p=u.currentTarget;if(u=u.listener,o!==i&&l.isPropagationStopped())break e;i=u,l.currentTarget=p;try{i(l)}catch(b){ri(b)}l.currentTarget=null,i=o}else for(r=0;r<a.length;r++){if(u=a[r],o=u.instance,p=u.currentTarget,u=u.listener,o!==i&&l.isPropagationStopped())break e;i=u,l.currentTarget=p;try{i(l)}catch(b){ri(b)}l.currentTarget=null,i=o}}}}function K(e,t){var n=t[Vi];n===void 0&&(n=t[Vi]=new Set);var a=e+"__bubble";n.has(a)||(Ef(t,e,2,!1),n.add(a))}function Ru(e,t,n){var a=0;t&&(a|=4),Ef(n,e,a,t)}var xi="_reactListening"+Math.random().toString(36).slice(2);function Mu(e){if(!e[xi]){e[xi]=!0,ho.forEach(function(n){n!=="selectionchange"&&(ep.has(n)||Ru(n,!1,e),Ru(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xi]||(t[xi]=!0,Ru("selectionchange",!1,t))}}function Ef(e,t,n,a){switch(Kf(t)){case 2:var l=zp;break;case 8:l=Np;break;default:l=Zu}n=l.bind(null,t,n,e),l=void 0,!er||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Uu(e,t,n,a,l){var i=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var r=a.tag;if(r===3||r===4){var u=a.stateNode.containerInfo;if(u===l)break;if(r===4)for(r=a.return;r!==null;){var o=r.tag;if((o===3||o===4)&&r.stateNode.containerInfo===l)return;r=r.return}for(;u!==null;){if(r=Bn(u),r===null)return;if(o=r.tag,o===5||o===6||o===26||o===27){a=i=r;continue e}u=u.parentNode}}a=a.return}wo(function(){var p=i,b=$i(n),E=[];e:{var g=as.get(e);if(g!==void 0){var y=Dl,k=e;switch(e){case"keypress":if(Ml(n)===0)break e;case"keydown":case"keyup":y=Jd;break;case"focusin":k="focus",y=lr;break;case"focusout":k="blur",y=lr;break;case"beforeblur":case"afterblur":y=lr;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Mo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Ld;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Fd;break;case Po:case es:case ts:y=Gd;break;case ns:y=Pd;break;case"scroll":case"scrollend":y=Dd;break;case"wheel":y=tm;break;case"copy":case"cut":case"paste":y=kd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Do;break;case"toggle":case"beforetoggle":y=am}var H=(t&4)!==0,re=!H&&(e==="scroll"||e==="scrollend"),d=H?g!==null?g+"Capture":null:g;H=[];for(var c=p,m;c!==null;){var A=c;if(m=A.stateNode,A=A.tag,A!==5&&A!==26&&A!==27||m===null||d===null||(A=za(c,d),A!=null&&H.push(sl(c,A,m))),re)break;c=c.return}0<H.length&&(g=new y(g,k,null,n,b),E.push({event:g,listeners:H}))}}if((t&7)===0){e:{if(g=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",g&&n!==Fi&&(k=n.relatedTarget||n.fromElement)&&(Bn(k)||k[Hn]))break e;if((y||g)&&(g=b.window===b?b:(g=b.ownerDocument)?g.defaultView||g.parentWindow:window,y?(k=n.relatedTarget||n.toElement,y=p,k=k?Bn(k):null,k!==null&&(re=j(k),H=k.tag,k!==re||H!==5&&H!==27&&H!==6)&&(k=null)):(y=null,k=p),y!==k)){if(H=Mo,A="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(H=Do,A="onPointerLeave",d="onPointerEnter",c="pointer"),re=y==null?g:Ca(y),m=k==null?g:Ca(k),g=new H(A,c+"leave",y,n,b),g.target=re,g.relatedTarget=m,A=null,Bn(b)===p&&(H=new H(d,c+"enter",k,n,b),H.target=m,H.relatedTarget=re,A=H),re=A,y&&k)t:{for(H=y,d=k,c=0,m=H;m;m=va(m))c++;for(m=0,A=d;A;A=va(A))m++;for(;0<c-m;)H=va(H),c--;for(;0<m-c;)d=va(d),m--;for(;c--;){if(H===d||d!==null&&H===d.alternate)break t;H=va(H),d=va(d)}H=null}else H=null;y!==null&&_f(E,g,y,H,!1),k!==null&&re!==null&&_f(E,re,k,H,!0)}}e:{if(g=p?Ca(p):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var M=Yo;else if(qo(g))if(Vo)M=mm;else{M=fm;var Q=cm}else y=g.nodeName,!y||y.toLowerCase()!=="input"||g.type!=="checkbox"&&g.type!=="radio"?p&&Wi(p.elementType)&&(M=Yo):M=dm;if(M&&(M=M(e,p))){ko(E,M,n,b);break e}Q&&Q(e,g,p),e==="focusout"&&p&&g.type==="number"&&p.memoizedProps.value!=null&&Ii(g,"number",g.value)}switch(Q=p?Ca(p):window,e){case"focusin":(qo(Q)||Q.contentEditable==="true")&&(Jn=Q,cr=p,ja=null);break;case"focusout":ja=cr=Jn=null;break;case"mousedown":fr=!0;break;case"contextmenu":case"mouseup":case"dragend":fr=!1,Fo(E,n,b);break;case"selectionchange":if(hm)break;case"keydown":case"keyup":Fo(E,n,b)}var U;if(rr)e:{switch(e){case"compositionstart":var B="onCompositionStart";break e;case"compositionend":B="onCompositionEnd";break e;case"compositionupdate":B="onCompositionUpdate";break e}B=void 0}else Kn?Bo(e,n)&&(B="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(B="onCompositionStart");B&&(jo&&n.locale!=="ko"&&(Kn||B!=="onCompositionStart"?B==="onCompositionEnd"&&Kn&&(U=Oo()):(Zt=b,tr="value"in Zt?Zt.value:Zt.textContent,Kn=!0)),Q=Si(p,B),0<Q.length&&(B=new Uo(B,e,null,n,b),E.push({event:B,listeners:Q}),U?B.data=U:(U=Go(n),U!==null&&(B.data=U)))),(U=im?rm(e,n):um(e,n))&&(B=Si(p,"onBeforeInput"),0<B.length&&(Q=new Uo("onBeforeInput","beforeinput",null,n,b),E.push({event:Q,listeners:B}),Q.data=U)),Fm(E,e,p,n,b)}Af(E,t)})}function sl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Si(e,t){for(var n=t+"Capture",a=[];e!==null;){var l=e,i=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=za(e,n),l!=null&&a.unshift(sl(e,l,i)),l=za(e,t),l!=null&&a.push(sl(e,l,i))),e.tag===3)return a;e=e.return}return[]}function va(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function _f(e,t,n,a,l){for(var i=t._reactName,r=[];n!==null&&n!==a;){var u=n,o=u.alternate,p=u.stateNode;if(u=u.tag,o!==null&&o===a)break;u!==5&&u!==26&&u!==27||p===null||(o=p,l?(p=za(n,i),p!=null&&r.unshift(sl(n,p,o))):l||(p=za(n,i),p!=null&&r.push(sl(n,p,o)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var tp=/\r\n?/g,np=/\u0000|\uFFFD/g;function Tf(e){return(typeof e=="string"?e:""+e).replace(tp,`
`).replace(np,"")}function Cf(e,t){return t=Tf(t),Tf(e)===t}function Ai(){}function ie(e,t,n,a,l,i){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Xn(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Xn(e,""+a);break;case"className":zl(e,"class",a);break;case"tabIndex":zl(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":zl(e,n,a);break;case"style":zo(e,a,i);break;case"data":if(t!=="object"){zl(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Ol(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(n==="formAction"?(t!=="input"&&ie(e,t,"name",l.name,l,null),ie(e,t,"formEncType",l.formEncType,l,null),ie(e,t,"formMethod",l.formMethod,l,null),ie(e,t,"formTarget",l.formTarget,l,null)):(ie(e,t,"encType",l.encType,l,null),ie(e,t,"method",l.method,l,null),ie(e,t,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Ol(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=Ai);break;case"onScroll":a!=null&&K("scroll",e);break;case"onScrollEnd":a!=null&&K("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(f(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(f(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=Ol(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":K("beforetoggle",e),K("toggle",e),Cl(e,"popover",a);break;case"xlinkActuate":Nt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Nt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Nt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Nt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Nt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Nt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Cl(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Md.get(n)||n,Cl(e,n,a))}}function Du(e,t,n,a,l,i){switch(n){case"style":zo(e,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(f(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(f(60));e.innerHTML=n}}break;case"children":typeof a=="string"?Xn(e,a):(typeof a=="number"||typeof a=="bigint")&&Xn(e,""+a);break;case"onScroll":a!=null&&K("scroll",e);break;case"onScrollEnd":a!=null&&K("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Ai);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!go.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),t=n.slice(2,l?n.length-7:void 0),i=e[ke]||null,i=i!=null?i[n]:null,typeof i=="function"&&e.removeEventListener(t,i,l),typeof a=="function")){typeof i!="function"&&i!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,l);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):Cl(e,n,a)}}}function Re(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":K("error",e),K("load",e);var a=!1,l=!1,i;for(i in n)if(n.hasOwnProperty(i)){var r=n[i];if(r!=null)switch(i){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(f(137,t));default:ie(e,t,i,r,n,null)}}l&&ie(e,t,"srcSet",n.srcSet,n,null),a&&ie(e,t,"src",n.src,n,null);return;case"input":K("invalid",e);var u=i=r=l=null,o=null,p=null;for(a in n)if(n.hasOwnProperty(a)){var b=n[a];if(b!=null)switch(a){case"name":l=b;break;case"type":r=b;break;case"checked":o=b;break;case"defaultChecked":p=b;break;case"value":i=b;break;case"defaultValue":u=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(f(137,t));break;default:ie(e,t,a,b,n,null)}}Eo(e,i,u,o,p,r,l,!1),Nl(e);return;case"select":K("invalid",e),a=r=i=null;for(l in n)if(n.hasOwnProperty(l)&&(u=n[l],u!=null))switch(l){case"value":i=u;break;case"defaultValue":r=u;break;case"multiple":a=u;default:ie(e,t,l,u,n,null)}t=i,n=r,e.multiple=!!a,t!=null?Vn(e,!!a,t,!1):n!=null&&Vn(e,!!a,n,!0);return;case"textarea":K("invalid",e),i=l=a=null;for(r in n)if(n.hasOwnProperty(r)&&(u=n[r],u!=null))switch(r){case"value":a=u;break;case"defaultValue":l=u;break;case"children":i=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(f(91));break;default:ie(e,t,r,u,n,null)}To(e,a,l,i),Nl(e);return;case"option":for(o in n)if(n.hasOwnProperty(o)&&(a=n[o],a!=null))switch(o){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:ie(e,t,o,a,n,null)}return;case"dialog":K("beforetoggle",e),K("toggle",e),K("cancel",e),K("close",e);break;case"iframe":case"object":K("load",e);break;case"video":case"audio":for(a=0;a<ol.length;a++)K(ol[a],e);break;case"image":K("error",e),K("load",e);break;case"details":K("toggle",e);break;case"embed":case"source":case"link":K("error",e),K("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(p in n)if(n.hasOwnProperty(p)&&(a=n[p],a!=null))switch(p){case"children":case"dangerouslySetInnerHTML":throw Error(f(137,t));default:ie(e,t,p,a,n,null)}return;default:if(Wi(t)){for(b in n)n.hasOwnProperty(b)&&(a=n[b],a!==void 0&&Du(e,t,b,a,n,void 0));return}}for(u in n)n.hasOwnProperty(u)&&(a=n[u],a!=null&&ie(e,t,u,a,n,null))}function ap(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,r=null,u=null,o=null,p=null,b=null;for(y in n){var E=n[y];if(n.hasOwnProperty(y)&&E!=null)switch(y){case"checked":break;case"value":break;case"defaultValue":o=E;default:a.hasOwnProperty(y)||ie(e,t,y,null,a,E)}}for(var g in a){var y=a[g];if(E=n[g],a.hasOwnProperty(g)&&(y!=null||E!=null))switch(g){case"type":i=y;break;case"name":l=y;break;case"checked":p=y;break;case"defaultChecked":b=y;break;case"value":r=y;break;case"defaultValue":u=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(f(137,t));break;default:y!==E&&ie(e,t,g,y,a,E)}}Ji(e,r,u,o,p,b,i,l);return;case"select":y=r=u=g=null;for(i in n)if(o=n[i],n.hasOwnProperty(i)&&o!=null)switch(i){case"value":break;case"multiple":y=o;default:a.hasOwnProperty(i)||ie(e,t,i,null,a,o)}for(l in a)if(i=a[l],o=n[l],a.hasOwnProperty(l)&&(i!=null||o!=null))switch(l){case"value":g=i;break;case"defaultValue":u=i;break;case"multiple":r=i;default:i!==o&&ie(e,t,l,i,a,o)}t=u,n=r,a=y,g!=null?Vn(e,!!n,g,!1):!!a!=!!n&&(t!=null?Vn(e,!!n,t,!0):Vn(e,!!n,n?[]:"",!1));return;case"textarea":y=g=null;for(u in n)if(l=n[u],n.hasOwnProperty(u)&&l!=null&&!a.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:ie(e,t,u,null,a,l)}for(r in a)if(l=a[r],i=n[r],a.hasOwnProperty(r)&&(l!=null||i!=null))switch(r){case"value":g=l;break;case"defaultValue":y=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(f(91));break;default:l!==i&&ie(e,t,r,l,a,i)}_o(e,g,y);return;case"option":for(var k in n)if(g=n[k],n.hasOwnProperty(k)&&g!=null&&!a.hasOwnProperty(k))switch(k){case"selected":e.selected=!1;break;default:ie(e,t,k,null,a,g)}for(o in a)if(g=a[o],y=n[o],a.hasOwnProperty(o)&&g!==y&&(g!=null||y!=null))switch(o){case"selected":e.selected=g&&typeof g!="function"&&typeof g!="symbol";break;default:ie(e,t,o,g,a,y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var H in n)g=n[H],n.hasOwnProperty(H)&&g!=null&&!a.hasOwnProperty(H)&&ie(e,t,H,null,a,g);for(p in a)if(g=a[p],y=n[p],a.hasOwnProperty(p)&&g!==y&&(g!=null||y!=null))switch(p){case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(f(137,t));break;default:ie(e,t,p,g,a,y)}return;default:if(Wi(t)){for(var re in n)g=n[re],n.hasOwnProperty(re)&&g!==void 0&&!a.hasOwnProperty(re)&&Du(e,t,re,void 0,a,g);for(b in a)g=a[b],y=n[b],!a.hasOwnProperty(b)||g===y||g===void 0&&y===void 0||Du(e,t,b,g,a,y);return}}for(var d in n)g=n[d],n.hasOwnProperty(d)&&g!=null&&!a.hasOwnProperty(d)&&ie(e,t,d,null,a,g);for(E in a)g=a[E],y=n[E],!a.hasOwnProperty(E)||g===y||g==null&&y==null||ie(e,t,E,g,a,y)}var ju=null,Lu=null;function Ei(e){return e.nodeType===9?e:e.ownerDocument}function zf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Nf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Hu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Bu=null;function lp(){var e=window.event;return e&&e.type==="popstate"?e===Bu?!1:(Bu=e,!0):(Bu=null,!1)}var wf=typeof setTimeout=="function"?setTimeout:void 0,ip=typeof clearTimeout=="function"?clearTimeout:void 0,Of=typeof Promise=="function"?Promise:void 0,rp=typeof queueMicrotask=="function"?queueMicrotask:typeof Of<"u"?function(e){return Of.resolve(null).then(e).catch(up)}:wf;function up(e){setTimeout(function(){throw e})}function sn(e){return e==="head"}function Rf(e,t){var n=t,a=0,l=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(0<a&&8>a){n=a;var r=e.ownerDocument;if(n&1&&cl(r.documentElement),n&2&&cl(r.body),n&4)for(n=r.head,cl(n),r=n.firstChild;r;){var u=r.nextSibling,o=r.nodeName;r[Ta]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&r.rel.toLowerCase()==="stylesheet"||n.removeChild(r),r=u}}if(l===0){e.removeChild(i),vl(t);return}l--}else n==="$"||n==="$?"||n==="$!"?l++:a=n.charCodeAt(0)-48;else a=0;n=i}while(n);vl(t)}function Gu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Gu(n),Xi(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function op(e,t,n,a){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Ta])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=vt(e.nextSibling),e===null)break}return null}function sp(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=vt(e.nextSibling),e===null))return null;return e}function qu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function cp(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var ku=null;function Mf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function Uf(e,t,n){switch(t=Ei(n),e){case"html":if(e=t.documentElement,!e)throw Error(f(452));return e;case"head":if(e=t.head,!e)throw Error(f(453));return e;case"body":if(e=t.body,!e)throw Error(f(454));return e;default:throw Error(f(451))}}function cl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Xi(e)}var pt=new Map,Df=new Set;function _i(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Yt=w.d;w.d={f:fp,r:dp,D:mp,C:pp,L:hp,m:gp,X:vp,S:yp,M:bp};function fp(){var e=Yt.f(),t=hi();return e||t}function dp(e){var t=Gn(e);t!==null&&t.tag===5&&t.type==="form"?Ps(t):Yt.r(e)}var ba=typeof document>"u"?null:document;function jf(e,t,n){var a=ba;if(a&&typeof t=="string"&&t){var l=ut(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),Df.has(l)||(Df.add(l),e={rel:e,crossOrigin:n,href:t},a.querySelector(l)===null&&(t=a.createElement("link"),Re(t,"link",e),Te(t),a.head.appendChild(t)))}}function mp(e){Yt.D(e),jf("dns-prefetch",e,null)}function pp(e,t){Yt.C(e,t),jf("preconnect",e,t)}function hp(e,t,n){Yt.L(e,t,n);var a=ba;if(a&&e&&t){var l='link[rel="preload"][as="'+ut(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+ut(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+ut(n.imageSizes)+'"]')):l+='[href="'+ut(e)+'"]';var i=l;switch(t){case"style":i=xa(e);break;case"script":i=Sa(e)}pt.has(i)||(e=R({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),pt.set(i,e),a.querySelector(l)!==null||t==="style"&&a.querySelector(fl(i))||t==="script"&&a.querySelector(dl(i))||(t=a.createElement("link"),Re(t,"link",e),Te(t),a.head.appendChild(t)))}}function gp(e,t){Yt.m(e,t);var n=ba;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+ut(a)+'"][href="'+ut(e)+'"]',i=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Sa(e)}if(!pt.has(i)&&(e=R({rel:"modulepreload",href:e},t),pt.set(i,e),n.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(dl(i)))return}a=n.createElement("link"),Re(a,"link",e),Te(a),n.head.appendChild(a)}}}function yp(e,t,n){Yt.S(e,t,n);var a=ba;if(a&&e){var l=qn(a).hoistableStyles,i=xa(e);t=t||"default";var r=l.get(i);if(!r){var u={loading:0,preload:null};if(r=a.querySelector(fl(i)))u.loading=5;else{e=R({rel:"stylesheet",href:e,"data-precedence":t},n),(n=pt.get(i))&&Yu(e,n);var o=r=a.createElement("link");Te(o),Re(o,"link",e),o._p=new Promise(function(p,b){o.onload=p,o.onerror=b}),o.addEventListener("load",function(){u.loading|=1}),o.addEventListener("error",function(){u.loading|=2}),u.loading|=4,Ti(r,t,a)}r={type:"stylesheet",instance:r,count:1,state:u},l.set(i,r)}}}function vp(e,t){Yt.X(e,t);var n=ba;if(n&&e){var a=qn(n).hoistableScripts,l=Sa(e),i=a.get(l);i||(i=n.querySelector(dl(l)),i||(e=R({src:e,async:!0},t),(t=pt.get(l))&&Vu(e,t),i=n.createElement("script"),Te(i),Re(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function bp(e,t){Yt.M(e,t);var n=ba;if(n&&e){var a=qn(n).hoistableScripts,l=Sa(e),i=a.get(l);i||(i=n.querySelector(dl(l)),i||(e=R({src:e,async:!0,type:"module"},t),(t=pt.get(l))&&Vu(e,t),i=n.createElement("script"),Te(i),Re(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function Lf(e,t,n,a){var l=(l=Y.current)?_i(l):null;if(!l)throw Error(f(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=xa(n.href),n=qn(l).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=xa(n.href);var i=qn(l).hoistableStyles,r=i.get(e);if(r||(l=l.ownerDocument||l,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,r),(i=l.querySelector(fl(e)))&&!i._p&&(r.instance=i,r.state.loading=5),pt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},pt.set(e,n),i||xp(l,e,n,r.state))),t&&a===null)throw Error(f(528,""));return r}if(t&&a!==null)throw Error(f(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Sa(n),n=qn(l).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(f(444,e))}}function xa(e){return'href="'+ut(e)+'"'}function fl(e){return'link[rel="stylesheet"]['+e+"]"}function Hf(e){return R({},e,{"data-precedence":e.precedence,precedence:null})}function xp(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Re(t,"link",n),Te(t),e.head.appendChild(t))}function Sa(e){return'[src="'+ut(e)+'"]'}function dl(e){return"script[async]"+e}function Bf(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+ut(n.href)+'"]');if(a)return t.instance=a,Te(a),a;var l=R({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Te(a),Re(a,"style",l),Ti(a,n.precedence,e),t.instance=a;case"stylesheet":l=xa(n.href);var i=e.querySelector(fl(l));if(i)return t.state.loading|=4,t.instance=i,Te(i),i;a=Hf(n),(l=pt.get(l))&&Yu(a,l),i=(e.ownerDocument||e).createElement("link"),Te(i);var r=i;return r._p=new Promise(function(u,o){r.onload=u,r.onerror=o}),Re(i,"link",a),t.state.loading|=4,Ti(i,n.precedence,e),t.instance=i;case"script":return i=Sa(n.src),(l=e.querySelector(dl(i)))?(t.instance=l,Te(l),l):(a=n,(l=pt.get(i))&&(a=R({},n),Vu(a,l)),e=e.ownerDocument||e,l=e.createElement("script"),Te(l),Re(l,"link",a),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(f(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Ti(a,n.precedence,e));return t.instance}function Ti(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,i=l,r=0;r<a.length;r++){var u=a[r];if(u.dataset.precedence===t)i=u;else if(i!==l)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Yu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Vu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ci=null;function Gf(e,t,n){if(Ci===null){var a=new Map,l=Ci=new Map;l.set(n,a)}else l=Ci,a=l.get(n),a||(a=new Map,l.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var i=n[l];if(!(i[Ta]||i[Le]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var r=i.getAttribute(t)||"";r=e+r;var u=a.get(r);u?u.push(i):a.set(r,[i])}}return a}function qf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Sp(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function kf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var ml=null;function Ap(){}function Ep(e,t,n){if(ml===null)throw Error(f(475));var a=ml;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=xa(n.href),i=e.querySelector(fl(l));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(a.count++,a=zi.bind(a),e.then(a,a)),t.state.loading|=4,t.instance=i,Te(i);return}i=e.ownerDocument||e,n=Hf(n),(l=pt.get(l))&&Yu(n,l),i=i.createElement("link"),Te(i);var r=i;r._p=new Promise(function(u,o){r.onload=u,r.onerror=o}),Re(i,"link",n),t.instance=i}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(a.count++,t=zi.bind(a),e.addEventListener("load",t),e.addEventListener("error",t))}}function _p(){if(ml===null)throw Error(f(475));var e=ml;return e.stylesheets&&e.count===0&&Xu(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&Xu(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function zi(){if(this.count--,this.count===0){if(this.stylesheets)Xu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ni=null;function Xu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ni=new Map,t.forEach(Tp,e),Ni=null,zi.call(e))}function Tp(e,t){if(!(t.state.loading&4)){var n=Ni.get(e);if(n)var a=n.get(null);else{n=new Map,Ni.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var r=l[i];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),a=r)}a&&n.set(null,a)}l=t.instance,r=l.getAttribute("data-precedence"),i=n.get(r)||a,i===a&&n.set(null,l),n.set(r,l),this.count++,a=zi.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),i?i.parentNode.insertBefore(l,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var pl={$$typeof:Ue,Provider:null,Consumer:null,_currentValue:G,_currentValue2:G,_threadCount:0};function Cp(e,t,n,a,l,i,r,u){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=qi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qi(0),this.hiddenUpdates=qi(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=u,this.incompleteTransitions=new Map}function Yf(e,t,n,a,l,i,r,u,o,p,b,E){return e=new Cp(e,t,n,r,u,o,p,E),t=1,i===!0&&(t|=24),i=et(3,null,null,t),e.current=i,i.stateNode=e,t=Tr(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:a,isDehydrated:n,cache:t},wr(i),e}function Vf(e){return e?(e=$n,e):$n}function Xf(e,t,n,a,l,i){l=Vf(l),a.context===null?a.context=l:a.pendingContext=l,a=It(t),a.payload={element:n},i=i===void 0?null:i,i!==null&&(a.callback=i),n=Wt(e,a,t),n!==null&&(it(n,e,t),Xa(n,e,t))}function Qf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Qu(e,t){Qf(e,t),(e=e.alternate)&&Qf(e,t)}function Zf(e){if(e.tag===13){var t=Fn(e,67108864);t!==null&&it(t,e,67108864),Qu(e,67108864)}}var wi=!0;function zp(e,t,n,a){var l=x.T;x.T=null;var i=w.p;try{w.p=2,Zu(e,t,n,a)}finally{w.p=i,x.T=l}}function Np(e,t,n,a){var l=x.T;x.T=null;var i=w.p;try{w.p=8,Zu(e,t,n,a)}finally{w.p=i,x.T=l}}function Zu(e,t,n,a){if(wi){var l=Ku(a);if(l===null)Uu(e,t,a,Oi,n),Jf(e,a);else if(Op(l,e,t,n,a))a.stopPropagation();else if(Jf(e,a),t&4&&-1<wp.indexOf(e)){for(;l!==null;){var i=Gn(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var r=vn(i.pendingLanes);if(r!==0){var u=i;for(u.pendingLanes|=2,u.entangledLanes|=2;r;){var o=1<<31-$e(r);u.entanglements[1]|=o,r&=~o}Tt(i),(ne&6)===0&&(mi=xt()+500,ul(0))}}break;case 13:u=Fn(i,2),u!==null&&it(u,i,2),hi(),Qu(i,2)}if(i=Ku(a),i===null&&Uu(e,t,a,Oi,n),i===l)break;l=i}l!==null&&a.stopPropagation()}else Uu(e,t,a,null,n)}}function Ku(e){return e=$i(e),Ju(e)}var Oi=null;function Ju(e){if(Oi=null,e=Bn(e),e!==null){var t=j(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=J(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Oi=e,null}function Kf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(pd()){case io:return 2;case ro:return 8;case Al:case hd:return 32;case uo:return 268435456;default:return 32}default:return 32}}var Iu=!1,cn=null,fn=null,dn=null,hl=new Map,gl=new Map,mn=[],wp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Jf(e,t){switch(e){case"focusin":case"focusout":cn=null;break;case"dragenter":case"dragleave":fn=null;break;case"mouseover":case"mouseout":dn=null;break;case"pointerover":case"pointerout":hl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":gl.delete(t.pointerId)}}function yl(e,t,n,a,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:i,targetContainers:[l]},t!==null&&(t=Gn(t),t!==null&&Zf(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Op(e,t,n,a,l){switch(t){case"focusin":return cn=yl(cn,e,t,n,a,l),!0;case"dragenter":return fn=yl(fn,e,t,n,a,l),!0;case"mouseover":return dn=yl(dn,e,t,n,a,l),!0;case"pointerover":var i=l.pointerId;return hl.set(i,yl(hl.get(i)||null,e,t,n,a,l)),!0;case"gotpointercapture":return i=l.pointerId,gl.set(i,yl(gl.get(i)||null,e,t,n,a,l)),!0}return!1}function If(e){var t=Bn(e.target);if(t!==null){var n=j(t);if(n!==null){if(t=n.tag,t===13){if(t=J(n),t!==null){e.blockedOn=t,Ed(e.priority,function(){if(n.tag===13){var a=lt();a=ki(a);var l=Fn(n,a);l!==null&&it(l,n,a),Qu(n,a)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ri(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ku(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Fi=a,n.target.dispatchEvent(a),Fi=null}else return t=Gn(n),t!==null&&Zf(t),e.blockedOn=n,!1;t.shift()}return!0}function Wf(e,t,n){Ri(e)&&n.delete(t)}function Rp(){Iu=!1,cn!==null&&Ri(cn)&&(cn=null),fn!==null&&Ri(fn)&&(fn=null),dn!==null&&Ri(dn)&&(dn=null),hl.forEach(Wf),gl.forEach(Wf)}function Mi(e,t){e.blockedOn===t&&(e.blockedOn=null,Iu||(Iu=!0,v.unstable_scheduleCallback(v.unstable_NormalPriority,Rp)))}var Ui=null;function Ff(e){Ui!==e&&(Ui=e,v.unstable_scheduleCallback(v.unstable_NormalPriority,function(){Ui===e&&(Ui=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],l=e[t+2];if(typeof a!="function"){if(Ju(a||n)===null)continue;break}var i=Gn(n);i!==null&&(e.splice(t,3),t-=3,Jr(i,{pending:!0,data:l,method:n.method,action:a},a,l))}}))}function vl(e){function t(o){return Mi(o,e)}cn!==null&&Mi(cn,e),fn!==null&&Mi(fn,e),dn!==null&&Mi(dn,e),hl.forEach(t),gl.forEach(t);for(var n=0;n<mn.length;n++){var a=mn[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<mn.length&&(n=mn[0],n.blockedOn===null);)If(n),n.blockedOn===null&&mn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var l=n[a],i=n[a+1],r=l[ke]||null;if(typeof i=="function")r||Ff(n);else if(r){var u=null;if(i&&i.hasAttribute("formAction")){if(l=i,r=i[ke]||null)u=r.formAction;else if(Ju(l)!==null)continue}else u=r.action;typeof u=="function"?n[a+1]=u:(n.splice(a,3),a-=3),Ff(n)}}}function Wu(e){this._internalRoot=e}Di.prototype.render=Wu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(f(409));var n=t.current,a=lt();Xf(n,a,e,t,null,null)},Di.prototype.unmount=Wu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Xf(e.current,2,null,e,null,null),hi(),t[Hn]=null}};function Di(e){this._internalRoot=e}Di.prototype.unstable_scheduleHydration=function(e){if(e){var t=mo();e={blockedOn:null,target:e,priority:t};for(var n=0;n<mn.length&&t!==0&&t<mn[n].priority;n++);mn.splice(n,0,e),n===0&&If(e)}};var $f=q.version;if($f!=="19.1.0")throw Error(f(527,$f,"19.1.0"));w.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(f(188)):(e=Object.keys(e).join(","),Error(f(268,e)));return e=C(t),e=e!==null?S(e):null,e=e===null?null:e.stateNode,e};var Mp={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:x,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ji=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ji.isDisabled&&ji.supportsFiber)try{Aa=ji.inject(Mp),Fe=ji}catch{}}return xl.createRoot=function(e,t){if(!z(e))throw Error(f(299));var n=!1,a="",l=mc,i=pc,r=hc,u=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(u=t.unstable_transitionCallbacks)),t=Yf(e,1,!1,null,null,n,a,l,i,r,u,null),e[Hn]=t.current,Mu(e),new Wu(t)},xl.hydrateRoot=function(e,t,n){if(!z(e))throw Error(f(299));var a=!1,l="",i=mc,r=pc,u=hc,o=null,p=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(u=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(o=n.unstable_transitionCallbacks),n.formState!==void 0&&(p=n.formState)),t=Yf(e,1,!0,t,n??null,a,l,i,r,u,o,p),t.context=Vf(null),n=t.current,a=lt(),a=ki(a),l=It(a),l.callback=null,Wt(n,l,a),n=a,t.current.lanes=n,_a(t,n),Tt(t),e[Hn]=t.current,Mu(e),new Di(t)},xl.version="19.1.0",xl}var od;function Vp(){if(od)return Pu.exports;od=1;function v(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v)}catch(q){console.error(q)}}return v(),Pu.exports=Yp(),Pu.exports}var Xp=Vp();const Qp=sd(Xp),Zp=({className:v})=>h.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:`w-6 h-6 ${v}`,"aria-hidden":"true",children:h.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"})}),Kp=({onToggleStopwatch:v})=>h.jsx("nav",{className:"bg-blue-800 shadow-lg sticky top-0 z-50",children:h.jsxs("div",{className:"container mx-auto px-6 py-3 flex justify-between items-center",children:[h.jsx("a",{href:"#",className:"text-2xl font-bold text-amber-400 hover:text-amber-300 transition-colors",children:"C Masterclass"}),h.jsxs("div",{className:"flex items-center space-x-4",children:[h.jsx("a",{href:"#learning-path",className:"text-blue-100 hover:text-amber-400 transition-colors",children:"Learning Path"}),h.jsx("a",{href:"#why-c",className:"text-blue-100 hover:text-amber-400 transition-colors",children:"Why C?"}),h.jsxs("button",{onClick:v,className:"flex items-center text-blue-100 hover:text-amber-400 transition-colors focus:outline-none","aria-label":"Open Study Timer",title:"Study Timer",children:[h.jsx(Zp,{className:"w-6 h-6 mr-1"}),"Study Timer"]})]})]})}),Jp=()=>h.jsx("section",{className:"py-20 md:py-32 text-center bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-xl shadow-2xl mb-16",children:h.jsxs("div",{className:"container mx-auto px-6",children:[h.jsxs("h1",{className:"text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-tight",children:["Comprehensive Roadmap to ",h.jsx("br",{className:"hidden sm:block"})," Master ",h.jsx("span",{className:"text-amber-400",children:"C Programming"})]}),h.jsx("p",{className:"text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto",children:"Unlock the power of C with our structured learning path. Build a solid foundation and tackle advanced concepts with confidence, progressing from novice to expert."}),h.jsx("a",{href:"#learning-path",className:"bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold py-4 px-10 rounded-lg text-lg transition-transform transform hover:scale-105 shadow-lg hover:shadow-amber-500/50",children:"Start Your Journey"})]})});var Ae=(v=>(v.BEGINNER="Beginner",v.INTERMEDIATE="Intermediate",v.ADVANCED="Advanced",v.EXPERT="Expert",v))(Ae||{});const Ip=["auto","break","case","char","const","continue","default","do","double","else","enum","extern","float","for","goto","if","int","long","register","return","short","signed","sizeof","static","struct","switch","typedef","union","unsigned","void","volatile","while","_Bool","_Complex","_Imaginary"],Wp=["#include","#define","#undef","#if","#ifdef","#ifndef","#else","#elif","#endif","#error","#pragma","#line"],Fp=v=>v.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"),ao=v=>{const q=[],D=Fp(v),f=[{type:"comment-block",regex:/(\/\*[\s\S]*?\*\/)/g,className:"text-green-400"},{type:"comment-line",regex:/(\/\/.*)/g,className:"text-green-400"},{type:"preprocessor",regex:new RegExp(`(^\\s*(?:${Wp.join("|").replace(/#/g,"\\#")}))\\b`,"gm"),className:"text-blue-400"},{type:"include-path-angle",regex:/<[^>\n]+>/g,className:"text-amber-300"},{type:"string",regex:/("(?:\\[\s\S]|[^\\"])*")/g,className:"text-amber-300"},{type:"char",regex:/('(?:\\[\s\S]|[^\\'])*')/g,className:"text-amber-300"},{type:"keyword",regex:new RegExp(`\\b(${Ip.join("|")})\\b`,"g"),className:"text-sky-400"},{type:"number",regex:/\b(0x[0-9a-fA-F]+[ULuL]*|\d+\.?\d*(?:[eE][+-]?\d+)?[fFLulUL]*)\b/g,className:"text-yellow-300"},{type:"function",regex:/(\b[a-zA-Z_]\w*\b)(?=\s*\()/g,className:"text-teal-300"}],z=[];f.forEach(C=>{let S;const R=new RegExp(C.regex);for(;(S=R.exec(D))!==null;)z.push({index:S.index,length:S[0].length,type:C.type,className:C.className,text:S[0]})}),z.sort((C,S)=>C.index!==S.index?C.index-S.index:S.length-C.length);const j=[];let J=0;for(const C of z)C.index>=J&&(j.push(C),J=C.index+C.length);let se=0;return j.forEach((C,S)=>{C.index>se&&q.push(D.substring(se,C.index)),q.push(h.jsx("span",{className:C.className,children:C.text},`${C.type}-${C.index}-${S}`)),se=C.index+C.length}),se<D.length&&q.push(D.substring(se)),q.length===0&&D.length>0&&v.trim()!==""&&q.push(D),q},$p=({code:v,language:q="c"})=>{const D=ao(v);return h.jsxs("div",{className:"bg-gray-800 rounded-lg shadow-md overflow-hidden my-2",children:[h.jsxs("div",{className:"bg-gray-700 px-4 py-2 text-xs text-gray-200 font-mono flex justify-between items-center",children:[h.jsx("span",{children:q.toUpperCase()}),h.jsx("button",{onClick:()=>navigator.clipboard.writeText(v),className:"text-xs bg-amber-500 hover:bg-amber-600 text-gray-900 px-2 py-1 rounded transition-colors",title:"Copy code","aria-label":"Copy code to clipboard",children:"Copy"})]}),h.jsx("pre",{className:"p-4 text-sm text-gray-100 overflow-x-auto whitespace-pre-wrap",children:h.jsx("code",{children:D})})]})},Pp=({initialCode:v,originalOutput:q,exampleTitle:D})=>{const[f,z]=Ze.useState(v),[j,J]=Ze.useState(""),[se,C]=Ze.useState([]),S=Ze.useRef(null),R=Ze.useRef(null);Ze.useEffect(()=>{z(v),J(""),C(ao(v))},[v]),Ze.useEffect(()=>{C(ao(f))},[f]);const W=()=>{const pe=f.trim().replace(/\r\n/g,`
`)===v.trim().replace(/\r\n/g,`
`);J(pe&&q?q:pe&&!q?`Simulated run for: ${D||"Your Code"}
--- Code ---
${f}
--- End of Code ---
(No specific output provided for this example, but your code matches the original example.)`:`Simulated run for: ${D||"Your Custom Code"}
--- Your Code ---
${f}
--- End of Your Code ---
(Full C code execution in the browser is not supported. This is a practice area. If your code matched the original example, its output would be shown here if available.)`)},te=()=>{S.current&&R.current&&(R.current.scrollTop=S.current.scrollTop,R.current.scrollLeft=S.current.scrollLeft)},be="p-3 font-mono text-sm whitespace-pre-wrap break-words";return h.jsxs("div",{className:"bg-gray-200 rounded-lg p-4 shadow-inner h-full flex flex-col",children:[h.jsxs("div",{className:"relative w-full flex-grow border border-gray-400 rounded-md bg-gray-800",children:[" ",h.jsx("div",{ref:R,className:`absolute top-0 left-0 w-full h-full text-gray-100 ${be} overflow-auto pointer-events-none select-none rounded-md`,"aria-hidden":"true",children:h.jsx("pre",{className:"!m-0 !p-0 bg-transparent",children:h.jsx("code",{className:"!m-0 !p-0 bg-transparent",children:se})})}),h.jsx("textarea",{ref:S,value:f,onChange:pe=>z(pe.target.value),onScroll:te,className:`absolute top-0 left-0 w-full h-full bg-transparent text-transparent ${be} caret-gray-100 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 resize-none outline-none z-10 rounded-md border border-transparent`,spellCheck:"false","aria-label":`Practice code editor for ${D||"C code example"}`,placeholder:"Write your C code here..."})]}),h.jsx("button",{onClick:W,className:"mt-3 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded text-sm transition-colors w-full sm:w-auto","aria-label":"Run simulated code",children:"Run (Simulated)"}),j&&h.jsxs("div",{className:"mt-3",children:[h.jsx("p",{className:"text-sm font-semibold text-gray-700 mb-1",children:"Simulated Output:"}),h.jsx("pre",{className:"bg-gray-700 text-gray-200 p-3 rounded-md text-sm whitespace-pre-wrap max-h-40 overflow-y-auto border border-gray-500",children:j})]})]})},eh=v=>{switch(v){case Ae.BEGINNER:return"bg-green-500 text-white";case Ae.INTERMEDIATE:return"bg-green-400 text-green-900";case Ae.ADVANCED:return"bg-blue-500 text-white";case Ae.EXPERT:return"bg-amber-500 text-white";default:return"bg-gray-400 text-gray-800"}},th=({module:v})=>{const[q,D]=Ze.useState(!1);return h.jsxs("div",{className:"bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-blue-500/20 focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 focus-within:ring-offset-gray-100",children:[h.jsxs("button",{onClick:()=>D(!q),className:"w-full p-6 text-left flex items-center space-x-4 focus:outline-none","aria-expanded":q,"aria-controls":`module-content-${v.id}`,children:[h.jsxs("div",{className:"flex-grow",children:[h.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between",children:[h.jsx("h3",{className:"text-2xl font-semibold text-blue-700",children:v.title}),h.jsx("span",{className:`mt-1 sm:mt-0 px-3 py-1 text-xs font-semibold rounded-full self-start sm:self-center ${eh(v.level)}`,children:v.level})]}),v.tagline&&h.jsx("p",{className:"text-sm text-blue-500 mt-1",children:v.tagline}),h.jsx("p",{className:"text-gray-700 mt-2 text-sm",children:v.description})]}),h.jsx("span",{className:"ml-2 text-sm text-blue-600",children:q?"Collapse":"Expand"})]}),q&&h.jsxs("div",{id:`module-content-${v.id}`,className:"px-6 pb-6 pt-0 bg-gray-50 border-t border-gray-300",children:[v.expertInsight&&h.jsxs("div",{className:"my-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500",children:[h.jsx("p",{className:"text-sm font-semibold text-blue-700 mb-1",children:"Expert Insight:"}),h.jsx("p",{className:"text-gray-700 italic text-sm",children:v.expertInsight})]}),v.topics.map(f=>h.jsxs("div",{className:"py-4 border-b border-gray-300 last:border-b-0",children:[h.jsx("h4",{className:"text-xl font-medium text-green-700 mb-3 flex items-center",children:f.name}),h.jsx("p",{className:"text-gray-700 mb-4 whitespace-pre-line",children:f.explanation}),f.codeExamples.map((z,j)=>h.jsxs("div",{className:"my-6 p-4 bg-white rounded-lg shadow-lg",children:[" ",z.title&&h.jsx("h5",{className:"text-lg font-semibold text-gray-800 mb-3",children:z.title}),h.jsxs("div",{className:"md:flex md:space-x-6",children:[h.jsxs("div",{className:"md:w-1/2 mb-6 md:mb-0",children:[h.jsx("h6",{className:"text-sm font-semibold text-gray-600 mb-1",children:"Example Code:"}),h.jsx($p,{code:z.code,language:"c"}),z.explanation&&h.jsx("p",{className:"text-sm text-gray-600 mt-2 italic",children:z.explanation}),z.output&&h.jsxs("div",{className:"mt-3",children:[h.jsx("p",{className:"text-sm font-semibold text-gray-700",children:"Expected Output:"}),h.jsx("pre",{className:"bg-gray-800 text-gray-200 p-3 rounded-md text-sm whitespace-pre-wrap max-h-40 overflow-y-auto",children:z.output})]})]}),h.jsxs("div",{className:"md:w-1/2",children:[h.jsx("h6",{className:"text-sm font-semibold text-gray-600 mb-1",children:"Practice Area:"}),h.jsx(Pp,{initialCode:z.code,originalOutput:z.output,exampleTitle:z.title})]})]})]},j)),f.furtherReading&&f.furtherReading.length>0&&h.jsxs("div",{className:"mt-4",children:[h.jsx("h6",{className:"text-sm font-semibold text-gray-700 mb-1",children:"Further Reading:"}),h.jsx("ul",{className:"list-disc list-inside pl-2",children:f.furtherReading.map((z,j)=>h.jsx("li",{className:"text-sm",children:h.jsx("a",{href:z.url,target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 hover:text-blue-800 underline",children:z.title})},j))})]})]},f.id))]})]})},nh=()=>h.jsx("footer",{className:"bg-blue-800 text-blue-200 py-8 text-center border-t border-blue-700",children:h.jsxs("div",{className:"container mx-auto px-6",children:[h.jsxs("p",{children:["© ",new Date().getFullYear()," C Language Masterclass. All rights reserved."]}),h.jsx("p",{className:"text-sm mt-1",children:"Designed to empower your C programming journey."}),h.jsx("p",{className:"text-sm mt-2",children:"Made with ❤️ by Rahul Chirra"})]})}),T=(v,q=!1)=>{const f=/\b(printf|scanf|puts|gets|getchar|putchar|sprintf|sscanf|fopen|fclose|fread|fwrite|fseek|ftell|rewind|fprintf|fscanf|fgets|fputs|feof|ferror|perror|remove|rename|tmpfile|tmpnam|setbuf|setvbuf|fflush|freopen|clearerr)\b/.test(v)||q,z=/^\s*#\s*include\s*<stdio\.h>/m.test(v);return f&&!z?`#include <stdio.h>
${v.trim()===""||/^\s*(#|\/\/|\/\*)/.test(v)?"":`
`}${v}`:v},cd=[{id:"module-1",title:"Getting Started with C",level:Ae.BEGINNER,tagline:"Your first steps into the world of C programming.",description:"Lay the groundwork for your C programming journey. Understand the basics, set up your environment, and write your first C program.",expertInsight:"The journey of a thousand lines of code begins with a single 'Hello, World!'. Master this, and you're on your way.",topics:[{id:"1-1",name:"What is C?",explanation:"C is a powerful, general-purpose programming language developed in the early 1970s by Dennis Ritchie at Bell Labs. It's known for its efficiency, low-level memory access, and influence on many other languages. It's a structured, procedural language, meaning programs are built from functions and blocks of code.",codeExamples:[{title:"Basic C Program Structure",code:T(`// Preprocessor directive
#include <stdio.h>

// Main function - entry point
int main() {
    // Statement
    printf("This is a statement.\\n");
    
    // Return statement
    return 0; 
}`),explanation:"Illustrates the fundamental parts: preprocessor directives, the main function, statements, and a return value indicating success.",output:"This is a statement."},{title:"Comments in C",code:T(`#include <stdio.h>

int main() {
    // This is a single-line comment
    printf("Hello after single-line comment!\\n");

    /* This is a
       multi-line comment.
       It can span several lines. */
    printf("Hello after multi-line comment!\\n");
    return 0;
}`),explanation:"C supports single-line comments (starting with `//`) and multi-line comments (enclosed in `/* ... */`). Comments are ignored by the compiler and are used for explaining code.",output:`Hello after single-line comment!
Hello after multi-line comment!`},{title:"Case Sensitivity",code:T(`#include <stdio.h>

int main() {
    int myVariable = 10;
    // int myvariable = 20; // This would be a different variable
    // PRINTF("Hello\\n"); // This would cause a compile error, printf is lowercase

    printf("myVariable = %d\\n", myVariable);
    return 0;
}`),explanation:"C is case-sensitive. `myVariable` and `myvariable` would be treated as two different variables. Keywords and standard library function names (like `printf`) must be in their correct case (usually lowercase).",output:"myVariable = 10"},{title:"C is Free-Form (but indentation is good practice)",code:T(`#include <stdio.h>
int main() { int x=5; printf("x is %d\\n", x); return 0; }`),explanation:"C allows statements to be written without strict formatting rules regarding whitespace (spaces, tabs, newlines) between tokens. However, proper indentation and spacing make code much more readable and maintainable.",output:"x is 5"},{title:"Simple Preprocessor Directive: #define",code:T(`#include <stdio.h>
#define PI 3.14159

int main() {
    printf("The value of PI is approximately %f\\n", PI);
    // PI = 3.14; // Error: PI is a constant defined by the preprocessor
    return 0;
}`),explanation:"`#define` is a preprocessor directive used to create macros. Here, it defines `PI` as a constant. The preprocessor replaces all occurrences of `PI` with `3.14159` before compilation.",output:"The value of PI is approximately 3.141590"},{title:"Concept of Compilation",code:T(`// Source Code (my_program.c)
#include <stdio.h>
int main() {
    printf("C is compiled!\\n");
    return 0;
}

// Compilation Step (conceptual, command line)
// gcc my_program.c -o my_program_executable

// Execution Step (conceptual, command line)
// ./my_program_executable`),explanation:"C code is first written as human-readable source code. A compiler then translates this source code into machine code (an executable file) that the computer's processor can understand and run.",output:"(If compiled and run) C is compiled!"}]},{id:"1-2",name:"Setting Up Your Environment",explanation:"To compile and run C programs, you need a C compiler (like GCC or Clang) and a text editor or an Integrated Development Environment (IDE) like VS Code, Code::Blocks, or CLion. For GCC on Windows, MinGW or WSL are popular choices. On macOS, Xcode Command Line Tools include Clang. On Linux, GCC is often pre-installed or easily installable via package managers.",codeExamples:[{title:"Checking GCC version (Terminal/Command Prompt)",code:"gcc --version",explanation:"This command checks if GCC (GNU Compiler Collection) is installed and displays its version."},{title:"Checking Clang version (Terminal/Command Prompt)",code:"clang --version",explanation:"Similar to GCC, this checks for Clang compiler and its version. Often used on macOS."},{title:"Basic Compilation Command (GCC)",code:"gcc sourcefile.c",explanation:"Compiles `sourcefile.c`. If successful, it creates an executable file named `a.out` (on Linux/macOS) or `a.exe` (on Windows with MinGW)."},{title:"Compilation with Output File Naming (GCC)",code:"gcc sourcefile.c -o outputfile",explanation:"Compiles `sourcefile.c` and names the executable `outputfile` (or `outputfile.exe` on Windows)."},{title:"Compiling with All Warnings Enabled (GCC/Clang)",code:"gcc -Wall sourcefile.c -o outputfile",explanation:"`-Wall` enables most common compiler warnings. It's highly recommended to use this to catch potential issues in your code.",output:"(Compiler messages, if any warnings or errors)"},{title:"Conceptual Steps for using an IDE (e.g., VS Code)",code:`1. Install VS Code.
2. Install a C/C++ extension (e.g., Microsoft's C/C++ extension).
3. Install a C compiler (GCC via MinGW on Windows, or from system package manager on Linux/macOS).
4. Configure the IDE to use your compiler (often involves setting up a 'tasks.json' for building and 'launch.json' for debugging).
5. Create a .c file, write code, build, and run/debug within the IDE.`,explanation:"IDEs provide a more integrated experience with features like code editing, building, debugging, and version control integration."}]},{id:"1-3",name:"Your First C Program: Hello, World!",explanation:"The classic 'Hello, World!' program is a simple way to verify your setup and understand basic C program structure. It includes the standard input/output library and uses the `printf` function to display text.",codeExamples:[{title:"hello_world.c",code:T(`#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`),explanation:"`#include <stdio.h>` includes the standard input/output library. `main()` is the entry point of every C program. `printf()` is used for output. `\\n` is a newline character. `return 0;` indicates successful execution.",output:"Hello, World!"},{title:"Compiling and Running (using GCC)",code:`# Compile the code
gcc hello_world.c -o hello_world

# Run the executable (Linux/macOS)
./hello_world

# Run the executable (Windows, if compiled with MinGW)
hello_world.exe`,explanation:"The first command compiles `hello_world.c` and creates an executable file named `hello_world`. The second command runs this executable."},{title:"Printing Multiple Lines",code:T(`#include <stdio.h>

int main() {
    printf("Hello, C Programmer!\\n");
    printf("Welcome to the world of C.\\n");
    printf("Let's start coding!\\n");
    return 0;
}`),explanation:"You can use multiple `printf` statements or include multiple `\\n` newline characters in a single `printf` to print on several lines.",output:`Hello, C Programmer!
Welcome to the world of C.
Let's start coding!`},{title:"Using puts() for Simple String Output",code:T(`#include <stdio.h>

int main() {
    puts("Hello, World using puts()!");
    puts("This also adds a newline automatically.");
    return 0;
}`),explanation:"`puts()` is another function from `<stdio.h>` used to print a string to the console. It automatically appends a newline character at the end of the string.",output:`Hello, World using puts()!
This also adds a newline automatically.`},{title:"Explaining 'int main(void)'",code:T(`#include <stdio.h>

int main(void) { // 'void' explicitly means no arguments
    printf("Main function with (void).\\n");
    return 0; // Indicates successful execution
}`),explanation:"`int main(void)` signifies that the `main` function returns an integer and takes no arguments. `return 0;` signals to the operating system that the program executed successfully. Other return values often indicate an error.",output:"Main function with (void)."},{title:"A slightly more interactive 'Hello'",code:T(`#include <stdio.h>

int main() {
    char name[50]; // Declare a character array to store the name
    printf("Enter your name: ");
    scanf("%49s", name); // Read input from the user (safer scanf)
    printf("Hello, %s!\\n", name);
    return 0;
}`),explanation:"This program prompts the user for their name and then greets them. `scanf` is used for input. Using `%49s` helps prevent buffer overflows with `name[50]`.",output:`(User enters 'Ada')
Enter your name: Ada
Hello, Ada!`}]}]},{id:"module-2",title:"Variables, Data Types, and Operators",level:Ae.BEGINNER,tagline:"Storing and manipulating data in C.",description:"Learn how to store and manipulate data in C using variables, understand different data types, and perform operations using various operators.",expertInsight:"Understanding data types is crucial for memory efficiency and preventing bugs. C gives you control, but with control comes responsibility.",topics:[{id:"2-1",name:"Variables and Constants",explanation:"Variables are named memory locations used to store data that can change during program execution. Constants are fixed values that do not change. C requires you to declare a variable's type before using it.",codeExamples:[{title:"Declaring and Initializing Variables",code:T(`#include <stdio.h>

int main() {
    int age = 30;              // Integer variable
    float price = 19.99f;      // Floating-point variable (note the 'f' suffix)
    char grade = 'A';          // Character variable
    
    printf("Age: %d\\n", age);
    printf("Price: %.2f\\n", price); // %.2f prints float with 2 decimal places
    printf("Grade: %c\\n", grade);

    age = 31; // Value of 'age' can be changed
    printf("New Age: %d\\n", age);

    return 0;
}`),output:`Age: 30
Price: 19.99
Grade: A
New Age: 31`},{title:"Using 'const' Keyword for Constants",code:T(`#include <stdio.h>

int main() {
    const double PI = 3.1415926535;
    const int MAX_USERS = 100;

    printf("PI: %lf\\n", PI);
    printf("Max Users: %d\\n", MAX_USERS);

    // PI = 3.14; // This would cause a compile-time error
    // MAX_USERS = 200; // Also a compile-time error

    return 0;
}`),explanation:"The `const` keyword declares a variable whose value cannot be changed after initialization. Attempting to modify a `const` variable results in a compilation error.",output:`PI: 3.141593
Max Users: 100`},{title:"Using #define for Symbolic Constants (Preprocessor)",code:T(`#include <stdio.h>

#define SECONDS_PER_MINUTE 60
#define GREETING "Welcome"

int main() {
    int minutes = 5;
    int totalSeconds = minutes * SECONDS_PER_MINUTE;

    printf("%s! %d minutes is %d seconds.\\n", GREETING, minutes, totalSeconds);
    
    // GREETING = "Hello"; // Error: GREETING is a preprocessor macro, not a variable
    return 0;
}`),explanation:"`#define` is a preprocessor directive that replaces text. It's an older way to define constants. Unlike `const` variables, `#define` macros don't have a data type in the C sense and are simply text substitutions.",output:"Welcome! 5 minutes is 300 seconds."},{title:"Multiple Declarations",code:T(`#include <stdio.h>

int main() {
    int x, y, z; // Declare three integer variables
    x = 10;
    y = 20;
    z = x + y;

    double price = 15.75, discount = 0.1; // Declare and initialize

    printf("x=%d, y=%d, z=%d\\n", x, y, z);
    printf("Price: %.2f, Discount: %.2f\\n", price, discount);
    return 0;
}`),explanation:"You can declare multiple variables of the same type in a single statement, separated by commas. You can also initialize them during declaration.",output:`x=10, y=20, z=30
Price: 15.75, Discount: 0.10`},{title:"Variable Scope (Simple Block Scope)",code:T(`#include <stdio.h>

int main() {
    int outerVar = 100;

    if (outerVar > 50) {
        int innerVar = 20; // innerVar is only visible inside this if-block
        printf("Inside block: outerVar = %d, innerVar = %d\\n", outerVar, innerVar);
    }

    // printf("innerVar = %d\\n", innerVar); // This would cause a compile error: innerVar not declared in this scope
    printf("Outside block: outerVar = %d\\n", outerVar);
    return 0;
}`),explanation:"A variable's scope defines where it can be accessed. Variables declared inside a block (e.g., within `{}`) are local to that block.",output:`Inside block: outerVar = 100, innerVar = 20
Outside block: outerVar = 100`},{title:"Uninitialized Variables (Caution!)",code:T(`#include <stdio.h>

int main() {
    int uninitialized_var;
    // The value of uninitialized_var is indeterminate (garbage value)
    // Accessing it before assignment leads to undefined behavior.
    
    // printf("Uninitialized: %d\\n", uninitialized_var); // DANGEROUS!

    uninitialized_var = 50; // Now it's initialized
    printf("Initialized: %d\\n", uninitialized_var);
    return 0;
}`),explanation:"If a variable is declared but not assigned a value, its content is unpredictable ('garbage value'). Using an uninitialized variable can lead to bugs that are hard to trace. Always initialize variables before use.",output:"Initialized: 50"}]},{id:"2-2",name:"Basic Data Types",explanation:"C offers several fundamental data types: `int` (integers), `float` (single-precision floating-point), `double` (double-precision floating-point), `char` (single characters), and `void` (represents the absence of type). Modifiers like `short`, `long`, `signed`, and `unsigned` can alter these basic types.",codeExamples:[{title:"Size of Data Types (using sizeof)",code:T(`#include <stdio.h>

int main() {
    printf("Size of char: %zu byte\\n", sizeof(char));
    printf("Size of short: %zu bytes\\n", sizeof(short));
    printf("Size of int: %zu bytes\\n", sizeof(int));
    printf("Size of long: %zu bytes\\n", sizeof(long));
    printf("Size of long long: %zu bytes\\n", sizeof(long long));
    printf("Size of float: %zu bytes\\n", sizeof(float));
    printf("Size of double: %zu bytes\\n", sizeof(double));
    printf("Size of long double: %zu bytes\\n", sizeof(long double));
    // %zu is the format specifier for sizeof operator's return type (size_t)
    return 0;
}`),explanation:"`sizeof` operator returns the size of a data type or variable in bytes. Sizes can vary depending on the system architecture and compiler, but `sizeof(char)` is always 1.",output:`(Output varies by system, e.g.)
Size of char: 1 byte
Size of short: 2 bytes
Size of int: 4 bytes
Size of long: 8 bytes
Size of long long: 8 bytes
Size of float: 4 bytes
Size of double: 8 bytes
Size of long double: 16 bytes`},{title:"Integer Types (short, int, long, long long)",code:T(`#include <stdio.h>
#include <limits.h> // For SHRT_MIN, INT_MAX etc.

int main() {
    short s_num = 32767;            // Max value for a 16-bit short
    int i_num = 2147483647;       // Max value for a 32-bit int
    long l_num = 9223372036854775807L; // Requires L suffix for long constants
    long long ll_num = 9223372036854775807LL; // Requires LL suffix

    printf("Short: %hd (Min: %hd, Max: %hd)\\n", s_num, SHRT_MIN, SHRT_MAX);
    printf("Int: %d (Min: %d, Max: %d)\\n", i_num, INT_MIN, INT_MAX);
    // Use %ld for long, %lld for long long
    printf("Long: %ld (Min: %ld, Max: %ld)\\n", l_num, LONG_MIN, LONG_MAX);
    printf("Long Long: %lld (Min: %lld, Max: %lld)\\n", ll_num, LLONG_MIN, LLONG_MAX);
    return 0;
}`),explanation:"Integer types store whole numbers. Modifiers `short`, `long`, `long long` affect the range of values they can hold. The `<limits.h>` header provides constants for these ranges.",output:`(Max/Min values depend on system architecture, illustrative output for typical sizes)
Short: 32767 (Min: -32768, Max: 32767)
Int: 2147483647 (Min: -2147483648, Max: 2147483647)
Long: 9223372036854775807 (Min: -9223372036854775808, Max: 9223372036854775807)
Long Long: 9223372036854775807 (Min: -9223372036854775808, Max: 9223372036854775807)`},{title:"Unsigned Integer Types",code:T(`#include <stdio.h>
#include <limits.h> // For UINT_MAX etc.

int main() {
    unsigned int ui_num = 4294967295U; // U suffix for unsigned
    unsigned short us_num = 65535U;
    unsigned long ul_num = 18446744073709551615UL; // UL suffix

    printf("Unsigned Int: %u (Max: %u)\\n", ui_num, UINT_MAX);
    printf("Unsigned Short: %hu (Max: %hu)\\n", us_num, USHRT_MAX);
    printf("Unsigned Long: %lu (Max: %lu)\\n", ul_num, ULONG_MAX);
    return 0;
}`),explanation:"Unsigned types can only store non-negative values, effectively doubling the maximum positive value compared to their signed counterparts.",output:`(Max values depend on system, illustrative)
Unsigned Int: 4294967295 (Max: 4294967295)
Unsigned Short: 65535 (Max: 65535)
Unsigned Long: 18446744073709551615 (Max: 18446744073709551615)`},{title:"Character Type (char) and ASCII values",code:T(`#include <stdio.h>

int main() {
    char c1 = 'A';
    char c2 = 66; // ASCII value for 'B'

    printf("Character c1: %c, ASCII value: %d\\n", c1, c1);
    printf("Character c2: %c, ASCII value: %d\\n", c2, c2);

    char c3 = c1 + 3; // 'A' + 3 = 'D'
    printf("Character c3 ('A' + 3): %c, ASCII value: %d\\n", c3, c3);
    return 0;
}`),explanation:"`char` stores a single character. Internally, characters are often represented by their ASCII (or UTF-8) numerical values, allowing for arithmetic operations.",output:`Character c1: A, ASCII value: 65
Character c2: B, ASCII value: 66
Character c3 ('A' + 3): D, ASCII value: 68`},{title:"Floating-Point Types (float, double, long double)",code:T(`#include <stdio.h>
#include <float.h> // For FLT_DIG, DBL_DIG etc.

int main() {
    float f_num = 3.1415926535f;    // 'f' suffix is important for float literals
    double d_num = 3.141592653589793;
    long double ld_num = 3.14159265358979323846L; // 'L' suffix

    printf("Float: %.10f (Digits of precision: ~%d)\\n", f_num, FLT_DIG);
    printf("Double: %.15lf (Digits of precision: ~%d)\\n", d_num, DBL_DIG);
    printf("Long Double: %.20Lf (Digits of precision: ~%d)\\n", ld_num, LDBL_DIG);
    return 0;
}`),explanation:"Floating-point types store numbers with decimal points. `double` offers more precision than `float`. `long double` can offer even more. Precision details are in `<float.h>`.",output:`(Output shows typical precision)
Float: 3.1415927410 (Digits of precision: ~6)
Double: 3.141592653589793 (Digits of precision: ~15)
Long Double: 3.14159265358979323846 (Digits of precision: ~18)`},{title:"Type Casting (Implicit and Explicit)",code:T(`#include <stdio.h>

int main() {
    int i = 10;
    double d = 5.5;
    char c = 'X';

    // Implicit conversion: int to double
    double result1 = i / 3.0; // i is promoted to double for division
    printf("Implicit (int to double for division): 10 / 3.0 = %f\\n", result1);

    // Explicit conversion: double to int (truncation)
    int result2 = (int)d;
    printf("Explicit (double to int): (int)5.5 = %d\\n", result2);

    // Explicit conversion: int to char (lower bits kept)
    char result3 = (char) (i + 60); // 10 + 60 = 70, ASCII for 'F'
    printf("Explicit (int to char): (char)(10+60) = %c\\n", result3);
    
    int num1 = 5, num2 = 2;
    double average = (double)num1 / num2; // Cast one operand to double for float division
    printf("Average of %d and %d: %f\\n", num1, num2, average);

    return 0;
}`),explanation:"Type casting converts a value from one data type to another. Implicit conversion happens automatically by the compiler. Explicit conversion is done by the programmer using the `(type_name)` operator.",output:`Implicit (int to double for division): 10 / 3.0 = 3.333333
Explicit (double to int): (int)5.5 = 5
Explicit (int to char): (char)(10+60) = F
Average of 5 and 2: 2.500000`}]},{id:"2-3",name:"Operators",explanation:"Operators are symbols that perform operations on variables and values. C includes arithmetic (`+`, `-`, `*`, `/`, `%`), relational (`==`, `!=`, `>`, `<`, `>=`, `<=`), logical (`&&`, `||`, `!`), bitwise (`&`, `|`, `^`, `~`, `<<`, `>>`), assignment (`=`, `+=`, `-=`, etc.), and miscellaneous operators (like `sizeof`, ternary `?:`).",codeExamples:[{title:"Arithmetic and Relational Operators",code:T(`#include <stdio.h>

int main() {
    int a = 10, b = 4;
    printf("a = %d, b = %d\\n", a, b);
    printf("Sum (a + b): %d\\n", a + b);
    printf("Difference (a - b): %d\\n", a - b);
    printf("Product (a * b): %d\\n", a * b);
    printf("Quotient (a / b): %d (Integer division)\\n", a / b);
    printf("Remainder (a %% b): %d\\n", a % b); // Note %% to print %

    printf("\\nRelational Operators:\\n");
    printf("Is a > b? %d (1=true, 0=false)\\n", a > b);
    printf("Is a < b? %d\\n", a < b);
    printf("Is a == b? %d\\n", a == b);
    printf("Is a != b? %d\\n", a != b);
    printf("Is a >= 10? %d\\n", a >= 10);
    printf("Is b <= 3? %d\\n", b <= 3);

    return 0;
}`),output:`a = 10, b = 4
Sum (a + b): 14
Difference (a - b): 6
Product (a * b): 40
Quotient (a / b): 2 (Integer division)
Remainder (a % b): 2

Relational Operators:
Is a > b? 1 (1=true, 0=false)
Is a < b? 0
Is a == b? 0
Is a != b? 1
Is a >= 10? 1
Is b <= 3? 0`},{title:"Logical Operators (&&, ||, !)",code:T(`#include <stdio.h>

int main() {
    int age = 25;
    int hasLicense = 1; // 1 for true, 0 for false

    // Logical AND (&&)
    if (age >= 18 && hasLicense == 1) {
        printf("Can drive legally.\\n");
    } else {
        printf("Cannot drive legally.\\n");
    }

    int isWeekend = 0;
    int isHoliday = 1;
    // Logical OR (||)
    if (isWeekend == 1 || isHoliday == 1) {
        printf("It's a day off!\\n");
    } else {
        printf("It's a working day.\\n");
    }

    // Logical NOT (!)
    int isRaining = 0;
    if (!isRaining) { // if isRaining is false
        printf("It's not raining, good weather!\\n");
    }
    return 0;
}`),output:`Can drive legally.
It's a day off!
It's not raining, good weather!`},{title:"Increment/Decrement Operators (++, --)",code:T(`#include <stdio.h>

int main() {
    int x = 5;
    int y;

    // Postfix increment: x is used, then incremented
    y = x++; 
    printf("Postfix: x = %d, y = %d\\n", x, y); // x will be 6, y will be 5

    // Reset x
    x = 5;
    // Prefix increment: x is incremented, then used
    y = ++x;
    printf("Prefix: x = %d, y = %d\\n", x, y); // x will be 6, y will be 6

    int a = 10;
    // Postfix decrement
    printf("Initial a: %d\\n", a);
    printf("a--: %d\\n", a--); // Uses 10, then a becomes 9
    printf("After a--: %d\\n", a); // a is 9

    // Prefix decrement
    printf("--a: %d\\n", --a); // a becomes 8, then uses 8
    printf("After --a: %d\\n", a); // a is 8
    return 0;
}`),output:`Postfix: x = 6, y = 5
Prefix: x = 6, y = 6
Initial a: 10
a--: 10
After a--: 9
--a: 8
After --a: 8`},{title:"Assignment Operators (=, +=, -=, *=, /=, %=)",code:T(`#include <stdio.h>

int main() {
    int num = 10;
    printf("Initial num: %d\\n", num);

    num += 5; // Equivalent to: num = num + 5;
    printf("After += 5: %d\\n", num); // num is 15

    num -= 3; // Equivalent to: num = num - 3;
    printf("After -= 3: %d\\n", num); // num is 12

    num *= 2; // Equivalent to: num = num * 2;
    printf("After *= 2: %d\\n", num); // num is 24

    num /= 4; // Equivalent to: num = num / 4;
    printf("After /= 4: %d\\n", num); // num is 6

    num %= 5; // Equivalent to: num = num % 5;
    printf("After %%= 5: %d\\n", num); // num is 1
    return 0;
}`),output:`Initial num: 10
After += 5: 15
After -= 3: 12
After *= 2: 24
After /= 4: 6
After %= 5: 1`},{title:"Bitwise Operators (&, |, ^, ~, <<, >>)",code:T(`#include <stdio.h>

// Helper function to print binary (not standard C, for illustration)
void print_binary(unsigned char val) {
    for (int i = 7; i >= 0; i--) {
        putchar((val & (1 << i)) ? '1' : '0');
    }
}

int main() {
    unsigned char a = 5;  // Binary: 00000101
    unsigned char b = 12; // Binary: 00001100

    printf("a = %u (", a); print_binary(a); printf("), b = %u (", b); print_binary(b); printf(")\\n");
    
    unsigned char res_and = a & b;
    printf("a & b = %u (Binary: ", res_and); print_binary(res_and); printf(")\\n"); // Result: 00000100 (4)
    
    unsigned char res_or = a | b;
    printf("a | b = %u (Binary: ", res_or); print_binary(res_or); printf(")\\n"); // Result: 00001101 (13)
    
    unsigned char res_xor = a ^ b;
    printf("a ^ b = %u (Binary: ", res_xor); print_binary(res_xor); printf(")\\n"); // Result: 00001001 (9)
    
    unsigned char res_not_a = ~a;
    printf("~a = %u (Binary: ", res_not_a); print_binary(res_not_a); printf(")\\n"); // For 8-bit char: 11111010 (250)
    
    unsigned char res_left_shift = a << 2;
    printf("a << 2 = %u (Binary: ", res_left_shift); print_binary(res_left_shift); printf(")\\n"); // 00010100 (20)
    
    unsigned char res_right_shift = b >> 1;
    printf("b >> 1 = %u (Binary: ", res_right_shift); print_binary(res_right_shift); printf(")\\n"); // 00000110 (6)
    
    return 0;
}`),explanation:"Bitwise operators perform operations on individual bits of data. The binary representations are illustrative for an 8-bit unsigned char. A helper function is used for binary printing as standard `printf` doesn't support `%b` portably.",output:`a = 5 (00000101), b = 12 (00001100)
a & b = 4 (Binary: 00000100)
a | b = 13 (Binary: 00001101)
a ^ b = 9 (Binary: 00001001)
~a = 250 (Binary: 11111010)
a << 2 = 20 (Binary: 00010100)
b >> 1 = 6 (Binary: 00000110)`},{title:"Ternary Operator (?:)",code:T(`#include <stdio.h>

int main() {
    int x = 10, y = 20;
    int max_val;

    // condition ? value_if_true : value_if_false;
    max_val = (x > y) ? x : y;
    printf("The maximum of %d and %d is %d\\n", x, y, max_val);

    int score = 75;
    char grade_status;
    grade_status = (score >= 60) ? 'P' : 'F'; // P for Pass, F for Fail
    printf("Score: %d, Status: %c\\n", score, grade_status);
    return 0;
}`),explanation:"The ternary operator is a shorthand for an if-else statement. It takes three operands: a condition, a value if the condition is true, and a value if the condition is false.",output:`The maximum of 10 and 20 is 20
Score: 75, Status: P`}]}]},{id:"module-3",title:"Control Flow: Making Decisions and Looping",level:Ae.BEGINNER,tagline:"Directing the execution path of your code.",description:"Control the execution path of your programs. Learn to make decisions with if-else statements and switch cases, and repeat tasks using for, while, and do-while loops.",expertInsight:"Mastering control flow is like learning to navigate. Without it, your program just goes in a straight line; with it, it can explore complex logic.",topics:[{id:"3-1",name:"Conditional Statements: if, else if, else",explanation:"`if` statements execute a block of code if a condition is true. `else if` provides alternative conditions, and `else` executes if no preceding conditions are true.",codeExamples:[{title:"Grading System Example",code:T(`#include <stdio.h>

int main() {
    int score = 85;
    printf("Score: %d\\n", score);

    if (score >= 90) {
        printf("Grade: A\\n");
    } else if (score >= 80) {
        printf("Grade: B\\n");
    } else if (score >= 70) {
        printf("Grade: C\\n");
    } else if (score >= 60) {
        printf("Grade: D\\n");
    } else {
        printf("Grade: F\\n");
    }
    return 0;
}`),output:`Score: 85
Grade: B`},{title:"Simple 'if' Statement (Positive Number Check)",code:T(`#include <stdio.h>

int main() {
    int number = 10;
    if (number > 0) {
        printf("%d is a positive number.\\n", number);
    }
    number = -5;
    if (number > 0) { // This condition will be false
        printf("%d is a positive number.\\n", number);
    } else {
        printf("%d is not positive (or check failed).\\n", number);
    }
    return 0;
}`),output:`10 is a positive number.
-5 is not positive (or check failed).`},{title:"'if-else' Statement (Even or Odd Check)",code:T(`#include <stdio.h>

int main() {
    int num = 7;
    if (num % 2 == 0) {
        printf("%d is even.\\n", num);
    } else {
        printf("%d is odd.\\n", num);
    }
    return 0;
}`),output:"7 is odd."},{title:"Nested 'if' Statements",code:T(`#include <stdio.h>

int main() {
    int num = 15;
    if (num > 0) {
        printf("%d is positive.\\n", num);
        if (num % 2 == 0) {
            printf("%d is also even.\\n", num);
        } else {
            printf("%d is also odd.\\n", num);
        }
    } else if (num < 0) {
        printf("%d is negative.\\n", num);
    } else {
        printf("The number is zero.\\n");
    }
    return 0;
}`),output:`15 is positive.
15 is also odd.`},{title:"Using Boolean Expressions Directly in 'if'",code:T(`#include <stdio.h>
#include <stdbool.h> // For bool type (C99 and later)

int main() {
    bool isLoggedUser = true;
    bool isAdmin = false;

    if (isLoggedUser) {
        printf("User is logged in.\\n");
        if (isAdmin) {
            printf("User is an admin.\\n");
        } else {
            printf("User is not an admin.\\n");
        }
    } else {
        printf("User is not logged in.\\n");
    }
    return 0;
}`),explanation:"In C99 and later, `<stdbool.h>` provides `bool`, `true`, and `false`. Before C99, integers were used (0 for false, non-zero for true).",output:`User is logged in.
User is not an admin.`},{title:"Checking a Range",code:T(`#include <stdio.h>

int main() {
    int age = 25;
    if (age >= 18 && age <= 65) {
        printf("Age %d is within the working age range (18-65).\\n", age);
    } else {
        printf("Age %d is outside the working age range (18-65).\\n", age);
    }
    return 0;
}`),output:"Age 25 is within the working age range (18-65)."}]},{id:"3-2",name:"Switch Statement",explanation:"The `switch` statement provides an efficient way to select one of many code blocks to be executed based on the value of an expression (must be an integer or character type). Each `case` label represents a possible value. The `break` statement is crucial to prevent 'fall-through' to subsequent cases.",codeExamples:[{title:"Day of the Week",code:T(`#include <stdio.h>

int main() {
    int day = 3; // 1 for Monday, ..., 7 for Sunday
    printf("Day number: %d\\n", day);

    switch (day) {
        case 1: printf("Monday\\n"); break;
        case 2: printf("Tuesday\\n"); break;
        case 3: printf("Wednesday\\n"); break;
        case 4: printf("Thursday\\n"); break;
        case 5: printf("Friday\\n"); break;
        case 6: printf("Saturday\\n"); break;
        case 7: printf("Sunday\\n"); break;
        default: printf("Invalid day\\n");
    }
    return 0;
}`),output:`Day number: 3
Wednesday`},{title:"Vowel or Consonant Checker (for lowercase)",code:T(`#include <stdio.h>

int main() {
    char ch = 'e';
    printf("Character: %c\\n", ch);

    switch (ch) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            printf("It's a vowel.\\n");
            break;
        default:
            if ((ch >= 'a' && ch <= 'z')) {
                printf("It's a consonant.\\n");
            } else {
                printf("Not a lowercase alphabet letter.\\n");
            }
    }
    return 0;
}`),explanation:"Demonstrates 'fall-through' where multiple cases execute the same block of code. Also shows a default case with an if-condition for more specific handling.",output:`Character: e
It's a vowel.`},{title:"Simple Calculator (using char for operation)",code:T(`#include <stdio.h>

int main() {
    char operation = '*';
    double num1 = 10.5, num2 = 2.0;
    double result;

    printf("%.1f %c %.1f = ", num1, operation, num2);

    switch (operation) {
        case '+': result = num1 + num2; printf("%.1f\\n", result); break;
        case '-': result = num1 - num2; printf("%.1f\\n", result); break;
        case '*': result = num1 * num2; printf("%.1f\\n", result); break;
        case '/': 
            if (num2 != 0) {
                result = num1 / num2; printf("%.2f\\n", result);
            } else {
                printf("Error! Division by zero.\\n");
            }
            break;
        default: printf("Invalid operation.\\n");
    }
    return 0;
}`),output:"10.5 * 2.0 = 21.0"},{title:"Importance of 'break' (Fall-through example)",code:T(`#include <stdio.h>

int main() {
    int choice = 1;
    printf("Choice: %d\\n", choice);
    switch (choice) {
        case 1:
            printf("Case 1 executed. ");
            // No break here!
        case 2:
            printf("Case 2 executed. ");
            // No break here!
        case 3:
            printf("Case 3 executed. ");
            break; // Break for case 3
        default:
            printf("Default case. ");
    }
    printf("\\n");
    return 0;
}`),explanation:"Without `break`, execution 'falls through' to the next case(s) until a `break` is encountered or the `switch` block ends. This can be intentional but is often a source of bugs.",output:`Choice: 1
Case 1 executed. Case 2 executed. Case 3 executed. `},{title:"Using 'default' Case",code:T(`#include <stdio.h>

int main() {
    int option = 5; // An option not covered by specific cases
    printf("Option: %d\\n", option);
    switch (option) {
        case 1: printf("Option One selected.\\n"); break;
        case 2: printf("Option Two selected.\\n"); break;
        default: printf("Invalid option. Please choose 1 or 2.\\n");
    }
    return 0;
}`),explanation:"The `default` case is executed if the switch expression does not match any of the `case` values. It's good practice to include a `default` case to handle unexpected values.",output:`Option: 5
Invalid option. Please choose 1 or 2.`},{title:"Switch with Integer Enum (C99+ for enum in switch)",code:T(`#include <stdio.h>

typedef enum { RED, GREEN, BLUE } Color;

int main() {
    Color selectedColor = GREEN;
    
    switch (selectedColor) {
        case RED:   printf("Selected color is Red.\\n"); break;
        case GREEN: printf("Selected color is Green.\\n"); break;
        case BLUE:  printf("Selected color is Blue.\\n"); break;
        // A default case might be good if Color could have other values
        // default: printf("Unknown color.\\n");
    }
    return 0;
}`),explanation:"Enumerations can be used in `switch` statements. Each `case` corresponds to an enumerator value.",output:"Selected color is Green."}]},{id:"3-3",name:"Loops: for, while, do-while",explanation:"Loops are used to execute a block of code repeatedly. `for` loops are ideal when the number of iterations is known. `while` loops execute as long as a condition is true (checked before each iteration). `do-while` loops also execute as long as a condition is true, but the condition is checked *after* each iteration (guaranteeing at least one execution).",codeExamples:[{title:"Printing Numbers 1 to 5 (for, while, do-while)",code:T(`#include <stdio.h>

int main() {
    printf("Using for loop:\\n");
    for (int i = 1; i <= 5; i++) {
        printf("%d ", i);
    }
    printf("\\n");

    printf("Using while loop:\\n");
    int j = 1;
    while (j <= 5) {
        printf("%d ", j);
        j++;
    }
    printf("\\n");

    printf("Using do-while loop:\\n");
    int k = 1;
    do {
        printf("%d ", k);
        k++;
    } while (k <= 5);
    printf("\\n");
    return 0;
}`),output:`Using for loop:
1 2 3 4 5 
Using while loop:
1 2 3 4 5 
Using do-while loop:
1 2 3 4 5 `},{title:"Sum of First N Natural Numbers (using for loop)",code:T(`#include <stdio.h>

int main() {
    int n = 10;
    int sum = 0;
    for (int i = 1; i <= n; i++) {
        sum += i;
    }
    printf("Sum of first %d natural numbers is %d\\n", n, sum);
    return 0;
}`),output:"Sum of first 10 natural numbers is 55"},{title:"Reading Input Until a Sentinel Value (using while loop)",code:T(`#include <stdio.h>

int main() {
    int number;
    int sum = 0;
    printf("Enter numbers to sum, enter 0 to stop:\\n");
    
    // It's generally safer to check the return value of scanf
    while (scanf("%d", &number) == 1 && number != 0) {
        sum += number;
        printf("Current sum: %d. Enter next number (0 to stop):\\n", sum);
    }
    // Clear trailing newline if scanf left one before other inputs
    // while(getchar() != '\\n' && getchar() != EOF); 
    printf("Final sum: %d\\n", sum);
    return 0;
}`),explanation:"This loop continues to take input and add to sum until the user enters 0. Checking `scanf`'s return value ensures input was successful.",output:`(User enters 5, 10, 3, 0)
Enter numbers to sum, enter 0 to stop:
5
Current sum: 5. Enter next number (0 to stop):
10
Current sum: 15. Enter next number (0 to stop):
3
Current sum: 18. Enter next number (0 to stop):
0
Final sum: 18`},{title:"Simple Password Entry Attempt (using do-while loop)",code:T(`#include <stdio.h>
#include <string.h> // For strcmp

int main() {
    char password[20];
    char correctPassword[] = "secret123";
    int attempts = 0;
    
    do {
        if (attempts > 0) {
            printf("Incorrect password. Try again.\\n");
        }
        printf("Enter password: ");
        scanf("%19s", password); // Safer scanf for strings
        
        // Clear input buffer after scanf("%s") to avoid issues with subsequent inputs
        int c;
        while ((c = getchar()) != '\\n' && c != EOF);

        attempts++;
    } while (strcmp(password, correctPassword) != 0 && attempts < 3);

    if (strcmp(password, correctPassword) == 0) {
        printf("Password accepted!\\n");
    } else {
        printf("Too many incorrect attempts. Access denied.\\n");
    }
    return 0;
}`),explanation:"The `do-while` loop ensures the password prompt is shown at least once. `strcmp` from `<string.h>` is used to compare strings. Using `%19s` with `scanf` is safer.",output:`(User enters 'wrong', then 'secret123')
Enter password: wrong
Incorrect password. Try again.
Enter password: secret123
Password accepted!`},{title:"Nested Loops (Printing a 3x3 Star Pattern)",code:T(`#include <stdio.h>

int main() {
    for (int i = 0; i < 3; i++) {      // Outer loop for rows
        for (int j = 0; j < 3; j++) {  // Inner loop for columns
            printf("* ");
        }
        printf("\\n"); // Newline after each row
    }
    return 0;
}`),output:`* * * 
* * * 
* * * `},{title:"Infinite Loop (and how to break, conceptually)",code:T(`#include <stdio.h>

int main() {
    int count = 0;
    // while (1) { // or for(;;) {
    //     printf("Looping forever... count = %d\\n", count++);
    //     // To stop this, you'd typically press Ctrl+C in the terminal
    //     // Or include a break condition:
    //     if (count > 5) { // Example break condition
    //        printf("Breaking loop after 5 iterations.\\n");
    //        break;
    //     }
    //     // On some systems, you might need to flush output in a fast loop
    //     // fflush(stdout); 
    // }
    printf("Example of an infinite loop structure (commented out to prevent actual infinite loop).\\n");
    printf("Uncomment the while(1) or for(;;) with a break condition to see it run.\\n");
    return 0;
}`),explanation:"`while(1)` or `for(;;)` creates an infinite loop. These are used in specific scenarios like event loops or embedded systems, often with a `break` condition inside or an external way to terminate.",output:`Example of an infinite loop structure (commented out to prevent actual infinite loop).
Uncomment the while(1) or for(;;) with a break condition to see it run.`}]},{id:"3-4",name:"Break and Continue",explanation:"`break` is used to exit a loop or `switch` statement prematurely. `continue` skips the current iteration of a loop and proceeds to the next iteration's condition check (for `while`, `do-while`) or update expression (for `for`).",codeExamples:[{title:"Using 'break' and 'continue' in a 'for' loop",code:T(`#include <stdio.h>

int main() {
    printf("Using break (stops when i is 5):\\n");
    for (int i = 1; i <= 10; i++) {
        if (i == 5) {
            printf("Breaking loop at i = %d\\n", i);
            break; // Exit loop when i is 5
        }
        printf("%d ", i);
    }
    printf("\\nDone with break loop.\\n\\n");

    printf("Using continue (skips when i is 5):\\n");
    for (int i = 1; i <= 7; i++) {
        if (i == 5) {
            printf("(Skipping %d) ", i);
            continue; // Skip iteration when i is 5
        }
        printf("%d ", i);
    }
    printf("\\nDone with continue loop.\\n");
    return 0;
}`),output:`Using break (stops when i is 5):
1 2 3 4 Breaking loop at i = 5
Done with break loop.

Using continue (skips when i is 5):
1 2 3 4 (Skipping 5) 6 7 
Done with continue loop.`},{title:"'break' in a 'while' loop (Find first multiple of 7)",code:T(`#include <stdio.h>

int main() {
    int num = 1;
    printf("Searching for the first multiple of 7 starting from 1:\\n");
    while (1) { // Potentially infinite loop, relies on break
        if (num % 7 == 0) {
            printf("Found it! %d is a multiple of 7.\\n", num);
            break; // Exit the loop
        }
        if (num > 50) { // Safety break
             printf("Searched up to 50, not found or error.\\n");
             break;
        }
        num++;
    }
    return 0;
}`),output:`Searching for the first multiple of 7 starting from 1:
Found it! 7 is a multiple of 7.`},{title:"'continue' in a 'while' loop (Print only odd numbers)",code:T(`#include <stdio.h>

int main() {
    int i = 0;
    printf("Printing odd numbers up to 10:\\n");
    while (i < 10) {
        i++;
        if (i % 2 == 0) { // If i is even
            continue;     // Skip the rest of this iteration
        }
        printf("%d ", i);
    }
    printf("\\n");
    return 0;
}`),output:`Printing odd numbers up to 10:
1 3 5 7 9 `},{title:"'break' in Nested Loops (Breaks only the inner loop)",code:T(`#include <stdio.h>

int main() {
    for (int i = 1; i <= 3; i++) {
        printf("Outer loop i = %d\\n", i);
        for (int j = 1; j <= 5; j++) {
            if (j == 3) {
                printf("  Inner loop j = %d, breaking inner loop.\\n", j);
                break; // This break only exits the inner for-loop
            }
            printf("  Inner loop j = %d\\n", j);
        }
        printf("Back in outer loop after inner loop finished or broke.\\n");
    }
    return 0;
}`),output:`Outer loop i = 1
  Inner loop j = 1
  Inner loop j = 2
  Inner loop j = 3, breaking inner loop.
Back in outer loop after inner loop finished or broke.
Outer loop i = 2
  Inner loop j = 1
  Inner loop j = 2
  Inner loop j = 3, breaking inner loop.
Back in outer loop after inner loop finished or broke.
Outer loop i = 3
  Inner loop j = 1
  Inner loop j = 2
  Inner loop j = 3, breaking inner loop.
Back in outer loop after inner loop finished or broke.`},{title:"Using 'continue' to skip processing negative numbers in an array sum",code:T(`#include <stdio.h>

int main() {
    int numbers[] = {10, -5, 20, -2, 8, -15, 3};
    int size = sizeof(numbers) / sizeof(numbers[0]);
    int sum = 0;

    printf("Summing only positive numbers from the array:\\n");
    for (int i = 0; i < size; i++) {
        if (numbers[i] < 0) {
            printf("Skipping negative number: %d\\n", numbers[i]);
            continue; // Skip to the next iteration if number is negative
        }
        sum += numbers[i];
        printf("Added %d, current sum: %d\\n", numbers[i], sum);
    }
    printf("Total sum of positive numbers: %d\\n", sum);
    return 0;
}`),output:`Summing only positive numbers from the array:
Added 10, current sum: 10
Skipping negative number: -5
Added 20, current sum: 30
Skipping negative number: -2
Added 8, current sum: 38
Skipping negative number: -15
Added 3, current sum: 41
Total sum of positive numbers: 41`},{title:"'break' in a 'do-while' loop (Input validation)",code:T(`#include <stdio.h>

int main() {
    int age;
    do {
        printf("Enter your age (must be 18 or older): ");
        if (scanf("%d", &age) != 1) { // Check if input is a valid integer
             printf("Invalid input. Please enter a number.\\n");
             // Clear invalid input from buffer
             while(getchar() != '\\n' && getchar() != EOF);
             age = 0; // Reset age to ensure loop continues or condition fails
             continue;
        }
        if (age >= 18) {
            printf("Age %d accepted.\\n", age);
            break; // Exit loop if age is valid
        }
        printf("Invalid age. Must be 18 or older. Please try again.\\n");
    } while (1); // Condition is always true, relies on internal break

    // Potentially more code here using the valid 'age'
    return 0;
}`),explanation:"This `do-while(1)` loop continues indefinitely until a `break` statement is executed, which happens when valid input is received. Input validation for `scanf` is added.",output:`(User enters 15, then 20)
Enter your age (must be 18 or older): 15
Invalid age. Must be 18 or older. Please try again.
Enter your age (must be 18 or older): 20
Age 20 accepted.`}]}]},{id:"module-4",title:"Functions: Building Modular Code",level:Ae.INTERMEDIATE,tagline:"Creating reusable and organized code blocks.",description:"Learn to write reusable blocks of code called functions. Understand function declaration, definition, parameters, return values, and scope.",expertInsight:"Functions are the building blocks of C programs. Well-designed functions make your code easier to understand, test, and maintain. Aim for functions that do one thing well.",topics:[{id:"4-1",name:"Function Basics",explanation:"Functions are self-contained blocks of code that perform a specific task. They help in organizing code, making it reusable, and improving readability. A function can be called multiple times from different parts of a program. Key components include declaration (prototype), definition (implementation), parameters (inputs), and return value (output).",codeExamples:[{title:"Simple Void Function (No Parameters, No Return Value)",code:T(`#include <stdio.h>

// Function Declaration (Prototype) - Optional if defined before main
void greet(void);

// Function Definition
void greet(void) {
    printf("Hello from the greet function!\\n");
}

int main() {
    greet(); // Function Call
    greet(); // Call it again
    return 0;
}`),explanation:"A `void` function does not return a value. `void` in parameters means it takes no arguments. The prototype declares the function to `main` before its full definition.",output:`Hello from the greet function!
Hello from the greet function!`},{title:"Function with Parameters",code:T(`#include <stdio.h>

void printNumber(int num) { // 'num' is a parameter
    printf("The number passed is: %d\\n", num);
}

int main() {
    printNumber(10);    // 10 is an argument
    int myVar = 25;
    printNumber(myVar); // myVar is an argument
    return 0;
}`),explanation:"Functions can accept input values through parameters. When calling the function, you provide arguments that are passed to these parameters.",output:`The number passed is: 10
The number passed is: 25`},{title:"Function with a Return Value",code:T(`#include <stdio.h>

// Function that adds two integers and returns the sum
int add(int a, int b) {
    int sum = a + b;
    return sum; // Returns the calculated sum
}

int main() {
    int num1 = 5, num2 = 7;
    int result = add(num1, num2); // Store the returned value
    printf("The sum of %d and %d is %d\\n", num1, num2, result);
    printf("Sum of 10 and 20 is %d\\n", add(10, 20)); // Use returned value directly
    return 0;
}`),explanation:"Functions can return a single value to the caller using the `return` statement. The data type of the returned value must match the function's declared return type.",output:`The sum of 5 and 7 is 12
Sum of 10 and 20 is 30`},{title:"Function Prototype (Declaration)",code:T(`#include <stdio.h>

// Function Prototype: Tells the compiler about the function before it's defined
int multiply(int x, int y); // Declaration

int main() {
    int product = multiply(6, 7); // Call the function
    printf("6 * 7 = %d\\n", product);
    return 0;
}

// Function Definition: The actual implementation of the function
int multiply(int x, int y) {
    return x * y;
}`),explanation:"A function prototype declares the function's name, return type, and parameter types. It allows you to define functions after `main` or in different files, as long as the compiler sees the prototype first.",output:"6 * 7 = 42"},{title:"Passing Arguments by Value",code:T(`#include <stdio.h>

void modifyValue(int val) {
    printf("Inside modifyValue, received val = %d\\n", val);
    val = 100; // This changes the local copy 'val'
    printf("Inside modifyValue, changed val to %d\\n", val);
}

int main() {
    int original = 10;
    printf("Before calling modifyValue, original = %d\\n", original);
    modifyValue(original);
    printf("After calling modifyValue, original = %d (Unchanged)\\n", original);
    return 0;
}`),explanation:"C passes arguments to functions by value. This means a copy of the argument's value is passed to the function. Changes made to the parameter inside the function do not affect the original argument in the calling code.",output:`Before calling modifyValue, original = 10
Inside modifyValue, received val = 10
Inside modifyValue, changed val to 100
After calling modifyValue, original = 10 (Unchanged)`},{title:"Local vs. Global Variables (Scope with Functions)",code:T(`#include <stdio.h>

int globalVar = 100; // Global variable, accessible by all functions

void display() {
    int localVar = 10; // Local variable, only accessible within display()
    printf("Inside display(): localVar = %d, globalVar = %d\\n", localVar, globalVar);
    // printf("num from main = %d\\n"); // Error: 'num' is not visible here
}

int main() {
    int num = 5; // Local to main()
    printf("Inside main(): num = %d, globalVar = %d\\n", num, globalVar);
    // printf("localVar from display = %d\\n"); // Error: 'localVar' is not visible here
    display();
    return 0;
}`),explanation:"Global variables are declared outside any function and can be accessed (and modified) by any function. Local variables are declared inside a function and are only accessible within that function.",output:`Inside main(): num = 5, globalVar = 100
Inside display(): localVar = 10, globalVar = 100`}]},{id:"4-2",name:"Recursion",explanation:"Recursion is a programming technique where a function calls itself to solve a smaller instance of the same problem. Each recursive call breaks the problem down until it reaches a 'base case', which is a simple condition that can be solved directly without further recursion. Recursion can lead to elegant solutions for problems like tree traversals or mathematical sequences, but it's important to ensure a base case exists to prevent infinite loops and stack overflow.",codeExamples:[{title:"Factorial Calculation using Recursion",code:T(`#include <stdio.h>

long long factorial(int n) {
    // Base case: factorial of 0 or 1 is 1
    if (n == 0 || n == 1) {
        return 1;
    }
    // Recursive step: n * factorial(n-1)
    else {
        return (long long)n * factorial(n - 1);
    }
}

int main() {
    int num = 5;
    printf("Factorial of %d is %lld\\n", num, factorial(num)); // Output: 120
    num = 0;
    printf("Factorial of %d is %lld\\n", num, factorial(num)); // Output: 1
    num = 10;
    printf("Factorial of %d is %lld\\n", num, factorial(num)); // Output: 3628800
    return 0;
}`),explanation:"The `factorial` function calls itself with `n-1` until `n` becomes 0 or 1 (the base case). `long long` is used to accommodate larger factorial values.",output:`Factorial of 5 is 120
Factorial of 0 is 1
Factorial of 10 is 3628800`},{title:"Fibonacci Sequence using Recursion",code:T(`#include <stdio.h>

int fibonacci(int n) {
    // Base cases
    if (n <= 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    }
    // Recursive step
    else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

int main() {
    int count = 10;
    printf("Fibonacci sequence up to %d terms:\\n", count);
    for (int i = 0; i < count; i++) {
        printf("%d ", fibonacci(i));
    }
    printf("\\n");
    return 0;
}`),explanation:"Calculates the nth Fibonacci number. Note: This recursive Fibonacci is inefficient for large `n` due to repeated calculations. Iterative solutions are often preferred for performance.",output:`Fibonacci sequence up to 10 terms:
0 1 1 2 3 5 8 13 21 34 `},{title:"Sum of N Natural Numbers using Recursion",code:T(`#include <stdio.h>

int sumNatural(int n) {
    // Base case
    if (n <= 0) {
        return 0;
    }
    // Recursive step
    else {
        return n + sumNatural(n - 1);
    }
}

int main() {
    int num = 5;
    printf("Sum of first %d natural numbers is %d\\n", num, sumNatural(num)); // 5+4+3+2+1 = 15
    num = 10;
    printf("Sum of first %d natural numbers is %d\\n", num, sumNatural(num)); // 55
    return 0;
}`),output:`Sum of first 5 natural numbers is 15
Sum of first 10 natural numbers is 55`},{title:"Importance of Base Case (Avoiding Infinite Recursion)",code:T(`#include <stdio.h>

void countdown(int n) {
    printf("%d...\\n", n);
    if (n == 0) {
        printf("Base case reached (n=0). Not calling countdown further.\\n");
        return; // Base case
    }
     countdown(n - 1); // Recursive call only if not base case
}

int main() {
    printf("Countdown from 3:\\n");
    countdown(3);
    return 0;
}`),explanation:"A recursive function MUST have a base case that stops the recursion. Otherwise, it will call itself indefinitely, leading to a stack overflow error.",output:`Countdown from 3:
3...
2...
1...
0...
Base case reached (n=0). Not calling countdown further.`},{title:"Printing a String in Reverse using Recursion",code:T(`#include <stdio.h>
#include <string.h>

void printReverse(char *str, int index) {
    // Base case: if index is less than 0, we're done
    if (index < 0) {
        return;
    }
    // Print the character at the current index
    printf("%c", str[index]);
    // Recursive call for the previous character
    printReverse(str, index - 1);
}

int main() {
    char myString[] = "hello";
    printf("Original string: %s\\n", myString);
    printf("Reversed string: ");
    printReverse(myString, strlen(myString) - 1);
    printf("\\n");
    return 0;
}`),output:`Original string: hello
Reversed string: olleh`},{title:"Stack Overflow Risk with Deep Recursion (Conceptual)",code:T(`#include <stdio.h>

void veryDeepRecursion(int n) {
    if (n == 0) {
        // printf("Base case hit!\\n"); // Potentially add output for base case
        return;
    }
    // Optional: print depth for tracing, but can be slow for large n
    // if (n % 1000 == 0) printf("Depth: %d\\n", n); 
    veryDeepRecursion(n - 1);
}

int main() {
    printf("Illustrating stack overflow risk (conceptually).\\n");
    printf("Each recursive call uses space on the call stack.\\n");
    printf("Too many calls (deep recursion) can exhaust this stack space.\\n");
    // veryDeepRecursion(200000); // This might crash your program! Test with care.
    // The actual limit depends on system configuration (stack size).
    printf("Calling with a safe depth (e.g., 5):\\n");
    veryDeepRecursion(5); 
    printf("Completed safely for depth 5.\\n");
    printf("Calling with a larger, potentially risky depth (e.g., 50000 - adjust based on system limits for testing):\\n");
    // veryDeepRecursion(50000); // This may or may not crash depending on your system.
    // printf("If you see this, 50000 was okay on your system.\\n");
    return 0;
}`),explanation:"Each function call (including recursive ones) adds a frame to the program's call stack. If recursion goes too deep without hitting a base case quickly enough, the call stack can run out of space, causing a 'stack overflow' error and program termination.",output:`Illustrating stack overflow risk (conceptually).
Each recursive call uses space on the call stack.
Too many calls (deep recursion) can exhaust this stack space.
Calling with a safe depth (e.g., 5):
Completed safely for depth 5.
Calling with a larger, potentially risky depth (e.g., 50000 - adjust based on system limits for testing):`}]}]},{id:"module-5",title:"Arrays and Strings",level:Ae.INTERMEDIATE,tagline:"Managing collections of data and text.",description:"Manage collections of data using arrays, and learn how strings are handled in C as null-terminated character arrays.",expertInsight:"Arrays are C's fundamental way to group similar data. Understanding how they relate to memory and pointers is key. Strings, being char arrays, require careful handling of the null terminator.",topics:[{id:"5-1",name:"Arrays",explanation:"An array is a collection of elements of the same data type stored in contiguous memory locations. Each element can be accessed using an index (starting from 0). Arrays are useful for storing lists of data, like numbers, characters, or even more complex structures.",codeExamples:[{title:"Declaring and Initializing 1D Arrays",code:T(`#include <stdio.h>

int main() {
    // Declare an array of 5 integers
    int numbers[5]; 
    numbers[0] = 10;
    numbers[1] = 20;
    numbers[2] = 30;
    numbers[3] = 40;
    numbers[4] = 50;

    // Declare and initialize at the same time
    float scores[] = {95.5f, 88.0f, 79.5f, 92.0f}; // Size inferred as 4
    char grades[3] = {'A', 'B', 'C'};

    printf("First number: %d\\n", numbers[0]);
    printf("Second score: %.1f\\n", scores[1]);
    printf("Third grade: %c\\n", grades[2]);
    return 0;
}`),output:`First number: 10
Second score: 88.0
Third grade: C`},{title:"Accessing Array Elements and Finding Size",code:T(`#include <stdio.h>

int main() {
    int data[] = {2, 4, 6, 8, 10, 12};
    int size = sizeof(data) / sizeof(data[0]); // Calculate number of elements

    printf("Array elements: ");
    for (int i = 0; i < size; i++) {
        printf("%d ", data[i]); // Accessing element at index i
    }
    printf("\\n");
    printf("The array has %d elements.\\n", size);
    printf("Element at index 3 is: %d\\n", data[3]); // Accesses 8
    return 0;
}`),explanation:"Array elements are accessed using `arrayName[index]`. The `sizeof` operator can be used to determine the number of elements in an array.",output:`Array elements: 2 4 6 8 10 12 
The array has 6 elements.
Element at index 3 is: 8`},{title:"Iterating Through an Array (Sum and Average)",code:T(`#include <stdio.h>

int main() {
    double values[] = {10.0, 15.5, 20.0, 25.5, 30.0};
    int count = sizeof(values) / sizeof(values[0]);
    double sum = 0.0;

    for (int i = 0; i < count; i++) {
        sum += values[i];
    }
    double average = sum / count;

    printf("Sum of array elements: %.2f\\n", sum);
    printf("Average of array elements: %.2f\\n", average);
    return 0;
}`),output:`Sum of array elements: 101.00
Average of array elements: 20.20`},{title:"Multidimensional Arrays (2D Array Basics)",code:T(`#include <stdio.h>

int main() {
    // Declare and initialize a 2x3 2D array (2 rows, 3 columns)
    int matrix[2][3] = {
        {1, 2, 3},  // Row 0
        {4, 5, 6}   // Row 1
    };

    printf("Matrix elements:\\n");
    for (int i = 0; i < 2; i++) {        // Iterate through rows
        for (int j = 0; j < 3; j++) {    // Iterate through columns
            printf("%d ", matrix[i][j]);
        }
        printf("\\n");
    }
    printf("Element at row 1, col 2 is: %d\\n", matrix[1][2]); // Accesses 6
    return 0;
}`),explanation:"2D arrays can be thought of as arrays of arrays, representing grids or matrices. They are accessed using two indices: `arrayName[row][column]`.",output:`Matrix elements:
1 2 3 
4 5 6 
Element at row 1, col 2 is: 6`},{title:"Passing Arrays to Functions",code:T(`#include <stdio.h>

// Function to print array elements
// When an array is passed to a function, it decays into a pointer,
// so we also need to pass its size.
void printArray(int arr[], int size) {
    printf("Array in function: ");
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
    // Example of modification:
    // if (size > 0) arr[0] = 100; // This WILL change the original array
}

int main() {
    int myArray[] = {11, 22, 33, 44};
    int len = sizeof(myArray) / sizeof(myArray[0]);
    
    printf("myArray[0] before function call: %d\\n", myArray[0]);
    printArray(myArray, len);
    // If printArray modified myArray[0]:
    // printf("myArray[0] after function call: %d\\n", myArray[0]); 
    return 0;
}`),explanation:"When passing an array to a function, you're actually passing the address of its first element. Thus, modifications to array elements within the function affect the original array. It's crucial to pass the size of the array as well, as the function cannot determine it from the pointer alone.",output:`myArray[0] before function call: 11
Array in function: 11 22 33 44 `},{title:"Array Bounds and Out-of-Bounds Access (Caution!)",code:T(`#include <stdio.h>

int main() {
    int smallArray[3] = {1, 2, 3};

    printf("Element at index 0: %d\\n", smallArray[0]);
    printf("Element at index 2: %d\\n", smallArray[2]);

    // Accessing out of bounds:
    // printf("Element at index 3 (out of bounds): %d\\n", smallArray[3]); // DANGEROUS!
    // smallArray[5] = 100; // DANGEROUS! Writing out of bounds.

    printf("Accessing array elements within bounds is safe.\\n");
    printf("Accessing or writing outside array bounds leads to undefined behavior (crashes, incorrect results, security vulnerabilities).\\n");
    printf("C does not perform automatic bounds checking on arrays.\\n");
    return 0;
}`),explanation:"C does not check if array indices are within their valid range. Accessing `array[index]` where `index` is less than 0 or greater than or equal to the array size is an 'out-of-bounds' access. This leads to undefined behavior, which can manifest as crashes, incorrect data, or security flaws. Programmers are responsible for ensuring bounds are respected.",output:`Element at index 0: 1
Element at index 2: 3
Accessing array elements within bounds is safe.
Accessing or writing outside array bounds leads to undefined behavior (crashes, incorrect results, security vulnerabilities).
C does not perform automatic bounds checking on arrays.`}]},{id:"5-2",name:"Strings",explanation:"In C, a string is essentially an array of characters terminated by a special null character ('\\0'). This null terminator signifies the end of the string. C provides a standard library `<string.h>` with various functions for string manipulation, such as finding length, copying, concatenating, and comparing strings.",codeExamples:[{title:"String as a Character Array (Null-Terminated)",code:T(`#include <stdio.h>
#include <string.h> // For strlen

int main() {
    // String literal automatically includes null terminator
    char greeting[] = "Hello"; 
    // Is equivalent to: char greeting[] = {'H', 'e', 'l', 'l', 'o', '\\0'};
    
    // Manually creating a null-terminated string
    char name[6]; // Needs space for 5 chars + null terminator
    name[0] = 'A';
    name[1] = 'd';
    name[2] = 'a';
    name[3] = '\\0'; // Manually add null terminator for short name

    printf("Greeting: %s\\n", greeting);
    printf("Name: %s\\n", name);

    // Size of array vs. length of string
    printf("Size of greeting array (includes '\\0'): %zu bytes\\n", sizeof(greeting)); 
    printf("Length of greeting string (strlen, excludes '\\0'): %zu\\n", strlen(greeting));
    return 0;
}`),output:`Greeting: Hello
Name: Ada
Size of greeting array (includes '\\0'): 6 bytes
Length of greeting string (strlen, excludes '\\0'): 5`},{title:"Initializing Strings",code:T(`#include <stdio.h>

int main() {
    char str1[] = "First String"; // Size inferred, includes null char
    char str2[50] = "Second String"; // Explicit size, must be large enough
    char str3[5] = "Hi"; // {'H', 'i', '\\0', uninit, uninit} - Ok

    // char str4[2] = "TooLong"; // WRONG - not enough space for "TooLong" + '\\0'
    // This would cause a buffer overflow or truncation/warning.
    
    char str5[] = {'C', ' ', 'i', 's', ' ', 'f', 'u', 'n', '\\0'}; // Manual init

    printf("str1: %s\\n", str1);
    printf("str2: %s\\n", str2);
    printf("str3: %s\\n", str3); // Prints "Hi"
    printf("str5: %s\\n", str5);
    return 0;
}`),output:`str1: First String
str2: Second String
str3: Hi
str5: C is fun`},{title:"Reading Strings (scanf, fgets)",code:T(`#include <stdio.h>
#include <string.h> // For strlen if used to remove newline

int main() {
    char nameScanf[50];
    char addressFgets[100];

    printf("Enter your name (scanf, max 49 chars): ");
    // scanf("%s", nameScanf); // DANGEROUS: Reads until whitespace, buffer overflow risk
    scanf("%49s", nameScanf); // Safer: limits input to 49 chars + null
    printf("Hello, %s (via scanf)!\\n", nameScanf);

    // Clear input buffer before fgets (important after scanf if newline might be left)
    int c;
    while ((c = getchar()) != '\\n' && c != EOF); 

    printf("Enter your address (fgets, max 99 chars then press Enter): ");
    // fgets reads a line, including newline if it fits, safer
    if (fgets(addressFgets, sizeof(addressFgets), stdin) != NULL) {
        // Remove trailing newline from fgets if present
        size_t len = strlen(addressFgets);
        if (len > 0 && addressFgets[len-1] == '\\n') {
           addressFgets[len-1] = '\\0';
        }
        printf("Address (via fgets): %s\\n", addressFgets);
    } else {
        printf("Error reading address with fgets.\\n");
    }
    return 0;
}`),explanation:'`scanf("%s", ...)` is generally unsafe for string input due to buffer overflow risks. `scanf("%49s", ...)` is a bit safer by limiting characters. `fgets` is preferred as it allows specifying buffer size and reads the whole line (including newline, which may need removal).',output:`(User enters 'Alice' then '123 Main St')
Enter your name (scanf, max 49 chars): Alice
Hello, Alice (via scanf)!
Enter your address (fgets, max 99 chars then press Enter): 123 Main St
Address (via fgets): 123 Main St`},{title:"String Manipulation Functions from <string.h>",code:T(`#include <stdio.h>
#include <string.h> // For string functions

int main() {
    char strA[50] = "Hello";
    char strB[] = "World";
    char strC[50];

    // 1. strlen() - String length (excluding null terminator)
    printf("Length of strA ('%s'): %zu\\n", strA, strlen(strA)); // Output: 5

    // 2. strcpy() - String copy (destination, source) - CAUTION: no size check
    // Use strncpy for safety: strncpy(strC, strA, sizeof(strC)-1); strC[sizeof(strC)-1] = '\\0';
    strcpy(strC, strA);
    printf("strC after strcpy(strC, strA): '%s'\\n", strC); // Output: "Hello"

    // 3. strcat() - String concatenation (destination, source) - CAUTION: no size check
    // Ensure destination has enough space!
    // Use strncat for safety: strncat(strA, " ", sizeof(strA) - strlen(strA) - 1);
    strcat(strA, " ");   // strA becomes "Hello "
    strcat(strA, strB);  // strA becomes "Hello World"
    printf("strA after strcat with strB: '%s'\\n", strA);

    // 4. strcmp() - String comparison
    // Returns 0 if equal, <0 if str1 < str2, >0 if str1 > str2
    char s1[] = "apple";
    char s2[] = "apply";
    int comparison = strcmp(s1, s2);
    if (comparison == 0) {
        printf("'%s' and '%s' are identical.\\n", s1, s2);
    } else if (comparison < 0) {
        printf("'%s' comes before '%s'.\\n", s1, s2);
    } else {
        printf("'%s' comes after '%s'.\\n", s1, s2);
    }
    return 0;
}`),output:`Length of strA ('Hello'): 5
strC after strcpy(strC, strA): 'Hello'
strA after strcat with strB: 'Hello World'
'apple' comes before 'apply'.`},{title:"Iterating Through a String (Character by Character)",code:T(`#include <stdio.h>
#include <string.h> // For strlen

int main() {
    char message[] = "C Programming";
    size_t length = strlen(message); // Use size_t for strlen result

    printf("Characters in '%s':\\n", message);
    for (size_t i = 0; i < length; i++) { // Iterate up to length (excluding null char)
        printf("Char at index %zu: %c\\n", i, message[i]);
    }

    printf("\\nIterating until null terminator:\\n");
    for (int i = 0; message[i] != '\\0'; i++) {
        printf("%c", message[i]);
    }
    printf("\\n");
    return 0;
}`),output:`Characters in 'C Programming':
Char at index 0: C
Char at index 1:  
Char at index 2: P
Char at index 3: r
Char at index 4: o
Char at index 5: g
Char at index 6: r
Char at index 7: a
Char at index 8: m
Char at index 9: m
Char at index 10: i
Char at index 11: n
Char at index 12: g

Iterating until null terminator:
C Programming
`},{title:"String Literals vs. Character Arrays",code:T(`#include <stdio.h>

int main() {
    char arr_str[] = "Modifiable"; // Modifiable array on stack/data segment
    char *ptr_str = "Immutable";   // Pointer to a string literal (often in read-only memory)

    printf("Array string: %s\\n", arr_str);
    printf("Pointer string: %s\\n", ptr_str);

    arr_str[0] = 'm'; // This is OK, arr_str is a modifiable array
    printf("Modified array string: %s\\n", arr_str);

    // ptr_str[0] = 'I'; // DANGEROUS! Attempting to modify a string literal.
                       // This causes undefined behavior (often a crash).
    printf("Attempting to modify string literal via pointer (e.g. ptr_str[0] = 'X') is UNDEFINED BEHAVIOR.\\n");

    ptr_str = "New Literal"; // This is OK, ptr_str now points to a different literal
    printf("Pointer string now points to: %s\\n", ptr_str);
    return 0;
}`),explanation:'A character array initialized with a string literal (e.g., `char s[] = "text";`) creates a modifiable copy of the string. A character pointer initialized with a string literal (e.g., `char *p = "text";`) points to the literal itself, which is typically stored in a read-only part of memory. Attempting to modify a string literal results in undefined behavior.',output:`Array string: Modifiable
Pointer string: Immutable
Modified array string: modifiable
Attempting to modify string literal via pointer (e.g. ptr_str[0] = 'X') is UNDEFINED BEHAVIOR.
Pointer string now points to: New Literal`}]}]},{id:"module-6",title:"Pointers: The Power and Peril",level:Ae.ADVANCED,tagline:"Mastering direct memory manipulation.",description:"Dive deep into pointers, one of C's most powerful and challenging features. Understand memory addresses, pointer arithmetic, and dynamic memory allocation.",expertInsight:"Pointers give you direct memory access, which is powerful but requires diligence. Master them, and you unlock C's full potential; misuse them, and you invite bugs like segmentation faults and memory leaks.",topics:[{id:"6-1",name:"Pointer Basics",explanation:"A pointer is a variable that stores the memory address of another variable. They allow for direct memory manipulation, dynamic memory allocation, and efficient handling of arrays and complex data structures. The address-of operator `&` gets the memory address of a variable, and the dereference operator `*` (also called indirection operator) accesses the value stored at the address held by a pointer.",codeExamples:[{title:"Declaring Pointers, Address-of (&) and Dereference (*)",code:T(`#include <stdio.h>

int main() {
    int var = 10;
    int *ptr; // Declare an integer pointer 'ptr'

    ptr = &var; // Assign the address of 'var' to 'ptr'

    printf("Value of var: %d\\n", var);
    printf("Address of var (&var): %p\\n", (void*)&var); // Use %p for addresses, cast to void*
    printf("Value of ptr (address it holds): %p\\n", (void*)ptr);
    printf("Value pointed to by ptr (*ptr): %d\\n", *ptr); // Dereference ptr

    *ptr = 20; // Modify the value at the address stored in ptr
    printf("New value of var (after *ptr = 20): %d\\n", var);
    return 0;
}`),output:`(Address will vary)
Value of var: 10
Address of var (&var): 0x7ffc1234abcd
Value of ptr (address it holds): 0x7ffc1234abcd
Value pointed to by ptr (*ptr): 10
New value of var (after *ptr = 20): 20`},{title:"Pointers of Different Types",code:T(`#include <stdio.h>

int main() {
    int i_val = 100;
    float f_val = 3.14f;
    char c_val = 'A';

    int *i_ptr = &i_val;
    float *f_ptr = &f_val;
    char *c_ptr = &c_val;

    printf("Integer pointer (*i_ptr): %d at address %p\\n", *i_ptr, (void*)i_ptr);
    printf("Float pointer (*f_ptr): %.2f at address %p\\n", *f_ptr, (void*)f_ptr);
    printf("Char pointer (*c_ptr): %c at address %p\\n", *c_ptr, (void*)c_ptr);
    return 0;
}`),explanation:"Pointers are typed. An `int*` can only point to `int` variables, a `float*` to `float` variables, etc. This helps the compiler with pointer arithmetic and dereferencing.",output:`(Addresses will vary)
Integer pointer (*i_ptr): 100 at address 0x7ffeedbeef00
Float pointer (*f_ptr): 3.14 at address 0x7ffeedbeef04
Char pointer (*c_ptr): A at address 0x7ffeedbeef08`},{title:"NULL Pointers",code:T(`#include <stdio.h>
#include <stdlib.h> // For NULL (though stddef.h is more common for just NULL)

int main() {
    int *ptr1 = NULL; // Initialize pointer to NULL
    int *ptr2;       // Uninitialized pointer (dangerous!)

    if (ptr1 == NULL) {
        printf("ptr1 is a NULL pointer.\\n");
    } else {
        printf("ptr1 is not NULL.\\n");
    }

    // Attempting to dereference a NULL pointer causes undefined behavior (usually a crash)
    // if (ptr1 != NULL) { *ptr1 = 10; } // Safe check before dereferencing
    printf("Dereferencing ptr1 (which is NULL) would crash. e.g. *ptr1 = 5;\\n");

    // ptr2 is uninitialized, its value is garbage. Dereferencing it is also dangerous.
    // *ptr2 = 20; // DANGEROUS!
    printf("ptr2 is uninitialized. Dereferencing it (e.g. *ptr2 = 10;) is dangerous.\\n");
    
    printf("It's good practice to initialize pointers to NULL if not pointing to a valid address.\\n");
    return 0;
}`),explanation:"`NULL` is a special macro (often `(void*)0`) indicating that a pointer does not point to any valid memory location. It's crucial to check for `NULL` before dereferencing a pointer that might be `NULL`.",output:`ptr1 is a NULL pointer.
Dereferencing ptr1 (which is NULL) would crash. e.g. *ptr1 = 5;
ptr2 is uninitialized. Dereferencing it (e.g. *ptr2 = 10;) is dangerous.
It's good practice to initialize pointers to NULL if not pointing to a valid address.`},{title:"Size of a Pointer",code:T(`#include <stdio.h>
#include <stddef.h> // For NULL definition (more common for NULL than stdlib.h)

int main() {
    int *i_ptr;
    char *c_ptr;
    double *d_ptr;
    void *v_ptr; // Generic pointer

    printf("Size of int pointer: %zu bytes\\n", sizeof(i_ptr));
    printf("Size of char pointer: %zu bytes\\n", sizeof(c_ptr));
    printf("Size of double pointer: %zu bytes\\n", sizeof(d_ptr));
    printf("Size of void pointer: %zu bytes\\n", sizeof(v_ptr));
    // Size of NULL macro depends on its definition, often same as void*
    printf("Size of NULL constant itself (implementation dependent): %zu bytes\\n", sizeof(NULL)); 
    return 0;
}`),explanation:"The size of a pointer variable itself (not the data it points to) is usually the same for all data types on a given system architecture (e.g., 4 bytes on 32-bit systems, 8 bytes on 64-bit systems). It depends on the memory addressing capability of the system.",output:`(Output for a 64-bit system)
Size of int pointer: 8 bytes
Size of char pointer: 8 bytes
Size of double pointer: 8 bytes
Size of void pointer: 8 bytes
Size of NULL constant itself (implementation dependent): 8 bytes`},{title:"Pointer to Pointer (Double Pointer)",code:T(`#include <stdio.h>

int main() {
    int var = 777;
    int *ptr;      // A pointer to an int
    int **pptr;    // A pointer to a pointer to an int (double pointer)

    ptr = &var;    // ptr holds address of var
    pptr = &ptr;   // pptr holds address of ptr

    printf("Value of var: %d\\n", var);
    printf("Value using ptr (*ptr): %d\\n", *ptr);
    printf("Value using pptr (**pptr): %d\\n", **pptr); // Dereference twice

    printf("\\nAddresses:\\n");
    printf("Address of var (&var): %p\\n", (void*)&var);
    printf("Address stored in ptr: %p\\n", (void*)ptr);
    printf("Address of ptr (&ptr): %p\\n", (void*)&ptr);
    printf("Address stored in pptr: %p\\n", (void*)pptr);
    printf("Address of pptr (&pptr): %p\\n", (void*)&pptr);
    return 0;
}`),explanation:"A pointer to a pointer (double pointer) stores the address of another pointer. This is useful for functions that need to modify a pointer itself (not just what it points to) or for managing arrays of pointers.",output:`(Addresses will vary)
Value of var: 777
Value using ptr (*ptr): 777
Value using pptr (**pptr): 777

Addresses:
Address of var (&var): 0x7ffee1234560
Address stored in ptr: 0x7ffee1234560
Address of ptr (&ptr): 0x7ffee1234568
Address stored in pptr: 0x7ffee1234568
Address of pptr (&pptr): 0x7ffee1234570`},{title:"Common Pointer Mistake: Uninitialized Pointer",code:T(`#include <stdio.h>

int main() {
    int *uninit_ptr; // Declared but not initialized

    // *uninit_ptr = 100; // DANGEROUS! uninit_ptr contains a garbage address.
                       // Writing to it will corrupt memory or crash.
    printf("Attempting to use uninit_ptr here (e.g. *uninit_ptr = 100;) is DANGEROUS!\\n");

    int x = 50;
    uninit_ptr = &x; // Now it's initialized and safe to use.
    *uninit_ptr = 100; 
    printf("Value of x (via uninit_ptr after proper init): %d\\n", x); // x is now 100

    printf("Always initialize pointers before dereferencing them.\\n");
    printf("Either to NULL or to a valid memory address.\\n");
    return 0;
}`),explanation:"An uninitialized pointer holds an arbitrary (garbage) memory address. Dereferencing such a pointer to read or write memory is a common and serious error, leading to undefined behavior.",output:`Attempting to use uninit_ptr here (e.g. *uninit_ptr = 100;) is DANGEROUS!
Value of x (via uninit_ptr after proper init): 100
Always initialize pointers before dereferencing them.
Either to NULL or to a valid memory address.`}]},{id:"6-2",name:"Pointers and Arrays",explanation:"In C, there's a close relationship between pointers and arrays. The name of an array often behaves like a pointer to its first element (it 'decays' to a pointer in many contexts). Pointer arithmetic can be used to navigate through array elements. This relationship is fundamental for many C idioms and efficient data manipulation.",codeExamples:[{title:"Array Name as a Pointer to its First Element",code:T(`#include <stdio.h>

int main() {
    int arr[] = {10, 20, 30, 40, 50};
    int *ptr;

    // The array name 'arr' decays to a pointer to its first element here
    ptr = arr; // Equivalent to ptr = &arr[0];

    printf("Address of arr[0]: %p\\n", (void*)&arr[0]);
    printf("Value of arr (decays to pointer): %p\\n", (void*)arr);
    printf("Value of ptr: %p\\n", (void*)ptr);

    printf("Value at *arr (first element): %d\\n", *arr);       // Dereferences arr[0]
    printf("Value at *ptr (first element): %d\\n", *ptr);       // Dereferences arr[0]
    return 0;
}`),output:`(Addresses will vary but be the same for arr[0], arr, and ptr)
Address of arr[0]: 0x7ffeeabcde00
Value of arr (decays to pointer): 0x7ffeeabcde00
Value of ptr: 0x7ffeeabcde00
Value at *arr (first element): 10
Value at *ptr (first element): 10`},{title:"Pointer Arithmetic with Arrays",code:T(`#include <stdio.h>

int main() {
    int arr[] = {11, 22, 33, 44, 55};
    int *ptr = arr; // ptr points to arr[0]

    printf("ptr points to arr[0] = %d\\n", *ptr);

    ptr++; // Increment pointer: now points to arr[1]
    printf("ptr++ points to arr[1] = %d\\n", *ptr);

    ptr = ptr + 2; // Add 2 to pointer: now points to arr[3] (arr[1+2])
    printf("ptr + 2 points to arr[3] = %d\\n", *ptr);
    
    ptr--; // Decrement pointer: now points to arr[2]
    printf("ptr-- points to arr[2] = %d\\n", *ptr);
    return 0;
}`),explanation:"When you perform arithmetic (like `+`, `-`, `++`, `--`) on a pointer, it's scaled by the size of the data type it points to. `ptr++` for an `int*` moves the pointer forward by `sizeof(int)` bytes.",output:`ptr points to arr[0] = 11
ptr++ points to arr[1] = 22
ptr + 2 points to arr[3] = 44
ptr-- points to arr[2] = 33`},{title:"Accessing Array Elements Using Pointers (vs. Indexing)",code:T(`#include <stdio.h>

int main() {
    int arr[] = {5, 10, 15, 20};
    int *ptr = arr;

    printf("Accessing using array indexing:
");
    printf("arr[0]=%d, arr[1]=%d, arr[2]=%d, arr[3]=%d\\n", arr[0], arr[1], arr[2], arr[3]);

    printf("Accessing using pointer arithmetic and dereferencing:
");
    printf("*ptr=%d, *(ptr+1)=%d, *(ptr+2)=%d, *(ptr+3)=%d\\n", *ptr, *(ptr+1), *(ptr+2), *(ptr+3));
    
    // arr[i] is equivalent to *(arr + i)
    printf("arr[2] = %d, *(arr + 2) = %d\\n", arr[2], *(arr + 2));
    return 0;
}`),explanation:"The expressions `arr[i]` and `*(arr + i)` are equivalent ways to access the i-th element of an array `arr`.",output:`Accessing using array indexing:
arr[0]=5, arr[1]=10, arr[2]=15, arr[3]=20
Accessing using pointer arithmetic and dereferencing:
*ptr=5, *(ptr+1)=10, *(ptr+2)=15, *(ptr+3)=20
arr[2] = 15, *(arr + 2) = 15`},{title:"Passing Arrays to Functions Using Pointers",code:T(`#include <stdio.h>

// Function to sum array elements, accepting a pointer and size
int sumArray(int *arr_ptr, int size) {
    int sum = 0;
    for (int i = 0; i < size; i++) {
        // sum += arr_ptr[i]; // Can use array notation with a pointer
        sum += *(arr_ptr + i); // Or pointer arithmetic
    }
    return sum;
}

int main() {
    int numbers[] = {1, 2, 3, 4, 5};
    int count = sizeof(numbers) / sizeof(numbers[0]);

    int total = sumArray(numbers, count); // Pass array (decays to pointer) and its size
    printf("Sum of array elements: %d\\n", total);
    return 0;
}`),explanation:"When an array is passed to a function, it effectively decays into a pointer to its first element. The function signature can declare the parameter as `int arr[]` or `int *arr`.",output:"Sum of array elements: 15"},{title:"Array of Pointers (e.g., Array of Strings)",code:T(`#include <stdio.h>

int main() {
    // An array of character pointers (array of strings)
    char *names[] = {
        "Alice",
        "Bob",
        "Charlie",
        "Diana"
    };
    int num_names = sizeof(names) / sizeof(names[0]);

    printf("List of names:\\n");
    for (int i = 0; i < num_names; i++) {
        printf("%d: %s (at address %p)\\n", i + 1, names[i], (void*)names[i]);
    }
    return 0;
}`),explanation:"`names` is an array where each element is a `char*` pointing to the first character of a string literal. String literals are usually stored in a read-only section of memory.",output:`(Addresses will vary)
List of names:
1: Alice (at address 0x400abc)
2: Bob (at address 0x400ac2)
3: Charlie (at address 0x400ac7)
4: Diana (at address 0x400ad0)`},{title:"Difference Between `ptr++` and `(*ptr)++`",code:T(`#include <stdio.h>

int main() {
    int arr[] = {10, 20, 30};
    int *ptr = arr;

    printf("Initial: *ptr = %d (points to arr[0])\\n", *ptr);

    (*ptr)++; // Increments the value pointed to by ptr (arr[0] becomes 11)
    printf("After (*ptr)++: *ptr = %d, arr[0] = %d\\n", *ptr, arr[0]);

    // Reset ptr to start of arr for clarity
    ptr = arr; 
    // arr[0] is already 11 from previous op, let's reset it to 10 for clear demo of *ptr++
    arr[0] = 10; 
    printf("Reset: *ptr = %d (points to arr[0]), arr[0] = %d\\n", *ptr, arr[0]);
    
    int val = *ptr++; // val gets *ptr (value at current location = 10), THEN ptr increments to point to arr[1]
    printf("After val = *ptr++: val = %d, *ptr (now points to arr[1]) = %d, arr[0] = %d\\n", val, *ptr, arr[0]);
    
    return 0;
}`),explanation:"`(*ptr)++` increments the value at the memory location `ptr` points to. `*ptr++` (due to operator precedence of `++` postfix being higher than `*`) first dereferences `ptr` for its value, then increments the pointer `ptr` itself to point to the next element.",output:`Initial: *ptr = 10 (points to arr[0])
After (*ptr)++: *ptr = 11, arr[0] = 11
Reset: *ptr = 10 (points to arr[0]), arr[0] = 10
After val = *ptr++: val = 10, *ptr (now points to arr[1]) = 20, arr[0] = 10`}]},{id:"6-3",name:"Dynamic Memory Allocation (malloc, calloc, realloc, free)",explanation:"Dynamic memory allocation allows programs to request memory from the operating system at runtime (from a region called the heap), rather than having all memory needs fixed at compile time. This is crucial when the amount of memory needed isn't known beforehand or varies. Functions like `malloc`, `calloc`, and `realloc` are used to allocate memory, and `free` is used to release it back to the system, preventing memory leaks.",codeExamples:[{title:"`malloc` for a Single Integer and `free`",code:T(`#include <stdio.h>
#include <stdlib.h> // For malloc, free

int main() {
    int *ptr;

    // Allocate memory for one integer
    ptr = (int*) malloc(sizeof(int)); 

    if (ptr == NULL) {
        printf("Memory allocation failed!\\n");
        return 1; // Exit with an error code
    }

    *ptr = 123; // Store a value in the allocated memory
    printf("Value stored in dynamically allocated memory: %d\\n", *ptr);
    printf("Address of allocated memory: %p\\n", (void*)ptr);

    free(ptr); // Deallocate the memory
    ptr = NULL; // Good practice: set pointer to NULL after freeing
    
    // Accessing ptr after free is undefined behavior
    // if(ptr != NULL) { /* This condition is now false */ }
    // else { printf("ptr is NULL after free and assignment.\\n"); }
    
    return 0;
}`),explanation:"`malloc(size)` allocates a block of `size` bytes and returns a `void*` pointer to it, or `NULL` if allocation fails. The returned pointer should be cast to the appropriate type. `free(ptr)` releases the memory block pointed to by `ptr`.",output:`(Address will vary)
Value stored in dynamically allocated memory: 123
Address of allocated memory: 0x55aa1234abcd`},{title:"`malloc` for an Array of Integers",code:T(`#include <stdio.h>
#include <stdlib.h>

int main() {
    int n = 5; // Number of integers to allocate
    int *arr_ptr;

    // Allocate memory for 'n' integers
    arr_ptr = (int*) malloc(n * sizeof(int));

    if (arr_ptr == NULL) {
        printf("Memory allocation for array failed!\\n");
        return 1;
    }

    printf("Enter %d integers (or assign them directly):\\n", n);
    for (int i = 0; i < n; i++) {
        arr_ptr[i] = (i + 1) * 10; // Assign values directly for example
        // Or use scanf: scanf("%d", &arr_ptr[i]); or scanf("%d", arr_ptr + i);
    }

    printf("Array elements: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr_ptr[i]);
    }
    printf("\\n");

    free(arr_ptr); // Deallocate the entire block of memory
    arr_ptr = NULL;
    return 0;
}`),output:`Enter 5 integers (or assign them directly):
Array elements: 10 20 30 40 50 
`},{title:"`calloc` for an Array (Initializes to Zero)",code:T(`#include <stdio.h>
#include <stdlib.h>

int main() {
    int n = 3;
    float *f_arr;

    // Allocate memory for 'n' floats and initialize all bits to zero
    f_arr = (float*) calloc(n, sizeof(float));

    if (f_arr == NULL) {
        printf("calloc failed!\\n");
        return 1;
    }

    printf("Floats allocated by calloc (should be 0.0):\\n");
    for (int i = 0; i < n; i++) {
        printf("%.1f ", f_arr[i]); // Should print 0.0 for floats
    }
    printf("\\n");

    f_arr[1] = 3.14f;
    printf("After modification: %.1f %.1f %.1f\\n", f_arr[0], f_arr[1], f_arr[2]);

    free(f_arr);
    f_arr = NULL;
    return 0;
}`),explanation:"`calloc(num_elements, element_size)` allocates memory for an array of `num_elements`, each of `element_size` bytes. A key difference from `malloc` is that `calloc` initializes the allocated memory to all bits zero.",output:`Floats allocated by calloc (should be 0.0):
0.0 0.0 0.0 
After modification: 0.0 3.1 0.0`},{title:"Checking for Allocation Failure (NULL Pointer)",code:T(`#include <stdio.h>
#include <stdlib.h>
// #include <limits.h> // For ULONG_MAX if attempting truly huge allocations

int main() {
    // Request an unreasonably large amount of memory
    // The exact value for "unreasonably large" depends on system RAM and OS limits.
    // (size_t)-1 would be the largest possible size_t value.
    // size_t very_large_size = (size_t)-1 / 2; // Still extremely large
    size_t very_large_size = 1024UL * 1024 * 1024 * 50; // e.g. 50GB, likely to fail on most systems
    char *huge_block;

    printf("Attempting to allocate a very large block of memory (e.g., ~50GB)...\\n");
    huge_block = (char*) malloc(very_large_size);

    if (huge_block == NULL) {
        printf("SUCCESS (as expected): Memory allocation failed for huge block. malloc returned NULL.\\n");
        // Handle the error gracefully - e.g., exit, try smaller allocation, etc.
    } else {
        // This branch is highly unlikely to be hit for such a large request.
        printf("UNEXPECTED: Memory allocation succeeded for huge block! Freeing it now.\\n");
        free(huge_block); 
        huge_block = NULL;
    }
    return 0;
}`),explanation:"It's crucial to check the pointer returned by `malloc`, `calloc`, or `realloc`. If it's `NULL`, the allocation failed (e.g., due to insufficient memory), and attempting to use the `NULL` pointer will cause a crash.",output:`Attempting to allocate a very large block of memory (e.g., ~50GB)...
SUCCESS (as expected): Memory allocation failed for huge block. malloc returned NULL.`},{title:"`realloc` to Change Memory Size",code:T(`#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main() {
    // Allocate initial memory for a string
    char *str = (char*) malloc(10 * sizeof(char)); // For "Hello" + null
    if (str == NULL) { perror("Initial malloc failed"); return 1; }
    strcpy(str, "Hello");
    printf("Initial string: '%s', address: %p, capacity: 10 chars\\n", str, (void*)str);

    // Reallocate to a larger size
    char *temp_ptr = (char*) realloc(str, 20 * sizeof(char)); // For "Hello World!" + null
    
    if (temp_ptr == NULL) {
        printf("realloc failed! Original block at %p is still valid and allocated.\\n", (void*)str);
        // We should free the original block 'str' if realloc fails and we don't need it anymore.
        free(str); 
        str = NULL; // str is now dangling if not set to NULL
        perror("realloc failed");
        return 1;
    }
    // IMPORTANT: If realloc succeeds, the original 'str' pointer might be invalid.
    // Always use the pointer returned by realloc.
    str = temp_ptr; 

    strcat(str, " World!"); // Now str points to the (potentially new) 20-byte block
    printf("Resized string: '%s', address: %p, capacity: 20 chars\\n", str, (void*)str);

    free(str);
    str = NULL;
    return 0;
}`),explanation:"`realloc(ptr, new_size)` changes the size of the memory block pointed to by `ptr` to `new_size`. It may move the block to a new location. If `realloc` fails, it returns `NULL`, and the original block (`ptr`) remains allocated and valid. The content of the block is preserved up to the minimum of the old and new sizes.",output:`(Addresses will vary, and may or may not change after realloc)
Initial string: 'Hello', address: 0x56aabbcc00, capacity: 10 chars
Resized string: 'Hello World!', address: 0x56aabbdd11, capacity: 20 chars`},{title:"Memory Leak (Forgetting to `free`) - Conceptual",code:T(`#include <stdio.h>
#include <stdlib.h>

void create_leak() {
    int *leaky_ptr = (int*) malloc(sizeof(int));
    if (leaky_ptr == NULL) {
        printf("Malloc failed in create_leak\\n");
        return;
    }
    *leaky_ptr = 100;
    printf("Inside create_leak, leaky_ptr (%p) points to %d\\n", (void*)leaky_ptr, *leaky_ptr);
    // Forgetting to call free(leaky_ptr) here causes a memory leak
    // when create_leak() returns, as 'leaky_ptr' (the local pointer variable) is lost,
    // but the memory it pointed to remains allocated.
}

int main() {
    printf("Demonstrating a memory leak conceptually.\\n");
    create_leak(); 
    // The memory allocated in create_leak is now inaccessible but still allocated.
    create_leak(); 
    // Another block of memory is leaked.
    
    printf("If 'free' is not called for dynamically allocated memory that is no longer referenced,\\n");
    printf("that memory remains allocated until the program terminates,\\n");
    printf("leading to a 'memory leak'. Use tools like Valgrind to detect leaks.\\n");
    return 0;
}`),explanation:"A memory leak occurs when dynamically allocated memory is no longer needed by the program (i.e., no valid pointers reference it) but is not deallocated (freed). The program loses all means to access or free that memory. Over time, leaks can consume all available memory, crashing the program or system.",output:`(Addresses will vary)
Demonstrating a memory leak conceptually.
Inside create_leak, leaky_ptr (0x55eeff00) points to 100
Inside create_leak, leaky_ptr (0x55eeff11) points to 100
If 'free' is not called for dynamically allocated memory that is no longer referenced,
that memory remains allocated until the program terminates,
leading to a 'memory leak'. Use tools like Valgrind to detect leaks.`}]}]},{id:"module-12",title:"From C Expert to Legend",level:Ae.EXPERT,tagline:"Pushing the boundaries of C and system software.",description:"Explore advanced system programming, contribute to open-source C projects, and delve into the intricacies of compilers and operating systems.",expertInsight:"Reaching C legend status means not just knowing the language, but understanding how it interacts with the system at a deep level, and using that knowledge to build robust, efficient, and impactful software.",topics:[{id:"12-1",name:"Advanced System Programming",explanation:"Advanced system programming in C involves interacting directly with the operating system's services. This includes file system operations, process management (creating and controlling processes), inter-process communication (IPC for processes to exchange data), signal handling (managing asynchronous events), and network programming (creating applications that communicate over networks). C's low-level capabilities make it ideal for these tasks. These examples are often platform-dependent (POSIX for Linux/macOS, Windows API for Windows).",codeExamples:[{title:"Basic File I/O (fopen, fprintf, fgets, fclose)",code:T(`#include <stdio.h>
#include <stdlib.h> // For exit() if used, and general utilities

int main() {
    FILE *fptr;
    char text_to_write[] = "Hello from C file I/O!";
    char buffer[100];

    // Write to a file
    fptr = fopen("myfile.txt", "w"); // "w" for write mode
    if (fptr == NULL) {
        perror("Error opening file for writing"); // Good practice to use perror
        return 1; // Indicate an error
    }
    fprintf(fptr, "%s\\n", text_to_write);
    fprintf(fptr, "Another line with number: %d\\n", 123);
    fclose(fptr); // Always close files
    printf("Wrote to myfile.txt\\n");

    // Read from a file
    fptr = fopen("myfile.txt", "r"); // "r" for read mode
    if (fptr == NULL) {
        perror("Error opening file for reading");
        return 1;
    }
    printf("Reading from myfile.txt:\\n");
    while (fgets(buffer, sizeof(buffer), fptr) != NULL) { // fgets is safer for reading lines
        printf("%s", buffer); // fgets includes newline if it fits
    }
    if (ferror(fptr)) {
        perror("Error reading file");
    }
    fclose(fptr);
    return 0;
}`),explanation:"Standard I/O functions from `<stdio.h>` like `fopen`, `fprintf`, `fgets`, and `fclose` are used for file operations. `perror` can print system error messages. `fgets` is generally safer than `fscanf` for reading strings from files.",output:`Wrote to myfile.txt
Reading from myfile.txt:
Hello from C file I/O!
Another line with number: 123
`},{title:"Concept: Process Creation with fork() (POSIX)",code:T(`#include <stdio.h>
#include <unistd.h> // For fork(), getpid(), getppid() (POSIX)
#include <sys/types.h> // For pid_t (POSIX)
// #include <sys/wait.h> // For wait()

int main() {
    pid_t pid;
    printf("This example is POSIX-specific (Linux/macOS).\\n");
    printf("On Windows, CreateProcess() is used for similar functionality.\\n");

    // The actual fork call is commented out to prevent execution in simple test environments.
    // To test, uncomment on a POSIX system (Linux, macOS).
    /*
    pid = fork(); 

    if (pid < 0) {
        perror("fork failed");
        return 1;
    } else if (pid == 0) {
        // Child process
        printf("Child Process: PID=%d, Parent PID=%d\\n", getpid(), getppid());
        // Child can do some work here, e.g., exec another program
        // exit(0); // Child exits
    } else {
        // Parent process
        printf("Parent Process: PID=%d, Created child with PID=%d\\n", getpid(), pid);
        // int status;
        // wait(&status); // Parent waits for child to finish
        // printf("Parent: Child process finished.\\n");
    }
    */
    printf("Conceptual fork() example. Real execution on POSIX systems requires uncommenting fork().\\n");
    return 0;
}`),explanation:"`fork()` (POSIX systems like Linux/macOS) creates a new process (child) that is a duplicate of the calling process (parent). `fork()` returns 0 to the child process and the child's PID to the parent, or -1 on error.",output:`This example is POSIX-specific (Linux/macOS).
On Windows, CreateProcess() is used for similar functionality.
Conceptual fork() example. Real execution on POSIX systems requires uncommenting fork().`},{title:"Concept: Inter-Process Communication - Pipes (POSIX)",code:T(`#include <stdio.h>
#include <unistd.h> // For pipe(), read(), write(), fork() (POSIX)
#include <string.h> // For strlen()
#include <sys/types.h> // For pid_t
// #include <sys/wait.h> // For wait()

#define MSG_SIZE 50

int main() {
    printf("This pipe example is POSIX-specific (Linux/macOS).\\n");
    // The actual pipe/fork calls are commented out.
    /*
    int fd[2]; // File descriptors for the pipe: fd[0] for read, fd[1] for write
    char write_msg[MSG_SIZE] = "Hello from parent via pipe!";
    char read_buffer[MSG_SIZE];
    pid_t pid;

    if (pipe(fd) == -1) { // Create the pipe
        perror("Pipe failed");
        return 1;
    }
    
    pid = fork(); // Create a child process
    if (pid < 0) { 
        perror("Fork failed"); 
        return 1; 
    }

    if (pid > 0) { // Parent process
        close(fd[0]); // Parent closes its unused read end of the pipe
        printf("Parent (PID %d): Writing to pipe...\\n", getpid());
        write(fd[1], write_msg, strlen(write_msg) + 1); // +1 for null terminator
        close(fd[1]); // Parent closes its write end
        // wait(NULL); // Wait for child to finish
        printf("Parent: Finished.\\n");
    } else { // Child process (pid == 0)
        close(fd[1]); // Child closes its unused write end of the pipe
        printf("Child (PID %d): Reading from pipe...\\n", getpid());
        ssize_t bytes_read = read(fd[0], read_buffer, MSG_SIZE);
        if (bytes_read > 0) {
             printf("Child received: '%s' (%zd bytes)\\n", read_buffer, bytes_read);
        } else if (bytes_read == 0) {
             printf("Child: Pipe closed by writer (EOF).\\n");
        } else {
             perror("Child: Read from pipe failed");
        }
        close(fd[0]); // Child closes its read end
        // exit(0);
    }
    */
    printf("Conceptual pipe IPC example. Real execution on POSIX systems requires uncommenting.\\n");
    return 0;
}`),explanation:"Pipes (POSIX) provide a unidirectional communication channel between related processes (e.g., parent and child created via `fork`). One process writes to one end of the pipe, the other reads from the other end.",output:`This pipe example is POSIX-specific (Linux/macOS).
Conceptual pipe IPC example. Real execution on POSIX systems requires uncommenting.`},{title:"Basic Signal Handling (SIGINT - Ctrl+C) (POSIX)",code:T(`#include <stdio.h>
#include <signal.h> // For signal(), SIGINT (POSIX)
#include <stdlib.h> // For exit()
#include <unistd.h> // for sleep()

// Global flag for handler (simple example, not always best practice for complex apps)
volatile sig_atomic_t keep_running = 1; 

void sigint_handler(int signum) {
    // Signal handlers should be reentrant and do minimal work.
    // Setting a flag is generally safer than calling printf directly in a handler.
    // However, for a simple demo, printf can be used cautiously.
    // Write is async-signal-safe, printf is not strictly.
    // char msg[] = "\\nCaught SIGINT. Exiting gracefully.\\n";
    // write(STDOUT_FILENO, msg, sizeof(msg)-1);
    printf("\\nCaught signal %d (SIGINT - Ctrl+C). Setting flag to exit.\\n", signum);
    keep_running = 0;
    // exit(signum); // Alternatively, exit directly, but flag allows cleanup in main loop.
}

int main() {
    printf("This signal handling example is POSIX-specific.\\n");
    // Register the signal handler for SIGINT
    if (signal(SIGINT, sigint_handler) == SIG_ERR) {
        perror("Failed to register SIGINT handler");
        return 1;
    }

    printf("Program running (PID: %d). Press Ctrl+C to send SIGINT.\\n", getpid());
    
    int i = 0;
    while(keep_running) { // Loop until signal handler changes the flag
        printf("Working... %d\\r", i++);
        fflush(stdout); // Ensure output is displayed immediately
        sleep(1); // Pause for 1 second
        if (i > 10 && keep_running) { // Auto-stop after some time for non-interactive tests
            // printf("\\nAuto-stopping after 10 iterations for demo purposes.\\n");
            // keep_running = 0; 
        }
    }
    printf("\\nExiting main loop due to signal or auto-stop. Performing cleanup... Done.\\n");
    return 0;
}`),explanation:"Signal handling allows a program to respond to asynchronous events (signals) sent by the OS or other processes. `signal()` (POSIX) registers a handler function for a specific signal like `SIGINT` (interrupt, usually from Ctrl+C). It's often safer for handlers to set a flag processed by the main loop.",output:`This signal handling example is POSIX-specific.
Program running (PID: ...). Press Ctrl+C to send SIGINT.
Working... 0\rWorking... 1\r...
(User presses Ctrl+C)
Caught signal 2 (SIGINT - Ctrl+C). Setting flag to exit.
Exiting main loop due to signal or auto-stop. Performing cleanup... Done.`},{title:"Working with Environment Variables (getenv)",code:T(`#include <stdio.h>
#include <stdlib.h> // For getenv()

int main() {
    char *path_var;
    char *home_var;
    char *non_existent_var;

    path_var = getenv("PATH"); // Get value of PATH environment variable
    if (path_var != NULL) {
        // Be careful: PATH can be very long. Print only a part for demo.
        printf("First ~50 chars of PATH: %.50s...\\n", path_var);
    } else {
        printf("PATH environment variable not found.\\n");
    }

    // On POSIX systems, HOME is common. On Windows, USERPROFILE.
    home_var = getenv("HOME"); 
    if (home_var == NULL) { // If HOME is not found, try USERPROFILE (for Windows)
        home_var = getenv("USERPROFILE");
    }

    if (home_var != NULL) {
        printf("Home directory (HOME/USERPROFILE): %s\\n", home_var);
    } else {
        printf("HOME or USERPROFILE environment variable not found.\\n");
    }
    
    non_existent_var = getenv("MY_VERY_UNIQUE_CUSTOM_VAR_XYZ123");
    if (non_existent_var == NULL) {
        printf("MY_VERY_UNIQUE_CUSTOM_VAR_XYZ123 not found (as expected).\\n");
    } else {
        printf("MY_VERY_UNIQUE_CUSTOM_VAR_XYZ123 was found: %s\\n", non_existent_var);
    }

    return 0;
}`),explanation:"`getenv()` retrieves the value of an environment variable. Environment variables provide configuration information to processes.",output:`(Output varies greatly by system)
First ~50 chars of PATH: /usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:...
Home directory (HOME/USERPROFILE): /home/user
MY_VERY_UNIQUE_CUSTOM_VAR_XYZ123 not found (as expected).`},{title:"Basic Socket Programming Concept (TCP Client - Conceptual Flow)",code:T(`#include <stdio.h>
// For actual socket programming, you'd include platform-specific headers:
// POSIX (Linux/macOS): <sys/socket.h>, <netinet/in.h>, <arpa/inet.h>, <unistd.h>
// Windows: <winsock2.h>, <ws2tcpip.h> (and link Ws2_32.lib)

int main() {
    printf("Conceptual TCP Client Socket Flow (highly simplified):\\n");
    printf("1. Initialize network library (e.g., WSAStartup() on Windows - not needed on POSIX).\\n");
    printf("2. Create a socket: socket_fd = socket(AF_INET, SOCK_STREAM, 0)\\n");
    printf("   AF_INET for IPv4, SOCK_STREAM for TCP. Check for errors.\\n");
    printf("3. Define server address structure (e.g., struct sockaddr_in server_addr):\\n");
    printf("   Set server_addr.sin_family = AF_INET;\\n");
    printf("   Set server_addr.sin_port = htons(SERVER_PORT); // Convert port to network byte order\\n");
    printf("   Convert IP string to network address: inet_pton(AF_INET, \\"SERVER_IP\\", &server_addr.sin_addr);\\n");
    printf("4. Connect to server: connect(socket_fd, (struct sockaddr*)&server_addr, sizeof(server_addr))\\n");
    printf("   Check for errors.\\n");
    printf("5. Send data: send(socket_fd, message, strlen(message), 0) or write()\\n");
    printf("   Check bytes sent and handle errors/partial sends.\\n");
    printf("6. Receive data: recv(socket_fd, buffer, sizeof(buffer)-1, 0) or read()\\n");
    printf("   Null-terminate buffer. Check bytes received for EOF or errors.\\n");
    printf("7. Close the socket: close(socket_fd) (POSIX) or closesocket(socket_fd) (Windows)\\n");
    printf("8. Clean up network library (e.g., WSACleanup() on Windows).\\n");
    printf("\\nActual implementation is more complex, involving extensive error handling, specific headers, byte ordering, etc.\\n");
    return 0;
}`),explanation:"Socket programming enables network communication. This shows a highly simplified conceptual flow for a TCP client. Actual code involves specific headers, detailed struct setup, extensive error checking, and byte ordering considerations (endianness using `htons`, `htonl`, etc.).",output:`Conceptual TCP Client Socket Flow (highly simplified):
1. Initialize network library (e.g., WSAStartup() on Windows - not needed on POSIX).
2. Create a socket: socket_fd = socket(AF_INET, SOCK_STREAM, 0)
   AF_INET for IPv4, SOCK_STREAM for TCP. Check for errors.
3. Define server address structure (e.g., struct sockaddr_in server_addr):
   Set server_addr.sin_family = AF_INET;
   Set server_addr.sin_port = htons(SERVER_PORT); // Convert port to network byte order
   Convert IP string to network address: inet_pton(AF_INET, "SERVER_IP", &server_addr.sin_addr);
4. Connect to server: connect(socket_fd, (struct sockaddr*)&server_addr, sizeof(server_addr))
   Check for errors.
5. Send data: send(socket_fd, message, strlen(message), 0) or write()
   Check bytes sent and handle errors/partial sends.
6. Receive data: recv(socket_fd, buffer, sizeof(buffer)-1, 0) or read()
   Null-terminate buffer. Check bytes received for EOF or errors.
7. Close the socket: close(socket_fd) (POSIX) or closesocket(socket_fd) (Windows)
8. Clean up network library (e.g., WSACleanup() on Windows).

Actual implementation is more complex, involving extensive error handling, specific headers, byte ordering, etc.`}]},{id:"12-2",name:"Contributing to Open Source",explanation:"Contributing to open-source C projects is a great way to hone your skills, learn from experienced developers, and give back to the community. It involves finding projects, understanding their codebase and contribution guidelines, fixing bugs, adding features, improving documentation, and participating in code reviews. Platforms like GitHub host countless C projects looking for contributors.",codeExamples:[{title:"Step 1: Finding Projects",code:`// Platforms: GitHub, GitLab, SourceForge, Gitea, etc.
// Search terms: "C language", "systems programming", "embedded C", "linux kernel module c"
// Labels to look for: "good first issue", "help wanted", "beginner", "documentation"
//
// Consider projects you use or are interested in:
// - Core utilities (grep, sed, awk implementations)
// - Libraries (e.g., zlib, libpng, OpenSSL - advanced)
// - Smaller tools or games
// - Embedded projects (e.g., firmware for microcontrollers)
//
// Start by reading the project's README and documentation.`,explanation:"Identify projects that align with your interests and current skill level. Many projects welcome newcomers and have issues specifically tagged for them."},{title:"Step 2: Understanding Contribution Guidelines & Code of Conduct",code:`// Look for files like:
// - CONTRIBUTING.md (or .rst, .txt)
// - PULL_REQUEST_TEMPLATE.md
// - ISSUE_TEMPLATE.md
// - CODE_OF_CONDUCT.md
//
// These files explain:
// - How to set up the development environment.
// - Required C standards (e.g., C99, C11), compiler versions.
// - Coding style (e.g., K&R, Allman, GNU) and linting tools.
// - Testing procedures.
// - How to submit patches (e.g., via email for some projects like Linux kernel) or pull requests.
// - Communication channels (mailing lists, IRC, Discord, Matrix, forums).
//
// Adherence is key for your contribution to be accepted.`,explanation:"Most established open-source projects have clear guidelines for contributing. Reading and following these is crucial."},{title:"Step 3: Setting Up Your Environment & Getting the Code",code:`// 1. Install necessary tools:
//    - C compiler (GCC, Clang)
//    - Build system (Make, CMake, Meson, Autotools)
//    - Version Control System (Git is most common)
//    - Debugger (GDB, LLDB)
//    - Any project-specific dependencies (libraries, tools).
//
// 2. Fork the repository (if on GitHub/GitLab etc.): This creates your personal copy.
//
// 3. Clone your fork locally:
//    git clone https://github.com/YOUR_USERNAME/PROJECT_NAME.git
//    cd PROJECT_NAME
//
// 4. Add the original project repository as an "upstream" remote:
//    git remote add upstream https://github.com/ORIGINAL_OWNER/PROJECT_NAME.git
//    git fetch upstream // Get refs from upstream`,explanation:"Ensure you have the right tools and a local copy of the codebase to work on. Keeping your fork in sync with the upstream project is important."},{title:"Step 4: Making Changes in a New Branch",code:`// Always work on a new branch for each distinct feature or bug fix.
// This keeps your changes isolated and easier to manage.
//
// // Sync your local main/master with upstream before creating a new branch:
// git checkout main  // or master, depending on project
// git fetch upstream
// git rebase upstream/main // or git merge upstream/main
// git push origin main     // Optional: update your fork's main branch
//
// // Create and switch to a new branch:
// git checkout -b fix/issue-123-buffer-overflow
// // or for a feature:
// git checkout -b feature/add-new-config-option
//
// // Now, make your code changes...`,explanation:"Using feature branches is a standard Git workflow that simplifies collaboration and code review."},{title:"Step 5: Committing, Testing, and Pushing Changes",code:`// Write your code, adhering to the project's style.
// Add or modify tests for your changes.
// Update documentation if necessary.
//
// // Build and test locally:
// make // or cmake, ./configure && make, etc.
// make test // or ctest, etc.
//
// // Stage your changes:
// git add src/module/file.c include/header.h tests/new_test.c
//
// // Commit your changes with a clear, descriptive message:
// // (Many projects have commit message format guidelines)
// git commit -s -m "Fix: Prevent null pointer dereference in process_data()"
// git commit -s -m "Feat: Implement --verbose flag for detailed logging"
// // The -s flag adds a Signed-off-by line, often required.
//
// // Push your branch to your fork:
// git push origin fix/issue-123-buffer-overflow`,explanation:"Write quality code, test thoroughly, and make clear, atomic commits. Push your branch to your fork on the hosting platform."},{title:"Step 6: Submitting a Pull Request (PR) / Merge Request (MR)",code:`// Go to the original project's repository page on GitHub/GitLab.
// You should see a prompt to create a Pull Request from your recently pushed branch.
//
// When creating the PR:
// - Write a clear title summarizing the change.
// - Provide a detailed description:
//   - What problem does it solve? (Link to issues, e.g., "Fixes #123")
//   - How was it solved? (Brief overview of your approach)
//   - How was it tested?
// - If there's a PR template, fill it out.
// - Be prepared for code review:
//   - Maintainers may ask questions or request changes.
//   - Respond politely and address feedback.
//   - You might need to push more commits to your branch to update the PR.
//
// Patience and good communication are key!`,explanation:"A Pull Request is your formal proposal to merge your changes into the main project. The review process is a learning opportunity."}]}]}],ah=()=>{const v=[Ae.BEGINNER,Ae.INTERMEDIATE,Ae.ADVANCED,Ae.EXPERT],q={[Ae.BEGINNER]:{title:"Phase 1: Foundations",description:"Start your C journey with the fundamental concepts, syntax, and basic programming constructs.",color:"text-green-600 border-green-500"},[Ae.INTERMEDIATE]:{title:"Phase 2: Building Blocks",description:"Move on to more complex topics like functions, arrays, strings, and structured programming techniques.",color:"text-blue-700 border-blue-600"},[Ae.ADVANCED]:{title:"Phase 3: Deep Dive",description:"Explore C's powerful features including pointers, memory management, and advanced data structures.",color:"text-amber-600 border-amber-500"},[Ae.EXPERT]:{title:"Phase 4: Mastery & Beyond",description:"Delve into system-level programming, advanced algorithms, and contribute to real-world C projects.",color:"text-blue-800 border-blue-700"}},D=v.map(f=>{const z=q[f];return{level:f,title:z.title,description:z.description,modules:cd.filter(j=>j.level===f),color:z.color}}).filter(f=>f.modules.length>0);return h.jsx("section",{id:"roadmap",className:"py-16 bg-gray-100",children:h.jsxs("div",{className:"container mx-auto px-4",children:[h.jsx("h2",{className:"text-4xl font-bold text-center text-blue-700 mb-4",children:"Your Comprehensive Roadmap to C Mastery"}),h.jsx("p",{className:"text-center text-gray-700 mb-12 text-lg max-w-3xl mx-auto",children:"Follow this structured roadmap to systematically progress through the C language, from basic principles to expert-level application. Each phase builds upon the previous, ensuring a solid and comprehensive understanding."}),h.jsx("div",{className:"space-y-10",children:D.map((f,z)=>h.jsxs("div",{className:`bg-white p-6 md:p-8 rounded-xl shadow-xl border-t-4 ${f.color.split(" ")[1]}`,children:[h.jsx("div",{className:"flex items-start space-x-4 mb-4",children:h.jsxs("div",{className:(q[f.level],"pl-0"),children:[" ",h.jsxs("h3",{className:`text-2xl font-semibold ${f.color.split(" ")[0]}`,children:[f.title," - ",f.level]}),h.jsx("p",{className:"text-gray-600 text-sm mt-1",children:f.description})]})}),f.modules.length>0?h.jsx("ul",{className:"space-y-3 list-inside pl-2",children:f.modules.map(j=>h.jsxs("li",{className:"text-gray-800",children:[h.jsxs("a",{href:`#${j.id}`,className:"group inline-flex items-center text-lg hover:text-blue-600 transition-colors duration-200","aria-label":`Go to module: ${j.title}`,children:[h.jsx("span",{className:"font-medium group-hover:underline",children:j.title}),h.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200",children:h.jsx("path",{fillRule:"evenodd",d:"M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z",clipRule:"evenodd"})})]}),j.tagline&&h.jsx("p",{className:"text-xs text-gray-500 ml-1",children:j.tagline})]},j.id))}):h.jsx("p",{className:"text-gray-600",children:"No modules currently listed for this stage."})]},f.level))})]})})},lh=({className:v})=>h.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:`w-6 h-6 ${v}`,"aria-hidden":"true",children:h.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"})}),ih=({className:v})=>h.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:`w-6 h-6 ${v}`,"aria-hidden":"true",children:h.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 5.25v13.5m-7.5-13.5v13.5"})}),rh=({className:v})=>h.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:`w-6 h-6 ${v}`,"aria-hidden":"true",children:h.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"})}),uh=({className:v})=>h.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:`w-6 h-6 ${v}`,"aria-hidden":"true",children:h.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"})}),oh=({onClose:v,isVisible:q})=>{const[D,f]=Ze.useState(0),[z,j]=Ze.useState(!1),J=Ze.useRef(null);Ze.useEffect(()=>(z?J.current=window.setInterval(()=>{f(W=>W+1)},1e3):J.current&&clearInterval(J.current),()=>{J.current&&clearInterval(J.current)}),[z]);const se=W=>{const te=Math.floor(W/3600),be=Math.floor(W%3600/60),pe=W%60,Ge=Me=>Me.toString().padStart(2,"0");return`${Ge(te)}:${Ge(be)}:${Ge(pe)}`},C=()=>{j(!z)},S=()=>{j(!1),f(0)},R=se(D).split(":");return h.jsx("div",{className:`study-timer-widget ${q?"visible":""}`,role:"timer","aria-live":"off","aria-labelledby":"stopwatch-widget-title",children:h.jsxs("div",{className:"relative",children:[" ",h.jsx("button",{onClick:v,className:"absolute -top-2 -right-2 text-gray-400 hover:text-amber-400 transition-colors stopwatch-button p-1 bg-gray-800 rounded-full","aria-label":"Close timer widget",children:h.jsx(uh,{className:"w-6 h-6"})}),h.jsx("h2",{id:"stopwatch-widget-title",className:"text-2xl font-semibold text-amber-400 mb-4",children:"Study Timer"}),h.jsxs("div",{className:"font-orbitron text-5xl my-6 tracking-normal","aria-label":`Current time: ${se(D)}`,children:[h.jsx("span",{children:R[0]}),h.jsx("span",{className:z?"blinking-colon":"",children:":"}),h.jsx("span",{children:R[1]}),h.jsx("span",{className:z?"blinking-colon":"",children:":"}),h.jsx("span",{children:R[2]})]}),h.jsxs("div",{className:"flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-3 mt-6",children:[h.jsxs("button",{onClick:C,className:"flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold py-2.5 px-6 rounded-lg text-md stopwatch-button w-full sm:w-auto","aria-label":z?"Pause timer":D>0?"Resume timer":"Start timer",children:[z?h.jsx(ih,{className:"w-5 h-5 mr-2"}):h.jsx(lh,{className:"w-5 h-5 mr-2"}),z?"Pause":D>0?"Resume":"Start"]}),h.jsxs("button",{onClick:S,disabled:D===0&&!z,className:"flex items-center justify-center bg-gray-600 hover:bg-gray-500 disabled:bg-gray-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-2.5 px-6 rounded-lg text-md stopwatch-button w-full sm:w-auto","aria-label":"Reset timer",children:[h.jsx(rh,{className:"w-5 h-5 mr-2"}),"Reset"]})]})]})})},sh=()=>{const[v,q]=Ze.useState(!1),D=()=>{q(!v)};return h.jsxs("div",{className:"min-h-screen flex flex-col",children:[h.jsx(Kp,{onToggleStopwatch:D})," ",h.jsxs("main",{className:"flex-grow container mx-auto px-4 py-8",children:[h.jsx(Jp,{}),h.jsxs("section",{id:"learning-path",className:"py-12",children:[h.jsx("p",{className:"text-center text-slate-600 font-semibold my-4 md:my-6 text-lg",children:"Made with ❤️ by Rahul Chirra"}),h.jsxs("div",{className:"text-center my-8 md:my-10",children:[h.jsx("h3",{className:"text-3xl font-bold text-slate-700 mb-6",children:"Connect with me"}),h.jsxs("div",{className:"flex justify-center items-center space-x-6",children:[h.jsx("a",{href:"https://www.linkedin.com/in/rahul-c-457657225/",target:"_blank",rel:"noopener noreferrer","aria-label":"Rahul Chirra on LinkedIn",title:"LinkedIn Profile",children:h.jsx("img",{src:"https://img.icons8.com/?size=100&id=13930&format=png&color=000000",alt:"LinkedIn",className:"w-10 h-10 transition-transform hover:scale-110"})}),h.jsx("a",{href:"https://github.com/rahulchirra",target:"_blank",rel:"noopener noreferrer","aria-label":"Rahul Chirra on GitHub",title:"GitHub Profile",children:h.jsx("img",{src:"https://img.icons8.com/ios-filled/100/000000/github.png",alt:"GitHub",className:"w-10 h-10 transition-transform hover:scale-110"})}),h.jsx("a",{href:"https://www.instagram.com/rahullchirra/",target:"_blank",rel:"noopener noreferrer","aria-label":"Rahul Chirra on Instagram",title:"Instagram Profile",children:h.jsx("img",{src:"https://img.icons8.com/fluency/100/instagram-new.png",alt:"Instagram",className:"w-10 h-10 transition-transform hover:scale-110"})})]})]}),h.jsx("h2",{className:"text-4xl font-bold text-center text-blue-700 mb-2",children:"Your Path to C Mastery"}),h.jsx("p",{className:"text-center text-gray-700 mb-12 text-lg max-w-3xl mx-auto",children:"Embark on a structured journey from the fundamentals to advanced C programming. Each module builds upon the last, ensuring a solid understanding."}),h.jsx("div",{className:"space-y-8",children:cd.map(f=>h.jsx(th,{module:f},f.id))})]}),h.jsxs("section",{id:"why-c",className:"py-16 bg-white rounded-xl shadow-2xl my-16 p-8 md:p-12",children:[h.jsx("h2",{className:"text-3xl font-bold text-center text-blue-700 mb-8",children:"Why Invest Your Time in C?"}),h.jsxs("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-800",children:[h.jsxs("div",{className:"p-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-blue-500/30 transition-shadow duration-300",children:[h.jsx("h3",{className:"text-xl font-semibold text-green-600 mb-3",children:"Unmatched Performance"}),h.jsx("p",{children:"C provides low-level memory manipulation and minimal runtime overhead, making it ideal for performance-critical applications like operating systems, game engines, and embedded systems."})]}),h.jsxs("div",{className:"p-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-blue-500/30 transition-shadow duration-300",children:[h.jsx("h3",{className:"text-xl font-semibold text-green-600 mb-3",children:"Foundation of Modern Computing"}),h.jsx("p",{children:"Many modern languages (C++, Java, Python, JavaScript) and operating systems (Windows, Linux, macOS) are built using C or have C-like syntax. Understanding C gives you a deeper insight into how computers work."})]}),h.jsxs("div",{className:"p-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-blue-500/30 transition-shadow duration-300",children:[h.jsx("h3",{className:"text-xl font-semibold text-green-600 mb-3",children:"Versatility & Portability"}),h.jsx("p",{children:"C compilers are available for almost every platform, making C code highly portable. It's used in a vast range of applications, from microcontrollers to supercomputers."})]}),h.jsxs("div",{className:"p-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-blue-500/30 transition-shadow duration-300 md:col-span-2 lg:col-span-1 lg:col-start-2",children:[h.jsx("h3",{className:"text-xl font-semibold text-green-600 mb-3",children:"Career Opportunities"}),h.jsx("p",{children:"Proficiency in C is highly valued in fields like system programming, embedded systems, game development, and high-performance computing, opening up diverse career paths."})]})]})]}),h.jsx(ah,{})]}),h.jsx(nh,{}),h.jsx(oh,{onClose:D,isVisible:v})]})},fd=document.getElementById("root");if(!fd)throw new Error("Could not find root element to mount to");const ch=Qp.createRoot(fd);ch.render(h.jsx(Hp.StrictMode,{children:h.jsx(sh,{})}));
