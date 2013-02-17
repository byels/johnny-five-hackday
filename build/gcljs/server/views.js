goog.provide('gcljs.server.views');
goog.require('cljs.core');
gcljs.server.views.index = (function index(request,response){
return response.send("Hello World");
});
