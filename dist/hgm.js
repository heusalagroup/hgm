#!/usr/bin/env node
"use strict";function G(t,e){var r,n=Object.keys(t);return Object.getOwnPropertySymbols&&(
r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),
n.push.apply(n,r)),n}function d(t){for(var r,e=1;e<arguments.length;e++)r=null!=arguments[e]?arguments[e]:{},e%2?G(
Object(r),!0).forEach(function(e){o(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,
Object.getOwnPropertyDescriptors(r)):G(Object(r)).forEach(function(e){Object.defineProperty(t,e,
Object.getOwnPropertyDescriptor(r,e))});return t}function o(e,t,r){t in e?Object.defineProperty(e,t,{value:r,
enumerable:!0,configurable:!0,writable:!0}):e[t]=r}function e(e){return e&&"object"==typeof e&&"default"in e?e:{
default:e}}function F(r){if(r&&r.__esModule)return r;var n=Object.create(null);return r&&Object.keys(r).forEach(
function(e){var t;"default"!==e&&(t=Object.getOwnPropertyDescriptor(r,e),Object.defineProperty(n,e,t.get?t:{
enumerable:!0,get:function(){return r[e]}}))}),n.default=r,Object.freeze(n)}function M(e){var t,r=-1,
n=null==e?0:e.length;for(this.clear();++r<n;)t=e[r],this.set(t[0],t[1])}function $(e){var t,r=-1,n=null==e?0:e.length;
for(this.clear();++r<n;)t=e[r],this.set(t[0],t[1])}function k(e){var t,r=-1,n=null==e?0:e.length;for(this.clear();++r<n;
)t=e[r],this.set(t[0],t[1])}function D(e){e=this.__data__=new Rt(e),this.size=e.size}function q(e){var t=-1,
r=null==e?0:e.length;for(this.__data__=new Tt;++t<r;)this.add(e[t])}function B(n,i){function o(){var e=arguments,
t=i?i.apply(this,e):e[0],r=o.cache;return r.has(t)?r.get(t):(e=n.apply(this,e),o.cache=r.set(t,e)||r,e)}if(
"function"!=typeof n||null!=i&&"function"!=typeof i)throw new TypeError("Expected a function");return o.cache=new(
B.Cache||Zr),o}function z(e){return void 0===e}function V(e){return a(e)}function H(e){return ba(e)}function K(e){
return wa(e)}function W(e,t){return hi(e,t)}function J(e,t=H,r=void 0){return!!(void 0===r||Ke(n=e)&&W(Ca(n),r))&&(
n=void 0!==t?t:H,Ke(r=e)&&W(Z(r),n));var n}function X(...e){return t=>si(e,e=>e(t))}function Q(e){return Ke(e)}
function Y(e){if(void 0!==e&&""!==e)return""+e}function Z(e,t=H){var r;return V(e)?(r=Xn(e,(e,t)=>t),Go(r,e=>t(e))):Q(e
)?(r=Reflect.ownKeys(e),Go(r,e=>t(e))):[]}function ee(e){if(!e.startsWith("%{")||!e.endsWith("}"))return Y(e)}
function te(e){if(K(e))switch(e){case f.OPTIONS:return"options";case f.GET:return"get";case f.POST:return"post";
case f.PUT:return"put";case f.DELETE:return"delete";case f.PATCH:return"patch"}throw new TypeError(
"Unsupported value for stringifyRequestMethod(): "+e)}function re(e){return H(t=e)||K(t)||fa(t)||pa(t)||ne(e)||(e=t=e,
!!Ke(e)&&!(e instanceof Date)&&!Xe(e)&&!V(e)&&J(e,H,void 0)&&J(t,H,X(re,z)));var t}function ne(e){var t,[e,r=void 0,
n=void 0,i=void 0]=[e,X(re,z)];return!!a(e)&&(t=null!=(t=null==e?void 0:e.length)?t:0,!(void 0!==n&&t<n)&&!(
void 0!==i&&i<t)&&(void 0===r||W(e,r)))}function ie(t,e){var r,n=Object.keys(t);return Object.getOwnPropertySymbols&&(
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
e.options.cwd)}catch(e){}let a;try{a=Eu.sync(e.command,{path:r[_u({env:r})],pathExt:t?wu.delimiter:void 0})}catch(e
){}finally{o&&process.chdir(n)}return a=a&&wu.resolve(i?e.options.cwd:"",a)}function ue(e,t){return Object.assign(
new Error(`${t} ${e.command} ENOENT`),{code:"ENOENT",errno:"ENOENT",syscall:t+" "+e.command,path:e.command,
spawnargs:e.args})}function ce(e,t){return Lu&&1===e&&!t.file?ue(t.original,"spawn"):null}function le(e,t,r){
return e=Ce(e,t,r),t=Cu.spawn(e.command,e.args,e.options),Uu.hookChildProcess(t,e),t}function de(e={}){var{
env:e=process.env,platform:t=process.platform}=e;return"win32"!==t?"PATH":Object.keys(e).reverse().find(
e=>"PATH"===e.toUpperCase())||"Path"}async function fe(n,u){if(!n)throw new Error("Expected a stream");const i=(u=y({
maxBuffer:1/0},u)).maxBuffer,o=(e=>{const t=(e=y({},u)).array;let r=e.encoding;const n="buffer"===r;let i=!1;t?i=!(r||n
):r=r||"utf8",n&&(r=null);const o=new Wu({objectMode:i});r&&o.setEncoding(r);let a=0;const s=[];return o.on("data",e=>{
s.push(e),i?a=s.length:a+=e.length}),o.getBufferedValue=()=>t?s:n?Buffer.concat(s,a):s.join(""),o.getBufferedLength=(
)=>a,o})();return await new Promise((e,t)=>{const r=e=>{e&&o.getBufferedLength()<=Ju.MAX_LENGTH&&(
e.bufferedData=o.getBufferedValue()),t(e)};(async()=>{try{await Qu(n,o),e()}catch(e){r(e)}})(),o.on("data",()=>{
o.getBufferedLength()>i&&r(new Yu)})}),o.getBufferedValue()}async function pe(e,t){let r=[...e];var e=r.shift(),v=d({
stdio:"inherit"},null!=t?t:{}),{stdout:t,stderr:e,exitCode:n}=(cc.debug("Executing: ",e,r),await function(e,t){var n,r,i
,o,a,s,u,c,l,d;[r,i,o={}]=[e,t,v],r=(d=ka._parse(r,i,o)).command,i=d.args,(o=y({maxBuffer:1e8,buffer:!0,
stripFinalNewline:!0,extendEnv:!0,preferLocal:!1,localDir:(o=d.options).cwd||Gs.default.cwd(),
execPath:Gs.default.execPath,encoding:"utf8",reject:!0,cleanup:!0,all:!1,windowsHide:!0},o)).env=({env:a,extendEnv:l,
preferLocal:s,localDir:u,execPath:c}=o,l=l?y(y({},Gs.default.env),a):a,s?function(e){let{env:t=Gs.default.env}=e,
r=function(e,t){var r,n,i,o;if(null==e)return{};if(r=function(e,t){var r,n,i,o;if(null==e)return{};for(r={},
n=Object.keys(e),o=0;o<n.length;o++)i=n[o],0<=t.indexOf(i)||(r[i]=e[i]);return r}(e,t),Object.getOwnPropertySymbols)for(
o=Object.getOwnPropertySymbols(e),i=0;i<o.length;i++)n=o[i],0<=t.indexOf(n)||Object.prototype.propertyIsEnumerable.call(
e,n)&&(r[n]=e[n]);return r}(e,Gu);return e=de({env:t=y({},t)}),r.path=t[e],t[e]=function(e={}){const{
cwd:t=Gs.default.cwd(),path:r=Gs.default.env[de()],execPath:n=Gs.default.execPath}=e;let i,o=(
e=t instanceof URL?Fs.default.fileURLToPath(t):t,Cs.default.resolve(e));const a=[];for(;i!==o;)a.push(Cs.default.join(o,
"node_modules/.bin")),i=o,o=Cs.default.resolve(o,"..");return a.push(Cs.default.resolve(e,n,"..")),[...a,r].join(
Cs.default.delimiter)}(r),t}({env:l,cwd:u,execPath:c}):l),o.stdio=(t=>{var r,e;if(t){const n=t.stdio;if(void 0===n
)return Vu.map(e=>t[e]);if(r=t,Vu.some(e=>void 0!==r[e]))throw new Error(
"It's not possible to provide `stdio` in combination with one of "+Vu.map(e=>`\`${e}\``).join(", "));if(
"string"==typeof n)return n;if(Array.isArray(n))return e=Math.max(n.length,Vu.length),Array.from({length:e},(e,t)=>n[t])
throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof n}\``)}})(o),
"win32"===Gs.default.platform&&"cmd"===Cs.default.basename(r,".exe")&&i.unshift("/q");const f={file:r,args:i,options:o,
parsed:d},p=(a=e,s=t,oc(a,s).join(" ")),h=(u=e,c=t,oc(u,c).map(e=>(e=>"string"!=typeof e||ac.test(e)?e:`"${e.replace(sc,
'\\"')}"`)(e)).join(" "));if(void 0!==(l=f.options.timeout)&&(!Number.isFinite(l)||l<0))throw new TypeError(
`Expected the \`timeout\` option to be a non-negative integer, got \`${l}\` (${typeof l})`);let g;try{
g=Us.default.spawn(f.file,f.args,f.options)}catch(e){return r=new Us.default.ChildProcess,i=Promise.reject(zu({error:e,
stdout:"",stderr:"",all:"",command:p,escapedCommand:h,parsed:f,timedOut:!1,isCanceled:!1,killed:!1})),ic(r,i)}n=g,
o=new Promise((r,t)=>{n.on("exit",(e,t)=>{r({exitCode:e,signal:t})}),n.on("error",e=>{t(e)}),n.stdin&&n.stdin.on("error"
,e=>{t(e)})}),d=((n,{timeout:t,killSignal:i="SIGTERM"},e)=>{if(0===t||void 0===t)return e;let o;var r=new Promise((e,r
)=>{o=setTimeout(()=>{var e=i,t=r;n.kill(e),t(Object.assign(new Error("Timed out"),{timedOut:!0,signal:e}))},t)}),
e=e.finally(()=>{clearTimeout(o)});return Promise.race([r,e])})(g,f.options,o);const m=(async(e,{cleanup:t,detached:r},n
)=>{if(!t||r)return n;const i=Za(()=>{e.kill()});return n.finally(()=>{i()})})(g,f.options,d),b={isCanceled:!1};
return g.kill=((e,t="SIGTERM",r={})=>{var n,i=e(t),o=e;if([r,t,n]=[t,(e=r).forceKillAfterTimeout,i],Ku(r)&&!1!==t&&n){
r=(({forceKillAfterTimeout:e=!0})=>{if(!0===e)return Hu;if(!Number.isFinite(e)||e<0)throw new TypeError(
`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);return e})(e);
const a=setTimeout(()=>{o("SIGKILL")},r);a.unref&&a.unref()}return i}).bind(null,g.kill.bind(g)),g.cancel=((e,t)=>{
e.kill()&&(t.isCanceled=!0)}).bind(null,g,b),a=ku(async()=>{var[{error:e,exitCode:t,signal:r,timedOut:n},i,o,a]=await(
async({stdout:t,stderr:r,all:n},{encoding:i,buffer:e,maxBuffer:o},a)=>{var s=tc(t,{encoding:i,buffer:e,maxBuffer:o}),
u=tc(r,{encoding:i,buffer:e,maxBuffer:o}),i=tc(n,{encoding:i,buffer:e,maxBuffer:2*o});try{return await Promise.all([a,s,
u,i])}catch(e){return Promise.all([{error:e,signal:e.signal,timedOut:e.timedOut},ec(t,s),ec(r,u),ec(n,i)])}})(g,
f.options,m),i=uc(f.options,i),o=uc(f.options,o),a=uc(f.options,a);if(e||0!==t||null!==r){if(e=zu({error:e,exitCode:t,
signal:r,stdout:i,stderr:o,all:a,command:p,escapedCommand:h,parsed:f,timedOut:n,
isCanceled:b.isCanceled||!!f.options.signal&&f.options.signal.aborted,killed:g.killed}),f.options.reject)throw e;
return e}return{command:p,escapedCommand:h,exitCode:0,stdout:i,stderr:o,all:a,failed:!1,timedOut:!1,isCanceled:!1,
killed:!1}}),s=g,void 0!==(e=f.options.input)&&void 0!==s.stdin&&(
null!==e&&"object"==typeof e&&"function"==typeof e.pipe?e.pipe(s.stdin):s.stdin.end(e)),g.all=((e,{all:t})=>{if(t&&(
e.stdout||e.stderr)){const r=ts();return e.stdout&&r.add(e.stdout),e.stderr&&r.add(e.stderr),r}})(g,f.options),ic(g,a)}(
e,r));return{stdout:t,stderr:e,exitCode:n}}async function he(e){lc.debug("gitPullWithRecurseSubmodules",e);const{
stdout:t,stderr:r}=await pe([Xs,"pull","--recurse-submodules"],{cwd:e,stdio:"pipe"});return r&&lc.error(
e+`: 'git pull --recurse-submodules' with errors (inside "${e}"): `+oa(r)),t.includes("Already up to date.")||lc.debug(
e+`: 'git pull --recurse-submodules' with output (inside "${e}"): `+oa(t)),l.OK}async function ge(e,t){return fc.debug(
"addGitSubModule: ",e,t),await pe([Xs,"submodule","add",e,t]),l.OK}async function me(t){pc.debug("getGitBranch: ",t);
try{var{stderr:e,stdout:r,exitCode:n}=await pe([Xs,"rev-parse","--abbrev-ref","HEAD"],{cwd:t,stdio:"pipe"});if(0!==n
)throw new Error(`Exit status was ${n}: `+e);return pc.debug("stdout: ",r),r}catch(e){throw pc.error("Exception: ",e),
new Error(`Command to get git branch for "${t}" failed: `+e)}}function be(){return process.cwd()}function ve(e){
return e.split(".").join("/")}async function ye(e){if(gc.debug("getGitUrl: sourceUrl = ",e),e.includes(":")
)return gc.debug("getGitUrl: direct url: ",e),{gitUrl:e,packageName:e.replace(/\.git$/,"").split(":").slice(1).join(":"
).split("/").slice(1).join("/")};if((e=e.startsWith("@")?e.substring(1):e).includes("/")){const r=Ks+`:${e}.git`;
return gc.debug("getGitUrl: github with org: ",r),{gitUrl:r,packageName:e.split("/").slice(1).join("/")}}
var t=await async function(t){var r,n=t,i=`https://${function(){const[e,t]=n.toLowerCase().split(".").slice(0,2);
return t&&e?[t,e].join("."):e}()}/.well-known/fi.hg.m.json`,i=(gc.debug("getGitOrganization: wellKnownUrl = ",i),
await du.getJson(i));if(gc.debug("getGitOrganization: data = ",i),i&&Q(i)){let e=i&&ca(i,t)?i[t]:void 0;return gc.debug(
"getGitOrganization: packageMetadata = ",e),e&&Q(e)&&ca(e,hc)&&(r=e[hc],gc.debug(
"getGitOrganization: package: githubOrgName = ",r),H(r))?r:(r=t.toLowerCase().split(".").slice(0,2).join("."),e=i&&ca(i,
r)?i[r]:void 0,gc.debug("getGitOrganization: packageMetadata = ",e),e&&Q(e)&&ca(e,hc)&&(t=e[hc],gc.debug(
"getGitOrganization: scope: githubOrgName = ",t),H(t))?t:ca(i,hc)&&(r=i[hc],gc.debug(
"getGitOrganization: root: githubOrgName = ",r),H(r))?r:void 0)}}(e);if(!t)throw new TypeError(
"No Github organization configured for: "+e);const r=Ks+`:${t}/${e}.git`;return gc.debug(
`getGitUrl: github with org "${t}": `,r),{gitUrl:r,packageName:e}}async function we(e,t,r){if(vc.debug(
"setGitSubModuleConfigBySubKey: ",e,t,r),Ta(e,"/"))throw new TypeError(
`Cannot set ${t} using absolute target url: "${e}"`);return async function(e,t,r){if(vc.debug(
"setGitSubModuleConfigByKey: ",e,t,r),Ta(t,"/"))throw new TypeError(`Cannot set ${e} globally as "${t}"`);
return await pe([Xs,"config","-f",Ws,t,r]),l.OK}(e,`submodule.${e}.`+t,r)}async function Ee(e,t){return vc.debug(
"setGitSubModuleBranch: ",e,t),we(e,"branch",t)}async function _e(e,t){return vc.debug("setGitSubModuleUrl: ",e,t),we(e,
"path",t)}async function Oe(e,t){return vc.debug("setGitSubModuleUrl: ",e,t),we(e,"url",t)}function Re(e,t,r){return{
key:e,subKey:t,value:r}}async function Te(d){if(vc.debug("getGitSubModuleList: ",d),!await async function(t){try{var e,
r=await ms.promises.stat(t);return bc.debug("fileExists: stats: ",r),null!=(e=null==r?void 0:r.isFile())&&e}catch(e){if(
"ENOENT"===(null==e?void 0:e.code))return!1;throw new TypeError(`File stat error: "${t}": `+e)}}(bs.join(d,Ws)))return[]
e=await async function(e){vc.debug("getGitSubModuleConfigList: ",e,"^submodule\\.");const t=[Xs,"config","-f",Ws,
"--list"];var{stdout:e,stderr:r,exitCode:n}=await pe(t,{cwd:e,stdio:"pipe"});if(vc.debug(
"getGitSubModuleConfigList: stdout: ",e),0!==n)throw new Error(`Internal command ('${t.join(" "
)}' with exit status ${n}) had errors: `+r);if(H(e))return e;throw new TypeError(`Internal command ('${t.join(" "
)}' with exit status ${n}) output was not a string: `+e)}(d);const f=Qi(e.split("\n"),(e,t)=>{let[r,n]=function(e){if(
0<=e.indexOf("=")){const t=e.split("=");return[t.shift(),t.join("=")]}return[e,""]}(t);return vc.debug(
`parseSubModuleConfigItemList: Parsed: "${r}", "${n}"`),Ta(r,"submodule.")?(r=r.substring("submodule.".length),vc.debug(
`parseSubModuleConfigItemList: Trimmed lineKey: "${r}"`),xa(r,".branch")?(r=r.substring(0,r.length-".branch".length),
e.push(Re(r,"branch",n))):xa(r,".path")?(r=r.substring(0,r.length-".path".length),e.push(Re(r,"path",n))):xa(r,".url")?(
r=r.substring(0,r.length-".url".length),e.push(Re(r,"url",n))):vc.debug(
`parseSubModuleConfigItemList: Unknown config line: "${r}"`)):vc.debug(
`parseSubModuleConfigItemList: Not submodule line: "${r}"`),e},[]);var e=lo(Xn(f,e=>e.key));const p=bs.resolve(d,Js);
return Qi(e,async(e,t)=>{var r,n,i,o,a,s,u;const c=await e,l=(e=Go(f,e=>e.key===t),r=null==(r=Vi(e,
e=>"branch"===e.subKey))?void 0:r.value,n=null==(n=Vi(e,e=>"path"===e.subKey))?void 0:n.value,e=null==(e=Vi(e,
e=>"url"===e.subKey))?void 0:e.value,bs.resolve(d,i=t));return o=Ta(l,p+"/")?l.substring(p.length+1).split("/").join("."
):"",a=await me(l),s=await async function(e){mc.debug("getGitUrl: ",e);var{stderr:t,stdout:r,exitCode:n}=await pe([Xs,
"remote","get-url","origin"],{cwd:e,stdio:"pipe"});if(0!==n)throw new Error(
`Command to get git origin url for "${e}" failed with status ${n}: `+t);return mc.debug("stdout: ",r),r}(l),u=await Te(i
),c.push({key:t,path:i,packageName:o,branch:a,url:s,configPath:n,configBranch:r,configUrl:e,children:u}),c},
Promise.resolve([]))}async function Se(r){C.debug("hgmUpdateAll: dir=",r);var e=await Te(r);return C.debug(
"hgmUpdateAll: list=",e),Qi(e,async(e,t)=>(e=await e)!==l.OK?e:Ne(r,t),Promise.resolve(l.OK))}async function Ne(e,t){
var r,n;C.debug("internalUpdateSubModule: ",e,t);var i,{gitUrl:o,packageName:a}=await ye(t.url);if(!o
)throw new TypeError(`Could not detect git url for: "${o}"`);C.debug("updateSubModule: gitUrl = ",o),C.debug(
"updateSubModule: packageName = ",a),r=bs.resolve(bs.resolve(e,Js),ve(a)),n=t.branch,e=bs.relative(e,r),C.debug(
"relativeTargetPath = ",e),t.path!==(null==t?void 0:t.configPath)&&(C.debug("hgmUpdateAll: Configuring path as: ",e,
t.path),await _e(e,t.path),void 0===(null==t?void 0:t.configPath)?C.debug(
`${t.packageName}: Configured path to "${t.path}"`):C.debug(
`${t.packageName}: Configured path from "${null==t?void 0:t.configPath}" to "${t.path}"`)),t.branch!==(
null==t?void 0:t.configBranch)&&(C.debug("hgmUpdateAll: Configuring branch as: ",e,t.branch),await Ee(e,t.branch),
void 0===(null==t?void 0:t.configBranch)?C.debug(`${t.packageName}: Configured branch to "${t.branch}"`):C.debug(
`${t.packageName}: Configured branch from "${null==t?void 0:t.configBranch}" to "${t.branch}"`)),t.url!==(
null==t?void 0:t.configUrl)&&(C.debug("hgmUpdateAll: Configuring url as: ",e,t.url),await Oe(e,t.url),void 0===(
null==t?void 0:t.configUrl)?C.debug(`${t.packageName}: Configured url to "${t.url}"`):C.debug(
`${t.packageName}: Configured url from "${null==t?void 0:t.configUrl}" to "${t.url}"`));let s;try{
s=await ms.promises.stat(r),C.debug("stats: ",s)}catch(e){"ENOENT"!==(null==e?void 0:e.code)&&C.error(
"File stat error: ",r,e),s=void 0}if(t=null!=(t=null==(t=s)?void 0:t.isFile())&&t,C.debug("isFile: ",t),i=null!=(
i=null==(i=s)?void 0:i.isDirectory())&&i,C.debug("isDirectory: ",i),i)C.debug(
"Target directory already exists, we'll only update: ",r),await async function(e){lc.debug("gitPull",e);const{stdout:t,
stderr:r}=await pe([Xs,"pull"],{cwd:e,stdio:"pipe"});return r&&lc.error(
e+`: 'git pull' with errors (inside "${e}"): `+oa(r)),t.includes("Already up to date.")||lc.debug(
e+`: 'git pull' with output (inside "${e}"): `+oa(t)),l.OK}(e);else{if(void 0!==s&&void 0!==t)return C.error(
"Target file not a directory: ",r),l.CONFLICT;await ge(o,e),C.debug("Initialized: ",o,e)}return i=null!=n?n:"main",
C.debug("nextBranch: ",i),t=await me(e),C.debug("currentBranch: ",t),t!==i?await Ee(e,i):C.debug(
"Branch already identical: ",i),await Oe(e,o),await _e(e,e),await Se(r),console.info(a+`@${i}:`+e),l.OK}
async function Ae(r){await Pe(r);let n=!1;var e=await Te(r);return await Qi(e,async(e,t)=>{await e,t.path!==(
null==t?void 0:t.configPath)&&(n=!0,await _e(r,t.path),void 0===(null==t?void 0:t.configPath)?console.info(
`${t.packageName}: Configured path to "${t.path}"`):console.info(
`${t.packageName}: Configured path from "${null==t?void 0:t.configPath}" to "${t.path}"`)),t.branch!==(
null==t?void 0:t.configBranch)&&(n=!0,await Ee(r,t.branch),void 0===(null==t?void 0:t.configBranch)?console.info(
`${t.packageName}: Configured branch to "${t.branch}"`):console.info(
`${t.packageName}: Configured branch from "${null==t?void 0:t.configBranch}" to "${t.branch}"`)),t.url!==(
null==t?void 0:t.configUrl)&&(n=!0,await Oe(r,t.url),void 0===(null==t?void 0:t.configUrl)?console.info(
`${t.packageName}: Configured url to "${t.url}"`):console.info(
`${t.packageName}: Configured url from "${null==t?void 0:t.configUrl}" to "${t.url}"`))},Promise.resolve()),n&&await Pe(
r),l.OK}async function Pe(e){return U.debug("initAllSubmodules"),await he(e),dc.debug("gitSubmoduleUpdateWithInit"),
await pe([Xs,"submodule","update","--init","--recursive"],{cwd:e}),await l.OK,l.OK}function xe(e,t){return{
name:"SIGRT"+(t+1),number:Du+t,action:"terminate",description:"Application-specific signal (realtime)",standard:"posix"}
}function je(){var e=65-Du,e=Array.from({length:e},xe);return[...qu,...e].map(Ue)}function Ie(e,{name:t,number:r,
description:n,supported:i,action:o,forced:a,standard:s}){return y(y({},e),{},{[t]:{name:t,number:r,description:n,
supported:i,action:o,forced:a,standard:s}})}function Le(e){
return e&&"object"==typeof e&&"function"==typeof e.removeListener&&"function"==typeof e.emit&&"function"==typeof e.reallyExit&&"function"==typeof e.listeners&&"function"==typeof e.kill&&"number"==typeof e.pid&&"function"==typeof e.on
}function Ce(e,t,r){if(t&&!Array.isArray(t)&&(r=t,t=null),e={command:e,args:t=t?t.slice(0):[],options:r=Object.assign({}
,r),file:void 0,original:{command:e,args:t}},r.shell)return e;if(t=e,!xu)return t;if((r=t).file=Au(r),e=(
e=r.file&&function(e){var t;const r=Buffer.alloc(150);try{t=Tu.openSync(e,"r"),Tu.readSync(t,r,0,150,0),Tu.closeSync(t)
}catch(e){}return Su(r.toString())}(r.file))?(r.args.unshift(r.file),r.command=e,Au(r)):r.file,r=!ju.test(e),
t.options.forceShell||r){const n=Iu.test(e);t.command=Nu.normalize(t.command),t.command=Pu.command(t.command),
t.args=t.args.map(e=>Pu.argument(e,n)),r=[t.command].concat(t.args).join(" "),t.args=["/d","/s","/c",`"${r}"`],
t.command=process.env.comspec||"cmd.exe",t.options.windowsVerbatimArguments=!0}return t}function Ue({name:e,number:t,
description:r,action:n,forced:i=!1,standard:o}){var{signals:{[e]:a}}=Ss.constants,s=void 0!==a;return{name:e,
number:s?a:t,description:r,supported:s,action:n,forced:i,standard:o}}function Ge(e,t){for(var r=-1,n=null==e?0:e.length,
i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i}function Fe(e,t){return e===t||e!=e&&t!=t}function Me(e,t){for(
var r=e.length;r--;)if(ks(e[r][0],t))return r;return-1}var $e,ke,De,qe,Be,ze,Ve,He,Ke,We,Je,Xe,Qe,Ye,Ze,et,tt,rt,nt,it,
ot,at,st,ut,ct,lt,dt,ft,pt,ht,gt,mt,bt,vt,yt,wt,Et,_t,Ot,Rt,Tt,St,Nt,At,Pt,xt,jt,It,Lt,Ct,a,Ut,Gt,Ft,Mt,$t,kt,Dt,qt,Bt,
zt,Vt,Ht,Kt,Wt,Jt,t,Xt,Qt,Yt,Zt,er,tr,rr,nr,ir,or,ar,sr,ur,cr,lr,dr,fr,pr,hr,gr,mr,br,vr,yr,wr,Er,_r,Or,Rr,Tr,Sr,Nr,Ar,
Pr,xr,jr,Ir,Lr,Cr,Ur,Gr,Fr,Mr,$r,kr,Dr,qr,Br,zr,Vr,Hr,Kr,Wr,Jr,Xr,Qr,Yr,Zr,en,tn,rn,nn,on,an,sn,un,cn,ln,dn,fn,pn,hn,gn,
mn,bn,vn,yn,wn,En,_n,On,Rn,Tn,Sn,Nn,An,Pn,xn,r,jn,In,Ln,Cn,Un,Gn,Fn,Mn,$n,kn,Dn,qn,Bn,zn,Vn,Hn,Kn,Wn,Jn,Xn,Qn,Yn,Zn,ei,
ti,n,ri,ni,ii,oi,ai,si,ui,ci,li,di,fi,pi,hi,gi,mi,bi,vi,yi,wi,Ei,_i,Oi,Ri,Ti,Si,Ni,Ai,Pi,xi,ji,Ii,Li,Ci,Ui,Gi,Fi,Mi,$i,
ki,Di,qi,Bi,zi,Vi,Hi,Ki,Wi,Ji,Xi,Qi,Yi,Zi,eo,to,ro,no,io,oo,ao,so,uo,co,lo,fo,po,ho,go,mo,bo,vo,yo,wo,Eo,_o,Oo,Ro,To,So,
No,Ao,Po,xo,jo,Io,Lo,Co,Uo,Go,Fo,Mo,$o,ko,Do,qo,Bo,zo,i,s,u,Vo,Ho,Ko,Wo,Jo,Xo,Qo,Yo,Zo,ea,ta,ra,na,ia,oa,aa,sa,ua,ca,la,
da,fa,pa,ha,ga,ma,ba,va,ya,wa,Ea,_a,Oa,Ra,Ta,Sa,Na,Aa,Pa,xa,ja,Ia,La,Ca,c,l,f,p,Ua,Ga,Fa,Ma,$a,ka,h,g,m,Da,qa,Ba,b,v,za,
Va,Ha,Ka,Wa,Ja,Xa,Qa,Ya,Za,w,es,ts,E,rs,_,ns,is,O,R,os,T,S,N,as,A,ss,us,cs,P,ls,ds,fs,ps,hs,gs,ms=require("fs"),
bs=require("path"),vs=require("url"),ys=require("querystring"),ws=require("node:buffer"),Es=require("node:path"),
_s=require("node:child_process"),Os=require("node:process"),Rs=require("child_process"),Ts=require("node:url"),
Ss=require("os"),Ns=require("node:os"),As=require("assert"),x=require("events"),Ps=require("buffer"),j=require("stream")
,I=require("util"),xs=e(ms),js=e(bs),Is=e(vs),Ls=F(ys),Cs=e(Es),Us=e(_s),Gs=e(Os),vs=e(Rs),Fs=e(Ts),Ms=e(Ns),ys=e(As),
Es=e(x),_s=e(Ps),Os=e(j),Rs=e(I),
$s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
,ks=Fe,Ds=Me,qs=Array.prototype.splice,Bs=Me,zs=Me,Vs=Me;M.prototype.clear=function(){this.__data__=[],this.size=0},
M.prototype.delete=function(e){var t=this.__data__;return!((e=Ds(t,e))<0||(e==t.length-1?t.pop():qs.call(t,e,1),
--this.size,0))},M.prototype.get=function(e){var t=this.__data__;return(e=Bs(t,e))<0?void 0:t[e][1]},
M.prototype.has=function(e){return-1<zs(this.__data__,e)},M.prototype.set=function(e,t){var r=this.__data__,n=Vs(r,e);
return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},$e=Ts=M,Ns=function(){this.__data__=new $e,this.size=0},
As=function(e){var t=this.__data__,e=t.delete(e);return this.size=t.size,e},x=function(e){return this.__data__.get(e)},
Ps=function(e){return this.__data__.has(e)},j="object"==typeof $s&&$s&&$s.Object===Object&&$s,
I="object"==typeof self&&self&&self.Object===Object&&self,s=(I=j||I||Function("return this")()).Symbol,
R=Object.prototype,ke=R.hasOwnProperty,De=R.toString,qe=s?s.toStringTag:void 0,R=Object.prototype,Be=R.toString,
ze=function(e){var t,r,n=ke.call(e,qe),i=e[qe];try{t=!(e[qe]=void 0)}catch(e){}return r=De.call(e),t&&(
n?e[qe]=i:delete e[qe]),r},Ve=function(e){return Be.call(e)},He=s?s.toStringTag:void 0,We=R=function(e){
return null==e?void 0===e?"[object Undefined]":"[object Null]":(He&&He in Object(e)?ze:Ve)(e)},Je=Ke=function(e){
var t=typeof e;return null!=e&&("object"==t||"function"==t)},Xe=function(e){return!!Je(e)&&("[object Function]"==(e=We(e
))||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e)},E=I["__core-js_shared__"],
E=/[^.]+$/.exec(E&&E.keys&&E.keys.IE_PROTO||""),Qe=E?"Symbol(src)_1."+E:"",E=Function.prototype,Ye=E.toString,Ze=Xe,
et=function(e){return!!Qe&&Qe in e},tt=Ke,rt=E=function(e){if(null!=e){try{return Ye.call(e)}catch(e){}try{return e+""
}catch(e){}}return""},u=/[\\^$.*+?()[\]{}|]/g,nt=/^\[object .+?Constructor\]$/,O=Function.prototype,A=Object.prototype,
O=O.toString,A=A.hasOwnProperty,it=RegExp("^"+O.call(A).replace(u,"\\$&").replace(
/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ot=function(e){return!(!tt(e)||et(e))&&(Ze(e
)?it:nt).test(rt(e))},at=function(e,t){return null==e?void 0:e[t]},A=(O=function(e,t){return e=at(e,t),ot(e)?e:void 0})(
I,"Map"),u=O(Object,"create"),ut=st=u,r=Object.prototype,ct=r.hasOwnProperty,lt=u,r=Object.prototype,dt=r.hasOwnProperty
,ft=u,r=function(e){return e=this.has(e)&&delete this.__data__[e],this.size-=e?1:0,e},u=function(e){var t,
r=this.__data__;return ut?"__lodash_hash_undefined__"===(t=r[e])?void 0:t:ct.call(r,e)?r[e]:void 0},b=function(e){
var t=this.__data__;return lt?void 0!==t[e]:dt.call(t,e)},h=function(e,t){var r=this.__data__;
return this.size+=this.has(e)?0:1,r[e]=ft&&void 0===t?"__lodash_hash_undefined__":t,this},$.prototype.clear=function(){
this.__data__=st?st(null):{},this.size=0},$.prototype.delete=r,$.prototype.get=u,$.prototype.has=b,$.prototype.set=h,
pt=$,ht=Ts,gt=A,mt=function(e){var t=typeof e;
return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e},wt=yt=vt=bt=function(e,t){
return e=e.__data__,mt(t)?e["string"==typeof t?"string":"hash"]:e.map},r=function(e){return e=bt(this,e).delete(e),
this.size-=e?1:0,e},u=function(e){return vt(this,e).get(e)},b=function(e){return yt(this,e).has(e)},h=function(e,t){
var r=wt(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},k.prototype.clear=function(){this.size=0,
this.__data__={hash:new pt,map:new(gt||ht),string:new pt}},k.prototype.delete=r,k.prototype.get=u,k.prototype.has=b,
k.prototype.set=h,_t=A,Ot=r=k,Rt=Et=Ts,u=As,b=x,h=Ps,Ts=function(e,t){var r,n=this.__data__;if(n instanceof Et){if(
r=n.__data__,!_t||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Ot(r)}return n.set(e,t),
this.size=n.size,this},D.prototype.clear=Ns,D.prototype.delete=u,D.prototype.get=b,D.prototype.has=h,D.prototype.set=Ts,
As=D,Tt=r,x=function(e){return this.__data__.has(e)},q.prototype.add=q.prototype.push=function(e){
return this.__data__.set(e,"__lodash_hash_undefined__"),this},q.prototype.has=x,St=Ps=q,Nt=Ns=function(e,t){for(var r=-1
,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},At=u=function(e,t){return e.has(t)},b=I.Uint8Array,Pt=b,
xt=Fe,jt=h=function(e,t,r,n,i,o){var a,s,u,c,l,d,f,p=1&r,h=e.length,g=t.length;if(h!=g&&!(p&&h<g))return!1;if(g=o.get(e)
,a=o.get(t),g&&a)return g==t&&a==e;for(s=-1,u=!0,c=2&r?new St:void 0,o.set(e,t),o.set(t,e);++s<h;){if(l=e[s],d=t[s],
void 0!==(f=n?p?n(d,l,s,t,e,o):n(l,d,s,e,t,o):f)){if(f)continue;u=!1;break}if(c){if(!Nt(t,function(e,t){if(!At(c,t)&&(
l===e||i(l,e,r,n,o)))return c.push(t)})){u=!1;break}}else if(l!==d&&!i(l,d,r,n,o)){u=!1;break}}return o.delete(e),
o.delete(t),u},It=function(e){var r=-1,n=Array(e.size);return e.forEach(function(e,t){n[++r]=[t,e]}),n},Lt=Ts=function(e
){var t=-1,r=Array(e.size);return e.forEach(function(e){r[++t]=e}),r},x=s?s.prototype:void 0,Ct=x?x.valueOf:void 0,
b=function(e,t,r,n,i,o,a){var s,u;switch(r){case"[object DataView]":if(
e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":
return!(e.byteLength!=t.byteLength||!o(new Pt(e),new Pt(t)));case"[object Boolean]":case"[object Date]":
case"[object Number]":return xt(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;
case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":s=It;case"[object Set]":return s=s||Lt,!!(
e.size==t.size||1&n)&&((u=a.get(e))?u==t:(n|=2,a.set(e,t),u=jt(s(e),s(t),n,i,o,a),a.delete(e),u));case"[object Symbol]":
if(Ct)return Ct.call(e)==Ct.call(t)}return!1},x=function(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];
return e},g=Array.isArray,Ut=x,Gt=a=g,g=function(e,t,r){return t=t(e),Gt(e)?t:Ut(t,r(e))},Mt=Ft=function(e,t){for(var r,
n=-1,i=null==e?0:e.length,o=0,a=[];++n<i;)t(r=e[n],n,e)&&(a[o++]=r);return a},n=Object.prototype,
$t=n.propertyIsEnumerable,n=(kt=Object.getOwnPropertySymbols)?function(t){return null==t?[]:(t=Object(t),Mt(kt(t),
function(e){return $t.call(t,e)}))}:function(){return[]},Vo=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);
return n},Dt=R,T=function(e){return qt(e)&&"[object Arguments]"==Dt(e)},Bt=qt=os=function(e){
return null!=e&&"object"==typeof e},i=Object.prototype,zt=i.hasOwnProperty,Vt=i.propertyIsEnumerable,i=T(function(){
return arguments}())?T:function(e){return Bt(e)&&zt.call(e,"callee")&&!Vt.call(e,"callee")},_=(rs=(rs=(_=(_=(T={
exports:{}}).exports)&&!_.nodeType&&_)&&T&&!T.nodeType&&T)&&rs.exports===_?I.Buffer:void 0)?rs.isBuffer:void 0,
T.exports=_||function(){return!1},Ht=/^(?:0|[1-9]\d*)$/,rs=function(e,t){var r=typeof e;return!!(
t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&Ht.test(e))&&-1<e&&e%1==0&&e<t},Kt=R,Wt=_=function(e){
return"number"==typeof e&&-1<e&&e%1==0&&e<=9007199254740991},Jt=os,(t={}
)["[object Float32Array]"]=t["[object Float64Array]"]=t["[object Int8Array]"]=t["[object Int16Array]"]=t["[object Int32Array]"]=t["[object Uint8Array]"]=t["[object Uint8ClampedArray]"]=t["[object Uint16Array]"]=t["[object Uint32Array]"]=!0
,
t["[object Arguments]"]=t["[object Array]"]=t["[object ArrayBuffer]"]=t["[object Boolean]"]=t["[object DataView]"]=t["[object Date]"]=t["[object Error]"]=t["[object Function]"]=t["[object Map]"]=t["[object Number]"]=t["[object Object]"]=t["[object RegExp]"]=t["[object Set]"]=t["[object String]"]=t["[object WeakMap]"]=!1
,P=function(e){return Jt(e)&&Wt(e.length)&&!!t[Kt(e)]},as=function(t){return function(e){return t(e)}},N=(N=(S=Xt={
exports:{}}).exports)&&!N.nodeType&&N,N=(ns=N&&S&&!S.nodeType&&S)&&ns.exports===N,is=N&&j.process,N=function(){try{
return ns&&ns.require&&ns.require("util").types||is&&is.binding&&is.binding("util")}catch(e){}}(),S.exports=N,N=(S=(
j=Xt.exports)&&j.isTypedArray)?as(S):P,Qt=Vo,Yt=i,Zt=a,er=T.exports,tr=rs,rr=j=N,S=Object.prototype,nr=S.hasOwnProperty,
ir=Object.prototype,ds=Object.keys,fs=Object,or=function(e){var t=e&&e.constructor;return e===(
"function"==typeof t&&t.prototype||ir)},ar=function(e){return ds(fs(e))},P=Object.prototype,sr=P.hasOwnProperty,ur=Xe,
cr=_,lr=function(e,t){var r,n=Zt(e),i=!n&&Yt(e),o=!n&&!i&&er(e),a=!n&&!i&&!o&&rr(e),s=n||i||o||a,u=s?Qt(e.length,String
):[],c=u.length;for(r in e)!t&&!nr.call(e,r)||s&&("length"==r||o&&("offset"==r||"parent"==r)||a&&(
"buffer"==r||"byteLength"==r||"byteOffset"==r)||tr(r,c))||u.push(r);return u},dr=function(e){var t,r;if(!or(e)
)return ar(e);for(r in t=[],Object(e))sr.call(e,r)&&"constructor"!=r&&t.push(r);return t},fr=Vo=function(e){
return null!=e&&cr(e.length)&&!ur(e)},pr=g,hr=n,gr=N=function(e){return(fr(e)?lr:dr)(e)},mr=function(e){return pr(e,gr,
hr)},S=Object.prototype,br=S.hasOwnProperty,P=function(e,t,r,n,i,o){var a,s,u,c,l,d,f,p,h,g=1&r,m=mr(e),b=m.length;if(
b!=mr(t).length&&!g)return!1;for(a=b;a--;)if(s=m[a],!(g?s in t:br.call(t,s)))return!1;if(p=o.get(e),h=o.get(t),p&&h
)return p==t&&h==e;for(u=!0,o.set(e,t),o.set(t,e),c=g;++a<b;){if(l=e[s=m[a]],d=t[s],!(void 0===(f=n?g?n(d,l,s,t,e,o):n(l
,d,s,e,t,o):f)?l===d||i(l,d,r,n,o):f)){u=!1;break}c=c||"constructor"==s}return u&&!c&&(p=e.constructor)!=(
h=t.constructor)&&"constructor"in e&&"constructor"in t&&!(
"function"==typeof p&&p instanceof p&&"function"==typeof h&&h instanceof h)&&(u=!1),o.delete(e),o.delete(t),u},g=O(I,
"DataView"),n=A,S=O(I,"Promise"),w=A=O(I,"Set"),I=O(I,"WeakMap"),vr=R,wr=(yr=E)(E=g),Er=yr(n),_r=yr(S),Or=yr(w),Rr=yr(I)
,g=vr,(E&&"[object DataView]"!=g(new E(new ArrayBuffer(1)))||n&&"[object Map]"!=g(new n)||S&&"[object Promise]"!=g(
S.resolve())||w&&"[object Set]"!=g(new w)||I&&"[object WeakMap]"!=g(new I))&&(g=function(e){var t=vr(e);if(e=(
e="[object Object]"==t?e.constructor:void 0)?yr(e):"")switch(e){case wr:return"[object DataView]";case Er:
return"[object Map]";case _r:return"[object Promise]";case Or:return"[object Set]";case Rr:return"[object WeakMap]"}
return t}),Tr=As,Sr=h,Nr=b,Ar=P,Pr=g,xr=a,jr=T.exports,Ir=j,Lr="[object Arguments]",Cr="[object Array]",
Ur="[object Object]",E=Object.prototype,Gr=E.hasOwnProperty,Fr=function(e,t,r,n,i,o){var a=xr(e),s=xr(t),u=a?Cr:Pr(e),
s=s?Cr:Pr(t),c=(u=u==Lr?Ur:u)==Ur,l=(s=s==Lr?Ur:s)==Ur;if((s=u==s)&&jr(e)){if(!jr(t))return!1;c=!(a=!0)}return s&&!c?(
o=o||new Tr,a||Ir(e)?Sr(e,t,r,n,i,o):Nr(e,t,u,r,n,i,o)):1&r||(a=c&&Gr.call(e,"__wrapped__"),u=l&&Gr.call(t,"__wrapped__"
),!a&&!u)?s&&(o=o||new Tr,Ar(e,t,r,n,i,o)):i(a?e.value():e,u?t.value():t,r,n,o=o||new Tr)},$r=As,kr=n=function e(t,r,n,i
,o){return t===r||(null==t||null==r||!Mr(t)&&!Mr(r)?t!=t&&r!=r:Fr(t,r,n,i,e,o))},Dr=Ke,qr=S=function(e){
return e==e&&!Dr(e)},Br=N,zr=function(e,t,r,n){var i,o,a,s,u,c,l=r.length,d=l,f=!n;if(null==e)return!d;for(e=Object(e
);l--;)if(i=r[l],f&&i[2]?i[1]!==e[i[0]]:!(i[0]in e))return!1;for(;++l<d;)if(a=e[o=(i=r[l])[0]],s=i[1],f&&i[2]){if(
void 0===a&&!(o in e))return!1}else if(u=new $r,!(void 0===(c=n?n(a,s,o,e,t,u):c)?kr(s,a,3,n,u):c))return!1;return!0},
Vr=function(e){for(var t,r,n=Br(e),i=n.length;i--;)r=e[t=n[i]],n[i]=[t,r,qr(r)];return n},Hr=w=function(t,r){
return function(e){return null!=e&&e[t]===r&&(void 0!==r||t in Object(e))}},I=function(t){var r=Vr(t);
return 1==r.length&&r[0][2]?Hr(r[0][0],r[0][1]):function(e){return e===t||zr(e,t,r)}},Kr=R,Wr=Mr=os,Jr=a,Xr=h=function(e
){return"symbol"==typeof e||Wr(e)&&"[object Symbol]"==Kr(e)},Qr=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
Yr=/^\w*$/,b=function(e,t){if(Jr(e))return!1;var r=typeof e;return!(
"number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!Xr(e))||Yr.test(e)||!Qr.test(e)||null!=t&&e in Object(t)},Zr=r,
B.Cache=Zr,en=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
tn=/\\(\\)?/g,ls=(P=B(function(e){var i=[];return 46===e.charCodeAt(0)&&i.push(""),e.replace(en,function(e,t,r,n){
i.push(r?n.replace(tn,"$1"):t||e)}),i},function(e){return 500===ls.size&&ls.clear(),e})).cache,rn=Ge,nn=a,on=h,
g=s?s.prototype:void 0,an=g?g.toString:void 0,sn=T=function e(t){if("string"==typeof t)return t;if(nn(t))return rn(t,e
)+"";if(on(t))return an?an.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},ln=P,dn=j=function(e){
return null==e?"":sn(e)},fn=h,mn=pn=function(e,t){return un(e)?e:cn(e,t)?[e]:ln(dn(e))},bn=i,wn=_,_n=function(e,t){
return null!=e&&t in Object(e)},On=E=function(e,t,r){for(var n,i,o=(t=mn(t,e)).length,a=!(n=-1);++n<o&&(i=En(t[n]),
a=null!=e&&r(e,i));)e=e[i];return a||++n!=o?a:!!(o=null==e?0:e.length)&&wn(o)&&yn(i,o)&&(vn(e)||bn(e))},Rn=n,
Tn=function(e,t,r){return void 0===(e=null==e?void 0:gn(e,t))?r:e},Sn=function(e,t){return null!=e&&On(e,t,_n)},An=S,
Pn=w,jn=gn=As=function(e,t){for(var r=0,n=(t=pn(t,e)).length;null!=e&&r<n;)e=e[hn(t[r++])];return r&&r==n?e:void 0},
In=function(t){return function(e){return null==e?void 0:e[t]}},Ln=function(t){return function(e){return jn(e,t)}},
Cn=Nn=cn=b,Un=xn=En=hn=function(e){if("string"==typeof e||fn(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},Gn=I
,Fn=function(r,n){return Nn(r)&&An(n)?Pn(xn(r),n):function(e){var t=Tn(e,r);return void 0===t&&t===n?Sn(e,r):Rn(n,t,3)}}
,Mn=r=function(e){return e},$n=vn=un=a,kn=function(e){return Cn(e)?In(Un(e)):Ln(e)},Dn=function(e,t,r){for(var n,i=-1,
o=Object(e),a=r(e),s=a.length;s--&&!1!==t(o[n=a[++i]],n,o););return e},qn=N,Hn=Ge,Wn=g=function(e,n){var i=-1,o=Vn(e
)?Array(e.length):[];return zn(e,function(e,t,r){o[++i]=n(e,t,r)}),o},Xn=function(e,t){return(Jn(e)?Hn:Wn)(e,Kn(t))},
Yn=Fe,Zn=Vn=Bn=Vo,ei=yn=rs,ti=Ke,ri=Ns,ii=function(e,n){var i;return Qn(e,function(e,t,r){return!(i=n(e,t,r))}),!!i},
si=function(e,t,r){var n=oi(e)?ri:ii;return r&&ai(e,t,r)&&(t=void 0),n(e,ni(t))},ui=Qn=zn=P=function(e,t){if(null==e
)return e;if(!Bn(e))return e&&Dn(e,t,qn);for(var r=e.length,n=-1,i=Object(e);++n<r&&!1!==t(i[n],n,i););return e},
ci=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(!t(e[r],r,e))return!1;return!0},li=function(e,n){var i=!0;
return ui(e,function(e,t,r){return i=!!n(e,t,r)}),i},di=ni=Kn=_=function(e){
return"function"==typeof e?e:null==e?Mn:"object"==typeof e?$n(e)?Fn(e[0],e[1]):Gn(e):kn(e)},fi=oi=Jn=a,pi=ai=n=function(
e,t,r){if(!ti(r))return!1;var n=typeof t;return!!("number"==n?Zn(r)&&ei(t,r.length):"string"==n&&t in r)&&Yn(r[t],e)},
hi=function(e,t,r){var n=fi(e)?ci:li;return r&&pi(e,t,r)&&(t=void 0),n(e,di(t))},gi=O,S=function(){try{var e=gi(Object,
"defineProperty");return e({},"",{}),e}catch(e){}}(),mi=i,bi=a,vi=s?s.isConcatSpreadable:void 0,wi=function(e){
return bi(e)||mi(e)||!!(vi&&e&&e[vi])},Ei=yi=x,_i=w=function e(t,r,n,i,o){var a,s=-1,u=t.length;for(n=n||wi,o=o||[
];++s<u;)a=t[s],0<r&&n(a)?1<r?e(a,r-1,n,i,o):yi(o,a):i||(o[o.length]=a);return o},Oi=function(e,t){var r=-1,n=e.length;
for(t=t||Array(n);++r<n;)t[r]=e[r];return t},Ri=a,Ti=function(){var e,t,r,n=arguments.length;if(!n)return[];for(e=Array(
n-1),t=arguments[0],r=n;r--;)e[r-1]=arguments[r];return Ei(Ri(t)?Oi(t):[t],_i(e,1))},Si=_,Ni=Vo,Ai=N,b=function(e,t,r,n
){for(var i=e.length,o=r+(n?1:-1);n?o--:++o<i;)if(t(e[o],o,e))return o;return-1},Pi=/\s/,xi=function(e){for(
var t=e.length;t--&&Pi.test(e.charAt(t)););return t},ji=/^\s+/,Ii=I=function(e){return e&&e.slice(0,xi(e)+1).replace(ji,
"")},Li=Ke,Ci=h,Ui=/^[-+]0x[0-9a-f]+$/i,Gi=/^0b[01]+$/i,Fi=/^0o[0-7]+$/i,Mi=parseInt,$i=function(e){var t;
return"number"==typeof e?e:Ci(e)?NaN:(Li(e)&&(t="function"==typeof e.valueOf?e.valueOf():e,e=Li(t)?t+"":t),
"string"!=typeof e?0===e?e:+e:(e=Ii(e),(t=Gi.test(e))||Fi.test(e)?Mi(e.slice(2),t?2:8):Ui.test(e)?NaN:+e))},ki=function(
e){return e?(e=$i(e))===1/0||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0},Di=b,qi=_,Bi=rs=function(e){
var t=(e=ki(e))%1;return e==e?t?e-t:e:0},zi=Math.max,Vi=function(e,t,r){var n,i,o,a=Object(e);return Ni(e)||(n=Si(t),
e=Ai(e),t=function(e){return n(a[e],e,a)}),-1<(o=(o=null==(i=e)?0:i.length)?((r=null==r?0:Bi(r))<0&&(r=zi(o+r,0)),Di(i,
qi(t),r)):-1)?a[n?e[o]:o]:void 0},Hi=function(e,t,r,n){var i=-1,o=null==e?0:e.length;for(n&&o&&(r=e[++i]);++i<o;)r=t(r,
e[i],i,e);return r},Ki=P,Wi=_,Ji=function(e,n,i,o,t){return t(e,function(e,t,r){i=o?(o=!1,e):n(i,e,t,r)}),i},Xi=a,
Qi=function(e,t,r){var n=Xi(e)?Hi:Ji,i=arguments.length<3;return n(e,Wi(t),r,i,Ki)},Ns=function(e,t,r){var n,i=-1,
o=e.length;for((r=o<r?o:r)<0&&(r+=o),o=r<(t=t<0?o<-t?0:o+t:t)?0:r-t>>>0,t>>>=0,n=Array(o);++i<o;)n[i]=e[i+t];return n},
Yi=b,Zi=function(e){return e!=e},eo=function(e,t,r){for(var n=r-1,i=e.length;++n<i;)if(e[n]===t)return n;return-1},
to=O=function(e,t,r){return t==t?eo(e,t,r):Yi(e,Zi,r)},i=function(e,t){return!(null==e||!e.length)&&-1<to(e,t,0)},
s=function(e,t,r){for(var n=-1,i=null==e?0:e.length;++n<i;)if(r(t,e[n]))return!0;return!1},x=function(){},Vo=(ro=A
)&&1/Ts(new ro([,-0]))[1]==1/0?function(e){return new ro(e)}:x,no=Ps,io=i,oo=s,ao=u,so=Vo,uo=Ts,co=function(e,t,r){var n
,i,o,a,s=-1,u=io,c=e.length,l=!0,d=[],f=d;if(r)l=!1,u=oo;else if(200<=c){if(n=t?null:so(e))return uo(n);l=!1,u=ao,
f=new no}else f=t?[]:d;e:for(;++s<c;)if(i=e[s],o=t?t(i):i,i=r||0!==i?i:0,l&&o==o){for(a=f.length;a--;)if(f[a]===o
)continue e;t&&f.push(o),d.push(i)}else u(f,o,r)||(f!==d&&f.push(o),d.push(i));return d},lo=function(e){
return e&&e.length?co(e):[]},fo=h,po=function(e,t){var r,n,i,o,a,s,u,c;if(e!==t){if(r=void 0!==e,n=null===e,i=e==e,o=fo(
e),a=void 0!==t,s=null===t,u=t==t,c=fo(t),!s&&!c&&!o&&t<e||o&&a&&u&&!s&&!c||n&&a&&u||!r&&u||!i)return 1;if(
!n&&!o&&!c&&e<t||c&&r&&i&&!n&&!o||s&&r&&i||!a&&i||!u)return-1}return 0},ho=Ge,go=As,mo=_,bo=g,vo=function(e,t){
var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e},yo=as,wo=function(e,t,r){for(var n,i=-1,o=e.criteria,
a=t.criteria,s=o.length,u=r.length;++i<s;)if(n=po(o[i],a[i]))return u<=i?n:n*("desc"==r[i]?-1:1);return e.index-t.index}
,Eo=r,_o=a,Oo=function(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:
return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)},Ro=Math.max,To=function(e){
return function(){return e}},b=(So=S)?function(e,t){return So(e,"toString",{configurable:!0,enumerable:!1,value:To(t),
writable:!0})}:r,No=Date.now,ss=b,Ao=w,Po=function(e,n,r){var i;return n=n.length?ho(n,function(t){return _o(t
)?function(e){return go(e,1===t.length?t[0]:t)}:t}):[Eo],i=-1,n=ho(n,yo(mo)),e=bo(e,function(t,e,r){return{criteria:ho(n
,function(e){return e(t)}),index:++i,value:t}}),vo(e,function(e,t){return wo(e,t,r)})},xo=n,function(){var e=No(),
t=16-e+ +cs;if(cs=e,0<t){if(800<=++us)return}else us=0;ss.apply(void 0,arguments)}((ps=A=function(e,t){if(null==e
)return[];var r=t.length;return 1<r&&xo(e,t[0],t[1])?t=[]:2<r&&xo(t[0],t[1],t[2])&&(t=[t[0]]),Po(e,Ao(t,1),[])},hs=void(
cs=us=0),gs=r,hs=Ro(void 0===hs?ps.length-1:hs,0),function(){for(var e,t=arguments,r=-1,n=Ro(t.length-hs,0),i=Array(n
);++r<n;)i[r]=t[hs+r];for(r=-1,e=Array(hs+1);++r<hs;)e[r]=t[r];return e[hs]=gs(i),Oo(ps,this,e)}),A+""),Io=Ft,
Lo=function(e,n){var i=[];return jo(e,function(e,t,r){n(e,t,r)&&i.push(e)}),i},Co=_,Go=function(e,t){return(Uo(e)?Io:Lo
)(e,Co(t))},Fo=r,Mo=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e},$o=jo=P,
ko=function(e){return"function"==typeof e?e:Fo},Do=Uo=a,qo=function(e,t){return(Do(e)?Mo:$o)(e,ko(t))},Bo=Ns,x=function(
e,t,r){var n=e.length;return r=void 0===r?n:r,!t&&n<=r?e:Bo(e,t,r)},zo=RegExp(
"[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),Ps=function(e){return zo.test(e)}
,(i=Xt.exports)&&i.isRegExp,s=function(e){return e.split("")},
u="[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:"+[
"[^\\ud800-\\udfff]","(?:\\ud83c[\\udde6-\\uddff]){2}","[\\ud800-\\udbff][\\udc00-\\udfff]"].join("|"
)+")[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?)*",Vo="(?:"+[
"[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]?","[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
"(?:\\ud83c[\\udde6-\\uddff]){2}","[\\ud800-\\udbff][\\udc00-\\udfff]","[\\ud800-\\udfff]"].join("|")+")",Ho=RegExp(
"\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|"+Vo+u,"g"),Ko=s,Wo=Ps,Jo=function(e){return e.match(Ho)||[]},
Qo=Xo=O,Yo=T,Zo=I,ea=x,ta=function(e,t){for(var r=e.length;r--&&-1<Xo(t,e[r],0););return r},ra=function(e,t){for(
var r=-1,n=e.length;++r<n&&-1<Qo(t,e[r],0););return r},na=function(e){return(Wo(e)?Jo:Ko)(e)},ia=j,oa=function(e,t,r){
return(e=ia(e))&&(r||void 0===t)?Zo(e):e&&(t=Yo(t))?(r=na(e),e=na(t),t=ra(r,e),e=ta(r,e)+1,ea(r,t,e).join("")):e},
Ts=Object.prototype,aa=Ts.hasOwnProperty,sa=function(e,t){return null!=e&&aa.call(e,t)},ua=E,ca=function(e,t){
return null!=e&&ua(e,t,sa)},fa=function(e){return!0===e||!1===e||da(e)&&"[object Boolean]"==la(e)},pa=function(e){
return null===e},ga=a,ba=function(e){return"string"==typeof e||!ga(e)&&ma(e)&&"[object String]"==ha(e)},va=ha=la=R,
ya=ma=da=os,wa=function(e){return"number"==typeof e||ya(e)&&"[object Number]"==va(e)},Ta=function(e,t,r){return e=Ra(e),
r=null==r?0:Ea(Oa(r),0,e.length),t=_a(t),e.slice(r,r+t.length)==t},Sa=Ea=function(e,t,r){return e==e&&(void 0!==r&&(
e=e<=r?e:r),void 0!==t&&(e=t<=e?e:t)),e},Na=_a=T,Aa=Oa=rs,Pa=Ra=j,xa=function(e,t,r){var n;return e=Pa(e),t=Na(t),
n=e.length,n=r=void 0===r?n:Sa(Aa(r),0,n),0<=(r-=t.length)&&e.slice(r,n)==t},ja=Ge,Ia=function(t,e){return ja(e,
function(e){return t[e]})},La=N,Ca=function(e){return null==e?[]:Ia(e,La(e))},"production".startsWith("%{"
)&&"production".endsWith("}"),c={DEBUG:0,0:"DEBUG",INFO:1,1:"INFO",WARN:2,2:"WARN",ERROR:3,3:"ERROR",NONE:4,4:"NONE"},
ee("0.0.6"),As=null!=(h=ee(""))?h:"hgm",as=null!=(g=ee(""))?g:"",ee("production"),ee("2022-06-29T09:13:15.584Z"),
"".startsWith("%{")&&"".endsWith("}"),A=null!=(n=function(e){if(e){if(function(){switch(e){case c.DEBUG:case c.INFO:
case c.WARN:case c.ERROR:case c.NONE:return 1;default:return}}())return e;switch(e=(""+e).toUpperCase()){case"ALL":
case"DEBUG":return c.DEBUG;case"INFO":return c.INFO;case"WARN":case"WARNING":return c.WARN;case"ERR":case"ERROR":
return c.ERROR;case"FALSE":case"OFF":case"QUIET":case"SILENT":case"NONE":return c.NONE;default:return}}}(null!=(w=Y(
null==(S=process)||null==(b=S.env)?void 0:b.LOG_LEVEL))?w:Y(as)))?n:c.INFO;const Hs=null!=(r=Y(null==(Ft=process
)||null==(_=Ft.env)?void 0:_.COMMAND_NAME))?r:As,Ks="git@github.com",Ws=".gitmodules",Js="src",Xs="git";class Qs{
constructor(e,t){o(this,"_logger",void 0),o(this,"name",void 0),o(this,"_level",void 0),this.name=e,this._logger=t,
this._level=void 0}getLogLevel(){var e;return null!=(e=this._level)?e:this._logger.getLogLevel()}setLogLevel(e){
return this._level=e,this}debug(...e){(void 0===this._level||this._level<=c.DEBUG)&&this._logger.debug(`[${this.name}]`,
...e)}info(...e){(void 0===this._level||this._level<=c.INFO)&&this._logger.info(`[${this.name}]`,...e)}warn(...e){(
void 0===this._level||this._level<=c.WARN)&&this._logger.warn(`[${this.name}]`,...e)}error(...e){(
void 0===this._level||this._level<=c.ERROR)&&this._logger.error(`[${this.name}]`,...e)}}class L{static setLogLevel(e){
return e&&(this._level=e),this}static getLogLevel(){return this._level}static getLogLevelString(){var e=this._level;
switch(e){case c.DEBUG:return"DEBUG";case c.INFO:return"INFO";case c.WARN:return"WARN";case c.ERROR:return"ERROR";
case c.NONE:return"NONE";default:return"Unknown:"+e}}static setLogger(e){if(!e)throw new TypeError(
"The logger was not defined");this._logger=e}static debug(...e){this._level<=c.DEBUG&&this._logger.debug(...e)}
static info(...e){this._level<=c.INFO&&this._logger.info(...e)}static warn(...e){this._level<=c.WARN&&this._logger.warn(
...e)}static error(...e){this._level<=c.ERROR&&this._logger.error(...e)}static createLogger(e){return new Qs(e,L)}}o(L,
"Level",c),o(L,"_level",c.DEBUG),o(L,"_logger",console);const Ys=L.createLogger("ProcessUtils");class Zs{
static getArguments(){return process.argv.slice(2)}static parseEnvFileLine(e,t){if(t.indexOf("=")<0)return t.length&&(
e[t]=""),e;const r=t.split("=");return t=r.shift(),(t=oa(t)).length&&(e[t]=r.join("=").trim()),e}static parseEnvFile(e){
const t=xs.default.readFileSync(e,{encoding:"utf-8"}),r=t.split("\n");return r.reduce(Zs.parseEnvFileLine,{})}
static initEnvFromFile(e){e=Zs.parseEnvFile(e),process.env=d(d({},e),process.env)}static initEnvFromDefaultFiles(){
var e=js.default.join(process.cwd(),".env");xs.default.existsSync(e)&&Zs.initEnvFromFile(e)}static setupDestroyHandler(r
,n){let i=!1;var e=t=>e=>{Zs._printErrors(t,e);try{if(i)return;i=!0,r()}catch(e){n(e)}};process.on("exit",e("exit")),
process.on("SIGTERM",e("SIGTERM")),process.on("SIGINT",e("SIGINT")),process.on("SIGUSR1",e("SIGUSR1")),process.on(
"SIGUSR2",e("SIGUSR2")),process.on("uncaughtException",e("uncaughtException"))}static _printErrors(e,t){try{t?Ys.error(
`Closing process because "${e}" event: `,t):"exit"===e?Ys.debug(`Closing process because "${e}" event`):Ys.info(
`Closing process because "${e}" event`)}catch(e){console.error("Error while printing errors: ",e)}}}(P=l=l||{}
)[P.OK=0]="OK",P[P.GENERAL_ERRORS=1]="GENERAL_ERRORS",P[P.MISUSE_OF_SHELL_BUILTINS=2]="MISUSE_OF_SHELL_BUILTINS",
P[P.ARGUMENT_PARSE_ERROR=3]="ARGUMENT_PARSE_ERROR",P[P.UNKNOWN_ARGUMENT=4]="UNKNOWN_ARGUMENT",
P[P.UNIMPLEMENTED_FEATURE=5]="UNIMPLEMENTED_FEATURE",P[P.FATAL_ERROR=6]="FATAL_ERROR",P[P.CONFLICT=7]="CONFLICT",
P[P.USAGE=64]="USAGE",P[P.DATAERR=65]="DATAERR",P[P.NOINPUT=66]="NOINPUT",P[P.NOUSER=67]="NOUSER",
P[P.NOHOST=68]="NOHOST",P[P.UNAVAILABLE=69]="UNAVAILABLE",P[P.SOFTWARE=70]="SOFTWARE",P[P.OSERR=71]="OSERR",
P[P.OSFILE=72]="OSFILE",P[P.CANTCREAT=73]="CANTCREAT",P[P.IOERR=74]="IOERR",P[P.TEMPFAIL=75]="TEMPFAIL",
P[P.PROTOCOL=76]="PROTOCOL",P[P.NOPERM=77]="NOPERM",P[P.CONFIG=78]="CONFIG",
P[P.COMMAND_INVOKED_CANNOT_EXECUTE=126]="COMMAND_INVOKED_CANNOT_EXECUTE",P[P.COMMAND_NOT_FOUND=127]="COMMAND_NOT_FOUND",
P[P.INVALID_ARGUMENT_TO_EXIT=128]="INVALID_ARGUMENT_TO_EXIT",
P[P.FATAL_SIGNAL_RANGE_START=129]="FATAL_SIGNAL_RANGE_START",P[P.FATAL_SIGNAL_RANGE_END=254]="FATAL_SIGNAL_RANGE_END",
P[P.EXIT_STATUS_OUT_OF_RANGE=255]="EXIT_STATUS_OUT_OF_RANGE",f={OPTIONS:0,0:"OPTIONS",GET:1,1:"GET",POST:2,2:"POST",
PUT:3,3:"PUT",DELETE:4,4:"DELETE",PATCH:5,5:"PATCH"};const eu="WINDOW"===(Ps=null!=(s=null!=(i=null==(Ns=process
)||null==(Xt=Ns.env)?void 0:Xt.NOR_REQUEST_CLIENT_MODE)?i:null==(Vo=process)||null==(u=Vo.env
)?void 0:u.REACT_APP_REQUEST_CLIENT_MODE)?s:"")||!("undefined"==typeof window||!window.fetch),tu="NODE"===Ps||!eu;
class ru{static async getRequestDataAsBuffer(n){return new Promise((e,t)=>{const r=[];n.on("data",e=>{try{r.push(e)
}catch(e){t(e)}}),n.on("end",()=>{try{e(Buffer.concat(r))}catch(e){t(e)}})})}static async getRequestDataAsString(e,
t="utf8"){const r=await ru.getRequestDataAsBuffer(e);return r.toString(t)}static async getRequestDataAsFormUrlEncoded(e
){if(""!==(e=await ru.getRequestDataAsString(e)))return Ls.parse(e)}static async getRequestDataAsJson(e){if(""!==(
e=await ru.getRequestDataAsString(e)))return JSON.parse(e)}}(O=p={Continue:100,100:"Continue",SwitchingProtocols:101,
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
O[O.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",Ua={ERROR:"error"};class nu extends Error{
constructor(e,t=void 0,r=void 0,n=void 0,i=void 0){super(t||function(e){switch(e){case p.Continue:return"Continue";
case p.SwitchingProtocols:return"Switching Protocols";case p.Processing:return"Processing";case p.CheckPoint:
return"Check Point";case p.OK:return"OK";case p.Created:return"Created";case p.Accepted:return"Accepted";
case p.NonAuthoritativeInformation:return"Non-Authoritative Information";case p.NoContent:return"No Content";
case p.ResetContent:return"Reset Content";case p.PartialContent:return"Partial Content";case p.MultiStatus:
return"Multi Status";case p.AlreadyReported:return"Already Reported";case p.IMUsed:return"IM Used";
case p.MultipleChoices:return"Multiple Choices";case p.MovedPermanently:return"Moved Permanently";case p.Found:
return"Found";case p.SeeOther:return"See Other";case p.NotModified:return"Not Modified";case p.TemporaryRedirect:
return"Temporary Redirect";case p.PermanentRedirect:return"Permanent Redirect";case p.BadRequest:return"Bad Request";
case p.Unauthorized:return"Unauthorized";case p.PaymentRequired:return"Payment Required";case p.Forbidden:
return"Forbidden";case p.NotFound:return"Not Found";case p.MethodNotAllowed:return"Method Not Allowed";
case p.NotAcceptable:return"Not Acceptable";case p.ProxyAuthenticationRequired:return"Proxy Authentication Required";
case p.RequestTimeout:return"Request Timeout";case p.Conflict:return"Conflict";case p.Gone:return"Gone";
case p.LengthRequired:return"Length Required";case p.PreconditionFailed:return"Precondition Failed";
case p.PayloadTooLarge:return"Payload Too Large";case p.URITooLong:return"URI Too Long";case p.UnsupportedMediaType:
return"Unsupported Media Type";case p.RequestedRangeNotSatisfiable:return"Requested Range Not Satisfiable";
case p.ExpectationFailed:return"Expectation Failed";case p.IAmATeapot:return"I Am a Teapot";case p.UnprocessableEntity:
return"Unprocessable Entity";case p.Locked:return"Locked";case p.FailedDependency:return"Failed Dependency";
case p.TooEarly:return"Too Early";case p.UpgradeRequired:return"Upgrade Required";case p.PreconditionRequired:
return"Precondition Required";case p.TooManyRequests:return"Too Many Requests";case p.RequestHeaderFieldsTooLarge:
return"Request Header Fields Too Large";case p.UnavailableForLegalReasons:return"Unavailable For Legal Reasons";
case p.InternalServerError:return"Internal Server Error";case p.NotImplemented:return"Not Implemented";
case p.BadGateway:return"Bad Gateway";case p.ServiceUnavailable:return"Service Unavailable";case p.GatewayTimeout:
return"Gateway Timeout";case p.HttpVersionNotSupported:return"Http Version Not Supported";case p.VariantAlsoNegotiates:
return"Variant Also Negotiates";case p.InsufficientStorage:return"Insufficient Storage";case p.LoopDetected:
return"Loop Detected";case p.BandwidthLimitExceeded:return"Bandwidth Limit Exceeded";case p.NotExtended:
return"Not Extended";case p.NetworkAuthenticationRequired:return"Network Authentication Required";default:
return e<400?"HTTP Status":"HTTP Error"}}(e)),o(this,"status",void 0),o(this,"method",void 0),o(this,"url",void 0),o(
this,"body",void 0),o(this,"__proto__",void 0),t=new.target.prototype,Object.setPrototypeOf?Object.setPrototypeOf(this,t
):this.__proto__=t,this.status=e,this.method=r,this.url=n,this.body=i}valueOf(){return this.status}toString(){
return this.status+" "+this.message}toJSON(){return{type:Ua.ERROR,status:this.status,message:this.message}}
getStatusCode(){return this.status}getMethod(){return this.method}getUrl(){return this.url}getBody(){return this.body}}
const iu=tu?require("fs").promises:void 0,ou=L.createLogger("NodeRequestClient");class au{static setLogLevel(e){
ou.setLogLevel(e)}constructor(e,t){o(this,"_http",void 0),o(this,"_https",void 0),this._http=e,this._https=t}
async jsonRequest(e,t,r,n){switch(e){case f.GET:return this._getJson(t,r,n);case f.POST:return this._postJson(t,r,n);
case f.PATCH:return this._patchJson(t,r,n);case f.PUT:return this._putJson(t,r,n);case f.DELETE:return this._deleteJson(
t,r,n);default:throw new TypeError("[Node]RequestClient: Unsupported method: "+e)}}async _checkSocketFile(t){try{
const e=await iu.stat(t);return!!e.isSocket()}catch(e){if("ENOTDIR"===(t=null==e?void 0:e.code))return void ou.debug(
"_checkSocketFile: ENOTDIR: ",e);if("ENOENT"===t)return void ou.debug("_checkSocketFile: ENOENT: ",e);throw ou.error(
`_checkSocketFile: Error "${t}" passed on: `,e),e}}async _findSocketFile(e){var t=await this._checkSocketFile(e);
return!0===t?e:!1!==t&&"/"!==(t=js.default.dirname(e))&&t!==e?this._findSocketFile(t):void 0}async _httpRequest(o,a,e){
var t;const s=e?JSON.stringify(e)+"\n":void 0,u=new Is.default.URL(o);let c;const l=null!=(
e=null===u||void 0===u?void 0:u.protocol)?e:"";if("unix:"===l||"socket:"===l){
const r=null!==u&&void 0!==u&&u.pathname?null===u||void 0===u?void 0:u.pathname:"/";if("/"===r)throw new TypeError(
"No socket path found for unix protocol URL: "+o);if(!(e=await this._findSocketFile(r)))throw new TypeError(
"No socket path found for unix protocol URL: "+o);t=""+(e.length<r.length?r.substr(e.length):"")+(
"?"!==u.search?u.search:""),a=d(d({},a),{},{socketPath:e,path:t}),o="",c=this._http
}else c="https:"===l?this._https:this._http;return new Promise((t,r)=>{let n=!1;try{if(!c)throw new Error(
"HTTP module not defined. This error should not happen.");var i;let e;o&&(a=d(d({},a),{},{hostname:u.hostname,
port:null!=(i=null!==u&&void 0!==u&&u.port?parseInt(u.port,10):void 0)?i:"https:"===l?443:80,path:u.pathname+u.search}))
,(e=c.request(a,e=>{n?ou.warn("Warning! Request had already ended when the response was received."):(n=!0,t(e))})).on(
"error",e=>{n?(ou.warn("Warning! Request had already ended when the response was received."),ou.debug(
"Error from event: ",e)):(ou.debug("Passing on error from event: ",e),n=!0,r(e))}),s&&e.write(s),e.end()}catch(e){n?(
ou.warn("Warning! Request had already ended when the response was received."),ou.debug("Exception: ",e)):(ou.debug(
"Passing on error: ",e),n=!0,r(e))}})}async _request(e,t,r,n){return r=await this._httpRequest(t,r,n),
n=await ru.getRequestDataAsJson(r),{method:e,url:t,statusCode:null!=(e=null==r?void 0:r.statusCode)?e:0,
headers:r.headers,body:n}}async _getJson(e,t,r){const n={method:"GET",headers:{"Content-Type":"application/json"}};
return t&&(n.headers=d(d({},n.headers),t)),this._request(f.GET,e,n,r).then(au._successResponse)}async _putJson(e,t,r){
const n={method:"PUT",headers:{"Content-Type":"application/json"}};return t&&(n.headers=d(d({},n.headers),t)),
this._request(f.PUT,e,n,r).then(au._successResponse)}async _postJson(e,t,r){const n={method:"POST",headers:{
"Content-Type":"application/json"}};return t&&(n.headers=d(d({},n.headers),t)),this._request(f.POST,e,n,r).then(
au._successResponse)}async _patchJson(e,t,r){const n={method:"PATCH",headers:{"Content-Type":"application/json"}};
return t&&(n.headers=d(d({},n.headers),t)),this._request(f.PATCH,e,n,r).then(au._successResponse)}async _deleteJson(e,t,
r){const n={method:"DELETE",headers:{"Content-Type":"application/json"}};return t&&(n.headers=d(d({},n.headers),t)),
this._request(f.DELETE,e,n,r).then(au._successResponse)}static async _successResponse(e){
var t=null==e?void 0:e.statusCode;if(t<200||400<=t)throw ou.error(`Unsuccessful response with status ${t}: `,e),new nu(t
,`Error ${t} for ${te(e.method)} `+e.url,e.method,e.url,e.body);return e.body}}class su{constructor(e){o(this,"_fetch",
void 0),this._fetch=e}jsonRequest(e,t,r,n){switch(e){case f.GET:return this._getJson(t,r,n);case f.POST:
return this._postJson(t,r,n);case f.PUT:return this._putJson(t,r,n);case f.DELETE:return this._deleteJson(t,r,n);
default:throw new TypeError("[Fetch]RequestClient: Unsupported method: "+e)}}_getJson(e,t,r){const n={method:"GET",
mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},credentials:"same-origin"};return t&&(
n.headers=d(d({},n.headers),t)),r&&(n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>su._successResponse(e,f.GET))}
_putJson(e,t,r){const n={method:"PUT",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},
credentials:"same-origin"};return t&&(n.headers=d(d({},n.headers),t)),r&&(n.body=JSON.stringify(r)),this._fetch(e,n
).then(e=>su._successResponse(e,f.PUT))}_postJson(e,t,r){const n={method:"POST",mode:"cors",cache:"no-cache",headers:{
"Content-Type":"application/json"},credentials:"same-origin"};return t&&(n.headers=d(d({},n.headers),t)),r&&(
n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>su._successResponse(e,f.POST))}_deleteJson(e,t,r){const n={
method:"DELETE",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},credentials:"same-origin"};
return t&&(n.headers=d(d({},n.headers),t)),r&&(n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>su._successResponse(e,
f.DELETE))}static _successResponse(e,t){const r=e.status;if(!e.ok||r<200||400<=r){const n=e.url,
i=`${r} ${e.statusText} for ${te(t)} `+n;return e.json().then(e=>{throw new nu(r,i,t,n,e)})}return e.json()}}
const uu=tu?require("http"):void 0,cu=tu?require("https"):void 0,lu=L.createLogger("RequestClient");class du{
static setLogLevel(e){lu.setLogLevel(e),au.setLogLevel(e)}static async jsonRequest(e,t,r,n){
return this._client.jsonRequest(e,t,r,n)}static async getJson(e,t){return this._client.jsonRequest(f.GET,e,t)}
static async postJson(e,t,r){return lu.debug(".postJson: ",e,t,r),this._client.jsonRequest(f.POST,e,r,t)}
static async patchJson(e,t,r){return lu.debug(".patchJson: ",e,t,r),this._client.jsonRequest(f.PATCH,e,r,t)}
static async putJson(e,t,r){return lu.debug(".putJson: ",e,t,r),this._client.jsonRequest(f.PUT,e,r,t)}
static async deleteJson(e,t,r){return lu.debug(".deleteJson: ",e,r,t),this._client.jsonRequest(f.DELETE,e,t,r)}
static _initClient(){if(eu&&this._hasWindowObject())return lu.debug("Detected browser environment"),new su(
window.fetch.bind(window));if(tu)return new au(uu,cu);throw new TypeError(
"Could not detect request client implementation")}static _hasWindowObject(){return"undefined"!=typeof window}}o(du,
"_client",du._initClient()),Ga={OK:0,0:"OK",ERROR:1,1:"ERROR",HELP:2,2:"HELP",VERSION:3,3:"VERSION"};
const fu=L.createLogger("Headers");class pu{static setLogLevel(e){fu.setLogLevel(e)}constructor(e){o(this,"_value",
void 0),o(this,"_uninitializedValue",void 0),this._value=void 0,this._uninitializedValue=e}_initializeValue(){
var t=this._value,r=this._uninitializedValue;try{r&&(this._uninitializedValue=void 0,this.addAll(r))}catch(e){
throw this._value=t,this._uninitializedValue=r,e}}clear(){this._value={},this._uninitializedValue=void 0}add(e,t){
this._uninitializedValue&&this._initializeValue(),fu.debug("add header: ",e,t),e=e.toLowerCase();var r=this._value&&ca(
this._value,e)?this._value[e]:void 0;void 0===this._value?this._value={[e]:t}:void 0!==r?ne(r)?this._value=d(d({},
this._value),{},{[e]:Ti([],r,[t])}):this._value=d(d({},this._value),{},{[e]:[r,t]}):this._value=d(d({},this._value),{},{
[e]:t})}containsKey(e){return this._uninitializedValue&&this._initializeValue(),e=e.toLowerCase(),ca(this._value,e)}
isEmpty(){this._uninitializedValue&&this._initializeValue();var e=this._value;return!e||0===Z(e).length}keySet(){
this._uninitializedValue&&this._initializeValue();const t=new Set;var e;return void 0!==this._value&&(e=Z(this._value),
qo(e,e=>{t.add(e)})),t}getValue(e){if(this._uninitializedValue&&this._initializeValue(),this._value
)return e=e.toLowerCase(),ca(this._value,e)?this._value[e]:void 0}getFirst(e){
return this._uninitializedValue&&this._initializeValue(),ne(e=this.getValue(e))?e.length?e[0]:void 0:e}getHost(){
return this._uninitializedValue&&this._initializeValue(),this.getFirst("host")}addAll(e,t){if(
this._uninitializedValue&&this._initializeValue(),H(e)){const r=e;if(!V(t))throw new TypeError(
"Headers.addAll signature must be (string, string[]) or (HeadersObject)");qo(t,e=>{this.add(r,e)})}else{const n=e;qo(Z(n
),t=>{var e=n[t];ne(e)?qo(e,e=>{this.add(t,e)}):void 0!==e&&this.add(t,e)})}}remove(e){
this._uninitializedValue&&this._initializeValue(),e=e.toLowerCase();var t=this.getValue(e);const r=d({},this._value);
return r&&ca(r,e)&&delete r[e],this._value=r,t}set(e,t){this._uninitializedValue&&this._initializeValue(),
e=e.toLowerCase(),void 0===this._value?this._value={[e]:t}:this._value=d(d({},this._value),{},{[e]:t})}setAll(t){
this._uninitializedValue&&this._initializeValue(),qo(Z(t),e=>{this.set(e,t[e])})}valueOf(){var e;
return this._uninitializedValue&&this._initializeValue(),null!=(e=this._value)?e:void 0}toString(){
this._uninitializedValue&&this._initializeValue();const r=this._value;if(!r||this.isEmpty())return"Headers()";var e=Z(r)
const t=Xn(e,e=>{const t=r[e];return t?V(t)?e+": "+t.map(e=>0<=t.indexOf(";")||0<=t.indexOf(",")?`"${t}"`:t).join(", "
):0<=t.indexOf(";")?`${e}: "${t}"`:e+": "+t:""+e});return`Headers(${t.join("; ")})`}clone(){
return this._uninitializedValue&&this._initializeValue(),new pu(this._value?d({},this._value):void 0)}}I={exports:{}},(
x=function(r,n,i){Fa.stat(r,function(e,t){i(e,!e&&oe(t,r,n))})}).sync=function(e,t){return oe(Fa.statSync(e),e,t)},
Fa=xs.default,(Ts=function(e,r,n){Ma.stat(e,function(e,t){n(e,!e&&ae(t,r))})}).sync=function(e,t){return ae(Ma.statSync(
e),t)},Ma=xs.default,$a="win32"===process.platform||$s.TESTING_WINDOWS?x:Ts,(E=function e(t,i,r){if(
"function"==typeof i&&(r=i,i={}),!r){if("function"!=typeof Promise)throw new TypeError("callback not provided");
return new Promise(function(r,n){e(t,i||{},function(e,t){e?n(e):r(t)})})}$a(t,i||{},function(e,t){e&&(
"EACCES"===e.code||i&&i.ignoreErrors)&&(e=null,t=!1),r(e,t)})}).sync=function(e,t){try{return $a.sync(e,t||{})}catch(e){
if(t&&t.ignoreErrors||"EACCES"===e.code)return!1;throw e}};
const hu="win32"===process.platform||"cygwin"===process.env.OSTYPE||"msys"===process.env.OSTYPE,gu=js.default,
mu=hu?";":":",bu=E,vu=e=>Object.assign(new Error("not found: "+e),{code:"ENOENT"}),yu=(e,t)=>{var r=t.colon||mu,
n=e.match(/\//)||hu&&e.match(/\\/)?[""]:[...hu?[process.cwd()]:[],...(t.path||process.env.PATH||"").split(r)];
const i=hu?t.pathExt||process.env.PATHEXT||".EXE;.CMD;.BAT;.COM":"",o=hu?i.split(r):[""];return hu&&-1!==e.indexOf("."
)&&""!==o[0]&&o.unshift(""),{pathEnv:n,pathExt:o,pathExtExe:i}},wu=((R=(o,s,t)=>{"function"==typeof s&&(t=s,s={}),
s=s||{};const{pathEnv:a,pathExt:u,pathExtExe:c}=yu(o,s),l=[],d=i=>new Promise((e,t)=>{if(i===a.length
)return s.all&&l.length?e(l):t(vu(o));const r=a[i];var t=/^".*"$/.test(r)?r.slice(1,-1):r,n=gu.join(t,o),
t=!t&&/^\.[\\\/]/.test(o)?o.slice(0,2)+n:n;e(f(t,i,0))}),f=(i,o,a)=>new Promise((r,e)=>{if(a===u.length)return r(d(o+1))
const n=u[a];bu(i+n,{pathExt:c},(e,t)=>{if(!e&&t){if(!s.all)return r(i+n);l.push(i+n)}return r(f(i,o,a+1))})});
return t?d(0).then(e=>t(null,e),t):d(0)}).sync=(t,r)=>{r=r||{};var n,i,o,a,{pathEnv:s,pathExt:u,pathExtExe:c}=yu(t,r);
const l=[];for(let e=0;e<s.length;e++){const d=s[e];n=/^".*"$/.test(d)?d.slice(1,-1):d,i=gu.join(n,t),
o=!n&&/^\.[\\\/]/.test(t)?t.slice(0,2)+i:i;for(let e=0;e<u.length;e++){a=o+u[e];try{if(bu.sync(a,{pathExt:c})){if(!r.all
)return a;l.push(a)}}catch(e){}}}if(r.all&&l.length)return l;if(r.nothrow)return null;throw vu(t)},(os={exports:{}}
).exports=T=(e={})=>{var t=e.env||process.env;return"win32"!==(e.platform||process.platform)?"PATH":Object.keys(t
).reverse().find(e=>"PATH"===e.toUpperCase())||"Path"},os.exports.default=T,js.default),Eu=R,_u=os.exports,Ou=(
rs=function(e){return se(e)||se(e,!0)},/([()\][%!^"`<>&|;, *?])/g),Ru=((j={}).command=function(e){return e.replace(Ou,
"^$1")},j.argument=function(e,t){return e=(e=`"${e=(e=(e=""+e).replace(/(\\*)"/g,'$1$1\\"')).replace(/(\\*)$/,"$1$1")}"`
).replace(Ou,"^$1"),t?e.replace(Ou,"^$1"):e},/^#!(.*)/),Tu=xs.default,Su=(e="")=>{const t=e.match(Ru);if(!t)return null;
const[r,n]=t[0].replace(/#! ?/,"").split(" ");return"env"===(e=r.split("/").pop())?n:n?e+" "+n:e},Nu=js.default,Au=rs,
Pu=j,xu="win32"===process.platform,ju=/\.(?:com|exe)$/i,Iu=/node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i,
Lu="win32"===process.platform,Cu=vs.default,Uu={hookChildProcess:function(r,n){if(Lu){const i=r.emit;r.emit=function(e,t
){return"exit"===e&&(e=ce(t,n))?i.call(r,"error",e):i.apply(r,arguments)}}},verifyENOENT:ce,verifyENOENTSync:function(e,
t){return Lu&&1===e&&!t.file?ue(t.original,"spawnSync"):null},notFoundError:ue},Gu=(I.exports=le,I.exports.spawn=le,
I.exports.sync=function(e,t,r){e=Ce(e,t,r);const n=Cu.spawnSync(e.command,e.args,e.options);
return n.error=n.error||Uu.verifyENOENTSync(n.status,e),n},I.exports._parse=Ce,I.exports._enoent=Uu,ka=I.exports,["env"]
),Fu=Object.getOwnPropertyDescriptor(Function.prototype,"toString"),Mu=Object.getOwnPropertyDescriptor(
Function.prototype.toString,"name"),$u=new WeakMap,ku=(t,r={})=>{function n(...e){if($u.set(n,++o),1===o)i=t.apply(this,
e),t=null;else if(!0===r.throw)throw new Error(`Function \`${a}\` can only be called once`);return i}if(
"function"!=typeof t)throw new TypeError("Expected a function");let i,o=0;const a=t.displayName||t.name||"<anonymous>";
var e,s,u,c,l,d,f,[p,h,{ignoreNonConfigurable:g=!1}={}]=[n,t],m=p.name;for(const b of Reflect.ownKeys(h))e=p,l=h,s=b,u=g
,"length"!==s&&"prototype"!==s&&"arguments"!==s&&"caller"!==s&&(c=Object.getOwnPropertyDescriptor(e,s),
l=Object.getOwnPropertyDescriptor(l,s),void 0!==c&&!c.configurable&&(
c.writable!==l.writable||c.enumerable!==l.enumerable||c.configurable!==l.configurable||!c.writable&&c.value!==l.value
)&&u||Object.defineProperty(e,s,l));return d=p,(f=Object.getPrototypeOf(h))!==Object.getPrototypeOf(d
)&&Object.setPrototypeOf(d,f),d=p,f=h,m=""===m?"":`with ${m.trim()}() `,m=((e,t)=>`/* Wrapped ${e}*/
`+t).bind(null,m,f.toString()),Object.defineProperty(m,"name",Mu),Object.defineProperty(d,"toString",y(y({},Fu),{},{
value:m})),$u.set(n,o),n},Du=(ku.callCount=e=>{if($u.has(e))return $u.get(e);throw new Error(
`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`)},34),qu=[{name:"SIGHUP",number:1,
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
description:"Invalid system call",standard:"other"}],Bu=function(){const e=je();return e.reduce(Ie,{})}();{const wc=je()
N=Array.from({length:65},(e,t)=>{var r,n=wc,i=(r=t,void 0!==(i=n.find(({name:e})=>Ss.constants.signals[e]===r)
)?i:n.find(e=>e.number===r));if(void 0===i)return{};var{name:n,description:i,supported:o,action:a,forced:s,standard:u}=i
return{[t]:{name:n,number:t,description:i,supported:o,action:a,forced:s,standard:u}}}),Object.assign({},...N)}const zu=(
{stdout:e,stderr:t,all:r,error:n,signal:i,exitCode:o,command:a,escapedCommand:s,timedOut:u,isCanceled:c,killed:l,
parsed:{options:{timeout:d}}})=>{var f,p,h,g,m,b,v;o=null===o?void 0:o,f=void 0===(i=null===i?void 0:i
)?void 0:Bu[i].description,d=`Command ${{timedOut:d,timeout:p,errorCode:h,signal:g,signalDescription:m,exitCode:b,
isCanceled:v}={timedOut:u,timeout:d,errorCode:n&&n.code,signal:i,signalDescription:f,exitCode:o,isCanceled:c},
d?`timed out after ${p} milliseconds`:v?"was canceled":void 0!==h?"failed with "+h:void 0!==g?`was killed with ${g} (${m})`:void 0!==b?"failed with exit code "+b:"failed"}: `+a
const y=(p="[object Error]"===Object.prototype.toString.call(n))?d+`
`+n.message:d;return v=[y,t,e].filter(Boolean).join("\n"),p?(n.originalMessage=n.message,n.message=v):n=new Error(v),
n.shortMessage=y,n.command=a,n.escapedCommand=s,n.exitCode=o,n.signal=i,n.signalDescription=f,n.stdout=e,n.stderr=t,
void 0!==r&&(n.all=r),"bufferedData"in n&&delete n.bufferedData,n.failed=!0,n.timedOut=Boolean(u),n.isCanceled=c,
n.killed=l&&!u,n},Vu=["stdin","stdout","stderr"],Hu=(h={exports:{}},(S=g={exports:{}}).exports=["SIGABRT","SIGALRM",
"SIGHUP","SIGINT","SIGTERM"],"win32"!==process.platform&&S.exports.push("SIGVTALRM","SIGXCPU","SIGXFSZ","SIGUSR2",
"SIGTRAP","SIGSYS","SIGQUIT","SIGIOT"),"linux"===process.platform&&S.exports.push("SIGIO","SIGPOLL","SIGPWR","SIGSTKFLT"
,"SIGUNUSED"),Le(m=$s.process)?(Da=ys.default,qa=g.exports,Ba=/^win/i.test(m.platform),"function"!=typeof(b=Es.default
)&&(b=b.EventEmitter),m.__signal_exit_emitter__?v=m.__signal_exit_emitter__:((v=m.__signal_exit_emitter__=new b).count=0
,v.emitted={}),v.infinite||(v.setMaxListeners(1/0),v.infinite=!0),h.exports=function(e,t){var r;return Le($s.process)?(
Da.equal(typeof e,"function","a callback must be provided for exit handler"),!1===Ka&&Wa(),r="exit",t&&t.alwaysLast&&(
r="afterexit"),t=function(){v.removeListener(r,e),0===v.listeners("exit").length&&0===v.listeners("afterexit"
).length&&za()},v.on(r,e),t):function(){}},za=function(){Ka&&Le($s.process)&&(Ka=!1,qa.forEach(function(e){try{
m.removeListener(e,Ha[e])}catch(e){}}),m.emit=Qa,m.reallyExit=Ja,--v.count)},h.exports.unload=za,Va=function(e,t,r){
v.emitted[e]||(v.emitted[e]=!0,v.emit(e,t,r))},Ha={},qa.forEach(function(e){Ha[e]=function(){Le($s.process
)&&m.listeners(e).length===v.count&&(za(),Va("exit",null,e),Va("afterexit",null,e),Ba&&"SIGHUP"===e&&(e="SIGINT"),
m.kill(m.pid,e))}}),h.exports.signals=function(){return qa},Ka=!1,Wa=function(){!Ka&&Le($s.process)&&(Ka=!0,v.count+=1,
qa=qa.filter(function(e){try{return m.on(e,Ha[e]),!0}catch(e){return!1}}),m.emit=Ya,m.reallyExit=Xa)},h.exports.load=Wa,
Ja=m.reallyExit,Xa=function(e){Le($s.process)&&(m.exitCode=e||0,Va("exit",m.exitCode,null),Va("afterexit",m.exitCode,
null),Ja.call(m,m.exitCode))},Qa=m.emit,Ya=function(e,t){return"exit"===e&&Le($s.process)?(void 0!==t&&(m.exitCode=t),
e=Qa.apply(this,arguments),Va("exit",m.exitCode,null),Va("afterexit",m.exitCode,null),e):Qa.apply(this,arguments)}
):h.exports=function(){return function(){}},Za=h.exports,5e3),
Ku=e=>e===Ms.default.constants.signals.SIGTERM||"string"==typeof e&&"SIGTERM"===e.toUpperCase(),Wu=(w={exports:{}},
Os.default.PassThrough),Ju=_s.default.constants,Xu=(as=Os.default,Rs.default.promisify),Qu=Xu(as.pipeline);
class Yu extends Error{constructor(){super("maxBuffer exceeded"),this.name="MaxBufferError"}}w.exports=fe,
w.exports.buffer=(e,t)=>fe(e,y(y({},t),{},{encoding:"buffer"})),w.exports.array=(e,t)=>fe(e,y(y({},t),{},{array:!0})),
w.exports.MaxBufferError=Yu,es=w.exports;const Zu=Os.default.PassThrough,ec=(ts=function(){function t(e){
return Array.isArray(e)?e.forEach(t):(n.push(e),e.once("end",r.bind(null,e)),e.once("error",i.emit.bind(i,"error")),
e.pipe(i,{end:!1})),this}function r(t){!(n=n.filter(function(e){return e!==t})).length&&i.readable&&i.end()}var n=[],
i=new Zu({objectMode:!0});return i.setMaxListeners(0),i.add=t,i.isEmpty=function(){return 0==n.length},i.on("unpipe",r),
Array.prototype.slice.call(arguments).forEach(t),i},async(e,t)=>{if(e){e.destroy();try{return await t}catch(e){
return e.bufferedData}}}),tc=(e,{encoding:t,buffer:r,maxBuffer:n})=>{if(e&&r)return t?es(e,{encoding:t,maxBuffer:n}
):es.buffer(e,{maxBuffer:n})},rc=(async()=>{})().constructor.prototype,nc=["then","catch","finally"].map(e=>[e,
Reflect.getOwnPropertyDescriptor(rc,e)]),ic=(e,t)=>{for(const[n,i]of nc){var r="function"==typeof t?(...e
)=>Reflect.apply(i.value,t(),e):i.value.bind(t);Reflect.defineProperty(e,n,y(y({},i),{},{value:r}))}return e},oc=(e,t=[]
)=>Array.isArray(t)?[e,...t]:[e],ac=/^[\w.-]+$/,sc=/"/g,uc=(e,t,r)=>{return"string"==typeof t||ws.Buffer.isBuffer(t
)?e.stripFinalNewline?(n="string"==typeof(e=t)?"\n":"\n".charCodeAt(),i="string"==typeof e?"\r":"\r".charCodeAt(),(
e=e[e.length-1]===n?e.slice(0,-1):e)[e.length-1]===i?e.slice(0,-1):e):t:void 0===r?void 0:"";var n,i},cc=L.createLogger(
"doExec"),lc=L.createLogger("git-pull"),dc=L.createLogger("git-submodule-update"),fc=L.createLogger("git-submodule-add")
,pc=L.createLogger("get-git-branch"),hc="fi.hg.github.org",gc=L.createLogger("git-url"),mc=L.createLogger("get-git-url")
,bc=L.createLogger("file-exists"),vc=L.createLogger("git-config"),C=L.createLogger("hgm-update"),U=L.createLogger(
"hgm-install"),yc=(Zs.initEnvFromDefaultFiles(),L.setLogLevel(A),L.createLogger("main"));!async function(e=[]){try{
pu.setLogLevel(c.INFO),du.setLogLevel(c.INFO),yc.debug("Loglevel as "+L.getLogLevelString());const{scriptName:t,
parseStatus:r,exitStatus:n,errorString:i,freeArgs:o}=class{static parseArguments(e,t=[]){var r,n,i,o=null!=(r=t.shift()
)?r:"",a=null!=(r=t.shift())?r:"";if(!a)return{parseStatus:Ga.ERROR,exitStatus:l.ARGUMENT_PARSE_ERROR,nodePath:o,
scriptName:e,freeArgs:[],extraArgs:[]};if(0===t.length)return{parseStatus:Ga.ERROR,exitStatus:l.ARGUMENT_PARSE_ERROR,
nodePath:o,scriptName:a,freeArgs:[],extraArgs:[]};let s=!0,u=[],c=[];do{if(i=null!=(n=t.shift())?n:"",s)switch(function(
){switch(i){case"-h":case"--help":case 0:return 0;case"-v":case"--version":case 1:return 1;case"--":case 2:return 2}}()
){case 0:return{parseStatus:Ga.HELP,exitStatus:l.OK,nodePath:o,scriptName:a,freeArgs:u,extraArgs:c};case 1:return{
parseStatus:Ga.VERSION,exitStatus:l.OK,nodePath:o,scriptName:a,freeArgs:u,extraArgs:c};case 2:s=!1;break;default:if(s){
if(Ta(i,"-"))return{errorString:"Unknown argument: "+i,parseStatus:Ga.ERROR,exitStatus:l.UNKNOWN_ARGUMENT,nodePath:o,
scriptName:a,freeArgs:u,extraArgs:c};u.push(i)}else c.push(i)}}while(1<=t.length);return{parseStatus:Ga.OK,
exitStatus:l.OK,nodePath:o,scriptName:a,freeArgs:u,extraArgs:c}}}.parseArguments(Hs,e);if(r===Ga.HELP||r===Ga.VERSION
)return console.log(`USAGE: ${t} [OPT(s)] ACTION [ARG(s)]

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
`),n;if(i)return console.error("ERROR: "+i),n;Zs.setupDestroyHandler(()=>{yc.debug(
"Stopping command from process utils event")},e=>{yc.error("Error while shutting down the service: ",e)});
const a=o.shift();switch(a.toLowerCase()){case"i":case"init":case"install":return await async function(e){
const t=e.shift();if(!t)return Ae(be());var e=e.shift(),r=t.substring(1).includes("@")?t.substring(1).split("@").pop(
):void 0;return async function(e,t,r){U.debug("installSubModule: ",e,t,r);var n,i,o=be(),{gitUrl:e,packageName:a
}=await ye(e);if(!e)throw new TypeError(`Could not detect git url for: "${e}"`);U.debug("installSubModule: gitUrl = ",e)
,U.debug("installSubModule: packageName = ",a),t=t||bs.resolve(bs.resolve(o,Js),ve(a)),o=bs.relative(be(),t),U.debug(
"relativeTargetPath = ",o);let s;try{s=await ms.promises.stat(t),U.debug("stats: ",s)}catch(e){"ENOENT"!==(
null==e?void 0:e.code)&&U.error("File stat error: ",t,e),s=void 0}if(i=null!=(i=null==(i=s)?void 0:i.isFile())&&i,
U.debug("isFile: ",i),n=null!=(n=null==(n=s)?void 0:n.isDirectory())&&n,U.debug("isDirectory: ",n),n)U.debug(
"Target directory already exists, we'll only install: ",t),await he(o);else{if(void 0!==s&&void 0!==i)return U.error(
"Target file not a directory: ",t),l.CONFLICT;await ge(e,o),U.debug("Initialized: ",e,o)}return n=null!=r?r:"main",
U.debug("nextBranch: ",n),i=await me(o),U.debug("currentBranch: ",i),i!==n?await Ee(o,n):U.debug(
"Branch already identical: ",n),await Oe(o,e),await _e(o,o),await Ae(t),console.info(a+`@${n}:`+o),l.OK}(t,e,r)}(o);
case"u":case"update":return await async function(e){const t=e.shift();if(!t)return Se(be());var e=e.shift(),
r=t.substring(1).includes("@")?t.substring(1).split("@").pop():void 0;return async function(t,r,e){var n,i,o;if(C.debug(
"updateSubModule: ",t,r,e),e=be(),C.debug("updateSubModule: projectDir=",e),n=await Te(e),C.debug(
"updateSubModule: list=",n),i=e=>e.url===t,o=void 0!==r&&null!=(o=Vi(n,e=>e.path===r))?o:Vi(n,i))return Ne(e,o);
throw new TypeError("Could not find package for "+t)}(t,e,r)}(o);case"r":case"remove":return o,
await l.UNIMPLEMENTED_FEATURE;case"l":case"list":return await async function(){let i=0;var e=await Te(be());const o=e=>{
let t="",r=(e.path!==(null==e?void 0:e.configPath)&&(t=void 0===(null==e?void 0:e.configPath
)?" [path not configured]":` [path configured as "${e.configPath}"]`),""),n=(e.branch!==(null==e?void 0:e.configBranch
)&&(r=void 0===(null==e?void 0:e.configBranch)?" [branch not configured]":` [branch configured as @${e.configBranch}]`),
"");e.url!==(null==e?void 0:e.configUrl)&&(n=void 0===(null==e?void 0:e.configUrl
)?" [url not configured]":` [url configured as "${e.configUrl}"]`),1<=i?console.info(" ".repeat(i
)+"* "+e.packageName+"@"+e.branch+r+n+t):console.info(e.packageName+"@"+e.branch+r+n+t),e.children.length&&(i+=1,qo(
e.children,o),--i)};return qo(e,o),l.OK}(o)}return l.UNKNOWN_ARGUMENT}catch(e){return yc.error("Fatal error: ",e),
l.FATAL_ERROR}}(process.argv).then(e=>{process.exit(e)}).catch(e=>{console.error("Error: ",e),process.exit(1)});
