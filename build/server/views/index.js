goog.provide('gcljs.server.views.index');
goog.require('cljs.core');
gcljs.server.views.index.index = (function index(request,response){
return response.send("Hello World");
});
