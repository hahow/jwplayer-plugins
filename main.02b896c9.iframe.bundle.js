(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__("../../node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("../../node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("../../node_modules/@storybook/client-api/dist/esm/ClientApi.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return Object(ClientApi.d)(value);case"argTypes":return Object(ClientApi.b)(value);case"decorators":return value.forEach((function(decorator){return Object(ClientApi.f)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.g)(loader,!1)}));case"parameters":return Object(ClientApi.h)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.e)(enhancer)}));case"render":return Object(ClientApi.i)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.h)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("../../node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)}).call(this,__webpack_require__("../../node_modules/webpack/buildin/module.js")(module))},"./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(module,exports,__webpack_require__){var map={"./JWPlayer.stories.tsx":"./stories/JWPlayer.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id="./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./stories/JWPlayer.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"FullViewport",(function(){return FullViewport}));__webpack_require__("../../node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../node_modules/core-js/modules/es.function.bind.js");var jwplayer_react=__webpack_require__("../../node_modules/@jwplayer/jwplayer-react/lib/jwplayer-react.js"),jwplayer_react_default=__webpack_require__.n(jwplayer_react);__webpack_require__("../../node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../node_modules/react/index.js");var esm=__webpack_require__("../../node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("../../node_modules/@storybook/addon-docs/dist/esm/index.js"),_excluded=["components"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return Object(esm.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(esm.b)("h1",{id:"jwplayer-plugin-full-viewport"},"jwplayer-plugin-full-viewport"),Object(esm.b)("p",null,"劇院模式，又稱作「視窗全螢幕」。可以將播放器放大至整個瀏覽器（viewport），相較於全螢幕（full-screen）模式，操作上更為方便。"),Object(esm.b)("h2",{id:"table-of-contents"},"Table of Contents"),Object(esm.b)("ul",null,Object(esm.b)("li",{parentName:"ul"},"Demo"),Object(esm.b)("li",{parentName:"ul"},"External Plugin"),Object(esm.b)("li",{parentName:"ul"},"Internal Plugin")),Object(esm.b)("h2",{id:"demo"},"Demo"),Object(esm.b)(dist_esm.a,{id:"jw-player-plugins--full-viewport",mdxType:"Story"}),Object(esm.b)("h2",{id:"external-plugin"},"External Plugin"),Object(esm.b)("p",null,"IIFE 格式，JW Player 預設使用 plugin 的方式："),Object(esm.b)("h3",{id:"vanilla-js"},"Vanilla JS"),Object(esm.b)("pre",null,Object(esm.b)("code",{parentName:"pre",className:"language-html"},'<html>\n  <head>\n    <script src="{your_cloud_hosted_player_library_url}"><\/script>\n  </head>\n  <body>\n    <div id="myElement"></div>\n\n    <script type="text/JavaScript">\n      jwplayer("myElement").setup({\n        "playlist": "{your_playlist_url}",\n        "plugins": {\n          "//unpkg.com/@hahow/jwplayer-plugin-full-viewport@latest/dist/iife/fullViewport.js": {}\n        }\n      });\n    <\/script>\n  </body>\n</html>\n')),Object(esm.b)("h3",{id:"react-js"},"React JS"),Object(esm.b)("p",null,"以 ",Object(esm.b)("a",{parentName:"p",href:"https://github.com/jwplayer/jwplayer-react",target:"_blank",rel:"nofollow noopener noreferrer"},"@jwplayer/jwplayer-react")," 為例，其它 framework 大同小異："),Object(esm.b)("pre",null,Object(esm.b)("code",{parentName:"pre",className:"language-jsx"},"import JWPlayer from '@jwplayer/jwplayer-react';\n\nconst App = () => (\n  return (\n    <JWPlayer\n      library='{your_cloud_hosted_player_library_url}'\n      playlist='{your_playlist_url}'\n      config={{\n        plugins: {\n          \"//unpkg.com/@hahow/jwplayer-plugin-full-viewport@latest/dist/iife/fullViewport.js\": {},\n        },\n      }}\n    />\n  );\n);\n")),Object(esm.b)("h2",{id:"internal-plugin-not-recommended"},"Internal Plugin (not recommended)"),Object(esm.b)("p",null,"CJS & EMS 格式，非官方使用 plugin 的方式，不建議使用："),Object(esm.b)("ol",null,Object(esm.b)("li",{parentName:"ol"},"載入 plugin module ",Object(esm.b)("inlineCode",{parentName:"li"},"initPlugin")),Object(esm.b)("li",{parentName:"ol"},"建立一份空的 ",Object(esm.b)("inlineCode",{parentName:"li"},"fullViewport.js"),"，放在 application 可以讀取的位置（例如 ",Object(esm.b)("inlineCode",{parentName:"li"},"/"),"）"),Object(esm.b)("li",{parentName:"ol"},"使用 JWP 的 ",Object(esm.b)("inlineCode",{parentName:"li"},"registerPlugin()")," API 註冊 plugin")),Object(esm.b)("pre",null,Object(esm.b)("code",{parentName:"pre",className:"language-jsx"},'import JWPlayer from \'@jwplayer/jwplayer-react\';\n\nimport { initPlugin } from "@hahow/jwplayer-plugin-full-viewport";\n\nconst App = () => (\n  return (\n    <JWPlayer\n      library=\'{your_cloud_hosted_player_library_url}\'\n      playlist=\'{your_playlist_url}\'\n      config={{\n        plugins: {\n          "/fullViewport.js": {},\n        },\n      }}\n      didMountCallback={({ player }) => {\n        player.registerPlugin("fullViewport", "8.0", initPlugin);\n      }}\n    />\n  );\n);\n')))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),JWPlayer_stories_Template=(__webpack_exports__.default={title:"JW Player Plugins",component:jwplayer_react_default.a,parameters:{docs:{page:MDXContent}}},function Template(args){return Object(jsx_runtime.jsx)(jwplayer_react_default.a,Object.assign({didMountCallback:function didMountCallback(_ref){_ref.player}},args))});JWPlayer_stories_Template.displayName="Template";var FullViewport=JWPlayer_stories_Template.bind({});FullViewport.args={config:{height:360,plugins:Object.assign({},{"//unpkg.com/@hahow/jwplayer-plugin-full-viewport@latest/dist/iife/fullViewport.js":{}}),width:640},file:"https://cdn.jwplayer.com/manifests/GXbUbwm0.m3u8",library:"https://cdn.jwplayer.com/libraries/BdsZ7KBq.js"},FullViewport.parameters=Object.assign({storySource:{source:'(args) => {\n  return (\n    <JWPlayer\n      didMountCallback={({ player }) => {\n        if (isDevelopment) {\n          // TODO: 這邊需要解釋一下\n          player.registerPlugin("fullViewport", "8.0", initPlugin);\n        }\n      }}\n      {...args}\n    />\n  );\n}'}},FullViewport.parameters)},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("../../node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("../../node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("../../node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("../../node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_require__("../../node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("../../node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_require__("../../node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_require__("../../node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_require__("../../node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_require__("../../node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_require__("../../node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_require__("../../node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,4,5]]]);