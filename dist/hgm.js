#!/usr/bin/env node
"use strict";function G(t,e){var r,n=Object.keys(t);return Object.getOwnPropertySymbols&&(
r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),
n.push.apply(n,r)),n}function d(t){for(var r,e=1;e<arguments.length;e++)r=null!=arguments[e]?arguments[e]:{},e%2?G(
Object(r),!0).forEach(function(e){i(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,
Object.getOwnPropertyDescriptors(r)):G(Object(r)).forEach(function(e){Object.defineProperty(t,e,
Object.getOwnPropertyDescriptor(r,e))});return t}function i(e,t,r){t in e?Object.defineProperty(e,t,{value:r,
enumerable:!0,configurable:!0,writable:!0}):e[t]=r}function e(e){return e&&"object"==typeof e&&"default"in e?e:{
default:e}}function F(r){if(r&&r.__esModule)return r;var n=Object.create(null);return r&&Object.keys(r).forEach(
function(e){var t;"default"!==e&&(t=Object.getOwnPropertyDescriptor(r,e),Object.defineProperty(n,e,t.get?t:{
enumerable:!0,get:function(){return r[e]}}))}),n.default=r,Object.freeze(n)}function M(e){var t,r=-1,
n=null==e?0:e.length;for(this.clear();++r<n;)t=e[r],this.set(t[0],t[1])}function D(e){var t,r=-1,n=null==e?0:e.length;
for(this.clear();++r<n;)t=e[r],this.set(t[0],t[1])}function q(e){var t,r=-1,n=null==e?0:e.length;for(this.clear();++r<n;
)t=e[r],this.set(t[0],t[1])}function k(e){e=this.__data__=new st(e),this.size=e.size}function B(e){var t=-1,
r=null==e?0:e.length;for(this.__data__=new ut;++t<r;)this.add(e[t])}function $(n,o){function i(){var e=arguments,
t=o?o.apply(this,e):e[0],r=i.cache;return r.has(t)?r.get(t):(e=n.apply(this,e),i.cache=r.set(t,e)||r,e)}if(
"function"!=typeof n||null!=o&&"function"!=typeof o)throw new TypeError("Expected a function");return i.cache=new(
$.Cache||Ur),i}function V(e){return void 0===e}function z(e){return a(e)}function H(e){return Pi(e)}function W(e){
return ji(e)}function J(e,t){return Xn(e,t)}function K(e,t=H,r=void 0){return!!(void 0===r||xe(n=e)&&J(ki(n),r))&&(
n=void 0!==t?t:H,xe(r=e)&&J(Y(r),n));var n}function X(...e){return t=>$n(e,e=>e(t))}function Q(e){if(void 0!==e&&""!==e
)return""+e}function Y(e,t=H){var r;return z(e)?(r=jn(e,(e,t)=>t),Ko(r,e=>t(e))):xe(e)?(r=Reflect.ownKeys(e),Ko(r,e=>t(e
))):[]}function Z(e){if(!e.startsWith("%{")||!e.endsWith("}"))return Q(e)}function ee(e){if(W(e))switch(e){
case $i.OPTIONS:return"options";case $i.GET:return"get";case $i.POST:return"post";case $i.PUT:return"put";
case $i.DELETE:return"delete";case $i.PATCH:return"patch"}throw new TypeError(
"Unsupported value for stringifyRequestMethod(): "+e)}function te(e){return H(t=e)||W(t)||wi(t)||Ti(t)||re(e)||(e=t=e,
!!xe(e)&&!(e instanceof Date)&&!Le(e)&&!z(e)&&K(e,H,void 0)&&K(t,H,X(te,V)));var t}function re(e){var t,[e,r=void 0,
n=void 0,o=void 0]=[e,X(te,V)];return!!a(e)&&(t=null!=(t=null==e?void 0:e.length)?t:0,!(void 0!==n&&t<n)&&!(
void 0!==o&&o<t)&&(void 0===r||J(e,r)))}function ne(t,e){var r,n=Object.keys(t);return Object.getOwnPropertySymbols&&(
r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),
n.push.apply(n,r)),n}function b(n){for(var o,e=1;e<arguments.length;e++)o=null!=arguments[e]?arguments[e]:{},e%2?ne(
Object(o),!0).forEach(function(e){var t=n,r=o[e];e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,
configurable:!0,writable:!0}):t[e]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,
Object.getOwnPropertyDescriptors(o)):ne(Object(o)).forEach(function(e){Object.defineProperty(n,e,
Object.getOwnPropertyDescriptor(o,e))});return n}function oe(e,t,r){if(e.isSymbolicLink()||e.isFile()){var n,o,i=t,
a=void 0!==r.pathExt?r.pathExt:process.env.PATHEXT;if(!a)return!0;if(-1!==(a=a.split(";")).indexOf(""))return!0;for(
n=0;n<a.length;n++)if((o=a[n].toLowerCase())&&i.substr(-o.length).toLowerCase()===o)return!0;return!1}return!1}
function ie(e,t){return e.isFile()&&(r=e.mode,n=e.uid,e=e.gid,o=void 0!==t.uid?t.uid:process.getuid&&process.getuid(),
t=void 0!==t.gid?t.gid:process.getgid&&process.getgid(),i=parseInt("100",8),a=parseInt("010",8),r&parseInt("001",8
)||r&a&&e===t||r&i&&n===o||r&(i|a)&&0===o);var r,n,o,i,a}function ae(e,t){var r=e.options.env||process.env,
n=process.cwd(),o=null!=e.options.cwd,i=o&&void 0!==process.chdir&&!process.chdir.disabled;if(i)try{process.chdir(
e.options.cwd)}catch(e){}let a;try{a=Ts.sync(e.command,{path:r[Ss({env:r})],pathExt:t?ws.delimiter:void 0})}catch(e
){}finally{i&&process.chdir(n)}return a=a&&ws.resolve(o?e.options.cwd:"",a)}function se(e,t){return Object.assign(
new Error(`${t} ${e.command} ENOENT`),{code:"ENOENT",errno:"ENOENT",syscall:t+" "+e.command,path:e.command,
spawnargs:e.args})}function ue(e,t){return Fs&&1===e&&!t.file?se(t.original,"spawn"):null}function ce(e,t,r){
return e=ve(e,t,r),t=Ms.spawn(e.command,e.args,e.options),Ds.hookChildProcess(t,e),t}function le(e={}){var{
env:e=process.env,platform:t=process.platform}=e;return"win32"!==t?"PATH":Object.keys(e).reverse().find(
e=>"PATH"===e.toUpperCase())||"Path"}async function de(n,u){if(!n)throw new Error("Expected a stream");const o=(u=b({
maxBuffer:1/0},u)).maxBuffer,i=(e=>{const t=(e=b({},u)).array;let r=e.encoding;const n="buffer"===r;let o=!1;t?o=!(r||n
):r=r||"utf8",n&&(r=null);const i=new Xs({objectMode:o});r&&i.setEncoding(r);let a=0;const s=[];return i.on("data",e=>{
s.push(e),o?a=s.length:a+=e.length}),i.getBufferedValue=()=>t?s:n?Buffer.concat(s,a):s.join(""),i.getBufferedLength=(
)=>a,i})();return await new Promise((e,t)=>{const r=e=>{e&&i.getBufferedLength()<=Qs.MAX_LENGTH&&(
e.bufferedData=i.getBufferedValue()),t(e)};(async()=>{try{await Zs(n,i),e()}catch(e){r(e)}})(),i.on("data",()=>{
i.getBufferedLength()>o&&r(new eu)})}),i.getBufferedValue()}async function fe(e,t){var r=e.shift(),y=d({stdio:"inherit"}
,null!=t?t:{}),{stdout:t,stderr:r}=(du.debug("Executing: ",r,e),await function(e,t){var n,r,o,i,a,s,u,c,l,d;[r,o,i={}]=[
e,t,y],r=(a=Ki._parse(r,o,i)).command,o=a.args,(i=b({maxBuffer:1e8,buffer:!0,stripFinalNewline:!0,extendEnv:!0,
preferLocal:!1,localDir:(i=a.options).cwd||Ba.default.cwd(),execPath:Ba.default.execPath,encoding:"utf8",reject:!0,
cleanup:!0,all:!1,windowsHide:!0},i)).env=({env:s,extendEnv:d,preferLocal:u,localDir:c,execPath:l}=i,d=d?b(b({},
Ba.default.env),s):s,u?function(e){let{env:t=Ba.default.env}=e,r=function(e,t){var r,n,o,i;if(null==e)return{};if(
r=function(e,t){var r,n,o,i;if(null==e)return{};for(r={},n=Object.keys(e),i=0;i<n.length;i++)o=n[i],0<=t.indexOf(o)||(
r[o]=e[o]);return r}(e,t),Object.getOwnPropertySymbols)for(i=Object.getOwnPropertySymbols(e),o=0;o<i.length;o++)n=i[o],
0<=t.indexOf(n)||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n]);return r}(e,qs);return e=le({env:t=b({},t)
}),r.path=t[e],t[e]=function(e={}){const{cwd:t=Ba.default.cwd(),path:r=Ba.default.env[le()],
execPath:n=Ba.default.execPath}=e;let o,i=(e=t instanceof URL?$a.default.fileURLToPath(t):t,qa.default.resolve(e));
const a=[];for(;o!==i;)a.push(qa.default.join(i,"node_modules/.bin")),o=i,i=qa.default.resolve(i,"..");return a.push(
qa.default.resolve(e,n,"..")),[...a,r].join(qa.default.delimiter)}(r),t}({env:d,cwd:c,execPath:l}):d),i.stdio=(t=>{var r
,e;if(t){const n=t.stdio;if(void 0===n)return Ks.map(e=>t[e]);if(r=t,Ks.some(e=>void 0!==r[e]))throw new Error(
"It's not possible to provide `stdio` in combination with one of "+Ks.map(e=>`\`${e}\``).join(", "));if(
"string"==typeof n)return n;if(Array.isArray(n))return e=Math.max(n.length,Ks.length),Array.from({length:e},(e,t)=>n[t])
throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof n}\``)}})(i),
"win32"===Ba.default.platform&&"cmd"===qa.default.basename(r,".exe")&&o.unshift("/q");const f={file:r,args:o,options:i,
parsed:a},p=(s=e,u=t,su(s,u).join(" ")),h=(c=e,l=t,su(c,l).map(e=>(e=>"string"!=typeof e||uu.test(e)?e:`"${e.replace(cu,
'\\"')}"`)(e)).join(" "));if(void 0!==(d=f.options.timeout)&&(!Number.isFinite(d)||d<0))throw new TypeError(
`Expected the \`timeout\` option to be a non-negative integer, got \`${d}\` (${typeof d})`);let g;try{
g=ka.default.spawn(f.file,f.args,f.options)}catch(e){return r=new ka.default.ChildProcess,o=Promise.reject(Js({error:e,
stdout:"",stderr:"",all:"",command:p,escapedCommand:h,parsed:f,timedOut:!1,isCanceled:!1,killed:!1})),au(r,o)}n=g,
i=new Promise((r,t)=>{n.on("exit",(e,t)=>{r({exitCode:e,signal:t})}),n.on("error",e=>{t(e)}),n.stdin&&n.stdin.on("error"
,e=>{t(e)})}),a=((n,{timeout:t,killSignal:o="SIGTERM"},e)=>{if(0===t||void 0===t)return e;let i;var r=new Promise((e,r
)=>{i=setTimeout(()=>{var e=o,t=r;n.kill(e),t(Object.assign(new Error("Timed out"),{timedOut:!0,signal:e}))},t)}),
e=e.finally(()=>{clearTimeout(i)});return Promise.race([r,e])})(g,f.options,i);const m=(async(e,{cleanup:t,detached:r},n
)=>{if(!t||r)return n;const o=ua(()=>{e.kill()});return n.finally(()=>{o()})})(g,f.options,a),v={isCanceled:!1};
return g.kill=((e,t="SIGTERM",r={})=>{var n,o=e(t),i=e;if([r,t,n]=[t,(e=r).forceKillAfterTimeout,o],(
r===Va.default.constants.signals.SIGTERM||"string"==typeof r&&"SIGTERM"===r.toUpperCase())&&!1!==t&&n){r=(({
forceKillAfterTimeout:e=!0})=>{if(!0===e)return 5e3;if(!Number.isFinite(e)||e<0)throw new TypeError(
`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);return e})(e);
const a=setTimeout(()=>{i("SIGKILL")},r);a.unref&&a.unref()}return o}).bind(null,g.kill.bind(g)),g.cancel=((e,t)=>{
e.kill()&&(t.isCanceled=!0)}).bind(null,g,v),s=Vs(async()=>{var[{error:e,exitCode:t,signal:r,timedOut:n},o,i,a]=await(
async({stdout:t,stderr:r,all:n},{encoding:o,buffer:e,maxBuffer:i},a)=>{var s=nu(t,{encoding:o,buffer:e,maxBuffer:i}),
u=nu(r,{encoding:o,buffer:e,maxBuffer:i}),o=nu(n,{encoding:o,buffer:e,maxBuffer:2*i});try{return await Promise.all([a,s,
u,o])}catch(e){return Promise.all([{error:e,signal:e.signal,timedOut:e.timedOut},ru(t,s),ru(r,u),ru(n,o)])}})(g,
f.options,m),o=lu(f.options,o),i=lu(f.options,i),a=lu(f.options,a);if(e||0!==t||null!==r){if(e=Js({error:e,exitCode:t,
signal:r,stdout:o,stderr:i,all:a,command:p,escapedCommand:h,parsed:f,timedOut:n,
isCanceled:v.isCanceled||!!f.options.signal&&f.options.signal.aborted,killed:g.killed}),f.options.reject)throw e;
return e}return{command:p,escapedCommand:h,exitCode:0,stdout:o,stderr:i,all:a,failed:!1,timedOut:!1,isCanceled:!1,
killed:!1}}),u=g,void 0!==(e=f.options.input)&&void 0!==u.stdin&&(
null!==e&&"object"==typeof e&&"function"==typeof e.pipe?e.pipe(u.stdin):u.stdin.end(e)),g.all=((e,{all:t})=>{if(t&&(
e.stdout||e.stderr)){const r=la();return e.stdout&&r.add(e.stdout),e.stderr&&r.add(e.stderr),r}})(g,f.options),au(g,s)}(
r,e));return{stdout:t,stderr:r}}function pe(e,t){return{name:"SIGRT"+(t+1),number:zs+t,action:"terminate",
description:"Application-specific signal (realtime)",standard:"posix"}}function he(){var e=65-zs,e=Array.from({length:e}
,pe);return[...Hs,...e].map(ye)}function ge(e,{name:t,number:r,description:n,supported:o,action:i,forced:a,standard:s}){
return b(b({},e),{},{[t]:{name:t,number:r,description:n,supported:o,action:i,forced:a,standard:s}})}function me(e){
return e&&"object"==typeof e&&"function"==typeof e.removeListener&&"function"==typeof e.emit&&"function"==typeof e.reallyExit&&"function"==typeof e.listeners&&"function"==typeof e.kill&&"number"==typeof e.pid&&"function"==typeof e.on
}function ve(e,t,r){if(t&&!Array.isArray(t)&&(r=t,t=null),e={command:e,args:t=t?t.slice(0):[],options:r=Object.assign({}
,r),file:void 0,original:{command:e,args:t}},r.shell)return e;if(t=e,!Cs)return t;if((r=t).file=js(r),e=(
e=r.file&&function(e){var t;const r=Buffer.alloc(150);try{t=Ps.openSync(e,"r"),Ps.readSync(t,r,0,150,0),Ps.closeSync(t)
}catch(e){}return xs(r.toString())}(r.file))?(r.args.unshift(r.file),r.command=e,js(r)):r.file,r=!Us.test(e),
t.options.forceShell||r){const n=Gs.test(e);t.command=Is.normalize(t.command),t.command=Ls.command(t.command),
t.args=t.args.map(e=>Ls.argument(e,n)),r=[t.command].concat(t.args).join(" "),t.args=["/d","/s","/c",`"${r}"`],
t.command=process.env.comspec||"cmd.exe",t.options.windowsVerbatimArguments=!0}return t}function ye({name:e,number:t,
description:r,action:n,forced:o=!1,standard:i}){var{signals:{[e]:a}}=La.constants,s=void 0!==a;return{name:e,
number:s?a:t,description:r,supported:s,action:n,forced:o,standard:i}}function be(e,t){for(var r=-1,n=null==e?0:e.length,
o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}function _e(e,t){return e===t||e!=e&&t!=t}function Ee(e,t){for(
var r=e.length;r--;)if(Ha(e[r][0],t))return r;return-1}var Oe,Re,we,Te,Se,Ae,Ne,Pe,xe,Ie,je,Le,Ce,Ue,Ge,Fe,Me,De,qe,ke,
Be,$e,Ve,ze,He,We,Je,Ke,Xe,Qe,Ye,Ze,et,tt,rt,nt,ot,it,at,st,ut,ct,lt,dt,ft,pt,ht,gt,mt,vt,a,yt,bt,_t,Et,Ot,Rt,wt,Tt,St,
At,Nt,Pt,xt,It,t,jt,Lt,Ct,Ut,Gt,Ft,Mt,Dt,qt,kt,Bt,$t,Vt,zt,Ht,Wt,Jt,Kt,Xt,Qt,Yt,Zt,er,tr,rr,nr,or,ir,ar,sr,ur,cr,lr,dr,
fr,pr,hr,gr,mr,vr,yr,br,_r,Er,Or,Rr,wr,Tr,Sr,Ar,Nr,Pr,xr,Ir,jr,Lr,Cr,Ur,Gr,Fr,Mr,Dr,qr,kr,Br,$r,Vr,zr,Hr,Wr,Jr,Kr,Xr,Qr,
Yr,Zr,en,tn,rn,nn,on,an,sn,un,cn,ln,dn,fn,r,pn,hn,gn,mn,vn,yn,bn,_n,En,On,Rn,wn,Tn,Sn,An,Nn,Pn,xn,In,jn,Ln,Cn,Un,Gn,Fn,
Mn,Dn,qn,kn,Bn,$n,Vn,zn,Hn,Wn,Jn,Kn,Xn,Qn,Yn,Zn,eo,to,ro,no,oo,io,ao,so,uo,co,lo,fo,po,ho,go,mo,vo,yo,bo,_o,Eo,Oo,Ro,wo,
To,So,Ao,No,Po,xo,Io,jo,Lo,Co,Uo,Go,Fo,Mo,Do,qo,ko,Bo,$o,Vo,zo,Ho,Wo,Jo,Ko,Xo,Qo,Yo,Zo,ei,ti,ri,ni,n,o,s,oi,ii,ai,si,ui,
ci,li,di,fi,pi,hi,gi,mi,vi,yi,bi,_i,Ei,Oi,Ri,wi,Ti,Si,Ai,Ni,Pi,xi,Ii,ji,Li,Ci,Ui,Gi,Fi,Mi,Di,qi,ki,u,c,l,Bi,$i,f,Vi,zi,p
,Hi,Wi,Ji,h,Ki,g,m,Xi,Qi,Yi,v,Zi,ea,ta,ra,na,oa,ia,aa,sa,ua,ca,la,y,_,da,fa,E,pa,O,R,ha,ga,w,T,S,A,ma,va,ya,N,ba,_a,Ea,
Oa,Ra,wa,Ta=require("fs"),Sa=require("path"),Aa=require("querystring"),Na=require("url"),Pa=require("node:buffer"),
xa=require("node:path"),Ia=require("node:child_process"),ja=require("node:process"),P=require("child_process"),
x=require("node:url"),La=require("os"),Ca=require("node:os"),Ua=require("assert"),I=require("events"),j=require("buffer"
),L=require("stream"),C=require("util"),Ga=e(Ta),Fa=e(Sa),Ma=F(Aa),Da=e(Na),qa=e(xa),ka=e(Ia),Ba=e(ja),Sa=e(P),$a=e(x),
Va=e(Ca),Aa=e(Ua),Na=e(I),xa=e(j),Ia=e(L),ja=e(C),
za="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
,Ha=_e,Wa=Ee,Ja=Array.prototype.splice,Ka=Ee,Xa=Ee,Qa=Ee;M.prototype.clear=function(){this.__data__=[],this.size=0},
M.prototype.delete=function(e){var t=this.__data__;return!((e=Wa(t,e))<0||(e==t.length-1?t.pop():Ja.call(t,e,1),
--this.size,0))},M.prototype.get=function(e){var t=this.__data__;return(e=Ka(t,e))<0?void 0:t[e][1]},
M.prototype.has=function(e){return-1<Xa(this.__data__,e)},M.prototype.set=function(e,t){var r=this.__data__,n=Qa(r,e);
return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},Oe=P=M,x=function(){this.__data__=new Oe,this.size=0},
Ca=function(e){var t=this.__data__,e=t.delete(e);return this.size=t.size,e},Ua=function(e){return this.__data__.get(e)},
I=function(e){return this.__data__.has(e)},j="object"==typeof za&&za&&za.Object===Object&&za,
L="object"==typeof self&&self&&self.Object===Object&&self,L=(C=j||L||Function("return this")()).Symbol,
h=Object.prototype,Re=h.hasOwnProperty,we=h.toString,Te=L?L.toStringTag:void 0,h=Object.prototype,Se=h.toString,
Ae=function(e){var t,r,n=Re.call(e,Te),o=e[Te];try{t=!(e[Te]=void 0)}catch(e){}return r=we.call(e),t&&(
n?e[Te]=o:delete e[Te]),r},Ne=function(e){return Se.call(e)},Pe=L?L.toStringTag:void 0,Ie=h=function(e){
return null==e?void 0===e?"[object Undefined]":"[object Null]":(Pe&&Pe in Object(e)?Ae:Ne)(e)},je=xe=function(e){
var t=typeof e;return null!=e&&("object"==t||"function"==t)},Le=function(e){return!!je(e)&&("[object Function]"==(e=Ie(e
))||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e)},y=C["__core-js_shared__"],
y=/[^.]+$/.exec(y&&y.keys&&y.keys.IE_PROTO||""),Ce=y?"Symbol(src)_1."+y:"",y=Function.prototype,Ue=y.toString,Ge=Le,
Fe=function(e){return!!Ce&&Ce in e},Me=xe,De=y=function(e){if(null!=e){try{return Ue.call(e)}catch(e){}try{return e+""
}catch(e){}}return""},s=/[\\^$.*+?()[\]{}|]/g,qe=/^\[object .+?Constructor\]$/,A=Function.prototype,o=Object.prototype,
A=A.toString,o=o.hasOwnProperty,ke=RegExp("^"+A.call(o).replace(s,"\\$&").replace(
/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Be=function(e){return!(!Me(e)||Fe(e))&&(Ge(e
)?ke:qe).test(De(e))},$e=function(e,t){return null==e?void 0:e[t]},o=(A=function(e,t){return e=$e(e,t),Be(e)?e:void 0})(
C,"Map"),s=A(Object,"create"),ze=Ve=s,r=Object.prototype,He=r.hasOwnProperty,We=s,r=Object.prototype,Je=r.hasOwnProperty
,Ke=s,r=function(e){return e=this.has(e)&&delete this.__data__[e],this.size-=e?1:0,e},s=function(e){var t,
r=this.__data__;return ze?"__lodash_hash_undefined__"===(t=r[e])?void 0:t:He.call(r,e)?r[e]:void 0},n=function(e){
var t=this.__data__;return We?void 0!==t[e]:Je.call(t,e)},S=function(e,t){var r=this.__data__;
return this.size+=this.has(e)?0:1,r[e]=Ke&&void 0===t?"__lodash_hash_undefined__":t,this},D.prototype.clear=function(){
this.__data__=Ve?Ve(null):{},this.size=0},D.prototype.delete=r,D.prototype.get=s,D.prototype.has=n,D.prototype.set=S,
Xe=D,Qe=P,Ye=o,Ze=function(e){var t=typeof e;
return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e},nt=rt=tt=et=function(e,t){
return e=e.__data__,Ze(t)?e["string"==typeof t?"string":"hash"]:e.map},r=function(e){return e=et(this,e).delete(e),
this.size-=e?1:0,e},s=function(e){return tt(this,e).get(e)},n=function(e){return rt(this,e).has(e)},S=function(e,t){
var r=nt(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},q.prototype.clear=function(){this.size=0,
this.__data__={hash:new Xe,map:new(Ye||Qe),string:new Xe}},q.prototype.delete=r,q.prototype.get=s,q.prototype.has=n,
q.prototype.set=S,it=o,at=r=q,st=ot=P,s=Ca,n=Ua,S=I,P=function(e,t){var r,n=this.__data__;if(n instanceof ot){if(
r=n.__data__,!it||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new at(r)}return n.set(e,t),
this.size=n.size,this},k.prototype.clear=x,k.prototype.delete=s,k.prototype.get=n,k.prototype.has=S,k.prototype.set=P,
Ca=k,ut=r,Ua=function(e){return this.__data__.has(e)},B.prototype.add=B.prototype.push=function(e){
return this.__data__.set(e,"__lodash_hash_undefined__"),this},B.prototype.has=Ua,ct=B,lt=I=function(e,t){for(var r=-1,
n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},dt=function(e,t){return e.has(t)},x=C.Uint8Array,ft=x,
pt=_e,ht=s=function(e,t,r,n,o,i){var a,s,u,c,l,d,f,p=1&r,h=e.length,g=t.length;if(h!=g&&!(p&&h<g))return!1;if(g=i.get(e)
,a=i.get(t),g&&a)return g==t&&a==e;for(s=-1,u=!0,c=2&r?new ct:void 0,i.set(e,t),i.set(t,e);++s<h;){if(l=e[s],d=t[s],
void 0!==(f=n?p?n(d,l,s,t,e,i):n(l,d,s,e,t,i):f)){if(f)continue;u=!1;break}if(c){if(!lt(t,function(e,t){if(!dt(c,t)&&(
l===e||o(l,e,r,n,i)))return c.push(t)})){u=!1;break}}else if(l!==d&&!o(l,d,r,n,i)){u=!1;break}}return i.delete(e),
i.delete(t),u},gt=function(e){var r=-1,n=Array(e.size);return e.forEach(function(e,t){n[++r]=[t,e]}),n},mt=n=function(e
){var t=-1,r=Array(e.size);return e.forEach(function(e){r[++t]=e}),r},S=L?L.prototype:void 0,vt=S?S.valueOf:void 0,
P=function(e,t,r,n,o,i,a){var s,u;switch(r){case"[object DataView]":if(
e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":
return!(e.byteLength!=t.byteLength||!i(new ft(e),new ft(t)));case"[object Boolean]":case"[object Date]":
case"[object Number]":return pt(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;
case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":s=gt;case"[object Set]":return s=s||mt,!!(
e.size==t.size||1&n)&&((u=a.get(e))?u==t:(n|=2,a.set(e,t),u=ht(s(e),s(t),n,o,i,a),a.delete(e),u));case"[object Symbol]":
if(vt)return vt.call(e)==vt.call(t)}return!1},Ua=function(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];
return e},x=Array.isArray,yt=Ua,bt=a=x,S=function(e,t,r){return t=t(e),bt(e)?t:yt(t,r(e))},_t=x=function(e,t){for(var r,
n=-1,o=null==e?0:e.length,i=0,a=[];++n<o;)t(r=e[n],n,e)&&(a[i++]=r);return a},T=Object.prototype,
Et=T.propertyIsEnumerable,T=(Ot=Object.getOwnPropertySymbols)?function(t){return null==t?[]:(t=Object(t),_t(Ot(t),
function(e){return Et.call(t,e)}))}:function(){return[]},Eo=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);
return n},Rt=h,w=function(e){return wt(e)&&"[object Arguments]"==Rt(e)},Tt=wt=ga=function(e){
return null!=e&&"object"==typeof e},p=Object.prototype,St=p.hasOwnProperty,At=p.propertyIsEnumerable,p=w(function(){
return arguments}())?w:function(e){return Tt(e)&&St.call(e,"callee")&&!At.call(e,"callee")},O=(ha=(ha=(O=(O=(w={
exports:{}}).exports)&&!O.nodeType&&O)&&w&&!w.nodeType&&w)&&ha.exports===O?C.Buffer:void 0)?ha.isBuffer:void 0,
w.exports=O||function(){return!1},Nt=/^(?:0|[1-9]\d*)$/,ha=function(e,t){var r=typeof e;return!!(
t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&Nt.test(e))&&-1<e&&e%1==0&&e<t},Pt=h,xt=O=function(e){
return"number"==typeof e&&-1<e&&e%1==0&&e<=9007199254740991},It=ga,(t={}
)["[object Float32Array]"]=t["[object Float64Array]"]=t["[object Int8Array]"]=t["[object Int16Array]"]=t["[object Int32Array]"]=t["[object Uint8Array]"]=t["[object Uint8ClampedArray]"]=t["[object Uint16Array]"]=t["[object Uint32Array]"]=!0
,
t["[object Arguments]"]=t["[object Array]"]=t["[object ArrayBuffer]"]=t["[object Boolean]"]=t["[object DataView]"]=t["[object Date]"]=t["[object Error]"]=t["[object Function]"]=t["[object Map]"]=t["[object Number]"]=t["[object Object]"]=t["[object RegExp]"]=t["[object Set]"]=t["[object String]"]=t["[object WeakMap]"]=!1
,N=function(e){return It(e)&&xt(e.length)&&!!t[Pt(e)]},pa=function(t){return function(e){return t(e)}},E=(E=(_=jt={
exports:{}}).exports)&&!E.nodeType&&E,E=(da=E&&_&&!_.nodeType&&_)&&da.exports===E,fa=E&&j.process,E=function(){try{
return da&&da.require&&da.require("util").types||fa&&fa.binding&&fa.binding("util")}catch(e){}}(),_.exports=E,E=(_=(
j=jt.exports)&&j.isTypedArray)?pa(_):N,Lt=Eo,Ct=p,Ut=a,Gt=w.exports,Ft=ha,Mt=j=E,_=Object.prototype,Dt=_.hasOwnProperty,
qt=Object.prototype,_a=Object.keys,Ea=Object,kt=function(e){var t=e&&e.constructor;return e===(
"function"==typeof t&&t.prototype||qt)},Bt=function(e){return _a(Ea(e))},N=Object.prototype,$t=N.hasOwnProperty,Vt=Le,
zt=O,Ht=function(e,t){var r,n=Ut(e),o=!n&&Ct(e),i=!n&&!o&&Gt(e),a=!n&&!o&&!i&&Mt(e),s=n||o||i||a,u=s?Lt(e.length,String
):[],c=u.length;for(r in e)!t&&!Dt.call(e,r)||s&&("length"==r||i&&("offset"==r||"parent"==r)||a&&(
"buffer"==r||"byteLength"==r||"byteOffset"==r)||Ft(r,c))||u.push(r);return u},Wt=function(e){var t,r;if(!kt(e)
)return Bt(e);for(r in t=[],Object(e))$t.call(e,r)&&"constructor"!=r&&t.push(r);return t},Jt=Eo=function(e){
return null!=e&&zt(e.length)&&!Vt(e)},Kt=S,Xt=T,Qt=E=function(e){return(Jt(e)?Ht:Wt)(e)},Yt=function(e){return Kt(e,Qt,
Xt)},_=Object.prototype,Zt=_.hasOwnProperty,N=function(e,t,r,n,o,i){var a,s,u,c,l,d,f,p,h,g=1&r,m=Yt(e),v=m.length;if(
v!=Yt(t).length&&!g)return!1;for(a=v;a--;)if(s=m[a],!(g?s in t:Zt.call(t,s)))return!1;if(p=i.get(e),h=i.get(t),p&&h
)return p==t&&h==e;for(u=!0,i.set(e,t),i.set(t,e),c=g;++a<v;){if(l=e[s=m[a]],d=t[s],!(void 0===(f=n?g?n(d,l,s,t,e,i):n(l
,d,s,e,t,i):f)?l===d||o(l,d,r,n,i):f)){u=!1;break}c=c||"constructor"==s}return u&&!c&&(p=e.constructor)!=(
h=t.constructor)&&"constructor"in e&&"constructor"in t&&!(
"function"==typeof p&&p instanceof p&&"function"==typeof h&&h instanceof h)&&(u=!1),i.delete(e),i.delete(t),u},S=A(C,
"DataView"),T=o,_=A(C,"Promise"),g=o=A(C,"Set"),C=A(C,"WeakMap"),er=h,rr=(tr=y)(y=S),nr=tr(T),or=tr(_),ir=tr(g),ar=tr(C)
,S=er,(y&&"[object DataView]"!=S(new y(new ArrayBuffer(1)))||T&&"[object Map]"!=S(new T)||_&&"[object Promise]"!=S(
_.resolve())||g&&"[object Set]"!=S(new g)||C&&"[object WeakMap]"!=S(new C))&&(S=function(e){var t=er(e);if(e=(
e="[object Object]"==t?e.constructor:void 0)?tr(e):"")switch(e){case rr:return"[object DataView]";case nr:
return"[object Map]";case or:return"[object Promise]";case ir:return"[object Set]";case ar:return"[object WeakMap]"}
return t}),sr=Ca,ur=s,cr=P,lr=N,dr=S,fr=a,pr=w.exports,hr=j,gr="[object Arguments]",mr="[object Array]",
vr="[object Object]",y=Object.prototype,yr=y.hasOwnProperty,br=function(e,t,r,n,o,i){var a=fr(e),s=fr(t),u=a?mr:dr(e),
s=s?mr:dr(t),c=(u=u==gr?vr:u)==vr,l=(s=s==gr?vr:s)==vr;if((s=u==s)&&pr(e)){if(!pr(t))return!1;c=!(a=!0)}return s&&!c?(
i=i||new sr,a||hr(e)?ur(e,t,r,n,o,i):cr(e,t,u,r,n,o,i)):1&r||(a=c&&yr.call(e,"__wrapped__"),u=l&&yr.call(t,"__wrapped__"
),!a&&!u)?s&&(i=i||new sr,lr(e,t,r,n,o,i)):o(a?e.value():e,u?t.value():t,r,n,i=i||new sr)},Er=Ca,Or=T=function e(t,r,n,o
,i){return t===r||(null==t||null==r||!_r(t)&&!_r(r)?t!=t&&r!=r:br(t,r,n,o,e,i))},Rr=xe,wr=_=function(e){
return e==e&&!Rr(e)},Tr=E,Sr=function(e,t,r,n){var o,i,a,s,u,c,l=r.length,d=l,f=!n;if(null==e)return!d;for(e=Object(e
);l--;)if(o=r[l],f&&o[2]?o[1]!==e[o[0]]:!(o[0]in e))return!1;for(;++l<d;)if(a=e[i=(o=r[l])[0]],s=o[1],f&&o[2]){if(
void 0===a&&!(i in e))return!1}else if(u=new Er,!(void 0===(c=n?n(a,s,i,e,t,u):c)?Or(s,a,3,n,u):c))return!1;return!0},
Ar=function(e){for(var t,r,n=Tr(e),o=n.length;o--;)r=e[t=n[o]],n[o]=[t,r,wr(r)];return n},Nr=g=function(t,r){
return function(e){return null!=e&&e[t]===r&&(void 0!==r||t in Object(e))}},C=function(t){var r=Ar(t);
return 1==r.length&&r[0][2]?Nr(r[0][0],r[0][1]):function(e){return e===t||Sr(e,t,r)}},Pr=h,xr=_r=ga,Ir=a,jr=s=function(e
){return"symbol"==typeof e||xr(e)&&"[object Symbol]"==Pr(e)},Lr=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
Cr=/^\w*$/,P=function(e,t){if(Ir(e))return!1;var r=typeof e;return!(
"number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!jr(e))||Cr.test(e)||!Lr.test(e)||null!=t&&e in Object(t)},Ur=r,
$.Cache=Ur,Gr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
Fr=/\\(\\)?/g,ba=(N=$(function(e){var o=[];return 46===e.charCodeAt(0)&&o.push(""),e.replace(Gr,function(e,t,r,n){
o.push(r?n.replace(Fr,"$1"):t||e)}),o},function(e){return 500===ba.size&&ba.clear(),e})).cache,Mr=be,Dr=a,qr=s,
S=L?L.prototype:void 0,kr=S?S.toString:void 0,Br=w=function e(t){if("string"==typeof t)return t;if(Dr(t))return Mr(t,e
)+"";if(qr(t))return kr?kr.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},zr=N,Hr=j=function(e){
return null==e?"":Br(e)},Wr=s,Qr=Jr=function(e,t){return $r(e)?e:Vr(e,t)?[e]:zr(Hr(e))},Yr=p,tn=O,nn=function(e,t){
return null!=e&&t in Object(e)},on=y=function(e,t,r){for(var n,o,i=(t=Qr(t,e)).length,a=!(n=-1);++n<i&&(o=rn(t[n]),
a=null!=e&&r(e,o));)e=e[o];return a||++n!=i?a:!!(i=null==e?0:e.length)&&tn(i)&&en(o,i)&&(Zr(e)||Yr(e))},an=T,
sn=function(e,t,r){return void 0===(e=null==e?void 0:Xr(e,t))?r:e},un=function(e,t){return null!=e&&on(e,t,nn)},ln=_,
dn=g,pn=Xr=Ca=function(e,t){for(var r=0,n=(t=Jr(t,e)).length;null!=e&&r<n;)e=e[Kr(t[r++])];return r&&r==n?e:void 0},
hn=function(t){return function(e){return null==e?void 0:e[t]}},gn=function(t){return function(e){return pn(e,t)}},
mn=cn=Vr=P,vn=fn=rn=Kr=function(e){if("string"==typeof e||Wr(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},yn=C
,bn=function(r,n){return cn(r)&&ln(n)?dn(fn(r),n):function(e){var t=sn(e,r);return void 0===t&&t===n?un(e,r):an(n,t,3)}}
,_n=r=function(e){return e},En=Zr=$r=a,On=function(e){return mn(e)?hn(vn(e)):gn(e)},Rn=function(e,t,r){for(var n,o=-1,
i=Object(e),a=r(e),s=a.length;s--&&!1!==t(i[n=a[++o]],n,i););return e},wn=E,Nn=be,xn=S=function(e,n){var o=-1,i=An(e
)?Array(e.length):[];return Sn(e,function(e,t,r){i[++o]=n(e,t,r)}),i},jn=function(e,t){return(In(e)?Nn:xn)(e,Pn(t))},
Cn=_e,Un=An=Tn=Eo,Gn=en=ha,Fn=xe,Mn=I,qn=function(e,n){var o;return Ln(e,function(e,t,r){return!(o=n(e,t,r))}),!!o},
$n=function(e,t,r){var n=kn(e)?Mn:qn;return r&&Bn(e,t,r)&&(t=void 0),n(e,Dn(t))},Vn=Ln=Sn=N=function(e,t){if(null==e
)return e;if(!Tn(e))return e&&Rn(e,t,wn);for(var r=e.length,n=-1,o=Object(e);++n<r&&!1!==t(o[n],n,o););return e},
zn=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(!t(e[r],r,e))return!1;return!0},Hn=function(e,n){var o=!0;
return Vn(e,function(e,t,r){return o=!!n(e,t,r)}),o},Wn=Dn=Pn=O=function(e){
return"function"==typeof e?e:null==e?_n:"object"==typeof e?En(e)?bn(e[0],e[1]):yn(e):On(e)},Jn=kn=In=a,Kn=Bn=T=function(
e,t,r){if(!Fn(r))return!1;var n=typeof t;return!!("number"==n?Un(r)&&Gn(t,r.length):"string"==n&&t in r)&&Cn(r[t],e)},
Xn=function(e,t,r){var n=Jn(e)?zn:Hn;return r&&Kn(e,t,r)&&(t=void 0),n(e,Wn(t))},Qn=A,_=function(){try{var e=Qn(Object,
"defineProperty");return e({},"",{}),e}catch(e){}}(),Yn=p,Zn=a,eo=L?L.isConcatSpreadable:void 0,ro=function(e){
return Zn(e)||Yn(e)||!!(eo&&e&&e[eo])},no=to=Ua,oo=g=function e(t,r,n,o,i){var a,s=-1,u=t.length;for(n=n||ro,i=i||[
];++s<u;)a=t[s],0<r&&n(a)?1<r?e(a,r-1,n,o,i):to(i,a):o||(i[i.length]=a);return i},io=function(e,t){var r=-1,n=e.length;
for(t=t||Array(n);++r<n;)t[r]=e[r];return t},ao=a,so=function(){var e,t,r,n=arguments.length;if(!n)return[];for(e=Array(
n-1),t=arguments[0],r=n;r--;)e[r-1]=arguments[r];return no(ao(t)?io(t):[t],oo(e,1))},uo=/\s/,co=function(e){for(
var t=e.length;t--&&uo.test(e.charAt(t)););return t},lo=/^\s+/,fo=P=function(e){return e&&e.slice(0,co(e)+1).replace(lo,
"")},po=xe,ho=s,go=/^[-+]0x[0-9a-f]+$/i,mo=/^0b[01]+$/i,vo=/^0o[0-7]+$/i,yo=parseInt,bo=function(e){var t;
return"number"==typeof e?e:ho(e)?NaN:(po(e)&&(t="function"==typeof e.valueOf?e.valueOf():e,e=po(t)?t+"":t),
"string"!=typeof e?0===e?e:+e:(e=fo(e),(t=mo.test(e))||vo.test(e)?yo(e.slice(2),t?2:8):go.test(e)?NaN:+e))},_o=function(
e){return e?(e=bo(e))===1/0||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0},C=function(e){var t=(e=_o(e)
)%1;return e==e?t?e-t:e:0},Eo=function(e,t,r){var n,o=-1,i=e.length;for((r=i<r?i:r)<0&&(r+=i),i=r<(t=t<0?i<-t?0:i+t:t
)?0:r-t>>>0,t>>>=0,n=Array(i);++o<i;)n[o]=e[o+t];return n},Oo=function(e,t,r,n){for(var o=e.length,i=r+(n?1:-1
);n?i--:++i<o;)if(t(e[i],i,e))return i;return-1},Ro=function(e){return e!=e},wo=function(e,t,r){for(var n=r-1,
o=e.length;++n<o;)if(e[n]===t)return n;return-1},ha=function(e,t,r){return t==t?wo(e,t,r):Oo(e,Ro,r)},o&&n(new o([,-0])
)[1],To=s,So=function(e,t){var r,n,o,i,a,s,u,c;if(e!==t){if(r=void 0!==e,n=null===e,o=e==e,i=To(e),a=void 0!==t,
s=null===t,u=t==t,c=To(t),!s&&!c&&!i&&t<e||i&&a&&u&&!s&&!c||n&&a&&u||!r&&u||!o)return 1;if(
!n&&!i&&!c&&e<t||c&&r&&o&&!n&&!i||s&&r&&o||!a&&o||!u)return-1}return 0},Ao=be,No=Ca,Po=O,xo=S,Io=function(e,t){
var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e},jo=pa,Lo=function(e,t,r){for(var n,o=-1,i=e.criteria,
a=t.criteria,s=i.length,u=r.length;++o<s;)if(n=So(i[o],a[o]))return u<=o?n:n*("desc"==r[o]?-1:1);return e.index-t.index}
,Co=r,Uo=a,Go=function(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:
return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)},Fo=Math.max,Mo=function(e){
return function(){return e}},I=(Do=_)?function(e,t){return Do(e,"toString",{configurable:!0,enumerable:!1,value:Mo(t),
writable:!0})}:r,qo=Date.now,ma=I,ko=g,Bo=function(e,n,r){var o;return n=n.length?Ao(n,function(t){return Uo(t
)?function(e){return No(e,1===t.length?t[0]:t)}:t}):[Co],o=-1,n=Ao(n,jo(Po)),e=xo(e,function(t,e,r){return{criteria:Ao(n
,function(e){return e(t)}),index:++o,value:t}}),Io(e,function(e,t){return Lo(e,t,r)})},$o=T,function(){var e=qo(),
t=16-e+ +ya;if(ya=e,0<t){if(800<=++va)return}else va=0;ma.apply(void 0,arguments)}((Oa=A=function(e,t){if(null==e
)return[];var r=t.length;return 1<r&&$o(e,t[0],t[1])?t=[]:2<r&&$o(t[0],t[1],t[2])&&(t=[t[0]]),Bo(e,ko(t,1),[])},Ra=void(
ya=va=0),wa=r,Ra=Fo(void 0===Ra?Oa.length-1:Ra,0),function(){for(var e,t=arguments,r=-1,n=Fo(t.length-Ra,0),o=Array(n
);++r<n;)o[r]=t[Ra+r];for(r=-1,e=Array(Ra+1);++r<Ra;)e[r]=t[r];return e[Ra]=wa(o),Go(Oa,this,e)}),A+""),zo=x,
Ho=function(e,n){var o=[];return Vo(e,function(e,t,r){n(e,t,r)&&o.push(e)}),o},Wo=O,Ko=function(e,t){return(Jo(e)?zo:Ho
)(e,Wo(t))},Xo=r,Qo=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e},Yo=Vo=N,
Zo=function(e){return"function"==typeof e?e:Xo},ei=Jo=a,ti=function(e,t){return(ei(e)?Qo:Yo)(e,Zo(t))},ri=Eo,p=function(
e,t,r){var n=e.length;return r=void 0===r?n:r,!t&&n<=r?e:ri(e,t,r)},ni=RegExp(
"[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),L=function(e){return ni.test(e)},
(Ua=jt.exports)&&Ua.isRegExp,n=function(e){return e.split("")},
o="[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:"+[
"[^\\ud800-\\udfff]","(?:\\ud83c[\\udde6-\\uddff]){2}","[\\ud800-\\udbff][\\udc00-\\udfff]"].join("|"
)+")[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?)*",s="(?:"+[
"[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]?","[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
"(?:\\ud83c[\\udde6-\\uddff]){2}","[\\ud800-\\udbff][\\udc00-\\udfff]","[\\ud800-\\udfff]"].join("|")+")",oi=RegExp(
"\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|"+s+o,"g"),ii=n,ai=L,si=function(e){return e.match(oi)||[]},
ci=ui=ha,li=w,di=P,fi=p,pi=function(e,t){for(var r=e.length;r--&&-1<ui(t,e[r],0););return r},hi=function(e,t){for(
var r=-1,n=e.length;++r<n&&-1<ci(t,e[r],0););return r},gi=function(e){return(ai(e)?si:ii)(e)},mi=j,vi=function(e,t,r){
return(e=mi(e))&&(r||void 0===t)?di(e):e&&(t=li(t))?(r=gi(e),e=gi(t),t=hi(r,e),e=pi(r,e)+1,fi(r,t,e).join("")):e},
Ca=Object.prototype,yi=Ca.hasOwnProperty,bi=function(e,t){return null!=e&&yi.call(e,t)},_i=y,Ei=function(e,t){
return null!=e&&_i(e,t,bi)},wi=function(e){return!0===e||!1===e||Ri(e)&&"[object Boolean]"==Oi(e)},Ti=function(e){
return null===e},Ai=a,Pi=function(e){return"string"==typeof e||!Ai(e)&&Ni(e)&&"[object String]"==Si(e)},xi=Si=Oi=h,
Ii=Ni=Ri=ga,ji=function(e){return"number"==typeof e||Ii(e)&&"[object Number]"==xi(e)},Li=function(e,t,r){return e==e&&(
void 0!==r&&(e=e<=r?e:r),void 0!==t&&(e=t<=e?e:t)),e},Ci=w,Ui=C,Gi=j,Fi=function(e,t,r){return e=Gi(e),r=null==r?0:Li(
Ui(r),0,e.length),t=Ci(t),e.slice(r,r+t.length)==t},Mi=be,Di=function(t,e){return Mi(e,function(e){return t[e]})},qi=E,
ki=function(e){return null==e?[]:Di(e,qi(e))};class Ya{constructor(e,t){i(this,"_logger",void 0),i(this,"name",void 0),
i(this,"_level",void 0),this.name=e,this._logger=t,this._level=void 0}getLogLevel(){var e;return null!=(e=this._level
)?e:this._logger.getLogLevel()}setLogLevel(e){return this._level=e,this}debug(...e){(
void 0===this._level||this._level<=c.DEBUG)&&this._logger.debug(`[${this.name}]`,...e)}info(...e){(
void 0===this._level||this._level<=c.INFO)&&this._logger.info(`[${this.name}]`,...e)}warn(...e){(
void 0===this._level||this._level<=c.WARN)&&this._logger.warn(`[${this.name}]`,...e)}error(...e){(
void 0===this._level||this._level<=c.ERROR)&&this._logger.error(`[${this.name}]`,...e)}}class Za{static setLogLevel(e){
return e&&(this._level=e),this}static getLogLevel(){return this._level}static getLogLevelString(){var e=this._level;
switch(e){case u.DEBUG:return"DEBUG";case u.INFO:return"INFO";case u.WARN:return"WARN";case u.ERROR:return"ERROR";
case u.NONE:return"NONE";default:return"Unknown:"+e}}static setLogger(e){if(!e)throw new TypeError(
"The logger was not defined");this._logger=e}static debug(...e){this._level<=c.DEBUG&&this._logger.debug(...e)}
static info(...e){this._level<=c.INFO&&this._logger.info(...e)}static warn(...e){this._level<=c.WARN&&this._logger.warn(
...e)}static error(...e){this._level<=c.ERROR&&this._logger.error(...e)}static createLogger(e){return new Ya(e,Za)}}i(Za
,"Level",c=u={DEBUG:0,0:"DEBUG",INFO:1,1:"INFO",WARN:2,2:"WARN",ERROR:3,3:"ERROR",NONE:4,4:"NONE"}),i(Za,"_level",
c.DEBUG),i(Za,"_logger",console);const es=Za.createLogger("ProcessUtils");class ts{static getArguments(){
return process.argv.slice(2)}static parseEnvFileLine(e,t){if(t.indexOf("=")<0)return t.length&&(e[t]=""),e;
const r=t.split("=");return t=r.shift(),(t=vi(t)).length&&(e[t]=r.join("=").trim()),e}static parseEnvFile(e){
const t=Ga.default.readFileSync(e,{encoding:"utf-8"}),r=t.split("\n");return r.reduce(ts.parseEnvFileLine,{})}
static initEnvFromFile(e){e=ts.parseEnvFile(e),process.env=d(d({},e),process.env)}static initEnvFromDefaultFiles(){
var e=Fa.default.join(process.cwd(),".env");Ga.default.existsSync(e)&&ts.initEnvFromFile(e)}static setupDestroyHandler(r
,n){let o=!1;var e=t=>e=>{ts._printErrors(t,e);try{if(o)return;o=!0,r()}catch(e){n(e)}};process.on("exit",e("exit")),
process.on("SIGTERM",e("SIGTERM")),process.on("SIGINT",e("SIGINT")),process.on("SIGUSR1",e("SIGUSR1")),process.on(
"SIGUSR2",e("SIGUSR2")),process.on("uncaughtException",e("uncaughtException"))}static _printErrors(e,t){try{t?es.error(
`Closing process because "${e}" event: `,t):"exit"===e?es.debug(`Closing process because "${e}" event`):es.info(
`Closing process because "${e}" event`)}catch(e){console.error("Error while printing errors: ",e)}}}Z("0.0.2"),
pa=null!=(S=Z(""))?S:"hgm",I=null!=(_=Z(""))?_:"",Z("production"),Z("2022-03-05T10:23:20.538Z"),"".startsWith("%{"
)&&"".endsWith("}"),O=null!=(x=function(e){if(e){if(function(){switch(e){case u.DEBUG:case u.INFO:case u.WARN:
case u.ERROR:case u.NONE:return 1;default:return}}())return e;switch(e=(""+e).toUpperCase()){case"ALL":case"DEBUG":
return u.DEBUG;case"INFO":return u.INFO;case"WARN":case"WARNING":return u.WARN;case"ERR":case"ERROR":return u.ERROR;
case"FALSE":case"OFF":case"QUIET":case"SILENT":case"NONE":return u.NONE;default:return}}}(null!=(A=Q(null==(g=process
)||null==(T=g.env)?void 0:T.LOG_LEVEL))?A:Q(I)))?x:u.INFO;const rs=null!=(Eo=Q(null==(r=process)||null==(N=r.env
)?void 0:N.COMMAND_NAME))?Eo:pa,ns="git@github.com",os=(Bi=l={OK:0,0:"OK",GENERAL_ERRORS:1,1:"GENERAL_ERRORS",
MISUSE_OF_SHELL_BUILTINS:2,2:"MISUSE_OF_SHELL_BUILTINS",ARGUMENT_PARSE_ERROR:3,3:"ARGUMENT_PARSE_ERROR",
UNKNOWN_ARGUMENT:4,4:"UNKNOWN_ARGUMENT",UNIMPLEMENTED_FEATURE:5,5:"UNIMPLEMENTED_FEATURE",FATAL_ERROR:6,6:"FATAL_ERROR",
CONFLICT:7,7:"CONFLICT",USAGE:64,64:"USAGE",DATAERR:65,65:"DATAERR",NOINPUT:66,66:"NOINPUT",NOUSER:67,67:"NOUSER",
NOHOST:68,68:"NOHOST",UNAVAILABLE:69,69:"UNAVAILABLE",SOFTWARE:70,70:"SOFTWARE",OSERR:71,71:"OSERR",OSFILE:72,
72:"OSFILE",CANTCREAT:73,73:"CANTCREAT",IOERR:74,74:"IOERR",TEMPFAIL:75,75:"TEMPFAIL",PROTOCOL:76,76:"PROTOCOL",
NOPERM:77,77:"NOPERM",CONFIG:78,78:"CONFIG",COMMAND_INVOKED_CANNOT_EXECUTE:126,126:"COMMAND_INVOKED_CANNOT_EXECUTE",
COMMAND_NOT_FOUND:127,127:"COMMAND_NOT_FOUND",INVALID_ARGUMENT_TO_EXIT:128,128:"INVALID_ARGUMENT_TO_EXIT",
FATAL_SIGNAL_RANGE_START:129,129:"FATAL_SIGNAL_RANGE_START",FATAL_SIGNAL_RANGE_END:254,254:"FATAL_SIGNAL_RANGE_END",
EXIT_STATUS_OUT_OF_RANGE:255,255:"EXIT_STATUS_OUT_OF_RANGE"},R=$i={OPTIONS:0,0:"OPTIONS",GET:1,1:"GET",POST:2,2:"POST",
PUT:3,3:"PUT",DELETE:4,4:"DELETE",PATCH:5,5:"PATCH"},"WINDOW"===(ha=null!=(L=null!=(s=null==(jt=process)||null==(
Ua=jt.env)?void 0:Ua.NOR_REQUEST_CLIENT_MODE)?s:null==(o=process)||null==(n=o.env
)?void 0:n.REACT_APP_REQUEST_CLIENT_MODE)?L:"")||!("undefined"==typeof window||!window.fetch)),is="NODE"===ha||!os;
class as{static async getRequestDataAsBuffer(n){return new Promise((e,t)=>{const r=[];n.on("data",e=>{try{r.push(e)
}catch(e){t(e)}}),n.on("end",()=>{try{e(Buffer.concat(r))}catch(e){t(e)}})})}static async getRequestDataAsString(e,
t="utf8"){const r=await as.getRequestDataAsBuffer(e);return r.toString(t)}static async getRequestDataAsFormUrlEncoded(e
){if(""!==(e=await as.getRequestDataAsString(e)))return Ma.parse(e)}static async getRequestDataAsJson(e){if(""!==(
e=await as.getRequestDataAsString(e)))return JSON.parse(e)}}(P=f={Continue:100,100:"Continue",SwitchingProtocols:101,
101:"SwitchingProtocols",Processing:102,102:"Processing",CheckPoint:103,103:"CheckPoint",OK:200,200:"OK",Created:201,
201:"Created",Accepted:202,202:"Accepted",NonAuthoritativeInformation:203,203:"NonAuthoritativeInformation",
NoContent:204,204:"NoContent",ResetContent:205,205:"ResetContent",PartialContent:206,206:"PartialContent",
MultiStatus:207,207:"MultiStatus",AlreadyReported:208,208:"AlreadyReported",IMUsed:226,226:"IMUsed",MultipleChoices:300,
300:"MultipleChoices",MovedPermanently:301,301:"MovedPermanently",Found:302,302:"Found",SeeOther:303,303:"SeeOther",
NotModified:304,304:"NotModified",TemporaryRedirect:307,307:"TemporaryRedirect",PermanentRedirect:308,
308:"PermanentRedirect",BadRequest:400,400:"BadRequest",Unauthorized:401,401:"Unauthorized",PaymentRequired:402,
402:"PaymentRequired",Forbidden:403,403:"Forbidden",NotFound:404,404:"NotFound",MethodNotAllowed:405,
405:"MethodNotAllowed",NotAcceptable:406,406:"NotAcceptable",ProxyAuthenticationRequired:407,
407:"ProxyAuthenticationRequired",RequestTimeout:408,408:"RequestTimeout",Conflict:409,409:"Conflict",Gone:410,
410:"Gone",LengthRequired:411,411:"LengthRequired",PreconditionFailed:412,412:"PreconditionFailed",PayloadTooLarge:413,
413:"PayloadTooLarge",URITooLong:414,414:"URITooLong",UnsupportedMediaType:415,415:"UnsupportedMediaType",
RequestedRangeNotSatisfiable:416,416:"RequestedRangeNotSatisfiable",ExpectationFailed:417,417:"ExpectationFailed",
IAmATeapot:418,418:"IAmATeapot",UnprocessableEntity:422,422:"UnprocessableEntity",Locked:423,423:"Locked",
FailedDependency:424,424:"FailedDependency",TooEarly:425,425:"TooEarly",UpgradeRequired:426,426:"UpgradeRequired",
PreconditionRequired:428,428:"PreconditionRequired",TooManyRequests:429,429:"TooManyRequests",
RequestHeaderFieldsTooLarge:431,431:"RequestHeaderFieldsTooLarge",UnavailableForLegalReasons:451,
451:"UnavailableForLegalReasons",InternalError:500,500:"InternalError",InternalServerError:500}
)[500]="InternalServerError",P[P.NotImplemented=501]="NotImplemented",P[P.BadGateway=502]="BadGateway",
P[P.ServiceUnavailable=503]="ServiceUnavailable",P[P.GatewayTimeout=504]="GatewayTimeout",
P[P.HttpVersionNotSupported=505]="HttpVersionNotSupported",P[P.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",
P[P.InsufficientStorage=507]="InsufficientStorage",P[P.LoopDetected=508]="LoopDetected",
P[P.BandwidthLimitExceeded=509]="BandwidthLimitExceeded",P[P.NotExtended=510]="NotExtended",
P[P.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",Vi={ERROR:"error"};class ss extends Error{
constructor(e,t=void 0,r=void 0,n=void 0,o=void 0){super(t||function(e){switch(e){case f.Continue:return"Continue";
case f.SwitchingProtocols:return"Switching Protocols";case f.Processing:return"Processing";case f.CheckPoint:
return"Check Point";case f.OK:return"OK";case f.Created:return"Created";case f.Accepted:return"Accepted";
case f.NonAuthoritativeInformation:return"Non-Authoritative Information";case f.NoContent:return"No Content";
case f.ResetContent:return"Reset Content";case f.PartialContent:return"Partial Content";case f.MultiStatus:
return"Multi Status";case f.AlreadyReported:return"Already Reported";case f.IMUsed:return"IM Used";
case f.MultipleChoices:return"Multiple Choices";case f.MovedPermanently:return"Moved Permanently";case f.Found:
return"Found";case f.SeeOther:return"See Other";case f.NotModified:return"Not Modified";case f.TemporaryRedirect:
return"Temporary Redirect";case f.PermanentRedirect:return"Permanent Redirect";case f.BadRequest:return"Bad Request";
case f.Unauthorized:return"Unauthorized";case f.PaymentRequired:return"Payment Required";case f.Forbidden:
return"Forbidden";case f.NotFound:return"Not Found";case f.MethodNotAllowed:return"Method Not Allowed";
case f.NotAcceptable:return"Not Acceptable";case f.ProxyAuthenticationRequired:return"Proxy Authentication Required";
case f.RequestTimeout:return"Request Timeout";case f.Conflict:return"Conflict";case f.Gone:return"Gone";
case f.LengthRequired:return"Length Required";case f.PreconditionFailed:return"Precondition Failed";
case f.PayloadTooLarge:return"Payload Too Large";case f.URITooLong:return"URI Too Long";case f.UnsupportedMediaType:
return"Unsupported Media Type";case f.RequestedRangeNotSatisfiable:return"Requested Range Not Satisfiable";
case f.ExpectationFailed:return"Expectation Failed";case f.IAmATeapot:return"I Am a Teapot";case f.UnprocessableEntity:
return"Unprocessable Entity";case f.Locked:return"Locked";case f.FailedDependency:return"Failed Dependency";
case f.TooEarly:return"Too Early";case f.UpgradeRequired:return"Upgrade Required";case f.PreconditionRequired:
return"Precondition Required";case f.TooManyRequests:return"Too Many Requests";case f.RequestHeaderFieldsTooLarge:
return"Request Header Fields Too Large";case f.UnavailableForLegalReasons:return"Unavailable For Legal Reasons";
case f.InternalServerError:return"Internal Server Error";case f.NotImplemented:return"Not Implemented";
case f.BadGateway:return"Bad Gateway";case f.ServiceUnavailable:return"Service Unavailable";case f.GatewayTimeout:
return"Gateway Timeout";case f.HttpVersionNotSupported:return"Http Version Not Supported";case f.VariantAlsoNegotiates:
return"Variant Also Negotiates";case f.InsufficientStorage:return"Insufficient Storage";case f.LoopDetected:
return"Loop Detected";case f.BandwidthLimitExceeded:return"Bandwidth Limit Exceeded";case f.NotExtended:
return"Not Extended";case f.NetworkAuthenticationRequired:return"Network Authentication Required";default:
return e<400?"HTTP Status":"HTTP Error"}}(e)),i(this,"status",void 0),i(this,"method",void 0),i(this,"url",void 0),i(
this,"body",void 0),i(this,"__proto__",void 0),t=new.target.prototype,Object.setPrototypeOf?Object.setPrototypeOf(this,t
):this.__proto__=t,this.status=e,this.method=r,this.url=n,this.body=o}valueOf(){return this.status}toString(){
return this.status+" "+this.message}toJSON(){return{type:Vi.ERROR,status:this.status,message:this.message}}
getStatusCode(){return this.status}getMethod(){return this.method}getUrl(){return this.url}getBody(){return this.body}}
const us=is?require("fs").promises:void 0,cs=Za.createLogger("NodeRequestClient");class ls{static setLogLevel(e){
cs.setLogLevel(e)}constructor(e,t){i(this,"_http",void 0),i(this,"_https",void 0),this._http=e,this._https=t}
async jsonRequest(e,t,r,n){switch(e){case R.GET:return this._getJson(t,r,n);case R.POST:return this._postJson(t,r,n);
case R.PATCH:return this._patchJson(t,r,n);case R.PUT:return this._putJson(t,r,n);case R.DELETE:return this._deleteJson(
t,r,n);default:throw new TypeError("[Node]RequestClient: Unsupported method: "+e)}}async _checkSocketFile(t){try{
const e=await us.stat(t);return!!e.isSocket()}catch(e){if("ENOTDIR"===(t=null==e?void 0:e.code))return void cs.debug(
"_checkSocketFile: ENOTDIR: ",e);if("ENOENT"===t)return void cs.debug("_checkSocketFile: ENOENT: ",e);throw cs.error(
`_checkSocketFile: Error "${t}" passed on: `,e),e}}async _findSocketFile(e){var t=await this._checkSocketFile(e);
return!0===t?e:!1!==t&&"/"!==(t=Fa.default.dirname(e))&&t!==e?this._findSocketFile(t):void 0}async _httpRequest(i,a,e){
var t;const s=e?JSON.stringify(e)+"\n":void 0,u=new Da.default.URL(i);let c;const l=null!=(
e=null===u||void 0===u?void 0:u.protocol)?e:"";if("unix:"===l||"socket:"===l){
const r=null!==u&&void 0!==u&&u.pathname?null===u||void 0===u?void 0:u.pathname:"/";if("/"===r)throw new TypeError(
"No socket path found for unix protocol URL: "+i);if(!(e=await this._findSocketFile(r)))throw new TypeError(
"No socket path found for unix protocol URL: "+i);t=""+(e.length<r.length?r.substr(e.length):"")+(
"?"!==u.search?u.search:""),a=d(d({},a),{},{socketPath:e,path:t}),i="",c=this._http
}else c="https:"===l?this._https:this._http;return new Promise((t,r)=>{let n=!1;try{if(!c)throw new Error(
"HTTP module not defined. This error should not happen.");var o;let e;i&&(a=d(d({},a),{},{hostname:u.hostname,
port:null!=(o=null!==u&&void 0!==u&&u.port?parseInt(u.port,10):void 0)?o:"https:"===l?443:80,path:u.pathname+u.search}))
,(e=c.request(a,e=>{n?cs.warn("Warning! Request had already ended when the response was received."):(n=!0,t(e))})).on(
"error",e=>{n?(cs.warn("Warning! Request had already ended when the response was received."),cs.debug(
"Error from event: ",e)):(cs.debug("Passing on error from event: ",e),n=!0,r(e))}),s&&e.write(s),e.end()}catch(e){n?(
cs.warn("Warning! Request had already ended when the response was received."),cs.debug("Exception: ",e)):(cs.debug(
"Passing on error: ",e),n=!0,r(e))}})}async _request(e,t,r,n){return r=await this._httpRequest(t,r,n),
n=await as.getRequestDataAsJson(r),{method:e,url:t,statusCode:null!=(e=null==r?void 0:r.statusCode)?e:0,
headers:r.headers,body:n}}async _getJson(e,t,r){const n={method:"GET",headers:{"Content-Type":"application/json"}};
return t&&(n.headers=d(d({},n.headers),t)),this._request(R.GET,e,n,r).then(ls._successResponse)}async _putJson(e,t,r){
const n={method:"PUT",headers:{"Content-Type":"application/json"}};return t&&(n.headers=d(d({},n.headers),t)),
this._request(R.PUT,e,n,r).then(ls._successResponse)}async _postJson(e,t,r){const n={method:"POST",headers:{
"Content-Type":"application/json"}};return t&&(n.headers=d(d({},n.headers),t)),this._request(R.POST,e,n,r).then(
ls._successResponse)}async _patchJson(e,t,r){const n={method:"PATCH",headers:{"Content-Type":"application/json"}};
return t&&(n.headers=d(d({},n.headers),t)),this._request(R.PATCH,e,n,r).then(ls._successResponse)}async _deleteJson(e,t,
r){const n={method:"DELETE",headers:{"Content-Type":"application/json"}};return t&&(n.headers=d(d({},n.headers),t)),
this._request(R.DELETE,e,n,r).then(ls._successResponse)}static async _successResponse(e){
var t=null==e?void 0:e.statusCode;if(t<200||400<=t)throw cs.error(`Unsuccessful response with status ${t}: `,e),new ss(t
,`Error ${t} for ${ee(e.method)} `+e.url,e.method,e.url,e.body);return e.body}}class ds{constructor(e){i(this,"_fetch",
void 0),this._fetch=e}jsonRequest(e,t,r,n){switch(e){case R.GET:return this._getJson(t,r,n);case R.POST:
return this._postJson(t,r,n);case R.PUT:return this._putJson(t,r,n);case R.DELETE:return this._deleteJson(t,r,n);
default:throw new TypeError("[Fetch]RequestClient: Unsupported method: "+e)}}_getJson(e,t,r){const n={method:"GET",
mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},credentials:"same-origin"};return t&&(
n.headers=d(d({},n.headers),t)),r&&(n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>ds._successResponse(e,R.GET))}
_putJson(e,t,r){const n={method:"PUT",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},
credentials:"same-origin"};return t&&(n.headers=d(d({},n.headers),t)),r&&(n.body=JSON.stringify(r)),this._fetch(e,n
).then(e=>ds._successResponse(e,R.PUT))}_postJson(e,t,r){const n={method:"POST",mode:"cors",cache:"no-cache",headers:{
"Content-Type":"application/json"},credentials:"same-origin"};return t&&(n.headers=d(d({},n.headers),t)),r&&(
n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>ds._successResponse(e,R.POST))}_deleteJson(e,t,r){const n={
method:"DELETE",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},credentials:"same-origin"};
return t&&(n.headers=d(d({},n.headers),t)),r&&(n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>ds._successResponse(e,
R.DELETE))}static _successResponse(e,t){const r=e.status;if(!e.ok||r<200||400<=r){const n=e.url,
o=`${r} ${e.statusText} for ${ee(t)} `+n;return e.json().then(e=>{throw new ss(r,o,t,n,e)})}return e.json()}}
const fs=is?require("http"):void 0,ps=is?require("https"):void 0,hs=Za.createLogger("RequestClient");class gs{
static setLogLevel(e){hs.setLogLevel(e),ls.setLogLevel(e)}static async jsonRequest(e,t,r,n){
return this._client.jsonRequest(e,t,r,n)}static async getJson(e,t){return this._client.jsonRequest(R.GET,e,t)}
static async postJson(e,t,r){return hs.debug(".postJson: ",e,t,r),this._client.jsonRequest(R.POST,e,r,t)}
static async patchJson(e,t,r){return hs.debug(".patchJson: ",e,t,r),this._client.jsonRequest(R.PATCH,e,r,t)}
static async putJson(e,t,r){return hs.debug(".putJson: ",e,t,r),this._client.jsonRequest(R.PUT,e,r,t)}
static async deleteJson(e,t,r){return hs.debug(".deleteJson: ",e,r,t),this._client.jsonRequest(R.DELETE,e,t,r)}
static _initClient(){if(os)return hs.debug("Detected browser environment"),new ds(window.fetch.bind(window));if(is
)return new ls(fs,ps);throw new TypeError("Could not detect request client implementation")}}i(gs,"_client",
gs._initClient()),zi={OK:0,0:"OK",ERROR:1,1:"ERROR",HELP:2,2:"HELP",VERSION:3,3:"VERSION"};const ms=Za.createLogger(
"Headers");class vs{static setLogLevel(e){ms.setLogLevel(e)}constructor(e){i(this,"_value",void 0),i(this,
"_uninitializedValue",void 0),this._value=void 0,this._uninitializedValue=e}_initializeValue(){var t=this._value,
r=this._uninitializedValue;try{r&&(this._uninitializedValue=void 0,this.addAll(r))}catch(e){throw this._value=t,
this._uninitializedValue=r,e}}clear(){this._value={},this._uninitializedValue=void 0}add(e,t){
this._uninitializedValue&&this._initializeValue(),ms.debug("add header: ",e,t),e=e.toLowerCase();var r=this._value&&Ei(
this._value,e)?this._value[e]:void 0;void 0===this._value?this._value={[e]:t}:void 0!==r?re(r)?this._value=d(d({},
this._value),{},{[e]:so([],r,[t])}):this._value=d(d({},this._value),{},{[e]:[r,t]}):this._value=d(d({},this._value),{},{
[e]:t})}containsKey(e){return this._uninitializedValue&&this._initializeValue(),e=e.toLowerCase(),Ei(this._value,e)}
isEmpty(){this._uninitializedValue&&this._initializeValue();var e=this._value;return!e||0===Y(e).length}keySet(){
this._uninitializedValue&&this._initializeValue();const t=new Set;var e;return void 0!==this._value&&(e=Y(this._value),
ti(e,e=>{t.add(e)})),t}getValue(e){if(this._uninitializedValue&&this._initializeValue(),this._value
)return e=e.toLowerCase(),Ei(this._value,e)?this._value[e]:void 0}getFirst(e){
return this._uninitializedValue&&this._initializeValue(),re(e=this.getValue(e))?e.length?e[0]:void 0:e}getHost(){
return this._uninitializedValue&&this._initializeValue(),this.getFirst("host")}addAll(e,t){if(
this._uninitializedValue&&this._initializeValue(),H(e)){const r=e;if(!z(t))throw new TypeError(
"Headers.addAll signature must be (string, string[]) or (HeadersObject)");ti(t,e=>{this.add(r,e)})}else{const n=e;ti(Y(n
),t=>{var e=n[t];re(e)?ti(e,e=>{this.add(t,e)}):void 0!==e&&this.add(t,e)})}}remove(e){
this._uninitializedValue&&this._initializeValue(),e=e.toLowerCase();var t=this.getValue(e);const r=d({},this._value);
return r&&Ei(r,e)&&delete r[e],this._value=r,t}set(e,t){this._uninitializedValue&&this._initializeValue(),
e=e.toLowerCase(),void 0===this._value?this._value={[e]:t}:this._value=d(d({},this._value),{},{[e]:t})}setAll(t){
this._uninitializedValue&&this._initializeValue(),ti(Y(t),e=>{this.set(e,t[e])})}valueOf(){var e;
return this._uninitializedValue&&this._initializeValue(),null!=(e=this._value)?e:void 0}toString(){
this._uninitializedValue&&this._initializeValue();const r=this._value;if(!r||this.isEmpty())return"Headers()";var e=Y(r)
const t=jn(e,e=>{const t=r[e];return t?z(t)?e+": "+t.map(e=>0<=t.indexOf(";")||0<=t.indexOf(",")?`"${t}"`:t).join(", "
):0<=t.indexOf(";")?`${e}: "${t}"`:e+": "+t:""+e});return`Headers(${t.join("; ")})`}clone(){
return this._uninitializedValue&&this._initializeValue(),new vs(this._value?d({},this._value):void 0)}}p={exports:{}},(
Ca=function(r,n,o){Hi.stat(r,function(e,t){o(e,!e&&oe(t,r,n))})}).sync=function(e,t){return oe(Hi.statSync(e),e,t)},
Hi=Ga.default,(y=function(e,r,n){Wi.stat(e,function(e,t){n(e,!e&&ie(t,r))})}).sync=function(e,t){return ie(Wi.statSync(e
),t)},Wi=Ga.default,Ji="win32"===process.platform||za.TESTING_WINDOWS?Ca:y,(h=function e(t,o,r){if(
"function"==typeof o&&(r=o,o={}),!r){if("function"!=typeof Promise)throw new TypeError("callback not provided");
return new Promise(function(r,n){e(t,o||{},function(e,t){e?n(e):r(t)})})}Ji(t,o||{},function(e,t){e&&(
"EACCES"===e.code||o&&o.ignoreErrors)&&(e=null,t=!1),r(e,t)})}).sync=function(e,t){try{return Ji.sync(e,t||{})}catch(e){
if(t&&t.ignoreErrors||"EACCES"===e.code)return!1;throw e}};
const ys="win32"===process.platform||"cygwin"===process.env.OSTYPE||"msys"===process.env.OSTYPE,bs=Fa.default,
_s=ys?";":":",Es=h,Os=e=>Object.assign(new Error("not found: "+e),{code:"ENOENT"}),Rs=(e,t)=>{var r=t.colon||_s,
n=e.match(/\//)||ys&&e.match(/\\/)?[""]:[...ys?[process.cwd()]:[],...(t.path||process.env.PATH||"").split(r)];
const o=ys?t.pathExt||process.env.PATHEXT||".EXE;.CMD;.BAT;.COM":"",i=ys?o.split(r):[""];return ys&&-1!==e.indexOf("."
)&&""!==i[0]&&i.unshift(""),{pathEnv:n,pathExt:i,pathExtExe:o}},ws=((ga=(i,s,t)=>{"function"==typeof s&&(t=s,s={}),
s=s||{};const{pathEnv:a,pathExt:u,pathExtExe:c}=Rs(i,s),l=[],d=o=>new Promise((e,t)=>{if(o===a.length
)return s.all&&l.length?e(l):t(Os(i));const r=a[o];var t=/^".*"$/.test(r)?r.slice(1,-1):r,n=bs.join(t,i),
t=!t&&/^\.[\\\/]/.test(i)?i.slice(0,2)+n:n;e(f(t,o,0))}),f=(o,i,a)=>new Promise((r,e)=>{if(a===u.length)return r(d(i+1))
const n=u[a];Es(o+n,{pathExt:c},(e,t)=>{if(!e&&t){if(!s.all)return r(o+n);l.push(o+n)}return r(f(o,i,a+1))})});
return t?d(0).then(e=>t(null,e),t):d(0)}).sync=(t,r)=>{r=r||{};var n,o,i,a,{pathEnv:s,pathExt:u,pathExtExe:c}=Rs(t,r);
const l=[];for(let e=0;e<s.length;e++){const d=s[e];n=/^".*"$/.test(d)?d.slice(1,-1):d,o=bs.join(n,t),
i=!n&&/^\.[\\\/]/.test(t)?t.slice(0,2)+o:o;for(let e=0;e<u.length;e++){a=i+u[e];try{if(Es.sync(a,{pathExt:c})){if(!r.all
)return a;l.push(a)}}catch(e){}}}if(r.all&&l.length)return l;if(r.nothrow)return null;throw Os(t)},(w={exports:{}}
).exports=C=(e={})=>{var t=e.env||process.env;return"win32"!==(e.platform||process.platform)?"PATH":Object.keys(t
).reverse().find(e=>"PATH"===e.toUpperCase())||"Path"},w.exports.default=C,Fa.default),Ts=ga,Ss=w.exports,As=(
j=function(e){return ae(e)||ae(e,!0)},/([()\][%!^"`<>&|;, *?])/g),Ns=((E={}).command=function(e){return e.replace(As,
"^$1")},E.argument=function(e,t){return e=(e=`"${e=(e=(e=""+e).replace(/(\\*)"/g,'$1$1\\"')).replace(/(\\*)$/,"$1$1")}"`
).replace(As,"^$1"),t?e.replace(As,"^$1"):e},/^#!(.*)/),Ps=Ga.default,xs=(e="")=>{const t=e.match(Ns);if(!t)return null;
const[r,n]=t[0].replace(/#! ?/,"").split(" ");return"env"===(e=r.split("/").pop())?n:n?e+" "+n:e},Is=Fa.default,js=j,
Ls=E,Cs="win32"===process.platform,Us=/\.(?:com|exe)$/i,Gs=/node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i,
Fs="win32"===process.platform,Ms=Sa.default,Ds={hookChildProcess:function(r,n){if(Fs){const o=r.emit;r.emit=function(e,t
){return"exit"===e&&(e=ue(t,n))?o.call(r,"error",e):o.apply(r,arguments)}}},verifyENOENT:ue,verifyENOENTSync:function(e,
t){return Fs&&1===e&&!t.file?se(t.original,"spawnSync"):null},notFoundError:se},qs=(p.exports=ce,p.exports.spawn=ce,
p.exports.sync=function(e,t,r){e=ve(e,t,r);const n=Ms.spawnSync(e.command,e.args,e.options);
return n.error=n.error||Ds.verifyENOENTSync(n.status,e),n},p.exports._parse=ve,p.exports._enoent=Ds,Ki=p.exports,["env"]
),ks=Object.getOwnPropertyDescriptor(Function.prototype,"toString"),Bs=Object.getOwnPropertyDescriptor(
Function.prototype.toString,"name"),$s=new WeakMap,Vs=(t,r={})=>{function n(...e){if($s.set(n,++i),1===i)o=t.apply(this,
e),t=null;else if(!0===r.throw)throw new Error(`Function \`${a}\` can only be called once`);return o}if(
"function"!=typeof t)throw new TypeError("Expected a function");let o,i=0;const a=t.displayName||t.name||"<anonymous>";
var e,s,u,c,l,d,f,[p,h,{ignoreNonConfigurable:g=!1}={}]=[n,t],m=p.name;for(const v of Reflect.ownKeys(h))e=p,l=h,s=v,u=g
,"length"!==s&&"prototype"!==s&&"arguments"!==s&&"caller"!==s&&(c=Object.getOwnPropertyDescriptor(e,s),
l=Object.getOwnPropertyDescriptor(l,s),void 0!==c&&!c.configurable&&(
c.writable!==l.writable||c.enumerable!==l.enumerable||c.configurable!==l.configurable||!c.writable&&c.value!==l.value
)&&u||Object.defineProperty(e,s,l));return d=p,(f=Object.getPrototypeOf(h))!==Object.getPrototypeOf(d
)&&Object.setPrototypeOf(d,f),d=p,f=h,m=""===m?"":`with ${m.trim()}() `,m=((e,t)=>`/* Wrapped ${e}*/
`+t).bind(null,m,f.toString()),Object.defineProperty(m,"name",Bs),Object.defineProperty(d,"toString",b(b({},ks),{},{
value:m})),$s.set(n,i),n},zs=(Vs.callCount=e=>{if($s.has(e))return $s.get(e);throw new Error(
`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`)},34),Hs=[{name:"SIGHUP",number:1,
action:"terminate",description:"Terminal closed",standard:"posix"},{name:"SIGINT",number:2,action:"terminate",
description:"User interruption with CTRL-C",standard:"ansi"},{name:"SIGQUIT",number:3,action:"core",
description:"User interruption with CTRL-\\",standard:"posix"},{name:"SIGILL",number:4,action:"core",
description:"Invalid machine instruction",standard:"ansi"},{name:"SIGTRAP",number:5,action:"core",
description:"Debugger breakpoint",standard:"posix"},{name:"SIGABRT",number:6,action:"core",description:"Aborted",
standard:"ansi"},{name:"SIGIOT",number:6,action:"core",description:"Aborted",standard:"bsd"},{name:"SIGBUS",number:7,
action:"core",description:"Bus error due to misaligned, non-existing address or paging error",standard:"bsd"},{
name:"SIGEMT",number:7,action:"terminate",description:"Command should be emulated but is not implemented",
standard:"other"},{name:"SIGFPE",number:8,action:"core",description:"Floating point arithmetic error",standard:"ansi"},{
name:"SIGKILL",number:9,action:"terminate",description:"Forced termination",standard:"posix",forced:!0},{name:"SIGUSR1",
number:10,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGSEGV",number:11,
action:"core",description:"Segmentation fault",standard:"ansi"},{name:"SIGUSR2",number:12,action:"terminate",
description:"Application-specific signal",standard:"posix"},{name:"SIGPIPE",number:13,action:"terminate",
description:"Broken pipe or socket",standard:"posix"},{name:"SIGALRM",number:14,action:"terminate",
description:"Timeout or timer",standard:"posix"},{name:"SIGTERM",number:15,action:"terminate",description:"Termination",
standard:"ansi"},{name:"SIGSTKFLT",number:16,action:"terminate",description:"Stack is empty or overflowed",
standard:"other"},{name:"SIGCHLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",
standard:"posix"},{name:"SIGCLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",
standard:"other"},{name:"SIGCONT",number:18,action:"unpause",description:"Unpaused",standard:"posix",forced:!0},{
name:"SIGSTOP",number:19,action:"pause",description:"Paused",standard:"posix",forced:!0},{name:"SIGTSTP",number:20,
action:"pause",description:'Paused using CTRL-Z or "suspend"',standard:"posix"},{name:"SIGTTIN",number:21,
action:"pause",description:"Background process cannot read terminal input",standard:"posix"},{name:"SIGBREAK",number:21,
action:"terminate",description:"User interruption with CTRL-BREAK",standard:"other"},{name:"SIGTTOU",number:22,
action:"pause",description:"Background process cannot write to terminal output",standard:"posix"},{name:"SIGURG",
number:23,action:"ignore",description:"Socket received out-of-band data",standard:"bsd"},{name:"SIGXCPU",number:24,
action:"core",description:"Process timed out",standard:"bsd"},{name:"SIGXFSZ",number:25,action:"core",
description:"File too big",standard:"bsd"},{name:"SIGVTALRM",number:26,action:"terminate",
description:"Timeout or timer",standard:"bsd"},{name:"SIGPROF",number:27,action:"terminate",
description:"Timeout or timer",standard:"bsd"},{name:"SIGWINCH",number:28,action:"ignore",
description:"Terminal window size changed",standard:"bsd"},{name:"SIGIO",number:29,action:"terminate",
description:"I/O is available",standard:"other"},{name:"SIGPOLL",number:29,action:"terminate",
description:"Watched event",standard:"other"},{name:"SIGINFO",number:29,action:"ignore",
description:"Request for process information",standard:"other"},{name:"SIGPWR",number:30,action:"terminate",
description:"Device running out of power",standard:"systemv"},{name:"SIGSYS",number:31,action:"core",
description:"Invalid system call",standard:"other"},{name:"SIGUNUSED",number:31,action:"terminate",
description:"Invalid system call",standard:"other"}],Ws=function(){const e=he();return e.reduce(ge,{})}();{const fu=he()
S=Array.from({length:65},(e,t)=>{var r,n=fu,o=(r=t,void 0!==(o=n.find(({name:e})=>La.constants.signals[e]===r)
)?o:n.find(e=>e.number===r));if(void 0===o)return{};var{name:n,description:o,supported:i,action:a,forced:s,standard:u}=o
return{[t]:{name:n,number:t,description:o,supported:i,action:a,forced:s,standard:u}}}),Object.assign({},...S)}const Js=(
{stdout:e,stderr:t,all:r,error:n,signal:o,exitCode:i,command:a,escapedCommand:s,timedOut:u,isCanceled:c,killed:l,
parsed:{options:{timeout:d}}})=>{var f,p,h,g,m,v,y;i=null===i?void 0:i,f=void 0===(o=null===o?void 0:o
)?void 0:Ws[o].description,d=`Command ${{timedOut:d,timeout:p,errorCode:h,signal:g,signalDescription:m,exitCode:v,
isCanceled:y}={timedOut:u,timeout:d,errorCode:n&&n.code,signal:o,signalDescription:f,exitCode:i,isCanceled:c},
d?`timed out after ${p} milliseconds`:y?"was canceled":void 0!==h?"failed with "+h:void 0!==g?`was killed with ${g} (${m})`:void 0!==v?"failed with exit code "+v:"failed"}: `+a
const b=(p="[object Error]"===Object.prototype.toString.call(n))?d+`
`+n.message:d;return y=[b,t,e].filter(Boolean).join("\n"),p?(n.originalMessage=n.message,n.message=y):n=new Error(y),
n.shortMessage=b,n.command=a,n.escapedCommand=s,n.exitCode=i,n.signal=o,n.signalDescription=f,n.stdout=e,n.stderr=t,
void 0!==r&&(n.all=r),"bufferedData"in n&&delete n.bufferedData,n.failed=!0,n.timedOut=Boolean(u),n.isCanceled=c,
n.killed=l&&!u,n},Ks=["stdin","stdout","stderr"],Xs=(_={exports:{}},(T=g={exports:{}}).exports=["SIGABRT","SIGALRM",
"SIGHUP","SIGINT","SIGTERM"],"win32"!==process.platform&&T.exports.push("SIGVTALRM","SIGXCPU","SIGXFSZ","SIGUSR2",
"SIGTRAP","SIGSYS","SIGQUIT","SIGIOT"),"linux"===process.platform&&T.exports.push("SIGIO","SIGPOLL","SIGPWR","SIGSTKFLT"
,"SIGUNUSED"),me(m=za.process)?(Xi=Aa.default,Qi=g.exports,Yi=/^win/i.test(m.platform),"function"!=typeof(A=Na.default
)&&(A=A.EventEmitter),m.__signal_exit_emitter__?v=m.__signal_exit_emitter__:((v=m.__signal_exit_emitter__=new A).count=0
,v.emitted={}),v.infinite||(v.setMaxListeners(1/0),v.infinite=!0),_.exports=function(e,t){var r;return me(za.process)?(
Xi.equal(typeof e,"function","a callback must be provided for exit handler"),!1===ra&&na(),r="exit",t&&t.alwaysLast&&(
r="afterexit"),t=function(){v.removeListener(r,e),0===v.listeners("exit").length&&0===v.listeners("afterexit"
).length&&Zi()},v.on(r,e),t):function(){}},Zi=function(){ra&&me(za.process)&&(ra=!1,Qi.forEach(function(e){try{
m.removeListener(e,ta[e])}catch(e){}}),m.emit=aa,m.reallyExit=oa,--v.count)},_.exports.unload=Zi,ea=function(e,t,r){
v.emitted[e]||(v.emitted[e]=!0,v.emit(e,t,r))},ta={},Qi.forEach(function(e){ta[e]=function(){me(za.process
)&&m.listeners(e).length===v.count&&(Zi(),ea("exit",null,e),ea("afterexit",null,e),Yi&&"SIGHUP"===e&&(e="SIGINT"),
m.kill(m.pid,e))}}),_.exports.signals=function(){return Qi},ra=!1,na=function(){!ra&&me(za.process)&&(ra=!0,v.count+=1,
Qi=Qi.filter(function(e){try{return m.on(e,ta[e]),!0}catch(e){return!1}}),m.emit=sa,m.reallyExit=ia)},_.exports.load=na,
oa=m.reallyExit,ia=function(e){me(za.process)&&(m.exitCode=e||0,ea("exit",m.exitCode,null),ea("afterexit",m.exitCode,
null),oa.call(m,m.exitCode))},aa=m.emit,sa=function(e,t){return"exit"===e&&me(za.process)?(void 0!==t&&(m.exitCode=t),
e=aa.apply(this,arguments),ea("exit",m.exitCode,null),ea("afterexit",m.exitCode,null),e):aa.apply(this,arguments)}
):_.exports=function(){return function(){}},ua=_.exports,I={exports:{}},Ia.default.PassThrough),Qs=xa.default.constants,
Ys=(x=Ia.default,ja.default.promisify),Zs=Ys(x.pipeline);class eu extends Error{constructor(){super("maxBuffer exceeded"
),this.name="MaxBufferError"}}I.exports=de,I.exports.buffer=(e,t)=>de(e,b(b({},t),{},{encoding:"buffer"})),
I.exports.array=(e,t)=>de(e,b(b({},t),{},{array:!0})),I.exports.MaxBufferError=eu,ca=I.exports;
const tu=Ia.default.PassThrough,ru=(la=function(){function t(e){return Array.isArray(e)?e.forEach(t):(n.push(e),e.once(
"end",r.bind(null,e)),e.once("error",o.emit.bind(o,"error")),e.pipe(o,{end:!1})),this}function r(t){!(n=n.filter(
function(e){return e!==t})).length&&o.readable&&o.end()}var n=[],o=new tu({objectMode:!0});return o.setMaxListeners(0),
o.add=t,o.isEmpty=function(){return 0==n.length},o.on("unpipe",r),Array.prototype.slice.call(arguments).forEach(t),o},
async(e,t)=>{if(e){e.destroy();try{return await t}catch(e){return e.bufferedData}}}),nu=(e,{encoding:t,buffer:r,
maxBuffer:n})=>{if(e&&r)return t?ca(e,{encoding:t,maxBuffer:n}):ca.buffer(e,{maxBuffer:n})},ou=(async()=>{})(
).constructor.prototype,iu=["then","catch","finally"].map(e=>[e,Reflect.getOwnPropertyDescriptor(ou,e)]),au=(e,t)=>{for(
const[n,o]of iu){var r="function"==typeof t?(...e)=>Reflect.apply(o.value,t(),e):o.value.bind(t);Reflect.defineProperty(
e,n,b(b({},o),{},{value:r}))}return e},su=(e,t=[])=>Array.isArray(t)?[e,...t]:[e],uu=/^[\w.-]+$/,cu=/"/g,lu=(e,t,r)=>{
return"string"==typeof t||Pa.Buffer.isBuffer(t)?e.stripFinalNewline?(n="string"==typeof(e=t)?"\n":"\n".charCodeAt(),
o="string"==typeof e?"\r":"\r".charCodeAt(),(e=e[e.length-1]===n?e.slice(0,-1):e)[e.length-1]===o?e.slice(0,-1):e
):t:void 0===r?void 0:"";var n,o},du=Za.createLogger("doExec"),U=(ts.initEnvFromDefaultFiles(),Za.setLogLevel(O),
Za.createLogger("main"));!async function(e=[]){try{vs.setLogLevel(c.INFO),gs.setLogLevel(c.INFO),U.debug(
"Loglevel as "+Za.getLogLevelString());const{scriptName:t,parseStatus:r,exitStatus:n,errorString:o,freeArgs:i}=class{
static parseArguments(e,t=[]){var r,n,o=null!=(r=t.shift())?r:"",i=null!=(r=t.shift())?r:"";if(!i)return{
parseStatus:zi.ERROR,exitStatus:Bi.ARGUMENT_PARSE_ERROR,nodePath:o,scriptName:e,freeArgs:[],extraArgs:[]};if(
0===t.length)return{parseStatus:zi.ERROR,exitStatus:Bi.ARGUMENT_PARSE_ERROR,nodePath:o,scriptName:i,freeArgs:[],
extraArgs:[]};let a=!0,s=[],u=[];do{if(n=t.shift(),a)switch(function(){switch(n){case"-h":case"--help":case 0:return 0;
case"-v":case"--version":case 1:return 1;case"--":case 2:return 2}}()){case 0:return{parseStatus:zi.HELP,
exitStatus:Bi.OK,nodePath:o,scriptName:i,freeArgs:s,extraArgs:u};case 1:return{parseStatus:zi.VERSION,exitStatus:Bi.OK,
nodePath:o,scriptName:i,freeArgs:s,extraArgs:u};case 2:a=!1;break;default:if(a){if(Fi(n,"-"))return{
errorString:"Unknown argument: "+n,parseStatus:zi.ERROR,exitStatus:Bi.UNKNOWN_ARGUMENT,nodePath:o,scriptName:i,
freeArgs:s,extraArgs:u};s.push(n)}else u.push(n)}}while(1<=t.length);return{parseStatus:zi.OK,exitStatus:Bi.OK,
nodePath:o,scriptName:i,freeArgs:s,extraArgs:u}}}.parseArguments(rs,e);if(r===zi.HELP||r===zi.VERSION
)return console.log(`USAGE: ${t} [OPT(s)] ACTION [ARG(s)]

Manage git submodule states.

  hgm update [NAME] [ TARGET-PATH ]
  hgm remove NAME [ TARGET-PATH ]
  
...where NAME is one of:

  git@github.com:ORG/NAME
  [@]ORG/NAME
  NAME
    
...where NAME may be:

   fi.hg.FOO which will default to Heusala Group's github org as "heusalagroup/fi.hg.FOO"
    
...where BRANCH defaults to "main"
  
...and OPT is one of:

    -h --help          Print help
    -v --version       Print version
    --                 Disables option parsing

  Environment variables:

    LOG_LEVEL as one of:
    
      ALL
      DEBUG
      INFO
      WARN
      ERROR
      NONE
`),n;if(o)return console.error("ERROR: "+o),n;ts.setupDestroyHandler(()=>{U.debug(
"Stopping command from process utils event")},e=>{U.error("Error while shutting down the service: ",e)});
const a=i.shift();switch(a.toLowerCase()){case"u":case"i":case"update":case"install":return await async function(e){
const t=e.shift();if(!t)return U.debug("initAllSubmodules"),U.debug("gitPull"),await fe(["git","pull"]),await l.OK,
U.debug("gitSubmoduleUpdate"),await fe(["git","submodule","update","--init"]),await l.OK,l.OK;var e=e.shift(),
r=t.substring(1).includes("@")?t.substring(1).split("@").pop():void 0;return t?async function(e,t,r){var n,o;U.debug(
"updateSubModule: ",e,t,r);const i=process.cwd(),{gitUrl:a,packageName:s}=await async function(e){if(U.debug(
"getGitUrl: sourceUrl = ",e),e.includes(":"))return U.debug("getGitUrl: direct url: ",e),{gitUrl:e,
packageName:e.replace(/\.git$/,"").split(":").slice(1).join(":").split("/").slice(1).join("/")};if((e=e.startsWith("@"
)?e.substring(1):e).includes("/")){const r=ns+`:${e}.git`;return U.debug("getGitUrl: github with org: ",r),{gitUrl:r,
packageName:e.split("/").slice(1).join("/")}}const t=await async function(){switch(e.toLowerCase().split(".").slice(0,2
).join(".")){case"fi.hg":case"fi.heusalagroup":return"heusalagroup";case"fi.hangovergames":case"fi.palvelinkauppa":
return"hangovergames";case"fi.nor":case"fi.sendanor":return"sendanor";default:return}}(),r=ns+`:${t}/`+e;return U.debug(
`getGitUrl: github with org "${t}": `,r),{gitUrl:r,packageName:e}}(e);if(!a)throw new TypeError(
`Could not detect git url for: "${a}"`);U.debug("updateSubModule: gitUrl = ",a),U.debug(
"updateSubModule: packageName = ",s),t=t||Fa.default.resolve(Fa.default.resolve(i,"src"),s.split(".").join("/")),
e=Fa.default.relative(process.cwd(),t),U.debug("relativeTargetPath = ",e);let u;try{u=await Ta.promises.stat(t),U.debug(
"stats: ",u)}catch(e){"ENOENT"!==(null==e?void 0:e.code)&&U.error("File stat error: ",t,e),u=void 0}if(o=null!=(
o=null==(o=u)?void 0:o.isFile())&&o,U.debug("isFile: ",o),n=null!=(n=null==(n=u)?void 0:n.isDirectory())&&n,U.debug(
"isDirectory: ",n),n)U.debug("Target directory already exists: ",t);else{if(void 0!==u&&void 0!==o)return U.error(
"Target file not a directory: ",t),l.CONFLICT;n=a,o=e,U.debug("addGitSubModule: ",n,o),await fe(["git","submodule","add"
,n,o]),await l.OK,U.debug("Initialized: ",a,e)}return t=null!=r?r:"main",U.debug("nextBranch: ",t),n=e,U.debug(
"getGitBranch: ",n),o=(await fe(["git","rev-parse","--abbrev-ref","HEAD"],{cwd:n,stdio:"pipe"})).stdout,U.debug(
"stdout: ",o),r=await o,U.debug("currentBranch: ",r),r!==t?(n=e,o=t,U.debug("setGitSubModuleBranch: ",n,o),await fe([
"git","config","-f",".gitmodules",`submodule.${n}.branch`,o]),await l.OK):U.debug("Branch already identical: ",t),
console.info(s+`@${t}:`+e),l.OK}(t,e,r):l.ARGUMENT_PARSE_ERROR}(i);case"r":case"remove":return i,
await l.UNIMPLEMENTED_FEATURE}return l.UNKNOWN_ARGUMENT}catch(e){return U.error("Fatal error: ",e),l.FATAL_ERROR}}(
process.argv).then(e=>{process.exit(e)}).catch(e=>{console.error("Error: ",e),process.exit(1)});
