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
)t=e[r],this.set(t[0],t[1])}function k(e){e=this.__data__=new ht(e),this.size=e.size}function $(e){var t=-1,
r=null==e?0:e.length;for(this.__data__=new gt;++t<r;)this.add(e[t])}function B(n,i){function o(){var e=arguments,
t=i?i.apply(this,e):e[0],r=o.cache;return r.has(t)?r.get(t):(e=n.apply(this,e),o.cache=r.set(t,e)||r,e)}if(
"function"!=typeof n||null!=i&&"function"!=typeof i)throw new TypeError("Expected a function");return o.cache=new(
B.Cache||Br),o}function z(e){return void 0===e}function V(e){return a(e)}function H(e){return sa(e)}function K(e){
return la(e)}function W(e,t){return ii(e,t)}function J(e,t=H,r=void 0){return!!(void 0===r||Fe(n=e)&&W(Ra(n),r))&&(
n=void 0!==t?t:H,Fe(r=e)&&W(Z(r),n));var n}function X(...e){return t=>Qn(e,e=>e(t))}function Q(e){return Fe(e)}
function Y(e){if(void 0!==e&&""!==e)return""+e}function Z(e,t=H){var r;return V(e)?(r=qn(e,(e,t)=>t),So(r,e=>t(e))):Q(e
)?(r=Reflect.ownKeys(e),So(r,e=>t(e))):[]}function ee(e){if(!e.startsWith("%{")||!e.endsWith("}"))return Y(e)}
function te(e){if(K(e))switch(e){case c.OPTIONS:return"options";case c.GET:return"get";case c.POST:return"post";
case c.PUT:return"put";case c.DELETE:return"delete";case c.PATCH:return"patch"}throw new TypeError(
"Unsupported value for stringifyRequestMethod(): "+e)}function re(e){return H(t=e)||K(t)||ra(t)||na(t)||ne(e)||(e=t=e,
!!Fe(e)&&!(e instanceof Date)&&!qe(e)&&!V(e)&&J(e,H,void 0)&&J(t,H,X(re,z)));var t}function ne(e){var t,[e,r=void 0,
n=void 0,i=void 0]=[e,X(re,z)];return!!a(e)&&(t=null!=(t=null==e?void 0:e.length)?t:0,!(void 0!==n&&t<n)&&!(
void 0!==i&&i<t)&&(void 0===r||W(e,r)))}function ie(t,e){var r,n=Object.keys(t);return Object.getOwnPropertySymbols&&(
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
e.options.cwd)}catch(e){}let a;try{a=cu.sync(e.command,{path:r[lu({env:r})],pathExt:t?uu.delimiter:void 0})}catch(e
){}finally{o&&process.chdir(n)}return a=a&&uu.resolve(i?e.options.cwd:"",a)}function ue(e,t){return Object.assign(
new Error(`${t} ${e.command} ENOENT`),{code:"ENOENT",errno:"ENOENT",syscall:t+" "+e.command,path:e.command,
spawnargs:e.args})}function ce(e,t){return Eu&&1===e&&!t.file?ue(t.original,"spawn"):null}function le(e,t,r){
return e=Re(e,t,r),t=wu.spawn(e.command,e.args,e.options),Ou.hookChildProcess(t,e),t}function de(e={}){var{
env:e=process.env,platform:t=process.platform}=e;return"win32"!==t?"PATH":Object.keys(e).reverse().find(
e=>"PATH"===e.toUpperCase())||"Path"}async function fe(n,u){if(!n)throw new Error("Expected a stream");const i=(u=b({
maxBuffer:1/0},u)).maxBuffer,o=(e=>{const t=(e=b({},u)).array;let r=e.encoding;const n="buffer"===r;let i=!1;t?i=!(r||n
):r=r||"utf8",n&&(r=null);const o=new Fu({objectMode:i});r&&o.setEncoding(r);let a=0;const s=[];return o.on("data",e=>{
s.push(e),i?a=s.length:a+=e.length}),o.getBufferedValue=()=>t?s:n?Buffer.concat(s,a):s.join(""),o.getBufferedLength=(
)=>a,o})();return await new Promise((e,t)=>{const r=e=>{e&&o.getBufferedLength()<=Mu.MAX_LENGTH&&(
e.bufferedData=o.getBufferedValue()),t(e)};(async()=>{try{await qu(n,o),e()}catch(e){r(e)}})(),o.on("data",()=>{
o.getBufferedLength()>i&&r(new ku)})}),o.getBufferedValue()}async function pe(e,t){let r=[...e];var e=r.shift(),p=d({
stdio:"inherit"},null!=t?t:{}),{stdout:t,stderr:e,exitCode:n}=(tc.debug("Executing: ",e,r),await function(t,e){var n,r,i
,o,a;[r,i,o={}]=[t,e,p],r=(a=xa._parse(r,i,o)).command,i=a.args,o=a.options,(o=b({maxBuffer:Yu,buffer:!0,
stripFinalNewline:!0,extendEnv:!0,preferLocal:!1,localDir:o.cwd||Ts.default.cwd(),execPath:Ts.default.execPath,
encoding:"utf8",reject:!0,cleanup:!0,all:!1,windowsHide:!0},o)).env=Zu(o),o.stdio=Cu(o),
"win32"===Ts.default.platform&&"cmd"===Os.default.basename(r,".exe")&&i.unshift("/q");const s={file:r,args:i,options:o,
parsed:a},u=(r=t,i=e,Wu(r,i).join(" ")),c=(o=t,a=e,Wu(o,a).map(e=>Qu(e)).join(" "));if(void 0!==(r=s.options.timeout)&&(
!Number.isFinite(r)||r<0))throw new TypeError(
`Expected the \`timeout\` option to be a non-negative integer, got \`${r}\` (${typeof r})`);let l;try{
l=Rs.default.spawn(s.file,s.args,s.options)}catch(e){return i=new Rs.default.ChildProcess,t=Promise.reject(Iu({error:e,
stdout:"",stderr:"",all:"",command:u,escapedCommand:c,parsed:s,timedOut:!1,isCanceled:!1,killed:!1})),Ku(i,t)}n=l,
e=new Promise((r,t)=>{n.on("exit",(e,t)=>{r({exitCode:e,signal:t})}),n.on("error",e=>{t(e)}),n.stdin&&n.stdin.on("error"
,e=>{t(e)})}),o=((r,{timeout:n,killSignal:i="SIGTERM"},e)=>{if(0===n||void 0===n)return e;let o;var t=new Promise((e,t
)=>{o=setTimeout(()=>{Uu(r,i,t)},n)}),e=e.finally(()=>{clearTimeout(o)});return Promise.race([t,e])})(l,s.options,e);
const d=(async(e,{cleanup:t,detached:r},n)=>{if(!t||r)return n;const i=Ba(()=>{e.kill()});return n.finally(()=>{i()})})(
l,s.options,o),f={isCanceled:!1};return l.kill=((e,t="SIGTERM",r={})=>{var n=e(t);return Gu(e,t,r,n),n}).bind(null,
l.kill.bind(l)),l.cancel=((e,t)=>{e.kill()&&(t.isCanceled=!0)}).bind(null,l,f),a=Au(async()=>{var[{error:e,exitCode:t,
signal:r,timedOut:n},i,o,a]=await(async({stdout:t,stderr:r,all:n},{encoding:i,buffer:e,maxBuffer:o},a)=>{var s=zu(t,{
encoding:i,buffer:e,maxBuffer:o}),u=zu(r,{encoding:i,buffer:e,maxBuffer:o}),i=zu(n,{encoding:i,buffer:e,maxBuffer:2*o});
try{return await Promise.all([a,s,u,i])}catch(e){return Promise.all([{error:e,signal:e.signal,timedOut:e.timedOut},Bu(t,
s),Bu(r,u),Bu(n,i)])}})(l,s.options,d),i=ec(s.options,i),o=ec(s.options,o),a=ec(s.options,a);if(e||0!==t||null!==r){if(
e=Iu({error:e,exitCode:t,signal:r,stdout:i,stderr:o,all:a,command:u,escapedCommand:c,parsed:s,timedOut:n,
isCanceled:f.isCanceled||!!s.options.signal&&s.options.signal.aborted,killed:l.killed}),s.options.reject)throw e;
return e}return{command:u,escapedCommand:c,exitCode:0,stdout:i,stderr:o,all:a,failed:!1,timedOut:!1,isCanceled:!1,
killed:!1}}),r=l,void 0!==(i=s.options.input)&&void 0!==r.stdin&&(
null!==i&&"object"==typeof i&&"function"==typeof i.pipe?i.pipe(r.stdin):r.stdin.end(i)),l.all=((e,{all:t})=>{if(t&&(
e.stdout||e.stderr)){const r=Va();return e.stdout&&r.add(e.stdout),e.stderr&&r.add(e.stderr),r}})(l,s.options),Ku(l,a)}(
e,r));return{stdout:t,stderr:e,exitCode:n}}async function he(e){rc.debug("gitPullWithRecurseSubmodules",e);const{
stdout:t,stderr:r}=await pe([Ms,"pull","--recurse-submodules"],{cwd:e,stdio:"pipe"});return r&&rc.error(
e+`: 'git pull --recurse-submodules' with errors (inside "${e}"): `+Jo(r)),t.includes("Already up to date.")||rc.debug(
e+`: 'git pull --recurse-submodules' with output (inside "${e}"): `+Jo(t)),l.OK}async function ge(e){oc.debug(
"getGitBranch: ",e);var{stderr:t,stdout:r,exitCode:n}=await pe([Ms,"rev-parse","--abbrev-ref","HEAD"],{cwd:e,
stdio:"pipe"});if(0!==n)throw new Error(`Command to get git branch for "${e}" failed with status ${n}: `+t);
return oc.debug("stdout: ",r),r}function me(){return process.cwd()}async function ve(e,t,r){return cc.debug(
"setGitSubModuleConfigBySubKey: ",e,t,r),t=`submodule.${e}.`+t,cc.debug("setGitSubModuleConfigByKey: ",e,t,r),await pe([
Ms,"config","-f",Fs,t,r]),l.OK}function be(e,t,r){return{key:e,subKey:t,value:r}}async function ye(e){return G.debug(
"initAllSubmodules"),await he(e),nc.debug("gitSubmoduleUpdate"),await pe([Ms,"submodule","update","--init","--recursive"
],{cwd:e}),await l.OK,l.OK}function _e(e,t){return{name:"SIGRT"+(t+1),number:Pu+t,action:"terminate",
description:"Application-specific signal (realtime)",standard:"posix"}}function Ee(){var e=65-Pu,e=Array.from({length:e}
,_e);return[...xu,...e].map(Te)}function we(e,{name:t,number:r,description:n,supported:i,action:o,forced:a,standard:s}){
return b(b({},e),{},{[t]:{name:t,number:r,description:n,supported:i,action:o,forced:a,standard:s}})}function Oe(e){
return e&&"object"==typeof e&&"function"==typeof e.removeListener&&"function"==typeof e.emit&&"function"==typeof e.reallyExit&&"function"==typeof e.listeners&&"function"==typeof e.kill&&"number"==typeof e.pid&&"function"==typeof e.on
}function Re(e,t,r){if(t&&!Array.isArray(t)&&(r=t,t=null),e={command:e,args:t=t?t.slice(0):[],options:r=Object.assign({}
,r),file:void 0,original:{command:e,args:t}},r.shell)return e;if(t=e,!bu)return t;if((r=t).file=mu(r),e=(
e=r.file&&function(e){var t;const r=Buffer.alloc(150);try{t=pu.openSync(e,"r"),pu.readSync(t,r,0,150,0),pu.closeSync(t)
}catch(e){}return hu(r.toString())}(r.file))?(r.args.unshift(r.file),r.command=e,mu(r)):r.file,r=!yu.test(e),
t.options.forceShell||r){const n=_u.test(e);t.command=gu.normalize(t.command),t.command=vu.command(t.command),
t.args=t.args.map(e=>vu.argument(e,n)),r=[t.command].concat(t.args).join(" "),t.args=["/d","/s","/c",`"${r}"`],
t.command=process.env.comspec||"cmd.exe",t.options.windowsVerbatimArguments=!0}return t}function Te({name:e,number:t,
description:r,action:n,forced:i=!1,standard:o}){var{signals:{[e]:a}}=ms.constants,s=void 0!==a;return{name:e,
number:s?a:t,description:r,supported:s,action:n,forced:i,standard:o}}function Se(e,t){for(var r=-1,n=null==e?0:e.length,
i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i}function Ne(e,t){return e===t||e!=e&&t!=t}function Ae(e,t){for(
var r=e.length;r--;)if(Ps(e[r][0],t))return r;return-1}var Pe,xe,je,Ie,Le,Ce,Ge,Ue,Fe,Me,De,qe,ke,$e,Be,ze,Ve,He,Ke,We,
Je,Xe,Qe,Ye,Ze,et,tt,rt,nt,it,ot,at,st,ut,ct,lt,dt,ft,pt,ht,gt,mt,vt,bt,yt,_t,Et,wt,Ot,Rt,a,Tt,St,Nt,At,Pt,xt,jt,It,Lt,
Ct,Gt,Ut,Ft,Mt,Dt,t,qt,kt,$t,Bt,zt,Vt,Ht,Kt,Wt,Jt,Xt,Qt,Yt,Zt,er,tr,rr,nr,ir,or,ar,sr,ur,cr,lr,dr,fr,pr,hr,gr,mr,vr,br,
yr,_r,Er,wr,Or,Rr,Tr,Sr,Nr,Ar,Pr,xr,jr,Ir,Lr,Cr,Gr,Ur,Fr,Mr,Dr,qr,kr,$r,Br,zr,Vr,Hr,Kr,Wr,Jr,Xr,Qr,Yr,Zr,en,tn,rn,nn,on,
an,sn,un,cn,ln,dn,fn,pn,hn,gn,mn,vn,bn,yn,_n,r,En,wn,On,Rn,Tn,Sn,Nn,An,Pn,xn,jn,In,Ln,Cn,Gn,Un,Fn,Mn,Dn,qn,kn,$n,Bn,zn,
Vn,n,Hn,Kn,Wn,Jn,Xn,Qn,Yn,Zn,ei,ti,ri,ni,ii,oi,ai,si,ui,ci,li,di,fi,pi,hi,gi,mi,vi,bi,yi,_i,Ei,wi,Oi,Ri,Ti,Si,Ni,Ai,Pi,
xi,ji,Ii,Li,Ci,Gi,Ui,Fi,Mi,Di,qi,ki,$i,Bi,zi,Vi,Hi,Ki,Wi,Ji,Xi,Qi,Yi,Zi,eo,to,ro,no,io,oo,ao,so,uo,co,lo,fo,po,ho,go,mo,
vo,bo,yo,_o,Eo,wo,Oo,Ro,To,So,No,Ao,Po,xo,jo,Io,Lo,Co,i,s,Go,Uo,Fo,Mo,Do,qo,ko,$o,Bo,zo,Vo,Ho,Ko,Wo,Jo,Xo,Qo,Yo,Zo,ea,ta
,ra,na,ia,oa,aa,sa,ua,ca,la,da,fa,pa,ha,ga,ma,va,ba,ya,_a,Ea,wa,Oa,Ra,u,l,c,f,Ta,Sa,p,Na,Aa,Pa,h,xa,g,m,ja,Ia,La,v,Ca,Ga
,Ua,Fa,Ma,Da,qa,ka,$a,Ba,y,za,Va,Ha,_,E,Ka,Wa,w,Ja,O,R,T,Xa,S,Qa,N,Ya,Za,es,A,ts,rs,ns,is,os,as,ss=require("fs"),
us=require("path"),cs=require("url"),ls=require("querystring"),ds=require("node:buffer"),fs=require("node:path"),
ps=require("node:child_process"),hs=require("node:process"),gs=require("child_process"),P=require("node:url"),
ms=require("os"),vs=require("node:os"),bs=require("assert"),x=require("events"),j=require("buffer"),I=require("stream"),
L=require("util"),ys=e(ss),_s=e(us),Es=e(cs),ws=F(ls),Os=e(fs),Rs=e(ps),Ts=e(hs),cs=e(gs),Ss=e(P),Ns=e(vs),ls=e(bs),
fs=e(x),ps=e(j),hs=e(I),gs=e(L),
As="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
,Ps=Ne,xs=Ae,js=Array.prototype.splice,Is=Ae,Ls=Ae,Cs=Ae;M.prototype.clear=function(){this.__data__=[],this.size=0},
M.prototype.delete=function(e){var t=this.__data__;return!((e=xs(t,e))<0||(e==t.length-1?t.pop():js.call(t,e,1),
--this.size,0))},M.prototype.get=function(e){var t=this.__data__;return(e=Is(t,e))<0?void 0:t[e][1]},
M.prototype.has=function(e){return-1<Ls(this.__data__,e)},M.prototype.set=function(e,t){var r=this.__data__,n=Cs(r,e);
return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},Pe=P=M,vs=function(){this.__data__=new Pe,this.size=0},
bs=function(e){var t=this.__data__,e=t.delete(e);return this.size=t.size,e},x=function(e){return this.__data__.get(e)},
j=function(e){return this.__data__.has(e)},I="object"==typeof As&&As&&As.Object===Object&&As,
L="object"==typeof self&&self&&self.Object===Object&&self,O=(L=I||L||Function("return this")()).Symbol,
T=Object.prototype,xe=T.hasOwnProperty,je=T.toString,Ie=O?O.toStringTag:void 0,T=Object.prototype,Le=T.toString,
Ce=function(e){var t,r,n=xe.call(e,Ie),i=e[Ie];try{t=!(e[Ie]=void 0)}catch(e){}return r=je.call(e),t&&(
n?e[Ie]=i:delete e[Ie]),r},Ge=function(e){return Le.call(e)},Ue=O?O.toStringTag:void 0,Me=T=function(e){
return null==e?void 0===e?"[object Undefined]":"[object Null]":(Ue&&Ue in Object(e)?Ce:Ge)(e)},De=Fe=function(e){
var t=typeof e;return null!=e&&("object"==t||"function"==t)},qe=function(e){return!!De(e)&&("[object Function]"==(e=Me(e
))||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e)},R=L["__core-js_shared__"],
R=/[^.]+$/.exec(R&&R.keys&&R.keys.IE_PROTO||""),ke=R?"Symbol(src)_1."+R:"",R=Function.prototype,$e=R.toString,Be=qe,
ze=function(e){return!!ke&&ke in e},Ve=Fe,He=R=function(e){if(null!=e){try{return $e.call(e)}catch(e){}try{return e+""
}catch(e){}}return""},s=/[\\^$.*+?()[\]{}|]/g,Ke=/^\[object .+?Constructor\]$/,p=Function.prototype,N=Object.prototype,
p=p.toString,N=N.hasOwnProperty,We=RegExp("^"+p.call(N).replace(s,"\\$&").replace(
/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Je=function(e){return!(!Ve(e)||ze(e))&&(Be(e
)?We:Ke).test(He(e))},Xe=function(e,t){return null==e?void 0:e[t]},N=(p=function(e,t){return e=Xe(e,t),Je(e)?e:void 0})(
L,"Map"),s=p(Object,"create"),Ye=Qe=s,r=Object.prototype,Ze=r.hasOwnProperty,et=s,r=Object.prototype,tt=r.hasOwnProperty
,rt=s,r=function(e){return e=this.has(e)&&delete this.__data__[e],this.size-=e?1:0,e},s=function(e){var t,
r=this.__data__;return Ye?"__lodash_hash_undefined__"===(t=r[e])?void 0:t:Ze.call(r,e)?r[e]:void 0},y=function(e){
var t=this.__data__;return et?void 0!==t[e]:tt.call(t,e)},g=function(e,t){var r=this.__data__;
return this.size+=this.has(e)?0:1,r[e]=rt&&void 0===t?"__lodash_hash_undefined__":t,this},D.prototype.clear=function(){
this.__data__=Qe?Qe(null):{},this.size=0},D.prototype.delete=r,D.prototype.get=s,D.prototype.has=y,D.prototype.set=g,
nt=D,it=P,ot=N,at=function(e){var t=typeof e;
return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e},lt=ct=ut=st=function(e,t){
return e=e.__data__,at(t)?e["string"==typeof t?"string":"hash"]:e.map},r=function(e){return e=st(this,e).delete(e),
this.size-=e?1:0,e},s=function(e){return ut(this,e).get(e)},y=function(e){return ct(this,e).has(e)},g=function(e,t){
var r=lt(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},q.prototype.clear=function(){this.size=0,
this.__data__={hash:new nt,map:new(ot||it),string:new nt}},q.prototype.delete=r,q.prototype.get=s,q.prototype.has=y,
q.prototype.set=g,ft=N,pt=r=q,ht=dt=P,s=bs,y=x,g=j,P=function(e,t){var r,n=this.__data__;if(n instanceof dt){if(
r=n.__data__,!ft||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new pt(r)}return n.set(e,t),
this.size=n.size,this},k.prototype.clear=vs,k.prototype.delete=s,k.prototype.get=y,k.prototype.has=g,k.prototype.set=P,
bs=k,gt=r,x=function(e){return this.__data__.has(e)},$.prototype.add=$.prototype.push=function(e){
return this.__data__.set(e,"__lodash_hash_undefined__"),this},$.prototype.has=x,mt=j=$,vt=vs=function(e,t){for(var r=-1,
n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},bt=s=function(e,t){return e.has(t)},y=L.Uint8Array,yt=y,
_t=Ne,Et=g=function(e,t,r,n,i,o){var a,s,u,c,l,d,f,p=1&r,h=e.length,g=t.length;if(h!=g&&!(p&&h<g))return!1;if(g=o.get(e)
,a=o.get(t),g&&a)return g==t&&a==e;for(s=-1,u=!0,c=2&r?new mt:void 0,o.set(e,t),o.set(t,e);++s<h;){if(l=e[s],d=t[s],
void 0!==(f=n?p?n(d,l,s,t,e,o):n(l,d,s,e,t,o):f)){if(f)continue;u=!1;break}if(c){if(!vt(t,function(e,t){if(!bt(c,t)&&(
l===e||i(l,e,r,n,o)))return c.push(t)})){u=!1;break}}else if(l!==d&&!i(l,d,r,n,o)){u=!1;break}}return o.delete(e),
o.delete(t),u},wt=function(e){var r=-1,n=Array(e.size);return e.forEach(function(e,t){n[++r]=[t,e]}),n},Ot=P=function(e
){var t=-1,r=Array(e.size);return e.forEach(function(e){r[++t]=e}),r},x=O?O.prototype:void 0,Rt=x?x.valueOf:void 0,
y=function(e,t,r,n,i,o,a){var s,u;switch(r){case"[object DataView]":if(
e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":
return!(e.byteLength!=t.byteLength||!o(new yt(e),new yt(t)));case"[object Boolean]":case"[object Date]":
case"[object Number]":return _t(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;
case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":s=wt;case"[object Set]":return s=s||Ot,!!(
e.size==t.size||1&n)&&((u=a.get(e))?u==t:(n|=2,a.set(e,t),u=Et(s(e),s(t),n,i,o,a),a.delete(e),u));case"[object Symbol]":
if(Rt)return Rt.call(e)==Rt.call(t)}return!1},x=function(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];
return e},S=Array.isArray,Tt=x,St=a=S,S=function(e,t,r){return t=t(e),St(e)?t:Tt(t,r(e))},At=Nt=function(e,t){for(var r,
n=-1,i=null==e?0:e.length,o=0,a=[];++n<i;)t(r=e[n],n,e)&&(a[o++]=r);return a},n=Object.prototype,
Pt=n.propertyIsEnumerable,n=(xt=Object.getOwnPropertySymbols)?function(t){return null==t?[]:(t=Object(t),At(xt(t),
function(e){return Pt.call(t,e)}))}:function(){return[]},Go=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);
return n},jt=T,h=function(e){return It(e)&&"[object Arguments]"==jt(e)},Lt=It=Xa=function(e){
return null!=e&&"object"==typeof e},i=Object.prototype,Ct=i.hasOwnProperty,Gt=i.propertyIsEnumerable,i=h(function(){
return arguments}())?h:function(e){return Lt(e)&&Ct.call(e,"callee")&&!Gt.call(e,"callee")},_=(Ha=(Ha=(_=(_=(h={
exports:{}}).exports)&&!_.nodeType&&_)&&h&&!h.nodeType&&h)&&Ha.exports===_?L.Buffer:void 0)?Ha.isBuffer:void 0,
h.exports=_||function(){return!1},Ut=/^(?:0|[1-9]\d*)$/,Ha=function(e,t){var r=typeof e;return!!(
t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&Ut.test(e))&&-1<e&&e%1==0&&e<t},Ft=T,Mt=_=function(e){
return"number"==typeof e&&-1<e&&e%1==0&&e<=9007199254740991},Dt=Xa,(t={}
)["[object Float32Array]"]=t["[object Float64Array]"]=t["[object Int8Array]"]=t["[object Int16Array]"]=t["[object Int32Array]"]=t["[object Uint8Array]"]=t["[object Uint8ClampedArray]"]=t["[object Uint16Array]"]=t["[object Uint32Array]"]=!0
,
t["[object Arguments]"]=t["[object Array]"]=t["[object ArrayBuffer]"]=t["[object Boolean]"]=t["[object DataView]"]=t["[object Date]"]=t["[object Error]"]=t["[object Function]"]=t["[object Map]"]=t["[object Number]"]=t["[object Object]"]=t["[object RegExp]"]=t["[object Set]"]=t["[object String]"]=t["[object WeakMap]"]=!1
,A=function(e){return Dt(e)&&Mt(e.length)&&!!t[Ft(e)]},Ja=function(t){return function(e){return t(e)}},w=(w=(E=qt={
exports:{}}).exports)&&!w.nodeType&&w,w=(Ka=w&&E&&!E.nodeType&&E)&&Ka.exports===w,Wa=w&&I.process,w=function(){try{
return Ka&&Ka.require&&Ka.require("util").types||Wa&&Wa.binding&&Wa.binding("util")}catch(e){}}(),E.exports=w,w=(E=(
I=qt.exports)&&I.isTypedArray)?Ja(E):A,kt=Go,$t=i,Bt=a,zt=h.exports,Vt=Ha,Ht=I=w,E=Object.prototype,Kt=E.hasOwnProperty,
Wt=Object.prototype,rs=Object.keys,ns=Object,Jt=function(e){var t=e&&e.constructor;return e===(
"function"==typeof t&&t.prototype||Wt)},Xt=function(e){return rs(ns(e))},A=Object.prototype,Qt=A.hasOwnProperty,Yt=qe,
Zt=_,er=function(e,t){var r,n=Bt(e),i=!n&&$t(e),o=!n&&!i&&zt(e),a=!n&&!i&&!o&&Ht(e),s=n||i||o||a,u=s?kt(e.length,String
):[],c=u.length;for(r in e)!t&&!Kt.call(e,r)||s&&("length"==r||o&&("offset"==r||"parent"==r)||a&&(
"buffer"==r||"byteLength"==r||"byteOffset"==r)||Vt(r,c))||u.push(r);return u},tr=function(e){var t,r;if(!Jt(e)
)return Xt(e);for(r in t=[],Object(e))Qt.call(e,r)&&"constructor"!=r&&t.push(r);return t},rr=Go=function(e){
return null!=e&&Zt(e.length)&&!Yt(e)},nr=S,ir=n,or=w=function(e){return(rr(e)?er:tr)(e)},ar=function(e){return nr(e,or,
ir)},E=Object.prototype,sr=E.hasOwnProperty,A=function(e,t,r,n,i,o){var a,s,u,c,l,d,f,p,h,g=1&r,m=ar(e),v=m.length;if(
v!=ar(t).length&&!g)return!1;for(a=v;a--;)if(s=m[a],!(g?s in t:sr.call(t,s)))return!1;if(p=o.get(e),h=o.get(t),p&&h
)return p==t&&h==e;for(u=!0,o.set(e,t),o.set(t,e),c=g;++a<v;){if(l=e[s=m[a]],d=t[s],!(void 0===(f=n?g?n(d,l,s,t,e,o):n(l
,d,s,e,t,o):f)?l===d||i(l,d,r,n,o):f)){u=!1;break}c=c||"constructor"==s}return u&&!c&&(p=e.constructor)!=(
h=t.constructor)&&"constructor"in e&&"constructor"in t&&!(
"function"==typeof p&&p instanceof p&&"function"==typeof h&&h instanceof h)&&(u=!1),o.delete(e),o.delete(t),u},S=p(L,
"DataView"),n=N,E=p(L,"Promise"),Qa=N=p(L,"Set"),L=p(L,"WeakMap"),ur=T,lr=(cr=R)(R=S),dr=cr(n),fr=cr(E),pr=cr(Qa),hr=cr(
L),S=ur,(R&&"[object DataView]"!=S(new R(new ArrayBuffer(1)))||n&&"[object Map]"!=S(new n)||E&&"[object Promise]"!=S(
E.resolve())||Qa&&"[object Set]"!=S(new Qa)||L&&"[object WeakMap]"!=S(new L))&&(S=function(e){var t=ur(e);if(e=(
e="[object Object]"==t?e.constructor:void 0)?cr(e):"")switch(e){case lr:return"[object DataView]";case dr:
return"[object Map]";case fr:return"[object Promise]";case pr:return"[object Set]";case hr:return"[object WeakMap]"}
return t}),gr=bs,mr=g,vr=y,br=A,yr=S,_r=a,Er=h.exports,wr=I,Or="[object Arguments]",Rr="[object Array]",
Tr="[object Object]",R=Object.prototype,Sr=R.hasOwnProperty,Nr=function(e,t,r,n,i,o){var a=_r(e),s=_r(t),u=a?Rr:yr(e),
s=s?Rr:yr(t),c=(u=u==Or?Tr:u)==Tr,l=(s=s==Or?Tr:s)==Tr;if((s=u==s)&&Er(e)){if(!Er(t))return!1;c=!(a=!0)}return s&&!c?(
o=o||new gr,a||wr(e)?mr(e,t,r,n,i,o):vr(e,t,u,r,n,i,o)):1&r||(a=c&&Sr.call(e,"__wrapped__"),u=l&&Sr.call(t,"__wrapped__"
),!a&&!u)?s&&(o=o||new gr,br(e,t,r,n,i,o)):i(a?e.value():e,u?t.value():t,r,n,o=o||new gr)},Pr=bs,xr=n=function e(t,r,n,i
,o){return t===r||(null==t||null==r||!Ar(t)&&!Ar(r)?t!=t&&r!=r:Nr(t,r,n,i,e,o))},jr=Fe,Ir=E=function(e){
return e==e&&!jr(e)},Lr=w,Cr=function(e,t,r,n){var i,o,a,s,u,c,l=r.length,d=l,f=!n;if(null==e)return!d;for(e=Object(e
);l--;)if(i=r[l],f&&i[2]?i[1]!==e[i[0]]:!(i[0]in e))return!1;for(;++l<d;)if(a=e[o=(i=r[l])[0]],s=i[1],f&&i[2]){if(
void 0===a&&!(o in e))return!1}else if(u=new Pr,!(void 0===(c=n?n(a,s,o,e,t,u):c)?xr(s,a,3,n,u):c))return!1;return!0},
Gr=function(e){for(var t,r,n=Lr(e),i=n.length;i--;)r=e[t=n[i]],n[i]=[t,r,Ir(r)];return n},Ur=Qa=function(t,r){
return function(e){return null!=e&&e[t]===r&&(void 0!==r||t in Object(e))}},L=function(t){var r=Gr(t);
return 1==r.length&&r[0][2]?Ur(r[0][0],r[0][1]):function(e){return e===t||Cr(e,t,r)}},Fr=T,Mr=Ar=Xa,Dr=a,qr=g=function(e
){return"symbol"==typeof e||Mr(e)&&"[object Symbol]"==Fr(e)},kr=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
$r=/^\w*$/,y=function(e,t){if(Dr(e))return!1;var r=typeof e;return!(
"number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!qr(e))||$r.test(e)||!kr.test(e)||null!=t&&e in Object(t)},Br=r,
B.Cache=Br,zr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
Vr=/\\(\\)?/g,ts=(A=B(function(e){var i=[];return 46===e.charCodeAt(0)&&i.push(""),e.replace(zr,function(e,t,r,n){
i.push(r?n.replace(Vr,"$1"):t||e)}),i},function(e){return 500===ts.size&&ts.clear(),e})).cache,Hr=Se,Kr=a,Wr=g,
S=O?O.prototype:void 0,Jr=S?S.toString:void 0,Xr=h=function e(t){if("string"==typeof t)return t;if(Kr(t))return Hr(t,e
)+"";if(Wr(t))return Jr?Jr.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},Zr=A,en=I=function(e){
return null==e?"":Xr(e)},tn=g,an=rn=function(e,t){return Qr(e)?e:Yr(e,t)?[e]:Zr(en(e))},sn=i,ln=_,fn=function(e,t){
return null!=e&&t in Object(e)},pn=R=function(e,t,r){for(var n,i,o=(t=an(t,e)).length,a=!(n=-1);++n<o&&(i=dn(t[n]),
a=null!=e&&r(e,i));)e=e[i];return a||++n!=o?a:!!(o=null==e?0:e.length)&&ln(o)&&cn(i,o)&&(un(e)||sn(e))},hn=n,
gn=function(e,t,r){return void 0===(e=null==e?void 0:on(e,t))?r:e},mn=function(e,t){return null!=e&&pn(e,t,fn)},bn=E,
yn=Qa,En=on=bs=function(e,t){for(var r=0,n=(t=rn(t,e)).length;null!=e&&r<n;)e=e[nn(t[r++])];return r&&r==n?e:void 0},
wn=function(t){return function(e){return null==e?void 0:e[t]}},On=function(t){return function(e){return En(e,t)}},
Rn=vn=Yr=y,Tn=_n=dn=nn=function(e){if("string"==typeof e||tn(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},Sn=L
,Nn=function(r,n){return vn(r)&&bn(n)?yn(_n(r),n):function(e){var t=gn(e,r);return void 0===t&&t===n?mn(e,r):hn(n,t,3)}}
,An=r=function(e){return e},Pn=un=Qr=a,xn=function(e){return Rn(e)?wn(Tn(e)):On(e)},jn=function(e,t,r){for(var n,i=-1,
o=Object(e),a=r(e),s=a.length;s--&&!1!==t(o[n=a[++i]],n,o););return e},In=w,Un=Se,Mn=S=function(e,n){var i=-1,o=Gn(e
)?Array(e.length):[];return Cn(e,function(e,t,r){o[++i]=n(e,t,r)}),o},qn=function(e,t){return(Dn(e)?Un:Mn)(e,Fn(t))},
$n=Ne,Bn=Gn=Ln=Go,zn=cn=Ha,Vn=Fe,Hn=vs,Wn=function(e,n){var i;return kn(e,function(e,t,r){return!(i=n(e,t,r))}),!!i},
Qn=function(e,t,r){var n=Jn(e)?Hn:Wn;return r&&Xn(e,t,r)&&(t=void 0),n(e,Kn(t))},Yn=kn=Cn=A=function(e,t){if(null==e
)return e;if(!Ln(e))return e&&jn(e,t,In);for(var r=e.length,n=-1,i=Object(e);++n<r&&!1!==t(i[n],n,i););return e},
Zn=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(!t(e[r],r,e))return!1;return!0},ei=function(e,n){var i=!0;
return Yn(e,function(e,t,r){return i=!!n(e,t,r)}),i},ti=Kn=Fn=_=function(e){
return"function"==typeof e?e:null==e?An:"object"==typeof e?Pn(e)?Nn(e[0],e[1]):Sn(e):xn(e)},ri=Jn=Dn=a,ni=Xn=n=function(
e,t,r){if(!Vn(r))return!1;var n=typeof t;return!!("number"==n?Bn(r)&&zn(t,r.length):"string"==n&&t in r)&&$n(r[t],e)},
ii=function(e,t,r){var n=ri(e)?Zn:ei;return r&&ni(e,t,r)&&(t=void 0),n(e,ti(t))},oi=p,E=function(){try{var e=oi(Object,
"defineProperty");return e({},"",{}),e}catch(e){}}(),ai=i,si=a,ui=O?O.isConcatSpreadable:void 0,li=function(e){
return si(e)||ai(e)||!!(ui&&e&&e[ui])},di=ci=x,fi=Qa=function e(t,r,n,i,o){var a,s=-1,u=t.length;for(n=n||li,o=o||[
];++s<u;)a=t[s],0<r&&n(a)?1<r?e(a,r-1,n,i,o):ci(o,a):i||(o[o.length]=a);return o},pi=function(e,t){var r=-1,n=e.length;
for(t=t||Array(n);++r<n;)t[r]=e[r];return t},hi=a,gi=function(){var e,t,r,n=arguments.length;if(!n)return[];for(e=Array(
n-1),t=arguments[0],r=n;r--;)e[r-1]=arguments[r];return di(hi(t)?pi(t):[t],fi(e,1))},mi=_,vi=Go,bi=w,y=function(e,t,r,n
){for(var i=e.length,o=r+(n?1:-1);n?o--:++o<i;)if(t(e[o],o,e))return o;return-1},yi=/\s/,_i=function(e){for(
var t=e.length;t--&&yi.test(e.charAt(t)););return t},Ei=/^\s+/,wi=L=function(e){return e&&e.slice(0,_i(e)+1).replace(Ei,
"")},Oi=Fe,Ri=g,Ti=/^[-+]0x[0-9a-f]+$/i,Si=/^0b[01]+$/i,Ni=/^0o[0-7]+$/i,Ai=parseInt,Pi=function(e){var t;
return"number"==typeof e?e:Ri(e)?NaN:(Oi(e)&&(t="function"==typeof e.valueOf?e.valueOf():e,e=Oi(t)?t+"":t),
"string"!=typeof e?0===e?e:+e:(e=wi(e),(t=Si.test(e))||Ni.test(e)?Ai(e.slice(2),t?2:8):Ti.test(e)?NaN:+e))},xi=function(
e){return e?(e=Pi(e))===1/0||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0},ji=y,Ii=_,Li=Ha=function(e){
var t=(e=xi(e))%1;return e==e?t?e-t:e:0},Ci=Math.max,Gi=function(e,t,r){var n,i,o,a=Object(e);return vi(e)||(n=mi(t),
e=bi(e),t=function(e){return n(a[e],e,a)}),-1<(o=(o=null==(i=e)?0:i.length)?((r=null==r?0:Li(r))<0&&(r=Ci(o+r,0)),ji(i,
Ii(t),r)):-1)?a[n?e[o]:o]:void 0},Ui=function(e,t,r,n){var i=-1,o=null==e?0:e.length;for(n&&o&&(r=e[++i]);++i<o;)r=t(r,
e[i],i,e);return r},Fi=A,Mi=_,Di=function(e,n,i,o,t){return t(e,function(e,t,r){i=o?(o=!1,e):n(i,e,t,r)}),i},qi=a,
ki=function(e,t,r){var n=qi(e)?Ui:Di,i=arguments.length<3;return n(e,Mi(t),r,i,Fi)},vs=function(e,t,r){var n,i=-1,
o=e.length;for((r=o<r?o:r)<0&&(r+=o),o=r<(t=t<0?o<-t?0:o+t:t)?0:r-t>>>0,t>>>=0,n=Array(o);++i<o;)n[i]=e[i+t];return n},
$i=y,Bi=function(e){return e!=e},zi=function(e,t,r){for(var n=r-1,i=e.length;++n<i;)if(e[n]===t)return n;return-1},
Vi=p=function(e,t,r){return t==t?zi(e,t,r):$i(e,Bi,r)},i=function(e,t){return!(null==e||!e.length)&&-1<Vi(e,t,0)},
O=function(e,t,r){for(var n=-1,i=null==e?0:e.length;++n<i;)if(r(t,e[n]))return!0;return!1},x=function(){},Go=(Hi=N
)&&1/P(new Hi([,-0]))[1]==1/0?function(e){return new Hi(e)}:x,Ki=j,Wi=i,Ji=O,Xi=s,Qi=Go,Yi=P,Zi=function(e,t,r){var n,i,
o,a,s=-1,u=Wi,c=e.length,l=!0,d=[],f=d;if(r)l=!1,u=Ji;else if(200<=c){if(n=t?null:Qi(e))return Yi(n);l=!1,u=Xi,f=new Ki
}else f=t?[]:d;e:for(;++s<c;)if(i=e[s],o=t?t(i):i,i=r||0!==i?i:0,l&&o==o){for(a=f.length;a--;)if(f[a]===o)continue e;
t&&f.push(o),d.push(i)}else u(f,o,r)||(f!==d&&f.push(o),d.push(i));return d},eo=function(e){return e&&e.length?Zi(e):[]}
,to=g,ro=function(e,t){var r,n,i,o,a,s,u,c;if(e!==t){if(r=void 0!==e,n=null===e,i=e==e,o=to(e),a=void 0!==t,s=null===t,
u=t==t,c=to(t),!s&&!c&&!o&&t<e||o&&a&&u&&!s&&!c||n&&a&&u||!r&&u||!i)return 1;if(
!n&&!o&&!c&&e<t||c&&r&&i&&!n&&!o||s&&r&&i||!a&&i||!u)return-1}return 0},no=Se,io=bs,oo=_,ao=S,so=function(e,t){
var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e},uo=Ja,co=function(e,t,r){for(var n,i=-1,o=e.criteria,
a=t.criteria,s=o.length,u=r.length;++i<s;)if(n=ro(o[i],a[i]))return u<=i?n:n*("desc"==r[i]?-1:1);return e.index-t.index}
,lo=r,fo=a,po=function(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:
return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)},ho=Math.max,go=function(e){
return function(){return e}},y=(mo=E)?function(e,t){return mo(e,"toString",{configurable:!0,enumerable:!1,value:go(t),
writable:!0})}:r,vo=Date.now,Ya=y,bo=Qa,yo=function(e,n,r){var i;return n=n.length?no(n,function(t){return fo(t
)?function(e){return io(e,1===t.length?t[0]:t)}:t}):[lo],i=-1,n=no(n,uo(oo)),e=ao(e,function(t,e,r){return{criteria:no(n
,function(e){return e(t)}),index:++i,value:t}}),so(e,function(e,t){return co(e,t,r)})},_o=n,function(){var e=vo(),
t=16-e+ +es;if(es=e,0<t){if(800<=++Za)return}else Za=0;Ya.apply(void 0,arguments)}((is=N=function(e,t){if(null==e
)return[];var r=t.length;return 1<r&&_o(e,t[0],t[1])?t=[]:2<r&&_o(t[0],t[1],t[2])&&(t=[t[0]]),yo(e,bo(t,1),[])},os=void(
es=Za=0),as=r,os=ho(void 0===os?is.length-1:os,0),function(){for(var e,t=arguments,r=-1,n=ho(t.length-os,0),i=Array(n
);++r<n;)i[r]=t[os+r];for(r=-1,e=Array(os+1);++r<os;)e[r]=t[r];return e[os]=as(i),po(is,this,e)}),N+""),wo=Nt,
Oo=function(e,n){var i=[];return Eo(e,function(e,t,r){n(e,t,r)&&i.push(e)}),i},Ro=_,So=function(e,t){return(To(e)?wo:Oo
)(e,Ro(t))},No=r,Ao=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e},Po=Eo=A,
xo=function(e){return"function"==typeof e?e:No},jo=To=a,Io=function(e,t){return(jo(e)?Ao:Po)(e,xo(t))},Lo=vs,x=function(
e,t,r){var n=e.length;return r=void 0===r?n:r,!t&&n<=r?e:Lo(e,t,r)},Co=RegExp(
"[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),j=function(e){return Co.test(e)},
(i=qt.exports)&&i.isRegExp,O=function(e){return e.split("")},
s="[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:"+[
"[^\\ud800-\\udfff]","(?:\\ud83c[\\udde6-\\uddff]){2}","[\\ud800-\\udbff][\\udc00-\\udfff]"].join("|"
)+")[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?)*",Go="(?:"+[
"[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]?","[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
"(?:\\ud83c[\\udde6-\\uddff]){2}","[\\ud800-\\udbff][\\udc00-\\udfff]","[\\ud800-\\udfff]"].join("|")+")",Uo=RegExp(
"\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|"+Go+s,"g"),Fo=O,Mo=j,Do=function(e){return e.match(Uo)||[]},
ko=qo=p,$o=h,Bo=L,zo=x,Vo=function(e,t){for(var r=e.length;r--&&-1<qo(t,e[r],0););return r},Ho=function(e,t){for(
var r=-1,n=e.length;++r<n&&-1<ko(t,e[r],0););return r},Ko=function(e){return(Mo(e)?Do:Fo)(e)},Wo=I,Jo=function(e,t,r){
return(e=Wo(e))&&(r||void 0===t)?Bo(e):e&&(t=$o(t))?(r=Ko(e),e=Ko(t),t=Ho(r,e),e=Vo(r,e)+1,zo(r,t,e).join("")):e},
P=Object.prototype,Xo=P.hasOwnProperty,Qo=function(e,t){return null!=e&&Xo.call(e,t)},Yo=R,Zo=function(e,t){
return null!=e&&Yo(e,t,Qo)},ra=function(e){return!0===e||!1===e||ta(e)&&"[object Boolean]"==ea(e)},na=function(e){
return null===e},oa=a,sa=function(e){return"string"==typeof e||!oa(e)&&aa(e)&&"[object String]"==ia(e)},ua=ia=ea=T,
ca=aa=ta=Xa,la=function(e){return"number"==typeof e||ca(e)&&"[object Number]"==ua(e)},ga=function(e,t,r){return e=ha(e),
r=null==r?0:da(pa(r),0,e.length),t=fa(t),e.slice(r,r+t.length)==t},ma=da=function(e,t,r){return e==e&&(void 0!==r&&(
e=e<=r?e:r),void 0!==t&&(e=t<=e?e:t)),e},va=fa=h,ba=pa=Ha,ya=ha=I,_a=function(e,t,r){var n;return e=ya(e),t=va(t),
n=e.length,n=r=void 0===r?n:ma(ba(r),0,n),0<=(r-=t.length)&&e.slice(r,n)==t},Ea=Se,wa=function(t,e){return Ea(e,
function(e){return t[e]})},Oa=w,Ra=function(e){return null==e?[]:wa(e,Oa(e))},"production".startsWith("%{"
)&&"production".endsWith("}"),u={DEBUG:0,0:"DEBUG",INFO:1,1:"INFO",WARN:2,2:"WARN",ERROR:3,3:"ERROR",NONE:4,4:"NONE"},
ee("0.0.4"),bs=null!=(g=ee(""))?g:"hgm",Ja=null!=(S=ee(""))?S:"",ee("production"),ee("2022-04-09T13:16:08.525Z"),
"".startsWith("%{")&&"".endsWith("}"),N=null!=(n=function(e){if(e){if(function(){switch(e){case u.DEBUG:case u.INFO:
case u.WARN:case u.ERROR:case u.NONE:return 1;default:return}}())return e;switch(e=(""+e).toUpperCase()){case"ALL":
case"DEBUG":return u.DEBUG;case"INFO":return u.INFO;case"WARN":case"WARNING":return u.WARN;case"ERR":case"ERROR":
return u.ERROR;case"FALSE":case"OFF":case"QUIET":case"SILENT":case"NONE":return u.NONE;default:return}}}(null!=(Qa=Y(
null==(E=process)||null==(y=E.env)?void 0:y.LOG_LEVEL))?Qa:Y(Ja)))?n:u.INFO;const Gs=null!=(r=Y(null==(Nt=process
)||null==(_=Nt.env)?void 0:_.COMMAND_NAME))?r:bs,Us="git@github.com",Fs=".gitmodules",Ms="git";class Ds{constructor(e,t
){o(this,"_logger",void 0),o(this,"name",void 0),o(this,"_level",void 0),this.name=e,this._logger=t,this._level=void 0}
getLogLevel(){var e;return null!=(e=this._level)?e:this._logger.getLogLevel()}setLogLevel(e){return this._level=e,this}
debug(...e){(void 0===this._level||this._level<=u.DEBUG)&&this._logger.debug(`[${this.name}]`,...e)}info(...e){(
void 0===this._level||this._level<=u.INFO)&&this._logger.info(`[${this.name}]`,...e)}warn(...e){(
void 0===this._level||this._level<=u.WARN)&&this._logger.warn(`[${this.name}]`,...e)}error(...e){(
void 0===this._level||this._level<=u.ERROR)&&this._logger.error(`[${this.name}]`,...e)}}class C{static setLogLevel(e){
return e&&(this._level=e),this}static getLogLevel(){return this._level}static getLogLevelString(){var e=this._level;
switch(e){case u.DEBUG:return"DEBUG";case u.INFO:return"INFO";case u.WARN:return"WARN";case u.ERROR:return"ERROR";
case u.NONE:return"NONE";default:return"Unknown:"+e}}static setLogger(e){if(!e)throw new TypeError(
"The logger was not defined");this._logger=e}static debug(...e){this._level<=u.DEBUG&&this._logger.debug(...e)}
static info(...e){this._level<=u.INFO&&this._logger.info(...e)}static warn(...e){this._level<=u.WARN&&this._logger.warn(
...e)}static error(...e){this._level<=u.ERROR&&this._logger.error(...e)}static createLogger(e){return new Ds(e,C)}}o(C,
"Level",u),o(C,"_level",u.DEBUG),o(C,"_logger",console);const qs=C.createLogger("ProcessUtils");class ks{
static getArguments(){return process.argv.slice(2)}static parseEnvFileLine(e,t){if(t.indexOf("=")<0)return t.length&&(
e[t]=""),e;const r=t.split("=");return t=r.shift(),(t=Jo(t)).length&&(e[t]=r.join("=").trim()),e}static parseEnvFile(e){
const t=ys.default.readFileSync(e,{encoding:"utf-8"}),r=t.split("\n");return r.reduce(ks.parseEnvFileLine,{})}
static initEnvFromFile(e){e=ks.parseEnvFile(e),process.env=d(d({},e),process.env)}static initEnvFromDefaultFiles(){
var e=_s.default.join(process.cwd(),".env");ys.default.existsSync(e)&&ks.initEnvFromFile(e)}static setupDestroyHandler(r
,n){let i=!1;var e=t=>e=>{ks._printErrors(t,e);try{if(i)return;i=!0,r()}catch(e){n(e)}};process.on("exit",e("exit")),
process.on("SIGTERM",e("SIGTERM")),process.on("SIGINT",e("SIGINT")),process.on("SIGUSR1",e("SIGUSR1")),process.on(
"SIGUSR2",e("SIGUSR2")),process.on("uncaughtException",e("uncaughtException"))}static _printErrors(e,t){try{t?qs.error(
`Closing process because "${e}" event: `,t):"exit"===e?qs.debug(`Closing process because "${e}" event`):qs.info(
`Closing process because "${e}" event`)}catch(e){console.error("Error while printing errors: ",e)}}}l={OK:0,0:"OK",
GENERAL_ERRORS:1,1:"GENERAL_ERRORS",MISUSE_OF_SHELL_BUILTINS:2,2:"MISUSE_OF_SHELL_BUILTINS",ARGUMENT_PARSE_ERROR:3,
3:"ARGUMENT_PARSE_ERROR",UNKNOWN_ARGUMENT:4,4:"UNKNOWN_ARGUMENT",UNIMPLEMENTED_FEATURE:5,5:"UNIMPLEMENTED_FEATURE",
FATAL_ERROR:6,6:"FATAL_ERROR",CONFLICT:7,7:"CONFLICT",USAGE:64,64:"USAGE",DATAERR:65,65:"DATAERR",NOINPUT:66,
66:"NOINPUT",NOUSER:67,67:"NOUSER",NOHOST:68,68:"NOHOST",UNAVAILABLE:69,69:"UNAVAILABLE",SOFTWARE:70,70:"SOFTWARE",
OSERR:71,71:"OSERR",OSFILE:72,72:"OSFILE",CANTCREAT:73,73:"CANTCREAT",IOERR:74,74:"IOERR",TEMPFAIL:75,75:"TEMPFAIL",
PROTOCOL:76,76:"PROTOCOL",NOPERM:77,77:"NOPERM",CONFIG:78,78:"CONFIG",COMMAND_INVOKED_CANNOT_EXECUTE:126,
126:"COMMAND_INVOKED_CANNOT_EXECUTE",COMMAND_NOT_FOUND:127,127:"COMMAND_NOT_FOUND",INVALID_ARGUMENT_TO_EXIT:128,
128:"INVALID_ARGUMENT_TO_EXIT",FATAL_SIGNAL_RANGE_START:129,129:"FATAL_SIGNAL_RANGE_START",FATAL_SIGNAL_RANGE_END:254,
254:"FATAL_SIGNAL_RANGE_END",EXIT_STATUS_OUT_OF_RANGE:255,255:"EXIT_STATUS_OUT_OF_RANGE"},c={OPTIONS:0,0:"OPTIONS",
GET:1,1:"GET",POST:2,2:"POST",PUT:3,3:"PUT",DELETE:4,4:"DELETE",PATCH:5,5:"PATCH"};const $s="WINDOW"===(O=null!=(
s=null!=(qt=null==(A=process)||null==(vs=A.env)?void 0:vs.NOR_REQUEST_CLIENT_MODE)?qt:null==(i=process)||null==(Go=i.env
)?void 0:Go.REACT_APP_REQUEST_CLIENT_MODE)?s:"")||!("undefined"==typeof window||!window.fetch),Bs="NODE"===O||!$s;
class zs{static async getRequestDataAsBuffer(n){return new Promise((e,t)=>{const r=[];n.on("data",e=>{try{r.push(e)
}catch(e){t(e)}}),n.on("end",()=>{try{e(Buffer.concat(r))}catch(e){t(e)}})})}static async getRequestDataAsString(e,
t="utf8"){const r=await zs.getRequestDataAsBuffer(e);return r.toString(t)}static async getRequestDataAsFormUrlEncoded(e
){if(""!==(e=await zs.getRequestDataAsString(e)))return ws.parse(e)}static async getRequestDataAsJson(e){if(""!==(
e=await zs.getRequestDataAsString(e)))return JSON.parse(e)}}(j=f={Continue:100,100:"Continue",SwitchingProtocols:101,
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
)[500]="InternalServerError",j[j.NotImplemented=501]="NotImplemented",j[j.BadGateway=502]="BadGateway",
j[j.ServiceUnavailable=503]="ServiceUnavailable",j[j.GatewayTimeout=504]="GatewayTimeout",
j[j.HttpVersionNotSupported=505]="HttpVersionNotSupported",j[j.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",
j[j.InsufficientStorage=507]="InsufficientStorage",j[j.LoopDetected=508]="LoopDetected",
j[j.BandwidthLimitExceeded=509]="BandwidthLimitExceeded",j[j.NotExtended=510]="NotExtended",
j[j.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",Ta={ERROR:"error"};class Vs extends Error{
constructor(e,t=void 0,r=void 0,n=void 0,i=void 0){super(t||function(e){switch(e){case f.Continue:return"Continue";
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
return e<400?"HTTP Status":"HTTP Error"}}(e)),o(this,"status",void 0),o(this,"method",void 0),o(this,"url",void 0),o(
this,"body",void 0),o(this,"__proto__",void 0),t=new.target.prototype,Object.setPrototypeOf?Object.setPrototypeOf(this,t
):this.__proto__=t,this.status=e,this.method=r,this.url=n,this.body=i}valueOf(){return this.status}toString(){
return this.status+" "+this.message}toJSON(){return{type:Ta.ERROR,status:this.status,message:this.message}}
getStatusCode(){return this.status}getMethod(){return this.method}getUrl(){return this.url}getBody(){return this.body}}
const Hs=Bs?require("fs").promises:void 0,Ks=C.createLogger("NodeRequestClient");class Ws{static setLogLevel(e){
Ks.setLogLevel(e)}constructor(e,t){o(this,"_http",void 0),o(this,"_https",void 0),this._http=e,this._https=t}
async jsonRequest(e,t,r,n){switch(e){case c.GET:return this._getJson(t,r,n);case c.POST:return this._postJson(t,r,n);
case c.PATCH:return this._patchJson(t,r,n);case c.PUT:return this._putJson(t,r,n);case c.DELETE:return this._deleteJson(
t,r,n);default:throw new TypeError("[Node]RequestClient: Unsupported method: "+e)}}async _checkSocketFile(t){try{
const e=await Hs.stat(t);return!!e.isSocket()}catch(e){if("ENOTDIR"===(t=null==e?void 0:e.code))return void Ks.debug(
"_checkSocketFile: ENOTDIR: ",e);if("ENOENT"===t)return void Ks.debug("_checkSocketFile: ENOENT: ",e);throw Ks.error(
`_checkSocketFile: Error "${t}" passed on: `,e),e}}async _findSocketFile(e){var t=await this._checkSocketFile(e);
return!0===t?e:!1!==t&&"/"!==(t=_s.default.dirname(e))&&t!==e?this._findSocketFile(t):void 0}async _httpRequest(o,a,e){
var t;const s=e?JSON.stringify(e)+"\n":void 0,u=new Es.default.URL(o);let c;const l=null!=(
e=null===u||void 0===u?void 0:u.protocol)?e:"";if("unix:"===l||"socket:"===l){
const r=null!==u&&void 0!==u&&u.pathname?null===u||void 0===u?void 0:u.pathname:"/";if("/"===r)throw new TypeError(
"No socket path found for unix protocol URL: "+o);if(!(e=await this._findSocketFile(r)))throw new TypeError(
"No socket path found for unix protocol URL: "+o);t=""+(e.length<r.length?r.substr(e.length):"")+(
"?"!==u.search?u.search:""),a=d(d({},a),{},{socketPath:e,path:t}),o="",c=this._http
}else c="https:"===l?this._https:this._http;return new Promise((t,r)=>{let n=!1;try{if(!c)throw new Error(
"HTTP module not defined. This error should not happen.");var i;let e;o&&(a=d(d({},a),{},{hostname:u.hostname,
port:null!=(i=null!==u&&void 0!==u&&u.port?parseInt(u.port,10):void 0)?i:"https:"===l?443:80,path:u.pathname+u.search}))
,(e=c.request(a,e=>{n?Ks.warn("Warning! Request had already ended when the response was received."):(n=!0,t(e))})).on(
"error",e=>{n?(Ks.warn("Warning! Request had already ended when the response was received."),Ks.debug(
"Error from event: ",e)):(Ks.debug("Passing on error from event: ",e),n=!0,r(e))}),s&&e.write(s),e.end()}catch(e){n?(
Ks.warn("Warning! Request had already ended when the response was received."),Ks.debug("Exception: ",e)):(Ks.debug(
"Passing on error: ",e),n=!0,r(e))}})}async _request(e,t,r,n){return r=await this._httpRequest(t,r,n),
n=await zs.getRequestDataAsJson(r),{method:e,url:t,statusCode:null!=(e=null==r?void 0:r.statusCode)?e:0,
headers:r.headers,body:n}}async _getJson(e,t,r){const n={method:"GET",headers:{"Content-Type":"application/json"}};
return t&&(n.headers=d(d({},n.headers),t)),this._request(c.GET,e,n,r).then(Ws._successResponse)}async _putJson(e,t,r){
const n={method:"PUT",headers:{"Content-Type":"application/json"}};return t&&(n.headers=d(d({},n.headers),t)),
this._request(c.PUT,e,n,r).then(Ws._successResponse)}async _postJson(e,t,r){const n={method:"POST",headers:{
"Content-Type":"application/json"}};return t&&(n.headers=d(d({},n.headers),t)),this._request(c.POST,e,n,r).then(
Ws._successResponse)}async _patchJson(e,t,r){const n={method:"PATCH",headers:{"Content-Type":"application/json"}};
return t&&(n.headers=d(d({},n.headers),t)),this._request(c.PATCH,e,n,r).then(Ws._successResponse)}async _deleteJson(e,t,
r){const n={method:"DELETE",headers:{"Content-Type":"application/json"}};return t&&(n.headers=d(d({},n.headers),t)),
this._request(c.DELETE,e,n,r).then(Ws._successResponse)}static async _successResponse(e){
var t=null==e?void 0:e.statusCode;if(t<200||400<=t)throw Ks.error(`Unsuccessful response with status ${t}: `,e),new Vs(t
,`Error ${t} for ${te(e.method)} `+e.url,e.method,e.url,e.body);return e.body}}class Js{constructor(e){o(this,"_fetch",
void 0),this._fetch=e}jsonRequest(e,t,r,n){switch(e){case c.GET:return this._getJson(t,r,n);case c.POST:
return this._postJson(t,r,n);case c.PUT:return this._putJson(t,r,n);case c.DELETE:return this._deleteJson(t,r,n);
default:throw new TypeError("[Fetch]RequestClient: Unsupported method: "+e)}}_getJson(e,t,r){const n={method:"GET",
mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},credentials:"same-origin"};return t&&(
n.headers=d(d({},n.headers),t)),r&&(n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>Js._successResponse(e,c.GET))}
_putJson(e,t,r){const n={method:"PUT",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},
credentials:"same-origin"};return t&&(n.headers=d(d({},n.headers),t)),r&&(n.body=JSON.stringify(r)),this._fetch(e,n
).then(e=>Js._successResponse(e,c.PUT))}_postJson(e,t,r){const n={method:"POST",mode:"cors",cache:"no-cache",headers:{
"Content-Type":"application/json"},credentials:"same-origin"};return t&&(n.headers=d(d({},n.headers),t)),r&&(
n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>Js._successResponse(e,c.POST))}_deleteJson(e,t,r){const n={
method:"DELETE",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},credentials:"same-origin"};
return t&&(n.headers=d(d({},n.headers),t)),r&&(n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>Js._successResponse(e,
c.DELETE))}static _successResponse(e,t){const r=e.status;if(!e.ok||r<200||400<=r){const n=e.url,
i=`${r} ${e.statusText} for ${te(t)} `+n;return e.json().then(e=>{throw new Vs(r,i,t,n,e)})}return e.json()}}
const Xs=Bs?require("http"):void 0,Qs=Bs?require("https"):void 0,Ys=C.createLogger("RequestClient");class Zs{
static setLogLevel(e){Ys.setLogLevel(e),Ws.setLogLevel(e)}static async jsonRequest(e,t,r,n){
return this._client.jsonRequest(e,t,r,n)}static async getJson(e,t){return this._client.jsonRequest(c.GET,e,t)}
static async postJson(e,t,r){return Ys.debug(".postJson: ",e,t,r),this._client.jsonRequest(c.POST,e,r,t)}
static async patchJson(e,t,r){return Ys.debug(".patchJson: ",e,t,r),this._client.jsonRequest(c.PATCH,e,r,t)}
static async putJson(e,t,r){return Ys.debug(".putJson: ",e,t,r),this._client.jsonRequest(c.PUT,e,r,t)}
static async deleteJson(e,t,r){return Ys.debug(".deleteJson: ",e,r,t),this._client.jsonRequest(c.DELETE,e,t,r)}
static _initClient(){if($s&&this._hasWindowObject())return Ys.debug("Detected browser environment"),new Js(
window.fetch.bind(window));if(Bs)return new Ws(Xs,Qs);throw new TypeError(
"Could not detect request client implementation")}static _hasWindowObject(){return"undefined"!=typeof window}}o(Zs,
"_client",Zs._initClient()),Sa={OK:0,0:"OK",ERROR:1,1:"ERROR",HELP:2,2:"HELP",VERSION:3,3:"VERSION"};
const eu=C.createLogger("Headers");class tu{static setLogLevel(e){eu.setLogLevel(e)}constructor(e){o(this,"_value",
void 0),o(this,"_uninitializedValue",void 0),this._value=void 0,this._uninitializedValue=e}_initializeValue(){
var t=this._value,r=this._uninitializedValue;try{r&&(this._uninitializedValue=void 0,this.addAll(r))}catch(e){
throw this._value=t,this._uninitializedValue=r,e}}clear(){this._value={},this._uninitializedValue=void 0}add(e,t){
this._uninitializedValue&&this._initializeValue(),eu.debug("add header: ",e,t),e=e.toLowerCase();var r=this._value&&Zo(
this._value,e)?this._value[e]:void 0;void 0===this._value?this._value={[e]:t}:void 0!==r?ne(r)?this._value=d(d({},
this._value),{},{[e]:gi([],r,[t])}):this._value=d(d({},this._value),{},{[e]:[r,t]}):this._value=d(d({},this._value),{},{
[e]:t})}containsKey(e){return this._uninitializedValue&&this._initializeValue(),e=e.toLowerCase(),Zo(this._value,e)}
isEmpty(){this._uninitializedValue&&this._initializeValue();var e=this._value;return!e||0===Z(e).length}keySet(){
this._uninitializedValue&&this._initializeValue();const t=new Set;var e;return void 0!==this._value&&(e=Z(this._value),
Io(e,e=>{t.add(e)})),t}getValue(e){if(this._uninitializedValue&&this._initializeValue(),this._value
)return e=e.toLowerCase(),Zo(this._value,e)?this._value[e]:void 0}getFirst(e){
return this._uninitializedValue&&this._initializeValue(),ne(e=this.getValue(e))?e.length?e[0]:void 0:e}getHost(){
return this._uninitializedValue&&this._initializeValue(),this.getFirst("host")}addAll(e,t){if(
this._uninitializedValue&&this._initializeValue(),H(e)){const r=e;if(!V(t))throw new TypeError(
"Headers.addAll signature must be (string, string[]) or (HeadersObject)");Io(t,e=>{this.add(r,e)})}else{const n=e;Io(Z(n
),t=>{var e=n[t];ne(e)?Io(e,e=>{this.add(t,e)}):void 0!==e&&this.add(t,e)})}}remove(e){
this._uninitializedValue&&this._initializeValue(),e=e.toLowerCase();var t=this.getValue(e);const r=d({},this._value);
return r&&Zo(r,e)&&delete r[e],this._value=r,t}set(e,t){this._uninitializedValue&&this._initializeValue(),
e=e.toLowerCase(),void 0===this._value?this._value={[e]:t}:this._value=d(d({},this._value),{},{[e]:t})}setAll(t){
this._uninitializedValue&&this._initializeValue(),Io(Z(t),e=>{this.set(e,t[e])})}valueOf(){var e;
return this._uninitializedValue&&this._initializeValue(),null!=(e=this._value)?e:void 0}toString(){
this._uninitializedValue&&this._initializeValue();const r=this._value;if(!r||this.isEmpty())return"Headers()";var e=Z(r)
const t=qn(e,e=>{const t=r[e];return t?V(t)?e+": "+t.map(e=>0<=t.indexOf(";")||0<=t.indexOf(",")?`"${t}"`:t).join(", "
):0<=t.indexOf(";")?`${e}: "${t}"`:e+": "+t:""+e});return`Headers(${t.join("; ")})`}clone(){
return this._uninitializedValue&&this._initializeValue(),new tu(this._value?d({},this._value):void 0)}}p={exports:{}},(
L=function(r,n,i){Na.stat(r,function(e,t){i(e,!e&&oe(t,r,n))})}).sync=function(e,t){return oe(Na.statSync(e),e,t)},
Na=ys.default,(x=function(e,r,n){Aa.stat(e,function(e,t){n(e,!e&&ae(t,r))})}).sync=function(e,t){return ae(Aa.statSync(e
),t)},Aa=ys.default,Pa="win32"===process.platform||As.TESTING_WINDOWS?L:x,(P=function e(t,i,r){if(
"function"==typeof i&&(r=i,i={}),!r){if("function"!=typeof Promise)throw new TypeError("callback not provided");
return new Promise(function(r,n){e(t,i||{},function(e,t){e?n(e):r(t)})})}Pa(t,i||{},function(e,t){e&&(
"EACCES"===e.code||i&&i.ignoreErrors)&&(e=null,t=!1),r(e,t)})}).sync=function(e,t){try{return Pa.sync(e,t||{})}catch(e){
if(t&&t.ignoreErrors||"EACCES"===e.code)return!1;throw e}};
const ru="win32"===process.platform||"cygwin"===process.env.OSTYPE||"msys"===process.env.OSTYPE,nu=_s.default,
iu=ru?";":":",ou=P,au=e=>Object.assign(new Error("not found: "+e),{code:"ENOENT"}),su=(e,t)=>{var r=t.colon||iu,
n=e.match(/\//)||ru&&e.match(/\\/)?[""]:[...ru?[process.cwd()]:[],...(t.path||process.env.PATH||"").split(r)];
const i=ru?t.pathExt||process.env.PATHEXT||".EXE;.CMD;.BAT;.COM":"",o=ru?i.split(r):[""];return ru&&-1!==e.indexOf("."
)&&""!==o[0]&&o.unshift(""),{pathEnv:n,pathExt:o,pathExtExe:i}},uu=((R=(o,s,t)=>{"function"==typeof s&&(t=s,s={}),
s=s||{};const{pathEnv:a,pathExt:u,pathExtExe:c}=su(o,s),l=[],d=i=>new Promise((e,t)=>{if(i===a.length
)return s.all&&l.length?e(l):t(au(o));const r=a[i];var t=/^".*"$/.test(r)?r.slice(1,-1):r,n=nu.join(t,o),
t=!t&&/^\.[\\\/]/.test(o)?o.slice(0,2)+n:n;e(f(t,i,0))}),f=(i,o,a)=>new Promise((r,e)=>{if(a===u.length)return r(d(o+1))
const n=u[a];ou(i+n,{pathExt:c},(e,t)=>{if(!e&&t){if(!s.all)return r(i+n);l.push(i+n)}return r(f(i,o,a+1))})});
return t?d(0).then(e=>t(null,e),t):d(0)}).sync=(t,r)=>{r=r||{};var n,i,o,a,{pathEnv:s,pathExt:u,pathExtExe:c}=su(t,r);
const l=[];for(let e=0;e<s.length;e++){const d=s[e];n=/^".*"$/.test(d)?d.slice(1,-1):d,i=nu.join(n,t),
o=!n&&/^\.[\\\/]/.test(t)?t.slice(0,2)+i:i;for(let e=0;e<u.length;e++){a=o+u[e];try{if(ou.sync(a,{pathExt:c})){if(!r.all
)return a;l.push(a)}}catch(e){}}}if(r.all&&l.length)return l;if(r.nothrow)return null;throw au(t)},(T={exports:{}}
).exports=Xa=(e={})=>{var t=e.env||process.env;return"win32"!==(e.platform||process.platform)?"PATH":Object.keys(t
).reverse().find(e=>"PATH"===e.toUpperCase())||"Path"},T.exports.default=Xa,_s.default),cu=R,lu=T.exports,du=(
h=function(e){return se(e)||se(e,!0)},/([()\][%!^"`<>&|;, *?])/g),fu=((Ha={}).command=function(e){return e.replace(du,
"^$1")},Ha.argument=function(e,t){return e=(e=`"${e=(e=(e=""+e).replace(/(\\*)"/g,'$1$1\\"')).replace(/(\\*)$/,"$1$1"
)}"`).replace(du,"^$1"),t?e.replace(du,"^$1"):e},/^#!(.*)/),pu=ys.default,hu=(e="")=>{const t=e.match(fu);if(!t
)return null;const[r,n]=t[0].replace(/#! ?/,"").split(" ");return"env"===(e=r.split("/").pop())?n:n?e+" "+n:e},
gu=_s.default,mu=h,vu=Ha,bu="win32"===process.platform,yu=/\.(?:com|exe)$/i,
_u=/node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i,Eu="win32"===process.platform,wu=cs.default,Ou={hookChildProcess:function(
r,n){if(Eu){const i=r.emit;r.emit=function(e,t){return"exit"===e&&(e=ce(t,n))?i.call(r,"error",e):i.apply(r,arguments)}}
},verifyENOENT:ce,verifyENOENTSync:function(e,t){return Eu&&1===e&&!t.file?ue(t.original,"spawnSync"):null},
notFoundError:ue},Ru=(p.exports=le,p.exports.spawn=le,p.exports.sync=function(e,t,r){e=Re(e,t,r);const n=wu.spawnSync(
e.command,e.args,e.options);return n.error=n.error||Ou.verifyENOENTSync(n.status,e),n},p.exports._parse=Re,
p.exports._enoent=Ou,xa=p.exports,["env"]),Tu=Object.getOwnPropertyDescriptor(Function.prototype,"toString"),
Su=Object.getOwnPropertyDescriptor(Function.prototype.toString,"name"),Nu=new WeakMap,Au=(t,r={})=>{function n(...e){if(
Nu.set(n,++o),1===o)i=t.apply(this,e),t=null;else if(!0===r.throw)throw new Error(
`Function \`${a}\` can only be called once`);return i}if("function"!=typeof t)throw new TypeError("Expected a function")
let i,o=0;const a=t.displayName||t.name||"<anonymous>";var e,s,u,c,l,d,f,[p,h,{ignoreNonConfigurable:g=!1}={}]=[n,t],
m=p.name;for(const v of Reflect.ownKeys(h))e=p,l=h,s=v,u=g,
"length"!==s&&"prototype"!==s&&"arguments"!==s&&"caller"!==s&&(c=Object.getOwnPropertyDescriptor(e,s),
l=Object.getOwnPropertyDescriptor(l,s),void 0!==c&&!c.configurable&&(
c.writable!==l.writable||c.enumerable!==l.enumerable||c.configurable!==l.configurable||!c.writable&&c.value!==l.value
)&&u||Object.defineProperty(e,s,l));return d=p,(f=Object.getPrototypeOf(h))!==Object.getPrototypeOf(d
)&&Object.setPrototypeOf(d,f),d=p,f=h,m=""===m?"":`with ${m.trim()}() `,m=((e,t)=>`/* Wrapped ${e}*/
`+t).bind(null,m,f.toString()),Object.defineProperty(m,"name",Su),Object.defineProperty(d,"toString",b(b({},Tu),{},{
value:m})),Nu.set(n,o),n},Pu=(Au.callCount=e=>{if(Nu.has(e))return Nu.get(e);throw new Error(
`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`)},34),xu=[{name:"SIGHUP",number:1,
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
description:"Invalid system call",standard:"other"}],ju=function(){const e=Ee();return e.reduce(we,{})}();{const dc=Ee()
I=Array.from({length:65},(e,t)=>{var r,n=dc,i=(r=t,void 0!==(i=n.find(({name:e})=>ms.constants.signals[e]===r)
)?i:n.find(e=>e.number===r));if(void 0===i)return{};var{name:n,description:i,supported:o,action:a,forced:s,standard:u}=i
return{[t]:{name:n,number:t,description:i,supported:o,action:a,forced:s,standard:u}}}),Object.assign({},...I)}const Iu=(
{stdout:e,stderr:t,all:r,error:n,signal:i,exitCode:o,command:a,escapedCommand:s,timedOut:u,isCanceled:c,killed:l,
parsed:{options:{timeout:d}}})=>{var f,p,h,g,m,v,b;o=null===o?void 0:o,f=void 0===(i=null===i?void 0:i
)?void 0:ju[i].description,d=`Command ${{timedOut:d,timeout:p,errorCode:h,signal:g,signalDescription:m,exitCode:v,
isCanceled:b}={timedOut:u,timeout:d,errorCode:n&&n.code,signal:i,signalDescription:f,exitCode:o,isCanceled:c},
d?`timed out after ${p} milliseconds`:b?"was canceled":void 0!==h?"failed with "+h:void 0!==g?`was killed with ${g} (${m})`:void 0!==v?"failed with exit code "+v:"failed"}: `+a
const y=(p="[object Error]"===Object.prototype.toString.call(n))?d+`
`+n.message:d;return b=[y,t,e].filter(Boolean).join("\n"),p?(n.originalMessage=n.message,n.message=b):n=new Error(b),
n.shortMessage=y,n.command=a,n.escapedCommand=s,n.exitCode=o,n.signal=i,n.signalDescription=f,n.stdout=e,n.stderr=t,
void 0!==r&&(n.all=r),"bufferedData"in n&&delete n.bufferedData,n.failed=!0,n.timedOut=Boolean(u),n.isCanceled=c,
n.killed=l&&!u,n},Lu=["stdin","stdout","stderr"],Cu=t=>{var r,e;if(t){const n=t.stdio;if(void 0===n)return Lu.map(
e=>t[e]);if(r=t,Lu.some(e=>void 0!==r[e]))throw new Error(
"It's not possible to provide `stdio` in combination with one of "+Lu.map(e=>`\`${e}\``).join(", "));if(
"string"==typeof n)return n;if(Array.isArray(n))return e=Math.max(n.length,Lu.length),Array.from({length:e},(e,t)=>n[t])
throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof n}\``)}},Gu=(w={exports:{}
},(S=g={exports:{}}).exports=["SIGABRT","SIGALRM","SIGHUP","SIGINT","SIGTERM"],
"win32"!==process.platform&&S.exports.push("SIGVTALRM","SIGXCPU","SIGXFSZ","SIGUSR2","SIGTRAP","SIGSYS","SIGQUIT",
"SIGIOT"),"linux"===process.platform&&S.exports.push("SIGIO","SIGPOLL","SIGPWR","SIGSTKFLT","SIGUNUSED"),Oe(m=As.process
)?(ja=ls.default,Ia=g.exports,La=/^win/i.test(m.platform),"function"!=typeof(E=fs.default)&&(E=E.EventEmitter),
m.__signal_exit_emitter__?v=m.__signal_exit_emitter__:((v=m.__signal_exit_emitter__=new E).count=0,v.emitted={}),
v.infinite||(v.setMaxListeners(1/0),v.infinite=!0),w.exports=function(e,t){var r;return Oe(As.process)?(ja.equal(
typeof e,"function","a callback must be provided for exit handler"),!1===Fa&&Ma(),r="exit",t&&t.alwaysLast&&(
r="afterexit"),t=function(){v.removeListener(r,e),0===v.listeners("exit").length&&0===v.listeners("afterexit"
).length&&Ca()},v.on(r,e),t):function(){}},Ca=function(){Fa&&Oe(As.process)&&(Fa=!1,Ia.forEach(function(e){try{
m.removeListener(e,Ua[e])}catch(e){}}),m.emit=ka,m.reallyExit=Da,--v.count)},w.exports.unload=Ca,Ga=function(e,t,r){
v.emitted[e]||(v.emitted[e]=!0,v.emit(e,t,r))},Ua={},Ia.forEach(function(e){Ua[e]=function(){Oe(As.process
)&&m.listeners(e).length===v.count&&(Ca(),Ga("exit",null,e),Ga("afterexit",null,e),La&&"SIGHUP"===e&&(e="SIGINT"),
m.kill(m.pid,e))}}),w.exports.signals=function(){return Ia},Fa=!1,Ma=function(){!Fa&&Oe(As.process)&&(Fa=!0,v.count+=1,
Ia=Ia.filter(function(e){try{return m.on(e,Ua[e]),!0}catch(e){return!1}}),m.emit=$a,m.reallyExit=qa)},w.exports.load=Ma,
Da=m.reallyExit,qa=function(e){Oe(As.process)&&(m.exitCode=e||0,Ga("exit",m.exitCode,null),Ga("afterexit",m.exitCode,
null),Da.call(m,m.exitCode))},ka=m.emit,$a=function(e,t){return"exit"===e&&Oe(As.process)?(void 0!==t&&(m.exitCode=t),
e=ka.apply(this,arguments),Ga("exit",m.exitCode,null),Ga("afterexit",m.exitCode,null),e):ka.apply(this,arguments)}
):w.exports=function(){return function(){}},Ba=w.exports,(e,t,r,n)=>{var i;if([t,n,i]=[t,r.forceKillAfterTimeout,n],(
t===Ns.default.constants.signals.SIGTERM||"string"==typeof t&&"SIGTERM"===t.toUpperCase())&&!1!==n&&i){t=(({
forceKillAfterTimeout:e=!0})=>{if(!0===e)return 5e3;if(!Number.isFinite(e)||e<0)throw new TypeError(
`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);return e})(r);
const o=setTimeout(()=>{e("SIGKILL")},t);o.unref&&o.unref()}}),Uu=(e,t,r)=>{e.kill(t),r(Object.assign(new Error(
"Timed out"),{timedOut:!0,signal:t}))},Fu=(y={exports:{}},hs.default.PassThrough),Mu=ps.default.constants,Du=(
Qa=hs.default,gs.default.promisify),qu=Du(Qa.pipeline);class ku extends Error{constructor(){super("maxBuffer exceeded"),
this.name="MaxBufferError"}}y.exports=fe,y.exports.buffer=(e,t)=>fe(e,b(b({},t),{},{encoding:"buffer"})),
y.exports.array=(e,t)=>fe(e,b(b({},t),{},{array:!0})),y.exports.MaxBufferError=ku,za=y.exports;
const $u=hs.default.PassThrough,Bu=(Va=function(){function t(e){return Array.isArray(e)?e.forEach(t):(n.push(e),e.once(
"end",r.bind(null,e)),e.once("error",i.emit.bind(i,"error")),e.pipe(i,{end:!1})),this}function r(t){!(n=n.filter(
function(e){return e!==t})).length&&i.readable&&i.end()}var n=[],i=new $u({objectMode:!0});return i.setMaxListeners(0),
i.add=t,i.isEmpty=function(){return 0==n.length},i.on("unpipe",r),Array.prototype.slice.call(arguments).forEach(t),i},
async(e,t)=>{if(e){e.destroy();try{return await t}catch(e){return e.bufferedData}}}),zu=(e,{encoding:t,buffer:r,
maxBuffer:n})=>{if(e&&r)return t?za(e,{encoding:t,maxBuffer:n}):za.buffer(e,{maxBuffer:n})},Vu=(async()=>{})(
).constructor.prototype,Hu=["then","catch","finally"].map(e=>[e,Reflect.getOwnPropertyDescriptor(Vu,e)]),Ku=(e,t)=>{for(
const[n,i]of Hu){var r="function"==typeof t?(...e)=>Reflect.apply(i.value,t(),e):i.value.bind(t);Reflect.defineProperty(
e,n,b(b({},i),{},{value:r}))}return e},Wu=(e,t=[])=>Array.isArray(t)?[e,...t]:[e],Ju=/^[\w.-]+$/,Xu=/"/g,
Qu=e=>"string"!=typeof e||Ju.test(e)?e:`"${e.replace(Xu,'\\"')}"`,Yu=1e8,Zu=({env:r,extendEnv:n,preferLocal:i,
localDir:o,execPath:a})=>{if(n=n?b(b({},Ts.default.env),r):r,i){let{env:e=Ts.default.env}=r={env:n,cwd:o,execPath:a},
t=function(e,t){var r,n,i,o;if(null==e)return{};if(r=function(e,t){var r,n,i,o;if(null==e)return{};for(r={},
n=Object.keys(e),o=0;o<n.length;o++)i=n[o],0<=t.indexOf(i)||(r[i]=e[i]);return r}(e,t),Object.getOwnPropertySymbols)for(
o=Object.getOwnPropertySymbols(e),i=0;i<o.length;i++)n=o[i],0<=t.indexOf(n)||Object.prototype.propertyIsEnumerable.call(
e,n)&&(r[n]=e[n]);return r}(r,Ru);return i=de({env:e=b({},e)}),t.path=e[i],e[i]=function(e={}){const{
cwd:t=Ts.default.cwd(),path:r=Ts.default.env[de()],execPath:n=Ts.default.execPath}=e;let i,o=(
e=t instanceof URL?Ss.default.fileURLToPath(t):t,Os.default.resolve(e));const a=[];for(;i!==o;)a.push(Os.default.join(o,
"node_modules/.bin")),i=o,o=Os.default.resolve(o,"..");return a.push(Os.default.resolve(e,n,"..")),[...a,r].join(
Os.default.delimiter)}(t),e}return n},ec=(e,t,r)=>{return"string"==typeof t||ds.Buffer.isBuffer(t)?e.stripFinalNewline?(
n="string"==typeof(e=t)?"\n":"\n".charCodeAt(),i="string"==typeof e?"\r":"\r".charCodeAt(),(e=e[e.length-1]===n?e.slice(
0,-1):e)[e.length-1]===i?e.slice(0,-1):e):t:void 0===r?void 0:"";var n,i},tc=C.createLogger("doExec"),rc=C.createLogger(
"git-pull"),nc=C.createLogger("git-submodule-update"),ic=C.createLogger("git-submodule-add"),oc=C.createLogger(
"get-git-branch"),ac="fi.hg.github.org",sc=C.createLogger("git-url"),uc=C.createLogger("get-git-url"),cc=C.createLogger(
"git-config"),G=C.createLogger("update"),lc=(ks.initEnvFromDefaultFiles(),C.setLogLevel(N),C.createLogger("main"));
!async function(e=[]){try{tu.setLogLevel(u.INFO),Zs.setLogLevel(u.INFO),lc.debug("Loglevel as "+C.getLogLevelString());
const{scriptName:r,parseStatus:n,exitStatus:i,errorString:o,freeArgs:a}=class{static parseArguments(e,t=[]){var r,n,i,
o=null!=(r=t.shift())?r:"",a=null!=(r=t.shift())?r:"";if(!a)return{parseStatus:Sa.ERROR,
exitStatus:l.ARGUMENT_PARSE_ERROR,nodePath:o,scriptName:e,freeArgs:[],extraArgs:[]};if(0===t.length)return{
parseStatus:Sa.ERROR,exitStatus:l.ARGUMENT_PARSE_ERROR,nodePath:o,scriptName:a,freeArgs:[],extraArgs:[]};let s=!0,u=[],
c=[];do{if(i=null!=(n=t.shift())?n:"",s)switch(function(){switch(i){case"-h":case"--help":case 0:return 0;case"-v":
case"--version":case 1:return 1;case"--":case 2:return 2}}()){case 0:return{parseStatus:Sa.HELP,exitStatus:l.OK,
nodePath:o,scriptName:a,freeArgs:u,extraArgs:c};case 1:return{parseStatus:Sa.VERSION,exitStatus:l.OK,nodePath:o,
scriptName:a,freeArgs:u,extraArgs:c};case 2:s=!1;break;default:if(s){if(ga(i,"-"))return{
errorString:"Unknown argument: "+i,parseStatus:Sa.ERROR,exitStatus:l.UNKNOWN_ARGUMENT,nodePath:o,scriptName:a,
freeArgs:u,extraArgs:c};u.push(i)}else c.push(i)}}while(1<=t.length);return{parseStatus:Sa.OK,exitStatus:l.OK,
nodePath:o,scriptName:a,freeArgs:u,extraArgs:c}}}.parseArguments(Gs,e);if(n===Sa.HELP||n===Sa.VERSION
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
`),i;if(o)return console.error("ERROR: "+o),i;ks.setupDestroyHandler(()=>{lc.debug(
"Stopping command from process utils event")},e=>{lc.error("Error while shutting down the service: ",e)});
const s=a.shift();switch(s.toLowerCase()){case"u":case"i":case"update":case"install":return await async function(e){
const t=e.shift();if(!t)return ye(me());var e=e.shift(),r=t.substring(1).includes("@")?t.substring(1).split("@").pop(
):void 0;return async function(e,t,r){G.debug("updateSubModule: ",e,t,r);var n,i,o=me(),{gitUrl:e,packageName:a
}=await async function(e){if(sc.debug("getGitUrl: sourceUrl = ",e),e.includes(":"))return sc.debug(
"getGitUrl: direct url: ",e),{gitUrl:e,packageName:e.replace(/\.git$/,"").split(":").slice(1).join(":").split("/"
).slice(1).join("/")};if((e=e.startsWith("@")?e.substring(1):e).includes("/")){const r=Us+`:${e}.git`;return sc.debug(
"getGitUrl: github with org: ",r),{gitUrl:r,packageName:e.split("/").slice(1).join("/")}}var t=await async function(t){
var r,n=t,i=`https://${function(){const[e,t]=n.toLowerCase().split(".").slice(0,2);return t&&e?[t,e].join("."):e}(
)}/.well-known/fi.hg.m.json`,i=(sc.debug("getGitOrganization: wellKnownUrl = ",i),await Zs.getJson(i));if(sc.debug(
"getGitOrganization: data = ",i),i&&Q(i)){let e=i&&Zo(i,t)?i[t]:void 0;return sc.debug(
"getGitOrganization: packageMetadata = ",e),e&&Q(e)&&Zo(e,ac)&&(r=e[ac],sc.debug(
"getGitOrganization: package: githubOrgName = ",r),H(r))?r:(r=t.toLowerCase().split(".").slice(0,2).join("."),e=i&&Zo(i,
r)?i[r]:void 0,sc.debug("getGitOrganization: packageMetadata = ",e),e&&Q(e)&&Zo(e,ac)&&(t=e[ac],sc.debug(
"getGitOrganization: scope: githubOrgName = ",t),H(t))?t:Zo(i,ac)&&(r=i[ac],sc.debug(
"getGitOrganization: root: githubOrgName = ",r),H(r))?r:void 0)}}(e);if(!t)throw new TypeError(
"No Github organization configured for: "+e);const r=Us+`:${t}/${e}.git`;return sc.debug(
`getGitUrl: github with org "${t}": `,r),{gitUrl:r,packageName:e}}(e);if(!e)throw new TypeError(
`Could not detect git url for: "${e}"`);G.debug("updateSubModule: gitUrl = ",e),G.debug(
"updateSubModule: packageName = ",a),t=t||us.resolve(us.resolve(o,"src"),a.split(".").join("/")),o=us.relative(me(),t),
G.debug("relativeTargetPath = ",o);let s;try{s=await ss.promises.stat(t),G.debug("stats: ",s)}catch(e){"ENOENT"!==(
null==e?void 0:e.code)&&G.error("File stat error: ",t,e),s=void 0}if(i=null!=(i=null==(i=s)?void 0:i.isFile())&&i,
G.debug("isFile: ",i),n=null!=(n=null==(n=s)?void 0:n.isDirectory())&&n,G.debug("isDirectory: ",n),n)G.debug(
"Target directory already exists, we'll only update: ",t),await he(o);else{if(void 0!==s&&void 0!==i)return G.error(
"Target file not a directory: ",t),l.CONFLICT;n=e,i=o,ic.debug("addGitSubModule: ",n,i),await pe([Ms,"submodule","add",n
,i]),await l.OK,G.debug("Initialized: ",e,o)}return n=null!=r?r:"main",G.debug("nextBranch: ",n),i=await ge(o),G.debug(
"currentBranch: ",i),i!==n?(r=o,i=n,cc.debug("setGitSubModuleBranch: ",r,i),await ve(r,"branch",i)):G.debug(
"Branch already identical: ",n),r=o,i=e,cc.debug("setGitSubModuleUrl: ",r,i),await ve(r,"url",i),r=e=o,cc.debug(
"setGitSubModuleUrl: ",e,r),await ve(e,"path",r),await ye(t),console.info(a+`@${n}:`+o),l.OK}(t,e,r)}(a);case"r":
case"remove":return a,await l.UNIMPLEMENTED_FEATURE;case"l":case"list":return a,t=await async function(l){cc.debug(
"getGitSubModuleList: ",l),e=await async function(e){cc.debug("getGitSubModuleConfigList: ",e,"^submodule\\.");const t=[
Ms,"config","-f",Fs,"--list"];var{stdout:e,stderr:r,exitCode:n}=await pe(t,{cwd:e,stdio:"pipe"});if(cc.debug(
"getGitSubModuleConfigList: stdout: ",e),0!==n)throw new Error(`Internal command ('${t.join(" "
)}' with exit status ${n}) had errors: `+r);if(H(e))return e;throw new TypeError(`Internal command ('${t.join(" "
)}' with exit status ${n}) output was not a string: `+e)}(l);const d=ki(e.split("\n"),(e,t)=>{let[r,n]=function(e){if(
0<=e.indexOf("=")){const t=e.split("=");return[t.shift(),t.join("=")]}return[e,""]}(t);return cc.debug(
`parseSubModuleConfigItemList: Parsed: "${r}", "${n}"`),ga(r,"submodule.")?(r=r.substring("submodule.".length),cc.debug(
`parseSubModuleConfigItemList: Trimmed lineKey: "${r}"`),_a(r,".branch")?(r=r.substring(0,r.length-".branch".length),
e.push(be(r,"branch",n))):_a(r,".path")?(r=r.substring(0,r.length-".path".length),e.push(be(r,"path",n))):_a(r,".url")?(
r=r.substring(0,r.length-".url".length),e.push(be(r,"url",n))):cc.debug(
`parseSubModuleConfigItemList: Unknown config line: "${r}"`)):cc.debug(
`parseSubModuleConfigItemList: Not submodule line: "${r}"`),e},[]);var e=eo(qn(d,e=>e.key));const f=us.resolve(l,"src");
return ki(e,async(e,t)=>{var r,n,i,o,a,s;const u=await e,c=(e=So(d,e=>e.key===t),r=null==(r=Gi(e,e=>"branch"===e.subKey)
)?void 0:r.value,n=null==(n=Gi(e,e=>"path"===e.subKey))?void 0:n.value,e=null==(e=Gi(e,e=>"url"===e.subKey)
)?void 0:e.value,us.resolve(l,i=t));return o=ga(c,f+"/")?c.substring(f.length+1).split("/").join("."):"",a=await ge(c),
s=await async function(e){uc.debug("getGitUrl: ",e);var{stderr:t,stdout:r,exitCode:n}=await pe([Ms,"remote","get-url",
"origin"],{cwd:e,stdio:"pipe"});if(0!==n)throw new Error(
`Command to get git origin url for "${e}" failed with status ${n}: `+t);return uc.debug("stdout: ",r),r}(c),u.push({
key:t,path:i,packageName:o,branch:a,url:s,configPath:n,configBranch:r,configUrl:e}),u},Promise.resolve([]))}(me()),Io(t,
e=>{let t="",r=(e.path!==(null==e?void 0:e.configPath)&&(t=void 0===(null==e?void 0:e.configPath
)?" [path not configured]":` [path configured as "${e.configPath}"]`),""),n=(e.branch!==(null==e?void 0:e.configBranch
)&&(r=void 0===(null==e?void 0:e.configBranch)?" [branch not configured]":` [branch configured as @${e.configBranch}]`),
"");e.url!==(null==e?void 0:e.configUrl)&&(n=void 0===(null==e?void 0:e.configUrl
)?" [url not configured]":` [url configured as "${e.configUrl}"]`),console.info(e.packageName+"@"+e.branch+r+n+t)}),
await l.OK}return l.UNKNOWN_ARGUMENT}catch(e){return lc.error("Fatal error: ",e),l.FATAL_ERROR}var t}(process.argv
).then(e=>{process.exit(e)}).catch(e=>{console.error("Error: ",e),process.exit(1)});
