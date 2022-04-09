#!/usr/bin/env node
"use strict";function U(t,e){var r,n=Object.keys(t);return Object.getOwnPropertySymbols&&(
r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),
n.push.apply(n,r)),n}function d(t){for(var r,e=1;e<arguments.length;e++)r=null!=arguments[e]?arguments[e]:{},e%2?U(
Object(r),!0).forEach(function(e){o(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,
Object.getOwnPropertyDescriptors(r)):U(Object(r)).forEach(function(e){Object.defineProperty(t,e,
Object.getOwnPropertyDescriptor(r,e))});return t}function o(e,t,r){t in e?Object.defineProperty(e,t,{value:r,
enumerable:!0,configurable:!0,writable:!0}):e[t]=r}function e(e){return e&&"object"==typeof e&&"default"in e?e:{
default:e}}function F(r){if(r&&r.__esModule)return r;var n=Object.create(null);return r&&Object.keys(r).forEach(
function(e){var t;"default"!==e&&(t=Object.getOwnPropertyDescriptor(r,e),Object.defineProperty(n,e,t.get?t:{
enumerable:!0,get:function(){return r[e]}}))}),n.default=r,Object.freeze(n)}function M(e){var t,r=-1,
n=null==e?0:e.length;for(this.clear();++r<n;)t=e[r],this.set(t[0],t[1])}function D(e){var t,r=-1,n=null==e?0:e.length;
for(this.clear();++r<n;)t=e[r],this.set(t[0],t[1])}function q(e){var t,r=-1,n=null==e?0:e.length;for(this.clear();++r<n;
)t=e[r],this.set(t[0],t[1])}function k(e){e=this.__data__=new ft(e),this.size=e.size}function B(e){var t=-1,
r=null==e?0:e.length;for(this.__data__=new pt;++t<r;)this.add(e[t])}function $(n,i){function o(){var e=arguments,
t=i?i.apply(this,e):e[0],r=o.cache;return r.has(t)?r.get(t):(e=n.apply(this,e),o.cache=r.set(t,e)||r,e)}if(
"function"!=typeof n||null!=i&&"function"!=typeof i)throw new TypeError("Expected a function");return o.cache=new(
$.Cache||qr),o}function z(e){return void 0===e}function V(e){return a(e)}function H(e){return ko(e)}function W(e){
return zo(e)}function K(e,t){return ti(e,t)}function J(e,t=H,r=void 0){return!!(void 0===r||Ge(n=e)&&K(Zo(n),r))&&(
n=void 0!==t?t:H,Ge(r=e)&&K(Z(r),n));var n}function X(...e){return t=>Kn(e,e=>e(t))}function Q(e){return Ge(e)}
function Y(e){if(void 0!==e&&""!==e)return""+e}function Z(e,t=H){var r;return V(e)?(r=Fn(e,(e,t)=>t),oo(r,e=>t(e))):Q(e
)?(r=Reflect.ownKeys(e),oo(r,e=>t(e))):[]}function ee(e){if(!e.startsWith("%{")||!e.endsWith("}"))return Y(e)}
function te(e){if(W(e))switch(e){case s.OPTIONS:return"options";case s.GET:return"get";case s.POST:return"post";
case s.PUT:return"put";case s.DELETE:return"delete";case s.PATCH:return"patch"}throw new TypeError(
"Unsupported value for stringifyRequestMethod(): "+e)}function re(e){return H(t=e)||W(t)||Uo(t)||Fo(t)||ne(e)||(e=t=e,
!!Ge(e)&&!(e instanceof Date)&&!Me(e)&&!V(e)&&J(e,H,void 0)&&J(t,H,X(re,z)));var t}function ne(e){var t,[e,r=void 0,
n=void 0,i=void 0]=[e,X(re,z)];return!!a(e)&&(t=null!=(t=null==e?void 0:e.length)?t:0,!(void 0!==n&&t<n)&&!(
void 0!==i&&i<t)&&(void 0===r||K(e,r)))}function ie(t,e){var r,n=Object.keys(t);return Object.getOwnPropertySymbols&&(
r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),
n.push.apply(n,r)),n}function b(n){for(var i,e=1;e<arguments.length;e++)i=null!=arguments[e]?arguments[e]:{},e%2?ie(
Object(i),!0).forEach(function(e){var t=n,r=i[e];e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,
configurable:!0,writable:!0}):t[e]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,
Object.getOwnPropertyDescriptors(i)):ie(Object(i)).forEach(function(e){Object.defineProperty(n,e,
Object.getOwnPropertyDescriptor(i,e))});return n}function oe(e,t,r){if(e.isSymbolicLink()||e.isFile()){var n,i,o=t,
a=void 0!==r.pathExt?r.pathExt:process.env.PATHEXT;if(!a)return!0;if(-1!==(a=a.split(";")).indexOf(""))return!0;for(
n=0;n<a.length;n++)if((i=a[n].toLowerCase())&&o.substr(-i.length).toLowerCase()===i)return!0;return!1}return!1}
function ae(e,t){return e.isFile()&&(r=e.mode,n=e.uid,e=e.gid,i=void 0!==t.uid?t.uid:process.getuid&&process.getuid(),
t=void 0!==t.gid?t.gid:process.getgid&&process.getgid(),o=parseInt("100",8),a=parseInt("010",8),r&parseInt("001",8
)||r&a&&e===t||r&o&&n===i||r&(o|a)&&0===i);var r,n,i,o,a}function se(e,t){var r=e.options.env||process.env,
n=process.cwd(),i=null!=e.options.cwd,o=i&&void 0!==process.chdir&&!process.chdir.disabled;if(o)try{process.chdir(
e.options.cwd)}catch(e){}let a;try{a=Us.sync(e.command,{path:r[Fs({env:r})],pathExt:t?Gs.delimiter:void 0})}catch(e
){}finally{o&&process.chdir(n)}return a=a&&Gs.resolve(i?e.options.cwd:"",a)}function ue(e,t){return Object.assign(
new Error(`${t} ${e.command} ENOENT`),{code:"ENOENT",errno:"ENOENT",syscall:t+" "+e.command,path:e.command,
spawnargs:e.args})}function ce(e,t){return Ks&&1===e&&!t.file?ue(t.original,"spawn"):null}function le(e,t,r){
return e=Oe(e,t,r),t=Js.spawn(e.command,e.args,e.options),Xs.hookChildProcess(t,e),t}function de(e={}){var{
env:e=process.env,platform:t=process.platform}=e;return"win32"!==t?"PATH":Object.keys(e).reverse().find(
e=>"PATH"===e.toUpperCase())||"Path"}async function fe(n,u){if(!n)throw new Error("Expected a stream");const i=(u=b({
maxBuffer:1/0},u)).maxBuffer,o=(e=>{const t=(e=b({},u)).array;let r=e.encoding;const n="buffer"===r;let i=!1;t?i=!(r||n
):r=r||"utf8",n&&(r=null);const o=new lu({objectMode:i});r&&o.setEncoding(r);let a=0;const s=[];return o.on("data",e=>{
s.push(e),i?a=s.length:a+=e.length}),o.getBufferedValue=()=>t?s:n?Buffer.concat(s,a):s.join(""),o.getBufferedLength=(
)=>a,o})();return await new Promise((e,t)=>{const r=e=>{e&&o.getBufferedLength()<=du.MAX_LENGTH&&(
e.bufferedData=o.getBufferedValue()),t(e)};(async()=>{try{await pu(n,o),e()}catch(e){r(e)}})(),o.on("data",()=>{
o.getBufferedLength()>i&&r(new hu)})}),o.getBufferedValue()}async function pe(e,t){let r=[...e];var e=r.shift(),p=d({
stdio:"inherit"},null!=t?t:{}),{stdout:t,stderr:e,exitCode:n}=(Au.debug("Executing: ",e,r),await function(t,e){var n,r,i
,o,a;[r,i,o={}]=[t,e,p],r=(a=aa._parse(r,i,o)).command,i=a.args,o=a.options,(o=b({maxBuffer:Tu,buffer:!0,
stripFinalNewline:!0,extendEnv:!0,preferLocal:!1,localDir:o.cwd||Ya.default.cwd(),execPath:Ya.default.execPath,
encoding:"utf8",reject:!0,cleanup:!0,all:!1,windowsHide:!0},o)).env=Su(o),o.stdio=su(o),
"win32"===Ya.default.platform&&"cmd"===Xa.default.basename(r,".exe")&&i.unshift("/q");const s={file:r,args:i,options:o,
parsed:a},u=(r=t,i=e,Eu(r,i).join(" ")),c=(o=t,a=e,Eu(o,a).map(e=>Ru(e)).join(" "));if(void 0!==(r=s.options.timeout)&&(
!Number.isFinite(r)||r<0))throw new TypeError(
`Expected the \`timeout\` option to be a non-negative integer, got \`${r}\` (${typeof r})`);let l;try{
l=Qa.default.spawn(s.file,s.args,s.options)}catch(e){return i=new Qa.default.ChildProcess,t=Promise.reject(ou({error:e,
stdout:"",stderr:"",all:"",command:u,escapedCommand:c,parsed:s,timedOut:!1,isCanceled:!1,killed:!1})),_u(i,t)}n=l,
e=new Promise((r,t)=>{n.on("exit",(e,t)=>{r({exitCode:e,signal:t})}),n.on("error",e=>{t(e)}),n.stdin&&n.stdin.on("error"
,e=>{t(e)})}),o=((r,{timeout:n,killSignal:i="SIGTERM"},e)=>{if(0===n||void 0===n)return e;let o;var t=new Promise((e,t
)=>{o=setTimeout(()=>{cu(r,i,t)},n)}),e=e.finally(()=>{clearTimeout(o)});return Promise.race([t,e])})(l,s.options,e);
const d=(async(e,{cleanup:t,detached:r},n)=>{if(!t||r)return n;const i=ya(()=>{e.kill()});return n.finally(()=>{i()})})(
l,s.options,o),f={isCanceled:!1};return l.kill=((e,t="SIGTERM",r={})=>{var n=e(t);return uu(e,t,r,n),n}).bind(null,
l.kill.bind(l)),l.cancel=((e,t)=>{e.kill()&&(t.isCanceled=!0)}).bind(null,l,f),a=tu(async()=>{var[{error:e,exitCode:t,
signal:r,timedOut:n},i,o,a]=await(async({stdout:t,stderr:r,all:n},{encoding:i,buffer:e,maxBuffer:o},a)=>{var s=vu(t,{
encoding:i,buffer:e,maxBuffer:o}),u=vu(r,{encoding:i,buffer:e,maxBuffer:o}),i=vu(n,{encoding:i,buffer:e,maxBuffer:2*o});
try{return await Promise.all([a,s,u,i])}catch(e){return Promise.all([{error:e,signal:e.signal,timedOut:e.timedOut},mu(t,
s),mu(r,u),mu(n,i)])}})(l,s.options,d),i=Nu(s.options,i),o=Nu(s.options,o),a=Nu(s.options,a);if(e||0!==t||null!==r){if(
e=ou({error:e,exitCode:t,signal:r,stdout:i,stderr:o,all:a,command:u,escapedCommand:c,parsed:s,timedOut:n,
isCanceled:f.isCanceled||!!s.options.signal&&s.options.signal.aborted,killed:l.killed}),s.options.reject)throw e;
return e}return{command:u,escapedCommand:c,exitCode:0,stdout:i,stderr:o,all:a,failed:!1,timedOut:!1,isCanceled:!1,
killed:!1}}),r=l,void 0!==(i=s.options.input)&&void 0!==r.stdin&&(
null!==i&&"object"==typeof i&&"function"==typeof i.pipe?i.pipe(r.stdin):r.stdin.end(i)),l.all=((e,{all:t})=>{if(t&&(
e.stdout||e.stderr)){const r=Ea();return e.stdout&&r.add(e.stdout),e.stderr&&r.add(e.stderr),r}})(l,s.options),_u(l,a)}(
e,r));return{stdout:t,stderr:e,exitCode:n}}async function he(e){Pu.debug("gitPullWithRecurseSubmodules",e);const{
stdout:t,stderr:r}=await pe([ds,"pull","--recurse-submodules"],{cwd:e,stdio:"pipe"});return r&&Pu.error(
e+`: 'git pull --recurse-submodules' with errors (inside "${e}"): `+Po(r)),t.includes("Already up to date.")||Pu.debug(
e+`: 'git pull --recurse-submodules' with output (inside "${e}"): `+Po(t)),l.OK}function ge(){return process.cwd()}
async function me(e,t,r){return Gu.debug("setGitSubModuleConfigBySubKey: ",e,t,r),t=`submodule.${e}.`+t,Gu.debug(
"setGitSubModuleConfigByKey: ",e,t,r),await pe([ds,"config","-f",ls,t,r]),l.OK}async function ve(e){return G.debug(
"initAllSubmodules"),await he(e),xu.debug("gitSubmoduleUpdate"),await pe([ds,"submodule","update","--init","--recursive"
],{cwd:e}),await l.OK,l.OK}function be(e,t){return{name:"SIGRT"+(t+1),number:ru+t,action:"terminate",
description:"Application-specific signal (realtime)",standard:"posix"}}function ye(){var e=65-ru,e=Array.from({length:e}
,be);return[...nu,...e].map(we)}function _e(e,{name:t,number:r,description:n,supported:i,action:o,forced:a,standard:s}){
return b(b({},e),{},{[t]:{name:t,number:r,description:n,supported:i,action:o,forced:a,standard:s}})}function Ee(e){
return e&&"object"==typeof e&&"function"==typeof e.removeListener&&"function"==typeof e.emit&&"function"==typeof e.reallyExit&&"function"==typeof e.listeners&&"function"==typeof e.kill&&"number"==typeof e.pid&&"function"==typeof e.on
}function Oe(e,t,r){if(t&&!Array.isArray(t)&&(r=t,t=null),e={command:e,args:t=t?t.slice(0):[],options:r=Object.assign({}
,r),file:void 0,original:{command:e,args:t}},r.shell)return e;if(t=e,!Vs)return t;if((r=t).file=$s(r),e=(
e=r.file&&function(e){var t;const r=Buffer.alloc(150);try{t=qs.openSync(e,"r"),qs.readSync(t,r,0,150,0),qs.closeSync(t)
}catch(e){}return ks(r.toString())}(r.file))?(r.args.unshift(r.file),r.command=e,$s(r)):r.file,r=!Hs.test(e),
t.options.forceShell||r){const n=Ws.test(e);t.command=Bs.normalize(t.command),t.command=zs.command(t.command),
t.args=t.args.map(e=>zs.argument(e,n)),r=[t.command].concat(t.args).join(" "),t.args=["/d","/s","/c",`"${r}"`],
t.command=process.env.comspec||"cmd.exe",t.options.windowsVerbatimArguments=!0}return t}function we({name:e,number:t,
description:r,action:n,forced:i=!1,standard:o}){var{signals:{[e]:a}}=za.constants,s=void 0!==a;return{name:e,
number:s?a:t,description:r,supported:s,action:n,forced:i,standard:o}}function Re(e,t){for(var r=-1,n=null==e?0:e.length,
i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i}function Te(e,t){return e===t||e!=e&&t!=t}function Se(e,t){for(
var r=e.length;r--;)if(rs(e[r][0],t))return r;return-1}var Ne,Ae,Pe,xe,je,Ie,Le,Ce,Ge,Ue,Fe,Me,De,qe,ke,Be,$e,ze,Ve,He,
We,Ke,Je,Xe,Qe,Ye,Ze,et,tt,rt,nt,it,ot,at,st,ut,ct,lt,dt,ft,pt,ht,gt,mt,vt,bt,yt,_t,Et,Ot,a,wt,Rt,Tt,St,Nt,At,Pt,xt,jt,
It,Lt,Ct,Gt,Ut,t,Ft,Mt,Dt,qt,kt,Bt,$t,zt,Vt,Ht,Wt,Kt,Jt,Xt,Qt,Yt,Zt,er,tr,rr,nr,ir,or,ar,sr,ur,cr,lr,dr,fr,pr,hr,gr,mr,
vr,br,yr,_r,Er,Or,wr,Rr,Tr,Sr,Nr,Ar,Pr,xr,jr,Ir,Lr,Cr,Gr,Ur,Fr,Mr,Dr,qr,kr,Br,$r,zr,Vr,Hr,Wr,Kr,Jr,Xr,Qr,Yr,Zr,en,tn,rn,
nn,on,an,sn,un,cn,ln,dn,fn,pn,hn,gn,mn,vn,bn,yn,_n,En,On,wn,Rn,Tn,Sn,Nn,An,Pn,xn,jn,In,Ln,Cn,Gn,Un,Fn,Mn,Dn,qn,kn,Bn,$n,
zn,Vn,Hn,Wn,Kn,Jn,Xn,Qn,Yn,Zn,ei,ti,ri,ni,ii,oi,ai,si,ui,ci,li,di,fi,pi,hi,gi,mi,vi,bi,yi,_i,Ei,Oi,wi,Ri,Ti,Si,Ni,Ai,Pi,
xi,ji,Ii,Li,Ci,Gi,Ui,Fi,Mi,Di,qi,ki,Bi,$i,zi,Vi,Hi,Wi,Ki,Ji,Xi,Qi,Yi,Zi,eo,to,ro,no,io,oo,ao,so,uo,co,lo,fo,po,ho,r,go,n
,i,mo,vo,bo,yo,_o,Eo,Oo,wo,Ro,To,So,No,Ao,Po,xo,jo,Io,Lo,Co,Go,Uo,Fo,Mo,Do,qo,ko,Bo,$o,zo,Vo,Ho,Wo,Ko,Jo,Xo,Qo,Yo,Zo,u,l
,s,c,ea,ta,ra,f,na,ia,oa,aa,p,h,sa,ua,ca,g,la,da,fa,pa,ha,ga,ma,va,ba,ya,_a,Ea,m,Oa,wa,Ra,v,y,_,E,O,w,Ta,R,T,S,Sa,Na,Aa,
N,Pa,xa,ja,Ia,La,Ca,Ga=require("fs"),Ua=require("path"),Fa=require("url"),Ma=require("querystring"),Da=require(
"node:buffer"),qa=require("node:path"),ka=require("node:child_process"),Ba=require("node:process"),$a=require(
"child_process"),A=require("node:url"),za=require("os"),P=require("node:os"),x=require("assert"),Va=require("events"),
j=require("buffer"),I=require("stream"),L=require("util"),Ha=e(Ga),Wa=e(Ua),Ka=e(Fa),Ja=F(Ma),Xa=e(qa),Qa=e(ka),Ya=e(Ba)
,Fa=e($a),Za=e(A),es=e(P),Ma=e(x),qa=e(Va),ka=e(j),Ba=e(I),$a=e(L),
ts="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
,rs=Te,ns=Se,is=Array.prototype.splice,os=Se,as=Se,ss=Se;M.prototype.clear=function(){this.__data__=[],this.size=0},
M.prototype.delete=function(e){var t=this.__data__;return!((e=ns(t,e))<0||(e==t.length-1?t.pop():is.call(t,e,1),
--this.size,0))},M.prototype.get=function(e){var t=this.__data__;return(e=os(t,e))<0?void 0:t[e][1]},
M.prototype.has=function(e){return-1<as(this.__data__,e)},M.prototype.set=function(e,t){var r=this.__data__,n=ss(r,e);
return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},Ne=A=M,P=function(){this.__data__=new Ne,this.size=0},x=function(
e){var t=this.__data__,e=t.delete(e);return this.size=t.size,e},Va=function(e){return this.__data__.get(e)},j=function(e
){return this.__data__.has(e)},I="object"==typeof ts&&ts&&ts.Object===Object&&ts,
L="object"==typeof self&&self&&self.Object===Object&&self,r=(L=I||L||Function("return this")()).Symbol,
f=Object.prototype,Ae=f.hasOwnProperty,Pe=f.toString,xe=r?r.toStringTag:void 0,f=Object.prototype,je=f.toString,
Ie=function(e){var t,r,n=Ae.call(e,xe),i=e[xe];try{t=!(e[xe]=void 0)}catch(e){}return r=Pe.call(e),t&&(
n?e[xe]=i:delete e[xe]),r},Le=function(e){return je.call(e)},Ce=r?r.toStringTag:void 0,Ue=f=function(e){
return null==e?void 0===e?"[object Undefined]":"[object Null]":(Ce&&Ce in Object(e)?Ie:Le)(e)},Fe=Ge=function(e){
var t=typeof e;return null!=e&&("object"==t||"function"==t)},Me=function(e){return!!Fe(e)&&("[object Function]"==(e=Ue(e
))||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e)},m=L["__core-js_shared__"],
m=/[^.]+$/.exec(m&&m.keys&&m.keys.IE_PROTO||""),De=m?"Symbol(src)_1."+m:"",m=Function.prototype,qe=m.toString,ke=Me,
Be=function(e){return!!De&&De in e},$e=Ge,ze=m=function(e){if(null!=e){try{return qe.call(e)}catch(e){}try{return e+""
}catch(e){}}return""},i=/[\\^$.*+?()[\]{}|]/g,Ve=/^\[object .+?Constructor\]$/,S=Function.prototype,n=Object.prototype,
S=S.toString,n=n.hasOwnProperty,He=RegExp("^"+S.call(n).replace(i,"\\$&").replace(
/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),We=function(e){return!(!$e(e)||Be(e))&&(ke(e
)?He:Ve).test(ze(e))},Ke=function(e,t){return null==e?void 0:e[t]},n=(S=function(e,t){return e=Ke(e,t),We(e)?e:void 0})(
L,"Map"),i=S(Object,"create"),Xe=Je=i,E=Object.prototype,Qe=E.hasOwnProperty,Ye=i,E=Object.prototype,Ze=E.hasOwnProperty
,et=i,E=function(e){return e=this.has(e)&&delete this.__data__[e],this.size-=e?1:0,e},i=function(e){var t,
r=this.__data__;return Xe?"__lodash_hash_undefined__"===(t=r[e])?void 0:t:Qe.call(r,e)?r[e]:void 0},go=function(e){
var t=this.__data__;return Ye?void 0!==t[e]:Ze.call(t,e)},T=function(e,t){var r=this.__data__;
return this.size+=this.has(e)?0:1,r[e]=et&&void 0===t?"__lodash_hash_undefined__":t,this},D.prototype.clear=function(){
this.__data__=Je?Je(null):{},this.size=0},D.prototype.delete=E,D.prototype.get=i,D.prototype.has=go,D.prototype.set=T,
tt=D,rt=A,nt=n,it=function(e){var t=typeof e;
return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e},ut=st=at=ot=function(e,t){
return e=e.__data__,it(t)?e["string"==typeof t?"string":"hash"]:e.map},E=function(e){return e=ot(this,e).delete(e),
this.size-=e?1:0,e},i=function(e){return at(this,e).get(e)},go=function(e){return st(this,e).has(e)},T=function(e,t){
var r=ut(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},q.prototype.clear=function(){this.size=0,
this.__data__={hash:new tt,map:new(nt||rt),string:new tt}},q.prototype.delete=E,q.prototype.get=i,q.prototype.has=go,
q.prototype.set=T,lt=n,dt=E=q,ft=ct=A,i=x,go=Va,T=j,A=function(e,t){var r,n=this.__data__;if(n instanceof ct){if(
r=n.__data__,!lt||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new dt(r)}return n.set(e,t),
this.size=n.size,this},k.prototype.clear=P,k.prototype.delete=i,k.prototype.get=go,k.prototype.has=T,k.prototype.set=A,
x=k,pt=E,Va=function(e){return this.__data__.has(e)},B.prototype.add=B.prototype.push=function(e){
return this.__data__.set(e,"__lodash_hash_undefined__"),this},B.prototype.has=Va,ht=B,gt=j=function(e,t){for(var r=-1,
n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},mt=function(e,t){return e.has(t)},P=L.Uint8Array,vt=P,
bt=Te,yt=i=function(e,t,r,n,i,o){var a,s,u,c,l,d,f,p=1&r,h=e.length,g=t.length;if(h!=g&&!(p&&h<g))return!1;if(g=o.get(e)
,a=o.get(t),g&&a)return g==t&&a==e;for(s=-1,u=!0,c=2&r?new ht:void 0,o.set(e,t),o.set(t,e);++s<h;){if(l=e[s],d=t[s],
void 0!==(f=n?p?n(d,l,s,t,e,o):n(l,d,s,e,t,o):f)){if(f)continue;u=!1;break}if(c){if(!gt(t,function(e,t){if(!mt(c,t)&&(
l===e||i(l,e,r,n,o)))return c.push(t)})){u=!1;break}}else if(l!==d&&!i(l,d,r,n,o)){u=!1;break}}return o.delete(e),
o.delete(t),u},_t=function(e){var r=-1,n=Array(e.size);return e.forEach(function(e,t){n[++r]=[t,e]}),n},Et=go=function(e
){var t=-1,r=Array(e.size);return e.forEach(function(e){r[++t]=e}),r},T=r?r.prototype:void 0,Ot=T?T.valueOf:void 0,
A=function(e,t,r,n,i,o,a){var s,u;switch(r){case"[object DataView]":if(
e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":
return!(e.byteLength!=t.byteLength||!o(new vt(e),new vt(t)));case"[object Boolean]":case"[object Date]":
case"[object Number]":return bt(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;
case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":s=_t;case"[object Set]":return s=s||Et,!!(
e.size==t.size||1&n)&&((u=a.get(e))?u==t:(n|=2,a.set(e,t),u=yt(s(e),s(t),n,i,o,a),a.delete(e),u));case"[object Symbol]":
if(Ot)return Ot.call(e)==Ot.call(t)}return!1},Va=function(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];
return e},P=Array.isArray,wt=Va,Rt=a=P,T=function(e,t,r){return t=t(e),Rt(e)?t:wt(t,r(e))},Tt=P=function(e,t){for(var r,
n=-1,i=null==e?0:e.length,o=0,a=[];++n<i;)t(r=e[n],n,e)&&(a[o++]=r);return a},p=Object.prototype,
St=p.propertyIsEnumerable,p=(Nt=Object.getOwnPropertySymbols)?function(t){return null==t?[]:(t=Object(t),Tt(Nt(t),
function(e){return St.call(t,e)}))}:function(){return[]},ji=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);
return n},At=f,w=function(e){return Pt(e)&&"[object Arguments]"==At(e)},xt=Pt=oa=function(e){
return null!=e&&"object"==typeof e},O=Object.prototype,jt=O.hasOwnProperty,It=O.propertyIsEnumerable,O=w(function(){
return arguments}())?w:function(e){return xt(e)&&jt.call(e,"callee")&&!It.call(e,"callee")},R=(Oa=(Oa=(R=(R=(w={
exports:{}}).exports)&&!R.nodeType&&R)&&w&&!w.nodeType&&w)&&Oa.exports===R?L.Buffer:void 0)?Oa.isBuffer:void 0,
w.exports=R||function(){return!1},Lt=/^(?:0|[1-9]\d*)$/,Oa=function(e,t){var r=typeof e;return!!(
t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&Lt.test(e))&&-1<e&&e%1==0&&e<t},Ct=f,Gt=R=function(e){
return"number"==typeof e&&-1<e&&e%1==0&&e<=9007199254740991},Ut=oa,(t={}
)["[object Float32Array]"]=t["[object Float64Array]"]=t["[object Int8Array]"]=t["[object Int16Array]"]=t["[object Int32Array]"]=t["[object Uint8Array]"]=t["[object Uint8ClampedArray]"]=t["[object Uint16Array]"]=t["[object Uint32Array]"]=!0
,
t["[object Arguments]"]=t["[object Array]"]=t["[object ArrayBuffer]"]=t["[object Boolean]"]=t["[object DataView]"]=t["[object Date]"]=t["[object Error]"]=t["[object Function]"]=t["[object Map]"]=t["[object Number]"]=t["[object Object]"]=t["[object RegExp]"]=t["[object Set]"]=t["[object String]"]=t["[object WeakMap]"]=!1
,N=function(e){return Ut(e)&&Gt(e.length)&&!!t[Ct(e)]},Ta=function(t){return function(e){return t(e)}},v=(v=(y=Ft={
exports:{}}).exports)&&!v.nodeType&&v,v=(wa=v&&y&&!y.nodeType&&y)&&wa.exports===v,Ra=v&&I.process,v=function(){try{
return wa&&wa.require&&wa.require("util").types||Ra&&Ra.binding&&Ra.binding("util")}catch(e){}}(),y.exports=v,v=(y=(
I=Ft.exports)&&I.isTypedArray)?Ta(y):N,Mt=ji,Dt=O,qt=a,kt=w.exports,Bt=Oa,$t=I=v,y=Object.prototype,zt=y.hasOwnProperty,
Vt=Object.prototype,xa=Object.keys,ja=Object,Ht=function(e){var t=e&&e.constructor;return e===(
"function"==typeof t&&t.prototype||Vt)},Wt=function(e){return xa(ja(e))},N=Object.prototype,Kt=N.hasOwnProperty,Jt=Me,
Xt=R,Qt=function(e,t){var r,n=qt(e),i=!n&&Dt(e),o=!n&&!i&&kt(e),a=!n&&!i&&!o&&$t(e),s=n||i||o||a,u=s?Mt(e.length,String
):[],c=u.length;for(r in e)!t&&!zt.call(e,r)||s&&("length"==r||o&&("offset"==r||"parent"==r)||a&&(
"buffer"==r||"byteLength"==r||"byteOffset"==r)||Bt(r,c))||u.push(r);return u},Yt=function(e){var t,r;if(!Ht(e)
)return Wt(e);for(r in t=[],Object(e))Kt.call(e,r)&&"constructor"!=r&&t.push(r);return t},Zt=ji=function(e){
return null!=e&&Xt(e.length)&&!Jt(e)},er=T,tr=p,rr=v=function(e){return(Zt(e)?Qt:Yt)(e)},nr=function(e){return er(e,rr,
tr)},y=Object.prototype,ir=y.hasOwnProperty,N=function(e,t,r,n,i,o){var a,s,u,c,l,d,f,p,h,g=1&r,m=nr(e),v=m.length;if(
v!=nr(t).length&&!g)return!1;for(a=v;a--;)if(s=m[a],!(g?s in t:ir.call(t,s)))return!1;if(p=o.get(e),h=o.get(t),p&&h
)return p==t&&h==e;for(u=!0,o.set(e,t),o.set(t,e),c=g;++a<v;){if(l=e[s=m[a]],d=t[s],!(void 0===(f=n?g?n(d,l,s,t,e,o):n(l
,d,s,e,t,o):f)?l===d||i(l,d,r,n,o):f)){u=!1;break}c=c||"constructor"==s}return u&&!c&&(p=e.constructor)!=(
h=t.constructor)&&"constructor"in e&&"constructor"in t&&!(
"function"==typeof p&&p instanceof p&&"function"==typeof h&&h instanceof h)&&(u=!1),o.delete(e),o.delete(t),u},T=S(L,
"DataView"),p=n,y=S(L,"Promise"),_=n=S(L,"Set"),L=S(L,"WeakMap"),or=f,sr=(ar=m)(m=T),ur=ar(p),cr=ar(y),lr=ar(_),dr=ar(L)
,T=or,(m&&"[object DataView]"!=T(new m(new ArrayBuffer(1)))||p&&"[object Map]"!=T(new p)||y&&"[object Promise]"!=T(
y.resolve())||_&&"[object Set]"!=T(new _)||L&&"[object WeakMap]"!=T(new L))&&(T=function(e){var t=or(e);if(e=(
e="[object Object]"==t?e.constructor:void 0)?ar(e):"")switch(e){case sr:return"[object DataView]";case ur:
return"[object Map]";case cr:return"[object Promise]";case lr:return"[object Set]";case dr:return"[object WeakMap]"}
return t}),fr=x,pr=i,hr=A,gr=N,mr=T,vr=a,br=w.exports,yr=I,_r="[object Arguments]",Er="[object Array]",
Or="[object Object]",m=Object.prototype,wr=m.hasOwnProperty,Rr=function(e,t,r,n,i,o){var a=vr(e),s=vr(t),u=a?Er:mr(e),
s=s?Er:mr(t),c=(u=u==_r?Or:u)==Or,l=(s=s==_r?Or:s)==Or;if((s=u==s)&&br(e)){if(!br(t))return!1;c=!(a=!0)}return s&&!c?(
o=o||new fr,a||yr(e)?pr(e,t,r,n,i,o):hr(e,t,u,r,n,i,o)):1&r||(a=c&&wr.call(e,"__wrapped__"),u=l&&wr.call(t,"__wrapped__"
),!a&&!u)?s&&(o=o||new fr,gr(e,t,r,n,i,o)):i(a?e.value():e,u?t.value():t,r,n,o=o||new fr)},Sr=x,Nr=p=function e(t,r,n,i,
o){return t===r||(null==t||null==r||!Tr(t)&&!Tr(r)?t!=t&&r!=r:Rr(t,r,n,i,e,o))},Ar=Ge,Pr=y=function(e){return e==e&&!Ar(
e)},xr=v,jr=function(e,t,r,n){var i,o,a,s,u,c,l=r.length,d=l,f=!n;if(null==e)return!d;for(e=Object(e);l--;)if(i=r[l],
f&&i[2]?i[1]!==e[i[0]]:!(i[0]in e))return!1;for(;++l<d;)if(a=e[o=(i=r[l])[0]],s=i[1],f&&i[2]){if(void 0===a&&!(o in e)
)return!1}else if(u=new Sr,!(void 0===(c=n?n(a,s,o,e,t,u):c)?Nr(s,a,3,n,u):c))return!1;return!0},Ir=function(e){for(
var t,r,n=xr(e),i=n.length;i--;)r=e[t=n[i]],n[i]=[t,r,Pr(r)];return n},Lr=_=function(t,r){return function(e){
return null!=e&&e[t]===r&&(void 0!==r||t in Object(e))}},L=function(t){var r=Ir(t);return 1==r.length&&r[0][2]?Lr(
r[0][0],r[0][1]):function(e){return e===t||jr(e,t,r)}},Cr=f,Gr=Tr=oa,Ur=a,Fr=i=function(e){return"symbol"==typeof e||Gr(
e)&&"[object Symbol]"==Cr(e)},Mr=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Dr=/^\w*$/,A=function(e,t){if(Ur(e)
)return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!Fr(e))||Dr.test(e)||!Mr.test(e
)||null!=t&&e in Object(t)},qr=E,$.Cache=qr,
kr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Br=/\\(\\)?/g,Pa=(
N=$(function(e){var i=[];return 46===e.charCodeAt(0)&&i.push(""),e.replace(kr,function(e,t,r,n){i.push(r?n.replace(Br,
"$1"):t||e)}),i},function(e){return 500===Pa.size&&Pa.clear(),e})).cache,$r=Re,zr=a,Vr=i,T=r?r.prototype:void 0,
Hr=T?T.toString:void 0,Wr=w=function e(t){if("string"==typeof t)return t;if(zr(t))return $r(t,e)+"";if(Vr(t)
)return Hr?Hr.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},Xr=N,Qr=I=function(e){return null==e?"":Wr(e)},Yr=i,
rn=Zr=function(e,t){return Kr(e)?e:Jr(e,t)?[e]:Xr(Qr(e))},nn=O,sn=R,cn=function(e,t){return null!=e&&t in Object(e)},
ln=m=function(e,t,r){for(var n,i,o=(t=rn(t,e)).length,a=!(n=-1);++n<o&&(i=un(t[n]),a=null!=e&&r(e,i));)e=e[i];
return a||++n!=o?a:!!(o=null==e?0:e.length)&&sn(o)&&an(i,o)&&(on(e)||nn(e))},dn=p,fn=function(e,t,r){return void 0===(
e=null==e?void 0:tn(e,t))?r:e},pn=function(e,t){return null!=e&&ln(e,t,cn)},gn=y,mn=_,bn=tn=x=function(e,t){for(var r=0,
n=(t=Zr(t,e)).length;null!=e&&r<n;)e=e[en(t[r++])];return r&&r==n?e:void 0},yn=function(t){return function(e){
return null==e?void 0:e[t]}},_n=function(t){return function(e){return bn(e,t)}},En=hn=Jr=A,On=vn=un=en=function(e){if(
"string"==typeof e||Yr(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},wn=L,Rn=function(r,n){return hn(r)&&gn(n
)?mn(vn(r),n):function(e){var t=fn(e,r);return void 0===t&&t===n?pn(e,r):dn(n,t,3)}},Tn=E=function(e){return e},
Sn=on=Kr=a,Nn=function(e){return En(e)?yn(On(e)):_n(e)},An=function(e,t,r){for(var n,i=-1,o=Object(e),a=r(e),
s=a.length;s--&&!1!==t(o[n=a[++i]],n,o););return e},Pn=v,Ln=Re,Gn=T=function(e,n){var i=-1,o=In(e)?Array(e.length):[];
return jn(e,function(e,t,r){o[++i]=n(e,t,r)}),o},Fn=function(e,t){return(Un(e)?Ln:Gn)(e,Cn(t))},Dn=Te,qn=In=xn=ji,
kn=an=Oa,Bn=Ge,$n=j,Vn=function(e,n){var i;return Mn(e,function(e,t,r){return!(i=n(e,t,r))}),!!i},Kn=function(e,t,r){
var n=Hn(e)?$n:Vn;return r&&Wn(e,t,r)&&(t=void 0),n(e,zn(t))},Jn=Mn=jn=N=function(e,t){if(null==e)return e;if(!xn(e)
)return e&&An(e,t,Pn);for(var r=e.length,n=-1,i=Object(e);++n<r&&!1!==t(i[n],n,i););return e},Xn=function(e,t){for(
var r=-1,n=null==e?0:e.length;++r<n;)if(!t(e[r],r,e))return!1;return!0},Qn=function(e,n){var i=!0;return Jn(e,function(e
,t,r){return i=!!n(e,t,r)}),i},Yn=zn=Cn=R=function(e){return"function"==typeof e?e:null==e?Tn:"object"==typeof e?Sn(e
)?Rn(e[0],e[1]):wn(e):Nn(e)},Zn=Hn=Un=a,ei=Wn=p=function(e,t,r){if(!Bn(r))return!1;var n=typeof t;return!!(
"number"==n?qn(r)&&kn(t,r.length):"string"==n&&t in r)&&Dn(r[t],e)},ti=function(e,t,r){var n=Zn(e)?Xn:Qn;return r&&ei(e,
t,r)&&(t=void 0),n(e,Yn(t))},ri=S,y=function(){try{var e=ri(Object,"defineProperty");return e({},"",{}),e}catch(e){}}(),
ni=O,ii=a,oi=r?r.isConcatSpreadable:void 0,si=function(e){return ii(e)||ni(e)||!!(oi&&e&&e[oi])},ui=ai=Va,
ci=_=function e(t,r,n,i,o){var a,s=-1,u=t.length;for(n=n||si,o=o||[];++s<u;)a=t[s],0<r&&n(a)?1<r?e(a,r-1,n,i,o):ai(o,a
):i||(o[o.length]=a);return o},li=function(e,t){var r=-1,n=e.length;for(t=t||Array(n);++r<n;)t[r]=e[r];return t},di=a,
fi=function(){var e,t,r,n=arguments.length;if(!n)return[];for(e=Array(n-1),t=arguments[0],r=n;r--;)e[r-1]=arguments[r];
return ui(di(t)?li(t):[t],ci(e,1))},pi=/\s/,hi=function(e){for(var t=e.length;t--&&pi.test(e.charAt(t)););return t},
gi=/^\s+/,mi=A=function(e){return e&&e.slice(0,hi(e)+1).replace(gi,"")},vi=Ge,bi=i,yi=/^[-+]0x[0-9a-f]+$/i,
_i=/^0b[01]+$/i,Ei=/^0o[0-7]+$/i,Oi=parseInt,wi=function(e){var t;return"number"==typeof e?e:bi(e)?NaN:(vi(e)&&(
t="function"==typeof e.valueOf?e.valueOf():e,e=vi(t)?t+"":t),"string"!=typeof e?0===e?e:+e:(e=mi(e),(t=_i.test(e)
)||Ei.test(e)?Oi(e.slice(2),t?2:8):yi.test(e)?NaN:+e))},Ri=function(e){return e?(e=wi(e)
)===1/0||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0},L=function(e){var t=(e=Ri(e))%1;
return e==e?t?e-t:e:0},Ti=function(e,t,r,n){var i=-1,o=null==e?0:e.length;for(n&&o&&(r=e[++i]);++i<o;)r=t(r,e[i],i,e);
return r},Si=N,Ni=R,Ai=function(e,n,i,o,t){return t(e,function(e,t,r){i=o?(o=!1,e):n(i,e,t,r)}),i},Pi=a,xi=function(e,t,
r){var n=Pi(e)?Ti:Ai,i=arguments.length<3;return n(e,Ni(t),r,i,Si)},ji=function(e,t,r){var n,i=-1,o=e.length;for((
r=o<r?o:r)<0&&(r+=o),o=r<(t=t<0?o<-t?0:o+t:t)?0:r-t>>>0,t>>>=0,n=Array(o);++i<o;)n[i]=e[i+t];return n},Ii=function(e,t,r
,n){for(var i=e.length,o=r+(n?1:-1);n?o--:++o<i;)if(t(e[o],o,e))return o;return-1},Li=function(e){return e!=e},
Ci=function(e,t,r){for(var n=r-1,i=e.length;++n<i;)if(e[n]===t)return n;return-1},Oa=function(e,t,r){return t==t?Ci(e,t,
r):Ii(e,Li,r)},n&&go(new n([,-0]))[1],Gi=i,Ui=function(e,t){var r,n,i,o,a,s,u,c;if(e!==t){if(r=void 0!==e,n=null===e,
i=e==e,o=Gi(e),a=void 0!==t,s=null===t,u=t==t,c=Gi(t),!s&&!c&&!o&&t<e||o&&a&&u&&!s&&!c||n&&a&&u||!r&&u||!i)return 1;if(
!n&&!o&&!c&&e<t||c&&r&&i&&!n&&!o||s&&r&&i||!a&&i||!u)return-1}return 0},Fi=Re,Mi=x,Di=R,qi=T,ki=function(e,t){
var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e},Bi=Ta,$i=function(e,t,r){for(var n,i=-1,o=e.criteria,
a=t.criteria,s=o.length,u=r.length;++i<s;)if(n=Ui(o[i],a[i]))return u<=i?n:n*("desc"==r[i]?-1:1);return e.index-t.index}
,zi=E,Vi=a,Hi=function(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:
return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)},Wi=Math.max,Ki=function(e){
return function(){return e}},j=(Ji=y)?function(e,t){return Ji(e,"toString",{configurable:!0,enumerable:!1,value:Ki(t),
writable:!0})}:E,Xi=Date.now,Sa=j,Qi=_,Yi=function(e,n,r){var i;return n=n.length?Fi(n,function(t){return Vi(t
)?function(e){return Mi(e,1===t.length?t[0]:t)}:t}):[zi],i=-1,n=Fi(n,Bi(Di)),e=qi(e,function(t,e,r){return{criteria:Fi(n
,function(e){return e(t)}),index:++i,value:t}}),ki(e,function(e,t){return $i(e,t,r)})},Zi=p,function(){var e=Xi(),
t=16-e+ +Aa;if(Aa=e,0<t){if(800<=++Na)return}else Na=0;Sa.apply(void 0,arguments)}((Ia=S=function(e,t){if(null==e
)return[];var r=t.length;return 1<r&&Zi(e,t[0],t[1])?t=[]:2<r&&Zi(t[0],t[1],t[2])&&(t=[t[0]]),Yi(e,Qi(t,1),[])},La=void(
Aa=Na=0),Ca=E,La=Wi(void 0===La?Ia.length-1:La,0),function(){for(var e,t=arguments,r=-1,n=Wi(t.length-La,0),i=Array(n
);++r<n;)i[r]=t[La+r];for(r=-1,e=Array(La+1);++r<La;)e[r]=t[r];return e[La]=Ca(i),Hi(Ia,this,e)}),S+""),to=P,
ro=function(e,n){var i=[];return eo(e,function(e,t,r){n(e,t,r)&&i.push(e)}),i},no=R,oo=function(e,t){return(io(e)?to:ro
)(e,no(t))},ao=E,so=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e},uo=eo=N,
co=function(e){return"function"==typeof e?e:ao},lo=io=a,fo=function(e,t){return(lo(e)?so:uo)(e,co(t))},po=ji,O=function(
e,t,r){var n=e.length;return r=void 0===r?n:r,!t&&n<=r?e:po(e,t,r)},ho=RegExp(
"[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),r=function(e){return ho.test(e)},
(Va=Ft.exports)&&Va.isRegExp,go=function(e){return e.split("")},
n="[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:"+[
"[^\\ud800-\\udfff]","(?:\\ud83c[\\udde6-\\uddff]){2}","[\\ud800-\\udbff][\\udc00-\\udfff]"].join("|"
)+")[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?)*",i="(?:"+[
"[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]?","[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
"(?:\\ud83c[\\udde6-\\uddff]){2}","[\\ud800-\\udbff][\\udc00-\\udfff]","[\\ud800-\\udfff]"].join("|")+")",mo=RegExp(
"\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|"+i+n,"g"),vo=go,bo=r,yo=function(e){return e.match(mo)||[]},
Eo=_o=Oa,Oo=w,wo=A,Ro=O,To=function(e,t){for(var r=e.length;r--&&-1<_o(t,e[r],0););return r},So=function(e,t){for(
var r=-1,n=e.length;++r<n&&-1<Eo(t,e[r],0););return r},No=function(e){return(bo(e)?yo:vo)(e)},Ao=I,Po=function(e,t,r){
return(e=Ao(e))&&(r||void 0===t)?wo(e):e&&(t=Oo(t))?(r=No(e),e=No(t),t=So(r,e),e=To(r,e)+1,Ro(r,t,e).join("")):e},
x=Object.prototype,xo=x.hasOwnProperty,jo=function(e,t){return null!=e&&xo.call(e,t)},Io=m,Lo=function(e,t){
return null!=e&&Io(e,t,jo)},Uo=function(e){return!0===e||!1===e||Go(e)&&"[object Boolean]"==Co(e)},Fo=function(e){
return null===e},Do=a,ko=function(e){return"string"==typeof e||!Do(e)&&qo(e)&&"[object String]"==Mo(e)},Bo=Mo=Co=f,
$o=qo=Go=oa,zo=function(e){return"number"==typeof e||$o(e)&&"[object Number]"==Bo(e)},Vo=function(e,t,r){return e==e&&(
void 0!==r&&(e=e<=r?e:r),void 0!==t&&(e=t<=e?e:t)),e},Ho=w,Wo=L,Ko=I,Jo=function(e,t,r){return e=Ko(e),r=null==r?0:Vo(
Wo(r),0,e.length),t=Ho(t),e.slice(r,r+t.length)==t},Xo=Re,Qo=function(t,e){return Xo(e,function(e){return t[e]})},Yo=v,
Zo=function(e){return null==e?[]:Qo(e,Yo(e))},(T="production").startsWith("%{")&&T.endsWith("}")||Y(T),u={DEBUG:0,
0:"DEBUG",INFO:1,1:"INFO",WARN:2,2:"WARN",ERROR:3,3:"ERROR",NONE:4,4:"NONE"},ee("0.0.4"),y=null!=(Ta=ee(""))?Ta:"hgm",
_=null!=(j=ee(""))?j:"",ee("production"),ee("2022-04-09T09:38:31.186Z"),"".startsWith("%{")&&"".endsWith("}"),E=null!=(
R=function(e){if(e){if(function(){switch(e){case u.DEBUG:case u.INFO:case u.WARN:case u.ERROR:case u.NONE:return 1;
default:return}}())return e;switch(e=(""+e).toUpperCase()){case"ALL":case"DEBUG":return u.DEBUG;case"INFO":return u.INFO
case"WARN":case"WARNING":return u.WARN;case"ERR":case"ERROR":return u.ERROR;case"FALSE":case"OFF":case"QUIET":
case"SILENT":case"NONE":return u.NONE;default:return}}}(null!=(P=Y(null==(p=process)||null==(S=p.env)?void 0:S.LOG_LEVEL
))?P:Y(_)))?R:u.INFO;const us=null!=(Ft=Y(null==(N=process)||null==(ji=N.env)?void 0:ji.COMMAND_NAME))?Ft:y,
cs="git@github.com",ls=".gitmodules",ds="git";class fs{constructor(e,t){o(this,"_logger",void 0),o(this,"name",void 0),
o(this,"_level",void 0),this.name=e,this._logger=t,this._level=void 0}getLogLevel(){var e;return null!=(e=this._level
)?e:this._logger.getLogLevel()}setLogLevel(e){return this._level=e,this}debug(...e){(
void 0===this._level||this._level<=u.DEBUG)&&this._logger.debug(`[${this.name}]`,...e)}info(...e){(
void 0===this._level||this._level<=u.INFO)&&this._logger.info(`[${this.name}]`,...e)}warn(...e){(
void 0===this._level||this._level<=u.WARN)&&this._logger.warn(`[${this.name}]`,...e)}error(...e){(
void 0===this._level||this._level<=u.ERROR)&&this._logger.error(`[${this.name}]`,...e)}}class C{static setLogLevel(e){
return e&&(this._level=e),this}static getLogLevel(){return this._level}static getLogLevelString(){var e=this._level;
switch(e){case u.DEBUG:return"DEBUG";case u.INFO:return"INFO";case u.WARN:return"WARN";case u.ERROR:return"ERROR";
case u.NONE:return"NONE";default:return"Unknown:"+e}}static setLogger(e){if(!e)throw new TypeError(
"The logger was not defined");this._logger=e}static debug(...e){this._level<=u.DEBUG&&this._logger.debug(...e)}
static info(...e){this._level<=u.INFO&&this._logger.info(...e)}static warn(...e){this._level<=u.WARN&&this._logger.warn(
...e)}static error(...e){this._level<=u.ERROR&&this._logger.error(...e)}static createLogger(e){return new fs(e,C)}}o(C,
"Level",u),o(C,"_level",u.DEBUG),o(C,"_logger",console);const ps=C.createLogger("ProcessUtils");class hs{
static getArguments(){return process.argv.slice(2)}static parseEnvFileLine(e,t){if(t.indexOf("=")<0)return t.length&&(
e[t]=""),e;const r=t.split("=");return t=r.shift(),(t=Po(t)).length&&(e[t]=r.join("=").trim()),e}static parseEnvFile(e){
const t=Ha.default.readFileSync(e,{encoding:"utf-8"}),r=t.split("\n");return r.reduce(hs.parseEnvFileLine,{})}
static initEnvFromFile(e){e=hs.parseEnvFile(e),process.env=d(d({},e),process.env)}static initEnvFromDefaultFiles(){
var e=Wa.default.join(process.cwd(),".env");Ha.default.existsSync(e)&&hs.initEnvFromFile(e)}static setupDestroyHandler(r
,n){let i=!1;var e=t=>e=>{hs._printErrors(t,e);try{if(i)return;i=!0,r()}catch(e){n(e)}};process.on("exit",e("exit")),
process.on("SIGTERM",e("SIGTERM")),process.on("SIGINT",e("SIGINT")),process.on("SIGUSR1",e("SIGUSR1")),process.on(
"SIGUSR2",e("SIGUSR2")),process.on("uncaughtException",e("uncaughtException"))}static _printErrors(e,t){try{t?ps.error(
`Closing process because "${e}" event: `,t):"exit"===e?ps.debug(`Closing process because "${e}" event`):ps.info(
`Closing process because "${e}" event`)}catch(e){console.error("Error while printing errors: ",e)}}}l={OK:0,0:"OK",
GENERAL_ERRORS:1,1:"GENERAL_ERRORS",MISUSE_OF_SHELL_BUILTINS:2,2:"MISUSE_OF_SHELL_BUILTINS",ARGUMENT_PARSE_ERROR:3,
3:"ARGUMENT_PARSE_ERROR",UNKNOWN_ARGUMENT:4,4:"UNKNOWN_ARGUMENT",UNIMPLEMENTED_FEATURE:5,5:"UNIMPLEMENTED_FEATURE",
FATAL_ERROR:6,6:"FATAL_ERROR",CONFLICT:7,7:"CONFLICT",USAGE:64,64:"USAGE",DATAERR:65,65:"DATAERR",NOINPUT:66,
66:"NOINPUT",NOUSER:67,67:"NOUSER",NOHOST:68,68:"NOHOST",UNAVAILABLE:69,69:"UNAVAILABLE",SOFTWARE:70,70:"SOFTWARE",
OSERR:71,71:"OSERR",OSFILE:72,72:"OSFILE",CANTCREAT:73,73:"CANTCREAT",IOERR:74,74:"IOERR",TEMPFAIL:75,75:"TEMPFAIL",
PROTOCOL:76,76:"PROTOCOL",NOPERM:77,77:"NOPERM",CONFIG:78,78:"CONFIG",COMMAND_INVOKED_CANNOT_EXECUTE:126,
126:"COMMAND_INVOKED_CANNOT_EXECUTE",COMMAND_NOT_FOUND:127,127:"COMMAND_NOT_FOUND",INVALID_ARGUMENT_TO_EXIT:128,
128:"INVALID_ARGUMENT_TO_EXIT",FATAL_SIGNAL_RANGE_START:129,129:"FATAL_SIGNAL_RANGE_START",FATAL_SIGNAL_RANGE_END:254,
254:"FATAL_SIGNAL_RANGE_END",EXIT_STATUS_OUT_OF_RANGE:255,255:"EXIT_STATUS_OUT_OF_RANGE"},s={OPTIONS:0,0:"OPTIONS",
GET:1,1:"GET",POST:2,2:"POST",PUT:3,3:"PUT",DELETE:4,4:"DELETE",PATCH:5,5:"PATCH"};const gs="WINDOW"===(A=null!=(
Oa=null!=(n=null==(Va=process)||null==(i=Va.env)?void 0:i.NOR_REQUEST_CLIENT_MODE)?n:null==(go=process)||null==(r=go.env
)?void 0:r.REACT_APP_REQUEST_CLIENT_MODE)?Oa:"")||!("undefined"==typeof window||!window.fetch),ms="NODE"===A||!gs;
class vs{static async getRequestDataAsBuffer(n){return new Promise((e,t)=>{const r=[];n.on("data",e=>{try{r.push(e)
}catch(e){t(e)}}),n.on("end",()=>{try{e(Buffer.concat(r))}catch(e){t(e)}})})}static async getRequestDataAsString(e,
t="utf8"){const r=await vs.getRequestDataAsBuffer(e);return r.toString(t)}static async getRequestDataAsFormUrlEncoded(e
){if(""!==(e=await vs.getRequestDataAsString(e)))return Ja.parse(e)}static async getRequestDataAsJson(e){if(""!==(
e=await vs.getRequestDataAsString(e)))return JSON.parse(e)}}(O=c={Continue:100,100:"Continue",SwitchingProtocols:101,
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
)[500]="InternalServerError",O[O.NotImplemented=501]="NotImplemented",O[O.BadGateway=502]="BadGateway",
O[O.ServiceUnavailable=503]="ServiceUnavailable",O[O.GatewayTimeout=504]="GatewayTimeout",
O[O.HttpVersionNotSupported=505]="HttpVersionNotSupported",O[O.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",
O[O.InsufficientStorage=507]="InsufficientStorage",O[O.LoopDetected=508]="LoopDetected",
O[O.BandwidthLimitExceeded=509]="BandwidthLimitExceeded",O[O.NotExtended=510]="NotExtended",
O[O.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",ea={ERROR:"error"};class bs extends Error{
constructor(e,t=void 0,r=void 0,n=void 0,i=void 0){super(t||function(e){switch(e){case c.Continue:return"Continue";
case c.SwitchingProtocols:return"Switching Protocols";case c.Processing:return"Processing";case c.CheckPoint:
return"Check Point";case c.OK:return"OK";case c.Created:return"Created";case c.Accepted:return"Accepted";
case c.NonAuthoritativeInformation:return"Non-Authoritative Information";case c.NoContent:return"No Content";
case c.ResetContent:return"Reset Content";case c.PartialContent:return"Partial Content";case c.MultiStatus:
return"Multi Status";case c.AlreadyReported:return"Already Reported";case c.IMUsed:return"IM Used";
case c.MultipleChoices:return"Multiple Choices";case c.MovedPermanently:return"Moved Permanently";case c.Found:
return"Found";case c.SeeOther:return"See Other";case c.NotModified:return"Not Modified";case c.TemporaryRedirect:
return"Temporary Redirect";case c.PermanentRedirect:return"Permanent Redirect";case c.BadRequest:return"Bad Request";
case c.Unauthorized:return"Unauthorized";case c.PaymentRequired:return"Payment Required";case c.Forbidden:
return"Forbidden";case c.NotFound:return"Not Found";case c.MethodNotAllowed:return"Method Not Allowed";
case c.NotAcceptable:return"Not Acceptable";case c.ProxyAuthenticationRequired:return"Proxy Authentication Required";
case c.RequestTimeout:return"Request Timeout";case c.Conflict:return"Conflict";case c.Gone:return"Gone";
case c.LengthRequired:return"Length Required";case c.PreconditionFailed:return"Precondition Failed";
case c.PayloadTooLarge:return"Payload Too Large";case c.URITooLong:return"URI Too Long";case c.UnsupportedMediaType:
return"Unsupported Media Type";case c.RequestedRangeNotSatisfiable:return"Requested Range Not Satisfiable";
case c.ExpectationFailed:return"Expectation Failed";case c.IAmATeapot:return"I Am a Teapot";case c.UnprocessableEntity:
return"Unprocessable Entity";case c.Locked:return"Locked";case c.FailedDependency:return"Failed Dependency";
case c.TooEarly:return"Too Early";case c.UpgradeRequired:return"Upgrade Required";case c.PreconditionRequired:
return"Precondition Required";case c.TooManyRequests:return"Too Many Requests";case c.RequestHeaderFieldsTooLarge:
return"Request Header Fields Too Large";case c.UnavailableForLegalReasons:return"Unavailable For Legal Reasons";
case c.InternalServerError:return"Internal Server Error";case c.NotImplemented:return"Not Implemented";
case c.BadGateway:return"Bad Gateway";case c.ServiceUnavailable:return"Service Unavailable";case c.GatewayTimeout:
return"Gateway Timeout";case c.HttpVersionNotSupported:return"Http Version Not Supported";case c.VariantAlsoNegotiates:
return"Variant Also Negotiates";case c.InsufficientStorage:return"Insufficient Storage";case c.LoopDetected:
return"Loop Detected";case c.BandwidthLimitExceeded:return"Bandwidth Limit Exceeded";case c.NotExtended:
return"Not Extended";case c.NetworkAuthenticationRequired:return"Network Authentication Required";default:
return e<400?"HTTP Status":"HTTP Error"}}(e)),o(this,"status",void 0),o(this,"method",void 0),o(this,"url",void 0),o(
this,"body",void 0),o(this,"__proto__",void 0),t=new.target.prototype,Object.setPrototypeOf?Object.setPrototypeOf(this,t
):this.__proto__=t,this.status=e,this.method=r,this.url=n,this.body=i}valueOf(){return this.status}toString(){
return this.status+" "+this.message}toJSON(){return{type:ea.ERROR,status:this.status,message:this.message}}
getStatusCode(){return this.status}getMethod(){return this.method}getUrl(){return this.url}getBody(){return this.body}}
const ys=ms?require("fs").promises:void 0,_s=C.createLogger("NodeRequestClient");class Es{static setLogLevel(e){
_s.setLogLevel(e)}constructor(e,t){o(this,"_http",void 0),o(this,"_https",void 0),this._http=e,this._https=t}
async jsonRequest(e,t,r,n){switch(e){case s.GET:return this._getJson(t,r,n);case s.POST:return this._postJson(t,r,n);
case s.PATCH:return this._patchJson(t,r,n);case s.PUT:return this._putJson(t,r,n);case s.DELETE:return this._deleteJson(
t,r,n);default:throw new TypeError("[Node]RequestClient: Unsupported method: "+e)}}async _checkSocketFile(t){try{
const e=await ys.stat(t);return!!e.isSocket()}catch(e){if("ENOTDIR"===(t=null==e?void 0:e.code))return void _s.debug(
"_checkSocketFile: ENOTDIR: ",e);if("ENOENT"===t)return void _s.debug("_checkSocketFile: ENOENT: ",e);throw _s.error(
`_checkSocketFile: Error "${t}" passed on: `,e),e}}async _findSocketFile(e){var t=await this._checkSocketFile(e);
return!0===t?e:!1!==t&&"/"!==(t=Wa.default.dirname(e))&&t!==e?this._findSocketFile(t):void 0}async _httpRequest(o,a,e){
var t;const s=e?JSON.stringify(e)+"\n":void 0,u=new Ka.default.URL(o);let c;const l=null!=(
e=null===u||void 0===u?void 0:u.protocol)?e:"";if("unix:"===l||"socket:"===l){
const r=null!==u&&void 0!==u&&u.pathname?null===u||void 0===u?void 0:u.pathname:"/";if("/"===r)throw new TypeError(
"No socket path found for unix protocol URL: "+o);if(!(e=await this._findSocketFile(r)))throw new TypeError(
"No socket path found for unix protocol URL: "+o);t=""+(e.length<r.length?r.substr(e.length):"")+(
"?"!==u.search?u.search:""),a=d(d({},a),{},{socketPath:e,path:t}),o="",c=this._http
}else c="https:"===l?this._https:this._http;return new Promise((t,r)=>{let n=!1;try{if(!c)throw new Error(
"HTTP module not defined. This error should not happen.");var i;let e;o&&(a=d(d({},a),{},{hostname:u.hostname,
port:null!=(i=null!==u&&void 0!==u&&u.port?parseInt(u.port,10):void 0)?i:"https:"===l?443:80,path:u.pathname+u.search}))
,(e=c.request(a,e=>{n?_s.warn("Warning! Request had already ended when the response was received."):(n=!0,t(e))})).on(
"error",e=>{n?(_s.warn("Warning! Request had already ended when the response was received."),_s.debug(
"Error from event: ",e)):(_s.debug("Passing on error from event: ",e),n=!0,r(e))}),s&&e.write(s),e.end()}catch(e){n?(
_s.warn("Warning! Request had already ended when the response was received."),_s.debug("Exception: ",e)):(_s.debug(
"Passing on error: ",e),n=!0,r(e))}})}async _request(e,t,r,n){return r=await this._httpRequest(t,r,n),
n=await vs.getRequestDataAsJson(r),{method:e,url:t,statusCode:null!=(e=null==r?void 0:r.statusCode)?e:0,
headers:r.headers,body:n}}async _getJson(e,t,r){const n={method:"GET",headers:{"Content-Type":"application/json"}};
return t&&(n.headers=d(d({},n.headers),t)),this._request(s.GET,e,n,r).then(Es._successResponse)}async _putJson(e,t,r){
const n={method:"PUT",headers:{"Content-Type":"application/json"}};return t&&(n.headers=d(d({},n.headers),t)),
this._request(s.PUT,e,n,r).then(Es._successResponse)}async _postJson(e,t,r){const n={method:"POST",headers:{
"Content-Type":"application/json"}};return t&&(n.headers=d(d({},n.headers),t)),this._request(s.POST,e,n,r).then(
Es._successResponse)}async _patchJson(e,t,r){const n={method:"PATCH",headers:{"Content-Type":"application/json"}};
return t&&(n.headers=d(d({},n.headers),t)),this._request(s.PATCH,e,n,r).then(Es._successResponse)}async _deleteJson(e,t,
r){const n={method:"DELETE",headers:{"Content-Type":"application/json"}};return t&&(n.headers=d(d({},n.headers),t)),
this._request(s.DELETE,e,n,r).then(Es._successResponse)}static async _successResponse(e){
var t=null==e?void 0:e.statusCode;if(t<200||400<=t)throw _s.error(`Unsuccessful response with status ${t}: `,e),new bs(t
,`Error ${t} for ${te(e.method)} `+e.url,e.method,e.url,e.body);return e.body}}class Os{constructor(e){o(this,"_fetch",
void 0),this._fetch=e}jsonRequest(e,t,r,n){switch(e){case s.GET:return this._getJson(t,r,n);case s.POST:
return this._postJson(t,r,n);case s.PUT:return this._putJson(t,r,n);case s.DELETE:return this._deleteJson(t,r,n);
default:throw new TypeError("[Fetch]RequestClient: Unsupported method: "+e)}}_getJson(e,t,r){const n={method:"GET",
mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},credentials:"same-origin"};return t&&(
n.headers=d(d({},n.headers),t)),r&&(n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>Os._successResponse(e,s.GET))}
_putJson(e,t,r){const n={method:"PUT",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},
credentials:"same-origin"};return t&&(n.headers=d(d({},n.headers),t)),r&&(n.body=JSON.stringify(r)),this._fetch(e,n
).then(e=>Os._successResponse(e,s.PUT))}_postJson(e,t,r){const n={method:"POST",mode:"cors",cache:"no-cache",headers:{
"Content-Type":"application/json"},credentials:"same-origin"};return t&&(n.headers=d(d({},n.headers),t)),r&&(
n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>Os._successResponse(e,s.POST))}_deleteJson(e,t,r){const n={
method:"DELETE",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},credentials:"same-origin"};
return t&&(n.headers=d(d({},n.headers),t)),r&&(n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>Os._successResponse(e,
s.DELETE))}static _successResponse(e,t){const r=e.status;if(!e.ok||r<200||400<=r){const n=e.url,
i=`${r} ${e.statusText} for ${te(t)} `+n;return e.json().then(e=>{throw new bs(r,i,t,n,e)})}return e.json()}}
const ws=ms?require("http"):void 0,Rs=ms?require("https"):void 0,Ts=C.createLogger("RequestClient");class Ss{
static setLogLevel(e){Ts.setLogLevel(e),Es.setLogLevel(e)}static async jsonRequest(e,t,r,n){
return this._client.jsonRequest(e,t,r,n)}static async getJson(e,t){return this._client.jsonRequest(s.GET,e,t)}
static async postJson(e,t,r){return Ts.debug(".postJson: ",e,t,r),this._client.jsonRequest(s.POST,e,r,t)}
static async patchJson(e,t,r){return Ts.debug(".patchJson: ",e,t,r),this._client.jsonRequest(s.PATCH,e,r,t)}
static async putJson(e,t,r){return Ts.debug(".putJson: ",e,t,r),this._client.jsonRequest(s.PUT,e,r,t)}
static async deleteJson(e,t,r){return Ts.debug(".deleteJson: ",e,r,t),this._client.jsonRequest(s.DELETE,e,t,r)}
static _initClient(){if(gs&&this._hasWindowObject())return Ts.debug("Detected browser environment"),new Os(
window.fetch.bind(window));if(ms)return new Es(ws,Rs);throw new TypeError(
"Could not detect request client implementation")}static _hasWindowObject(){return"undefined"!=typeof window}}o(Ss,
"_client",Ss._initClient()),ta={OK:0,0:"OK",ERROR:1,1:"ERROR",HELP:2,2:"HELP",VERSION:3,3:"VERSION"};
const Ns=C.createLogger("Headers");class As{static setLogLevel(e){Ns.setLogLevel(e)}constructor(e){o(this,"_value",
void 0),o(this,"_uninitializedValue",void 0),this._value=void 0,this._uninitializedValue=e}_initializeValue(){
var t=this._value,r=this._uninitializedValue;try{r&&(this._uninitializedValue=void 0,this.addAll(r))}catch(e){
throw this._value=t,this._uninitializedValue=r,e}}clear(){this._value={},this._uninitializedValue=void 0}add(e,t){
this._uninitializedValue&&this._initializeValue(),Ns.debug("add header: ",e,t),e=e.toLowerCase();var r=this._value&&Lo(
this._value,e)?this._value[e]:void 0;void 0===this._value?this._value={[e]:t}:void 0!==r?ne(r)?this._value=d(d({},
this._value),{},{[e]:fi([],r,[t])}):this._value=d(d({},this._value),{},{[e]:[r,t]}):this._value=d(d({},this._value),{},{
[e]:t})}containsKey(e){return this._uninitializedValue&&this._initializeValue(),e=e.toLowerCase(),Lo(this._value,e)}
isEmpty(){this._uninitializedValue&&this._initializeValue();var e=this._value;return!e||0===Z(e).length}keySet(){
this._uninitializedValue&&this._initializeValue();const t=new Set;var e;return void 0!==this._value&&(e=Z(this._value),
fo(e,e=>{t.add(e)})),t}getValue(e){if(this._uninitializedValue&&this._initializeValue(),this._value
)return e=e.toLowerCase(),Lo(this._value,e)?this._value[e]:void 0}getFirst(e){
return this._uninitializedValue&&this._initializeValue(),ne(e=this.getValue(e))?e.length?e[0]:void 0:e}getHost(){
return this._uninitializedValue&&this._initializeValue(),this.getFirst("host")}addAll(e,t){if(
this._uninitializedValue&&this._initializeValue(),H(e)){const r=e;if(!V(t))throw new TypeError(
"Headers.addAll signature must be (string, string[]) or (HeadersObject)");fo(t,e=>{this.add(r,e)})}else{const n=e;fo(Z(n
),t=>{var e=n[t];ne(e)?fo(e,e=>{this.add(t,e)}):void 0!==e&&this.add(t,e)})}}remove(e){
this._uninitializedValue&&this._initializeValue(),e=e.toLowerCase();var t=this.getValue(e);const r=d({},this._value);
return r&&Lo(r,e)&&delete r[e],this._value=r,t}set(e,t){this._uninitializedValue&&this._initializeValue(),
e=e.toLowerCase(),void 0===this._value?this._value={[e]:t}:this._value=d(d({},this._value),{},{[e]:t})}setAll(t){
this._uninitializedValue&&this._initializeValue(),fo(Z(t),e=>{this.set(e,t[e])})}valueOf(){var e;
return this._uninitializedValue&&this._initializeValue(),null!=(e=this._value)?e:void 0}toString(){
this._uninitializedValue&&this._initializeValue();const r=this._value;if(!r||this.isEmpty())return"Headers()";var e=Z(r)
const t=Fn(e,e=>{const t=r[e];return t?V(t)?e+": "+t.map(e=>0<=t.indexOf(";")||0<=t.indexOf(",")?`"${t}"`:t).join(", "
):0<=t.indexOf(";")?`${e}: "${t}"`:e+": "+t:""+e});return`Headers(${t.join("; ")})`}clone(){
return this._uninitializedValue&&this._initializeValue(),new As(this._value?d({},this._value):void 0)}}x={exports:{}},(
m=function(r,n,i){ra.stat(r,function(e,t){i(e,!e&&oe(t,r,n))})}).sync=function(e,t){return oe(ra.statSync(e),e,t)},
ra=Ha.default,(f=function(e,r,n){na.stat(e,function(e,t){n(e,!e&&ae(t,r))})}).sync=function(e,t){return ae(na.statSync(e
),t)},na=Ha.default,ia="win32"===process.platform||ts.TESTING_WINDOWS?m:f,(oa=function e(t,i,r){if(
"function"==typeof i&&(r=i,i={}),!r){if("function"!=typeof Promise)throw new TypeError("callback not provided");
return new Promise(function(r,n){e(t,i||{},function(e,t){e?n(e):r(t)})})}ia(t,i||{},function(e,t){e&&(
"EACCES"===e.code||i&&i.ignoreErrors)&&(e=null,t=!1),r(e,t)})}).sync=function(e,t){try{return ia.sync(e,t||{})}catch(e){
if(t&&t.ignoreErrors||"EACCES"===e.code)return!1;throw e}};
const Ps="win32"===process.platform||"cygwin"===process.env.OSTYPE||"msys"===process.env.OSTYPE,xs=Wa.default,
js=Ps?";":":",Is=oa,Ls=e=>Object.assign(new Error("not found: "+e),{code:"ENOENT"}),Cs=(e,t)=>{var r=t.colon||js,
n=e.match(/\//)||Ps&&e.match(/\\/)?[""]:[...Ps?[process.cwd()]:[],...(t.path||process.env.PATH||"").split(r)];
const i=Ps?t.pathExt||process.env.PATHEXT||".EXE;.CMD;.BAT;.COM":"",o=Ps?i.split(r):[""];return Ps&&-1!==e.indexOf("."
)&&""!==o[0]&&o.unshift(""),{pathEnv:n,pathExt:o,pathExtExe:i}},Gs=((w=(o,s,t)=>{"function"==typeof s&&(t=s,s={}),
s=s||{};const{pathEnv:a,pathExt:u,pathExtExe:c}=Cs(o,s),l=[],d=i=>new Promise((e,t)=>{if(i===a.length
)return s.all&&l.length?e(l):t(Ls(o));const r=a[i];var t=/^".*"$/.test(r)?r.slice(1,-1):r,n=xs.join(t,o),
t=!t&&/^\.[\\\/]/.test(o)?o.slice(0,2)+n:n;e(f(t,i,0))}),f=(i,o,a)=>new Promise((r,e)=>{if(a===u.length)return r(d(o+1))
const n=u[a];Is(i+n,{pathExt:c},(e,t)=>{if(!e&&t){if(!s.all)return r(i+n);l.push(i+n)}return r(f(i,o,a+1))})});
return t?d(0).then(e=>t(null,e),t):d(0)}).sync=(t,r)=>{r=r||{};var n,i,o,a,{pathEnv:s,pathExt:u,pathExtExe:c}=Cs(t,r);
const l=[];for(let e=0;e<s.length;e++){const d=s[e];n=/^".*"$/.test(d)?d.slice(1,-1):d,i=xs.join(n,t),
o=!n&&/^\.[\\\/]/.test(t)?t.slice(0,2)+i:i;for(let e=0;e<u.length;e++){a=o+u[e];try{if(Is.sync(a,{pathExt:c})){if(!r.all
)return a;l.push(a)}}catch(e){}}}if(r.all&&l.length)return l;if(r.nothrow)return null;throw Ls(t)},(L={exports:{}}
).exports=I=(e={})=>{var t=e.env||process.env;return"win32"!==(e.platform||process.platform)?"PATH":Object.keys(t
).reverse().find(e=>"PATH"===e.toUpperCase())||"Path"},L.exports.default=I,Wa.default),Us=w,Fs=L.exports,Ms=(v=function(
e){return se(e)||se(e,!0)},/([()\][%!^"`<>&|;, *?])/g),Ds=((T={}).command=function(e){return e.replace(Ms,"^$1")},
T.argument=function(e,t){return e=(e=`"${e=(e=(e=""+e).replace(/(\\*)"/g,'$1$1\\"')).replace(/(\\*)$/,"$1$1")}"`
).replace(Ms,"^$1"),t?e.replace(Ms,"^$1"):e},/^#!(.*)/),qs=Ha.default,ks=(e="")=>{const t=e.match(Ds);if(!t)return null;
const[r,n]=t[0].replace(/#! ?/,"").split(" ");return"env"===(e=r.split("/").pop())?n:n?e+" "+n:e},Bs=Wa.default,$s=v,
zs=T,Vs="win32"===process.platform,Hs=/\.(?:com|exe)$/i,Ws=/node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i,
Ks="win32"===process.platform,Js=Fa.default,Xs={hookChildProcess:function(r,n){if(Ks){const i=r.emit;r.emit=function(e,t
){return"exit"===e&&(e=ce(t,n))?i.call(r,"error",e):i.apply(r,arguments)}}},verifyENOENT:ce,verifyENOENTSync:function(e,
t){return Ks&&1===e&&!t.file?ue(t.original,"spawnSync"):null},notFoundError:ue},Qs=(x.exports=le,x.exports.spawn=le,
x.exports.sync=function(e,t,r){e=Oe(e,t,r);const n=Js.spawnSync(e.command,e.args,e.options);
return n.error=n.error||Xs.verifyENOENTSync(n.status,e),n},x.exports._parse=Oe,x.exports._enoent=Xs,aa=x.exports,["env"]
),Ys=Object.getOwnPropertyDescriptor(Function.prototype,"toString"),Zs=Object.getOwnPropertyDescriptor(
Function.prototype.toString,"name"),eu=new WeakMap,tu=(t,r={})=>{function n(...e){if(eu.set(n,++o),1===o)i=t.apply(this,
e),t=null;else if(!0===r.throw)throw new Error(`Function \`${a}\` can only be called once`);return i}if(
"function"!=typeof t)throw new TypeError("Expected a function");let i,o=0;const a=t.displayName||t.name||"<anonymous>";
var e,s,u,c,l,d,f,[p,h,{ignoreNonConfigurable:g=!1}={}]=[n,t],m=p.name;for(const v of Reflect.ownKeys(h))e=p,l=h,s=v,u=g
,"length"!==s&&"prototype"!==s&&"arguments"!==s&&"caller"!==s&&(c=Object.getOwnPropertyDescriptor(e,s),
l=Object.getOwnPropertyDescriptor(l,s),void 0!==c&&!c.configurable&&(
c.writable!==l.writable||c.enumerable!==l.enumerable||c.configurable!==l.configurable||!c.writable&&c.value!==l.value
)&&u||Object.defineProperty(e,s,l));return d=p,(f=Object.getPrototypeOf(h))!==Object.getPrototypeOf(d
)&&Object.setPrototypeOf(d,f),d=p,f=h,m=""===m?"":`with ${m.trim()}() `,m=((e,t)=>`/* Wrapped ${e}*/
`+t).bind(null,m,f.toString()),Object.defineProperty(m,"name",Zs),Object.defineProperty(d,"toString",b(b({},Ys),{},{
value:m})),eu.set(n,o),n},ru=(tu.callCount=e=>{if(eu.has(e))return eu.get(e);throw new Error(
`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`)},34),nu=[{name:"SIGHUP",number:1,
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
description:"Invalid system call",standard:"other"}],iu=function(){const e=ye();return e.reduce(_e,{})}();{const Fu=ye()
Ta=Array.from({length:65},(e,t)=>{var r,n=Fu,i=(r=t,void 0!==(i=n.find(({name:e})=>za.constants.signals[e]===r)
)?i:n.find(e=>e.number===r));if(void 0===i)return{};var{name:n,description:i,supported:o,action:a,forced:s,standard:u}=i
return{[t]:{name:n,number:t,description:i,supported:o,action:a,forced:s,standard:u}}}),Object.assign({},...Ta)}
const ou=({stdout:e,stderr:t,all:r,error:n,signal:i,exitCode:o,command:a,escapedCommand:s,timedOut:u,isCanceled:c,
killed:l,parsed:{options:{timeout:d}}})=>{var f,p,h,g,m,v,b;o=null===o?void 0:o,f=void 0===(i=null===i?void 0:i
)?void 0:iu[i].description,d=`Command ${{timedOut:d,timeout:p,errorCode:h,signal:g,signalDescription:m,exitCode:v,
isCanceled:b}={timedOut:u,timeout:d,errorCode:n&&n.code,signal:i,signalDescription:f,exitCode:o,isCanceled:c},
d?`timed out after ${p} milliseconds`:b?"was canceled":void 0!==h?"failed with "+h:void 0!==g?`was killed with ${g} (${m})`:void 0!==v?"failed with exit code "+v:"failed"}: `+a
const y=(p="[object Error]"===Object.prototype.toString.call(n))?d+`
`+n.message:d;return b=[y,t,e].filter(Boolean).join("\n"),p?(n.originalMessage=n.message,n.message=b):n=new Error(b),
n.shortMessage=y,n.command=a,n.escapedCommand=s,n.exitCode=o,n.signal=i,n.signalDescription=f,n.stdout=e,n.stderr=t,
void 0!==r&&(n.all=r),"bufferedData"in n&&delete n.bufferedData,n.failed=!0,n.timedOut=Boolean(u),n.isCanceled=c,
n.killed=l&&!u,n},au=["stdin","stdout","stderr"],su=t=>{var r,e;if(t){const n=t.stdio;if(void 0===n)return au.map(
e=>t[e]);if(r=t,au.some(e=>void 0!==r[e]))throw new Error(
"It's not possible to provide `stdio` in combination with one of "+au.map(e=>`\`${e}\``).join(", "));if(
"string"==typeof n)return n;if(Array.isArray(n))return e=Math.max(n.length,au.length),Array.from({length:e},(e,t)=>n[t])
throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof n}\``)}},uu=(j={exports:{}
},(S=p={exports:{}}).exports=["SIGABRT","SIGALRM","SIGHUP","SIGINT","SIGTERM"],
"win32"!==process.platform&&S.exports.push("SIGVTALRM","SIGXCPU","SIGXFSZ","SIGUSR2","SIGTRAP","SIGSYS","SIGQUIT",
"SIGIOT"),"linux"===process.platform&&S.exports.push("SIGIO","SIGPOLL","SIGPWR","SIGSTKFLT","SIGUNUSED"),Ee(h=ts.process
)?(sa=Ma.default,ua=p.exports,ca=/^win/i.test(h.platform),"function"!=typeof(P=qa.default)&&(P=P.EventEmitter),
h.__signal_exit_emitter__?g=h.__signal_exit_emitter__:((g=h.__signal_exit_emitter__=new P).count=0,g.emitted={}),
g.infinite||(g.setMaxListeners(1/0),g.infinite=!0),j.exports=function(e,t){var r;return Ee(ts.process)?(sa.equal(
typeof e,"function","a callback must be provided for exit handler"),!1===pa&&ha(),r="exit",t&&t.alwaysLast&&(
r="afterexit"),t=function(){g.removeListener(r,e),0===g.listeners("exit").length&&0===g.listeners("afterexit"
).length&&la()},g.on(r,e),t):function(){}},la=function(){pa&&Ee(ts.process)&&(pa=!1,ua.forEach(function(e){try{
h.removeListener(e,fa[e])}catch(e){}}),h.emit=va,h.reallyExit=ga,--g.count)},j.exports.unload=la,da=function(e,t,r){
g.emitted[e]||(g.emitted[e]=!0,g.emit(e,t,r))},fa={},ua.forEach(function(e){fa[e]=function(){Ee(ts.process
)&&h.listeners(e).length===g.count&&(la(),da("exit",null,e),da("afterexit",null,e),ca&&"SIGHUP"===e&&(e="SIGINT"),
h.kill(h.pid,e))}}),j.exports.signals=function(){return ua},pa=!1,ha=function(){!pa&&Ee(ts.process)&&(pa=!0,g.count+=1,
ua=ua.filter(function(e){try{return h.on(e,fa[e]),!0}catch(e){return!1}}),h.emit=ba,h.reallyExit=ma)},j.exports.load=ha,
ga=h.reallyExit,ma=function(e){Ee(ts.process)&&(h.exitCode=e||0,da("exit",h.exitCode,null),da("afterexit",h.exitCode,
null),ga.call(h,h.exitCode))},va=h.emit,ba=function(e,t){return"exit"===e&&Ee(ts.process)?(void 0!==t&&(h.exitCode=t),
e=va.apply(this,arguments),da("exit",h.exitCode,null),da("afterexit",h.exitCode,null),e):va.apply(this,arguments)}
):j.exports=function(){return function(){}},ya=j.exports,(e,t,r,n)=>{var i;if([t,n,i]=[t,r.forceKillAfterTimeout,n],(
t===es.default.constants.signals.SIGTERM||"string"==typeof t&&"SIGTERM"===t.toUpperCase())&&!1!==n&&i){t=(({
forceKillAfterTimeout:e=!0})=>{if(!0===e)return 5e3;if(!Number.isFinite(e)||e<0)throw new TypeError(
`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);return e})(r);
const o=setTimeout(()=>{e("SIGKILL")},t);o.unref&&o.unref()}}),cu=(e,t,r)=>{e.kill(t),r(Object.assign(new Error(
"Timed out"),{timedOut:!0,signal:t}))},lu=(_={exports:{}},Ba.default.PassThrough),du=ka.default.constants,fu=(
R=Ba.default,$a.default.promisify),pu=fu(R.pipeline);class hu extends Error{constructor(){super("maxBuffer exceeded"),
this.name="MaxBufferError"}}_.exports=fe,_.exports.buffer=(e,t)=>fe(e,b(b({},t),{},{encoding:"buffer"})),
_.exports.array=(e,t)=>fe(e,b(b({},t),{},{array:!0})),_.exports.MaxBufferError=hu,_a=_.exports;
const gu=Ba.default.PassThrough,mu=(Ea=function(){function t(e){return Array.isArray(e)?e.forEach(t):(n.push(e),e.once(
"end",r.bind(null,e)),e.once("error",i.emit.bind(i,"error")),e.pipe(i,{end:!1})),this}function r(t){!(n=n.filter(
function(e){return e!==t})).length&&i.readable&&i.end()}var n=[],i=new gu({objectMode:!0});return i.setMaxListeners(0),
i.add=t,i.isEmpty=function(){return 0==n.length},i.on("unpipe",r),Array.prototype.slice.call(arguments).forEach(t),i},
async(e,t)=>{if(e){e.destroy();try{return await t}catch(e){return e.bufferedData}}}),vu=(e,{encoding:t,buffer:r,
maxBuffer:n})=>{if(e&&r)return t?_a(e,{encoding:t,maxBuffer:n}):_a.buffer(e,{maxBuffer:n})},bu=(async()=>{})(
).constructor.prototype,yu=["then","catch","finally"].map(e=>[e,Reflect.getOwnPropertyDescriptor(bu,e)]),_u=(e,t)=>{for(
const[n,i]of yu){var r="function"==typeof t?(...e)=>Reflect.apply(i.value,t(),e):i.value.bind(t);Reflect.defineProperty(
e,n,b(b({},i),{},{value:r}))}return e},Eu=(e,t=[])=>Array.isArray(t)?[e,...t]:[e],Ou=/^[\w.-]+$/,wu=/"/g,
Ru=e=>"string"!=typeof e||Ou.test(e)?e:`"${e.replace(wu,'\\"')}"`,Tu=1e8,Su=({env:r,extendEnv:n,preferLocal:i,
localDir:o,execPath:a})=>{if(n=n?b(b({},Ya.default.env),r):r,i){let{env:e=Ya.default.env}=r={env:n,cwd:o,execPath:a},
t=function(e,t){var r,n,i,o;if(null==e)return{};if(r=function(e,t){var r,n,i,o;if(null==e)return{};for(r={},
n=Object.keys(e),o=0;o<n.length;o++)i=n[o],0<=t.indexOf(i)||(r[i]=e[i]);return r}(e,t),Object.getOwnPropertySymbols)for(
o=Object.getOwnPropertySymbols(e),i=0;i<o.length;i++)n=o[i],0<=t.indexOf(n)||Object.prototype.propertyIsEnumerable.call(
e,n)&&(r[n]=e[n]);return r}(r,Qs);return i=de({env:e=b({},e)}),t.path=e[i],e[i]=function(e={}){const{
cwd:t=Ya.default.cwd(),path:r=Ya.default.env[de()],execPath:n=Ya.default.execPath}=e;let i,o=(
e=t instanceof URL?Za.default.fileURLToPath(t):t,Xa.default.resolve(e));const a=[];for(;i!==o;)a.push(Xa.default.join(o,
"node_modules/.bin")),i=o,o=Xa.default.resolve(o,"..");return a.push(Xa.default.resolve(e,n,"..")),[...a,r].join(
Xa.default.delimiter)}(t),e}return n},Nu=(e,t,r)=>{return"string"==typeof t||Da.Buffer.isBuffer(t)?e.stripFinalNewline?(
n="string"==typeof(e=t)?"\n":"\n".charCodeAt(),i="string"==typeof e?"\r":"\r".charCodeAt(),(e=e[e.length-1]===n?e.slice(
0,-1):e)[e.length-1]===i?e.slice(0,-1):e):t:void 0===r?void 0:"";var n,i},Au=C.createLogger("doExec"),Pu=C.createLogger(
"git-pull"),xu=C.createLogger("git-submodule-update"),ju=C.createLogger("git-submodule-add"),Iu=C.createLogger(
"get-branch"),Lu="fi.hg.github.org",Cu=C.createLogger("git-url"),Gu=C.createLogger("git-config"),G=C.createLogger(
"update"),Uu=(hs.initEnvFromDefaultFiles(),C.setLogLevel(E),C.createLogger("main"));!async function(e=[]){try{
As.setLogLevel(u.INFO),Ss.setLogLevel(u.INFO),Uu.debug("Loglevel as "+C.getLogLevelString());const{scriptName:r,
parseStatus:n,exitStatus:i,errorString:o,freeArgs:a}=class{static parseArguments(e,t=[]){var r,n,i,o=null!=(r=t.shift()
)?r:"",a=null!=(r=t.shift())?r:"";if(!a)return{parseStatus:ta.ERROR,exitStatus:l.ARGUMENT_PARSE_ERROR,nodePath:o,
scriptName:e,freeArgs:[],extraArgs:[]};if(0===t.length)return{parseStatus:ta.ERROR,exitStatus:l.ARGUMENT_PARSE_ERROR,
nodePath:o,scriptName:a,freeArgs:[],extraArgs:[]};let s=!0,u=[],c=[];do{if(i=null!=(n=t.shift())?n:"",s)switch(function(
){switch(i){case"-h":case"--help":case 0:return 0;case"-v":case"--version":case 1:return 1;case"--":case 2:return 2}}()
){case 0:return{parseStatus:ta.HELP,exitStatus:l.OK,nodePath:o,scriptName:a,freeArgs:u,extraArgs:c};case 1:return{
parseStatus:ta.VERSION,exitStatus:l.OK,nodePath:o,scriptName:a,freeArgs:u,extraArgs:c};case 2:s=!1;break;default:if(s){
if(Jo(i,"-"))return{errorString:"Unknown argument: "+i,parseStatus:ta.ERROR,exitStatus:l.UNKNOWN_ARGUMENT,nodePath:o,
scriptName:a,freeArgs:u,extraArgs:c};u.push(i)}else c.push(i)}}while(1<=t.length);return{parseStatus:ta.OK,
exitStatus:l.OK,nodePath:o,scriptName:a,freeArgs:u,extraArgs:c}}}.parseArguments(us,e);if(n===ta.HELP||n===ta.VERSION
)return console.log(`USAGE: ${r} [OPT(s)] ACTION [ARG(s)]

Manage and install git submodules.

  hgm update [ --path=TARGET-PATH ] [NAME]
  hgm remove [ --path=TARGET-PATH ] NAME
  
...where NAME is one of:

  git@github.com:ORG/NAME[@BRANCH]
  [@]ORG/NAME[@BRANCH]
  NAME[@BRANCH]
    
...where NAME may be:

   fi.hg.FOO which will default to Heusala Group's github org as "heusalagroup/fi.hg.FOO"
    
   Note! Currently these organization mappings are hard coded, but we'll implement a way to
   register your own. Owning a prefix is possible by owning a domain like our "hg.fi".
    
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
`),i;if(o)return console.error("ERROR: "+o),i;hs.setupDestroyHandler(()=>{Uu.debug(
"Stopping command from process utils event")},e=>{Uu.error("Error while shutting down the service: ",e)});
const s=a.shift();switch(s.toLowerCase()){case"u":case"i":case"update":case"install":return await async function(e){
const t=e.shift();if(!t)return ve(process.cwd());var e=e.shift(),r=t.substring(1).includes("@")?t.substring(1).split("@"
).pop():void 0;return async function(e,t,r){G.debug("updateSubModule: ",e,t,r);var n,i,o=ge(),{gitUrl:e,packageName:a
}=await async function(e){if(Cu.debug("getGitUrl: sourceUrl = ",e),e.includes(":"))return Cu.debug(
"getGitUrl: direct url: ",e),{gitUrl:e,packageName:e.replace(/\.git$/,"").split(":").slice(1).join(":").split("/"
).slice(1).join("/")};if((e=e.startsWith("@")?e.substring(1):e).includes("/")){const r=cs+`:${e}.git`;return Cu.debug(
"getGitUrl: github with org: ",r),{gitUrl:r,packageName:e.split("/").slice(1).join("/")}}var t=await async function(t){
var r,n=t,i=`https://${function(){const[e,t]=n.toLowerCase().split(".").slice(0,2);return t&&e?[t,e].join("."):e}(
)}/.well-known/fi.hg.m.json`,i=(Cu.debug("getGitOrganization: wellKnownUrl = ",i),await Ss.getJson(i));if(Cu.debug(
"getGitOrganization: data = ",i),i&&Q(i)){let e=i&&Lo(i,t)?i[t]:void 0;return Cu.debug(
"getGitOrganization: packageMetadata = ",e),e&&Q(e)&&Lo(e,Lu)&&(r=e[Lu],Cu.debug(
"getGitOrganization: package: githubOrgName = ",r),H(r))?r:(r=t.toLowerCase().split(".").slice(0,2).join("."),e=i&&Lo(i,
r)?i[r]:void 0,Cu.debug("getGitOrganization: packageMetadata = ",e),e&&Q(e)&&Lo(e,Lu)&&(t=e[Lu],Cu.debug(
"getGitOrganization: scope: githubOrgName = ",t),H(t))?t:Lo(i,Lu)&&(r=i[Lu],Cu.debug(
"getGitOrganization: root: githubOrgName = ",r),H(r))?r:void 0)}}(e);if(!t)throw new TypeError(
"No Github organization configured for: "+e);const r=cs+`:${t}/${e}.git`;return Cu.debug(
`getGitUrl: github with org "${t}": `,r),{gitUrl:r,packageName:e}}(e);if(!e)throw new TypeError(
`Could not detect git url for: "${e}"`);G.debug("updateSubModule: gitUrl = ",e),G.debug(
"updateSubModule: packageName = ",a),t=t||Ua.resolve(Ua.resolve(o,"src"),a.split(".").join("/")),o=Ua.relative(
process.cwd(),t),G.debug("relativeTargetPath = ",o);let s;try{s=await Ga.promises.stat(t),G.debug("stats: ",s)}catch(e){
"ENOENT"!==(null==e?void 0:e.code)&&G.error("File stat error: ",t,e),s=void 0}if(i=null!=(i=null==(i=s)?void 0:i.isFile(
))&&i,G.debug("isFile: ",i),n=null!=(n=null==(n=s)?void 0:n.isDirectory())&&n,G.debug("isDirectory: ",n),n)G.debug(
"Target directory already exists, we'll only update: ",t),await he(o);else{if(void 0!==s&&void 0!==i)return G.error(
"Target file not a directory: ",t),l.CONFLICT;n=e,i=o,ju.debug("addGitSubModule: ",n,i),await pe([ds,"submodule","add",n
,i]),await l.OK,G.debug("Initialized: ",e,o)}return n=null!=r?r:"main",G.debug("nextBranch: ",n),i=o,Iu.debug(
"getGitBranch: ",i),r=(await pe([ds,"rev-parse","--abbrev-ref","HEAD"],{cwd:i,stdio:"pipe"})).stdout,Iu.debug("stdout: "
,r),i=await r,G.debug("currentBranch: ",i),i!==n?(r=o,i=n,Gu.debug("setGitSubModuleBranch: ",r,i),await me(r,"branch",i)
):G.debug("Branch already identical: ",n),r=o,i=e,Gu.debug("setGitSubModuleUrl: ",r,i),await me(r,"url",i),r=e=o,
Gu.debug("setGitSubModuleUrl: ",e,r),await me(e,"path",r),await ve(t),console.info(a+`@${n}:`+o),l.OK}(t,e,r)}(a);
case"r":case"remove":return a,await l.UNIMPLEMENTED_FEATURE;case"l":case"list":return a,t=await async function(o){
Gu.debug("getGitSubModuleList: ",o);const e=await async function(e){Gu.debug("getGitSubModuleConfigByKey: ",e,"path");
const t=[ds,"config","-f",ls,"--get-regexp","path"];var{stdout:e,stderr:r,exitCode:n}=await pe(t,{cwd:e,stdio:"pipe"});
if(Gu.debug("getGitSubModuleConfigByKey: stdout: ",e),0!==n)throw new Error(`Internal command ('${t.join(" "
)}' with exit status ${n}) had errors: `+r);if(H(e))return e;throw new TypeError(`Internal command ('${t.join(" "
)}' with exit status ${n}) output was not a string: `+e)}(o),a=Ua.resolve(o,"src");return xi(e.split("\n"),(e,t)=>{var r
,[t,n]=t.split(" ");const i=Ua.resolve(o,n);return r=Jo(i,a+"/")?i.substring(a.length+1).split("/").join("."):"",e.push(
{key:t,path:n,name:r}),e},[])}(ge()),fo(t,e=>{console.info(e.name+`	`+e.path)}),await l.OK}return l.UNKNOWN_ARGUMENT
}catch(e){return Uu.error("Fatal error: ",e),l.FATAL_ERROR}var t}(process.argv).then(e=>{process.exit(e)}).catch(e=>{
console.error("Error: ",e),process.exit(1)});
