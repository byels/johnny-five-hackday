goog.provide('gcljs.server.lib.redis');
goog.require('cljs.core');
goog.require('cljs.nodejs');
gcljs.server.lib.redis.client = cljs.nodejs.require.call(null,"redis").createClient();
gcljs.server.lib.redis.get = (function get(k,callback){
return gcljs.server.lib.redis.client.get(k,callback);
});
gcljs.server.lib.redis.set = (function set(k,value){
return gcljs.server.lib.redis.client.set(k,value);
});
