goog.provide('hackday.app');
goog.require('cljs.core');
goog.require('cljs.nodejs');
hackday.app.numerals = cljs.core.PersistentVector.fromArray([1,3,9,25,17,11,27,19,10,26], true);
hackday.app.rows = cljs.core.PersistentVector.fromArray([0,4,36,32], true);
hackday.app.latin__GT_braile = (function latin__GT_braile(latin){
var ord = (latin.toUpperCase().charCodeAt(0) - 65);
var convert = (function (p1__3441_SHARP_){
return (hackday.app.numerals.call(null,cljs.core.mod.call(null,p1__3441_SHARP_,10)) + hackday.app.rows.call(null,cljs.core.int$.call(null,(p1__3441_SHARP_ / 10))));
});
if((function (){var or__3824__auto__ = (ord > 25);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{return (ord < 0);
}
})())
{return 0;
} else
{if((ord > 22))
{return convert.call(null,(ord - 1));
} else
{if(cljs.core._EQ_.call(null,ord,22))
{return convert.call(null,39);
} else
{if("\uFDD0'else")
{return convert.call(null,ord);
} else
{return null;
}
}
}
}
});
hackday.app._main = (function _main(){
var johnny_five = cljs.nodejs.require.call(null,"johnny-five");
var board = (new johnny_five.Board());
return board.on("ready",(function (){
var shift_register = (new johnny_five.ShiftRegister(cljs.core.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'pins"],{"\uFDD0'pins":cljs.core.ObjMap.fromObject(["\uFDD0'data","\uFDD0'clock","\uFDD0'latch"],{"\uFDD0'data":2,"\uFDD0'clock":3,"\uFDD0'latch":4})}))));
var to_braile = (function (p1__3442_SHARP_){
return shift_register.send(hackday.app.latin__GT_braile.call(null,p1__3442_SHARP_));
});
board.repl.inject(cljs.core.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'shiftRegister","\uFDD0'toBraile"],{"\uFDD0'shiftRegister":shift_register,"\uFDD0'toBraile":to_braile})));
var G__3444 = cljs.nodejs.process.stdin;
G__3444.setRawMode(true);
G__3444.resume();
G__3444.setEncoding("utf8");
G__3444.on("data",(function (k){
if(cljs.core._EQ_.call(null,k,"\u0003"))
{return cljs.nodejs.process.exit();
} else
{return to_braile.call(null,k);
}
}));
return G__3444;
}));
});
cljs.core._STAR_main_cli_fn_STAR_ = hackday.app._main;
