"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[239],{3239:function(e,t,r){let s;r.d(t,{cN:function(){return e$},gV:function(){return eY}});var i,o,n,a,h,c,l,u,d,f,p,g,m,y=r(607),b=r(2601),w=r(7133).Buffer,v=function(e,t,r){if(r||2==arguments.length)for(var s,i=0,o=t.length;i<o;i++)!s&&i in t||(s||(s=Array.prototype.slice.call(t,0,i)),s[i]=t[i]);return e.concat(s||Array.prototype.slice.call(t))},T=function(e,t,r){this.name=e,this.version=t,this.os=r,this.type="browser"},E=function(e,t,r,s){this.name=e,this.version=t,this.os=r,this.bot=s,this.type="bot-device"},A=function(){this.type="bot",this.bot=!0,this.name="bot",this.version=null,this.os=null},_=/(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,S=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["edge-ios",/EdgiOS\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/EdgA?\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FB[AS]V\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["curl",/^curl\/([0-9\.]+)$/],["searchbot",/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]],k=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/]];function O(e){var t=""!==e&&S.reduce(function(t,r){var s=r[0],i=r[1];if(t)return t;var o=i.exec(e);return!!o&&[s,o]},!1);if(!t)return null;var r=t[0],s=t[1];if("searchbot"===r)return new A;var i=s[1]&&s[1].split(".").join("_").split("_").slice(0,3);i?i.length<3&&(i=v(v([],i,!0),function(e){for(var t=[],r=0;r<e;r++)t.push("0");return t}(3-i.length),!0)):i=[];var o=i.join("."),n=function(e){for(var t=0,r=k.length;t<r;t++){var s=k[t],i=s[0];if(s[1].exec(e))return i}return null}(e),a=_.exec(e);return a&&a[1]?new E(r,o,n,a[1]):new T(r,o,n)}class N{constructor(){if(!N.fetch)throw Error("DefaultNetworkTransport.fetch must be set before it's used");if(!N.AbortController)throw Error("DefaultNetworkTransport.AbortController must be set before it's used")}fetchWithCallbacks(e,t){this.fetch(e).then(async e=>{let t=await e.text(),r={};return e.headers.forEach((e,t)=>{r[t]=e}),{statusCode:e.status,headers:r,body:t}}).then(e=>t.onSuccess(e)).catch(e=>t.onError(e))}async fetch(e){let{timeoutMs:t,url:r,...s}=e,{signal:i,cancelTimeout:o}=this.createTimeoutSignal(t);try{return await N.fetch(r,{...N.extraFetchOptions,signal:i,...s})}finally{o()}}createTimeoutSignal(e){if("number"!=typeof e)return{signal:void 0,cancelTimeout:()=>{}};{let t=new N.AbortController,r=setTimeout(()=>{t.abort()},e);return{signal:t.signal,cancelTimeout:()=>{clearTimeout(r)}}}}}N.DEFAULT_HEADERS={"Content-Type":"application/json"};let x=function(e){return e&&e.Math==Math&&e},R=x("object"==typeof globalThis&&globalThis)||x("object"==typeof window&&window)||x("object"==typeof self&&self)||x("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")();"undefined"!=typeof __DEV__&&__DEV__,N.fetch=R.fetch.bind(R),N.AbortController=R.AbortController.bind(R);let I="3.7.2",U="function"==typeof atob,C="function"==typeof btoa,P="function"==typeof w,D="function"==typeof TextDecoder?new TextDecoder:void 0,j="function"==typeof TextEncoder?new TextEncoder:void 0,W=Array.prototype.slice.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="),B=(s={},W.forEach((e,t)=>s[e]=t),s),F=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,L=String.fromCharCode.bind(String),$="function"==typeof Uint8Array.from?Uint8Array.from.bind(Uint8Array):(e,t=e=>e)=>new Uint8Array(Array.prototype.slice.call(e,0).map(t)),M=e=>e.replace(/=/g,"").replace(/[+\/]/g,e=>"+"==e?"-":"_"),J=e=>e.replace(/[^A-Za-z0-9\+\/]/g,""),V=e=>{let t,r,s,i,o="",n=e.length%3;for(let n=0;n<e.length;){if((r=e.charCodeAt(n++))>255||(s=e.charCodeAt(n++))>255||(i=e.charCodeAt(n++))>255)throw TypeError("invalid character found");o+=W[(t=r<<16|s<<8|i)>>18&63]+W[t>>12&63]+W[t>>6&63]+W[63&t]}return n?o.slice(0,n-3)+"===".substring(n):o},H=C?e=>btoa(e):P?e=>w.from(e,"binary").toString("base64"):V,K=P?e=>w.from(e).toString("base64"):e=>{let t=[];for(let r=0,s=e.length;r<s;r+=4096)t.push(L.apply(null,e.subarray(r,r+4096)));return H(t.join(""))},z=(e,t=!1)=>t?M(K(e)):K(e),G=e=>{if(e.length<2){var t=e.charCodeAt(0);return t<128?e:t<2048?L(192|t>>>6)+L(128|63&t):L(224|t>>>12&15)+L(128|t>>>6&63)+L(128|63&t)}var t=65536+(e.charCodeAt(0)-55296)*1024+(e.charCodeAt(1)-56320);return L(240|t>>>18&7)+L(128|t>>>12&63)+L(128|t>>>6&63)+L(128|63&t)},q=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,X=e=>e.replace(q,G),Z=P?e=>w.from(e,"utf8").toString("base64"):j?e=>K(j.encode(e)):e=>H(X(e)),Y=(e,t=!1)=>t?M(Z(e)):Z(e),Q=e=>Y(e,!0),ee=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,et=e=>{switch(e.length){case 4:var t=((7&e.charCodeAt(0))<<18|(63&e.charCodeAt(1))<<12|(63&e.charCodeAt(2))<<6|63&e.charCodeAt(3))-65536;return L((t>>>10)+55296)+L((1023&t)+56320);case 3:return L((15&e.charCodeAt(0))<<12|(63&e.charCodeAt(1))<<6|63&e.charCodeAt(2));default:return L((31&e.charCodeAt(0))<<6|63&e.charCodeAt(1))}},er=e=>e.replace(ee,et),es=e=>{if(e=e.replace(/\s+/g,""),!F.test(e))throw TypeError("malformed base64.");e+="==".slice(2-(3&e.length));let t,r="",s,i;for(let o=0;o<e.length;)t=B[e.charAt(o++)]<<18|B[e.charAt(o++)]<<12|(s=B[e.charAt(o++)])<<6|(i=B[e.charAt(o++)]),r+=64===s?L(t>>16&255):64===i?L(t>>16&255,t>>8&255):L(t>>16&255,t>>8&255,255&t);return r},ei=U?e=>atob(J(e)):P?e=>w.from(e,"base64").toString("binary"):es,eo=P?e=>$(w.from(e,"base64")):e=>$(ei(e),e=>e.charCodeAt(0)),en=e=>eo(eh(e)),ea=P?e=>w.from(e,"base64").toString("utf8"):D?e=>D.decode(eo(e)):e=>er(ei(e)),eh=e=>J(e.replace(/[-_]/g,e=>"-"==e?"+":"/")),ec=e=>ea(eh(e)),el=e=>({value:e,enumerable:!1,writable:!0,configurable:!0}),eu=function(){let e=(e,t)=>Object.defineProperty(String.prototype,e,el(t));e("fromBase64",function(){return ec(this)}),e("toBase64",function(e){return Y(this,e)}),e("toBase64URI",function(){return Y(this,!0)}),e("toBase64URL",function(){return Y(this,!0)}),e("toUint8Array",function(){return en(this)})},ed=function(){let e=(e,t)=>Object.defineProperty(Uint8Array.prototype,e,el(t));e("toBase64",function(e){return z(this,e)}),e("toBase64URI",function(){return z(this,!0)}),e("toBase64URL",function(){return z(this,!0)})},ef={version:I,VERSION:I,atob:ei,atobPolyfill:es,btoa:H,btoaPolyfill:V,fromBase64:ec,toBase64:Y,encode:Y,encodeURI:Q,encodeURL:Q,utob:X,btou:er,decode:ec,isValid:e=>{if("string"!=typeof e)return!1;let t=e.replace(/\s+/g,"").replace(/={0,2}$/,"");return!/[^\s0-9a-zA-Z\+/]/.test(t)||!/[^\s0-9a-zA-Z\-_]/.test(t)},fromUint8Array:z,toUint8Array:en,extendString:eu,extendUint8Array:ed,extendBuiltins:()=>{eu(),ed()}},ep={relaxed:!1};function eg(e){return y.dF.serialize(e,ep)}function em(e){return Array.isArray(e)?e.map(e=>y.dF.deserialize(e)):y.dF.deserialize(e)}(i=u||(u={})).Normal="normal",i.Server="server",(o=d||(d={})).NAME="name",o.EMAIL="email",o.PICTURE="picture",o.FIRST_NAME="first_name",o.LAST_NAME="last_name",o.GENDER="gender",o.BIRTHDAY="birthday",o.MIN_AGE="min_age",o.MAX_AGE="max_age";let ey={[d.NAME]:"name",[d.EMAIL]:"email",[d.PICTURE]:"pictureUrl",[d.FIRST_NAME]:"firstName",[d.LAST_NAME]:"lastName",[d.GENDER]:"gender",[d.BIRTHDAY]:"birthday",[d.MIN_AGE]:"minAge",[d.MAX_AGE]:"maxAge"};class eb{constructor(e){if(this.type=u.Normal,this.identities=[],"object"==typeof e&&null!==e){let{type:t,identities:r,data:s}=e;if("string"==typeof t)this.type=t;else throw Error("Expected 'type' in the response body");if(Array.isArray(r))this.identities=r.map(e=>{let{id:t,provider_type:r}=e;return{id:t,providerType:r}});else throw Error("Expected 'identities' in the response body");if("object"==typeof s&&null!==s){let e=Object.fromEntries(Object.entries(s).map(([e,t])=>e in ey?[ey[e],t]:[e,t]));this.data=em(e)}else throw Error("Expected 'data' in the response body")}else this.data={}}}class ew{constructor(e,t){this.storage=e,this.keyPart=t}get(e){return this.storage.get(this.keyPart+ew.PART_SEPARATOR+e)}set(e,t){return this.storage.set(this.keyPart+ew.PART_SEPARATOR+e,t)}remove(e){return this.storage.remove(this.keyPart+ew.PART_SEPARATOR+e)}prefix(e){return new ew(this,e)}clear(e=""){return this.storage.clear(this.keyPart+ew.PART_SEPARATOR+e)}addListener(e){return this.storage.addListener(e)}removeListener(e){return this.storage.addListener(e)}}ew.PART_SEPARATOR=":";let ev="accessToken",eT="refreshToken",eE="profile",eA="providerType";class e_ extends ew{constructor(e,t){super(e,`user(${t})`)}get accessToken(){return this.get(ev)}set accessToken(e){null===e?this.remove(ev):this.set(ev,e)}get refreshToken(){return this.get(eT)}set refreshToken(e){null===e?this.remove(eT):this.set(eT,e)}get profile(){let e=this.get(eE);if(e){let t=new eb;return Object.assign(t,JSON.parse(e)),t}}set profile(e){e?this.set(eE,JSON.stringify(e)):this.remove(eE)}get providerType(){let e=this.get(eA);if(e)return e}set providerType(e){e?this.set(eA,e):this.remove(eA)}}function eS(e){return Object.fromEntries(Object.entries(e).filter(e=>void 0!==e[1]))}function ek(e,t=!0){let r=eS(e),s=t&&Object.keys(r).length>0?"?":"";return s+Object.entries(r).map(([e,t])=>`${e}=${encodeURIComponent(t)}`).join("&")}let eO=["inspect","callFunction","callFunctionStreaming",...Object.getOwnPropertyNames(Object.prototype)];function eN(e){let t=function(e){for(let t of e)if("object"==typeof t&&t)for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return e}(e);return t.map(e=>"object"==typeof e?eg(e):e)}class ex{constructor(e,t={}){this.fetcher=e,this.serviceName=t.serviceName,this.argsTransformation=t.argsTransformation||eN}static create(e,t={}){let r=new ex(e,t);return new Proxy(r,{get(e,t,r){if("string"==typeof t&&-1===eO.indexOf(t))return e.callFunction.bind(e,t);{let s=Reflect.get(e,t,r);return"function"==typeof s?s.bind(e):s}}})}async callFunction(e,...t){let r={name:e,arguments:this.argsTransformation?this.argsTransformation(t):t};this.serviceName&&(r.service=this.serviceName);let s=this.fetcher.appRoute;return this.fetcher.fetchJSON({method:"POST",path:s.functionsCall().path,body:r})}callFunctionStreaming(e,...t){let r={name:e,arguments:this.argsTransformation?this.argsTransformation(t):t};this.serviceName&&(r.service=this.serviceName);let s=this.fetcher.appRoute,i=ek({baas_request:ef.encode(JSON.stringify(r))});return this.fetcher.fetchStream({method:"GET",path:s.functionsCall().path+i})}}class eR{constructor(e,t="local-userpass"){this.fetcher=e,this.providerName=t}async registerUser(e){let t=this.fetcher.appRoute;await this.fetcher.fetchJSON({method:"POST",path:t.emailPasswordAuth(this.providerName).register().path,body:e})}async confirmUser(e){let t=this.fetcher.appRoute;await this.fetcher.fetchJSON({method:"POST",path:t.emailPasswordAuth(this.providerName).confirm().path,body:e})}async resendConfirmationEmail(e){let t=this.fetcher.appRoute;await this.fetcher.fetchJSON({method:"POST",path:t.emailPasswordAuth(this.providerName).confirmSend().path,body:e})}async retryCustomConfirmation(e){let t=this.fetcher.appRoute;await this.fetcher.fetchJSON({method:"POST",path:t.emailPasswordAuth(this.providerName).confirmCall().path,body:e})}async resetPassword(e){let t=this.fetcher.appRoute;await this.fetcher.fetchJSON({method:"POST",path:t.emailPasswordAuth(this.providerName).reset().path,body:e})}async sendResetPasswordEmail(e){let t=this.fetcher.appRoute;await this.fetcher.fetchJSON({method:"POST",path:t.emailPasswordAuth(this.providerName).resetSend().path,body:e})}async callResetPasswordFunction(e,...t){let r=this.fetcher.appRoute;await this.fetcher.fetchJSON({method:"POST",path:r.emailPasswordAuth(this.providerName).resetCall().path,body:{...e,arguments:t}})}}var eI={api:function(){return{path:"/api/client/v2.0",app(e){return{path:this.path+`/app/${e}`,location(){return{path:this.path+"/location"}},authProvider(e){return{path:this.path+`/auth/providers/${e}`,login(){return{path:this.path+"/login"}}}},emailPasswordAuth(e){let t=this.authProvider(e);return{...t,register(){return{path:this.path+"/register"}},confirm(){return{path:this.path+"/confirm"}},confirmSend(){return{path:this.path+"/confirm/send"}},confirmCall(){return{path:this.path+"/confirm/call"}},reset(){return{path:this.path+"/reset"}},resetSend(){return{path:this.path+"/reset/send"}},resetCall(){return{path:this.path+"/reset/call"}}}},functionsCall(){return{path:this.path+"/functions/call"}}}},auth(){return{path:this.path+"/auth",apiKeys(){return{path:this.path+"/api_keys",key(e){return{path:this.path+`/${e}`,enable(){return{path:this.path+"/enable"}},disable(){return{path:this.path+"/disable"}}}}}},profile(){return{path:this.path+"/profile"}},session(){return{path:this.path+"/session"}},delete(){return{path:this.path+"/delete"}}}}}}};class eU{constructor(e){this.fetcher=e}create(e){return this.fetcher.fetchJSON({method:"POST",body:{name:e},path:eI.api().auth().apiKeys().path,tokenType:"refresh"})}fetch(e){return this.fetcher.fetchJSON({method:"GET",path:eI.api().auth().apiKeys().key(e).path,tokenType:"refresh"})}fetchAll(){return this.fetcher.fetchJSON({method:"GET",tokenType:"refresh",path:eI.api().auth().apiKeys().path})}async delete(e){await this.fetcher.fetchJSON({method:"DELETE",path:eI.api().auth().apiKeys().key(e).path,tokenType:"refresh"})}async enable(e){await this.fetcher.fetchJSON({method:"PUT",path:eI.api().auth().apiKeys().key(e).enable().path,tokenType:"refresh"})}async disable(e){await this.fetcher.fetchJSON({method:"PUT",path:eI.api().auth().apiKeys().key(e).disable().path,tokenType:"refresh"})}}let eC=null;function eP(){if(eC)return eC;throw Error("Cannot get environment before it's set")}class eD extends Error{constructor({message:e,code:t}){super(e),this.name="WatchError",this.code=t}}(n=f||(f={})).NEED_DATA="NEED_DATA",n.HAVE_EVENT="HAVE_EVENT",n.HAVE_ERROR="HAVE_ERROR";class ej{constructor(){this._state=f.NEED_DATA,this._error=null,this._textDecoder=new(eP()).TextDecoder,this._buffer="",this._bufferOffset=0,this._eventType="",this._dataBuffer=""}feedBuffer(e){this.assertState(f.NEED_DATA),this._buffer+=this._textDecoder.decode(e,{stream:!0}),this.advanceBufferState()}feedLine(e){if(this.assertState(f.NEED_DATA),e.endsWith("\n")&&(e=e.substr(0,e.length-1)),e.endsWith("\r")&&(e=e.substr(0,e.length-1)),0===e.length){if(0===this._dataBuffer.length){this._eventType="";return}this._dataBuffer.endsWith("\n")&&(this._dataBuffer=this._dataBuffer.substr(0,this._dataBuffer.length-1)),this.feedSse({data:this._dataBuffer,eventType:this._eventType}),this._dataBuffer="",this._eventType=""}if(":"===e[0])return;let t=e.indexOf(":"),r=e.substr(0,t),s=-1===t?"":e.substr(t+1);s.startsWith(" ")&&(s=s.substr(1)),"event"===r?this._eventType=s:"data"===r&&(this._dataBuffer+=s,this._dataBuffer+="\n")}feedSse(e){this.assertState(f.NEED_DATA);let t=e.data.indexOf("%");if(-1!==t){let r="",s=0;for(let i=t;-1!==i;i=e.data.indexOf("%",s)){r+=e.data.substr(s,i-s);let t=e.data.substr(i,3);"%25"===t?r+="%":"%0A"===t?r+="\n":"%0D"===t?r+="\r":r+=t,s=i+t.length}r+=e.data.substr(s),e.data=r}if(e.eventType&&"message"!==e.eventType){if("error"===e.eventType){this._state=f.HAVE_ERROR,this._error=new eD({message:e.data,code:"unknown"});try{let{error_code:t,error:r}=y.dF.parse(e.data);if("string"!=typeof t||"string"!=typeof r)return;this._error=new eD({message:r,code:t})}catch{return}}}else{try{let t=y.dF.parse(e.data);if("object"==typeof t){this._nextEvent=t,this._state=f.HAVE_EVENT;return}}catch{}this._state=f.HAVE_ERROR,this._error=new eD({message:"server returned malformed event: "+e.data,code:"bad bson parse"})}}get state(){return this._state}nextEvent(){this.assertState(f.HAVE_EVENT);let e=this._nextEvent;return this._state=f.NEED_DATA,this.advanceBufferState(),e}get error(){return this._error}advanceBufferState(){for(this.assertState(f.NEED_DATA);this.state===f.NEED_DATA;){if(this._bufferOffset===this._buffer.length){this._buffer="",this._bufferOffset=0;return}let e=this._buffer.indexOf("\n",this._bufferOffset);if(-1===e){0!==this._bufferOffset&&(this._buffer=this._buffer.substr(this._bufferOffset,this._buffer.length-this._bufferOffset),this._bufferOffset=0);return}this.feedLine(this._buffer.substr(this._bufferOffset,e-this._bufferOffset)),this._bufferOffset=e+1}}assertState(e){if(this._state!==e)throw Error(`Expected WatchStream to be in state ${e}, but in state ${this._state}`)}}class eW{constructor(e,t,r,s){this.functions=ex.create(e,{serviceName:t}),this.databaseName=r,this.collectionName=s,this.serviceName=t,this.fetcher=e}find(e={},t={}){return this.functions.find({database:this.databaseName,collection:this.collectionName,query:e,project:t.projection,sort:t.sort,limit:t.limit})}findOne(e={},t={}){return this.functions.findOne({database:this.databaseName,collection:this.collectionName,query:e,project:t.projection,sort:t.sort})}findOneAndUpdate(e={},t,r={}){return this.functions.findOneAndUpdate({database:this.databaseName,collection:this.collectionName,filter:e,update:t,sort:r.sort,projection:r.projection,upsert:r.upsert,returnNewDocument:r.returnNewDocument})}findOneAndReplace(e={},t,r={}){return this.functions.findOneAndReplace({database:this.databaseName,collection:this.collectionName,filter:e,update:t,sort:r.sort,projection:r.projection,upsert:r.upsert,returnNewDocument:r.returnNewDocument})}findOneAndDelete(e={},t={}){return this.functions.findOneAndReplace({database:this.databaseName,collection:this.collectionName,filter:e,sort:t.sort,projection:t.projection})}aggregate(e){return this.functions.aggregate({database:this.databaseName,collection:this.collectionName,pipeline:e})}count(e={},t={}){return this.functions.count({database:this.databaseName,collection:this.collectionName,query:e,limit:t.limit})}insertOne(e){return this.functions.insertOne({database:this.databaseName,collection:this.collectionName,document:e})}insertMany(e){return this.functions.insertMany({database:this.databaseName,collection:this.collectionName,documents:e})}deleteOne(e={}){return this.functions.deleteOne({database:this.databaseName,collection:this.collectionName,query:e})}deleteMany(e={}){return this.functions.deleteMany({database:this.databaseName,collection:this.collectionName,query:e})}updateOne(e,t,r={}){return this.functions.updateOne({database:this.databaseName,collection:this.collectionName,query:e,update:t,upsert:r.upsert,arrayFilters:r.arrayFilters})}updateMany(e,t,r={}){return this.functions.updateMany({database:this.databaseName,collection:this.collectionName,query:e,update:t,upsert:r.upsert,arrayFilters:r.arrayFilters})}watch({ids:e,filter:t}={}){let r=this.functions.callFunctionStreaming("watch",{database:this.databaseName,collection:this.collectionName,ids:e,filter:t}),s=r.then(e=>e[Symbol.asyncIterator]()),i=this.watchImpl(s),o=i.return;return Object.assign(i,{return:e=>(s.then(t=>t.return?t.return(e):void 0),o.call(i,e))})}async *watchImpl(e){let t=new ej,r=e.then(e=>({[Symbol.asyncIterator]:()=>e}));for await(let e of(await r))if(e){for(t.feedBuffer(e);t.state==f.HAVE_EVENT;)yield t.nextEvent();if(t.state==f.HAVE_ERROR)throw t.error}}}function eB(e,t,r,s){return new eW(e,t,r,s)}function eF(e,t,r){return{collection:eB.bind(null,e,t,r)}}(a=p||(p={})).Active="active",a.LoggedOut="logged-out",a.Removed="removed",(h=g||(g={})).Normal="normal",h.Server="server";class eL{constructor(e){if(this.app=e.app,this.id=e.id,this.storage=new e_(this.app.storage,this.id),"accessToken"in e&&"refreshToken"in e&&"providerType"in e)this._accessToken=e.accessToken,this._refreshToken=e.refreshToken,this.providerType=e.providerType,this.storage.accessToken=e.accessToken,this.storage.refreshToken=e.refreshToken,this.storage.providerType=e.providerType;else{this._accessToken=this.storage.accessToken,this._refreshToken=this.storage.refreshToken;let e=this.storage.providerType;if(this._profile=this.storage.profile,e)this.providerType=e;else throw Error("Storage is missing a provider type")}this.fetcher=this.app.fetcher.clone({userContext:{currentUser:this}}),this.apiKeys=new eU(this.fetcher),this.functions=ex.create(this.fetcher)}get accessToken(){return this._accessToken}set accessToken(e){this._accessToken=e,this.storage.accessToken=e}get refreshToken(){return this._refreshToken}set refreshToken(e){this._refreshToken=e,this.storage.refreshToken=e}get state(){return this.id in this.app.allUsers?null===this.refreshToken?p.LoggedOut:p.Active:p.Removed}get isLoggedIn(){return this.state===p.Active}get customData(){if(this.accessToken){let e=this.decodeAccessToken();return e.userData}throw Error("Cannot read custom data without an access token")}get profile(){if(this._profile)return this._profile.data;throw Error("A profile was never fetched for this user")}get identities(){if(this._profile)return this._profile.identities;throw Error("A profile was never fetched for this user")}get deviceId(){if(this.accessToken){let e=this.accessToken.split(".")[1];if(e){let t=JSON.parse(ef.decode(e)),r=t.baas_device_id;if("string"==typeof r&&"000000000000000000000000"!==r)return r}}return null}async refreshProfile(){let e=await this.fetcher.fetchJSON({method:"GET",path:eI.api().auth().profile().path});this._profile=new eb(e),this.storage.profile=this._profile}async logOut(){try{null!==this._refreshToken&&await this.fetcher.fetchJSON({method:"DELETE",path:eI.api().auth().session().path,tokenType:"refresh"})}catch(e){if(!(e instanceof Error)||!e.message.includes("failed to find refresh token"))throw e}finally{this.accessToken=null,this.refreshToken=null}}async linkCredentials(e){let t=await this.app.authenticator.authenticate(e,this);if(this.id!==t.userId){let e=`got user id ${t.userId} expected ${this.id}`;throw Error(`Link response ment for another user (${e})`)}this.accessToken=t.accessToken,await this.refreshProfile()}async refreshAccessToken(){let e=await this.fetcher.fetchJSON({method:"POST",path:eI.api().auth().session().path,tokenType:"refresh"}),{access_token:t}=e;if("string"==typeof t)this.accessToken=t;else throw Error("Expected an 'access_token' in the response")}async refreshCustomData(){return await this.refreshAccessToken(),this.customData}addListener(){throw Error("Not yet implemented")}removeListener(){throw Error("Not yet implemented")}removeAllListeners(){throw Error("Not yet implemented")}callFunction(e,...t){return this.functions.callFunction(e,...t)}toJSON(){return{id:this.id,accessToken:this.accessToken,refreshToken:this.refreshToken,profile:this._profile,state:this.state,customData:this.customData}}push(){throw Error("Not yet implemented")}mongoClient(e){return function(e,t="mongo-db"){return{db:eF.bind(null,e,t)}}(this.fetcher,e)}decodeAccessToken(){if(this.accessToken){let e=this.accessToken.split(".");if(3!==e.length)throw Error("Expected an access token with three parts");let t=e[1],r=ef.decode(t),s=JSON.parse(r),{exp:i,iat:o,sub:n,user_data:a={}}=s;if("number"!=typeof i)throw Error("Failed to decode access token 'exp'");if("number"!=typeof o)throw Error("Failed to decode access token 'iat'");return{expires:i,issuedAt:o,subject:n,userData:a}}throw Error("Missing an access token")}}class e${constructor(e,t,r){this.providerName=e,this.providerType=t,this.payload=r}static anonymous(){return new e$("anon-user","anon-user",{})}static apiKey(e){return new e$("api-key","api-key",{key:e})}static emailPassword(e,t){return new e$("local-userpass","local-userpass",{username:e,password:t})}static function(e){return new e$("custom-function","custom-function",e)}static jwt(e){return new e$("custom-token","custom-token",{token:e})}static google(e){return new e$("oauth2-google","oauth2-google",e$.derivePayload(e))}static derivePayload(e){if("string"==typeof e)throw Error("`google(<tokenString>)` has been deprecated.  Please use `google(<authCodeObject>).");if(1===Object.keys(e).length){if("authCode"in e||"redirectUrl"in e)return e;if("idToken"in e)return{id_token:e.idToken};throw Error("Unexpected payload: "+JSON.stringify(e))}throw Error("Expected only one property in payload, got "+JSON.stringify(e))}static facebook(e){return new e$("oauth2-facebook","oauth2-facebook",e.includes("://")?{redirectUrl:e}:{accessToken:e})}static apple(e){return new e$("oauth2-apple","oauth2-apple",e.includes("://")?{redirectUrl:e}:{id_token:e})}}let eM="userIds",eJ="deviceId";class eV extends ew{constructor(e,t){super(e,`app(${t})`)}getUserIds(){let e=this.get(eM),t=e?JSON.parse(e):[];if(Array.isArray(t))return[...new Set(t)];throw Error("Expected the user ids to be an array")}setUserIds(e,t){if(t){let t=this.getUserIds();for(let r of t)-1===e.indexOf(r)&&e.push(r)}this.set(eM,JSON.stringify(e))}removeUserId(e){let t=this.getUserIds(),r=t.filter(t=>t!==e);this.setUserIds(r,!1)}getDeviceId(){return this.get(eJ)}setDeviceId(e){this.set(eJ,e)}}let eH={_stitch_client_app_id:"appId",_baas_client_app_id:"appId",_stitch_ua:"userAuth",_baas_ua:"userAuth",_stitch_link:"link",_baas_link:"link",_stitch_error:"error",_baas_error:"error",_stitch_state:"state",_baas_state:"state"};class eK{constructor(e,t=eP().openWindow){this.storage=e.prefix("oauth2"),this.openWindow=t}static parseRedirectLocation(e){let t=function(e){let t="?"===e[0]?e.substr(1):e;return Object.fromEntries(t.split("&").filter(e=>e.length>0).map(e=>e.split("=")).map(([e,t])=>[e,decodeURIComponent(t)]))}(e),r={};for(let[e,s]of Object.entries(eH)){let i=t[e];i&&(r[s]=i)}return r}static handleRedirect(e,t=eP().defaultStorage){let r=eK.parseRedirectLocation(e),{state:s,error:i}=r;if("string"==typeof s){let e=t.prefix("oauth2"),i=eK.getStateStorage(e,s);i.set("result",JSON.stringify(r))}else if(i)throw Error(`Failed to handle OAuth 2.0 redirect: ${i}`);else throw Error("Failed to handle OAuth 2.0 redirect.")}static decodeAuthInfo(e){let t=(e||"").split("$");if(4===t.length){let[e,r,s,i]=t;return{accessToken:e,refreshToken:r,userId:s,deviceId:i}}throw Error("Failed to decode 'authInfo' into ids and tokens")}static getStateStorage(e,t){return e.prefix(`state(${t})`)}openWindowAndWaitForRedirect(e,t){let r=eK.getStateStorage(this.storage,t);return new Promise((t,s)=>{let i,o=null,n=()=>{let e=r.get("result");if(e){let s=JSON.parse(e);r.removeListener(n),r.clear();try{o&&(clearInterval(i),o.close())}catch(e){console.warn(`Failed closing redirect window: ${e}`)}finally{t(s)}}};r.addListener(n),o=this.openWindow(e),i=setInterval(()=>{if(o){if(o.closed){clearInterval(i),r.removeListener(n);let e=Error("Window closed");s(e)}}else clearInterval(i)},100)})}generateState(){return function(e,t){let r="";for(let e=0;e<12;e++)r+=t[Math.floor(Math.random()*t.length)];return r}(0,"abcdefghijklmnopqrstuvwxyz")}}let ez="x-baas-location";class eG{constructor(e,t,r){this.fetcher=e,this.oauth2=new eK(t),this.getDeviceInformation=r}async authenticate(e,t){let r=this.getDeviceInformation(),s="object"==typeof t;if(e.providerType.startsWith("oauth2")&&"string"==typeof e.payload.redirectUrl){let i=this.oauth2.generateState(),o=await this.getLogInUrl(e,s,{state:i,redirect:e.payload.redirectUrl,providerRedirectHeader:!!s||void 0,device:s?void 0:r.encode()});if(!s)return this.openWindowAndWaitForAuthResponse(o,i);{let e=await this.fetcher.fetch({method:"GET",url:o,tokenType:s?"access":"none",user:t,mode:"cors",credentials:"include"}),r=e.headers.get(ez);if(r)return this.openWindowAndWaitForAuthResponse(r,i);throw Error(`Missing ${ez} header`)}}{let i=await this.getLogInUrl(e,s),o=await this.fetcher.fetchJSON({method:"POST",url:i,body:{...e.payload,options:{device:r.toJSON()}},tokenType:s?"access":"none",user:t}),{user_id:n,access_token:a,refresh_token:h=null,device_id:c}=o;if("string"!=typeof n)throw Error("Expected a user id in the response");if("string"!=typeof a)throw Error("Expected an access token in the response");if("string"!=typeof h&&null!==h)throw Error("Expected refresh token to be a string or null");if("string"!=typeof c)throw Error("Expected device id to be a string");return{userId:n,accessToken:a,refreshToken:h,deviceId:c}}}async getLogInUrl(e,t=!1,r={}){let s=this.fetcher.appRoute,i=s.authProvider(e.providerName).login(),o=ek({link:t?"true":void 0,...r}),n=await this.fetcher.locationUrl;return n+i.path+o}async openWindowAndWaitForAuthResponse(e,t){let r=await this.oauth2.openWindowAndWaitForRedirect(e,t);return eK.decodeAuthInfo(r.userAuth)}}class eq extends Error{constructor(e,t,r,s,i,o,n){let a=s?`status ${r} ${s}`:`status ${r}`;"string"==typeof i?super(`Request failed (${e} ${t}): ${i} (${a})`):super(`Request failed (${e} ${t}): (${a})`),this.method=e,this.url=t,this.statusText=s,this.statusCode=r,this.error=i,this.errorCode=o,this.link=n}static async fromRequestAndResponse(e,t){var r;let{url:s,method:i}=e,{status:o,statusText:n}=t;if(null===(r=t.headers.get("content-type"))||void 0===r?void 0:r.startsWith("application/json")){let e=await t.json();if("object"==typeof e&&e){let{error:t,error_code:r,link:a}=e;return new eq(i,s,o,n,"string"==typeof t?t:void 0,"string"==typeof r?r:void 0,"string"==typeof a?a:void 0)}}return new eq(i,s,o,n)}}class eX{constructor({appId:e,transport:t,userContext:r,locationUrlContext:s}){this.appId=e,this.transport=t,this.userContext=r,this.locationUrlContext=s}static buildAuthorizationHeader(e,t){if(!e||"none"===t)return{};if("access"===t)return{Authorization:`Bearer ${e.accessToken}`};if("refresh"===t)return{Authorization:`Bearer ${e.refreshToken}`};throw Error(`Unexpected token type (${t})`)}static buildBody(e){if(e){if("object"==typeof e&&null!==e)return JSON.stringify(eg(e));if("string"==typeof e)return e;throw console.log("body is",e),Error("Unexpected type of body")}}static buildJsonHeader(e){return e&&e.length>0?{"Content-Type":"application/json"}:{}}clone(e){return new eX({appId:this.appId,transport:this.transport,userContext:this.userContext,locationUrlContext:this.locationUrlContext,...e})}async fetch(e){let{path:t,url:r,tokenType:s="access",user:i=this.userContext.currentUser,...o}=e;if("string"==typeof t&&"string"==typeof r)throw Error("Use of 'url' and 'path' mutually exclusive");if("string"==typeof t){let r=await this.locationUrlContext.locationUrl+t;return this.fetch({...e,path:void 0,url:r})}if("string"==typeof r){let t=await this.transport.fetch({...o,url:r,headers:{...eX.buildAuthorizationHeader(i,s),...e.headers}});if(t.ok)return t;if(i&&401===t.status&&"access"===s)return await i.refreshAccessToken(),this.fetch({...e,user:i});throw i&&401===t.status&&"refresh"===s&&(i.accessToken=null,i.refreshToken=null),await eq.fromRequestAndResponse(e,t)}throw Error("Expected either 'url' or 'path'")}async fetchJSON(e){let{body:t}=e,r=eX.buildBody(t),s=eX.buildJsonHeader(r),i=await this.fetch({...e,body:r,headers:{Accept:"application/json",...s,...e.headers}}),o=i.headers.get("content-type");if(null==o?void 0:o.startsWith("application/json")){let e=await i.json();return em(e)}if(null===o)return null;throw Error(`Expected JSON response, got "${o}"`)}async fetchStream(e){let{body:t}=await this.fetch({...e,headers:{Accept:"text/event-stream",...e.headers}});return function(e){if("object"!=typeof e||null===e)throw Error("Expected a non-null object");if(Symbol.asyncIterator in e)return e;if("getReader"in e)return{[Symbol.asyncIterator](){let t=e.getReader();return{next:()=>t.read(),return:async()=>(await t.cancel(),{done:!0,value:null})}}};throw Error("Expected an AsyncIterable or a ReadableStream")}(t)}get appRoute(){return eI.api().app(this.appId)}get locationUrl(){return this.locationUrlContext.locationUrl}}(c=m||(m={})).DEVICE_ID="deviceId",c.APP_ID="appId",c.APP_VERSION="appVersion",c.PLATFORM="platform",c.PLATFORM_VERSION="platformVersion",c.SDK_VERSION="sdkVersion";class eZ{constructor({appId:e,appVersion:t,deviceId:r}){this.sdkVersion="2.0.0";let s=eP();this.platform=s.platform,this.platformVersion=s.platformVersion,this.appId=e,this.appVersion=t,this.deviceId=r}encode(){let e=eS(this);return ef.encode(JSON.stringify(e))}toJSON(){return eS(this)}}class eY{constructor(e){this.users=[],this._locationUrl=null;let t="string"==typeof e?{id:e}:e;if("object"==typeof t&&"string"==typeof t.id)this.id=t.id;else throw Error("Missing an Atlas App Services app-id");this.baseUrl=t.baseUrl||"https://realm.mongodb.com",t.skipLocationRequest&&(this._locationUrl=Promise.resolve(this.baseUrl)),this.localApp=t.app;let{storage:r,transport:s=new N}=t;this.fetcher=new eX({appId:this.id,userContext:this,locationUrlContext:this,transport:s}),this.emailPasswordAuth=new eR(this.fetcher);let i=r||eP().defaultStorage;this.storage=new eV(i,this.id),this.authenticator=new eG(this.fetcher,i,()=>this.deviceInformation);try{this.hydrate()}catch(e){this.storage.clear(),console.warn("Realm app hydration failed:",e instanceof Error?e.message:e)}}static getApp(e){if(e in eY.appCache)return eY.appCache[e];{let t=new eY(e);return eY.appCache[e]=t,t}}switchUser(e){let t=this.users.findIndex(t=>t===e);if(-1===t)throw Error("The user was never logged into this app");let[r]=this.users.splice(t,1);this.users.unshift(r)}async logIn(e,t=!0){let r=await this.authenticator.authenticate(e),s=this.createOrUpdateUser(r,e.providerType);this.switchUser(s),t&&await s.refreshProfile(),this.storage.setUserIds(this.users.map(e=>e.id),!0);let i=r.deviceId;return i&&"000000000000000000000000"!==i&&this.storage.set("deviceId",i),s}async removeUser(e){let t=this.users.findIndex(t=>t===e);if(-1===t)throw Error("The user was never logged into this app");this.users.splice(t,1),await e.logOut(),this.storage.remove(`user(${e.id}):profile`),this.storage.removeUserId(e.id)}async deleteUser(e){await this.fetcher.fetchJSON({method:"DELETE",path:eI.api().auth().delete().path}),await this.removeUser(e)}addListener(){throw Error("Not yet implemented")}removeListener(){throw Error("Not yet implemented")}removeAllListeners(){throw Error("Not yet implemented")}get currentUser(){let e=this.users.filter(e=>e.state===p.Active);return 0===e.length?null:e[0]}get allUsers(){return Object.fromEntries(this.users.map(e=>[e.id,e]))}get locationUrl(){if(!this._locationUrl){let e=eI.api().app(this.id).location().path;this._locationUrl=this.fetcher.fetchJSON({method:"GET",url:this.baseUrl+e,tokenType:"none"}).then(e=>{if("object"==typeof e)return e;throw Error("Expected response body be an object")}).then(({hostname:e})=>{if("string"==typeof e)return e;throw Error("Expected response to contain a 'hostname'")}).catch(e=>{throw this._locationUrl=null,e})}return this._locationUrl}get deviceInformation(){let e=this.storage.getDeviceId(),t="string"==typeof e&&"000000000000000000000000"!==e?new y.Zw(e):void 0;return new eZ({appId:this.localApp?this.localApp.name:void 0,appVersion:this.localApp?this.localApp.version:void 0,deviceId:t})}createOrUpdateUser(e,t){let r=this.users.find(t=>t.id===e.userId);if(r)return r.accessToken=e.accessToken,r.refreshToken=e.refreshToken,r;{if(!e.refreshToken)throw Error("No refresh token in response from server");let r=new eL({app:this,id:e.userId,accessToken:e.accessToken,refreshToken:e.refreshToken,providerType:t});return this.users.unshift(r),r}}hydrate(){let e=this.storage.getUserIds();this.users=e.map(e=>new eL({app:this,id:e}))}}eY.appCache={},eY.Credentials=e$;let eQ=function(e){return e&&e.Math==Math&&e},e0=eQ("object"==typeof globalThis&&globalThis)||eQ("object"==typeof window&&window)||eQ("object"==typeof self&&self)||eQ("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")();"undefined"!=typeof __DEV__&&__DEV__;let e1=l?O(l):"undefined"==typeof document&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product?new function(){this.type="react-native",this.name="react-native",this.version=null,this.os=null}:"undefined"!=typeof navigator?O(navigator.userAgent):void 0!==b&&b.version?new function(e){this.version=e,this.type="node",this.name="node",this.os=b.platform}(b.version.slice(1)):null,e2="localStorage"in e0?class{constructor(){if("object"==typeof e0.localStorage)this.global=e0;else throw Error("Cannot use LocalStorage without a global localStorage object")}get(e){return this.global.localStorage.getItem(e)}set(e,t){return this.global.localStorage.setItem(e,t)}remove(e){return this.global.localStorage.removeItem(e)}prefix(e){return new ew(this,e)}clear(e){let t=[];for(let r=0;r<this.global.localStorage.length;r++){let s=this.global.localStorage.key(r);s&&(!e||s.startsWith(e))&&t.push(s)}for(let e of t)this.global.localStorage.removeItem(e)}addListener(e){return this.global.addEventListener("storage",e)}removeListener(e){return this.global.removeEventListener("storage",e)}}:class{constructor(){this.storage={},this.listeners=new Set}get(e){return e in this.storage?this.storage[e]:null}set(e,t){this.storage[e]=t,this.fireListeners()}remove(e){delete this.storage[e],this.fireListeners()}prefix(e){return new ew(this,e)}clear(e){for(let t of Object.keys(this.storage))(!e||t.startsWith(e))&&delete this.storage[t];this.fireListeners()}addListener(e){this.listeners.add(e)}removeListener(e){this.listeners.delete(e)}fireListeners(){this.listeners.forEach(e=>e())}},e6={defaultStorage:new e2().prefix("realm-web"),openWindow:function(e){return"function"==typeof e0.open?e0.open(e):(console.log(`Please open ${e}`),null)},platform:(null==e1?void 0:e1.name)||"web",platformVersion:(null==e1?void 0:e1.version)||"0.0.0",TextDecoder};eC=e6}}]);