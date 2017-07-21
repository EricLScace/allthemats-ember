"use strict"
define("allthemats/adapters/application",["exports","active-model-adapter","allthemats/config/environment"],function(e,t,n){e.default=t.default.extend({host:n.default.apiHost,auth:Ember.inject.service(),headers:Ember.computed("auth.credentials.token",{get:function(){var e={},t=this.get("auth.credentials.token")
return t&&(e.Authorization="Token token="+t),e}})})}),define("allthemats/app",["exports","ember","allthemats/resolver","ember-load-initializers","allthemats/config/environment"],function(e,t,n,a,l){var s=void 0
t.default.MODEL_FACTORY_INJECTIONS=!0,s=t.default.Application.extend({modulePrefix:l.default.modulePrefix,podModulePrefix:l.default.podModulePrefix,Resolver:n.default}),(0,a.default)(s,l.default.modulePrefix),e.default=s}),define("allthemats/components/email-input",["exports","ember"],function(e,t){e.default=t.default.Component.extend({tagName:"div",classNames:["form-group"]})}),define("allthemats/components/flash-message",["exports","ember-cli-flash/components/flash-message"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("allthemats/components/password-input",["exports","ember"],function(e,t){e.default=t.default.Component.extend({tagName:"div",classNames:["form-group"]})}),define("allthemats/components/row-header",["exports","ember"],function(e,t){e.default=t.default.Component.extend({})}),define("allthemats/components/sign-in-form",["exports","ember"],function(e,t){e.default=t.default.Component.extend({tagName:"form",classNames:["form-horizontal"],actions:{submit:function(){this.sendAction("submit",this.get("credentials"))},reset:function(){this.set("credentials",{})}}})}),define("allthemats/controllers/array",["exports","ember"],function(e,t){e.default=t.default.Controller}),define("allthemats/controllers/object",["exports","ember"],function(e,t){e.default=t.default.Controller}),define("allthemats/flash/object",["exports","ember-cli-flash/flash/object"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("allthemats/helpers/app-version",["exports","ember","allthemats/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,n,a){function l(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1]
return t.hideSha?s.match(a.versionRegExp)[0]:t.hideVersion?s.match(a.shaRegExp)[0]:s}e.appVersion=l
var s=n.default.APP.version
e.default=t.default.Helper.helper(l)}),define("allthemats/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e.default=t.default}),define("allthemats/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e.default=t.default}),define("allthemats/initializers/active-model-adapter",["exports","active-model-adapter","active-model-adapter/active-model-serializer"],function(e,t,n){e.default={name:"active-model-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("adapter:-active-model",t.default),e.register("serializer:-active-model",n.default)}}}),define("allthemats/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","allthemats/config/environment"],function(e,t,n){var a=n.default.APP,l=a.name,s=a.version
e.default={name:"App Version",initialize:(0,t.default)(l,s)}}),define("allthemats/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("allthemats/initializers/data-adapter",["exports"],function(e){e.default={name:"data-adapter",before:"store",initialize:function(){}}}),define("allthemats/initializers/ember-data",["exports","ember-data/setup-container","ember-data/index"],function(e,t,n){e.default={name:"ember-data",initialize:t.default}}),define("allthemats/initializers/export-application-global",["exports","ember","allthemats/config/environment"],function(e,t,n){function a(){var e=arguments[1]||arguments[0]
if(!1!==n.default.exportApplicationGlobal){var a
if("undefined"!=typeof window)a=window
else if("undefined"!=typeof global)a=global
else{if("undefined"==typeof self)return
a=self}var l,s=n.default.exportApplicationGlobal
l="string"==typeof s?s:t.default.String.classify(n.default.modulePrefix),a[l]||(a[l]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete a[l]}}))}}e.initialize=a,e.default={name:"export-application-global",initialize:a}}),define("allthemats/initializers/flash-messages",["exports","ember","allthemats/config/environment"],function(e,t,n){function a(){var e=arguments[1]||arguments[0],t=n.default||{},a=t.flashMessageDefaults,r=a||[],m=r.injectionFactories,c=s(o,a),f=!(m&&m.length)
e.register("config:flash-messages",c,{instantiate:!1}),e.inject("service:flash-messages","flashMessageDefaults","config:flash-messages"),l(i,f,{id:"ember-cli-flash.deprecate-injection-factories",until:"2.0.0"}),c.injectionFactories.forEach(function(t){e.inject(t,"flashMessages","service:flash-messages")})}e.initialize=a
var l=t.default.deprecate,s=t.default.assign||t.default.merge,i="[ember-cli-flash] Future versions of ember-cli-flash will no longer inject the service automatically. Instead, you should explicitly inject it into your Route, Controller or Component with `Ember.inject.service`.",o={timeout:3e3,extendedTimeout:0,priority:100,sticky:!1,showProgress:!1,type:"info",types:["success","info","warning","danger","alert","secondary"],injectionFactories:["route","controller","view","component"],preventDuplicates:!1}
e.default={name:"flash-messages",initialize:a}}),define("allthemats/initializers/injectStore",["exports"],function(e){e.default={name:"injectStore",before:"store",initialize:function(){}}}),define("allthemats/initializers/local-storage-adapter",["exports","ember-local-storage/initializers/local-storage-adapter"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"initialize",{enumerable:!0,get:function(){return t.initialize}})}),define("allthemats/initializers/store",["exports"],function(e){e.default={name:"store",after:"ember-data",initialize:function(){}}}),define("allthemats/initializers/transforms",["exports"],function(e){e.default={name:"transforms",before:"store",initialize:function(){}}}),define("allthemats/instance-initializers/ember-data",["exports","ember-data/instance-initializers/initialize-store-service"],function(e,t){e.default={name:"ember-data",initialize:t.default}}),define("allthemats/resolver",["exports","ember-resolver"],function(e,t){e.default=t.default}),define("allthemats/router",["exports","ember","allthemats/config/environment"],function(e,t,n){var a=t.default.Router.extend({location:n.default.locationType,rootURL:n.default.rootURL})
a.map(function(){this.route("sign-in")}),e.default=a}),define("allthemats/routes/application",["exports","ember"],function(e,t){e.default=t.default.Route.extend({})}),define("allthemats/routes/sign-in",["exports","ember","rsvp"],function(e,t,n){e.default=t.default.Route.extend({auth:t.default.inject.service(),flashMessages:t.default.inject.service(),model:function(){return n.default.Promise.resolve({})},actions:{signIn:function(e){var t=this
return this.get("auth").signIn(e).then(function(){return t.transitionTo("application")}).then(function(){return t.get("flashMessages").success("Thanks for signing in!")}).catch(function(){t.get("flashMessages").danger("There was a problem. Please try again.")})}}})}),define("allthemats/serializers/application",["exports","active-model-adapter"],function(e,t){e.default=t.ActiveModelSerializer.extend({})})
define("allthemats/services/ajax",["exports","ember","ember-ajax/services/ajax","allthemats/config/environment"],function(e,t,n,a){e.default=n.default.extend({host:a.default.apiHost,auth:t.default.inject.service(),headers:t.default.computed("auth.credentials.token",{get:function(){var e={},t=this.get("auth.credentials.token")
return t&&(e.Authorization="Token token="+t),e}})})}),define("allthemats/services/auth",["exports","ember","ember-local-storage"],function(e,t,n){e.default=t.default.Service.extend({ajax:t.default.inject.service(),credentials:(0,n.storageFor)("auth"),isAuthenticated:t.default.computed.bool("credentials.token"),signUp:function(e){return this.get("ajax").post("/sign-up",{data:{credentials:{email:e.email,password:e.password,password_confirmation:e.passwordConfirmation}}})},signIn:function(e){var t=this
return this.get("ajax").post("/sign-in",{data:{credentials:{email:e.email,password:e.password}}}).then(function(e){t.get("credentials").set("id",e.user.id),t.get("credentials").set("email",e.user.email),t.get("credentials").set("token",e.user.token)})},changePassword:function(e){return this.get("ajax").patch("/change-password/"+this.get("credentials.id"),{data:{passwords:{old:e.previous,new:e.next}}})},signOut:function(){var e=this
return this.get("ajax").del("/sign-out/"+this.get("credentials.id")).finally(function(){return e.get("credentials").reset()})}})}),define("allthemats/services/flash-messages",["exports","ember-cli-flash/services/flash-messages"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("allthemats/storages/auth",["exports","ember-local-storage/local/object"],function(e,t){e.default=t.default.extend({})}),define("allthemats/templates/application",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"je2V6Zbu",block:'{"statements":[["append",["unknown",["row-header"]],false],["text","\\n"],["append",["unknown",["table-matrices"]],false],["text","\\n"],["block",["each"],[["get",["flashMessages","queue"]]],null,0],["append",["unknown",["outlet"]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","  "],["open-element","div",[]],["static-attr","class","box container col-sm-offset-4 col-sm-4"],["flush-element"],["text","\\n    "],["append",["helper",["flash-message"],null,[["flash"],[["get",["flash"]]]]],false],["text","\\n  "],["close-element"],["text","\\n"]],"locals":["flash"]}],"hasPartials":false}',meta:{moduleName:"allthemats/templates/application.hbs"}})}),define("allthemats/templates/components/email-input",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"JXqf25nX",block:'{"statements":[["append",["helper",["input"],null,[["type","id","placeholder","value","class"],["email","email","e-mail",["get",["email"]],"tweak-input"]]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"allthemats/templates/components/email-input.hbs"}})}),define("allthemats/templates/components/password-input",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"5e21hAs9",block:'{"statements":[["append",["helper",["input"],null,[["type","id","placeholder","value","class"],["password","password","password",["get",["password"]],"tweak-input"]]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"allthemats/templates/components/password-input.hbs"}})}),define("allthemats/templates/components/row-header",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"46P5Tosr",block:'{"statements":[["open-element","div",[]],["static-attr","class","box row container-fluid"],["flush-element"],["text","\\n"],["text","\\n"],["text","  "],["open-element","div",[]],["static-attr","class","box-input container col-sm-2 height-row-0"],["flush-element"],["text","\\n    "],["open-element","span",[]],["static-attr","class","text-container"],["flush-element"],["text","\\n      Search selector goes here\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n\\n"],["text","    "],["open-element","div",[]],["static-attr","class","box app-title container col-sm-4 height-row-0"],["flush-element"],["text","\\n      "],["open-element","span",[]],["flush-element"],["text","\\n        All the Matrices\\n      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n\\n"],["text","  "],["open-element","div",[]],["static-attr","class","box-image pull-left container col-sm-2 height-row-0"],["flush-element"],["text","\\n    "],["open-element","span",[]],["flush-element"],["text","\\n      "],["open-element","img",[]],["static-attr","class","height-row-0"],["static-attr","src","https://user-images.githubusercontent.com/6785602/28335483-836d8554-6bcc-11e7-8543-76a7f8685582.png"],["static-attr","class","img-responsive"],["flush-element"],["close-element"],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n\\n"],["text","  "],["open-element","div",[]],["static-attr","class","box container col-sm-2 height-row-0"],["flush-element"],["text","\\n    "],["open-element","span",[]],["static-attr","clase","text-container"],["flush-element"],["text","\\n      Eric Scace"],["open-element","br",[]],["flush-element"],["close-element"],["text","Skaneateles Press\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n\\n"],["text","  "],["open-element","div",[]],["static-attr","class","box container col-sm-1 height-row-0"],["flush-element"],["text","\\n    "],["open-element","span",[]],["static-attr","class","text-click"],["flush-element"],["text","\\n      Register\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","box container col-sm-1 height-row-0"],["flush-element"],["text","\\n"],["block",["link-to"],["sign-in"],null,0],["text","  "],["close-element"],["text","\\n"],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      "],["open-element","span",[]],["static-attr","class","text-click"],["flush-element"],["text","\\n        Sign in\\n      "],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',meta:{moduleName:"allthemats/templates/components/row-header.hbs"}})}),define("allthemats/templates/components/sign-in-form",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"DlnmNKjC",block:'{"statements":[["append",["helper",["email-input"],null,[["email"],[["get",["credentials","email"]]]]],false],["text","\\n"],["append",["helper",["password-input"],null,[["password"],[["get",["credentials","password"]]]]],false],["text","\\n\\n"],["open-element","button",[]],["static-attr","type","submit"],["static-attr","class","btn btn-primary"],["modifier",["action"],[["get",[null]],"submit"]],["flush-element"],["text","\\n  Sign in\\n"],["close-element"],["text","\\n\\n"],["open-element","button",[]],["static-attr","class","btn btn-default"],["modifier",["action"],[["get",[null]],"reset"]],["flush-element"],["text","\\n  Cancel\\n"],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"allthemats/templates/components/sign-in-form.hbs"}})}),define("allthemats/templates/components/table-matrices",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"W1/FYqEa",block:'{"statements":[["open-element","div",[]],["static-attr","class","box row container-fluid"],["flush-element"],["text","\\n"],["text","    "],["open-element","table",[]],["static-attr","class","table-striped table-condensed table-responsive"],["flush-element"],["text","\\n      "],["open-element","thead",[]],["static-attr","class","table-heading"],["flush-element"],["text","\\n        "],["open-element","tr",[]],["flush-element"],["text","\\n          "],["open-element","th",[]],["static-attr","class","box col-sm-1"],["flush-element"],["text","matrix"],["close-element"],["text","\\n          "],["open-element","th",[]],["static-attr","class","box col-sm-4"],["flush-element"],["text","normal position"],["close-element"],["text","\\n          "],["open-element","th",[]],["static-attr","class","box col-sm-4"],["flush-element"],["text","auxiliary position"],["close-element"],["text","\\n          "],["open-element","th",[]],["static-attr","class","box col-sm-2"],["flush-element"],["text","notes"],["close-element"],["text","\\n          "],["open-element","th",[]],["static-attr","class","box col-sm-1"],["flush-element"],["text","you own"],["close-element"],["text","\\n        "],["close-element"],["text","\\n      "],["close-element"],["text","\\n      "],["open-element","tbody",[]],["flush-element"],["text","\\n        "],["open-element","tr",[]],["flush-element"],["text","\\n          "],["open-element","td",[]],["flush-element"],["text","5.75 Δ 1234"],["close-element"],["text","\\n          "],["open-element","td",[]],["flush-element"],["text","5¾ pt Helvetica bold condensed"],["close-element"],["text","\\n          "],["open-element","td",[]],["flush-element"],["text","with italic & small caps"],["close-element"],["text","\\n          "],["open-element","td",[]],["flush-element"],["text","Teletypesetting. References."],["close-element"],["text","\\n          "],["open-element","td",[]],["flush-element"],["text","0 sets"],["close-element"],["text","\\n        "],["close-element"],["text","\\n      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n"],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"allthemats/templates/components/table-matrices.hbs"}})}),define("allthemats/templates/sign-in",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"vUW1ivZ7",block:'{"statements":[["open-element","div",[]],["static-attr","class","box-input container col-sm-offset-4 col-sm-3"],["flush-element"],["text","\\n  Sign in:\\n  "],["append",["helper",["sign-in-form"],null,[["submit","reset","credentials"],["signIn","reset",["get",["model"]]]]],false],["text","\\n"],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"allthemats/templates/sign-in.hbs"}})}),define("allthemats/config/environment",["ember"],function(e){try{var t="allthemats/config/environment",n=document.querySelector('meta[name="'+t+'"]').getAttribute("content"),a=JSON.parse(unescape(n)),l={default:a}
return Object.defineProperty(l,"__esModule",{value:!0}),l}catch(e){throw new Error('Could not read config from meta tag with name "'+t+'".')}}),runningTests||require("allthemats/app").default.create({name:"allthemats",version:"0.0.1+94c01855"})
