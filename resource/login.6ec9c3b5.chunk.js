webpackJsonp([13],{1958:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.loginAction=t.clearLoginState=t.updateLoginState=void 0;var o=r(17),i=r(824),s=n(i),a=r(828),u=n(a),c=t.updateLoginState=(0,o.createAction)("updateLoginState",function(e){return e}),f=t.clearLoginState=(0,o.createAction)("clearLoginState"),l=t.loginAction=function(e,t){return function(){return s.default.post(u.default.login,e).then(function(e){t(e)},function(){})}};!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(c,"updateLoginState","/Users/jeffery/MonitorProjects/webfunny_admin/src/modules/login/action.js"),__REACT_HOT_LOADER__.register(f,"clearLoginState","/Users/jeffery/MonitorProjects/webfunny_admin/src/modules/login/action.js"),__REACT_HOT_LOADER__.register(l,"loginAction","/Users/jeffery/MonitorProjects/webfunny_admin/src/modules/login/action.js"))}()},1959:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();r(2057);var a=r(8),u=function(e){return e&&e.__esModule?e:{default:e}}(a),c=function(e){function t(e){return n(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return i(t,e),s(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return u.default.createElement("div",{className:"login-container"})}}]),t}(a.Component),f=c;t.default=f,function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(c,"Login","/Users/jeffery/MonitorProjects/webfunny_admin/src/modules/login/index.js"),__REACT_HOT_LOADER__.register(f,"default","/Users/jeffery/MonitorProjects/webfunny_admin/src/modules/login/index.js"))}()},1979:function(e,t,r){t=e.exports=r(108)(!1),t.push([e.i,".login-container{position:absolute;top:0;left:0;width:100%;min-height:100%;background:#fff}.login-container .box{width:6rem;height:4.5rem;margin-left:auto;margin-right:auto;margin-top:2rem}.login-container .box .input-box{margin:.15rem 0}.login-container .btn{margin:auto;display:block;float:left;width:50%;margin-top:.1rem}",""])},2057:function(e,t,r){var n=r(1979);"string"==typeof n&&(n=[[e.i,n,""]]);var o={};o.transform=void 0,r(166)(n,o),n.locals&&(e.exports=n.locals)},700:function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s=r(8),a=o(s),u=r(110),c=r(111),f=r(1959),l=o(f),d=r(1958),y=n(d),p=function(e){return a.default.createElement(l.default,e)},_=function(e){var t=e.login;return i({},t)},h=function(e){return(0,u.bindActionCreators)(i({},y),e)},g=(0,c.connect)(_,h)(p);t.default=g;var v=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(p,"LoginContainer","/Users/jeffery/MonitorProjects/webfunny_admin/src/containers/login.js"),__REACT_HOT_LOADER__.register(_,"mapStateToProps","/Users/jeffery/MonitorProjects/webfunny_admin/src/containers/login.js"),__REACT_HOT_LOADER__.register(h,"mapDispatchToProps","/Users/jeffery/MonitorProjects/webfunny_admin/src/containers/login.js"),__REACT_HOT_LOADER__.register(g,"default","/Users/jeffery/MonitorProjects/webfunny_admin/src/containers/login.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(i,"_extends","/Users/jeffery/MonitorProjects/webfunny_admin/src/containers/login.js"),__REACT_HOT_LOADER__.register(a,"_react2","/Users/jeffery/MonitorProjects/webfunny_admin/src/containers/login.js"),__REACT_HOT_LOADER__.register(l,"_login2","/Users/jeffery/MonitorProjects/webfunny_admin/src/containers/login.js"),__REACT_HOT_LOADER__.register(y,"actions","/Users/jeffery/MonitorProjects/webfunny_admin/src/containers/login.js"),__REACT_HOT_LOADER__.register(n,"_interopRequireWildcard","/Users/jeffery/MonitorProjects/webfunny_admin/src/containers/login.js"),__REACT_HOT_LOADER__.register(o,"_interopRequireDefault","/Users/jeffery/MonitorProjects/webfunny_admin/src/containers/login.js"),__REACT_HOT_LOADER__.register(p,"LoginContainer","/Users/jeffery/MonitorProjects/webfunny_admin/src/containers/login.js"),__REACT_HOT_LOADER__.register(_,"mapStateToProps","/Users/jeffery/MonitorProjects/webfunny_admin/src/containers/login.js"),__REACT_HOT_LOADER__.register(h,"mapDispatchToProps","/Users/jeffery/MonitorProjects/webfunny_admin/src/containers/login.js"),__REACT_HOT_LOADER__.register(g,"_default","/Users/jeffery/MonitorProjects/webfunny_admin/src/containers/login.js"),__REACT_HOT_LOADER__.register(v,"_temp","/Users/jeffery/MonitorProjects/webfunny_admin/src/containers/login.js"))}()},824:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=r(840),a=function(e){return e&&e.__esModule?e:{default:e}}(s);r(918),r(915);var u=function(){function e(){n(this,e)}return i(e,null,[{key:"get",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{isHandleResult:!0,isShowLoading:!0};r.webMonitorId||(r.webMonitorId=window.localStorage.chooseWebMonitorId);var o=t+a.default.qs(r),i=Object.assign({},{method:"GET"},this.getHeaders());return e.handleFetchData(o,i,n)}},{key:"post",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{isHandleResult:!0,isShowLoading:!0};r.webMonitorId||(r.webMonitorId=window.localStorage.chooseWebMonitorId);var o=JSON.stringify(r),i=Object.assign({},{method:"POST",body:o},this.getHeaders());return e.handleFetchData(t,i,n)}},{key:"put",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{isHandleResult:!0,isShowLoading:!0};r.webMonitorId=window.localStorage.chooseWebMonitorId;var o=JSON.stringify(r),i=Object.assign({},{method:"PUT",body:o},this.getHeaders());return e.handleFetchData(t,i,n)}},{key:"handleFetchData",value:function(t,r,n){var i=o({},r);i.body&&i.body.length>1024&&(i.body=i.body.substr(0,1024)+"...");var s=n.isShowLoading;if(s&&e.showLoading(),n.isFetched=!1,n.isAbort=!1,n.hasOwnProperty("customHead")){var a=n.customHead;r.headers=Object.assign({},r.headers,a)}var u=new Promise(function(o,i){fetch(t,r).then(function(t){n.isAbort||(s&&e.hideLoading(),n.isFetched=!0,t.json().then(function(r){if(t.ok)r.status?i(e.handleResult(r,n)):o(e.handleResult(r,n));else{var s="当前服务繁忙，请稍后再试";404===t.status&&(s="您访问的内容走丢了…"),console.error(s),i(e.handleResult({fetchStatus:"error",netStatus:t.status},n))}}).catch(function(r){var o=r.name+" "+r.message;i(e.handleResult({fetchStatus:"error",error:o,netStatus:t.status},n))}))}).catch(function(t){var r=t.name+" "+t.message;n.isAbort||(s&&e.hideLoading(),n.isFetched=!0,!0===n.isHandleResult&&console.error("网络开小差了，稍后再试吧",2),i(e.handleResult({fetchStatus:"error",error:r},n)))})});return Promise.race([u,e.fetchTimeout(n)])}},{key:"handleResult",value:function(e,t){if(e.status&&!0===t.isHandleResult){var r=e.msg||e.message||"服务器开小差了，稍后再试吧";console.error(r+"（"+e.status+"）",2)}return e}},{key:"fetchTimeout",value:function(t){var r=t.isShowLoading;return new Promise(function(n,o){setTimeout(function(){t.isFetched||(t.isAbort=!0,r&&e.hideLoading(),console.error("网络开小差了，稍后再试吧",2),o({fetchStatus:"timeout"}))},t.timeout||3e5)})}},{key:"getHeaders",value:function(){var e={},t={};return Object.assign({},e,{headers:t})}},{key:"showLoading",value:function(){}},{key:"hideLoading",value:function(){}},{key:"getApiDataFromCache",value:function(e){return"caches"in window?(console.log(window.caches),caches.match(e).then(function(e){return console.log(3,e),e?e.json():null})):Promise.resolve()}}]),e}(),c=u;t.default=c,function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(3e5,"timeout","/Users/jeffery/MonitorProjects/webfunny_admin/src/common/http-util.js"),__REACT_HOT_LOADER__.register(u,"HttpUtil","/Users/jeffery/MonitorProjects/webfunny_admin/src/common/http-util.js"),__REACT_HOT_LOADER__.register(c,"default","/Users/jeffery/MonitorProjects/webfunny_admin/src/common/http-util.js"))}()},828:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=r(829),i=function(e){return e&&e.__esModule?e:{default:e}}(o),s=i.default.getApiHost(),a={jsList:"//www.webfunny.cn/webfunny/manifest.json",login:s+"/server/user/login",register:s+"/server/user",userList:s+"/server/user/list",projectList:s+"/server/project/list",getJsErrorCountByDay:s+"/server/getJavascriptErrorInfoListByDay",getConsoleErrorCountByDay:s+"/server/getConsoleErrorInfoListByDay",getJsErrorCountByHour:s+"/server/getJavascriptErrorInfoListByHour",getJsConsoleErrorCountByHour:s+"/server/getJavascriptConsoleErrorInfoListByHour",getJsErrorSort:s+"/server/getJavascriptErrorSort",getConsoleErrorSort:s+"/server/getConsoleErrorSort",getJavascriptErrorCountByOs:s+"/server/getJavascriptErrorCountByOs",getJavascriptErrorCountByType:s+"/server/getJavascriptErrorCountByType",getJavascriptErrorListByMsg:s+"/server/getJavascriptErrorListByMsg",getJavascriptErrorAboutInfo:s+"/server/getJavascriptErrorAboutInfo",getJavascriptErrorDetail:function(e){return s+"/server/javascriptErrorInfo/"+e},getJavascriptErrorStackCode:s+"/server/getJavascriptErrorStackCode",getJavascriptErrorListByPage:s+"/server/getJavascriptErrorListByPage",setIgnoreJavascriptError:s+"/server/ignoreError",ignoreErrorByApplication:s+"/server/ignoreErrorByApplication",searchUserBehaviors:s+"/server/searchUserBehaviors",searchCustomerInfo:s+"/server/searchCustomerInfo",getScreenShotInfoListByPage:s+"/server/getScreenShotInfoListByPage",getCustomerCountByTime:s+"/server/getCustomerCountByTime",getPageLoadTimeByDate:s+"/server/getPageLoadTimeByDate",getResourceLoadInfoListByDay:s+"/server/getResourceLoadInfoListByDay",getResourceErrorCountByDay:s+"/server/getResourceErrorCountByDay",getResourceErrorCountByHour:s+"/server/getResourceErrorCountByHour",getHttpErrorCountByHour:s+"/server/getHttpErrorCountByHour",getHttpErrorCountByDay:s+"/server/getHttpErrorCountByDay",getHttpErrorListByDay:s+"/server/getHttpErrorListByDay",getHttpErrorListByUrl:s+"/server/getHttpErrorListByUrl",getPvCountByHour:s+"/server/getPvCountByHour",getUvCountByHour:s+"/server/getUvCountByHour",getUserCountByHour:s+"/server/getUserCountByHour",getVersionCountOrderByCount:s+"/server/getVersionCountOrderByCount",getCityCountOrderByCount:s+"/server/getCityCountOrderByCount",getDeviceCountOrderByCount:s+"/server/getDeviceCountOrderByCount",getProvinceCountBySeconds:s+"/server/getProvinceCountBySeconds",getPvCountBySecond:s+"/server/getPvUvCountBySecond",getPvCountByMinute:s+"/server/getPvCountByMinute",getHttpCountByMinute:s+"/server/getHttpCountByMinute",getJavascriptErrorCountByMinute:s+"/server/getJavascriptErrorCountByMinute",getPvListByPage:s+"/server/getPvListByPage",createNewProject:s+"/server/createNewProject",sendEmailCode:s+"/server/sendEmailCode",testBehaviors:s+"/server/testBehaviors"},u={},c=n({},a,u);t.default=c,function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(s,"apiHost","/Users/jeffery/MonitorProjects/webfunny_admin/src/common/http-api.js"),__REACT_HOT_LOADER__.register(a,"api","/Users/jeffery/MonitorProjects/webfunny_admin/src/common/http-api.js"),__REACT_HOT_LOADER__.register(u,"nodeApi","/Users/jeffery/MonitorProjects/webfunny_admin/src/common/http-api.js"),__REACT_HOT_LOADER__.register(c,"default","/Users/jeffery/MonitorProjects/webfunny_admin/src/common/http-api.js"))}()},829:function(e,t,r){"use strict";var n={local:{apiServerUrl:"http://localhost:8011",nodeApiServerUrl:"http://localhost:8011",uri:"http://172.16.48.57"},dev:{apiServerUrl:"https://www.webfunny.cn",nodeApiServerUrl:"https://www.webfunny.cn",assetsUrl:"https://local.webfunny.cn",uri:"https://local.webfunny.cn:9100"},backup:{apiServerUrl:"http://www.webfunny.cn",nodeApiServerUrl:"http://www.webfunny.cn",assetsUrl:"http://47.102.119.229:8000",uri:"http://47.102.119.229:8000"},qa:{apiServerUrl:"https://www.webfunny.cn",assetsUrl:"https://www.webfunny.cn",nodeApiServerUrl:"https://www.webfunny.cn",uri:"https://www.webfunny.cn"},public:{apiServerUrl:"default_api_server_url",nodeApiServerUrl:"default_api_server_url",assetsUrl:"default_assets_url",uri:"default_assets_url"},prod:{apiServerUrl:"//www.webfunny.cn",assetsUrl:"//www.webfunny.cn",nodeApiServerUrl:"//www.webfunny.cn",uri:"//www.webfunny.cn"}},o=function(){return n.public.apiServerUrl},i=function(){return n.public.nodeApiServerUrl},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"public",t=arguments[1];return(n[e].assetsUrl||"")+("local"===e?"/webfunny/":t)},a=function(){return n.public.uri};e.exports={getApiHost:o,getNodeApiHost:i,getAssetsUrl:s,getUri:a},function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(n,"envUrls","/Users/jeffery/MonitorProjects/webfunny_admin/src/common/env_config.js"),__REACT_HOT_LOADER__.register(o,"getApiHost","/Users/jeffery/MonitorProjects/webfunny_admin/src/common/env_config.js"),__REACT_HOT_LOADER__.register(i,"getNodeApiHost","/Users/jeffery/MonitorProjects/webfunny_admin/src/common/env_config.js"),__REACT_HOT_LOADER__.register(s,"getAssetsUrl","/Users/jeffery/MonitorProjects/webfunny_admin/src/common/env_config.js"),__REACT_HOT_LOADER__.register(a,"getUri","/Users/jeffery/MonitorProjects/webfunny_admin/src/common/env_config.js"))}()},840:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=function(){function e(){n(this,e)}return i(e,null,[{key:"isArray",value:function(e){return"[object Array]"===Object.prototype.toString.call(e)}},{key:"isObject",value:function(e){return"[object Object]"===Object.prototype.toString.call(e)}},{key:"randomNumber",value:function(e,t){return Math.floor(Math.random()*(t-e+1)+e)}},{key:"b64EncodeUnicode",value:function(e){return btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g,function(e,t){return String.fromCharCode("0x"+t)}))}},{key:"b64DecodeUnicode",value:function(t){try{return decodeURIComponent(atob(t).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""))}catch(r){return e.b64DecodeUnicodeWithSpace(t)}}},{key:"b64DecodeUnicodeWithSpace",value:function(e){if(!e)return"";var t="";try{return t=e.replace(/ /g,"+"),decodeURIComponent(atob(t).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""))}catch(e){return t}}},{key:"b64DecodeUnicodeBehavior",value:function(e){if(!e)return"";var t=e.replace(/ /g,"+");try{return decodeURIComponent(atob(t).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""))}catch(t){return e}}},{key:"qs",value:function(t,r){function n(t,r){for(var s in t){var a=function(o){if(!t.hasOwnProperty(o))return{v:void 0};var s=t[o];e.isArray(s)?s.forEach(function(e){i.push(encodeURIComponent((r?r+".":"")+o+"[]")+"="+encodeURIComponent(e||""))}):e.isObject(s)?n(s,r?r+"."+o:o):i.push(encodeURIComponent((r?r+".":"")+o)+"="+encodeURIComponent(s||""))}(s);if("object"===(void 0===a?"undefined":o(a)))return a.v}}var i=[];return n(t,""),r&&!t._&&i.push("_="+encodeURIComponent(BUILD_NO)),i.length?"?"+i.join("&"):""}},{key:"parseQs",value:function(){var e=window.location.search,t=e.indexOf("?"),r={};return-1===t?r:(e.substr(t+1).split("&").forEach(function(e){var t=e.split("="),n=decodeURIComponent(t[0]),o=decodeURIComponent(t[1]||""),i=0,s=n.split("."),a=s.length;n=s[a-1];var u=r;if(a>1)for(;i<a-1;i++)u[s[i]]&&CommonTool.isObject(u[s[i]])||(u[s[i]]={}),u=u[s[i]];"[]"!==n.substr(-2)?u[n]=o:(n=n.substr(0,n.length-2),u[n]?u[n].push(o):u[n]=[o])}),r)}},{key:"quickSort",value:function(t){if(t.length<=1)return t;for(var r=Math.floor(t.length/2),n=t.splice(r,1)[0],o=[],i=[],s=0;s<t.length;s++)t[s]<=n?o.push(t[s]):i.push(t[s]);return e.quickSort(o).concat([n],e.quickSort(i))}},{key:"get24HoursArray",value:function(){for(var e=(new Date).getTime(),t=[],r=0;r<24;r++){var n=e-60*r*60*1e3,o=new Date(n).Format("MM-dd hh");t.push(o)}return t}},{key:"getSevenDaysAgo24HoursArray",value:function(){for(var e=(new Date).getTime()-6048e5,t=[],r=0;r<24;r++){var n=e-60*r*60*1e3,o=new Date(n).Format("MM-dd hh");t.push(o)}return t}},{key:"loadJs",value:function(e,t){var r=document.createElement("script");r.async=1,r.onload="function"==typeof t?t:function(){},r.src=e;var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(r,n)}},{key:"deepCopy",value:function(e){if(e instanceof Array){for(var t=[],r=0;r<e.length;++r)t[r]=this.deepCopy(e[r]);return t}if(e instanceof Object){var n={};for(var o in e)n[o]=this.deepCopy(e[o]);return n}return e}}]),e}(),a=s;t.default=a,function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(s,"Utils","/Users/jeffery/MonitorProjects/webfunny_admin/src/common/utils.js"),__REACT_HOT_LOADER__.register(a,"default","/Users/jeffery/MonitorProjects/webfunny_admin/src/common/utils.js"))}()},915:function(e,t,r){"use strict";if(String.prototype.format||(String.prototype.format=function(){var e=this,t=Array.prototype.slice.call(arguments);return e.replace(/(\{(\d+)\})/g,function(e,r,n){return void 0===t[n]?e:t[n]})}),!String.prototype.trim){var n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;String.prototype.trim=function(){return this.replace(n,"")}}Date.prototype.Format||(Date.prototype.Format=function(e){var t=e,r={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var n in r)new RegExp("("+n+")").test(t)&&(t=t.replace(RegExp.$1,1===RegExp.$1.length?r[n]:("00"+r[n]).substr((""+r[n]).length)));return t})},918:function(e,t){!function(e){"use strict";function t(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function r(e){return"string"!=typeof e&&(e=String(e)),e}function n(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return g.iterable&&(t[Symbol.iterator]=function(){return t}),t}function o(e){this.map={},e instanceof o?e.forEach(function(e,t){this.append(t,e)},this):Array.isArray(e)?e.forEach(function(e){this.append(e[0],e[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function i(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function s(e){return new Promise(function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}})}function a(e){var t=new FileReader,r=s(t);return t.readAsArrayBuffer(e),r}function u(e){var t=new FileReader,r=s(t);return t.readAsText(e),r}function c(e){for(var t=new Uint8Array(e),r=new Array(t.length),n=0;n<t.length;n++)r[n]=String.fromCharCode(t[n]);return r.join("")}function f(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function l(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,e)if("string"==typeof e)this._bodyText=e;else if(g.blob&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(g.formData&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(g.searchParams&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else if(g.arrayBuffer&&g.blob&&b(e))this._bodyArrayBuffer=f(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!g.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(e)&&!m(e))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=f(e)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):g.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},g.blob&&(this.blob=function(){var e=i(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?i(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(a)}),this.text=function(){var e=i(this);if(e)return e;if(this._bodyBlob)return u(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(c(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},g.formData&&(this.formData=function(){return this.text().then(p)}),this.json=function(){return this.text().then(JSON.parse)},this}function d(e){var t=e.toUpperCase();return w.indexOf(t)>-1?t:e}function y(e,t){t=t||{};var r=t.body;if(e instanceof y){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new o(e.headers)),this.method=e.method,this.mode=e.mode,r||null==e._bodyInit||(r=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"omit",!t.headers&&this.headers||(this.headers=new o(t.headers)),this.method=d(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function p(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var r=e.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(n),decodeURIComponent(o))}}),t}function _(e){var t=new o;return e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(e){var r=e.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();t.append(n,o)}}),t}function h(e,t){t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new o(t.headers),this.url=t.url||"",this._initBody(e)}if(!e.fetch){var g={searchParams:"URLSearchParams"in e,iterable:"Symbol"in e&&"iterator"in Symbol,blob:"FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in e,arrayBuffer:"ArrayBuffer"in e};if(g.arrayBuffer)var v=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],b=function(e){return e&&DataView.prototype.isPrototypeOf(e)},m=ArrayBuffer.isView||function(e){return e&&v.indexOf(Object.prototype.toString.call(e))>-1};o.prototype.append=function(e,n){e=t(e),n=r(n);var o=this.map[e];this.map[e]=o?o+","+n:n},o.prototype.delete=function(e){delete this.map[t(e)]},o.prototype.get=function(e){return e=t(e),this.has(e)?this.map[e]:null},o.prototype.has=function(e){return this.map.hasOwnProperty(t(e))},o.prototype.set=function(e,n){this.map[t(e)]=r(n)},o.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},o.prototype.keys=function(){var e=[];return this.forEach(function(t,r){e.push(r)}),n(e)},o.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),n(e)},o.prototype.entries=function(){var e=[];return this.forEach(function(t,r){e.push([r,t])}),n(e)},g.iterable&&(o.prototype[Symbol.iterator]=o.prototype.entries);var w=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];y.prototype.clone=function(){return new y(this,{body:this._bodyInit})},l.call(y.prototype),l.call(h.prototype),h.prototype.clone=function(){return new h(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new o(this.headers),url:this.url})},h.error=function(){var e=new h(null,{status:0,statusText:""});return e.type="error",e};var E=[301,302,303,307,308];h.redirect=function(e,t){if(-1===E.indexOf(t))throw new RangeError("Invalid status code");return new h(null,{status:t,headers:{location:e}})},e.Headers=o,e.Request=y,e.Response=h,e.fetch=function(e,t){return new Promise(function(r,n){var o=new y(e,t),i=new XMLHttpRequest;i.onload=function(){var e={status:i.status,statusText:i.statusText,headers:_(i.getAllResponseHeaders()||"")};e.url="responseURL"in i?i.responseURL:e.headers.get("X-Request-URL");var t="response"in i?i.response:i.responseText;r(new h(t,e))},i.onerror=function(){n(new TypeError("Network request failed"))},i.ontimeout=function(){n(new TypeError("Network request failed"))},i.open(o.method,o.url,!0),"include"===o.credentials?i.withCredentials=!0:"omit"===o.credentials&&(i.withCredentials=!1),"responseType"in i&&g.blob&&(i.responseType="blob"),o.headers.forEach(function(e,t){i.setRequestHeader(t,e)}),i.send(void 0===o._bodyInit?null:o._bodyInit)})},e.fetch.polyfill=!0}}("undefined"!=typeof self?self:this)}});