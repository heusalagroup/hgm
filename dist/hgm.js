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
enumerable:!0,get:function(){return r[e]}}))}),n.default=r,Object.freeze(n)}function D(e){var t,r=-1,
n=null==e?0:e.length;for(this.clear();++r<n;)t=e[r],this.set(t[0],t[1])}function M(e){var t,r=-1,n=null==e?0:e.length;
for(this.clear();++r<n;)t=e[r],this.set(t[0],t[1])}function q(e){var t,r=-1,n=null==e?0:e.length;for(this.clear();++r<n;
)t=e[r],this.set(t[0],t[1])}function k(e){e=this.__data__=new ut(e),this.size=e.size}function B(e){var t=-1,
r=null==e?0:e.length;for(this.__data__=new ct;++t<r;)this.add(e[t])}function V(n,o){function i(){var e=arguments,
t=o?o.apply(this,e):e[0],r=i.cache;return r.has(t)?r.get(t):(e=n.apply(this,e),i.cache=r.set(t,e)||r,e)}if(
"function"!=typeof n||null!=o&&"function"!=typeof o)throw new TypeError("Expected a function");return i.cache=new(
V.Cache||Gr),i}function z(e){return void 0===e}function $(e){return a(e)}function H(e){return xi(e)}function W(e){
return Li(e)}function J(e,t){return Qn(e,t)}function K(e,t=H,r=void 0){return!!(void 0===r||Ie(n=e)&&J(Bi(n),r))&&(
n=void 0!==t?t:H,Ie(r=e)&&J(Y(r),n));var n}function X(...e){return t=>zn(e,e=>e(t))}function Q(e){if(void 0!==e&&""!==e
)return""+e}function Y(e,t=H){var r;return $(e)?(r=Ln(e,(e,t)=>t),Xo(r,e=>t(e))):Ie(e)?(r=Reflect.ownKeys(e),Xo(r,e=>t(e
))):[]}function Z(e){if(!e.startsWith("%{")||!e.endsWith("}"))return Q(e)}function ee(e){if(W(e))switch(e){
case $i.OPTIONS:return"options";case $i.GET:return"get";case $i.POST:return"post";case $i.PUT:return"put";
case $i.DELETE:return"delete";case $i.PATCH:return"patch"}throw new TypeError(
"Unsupported value for stringifyRequestMethod(): "+e)}function te(e){return H(t=e)||W(t)||Ti(t)||Si(t)||re(e)||(e=t=e,
!!Ie(e)&&!(e instanceof Date)&&!Ce(e)&&!$(e)&&K(e,H,void 0)&&K(t,H,X(te,z)));var t}function re(e){var t,[e,r=void 0,
n=void 0,o=void 0]=[e,X(te,z)];return!!a(e)&&(t=null!=(t=null==e?void 0:e.length)?t:0,!(void 0!==n&&t<n)&&!(
void 0!==o&&o<t)&&(void 0===r||J(e,r)))}function ne(t,e){var r,n=Object.keys(t);return Object.getOwnPropertySymbols&&(
r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),
n.push.apply(n,r)),n}function y(n){for(var o,e=1;e<arguments.length;e++)o=null!=arguments[e]?arguments[e]:{},e%2?ne(
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
return e=ye(e,t,r),t=Ds.spawn(e.command,e.args,e.options),Ms.hookChildProcess(t,e),t}function le(e={}){var{
env:e=process.env,platform:t=process.platform}=e;return"win32"!==t?"PATH":Object.keys(e).reverse().find(
e=>"PATH"===e.toUpperCase())||"Path"}async function de(n,u){if(!n)throw new Error("Expected a stream");const o=(u=y({
maxBuffer:1/0},u)).maxBuffer,i=(e=>{const t=(e=y({},u)).array;let r=e.encoding;const n="buffer"===r;let o=!1;t?o=!(r||n
):r=r||"utf8",n&&(r=null);const i=new Qs({objectMode:o});r&&i.setEncoding(r);let a=0;const s=[];return i.on("data",e=>{
s.push(e),o?a=s.length:a+=e.length}),i.getBufferedValue=()=>t?s:n?Buffer.concat(s,a):s.join(""),i.getBufferedLength=(
)=>a,i})();return await new Promise((e,t)=>{const r=e=>{e&&i.getBufferedLength()<=Ys.MAX_LENGTH&&(
e.bufferedData=i.getBufferedValue()),t(e)};(async()=>{try{await eu(n,i),e()}catch(e){r(e)}})(),i.on("data",()=>{
i.getBufferedLength()>o&&r(new tu)})}),i.getBufferedValue()}function fe(e,t,r){var n,o,i,a,s,u,c,l,d;[r,o,i={}]=[e,t,r],
r=(d=Qi._parse(r,o,i)).command,o=d.args,(i=y({maxBuffer:1e8,buffer:!0,stripFinalNewline:!0,extendEnv:!0,preferLocal:!1,
localDir:(i=d.options).cwd||Va.default.cwd(),execPath:Va.default.execPath,encoding:"utf8",reject:!0,cleanup:!0,all:!1,
windowsHide:!0},i)).env=({env:a,extendEnv:l,preferLocal:s,localDir:u,execPath:c}=i,l=l?y(y({},Va.default.env),a):a,
s?function(e){let{env:t=Va.default.env}=e,r=function(e,t){var r,n,o,i;if(null==e)return{};if(r=function(e,t){var r,n,o,i
if(null==e)return{};for(r={},n=Object.keys(e),i=0;i<n.length;i++)o=n[i],0<=t.indexOf(o)||(r[o]=e[o]);return r}(e,t),
Object.getOwnPropertySymbols)for(i=Object.getOwnPropertySymbols(e),o=0;o<i.length;o++)n=i[o],0<=t.indexOf(n
)||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n]);return r}(e,qs);return e=le({env:t=y({},t)}),r.path=t[e]
,t[e]=function(e={}){const{cwd:t=Va.default.cwd(),path:r=Va.default.env[le()],execPath:n=Va.default.execPath}=e;let o,
i=(e=t instanceof URL?za.default.fileURLToPath(t):t,ka.default.resolve(e));const a=[];for(;o!==i;)a.push(
ka.default.join(i,"node_modules/.bin")),o=i,i=ka.default.resolve(i,"..");return a.push(ka.default.resolve(e,n,"..")),[
...a,r].join(ka.default.delimiter)}(r),t}({env:l,cwd:u,execPath:c}):l),i.stdio=(t=>{var r,e;if(t){const n=t.stdio;if(
void 0===n)return Xs.map(e=>t[e]);if(r=t,Xs.some(e=>void 0!==r[e]))throw new Error(
"It's not possible to provide `stdio` in combination with one of "+Xs.map(e=>`\`${e}\``).join(", "));if(
"string"==typeof n)return n;if(Array.isArray(n))return e=Math.max(n.length,Xs.length),Array.from({length:e},(e,t)=>n[t])
throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof n}\``)}})(i),
"win32"===Va.default.platform&&"cmd"===ka.default.basename(r,".exe")&&o.unshift("/q");const f={file:r,args:o,options:i,
parsed:d},p=(a=e,s=t,uu(a,s).join(" ")),h=(u=e,c=t,uu(u,c).map(e=>(e=>"string"!=typeof e||cu.test(e)?e:`"${e.replace(lu,
'\\"')}"`)(e)).join(" "));if(void 0!==(l=f.options.timeout)&&(!Number.isFinite(l)||l<0))throw new TypeError(
`Expected the \`timeout\` option to be a non-negative integer, got \`${l}\` (${typeof l})`);let g;try{
g=Ba.default.spawn(f.file,f.args,f.options)}catch(e){return r=new Ba.default.ChildProcess,o=Promise.reject(Ks({error:e,
stdout:"",stderr:"",all:"",command:p,escapedCommand:h,parsed:f,timedOut:!1,isCanceled:!1,killed:!1})),su(r,o)}n=g,
i=new Promise((r,t)=>{n.on("exit",(e,t)=>{r({exitCode:e,signal:t})}),n.on("error",e=>{t(e)}),n.stdin&&n.stdin.on("error"
,e=>{t(e)})}),d=((n,{timeout:t,killSignal:o="SIGTERM"},e)=>{if(0===t||void 0===t)return e;let i;var r=new Promise((e,r
)=>{i=setTimeout(()=>{var e=o,t=r;n.kill(e),t(Object.assign(new Error("Timed out"),{timedOut:!0,signal:e}))},t)}),
e=e.finally(()=>{clearTimeout(i)});return Promise.race([r,e])})(g,f.options,i);const m=(async(e,{cleanup:t,detached:r},n
)=>{if(!t||r)return n;const o=la(()=>{e.kill()});return n.finally(()=>{o()})})(g,f.options,d),v={isCanceled:!1};
return g.kill=((e,t="SIGTERM",r={})=>{var n,o=e(t),i=e;if([r,t,n]=[t,(e=r).forceKillAfterTimeout,o],(
r===$a.default.constants.signals.SIGTERM||"string"==typeof r&&"SIGTERM"===r.toUpperCase())&&!1!==t&&n){r=(({
forceKillAfterTimeout:e=!0})=>{if(!0===e)return 5e3;if(!Number.isFinite(e)||e<0)throw new TypeError(
`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);return e})(e);
const a=setTimeout(()=>{i("SIGKILL")},r);a.unref&&a.unref()}return o}).bind(null,g.kill.bind(g)),g.cancel=((e,t)=>{
e.kill()&&(t.isCanceled=!0)}).bind(null,g,v),a=zs(async()=>{var[{error:e,exitCode:t,signal:r,timedOut:n},o,i,a]=await(
async({stdout:t,stderr:r,all:n},{encoding:o,buffer:e,maxBuffer:i},a)=>{var s=ou(t,{encoding:o,buffer:e,maxBuffer:i}),
u=ou(r,{encoding:o,buffer:e,maxBuffer:i}),o=ou(n,{encoding:o,buffer:e,maxBuffer:2*i});try{return await Promise.all([a,s,
u,o])}catch(e){return Promise.all([{error:e,signal:e.signal,timedOut:e.timedOut},nu(t,s),nu(r,u),nu(n,o)])}})(g,
f.options,m),o=du(f.options,o),i=du(f.options,i),a=du(f.options,a);if(e||0!==t||null!==r){if(e=Ks({error:e,exitCode:t,
signal:r,stdout:o,stderr:i,all:a,command:p,escapedCommand:h,parsed:f,timedOut:n,
isCanceled:v.isCanceled||!!f.options.signal&&f.options.signal.aborted,killed:g.killed}),f.options.reject)throw e;
return e}return{command:p,escapedCommand:h,exitCode:0,stdout:o,stderr:i,all:a,failed:!1,timedOut:!1,isCanceled:!1,
killed:!1}}),s=g,void 0!==(e=f.options.input)&&void 0!==s.stdin&&(
null!==e&&"object"==typeof e&&"function"==typeof e.pipe?e.pipe(s.stdin):s.stdin.end(e)),g.all=((e,{all:t})=>{if(t&&(
e.stdout||e.stderr)){const r=fa();return e.stdout&&r.add(e.stdout),e.stderr&&r.add(e.stderr),r}})(g,f.options),su(g,a)}
function pe(e){return`USAGE: ${e} [OPT(s)] TARGET-PATH [ SOURCE-URL [ BRANCH ] ]

Manage git submodule state.
  
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
`}function he(e,t){return{name:"SIGRT"+(t+1),number:$s+t,action:"terminate",
description:"Application-specific signal (realtime)",standard:"posix"}}function ge(){var e=65-$s,e=Array.from({length:e}
,he);return[...Hs,...e].map(be)}function me(e,{name:t,number:r,description:n,supported:o,action:i,forced:a,standard:s}){
return y(y({},e),{},{[t]:{name:t,number:r,description:n,supported:o,action:i,forced:a,standard:s}})}function ve(e){
return e&&"object"==typeof e&&"function"==typeof e.removeListener&&"function"==typeof e.emit&&"function"==typeof e.reallyExit&&"function"==typeof e.listeners&&"function"==typeof e.kill&&"number"==typeof e.pid&&"function"==typeof e.on
}function ye(e,t,r){if(t&&!Array.isArray(t)&&(r=t,t=null),e={command:e,args:t=t?t.slice(0):[],options:r=Object.assign({}
,r),file:void 0,original:{command:e,args:t}},r.shell)return e;if(t=e,!Cs)return t;if((r=t).file=js(r),e=(
e=r.file&&function(e){var t;const r=Buffer.alloc(150);try{t=Ps.openSync(e,"r"),Ps.readSync(t,r,0,150,0),Ps.closeSync(t)
}catch(e){}return xs(r.toString())}(r.file))?(r.args.unshift(r.file),r.command=e,js(r)):r.file,r=!Us.test(e),
t.options.forceShell||r){const n=Gs.test(e);t.command=Is.normalize(t.command),t.command=Ls.command(t.command),
t.args=t.args.map(e=>Ls.argument(e,n)),r=[t.command].concat(t.args).join(" "),t.args=["/d","/s","/c",`"${r}"`],
t.command=process.env.comspec||"cmd.exe",t.options.windowsVerbatimArguments=!0}return t}function be({name:e,number:t,
description:r,action:n,forced:o=!1,standard:i}){var{signals:{[e]:a}}=Ua.constants,s=void 0!==a;return{name:e,
number:s?a:t,description:r,supported:s,action:n,forced:o,standard:i}}function _e(e,t){for(var r=-1,n=null==e?0:e.length,
o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}function Ee(e,t){return e===t||e!=e&&t!=t}function Oe(e,t){for(
var r=e.length;r--;)if(Wa(e[r][0],t))return r;return-1}var Re,we,Te,Se,Ae,Ne,Pe,xe,Ie,je,Le,Ce,Ue,Ge,Fe,De,Me,qe,ke,Be,
Ve,ze,$e,He,We,Je,Ke,Xe,Qe,Ye,Ze,et,tt,rt,nt,ot,it,at,st,ut,ct,lt,dt,ft,pt,ht,gt,mt,vt,yt,a,bt,_t,Et,Ot,Rt,wt,Tt,St,At,
Nt,Pt,xt,It,jt,t,Lt,Ct,Ut,Gt,Ft,Dt,Mt,qt,kt,Bt,Vt,zt,$t,Ht,Wt,Jt,Kt,Xt,Qt,Yt,Zt,er,tr,rr,nr,or,ir,ar,sr,ur,cr,lr,dr,fr,
pr,hr,gr,mr,vr,yr,br,_r,Er,Or,Rr,wr,Tr,Sr,Ar,Nr,Pr,xr,Ir,jr,Lr,Cr,Ur,Gr,Fr,Dr,Mr,qr,kr,Br,Vr,zr,$r,Hr,Wr,Jr,Kr,Xr,Qr,Yr,
Zr,en,tn,rn,nn,on,an,sn,un,cn,ln,dn,fn,pn,r,hn,gn,mn,vn,yn,bn,_n,En,On,Rn,wn,Tn,Sn,An,Nn,Pn,xn,In,jn,Ln,Cn,Un,Gn,Fn,Dn,
Mn,qn,kn,Bn,Vn,zn,$n,Hn,Wn,Jn,Kn,Xn,Qn,Yn,Zn,eo,to,ro,no,oo,io,ao,so,uo,co,lo,fo,po,ho,go,mo,vo,yo,bo,_o,Eo,Oo,Ro,wo,To,
So,Ao,No,Po,xo,Io,jo,Lo,Co,Uo,Go,Fo,Do,Mo,qo,ko,Bo,Vo,zo,$o,Ho,Wo,Jo,Ko,Xo,Qo,Yo,Zo,ei,ti,ri,ni,oi,n,o,s,ii,ai,si,ui,ci,
li,di,fi,pi,hi,gi,mi,vi,yi,bi,_i,Ei,Oi,Ri,wi,Ti,Si,Ai,Ni,Pi,xi,Ii,ji,Li,Ci,Ui,Gi,Fi,Di,Mi,qi,ki,Bi,u,c,Vi,zi,$i,l,Hi,Wi,
f,Ji,Ki,Xi,p,Qi,h,g,Yi,Zi,ea,m,ta,ra,na,oa,ia,aa,sa,ua,ca,la,da,fa,v,b,pa,ha,_,ga,E,O,ma,va,R,w,T,S,ya,ba,_a,A,Ea,Oa,Ra,
wa,Ta,Sa,Aa=require("fs"),Na=require("path"),Pa=require("querystring"),xa=require("url"),Ia=require("node:buffer"),
ja=require("node:path"),La=require("node:child_process"),Ca=require("node:process"),N=require("child_process"),
P=require("node:url"),Ua=require("os"),x=require("node:os"),Ga=require("assert"),I=require("events"),j=require("buffer")
,L=require("stream"),C=require("util"),Fa=e(Aa),Da=e(Na),Ma=F(Pa),qa=e(xa),ka=e(ja),Ba=e(La),Va=e(Ca),Na=e(N),za=e(P),
$a=e(x),Pa=e(Ga),xa=e(I),ja=e(j),La=e(L),Ca=e(C),
Ha="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
,Wa=Ee,Ja=Oe,Ka=Array.prototype.splice,Xa=Oe,Qa=Oe,Ya=Oe;D.prototype.clear=function(){this.__data__=[],this.size=0},
D.prototype.delete=function(e){var t=this.__data__;return!((e=Ja(t,e))<0||(e==t.length-1?t.pop():Ka.call(t,e,1),
--this.size,0))},D.prototype.get=function(e){var t=this.__data__;return(e=Xa(t,e))<0?void 0:t[e][1]},
D.prototype.has=function(e){return-1<Qa(this.__data__,e)},D.prototype.set=function(e,t){var r=this.__data__,n=Ya(r,e);
return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},Re=N=D,P=function(){this.__data__=new Re,this.size=0},x=function(
e){var t=this.__data__,e=t.delete(e);return this.size=t.size,e},Ga=function(e){return this.__data__.get(e)},I=function(e
){return this.__data__.has(e)},j="object"==typeof Ha&&Ha&&Ha.Object===Object&&Ha,
L="object"==typeof self&&self&&self.Object===Object&&self,L=(C=j||L||Function("return this")()).Symbol,
p=Object.prototype,we=p.hasOwnProperty,Te=p.toString,Se=L?L.toStringTag:void 0,p=Object.prototype,Ae=p.toString,
Ne=function(e){var t,r,n=we.call(e,Se),o=e[Se];try{t=!(e[Se]=void 0)}catch(e){}return r=Te.call(e),t&&(
n?e[Se]=o:delete e[Se]),r},Pe=function(e){return Ae.call(e)},xe=L?L.toStringTag:void 0,je=p=function(e){
return null==e?void 0===e?"[object Undefined]":"[object Null]":(xe&&xe in Object(e)?Ne:Pe)(e)},Le=Ie=function(e){
var t=typeof e;return null!=e&&("object"==t||"function"==t)},Ce=function(e){return!!Le(e)&&("[object Function]"==(e=je(e
))||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e)},v=C["__core-js_shared__"],
v=/[^.]+$/.exec(v&&v.keys&&v.keys.IE_PROTO||""),Ue=v?"Symbol(src)_1."+v:"",v=Function.prototype,Ge=v.toString,Fe=Ce,
De=function(e){return!!Ue&&Ue in e},Me=Ie,qe=v=function(e){if(null!=e){try{return Ge.call(e)}catch(e){}try{return e+""
}catch(e){}}return""},s=/[\\^$.*+?()[\]{}|]/g,ke=/^\[object .+?Constructor\]$/,S=Function.prototype,o=Object.prototype,
S=S.toString,o=o.hasOwnProperty,Be=RegExp("^"+S.call(o).replace(s,"\\$&").replace(
/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ve=function(e){return!(!Me(e)||De(e))&&(Fe(e
)?Be:ke).test(qe(e))},ze=function(e,t){return null==e?void 0:e[t]},o=(S=function(e,t){return e=ze(e,t),Ve(e)?e:void 0})(
C,"Map"),s=S(Object,"create"),He=$e=s,r=Object.prototype,We=r.hasOwnProperty,Je=s,r=Object.prototype,Ke=r.hasOwnProperty
,Xe=s,r=function(e){return e=this.has(e)&&delete this.__data__[e],this.size-=e?1:0,e},s=function(e){var t,
r=this.__data__;return He?"__lodash_hash_undefined__"===(t=r[e])?void 0:t:We.call(r,e)?r[e]:void 0},n=function(e){
var t=this.__data__;return Je?void 0!==t[e]:Ke.call(t,e)},T=function(e,t){var r=this.__data__;
return this.size+=this.has(e)?0:1,r[e]=Xe&&void 0===t?"__lodash_hash_undefined__":t,this},M.prototype.clear=function(){
this.__data__=$e?$e(null):{},this.size=0},M.prototype.delete=r,M.prototype.get=s,M.prototype.has=n,M.prototype.set=T,
Qe=M,Ye=N,Ze=o,et=function(e){var t=typeof e;
return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e},ot=nt=rt=tt=function(e,t){
return e=e.__data__,et(t)?e["string"==typeof t?"string":"hash"]:e.map},r=function(e){return e=tt(this,e).delete(e),
this.size-=e?1:0,e},s=function(e){return rt(this,e).get(e)},n=function(e){return nt(this,e).has(e)},T=function(e,t){
var r=ot(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},q.prototype.clear=function(){this.size=0,
this.__data__={hash:new Qe,map:new(Ze||Ye),string:new Qe}},q.prototype.delete=r,q.prototype.get=s,q.prototype.has=n,
q.prototype.set=T,at=o,st=r=q,ut=it=N,s=x,n=Ga,T=I,N=function(e,t){var r,n=this.__data__;if(n instanceof it){if(
r=n.__data__,!at||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new st(r)}return n.set(e,t),
this.size=n.size,this},k.prototype.clear=P,k.prototype.delete=s,k.prototype.get=n,k.prototype.has=T,k.prototype.set=N,
x=k,ct=r,Ga=function(e){return this.__data__.has(e)},B.prototype.add=B.prototype.push=function(e){
return this.__data__.set(e,"__lodash_hash_undefined__"),this},B.prototype.has=Ga,lt=B,dt=I=function(e,t){for(var r=-1,
n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},ft=function(e,t){return e.has(t)},P=C.Uint8Array,pt=P,
ht=Ee,gt=s=function(e,t,r,n,o,i){var a,s,u,c,l,d,f,p=1&r,h=e.length,g=t.length;if(h!=g&&!(p&&h<g))return!1;if(g=i.get(e)
,a=i.get(t),g&&a)return g==t&&a==e;for(s=-1,u=!0,c=2&r?new lt:void 0,i.set(e,t),i.set(t,e);++s<h;){if(l=e[s],d=t[s],
void 0!==(f=n?p?n(d,l,s,t,e,i):n(l,d,s,e,t,i):f)){if(f)continue;u=!1;break}if(c){if(!dt(t,function(e,t){if(!ft(c,t)&&(
l===e||o(l,e,r,n,i)))return c.push(t)})){u=!1;break}}else if(l!==d&&!o(l,d,r,n,i)){u=!1;break}}return i.delete(e),
i.delete(t),u},mt=function(e){var r=-1,n=Array(e.size);return e.forEach(function(e,t){n[++r]=[t,e]}),n},vt=n=function(e
){var t=-1,r=Array(e.size);return e.forEach(function(e){r[++t]=e}),r},T=L?L.prototype:void 0,yt=T?T.valueOf:void 0,
N=function(e,t,r,n,o,i,a){var s,u;switch(r){case"[object DataView]":if(
e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":
return!(e.byteLength!=t.byteLength||!i(new pt(e),new pt(t)));case"[object Boolean]":case"[object Date]":
case"[object Number]":return ht(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;
case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":s=mt;case"[object Set]":return s=s||vt,!!(
e.size==t.size||1&n)&&((u=a.get(e))?u==t:(n|=2,a.set(e,t),u=gt(s(e),s(t),n,o,i,a),a.delete(e),u));case"[object Symbol]":
if(yt)return yt.call(e)==yt.call(t)}return!1},Ga=function(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];
return e},P=Array.isArray,bt=Ga,_t=a=P,T=function(e,t,r){return t=t(e),_t(e)?t:bt(t,r(e))},Et=P=function(e,t){for(var r,
n=-1,o=null==e?0:e.length,i=0,a=[];++n<o;)t(r=e[n],n,e)&&(a[i++]=r);return a},w=Object.prototype,
Ot=w.propertyIsEnumerable,w=(Rt=Object.getOwnPropertySymbols)?function(t){return null==t?[]:(t=Object(t),Et(Rt(t),
function(e){return Ot.call(t,e)}))}:function(){return[]},Oo=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);
return n},wt=p,R=function(e){return Tt(e)&&"[object Arguments]"==wt(e)},St=Tt=va=function(e){
return null!=e&&"object"==typeof e},f=Object.prototype,At=f.hasOwnProperty,Nt=f.propertyIsEnumerable,f=R(function(){
return arguments}())?R:function(e){return St(e)&&At.call(e,"callee")&&!Nt.call(e,"callee")},E=(ma=(ma=(E=(E=(R={
exports:{}}).exports)&&!E.nodeType&&E)&&R&&!R.nodeType&&R)&&ma.exports===E?C.Buffer:void 0)?ma.isBuffer:void 0,
R.exports=E||function(){return!1},Pt=/^(?:0|[1-9]\d*)$/,ma=function(e,t){var r=typeof e;return!!(
t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&Pt.test(e))&&-1<e&&e%1==0&&e<t},xt=p,It=E=function(e){
return"number"==typeof e&&-1<e&&e%1==0&&e<=9007199254740991},jt=va,(t={}
)["[object Float32Array]"]=t["[object Float64Array]"]=t["[object Int8Array]"]=t["[object Int16Array]"]=t["[object Int32Array]"]=t["[object Uint8Array]"]=t["[object Uint8ClampedArray]"]=t["[object Uint16Array]"]=t["[object Uint32Array]"]=!0
,
t["[object Arguments]"]=t["[object Array]"]=t["[object ArrayBuffer]"]=t["[object Boolean]"]=t["[object DataView]"]=t["[object Date]"]=t["[object Error]"]=t["[object Function]"]=t["[object Map]"]=t["[object Number]"]=t["[object Object]"]=t["[object RegExp]"]=t["[object Set]"]=t["[object String]"]=t["[object WeakMap]"]=!1
,A=function(e){return jt(e)&&It(e.length)&&!!t[xt(e)]},ga=function(t){return function(e){return t(e)}},_=(_=(b=Lt={
exports:{}}).exports)&&!_.nodeType&&_,_=(pa=_&&b&&!b.nodeType&&b)&&pa.exports===_,ha=_&&j.process,_=function(){try{
return pa&&pa.require&&pa.require("util").types||ha&&ha.binding&&ha.binding("util")}catch(e){}}(),b.exports=_,_=(b=(
j=Lt.exports)&&j.isTypedArray)?ga(b):A,Ct=Oo,Ut=f,Gt=a,Ft=R.exports,Dt=ma,Mt=j=_,b=Object.prototype,qt=b.hasOwnProperty,
kt=Object.prototype,Oa=Object.keys,Ra=Object,Bt=function(e){var t=e&&e.constructor;return e===(
"function"==typeof t&&t.prototype||kt)},Vt=function(e){return Oa(Ra(e))},A=Object.prototype,zt=A.hasOwnProperty,$t=Ce,
Ht=E,Wt=function(e,t){var r,n=Gt(e),o=!n&&Ut(e),i=!n&&!o&&Ft(e),a=!n&&!o&&!i&&Mt(e),s=n||o||i||a,u=s?Ct(e.length,String
):[],c=u.length;for(r in e)!t&&!qt.call(e,r)||s&&("length"==r||i&&("offset"==r||"parent"==r)||a&&(
"buffer"==r||"byteLength"==r||"byteOffset"==r)||Dt(r,c))||u.push(r);return u},Jt=function(e){var t,r;if(!Bt(e)
)return Vt(e);for(r in t=[],Object(e))zt.call(e,r)&&"constructor"!=r&&t.push(r);return t},Kt=Oo=function(e){
return null!=e&&Ht(e.length)&&!$t(e)},Xt=T,Qt=w,Yt=_=function(e){return(Kt(e)?Wt:Jt)(e)},Zt=function(e){return Xt(e,Yt,
Qt)},b=Object.prototype,er=b.hasOwnProperty,A=function(e,t,r,n,o,i){var a,s,u,c,l,d,f,p,h,g=1&r,m=Zt(e),v=m.length;if(
v!=Zt(t).length&&!g)return!1;for(a=v;a--;)if(s=m[a],!(g?s in t:er.call(t,s)))return!1;if(p=i.get(e),h=i.get(t),p&&h
)return p==t&&h==e;for(u=!0,i.set(e,t),i.set(t,e),c=g;++a<v;){if(l=e[s=m[a]],d=t[s],!(void 0===(f=n?g?n(d,l,s,t,e,i):n(l
,d,s,e,t,i):f)?l===d||o(l,d,r,n,i):f)){u=!1;break}c=c||"constructor"==s}return u&&!c&&(p=e.constructor)!=(
h=t.constructor)&&"constructor"in e&&"constructor"in t&&!(
"function"==typeof p&&p instanceof p&&"function"==typeof h&&h instanceof h)&&(u=!1),i.delete(e),i.delete(t),u},T=S(C,
"DataView"),w=o,b=S(C,"Promise"),h=o=S(C,"Set"),C=S(C,"WeakMap"),tr=p,nr=(rr=v)(v=T),or=rr(w),ir=rr(b),ar=rr(h),sr=rr(C)
,T=tr,(v&&"[object DataView]"!=T(new v(new ArrayBuffer(1)))||w&&"[object Map]"!=T(new w)||b&&"[object Promise]"!=T(
b.resolve())||h&&"[object Set]"!=T(new h)||C&&"[object WeakMap]"!=T(new C))&&(T=function(e){var t=tr(e);if(e=(
e="[object Object]"==t?e.constructor:void 0)?rr(e):"")switch(e){case nr:return"[object DataView]";case or:
return"[object Map]";case ir:return"[object Promise]";case ar:return"[object Set]";case sr:return"[object WeakMap]"}
return t}),ur=x,cr=s,lr=N,dr=A,fr=T,pr=a,hr=R.exports,gr=j,mr="[object Arguments]",vr="[object Array]",
yr="[object Object]",v=Object.prototype,br=v.hasOwnProperty,_r=function(e,t,r,n,o,i){var a=pr(e),s=pr(t),u=a?vr:fr(e),
s=s?vr:fr(t),c=(u=u==mr?yr:u)==yr,l=(s=s==mr?yr:s)==yr;if((s=u==s)&&hr(e)){if(!hr(t))return!1;c=!(a=!0)}return s&&!c?(
i=i||new ur,a||gr(e)?cr(e,t,r,n,o,i):lr(e,t,u,r,n,o,i)):1&r||(a=c&&br.call(e,"__wrapped__"),u=l&&br.call(t,"__wrapped__"
),!a&&!u)?s&&(i=i||new ur,dr(e,t,r,n,o,i)):o(a?e.value():e,u?t.value():t,r,n,i=i||new ur)},Or=x,Rr=w=function e(t,r,n,o,
i){return t===r||(null==t||null==r||!Er(t)&&!Er(r)?t!=t&&r!=r:_r(t,r,n,o,e,i))},wr=Ie,Tr=b=function(e){return e==e&&!wr(
e)},Sr=_,Ar=function(e,t,r,n){var o,i,a,s,u,c,l=r.length,d=l,f=!n;if(null==e)return!d;for(e=Object(e);l--;)if(o=r[l],
f&&o[2]?o[1]!==e[o[0]]:!(o[0]in e))return!1;for(;++l<d;)if(a=e[i=(o=r[l])[0]],s=o[1],f&&o[2]){if(void 0===a&&!(i in e)
)return!1}else if(u=new Or,!(void 0===(c=n?n(a,s,i,e,t,u):c)?Rr(s,a,3,n,u):c))return!1;return!0},Nr=function(e){for(
var t,r,n=Sr(e),o=n.length;o--;)r=e[t=n[o]],n[o]=[t,r,Tr(r)];return n},Pr=h=function(t,r){return function(e){
return null!=e&&e[t]===r&&(void 0!==r||t in Object(e))}},C=function(t){var r=Nr(t);return 1==r.length&&r[0][2]?Pr(
r[0][0],r[0][1]):function(e){return e===t||Ar(e,t,r)}},xr=p,Ir=Er=va,jr=a,Lr=s=function(e){return"symbol"==typeof e||Ir(
e)&&"[object Symbol]"==xr(e)},Cr=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ur=/^\w*$/,N=function(e,t){if(jr(e)
)return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!Lr(e))||Ur.test(e)||!Cr.test(e
)||null!=t&&e in Object(t)},Gr=r,V.Cache=Gr,
Fr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Dr=/\\(\\)?/g,Ea=(
A=V(function(e){var o=[];return 46===e.charCodeAt(0)&&o.push(""),e.replace(Fr,function(e,t,r,n){o.push(r?n.replace(Dr,
"$1"):t||e)}),o},function(e){return 500===Ea.size&&Ea.clear(),e})).cache,Mr=_e,qr=a,kr=s,T=L?L.prototype:void 0,
Br=T?T.toString:void 0,Vr=R=function e(t){if("string"==typeof t)return t;if(qr(t))return Mr(t,e)+"";if(kr(t)
)return Br?Br.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},Hr=A,Wr=j=function(e){return null==e?"":Vr(e)},Jr=s,
Yr=Kr=function(e,t){return zr(e)?e:$r(e,t)?[e]:Hr(Wr(e))},Zr=f,rn=E,on=function(e,t){return null!=e&&t in Object(e)},
an=v=function(e,t,r){for(var n,o,i=(t=Yr(t,e)).length,a=!(n=-1);++n<i&&(o=nn(t[n]),a=null!=e&&r(e,o));)e=e[o];
return a||++n!=i?a:!!(i=null==e?0:e.length)&&rn(i)&&tn(o,i)&&(en(e)||Zr(e))},sn=w,un=function(e,t,r){return void 0===(
e=null==e?void 0:Qr(e,t))?r:e},cn=function(e,t){return null!=e&&an(e,t,on)},dn=b,fn=h,hn=Qr=x=function(e,t){for(var r=0,
n=(t=Kr(t,e)).length;null!=e&&r<n;)e=e[Xr(t[r++])];return r&&r==n?e:void 0},gn=function(t){return function(e){
return null==e?void 0:e[t]}},mn=function(t){return function(e){return hn(e,t)}},vn=ln=$r=N,yn=pn=nn=Xr=function(e){if(
"string"==typeof e||Jr(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},bn=C,_n=function(r,n){return ln(r)&&dn(n
)?fn(pn(r),n):function(e){var t=un(e,r);return void 0===t&&t===n?cn(e,r):sn(n,t,3)}},En=r=function(e){return e},
On=en=zr=a,Rn=function(e){return vn(e)?gn(yn(e)):mn(e)},wn=function(e,t,r){for(var n,o=-1,i=Object(e),a=r(e),
s=a.length;s--&&!1!==t(i[n=a[++o]],n,i););return e},Tn=_,Pn=_e,In=T=function(e,n){var o=-1,i=Nn(e)?Array(e.length):[];
return An(e,function(e,t,r){i[++o]=n(e,t,r)}),i},Ln=function(e,t){return(jn(e)?Pn:In)(e,xn(t))},Un=Ee,Gn=Nn=Sn=Oo,
Fn=tn=ma,Dn=Ie,Mn=I,kn=function(e,n){var o;return Cn(e,function(e,t,r){return!(o=n(e,t,r))}),!!o},zn=function(e,t,r){
var n=Bn(e)?Mn:kn;return r&&Vn(e,t,r)&&(t=void 0),n(e,qn(t))},$n=Cn=An=A=function(e,t){if(null==e)return e;if(!Sn(e)
)return e&&wn(e,t,Tn);for(var r=e.length,n=-1,o=Object(e);++n<r&&!1!==t(o[n],n,o););return e},Hn=function(e,t){for(
var r=-1,n=null==e?0:e.length;++r<n;)if(!t(e[r],r,e))return!1;return!0},Wn=function(e,n){var o=!0;return $n(e,function(e
,t,r){return o=!!n(e,t,r)}),o},Jn=qn=xn=E=function(e){return"function"==typeof e?e:null==e?En:"object"==typeof e?On(e
)?_n(e[0],e[1]):bn(e):Rn(e)},Kn=Bn=jn=a,Xn=Vn=w=function(e,t,r){if(!Dn(r))return!1;var n=typeof t;return!!(
"number"==n?Gn(r)&&Fn(t,r.length):"string"==n&&t in r)&&Un(r[t],e)},Qn=function(e,t,r){var n=Kn(e)?Hn:Wn;return r&&Xn(e,
t,r)&&(t=void 0),n(e,Jn(t))},Yn=S,b=function(){try{var e=Yn(Object,"defineProperty");return e({},"",{}),e}catch(e){}}(),
Zn=f,eo=a,to=L?L.isConcatSpreadable:void 0,no=function(e){return eo(e)||Zn(e)||!!(to&&e&&e[to])},oo=ro=Ga,
io=h=function e(t,r,n,o,i){var a,s=-1,u=t.length;for(n=n||no,i=i||[];++s<u;)a=t[s],0<r&&n(a)?1<r?e(a,r-1,n,o,i):ro(i,a
):o||(i[i.length]=a);return i},ao=function(e,t){var r=-1,n=e.length;for(t=t||Array(n);++r<n;)t[r]=e[r];return t},so=a,
uo=function(){var e,t,r,n=arguments.length;if(!n)return[];for(e=Array(n-1),t=arguments[0],r=n;r--;)e[r-1]=arguments[r];
return oo(so(t)?ao(t):[t],io(e,1))},co=/\s/,lo=function(e){for(var t=e.length;t--&&co.test(e.charAt(t)););return t},
fo=/^\s+/,po=N=function(e){return e&&e.slice(0,lo(e)+1).replace(fo,"")},ho=Ie,go=s,mo=/^[-+]0x[0-9a-f]+$/i,
vo=/^0b[01]+$/i,yo=/^0o[0-7]+$/i,bo=parseInt,_o=function(e){var t;return"number"==typeof e?e:go(e)?NaN:(ho(e)&&(
t="function"==typeof e.valueOf?e.valueOf():e,e=ho(t)?t+"":t),"string"!=typeof e?0===e?e:+e:(e=po(e),(t=vo.test(e)
)||yo.test(e)?bo(e.slice(2),t?2:8):mo.test(e)?NaN:+e))},Eo=function(e){return e?(e=_o(e)
)===1/0||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0},C=function(e){var t=(e=Eo(e))%1;
return e==e?t?e-t:e:0},Oo=function(e,t,r){var n,o=-1,i=e.length;for((r=i<r?i:r)<0&&(r+=i),i=r<(t=t<0?i<-t?0:i+t:t
)?0:r-t>>>0,t>>>=0,n=Array(i);++o<i;)n[o]=e[o+t];return n},Ro=function(e,t,r,n){for(var o=e.length,i=r+(n?1:-1
);n?i--:++i<o;)if(t(e[i],i,e))return i;return-1},wo=function(e){return e!=e},To=function(e,t,r){for(var n=r-1,
o=e.length;++n<o;)if(e[n]===t)return n;return-1},ma=function(e,t,r){return t==t?To(e,t,r):Ro(e,wo,r)},o&&n(new o([,-0])
)[1],So=s,Ao=function(e,t){var r,n,o,i,a,s,u,c;if(e!==t){if(r=void 0!==e,n=null===e,o=e==e,i=So(e),a=void 0!==t,
s=null===t,u=t==t,c=So(t),!s&&!c&&!i&&t<e||i&&a&&u&&!s&&!c||n&&a&&u||!r&&u||!o)return 1;if(
!n&&!i&&!c&&e<t||c&&r&&o&&!n&&!i||s&&r&&o||!a&&o||!u)return-1}return 0},No=_e,Po=x,xo=E,Io=T,jo=function(e,t){
var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e},Lo=ga,Co=function(e,t,r){for(var n,o=-1,i=e.criteria,
a=t.criteria,s=i.length,u=r.length;++o<s;)if(n=Ao(i[o],a[o]))return u<=o?n:n*("desc"==r[o]?-1:1);return e.index-t.index}
,Uo=r,Go=a,Fo=function(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:
return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)},Do=Math.max,Mo=function(e){
return function(){return e}},I=(qo=b)?function(e,t){return qo(e,"toString",{configurable:!0,enumerable:!1,value:Mo(t),
writable:!0})}:r,ko=Date.now,ya=I,Bo=h,Vo=function(e,n,r){var o;return n=n.length?No(n,function(t){return Go(t
)?function(e){return Po(e,1===t.length?t[0]:t)}:t}):[Uo],o=-1,n=No(n,Lo(xo)),e=Io(e,function(t,e,r){return{criteria:No(n
,function(e){return e(t)}),index:++o,value:t}}),jo(e,function(e,t){return Co(e,t,r)})},zo=w,function(){var e=ko(),
t=16-e+ +_a;if(_a=e,0<t){if(800<=++ba)return}else ba=0;ya.apply(void 0,arguments)}((wa=S=function(e,t){if(null==e
)return[];var r=t.length;return 1<r&&zo(e,t[0],t[1])?t=[]:2<r&&zo(t[0],t[1],t[2])&&(t=[t[0]]),Vo(e,Bo(t,1),[])},Ta=void(
_a=ba=0),Sa=r,Ta=Do(void 0===Ta?wa.length-1:Ta,0),function(){for(var e,t=arguments,r=-1,n=Do(t.length-Ta,0),o=Array(n
);++r<n;)o[r]=t[Ta+r];for(r=-1,e=Array(Ta+1);++r<Ta;)e[r]=t[r];return e[Ta]=Sa(o),Fo(wa,this,e)}),S+""),Ho=P,
Wo=function(e,n){var o=[];return $o(e,function(e,t,r){n(e,t,r)&&o.push(e)}),o},Jo=E,Xo=function(e,t){return(Ko(e)?Ho:Wo
)(e,Jo(t))},Qo=r,Yo=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e},Zo=$o=A,
ei=function(e){return"function"==typeof e?e:Qo},ti=Ko=a,ri=function(e,t){return(ti(e)?Yo:Zo)(e,ei(t))},ni=Oo,f=function(
e,t,r){var n=e.length;return r=void 0===r?n:r,!t&&n<=r?e:ni(e,t,r)},oi=RegExp(
"[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),L=function(e){return oi.test(e)},
(Ga=Lt.exports)&&Ga.isRegExp,n=function(e){return e.split("")},
o="[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:"+[
"[^\\ud800-\\udfff]","(?:\\ud83c[\\udde6-\\uddff]){2}","[\\ud800-\\udbff][\\udc00-\\udfff]"].join("|"
)+")[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?)*",s="(?:"+[
"[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]?","[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
"(?:\\ud83c[\\udde6-\\uddff]){2}","[\\ud800-\\udbff][\\udc00-\\udfff]","[\\ud800-\\udfff]"].join("|")+")",ii=RegExp(
"\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|"+s+o,"g"),ai=n,si=L,ui=function(e){return e.match(ii)||[]},
li=ci=ma,di=R,fi=N,pi=f,hi=function(e,t){for(var r=e.length;r--&&-1<ci(t,e[r],0););return r},gi=function(e,t){for(
var r=-1,n=e.length;++r<n&&-1<li(t,e[r],0););return r},mi=function(e){return(si(e)?ui:ai)(e)},vi=j,yi=function(e,t,r){
return(e=vi(e))&&(r||void 0===t)?fi(e):e&&(t=di(t))?(r=mi(e),e=mi(t),t=gi(r,e),e=hi(r,e)+1,pi(r,t,e).join("")):e},
x=Object.prototype,bi=x.hasOwnProperty,_i=function(e,t){return null!=e&&bi.call(e,t)},Ei=v,Oi=function(e,t){
return null!=e&&Ei(e,t,_i)},Ti=function(e){return!0===e||!1===e||wi(e)&&"[object Boolean]"==Ri(e)},Si=function(e){
return null===e},Ni=a,xi=function(e){return"string"==typeof e||!Ni(e)&&Pi(e)&&"[object String]"==Ai(e)},Ii=Ai=Ri=p,
ji=Pi=wi=va,Li=function(e){return"number"==typeof e||ji(e)&&"[object Number]"==Ii(e)},Ci=function(e,t,r){return e==e&&(
void 0!==r&&(e=e<=r?e:r),void 0!==t&&(e=t<=e?e:t)),e},Ui=R,Gi=C,Fi=j,Di=function(e,t,r){return e=Fi(e),r=null==r?0:Ci(
Gi(r),0,e.length),t=Ui(t),e.slice(r,r+t.length)==t},Mi=_e,qi=function(t,e){return Mi(e,function(e){return t[e]})},ki=_,
Bi=function(e){return null==e?[]:qi(e,ki(e))};class Za{constructor(e,t){i(this,"_logger",void 0),i(this,"name",void 0),
i(this,"_level",void 0),this.name=e,this._logger=t,this._level=void 0}getLogLevel(){var e;return null!=(e=this._level
)?e:this._logger.getLogLevel()}setLogLevel(e){return this._level=e,this}debug(...e){(
void 0===this._level||this._level<=c.DEBUG)&&this._logger.debug(`[${this.name}]`,...e)}info(...e){(
void 0===this._level||this._level<=c.INFO)&&this._logger.info(`[${this.name}]`,...e)}warn(...e){(
void 0===this._level||this._level<=c.WARN)&&this._logger.warn(`[${this.name}]`,...e)}error(...e){(
void 0===this._level||this._level<=c.ERROR)&&this._logger.error(`[${this.name}]`,...e)}}class es{static setLogLevel(e){
return e&&(this._level=e),this}static getLogLevel(){return this._level}static getLogLevelString(){var e=this._level;
switch(e){case u.DEBUG:return"DEBUG";case u.INFO:return"INFO";case u.WARN:return"WARN";case u.ERROR:return"ERROR";
case u.NONE:return"NONE";default:return"Unknown:"+e}}static setLogger(e){if(!e)throw new TypeError(
"The logger was not defined");this._logger=e}static debug(...e){this._level<=c.DEBUG&&this._logger.debug(...e)}
static info(...e){this._level<=c.INFO&&this._logger.info(...e)}static warn(...e){this._level<=c.WARN&&this._logger.warn(
...e)}static error(...e){this._level<=c.ERROR&&this._logger.error(...e)}static createLogger(e){return new Za(e,es)}}i(es
,"Level",c=u={DEBUG:0,0:"DEBUG",INFO:1,1:"INFO",WARN:2,2:"WARN",ERROR:3,3:"ERROR",NONE:4,4:"NONE"}),i(es,"_level",
c.DEBUG),i(es,"_logger",console);const ts=es.createLogger("ProcessUtils");class rs{static getArguments(){
return process.argv.slice(2)}static parseEnvFileLine(e,t){if(t.indexOf("=")<0)return t.length&&(e[t]=""),e;
const r=t.split("=");return t=r.shift(),(t=yi(t)).length&&(e[t]=r.join("=").trim()),e}static parseEnvFile(e){
const t=Fa.default.readFileSync(e,{encoding:"utf-8"}),r=t.split("\n");return r.reduce(rs.parseEnvFileLine,{})}
static initEnvFromFile(e){e=rs.parseEnvFile(e),process.env=d(d({},e),process.env)}static initEnvFromDefaultFiles(){
var e=Da.default.join(process.cwd(),".env");Fa.default.existsSync(e)&&rs.initEnvFromFile(e)}static setupDestroyHandler(r
,n){let o=!1;var e=t=>e=>{rs._printErrors(t,e);try{if(o)return;o=!0,r()}catch(e){n(e)}};process.on("exit",e("exit")),
process.on("SIGTERM",e("SIGTERM")),process.on("SIGINT",e("SIGINT")),process.on("SIGUSR1",e("SIGUSR1")),process.on(
"SIGUSR2",e("SIGUSR2")),process.on("uncaughtException",e("uncaughtException"))}static _printErrors(e,t){try{t?ts.error(
`Closing process because "${e}" event: `,t):ts.error(`Closing process because "${e}" event`)}catch(e){console.error(
"Error while printing errors: ",e)}}}Z("0.0.1"),ga=null!=(T=Z(""))?T:"hgm",I=null!=(b=Z(""))?b:"",Z("production"),Z(
"2022-03-05T00:09:50.168Z"),"".startsWith("%{")&&"".endsWith("}"),E=null!=(P=function(e){if(e){if(function(){switch(e){
case u.DEBUG:case u.INFO:case u.WARN:case u.ERROR:case u.NONE:return 1;default:return}}())return e;switch(e=(""+e
).toUpperCase()){case"ALL":case"DEBUG":return u.DEBUG;case"INFO":return u.INFO;case"WARN":case"WARNING":return u.WARN;
case"ERR":case"ERROR":return u.ERROR;case"FALSE":case"OFF":case"QUIET":case"SILENT":case"NONE":return u.NONE;default:
return}}}(null!=(S=Q(null==(h=process)||null==(w=h.env)?void 0:w.LOG_LEVEL))?S:Q(I)))?P:u.INFO;const ns=null!=(Oo=Q(
null==(r=process)||null==(A=r.env)?void 0:A.COMMAND_NAME))?Oo:ga,os=(zi=Vi={OK:0,0:"OK",GENERAL_ERRORS:1,
1:"GENERAL_ERRORS",MISUSE_OF_SHELL_BUILTINS:2,2:"MISUSE_OF_SHELL_BUILTINS",ARGUMENT_PARSE_ERROR:3,
3:"ARGUMENT_PARSE_ERROR",UNKNOWN_ARGUMENT:4,4:"UNKNOWN_ARGUMENT",UNIMPLEMENTED_FEATURE:5,5:"UNIMPLEMENTED_FEATURE",
FATAL_ERROR:6,6:"FATAL_ERROR",CONFLICT:7,7:"CONFLICT",USAGE:64,64:"USAGE",DATAERR:65,65:"DATAERR",NOINPUT:66,
66:"NOINPUT",NOUSER:67,67:"NOUSER",NOHOST:68,68:"NOHOST",UNAVAILABLE:69,69:"UNAVAILABLE",SOFTWARE:70,70:"SOFTWARE",
OSERR:71,71:"OSERR",OSFILE:72,72:"OSFILE",CANTCREAT:73,73:"CANTCREAT",IOERR:74,74:"IOERR",TEMPFAIL:75,75:"TEMPFAIL",
PROTOCOL:76,76:"PROTOCOL",NOPERM:77,77:"NOPERM",CONFIG:78,78:"CONFIG",COMMAND_INVOKED_CANNOT_EXECUTE:126,
126:"COMMAND_INVOKED_CANNOT_EXECUTE",COMMAND_NOT_FOUND:127,127:"COMMAND_NOT_FOUND",INVALID_ARGUMENT_TO_EXIT:128,
128:"INVALID_ARGUMENT_TO_EXIT",FATAL_SIGNAL_RANGE_START:129,129:"FATAL_SIGNAL_RANGE_START",FATAL_SIGNAL_RANGE_END:254,
254:"FATAL_SIGNAL_RANGE_END",EXIT_STATUS_OUT_OF_RANGE:255,255:"EXIT_STATUS_OUT_OF_RANGE"},O=$i={OPTIONS:0,0:"OPTIONS",
GET:1,1:"GET",POST:2,2:"POST",PUT:3,3:"PUT",DELETE:4,4:"DELETE",PATCH:5,5:"PATCH"},"WINDOW"===(ma=null!=(L=null!=(
s=null==(Lt=process)||null==(Ga=Lt.env)?void 0:Ga.NOR_REQUEST_CLIENT_MODE)?s:null==(o=process)||null==(n=o.env
)?void 0:n.REACT_APP_REQUEST_CLIENT_MODE)?L:"")||!("undefined"==typeof window||!window.fetch)),is="NODE"===ma||!os;
class as{static async getRequestDataAsBuffer(n){return new Promise((e,t)=>{const r=[];n.on("data",e=>{try{r.push(e)
}catch(e){t(e)}}),n.on("end",()=>{try{e(Buffer.concat(r))}catch(e){t(e)}})})}static async getRequestDataAsString(e,
t="utf8"){const r=await as.getRequestDataAsBuffer(e);return r.toString(t)}static async getRequestDataAsFormUrlEncoded(e
){if(""!==(e=await as.getRequestDataAsString(e)))return Ma.parse(e)}static async getRequestDataAsJson(e){if(""!==(
e=await as.getRequestDataAsString(e)))return JSON.parse(e)}}(N=l={Continue:100,100:"Continue",SwitchingProtocols:101,
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
)[500]="InternalServerError",N[N.NotImplemented=501]="NotImplemented",N[N.BadGateway=502]="BadGateway",
N[N.ServiceUnavailable=503]="ServiceUnavailable",N[N.GatewayTimeout=504]="GatewayTimeout",
N[N.HttpVersionNotSupported=505]="HttpVersionNotSupported",N[N.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",
N[N.InsufficientStorage=507]="InsufficientStorage",N[N.LoopDetected=508]="LoopDetected",
N[N.BandwidthLimitExceeded=509]="BandwidthLimitExceeded",N[N.NotExtended=510]="NotExtended",
N[N.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",Hi={ERROR:"error"};class ss extends Error{
constructor(e,t=void 0,r=void 0,n=void 0,o=void 0){super(t||function(e){switch(e){case l.Continue:return"Continue";
case l.SwitchingProtocols:return"Switching Protocols";case l.Processing:return"Processing";case l.CheckPoint:
return"Check Point";case l.OK:return"OK";case l.Created:return"Created";case l.Accepted:return"Accepted";
case l.NonAuthoritativeInformation:return"Non-Authoritative Information";case l.NoContent:return"No Content";
case l.ResetContent:return"Reset Content";case l.PartialContent:return"Partial Content";case l.MultiStatus:
return"Multi Status";case l.AlreadyReported:return"Already Reported";case l.IMUsed:return"IM Used";
case l.MultipleChoices:return"Multiple Choices";case l.MovedPermanently:return"Moved Permanently";case l.Found:
return"Found";case l.SeeOther:return"See Other";case l.NotModified:return"Not Modified";case l.TemporaryRedirect:
return"Temporary Redirect";case l.PermanentRedirect:return"Permanent Redirect";case l.BadRequest:return"Bad Request";
case l.Unauthorized:return"Unauthorized";case l.PaymentRequired:return"Payment Required";case l.Forbidden:
return"Forbidden";case l.NotFound:return"Not Found";case l.MethodNotAllowed:return"Method Not Allowed";
case l.NotAcceptable:return"Not Acceptable";case l.ProxyAuthenticationRequired:return"Proxy Authentication Required";
case l.RequestTimeout:return"Request Timeout";case l.Conflict:return"Conflict";case l.Gone:return"Gone";
case l.LengthRequired:return"Length Required";case l.PreconditionFailed:return"Precondition Failed";
case l.PayloadTooLarge:return"Payload Too Large";case l.URITooLong:return"URI Too Long";case l.UnsupportedMediaType:
return"Unsupported Media Type";case l.RequestedRangeNotSatisfiable:return"Requested Range Not Satisfiable";
case l.ExpectationFailed:return"Expectation Failed";case l.IAmATeapot:return"I Am a Teapot";case l.UnprocessableEntity:
return"Unprocessable Entity";case l.Locked:return"Locked";case l.FailedDependency:return"Failed Dependency";
case l.TooEarly:return"Too Early";case l.UpgradeRequired:return"Upgrade Required";case l.PreconditionRequired:
return"Precondition Required";case l.TooManyRequests:return"Too Many Requests";case l.RequestHeaderFieldsTooLarge:
return"Request Header Fields Too Large";case l.UnavailableForLegalReasons:return"Unavailable For Legal Reasons";
case l.InternalServerError:return"Internal Server Error";case l.NotImplemented:return"Not Implemented";
case l.BadGateway:return"Bad Gateway";case l.ServiceUnavailable:return"Service Unavailable";case l.GatewayTimeout:
return"Gateway Timeout";case l.HttpVersionNotSupported:return"Http Version Not Supported";case l.VariantAlsoNegotiates:
return"Variant Also Negotiates";case l.InsufficientStorage:return"Insufficient Storage";case l.LoopDetected:
return"Loop Detected";case l.BandwidthLimitExceeded:return"Bandwidth Limit Exceeded";case l.NotExtended:
return"Not Extended";case l.NetworkAuthenticationRequired:return"Network Authentication Required";default:
return e<400?"HTTP Status":"HTTP Error"}}(e)),i(this,"status",void 0),i(this,"method",void 0),i(this,"url",void 0),i(
this,"body",void 0),i(this,"__proto__",void 0),t=new.target.prototype,Object.setPrototypeOf?Object.setPrototypeOf(this,t
):this.__proto__=t,this.status=e,this.method=r,this.url=n,this.body=o}valueOf(){return this.status}toString(){
return this.status+" "+this.message}toJSON(){return{type:Hi.ERROR,status:this.status,message:this.message}}
getStatusCode(){return this.status}getMethod(){return this.method}getUrl(){return this.url}getBody(){return this.body}}
const us=is?require("fs").promises:void 0,cs=es.createLogger("NodeRequestClient");class ls{static setLogLevel(e){
cs.setLogLevel(e)}constructor(e,t){i(this,"_http",void 0),i(this,"_https",void 0),this._http=e,this._https=t}
async jsonRequest(e,t,r,n){switch(e){case O.GET:return this._getJson(t,r,n);case O.POST:return this._postJson(t,r,n);
case O.PATCH:return this._patchJson(t,r,n);case O.PUT:return this._putJson(t,r,n);case O.DELETE:return this._deleteJson(
t,r,n);default:throw new TypeError("[Node]RequestClient: Unsupported method: "+e)}}async _checkSocketFile(t){try{
const e=await us.stat(t);return!!e.isSocket()}catch(e){if("ENOTDIR"===(t=null==e?void 0:e.code))return void cs.debug(
"_checkSocketFile: ENOTDIR: ",e);if("ENOENT"===t)return void cs.debug("_checkSocketFile: ENOENT: ",e);throw cs.error(
`_checkSocketFile: Error "${t}" passed on: `,e),e}}async _findSocketFile(e){var t=await this._checkSocketFile(e);
return!0===t?e:!1!==t&&"/"!==(t=Da.default.dirname(e))&&t!==e?this._findSocketFile(t):void 0}async _httpRequest(i,a,e){
var t;const s=e?JSON.stringify(e)+"\n":void 0,u=new qa.default.URL(i);let c;const l=null!=(
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
return t&&(n.headers=d(d({},n.headers),t)),this._request(O.GET,e,n,r).then(ls._successResponse)}async _putJson(e,t,r){
const n={method:"PUT",headers:{"Content-Type":"application/json"}};return t&&(n.headers=d(d({},n.headers),t)),
this._request(O.PUT,e,n,r).then(ls._successResponse)}async _postJson(e,t,r){const n={method:"POST",headers:{
"Content-Type":"application/json"}};return t&&(n.headers=d(d({},n.headers),t)),this._request(O.POST,e,n,r).then(
ls._successResponse)}async _patchJson(e,t,r){const n={method:"PATCH",headers:{"Content-Type":"application/json"}};
return t&&(n.headers=d(d({},n.headers),t)),this._request(O.PATCH,e,n,r).then(ls._successResponse)}async _deleteJson(e,t,
r){const n={method:"DELETE",headers:{"Content-Type":"application/json"}};return t&&(n.headers=d(d({},n.headers),t)),
this._request(O.DELETE,e,n,r).then(ls._successResponse)}static async _successResponse(e){
var t=null==e?void 0:e.statusCode;if(t<200||400<=t)throw cs.error(`Unsuccessful response with status ${t}: `,e),new ss(t
,`Error ${t} for ${ee(e.method)} `+e.url,e.method,e.url,e.body);return e.body}}class ds{constructor(e){i(this,"_fetch",
void 0),this._fetch=e}jsonRequest(e,t,r,n){switch(e){case O.GET:return this._getJson(t,r,n);case O.POST:
return this._postJson(t,r,n);case O.PUT:return this._putJson(t,r,n);case O.DELETE:return this._deleteJson(t,r,n);
default:throw new TypeError("[Fetch]RequestClient: Unsupported method: "+e)}}_getJson(e,t,r){const n={method:"GET",
mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},credentials:"same-origin"};return t&&(
n.headers=d(d({},n.headers),t)),r&&(n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>ds._successResponse(e,O.GET))}
_putJson(e,t,r){const n={method:"PUT",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},
credentials:"same-origin"};return t&&(n.headers=d(d({},n.headers),t)),r&&(n.body=JSON.stringify(r)),this._fetch(e,n
).then(e=>ds._successResponse(e,O.PUT))}_postJson(e,t,r){const n={method:"POST",mode:"cors",cache:"no-cache",headers:{
"Content-Type":"application/json"},credentials:"same-origin"};return t&&(n.headers=d(d({},n.headers),t)),r&&(
n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>ds._successResponse(e,O.POST))}_deleteJson(e,t,r){const n={
method:"DELETE",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},credentials:"same-origin"};
return t&&(n.headers=d(d({},n.headers),t)),r&&(n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>ds._successResponse(e,
O.DELETE))}static _successResponse(e,t){const r=e.status;if(!e.ok||r<200||400<=r){const n=e.url,
o=`${r} ${e.statusText} for ${ee(t)} `+n;return e.json().then(e=>{throw new ss(r,o,t,n,e)})}return e.json()}}
const fs=is?require("http"):void 0,ps=is?require("https"):void 0,hs=es.createLogger("RequestClient");class gs{
static setLogLevel(e){hs.setLogLevel(e),ls.setLogLevel(e)}static async jsonRequest(e,t,r,n){
return this._client.jsonRequest(e,t,r,n)}static async getJson(e,t){return this._client.jsonRequest(O.GET,e,t)}
static async postJson(e,t,r){return hs.debug(".postJson: ",e,t,r),this._client.jsonRequest(O.POST,e,r,t)}
static async patchJson(e,t,r){return hs.debug(".patchJson: ",e,t,r),this._client.jsonRequest(O.PATCH,e,r,t)}
static async putJson(e,t,r){return hs.debug(".putJson: ",e,t,r),this._client.jsonRequest(O.PUT,e,r,t)}
static async deleteJson(e,t,r){return hs.debug(".deleteJson: ",e,r,t),this._client.jsonRequest(O.DELETE,e,t,r)}
static _initClient(){if(os)return hs.debug("Detected browser environment"),new ds(window.fetch.bind(window));if(is
)return new ls(fs,ps);throw new TypeError("Could not detect request client implementation")}}i(gs,"_client",
gs._initClient()),Wi={OK:0,0:"OK",ERROR:1,1:"ERROR",HELP:2,2:"HELP",VERSION:3,3:"VERSION"};const ms=es.createLogger(
"Headers");class vs{static setLogLevel(e){ms.setLogLevel(e)}constructor(e){i(this,"_value",void 0),i(this,
"_uninitializedValue",void 0),this._value=void 0,this._uninitializedValue=e}_initializeValue(){var t=this._value,
r=this._uninitializedValue;try{r&&(this._uninitializedValue=void 0,this.addAll(r))}catch(e){throw this._value=t,
this._uninitializedValue=r,e}}clear(){this._value={},this._uninitializedValue=void 0}add(e,t){
this._uninitializedValue&&this._initializeValue(),ms.debug("add header: ",e,t),e=e.toLowerCase();var r=this._value&&Oi(
this._value,e)?this._value[e]:void 0;void 0===this._value?this._value={[e]:t}:void 0!==r?re(r)?this._value=d(d({},
this._value),{},{[e]:uo([],r,[t])}):this._value=d(d({},this._value),{},{[e]:[r,t]}):this._value=d(d({},this._value),{},{
[e]:t})}containsKey(e){return this._uninitializedValue&&this._initializeValue(),e=e.toLowerCase(),Oi(this._value,e)}
isEmpty(){this._uninitializedValue&&this._initializeValue();var e=this._value;return!e||0===Y(e).length}keySet(){
this._uninitializedValue&&this._initializeValue();const t=new Set;var e;return void 0!==this._value&&(e=Y(this._value),
ri(e,e=>{t.add(e)})),t}getValue(e){if(this._uninitializedValue&&this._initializeValue(),this._value
)return e=e.toLowerCase(),Oi(this._value,e)?this._value[e]:void 0}getFirst(e){
return this._uninitializedValue&&this._initializeValue(),re(e=this.getValue(e))?e.length?e[0]:void 0:e}getHost(){
return this._uninitializedValue&&this._initializeValue(),this.getFirst("host")}addAll(e,t){if(
this._uninitializedValue&&this._initializeValue(),H(e)){const r=e;if(!$(t))throw new TypeError(
"Headers.addAll signature must be (string, string[]) or (HeadersObject)");ri(t,e=>{this.add(r,e)})}else{const n=e;ri(Y(n
),t=>{var e=n[t];re(e)?ri(e,e=>{this.add(t,e)}):void 0!==e&&this.add(t,e)})}}remove(e){
this._uninitializedValue&&this._initializeValue(),e=e.toLowerCase();var t=this.getValue(e);const r=d({},this._value);
return r&&Oi(r,e)&&delete r[e],this._value=r,t}set(e,t){this._uninitializedValue&&this._initializeValue(),
e=e.toLowerCase(),void 0===this._value?this._value={[e]:t}:this._value=d(d({},this._value),{},{[e]:t})}setAll(t){
this._uninitializedValue&&this._initializeValue(),ri(Y(t),e=>{this.set(e,t[e])})}valueOf(){var e;
return this._uninitializedValue&&this._initializeValue(),null!=(e=this._value)?e:void 0}toString(){
this._uninitializedValue&&this._initializeValue();const r=this._value;if(!r||this.isEmpty())return"Headers()";var e=Y(r)
const t=Ln(e,e=>{const t=r[e];return t?$(t)?e+": "+t.map(e=>0<=t.indexOf(";")||0<=t.indexOf(",")?`"${t}"`:t).join(", "
):0<=t.indexOf(";")?`${e}: "${t}"`:e+": "+t:""+e});return`Headers(${t.join("; ")})`}clone(){
return this._uninitializedValue&&this._initializeValue(),new vs(this._value?d({},this._value):void 0)}}f={exports:{}},(
x=function(r,n,o){Ji.stat(r,function(e,t){o(e,!e&&oe(t,r,n))})}).sync=function(e,t){return oe(Ji.statSync(e),e,t)},
Ji=Fa.default,(v=function(e,r,n){Ki.stat(e,function(e,t){n(e,!e&&ie(t,r))})}).sync=function(e,t){return ie(Ki.statSync(e
),t)},Ki=Fa.default,Xi="win32"===process.platform||Ha.TESTING_WINDOWS?x:v,(p=function e(t,o,r){if(
"function"==typeof o&&(r=o,o={}),!r){if("function"!=typeof Promise)throw new TypeError("callback not provided");
return new Promise(function(r,n){e(t,o||{},function(e,t){e?n(e):r(t)})})}Xi(t,o||{},function(e,t){e&&(
"EACCES"===e.code||o&&o.ignoreErrors)&&(e=null,t=!1),r(e,t)})}).sync=function(e,t){try{return Xi.sync(e,t||{})}catch(e){
if(t&&t.ignoreErrors||"EACCES"===e.code)return!1;throw e}};
const ys="win32"===process.platform||"cygwin"===process.env.OSTYPE||"msys"===process.env.OSTYPE,bs=Da.default,
_s=ys?";":":",Es=p,Os=e=>Object.assign(new Error("not found: "+e),{code:"ENOENT"}),Rs=(e,t)=>{var r=t.colon||_s,
n=e.match(/\//)||ys&&e.match(/\\/)?[""]:[...ys?[process.cwd()]:[],...(t.path||process.env.PATH||"").split(r)];
const o=ys?t.pathExt||process.env.PATHEXT||".EXE;.CMD;.BAT;.COM":"",i=ys?o.split(r):[""];return ys&&-1!==e.indexOf("."
)&&""!==i[0]&&i.unshift(""),{pathEnv:n,pathExt:i,pathExtExe:o}},ws=((va=(i,s,t)=>{"function"==typeof s&&(t=s,s={}),
s=s||{};const{pathEnv:a,pathExt:u,pathExtExe:c}=Rs(i,s),l=[],d=o=>new Promise((e,t)=>{if(o===a.length
)return s.all&&l.length?e(l):t(Os(i));const r=a[o];var t=/^".*"$/.test(r)?r.slice(1,-1):r,n=bs.join(t,i),
t=!t&&/^\.[\\\/]/.test(i)?i.slice(0,2)+n:n;e(f(t,o,0))}),f=(o,i,a)=>new Promise((r,e)=>{if(a===u.length)return r(d(i+1))
const n=u[a];Es(o+n,{pathExt:c},(e,t)=>{if(!e&&t){if(!s.all)return r(o+n);l.push(o+n)}return r(f(o,i,a+1))})});
return t?d(0).then(e=>t(null,e),t):d(0)}).sync=(t,r)=>{r=r||{};var n,o,i,a,{pathEnv:s,pathExt:u,pathExtExe:c}=Rs(t,r);
const l=[];for(let e=0;e<s.length;e++){const d=s[e];n=/^".*"$/.test(d)?d.slice(1,-1):d,o=bs.join(n,t),
i=!n&&/^\.[\\\/]/.test(t)?t.slice(0,2)+o:o;for(let e=0;e<u.length;e++){a=i+u[e];try{if(Es.sync(a,{pathExt:c})){if(!r.all
)return a;l.push(a)}}catch(e){}}}if(r.all&&l.length)return l;if(r.nothrow)return null;throw Os(t)},(R={exports:{}}
).exports=C=(e={})=>{var t=e.env||process.env;return"win32"!==(e.platform||process.platform)?"PATH":Object.keys(t
).reverse().find(e=>"PATH"===e.toUpperCase())||"Path"},R.exports.default=C,Da.default),Ts=va,Ss=R.exports,As=(
j=function(e){return ae(e)||ae(e,!0)},/([()\][%!^"`<>&|;, *?])/g),Ns=((_={}).command=function(e){return e.replace(As,
"^$1")},_.argument=function(e,t){return e=(e=`"${e=(e=(e=""+e).replace(/(\\*)"/g,'$1$1\\"')).replace(/(\\*)$/,"$1$1")}"`
).replace(As,"^$1"),t?e.replace(As,"^$1"):e},/^#!(.*)/),Ps=Fa.default,xs=(e="")=>{const t=e.match(Ns);if(!t)return null;
const[r,n]=t[0].replace(/#! ?/,"").split(" ");return"env"===(e=r.split("/").pop())?n:n?e+" "+n:e},Is=Da.default,js=j,
Ls=_,Cs="win32"===process.platform,Us=/\.(?:com|exe)$/i,Gs=/node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i,
Fs="win32"===process.platform,Ds=Na.default,Ms={hookChildProcess:function(r,n){if(Fs){const o=r.emit;r.emit=function(e,t
){return"exit"===e&&(e=ue(t,n))?o.call(r,"error",e):o.apply(r,arguments)}}},verifyENOENT:ue,verifyENOENTSync:function(e,
t){return Fs&&1===e&&!t.file?se(t.original,"spawnSync"):null},notFoundError:se},qs=(f.exports=ce,f.exports.spawn=ce,
f.exports.sync=function(e,t,r){e=ye(e,t,r);const n=Ds.spawnSync(e.command,e.args,e.options);
return n.error=n.error||Ms.verifyENOENTSync(n.status,e),n},f.exports._parse=ye,f.exports._enoent=Ms,Qi=f.exports,["env"]
),ks=Object.getOwnPropertyDescriptor(Function.prototype,"toString"),Bs=Object.getOwnPropertyDescriptor(
Function.prototype.toString,"name"),Vs=new WeakMap,zs=(t,r={})=>{function n(...e){if(Vs.set(n,++i),1===i)o=t.apply(this,
e),t=null;else if(!0===r.throw)throw new Error(`Function \`${a}\` can only be called once`);return o}if(
"function"!=typeof t)throw new TypeError("Expected a function");let o,i=0;const a=t.displayName||t.name||"<anonymous>";
var e,s,u,c,l,d,f,[p,h,{ignoreNonConfigurable:g=!1}={}]=[n,t],m=p.name;for(const v of Reflect.ownKeys(h))e=p,l=h,s=v,u=g
,"length"!==s&&"prototype"!==s&&"arguments"!==s&&"caller"!==s&&(c=Object.getOwnPropertyDescriptor(e,s),
l=Object.getOwnPropertyDescriptor(l,s),void 0!==c&&!c.configurable&&(
c.writable!==l.writable||c.enumerable!==l.enumerable||c.configurable!==l.configurable||!c.writable&&c.value!==l.value
)&&u||Object.defineProperty(e,s,l));return d=p,(f=Object.getPrototypeOf(h))!==Object.getPrototypeOf(d
)&&Object.setPrototypeOf(d,f),d=p,f=h,m=""===m?"":`with ${m.trim()}() `,m=((e,t)=>`/* Wrapped ${e}*/
`+t).bind(null,m,f.toString()),Object.defineProperty(m,"name",Bs),Object.defineProperty(d,"toString",y(y({},ks),{},{
value:m})),Vs.set(n,i),n},$s=(zs.callCount=e=>{if(Vs.has(e))return Vs.get(e);throw new Error(
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
description:"Invalid system call",standard:"other"}],Ws=function(){const e=ge();return e.reduce(me,{})}();{const fu=ge()
T=Array.from({length:65},(e,t)=>{var r,n=fu,o=(r=t,void 0!==(o=n.find(({name:e})=>Ua.constants.signals[e]===r)
)?o:n.find(e=>e.number===r));if(void 0===o)return{};var{name:n,description:o,supported:i,action:a,forced:s,standard:u}=o
return{[t]:{name:n,number:t,description:o,supported:i,action:a,forced:s,standard:u}}}),Object.assign({},...T)}const Js=(
{timedOut:e,timeout:t,errorCode:r,signal:n,signalDescription:o,exitCode:i,isCanceled:a}
)=>e?`timed out after ${t} milliseconds`:a?"was canceled":void 0!==r?"failed with "+r:void 0!==n?`was killed with ${n} (${o})`:void 0!==i?"failed with exit code "+i:"failed"
,Ks=({stdout:e,stderr:t,all:r,error:n,signal:o,exitCode:i,command:a,escapedCommand:s,timedOut:u,isCanceled:c,killed:l,
parsed:{options:{timeout:d}}})=>{var f,p;i=null===i?void 0:i,f=void 0===(o=null===o?void 0:o)?void 0:Ws[o].description,
p=n&&n.code,d=`Command ${Js({timedOut:u,timeout:d,errorCode:p,signal:o,signalDescription:f,exitCode:i,isCanceled:c}
)}: `+a;const h=(p="[object Error]"===Object.prototype.toString.call(n))?d+`
`+n.message:d;return d=[h,t,e].filter(Boolean).join("\n"),p?(n.originalMessage=n.message,n.message=d):n=new Error(d),
n.shortMessage=h,n.command=a,n.escapedCommand=s,n.exitCode=i,n.signal=o,n.signalDescription=f,n.stdout=e,n.stderr=t,
void 0!==r&&(n.all=r),"bufferedData"in n&&delete n.bufferedData,n.failed=!0,n.timedOut=Boolean(u),n.isCanceled=c,
n.killed=l&&!u,n},Xs=["stdin","stdout","stderr"],Qs=(b={exports:{}},(w=h={exports:{}}).exports=["SIGABRT","SIGALRM",
"SIGHUP","SIGINT","SIGTERM"],"win32"!==process.platform&&w.exports.push("SIGVTALRM","SIGXCPU","SIGXFSZ","SIGUSR2",
"SIGTRAP","SIGSYS","SIGQUIT","SIGIOT"),"linux"===process.platform&&w.exports.push("SIGIO","SIGPOLL","SIGPWR","SIGSTKFLT"
,"SIGUNUSED"),ve(g=Ha.process)?(Yi=Pa.default,Zi=h.exports,ea=/^win/i.test(g.platform),"function"!=typeof(S=xa.default
)&&(S=S.EventEmitter),g.__signal_exit_emitter__?m=g.__signal_exit_emitter__:((m=g.__signal_exit_emitter__=new S).count=0
,m.emitted={}),m.infinite||(m.setMaxListeners(1/0),m.infinite=!0),b.exports=function(e,t){var r;return ve(Ha.process)?(
Yi.equal(typeof e,"function","a callback must be provided for exit handler"),!1===oa&&ia(),r="exit",t&&t.alwaysLast&&(
r="afterexit"),t=function(){m.removeListener(r,e),0===m.listeners("exit").length&&0===m.listeners("afterexit"
).length&&ta()},m.on(r,e),t):function(){}},ta=function(){oa&&ve(Ha.process)&&(oa=!1,Zi.forEach(function(e){try{
g.removeListener(e,na[e])}catch(e){}}),g.emit=ua,g.reallyExit=aa,--m.count)},b.exports.unload=ta,ra=function(e,t,r){
m.emitted[e]||(m.emitted[e]=!0,m.emit(e,t,r))},na={},Zi.forEach(function(e){na[e]=function(){ve(Ha.process
)&&g.listeners(e).length===m.count&&(ta(),ra("exit",null,e),ra("afterexit",null,e),ea&&"SIGHUP"===e&&(e="SIGINT"),
g.kill(g.pid,e))}}),b.exports.signals=function(){return Zi},oa=!1,ia=function(){!oa&&ve(Ha.process)&&(oa=!0,m.count+=1,
Zi=Zi.filter(function(e){try{return g.on(e,na[e]),!0}catch(e){return!1}}),g.emit=ca,g.reallyExit=sa)},b.exports.load=ia,
aa=g.reallyExit,sa=function(e){ve(Ha.process)&&(g.exitCode=e||0,ra("exit",g.exitCode,null),ra("afterexit",g.exitCode,
null),aa.call(g,g.exitCode))},ua=g.emit,ca=function(e,t){return"exit"===e&&ve(Ha.process)?(void 0!==t&&(g.exitCode=t),
e=ua.apply(this,arguments),ra("exit",g.exitCode,null),ra("afterexit",g.exitCode,null),e):ua.apply(this,arguments)}
):b.exports=function(){return function(){}},la=b.exports,I={exports:{}},La.default.PassThrough),Ys=ja.default.constants,
Zs=(P=La.default,Ca.default.promisify),eu=Zs(P.pipeline);class tu extends Error{constructor(){super("maxBuffer exceeded"
),this.name="MaxBufferError"}}I.exports=de,I.exports.buffer=(e,t)=>de(e,y(y({},t),{},{encoding:"buffer"})),
I.exports.array=(e,t)=>de(e,y(y({},t),{},{array:!0})),I.exports.MaxBufferError=tu,da=I.exports;
const ru=La.default.PassThrough,nu=(fa=function(){function t(e){return Array.isArray(e)?e.forEach(t):(n.push(e),e.once(
"end",r.bind(null,e)),e.once("error",o.emit.bind(o,"error")),e.pipe(o,{end:!1})),this}function r(t){!(n=n.filter(
function(e){return e!==t})).length&&o.readable&&o.end()}var n=[],o=new ru({objectMode:!0});return o.setMaxListeners(0),
o.add=t,o.isEmpty=function(){return 0==n.length},o.on("unpipe",r),Array.prototype.slice.call(arguments).forEach(t),o},
async(e,t)=>{if(e){e.destroy();try{return await t}catch(e){return e.bufferedData}}}),ou=(e,{encoding:t,buffer:r,
maxBuffer:n})=>{if(e&&r)return t?da(e,{encoding:t,maxBuffer:n}):da.buffer(e,{maxBuffer:n})},iu=(async()=>{})(
).constructor.prototype,au=["then","catch","finally"].map(e=>[e,Reflect.getOwnPropertyDescriptor(iu,e)]),su=(e,t)=>{for(
const[n,o]of au){var r="function"==typeof t?(...e)=>Reflect.apply(o.value,t(),e):o.value.bind(t);Reflect.defineProperty(
e,n,y(y({},o),{},{value:r}))}return e},uu=(e,t=[])=>Array.isArray(t)?[e,...t]:[e],cu=/^[\w.-]+$/,lu=/"/g,du=(e,t,r)=>{
return"string"==typeof t||Ia.Buffer.isBuffer(t)?e.stripFinalNewline?(n="string"==typeof(e=t)?"\n":"\n".charCodeAt(),
o="string"==typeof e?"\r":"\r".charCodeAt(),(e=e[e.length-1]===n?e.slice(0,-1):e)[e.length-1]===o?e.slice(0,-1):e
):t:void 0===r?void 0:"";var n,o},U=(rs.initEnvFromDefaultFiles(),es.setLogLevel(E),es.createLogger("main"));
!async function(e=[]){try{vs.setLogLevel(c.INFO),gs.setLogLevel(c.INFO),U.debug("Loglevel as "+es.getLogLevelString());
const{scriptName:o,parseStatus:i,exitStatus:a,errorString:s,freeArgs:u}=class{static parseArguments(e,t=[]){var r,n,
o=null!=(r=t.shift())?r:"",i=null!=(r=t.shift())?r:"";if(!i)return{parseStatus:Wi.ERROR,
exitStatus:zi.ARGUMENT_PARSE_ERROR,nodePath:o,scriptName:e,freeArgs:[],extraArgs:[]};if(0===t.length)return{
parseStatus:Wi.ERROR,exitStatus:zi.ARGUMENT_PARSE_ERROR,nodePath:o,scriptName:i,freeArgs:[],extraArgs:[]};let a=!0,s=[],
u=[];do{if(n=t.shift(),a)switch(function(){switch(n){case"-h":case"--help":case 0:return 0;case"-v":case"--version":
case 1:return 1;case"--":case 2:return 2}}()){case 0:return{parseStatus:Wi.HELP,exitStatus:zi.OK,nodePath:o,
scriptName:i,freeArgs:s,extraArgs:u};case 1:return{parseStatus:Wi.VERSION,exitStatus:zi.OK,nodePath:o,scriptName:i,
freeArgs:s,extraArgs:u};case 2:a=!1;break;default:if(a){if(Di(n,"-"))return{errorString:"Unknown argument: "+n,
parseStatus:Wi.ERROR,exitStatus:zi.UNKNOWN_ARGUMENT,nodePath:o,scriptName:i,freeArgs:s,extraArgs:u};s.push(n)
}else u.push(n)}}while(1<=t.length);return{parseStatus:Wi.OK,exitStatus:zi.OK,nodePath:o,scriptName:i,freeArgs:s,
extraArgs:u}}}.parseArguments(ns,e);if(i===Wi.HELP||i===Wi.VERSION)return console.log(pe(o)),a;if(s
)return console.error("ERROR: "+s),a;rs.setupDestroyHandler(()=>{U.debug("Stopping command from process utils event")},
e=>{U.error("Error while shutting down the service: ",e)});var t=u.shift(),r=u.shift(),n=u.shift();
return r&&t?await async function(e,t,r){var n,o,i;U.debug("updateSubModule: ",e,t,r),e=e.includes(":"
)?e:`git@github.com:${e}.git`,U.debug("gitUrl = ",e),n=Da.default.relative(process.cwd(),t),U.debug(
"relativeTargetPath = ",n);let a;try{a=await Aa.promises.stat(t),U.debug("stats: ",a)}catch(e){U.error(
"File stat error: ",t,e),a=void 0}if(o=null!=(o=null==(o=a)?void 0:o.isFile())&&o,U.debug("isFile: ",o),i=null!=(
i=null==(i=a)?void 0:i.isDirectory())&&i,U.debug("isDirectory: ",i),i)U.debug("Target directory already exists: ",t
);else{if(void 0!==o)return U.error("Target file not a directory: ",t),Vi.CONFLICT;i=e,o=n,U.debug("addGitSubModule: ",i
,o),t=["submodule","add",i,o],U.debug("Executing git ",t),await fe("git",t,{stdio:"inherit"}),await Vi.OK}
return e=null!=r?r:"main",U.debug("nextBranch: ",e),i=n,U.debug("getGitBranch: ",i),o=["rev-parse","--abbrev-ref","HEAD"
],U.debug("Executing git ",o),t=(await fe("git",o,{cwd:i,stdio:"inherit"})).stdout,U.debug("stdout: ",t),r=await t,
U.debug("currentBranch: ",r),r!==e?(o=n,i=e,U.debug("setGitSubModuleBranch: ",o,i),t=["config","-f",".gitmodules",
`submodule.${o}.branch`,i],U.debug("Executing git ",t),await fe("git",t,{stdio:"inherit"}),await Vi.OK):U.debug(
"Branch already identical: ",e),Vi.OK}(r,t,n):(console.log(pe(o)),Vi.ARGUMENT_PARSE_ERROR)}catch(e){return U.error(
"Fatal error: ",e),Vi.FATAL_ERROR}}(process.argv).then(e=>{process.exit(e)}).catch(e=>{console.error("Error: ",e),
process.exit(1)});
