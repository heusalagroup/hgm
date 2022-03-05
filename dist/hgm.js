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
)t=e[r],this.set(t[0],t[1])}function k(e){e=this.__data__=new lt(e),this.size=e.size}function B(e){var t=-1,
r=null==e?0:e.length;for(this.__data__=new dt;++t<r;)this.add(e[t])}function $(n,o){function i(){var e=arguments,
t=o?o.apply(this,e):e[0],r=i.cache;return r.has(t)?r.get(t):(e=n.apply(this,e),i.cache=r.set(t,e)||r,e)}if(
"function"!=typeof n||null!=o&&"function"!=typeof o)throw new TypeError("Expected a function");return i.cache=new(
$.Cache||Mr),i}function V(e){return void 0===e}function z(e){return a(e)}function H(e){return Ii(e)}function W(e){
return Ui(e)}function J(e,t){return Zn(e,t)}function K(e,t=H,r=void 0){return!!(void 0===r||Le(n=e)&&J(Vi(n),r))&&(
n=void 0!==t?t:H,Le(r=e)&&J(Z(r),n));var n}function X(...e){return t=>Hn(e,e=>e(t))}function Q(e){return Le(e)}
function Y(e){if(void 0!==e&&""!==e)return""+e}function Z(e,t=H){var r;return z(e)?(r=Un(e,(e,t)=>t),Yo(r,e=>t(e))):Q(e
)?(r=Reflect.ownKeys(e),Yo(r,e=>t(e))):[]}function ee(e){if(!e.startsWith("%{")||!e.endsWith("}"))return Y(e)}
function te(e){if(W(e))switch(e){case Wi.OPTIONS:return"options";case Wi.GET:return"get";case Wi.POST:return"post";
case Wi.PUT:return"put";case Wi.DELETE:return"delete";case Wi.PATCH:return"patch"}throw new TypeError(
"Unsupported value for stringifyRequestMethod(): "+e)}function re(e){return H(t=e)||W(t)||Ni(t)||Ai(t)||ne(e)||(e=t=e,
!!Le(e)&&!(e instanceof Date)&&!Ge(e)&&!z(e)&&K(e,H,void 0)&&K(t,H,X(re,V)));var t}function ne(e){var t,[e,r=void 0,
n=void 0,o=void 0]=[e,X(re,V)];return!!a(e)&&(t=null!=(t=null==e?void 0:e.length)?t:0,!(void 0!==n&&t<n)&&!(
void 0!==o&&o<t)&&(void 0===r||J(e,r)))}function oe(t,e){var r,n=Object.keys(t);return Object.getOwnPropertySymbols&&(
r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),
n.push.apply(n,r)),n}function y(n){for(var o,e=1;e<arguments.length;e++)o=null!=arguments[e]?arguments[e]:{},e%2?oe(
Object(o),!0).forEach(function(e){var t=n,r=o[e];e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,
configurable:!0,writable:!0}):t[e]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,
Object.getOwnPropertyDescriptors(o)):oe(Object(o)).forEach(function(e){Object.defineProperty(n,e,
Object.getOwnPropertyDescriptor(o,e))});return n}function ie(e,t,r){if(e.isSymbolicLink()||e.isFile()){var n,o,i=t,
a=void 0!==r.pathExt?r.pathExt:process.env.PATHEXT;if(!a)return!0;if(-1!==(a=a.split(";")).indexOf(""))return!0;for(
n=0;n<a.length;n++)if((o=a[n].toLowerCase())&&i.substr(-o.length).toLowerCase()===o)return!0;return!1}return!1}
function ae(e,t){return e.isFile()&&(r=e.mode,n=e.uid,e=e.gid,o=void 0!==t.uid?t.uid:process.getuid&&process.getuid(),
t=void 0!==t.gid?t.gid:process.getgid&&process.getgid(),i=parseInt("100",8),a=parseInt("010",8),r&parseInt("001",8
)||r&a&&e===t||r&i&&n===o||r&(i|a)&&0===o);var r,n,o,i,a}function se(e,t){var r=e.options.env||process.env,
n=process.cwd(),o=null!=e.options.cwd,i=o&&void 0!==process.chdir&&!process.chdir.disabled;if(i)try{process.chdir(
e.options.cwd)}catch(e){}let a;try{a=Ps.sync(e.command,{path:r[xs({env:r})],pathExt:t?As.delimiter:void 0})}catch(e
){}finally{i&&process.chdir(n)}return a=a&&As.resolve(o?e.options.cwd:"",a)}function ue(e,t){return Object.assign(
new Error(`${t} ${e.command} ENOENT`),{code:"ENOENT",errno:"ENOENT",syscall:t+" "+e.command,path:e.command,
spawnargs:e.args})}function ce(e,t){return ks&&1===e&&!t.file?ue(t.original,"spawn"):null}function le(e,t,r){
return e=_e(e,t,r),t=Bs.spawn(e.command,e.args,e.options),$s.hookChildProcess(t,e),t}function de(e={}){var{
env:e=process.env,platform:t=process.platform}=e;return"win32"!==t?"PATH":Object.keys(e).reverse().find(
e=>"PATH"===e.toUpperCase())||"Path"}async function fe(n,u){if(!n)throw new Error("Expected a stream");const o=(u=y({
maxBuffer:1/0},u)).maxBuffer,i=(e=>{const t=(e=y({},u)).array;let r=e.encoding;const n="buffer"===r;let o=!1;t?o=!(r||n
):r=r||"utf8",n&&(r=null);const i=new nu({objectMode:o});r&&i.setEncoding(r);let a=0;const s=[];return i.on("data",e=>{
s.push(e),o?a=s.length:a+=e.length}),i.getBufferedValue=()=>t?s:n?Buffer.concat(s,a):s.join(""),i.getBufferedLength=(
)=>a,i})();return await new Promise((e,t)=>{const r=e=>{e&&i.getBufferedLength()<=ou.MAX_LENGTH&&(
e.bufferedData=i.getBufferedValue()),t(e)};(async()=>{try{await au(n,i),e()}catch(e){r(e)}})(),i.on("data",()=>{
i.getBufferedLength()>o&&r(new su)})}),i.getBufferedValue()}async function pe(e,t){var r=e.shift(),p=d({stdio:"inherit"}
,null!=t?t:{}),{stdout:t,stderr:r}=(Eu.debug("Executing: ",r,e),await function(t,e){var n,r,o,i,a;[r,o,i={}]=[t,e,p],r=(
a=Zi._parse(r,o,i)).command,o=a.args,i=a.options,(i=y({maxBuffer:yu,buffer:!0,stripFinalNewline:!0,extendEnv:!0,
preferLocal:!1,localDir:i.cwd||za.default.cwd(),execPath:za.default.execPath,encoding:"utf8",reject:!0,cleanup:!0,
all:!1,windowsHide:!0},i)).env=bu(i),i.stdio=eu(i),"win32"===za.default.platform&&"cmd"===$a.default.basename(r,".exe"
)&&o.unshift("/q");const s={file:r,args:o,options:i,parsed:a},u=(r=t,o=e,hu(r,o).join(" ")),c=(i=t,a=e,hu(i,a).map(
e=>vu(e)).join(" "));if(void 0!==(r=s.options.timeout)&&(!Number.isFinite(r)||r<0))throw new TypeError(
`Expected the \`timeout\` option to be a non-negative integer, got \`${r}\` (${typeof r})`);let l;try{
l=Va.default.spawn(s.file,s.args,s.options)}catch(e){return o=new Va.default.ChildProcess,t=Promise.reject(Ys({error:e,
stdout:"",stderr:"",all:"",command:u,escapedCommand:c,parsed:s,timedOut:!1,isCanceled:!1,killed:!1})),pu(o,t)}n=l,
e=new Promise((r,t)=>{n.on("exit",(e,t)=>{r({exitCode:e,signal:t})}),n.on("error",e=>{t(e)}),n.stdin&&n.stdin.on("error"
,e=>{t(e)})}),i=((r,{timeout:n,killSignal:o="SIGTERM"},e)=>{if(0===n||void 0===n)return e;let i;var t=new Promise((e,t
)=>{i=setTimeout(()=>{ru(r,o,t)},n)}),e=e.finally(()=>{clearTimeout(i)});return Promise.race([t,e])})(l,s.options,e);
const d=(async(e,{cleanup:t,detached:r},n)=>{if(!t||r)return n;const o=fa(()=>{e.kill()});return n.finally(()=>{o()})})(
l,s.options,i),f={isCanceled:!1};return l.kill=((e,t="SIGTERM",r={})=>{var n=e(t);return tu(e,t,r,n),n}).bind(null,
l.kill.bind(l)),l.cancel=((e,t)=>{e.kill()&&(t.isCanceled=!0)}).bind(null,l,f),a=Js(async()=>{var[{error:e,exitCode:t,
signal:r,timedOut:n},o,i,a]=await(async({stdout:t,stderr:r,all:n},{encoding:o,buffer:e,maxBuffer:i},a)=>{var s=lu(t,{
encoding:o,buffer:e,maxBuffer:i}),u=lu(r,{encoding:o,buffer:e,maxBuffer:i}),o=lu(n,{encoding:o,buffer:e,maxBuffer:2*i});
try{return await Promise.all([a,s,u,o])}catch(e){return Promise.all([{error:e,signal:e.signal,timedOut:e.timedOut},cu(t,
s),cu(r,u),cu(n,o)])}})(l,s.options,d),o=_u(s.options,o),i=_u(s.options,i),a=_u(s.options,a);if(e||0!==t||null!==r){if(
e=Ys({error:e,exitCode:t,signal:r,stdout:o,stderr:i,all:a,command:u,escapedCommand:c,parsed:s,timedOut:n,
isCanceled:f.isCanceled||!!s.options.signal&&s.options.signal.aborted,killed:l.killed}),s.options.reject)throw e;
return e}return{command:u,escapedCommand:c,exitCode:0,stdout:o,stderr:i,all:a,failed:!1,timedOut:!1,isCanceled:!1,
killed:!1}}),r=l,void 0!==(o=s.options.input)&&void 0!==r.stdin&&(
null!==o&&"object"==typeof o&&"function"==typeof o.pipe?o.pipe(r.stdin):r.stdin.end(o)),l.all=((e,{all:t})=>{if(t&&(
e.stdout||e.stderr)){const r=ha();return e.stdout&&r.add(e.stdout),e.stderr&&r.add(e.stderr),r}})(l,s.options),pu(l,a)}(
r,e));return{stdout:t,stderr:r}}async function he(e){return U.debug("initAllSubmodules"),await ge(e),U.debug(
"gitSubmoduleUpdate"),await pe([ss,"submodule","update","--init","--recursive"],{cwd:e}),await zi.OK,zi.OK}
async function ge(e){U.debug("gitPullWithRecurseSubmodules",e);var{stdout:t,stderr:r}=await pe([ss,"pull",
"--recurse-submodules"],{cwd:e,stdio:"pipe"});return r?U.error(e+": 'git pull --recurse-submodules' with errors: "+r
):"Already up to date."!==t&&U.debug(e+": 'git pull --recurse-submodules' with output: "+t),zi.OK}function me(e,t){
return{name:"SIGRT"+(t+1),number:Ks+t,action:"terminate",description:"Application-specific signal (realtime)",
standard:"posix"}}function ve(){var e=65-Ks,e=Array.from({length:e},me);return[...Xs,...e].map(Ee)}function ye(e,{
name:t,number:r,description:n,supported:o,action:i,forced:a,standard:s}){return y(y({},e),{},{[t]:{name:t,number:r,
description:n,supported:o,action:i,forced:a,standard:s}})}function be(e){
return e&&"object"==typeof e&&"function"==typeof e.removeListener&&"function"==typeof e.emit&&"function"==typeof e.reallyExit&&"function"==typeof e.listeners&&"function"==typeof e.kill&&"number"==typeof e.pid&&"function"==typeof e.on
}function _e(e,t,r){if(t&&!Array.isArray(t)&&(r=t,t=null),e={command:e,args:t=t?t.slice(0):[],options:r=Object.assign({}
,r),file:void 0,original:{command:e,args:t}},r.shell)return e;if(t=e,!Ms)return t;if((r=t).file=Gs(r),e=(
e=r.file&&function(e){var t;const r=Buffer.alloc(150);try{t=Ls.openSync(e,"r"),Ls.readSync(t,r,0,150,0),Ls.closeSync(t)
}catch(e){}return Cs(r.toString())}(r.file))?(r.args.unshift(r.file),r.command=e,Gs(r)):r.file,r=!Ds.test(e),
t.options.forceShell||r){const n=qs.test(e);t.command=Us.normalize(t.command),t.command=Fs.command(t.command),
t.args=t.args.map(e=>Fs.argument(e,n)),r=[t.command].concat(t.args).join(" "),t.args=["/d","/s","/c",`"${r}"`],
t.command=process.env.comspec||"cmd.exe",t.options.windowsVerbatimArguments=!0}return t}function Ee({name:e,number:t,
description:r,action:n,forced:o=!1,standard:i}){var{signals:{[e]:a}}=Fa.constants,s=void 0!==a;return{name:e,
number:s?a:t,description:r,supported:s,action:n,forced:o,standard:i}}function Oe(e,t){for(var r=-1,n=null==e?0:e.length,
o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}function we(e,t){return e===t||e!=e&&t!=t}function Re(e,t){for(
var r=e.length;r--;)if(Ka(e[r][0],t))return r;return-1}var Te,Se,Ne,Ae,Pe,xe,je,Ie,Le,Ce,Ue,Ge,Fe,Me,De,qe,ke,Be,$e,Ve,
ze,He,We,Je,Ke,Xe,Qe,Ye,Ze,et,tt,rt,nt,ot,it,at,st,ut,ct,lt,dt,ft,pt,ht,gt,mt,vt,yt,bt,_t,a,Et,Ot,wt,Rt,Tt,St,Nt,At,Pt,
xt,jt,It,Lt,Ct,t,Ut,Gt,Ft,Mt,Dt,qt,kt,Bt,$t,Vt,zt,Ht,Wt,Jt,Kt,Xt,Qt,Yt,Zt,er,tr,rr,nr,or,ir,ar,sr,ur,cr,lr,dr,fr,pr,hr,
gr,mr,vr,yr,br,_r,Er,Or,wr,Rr,Tr,Sr,Nr,Ar,Pr,xr,jr,Ir,Lr,Cr,Ur,Gr,Fr,Mr,Dr,qr,kr,Br,$r,Vr,zr,Hr,Wr,Jr,Kr,Xr,Qr,Yr,Zr,en,
tn,rn,nn,on,an,sn,un,cn,ln,dn,fn,pn,hn,gn,r,mn,vn,yn,bn,_n,En,On,wn,Rn,Tn,Sn,Nn,An,Pn,xn,jn,In,Ln,Cn,Un,Gn,Fn,Mn,Dn,qn,
kn,Bn,$n,Vn,zn,Hn,Wn,Jn,Kn,Xn,Qn,Yn,Zn,eo,to,ro,no,oo,io,ao,so,uo,co,lo,fo,po,ho,go,mo,vo,yo,bo,_o,Eo,Oo,wo,Ro,To,So,No,
Ao,Po,xo,jo,Io,Lo,Co,Uo,Go,Fo,Mo,Do,qo,ko,Bo,$o,Vo,zo,Ho,Wo,Jo,Ko,Xo,Qo,Yo,Zo,ei,ti,ri,ni,oi,ii,ai,n,o,s,si,ui,ci,li,di,
fi,pi,hi,gi,mi,vi,yi,bi,_i,Ei,Oi,wi,Ri,Ti,Si,Ni,Ai,Pi,xi,ji,Ii,Li,Ci,Ui,Gi,Fi,Mi,Di,qi,ki,Bi,$i,Vi,u,c,zi,Hi,Wi,l,Ji,Ki,
f,Xi,Qi,Yi,p,Zi,h,g,ea,ta,ra,m,na,oa,ia,aa,sa,ua,ca,la,da,fa,pa,ha,v,b,ga,ma,_,va,E,O,ya,ba,w,R,T,S,_a,Ea,Oa,N,wa,Ra,Ta,
Sa,Na,Aa,Pa=require("fs"),xa=require("path"),ja=require("querystring"),Ia=require("url"),La=require("node:buffer"),
Ca=require("node:path"),Ua=require("node:child_process"),Ga=require("node:process"),A=require("child_process"),
P=require("node:url"),Fa=require("os"),x=require("node:os"),Ma=require("assert"),j=require("events"),I=require("buffer")
,L=require("stream"),C=require("util"),Da=e(Pa),qa=e(xa),ka=F(ja),Ba=e(Ia),$a=e(Ca),Va=e(Ua),za=e(Ga),xa=e(A),Ha=e(P),
Wa=e(x),ja=e(Ma),Ia=e(j),Ca=e(I),Ua=e(L),Ga=e(C),
Ja="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
,Ka=we,Xa=Re,Qa=Array.prototype.splice,Ya=Re,Za=Re,es=Re;M.prototype.clear=function(){this.__data__=[],this.size=0},
M.prototype.delete=function(e){var t=this.__data__;return!((e=Xa(t,e))<0||(e==t.length-1?t.pop():Qa.call(t,e,1),
--this.size,0))},M.prototype.get=function(e){var t=this.__data__;return(e=Ya(t,e))<0?void 0:t[e][1]},
M.prototype.has=function(e){return-1<Za(this.__data__,e)},M.prototype.set=function(e,t){var r=this.__data__,n=es(r,e);
return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},Te=A=M,P=function(){this.__data__=new Te,this.size=0},x=function(
e){var t=this.__data__,e=t.delete(e);return this.size=t.size,e},Ma=function(e){return this.__data__.get(e)},j=function(e
){return this.__data__.has(e)},I="object"==typeof Ja&&Ja&&Ja.Object===Object&&Ja,
L="object"==typeof self&&self&&self.Object===Object&&self,L=(C=I||L||Function("return this")()).Symbol,
p=Object.prototype,Se=p.hasOwnProperty,Ne=p.toString,Ae=L?L.toStringTag:void 0,p=Object.prototype,Pe=p.toString,
xe=function(e){var t,r,n=Se.call(e,Ae),o=e[Ae];try{t=!(e[Ae]=void 0)}catch(e){}return r=Ne.call(e),t&&(
n?e[Ae]=o:delete e[Ae]),r},je=function(e){return Pe.call(e)},Ie=L?L.toStringTag:void 0,Ce=p=function(e){
return null==e?void 0===e?"[object Undefined]":"[object Null]":(Ie&&Ie in Object(e)?xe:je)(e)},Ue=Le=function(e){
var t=typeof e;return null!=e&&("object"==t||"function"==t)},Ge=function(e){return!!Ue(e)&&("[object Function]"==(e=Ce(e
))||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e)},v=C["__core-js_shared__"],
v=/[^.]+$/.exec(v&&v.keys&&v.keys.IE_PROTO||""),Fe=v?"Symbol(src)_1."+v:"",v=Function.prototype,Me=v.toString,De=Ge,
qe=function(e){return!!Fe&&Fe in e},ke=Le,Be=v=function(e){if(null!=e){try{return Me.call(e)}catch(e){}try{return e+""
}catch(e){}}return""},s=/[\\^$.*+?()[\]{}|]/g,$e=/^\[object .+?Constructor\]$/,S=Function.prototype,o=Object.prototype,
S=S.toString,o=o.hasOwnProperty,Ve=RegExp("^"+S.call(o).replace(s,"\\$&").replace(
/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ze=function(e){return!(!ke(e)||qe(e))&&(De(e
)?Ve:$e).test(Be(e))},He=function(e,t){return null==e?void 0:e[t]},o=(S=function(e,t){return e=He(e,t),ze(e)?e:void 0})(
C,"Map"),s=S(Object,"create"),Je=We=s,r=Object.prototype,Ke=r.hasOwnProperty,Xe=s,r=Object.prototype,Qe=r.hasOwnProperty
,Ye=s,r=function(e){return e=this.has(e)&&delete this.__data__[e],this.size-=e?1:0,e},s=function(e){var t,
r=this.__data__;return Je?"__lodash_hash_undefined__"===(t=r[e])?void 0:t:Ke.call(r,e)?r[e]:void 0},n=function(e){
var t=this.__data__;return Xe?void 0!==t[e]:Qe.call(t,e)},T=function(e,t){var r=this.__data__;
return this.size+=this.has(e)?0:1,r[e]=Ye&&void 0===t?"__lodash_hash_undefined__":t,this},D.prototype.clear=function(){
this.__data__=We?We(null):{},this.size=0},D.prototype.delete=r,D.prototype.get=s,D.prototype.has=n,D.prototype.set=T,
Ze=D,et=A,tt=o,rt=function(e){var t=typeof e;
return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e},at=it=ot=nt=function(e,t){
return e=e.__data__,rt(t)?e["string"==typeof t?"string":"hash"]:e.map},r=function(e){return e=nt(this,e).delete(e),
this.size-=e?1:0,e},s=function(e){return ot(this,e).get(e)},n=function(e){return it(this,e).has(e)},T=function(e,t){
var r=at(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},q.prototype.clear=function(){this.size=0,
this.__data__={hash:new Ze,map:new(tt||et),string:new Ze}},q.prototype.delete=r,q.prototype.get=s,q.prototype.has=n,
q.prototype.set=T,ut=o,ct=r=q,lt=st=A,s=x,n=Ma,T=j,A=function(e,t){var r,n=this.__data__;if(n instanceof st){if(
r=n.__data__,!ut||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new ct(r)}return n.set(e,t),
this.size=n.size,this},k.prototype.clear=P,k.prototype.delete=s,k.prototype.get=n,k.prototype.has=T,k.prototype.set=A,
x=k,dt=r,Ma=function(e){return this.__data__.has(e)},B.prototype.add=B.prototype.push=function(e){
return this.__data__.set(e,"__lodash_hash_undefined__"),this},B.prototype.has=Ma,ft=B,pt=j=function(e,t){for(var r=-1,
n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},ht=function(e,t){return e.has(t)},P=C.Uint8Array,gt=P,
mt=we,vt=s=function(e,t,r,n,o,i){var a,s,u,c,l,d,f,p=1&r,h=e.length,g=t.length;if(h!=g&&!(p&&h<g))return!1;if(g=i.get(e)
,a=i.get(t),g&&a)return g==t&&a==e;for(s=-1,u=!0,c=2&r?new ft:void 0,i.set(e,t),i.set(t,e);++s<h;){if(l=e[s],d=t[s],
void 0!==(f=n?p?n(d,l,s,t,e,i):n(l,d,s,e,t,i):f)){if(f)continue;u=!1;break}if(c){if(!pt(t,function(e,t){if(!ht(c,t)&&(
l===e||o(l,e,r,n,i)))return c.push(t)})){u=!1;break}}else if(l!==d&&!o(l,d,r,n,i)){u=!1;break}}return i.delete(e),
i.delete(t),u},yt=function(e){var r=-1,n=Array(e.size);return e.forEach(function(e,t){n[++r]=[t,e]}),n},bt=n=function(e
){var t=-1,r=Array(e.size);return e.forEach(function(e){r[++t]=e}),r},T=L?L.prototype:void 0,_t=T?T.valueOf:void 0,
A=function(e,t,r,n,o,i,a){var s,u;switch(r){case"[object DataView]":if(
e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":
return!(e.byteLength!=t.byteLength||!i(new gt(e),new gt(t)));case"[object Boolean]":case"[object Date]":
case"[object Number]":return mt(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;
case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":s=yt;case"[object Set]":return s=s||bt,!!(
e.size==t.size||1&n)&&((u=a.get(e))?u==t:(n|=2,a.set(e,t),u=vt(s(e),s(t),n,o,i,a),a.delete(e),u));case"[object Symbol]":
if(_t)return _t.call(e)==_t.call(t)}return!1},Ma=function(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];
return e},P=Array.isArray,Et=Ma,Ot=a=P,T=function(e,t,r){return t=t(e),Ot(e)?t:Et(t,r(e))},wt=P=function(e,t){for(var r,
n=-1,o=null==e?0:e.length,i=0,a=[];++n<o;)t(r=e[n],n,e)&&(a[i++]=r);return a},R=Object.prototype,
Rt=R.propertyIsEnumerable,R=(Tt=Object.getOwnPropertySymbols)?function(t){return null==t?[]:(t=Object(t),wt(Tt(t),
function(e){return Rt.call(t,e)}))}:function(){return[]},Ro=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);
return n},St=p,w=function(e){return Nt(e)&&"[object Arguments]"==St(e)},At=Nt=ba=function(e){
return null!=e&&"object"==typeof e},f=Object.prototype,Pt=f.hasOwnProperty,xt=f.propertyIsEnumerable,f=w(function(){
return arguments}())?w:function(e){return At(e)&&Pt.call(e,"callee")&&!xt.call(e,"callee")},E=(ya=(ya=(E=(E=(w={
exports:{}}).exports)&&!E.nodeType&&E)&&w&&!w.nodeType&&w)&&ya.exports===E?C.Buffer:void 0)?ya.isBuffer:void 0,
w.exports=E||function(){return!1},jt=/^(?:0|[1-9]\d*)$/,ya=function(e,t){var r=typeof e;return!!(
t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&jt.test(e))&&-1<e&&e%1==0&&e<t},It=p,Lt=E=function(e){
return"number"==typeof e&&-1<e&&e%1==0&&e<=9007199254740991},Ct=ba,(t={}
)["[object Float32Array]"]=t["[object Float64Array]"]=t["[object Int8Array]"]=t["[object Int16Array]"]=t["[object Int32Array]"]=t["[object Uint8Array]"]=t["[object Uint8ClampedArray]"]=t["[object Uint16Array]"]=t["[object Uint32Array]"]=!0
,
t["[object Arguments]"]=t["[object Array]"]=t["[object ArrayBuffer]"]=t["[object Boolean]"]=t["[object DataView]"]=t["[object Date]"]=t["[object Error]"]=t["[object Function]"]=t["[object Map]"]=t["[object Number]"]=t["[object Object]"]=t["[object RegExp]"]=t["[object Set]"]=t["[object String]"]=t["[object WeakMap]"]=!1
,N=function(e){return Ct(e)&&Lt(e.length)&&!!t[It(e)]},va=function(t){return function(e){return t(e)}},_=(_=(b=Ut={
exports:{}}).exports)&&!_.nodeType&&_,_=(ga=_&&b&&!b.nodeType&&b)&&ga.exports===_,ma=_&&I.process,_=function(){try{
return ga&&ga.require&&ga.require("util").types||ma&&ma.binding&&ma.binding("util")}catch(e){}}(),b.exports=_,_=(b=(
I=Ut.exports)&&I.isTypedArray)?va(b):N,Gt=Ro,Ft=f,Mt=a,Dt=w.exports,qt=ya,kt=I=_,b=Object.prototype,Bt=b.hasOwnProperty,
$t=Object.prototype,Ra=Object.keys,Ta=Object,Vt=function(e){var t=e&&e.constructor;return e===(
"function"==typeof t&&t.prototype||$t)},zt=function(e){return Ra(Ta(e))},N=Object.prototype,Ht=N.hasOwnProperty,Wt=Ge,
Jt=E,Kt=function(e,t){var r,n=Mt(e),o=!n&&Ft(e),i=!n&&!o&&Dt(e),a=!n&&!o&&!i&&kt(e),s=n||o||i||a,u=s?Gt(e.length,String
):[],c=u.length;for(r in e)!t&&!Bt.call(e,r)||s&&("length"==r||i&&("offset"==r||"parent"==r)||a&&(
"buffer"==r||"byteLength"==r||"byteOffset"==r)||qt(r,c))||u.push(r);return u},Xt=function(e){var t,r;if(!Vt(e)
)return zt(e);for(r in t=[],Object(e))Ht.call(e,r)&&"constructor"!=r&&t.push(r);return t},Qt=Ro=function(e){
return null!=e&&Jt(e.length)&&!Wt(e)},Yt=T,Zt=R,er=_=function(e){return(Qt(e)?Kt:Xt)(e)},tr=function(e){return Yt(e,er,
Zt)},b=Object.prototype,rr=b.hasOwnProperty,N=function(e,t,r,n,o,i){var a,s,u,c,l,d,f,p,h,g=1&r,m=tr(e),v=m.length;if(
v!=tr(t).length&&!g)return!1;for(a=v;a--;)if(s=m[a],!(g?s in t:rr.call(t,s)))return!1;if(p=i.get(e),h=i.get(t),p&&h
)return p==t&&h==e;for(u=!0,i.set(e,t),i.set(t,e),c=g;++a<v;){if(l=e[s=m[a]],d=t[s],!(void 0===(f=n?g?n(d,l,s,t,e,i):n(l
,d,s,e,t,i):f)?l===d||o(l,d,r,n,i):f)){u=!1;break}c=c||"constructor"==s}return u&&!c&&(p=e.constructor)!=(
h=t.constructor)&&"constructor"in e&&"constructor"in t&&!(
"function"==typeof p&&p instanceof p&&"function"==typeof h&&h instanceof h)&&(u=!1),i.delete(e),i.delete(t),u},T=S(C,
"DataView"),R=o,b=S(C,"Promise"),h=o=S(C,"Set"),C=S(C,"WeakMap"),nr=p,ir=(or=v)(v=T),ar=or(R),sr=or(b),ur=or(h),cr=or(C)
,T=nr,(v&&"[object DataView]"!=T(new v(new ArrayBuffer(1)))||R&&"[object Map]"!=T(new R)||b&&"[object Promise]"!=T(
b.resolve())||h&&"[object Set]"!=T(new h)||C&&"[object WeakMap]"!=T(new C))&&(T=function(e){var t=nr(e);if(e=(
e="[object Object]"==t?e.constructor:void 0)?or(e):"")switch(e){case ir:return"[object DataView]";case ar:
return"[object Map]";case sr:return"[object Promise]";case ur:return"[object Set]";case cr:return"[object WeakMap]"}
return t}),lr=x,dr=s,fr=A,pr=N,hr=T,gr=a,mr=w.exports,vr=I,yr="[object Arguments]",br="[object Array]",
_r="[object Object]",v=Object.prototype,Er=v.hasOwnProperty,Or=function(e,t,r,n,o,i){var a=gr(e),s=gr(t),u=a?br:hr(e),
s=s?br:hr(t),c=(u=u==yr?_r:u)==_r,l=(s=s==yr?_r:s)==_r;if((s=u==s)&&mr(e)){if(!mr(t))return!1;c=!(a=!0)}return s&&!c?(
i=i||new lr,a||vr(e)?dr(e,t,r,n,o,i):fr(e,t,u,r,n,o,i)):1&r||(a=c&&Er.call(e,"__wrapped__"),u=l&&Er.call(t,"__wrapped__"
),!a&&!u)?s&&(i=i||new lr,pr(e,t,r,n,o,i)):o(a?e.value():e,u?t.value():t,r,n,i=i||new lr)},Rr=x,Tr=R=function e(t,r,n,o,
i){return t===r||(null==t||null==r||!wr(t)&&!wr(r)?t!=t&&r!=r:Or(t,r,n,o,e,i))},Sr=Le,Nr=b=function(e){return e==e&&!Sr(
e)},Ar=_,Pr=function(e,t,r,n){var o,i,a,s,u,c,l=r.length,d=l,f=!n;if(null==e)return!d;for(e=Object(e);l--;)if(o=r[l],
f&&o[2]?o[1]!==e[o[0]]:!(o[0]in e))return!1;for(;++l<d;)if(a=e[i=(o=r[l])[0]],s=o[1],f&&o[2]){if(void 0===a&&!(i in e)
)return!1}else if(u=new Rr,!(void 0===(c=n?n(a,s,i,e,t,u):c)?Tr(s,a,3,n,u):c))return!1;return!0},xr=function(e){for(
var t,r,n=Ar(e),o=n.length;o--;)r=e[t=n[o]],n[o]=[t,r,Nr(r)];return n},jr=h=function(t,r){return function(e){
return null!=e&&e[t]===r&&(void 0!==r||t in Object(e))}},C=function(t){var r=xr(t);return 1==r.length&&r[0][2]?jr(
r[0][0],r[0][1]):function(e){return e===t||Pr(e,t,r)}},Ir=p,Lr=wr=ba,Cr=a,Ur=s=function(e){return"symbol"==typeof e||Lr(
e)&&"[object Symbol]"==Ir(e)},Gr=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Fr=/^\w*$/,A=function(e,t){if(Cr(e)
)return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!Ur(e))||Fr.test(e)||!Gr.test(e
)||null!=t&&e in Object(t)},Mr=r,$.Cache=Mr,
Dr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,qr=/\\(\\)?/g,wa=(
N=$(function(e){var o=[];return 46===e.charCodeAt(0)&&o.push(""),e.replace(Dr,function(e,t,r,n){o.push(r?n.replace(qr,
"$1"):t||e)}),o},function(e){return 500===wa.size&&wa.clear(),e})).cache,kr=Oe,Br=a,$r=s,T=L?L.prototype:void 0,
Vr=T?T.toString:void 0,zr=w=function e(t){if("string"==typeof t)return t;if(Br(t))return kr(t,e)+"";if($r(t)
)return Vr?Vr.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},Jr=N,Kr=I=function(e){return null==e?"":zr(e)},Xr=s,
en=Qr=function(e,t){return Hr(e)?e:Wr(e,t)?[e]:Jr(Kr(e))},tn=f,on=E,sn=function(e,t){return null!=e&&t in Object(e)},
un=v=function(e,t,r){for(var n,o,i=(t=en(t,e)).length,a=!(n=-1);++n<i&&(o=an(t[n]),a=null!=e&&r(e,o));)e=e[o];
return a||++n!=i?a:!!(i=null==e?0:e.length)&&on(i)&&nn(o,i)&&(rn(e)||tn(e))},cn=R,ln=function(e,t,r){return void 0===(
e=null==e?void 0:Zr(e,t))?r:e},dn=function(e,t){return null!=e&&un(e,t,sn)},pn=b,hn=h,mn=Zr=x=function(e,t){for(var r=0,
n=(t=Qr(t,e)).length;null!=e&&r<n;)e=e[Yr(t[r++])];return r&&r==n?e:void 0},vn=function(t){return function(e){
return null==e?void 0:e[t]}},yn=function(t){return function(e){return mn(e,t)}},bn=fn=Wr=A,_n=gn=an=Yr=function(e){if(
"string"==typeof e||Xr(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},En=C,On=function(r,n){return fn(r)&&pn(n
)?hn(gn(r),n):function(e){var t=ln(e,r);return void 0===t&&t===n?dn(e,r):cn(n,t,3)}},wn=r=function(e){return e},
Rn=rn=Hr=a,Tn=function(e){return bn(e)?vn(_n(e)):yn(e)},Sn=function(e,t,r){for(var n,o=-1,i=Object(e),a=r(e),
s=a.length;s--&&!1!==t(i[n=a[++o]],n,i););return e},Nn=_,jn=Oe,Ln=T=function(e,n){var o=-1,i=xn(e)?Array(e.length):[];
return Pn(e,function(e,t,r){i[++o]=n(e,t,r)}),i},Un=function(e,t){return(Cn(e)?jn:Ln)(e,In(t))},Fn=we,Mn=xn=An=Ro,
Dn=nn=ya,qn=Le,kn=j,$n=function(e,n){var o;return Gn(e,function(e,t,r){return!(o=n(e,t,r))}),!!o},Hn=function(e,t,r){
var n=Vn(e)?kn:$n;return r&&zn(e,t,r)&&(t=void 0),n(e,Bn(t))},Wn=Gn=Pn=N=function(e,t){if(null==e)return e;if(!An(e)
)return e&&Sn(e,t,Nn);for(var r=e.length,n=-1,o=Object(e);++n<r&&!1!==t(o[n],n,o););return e},Jn=function(e,t){for(
var r=-1,n=null==e?0:e.length;++r<n;)if(!t(e[r],r,e))return!1;return!0},Kn=function(e,n){var o=!0;return Wn(e,function(e
,t,r){return o=!!n(e,t,r)}),o},Xn=Bn=In=E=function(e){return"function"==typeof e?e:null==e?wn:"object"==typeof e?Rn(e
)?On(e[0],e[1]):En(e):Tn(e)},Qn=Vn=Cn=a,Yn=zn=R=function(e,t,r){if(!qn(r))return!1;var n=typeof t;return!!(
"number"==n?Mn(r)&&Dn(t,r.length):"string"==n&&t in r)&&Fn(r[t],e)},Zn=function(e,t,r){var n=Qn(e)?Jn:Kn;return r&&Yn(e,
t,r)&&(t=void 0),n(e,Xn(t))},eo=S,b=function(){try{var e=eo(Object,"defineProperty");return e({},"",{}),e}catch(e){}}(),
to=f,ro=a,no=L?L.isConcatSpreadable:void 0,io=function(e){return ro(e)||to(e)||!!(no&&e&&e[no])},ao=oo=Ma,
so=h=function e(t,r,n,o,i){var a,s=-1,u=t.length;for(n=n||io,i=i||[];++s<u;)a=t[s],0<r&&n(a)?1<r?e(a,r-1,n,o,i):oo(i,a
):o||(i[i.length]=a);return i},uo=function(e,t){var r=-1,n=e.length;for(t=t||Array(n);++r<n;)t[r]=e[r];return t},co=a,
lo=function(){var e,t,r,n=arguments.length;if(!n)return[];for(e=Array(n-1),t=arguments[0],r=n;r--;)e[r-1]=arguments[r];
return ao(co(t)?uo(t):[t],so(e,1))},fo=/\s/,po=function(e){for(var t=e.length;t--&&fo.test(e.charAt(t)););return t},
ho=/^\s+/,go=A=function(e){return e&&e.slice(0,po(e)+1).replace(ho,"")},mo=Le,vo=s,yo=/^[-+]0x[0-9a-f]+$/i,
bo=/^0b[01]+$/i,_o=/^0o[0-7]+$/i,Eo=parseInt,Oo=function(e){var t;return"number"==typeof e?e:vo(e)?NaN:(mo(e)&&(
t="function"==typeof e.valueOf?e.valueOf():e,e=mo(t)?t+"":t),"string"!=typeof e?0===e?e:+e:(e=go(e),(t=bo.test(e)
)||_o.test(e)?Eo(e.slice(2),t?2:8):yo.test(e)?NaN:+e))},wo=function(e){return e?(e=Oo(e)
)===1/0||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0},C=function(e){var t=(e=wo(e))%1;
return e==e?t?e-t:e:0},Ro=function(e,t,r){var n,o=-1,i=e.length;for((r=i<r?i:r)<0&&(r+=i),i=r<(t=t<0?i<-t?0:i+t:t
)?0:r-t>>>0,t>>>=0,n=Array(i);++o<i;)n[o]=e[o+t];return n},To=function(e,t,r,n){for(var o=e.length,i=r+(n?1:-1
);n?i--:++i<o;)if(t(e[i],i,e))return i;return-1},So=function(e){return e!=e},No=function(e,t,r){for(var n=r-1,
o=e.length;++n<o;)if(e[n]===t)return n;return-1},ya=function(e,t,r){return t==t?No(e,t,r):To(e,So,r)},o&&n(new o([,-0])
)[1],Ao=s,Po=function(e,t){var r,n,o,i,a,s,u,c;if(e!==t){if(r=void 0!==e,n=null===e,o=e==e,i=Ao(e),a=void 0!==t,
s=null===t,u=t==t,c=Ao(t),!s&&!c&&!i&&t<e||i&&a&&u&&!s&&!c||n&&a&&u||!r&&u||!o)return 1;if(
!n&&!i&&!c&&e<t||c&&r&&o&&!n&&!i||s&&r&&o||!a&&o||!u)return-1}return 0},xo=Oe,jo=x,Io=E,Lo=T,Co=function(e,t){
var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e},Uo=va,Go=function(e,t,r){for(var n,o=-1,i=e.criteria,
a=t.criteria,s=i.length,u=r.length;++o<s;)if(n=Po(i[o],a[o]))return u<=o?n:n*("desc"==r[o]?-1:1);return e.index-t.index}
,Fo=r,Mo=a,Do=function(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:
return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)},qo=Math.max,ko=function(e){
return function(){return e}},j=(Bo=b)?function(e,t){return Bo(e,"toString",{configurable:!0,enumerable:!1,value:ko(t),
writable:!0})}:r,$o=Date.now,_a=j,Vo=h,zo=function(e,n,r){var o;return n=n.length?xo(n,function(t){return Mo(t
)?function(e){return jo(e,1===t.length?t[0]:t)}:t}):[Fo],o=-1,n=xo(n,Uo(Io)),e=Lo(e,function(t,e,r){return{criteria:xo(n
,function(e){return e(t)}),index:++o,value:t}}),Co(e,function(e,t){return Go(e,t,r)})},Ho=R,function(){var e=$o(),
t=16-e+ +Oa;if(Oa=e,0<t){if(800<=++Ea)return}else Ea=0;_a.apply(void 0,arguments)}((Sa=S=function(e,t){if(null==e
)return[];var r=t.length;return 1<r&&Ho(e,t[0],t[1])?t=[]:2<r&&Ho(t[0],t[1],t[2])&&(t=[t[0]]),zo(e,Vo(t,1),[])},Na=void(
Oa=Ea=0),Aa=r,Na=qo(void 0===Na?Sa.length-1:Na,0),function(){for(var e,t=arguments,r=-1,n=qo(t.length-Na,0),o=Array(n
);++r<n;)o[r]=t[Na+r];for(r=-1,e=Array(Na+1);++r<Na;)e[r]=t[r];return e[Na]=Aa(o),Do(Sa,this,e)}),S+""),Jo=P,
Ko=function(e,n){var o=[];return Wo(e,function(e,t,r){n(e,t,r)&&o.push(e)}),o},Xo=E,Yo=function(e,t){return(Qo(e)?Jo:Ko
)(e,Xo(t))},Zo=r,ei=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e},ti=Wo=N,
ri=function(e){return"function"==typeof e?e:Zo},ni=Qo=a,oi=function(e,t){return(ni(e)?ei:ti)(e,ri(t))},ii=Ro,f=function(
e,t,r){var n=e.length;return r=void 0===r?n:r,!t&&n<=r?e:ii(e,t,r)},ai=RegExp(
"[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),L=function(e){return ai.test(e)},
(Ma=Ut.exports)&&Ma.isRegExp,n=function(e){return e.split("")},
o="[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:"+[
"[^\\ud800-\\udfff]","(?:\\ud83c[\\udde6-\\uddff]){2}","[\\ud800-\\udbff][\\udc00-\\udfff]"].join("|"
)+")[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?)*",s="(?:"+[
"[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]?","[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
"(?:\\ud83c[\\udde6-\\uddff]){2}","[\\ud800-\\udbff][\\udc00-\\udfff]","[\\ud800-\\udfff]"].join("|")+")",si=RegExp(
"\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|"+s+o,"g"),ui=n,ci=L,li=function(e){return e.match(si)||[]},
fi=di=ya,pi=w,hi=A,gi=f,mi=function(e,t){for(var r=e.length;r--&&-1<di(t,e[r],0););return r},vi=function(e,t){for(
var r=-1,n=e.length;++r<n&&-1<fi(t,e[r],0););return r},yi=function(e){return(ci(e)?li:ui)(e)},bi=I,_i=function(e,t,r){
return(e=bi(e))&&(r||void 0===t)?hi(e):e&&(t=pi(t))?(r=yi(e),e=yi(t),t=vi(r,e),e=mi(r,e)+1,gi(r,t,e).join("")):e},
x=Object.prototype,Ei=x.hasOwnProperty,Oi=function(e,t){return null!=e&&Ei.call(e,t)},wi=v,Ri=function(e,t){
return null!=e&&wi(e,t,Oi)},Ni=function(e){return!0===e||!1===e||Si(e)&&"[object Boolean]"==Ti(e)},Ai=function(e){
return null===e},xi=a,Ii=function(e){return"string"==typeof e||!xi(e)&&ji(e)&&"[object String]"==Pi(e)},Li=Pi=Ti=p,
Ci=ji=Si=ba,Ui=function(e){return"number"==typeof e||Ci(e)&&"[object Number]"==Li(e)},Gi=function(e,t,r){return e==e&&(
void 0!==r&&(e=e<=r?e:r),void 0!==t&&(e=t<=e?e:t)),e},Fi=w,Mi=C,Di=I,qi=function(e,t,r){return e=Di(e),r=null==r?0:Gi(
Mi(r),0,e.length),t=Fi(t),e.slice(r,r+t.length)==t},ki=Oe,Bi=function(t,e){return ki(e,function(e){return t[e]})},$i=_,
Vi=function(e){return null==e?[]:Bi(e,$i(e))};class ts{constructor(e,t){i(this,"_logger",void 0),i(this,"name",void 0),
i(this,"_level",void 0),this.name=e,this._logger=t,this._level=void 0}getLogLevel(){var e;return null!=(e=this._level
)?e:this._logger.getLogLevel()}setLogLevel(e){return this._level=e,this}debug(...e){(
void 0===this._level||this._level<=c.DEBUG)&&this._logger.debug(`[${this.name}]`,...e)}info(...e){(
void 0===this._level||this._level<=c.INFO)&&this._logger.info(`[${this.name}]`,...e)}warn(...e){(
void 0===this._level||this._level<=c.WARN)&&this._logger.warn(`[${this.name}]`,...e)}error(...e){(
void 0===this._level||this._level<=c.ERROR)&&this._logger.error(`[${this.name}]`,...e)}}class rs{static setLogLevel(e){
return e&&(this._level=e),this}static getLogLevel(){return this._level}static getLogLevelString(){var e=this._level;
switch(e){case u.DEBUG:return"DEBUG";case u.INFO:return"INFO";case u.WARN:return"WARN";case u.ERROR:return"ERROR";
case u.NONE:return"NONE";default:return"Unknown:"+e}}static setLogger(e){if(!e)throw new TypeError(
"The logger was not defined");this._logger=e}static debug(...e){this._level<=c.DEBUG&&this._logger.debug(...e)}
static info(...e){this._level<=c.INFO&&this._logger.info(...e)}static warn(...e){this._level<=c.WARN&&this._logger.warn(
...e)}static error(...e){this._level<=c.ERROR&&this._logger.error(...e)}static createLogger(e){return new ts(e,rs)}}i(rs
,"Level",c=u={DEBUG:0,0:"DEBUG",INFO:1,1:"INFO",WARN:2,2:"WARN",ERROR:3,3:"ERROR",NONE:4,4:"NONE"}),i(rs,"_level",
c.DEBUG),i(rs,"_logger",console);const ns=rs.createLogger("ProcessUtils");class os{static getArguments(){
return process.argv.slice(2)}static parseEnvFileLine(e,t){if(t.indexOf("=")<0)return t.length&&(e[t]=""),e;
const r=t.split("=");return t=r.shift(),(t=_i(t)).length&&(e[t]=r.join("=").trim()),e}static parseEnvFile(e){
const t=Da.default.readFileSync(e,{encoding:"utf-8"}),r=t.split("\n");return r.reduce(os.parseEnvFileLine,{})}
static initEnvFromFile(e){e=os.parseEnvFile(e),process.env=d(d({},e),process.env)}static initEnvFromDefaultFiles(){
var e=qa.default.join(process.cwd(),".env");Da.default.existsSync(e)&&os.initEnvFromFile(e)}static setupDestroyHandler(r
,n){let o=!1;var e=t=>e=>{os._printErrors(t,e);try{if(o)return;o=!0,r()}catch(e){n(e)}};process.on("exit",e("exit")),
process.on("SIGTERM",e("SIGTERM")),process.on("SIGINT",e("SIGINT")),process.on("SIGUSR1",e("SIGUSR1")),process.on(
"SIGUSR2",e("SIGUSR2")),process.on("uncaughtException",e("uncaughtException"))}static _printErrors(e,t){try{t?ns.error(
`Closing process because "${e}" event: `,t):"exit"===e?ns.debug(`Closing process because "${e}" event`):ns.info(
`Closing process because "${e}" event`)}catch(e){console.error("Error while printing errors: ",e)}}}ee("0.0.4"),
va=null!=(T=ee(""))?T:"hgm",j=null!=(b=ee(""))?b:"",ee("production"),ee("2022-03-05T16:00:32.243Z"),"".startsWith("%{"
)&&"".endsWith("}"),E=null!=(P=function(e){if(e){if(function(){switch(e){case u.DEBUG:case u.INFO:case u.WARN:
case u.ERROR:case u.NONE:return 1;default:return}}())return e;switch(e=(""+e).toUpperCase()){case"ALL":case"DEBUG":
return u.DEBUG;case"INFO":return u.INFO;case"WARN":case"WARNING":return u.WARN;case"ERR":case"ERROR":return u.ERROR;
case"FALSE":case"OFF":case"QUIET":case"SILENT":case"NONE":return u.NONE;default:return}}}(null!=(S=Y(null==(h=process
)||null==(R=h.env)?void 0:R.LOG_LEVEL))?S:Y(j)))?P:u.INFO;const is=null!=(Ro=Y(null==(r=process)||null==(N=r.env
)?void 0:N.COMMAND_NAME))?Ro:va,as="git@github.com",ss="git",us=(Hi=zi={OK:0,0:"OK",GENERAL_ERRORS:1,1:"GENERAL_ERRORS",
MISUSE_OF_SHELL_BUILTINS:2,2:"MISUSE_OF_SHELL_BUILTINS",ARGUMENT_PARSE_ERROR:3,3:"ARGUMENT_PARSE_ERROR",
UNKNOWN_ARGUMENT:4,4:"UNKNOWN_ARGUMENT",UNIMPLEMENTED_FEATURE:5,5:"UNIMPLEMENTED_FEATURE",FATAL_ERROR:6,6:"FATAL_ERROR",
CONFLICT:7,7:"CONFLICT",USAGE:64,64:"USAGE",DATAERR:65,65:"DATAERR",NOINPUT:66,66:"NOINPUT",NOUSER:67,67:"NOUSER",
NOHOST:68,68:"NOHOST",UNAVAILABLE:69,69:"UNAVAILABLE",SOFTWARE:70,70:"SOFTWARE",OSERR:71,71:"OSERR",OSFILE:72,
72:"OSFILE",CANTCREAT:73,73:"CANTCREAT",IOERR:74,74:"IOERR",TEMPFAIL:75,75:"TEMPFAIL",PROTOCOL:76,76:"PROTOCOL",
NOPERM:77,77:"NOPERM",CONFIG:78,78:"CONFIG",COMMAND_INVOKED_CANNOT_EXECUTE:126,126:"COMMAND_INVOKED_CANNOT_EXECUTE",
COMMAND_NOT_FOUND:127,127:"COMMAND_NOT_FOUND",INVALID_ARGUMENT_TO_EXIT:128,128:"INVALID_ARGUMENT_TO_EXIT",
FATAL_SIGNAL_RANGE_START:129,129:"FATAL_SIGNAL_RANGE_START",FATAL_SIGNAL_RANGE_END:254,254:"FATAL_SIGNAL_RANGE_END",
EXIT_STATUS_OUT_OF_RANGE:255,255:"EXIT_STATUS_OUT_OF_RANGE"},O=Wi={OPTIONS:0,0:"OPTIONS",GET:1,1:"GET",POST:2,2:"POST",
PUT:3,3:"PUT",DELETE:4,4:"DELETE",PATCH:5,5:"PATCH"},"WINDOW"===(ya=null!=(L=null!=(s=null==(Ut=process)||null==(
Ma=Ut.env)?void 0:Ma.NOR_REQUEST_CLIENT_MODE)?s:null==(o=process)||null==(n=o.env
)?void 0:n.REACT_APP_REQUEST_CLIENT_MODE)?L:"")||!("undefined"==typeof window||!window.fetch)),cs="NODE"===ya||!us;
class ls{static async getRequestDataAsBuffer(n){return new Promise((e,t)=>{const r=[];n.on("data",e=>{try{r.push(e)
}catch(e){t(e)}}),n.on("end",()=>{try{e(Buffer.concat(r))}catch(e){t(e)}})})}static async getRequestDataAsString(e,
t="utf8"){const r=await ls.getRequestDataAsBuffer(e);return r.toString(t)}static async getRequestDataAsFormUrlEncoded(e
){if(""!==(e=await ls.getRequestDataAsString(e)))return ka.parse(e)}static async getRequestDataAsJson(e){if(""!==(
e=await ls.getRequestDataAsString(e)))return JSON.parse(e)}}(A=l={Continue:100,100:"Continue",SwitchingProtocols:101,
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
)[500]="InternalServerError",A[A.NotImplemented=501]="NotImplemented",A[A.BadGateway=502]="BadGateway",
A[A.ServiceUnavailable=503]="ServiceUnavailable",A[A.GatewayTimeout=504]="GatewayTimeout",
A[A.HttpVersionNotSupported=505]="HttpVersionNotSupported",A[A.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",
A[A.InsufficientStorage=507]="InsufficientStorage",A[A.LoopDetected=508]="LoopDetected",
A[A.BandwidthLimitExceeded=509]="BandwidthLimitExceeded",A[A.NotExtended=510]="NotExtended",
A[A.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",Ji={ERROR:"error"};class ds extends Error{
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
return this.status+" "+this.message}toJSON(){return{type:Ji.ERROR,status:this.status,message:this.message}}
getStatusCode(){return this.status}getMethod(){return this.method}getUrl(){return this.url}getBody(){return this.body}}
const fs=cs?require("fs").promises:void 0,ps=rs.createLogger("NodeRequestClient");class hs{static setLogLevel(e){
ps.setLogLevel(e)}constructor(e,t){i(this,"_http",void 0),i(this,"_https",void 0),this._http=e,this._https=t}
async jsonRequest(e,t,r,n){switch(e){case O.GET:return this._getJson(t,r,n);case O.POST:return this._postJson(t,r,n);
case O.PATCH:return this._patchJson(t,r,n);case O.PUT:return this._putJson(t,r,n);case O.DELETE:return this._deleteJson(
t,r,n);default:throw new TypeError("[Node]RequestClient: Unsupported method: "+e)}}async _checkSocketFile(t){try{
const e=await fs.stat(t);return!!e.isSocket()}catch(e){if("ENOTDIR"===(t=null==e?void 0:e.code))return void ps.debug(
"_checkSocketFile: ENOTDIR: ",e);if("ENOENT"===t)return void ps.debug("_checkSocketFile: ENOENT: ",e);throw ps.error(
`_checkSocketFile: Error "${t}" passed on: `,e),e}}async _findSocketFile(e){var t=await this._checkSocketFile(e);
return!0===t?e:!1!==t&&"/"!==(t=qa.default.dirname(e))&&t!==e?this._findSocketFile(t):void 0}async _httpRequest(i,a,e){
var t;const s=e?JSON.stringify(e)+"\n":void 0,u=new Ba.default.URL(i);let c;const l=null!=(
e=null===u||void 0===u?void 0:u.protocol)?e:"";if("unix:"===l||"socket:"===l){
const r=null!==u&&void 0!==u&&u.pathname?null===u||void 0===u?void 0:u.pathname:"/";if("/"===r)throw new TypeError(
"No socket path found for unix protocol URL: "+i);if(!(e=await this._findSocketFile(r)))throw new TypeError(
"No socket path found for unix protocol URL: "+i);t=""+(e.length<r.length?r.substr(e.length):"")+(
"?"!==u.search?u.search:""),a=d(d({},a),{},{socketPath:e,path:t}),i="",c=this._http
}else c="https:"===l?this._https:this._http;return new Promise((t,r)=>{let n=!1;try{if(!c)throw new Error(
"HTTP module not defined. This error should not happen.");var o;let e;i&&(a=d(d({},a),{},{hostname:u.hostname,
port:null!=(o=null!==u&&void 0!==u&&u.port?parseInt(u.port,10):void 0)?o:"https:"===l?443:80,path:u.pathname+u.search}))
,(e=c.request(a,e=>{n?ps.warn("Warning! Request had already ended when the response was received."):(n=!0,t(e))})).on(
"error",e=>{n?(ps.warn("Warning! Request had already ended when the response was received."),ps.debug(
"Error from event: ",e)):(ps.debug("Passing on error from event: ",e),n=!0,r(e))}),s&&e.write(s),e.end()}catch(e){n?(
ps.warn("Warning! Request had already ended when the response was received."),ps.debug("Exception: ",e)):(ps.debug(
"Passing on error: ",e),n=!0,r(e))}})}async _request(e,t,r,n){return r=await this._httpRequest(t,r,n),
n=await ls.getRequestDataAsJson(r),{method:e,url:t,statusCode:null!=(e=null==r?void 0:r.statusCode)?e:0,
headers:r.headers,body:n}}async _getJson(e,t,r){const n={method:"GET",headers:{"Content-Type":"application/json"}};
return t&&(n.headers=d(d({},n.headers),t)),this._request(O.GET,e,n,r).then(hs._successResponse)}async _putJson(e,t,r){
const n={method:"PUT",headers:{"Content-Type":"application/json"}};return t&&(n.headers=d(d({},n.headers),t)),
this._request(O.PUT,e,n,r).then(hs._successResponse)}async _postJson(e,t,r){const n={method:"POST",headers:{
"Content-Type":"application/json"}};return t&&(n.headers=d(d({},n.headers),t)),this._request(O.POST,e,n,r).then(
hs._successResponse)}async _patchJson(e,t,r){const n={method:"PATCH",headers:{"Content-Type":"application/json"}};
return t&&(n.headers=d(d({},n.headers),t)),this._request(O.PATCH,e,n,r).then(hs._successResponse)}async _deleteJson(e,t,
r){const n={method:"DELETE",headers:{"Content-Type":"application/json"}};return t&&(n.headers=d(d({},n.headers),t)),
this._request(O.DELETE,e,n,r).then(hs._successResponse)}static async _successResponse(e){
var t=null==e?void 0:e.statusCode;if(t<200||400<=t)throw ps.error(`Unsuccessful response with status ${t}: `,e),new ds(t
,`Error ${t} for ${te(e.method)} `+e.url,e.method,e.url,e.body);return e.body}}class gs{constructor(e){i(this,"_fetch",
void 0),this._fetch=e}jsonRequest(e,t,r,n){switch(e){case O.GET:return this._getJson(t,r,n);case O.POST:
return this._postJson(t,r,n);case O.PUT:return this._putJson(t,r,n);case O.DELETE:return this._deleteJson(t,r,n);
default:throw new TypeError("[Fetch]RequestClient: Unsupported method: "+e)}}_getJson(e,t,r){const n={method:"GET",
mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},credentials:"same-origin"};return t&&(
n.headers=d(d({},n.headers),t)),r&&(n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>gs._successResponse(e,O.GET))}
_putJson(e,t,r){const n={method:"PUT",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},
credentials:"same-origin"};return t&&(n.headers=d(d({},n.headers),t)),r&&(n.body=JSON.stringify(r)),this._fetch(e,n
).then(e=>gs._successResponse(e,O.PUT))}_postJson(e,t,r){const n={method:"POST",mode:"cors",cache:"no-cache",headers:{
"Content-Type":"application/json"},credentials:"same-origin"};return t&&(n.headers=d(d({},n.headers),t)),r&&(
n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>gs._successResponse(e,O.POST))}_deleteJson(e,t,r){const n={
method:"DELETE",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},credentials:"same-origin"};
return t&&(n.headers=d(d({},n.headers),t)),r&&(n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>gs._successResponse(e,
O.DELETE))}static _successResponse(e,t){const r=e.status;if(!e.ok||r<200||400<=r){const n=e.url,
o=`${r} ${e.statusText} for ${te(t)} `+n;return e.json().then(e=>{throw new ds(r,o,t,n,e)})}return e.json()}}
const ms=cs?require("http"):void 0,vs=cs?require("https"):void 0,ys=rs.createLogger("RequestClient");class bs{
static setLogLevel(e){ys.setLogLevel(e),hs.setLogLevel(e)}static async jsonRequest(e,t,r,n){
return this._client.jsonRequest(e,t,r,n)}static async getJson(e,t){return this._client.jsonRequest(O.GET,e,t)}
static async postJson(e,t,r){return ys.debug(".postJson: ",e,t,r),this._client.jsonRequest(O.POST,e,r,t)}
static async patchJson(e,t,r){return ys.debug(".patchJson: ",e,t,r),this._client.jsonRequest(O.PATCH,e,r,t)}
static async putJson(e,t,r){return ys.debug(".putJson: ",e,t,r),this._client.jsonRequest(O.PUT,e,r,t)}
static async deleteJson(e,t,r){return ys.debug(".deleteJson: ",e,r,t),this._client.jsonRequest(O.DELETE,e,t,r)}
static _initClient(){if(us)return ys.debug("Detected browser environment"),new gs(window.fetch.bind(window));if(cs
)return new hs(ms,vs);throw new TypeError("Could not detect request client implementation")}}i(bs,"_client",
bs._initClient()),Ki={OK:0,0:"OK",ERROR:1,1:"ERROR",HELP:2,2:"HELP",VERSION:3,3:"VERSION"};const _s=rs.createLogger(
"Headers");class Es{static setLogLevel(e){_s.setLogLevel(e)}constructor(e){i(this,"_value",void 0),i(this,
"_uninitializedValue",void 0),this._value=void 0,this._uninitializedValue=e}_initializeValue(){var t=this._value,
r=this._uninitializedValue;try{r&&(this._uninitializedValue=void 0,this.addAll(r))}catch(e){throw this._value=t,
this._uninitializedValue=r,e}}clear(){this._value={},this._uninitializedValue=void 0}add(e,t){
this._uninitializedValue&&this._initializeValue(),_s.debug("add header: ",e,t),e=e.toLowerCase();var r=this._value&&Ri(
this._value,e)?this._value[e]:void 0;void 0===this._value?this._value={[e]:t}:void 0!==r?ne(r)?this._value=d(d({},
this._value),{},{[e]:lo([],r,[t])}):this._value=d(d({},this._value),{},{[e]:[r,t]}):this._value=d(d({},this._value),{},{
[e]:t})}containsKey(e){return this._uninitializedValue&&this._initializeValue(),e=e.toLowerCase(),Ri(this._value,e)}
isEmpty(){this._uninitializedValue&&this._initializeValue();var e=this._value;return!e||0===Z(e).length}keySet(){
this._uninitializedValue&&this._initializeValue();const t=new Set;var e;return void 0!==this._value&&(e=Z(this._value),
oi(e,e=>{t.add(e)})),t}getValue(e){if(this._uninitializedValue&&this._initializeValue(),this._value
)return e=e.toLowerCase(),Ri(this._value,e)?this._value[e]:void 0}getFirst(e){
return this._uninitializedValue&&this._initializeValue(),ne(e=this.getValue(e))?e.length?e[0]:void 0:e}getHost(){
return this._uninitializedValue&&this._initializeValue(),this.getFirst("host")}addAll(e,t){if(
this._uninitializedValue&&this._initializeValue(),H(e)){const r=e;if(!z(t))throw new TypeError(
"Headers.addAll signature must be (string, string[]) or (HeadersObject)");oi(t,e=>{this.add(r,e)})}else{const n=e;oi(Z(n
),t=>{var e=n[t];ne(e)?oi(e,e=>{this.add(t,e)}):void 0!==e&&this.add(t,e)})}}remove(e){
this._uninitializedValue&&this._initializeValue(),e=e.toLowerCase();var t=this.getValue(e);const r=d({},this._value);
return r&&Ri(r,e)&&delete r[e],this._value=r,t}set(e,t){this._uninitializedValue&&this._initializeValue(),
e=e.toLowerCase(),void 0===this._value?this._value={[e]:t}:this._value=d(d({},this._value),{},{[e]:t})}setAll(t){
this._uninitializedValue&&this._initializeValue(),oi(Z(t),e=>{this.set(e,t[e])})}valueOf(){var e;
return this._uninitializedValue&&this._initializeValue(),null!=(e=this._value)?e:void 0}toString(){
this._uninitializedValue&&this._initializeValue();const r=this._value;if(!r||this.isEmpty())return"Headers()";var e=Z(r)
const t=Un(e,e=>{const t=r[e];return t?z(t)?e+": "+t.map(e=>0<=t.indexOf(";")||0<=t.indexOf(",")?`"${t}"`:t).join(", "
):0<=t.indexOf(";")?`${e}: "${t}"`:e+": "+t:""+e});return`Headers(${t.join("; ")})`}clone(){
return this._uninitializedValue&&this._initializeValue(),new Es(this._value?d({},this._value):void 0)}}f={exports:{}},(
x=function(r,n,o){Xi.stat(r,function(e,t){o(e,!e&&ie(t,r,n))})}).sync=function(e,t){return ie(Xi.statSync(e),e,t)},
Xi=Da.default,(v=function(e,r,n){Qi.stat(e,function(e,t){n(e,!e&&ae(t,r))})}).sync=function(e,t){return ae(Qi.statSync(e
),t)},Qi=Da.default,Yi="win32"===process.platform||Ja.TESTING_WINDOWS?x:v,(p=function e(t,o,r){if(
"function"==typeof o&&(r=o,o={}),!r){if("function"!=typeof Promise)throw new TypeError("callback not provided");
return new Promise(function(r,n){e(t,o||{},function(e,t){e?n(e):r(t)})})}Yi(t,o||{},function(e,t){e&&(
"EACCES"===e.code||o&&o.ignoreErrors)&&(e=null,t=!1),r(e,t)})}).sync=function(e,t){try{return Yi.sync(e,t||{})}catch(e){
if(t&&t.ignoreErrors||"EACCES"===e.code)return!1;throw e}};
const Os="win32"===process.platform||"cygwin"===process.env.OSTYPE||"msys"===process.env.OSTYPE,ws=qa.default,
Rs=Os?";":":",Ts=p,Ss=e=>Object.assign(new Error("not found: "+e),{code:"ENOENT"}),Ns=(e,t)=>{var r=t.colon||Rs,
n=e.match(/\//)||Os&&e.match(/\\/)?[""]:[...Os?[process.cwd()]:[],...(t.path||process.env.PATH||"").split(r)];
const o=Os?t.pathExt||process.env.PATHEXT||".EXE;.CMD;.BAT;.COM":"",i=Os?o.split(r):[""];return Os&&-1!==e.indexOf("."
)&&""!==i[0]&&i.unshift(""),{pathEnv:n,pathExt:i,pathExtExe:o}},As=((ba=(i,s,t)=>{"function"==typeof s&&(t=s,s={}),
s=s||{};const{pathEnv:a,pathExt:u,pathExtExe:c}=Ns(i,s),l=[],d=o=>new Promise((e,t)=>{if(o===a.length
)return s.all&&l.length?e(l):t(Ss(i));const r=a[o];var t=/^".*"$/.test(r)?r.slice(1,-1):r,n=ws.join(t,i),
t=!t&&/^\.[\\\/]/.test(i)?i.slice(0,2)+n:n;e(f(t,o,0))}),f=(o,i,a)=>new Promise((r,e)=>{if(a===u.length)return r(d(i+1))
const n=u[a];Ts(o+n,{pathExt:c},(e,t)=>{if(!e&&t){if(!s.all)return r(o+n);l.push(o+n)}return r(f(o,i,a+1))})});
return t?d(0).then(e=>t(null,e),t):d(0)}).sync=(t,r)=>{r=r||{};var n,o,i,a,{pathEnv:s,pathExt:u,pathExtExe:c}=Ns(t,r);
const l=[];for(let e=0;e<s.length;e++){const d=s[e];n=/^".*"$/.test(d)?d.slice(1,-1):d,o=ws.join(n,t),
i=!n&&/^\.[\\\/]/.test(t)?t.slice(0,2)+o:o;for(let e=0;e<u.length;e++){a=i+u[e];try{if(Ts.sync(a,{pathExt:c})){if(!r.all
)return a;l.push(a)}}catch(e){}}}if(r.all&&l.length)return l;if(r.nothrow)return null;throw Ss(t)},(w={exports:{}}
).exports=C=(e={})=>{var t=e.env||process.env;return"win32"!==(e.platform||process.platform)?"PATH":Object.keys(t
).reverse().find(e=>"PATH"===e.toUpperCase())||"Path"},w.exports.default=C,qa.default),Ps=ba,xs=w.exports,js=(
I=function(e){return se(e)||se(e,!0)},/([()\][%!^"`<>&|;, *?])/g),Is=((_={}).command=function(e){return e.replace(js,
"^$1")},_.argument=function(e,t){return e=(e=`"${e=(e=(e=""+e).replace(/(\\*)"/g,'$1$1\\"')).replace(/(\\*)$/,"$1$1")}"`
).replace(js,"^$1"),t?e.replace(js,"^$1"):e},/^#!(.*)/),Ls=Da.default,Cs=(e="")=>{const t=e.match(Is);if(!t)return null;
const[r,n]=t[0].replace(/#! ?/,"").split(" ");return"env"===(e=r.split("/").pop())?n:n?e+" "+n:e},Us=qa.default,Gs=I,
Fs=_,Ms="win32"===process.platform,Ds=/\.(?:com|exe)$/i,qs=/node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i,
ks="win32"===process.platform,Bs=xa.default,$s={hookChildProcess:function(r,n){if(ks){const o=r.emit;r.emit=function(e,t
){return"exit"===e&&(e=ce(t,n))?o.call(r,"error",e):o.apply(r,arguments)}}},verifyENOENT:ce,verifyENOENTSync:function(e,
t){return ks&&1===e&&!t.file?ue(t.original,"spawnSync"):null},notFoundError:ue},Vs=(f.exports=le,f.exports.spawn=le,
f.exports.sync=function(e,t,r){e=_e(e,t,r);const n=Bs.spawnSync(e.command,e.args,e.options);
return n.error=n.error||$s.verifyENOENTSync(n.status,e),n},f.exports._parse=_e,f.exports._enoent=$s,Zi=f.exports,["env"]
),zs=Object.getOwnPropertyDescriptor(Function.prototype,"toString"),Hs=Object.getOwnPropertyDescriptor(
Function.prototype.toString,"name"),Ws=new WeakMap,Js=(t,r={})=>{function n(...e){if(Ws.set(n,++i),1===i)o=t.apply(this,
e),t=null;else if(!0===r.throw)throw new Error(`Function \`${a}\` can only be called once`);return o}if(
"function"!=typeof t)throw new TypeError("Expected a function");let o,i=0;const a=t.displayName||t.name||"<anonymous>";
var e,s,u,c,l,d,f,[p,h,{ignoreNonConfigurable:g=!1}={}]=[n,t],m=p.name;for(const v of Reflect.ownKeys(h))e=p,l=h,s=v,u=g
,"length"!==s&&"prototype"!==s&&"arguments"!==s&&"caller"!==s&&(c=Object.getOwnPropertyDescriptor(e,s),
l=Object.getOwnPropertyDescriptor(l,s),void 0!==c&&!c.configurable&&(
c.writable!==l.writable||c.enumerable!==l.enumerable||c.configurable!==l.configurable||!c.writable&&c.value!==l.value
)&&u||Object.defineProperty(e,s,l));return d=p,(f=Object.getPrototypeOf(h))!==Object.getPrototypeOf(d
)&&Object.setPrototypeOf(d,f),d=p,f=h,m=""===m?"":`with ${m.trim()}() `,m=((e,t)=>`/* Wrapped ${e}*/
`+t).bind(null,m,f.toString()),Object.defineProperty(m,"name",Hs),Object.defineProperty(d,"toString",y(y({},zs),{},{
value:m})),Ws.set(n,i),n},Ks=(Js.callCount=e=>{if(Ws.has(e))return Ws.get(e);throw new Error(
`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`)},34),Xs=[{name:"SIGHUP",number:1,
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
description:"Invalid system call",standard:"other"}],Qs=function(){const e=ve();return e.reduce(ye,{})}();{const wu=ve()
T=Array.from({length:65},(e,t)=>{var r,n=wu,o=(r=t,void 0!==(o=n.find(({name:e})=>Fa.constants.signals[e]===r)
)?o:n.find(e=>e.number===r));if(void 0===o)return{};var{name:n,description:o,supported:i,action:a,forced:s,standard:u}=o
return{[t]:{name:n,number:t,description:o,supported:i,action:a,forced:s,standard:u}}}),Object.assign({},...T)}const Ys=(
{stdout:e,stderr:t,all:r,error:n,signal:o,exitCode:i,command:a,escapedCommand:s,timedOut:u,isCanceled:c,killed:l,
parsed:{options:{timeout:d}}})=>{var f,p,h,g,m,v,y;i=null===i?void 0:i,f=void 0===(o=null===o?void 0:o
)?void 0:Qs[o].description,d=`Command ${{timedOut:d,timeout:p,errorCode:h,signal:g,signalDescription:m,exitCode:v,
isCanceled:y}={timedOut:u,timeout:d,errorCode:n&&n.code,signal:o,signalDescription:f,exitCode:i,isCanceled:c},
d?`timed out after ${p} milliseconds`:y?"was canceled":void 0!==h?"failed with "+h:void 0!==g?`was killed with ${g} (${m})`:void 0!==v?"failed with exit code "+v:"failed"}: `+a
const b=(p="[object Error]"===Object.prototype.toString.call(n))?d+`
`+n.message:d;return y=[b,t,e].filter(Boolean).join("\n"),p?(n.originalMessage=n.message,n.message=y):n=new Error(y),
n.shortMessage=b,n.command=a,n.escapedCommand=s,n.exitCode=i,n.signal=o,n.signalDescription=f,n.stdout=e,n.stderr=t,
void 0!==r&&(n.all=r),"bufferedData"in n&&delete n.bufferedData,n.failed=!0,n.timedOut=Boolean(u),n.isCanceled=c,
n.killed=l&&!u,n},Zs=["stdin","stdout","stderr"],eu=t=>{var r,e;if(t){const n=t.stdio;if(void 0===n)return Zs.map(
e=>t[e]);if(r=t,Zs.some(e=>void 0!==r[e]))throw new Error(
"It's not possible to provide `stdio` in combination with one of "+Zs.map(e=>`\`${e}\``).join(", "));if(
"string"==typeof n)return n;if(Array.isArray(n))return e=Math.max(n.length,Zs.length),Array.from({length:e},(e,t)=>n[t])
throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof n}\``)}},tu=(b={exports:{}
},(R=h={exports:{}}).exports=["SIGABRT","SIGALRM","SIGHUP","SIGINT","SIGTERM"],
"win32"!==process.platform&&R.exports.push("SIGVTALRM","SIGXCPU","SIGXFSZ","SIGUSR2","SIGTRAP","SIGSYS","SIGQUIT",
"SIGIOT"),"linux"===process.platform&&R.exports.push("SIGIO","SIGPOLL","SIGPWR","SIGSTKFLT","SIGUNUSED"),be(g=Ja.process
)?(ea=ja.default,ta=h.exports,ra=/^win/i.test(g.platform),"function"!=typeof(S=Ia.default)&&(S=S.EventEmitter),
g.__signal_exit_emitter__?m=g.__signal_exit_emitter__:((m=g.__signal_exit_emitter__=new S).count=0,m.emitted={}),
m.infinite||(m.setMaxListeners(1/0),m.infinite=!0),b.exports=function(e,t){var r;return be(Ja.process)?(ea.equal(
typeof e,"function","a callback must be provided for exit handler"),!1===aa&&sa(),r="exit",t&&t.alwaysLast&&(
r="afterexit"),t=function(){m.removeListener(r,e),0===m.listeners("exit").length&&0===m.listeners("afterexit"
).length&&na()},m.on(r,e),t):function(){}},na=function(){aa&&be(Ja.process)&&(aa=!1,ta.forEach(function(e){try{
g.removeListener(e,ia[e])}catch(e){}}),g.emit=la,g.reallyExit=ua,--m.count)},b.exports.unload=na,oa=function(e,t,r){
m.emitted[e]||(m.emitted[e]=!0,m.emit(e,t,r))},ia={},ta.forEach(function(e){ia[e]=function(){be(Ja.process
)&&g.listeners(e).length===m.count&&(na(),oa("exit",null,e),oa("afterexit",null,e),ra&&"SIGHUP"===e&&(e="SIGINT"),
g.kill(g.pid,e))}}),b.exports.signals=function(){return ta},aa=!1,sa=function(){!aa&&be(Ja.process)&&(aa=!0,m.count+=1,
ta=ta.filter(function(e){try{return g.on(e,ia[e]),!0}catch(e){return!1}}),g.emit=da,g.reallyExit=ca)},b.exports.load=sa,
ua=g.reallyExit,ca=function(e){be(Ja.process)&&(g.exitCode=e||0,oa("exit",g.exitCode,null),oa("afterexit",g.exitCode,
null),ua.call(g,g.exitCode))},la=g.emit,da=function(e,t){return"exit"===e&&be(Ja.process)?(void 0!==t&&(g.exitCode=t),
e=la.apply(this,arguments),oa("exit",g.exitCode,null),oa("afterexit",g.exitCode,null),e):la.apply(this,arguments)}
):b.exports=function(){return function(){}},fa=b.exports,(e,t,r,n)=>{var o;if([t,n,o]=[t,r.forceKillAfterTimeout,n],(
t===Wa.default.constants.signals.SIGTERM||"string"==typeof t&&"SIGTERM"===t.toUpperCase())&&!1!==n&&o){t=(({
forceKillAfterTimeout:e=!0})=>{if(!0===e)return 5e3;if(!Number.isFinite(e)||e<0)throw new TypeError(
`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);return e})(r);
const i=setTimeout(()=>{e("SIGKILL")},t);i.unref&&i.unref()}}),ru=(e,t,r)=>{e.kill(t),r(Object.assign(new Error(
"Timed out"),{timedOut:!0,signal:t}))},nu=(j={exports:{}},Ua.default.PassThrough),ou=Ca.default.constants,iu=(
P=Ua.default,Ga.default.promisify),au=iu(P.pipeline);class su extends Error{constructor(){super("maxBuffer exceeded"),
this.name="MaxBufferError"}}j.exports=fe,j.exports.buffer=(e,t)=>fe(e,y(y({},t),{},{encoding:"buffer"})),
j.exports.array=(e,t)=>fe(e,y(y({},t),{},{array:!0})),j.exports.MaxBufferError=su,pa=j.exports;
const uu=Ua.default.PassThrough,cu=(ha=function(){function t(e){return Array.isArray(e)?e.forEach(t):(n.push(e),e.once(
"end",r.bind(null,e)),e.once("error",o.emit.bind(o,"error")),e.pipe(o,{end:!1})),this}function r(t){!(n=n.filter(
function(e){return e!==t})).length&&o.readable&&o.end()}var n=[],o=new uu({objectMode:!0});return o.setMaxListeners(0),
o.add=t,o.isEmpty=function(){return 0==n.length},o.on("unpipe",r),Array.prototype.slice.call(arguments).forEach(t),o},
async(e,t)=>{if(e){e.destroy();try{return await t}catch(e){return e.bufferedData}}}),lu=(e,{encoding:t,buffer:r,
maxBuffer:n})=>{if(e&&r)return t?pa(e,{encoding:t,maxBuffer:n}):pa.buffer(e,{maxBuffer:n})},du=(async()=>{})(
).constructor.prototype,fu=["then","catch","finally"].map(e=>[e,Reflect.getOwnPropertyDescriptor(du,e)]),pu=(e,t)=>{for(
const[n,o]of fu){var r="function"==typeof t?(...e)=>Reflect.apply(o.value,t(),e):o.value.bind(t);Reflect.defineProperty(
e,n,y(y({},o),{},{value:r}))}return e},hu=(e,t=[])=>Array.isArray(t)?[e,...t]:[e],gu=/^[\w.-]+$/,mu=/"/g,
vu=e=>"string"!=typeof e||gu.test(e)?e:`"${e.replace(mu,'\\"')}"`,yu=1e8,bu=({env:r,extendEnv:n,preferLocal:o,
localDir:i,execPath:a})=>{if(n=n?y(y({},za.default.env),r):r,o){let{env:e=za.default.env}=r={env:n,cwd:i,execPath:a},
t=function(e,t){var r,n,o,i;if(null==e)return{};if(r=function(e,t){var r,n,o,i;if(null==e)return{};for(r={},
n=Object.keys(e),i=0;i<n.length;i++)o=n[i],0<=t.indexOf(o)||(r[o]=e[o]);return r}(e,t),Object.getOwnPropertySymbols)for(
i=Object.getOwnPropertySymbols(e),o=0;o<i.length;o++)n=i[o],0<=t.indexOf(n)||Object.prototype.propertyIsEnumerable.call(
e,n)&&(r[n]=e[n]);return r}(r,Vs);return o=de({env:e=y({},e)}),t.path=e[o],e[o]=function(e={}){const{
cwd:t=za.default.cwd(),path:r=za.default.env[de()],execPath:n=za.default.execPath}=e;let o,i=(
e=t instanceof URL?Ha.default.fileURLToPath(t):t,$a.default.resolve(e));const a=[];for(;o!==i;)a.push($a.default.join(i,
"node_modules/.bin")),o=i,i=$a.default.resolve(i,"..");return a.push($a.default.resolve(e,n,"..")),[...a,r].join(
$a.default.delimiter)}(t),e}return n},_u=(e,t,r)=>{return"string"==typeof t||La.Buffer.isBuffer(t)?e.stripFinalNewline?(
n="string"==typeof(e=t)?"\n":"\n".charCodeAt(),o="string"==typeof e?"\r":"\r".charCodeAt(),(e=e[e.length-1]===n?e.slice(
0,-1):e)[e.length-1]===o?e.slice(0,-1):e):t:void 0===r?void 0:"";var n,o},Eu=rs.createLogger("doExec"),
Ou="fi.hg.github.name",U=(os.initEnvFromDefaultFiles(),rs.setLogLevel(E),rs.createLogger("main"));!async function(e=[]){
try{Es.setLogLevel(c.INFO),bs.setLogLevel(c.INFO),U.debug("Loglevel as "+rs.getLogLevelString());const{scriptName:t,
parseStatus:r,exitStatus:n,errorString:o,freeArgs:i}=class{static parseArguments(e,t=[]){var r,n,o=null!=(r=t.shift()
)?r:"",i=null!=(r=t.shift())?r:"";if(!i)return{parseStatus:Ki.ERROR,exitStatus:Hi.ARGUMENT_PARSE_ERROR,nodePath:o,
scriptName:e,freeArgs:[],extraArgs:[]};if(0===t.length)return{parseStatus:Ki.ERROR,exitStatus:Hi.ARGUMENT_PARSE_ERROR,
nodePath:o,scriptName:i,freeArgs:[],extraArgs:[]};let a=!0,s=[],u=[];do{if(n=t.shift(),a)switch(function(){switch(n){
case"-h":case"--help":case 0:return 0;case"-v":case"--version":case 1:return 1;case"--":case 2:return 2}}()){case 0:
return{parseStatus:Ki.HELP,exitStatus:Hi.OK,nodePath:o,scriptName:i,freeArgs:s,extraArgs:u};case 1:return{
parseStatus:Ki.VERSION,exitStatus:Hi.OK,nodePath:o,scriptName:i,freeArgs:s,extraArgs:u};case 2:a=!1;break;default:if(a){
if(qi(n,"-"))return{errorString:"Unknown argument: "+n,parseStatus:Ki.ERROR,exitStatus:Hi.UNKNOWN_ARGUMENT,nodePath:o,
scriptName:i,freeArgs:s,extraArgs:u};s.push(n)}else u.push(n)}}while(1<=t.length);return{parseStatus:Ki.OK,
exitStatus:Hi.OK,nodePath:o,scriptName:i,freeArgs:s,extraArgs:u}}}.parseArguments(is,e);if(r===Ki.HELP||r===Ki.VERSION
)return console.log(`USAGE: ${t} [OPT(s)] ACTION [ARG(s)]

Manage git submodule states.

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
`),n;if(o)return console.error("ERROR: "+o),n;os.setupDestroyHandler(()=>{U.debug(
"Stopping command from process utils event")},e=>{U.error("Error while shutting down the service: ",e)});
const a=i.shift();switch(a.toLowerCase()){case"u":case"i":case"update":case"install":return await async function(e){
const t=e.shift();if(!t)return he(process.cwd());var e=e.shift(),r=t.substring(1).includes("@")?t.substring(1).split("@"
).pop():void 0;return async function(e,t,r){var n,o;U.debug("updateSubModule: ",e,t,r);const i=process.cwd(),{gitUrl:a,
packageName:s}=await async function(e){if(U.debug("getGitUrl: sourceUrl = ",e),e.includes(":"))return U.debug(
"getGitUrl: direct url: ",e),{gitUrl:e,packageName:e.replace(/\.git$/,"").split(":").slice(1).join(":").split("/"
).slice(1).join("/")};if((e=e.startsWith("@")?e.substring(1):e).includes("/")){const r=as+`:${e}.git`;return U.debug(
"getGitUrl: github with org: ",r),{gitUrl:r,packageName:e.split("/").slice(1).join("/")}}const t=await async function(t
){var r,n=t,o=`https://${function(){const[e,t]=n.toLowerCase().split(".").slice(0,2);return t&&e?[t,e].join("."):e}(
)}/`+"/.well-known/fi.hg.m.json";if((o=await bs.getJson(o))&&Q(o)){let e=o&&Ri(o,t)?o[t]:void 0;return e&&Q(e)&&Ri(e,Ou
)&&H(r=e[Ou])?r:(r=t.toLowerCase().split(".").slice(0,2).join("."),(e=o&&Ri(o,r)?o[r]:void 0)&&Q(e)&&Ri(e,Ou)&&H(t=e[Ou]
)?t:Ri(o,Ou)&&H(r=o[Ou])?r:void 0)}}(e),r=as+`:${t}/`+e;return U.debug(`getGitUrl: github with org "${t}": `,r),{
gitUrl:r,packageName:e}}(e);if(!a)throw new TypeError(`Could not detect git url for: "${a}"`);U.debug(
"updateSubModule: gitUrl = ",a),U.debug("updateSubModule: packageName = ",s),t=t||qa.default.resolve(qa.default.resolve(
i,"src"),s.split(".").join("/")),e=qa.default.relative(process.cwd(),t),U.debug("relativeTargetPath = ",e);let u;try{
u=await Pa.promises.stat(t),U.debug("stats: ",u)}catch(e){"ENOENT"!==(null==e?void 0:e.code)&&U.error(
"File stat error: ",t,e),u=void 0}if(o=null!=(o=null==(o=u)?void 0:o.isFile())&&o,U.debug("isFile: ",o),n=null!=(
n=null==(n=u)?void 0:n.isDirectory())&&n,U.debug("isDirectory: ",n),n)U.debug(
"Target directory already exists, we'll only update: ",t),await ge(e);else{if(void 0!==u&&void 0!==o)return U.error(
"Target file not a directory: ",t),zi.CONFLICT;n=a,o=e,U.debug("addGitSubModule: ",n,o),await pe([ss,"submodule","add",n
,o]),await zi.OK,U.debug("Initialized: ",a,e)}return n=null!=r?r:"main",U.debug("nextBranch: ",n),o=e,U.debug(
"getGitBranch: ",o),r=(await pe([ss,"rev-parse","--abbrev-ref","HEAD"],{cwd:o,stdio:"pipe"})).stdout,U.debug("stdout: ",
r),o=await r,U.debug("currentBranch: ",o),o!==n?(r=e,o=n,U.debug("setGitSubModuleBranch: ",r,o),
r=`submodule.${r}.branch`,await pe([ss,"config","-f",".gitmodules",r,o]),await zi.OK):U.debug(
"Branch already identical: ",n),await he(t),console.info(s+`@${n}:`+e),zi.OK}(t,e,r)}(i);case"r":case"remove":return i,
await zi.UNIMPLEMENTED_FEATURE}return zi.UNKNOWN_ARGUMENT}catch(e){return U.error("Fatal error: ",e),zi.FATAL_ERROR}}(
process.argv).then(e=>{process.exit(e)}).catch(e=>{console.error("Error: ",e),process.exit(1)});
