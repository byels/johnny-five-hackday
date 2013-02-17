goog.provide('gcljs.server.middleware.session');
goog.require('cljs.core');
goog.require('gcljs.server.lib.redis');
gcljs.server.middleware.session.session = (function session(request,response,callback){
return callback.call(null);
});
