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
)t=e[r],this.set(t[0],t[1])}function k(e){e=this.__data__=new dt(e),this.size=e.size}function B(e){var t=-1,
r=null==e?0:e.length;for(this.__data__=new ft;++t<r;)this.add(e[t])}function z(n,i){function o(){var e=arguments,
t=i?i.apply(this,e):e[0],r=o.cache;return r.has(t)?r.get(t):(e=n.apply(this,e),o.cache=r.set(t,e)||r,e)}if(
"function"!=typeof n||null!=i&&"function"!=typeof i)throw new TypeError("Expected a function");return o.cache=new(
z.Cache||Dr),o}function $(e){return void 0===e}function V(e){return a(e)}function H(e){return Lo(e)}function W(e){
return Uo(e)}function J(e,t){return ei(e,t)}function K(e,t=H,r=void 0){return!!(void 0===r||Ce(n=e)&&J(Vo(n),r))&&(
n=void 0!==t?t:H,Ce(r=e)&&J(Z(r),n));var n}function X(...e){return t=>Wn(e,e=>e(t))}function Q(e){return Ce(e)}
function Y(e){if(void 0!==e&&""!==e)return""+e}function Z(e,t=H){var r;return V(e)?(r=Un(e,(e,t)=>t),Yi(r,e=>t(e))):Q(e
)?(r=Reflect.ownKeys(e),Yi(r,e=>t(e))):[]}function ee(e){if(!e.startsWith("%{")||!e.endsWith("}"))return Y(e)}
function te(e){if(W(e))switch(e){case Jo.OPTIONS:return"options";case Jo.GET:return"get";case Jo.POST:return"post";
case Jo.PUT:return"put";case Jo.DELETE:return"delete";case Jo.PATCH:return"patch"}throw new TypeError(
"Unsupported value for stringifyRequestMethod(): "+e)}function re(e){return H(t=e)||W(t)||Ao(t)||Po(t)||ne(e)||(e=t=e,
!!Ce(e)&&!(e instanceof Date)&&!Fe(e)&&!V(e)&&K(e,H,void 0)&&K(t,H,X(re,$)));var t}function ne(e){var t,[e,r=void 0,
n=void 0,i=void 0]=[e,X(re,$)];return!!a(e)&&(t=null!=(t=null==e?void 0:e.length)?t:0,!(void 0!==n&&t<n)&&!(
void 0!==i&&i<t)&&(void 0===r||J(e,r)))}function ie(t,e){var r,n=Object.keys(t);return Object.getOwnPropertySymbols&&(
r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),
n.push.apply(n,r)),n}function y(n){for(var i,e=1;e<arguments.length;e++)i=null!=arguments[e]?arguments[e]:{},e%2?ie(
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
e.options.cwd)}catch(e){}let a;try{a=xs.sync(e.command,{path:r[js({env:r})],pathExt:t?Ps.delimiter:void 0})}catch(e
){}finally{o&&process.chdir(n)}return a=a&&Ps.resolve(i?e.options.cwd:"",a)}function ue(e,t){return Object.assign(
new Error(`${t} ${e.command} ENOENT`),{code:"ENOENT",errno:"ENOENT",syscall:t+" "+e.command,path:e.command,
spawnargs:e.args})}function ce(e,t){return Bs&&1===e&&!t.file?ue(t.original,"spawn"):null}function le(e,t,r){
return e=Ee(e,t,r),t=zs.spawn(e.command,e.args,e.options),$s.hookChildProcess(t,e),t}function de(e={}){var{
env:e=process.env,platform:t=process.platform}=e;return"win32"!==t?"PATH":Object.keys(e).reverse().find(
e=>"PATH"===e.toUpperCase())||"Path"}async function fe(n,u){if(!n)throw new Error("Expected a stream");const i=(u=y({
maxBuffer:1/0},u)).maxBuffer,o=(e=>{const t=(e=y({},u)).array;let r=e.encoding;const n="buffer"===r;let i=!1;t?i=!(r||n
):r=r||"utf8",n&&(r=null);const o=new iu({objectMode:i});r&&o.setEncoding(r);let a=0;const s=[];return o.on("data",e=>{
s.push(e),i?a=s.length:a+=e.length}),o.getBufferedValue=()=>t?s:n?Buffer.concat(s,a):s.join(""),o.getBufferedLength=(
)=>a,o})();return await new Promise((e,t)=>{const r=e=>{e&&o.getBufferedLength()<=ou.MAX_LENGTH&&(
e.bufferedData=o.getBufferedValue()),t(e)};(async()=>{try{await su(n,o),e()}catch(e){r(e)}})(),o.on("data",()=>{
o.getBufferedLength()>i&&r(new uu)})}),o.getBufferedValue()}async function pe(e,t){var r=e.shift(),p=d({stdio:"inherit"}
,null!=t?t:{}),{stdout:t,stderr:r}=(Ou.debug("Executing: ",r,e),await function(t,e){var n,r,i,o,a;[r,i,o={}]=[t,e,p],r=(
a=ea._parse(r,i,o)).command,i=a.args,o=a.options,(o=y({maxBuffer:bu,buffer:!0,stripFinalNewline:!0,extendEnv:!0,
preferLocal:!1,localDir:o.cwd||Ha.default.cwd(),execPath:Ha.default.execPath,encoding:"utf8",reject:!0,cleanup:!0,
all:!1,windowsHide:!0},o)).env=_u(o),o.stdio=tu(o),"win32"===Ha.default.platform&&"cmd"===$a.default.basename(r,".exe"
)&&i.unshift("/q");const s={file:r,args:i,options:o,parsed:a},u=(r=t,i=e,gu(r,i).join(" ")),c=(o=t,a=e,gu(o,a).map(
e=>yu(e)).join(" "));if(void 0!==(r=s.options.timeout)&&(!Number.isFinite(r)||r<0))throw new TypeError(
`Expected the \`timeout\` option to be a non-negative integer, got \`${r}\` (${typeof r})`);let l;try{
l=Va.default.spawn(s.file,s.args,s.options)}catch(e){return i=new Va.default.ChildProcess,t=Promise.reject(Zs({error:e,
stdout:"",stderr:"",all:"",command:u,escapedCommand:c,parsed:s,timedOut:!1,isCanceled:!1,killed:!1})),hu(i,t)}n=l,
e=new Promise((r,t)=>{n.on("exit",(e,t)=>{r({exitCode:e,signal:t})}),n.on("error",e=>{t(e)}),n.stdin&&n.stdin.on("error"
,e=>{t(e)})}),o=((r,{timeout:n,killSignal:i="SIGTERM"},e)=>{if(0===n||void 0===n)return e;let o;var t=new Promise((e,t
)=>{o=setTimeout(()=>{nu(r,i,t)},n)}),e=e.finally(()=>{clearTimeout(o)});return Promise.race([t,e])})(l,s.options,e);
const d=(async(e,{cleanup:t,detached:r},n)=>{if(!t||r)return n;const i=pa(()=>{e.kill()});return n.finally(()=>{i()})})(
l,s.options,o),f={isCanceled:!1};return l.kill=((e,t="SIGTERM",r={})=>{var n=e(t);return ru(e,t,r,n),n}).bind(null,
l.kill.bind(l)),l.cancel=((e,t)=>{e.kill()&&(t.isCanceled=!0)}).bind(null,l,f),a=Ks(async()=>{var[{error:e,exitCode:t,
signal:r,timedOut:n},i,o,a]=await(async({stdout:t,stderr:r,all:n},{encoding:i,buffer:e,maxBuffer:o},a)=>{var s=du(t,{
encoding:i,buffer:e,maxBuffer:o}),u=du(r,{encoding:i,buffer:e,maxBuffer:o}),i=du(n,{encoding:i,buffer:e,maxBuffer:2*o});
try{return await Promise.all([a,s,u,i])}catch(e){return Promise.all([{error:e,signal:e.signal,timedOut:e.timedOut},lu(t,
s),lu(r,u),lu(n,i)])}})(l,s.options,d),i=Eu(s.options,i),o=Eu(s.options,o),a=Eu(s.options,a);if(e||0!==t||null!==r){if(
e=Zs({error:e,exitCode:t,signal:r,stdout:i,stderr:o,all:a,command:u,escapedCommand:c,parsed:s,timedOut:n,
isCanceled:f.isCanceled||!!s.options.signal&&s.options.signal.aborted,killed:l.killed}),s.options.reject)throw e;
return e}return{command:u,escapedCommand:c,exitCode:0,stdout:i,stderr:o,all:a,failed:!1,timedOut:!1,isCanceled:!1,
killed:!1}}),r=l,void 0!==(i=s.options.input)&&void 0!==r.stdin&&(
null!==i&&"object"==typeof i&&"function"==typeof i.pipe?i.pipe(r.stdin):r.stdin.end(i)),l.all=((e,{all:t})=>{if(t&&(
e.stdout||e.stderr)){const r=ga();return e.stdout&&r.add(e.stdout),e.stderr&&r.add(e.stderr),r}})(l,s.options),hu(l,a)}(
r,e));return{stdout:t,stderr:r}}async function he(e){return G.debug("initAllSubmodules"),await ge(e),G.debug(
"gitSubmoduleUpdate"),await pe([us,"submodule","update","--init","--recursive"],{cwd:e}),await Ho.OK,Ho.OK}
async function ge(e){G.debug("gitPullWithRecurseSubmodules",e);var{stdout:t,stderr:r}=await pe([us,"pull",
"--recurse-submodules"],{cwd:e,stdio:"pipe"});return r?G.error(e+": 'git pull --recurse-submodules' with errors: "+r
):"Already up to date."!==t&&G.debug(e+": 'git pull --recurse-submodules' with output: "+t),Ho.OK}async function me(e,t,
r){return G.debug("setGitSubModuleConfig: ",e,t,r),e=`submodule.${e}.`+t,await pe([us,"config","-f",".gitmodules",e,r]),
Ho.OK}function ve(e,t){return{name:"SIGRT"+(t+1),number:Xs+t,action:"terminate",
description:"Application-specific signal (realtime)",standard:"posix"}}function ye(){var e=65-Xs,e=Array.from({length:e}
,ve);return[...Qs,...e].map(Oe)}function be(e,{name:t,number:r,description:n,supported:i,action:o,forced:a,standard:s}){
return y(y({},e),{},{[t]:{name:t,number:r,description:n,supported:i,action:o,forced:a,standard:s}})}function _e(e){
return e&&"object"==typeof e&&"function"==typeof e.removeListener&&"function"==typeof e.emit&&"function"==typeof e.reallyExit&&"function"==typeof e.listeners&&"function"==typeof e.kill&&"number"==typeof e.pid&&"function"==typeof e.on
}function Ee(e,t,r){if(t&&!Array.isArray(t)&&(r=t,t=null),e={command:e,args:t=t?t.slice(0):[],options:r=Object.assign({}
,r),file:void 0,original:{command:e,args:t}},r.shell)return e;if(t=e,!Ds)return t;if((r=t).file=Fs(r),e=(
e=r.file&&function(e){var t;const r=Buffer.alloc(150);try{t=Cs.openSync(e,"r"),Cs.readSync(t,r,0,150,0),Cs.closeSync(t)
}catch(e){}return Gs(r.toString())}(r.file))?(r.args.unshift(r.file),r.command=e,Fs(r)):r.file,r=!qs.test(e),
t.options.forceShell||r){const n=ks.test(e);t.command=Us.normalize(t.command),t.command=Ms.command(t.command),
t.args=t.args.map(e=>Ms.argument(e,n)),r=[t.command].concat(t.args).join(" "),t.args=["/d","/s","/c",`"${r}"`],
t.command=process.env.comspec||"cmd.exe",t.options.windowsVerbatimArguments=!0}return t}function Oe({name:e,number:t,
description:r,action:n,forced:i=!1,standard:o}){var{signals:{[e]:a}}=Ma.constants,s=void 0!==a;return{name:e,
number:s?a:t,description:r,supported:s,action:n,forced:i,standard:o}}function we(e,t){for(var r=-1,n=null==e?0:e.length,
i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i}function Re(e,t){return e===t||e!=e&&t!=t}function Te(e,t){for(
var r=e.length;r--;)if(Xa(e[r][0],t))return r;return-1}var Se,Ne,Ae,Pe,xe,je,Ie,Le,Ce,Ge,Ue,Fe,Me,De,qe,ke,Be,ze,$e,Ve,
He,We,Je,Ke,Xe,Qe,Ye,Ze,et,tt,rt,nt,it,ot,at,st,ut,ct,lt,dt,ft,pt,ht,gt,mt,vt,yt,bt,_t,Et,a,Ot,wt,Rt,Tt,St,Nt,At,Pt,xt,
jt,It,Lt,Ct,Gt,t,Ut,Ft,Mt,Dt,qt,kt,Bt,zt,$t,Vt,Ht,Wt,Jt,Kt,Xt,Qt,Yt,Zt,er,tr,rr,nr,ir,or,ar,sr,ur,cr,lr,dr,fr,pr,hr,gr,
mr,vr,yr,br,_r,Er,Or,wr,Rr,Tr,Sr,Nr,Ar,Pr,xr,jr,Ir,Lr,Cr,Gr,Ur,Fr,Mr,Dr,qr,kr,Br,zr,$r,Vr,Hr,Wr,Jr,Kr,Xr,Qr,Yr,Zr,en,tn,
rn,nn,on,an,sn,un,cn,ln,dn,fn,pn,hn,gn,mn,r,vn,yn,bn,_n,En,On,wn,Rn,Tn,Sn,Nn,An,Pn,xn,jn,In,Ln,Cn,Gn,Un,Fn,Mn,Dn,qn,kn,
Bn,zn,$n,Vn,Hn,Wn,Jn,Kn,Xn,Qn,Yn,Zn,ei,ti,ri,ni,ii,oi,ai,si,ui,ci,li,di,fi,pi,hi,gi,mi,vi,yi,bi,_i,Ei,Oi,wi,Ri,Ti,Si,Ni,
Ai,Pi,xi,ji,Ii,Li,Ci,Gi,Ui,Fi,Mi,Di,qi,ki,Bi,zi,$i,Vi,Hi,Wi,Ji,Ki,Xi,Qi,Yi,Zi,eo,to,ro,no,io,oo,ao,n,i,s,so,uo,co,lo,fo,
po,ho,go,mo,vo,yo,bo,_o,Eo,Oo,wo,Ro,To,So,No,Ao,Po,xo,jo,Io,Lo,Co,Go,Uo,Fo,Mo,Do,qo,ko,Bo,zo,$o,Vo,u,c,Ho,Wo,Jo,l,Ko,Xo,
f,Qo,Yo,Zo,p,ea,h,g,ta,ra,na,m,ia,oa,aa,sa,ua,ca,la,da,fa,pa,ha,ga,v,b,ma,va,_,ya,E,O,ba,_a,w,R,T,S,Ea,Oa,wa,N,Ra,Ta,Sa,
Na,Aa,Pa,xa=require("fs"),ja=require("path"),Ia=require("querystring"),La=require("url"),Ca=require("node:buffer"),
Ga=require("node:path"),Ua=require("node:child_process"),Fa=require("node:process"),A=require("child_process"),
P=require("node:url"),Ma=require("os"),x=require("node:os"),Da=require("assert"),j=require("events"),I=require("buffer")
,L=require("stream"),C=require("util"),qa=e(xa),ka=e(ja),Ba=F(Ia),za=e(La),$a=e(Ga),Va=e(Ua),Ha=e(Fa),ja=e(A),Wa=e(P),
Ja=e(x),Ia=e(Da),La=e(j),Ga=e(I),Ua=e(L),Fa=e(C),
Ka="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
,Xa=Re,Qa=Te,Ya=Array.prototype.splice,Za=Te,es=Te,ts=Te;M.prototype.clear=function(){this.__data__=[],this.size=0},
M.prototype.delete=function(e){var t=this.__data__;return!((e=Qa(t,e))<0||(e==t.length-1?t.pop():Ya.call(t,e,1),
--this.size,0))},M.prototype.get=function(e){var t=this.__data__;return(e=Za(t,e))<0?void 0:t[e][1]},
M.prototype.has=function(e){return-1<es(this.__data__,e)},M.prototype.set=function(e,t){var r=this.__data__,n=ts(r,e);
return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},Se=A=M,P=function(){this.__data__=new Se,this.size=0},x=function(
e){var t=this.__data__,e=t.delete(e);return this.size=t.size,e},Da=function(e){return this.__data__.get(e)},j=function(e
){return this.__data__.has(e)},I="object"==typeof Ka&&Ka&&Ka.Object===Object&&Ka,
L="object"==typeof self&&self&&self.Object===Object&&self,L=(C=I||L||Function("return this")()).Symbol,
p=Object.prototype,Ne=p.hasOwnProperty,Ae=p.toString,Pe=L?L.toStringTag:void 0,p=Object.prototype,xe=p.toString,
je=function(e){var t,r,n=Ne.call(e,Pe),i=e[Pe];try{t=!(e[Pe]=void 0)}catch(e){}return r=Ae.call(e),t&&(
n?e[Pe]=i:delete e[Pe]),r},Ie=function(e){return xe.call(e)},Le=L?L.toStringTag:void 0,Ge=p=function(e){
return null==e?void 0===e?"[object Undefined]":"[object Null]":(Le&&Le in Object(e)?je:Ie)(e)},Ue=Ce=function(e){
var t=typeof e;return null!=e&&("object"==t||"function"==t)},Fe=function(e){return!!Ue(e)&&("[object Function]"==(e=Ge(e
))||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e)},v=C["__core-js_shared__"],
v=/[^.]+$/.exec(v&&v.keys&&v.keys.IE_PROTO||""),Me=v?"Symbol(src)_1."+v:"",v=Function.prototype,De=v.toString,qe=Fe,
ke=function(e){return!!Me&&Me in e},Be=Ce,ze=v=function(e){if(null!=e){try{return De.call(e)}catch(e){}try{return e+""
}catch(e){}}return""},s=/[\\^$.*+?()[\]{}|]/g,$e=/^\[object .+?Constructor\]$/,S=Function.prototype,i=Object.prototype,
S=S.toString,i=i.hasOwnProperty,Ve=RegExp("^"+S.call(i).replace(s,"\\$&").replace(
/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),He=function(e){return!(!Be(e)||ke(e))&&(qe(e
)?Ve:$e).test(ze(e))},We=function(e,t){return null==e?void 0:e[t]},i=(S=function(e,t){return e=We(e,t),He(e)?e:void 0})(
C,"Map"),s=S(Object,"create"),Ke=Je=s,r=Object.prototype,Xe=r.hasOwnProperty,Qe=s,r=Object.prototype,Ye=r.hasOwnProperty
,Ze=s,r=function(e){return e=this.has(e)&&delete this.__data__[e],this.size-=e?1:0,e},s=function(e){var t,
r=this.__data__;return Ke?"__lodash_hash_undefined__"===(t=r[e])?void 0:t:Xe.call(r,e)?r[e]:void 0},n=function(e){
var t=this.__data__;return Qe?void 0!==t[e]:Ye.call(t,e)},T=function(e,t){var r=this.__data__;
return this.size+=this.has(e)?0:1,r[e]=Ze&&void 0===t?"__lodash_hash_undefined__":t,this},D.prototype.clear=function(){
this.__data__=Je?Je(null):{},this.size=0},D.prototype.delete=r,D.prototype.get=s,D.prototype.has=n,D.prototype.set=T,
et=D,tt=A,rt=i,nt=function(e){var t=typeof e;
return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e},st=at=ot=it=function(e,t){
return e=e.__data__,nt(t)?e["string"==typeof t?"string":"hash"]:e.map},r=function(e){return e=it(this,e).delete(e),
this.size-=e?1:0,e},s=function(e){return ot(this,e).get(e)},n=function(e){return at(this,e).has(e)},T=function(e,t){
var r=st(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},q.prototype.clear=function(){this.size=0,
this.__data__={hash:new et,map:new(rt||tt),string:new et}},q.prototype.delete=r,q.prototype.get=s,q.prototype.has=n,
q.prototype.set=T,ct=i,lt=r=q,dt=ut=A,s=x,n=Da,T=j,A=function(e,t){var r,n=this.__data__;if(n instanceof ut){if(
r=n.__data__,!ct||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new lt(r)}return n.set(e,t),
this.size=n.size,this},k.prototype.clear=P,k.prototype.delete=s,k.prototype.get=n,k.prototype.has=T,k.prototype.set=A,
x=k,ft=r,Da=function(e){return this.__data__.has(e)},B.prototype.add=B.prototype.push=function(e){
return this.__data__.set(e,"__lodash_hash_undefined__"),this},B.prototype.has=Da,pt=B,ht=j=function(e,t){for(var r=-1,
n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},gt=function(e,t){return e.has(t)},P=C.Uint8Array,mt=P,
vt=Re,yt=s=function(e,t,r,n,i,o){var a,s,u,c,l,d,f,p=1&r,h=e.length,g=t.length;if(h!=g&&!(p&&h<g))return!1;if(g=o.get(e)
,a=o.get(t),g&&a)return g==t&&a==e;for(s=-1,u=!0,c=2&r?new pt:void 0,o.set(e,t),o.set(t,e);++s<h;){if(l=e[s],d=t[s],
void 0!==(f=n?p?n(d,l,s,t,e,o):n(l,d,s,e,t,o):f)){if(f)continue;u=!1;break}if(c){if(!ht(t,function(e,t){if(!gt(c,t)&&(
l===e||i(l,e,r,n,o)))return c.push(t)})){u=!1;break}}else if(l!==d&&!i(l,d,r,n,o)){u=!1;break}}return o.delete(e),
o.delete(t),u},bt=function(e){var r=-1,n=Array(e.size);return e.forEach(function(e,t){n[++r]=[t,e]}),n},_t=n=function(e
){var t=-1,r=Array(e.size);return e.forEach(function(e){r[++t]=e}),r},T=L?L.prototype:void 0,Et=T?T.valueOf:void 0,
A=function(e,t,r,n,i,o,a){var s,u;switch(r){case"[object DataView]":if(
e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":
return!(e.byteLength!=t.byteLength||!o(new mt(e),new mt(t)));case"[object Boolean]":case"[object Date]":
case"[object Number]":return vt(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;
case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":s=bt;case"[object Set]":return s=s||_t,!!(
e.size==t.size||1&n)&&((u=a.get(e))?u==t:(n|=2,a.set(e,t),u=yt(s(e),s(t),n,i,o,a),a.delete(e),u));case"[object Symbol]":
if(Et)return Et.call(e)==Et.call(t)}return!1},Da=function(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];
return e},P=Array.isArray,Ot=Da,wt=a=P,T=function(e,t,r){return t=t(e),wt(e)?t:Ot(t,r(e))},Rt=P=function(e,t){for(var r,
n=-1,i=null==e?0:e.length,o=0,a=[];++n<i;)t(r=e[n],n,e)&&(a[o++]=r);return a},R=Object.prototype,
Tt=R.propertyIsEnumerable,R=(St=Object.getOwnPropertySymbols)?function(t){return null==t?[]:(t=Object(t),Rt(St(t),
function(e){return Tt.call(t,e)}))}:function(){return[]},Ri=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);
return n},Nt=p,w=function(e){return At(e)&&"[object Arguments]"==Nt(e)},Pt=At=_a=function(e){
return null!=e&&"object"==typeof e},f=Object.prototype,xt=f.hasOwnProperty,jt=f.propertyIsEnumerable,f=w(function(){
return arguments}())?w:function(e){return Pt(e)&&xt.call(e,"callee")&&!jt.call(e,"callee")},E=(ba=(ba=(E=(E=(w={
exports:{}}).exports)&&!E.nodeType&&E)&&w&&!w.nodeType&&w)&&ba.exports===E?C.Buffer:void 0)?ba.isBuffer:void 0,
w.exports=E||function(){return!1},It=/^(?:0|[1-9]\d*)$/,ba=function(e,t){var r=typeof e;return!!(
t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&It.test(e))&&-1<e&&e%1==0&&e<t},Lt=p,Ct=E=function(e){
return"number"==typeof e&&-1<e&&e%1==0&&e<=9007199254740991},Gt=_a,(t={}
)["[object Float32Array]"]=t["[object Float64Array]"]=t["[object Int8Array]"]=t["[object Int16Array]"]=t["[object Int32Array]"]=t["[object Uint8Array]"]=t["[object Uint8ClampedArray]"]=t["[object Uint16Array]"]=t["[object Uint32Array]"]=!0
,
t["[object Arguments]"]=t["[object Array]"]=t["[object ArrayBuffer]"]=t["[object Boolean]"]=t["[object DataView]"]=t["[object Date]"]=t["[object Error]"]=t["[object Function]"]=t["[object Map]"]=t["[object Number]"]=t["[object Object]"]=t["[object RegExp]"]=t["[object Set]"]=t["[object String]"]=t["[object WeakMap]"]=!1
,N=function(e){return Gt(e)&&Ct(e.length)&&!!t[Lt(e)]},ya=function(t){return function(e){return t(e)}},_=(_=(b=Ut={
exports:{}}).exports)&&!_.nodeType&&_,_=(ma=_&&b&&!b.nodeType&&b)&&ma.exports===_,va=_&&I.process,_=function(){try{
return ma&&ma.require&&ma.require("util").types||va&&va.binding&&va.binding("util")}catch(e){}}(),b.exports=_,_=(b=(
I=Ut.exports)&&I.isTypedArray)?ya(b):N,Ft=Ri,Mt=f,Dt=a,qt=w.exports,kt=ba,Bt=I=_,b=Object.prototype,zt=b.hasOwnProperty,
$t=Object.prototype,Ta=Object.keys,Sa=Object,Vt=function(e){var t=e&&e.constructor;return e===(
"function"==typeof t&&t.prototype||$t)},Ht=function(e){return Ta(Sa(e))},N=Object.prototype,Wt=N.hasOwnProperty,Jt=Fe,
Kt=E,Xt=function(e,t){var r,n=Dt(e),i=!n&&Mt(e),o=!n&&!i&&qt(e),a=!n&&!i&&!o&&Bt(e),s=n||i||o||a,u=s?Ft(e.length,String
):[],c=u.length;for(r in e)!t&&!zt.call(e,r)||s&&("length"==r||o&&("offset"==r||"parent"==r)||a&&(
"buffer"==r||"byteLength"==r||"byteOffset"==r)||kt(r,c))||u.push(r);return u},Qt=function(e){var t,r;if(!Vt(e)
)return Ht(e);for(r in t=[],Object(e))Wt.call(e,r)&&"constructor"!=r&&t.push(r);return t},Yt=Ri=function(e){
return null!=e&&Kt(e.length)&&!Jt(e)},Zt=T,er=R,tr=_=function(e){return(Yt(e)?Xt:Qt)(e)},rr=function(e){return Zt(e,tr,
er)},b=Object.prototype,nr=b.hasOwnProperty,N=function(e,t,r,n,i,o){var a,s,u,c,l,d,f,p,h,g=1&r,m=rr(e),v=m.length;if(
v!=rr(t).length&&!g)return!1;for(a=v;a--;)if(s=m[a],!(g?s in t:nr.call(t,s)))return!1;if(p=o.get(e),h=o.get(t),p&&h
)return p==t&&h==e;for(u=!0,o.set(e,t),o.set(t,e),c=g;++a<v;){if(l=e[s=m[a]],d=t[s],!(void 0===(f=n?g?n(d,l,s,t,e,o):n(l
,d,s,e,t,o):f)?l===d||i(l,d,r,n,o):f)){u=!1;break}c=c||"constructor"==s}return u&&!c&&(p=e.constructor)!=(
h=t.constructor)&&"constructor"in e&&"constructor"in t&&!(
"function"==typeof p&&p instanceof p&&"function"==typeof h&&h instanceof h)&&(u=!1),o.delete(e),o.delete(t),u},T=S(C,
"DataView"),R=i,b=S(C,"Promise"),h=i=S(C,"Set"),C=S(C,"WeakMap"),ir=p,ar=(or=v)(v=T),sr=or(R),ur=or(b),cr=or(h),lr=or(C)
,T=ir,(v&&"[object DataView]"!=T(new v(new ArrayBuffer(1)))||R&&"[object Map]"!=T(new R)||b&&"[object Promise]"!=T(
b.resolve())||h&&"[object Set]"!=T(new h)||C&&"[object WeakMap]"!=T(new C))&&(T=function(e){var t=ir(e);if(e=(
e="[object Object]"==t?e.constructor:void 0)?or(e):"")switch(e){case ar:return"[object DataView]";case sr:
return"[object Map]";case ur:return"[object Promise]";case cr:return"[object Set]";case lr:return"[object WeakMap]"}
return t}),dr=x,fr=s,pr=A,hr=N,gr=T,mr=a,vr=w.exports,yr=I,br="[object Arguments]",_r="[object Array]",
Er="[object Object]",v=Object.prototype,Or=v.hasOwnProperty,wr=function(e,t,r,n,i,o){var a=mr(e),s=mr(t),u=a?_r:gr(e),
s=s?_r:gr(t),c=(u=u==br?Er:u)==Er,l=(s=s==br?Er:s)==Er;if((s=u==s)&&vr(e)){if(!vr(t))return!1;c=!(a=!0)}return s&&!c?(
o=o||new dr,a||yr(e)?fr(e,t,r,n,i,o):pr(e,t,u,r,n,i,o)):1&r||(a=c&&Or.call(e,"__wrapped__"),u=l&&Or.call(t,"__wrapped__"
),!a&&!u)?s&&(o=o||new dr,hr(e,t,r,n,i,o)):i(a?e.value():e,u?t.value():t,r,n,o=o||new dr)},Tr=x,Sr=R=function e(t,r,n,i,
o){return t===r||(null==t||null==r||!Rr(t)&&!Rr(r)?t!=t&&r!=r:wr(t,r,n,i,e,o))},Nr=Ce,Ar=b=function(e){return e==e&&!Nr(
e)},Pr=_,xr=function(e,t,r,n){var i,o,a,s,u,c,l=r.length,d=l,f=!n;if(null==e)return!d;for(e=Object(e);l--;)if(i=r[l],
f&&i[2]?i[1]!==e[i[0]]:!(i[0]in e))return!1;for(;++l<d;)if(a=e[o=(i=r[l])[0]],s=i[1],f&&i[2]){if(void 0===a&&!(o in e)
)return!1}else if(u=new Tr,!(void 0===(c=n?n(a,s,o,e,t,u):c)?Sr(s,a,3,n,u):c))return!1;return!0},jr=function(e){for(
var t,r,n=Pr(e),i=n.length;i--;)r=e[t=n[i]],n[i]=[t,r,Ar(r)];return n},Ir=h=function(t,r){return function(e){
return null!=e&&e[t]===r&&(void 0!==r||t in Object(e))}},C=function(t){var r=jr(t);return 1==r.length&&r[0][2]?Ir(
r[0][0],r[0][1]):function(e){return e===t||xr(e,t,r)}},Lr=p,Cr=Rr=_a,Gr=a,Ur=s=function(e){return"symbol"==typeof e||Cr(
e)&&"[object Symbol]"==Lr(e)},Fr=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Mr=/^\w*$/,A=function(e,t){if(Gr(e)
)return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!Ur(e))||Mr.test(e)||!Fr.test(e
)||null!=t&&e in Object(t)},Dr=r,z.Cache=Dr,
qr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,kr=/\\(\\)?/g,Ra=(
N=z(function(e){var i=[];return 46===e.charCodeAt(0)&&i.push(""),e.replace(qr,function(e,t,r,n){i.push(r?n.replace(kr,
"$1"):t||e)}),i},function(e){return 500===Ra.size&&Ra.clear(),e})).cache,Br=we,zr=a,$r=s,T=L?L.prototype:void 0,
Vr=T?T.toString:void 0,Hr=w=function e(t){if("string"==typeof t)return t;if(zr(t))return Br(t,e)+"";if($r(t)
)return Vr?Vr.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},Kr=N,Xr=I=function(e){return null==e?"":Hr(e)},Qr=s,
tn=Yr=function(e,t){return Wr(e)?e:Jr(e,t)?[e]:Kr(Xr(e))},rn=f,an=E,un=function(e,t){return null!=e&&t in Object(e)},
cn=v=function(e,t,r){for(var n,i,o=(t=tn(t,e)).length,a=!(n=-1);++n<o&&(i=sn(t[n]),a=null!=e&&r(e,i));)e=e[i];
return a||++n!=o?a:!!(o=null==e?0:e.length)&&an(o)&&on(i,o)&&(nn(e)||rn(e))},ln=R,dn=function(e,t,r){return void 0===(
e=null==e?void 0:en(e,t))?r:e},fn=function(e,t){return null!=e&&cn(e,t,un)},hn=b,gn=h,vn=en=x=function(e,t){for(var r=0,
n=(t=Yr(t,e)).length;null!=e&&r<n;)e=e[Zr(t[r++])];return r&&r==n?e:void 0},yn=function(t){return function(e){
return null==e?void 0:e[t]}},bn=function(t){return function(e){return vn(e,t)}},_n=pn=Jr=A,En=mn=sn=Zr=function(e){if(
"string"==typeof e||Qr(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},On=C,wn=function(r,n){return pn(r)&&hn(n
)?gn(mn(r),n):function(e){var t=dn(e,r);return void 0===t&&t===n?fn(e,r):ln(n,t,3)}},Rn=r=function(e){return e},
Tn=nn=Wr=a,Sn=function(e){return _n(e)?yn(En(e)):bn(e)},Nn=function(e,t,r){for(var n,i=-1,o=Object(e),a=r(e),
s=a.length;s--&&!1!==t(o[n=a[++i]],n,o););return e},An=_,In=we,Cn=T=function(e,n){var i=-1,o=jn(e)?Array(e.length):[];
return xn(e,function(e,t,r){o[++i]=n(e,t,r)}),o},Un=function(e,t){return(Gn(e)?In:Cn)(e,Ln(t))},Mn=Re,Dn=jn=Pn=Ri,
qn=on=ba,kn=Ce,Bn=j,$n=function(e,n){var i;return Fn(e,function(e,t,r){return!(i=n(e,t,r))}),!!i},Wn=function(e,t,r){
var n=Vn(e)?Bn:$n;return r&&Hn(e,t,r)&&(t=void 0),n(e,zn(t))},Jn=Fn=xn=N=function(e,t){if(null==e)return e;if(!Pn(e)
)return e&&Nn(e,t,An);for(var r=e.length,n=-1,i=Object(e);++n<r&&!1!==t(i[n],n,i););return e},Kn=function(e,t){for(
var r=-1,n=null==e?0:e.length;++r<n;)if(!t(e[r],r,e))return!1;return!0},Xn=function(e,n){var i=!0;return Jn(e,function(e
,t,r){return i=!!n(e,t,r)}),i},Qn=zn=Ln=E=function(e){return"function"==typeof e?e:null==e?Rn:"object"==typeof e?Tn(e
)?wn(e[0],e[1]):On(e):Sn(e)},Yn=Vn=Gn=a,Zn=Hn=R=function(e,t,r){if(!kn(r))return!1;var n=typeof t;return!!(
"number"==n?Dn(r)&&qn(t,r.length):"string"==n&&t in r)&&Mn(r[t],e)},ei=function(e,t,r){var n=Yn(e)?Kn:Xn;return r&&Zn(e,
t,r)&&(t=void 0),n(e,Qn(t))},ti=S,b=function(){try{var e=ti(Object,"defineProperty");return e({},"",{}),e}catch(e){}}(),
ri=f,ni=a,ii=L?L.isConcatSpreadable:void 0,ai=function(e){return ni(e)||ri(e)||!!(ii&&e&&e[ii])},si=oi=Da,
ui=h=function e(t,r,n,i,o){var a,s=-1,u=t.length;for(n=n||ai,o=o||[];++s<u;)a=t[s],0<r&&n(a)?1<r?e(a,r-1,n,i,o):oi(o,a
):i||(o[o.length]=a);return o},ci=function(e,t){var r=-1,n=e.length;for(t=t||Array(n);++r<n;)t[r]=e[r];return t},li=a,
di=function(){var e,t,r,n=arguments.length;if(!n)return[];for(e=Array(n-1),t=arguments[0],r=n;r--;)e[r-1]=arguments[r];
return si(li(t)?ci(t):[t],ui(e,1))},fi=/\s/,pi=function(e){for(var t=e.length;t--&&fi.test(e.charAt(t)););return t},
hi=/^\s+/,gi=A=function(e){return e&&e.slice(0,pi(e)+1).replace(hi,"")},mi=Ce,vi=s,yi=/^[-+]0x[0-9a-f]+$/i,
bi=/^0b[01]+$/i,_i=/^0o[0-7]+$/i,Ei=parseInt,Oi=function(e){var t;return"number"==typeof e?e:vi(e)?NaN:(mi(e)&&(
t="function"==typeof e.valueOf?e.valueOf():e,e=mi(t)?t+"":t),"string"!=typeof e?0===e?e:+e:(e=gi(e),(t=bi.test(e)
)||_i.test(e)?Ei(e.slice(2),t?2:8):yi.test(e)?NaN:+e))},wi=function(e){return e?(e=Oi(e)
)===1/0||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0},C=function(e){var t=(e=wi(e))%1;
return e==e?t?e-t:e:0},Ri=function(e,t,r){var n,i=-1,o=e.length;for((r=o<r?o:r)<0&&(r+=o),o=r<(t=t<0?o<-t?0:o+t:t
)?0:r-t>>>0,t>>>=0,n=Array(o);++i<o;)n[i]=e[i+t];return n},Ti=function(e,t,r,n){for(var i=e.length,o=r+(n?1:-1
);n?o--:++o<i;)if(t(e[o],o,e))return o;return-1},Si=function(e){return e!=e},Ni=function(e,t,r){for(var n=r-1,
i=e.length;++n<i;)if(e[n]===t)return n;return-1},ba=function(e,t,r){return t==t?Ni(e,t,r):Ti(e,Si,r)},i&&n(new i([,-0])
)[1],Ai=s,Pi=function(e,t){var r,n,i,o,a,s,u,c;if(e!==t){if(r=void 0!==e,n=null===e,i=e==e,o=Ai(e),a=void 0!==t,
s=null===t,u=t==t,c=Ai(t),!s&&!c&&!o&&t<e||o&&a&&u&&!s&&!c||n&&a&&u||!r&&u||!i)return 1;if(
!n&&!o&&!c&&e<t||c&&r&&i&&!n&&!o||s&&r&&i||!a&&i||!u)return-1}return 0},xi=we,ji=x,Ii=E,Li=T,Ci=function(e,t){
var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e},Gi=ya,Ui=function(e,t,r){for(var n,i=-1,o=e.criteria,
a=t.criteria,s=o.length,u=r.length;++i<s;)if(n=Pi(o[i],a[i]))return u<=i?n:n*("desc"==r[i]?-1:1);return e.index-t.index}
,Fi=r,Mi=a,Di=function(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:
return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)},qi=Math.max,ki=function(e){
return function(){return e}},j=(Bi=b)?function(e,t){return Bi(e,"toString",{configurable:!0,enumerable:!1,value:ki(t),
writable:!0})}:r,zi=Date.now,Ea=j,$i=h,Vi=function(e,n,r){var i;return n=n.length?xi(n,function(t){return Mi(t
)?function(e){return ji(e,1===t.length?t[0]:t)}:t}):[Fi],i=-1,n=xi(n,Gi(Ii)),e=Li(e,function(t,e,r){return{criteria:xi(n
,function(e){return e(t)}),index:++i,value:t}}),Ci(e,function(e,t){return Ui(e,t,r)})},Hi=R,function(){var e=zi(),
t=16-e+ +wa;if(wa=e,0<t){if(800<=++Oa)return}else Oa=0;Ea.apply(void 0,arguments)}((Na=S=function(e,t){if(null==e
)return[];var r=t.length;return 1<r&&Hi(e,t[0],t[1])?t=[]:2<r&&Hi(t[0],t[1],t[2])&&(t=[t[0]]),Vi(e,$i(t,1),[])},Aa=void(
wa=Oa=0),Pa=r,Aa=qi(void 0===Aa?Na.length-1:Aa,0),function(){for(var e,t=arguments,r=-1,n=qi(t.length-Aa,0),i=Array(n
);++r<n;)i[r]=t[Aa+r];for(r=-1,e=Array(Aa+1);++r<Aa;)e[r]=t[r];return e[Aa]=Pa(i),Di(Na,this,e)}),S+""),Ji=P,
Ki=function(e,n){var i=[];return Wi(e,function(e,t,r){n(e,t,r)&&i.push(e)}),i},Xi=E,Yi=function(e,t){return(Qi(e)?Ji:Ki
)(e,Xi(t))},Zi=r,eo=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e},to=Wi=N,
ro=function(e){return"function"==typeof e?e:Zi},no=Qi=a,io=function(e,t){return(no(e)?eo:to)(e,ro(t))},oo=Ri,f=function(
e,t,r){var n=e.length;return r=void 0===r?n:r,!t&&n<=r?e:oo(e,t,r)},ao=RegExp(
"[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),L=function(e){return ao.test(e)},
(Da=Ut.exports)&&Da.isRegExp,n=function(e){return e.split("")},
i="[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:"+[
"[^\\ud800-\\udfff]","(?:\\ud83c[\\udde6-\\uddff]){2}","[\\ud800-\\udbff][\\udc00-\\udfff]"].join("|"
)+")[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?)*",s="(?:"+[
"[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]?","[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
"(?:\\ud83c[\\udde6-\\uddff]){2}","[\\ud800-\\udbff][\\udc00-\\udfff]","[\\ud800-\\udfff]"].join("|")+")",so=RegExp(
"\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|"+s+i,"g"),uo=n,co=L,lo=function(e){return e.match(so)||[]},
po=fo=ba,ho=w,go=A,mo=f,vo=function(e,t){for(var r=e.length;r--&&-1<fo(t,e[r],0););return r},yo=function(e,t){for(
var r=-1,n=e.length;++r<n&&-1<po(t,e[r],0););return r},bo=function(e){return(co(e)?lo:uo)(e)},_o=I,Eo=function(e,t,r){
return(e=_o(e))&&(r||void 0===t)?go(e):e&&(t=ho(t))?(r=bo(e),e=bo(t),t=yo(r,e),e=vo(r,e)+1,mo(r,t,e).join("")):e},
x=Object.prototype,Oo=x.hasOwnProperty,wo=function(e,t){return null!=e&&Oo.call(e,t)},Ro=v,To=function(e,t){
return null!=e&&Ro(e,t,wo)},Ao=function(e){return!0===e||!1===e||No(e)&&"[object Boolean]"==So(e)},Po=function(e){
return null===e},jo=a,Lo=function(e){return"string"==typeof e||!jo(e)&&Io(e)&&"[object String]"==xo(e)},Co=xo=So=p,
Go=Io=No=_a,Uo=function(e){return"number"==typeof e||Go(e)&&"[object Number]"==Co(e)},Fo=function(e,t,r){return e==e&&(
void 0!==r&&(e=e<=r?e:r),void 0!==t&&(e=t<=e?e:t)),e},Mo=w,Do=C,qo=I,ko=function(e,t,r){return e=qo(e),r=null==r?0:Fo(
Do(r),0,e.length),t=Mo(t),e.slice(r,r+t.length)==t},Bo=we,zo=function(t,e){return Bo(e,function(e){return t[e]})},$o=_,
Vo=function(e){return null==e?[]:zo(e,$o(e))};class rs{constructor(e,t){o(this,"_logger",void 0),o(this,"name",void 0),
o(this,"_level",void 0),this.name=e,this._logger=t,this._level=void 0}getLogLevel(){var e;return null!=(e=this._level
)?e:this._logger.getLogLevel()}setLogLevel(e){return this._level=e,this}debug(...e){(
void 0===this._level||this._level<=c.DEBUG)&&this._logger.debug(`[${this.name}]`,...e)}info(...e){(
void 0===this._level||this._level<=c.INFO)&&this._logger.info(`[${this.name}]`,...e)}warn(...e){(
void 0===this._level||this._level<=c.WARN)&&this._logger.warn(`[${this.name}]`,...e)}error(...e){(
void 0===this._level||this._level<=c.ERROR)&&this._logger.error(`[${this.name}]`,...e)}}class ns{static setLogLevel(e){
return e&&(this._level=e),this}static getLogLevel(){return this._level}static getLogLevelString(){var e=this._level;
switch(e){case u.DEBUG:return"DEBUG";case u.INFO:return"INFO";case u.WARN:return"WARN";case u.ERROR:return"ERROR";
case u.NONE:return"NONE";default:return"Unknown:"+e}}static setLogger(e){if(!e)throw new TypeError(
"The logger was not defined");this._logger=e}static debug(...e){this._level<=c.DEBUG&&this._logger.debug(...e)}
static info(...e){this._level<=c.INFO&&this._logger.info(...e)}static warn(...e){this._level<=c.WARN&&this._logger.warn(
...e)}static error(...e){this._level<=c.ERROR&&this._logger.error(...e)}static createLogger(e){return new rs(e,ns)}}o(ns
,"Level",c=u={DEBUG:0,0:"DEBUG",INFO:1,1:"INFO",WARN:2,2:"WARN",ERROR:3,3:"ERROR",NONE:4,4:"NONE"}),o(ns,"_level",
c.DEBUG),o(ns,"_logger",console);const is=ns.createLogger("ProcessUtils");class os{static getArguments(){
return process.argv.slice(2)}static parseEnvFileLine(e,t){if(t.indexOf("=")<0)return t.length&&(e[t]=""),e;
const r=t.split("=");return t=r.shift(),(t=Eo(t)).length&&(e[t]=r.join("=").trim()),e}static parseEnvFile(e){
const t=qa.default.readFileSync(e,{encoding:"utf-8"}),r=t.split("\n");return r.reduce(os.parseEnvFileLine,{})}
static initEnvFromFile(e){e=os.parseEnvFile(e),process.env=d(d({},e),process.env)}static initEnvFromDefaultFiles(){
var e=ka.default.join(process.cwd(),".env");qa.default.existsSync(e)&&os.initEnvFromFile(e)}static setupDestroyHandler(r
,n){let i=!1;var e=t=>e=>{os._printErrors(t,e);try{if(i)return;i=!0,r()}catch(e){n(e)}};process.on("exit",e("exit")),
process.on("SIGTERM",e("SIGTERM")),process.on("SIGINT",e("SIGINT")),process.on("SIGUSR1",e("SIGUSR1")),process.on(
"SIGUSR2",e("SIGUSR2")),process.on("uncaughtException",e("uncaughtException"))}static _printErrors(e,t){try{t?is.error(
`Closing process because "${e}" event: `,t):"exit"===e?is.debug(`Closing process because "${e}" event`):is.info(
`Closing process because "${e}" event`)}catch(e){console.error("Error while printing errors: ",e)}}}ee("0.0.4"),
ya=null!=(T=ee(""))?T:"hgm",j=null!=(b=ee(""))?b:"",ee("production"),ee("2022-03-05T16:15:46.579Z"),"".startsWith("%{"
)&&"".endsWith("}"),E=null!=(P=function(e){if(e){if(function(){switch(e){case u.DEBUG:case u.INFO:case u.WARN:
case u.ERROR:case u.NONE:return 1;default:return}}())return e;switch(e=(""+e).toUpperCase()){case"ALL":case"DEBUG":
return u.DEBUG;case"INFO":return u.INFO;case"WARN":case"WARNING":return u.WARN;case"ERR":case"ERROR":return u.ERROR;
case"FALSE":case"OFF":case"QUIET":case"SILENT":case"NONE":return u.NONE;default:return}}}(null!=(S=Y(null==(h=process
)||null==(R=h.env)?void 0:R.LOG_LEVEL))?S:Y(j)))?P:u.INFO;const as=null!=(Ri=Y(null==(r=process)||null==(N=r.env
)?void 0:N.COMMAND_NAME))?Ri:ya,ss="git@github.com",us="git",cs=(Wo=Ho={OK:0,0:"OK",GENERAL_ERRORS:1,1:"GENERAL_ERRORS",
MISUSE_OF_SHELL_BUILTINS:2,2:"MISUSE_OF_SHELL_BUILTINS",ARGUMENT_PARSE_ERROR:3,3:"ARGUMENT_PARSE_ERROR",
UNKNOWN_ARGUMENT:4,4:"UNKNOWN_ARGUMENT",UNIMPLEMENTED_FEATURE:5,5:"UNIMPLEMENTED_FEATURE",FATAL_ERROR:6,6:"FATAL_ERROR",
CONFLICT:7,7:"CONFLICT",USAGE:64,64:"USAGE",DATAERR:65,65:"DATAERR",NOINPUT:66,66:"NOINPUT",NOUSER:67,67:"NOUSER",
NOHOST:68,68:"NOHOST",UNAVAILABLE:69,69:"UNAVAILABLE",SOFTWARE:70,70:"SOFTWARE",OSERR:71,71:"OSERR",OSFILE:72,
72:"OSFILE",CANTCREAT:73,73:"CANTCREAT",IOERR:74,74:"IOERR",TEMPFAIL:75,75:"TEMPFAIL",PROTOCOL:76,76:"PROTOCOL",
NOPERM:77,77:"NOPERM",CONFIG:78,78:"CONFIG",COMMAND_INVOKED_CANNOT_EXECUTE:126,126:"COMMAND_INVOKED_CANNOT_EXECUTE",
COMMAND_NOT_FOUND:127,127:"COMMAND_NOT_FOUND",INVALID_ARGUMENT_TO_EXIT:128,128:"INVALID_ARGUMENT_TO_EXIT",
FATAL_SIGNAL_RANGE_START:129,129:"FATAL_SIGNAL_RANGE_START",FATAL_SIGNAL_RANGE_END:254,254:"FATAL_SIGNAL_RANGE_END",
EXIT_STATUS_OUT_OF_RANGE:255,255:"EXIT_STATUS_OUT_OF_RANGE"},O=Jo={OPTIONS:0,0:"OPTIONS",GET:1,1:"GET",POST:2,2:"POST",
PUT:3,3:"PUT",DELETE:4,4:"DELETE",PATCH:5,5:"PATCH"},"WINDOW"===(ba=null!=(L=null!=(s=null==(Ut=process)||null==(
Da=Ut.env)?void 0:Da.NOR_REQUEST_CLIENT_MODE)?s:null==(i=process)||null==(n=i.env
)?void 0:n.REACT_APP_REQUEST_CLIENT_MODE)?L:"")||!("undefined"==typeof window||!window.fetch)),ls="NODE"===ba||!cs;
class ds{static async getRequestDataAsBuffer(n){return new Promise((e,t)=>{const r=[];n.on("data",e=>{try{r.push(e)
}catch(e){t(e)}}),n.on("end",()=>{try{e(Buffer.concat(r))}catch(e){t(e)}})})}static async getRequestDataAsString(e,
t="utf8"){const r=await ds.getRequestDataAsBuffer(e);return r.toString(t)}static async getRequestDataAsFormUrlEncoded(e
){if(""!==(e=await ds.getRequestDataAsString(e)))return Ba.parse(e)}static async getRequestDataAsJson(e){if(""!==(
e=await ds.getRequestDataAsString(e)))return JSON.parse(e)}}(A=l={Continue:100,100:"Continue",SwitchingProtocols:101,
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
A[A.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",Ko={ERROR:"error"};class fs extends Error{
constructor(e,t=void 0,r=void 0,n=void 0,i=void 0){super(t||function(e){switch(e){case l.Continue:return"Continue";
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
return e<400?"HTTP Status":"HTTP Error"}}(e)),o(this,"status",void 0),o(this,"method",void 0),o(this,"url",void 0),o(
this,"body",void 0),o(this,"__proto__",void 0),t=new.target.prototype,Object.setPrototypeOf?Object.setPrototypeOf(this,t
):this.__proto__=t,this.status=e,this.method=r,this.url=n,this.body=i}valueOf(){return this.status}toString(){
return this.status+" "+this.message}toJSON(){return{type:Ko.ERROR,status:this.status,message:this.message}}
getStatusCode(){return this.status}getMethod(){return this.method}getUrl(){return this.url}getBody(){return this.body}}
const ps=ls?require("fs").promises:void 0,hs=ns.createLogger("NodeRequestClient");class gs{static setLogLevel(e){
hs.setLogLevel(e)}constructor(e,t){o(this,"_http",void 0),o(this,"_https",void 0),this._http=e,this._https=t}
async jsonRequest(e,t,r,n){switch(e){case O.GET:return this._getJson(t,r,n);case O.POST:return this._postJson(t,r,n);
case O.PATCH:return this._patchJson(t,r,n);case O.PUT:return this._putJson(t,r,n);case O.DELETE:return this._deleteJson(
t,r,n);default:throw new TypeError("[Node]RequestClient: Unsupported method: "+e)}}async _checkSocketFile(t){try{
const e=await ps.stat(t);return!!e.isSocket()}catch(e){if("ENOTDIR"===(t=null==e?void 0:e.code))return void hs.debug(
"_checkSocketFile: ENOTDIR: ",e);if("ENOENT"===t)return void hs.debug("_checkSocketFile: ENOENT: ",e);throw hs.error(
`_checkSocketFile: Error "${t}" passed on: `,e),e}}async _findSocketFile(e){var t=await this._checkSocketFile(e);
return!0===t?e:!1!==t&&"/"!==(t=ka.default.dirname(e))&&t!==e?this._findSocketFile(t):void 0}async _httpRequest(o,a,e){
var t;const s=e?JSON.stringify(e)+"\n":void 0,u=new za.default.URL(o);let c;const l=null!=(
e=null===u||void 0===u?void 0:u.protocol)?e:"";if("unix:"===l||"socket:"===l){
const r=null!==u&&void 0!==u&&u.pathname?null===u||void 0===u?void 0:u.pathname:"/";if("/"===r)throw new TypeError(
"No socket path found for unix protocol URL: "+o);if(!(e=await this._findSocketFile(r)))throw new TypeError(
"No socket path found for unix protocol URL: "+o);t=""+(e.length<r.length?r.substr(e.length):"")+(
"?"!==u.search?u.search:""),a=d(d({},a),{},{socketPath:e,path:t}),o="",c=this._http
}else c="https:"===l?this._https:this._http;return new Promise((t,r)=>{let n=!1;try{if(!c)throw new Error(
"HTTP module not defined. This error should not happen.");var i;let e;o&&(a=d(d({},a),{},{hostname:u.hostname,
port:null!=(i=null!==u&&void 0!==u&&u.port?parseInt(u.port,10):void 0)?i:"https:"===l?443:80,path:u.pathname+u.search}))
,(e=c.request(a,e=>{n?hs.warn("Warning! Request had already ended when the response was received."):(n=!0,t(e))})).on(
"error",e=>{n?(hs.warn("Warning! Request had already ended when the response was received."),hs.debug(
"Error from event: ",e)):(hs.debug("Passing on error from event: ",e),n=!0,r(e))}),s&&e.write(s),e.end()}catch(e){n?(
hs.warn("Warning! Request had already ended when the response was received."),hs.debug("Exception: ",e)):(hs.debug(
"Passing on error: ",e),n=!0,r(e))}})}async _request(e,t,r,n){return r=await this._httpRequest(t,r,n),
n=await ds.getRequestDataAsJson(r),{method:e,url:t,statusCode:null!=(e=null==r?void 0:r.statusCode)?e:0,
headers:r.headers,body:n}}async _getJson(e,t,r){const n={method:"GET",headers:{"Content-Type":"application/json"}};
return t&&(n.headers=d(d({},n.headers),t)),this._request(O.GET,e,n,r).then(gs._successResponse)}async _putJson(e,t,r){
const n={method:"PUT",headers:{"Content-Type":"application/json"}};return t&&(n.headers=d(d({},n.headers),t)),
this._request(O.PUT,e,n,r).then(gs._successResponse)}async _postJson(e,t,r){const n={method:"POST",headers:{
"Content-Type":"application/json"}};return t&&(n.headers=d(d({},n.headers),t)),this._request(O.POST,e,n,r).then(
gs._successResponse)}async _patchJson(e,t,r){const n={method:"PATCH",headers:{"Content-Type":"application/json"}};
return t&&(n.headers=d(d({},n.headers),t)),this._request(O.PATCH,e,n,r).then(gs._successResponse)}async _deleteJson(e,t,
r){const n={method:"DELETE",headers:{"Content-Type":"application/json"}};return t&&(n.headers=d(d({},n.headers),t)),
this._request(O.DELETE,e,n,r).then(gs._successResponse)}static async _successResponse(e){
var t=null==e?void 0:e.statusCode;if(t<200||400<=t)throw hs.error(`Unsuccessful response with status ${t}: `,e),new fs(t
,`Error ${t} for ${te(e.method)} `+e.url,e.method,e.url,e.body);return e.body}}class ms{constructor(e){o(this,"_fetch",
void 0),this._fetch=e}jsonRequest(e,t,r,n){switch(e){case O.GET:return this._getJson(t,r,n);case O.POST:
return this._postJson(t,r,n);case O.PUT:return this._putJson(t,r,n);case O.DELETE:return this._deleteJson(t,r,n);
default:throw new TypeError("[Fetch]RequestClient: Unsupported method: "+e)}}_getJson(e,t,r){const n={method:"GET",
mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},credentials:"same-origin"};return t&&(
n.headers=d(d({},n.headers),t)),r&&(n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>ms._successResponse(e,O.GET))}
_putJson(e,t,r){const n={method:"PUT",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},
credentials:"same-origin"};return t&&(n.headers=d(d({},n.headers),t)),r&&(n.body=JSON.stringify(r)),this._fetch(e,n
).then(e=>ms._successResponse(e,O.PUT))}_postJson(e,t,r){const n={method:"POST",mode:"cors",cache:"no-cache",headers:{
"Content-Type":"application/json"},credentials:"same-origin"};return t&&(n.headers=d(d({},n.headers),t)),r&&(
n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>ms._successResponse(e,O.POST))}_deleteJson(e,t,r){const n={
method:"DELETE",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},credentials:"same-origin"};
return t&&(n.headers=d(d({},n.headers),t)),r&&(n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>ms._successResponse(e,
O.DELETE))}static _successResponse(e,t){const r=e.status;if(!e.ok||r<200||400<=r){const n=e.url,
i=`${r} ${e.statusText} for ${te(t)} `+n;return e.json().then(e=>{throw new fs(r,i,t,n,e)})}return e.json()}}
const vs=ls?require("http"):void 0,ys=ls?require("https"):void 0,bs=ns.createLogger("RequestClient");class _s{
static setLogLevel(e){bs.setLogLevel(e),gs.setLogLevel(e)}static async jsonRequest(e,t,r,n){
return this._client.jsonRequest(e,t,r,n)}static async getJson(e,t){return this._client.jsonRequest(O.GET,e,t)}
static async postJson(e,t,r){return bs.debug(".postJson: ",e,t,r),this._client.jsonRequest(O.POST,e,r,t)}
static async patchJson(e,t,r){return bs.debug(".patchJson: ",e,t,r),this._client.jsonRequest(O.PATCH,e,r,t)}
static async putJson(e,t,r){return bs.debug(".putJson: ",e,t,r),this._client.jsonRequest(O.PUT,e,r,t)}
static async deleteJson(e,t,r){return bs.debug(".deleteJson: ",e,r,t),this._client.jsonRequest(O.DELETE,e,t,r)}
static _initClient(){if(cs)return bs.debug("Detected browser environment"),new ms(window.fetch.bind(window));if(ls
)return new gs(vs,ys);throw new TypeError("Could not detect request client implementation")}}o(_s,"_client",
_s._initClient()),Xo={OK:0,0:"OK",ERROR:1,1:"ERROR",HELP:2,2:"HELP",VERSION:3,3:"VERSION"};const Es=ns.createLogger(
"Headers");class Os{static setLogLevel(e){Es.setLogLevel(e)}constructor(e){o(this,"_value",void 0),o(this,
"_uninitializedValue",void 0),this._value=void 0,this._uninitializedValue=e}_initializeValue(){var t=this._value,
r=this._uninitializedValue;try{r&&(this._uninitializedValue=void 0,this.addAll(r))}catch(e){throw this._value=t,
this._uninitializedValue=r,e}}clear(){this._value={},this._uninitializedValue=void 0}add(e,t){
this._uninitializedValue&&this._initializeValue(),Es.debug("add header: ",e,t),e=e.toLowerCase();var r=this._value&&To(
this._value,e)?this._value[e]:void 0;void 0===this._value?this._value={[e]:t}:void 0!==r?ne(r)?this._value=d(d({},
this._value),{},{[e]:di([],r,[t])}):this._value=d(d({},this._value),{},{[e]:[r,t]}):this._value=d(d({},this._value),{},{
[e]:t})}containsKey(e){return this._uninitializedValue&&this._initializeValue(),e=e.toLowerCase(),To(this._value,e)}
isEmpty(){this._uninitializedValue&&this._initializeValue();var e=this._value;return!e||0===Z(e).length}keySet(){
this._uninitializedValue&&this._initializeValue();const t=new Set;var e;return void 0!==this._value&&(e=Z(this._value),
io(e,e=>{t.add(e)})),t}getValue(e){if(this._uninitializedValue&&this._initializeValue(),this._value
)return e=e.toLowerCase(),To(this._value,e)?this._value[e]:void 0}getFirst(e){
return this._uninitializedValue&&this._initializeValue(),ne(e=this.getValue(e))?e.length?e[0]:void 0:e}getHost(){
return this._uninitializedValue&&this._initializeValue(),this.getFirst("host")}addAll(e,t){if(
this._uninitializedValue&&this._initializeValue(),H(e)){const r=e;if(!V(t))throw new TypeError(
"Headers.addAll signature must be (string, string[]) or (HeadersObject)");io(t,e=>{this.add(r,e)})}else{const n=e;io(Z(n
),t=>{var e=n[t];ne(e)?io(e,e=>{this.add(t,e)}):void 0!==e&&this.add(t,e)})}}remove(e){
this._uninitializedValue&&this._initializeValue(),e=e.toLowerCase();var t=this.getValue(e);const r=d({},this._value);
return r&&To(r,e)&&delete r[e],this._value=r,t}set(e,t){this._uninitializedValue&&this._initializeValue(),
e=e.toLowerCase(),void 0===this._value?this._value={[e]:t}:this._value=d(d({},this._value),{},{[e]:t})}setAll(t){
this._uninitializedValue&&this._initializeValue(),io(Z(t),e=>{this.set(e,t[e])})}valueOf(){var e;
return this._uninitializedValue&&this._initializeValue(),null!=(e=this._value)?e:void 0}toString(){
this._uninitializedValue&&this._initializeValue();const r=this._value;if(!r||this.isEmpty())return"Headers()";var e=Z(r)
const t=Un(e,e=>{const t=r[e];return t?V(t)?e+": "+t.map(e=>0<=t.indexOf(";")||0<=t.indexOf(",")?`"${t}"`:t).join(", "
):0<=t.indexOf(";")?`${e}: "${t}"`:e+": "+t:""+e});return`Headers(${t.join("; ")})`}clone(){
return this._uninitializedValue&&this._initializeValue(),new Os(this._value?d({},this._value):void 0)}}f={exports:{}},(
x=function(r,n,i){Qo.stat(r,function(e,t){i(e,!e&&oe(t,r,n))})}).sync=function(e,t){return oe(Qo.statSync(e),e,t)},
Qo=qa.default,(v=function(e,r,n){Yo.stat(e,function(e,t){n(e,!e&&ae(t,r))})}).sync=function(e,t){return ae(Yo.statSync(e
),t)},Yo=qa.default,Zo="win32"===process.platform||Ka.TESTING_WINDOWS?x:v,(p=function e(t,i,r){if(
"function"==typeof i&&(r=i,i={}),!r){if("function"!=typeof Promise)throw new TypeError("callback not provided");
return new Promise(function(r,n){e(t,i||{},function(e,t){e?n(e):r(t)})})}Zo(t,i||{},function(e,t){e&&(
"EACCES"===e.code||i&&i.ignoreErrors)&&(e=null,t=!1),r(e,t)})}).sync=function(e,t){try{return Zo.sync(e,t||{})}catch(e){
if(t&&t.ignoreErrors||"EACCES"===e.code)return!1;throw e}};
const ws="win32"===process.platform||"cygwin"===process.env.OSTYPE||"msys"===process.env.OSTYPE,Rs=ka.default,
Ts=ws?";":":",Ss=p,Ns=e=>Object.assign(new Error("not found: "+e),{code:"ENOENT"}),As=(e,t)=>{var r=t.colon||Ts,
n=e.match(/\//)||ws&&e.match(/\\/)?[""]:[...ws?[process.cwd()]:[],...(t.path||process.env.PATH||"").split(r)];
const i=ws?t.pathExt||process.env.PATHEXT||".EXE;.CMD;.BAT;.COM":"",o=ws?i.split(r):[""];return ws&&-1!==e.indexOf("."
)&&""!==o[0]&&o.unshift(""),{pathEnv:n,pathExt:o,pathExtExe:i}},Ps=((_a=(o,s,t)=>{"function"==typeof s&&(t=s,s={}),
s=s||{};const{pathEnv:a,pathExt:u,pathExtExe:c}=As(o,s),l=[],d=i=>new Promise((e,t)=>{if(i===a.length
)return s.all&&l.length?e(l):t(Ns(o));const r=a[i];var t=/^".*"$/.test(r)?r.slice(1,-1):r,n=Rs.join(t,o),
t=!t&&/^\.[\\\/]/.test(o)?o.slice(0,2)+n:n;e(f(t,i,0))}),f=(i,o,a)=>new Promise((r,e)=>{if(a===u.length)return r(d(o+1))
const n=u[a];Ss(i+n,{pathExt:c},(e,t)=>{if(!e&&t){if(!s.all)return r(i+n);l.push(i+n)}return r(f(i,o,a+1))})});
return t?d(0).then(e=>t(null,e),t):d(0)}).sync=(t,r)=>{r=r||{};var n,i,o,a,{pathEnv:s,pathExt:u,pathExtExe:c}=As(t,r);
const l=[];for(let e=0;e<s.length;e++){const d=s[e];n=/^".*"$/.test(d)?d.slice(1,-1):d,i=Rs.join(n,t),
o=!n&&/^\.[\\\/]/.test(t)?t.slice(0,2)+i:i;for(let e=0;e<u.length;e++){a=o+u[e];try{if(Ss.sync(a,{pathExt:c})){if(!r.all
)return a;l.push(a)}}catch(e){}}}if(r.all&&l.length)return l;if(r.nothrow)return null;throw Ns(t)},(w={exports:{}}
).exports=C=(e={})=>{var t=e.env||process.env;return"win32"!==(e.platform||process.platform)?"PATH":Object.keys(t
).reverse().find(e=>"PATH"===e.toUpperCase())||"Path"},w.exports.default=C,ka.default),xs=_a,js=w.exports,Is=(
I=function(e){return se(e)||se(e,!0)},/([()\][%!^"`<>&|;, *?])/g),Ls=((_={}).command=function(e){return e.replace(Is,
"^$1")},_.argument=function(e,t){return e=(e=`"${e=(e=(e=""+e).replace(/(\\*)"/g,'$1$1\\"')).replace(/(\\*)$/,"$1$1")}"`
).replace(Is,"^$1"),t?e.replace(Is,"^$1"):e},/^#!(.*)/),Cs=qa.default,Gs=(e="")=>{const t=e.match(Ls);if(!t)return null;
const[r,n]=t[0].replace(/#! ?/,"").split(" ");return"env"===(e=r.split("/").pop())?n:n?e+" "+n:e},Us=ka.default,Fs=I,
Ms=_,Ds="win32"===process.platform,qs=/\.(?:com|exe)$/i,ks=/node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i,
Bs="win32"===process.platform,zs=ja.default,$s={hookChildProcess:function(r,n){if(Bs){const i=r.emit;r.emit=function(e,t
){return"exit"===e&&(e=ce(t,n))?i.call(r,"error",e):i.apply(r,arguments)}}},verifyENOENT:ce,verifyENOENTSync:function(e,
t){return Bs&&1===e&&!t.file?ue(t.original,"spawnSync"):null},notFoundError:ue},Vs=(f.exports=le,f.exports.spawn=le,
f.exports.sync=function(e,t,r){e=Ee(e,t,r);const n=zs.spawnSync(e.command,e.args,e.options);
return n.error=n.error||$s.verifyENOENTSync(n.status,e),n},f.exports._parse=Ee,f.exports._enoent=$s,ea=f.exports,["env"]
),Hs=Object.getOwnPropertyDescriptor(Function.prototype,"toString"),Ws=Object.getOwnPropertyDescriptor(
Function.prototype.toString,"name"),Js=new WeakMap,Ks=(t,r={})=>{function n(...e){if(Js.set(n,++o),1===o)i=t.apply(this,
e),t=null;else if(!0===r.throw)throw new Error(`Function \`${a}\` can only be called once`);return i}if(
"function"!=typeof t)throw new TypeError("Expected a function");let i,o=0;const a=t.displayName||t.name||"<anonymous>";
var e,s,u,c,l,d,f,[p,h,{ignoreNonConfigurable:g=!1}={}]=[n,t],m=p.name;for(const v of Reflect.ownKeys(h))e=p,l=h,s=v,u=g
,"length"!==s&&"prototype"!==s&&"arguments"!==s&&"caller"!==s&&(c=Object.getOwnPropertyDescriptor(e,s),
l=Object.getOwnPropertyDescriptor(l,s),void 0!==c&&!c.configurable&&(
c.writable!==l.writable||c.enumerable!==l.enumerable||c.configurable!==l.configurable||!c.writable&&c.value!==l.value
)&&u||Object.defineProperty(e,s,l));return d=p,(f=Object.getPrototypeOf(h))!==Object.getPrototypeOf(d
)&&Object.setPrototypeOf(d,f),d=p,f=h,m=""===m?"":`with ${m.trim()}() `,m=((e,t)=>`/* Wrapped ${e}*/
`+t).bind(null,m,f.toString()),Object.defineProperty(m,"name",Ws),Object.defineProperty(d,"toString",y(y({},Hs),{},{
value:m})),Js.set(n,o),n},Xs=(Ks.callCount=e=>{if(Js.has(e))return Js.get(e);throw new Error(
`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`)},34),Qs=[{name:"SIGHUP",number:1,
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
description:"Invalid system call",standard:"other"}],Ys=function(){const e=ye();return e.reduce(be,{})}();{const Ru=ye()
T=Array.from({length:65},(e,t)=>{var r,n=Ru,i=(r=t,void 0!==(i=n.find(({name:e})=>Ma.constants.signals[e]===r)
)?i:n.find(e=>e.number===r));if(void 0===i)return{};var{name:n,description:i,supported:o,action:a,forced:s,standard:u}=i
return{[t]:{name:n,number:t,description:i,supported:o,action:a,forced:s,standard:u}}}),Object.assign({},...T)}const Zs=(
{stdout:e,stderr:t,all:r,error:n,signal:i,exitCode:o,command:a,escapedCommand:s,timedOut:u,isCanceled:c,killed:l,
parsed:{options:{timeout:d}}})=>{var f,p,h,g,m,v,y;o=null===o?void 0:o,f=void 0===(i=null===i?void 0:i
)?void 0:Ys[i].description,d=`Command ${{timedOut:d,timeout:p,errorCode:h,signal:g,signalDescription:m,exitCode:v,
isCanceled:y}={timedOut:u,timeout:d,errorCode:n&&n.code,signal:i,signalDescription:f,exitCode:o,isCanceled:c},
d?`timed out after ${p} milliseconds`:y?"was canceled":void 0!==h?"failed with "+h:void 0!==g?`was killed with ${g} (${m})`:void 0!==v?"failed with exit code "+v:"failed"}: `+a
const b=(p="[object Error]"===Object.prototype.toString.call(n))?d+`
`+n.message:d;return y=[b,t,e].filter(Boolean).join("\n"),p?(n.originalMessage=n.message,n.message=y):n=new Error(y),
n.shortMessage=b,n.command=a,n.escapedCommand=s,n.exitCode=o,n.signal=i,n.signalDescription=f,n.stdout=e,n.stderr=t,
void 0!==r&&(n.all=r),"bufferedData"in n&&delete n.bufferedData,n.failed=!0,n.timedOut=Boolean(u),n.isCanceled=c,
n.killed=l&&!u,n},eu=["stdin","stdout","stderr"],tu=t=>{var r,e;if(t){const n=t.stdio;if(void 0===n)return eu.map(
e=>t[e]);if(r=t,eu.some(e=>void 0!==r[e]))throw new Error(
"It's not possible to provide `stdio` in combination with one of "+eu.map(e=>`\`${e}\``).join(", "));if(
"string"==typeof n)return n;if(Array.isArray(n))return e=Math.max(n.length,eu.length),Array.from({length:e},(e,t)=>n[t])
throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof n}\``)}},ru=(b={exports:{}
},(R=h={exports:{}}).exports=["SIGABRT","SIGALRM","SIGHUP","SIGINT","SIGTERM"],
"win32"!==process.platform&&R.exports.push("SIGVTALRM","SIGXCPU","SIGXFSZ","SIGUSR2","SIGTRAP","SIGSYS","SIGQUIT",
"SIGIOT"),"linux"===process.platform&&R.exports.push("SIGIO","SIGPOLL","SIGPWR","SIGSTKFLT","SIGUNUSED"),_e(g=Ka.process
)?(ta=Ia.default,ra=h.exports,na=/^win/i.test(g.platform),"function"!=typeof(S=La.default)&&(S=S.EventEmitter),
g.__signal_exit_emitter__?m=g.__signal_exit_emitter__:((m=g.__signal_exit_emitter__=new S).count=0,m.emitted={}),
m.infinite||(m.setMaxListeners(1/0),m.infinite=!0),b.exports=function(e,t){var r;return _e(Ka.process)?(ta.equal(
typeof e,"function","a callback must be provided for exit handler"),!1===sa&&ua(),r="exit",t&&t.alwaysLast&&(
r="afterexit"),t=function(){m.removeListener(r,e),0===m.listeners("exit").length&&0===m.listeners("afterexit"
).length&&ia()},m.on(r,e),t):function(){}},ia=function(){sa&&_e(Ka.process)&&(sa=!1,ra.forEach(function(e){try{
g.removeListener(e,aa[e])}catch(e){}}),g.emit=da,g.reallyExit=ca,--m.count)},b.exports.unload=ia,oa=function(e,t,r){
m.emitted[e]||(m.emitted[e]=!0,m.emit(e,t,r))},aa={},ra.forEach(function(e){aa[e]=function(){_e(Ka.process
)&&g.listeners(e).length===m.count&&(ia(),oa("exit",null,e),oa("afterexit",null,e),na&&"SIGHUP"===e&&(e="SIGINT"),
g.kill(g.pid,e))}}),b.exports.signals=function(){return ra},sa=!1,ua=function(){!sa&&_e(Ka.process)&&(sa=!0,m.count+=1,
ra=ra.filter(function(e){try{return g.on(e,aa[e]),!0}catch(e){return!1}}),g.emit=fa,g.reallyExit=la)},b.exports.load=ua,
ca=g.reallyExit,la=function(e){_e(Ka.process)&&(g.exitCode=e||0,oa("exit",g.exitCode,null),oa("afterexit",g.exitCode,
null),ca.call(g,g.exitCode))},da=g.emit,fa=function(e,t){return"exit"===e&&_e(Ka.process)?(void 0!==t&&(g.exitCode=t),
e=da.apply(this,arguments),oa("exit",g.exitCode,null),oa("afterexit",g.exitCode,null),e):da.apply(this,arguments)}
):b.exports=function(){return function(){}},pa=b.exports,(e,t,r,n)=>{var i;if([t,n,i]=[t,r.forceKillAfterTimeout,n],(
t===Ja.default.constants.signals.SIGTERM||"string"==typeof t&&"SIGTERM"===t.toUpperCase())&&!1!==n&&i){t=(({
forceKillAfterTimeout:e=!0})=>{if(!0===e)return 5e3;if(!Number.isFinite(e)||e<0)throw new TypeError(
`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);return e})(r);
const o=setTimeout(()=>{e("SIGKILL")},t);o.unref&&o.unref()}}),nu=(e,t,r)=>{e.kill(t),r(Object.assign(new Error(
"Timed out"),{timedOut:!0,signal:t}))},iu=(j={exports:{}},Ua.default.PassThrough),ou=Ga.default.constants,au=(
P=Ua.default,Fa.default.promisify),su=au(P.pipeline);class uu extends Error{constructor(){super("maxBuffer exceeded"),
this.name="MaxBufferError"}}j.exports=fe,j.exports.buffer=(e,t)=>fe(e,y(y({},t),{},{encoding:"buffer"})),
j.exports.array=(e,t)=>fe(e,y(y({},t),{},{array:!0})),j.exports.MaxBufferError=uu,ha=j.exports;
const cu=Ua.default.PassThrough,lu=(ga=function(){function t(e){return Array.isArray(e)?e.forEach(t):(n.push(e),e.once(
"end",r.bind(null,e)),e.once("error",i.emit.bind(i,"error")),e.pipe(i,{end:!1})),this}function r(t){!(n=n.filter(
function(e){return e!==t})).length&&i.readable&&i.end()}var n=[],i=new cu({objectMode:!0});return i.setMaxListeners(0),
i.add=t,i.isEmpty=function(){return 0==n.length},i.on("unpipe",r),Array.prototype.slice.call(arguments).forEach(t),i},
async(e,t)=>{if(e){e.destroy();try{return await t}catch(e){return e.bufferedData}}}),du=(e,{encoding:t,buffer:r,
maxBuffer:n})=>{if(e&&r)return t?ha(e,{encoding:t,maxBuffer:n}):ha.buffer(e,{maxBuffer:n})},fu=(async()=>{})(
).constructor.prototype,pu=["then","catch","finally"].map(e=>[e,Reflect.getOwnPropertyDescriptor(fu,e)]),hu=(e,t)=>{for(
const[n,i]of pu){var r="function"==typeof t?(...e)=>Reflect.apply(i.value,t(),e):i.value.bind(t);Reflect.defineProperty(
e,n,y(y({},i),{},{value:r}))}return e},gu=(e,t=[])=>Array.isArray(t)?[e,...t]:[e],mu=/^[\w.-]+$/,vu=/"/g,
yu=e=>"string"!=typeof e||mu.test(e)?e:`"${e.replace(vu,'\\"')}"`,bu=1e8,_u=({env:r,extendEnv:n,preferLocal:i,
localDir:o,execPath:a})=>{if(n=n?y(y({},Ha.default.env),r):r,i){let{env:e=Ha.default.env}=r={env:n,cwd:o,execPath:a},
t=function(e,t){var r,n,i,o;if(null==e)return{};if(r=function(e,t){var r,n,i,o;if(null==e)return{};for(r={},
n=Object.keys(e),o=0;o<n.length;o++)i=n[o],0<=t.indexOf(i)||(r[i]=e[i]);return r}(e,t),Object.getOwnPropertySymbols)for(
o=Object.getOwnPropertySymbols(e),i=0;i<o.length;i++)n=o[i],0<=t.indexOf(n)||Object.prototype.propertyIsEnumerable.call(
e,n)&&(r[n]=e[n]);return r}(r,Vs);return i=de({env:e=y({},e)}),t.path=e[i],e[i]=function(e={}){const{
cwd:t=Ha.default.cwd(),path:r=Ha.default.env[de()],execPath:n=Ha.default.execPath}=e;let i,o=(
e=t instanceof URL?Wa.default.fileURLToPath(t):t,$a.default.resolve(e));const a=[];for(;i!==o;)a.push($a.default.join(o,
"node_modules/.bin")),i=o,o=$a.default.resolve(o,"..");return a.push($a.default.resolve(e,n,"..")),[...a,r].join(
$a.default.delimiter)}(t),e}return n},Eu=(e,t,r)=>{return"string"==typeof t||Ca.Buffer.isBuffer(t)?e.stripFinalNewline?(
n="string"==typeof(e=t)?"\n":"\n".charCodeAt(),i="string"==typeof e?"\r":"\r".charCodeAt(),(e=e[e.length-1]===n?e.slice(
0,-1):e)[e.length-1]===i?e.slice(0,-1):e):t:void 0===r?void 0:"";var n,i},Ou=ns.createLogger("doExec"),
wu="fi.hg.github.org",G=(os.initEnvFromDefaultFiles(),ns.setLogLevel(E),ns.createLogger("main"));!async function(e=[]){
try{Os.setLogLevel(c.INFO),_s.setLogLevel(c.INFO),G.debug("Loglevel as "+ns.getLogLevelString());const{scriptName:t,
parseStatus:r,exitStatus:n,errorString:i,freeArgs:o}=class{static parseArguments(e,t=[]){var r,n,i=null!=(r=t.shift()
)?r:"",o=null!=(r=t.shift())?r:"";if(!o)return{parseStatus:Xo.ERROR,exitStatus:Wo.ARGUMENT_PARSE_ERROR,nodePath:i,
scriptName:e,freeArgs:[],extraArgs:[]};if(0===t.length)return{parseStatus:Xo.ERROR,exitStatus:Wo.ARGUMENT_PARSE_ERROR,
nodePath:i,scriptName:o,freeArgs:[],extraArgs:[]};let a=!0,s=[],u=[];do{if(n=t.shift(),a)switch(function(){switch(n){
case"-h":case"--help":case 0:return 0;case"-v":case"--version":case 1:return 1;case"--":case 2:return 2}}()){case 0:
return{parseStatus:Xo.HELP,exitStatus:Wo.OK,nodePath:i,scriptName:o,freeArgs:s,extraArgs:u};case 1:return{
parseStatus:Xo.VERSION,exitStatus:Wo.OK,nodePath:i,scriptName:o,freeArgs:s,extraArgs:u};case 2:a=!1;break;default:if(a){
if(ko(n,"-"))return{errorString:"Unknown argument: "+n,parseStatus:Xo.ERROR,exitStatus:Wo.UNKNOWN_ARGUMENT,nodePath:i,
scriptName:o,freeArgs:s,extraArgs:u};s.push(n)}else u.push(n)}}while(1<=t.length);return{parseStatus:Xo.OK,
exitStatus:Wo.OK,nodePath:i,scriptName:o,freeArgs:s,extraArgs:u}}}.parseArguments(as,e);if(r===Xo.HELP||r===Xo.VERSION
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
`),n;if(i)return console.error("ERROR: "+i),n;os.setupDestroyHandler(()=>{G.debug(
"Stopping command from process utils event")},e=>{G.error("Error while shutting down the service: ",e)});
const a=o.shift();switch(a.toLowerCase()){case"u":case"i":case"update":case"install":return await async function(e){
const t=e.shift();if(!t)return he(process.cwd());var e=e.shift(),r=t.substring(1).includes("@")?t.substring(1).split("@"
).pop():void 0;return async function(e,t,r){var n,i;G.debug("updateSubModule: ",e,t,r);const o=process.cwd(),{gitUrl:a,
packageName:s}=await async function(e){if(G.debug("getGitUrl: sourceUrl = ",e),e.includes(":"))return G.debug(
"getGitUrl: direct url: ",e),{gitUrl:e,packageName:e.replace(/\.git$/,"").split(":").slice(1).join(":").split("/"
).slice(1).join("/")};if((e=e.startsWith("@")?e.substring(1):e).includes("/")){const r=ss+`:${e}.git`;return G.debug(
"getGitUrl: github with org: ",r),{gitUrl:r,packageName:e.split("/").slice(1).join("/")}}const t=await async function(t
){var r,n=t,i="https://"+function(){const[e,t]=n.toLowerCase().split(".").slice(0,2);return t&&e?[t,e].join("."):e}(
)+"/.well-known/fi.hg.m.json",i=(G.debug("getGitOrganization: wellKnownUrl = ",i),await _s.getJson(i));if(G.debug(
"getGitOrganization: data = ",i),i&&Q(i)){let e=i&&To(i,t)?i[t]:void 0;return G.debug(
"getGitOrganization: packageMetadata = ",e),e&&Q(e)&&To(e,wu)&&(r=e[wu],G.debug(
"getGitOrganization: package: githubOrgName = ",r),H(r))?r:(r=t.toLowerCase().split(".").slice(0,2).join("."),e=i&&To(i,
r)?i[r]:void 0,G.debug("getGitOrganization: packageMetadata = ",e),e&&Q(e)&&To(e,wu)&&(t=e[wu],G.debug(
"getGitOrganization: scope: githubOrgName = ",t),H(t))?t:To(i,wu)&&(r=i[wu],G.debug(
"getGitOrganization: root: githubOrgName = ",r),H(r))?r:void 0)}}(e),r=ss+`:${t}/`+e;return G.debug(
`getGitUrl: github with org "${t}": `,r),{gitUrl:r,packageName:e}}(e);if(!a)throw new TypeError(
`Could not detect git url for: "${a}"`);G.debug("updateSubModule: gitUrl = ",a),G.debug(
"updateSubModule: packageName = ",s),t=t||ka.default.resolve(ka.default.resolve(o,"src"),s.split(".").join("/")),
e=ka.default.relative(process.cwd(),t),G.debug("relativeTargetPath = ",e);let u;try{u=await xa.promises.stat(t),G.debug(
"stats: ",u)}catch(e){"ENOENT"!==(null==e?void 0:e.code)&&G.error("File stat error: ",t,e),u=void 0}if(i=null!=(
i=null==(i=u)?void 0:i.isFile())&&i,G.debug("isFile: ",i),n=null!=(n=null==(n=u)?void 0:n.isDirectory())&&n,G.debug(
"isDirectory: ",n),n)G.debug("Target directory already exists, we'll only update: ",t),await ge(e);else{if(
void 0!==u&&void 0!==i)return G.error("Target file not a directory: ",t),Ho.CONFLICT;n=a,i=e,G.debug("addGitSubModule: "
,n,i),await pe([us,"submodule","add",n,i]),await Ho.OK,G.debug("Initialized: ",a,e)}return n=null!=r?r:"main",G.debug(
"nextBranch: ",n),i=e,G.debug("getGitBranch: ",i),r=(await pe([us,"rev-parse","--abbrev-ref","HEAD"],{cwd:i,stdio:"pipe"
})).stdout,G.debug("stdout: ",r),i=await r,G.debug("currentBranch: ",i),i!==n?(r=e,i=n,G.debug("setGitSubModuleBranch: "
,r,i),await me(r,"branch",i)):G.debug("Branch already identical: ",n),r=e,i=a,G.debug("setGitSubModuleUrl: ",r,i),
await me(r,"url",i),await he(t),console.info(s+`@${n}:`+e),Ho.OK}(t,e,r)}(o);case"r":case"remove":return o,
await Ho.UNIMPLEMENTED_FEATURE}return Ho.UNKNOWN_ARGUMENT}catch(e){return G.error("Fatal error: ",e),Ho.FATAL_ERROR}}(
process.argv).then(e=>{process.exit(e)}).catch(e=>{console.error("Error: ",e),process.exit(1)});
