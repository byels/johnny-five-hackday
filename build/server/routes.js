goog.provide('gcljs.server.routes');
goog.require('cljs.core');
goog.require('gcljs.server.views');
goog.require('cljs.nodejs');
gcljs.server.routes.configure = (function configure(app){
var G__3248 = app;
G__3248.get("/",gcljs.server.views.index);
return G__3248;
});
