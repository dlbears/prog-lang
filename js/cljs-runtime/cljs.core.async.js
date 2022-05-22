goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__47137 = arguments.length;
switch (G__47137) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47138 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47138 = (function (f,blockable,meta47139){
this.f = f;
this.blockable = blockable;
this.meta47139 = meta47139;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47138.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47140,meta47139__$1){
var self__ = this;
var _47140__$1 = this;
return (new cljs.core.async.t_cljs$core$async47138(self__.f,self__.blockable,meta47139__$1));
}));

(cljs.core.async.t_cljs$core$async47138.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47140){
var self__ = this;
var _47140__$1 = this;
return self__.meta47139;
}));

(cljs.core.async.t_cljs$core$async47138.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47138.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47138.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async47138.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async47138.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta47139","meta47139",-2134362494,null)], null);
}));

(cljs.core.async.t_cljs$core$async47138.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47138.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47138");

(cljs.core.async.t_cljs$core$async47138.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async47138");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47138.
 */
cljs.core.async.__GT_t_cljs$core$async47138 = (function cljs$core$async$__GT_t_cljs$core$async47138(f__$1,blockable__$1,meta47139){
return (new cljs.core.async.t_cljs$core$async47138(f__$1,blockable__$1,meta47139));
});

}

return (new cljs.core.async.t_cljs$core$async47138(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__47149 = arguments.length;
switch (G__47149) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__47158 = arguments.length;
switch (G__47158) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__47162 = arguments.length;
switch (G__47162) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_49470 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_49470) : fn1.call(null,val_49470));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_49470) : fn1.call(null,val_49470));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__47164 = arguments.length;
switch (G__47164) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4695__auto___49472 = n;
var x_49473 = (0);
while(true){
if((x_49473 < n__4695__auto___49472)){
(a[x_49473] = x_49473);

var G__49474 = (x_49473 + (1));
x_49473 = G__49474;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47175 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47175 = (function (flag,meta47176){
this.flag = flag;
this.meta47176 = meta47176;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47175.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47177,meta47176__$1){
var self__ = this;
var _47177__$1 = this;
return (new cljs.core.async.t_cljs$core$async47175(self__.flag,meta47176__$1));
}));

(cljs.core.async.t_cljs$core$async47175.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47177){
var self__ = this;
var _47177__$1 = this;
return self__.meta47176;
}));

(cljs.core.async.t_cljs$core$async47175.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47175.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async47175.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47175.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async47175.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta47176","meta47176",1301285421,null)], null);
}));

(cljs.core.async.t_cljs$core$async47175.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47175.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47175");

(cljs.core.async.t_cljs$core$async47175.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async47175");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47175.
 */
cljs.core.async.__GT_t_cljs$core$async47175 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async47175(flag__$1,meta47176){
return (new cljs.core.async.t_cljs$core$async47175(flag__$1,meta47176));
});

}

return (new cljs.core.async.t_cljs$core$async47175(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47186 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47186 = (function (flag,cb,meta47187){
this.flag = flag;
this.cb = cb;
this.meta47187 = meta47187;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47186.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47188,meta47187__$1){
var self__ = this;
var _47188__$1 = this;
return (new cljs.core.async.t_cljs$core$async47186(self__.flag,self__.cb,meta47187__$1));
}));

(cljs.core.async.t_cljs$core$async47186.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47188){
var self__ = this;
var _47188__$1 = this;
return self__.meta47187;
}));

(cljs.core.async.t_cljs$core$async47186.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47186.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async47186.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47186.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async47186.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta47187","meta47187",2127900466,null)], null);
}));

(cljs.core.async.t_cljs$core$async47186.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47186.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47186");

(cljs.core.async.t_cljs$core$async47186.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async47186");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47186.
 */
cljs.core.async.__GT_t_cljs$core$async47186 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async47186(flag__$1,cb__$1,meta47187){
return (new cljs.core.async.t_cljs$core$async47186(flag__$1,cb__$1,meta47187));
});

}

return (new cljs.core.async.t_cljs$core$async47186(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__47200_SHARP_){
var G__47203 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47200_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__47203) : fret.call(null,G__47203));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__47201_SHARP_){
var G__47204 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47201_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__47204) : fret.call(null,G__47204));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4212__auto__ = wport;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return port;
}
})()], null));
} else {
var G__49478 = (i + (1));
i = G__49478;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4212__auto__ = ret;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4210__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4210__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___49479 = arguments.length;
var i__4819__auto___49480 = (0);
while(true){
if((i__4819__auto___49480 < len__4818__auto___49479)){
args__4824__auto__.push((arguments[i__4819__auto___49480]));

var G__49481 = (i__4819__auto___49480 + (1));
i__4819__auto___49480 = G__49481;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__47219){
var map__47220 = p__47219;
var map__47220__$1 = cljs.core.__destructure_map(map__47220);
var opts = map__47220__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq47205){
var G__47206 = cljs.core.first(seq47205);
var seq47205__$1 = cljs.core.next(seq47205);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47206,seq47205__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__47235 = arguments.length;
switch (G__47235) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__47052__auto___49483 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47053__auto__ = (function (){var switch__46890__auto__ = (function (state_47266){
var state_val_47267 = (state_47266[(1)]);
if((state_val_47267 === (7))){
var inst_47262 = (state_47266[(2)]);
var state_47266__$1 = state_47266;
var statearr_47271_49484 = state_47266__$1;
(statearr_47271_49484[(2)] = inst_47262);

(statearr_47271_49484[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47267 === (1))){
var state_47266__$1 = state_47266;
var statearr_47275_49485 = state_47266__$1;
(statearr_47275_49485[(2)] = null);

(statearr_47275_49485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47267 === (4))){
var inst_47243 = (state_47266[(7)]);
var inst_47243__$1 = (state_47266[(2)]);
var inst_47244 = (inst_47243__$1 == null);
var state_47266__$1 = (function (){var statearr_47278 = state_47266;
(statearr_47278[(7)] = inst_47243__$1);

return statearr_47278;
})();
if(cljs.core.truth_(inst_47244)){
var statearr_47279_49486 = state_47266__$1;
(statearr_47279_49486[(1)] = (5));

} else {
var statearr_47280_49488 = state_47266__$1;
(statearr_47280_49488[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47267 === (13))){
var state_47266__$1 = state_47266;
var statearr_47287_49489 = state_47266__$1;
(statearr_47287_49489[(2)] = null);

(statearr_47287_49489[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47267 === (6))){
var inst_47243 = (state_47266[(7)]);
var state_47266__$1 = state_47266;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47266__$1,(11),to,inst_47243);
} else {
if((state_val_47267 === (3))){
var inst_47264 = (state_47266[(2)]);
var state_47266__$1 = state_47266;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47266__$1,inst_47264);
} else {
if((state_val_47267 === (12))){
var state_47266__$1 = state_47266;
var statearr_47288_49490 = state_47266__$1;
(statearr_47288_49490[(2)] = null);

(statearr_47288_49490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47267 === (2))){
var state_47266__$1 = state_47266;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47266__$1,(4),from);
} else {
if((state_val_47267 === (11))){
var inst_47255 = (state_47266[(2)]);
var state_47266__$1 = state_47266;
if(cljs.core.truth_(inst_47255)){
var statearr_47289_49491 = state_47266__$1;
(statearr_47289_49491[(1)] = (12));

} else {
var statearr_47290_49492 = state_47266__$1;
(statearr_47290_49492[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47267 === (9))){
var state_47266__$1 = state_47266;
var statearr_47291_49493 = state_47266__$1;
(statearr_47291_49493[(2)] = null);

(statearr_47291_49493[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47267 === (5))){
var state_47266__$1 = state_47266;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47292_49494 = state_47266__$1;
(statearr_47292_49494[(1)] = (8));

} else {
var statearr_47293_49495 = state_47266__$1;
(statearr_47293_49495[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47267 === (14))){
var inst_47260 = (state_47266[(2)]);
var state_47266__$1 = state_47266;
var statearr_47294_49496 = state_47266__$1;
(statearr_47294_49496[(2)] = inst_47260);

(statearr_47294_49496[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47267 === (10))){
var inst_47250 = (state_47266[(2)]);
var state_47266__$1 = state_47266;
var statearr_47295_49498 = state_47266__$1;
(statearr_47295_49498[(2)] = inst_47250);

(statearr_47295_49498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47267 === (8))){
var inst_47247 = cljs.core.async.close_BANG_(to);
var state_47266__$1 = state_47266;
var statearr_47296_49499 = state_47266__$1;
(statearr_47296_49499[(2)] = inst_47247);

(statearr_47296_49499[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46891__auto__ = null;
var cljs$core$async$state_machine__46891__auto____0 = (function (){
var statearr_47297 = [null,null,null,null,null,null,null,null];
(statearr_47297[(0)] = cljs$core$async$state_machine__46891__auto__);

(statearr_47297[(1)] = (1));

return statearr_47297;
});
var cljs$core$async$state_machine__46891__auto____1 = (function (state_47266){
while(true){
var ret_value__46892__auto__ = (function (){try{while(true){
var result__46893__auto__ = switch__46890__auto__(state_47266);
if(cljs.core.keyword_identical_QMARK_(result__46893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46893__auto__;
}
break;
}
}catch (e47299){var ex__46894__auto__ = e47299;
var statearr_47300_49504 = state_47266;
(statearr_47300_49504[(2)] = ex__46894__auto__);


if(cljs.core.seq((state_47266[(4)]))){
var statearr_47301_49505 = state_47266;
(statearr_47301_49505[(1)] = cljs.core.first((state_47266[(4)])));

} else {
throw ex__46894__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49506 = state_47266;
state_47266 = G__49506;
continue;
} else {
return ret_value__46892__auto__;
}
break;
}
});
cljs$core$async$state_machine__46891__auto__ = function(state_47266){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46891__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46891__auto____1.call(this,state_47266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46891__auto____0;
cljs$core$async$state_machine__46891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46891__auto____1;
return cljs$core$async$state_machine__46891__auto__;
})()
})();
var state__47054__auto__ = (function (){var statearr_47304 = f__47053__auto__();
(statearr_47304[(6)] = c__47052__auto___49483);

return statearr_47304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47054__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__47312){
var vec__47313 = p__47312;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47313,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47313,(1),null);
var job = vec__47313;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__47052__auto___49507 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47053__auto__ = (function (){var switch__46890__auto__ = (function (state_47320){
var state_val_47321 = (state_47320[(1)]);
if((state_val_47321 === (1))){
var state_47320__$1 = state_47320;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47320__$1,(2),res,v);
} else {
if((state_val_47321 === (2))){
var inst_47317 = (state_47320[(2)]);
var inst_47318 = cljs.core.async.close_BANG_(res);
var state_47320__$1 = (function (){var statearr_47332 = state_47320;
(statearr_47332[(7)] = inst_47317);

return statearr_47332;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47320__$1,inst_47318);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46891__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46891__auto____0 = (function (){
var statearr_47333 = [null,null,null,null,null,null,null,null];
(statearr_47333[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46891__auto__);

(statearr_47333[(1)] = (1));

return statearr_47333;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46891__auto____1 = (function (state_47320){
while(true){
var ret_value__46892__auto__ = (function (){try{while(true){
var result__46893__auto__ = switch__46890__auto__(state_47320);
if(cljs.core.keyword_identical_QMARK_(result__46893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46893__auto__;
}
break;
}
}catch (e47334){var ex__46894__auto__ = e47334;
var statearr_47335_49510 = state_47320;
(statearr_47335_49510[(2)] = ex__46894__auto__);


if(cljs.core.seq((state_47320[(4)]))){
var statearr_47336_49511 = state_47320;
(statearr_47336_49511[(1)] = cljs.core.first((state_47320[(4)])));

} else {
throw ex__46894__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49512 = state_47320;
state_47320 = G__49512;
continue;
} else {
return ret_value__46892__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46891__auto__ = function(state_47320){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46891__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46891__auto____1.call(this,state_47320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46891__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46891__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46891__auto__;
})()
})();
var state__47054__auto__ = (function (){var statearr_47339 = f__47053__auto__();
(statearr_47339[(6)] = c__47052__auto___49507);

return statearr_47339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47054__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__47340){
var vec__47341 = p__47340;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47341,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47341,(1),null);
var job = vec__47341;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4695__auto___49513 = n;
var __49514 = (0);
while(true){
if((__49514 < n__4695__auto___49513)){
var G__47344_49515 = type;
var G__47344_49516__$1 = (((G__47344_49515 instanceof cljs.core.Keyword))?G__47344_49515.fqn:null);
switch (G__47344_49516__$1) {
case "compute":
var c__47052__auto___49518 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__49514,c__47052__auto___49518,G__47344_49515,G__47344_49516__$1,n__4695__auto___49513,jobs,results,process,async){
return (function (){
var f__47053__auto__ = (function (){var switch__46890__auto__ = ((function (__49514,c__47052__auto___49518,G__47344_49515,G__47344_49516__$1,n__4695__auto___49513,jobs,results,process,async){
return (function (state_47360){
var state_val_47361 = (state_47360[(1)]);
if((state_val_47361 === (1))){
var state_47360__$1 = state_47360;
var statearr_47362_49519 = state_47360__$1;
(statearr_47362_49519[(2)] = null);

(statearr_47362_49519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47361 === (2))){
var state_47360__$1 = state_47360;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47360__$1,(4),jobs);
} else {
if((state_val_47361 === (3))){
var inst_47358 = (state_47360[(2)]);
var state_47360__$1 = state_47360;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47360__$1,inst_47358);
} else {
if((state_val_47361 === (4))){
var inst_47350 = (state_47360[(2)]);
var inst_47351 = process(inst_47350);
var state_47360__$1 = state_47360;
if(cljs.core.truth_(inst_47351)){
var statearr_47364_49520 = state_47360__$1;
(statearr_47364_49520[(1)] = (5));

} else {
var statearr_47365_49521 = state_47360__$1;
(statearr_47365_49521[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47361 === (5))){
var state_47360__$1 = state_47360;
var statearr_47366_49522 = state_47360__$1;
(statearr_47366_49522[(2)] = null);

(statearr_47366_49522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47361 === (6))){
var state_47360__$1 = state_47360;
var statearr_47367_49523 = state_47360__$1;
(statearr_47367_49523[(2)] = null);

(statearr_47367_49523[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47361 === (7))){
var inst_47356 = (state_47360[(2)]);
var state_47360__$1 = state_47360;
var statearr_47368_49524 = state_47360__$1;
(statearr_47368_49524[(2)] = inst_47356);

(statearr_47368_49524[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__49514,c__47052__auto___49518,G__47344_49515,G__47344_49516__$1,n__4695__auto___49513,jobs,results,process,async))
;
return ((function (__49514,switch__46890__auto__,c__47052__auto___49518,G__47344_49515,G__47344_49516__$1,n__4695__auto___49513,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46891__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46891__auto____0 = (function (){
var statearr_47370 = [null,null,null,null,null,null,null];
(statearr_47370[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46891__auto__);

(statearr_47370[(1)] = (1));

return statearr_47370;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46891__auto____1 = (function (state_47360){
while(true){
var ret_value__46892__auto__ = (function (){try{while(true){
var result__46893__auto__ = switch__46890__auto__(state_47360);
if(cljs.core.keyword_identical_QMARK_(result__46893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46893__auto__;
}
break;
}
}catch (e47371){var ex__46894__auto__ = e47371;
var statearr_47372_49525 = state_47360;
(statearr_47372_49525[(2)] = ex__46894__auto__);


if(cljs.core.seq((state_47360[(4)]))){
var statearr_47373_49526 = state_47360;
(statearr_47373_49526[(1)] = cljs.core.first((state_47360[(4)])));

} else {
throw ex__46894__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49527 = state_47360;
state_47360 = G__49527;
continue;
} else {
return ret_value__46892__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46891__auto__ = function(state_47360){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46891__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46891__auto____1.call(this,state_47360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46891__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46891__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46891__auto__;
})()
;})(__49514,switch__46890__auto__,c__47052__auto___49518,G__47344_49515,G__47344_49516__$1,n__4695__auto___49513,jobs,results,process,async))
})();
var state__47054__auto__ = (function (){var statearr_47374 = f__47053__auto__();
(statearr_47374[(6)] = c__47052__auto___49518);

return statearr_47374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47054__auto__);
});})(__49514,c__47052__auto___49518,G__47344_49515,G__47344_49516__$1,n__4695__auto___49513,jobs,results,process,async))
);


break;
case "async":
var c__47052__auto___49528 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__49514,c__47052__auto___49528,G__47344_49515,G__47344_49516__$1,n__4695__auto___49513,jobs,results,process,async){
return (function (){
var f__47053__auto__ = (function (){var switch__46890__auto__ = ((function (__49514,c__47052__auto___49528,G__47344_49515,G__47344_49516__$1,n__4695__auto___49513,jobs,results,process,async){
return (function (state_47387){
var state_val_47388 = (state_47387[(1)]);
if((state_val_47388 === (1))){
var state_47387__$1 = state_47387;
var statearr_47389_49529 = state_47387__$1;
(statearr_47389_49529[(2)] = null);

(statearr_47389_49529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47388 === (2))){
var state_47387__$1 = state_47387;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47387__$1,(4),jobs);
} else {
if((state_val_47388 === (3))){
var inst_47385 = (state_47387[(2)]);
var state_47387__$1 = state_47387;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47387__$1,inst_47385);
} else {
if((state_val_47388 === (4))){
var inst_47377 = (state_47387[(2)]);
var inst_47378 = async(inst_47377);
var state_47387__$1 = state_47387;
if(cljs.core.truth_(inst_47378)){
var statearr_47390_49531 = state_47387__$1;
(statearr_47390_49531[(1)] = (5));

} else {
var statearr_47391_49532 = state_47387__$1;
(statearr_47391_49532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47388 === (5))){
var state_47387__$1 = state_47387;
var statearr_47392_49533 = state_47387__$1;
(statearr_47392_49533[(2)] = null);

(statearr_47392_49533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47388 === (6))){
var state_47387__$1 = state_47387;
var statearr_47393_49534 = state_47387__$1;
(statearr_47393_49534[(2)] = null);

(statearr_47393_49534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47388 === (7))){
var inst_47383 = (state_47387[(2)]);
var state_47387__$1 = state_47387;
var statearr_47394_49535 = state_47387__$1;
(statearr_47394_49535[(2)] = inst_47383);

(statearr_47394_49535[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__49514,c__47052__auto___49528,G__47344_49515,G__47344_49516__$1,n__4695__auto___49513,jobs,results,process,async))
;
return ((function (__49514,switch__46890__auto__,c__47052__auto___49528,G__47344_49515,G__47344_49516__$1,n__4695__auto___49513,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46891__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46891__auto____0 = (function (){
var statearr_47395 = [null,null,null,null,null,null,null];
(statearr_47395[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46891__auto__);

(statearr_47395[(1)] = (1));

return statearr_47395;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46891__auto____1 = (function (state_47387){
while(true){
var ret_value__46892__auto__ = (function (){try{while(true){
var result__46893__auto__ = switch__46890__auto__(state_47387);
if(cljs.core.keyword_identical_QMARK_(result__46893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46893__auto__;
}
break;
}
}catch (e47396){var ex__46894__auto__ = e47396;
var statearr_47397_49542 = state_47387;
(statearr_47397_49542[(2)] = ex__46894__auto__);


if(cljs.core.seq((state_47387[(4)]))){
var statearr_47398_49545 = state_47387;
(statearr_47398_49545[(1)] = cljs.core.first((state_47387[(4)])));

} else {
throw ex__46894__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49546 = state_47387;
state_47387 = G__49546;
continue;
} else {
return ret_value__46892__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46891__auto__ = function(state_47387){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46891__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46891__auto____1.call(this,state_47387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46891__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46891__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46891__auto__;
})()
;})(__49514,switch__46890__auto__,c__47052__auto___49528,G__47344_49515,G__47344_49516__$1,n__4695__auto___49513,jobs,results,process,async))
})();
var state__47054__auto__ = (function (){var statearr_47400 = f__47053__auto__();
(statearr_47400[(6)] = c__47052__auto___49528);

return statearr_47400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47054__auto__);
});})(__49514,c__47052__auto___49528,G__47344_49515,G__47344_49516__$1,n__4695__auto___49513,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47344_49516__$1)].join('')));

}

var G__49553 = (__49514 + (1));
__49514 = G__49553;
continue;
} else {
}
break;
}

var c__47052__auto___49554 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47053__auto__ = (function (){var switch__46890__auto__ = (function (state_47425){
var state_val_47426 = (state_47425[(1)]);
if((state_val_47426 === (7))){
var inst_47421 = (state_47425[(2)]);
var state_47425__$1 = state_47425;
var statearr_47431_49555 = state_47425__$1;
(statearr_47431_49555[(2)] = inst_47421);

(statearr_47431_49555[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47426 === (1))){
var state_47425__$1 = state_47425;
var statearr_47432_49556 = state_47425__$1;
(statearr_47432_49556[(2)] = null);

(statearr_47432_49556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47426 === (4))){
var inst_47404 = (state_47425[(7)]);
var inst_47404__$1 = (state_47425[(2)]);
var inst_47405 = (inst_47404__$1 == null);
var state_47425__$1 = (function (){var statearr_47434 = state_47425;
(statearr_47434[(7)] = inst_47404__$1);

return statearr_47434;
})();
if(cljs.core.truth_(inst_47405)){
var statearr_47435_49557 = state_47425__$1;
(statearr_47435_49557[(1)] = (5));

} else {
var statearr_47436_49558 = state_47425__$1;
(statearr_47436_49558[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47426 === (6))){
var inst_47404 = (state_47425[(7)]);
var inst_47409 = (state_47425[(8)]);
var inst_47409__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_47410 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47413 = [inst_47404,inst_47409__$1];
var inst_47414 = (new cljs.core.PersistentVector(null,2,(5),inst_47410,inst_47413,null));
var state_47425__$1 = (function (){var statearr_47438 = state_47425;
(statearr_47438[(8)] = inst_47409__$1);

return statearr_47438;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47425__$1,(8),jobs,inst_47414);
} else {
if((state_val_47426 === (3))){
var inst_47423 = (state_47425[(2)]);
var state_47425__$1 = state_47425;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47425__$1,inst_47423);
} else {
if((state_val_47426 === (2))){
var state_47425__$1 = state_47425;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47425__$1,(4),from);
} else {
if((state_val_47426 === (9))){
var inst_47418 = (state_47425[(2)]);
var state_47425__$1 = (function (){var statearr_47442 = state_47425;
(statearr_47442[(9)] = inst_47418);

return statearr_47442;
})();
var statearr_47443_49566 = state_47425__$1;
(statearr_47443_49566[(2)] = null);

(statearr_47443_49566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47426 === (5))){
var inst_47407 = cljs.core.async.close_BANG_(jobs);
var state_47425__$1 = state_47425;
var statearr_47444_49567 = state_47425__$1;
(statearr_47444_49567[(2)] = inst_47407);

(statearr_47444_49567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47426 === (8))){
var inst_47409 = (state_47425[(8)]);
var inst_47416 = (state_47425[(2)]);
var state_47425__$1 = (function (){var statearr_47445 = state_47425;
(statearr_47445[(10)] = inst_47416);

return statearr_47445;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47425__$1,(9),results,inst_47409);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46891__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46891__auto____0 = (function (){
var statearr_47456 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47456[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46891__auto__);

(statearr_47456[(1)] = (1));

return statearr_47456;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46891__auto____1 = (function (state_47425){
while(true){
var ret_value__46892__auto__ = (function (){try{while(true){
var result__46893__auto__ = switch__46890__auto__(state_47425);
if(cljs.core.keyword_identical_QMARK_(result__46893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46893__auto__;
}
break;
}
}catch (e47458){var ex__46894__auto__ = e47458;
var statearr_47460_49568 = state_47425;
(statearr_47460_49568[(2)] = ex__46894__auto__);


if(cljs.core.seq((state_47425[(4)]))){
var statearr_47467_49569 = state_47425;
(statearr_47467_49569[(1)] = cljs.core.first((state_47425[(4)])));

} else {
throw ex__46894__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49570 = state_47425;
state_47425 = G__49570;
continue;
} else {
return ret_value__46892__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46891__auto__ = function(state_47425){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46891__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46891__auto____1.call(this,state_47425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46891__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46891__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46891__auto__;
})()
})();
var state__47054__auto__ = (function (){var statearr_47473 = f__47053__auto__();
(statearr_47473[(6)] = c__47052__auto___49554);

return statearr_47473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47054__auto__);
}));


var c__47052__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47053__auto__ = (function (){var switch__46890__auto__ = (function (state_47512){
var state_val_47513 = (state_47512[(1)]);
if((state_val_47513 === (7))){
var inst_47508 = (state_47512[(2)]);
var state_47512__$1 = state_47512;
var statearr_47514_49571 = state_47512__$1;
(statearr_47514_49571[(2)] = inst_47508);

(statearr_47514_49571[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47513 === (20))){
var state_47512__$1 = state_47512;
var statearr_47516_49572 = state_47512__$1;
(statearr_47516_49572[(2)] = null);

(statearr_47516_49572[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47513 === (1))){
var state_47512__$1 = state_47512;
var statearr_47517_49580 = state_47512__$1;
(statearr_47517_49580[(2)] = null);

(statearr_47517_49580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47513 === (4))){
var inst_47476 = (state_47512[(7)]);
var inst_47476__$1 = (state_47512[(2)]);
var inst_47477 = (inst_47476__$1 == null);
var state_47512__$1 = (function (){var statearr_47518 = state_47512;
(statearr_47518[(7)] = inst_47476__$1);

return statearr_47518;
})();
if(cljs.core.truth_(inst_47477)){
var statearr_47520_49589 = state_47512__$1;
(statearr_47520_49589[(1)] = (5));

} else {
var statearr_47521_49590 = state_47512__$1;
(statearr_47521_49590[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47513 === (15))){
var inst_47489 = (state_47512[(8)]);
var state_47512__$1 = state_47512;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47512__$1,(18),to,inst_47489);
} else {
if((state_val_47513 === (21))){
var inst_47503 = (state_47512[(2)]);
var state_47512__$1 = state_47512;
var statearr_47522_49591 = state_47512__$1;
(statearr_47522_49591[(2)] = inst_47503);

(statearr_47522_49591[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47513 === (13))){
var inst_47505 = (state_47512[(2)]);
var state_47512__$1 = (function (){var statearr_47523 = state_47512;
(statearr_47523[(9)] = inst_47505);

return statearr_47523;
})();
var statearr_47524_49592 = state_47512__$1;
(statearr_47524_49592[(2)] = null);

(statearr_47524_49592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47513 === (6))){
var inst_47476 = (state_47512[(7)]);
var state_47512__$1 = state_47512;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47512__$1,(11),inst_47476);
} else {
if((state_val_47513 === (17))){
var inst_47498 = (state_47512[(2)]);
var state_47512__$1 = state_47512;
if(cljs.core.truth_(inst_47498)){
var statearr_47528_49601 = state_47512__$1;
(statearr_47528_49601[(1)] = (19));

} else {
var statearr_47529_49602 = state_47512__$1;
(statearr_47529_49602[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47513 === (3))){
var inst_47510 = (state_47512[(2)]);
var state_47512__$1 = state_47512;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47512__$1,inst_47510);
} else {
if((state_val_47513 === (12))){
var inst_47486 = (state_47512[(10)]);
var state_47512__$1 = state_47512;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47512__$1,(14),inst_47486);
} else {
if((state_val_47513 === (2))){
var state_47512__$1 = state_47512;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47512__$1,(4),results);
} else {
if((state_val_47513 === (19))){
var state_47512__$1 = state_47512;
var statearr_47530_49604 = state_47512__$1;
(statearr_47530_49604[(2)] = null);

(statearr_47530_49604[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47513 === (11))){
var inst_47486 = (state_47512[(2)]);
var state_47512__$1 = (function (){var statearr_47533 = state_47512;
(statearr_47533[(10)] = inst_47486);

return statearr_47533;
})();
var statearr_47534_49605 = state_47512__$1;
(statearr_47534_49605[(2)] = null);

(statearr_47534_49605[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47513 === (9))){
var state_47512__$1 = state_47512;
var statearr_47556_49606 = state_47512__$1;
(statearr_47556_49606[(2)] = null);

(statearr_47556_49606[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47513 === (5))){
var state_47512__$1 = state_47512;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47557_49607 = state_47512__$1;
(statearr_47557_49607[(1)] = (8));

} else {
var statearr_47559_49608 = state_47512__$1;
(statearr_47559_49608[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47513 === (14))){
var inst_47489 = (state_47512[(8)]);
var inst_47491 = (state_47512[(11)]);
var inst_47489__$1 = (state_47512[(2)]);
var inst_47490 = (inst_47489__$1 == null);
var inst_47491__$1 = cljs.core.not(inst_47490);
var state_47512__$1 = (function (){var statearr_47566 = state_47512;
(statearr_47566[(8)] = inst_47489__$1);

(statearr_47566[(11)] = inst_47491__$1);

return statearr_47566;
})();
if(inst_47491__$1){
var statearr_47571_49609 = state_47512__$1;
(statearr_47571_49609[(1)] = (15));

} else {
var statearr_47588_49610 = state_47512__$1;
(statearr_47588_49610[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47513 === (16))){
var inst_47491 = (state_47512[(11)]);
var state_47512__$1 = state_47512;
var statearr_47606_49611 = state_47512__$1;
(statearr_47606_49611[(2)] = inst_47491);

(statearr_47606_49611[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47513 === (10))){
var inst_47483 = (state_47512[(2)]);
var state_47512__$1 = state_47512;
var statearr_47608_49612 = state_47512__$1;
(statearr_47608_49612[(2)] = inst_47483);

(statearr_47608_49612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47513 === (18))){
var inst_47495 = (state_47512[(2)]);
var state_47512__$1 = state_47512;
var statearr_47609_49613 = state_47512__$1;
(statearr_47609_49613[(2)] = inst_47495);

(statearr_47609_49613[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47513 === (8))){
var inst_47480 = cljs.core.async.close_BANG_(to);
var state_47512__$1 = state_47512;
var statearr_47610_49614 = state_47512__$1;
(statearr_47610_49614[(2)] = inst_47480);

(statearr_47610_49614[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46891__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46891__auto____0 = (function (){
var statearr_47611 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47611[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46891__auto__);

(statearr_47611[(1)] = (1));

return statearr_47611;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46891__auto____1 = (function (state_47512){
while(true){
var ret_value__46892__auto__ = (function (){try{while(true){
var result__46893__auto__ = switch__46890__auto__(state_47512);
if(cljs.core.keyword_identical_QMARK_(result__46893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46893__auto__;
}
break;
}
}catch (e47613){var ex__46894__auto__ = e47613;
var statearr_47614_49615 = state_47512;
(statearr_47614_49615[(2)] = ex__46894__auto__);


if(cljs.core.seq((state_47512[(4)]))){
var statearr_47615_49616 = state_47512;
(statearr_47615_49616[(1)] = cljs.core.first((state_47512[(4)])));

} else {
throw ex__46894__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49617 = state_47512;
state_47512 = G__49617;
continue;
} else {
return ret_value__46892__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46891__auto__ = function(state_47512){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46891__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46891__auto____1.call(this,state_47512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46891__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46891__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46891__auto__;
})()
})();
var state__47054__auto__ = (function (){var statearr_47617 = f__47053__auto__();
(statearr_47617[(6)] = c__47052__auto__);

return statearr_47617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47054__auto__);
}));

return c__47052__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__47623 = arguments.length;
switch (G__47623) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__47644 = arguments.length;
switch (G__47644) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__47662 = arguments.length;
switch (G__47662) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__47052__auto___49627 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47053__auto__ = (function (){var switch__46890__auto__ = (function (state_47694){
var state_val_47695 = (state_47694[(1)]);
if((state_val_47695 === (7))){
var inst_47690 = (state_47694[(2)]);
var state_47694__$1 = state_47694;
var statearr_47696_49628 = state_47694__$1;
(statearr_47696_49628[(2)] = inst_47690);

(statearr_47696_49628[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47695 === (1))){
var state_47694__$1 = state_47694;
var statearr_47699_49629 = state_47694__$1;
(statearr_47699_49629[(2)] = null);

(statearr_47699_49629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47695 === (4))){
var inst_47670 = (state_47694[(7)]);
var inst_47670__$1 = (state_47694[(2)]);
var inst_47672 = (inst_47670__$1 == null);
var state_47694__$1 = (function (){var statearr_47700 = state_47694;
(statearr_47700[(7)] = inst_47670__$1);

return statearr_47700;
})();
if(cljs.core.truth_(inst_47672)){
var statearr_47701_49630 = state_47694__$1;
(statearr_47701_49630[(1)] = (5));

} else {
var statearr_47702_49631 = state_47694__$1;
(statearr_47702_49631[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47695 === (13))){
var state_47694__$1 = state_47694;
var statearr_47703_49632 = state_47694__$1;
(statearr_47703_49632[(2)] = null);

(statearr_47703_49632[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47695 === (6))){
var inst_47670 = (state_47694[(7)]);
var inst_47677 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_47670) : p.call(null,inst_47670));
var state_47694__$1 = state_47694;
if(cljs.core.truth_(inst_47677)){
var statearr_47706_49633 = state_47694__$1;
(statearr_47706_49633[(1)] = (9));

} else {
var statearr_47707_49634 = state_47694__$1;
(statearr_47707_49634[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47695 === (3))){
var inst_47692 = (state_47694[(2)]);
var state_47694__$1 = state_47694;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47694__$1,inst_47692);
} else {
if((state_val_47695 === (12))){
var state_47694__$1 = state_47694;
var statearr_47708_49635 = state_47694__$1;
(statearr_47708_49635[(2)] = null);

(statearr_47708_49635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47695 === (2))){
var state_47694__$1 = state_47694;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47694__$1,(4),ch);
} else {
if((state_val_47695 === (11))){
var inst_47670 = (state_47694[(7)]);
var inst_47681 = (state_47694[(2)]);
var state_47694__$1 = state_47694;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47694__$1,(8),inst_47681,inst_47670);
} else {
if((state_val_47695 === (9))){
var state_47694__$1 = state_47694;
var statearr_47710_49638 = state_47694__$1;
(statearr_47710_49638[(2)] = tc);

(statearr_47710_49638[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47695 === (5))){
var inst_47674 = cljs.core.async.close_BANG_(tc);
var inst_47675 = cljs.core.async.close_BANG_(fc);
var state_47694__$1 = (function (){var statearr_47712 = state_47694;
(statearr_47712[(8)] = inst_47674);

return statearr_47712;
})();
var statearr_47716_49639 = state_47694__$1;
(statearr_47716_49639[(2)] = inst_47675);

(statearr_47716_49639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47695 === (14))){
var inst_47688 = (state_47694[(2)]);
var state_47694__$1 = state_47694;
var statearr_47718_49640 = state_47694__$1;
(statearr_47718_49640[(2)] = inst_47688);

(statearr_47718_49640[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47695 === (10))){
var state_47694__$1 = state_47694;
var statearr_47719_49641 = state_47694__$1;
(statearr_47719_49641[(2)] = fc);

(statearr_47719_49641[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47695 === (8))){
var inst_47683 = (state_47694[(2)]);
var state_47694__$1 = state_47694;
if(cljs.core.truth_(inst_47683)){
var statearr_47720_49642 = state_47694__$1;
(statearr_47720_49642[(1)] = (12));

} else {
var statearr_47721_49643 = state_47694__$1;
(statearr_47721_49643[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46891__auto__ = null;
var cljs$core$async$state_machine__46891__auto____0 = (function (){
var statearr_47725 = [null,null,null,null,null,null,null,null,null];
(statearr_47725[(0)] = cljs$core$async$state_machine__46891__auto__);

(statearr_47725[(1)] = (1));

return statearr_47725;
});
var cljs$core$async$state_machine__46891__auto____1 = (function (state_47694){
while(true){
var ret_value__46892__auto__ = (function (){try{while(true){
var result__46893__auto__ = switch__46890__auto__(state_47694);
if(cljs.core.keyword_identical_QMARK_(result__46893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46893__auto__;
}
break;
}
}catch (e47726){var ex__46894__auto__ = e47726;
var statearr_47727_49644 = state_47694;
(statearr_47727_49644[(2)] = ex__46894__auto__);


if(cljs.core.seq((state_47694[(4)]))){
var statearr_47731_49645 = state_47694;
(statearr_47731_49645[(1)] = cljs.core.first((state_47694[(4)])));

} else {
throw ex__46894__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49647 = state_47694;
state_47694 = G__49647;
continue;
} else {
return ret_value__46892__auto__;
}
break;
}
});
cljs$core$async$state_machine__46891__auto__ = function(state_47694){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46891__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46891__auto____1.call(this,state_47694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46891__auto____0;
cljs$core$async$state_machine__46891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46891__auto____1;
return cljs$core$async$state_machine__46891__auto__;
})()
})();
var state__47054__auto__ = (function (){var statearr_47735 = f__47053__auto__();
(statearr_47735[(6)] = c__47052__auto___49627);

return statearr_47735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47054__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__47052__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47053__auto__ = (function (){var switch__46890__auto__ = (function (state_47764){
var state_val_47765 = (state_47764[(1)]);
if((state_val_47765 === (7))){
var inst_47760 = (state_47764[(2)]);
var state_47764__$1 = state_47764;
var statearr_47768_49652 = state_47764__$1;
(statearr_47768_49652[(2)] = inst_47760);

(statearr_47768_49652[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47765 === (1))){
var inst_47741 = init;
var inst_47742 = inst_47741;
var state_47764__$1 = (function (){var statearr_47769 = state_47764;
(statearr_47769[(7)] = inst_47742);

return statearr_47769;
})();
var statearr_47770_49653 = state_47764__$1;
(statearr_47770_49653[(2)] = null);

(statearr_47770_49653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47765 === (4))){
var inst_47747 = (state_47764[(8)]);
var inst_47747__$1 = (state_47764[(2)]);
var inst_47748 = (inst_47747__$1 == null);
var state_47764__$1 = (function (){var statearr_47771 = state_47764;
(statearr_47771[(8)] = inst_47747__$1);

return statearr_47771;
})();
if(cljs.core.truth_(inst_47748)){
var statearr_47772_49654 = state_47764__$1;
(statearr_47772_49654[(1)] = (5));

} else {
var statearr_47774_49655 = state_47764__$1;
(statearr_47774_49655[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47765 === (6))){
var inst_47747 = (state_47764[(8)]);
var inst_47742 = (state_47764[(7)]);
var inst_47751 = (state_47764[(9)]);
var inst_47751__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_47742,inst_47747) : f.call(null,inst_47742,inst_47747));
var inst_47752 = cljs.core.reduced_QMARK_(inst_47751__$1);
var state_47764__$1 = (function (){var statearr_47779 = state_47764;
(statearr_47779[(9)] = inst_47751__$1);

return statearr_47779;
})();
if(inst_47752){
var statearr_47780_49658 = state_47764__$1;
(statearr_47780_49658[(1)] = (8));

} else {
var statearr_47781_49659 = state_47764__$1;
(statearr_47781_49659[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47765 === (3))){
var inst_47762 = (state_47764[(2)]);
var state_47764__$1 = state_47764;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47764__$1,inst_47762);
} else {
if((state_val_47765 === (2))){
var state_47764__$1 = state_47764;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47764__$1,(4),ch);
} else {
if((state_val_47765 === (9))){
var inst_47751 = (state_47764[(9)]);
var inst_47742 = inst_47751;
var state_47764__$1 = (function (){var statearr_47796 = state_47764;
(statearr_47796[(7)] = inst_47742);

return statearr_47796;
})();
var statearr_47801_49660 = state_47764__$1;
(statearr_47801_49660[(2)] = null);

(statearr_47801_49660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47765 === (5))){
var inst_47742 = (state_47764[(7)]);
var state_47764__$1 = state_47764;
var statearr_47802_49661 = state_47764__$1;
(statearr_47802_49661[(2)] = inst_47742);

(statearr_47802_49661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47765 === (10))){
var inst_47758 = (state_47764[(2)]);
var state_47764__$1 = state_47764;
var statearr_47803_49662 = state_47764__$1;
(statearr_47803_49662[(2)] = inst_47758);

(statearr_47803_49662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47765 === (8))){
var inst_47751 = (state_47764[(9)]);
var inst_47754 = cljs.core.deref(inst_47751);
var state_47764__$1 = state_47764;
var statearr_47804_49663 = state_47764__$1;
(statearr_47804_49663[(2)] = inst_47754);

(statearr_47804_49663[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__46891__auto__ = null;
var cljs$core$async$reduce_$_state_machine__46891__auto____0 = (function (){
var statearr_47806 = [null,null,null,null,null,null,null,null,null,null];
(statearr_47806[(0)] = cljs$core$async$reduce_$_state_machine__46891__auto__);

(statearr_47806[(1)] = (1));

return statearr_47806;
});
var cljs$core$async$reduce_$_state_machine__46891__auto____1 = (function (state_47764){
while(true){
var ret_value__46892__auto__ = (function (){try{while(true){
var result__46893__auto__ = switch__46890__auto__(state_47764);
if(cljs.core.keyword_identical_QMARK_(result__46893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46893__auto__;
}
break;
}
}catch (e47807){var ex__46894__auto__ = e47807;
var statearr_47808_49664 = state_47764;
(statearr_47808_49664[(2)] = ex__46894__auto__);


if(cljs.core.seq((state_47764[(4)]))){
var statearr_47809_49665 = state_47764;
(statearr_47809_49665[(1)] = cljs.core.first((state_47764[(4)])));

} else {
throw ex__46894__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49666 = state_47764;
state_47764 = G__49666;
continue;
} else {
return ret_value__46892__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__46891__auto__ = function(state_47764){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__46891__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__46891__auto____1.call(this,state_47764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__46891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__46891__auto____0;
cljs$core$async$reduce_$_state_machine__46891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__46891__auto____1;
return cljs$core$async$reduce_$_state_machine__46891__auto__;
})()
})();
var state__47054__auto__ = (function (){var statearr_47810 = f__47053__auto__();
(statearr_47810[(6)] = c__47052__auto__);

return statearr_47810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47054__auto__);
}));

return c__47052__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__47052__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47053__auto__ = (function (){var switch__46890__auto__ = (function (state_47821){
var state_val_47822 = (state_47821[(1)]);
if((state_val_47822 === (1))){
var inst_47816 = cljs.core.async.reduce(f__$1,init,ch);
var state_47821__$1 = state_47821;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47821__$1,(2),inst_47816);
} else {
if((state_val_47822 === (2))){
var inst_47818 = (state_47821[(2)]);
var inst_47819 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_47818) : f__$1.call(null,inst_47818));
var state_47821__$1 = state_47821;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47821__$1,inst_47819);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__46891__auto__ = null;
var cljs$core$async$transduce_$_state_machine__46891__auto____0 = (function (){
var statearr_47869 = [null,null,null,null,null,null,null];
(statearr_47869[(0)] = cljs$core$async$transduce_$_state_machine__46891__auto__);

(statearr_47869[(1)] = (1));

return statearr_47869;
});
var cljs$core$async$transduce_$_state_machine__46891__auto____1 = (function (state_47821){
while(true){
var ret_value__46892__auto__ = (function (){try{while(true){
var result__46893__auto__ = switch__46890__auto__(state_47821);
if(cljs.core.keyword_identical_QMARK_(result__46893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46893__auto__;
}
break;
}
}catch (e47870){var ex__46894__auto__ = e47870;
var statearr_47873_49667 = state_47821;
(statearr_47873_49667[(2)] = ex__46894__auto__);


if(cljs.core.seq((state_47821[(4)]))){
var statearr_47876_49668 = state_47821;
(statearr_47876_49668[(1)] = cljs.core.first((state_47821[(4)])));

} else {
throw ex__46894__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49669 = state_47821;
state_47821 = G__49669;
continue;
} else {
return ret_value__46892__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__46891__auto__ = function(state_47821){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__46891__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__46891__auto____1.call(this,state_47821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__46891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__46891__auto____0;
cljs$core$async$transduce_$_state_machine__46891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__46891__auto____1;
return cljs$core$async$transduce_$_state_machine__46891__auto__;
})()
})();
var state__47054__auto__ = (function (){var statearr_47878 = f__47053__auto__();
(statearr_47878[(6)] = c__47052__auto__);

return statearr_47878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47054__auto__);
}));

return c__47052__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__47881 = arguments.length;
switch (G__47881) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__47052__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47053__auto__ = (function (){var switch__46890__auto__ = (function (state_47910){
var state_val_47911 = (state_47910[(1)]);
if((state_val_47911 === (7))){
var inst_47892 = (state_47910[(2)]);
var state_47910__$1 = state_47910;
var statearr_47912_49671 = state_47910__$1;
(statearr_47912_49671[(2)] = inst_47892);

(statearr_47912_49671[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47911 === (1))){
var inst_47886 = cljs.core.seq(coll);
var inst_47887 = inst_47886;
var state_47910__$1 = (function (){var statearr_47913 = state_47910;
(statearr_47913[(7)] = inst_47887);

return statearr_47913;
})();
var statearr_47914_49672 = state_47910__$1;
(statearr_47914_49672[(2)] = null);

(statearr_47914_49672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47911 === (4))){
var inst_47887 = (state_47910[(7)]);
var inst_47890 = cljs.core.first(inst_47887);
var state_47910__$1 = state_47910;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47910__$1,(7),ch,inst_47890);
} else {
if((state_val_47911 === (13))){
var inst_47904 = (state_47910[(2)]);
var state_47910__$1 = state_47910;
var statearr_47915_49673 = state_47910__$1;
(statearr_47915_49673[(2)] = inst_47904);

(statearr_47915_49673[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47911 === (6))){
var inst_47895 = (state_47910[(2)]);
var state_47910__$1 = state_47910;
if(cljs.core.truth_(inst_47895)){
var statearr_47916_49674 = state_47910__$1;
(statearr_47916_49674[(1)] = (8));

} else {
var statearr_47917_49675 = state_47910__$1;
(statearr_47917_49675[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47911 === (3))){
var inst_47908 = (state_47910[(2)]);
var state_47910__$1 = state_47910;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47910__$1,inst_47908);
} else {
if((state_val_47911 === (12))){
var state_47910__$1 = state_47910;
var statearr_47918_49676 = state_47910__$1;
(statearr_47918_49676[(2)] = null);

(statearr_47918_49676[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47911 === (2))){
var inst_47887 = (state_47910[(7)]);
var state_47910__$1 = state_47910;
if(cljs.core.truth_(inst_47887)){
var statearr_47921_49677 = state_47910__$1;
(statearr_47921_49677[(1)] = (4));

} else {
var statearr_47922_49678 = state_47910__$1;
(statearr_47922_49678[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47911 === (11))){
var inst_47901 = cljs.core.async.close_BANG_(ch);
var state_47910__$1 = state_47910;
var statearr_47929_49679 = state_47910__$1;
(statearr_47929_49679[(2)] = inst_47901);

(statearr_47929_49679[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47911 === (9))){
var state_47910__$1 = state_47910;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47930_49680 = state_47910__$1;
(statearr_47930_49680[(1)] = (11));

} else {
var statearr_47931_49681 = state_47910__$1;
(statearr_47931_49681[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47911 === (5))){
var inst_47887 = (state_47910[(7)]);
var state_47910__$1 = state_47910;
var statearr_47932_49682 = state_47910__$1;
(statearr_47932_49682[(2)] = inst_47887);

(statearr_47932_49682[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47911 === (10))){
var inst_47906 = (state_47910[(2)]);
var state_47910__$1 = state_47910;
var statearr_47933_49683 = state_47910__$1;
(statearr_47933_49683[(2)] = inst_47906);

(statearr_47933_49683[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47911 === (8))){
var inst_47887 = (state_47910[(7)]);
var inst_47897 = cljs.core.next(inst_47887);
var inst_47887__$1 = inst_47897;
var state_47910__$1 = (function (){var statearr_47935 = state_47910;
(statearr_47935[(7)] = inst_47887__$1);

return statearr_47935;
})();
var statearr_47936_49684 = state_47910__$1;
(statearr_47936_49684[(2)] = null);

(statearr_47936_49684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46891__auto__ = null;
var cljs$core$async$state_machine__46891__auto____0 = (function (){
var statearr_47938 = [null,null,null,null,null,null,null,null];
(statearr_47938[(0)] = cljs$core$async$state_machine__46891__auto__);

(statearr_47938[(1)] = (1));

return statearr_47938;
});
var cljs$core$async$state_machine__46891__auto____1 = (function (state_47910){
while(true){
var ret_value__46892__auto__ = (function (){try{while(true){
var result__46893__auto__ = switch__46890__auto__(state_47910);
if(cljs.core.keyword_identical_QMARK_(result__46893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46893__auto__;
}
break;
}
}catch (e47939){var ex__46894__auto__ = e47939;
var statearr_47940_49687 = state_47910;
(statearr_47940_49687[(2)] = ex__46894__auto__);


if(cljs.core.seq((state_47910[(4)]))){
var statearr_47941_49688 = state_47910;
(statearr_47941_49688[(1)] = cljs.core.first((state_47910[(4)])));

} else {
throw ex__46894__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49689 = state_47910;
state_47910 = G__49689;
continue;
} else {
return ret_value__46892__auto__;
}
break;
}
});
cljs$core$async$state_machine__46891__auto__ = function(state_47910){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46891__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46891__auto____1.call(this,state_47910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46891__auto____0;
cljs$core$async$state_machine__46891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46891__auto____1;
return cljs$core$async$state_machine__46891__auto__;
})()
})();
var state__47054__auto__ = (function (){var statearr_47942 = f__47053__auto__();
(statearr_47942[(6)] = c__47052__auto__);

return statearr_47942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47054__auto__);
}));

return c__47052__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__47945 = arguments.length;
switch (G__47945) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_49691 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_49691(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_49692 = (function (m,ch,close_QMARK_){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4510__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4508__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_49692(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_49693 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_49693(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_49694 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_49694(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47969 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47969 = (function (ch,cs,meta47970){
this.ch = ch;
this.cs = cs;
this.meta47970 = meta47970;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47969.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47971,meta47970__$1){
var self__ = this;
var _47971__$1 = this;
return (new cljs.core.async.t_cljs$core$async47969(self__.ch,self__.cs,meta47970__$1));
}));

(cljs.core.async.t_cljs$core$async47969.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47971){
var self__ = this;
var _47971__$1 = this;
return self__.meta47970;
}));

(cljs.core.async.t_cljs$core$async47969.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47969.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async47969.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47969.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async47969.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async47969.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async47969.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta47970","meta47970",-284162154,null)], null);
}));

(cljs.core.async.t_cljs$core$async47969.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47969.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47969");

(cljs.core.async.t_cljs$core$async47969.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async47969");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47969.
 */
cljs.core.async.__GT_t_cljs$core$async47969 = (function cljs$core$async$mult_$___GT_t_cljs$core$async47969(ch__$1,cs__$1,meta47970){
return (new cljs.core.async.t_cljs$core$async47969(ch__$1,cs__$1,meta47970));
});

}

return (new cljs.core.async.t_cljs$core$async47969(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__47052__auto___49707 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47053__auto__ = (function (){var switch__46890__auto__ = (function (state_48143){
var state_val_48144 = (state_48143[(1)]);
if((state_val_48144 === (7))){
var inst_48135 = (state_48143[(2)]);
var state_48143__$1 = state_48143;
var statearr_48145_49709 = state_48143__$1;
(statearr_48145_49709[(2)] = inst_48135);

(statearr_48145_49709[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48144 === (20))){
var inst_48017 = (state_48143[(7)]);
var inst_48037 = cljs.core.first(inst_48017);
var inst_48038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48037,(0),null);
var inst_48039 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48037,(1),null);
var state_48143__$1 = (function (){var statearr_48146 = state_48143;
(statearr_48146[(8)] = inst_48038);

return statearr_48146;
})();
if(cljs.core.truth_(inst_48039)){
var statearr_48148_49711 = state_48143__$1;
(statearr_48148_49711[(1)] = (22));

} else {
var statearr_48149_49712 = state_48143__$1;
(statearr_48149_49712[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48144 === (27))){
var inst_47981 = (state_48143[(9)]);
var inst_48067 = (state_48143[(10)]);
var inst_48069 = (state_48143[(11)]);
var inst_48074 = (state_48143[(12)]);
var inst_48074__$1 = cljs.core._nth(inst_48067,inst_48069);
var inst_48076 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_48074__$1,inst_47981,done);
var state_48143__$1 = (function (){var statearr_48150 = state_48143;
(statearr_48150[(12)] = inst_48074__$1);

return statearr_48150;
})();
if(cljs.core.truth_(inst_48076)){
var statearr_48151_49713 = state_48143__$1;
(statearr_48151_49713[(1)] = (30));

} else {
var statearr_48152_49714 = state_48143__$1;
(statearr_48152_49714[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48144 === (1))){
var state_48143__$1 = state_48143;
var statearr_48153_49715 = state_48143__$1;
(statearr_48153_49715[(2)] = null);

(statearr_48153_49715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48144 === (24))){
var inst_48017 = (state_48143[(7)]);
var inst_48044 = (state_48143[(2)]);
var inst_48045 = cljs.core.next(inst_48017);
var inst_47991 = inst_48045;
var inst_47992 = null;
var inst_47993 = (0);
var inst_47994 = (0);
var state_48143__$1 = (function (){var statearr_48155 = state_48143;
(statearr_48155[(13)] = inst_48044);

(statearr_48155[(14)] = inst_47991);

(statearr_48155[(15)] = inst_47993);

(statearr_48155[(16)] = inst_47994);

(statearr_48155[(17)] = inst_47992);

return statearr_48155;
})();
var statearr_48156_49716 = state_48143__$1;
(statearr_48156_49716[(2)] = null);

(statearr_48156_49716[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48144 === (39))){
var state_48143__$1 = state_48143;
var statearr_48160_49717 = state_48143__$1;
(statearr_48160_49717[(2)] = null);

(statearr_48160_49717[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48144 === (4))){
var inst_47981 = (state_48143[(9)]);
var inst_47981__$1 = (state_48143[(2)]);
var inst_47982 = (inst_47981__$1 == null);
var state_48143__$1 = (function (){var statearr_48161 = state_48143;
(statearr_48161[(9)] = inst_47981__$1);

return statearr_48161;
})();
if(cljs.core.truth_(inst_47982)){
var statearr_48162_49719 = state_48143__$1;
(statearr_48162_49719[(1)] = (5));

} else {
var statearr_48163_49720 = state_48143__$1;
(statearr_48163_49720[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48144 === (15))){
var inst_47991 = (state_48143[(14)]);
var inst_47993 = (state_48143[(15)]);
var inst_47994 = (state_48143[(16)]);
var inst_47992 = (state_48143[(17)]);
var inst_48011 = (state_48143[(2)]);
var inst_48013 = (inst_47994 + (1));
var tmp48157 = inst_47991;
var tmp48158 = inst_47993;
var tmp48159 = inst_47992;
var inst_47991__$1 = tmp48157;
var inst_47992__$1 = tmp48159;
var inst_47993__$1 = tmp48158;
var inst_47994__$1 = inst_48013;
var state_48143__$1 = (function (){var statearr_48164 = state_48143;
(statearr_48164[(14)] = inst_47991__$1);

(statearr_48164[(15)] = inst_47993__$1);

(statearr_48164[(18)] = inst_48011);

(statearr_48164[(16)] = inst_47994__$1);

(statearr_48164[(17)] = inst_47992__$1);

return statearr_48164;
})();
var statearr_48166_49722 = state_48143__$1;
(statearr_48166_49722[(2)] = null);

(statearr_48166_49722[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48144 === (21))){
var inst_48048 = (state_48143[(2)]);
var state_48143__$1 = state_48143;
var statearr_48170_49723 = state_48143__$1;
(statearr_48170_49723[(2)] = inst_48048);

(statearr_48170_49723[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48144 === (31))){
var inst_48074 = (state_48143[(12)]);
var inst_48080 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_48074);
var state_48143__$1 = state_48143;
var statearr_48171_49724 = state_48143__$1;
(statearr_48171_49724[(2)] = inst_48080);

(statearr_48171_49724[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48144 === (32))){
var inst_48068 = (state_48143[(19)]);
var inst_48067 = (state_48143[(10)]);
var inst_48066 = (state_48143[(20)]);
var inst_48069 = (state_48143[(11)]);
var inst_48087 = (state_48143[(2)]);
var inst_48094 = (inst_48069 + (1));
var tmp48167 = inst_48068;
var tmp48168 = inst_48067;
var tmp48169 = inst_48066;
var inst_48066__$1 = tmp48169;
var inst_48067__$1 = tmp48168;
var inst_48068__$1 = tmp48167;
var inst_48069__$1 = inst_48094;
var state_48143__$1 = (function (){var statearr_48172 = state_48143;
(statearr_48172[(21)] = inst_48087);

(statearr_48172[(19)] = inst_48068__$1);

(statearr_48172[(10)] = inst_48067__$1);

(statearr_48172[(20)] = inst_48066__$1);

(statearr_48172[(11)] = inst_48069__$1);

return statearr_48172;
})();
var statearr_48173_49726 = state_48143__$1;
(statearr_48173_49726[(2)] = null);

(statearr_48173_49726[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48144 === (40))){
var inst_48107 = (state_48143[(22)]);
var inst_48112 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_48107);
var state_48143__$1 = state_48143;
var statearr_48174_49728 = state_48143__$1;
(statearr_48174_49728[(2)] = inst_48112);

(statearr_48174_49728[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48144 === (33))){
var inst_48098 = (state_48143[(23)]);
var inst_48100 = cljs.core.chunked_seq_QMARK_(inst_48098);
var state_48143__$1 = state_48143;
if(inst_48100){
var statearr_48176_49729 = state_48143__$1;
(statearr_48176_49729[(1)] = (36));

} else {
var statearr_48177_49730 = state_48143__$1;
(statearr_48177_49730[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48144 === (13))){
var inst_48003 = (state_48143[(24)]);
var inst_48008 = cljs.core.async.close_BANG_(inst_48003);
var state_48143__$1 = state_48143;
var statearr_48178_49731 = state_48143__$1;
(statearr_48178_49731[(2)] = inst_48008);

(statearr_48178_49731[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48144 === (22))){
var inst_48038 = (state_48143[(8)]);
var inst_48041 = cljs.core.async.close_BANG_(inst_48038);
var state_48143__$1 = state_48143;
var statearr_48179_49732 = state_48143__$1;
(statearr_48179_49732[(2)] = inst_48041);

(statearr_48179_49732[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48144 === (36))){
var inst_48098 = (state_48143[(23)]);
var inst_48102 = cljs.core.chunk_first(inst_48098);
var inst_48103 = cljs.core.chunk_rest(inst_48098);
var inst_48104 = cljs.core.count(inst_48102);
var inst_48066 = inst_48103;
var inst_48067 = inst_48102;
var inst_48068 = inst_48104;
var inst_48069 = (0);
var state_48143__$1 = (function (){var statearr_48180 = state_48143;
(statearr_48180[(19)] = inst_48068);

(statearr_48180[(10)] = inst_48067);

(statearr_48180[(20)] = inst_48066);

(statearr_48180[(11)] = inst_48069);

return statearr_48180;
})();
var statearr_48181_49736 = state_48143__$1;
(statearr_48181_49736[(2)] = null);

(statearr_48181_49736[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48144 === (41))){
var inst_48098 = (state_48143[(23)]);
var inst_48114 = (state_48143[(2)]);
var inst_48115 = cljs.core.next(inst_48098);
var inst_48066 = inst_48115;
var inst_48067 = null;
var inst_48068 = (0);
var inst_48069 = (0);
var state_48143__$1 = (function (){var statearr_48183 = state_48143;
(statearr_48183[(19)] = inst_48068);

(statearr_48183[(10)] = inst_48067);

(statearr_48183[(20)] = inst_48066);

(statearr_48183[(11)] = inst_48069);

(statearr_48183[(25)] = inst_48114);

return statearr_48183;
})();
var statearr_48184_49740 = state_48143__$1;
(statearr_48184_49740[(2)] = null);

(statearr_48184_49740[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48144 === (43))){
var state_48143__$1 = state_48143;
var statearr_48185_49741 = state_48143__$1;
(statearr_48185_49741[(2)] = null);

(statearr_48185_49741[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48144 === (29))){
var inst_48123 = (state_48143[(2)]);
var state_48143__$1 = state_48143;
var statearr_48186_49742 = state_48143__$1;
(statearr_48186_49742[(2)] = inst_48123);

(statearr_48186_49742[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48144 === (44))){
var inst_48132 = (state_48143[(2)]);
var state_48143__$1 = (function (){var statearr_48187 = state_48143;
(statearr_48187[(26)] = inst_48132);

return statearr_48187;
})();
var statearr_48188_49743 = state_48143__$1;
(statearr_48188_49743[(2)] = null);

(statearr_48188_49743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48144 === (6))){
var inst_48058 = (state_48143[(27)]);
var inst_48057 = cljs.core.deref(cs);
var inst_48058__$1 = cljs.core.keys(inst_48057);
var inst_48059 = cljs.core.count(inst_48058__$1);
var inst_48060 = cljs.core.reset_BANG_(dctr,inst_48059);
var inst_48065 = cljs.core.seq(inst_48058__$1);
var inst_48066 = inst_48065;
var inst_48067 = null;
var inst_48068 = (0);
var inst_48069 = (0);
var state_48143__$1 = (function (){var statearr_48189 = state_48143;
(statearr_48189[(19)] = inst_48068);

(statearr_48189[(10)] = inst_48067);

(statearr_48189[(20)] = inst_48066);

(statearr_48189[(11)] = inst_48069);

(statearr_48189[(27)] = inst_48058__$1);

(statearr_48189[(28)] = inst_48060);

return statearr_48189;
})();
var statearr_48191_49745 = state_48143__$1;
(statearr_48191_49745[(2)] = null);

(statearr_48191_49745[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48144 === (28))){
var inst_48066 = (state_48143[(20)]);
var inst_48098 = (state_48143[(23)]);
var inst_48098__$1 = cljs.core.seq(inst_48066);
var state_48143__$1 = (function (){var statearr_48192 = state_48143;
(statearr_48192[(23)] = inst_48098__$1);

return statearr_48192;
})();
if(inst_48098__$1){
var statearr_48193_49747 = state_48143__$1;
(statearr_48193_49747[(1)] = (33));

} else {
var statearr_48194_49748 = state_48143__$1;
(statearr_48194_49748[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48144 === (25))){
var inst_48068 = (state_48143[(19)]);
var inst_48069 = (state_48143[(11)]);
var inst_48071 = (inst_48069 < inst_48068);
var inst_48072 = inst_48071;
var state_48143__$1 = state_48143;
if(cljs.core.truth_(inst_48072)){
var statearr_48195_49753 = state_48143__$1;
(statearr_48195_49753[(1)] = (27));

} else {
var statearr_48196_49754 = state_48143__$1;
(statearr_48196_49754[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48144 === (34))){
var state_48143__$1 = state_48143;
var statearr_48197_49755 = state_48143__$1;
(statearr_48197_49755[(2)] = null);

(statearr_48197_49755[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48144 === (17))){
var state_48143__$1 = state_48143;
var statearr_48199_49756 = state_48143__$1;
(statearr_48199_49756[(2)] = null);

(statearr_48199_49756[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48144 === (3))){
var inst_48137 = (state_48143[(2)]);
var state_48143__$1 = state_48143;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48143__$1,inst_48137);
} else {
if((state_val_48144 === (12))){
var inst_48053 = (state_48143[(2)]);
var state_48143__$1 = state_48143;
var statearr_48201_49757 = state_48143__$1;
(statearr_48201_49757[(2)] = inst_48053);

(statearr_48201_49757[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48144 === (2))){
var state_48143__$1 = state_48143;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48143__$1,(4),ch);
} else {
if((state_val_48144 === (23))){
var state_48143__$1 = state_48143;
var statearr_48202_49758 = state_48143__$1;
(statearr_48202_49758[(2)] = null);

(statearr_48202_49758[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48144 === (35))){
var inst_48121 = (state_48143[(2)]);
var state_48143__$1 = state_48143;
var statearr_48203_49759 = state_48143__$1;
(statearr_48203_49759[(2)] = inst_48121);

(statearr_48203_49759[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48144 === (19))){
var inst_48017 = (state_48143[(7)]);
var inst_48029 = cljs.core.chunk_first(inst_48017);
var inst_48030 = cljs.core.chunk_rest(inst_48017);
var inst_48031 = cljs.core.count(inst_48029);
var inst_47991 = inst_48030;
var inst_47992 = inst_48029;
var inst_47993 = inst_48031;
var inst_47994 = (0);
var state_48143__$1 = (function (){var statearr_48204 = state_48143;
(statearr_48204[(14)] = inst_47991);

(statearr_48204[(15)] = inst_47993);

(statearr_48204[(16)] = inst_47994);

(statearr_48204[(17)] = inst_47992);

return statearr_48204;
})();
var statearr_48205_49762 = state_48143__$1;
(statearr_48205_49762[(2)] = null);

(statearr_48205_49762[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48144 === (11))){
var inst_48017 = (state_48143[(7)]);
var inst_47991 = (state_48143[(14)]);
var inst_48017__$1 = cljs.core.seq(inst_47991);
var state_48143__$1 = (function (){var statearr_48209 = state_48143;
(statearr_48209[(7)] = inst_48017__$1);

return statearr_48209;
})();
if(inst_48017__$1){
var statearr_48210_49763 = state_48143__$1;
(statearr_48210_49763[(1)] = (16));

} else {
var statearr_48211_49764 = state_48143__$1;
(statearr_48211_49764[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48144 === (9))){
var inst_48055 = (state_48143[(2)]);
var state_48143__$1 = state_48143;
var statearr_48212_49765 = state_48143__$1;
(statearr_48212_49765[(2)] = inst_48055);

(statearr_48212_49765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48144 === (5))){
var inst_47988 = cljs.core.deref(cs);
var inst_47989 = cljs.core.seq(inst_47988);
var inst_47991 = inst_47989;
var inst_47992 = null;
var inst_47993 = (0);
var inst_47994 = (0);
var state_48143__$1 = (function (){var statearr_48214 = state_48143;
(statearr_48214[(14)] = inst_47991);

(statearr_48214[(15)] = inst_47993);

(statearr_48214[(16)] = inst_47994);

(statearr_48214[(17)] = inst_47992);

return statearr_48214;
})();
var statearr_48216_49766 = state_48143__$1;
(statearr_48216_49766[(2)] = null);

(statearr_48216_49766[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48144 === (14))){
var state_48143__$1 = state_48143;
var statearr_48217_49767 = state_48143__$1;
(statearr_48217_49767[(2)] = null);

(statearr_48217_49767[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48144 === (45))){
var inst_48129 = (state_48143[(2)]);
var state_48143__$1 = state_48143;
var statearr_48218_49768 = state_48143__$1;
(statearr_48218_49768[(2)] = inst_48129);

(statearr_48218_49768[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48144 === (26))){
var inst_48058 = (state_48143[(27)]);
var inst_48125 = (state_48143[(2)]);
var inst_48126 = cljs.core.seq(inst_48058);
var state_48143__$1 = (function (){var statearr_48219 = state_48143;
(statearr_48219[(29)] = inst_48125);

return statearr_48219;
})();
if(inst_48126){
var statearr_48220_49769 = state_48143__$1;
(statearr_48220_49769[(1)] = (42));

} else {
var statearr_48221_49770 = state_48143__$1;
(statearr_48221_49770[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48144 === (16))){
var inst_48017 = (state_48143[(7)]);
var inst_48020 = cljs.core.chunked_seq_QMARK_(inst_48017);
var state_48143__$1 = state_48143;
if(inst_48020){
var statearr_48222_49771 = state_48143__$1;
(statearr_48222_49771[(1)] = (19));

} else {
var statearr_48227_49772 = state_48143__$1;
(statearr_48227_49772[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48144 === (38))){
var inst_48118 = (state_48143[(2)]);
var state_48143__$1 = state_48143;
var statearr_48236_49773 = state_48143__$1;
(statearr_48236_49773[(2)] = inst_48118);

(statearr_48236_49773[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48144 === (30))){
var state_48143__$1 = state_48143;
var statearr_48238_49774 = state_48143__$1;
(statearr_48238_49774[(2)] = null);

(statearr_48238_49774[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48144 === (10))){
var inst_47994 = (state_48143[(16)]);
var inst_47992 = (state_48143[(17)]);
var inst_48002 = cljs.core._nth(inst_47992,inst_47994);
var inst_48003 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48002,(0),null);
var inst_48004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48002,(1),null);
var state_48143__$1 = (function (){var statearr_48239 = state_48143;
(statearr_48239[(24)] = inst_48003);

return statearr_48239;
})();
if(cljs.core.truth_(inst_48004)){
var statearr_48240_49779 = state_48143__$1;
(statearr_48240_49779[(1)] = (13));

} else {
var statearr_48241_49780 = state_48143__$1;
(statearr_48241_49780[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48144 === (18))){
var inst_48051 = (state_48143[(2)]);
var state_48143__$1 = state_48143;
var statearr_48242_49781 = state_48143__$1;
(statearr_48242_49781[(2)] = inst_48051);

(statearr_48242_49781[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48144 === (42))){
var state_48143__$1 = state_48143;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48143__$1,(45),dchan);
} else {
if((state_val_48144 === (37))){
var inst_47981 = (state_48143[(9)]);
var inst_48107 = (state_48143[(22)]);
var inst_48098 = (state_48143[(23)]);
var inst_48107__$1 = cljs.core.first(inst_48098);
var inst_48108 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_48107__$1,inst_47981,done);
var state_48143__$1 = (function (){var statearr_48243 = state_48143;
(statearr_48243[(22)] = inst_48107__$1);

return statearr_48243;
})();
if(cljs.core.truth_(inst_48108)){
var statearr_48244_49782 = state_48143__$1;
(statearr_48244_49782[(1)] = (39));

} else {
var statearr_48245_49783 = state_48143__$1;
(statearr_48245_49783[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48144 === (8))){
var inst_47993 = (state_48143[(15)]);
var inst_47994 = (state_48143[(16)]);
var inst_47996 = (inst_47994 < inst_47993);
var inst_47997 = inst_47996;
var state_48143__$1 = state_48143;
if(cljs.core.truth_(inst_47997)){
var statearr_48247_49784 = state_48143__$1;
(statearr_48247_49784[(1)] = (10));

} else {
var statearr_48248_49785 = state_48143__$1;
(statearr_48248_49785[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__46891__auto__ = null;
var cljs$core$async$mult_$_state_machine__46891__auto____0 = (function (){
var statearr_48255 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48255[(0)] = cljs$core$async$mult_$_state_machine__46891__auto__);

(statearr_48255[(1)] = (1));

return statearr_48255;
});
var cljs$core$async$mult_$_state_machine__46891__auto____1 = (function (state_48143){
while(true){
var ret_value__46892__auto__ = (function (){try{while(true){
var result__46893__auto__ = switch__46890__auto__(state_48143);
if(cljs.core.keyword_identical_QMARK_(result__46893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46893__auto__;
}
break;
}
}catch (e48256){var ex__46894__auto__ = e48256;
var statearr_48257_49800 = state_48143;
(statearr_48257_49800[(2)] = ex__46894__auto__);


if(cljs.core.seq((state_48143[(4)]))){
var statearr_48258_49801 = state_48143;
(statearr_48258_49801[(1)] = cljs.core.first((state_48143[(4)])));

} else {
throw ex__46894__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49805 = state_48143;
state_48143 = G__49805;
continue;
} else {
return ret_value__46892__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__46891__auto__ = function(state_48143){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__46891__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__46891__auto____1.call(this,state_48143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__46891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__46891__auto____0;
cljs$core$async$mult_$_state_machine__46891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__46891__auto____1;
return cljs$core$async$mult_$_state_machine__46891__auto__;
})()
})();
var state__47054__auto__ = (function (){var statearr_48259 = f__47053__auto__();
(statearr_48259[(6)] = c__47052__auto___49707);

return statearr_48259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47054__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__48262 = arguments.length;
switch (G__48262) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_49810 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_49810(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_49818 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_49818(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_49819 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_49819(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_49821 = (function (m,state_map){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4510__auto__.call(null,m,state_map));
} else {
var m__4508__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4508__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_49821(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_49823 = (function (m,mode){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4510__auto__.call(null,m,mode));
} else {
var m__4508__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4508__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_49823(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___49827 = arguments.length;
var i__4819__auto___49828 = (0);
while(true){
if((i__4819__auto___49828 < len__4818__auto___49827)){
args__4824__auto__.push((arguments[i__4819__auto___49828]));

var G__49829 = (i__4819__auto___49828 + (1));
i__4819__auto___49828 = G__49829;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__48272){
var map__48273 = p__48272;
var map__48273__$1 = cljs.core.__destructure_map(map__48273);
var opts = map__48273__$1;
var statearr_48274_49834 = state;
(statearr_48274_49834[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_48275_49838 = state;
(statearr_48275_49838[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_48276_49839 = state;
(statearr_48276_49839[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq48267){
var G__48268 = cljs.core.first(seq48267);
var seq48267__$1 = cljs.core.next(seq48267);
var G__48269 = cljs.core.first(seq48267__$1);
var seq48267__$2 = cljs.core.next(seq48267__$1);
var G__48270 = cljs.core.first(seq48267__$2);
var seq48267__$3 = cljs.core.next(seq48267__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48268,G__48269,G__48270,seq48267__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48279 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48279 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta48280){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta48280 = meta48280;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48279.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48281,meta48280__$1){
var self__ = this;
var _48281__$1 = this;
return (new cljs.core.async.t_cljs$core$async48279(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta48280__$1));
}));

(cljs.core.async.t_cljs$core$async48279.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48281){
var self__ = this;
var _48281__$1 = this;
return self__.meta48280;
}));

(cljs.core.async.t_cljs$core$async48279.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48279.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async48279.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48279.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48279.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48279.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48279.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48279.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48279.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta48280","meta48280",-1276384076,null)], null);
}));

(cljs.core.async.t_cljs$core$async48279.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48279.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48279");

(cljs.core.async.t_cljs$core$async48279.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async48279");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48279.
 */
cljs.core.async.__GT_t_cljs$core$async48279 = (function cljs$core$async$mix_$___GT_t_cljs$core$async48279(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta48280){
return (new cljs.core.async.t_cljs$core$async48279(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta48280));
});

}

return (new cljs.core.async.t_cljs$core$async48279(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__47052__auto___49865 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47053__auto__ = (function (){var switch__46890__auto__ = (function (state_48354){
var state_val_48355 = (state_48354[(1)]);
if((state_val_48355 === (7))){
var inst_48312 = (state_48354[(2)]);
var state_48354__$1 = state_48354;
if(cljs.core.truth_(inst_48312)){
var statearr_48356_49866 = state_48354__$1;
(statearr_48356_49866[(1)] = (8));

} else {
var statearr_48357_49867 = state_48354__$1;
(statearr_48357_49867[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48355 === (20))){
var inst_48305 = (state_48354[(7)]);
var state_48354__$1 = state_48354;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48354__$1,(23),out,inst_48305);
} else {
if((state_val_48355 === (1))){
var inst_48288 = calc_state();
var inst_48289 = cljs.core.__destructure_map(inst_48288);
var inst_48290 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48289,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48291 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48289,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_48292 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48289,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_48293 = inst_48288;
var state_48354__$1 = (function (){var statearr_48358 = state_48354;
(statearr_48358[(8)] = inst_48290);

(statearr_48358[(9)] = inst_48291);

(statearr_48358[(10)] = inst_48292);

(statearr_48358[(11)] = inst_48293);

return statearr_48358;
})();
var statearr_48359_49875 = state_48354__$1;
(statearr_48359_49875[(2)] = null);

(statearr_48359_49875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48355 === (24))){
var inst_48296 = (state_48354[(12)]);
var inst_48293 = inst_48296;
var state_48354__$1 = (function (){var statearr_48360 = state_48354;
(statearr_48360[(11)] = inst_48293);

return statearr_48360;
})();
var statearr_48361_49876 = state_48354__$1;
(statearr_48361_49876[(2)] = null);

(statearr_48361_49876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48355 === (4))){
var inst_48305 = (state_48354[(7)]);
var inst_48307 = (state_48354[(13)]);
var inst_48304 = (state_48354[(2)]);
var inst_48305__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48304,(0),null);
var inst_48306 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48304,(1),null);
var inst_48307__$1 = (inst_48305__$1 == null);
var state_48354__$1 = (function (){var statearr_48363 = state_48354;
(statearr_48363[(7)] = inst_48305__$1);

(statearr_48363[(14)] = inst_48306);

(statearr_48363[(13)] = inst_48307__$1);

return statearr_48363;
})();
if(cljs.core.truth_(inst_48307__$1)){
var statearr_48364_49877 = state_48354__$1;
(statearr_48364_49877[(1)] = (5));

} else {
var statearr_48365_49878 = state_48354__$1;
(statearr_48365_49878[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48355 === (15))){
var inst_48327 = (state_48354[(15)]);
var inst_48297 = (state_48354[(16)]);
var inst_48327__$1 = cljs.core.empty_QMARK_(inst_48297);
var state_48354__$1 = (function (){var statearr_48366 = state_48354;
(statearr_48366[(15)] = inst_48327__$1);

return statearr_48366;
})();
if(inst_48327__$1){
var statearr_48367_49879 = state_48354__$1;
(statearr_48367_49879[(1)] = (17));

} else {
var statearr_48368_49883 = state_48354__$1;
(statearr_48368_49883[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48355 === (21))){
var inst_48296 = (state_48354[(12)]);
var inst_48293 = inst_48296;
var state_48354__$1 = (function (){var statearr_48369 = state_48354;
(statearr_48369[(11)] = inst_48293);

return statearr_48369;
})();
var statearr_48370_49884 = state_48354__$1;
(statearr_48370_49884[(2)] = null);

(statearr_48370_49884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48355 === (13))){
var inst_48320 = (state_48354[(2)]);
var inst_48321 = calc_state();
var inst_48293 = inst_48321;
var state_48354__$1 = (function (){var statearr_48371 = state_48354;
(statearr_48371[(17)] = inst_48320);

(statearr_48371[(11)] = inst_48293);

return statearr_48371;
})();
var statearr_48372_49885 = state_48354__$1;
(statearr_48372_49885[(2)] = null);

(statearr_48372_49885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48355 === (22))){
var inst_48347 = (state_48354[(2)]);
var state_48354__$1 = state_48354;
var statearr_48373_49886 = state_48354__$1;
(statearr_48373_49886[(2)] = inst_48347);

(statearr_48373_49886[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48355 === (6))){
var inst_48306 = (state_48354[(14)]);
var inst_48310 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48306,change);
var state_48354__$1 = state_48354;
var statearr_48374_49890 = state_48354__$1;
(statearr_48374_49890[(2)] = inst_48310);

(statearr_48374_49890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48355 === (25))){
var state_48354__$1 = state_48354;
var statearr_48376_49891 = state_48354__$1;
(statearr_48376_49891[(2)] = null);

(statearr_48376_49891[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48355 === (17))){
var inst_48306 = (state_48354[(14)]);
var inst_48298 = (state_48354[(18)]);
var inst_48329 = (inst_48298.cljs$core$IFn$_invoke$arity$1 ? inst_48298.cljs$core$IFn$_invoke$arity$1(inst_48306) : inst_48298.call(null,inst_48306));
var inst_48330 = cljs.core.not(inst_48329);
var state_48354__$1 = state_48354;
var statearr_48377_49892 = state_48354__$1;
(statearr_48377_49892[(2)] = inst_48330);

(statearr_48377_49892[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48355 === (3))){
var inst_48351 = (state_48354[(2)]);
var state_48354__$1 = state_48354;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48354__$1,inst_48351);
} else {
if((state_val_48355 === (12))){
var state_48354__$1 = state_48354;
var statearr_48378_49893 = state_48354__$1;
(statearr_48378_49893[(2)] = null);

(statearr_48378_49893[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48355 === (2))){
var inst_48296 = (state_48354[(12)]);
var inst_48293 = (state_48354[(11)]);
var inst_48296__$1 = cljs.core.__destructure_map(inst_48293);
var inst_48297 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48296__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48298 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48296__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_48299 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48296__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_48354__$1 = (function (){var statearr_48379 = state_48354;
(statearr_48379[(12)] = inst_48296__$1);

(statearr_48379[(16)] = inst_48297);

(statearr_48379[(18)] = inst_48298);

return statearr_48379;
})();
return cljs.core.async.ioc_alts_BANG_(state_48354__$1,(4),inst_48299);
} else {
if((state_val_48355 === (23))){
var inst_48338 = (state_48354[(2)]);
var state_48354__$1 = state_48354;
if(cljs.core.truth_(inst_48338)){
var statearr_48380_49897 = state_48354__$1;
(statearr_48380_49897[(1)] = (24));

} else {
var statearr_48381_49898 = state_48354__$1;
(statearr_48381_49898[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48355 === (19))){
var inst_48333 = (state_48354[(2)]);
var state_48354__$1 = state_48354;
var statearr_48382_49899 = state_48354__$1;
(statearr_48382_49899[(2)] = inst_48333);

(statearr_48382_49899[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48355 === (11))){
var inst_48306 = (state_48354[(14)]);
var inst_48317 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_48306);
var state_48354__$1 = state_48354;
var statearr_48383_49900 = state_48354__$1;
(statearr_48383_49900[(2)] = inst_48317);

(statearr_48383_49900[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48355 === (9))){
var inst_48324 = (state_48354[(19)]);
var inst_48297 = (state_48354[(16)]);
var inst_48306 = (state_48354[(14)]);
var inst_48324__$1 = (inst_48297.cljs$core$IFn$_invoke$arity$1 ? inst_48297.cljs$core$IFn$_invoke$arity$1(inst_48306) : inst_48297.call(null,inst_48306));
var state_48354__$1 = (function (){var statearr_48385 = state_48354;
(statearr_48385[(19)] = inst_48324__$1);

return statearr_48385;
})();
if(cljs.core.truth_(inst_48324__$1)){
var statearr_48386_49901 = state_48354__$1;
(statearr_48386_49901[(1)] = (14));

} else {
var statearr_48388_49902 = state_48354__$1;
(statearr_48388_49902[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48355 === (5))){
var inst_48307 = (state_48354[(13)]);
var state_48354__$1 = state_48354;
var statearr_48389_49903 = state_48354__$1;
(statearr_48389_49903[(2)] = inst_48307);

(statearr_48389_49903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48355 === (14))){
var inst_48324 = (state_48354[(19)]);
var state_48354__$1 = state_48354;
var statearr_48390_49905 = state_48354__$1;
(statearr_48390_49905[(2)] = inst_48324);

(statearr_48390_49905[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48355 === (26))){
var inst_48343 = (state_48354[(2)]);
var state_48354__$1 = state_48354;
var statearr_48391_49906 = state_48354__$1;
(statearr_48391_49906[(2)] = inst_48343);

(statearr_48391_49906[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48355 === (16))){
var inst_48335 = (state_48354[(2)]);
var state_48354__$1 = state_48354;
if(cljs.core.truth_(inst_48335)){
var statearr_48392_49907 = state_48354__$1;
(statearr_48392_49907[(1)] = (20));

} else {
var statearr_48393_49908 = state_48354__$1;
(statearr_48393_49908[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48355 === (10))){
var inst_48349 = (state_48354[(2)]);
var state_48354__$1 = state_48354;
var statearr_48394_49909 = state_48354__$1;
(statearr_48394_49909[(2)] = inst_48349);

(statearr_48394_49909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48355 === (18))){
var inst_48327 = (state_48354[(15)]);
var state_48354__$1 = state_48354;
var statearr_48395_49910 = state_48354__$1;
(statearr_48395_49910[(2)] = inst_48327);

(statearr_48395_49910[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48355 === (8))){
var inst_48305 = (state_48354[(7)]);
var inst_48315 = (inst_48305 == null);
var state_48354__$1 = state_48354;
if(cljs.core.truth_(inst_48315)){
var statearr_48397_49911 = state_48354__$1;
(statearr_48397_49911[(1)] = (11));

} else {
var statearr_48398_49912 = state_48354__$1;
(statearr_48398_49912[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__46891__auto__ = null;
var cljs$core$async$mix_$_state_machine__46891__auto____0 = (function (){
var statearr_48399 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48399[(0)] = cljs$core$async$mix_$_state_machine__46891__auto__);

(statearr_48399[(1)] = (1));

return statearr_48399;
});
var cljs$core$async$mix_$_state_machine__46891__auto____1 = (function (state_48354){
while(true){
var ret_value__46892__auto__ = (function (){try{while(true){
var result__46893__auto__ = switch__46890__auto__(state_48354);
if(cljs.core.keyword_identical_QMARK_(result__46893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46893__auto__;
}
break;
}
}catch (e48400){var ex__46894__auto__ = e48400;
var statearr_48401_49926 = state_48354;
(statearr_48401_49926[(2)] = ex__46894__auto__);


if(cljs.core.seq((state_48354[(4)]))){
var statearr_48402_49927 = state_48354;
(statearr_48402_49927[(1)] = cljs.core.first((state_48354[(4)])));

} else {
throw ex__46894__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49928 = state_48354;
state_48354 = G__49928;
continue;
} else {
return ret_value__46892__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__46891__auto__ = function(state_48354){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__46891__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__46891__auto____1.call(this,state_48354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__46891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__46891__auto____0;
cljs$core$async$mix_$_state_machine__46891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__46891__auto____1;
return cljs$core$async$mix_$_state_machine__46891__auto__;
})()
})();
var state__47054__auto__ = (function (){var statearr_48403 = f__47053__auto__();
(statearr_48403[(6)] = c__47052__auto___49865);

return statearr_48403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47054__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_49933 = (function (p,v,ch,close_QMARK_){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4510__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4508__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_49933(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_49938 = (function (p,v,ch){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4510__auto__.call(null,p,v,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4508__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_49938(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_49940 = (function() {
var G__49941 = null;
var G__49941__1 = (function (p){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4510__auto__.call(null,p));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4508__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__49941__2 = (function (p,v){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4510__auto__.call(null,p,v));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4508__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__49941 = function(p,v){
switch(arguments.length){
case 1:
return G__49941__1.call(this,p);
case 2:
return G__49941__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__49941.cljs$core$IFn$_invoke$arity$1 = G__49941__1;
G__49941.cljs$core$IFn$_invoke$arity$2 = G__49941__2;
return G__49941;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__48410 = arguments.length;
switch (G__48410) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_49940(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_49940(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__48415 = arguments.length;
switch (G__48415) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4212__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__48413_SHARP_){
if(cljs.core.truth_((p1__48413_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__48413_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__48413_SHARP_.call(null,topic)))){
return p1__48413_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__48413_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48416 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48416 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta48417){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta48417 = meta48417;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48416.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48418,meta48417__$1){
var self__ = this;
var _48418__$1 = this;
return (new cljs.core.async.t_cljs$core$async48416(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta48417__$1));
}));

(cljs.core.async.t_cljs$core$async48416.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48418){
var self__ = this;
var _48418__$1 = this;
return self__.meta48417;
}));

(cljs.core.async.t_cljs$core$async48416.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48416.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async48416.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48416.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async48416.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async48416.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async48416.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async48416.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta48417","meta48417",58968350,null)], null);
}));

(cljs.core.async.t_cljs$core$async48416.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48416.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48416");

(cljs.core.async.t_cljs$core$async48416.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async48416");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48416.
 */
cljs.core.async.__GT_t_cljs$core$async48416 = (function cljs$core$async$__GT_t_cljs$core$async48416(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48417){
return (new cljs.core.async.t_cljs$core$async48416(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48417));
});

}

return (new cljs.core.async.t_cljs$core$async48416(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__47052__auto___49962 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47053__auto__ = (function (){var switch__46890__auto__ = (function (state_48515){
var state_val_48516 = (state_48515[(1)]);
if((state_val_48516 === (7))){
var inst_48511 = (state_48515[(2)]);
var state_48515__$1 = state_48515;
var statearr_48517_49970 = state_48515__$1;
(statearr_48517_49970[(2)] = inst_48511);

(statearr_48517_49970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48516 === (20))){
var state_48515__$1 = state_48515;
var statearr_48518_49971 = state_48515__$1;
(statearr_48518_49971[(2)] = null);

(statearr_48518_49971[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48516 === (1))){
var state_48515__$1 = state_48515;
var statearr_48519_49972 = state_48515__$1;
(statearr_48519_49972[(2)] = null);

(statearr_48519_49972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48516 === (24))){
var inst_48491 = (state_48515[(7)]);
var inst_48503 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_48491);
var state_48515__$1 = state_48515;
var statearr_48520_49973 = state_48515__$1;
(statearr_48520_49973[(2)] = inst_48503);

(statearr_48520_49973[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48516 === (4))){
var inst_48423 = (state_48515[(8)]);
var inst_48423__$1 = (state_48515[(2)]);
var inst_48424 = (inst_48423__$1 == null);
var state_48515__$1 = (function (){var statearr_48522 = state_48515;
(statearr_48522[(8)] = inst_48423__$1);

return statearr_48522;
})();
if(cljs.core.truth_(inst_48424)){
var statearr_48523_49974 = state_48515__$1;
(statearr_48523_49974[(1)] = (5));

} else {
var statearr_48524_49975 = state_48515__$1;
(statearr_48524_49975[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48516 === (15))){
var inst_48484 = (state_48515[(2)]);
var state_48515__$1 = state_48515;
var statearr_48525_49976 = state_48515__$1;
(statearr_48525_49976[(2)] = inst_48484);

(statearr_48525_49976[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48516 === (21))){
var inst_48508 = (state_48515[(2)]);
var state_48515__$1 = (function (){var statearr_48526 = state_48515;
(statearr_48526[(9)] = inst_48508);

return statearr_48526;
})();
var statearr_48527_49977 = state_48515__$1;
(statearr_48527_49977[(2)] = null);

(statearr_48527_49977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48516 === (13))){
var inst_48449 = (state_48515[(10)]);
var inst_48464 = cljs.core.chunked_seq_QMARK_(inst_48449);
var state_48515__$1 = state_48515;
if(inst_48464){
var statearr_48528_49978 = state_48515__$1;
(statearr_48528_49978[(1)] = (16));

} else {
var statearr_48531_49979 = state_48515__$1;
(statearr_48531_49979[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48516 === (22))){
var inst_48500 = (state_48515[(2)]);
var state_48515__$1 = state_48515;
if(cljs.core.truth_(inst_48500)){
var statearr_48540_49980 = state_48515__$1;
(statearr_48540_49980[(1)] = (23));

} else {
var statearr_48542_49981 = state_48515__$1;
(statearr_48542_49981[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48516 === (6))){
var inst_48423 = (state_48515[(8)]);
var inst_48491 = (state_48515[(7)]);
var inst_48493 = (state_48515[(11)]);
var inst_48491__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_48423) : topic_fn.call(null,inst_48423));
var inst_48492 = cljs.core.deref(mults);
var inst_48493__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48492,inst_48491__$1);
var state_48515__$1 = (function (){var statearr_48547 = state_48515;
(statearr_48547[(7)] = inst_48491__$1);

(statearr_48547[(11)] = inst_48493__$1);

return statearr_48547;
})();
if(cljs.core.truth_(inst_48493__$1)){
var statearr_48548_49982 = state_48515__$1;
(statearr_48548_49982[(1)] = (19));

} else {
var statearr_48549_49983 = state_48515__$1;
(statearr_48549_49983[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48516 === (25))){
var inst_48505 = (state_48515[(2)]);
var state_48515__$1 = state_48515;
var statearr_48551_49984 = state_48515__$1;
(statearr_48551_49984[(2)] = inst_48505);

(statearr_48551_49984[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48516 === (17))){
var inst_48449 = (state_48515[(10)]);
var inst_48475 = cljs.core.first(inst_48449);
var inst_48476 = cljs.core.async.muxch_STAR_(inst_48475);
var inst_48477 = cljs.core.async.close_BANG_(inst_48476);
var inst_48478 = cljs.core.next(inst_48449);
var inst_48433 = inst_48478;
var inst_48434 = null;
var inst_48435 = (0);
var inst_48436 = (0);
var state_48515__$1 = (function (){var statearr_48556 = state_48515;
(statearr_48556[(12)] = inst_48436);

(statearr_48556[(13)] = inst_48435);

(statearr_48556[(14)] = inst_48477);

(statearr_48556[(15)] = inst_48433);

(statearr_48556[(16)] = inst_48434);

return statearr_48556;
})();
var statearr_48557_49994 = state_48515__$1;
(statearr_48557_49994[(2)] = null);

(statearr_48557_49994[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48516 === (3))){
var inst_48513 = (state_48515[(2)]);
var state_48515__$1 = state_48515;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48515__$1,inst_48513);
} else {
if((state_val_48516 === (12))){
var inst_48486 = (state_48515[(2)]);
var state_48515__$1 = state_48515;
var statearr_48561_49995 = state_48515__$1;
(statearr_48561_49995[(2)] = inst_48486);

(statearr_48561_49995[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48516 === (2))){
var state_48515__$1 = state_48515;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48515__$1,(4),ch);
} else {
if((state_val_48516 === (23))){
var state_48515__$1 = state_48515;
var statearr_48566_50002 = state_48515__$1;
(statearr_48566_50002[(2)] = null);

(statearr_48566_50002[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48516 === (19))){
var inst_48423 = (state_48515[(8)]);
var inst_48493 = (state_48515[(11)]);
var inst_48498 = cljs.core.async.muxch_STAR_(inst_48493);
var state_48515__$1 = state_48515;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48515__$1,(22),inst_48498,inst_48423);
} else {
if((state_val_48516 === (11))){
var inst_48449 = (state_48515[(10)]);
var inst_48433 = (state_48515[(15)]);
var inst_48449__$1 = cljs.core.seq(inst_48433);
var state_48515__$1 = (function (){var statearr_48571 = state_48515;
(statearr_48571[(10)] = inst_48449__$1);

return statearr_48571;
})();
if(inst_48449__$1){
var statearr_48572_50004 = state_48515__$1;
(statearr_48572_50004[(1)] = (13));

} else {
var statearr_48573_50005 = state_48515__$1;
(statearr_48573_50005[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48516 === (9))){
var inst_48489 = (state_48515[(2)]);
var state_48515__$1 = state_48515;
var statearr_48575_50006 = state_48515__$1;
(statearr_48575_50006[(2)] = inst_48489);

(statearr_48575_50006[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48516 === (5))){
var inst_48430 = cljs.core.deref(mults);
var inst_48431 = cljs.core.vals(inst_48430);
var inst_48432 = cljs.core.seq(inst_48431);
var inst_48433 = inst_48432;
var inst_48434 = null;
var inst_48435 = (0);
var inst_48436 = (0);
var state_48515__$1 = (function (){var statearr_48580 = state_48515;
(statearr_48580[(12)] = inst_48436);

(statearr_48580[(13)] = inst_48435);

(statearr_48580[(15)] = inst_48433);

(statearr_48580[(16)] = inst_48434);

return statearr_48580;
})();
var statearr_48582_50007 = state_48515__$1;
(statearr_48582_50007[(2)] = null);

(statearr_48582_50007[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48516 === (14))){
var state_48515__$1 = state_48515;
var statearr_48588_50008 = state_48515__$1;
(statearr_48588_50008[(2)] = null);

(statearr_48588_50008[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48516 === (16))){
var inst_48449 = (state_48515[(10)]);
var inst_48469 = cljs.core.chunk_first(inst_48449);
var inst_48471 = cljs.core.chunk_rest(inst_48449);
var inst_48472 = cljs.core.count(inst_48469);
var inst_48433 = inst_48471;
var inst_48434 = inst_48469;
var inst_48435 = inst_48472;
var inst_48436 = (0);
var state_48515__$1 = (function (){var statearr_48591 = state_48515;
(statearr_48591[(12)] = inst_48436);

(statearr_48591[(13)] = inst_48435);

(statearr_48591[(15)] = inst_48433);

(statearr_48591[(16)] = inst_48434);

return statearr_48591;
})();
var statearr_48592_50009 = state_48515__$1;
(statearr_48592_50009[(2)] = null);

(statearr_48592_50009[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48516 === (10))){
var inst_48436 = (state_48515[(12)]);
var inst_48435 = (state_48515[(13)]);
var inst_48433 = (state_48515[(15)]);
var inst_48434 = (state_48515[(16)]);
var inst_48443 = cljs.core._nth(inst_48434,inst_48436);
var inst_48444 = cljs.core.async.muxch_STAR_(inst_48443);
var inst_48445 = cljs.core.async.close_BANG_(inst_48444);
var inst_48446 = (inst_48436 + (1));
var tmp48584 = inst_48435;
var tmp48585 = inst_48433;
var tmp48586 = inst_48434;
var inst_48433__$1 = tmp48585;
var inst_48434__$1 = tmp48586;
var inst_48435__$1 = tmp48584;
var inst_48436__$1 = inst_48446;
var state_48515__$1 = (function (){var statearr_48597 = state_48515;
(statearr_48597[(12)] = inst_48436__$1);

(statearr_48597[(13)] = inst_48435__$1);

(statearr_48597[(17)] = inst_48445);

(statearr_48597[(15)] = inst_48433__$1);

(statearr_48597[(16)] = inst_48434__$1);

return statearr_48597;
})();
var statearr_48601_50010 = state_48515__$1;
(statearr_48601_50010[(2)] = null);

(statearr_48601_50010[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48516 === (18))){
var inst_48481 = (state_48515[(2)]);
var state_48515__$1 = state_48515;
var statearr_48603_50011 = state_48515__$1;
(statearr_48603_50011[(2)] = inst_48481);

(statearr_48603_50011[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48516 === (8))){
var inst_48436 = (state_48515[(12)]);
var inst_48435 = (state_48515[(13)]);
var inst_48440 = (inst_48436 < inst_48435);
var inst_48441 = inst_48440;
var state_48515__$1 = state_48515;
if(cljs.core.truth_(inst_48441)){
var statearr_48604_50012 = state_48515__$1;
(statearr_48604_50012[(1)] = (10));

} else {
var statearr_48605_50013 = state_48515__$1;
(statearr_48605_50013[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46891__auto__ = null;
var cljs$core$async$state_machine__46891__auto____0 = (function (){
var statearr_48608 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48608[(0)] = cljs$core$async$state_machine__46891__auto__);

(statearr_48608[(1)] = (1));

return statearr_48608;
});
var cljs$core$async$state_machine__46891__auto____1 = (function (state_48515){
while(true){
var ret_value__46892__auto__ = (function (){try{while(true){
var result__46893__auto__ = switch__46890__auto__(state_48515);
if(cljs.core.keyword_identical_QMARK_(result__46893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46893__auto__;
}
break;
}
}catch (e48610){var ex__46894__auto__ = e48610;
var statearr_48612_50020 = state_48515;
(statearr_48612_50020[(2)] = ex__46894__auto__);


if(cljs.core.seq((state_48515[(4)]))){
var statearr_48613_50021 = state_48515;
(statearr_48613_50021[(1)] = cljs.core.first((state_48515[(4)])));

} else {
throw ex__46894__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50022 = state_48515;
state_48515 = G__50022;
continue;
} else {
return ret_value__46892__auto__;
}
break;
}
});
cljs$core$async$state_machine__46891__auto__ = function(state_48515){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46891__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46891__auto____1.call(this,state_48515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46891__auto____0;
cljs$core$async$state_machine__46891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46891__auto____1;
return cljs$core$async$state_machine__46891__auto__;
})()
})();
var state__47054__auto__ = (function (){var statearr_48615 = f__47053__auto__();
(statearr_48615[(6)] = c__47052__auto___49962);

return statearr_48615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47054__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__48622 = arguments.length;
switch (G__48622) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__48627 = arguments.length;
switch (G__48627) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__48630 = arguments.length;
switch (G__48630) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__47052__auto___50026 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47053__auto__ = (function (){var switch__46890__auto__ = (function (state_48678){
var state_val_48679 = (state_48678[(1)]);
if((state_val_48679 === (7))){
var state_48678__$1 = state_48678;
var statearr_48684_50029 = state_48678__$1;
(statearr_48684_50029[(2)] = null);

(statearr_48684_50029[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48679 === (1))){
var state_48678__$1 = state_48678;
var statearr_48688_50030 = state_48678__$1;
(statearr_48688_50030[(2)] = null);

(statearr_48688_50030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48679 === (4))){
var inst_48638 = (state_48678[(7)]);
var inst_48637 = (state_48678[(8)]);
var inst_48640 = (inst_48638 < inst_48637);
var state_48678__$1 = state_48678;
if(cljs.core.truth_(inst_48640)){
var statearr_48690_50031 = state_48678__$1;
(statearr_48690_50031[(1)] = (6));

} else {
var statearr_48691_50032 = state_48678__$1;
(statearr_48691_50032[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48679 === (15))){
var inst_48664 = (state_48678[(9)]);
var inst_48669 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_48664);
var state_48678__$1 = state_48678;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48678__$1,(17),out,inst_48669);
} else {
if((state_val_48679 === (13))){
var inst_48664 = (state_48678[(9)]);
var inst_48664__$1 = (state_48678[(2)]);
var inst_48665 = cljs.core.some(cljs.core.nil_QMARK_,inst_48664__$1);
var state_48678__$1 = (function (){var statearr_48696 = state_48678;
(statearr_48696[(9)] = inst_48664__$1);

return statearr_48696;
})();
if(cljs.core.truth_(inst_48665)){
var statearr_48697_50039 = state_48678__$1;
(statearr_48697_50039[(1)] = (14));

} else {
var statearr_48699_50040 = state_48678__$1;
(statearr_48699_50040[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48679 === (6))){
var state_48678__$1 = state_48678;
var statearr_48703_50041 = state_48678__$1;
(statearr_48703_50041[(2)] = null);

(statearr_48703_50041[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48679 === (17))){
var inst_48671 = (state_48678[(2)]);
var state_48678__$1 = (function (){var statearr_48714 = state_48678;
(statearr_48714[(10)] = inst_48671);

return statearr_48714;
})();
var statearr_48717_50042 = state_48678__$1;
(statearr_48717_50042[(2)] = null);

(statearr_48717_50042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48679 === (3))){
var inst_48676 = (state_48678[(2)]);
var state_48678__$1 = state_48678;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48678__$1,inst_48676);
} else {
if((state_val_48679 === (12))){
var _ = (function (){var statearr_48720 = state_48678;
(statearr_48720[(4)] = cljs.core.rest((state_48678[(4)])));

return statearr_48720;
})();
var state_48678__$1 = state_48678;
var ex48712 = (state_48678__$1[(2)]);
var statearr_48724_50044 = state_48678__$1;
(statearr_48724_50044[(5)] = ex48712);


if((ex48712 instanceof Object)){
var statearr_48727_50045 = state_48678__$1;
(statearr_48727_50045[(1)] = (11));

(statearr_48727_50045[(5)] = null);

} else {
throw ex48712;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48679 === (2))){
var inst_48636 = cljs.core.reset_BANG_(dctr,cnt);
var inst_48637 = cnt;
var inst_48638 = (0);
var state_48678__$1 = (function (){var statearr_48735 = state_48678;
(statearr_48735[(11)] = inst_48636);

(statearr_48735[(7)] = inst_48638);

(statearr_48735[(8)] = inst_48637);

return statearr_48735;
})();
var statearr_48736_50047 = state_48678__$1;
(statearr_48736_50047[(2)] = null);

(statearr_48736_50047[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48679 === (11))){
var inst_48642 = (state_48678[(2)]);
var inst_48644 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_48678__$1 = (function (){var statearr_48741 = state_48678;
(statearr_48741[(12)] = inst_48642);

return statearr_48741;
})();
var statearr_48742_50048 = state_48678__$1;
(statearr_48742_50048[(2)] = inst_48644);

(statearr_48742_50048[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48679 === (9))){
var inst_48638 = (state_48678[(7)]);
var _ = (function (){var statearr_48746 = state_48678;
(statearr_48746[(4)] = cljs.core.cons((12),(state_48678[(4)])));

return statearr_48746;
})();
var inst_48650 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_48638) : chs__$1.call(null,inst_48638));
var inst_48651 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_48638) : done.call(null,inst_48638));
var inst_48652 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_48650,inst_48651);
var ___$1 = (function (){var statearr_48752 = state_48678;
(statearr_48752[(4)] = cljs.core.rest((state_48678[(4)])));

return statearr_48752;
})();
var state_48678__$1 = state_48678;
var statearr_48753_50049 = state_48678__$1;
(statearr_48753_50049[(2)] = inst_48652);

(statearr_48753_50049[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48679 === (5))){
var inst_48662 = (state_48678[(2)]);
var state_48678__$1 = (function (){var statearr_48757 = state_48678;
(statearr_48757[(13)] = inst_48662);

return statearr_48757;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48678__$1,(13),dchan);
} else {
if((state_val_48679 === (14))){
var inst_48667 = cljs.core.async.close_BANG_(out);
var state_48678__$1 = state_48678;
var statearr_48761_50050 = state_48678__$1;
(statearr_48761_50050[(2)] = inst_48667);

(statearr_48761_50050[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48679 === (16))){
var inst_48674 = (state_48678[(2)]);
var state_48678__$1 = state_48678;
var statearr_48768_50051 = state_48678__$1;
(statearr_48768_50051[(2)] = inst_48674);

(statearr_48768_50051[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48679 === (10))){
var inst_48638 = (state_48678[(7)]);
var inst_48655 = (state_48678[(2)]);
var inst_48656 = (inst_48638 + (1));
var inst_48638__$1 = inst_48656;
var state_48678__$1 = (function (){var statearr_48771 = state_48678;
(statearr_48771[(14)] = inst_48655);

(statearr_48771[(7)] = inst_48638__$1);

return statearr_48771;
})();
var statearr_48772_50052 = state_48678__$1;
(statearr_48772_50052[(2)] = null);

(statearr_48772_50052[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48679 === (8))){
var inst_48660 = (state_48678[(2)]);
var state_48678__$1 = state_48678;
var statearr_48776_50053 = state_48678__$1;
(statearr_48776_50053[(2)] = inst_48660);

(statearr_48776_50053[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46891__auto__ = null;
var cljs$core$async$state_machine__46891__auto____0 = (function (){
var statearr_48778 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48778[(0)] = cljs$core$async$state_machine__46891__auto__);

(statearr_48778[(1)] = (1));

return statearr_48778;
});
var cljs$core$async$state_machine__46891__auto____1 = (function (state_48678){
while(true){
var ret_value__46892__auto__ = (function (){try{while(true){
var result__46893__auto__ = switch__46890__auto__(state_48678);
if(cljs.core.keyword_identical_QMARK_(result__46893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46893__auto__;
}
break;
}
}catch (e48782){var ex__46894__auto__ = e48782;
var statearr_48783_50054 = state_48678;
(statearr_48783_50054[(2)] = ex__46894__auto__);


if(cljs.core.seq((state_48678[(4)]))){
var statearr_48784_50056 = state_48678;
(statearr_48784_50056[(1)] = cljs.core.first((state_48678[(4)])));

} else {
throw ex__46894__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50063 = state_48678;
state_48678 = G__50063;
continue;
} else {
return ret_value__46892__auto__;
}
break;
}
});
cljs$core$async$state_machine__46891__auto__ = function(state_48678){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46891__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46891__auto____1.call(this,state_48678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46891__auto____0;
cljs$core$async$state_machine__46891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46891__auto____1;
return cljs$core$async$state_machine__46891__auto__;
})()
})();
var state__47054__auto__ = (function (){var statearr_48789 = f__47053__auto__();
(statearr_48789[(6)] = c__47052__auto___50026);

return statearr_48789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47054__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__48796 = arguments.length;
switch (G__48796) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__47052__auto___50066 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47053__auto__ = (function (){var switch__46890__auto__ = (function (state_48843){
var state_val_48844 = (state_48843[(1)]);
if((state_val_48844 === (7))){
var inst_48815 = (state_48843[(7)]);
var inst_48816 = (state_48843[(8)]);
var inst_48815__$1 = (state_48843[(2)]);
var inst_48816__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48815__$1,(0),null);
var inst_48817 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48815__$1,(1),null);
var inst_48819 = (inst_48816__$1 == null);
var state_48843__$1 = (function (){var statearr_48845 = state_48843;
(statearr_48845[(7)] = inst_48815__$1);

(statearr_48845[(9)] = inst_48817);

(statearr_48845[(8)] = inst_48816__$1);

return statearr_48845;
})();
if(cljs.core.truth_(inst_48819)){
var statearr_48846_50067 = state_48843__$1;
(statearr_48846_50067[(1)] = (8));

} else {
var statearr_48847_50068 = state_48843__$1;
(statearr_48847_50068[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48844 === (1))){
var inst_48802 = cljs.core.vec(chs);
var inst_48804 = inst_48802;
var state_48843__$1 = (function (){var statearr_48848 = state_48843;
(statearr_48848[(10)] = inst_48804);

return statearr_48848;
})();
var statearr_48849_50078 = state_48843__$1;
(statearr_48849_50078[(2)] = null);

(statearr_48849_50078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48844 === (4))){
var inst_48804 = (state_48843[(10)]);
var state_48843__$1 = state_48843;
return cljs.core.async.ioc_alts_BANG_(state_48843__$1,(7),inst_48804);
} else {
if((state_val_48844 === (6))){
var inst_48836 = (state_48843[(2)]);
var state_48843__$1 = state_48843;
var statearr_48850_50079 = state_48843__$1;
(statearr_48850_50079[(2)] = inst_48836);

(statearr_48850_50079[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48844 === (3))){
var inst_48838 = (state_48843[(2)]);
var state_48843__$1 = state_48843;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48843__$1,inst_48838);
} else {
if((state_val_48844 === (2))){
var inst_48804 = (state_48843[(10)]);
var inst_48808 = cljs.core.count(inst_48804);
var inst_48809 = (inst_48808 > (0));
var state_48843__$1 = state_48843;
if(cljs.core.truth_(inst_48809)){
var statearr_48854_50080 = state_48843__$1;
(statearr_48854_50080[(1)] = (4));

} else {
var statearr_48855_50081 = state_48843__$1;
(statearr_48855_50081[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48844 === (11))){
var inst_48804 = (state_48843[(10)]);
var inst_48829 = (state_48843[(2)]);
var tmp48851 = inst_48804;
var inst_48804__$1 = tmp48851;
var state_48843__$1 = (function (){var statearr_48856 = state_48843;
(statearr_48856[(10)] = inst_48804__$1);

(statearr_48856[(11)] = inst_48829);

return statearr_48856;
})();
var statearr_48857_50082 = state_48843__$1;
(statearr_48857_50082[(2)] = null);

(statearr_48857_50082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48844 === (9))){
var inst_48816 = (state_48843[(8)]);
var state_48843__$1 = state_48843;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48843__$1,(11),out,inst_48816);
} else {
if((state_val_48844 === (5))){
var inst_48834 = cljs.core.async.close_BANG_(out);
var state_48843__$1 = state_48843;
var statearr_48858_50083 = state_48843__$1;
(statearr_48858_50083[(2)] = inst_48834);

(statearr_48858_50083[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48844 === (10))){
var inst_48832 = (state_48843[(2)]);
var state_48843__$1 = state_48843;
var statearr_48859_50088 = state_48843__$1;
(statearr_48859_50088[(2)] = inst_48832);

(statearr_48859_50088[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48844 === (8))){
var inst_48815 = (state_48843[(7)]);
var inst_48804 = (state_48843[(10)]);
var inst_48817 = (state_48843[(9)]);
var inst_48816 = (state_48843[(8)]);
var inst_48821 = (function (){var cs = inst_48804;
var vec__48811 = inst_48815;
var v = inst_48816;
var c = inst_48817;
return (function (p1__48792_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__48792_SHARP_);
});
})();
var inst_48825 = cljs.core.filterv(inst_48821,inst_48804);
var inst_48804__$1 = inst_48825;
var state_48843__$1 = (function (){var statearr_48860 = state_48843;
(statearr_48860[(10)] = inst_48804__$1);

return statearr_48860;
})();
var statearr_48861_50090 = state_48843__$1;
(statearr_48861_50090[(2)] = null);

(statearr_48861_50090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46891__auto__ = null;
var cljs$core$async$state_machine__46891__auto____0 = (function (){
var statearr_48866 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48866[(0)] = cljs$core$async$state_machine__46891__auto__);

(statearr_48866[(1)] = (1));

return statearr_48866;
});
var cljs$core$async$state_machine__46891__auto____1 = (function (state_48843){
while(true){
var ret_value__46892__auto__ = (function (){try{while(true){
var result__46893__auto__ = switch__46890__auto__(state_48843);
if(cljs.core.keyword_identical_QMARK_(result__46893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46893__auto__;
}
break;
}
}catch (e48867){var ex__46894__auto__ = e48867;
var statearr_48868_50098 = state_48843;
(statearr_48868_50098[(2)] = ex__46894__auto__);


if(cljs.core.seq((state_48843[(4)]))){
var statearr_48873_50103 = state_48843;
(statearr_48873_50103[(1)] = cljs.core.first((state_48843[(4)])));

} else {
throw ex__46894__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50104 = state_48843;
state_48843 = G__50104;
continue;
} else {
return ret_value__46892__auto__;
}
break;
}
});
cljs$core$async$state_machine__46891__auto__ = function(state_48843){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46891__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46891__auto____1.call(this,state_48843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46891__auto____0;
cljs$core$async$state_machine__46891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46891__auto____1;
return cljs$core$async$state_machine__46891__auto__;
})()
})();
var state__47054__auto__ = (function (){var statearr_48875 = f__47053__auto__();
(statearr_48875[(6)] = c__47052__auto___50066);

return statearr_48875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47054__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__48885 = arguments.length;
switch (G__48885) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__47052__auto___50107 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47053__auto__ = (function (){var switch__46890__auto__ = (function (state_48917){
var state_val_48918 = (state_48917[(1)]);
if((state_val_48918 === (7))){
var inst_48895 = (state_48917[(7)]);
var inst_48895__$1 = (state_48917[(2)]);
var inst_48896 = (inst_48895__$1 == null);
var inst_48897 = cljs.core.not(inst_48896);
var state_48917__$1 = (function (){var statearr_48923 = state_48917;
(statearr_48923[(7)] = inst_48895__$1);

return statearr_48923;
})();
if(inst_48897){
var statearr_48924_50108 = state_48917__$1;
(statearr_48924_50108[(1)] = (8));

} else {
var statearr_48925_50109 = state_48917__$1;
(statearr_48925_50109[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48918 === (1))){
var inst_48890 = (0);
var state_48917__$1 = (function (){var statearr_48926 = state_48917;
(statearr_48926[(8)] = inst_48890);

return statearr_48926;
})();
var statearr_48927_50110 = state_48917__$1;
(statearr_48927_50110[(2)] = null);

(statearr_48927_50110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48918 === (4))){
var state_48917__$1 = state_48917;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48917__$1,(7),ch);
} else {
if((state_val_48918 === (6))){
var inst_48911 = (state_48917[(2)]);
var state_48917__$1 = state_48917;
var statearr_48929_50111 = state_48917__$1;
(statearr_48929_50111[(2)] = inst_48911);

(statearr_48929_50111[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48918 === (3))){
var inst_48913 = (state_48917[(2)]);
var inst_48914 = cljs.core.async.close_BANG_(out);
var state_48917__$1 = (function (){var statearr_48930 = state_48917;
(statearr_48930[(9)] = inst_48913);

return statearr_48930;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48917__$1,inst_48914);
} else {
if((state_val_48918 === (2))){
var inst_48890 = (state_48917[(8)]);
var inst_48892 = (inst_48890 < n);
var state_48917__$1 = state_48917;
if(cljs.core.truth_(inst_48892)){
var statearr_48931_50114 = state_48917__$1;
(statearr_48931_50114[(1)] = (4));

} else {
var statearr_48932_50115 = state_48917__$1;
(statearr_48932_50115[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48918 === (11))){
var inst_48890 = (state_48917[(8)]);
var inst_48903 = (state_48917[(2)]);
var inst_48904 = (inst_48890 + (1));
var inst_48890__$1 = inst_48904;
var state_48917__$1 = (function (){var statearr_48933 = state_48917;
(statearr_48933[(10)] = inst_48903);

(statearr_48933[(8)] = inst_48890__$1);

return statearr_48933;
})();
var statearr_48934_50116 = state_48917__$1;
(statearr_48934_50116[(2)] = null);

(statearr_48934_50116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48918 === (9))){
var state_48917__$1 = state_48917;
var statearr_48939_50120 = state_48917__$1;
(statearr_48939_50120[(2)] = null);

(statearr_48939_50120[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48918 === (5))){
var state_48917__$1 = state_48917;
var statearr_48943_50123 = state_48917__$1;
(statearr_48943_50123[(2)] = null);

(statearr_48943_50123[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48918 === (10))){
var inst_48908 = (state_48917[(2)]);
var state_48917__$1 = state_48917;
var statearr_48944_50124 = state_48917__$1;
(statearr_48944_50124[(2)] = inst_48908);

(statearr_48944_50124[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48918 === (8))){
var inst_48895 = (state_48917[(7)]);
var state_48917__$1 = state_48917;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48917__$1,(11),out,inst_48895);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46891__auto__ = null;
var cljs$core$async$state_machine__46891__auto____0 = (function (){
var statearr_48946 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48946[(0)] = cljs$core$async$state_machine__46891__auto__);

(statearr_48946[(1)] = (1));

return statearr_48946;
});
var cljs$core$async$state_machine__46891__auto____1 = (function (state_48917){
while(true){
var ret_value__46892__auto__ = (function (){try{while(true){
var result__46893__auto__ = switch__46890__auto__(state_48917);
if(cljs.core.keyword_identical_QMARK_(result__46893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46893__auto__;
}
break;
}
}catch (e48947){var ex__46894__auto__ = e48947;
var statearr_48951_50145 = state_48917;
(statearr_48951_50145[(2)] = ex__46894__auto__);


if(cljs.core.seq((state_48917[(4)]))){
var statearr_48953_50146 = state_48917;
(statearr_48953_50146[(1)] = cljs.core.first((state_48917[(4)])));

} else {
throw ex__46894__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50147 = state_48917;
state_48917 = G__50147;
continue;
} else {
return ret_value__46892__auto__;
}
break;
}
});
cljs$core$async$state_machine__46891__auto__ = function(state_48917){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46891__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46891__auto____1.call(this,state_48917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46891__auto____0;
cljs$core$async$state_machine__46891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46891__auto____1;
return cljs$core$async$state_machine__46891__auto__;
})()
})();
var state__47054__auto__ = (function (){var statearr_48954 = f__47053__auto__();
(statearr_48954[(6)] = c__47052__auto___50107);

return statearr_48954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47054__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48960 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48960 = (function (f,ch,meta48961){
this.f = f;
this.ch = ch;
this.meta48961 = meta48961;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48960.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48962,meta48961__$1){
var self__ = this;
var _48962__$1 = this;
return (new cljs.core.async.t_cljs$core$async48960(self__.f,self__.ch,meta48961__$1));
}));

(cljs.core.async.t_cljs$core$async48960.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48962){
var self__ = this;
var _48962__$1 = this;
return self__.meta48961;
}));

(cljs.core.async.t_cljs$core$async48960.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48960.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48960.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48960.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48960.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48968 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48968 = (function (f,ch,meta48961,_,fn1,meta48969){
this.f = f;
this.ch = ch;
this.meta48961 = meta48961;
this._ = _;
this.fn1 = fn1;
this.meta48969 = meta48969;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48968.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48970,meta48969__$1){
var self__ = this;
var _48970__$1 = this;
return (new cljs.core.async.t_cljs$core$async48968(self__.f,self__.ch,self__.meta48961,self__._,self__.fn1,meta48969__$1));
}));

(cljs.core.async.t_cljs$core$async48968.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48970){
var self__ = this;
var _48970__$1 = this;
return self__.meta48969;
}));

(cljs.core.async.t_cljs$core$async48968.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48968.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async48968.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async48968.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__48959_SHARP_){
var G__48979 = (((p1__48959_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__48959_SHARP_) : self__.f.call(null,p1__48959_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__48979) : f1.call(null,G__48979));
});
}));

(cljs.core.async.t_cljs$core$async48968.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48961","meta48961",-1982148376,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async48960","cljs.core.async/t_cljs$core$async48960",1379056652,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta48969","meta48969",453532237,null)], null);
}));

(cljs.core.async.t_cljs$core$async48968.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48968.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48968");

(cljs.core.async.t_cljs$core$async48968.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async48968");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48968.
 */
cljs.core.async.__GT_t_cljs$core$async48968 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48968(f__$1,ch__$1,meta48961__$1,___$2,fn1__$1,meta48969){
return (new cljs.core.async.t_cljs$core$async48968(f__$1,ch__$1,meta48961__$1,___$2,fn1__$1,meta48969));
});

}

return (new cljs.core.async.t_cljs$core$async48968(self__.f,self__.ch,self__.meta48961,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4210__auto__ = ret;
if(cljs.core.truth_(and__4210__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4210__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__48987 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__48987) : self__.f.call(null,G__48987));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async48960.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48960.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async48960.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48961","meta48961",-1982148376,null)], null);
}));

(cljs.core.async.t_cljs$core$async48960.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48960.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48960");

(cljs.core.async.t_cljs$core$async48960.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async48960");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48960.
 */
cljs.core.async.__GT_t_cljs$core$async48960 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48960(f__$1,ch__$1,meta48961){
return (new cljs.core.async.t_cljs$core$async48960(f__$1,ch__$1,meta48961));
});

}

return (new cljs.core.async.t_cljs$core$async48960(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48994 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48994 = (function (f,ch,meta48995){
this.f = f;
this.ch = ch;
this.meta48995 = meta48995;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48994.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48996,meta48995__$1){
var self__ = this;
var _48996__$1 = this;
return (new cljs.core.async.t_cljs$core$async48994(self__.f,self__.ch,meta48995__$1));
}));

(cljs.core.async.t_cljs$core$async48994.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48996){
var self__ = this;
var _48996__$1 = this;
return self__.meta48995;
}));

(cljs.core.async.t_cljs$core$async48994.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48994.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48994.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48994.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async48994.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48994.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async48994.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48995","meta48995",-1609624484,null)], null);
}));

(cljs.core.async.t_cljs$core$async48994.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48994.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48994");

(cljs.core.async.t_cljs$core$async48994.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async48994");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48994.
 */
cljs.core.async.__GT_t_cljs$core$async48994 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async48994(f__$1,ch__$1,meta48995){
return (new cljs.core.async.t_cljs$core$async48994(f__$1,ch__$1,meta48995));
});

}

return (new cljs.core.async.t_cljs$core$async48994(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49013 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49013 = (function (p,ch,meta49014){
this.p = p;
this.ch = ch;
this.meta49014 = meta49014;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49013.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49015,meta49014__$1){
var self__ = this;
var _49015__$1 = this;
return (new cljs.core.async.t_cljs$core$async49013(self__.p,self__.ch,meta49014__$1));
}));

(cljs.core.async.t_cljs$core$async49013.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49015){
var self__ = this;
var _49015__$1 = this;
return self__.meta49014;
}));

(cljs.core.async.t_cljs$core$async49013.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49013.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49013.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49013.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49013.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async49013.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49013.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async49013.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49014","meta49014",-67207450,null)], null);
}));

(cljs.core.async.t_cljs$core$async49013.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49013.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49013");

(cljs.core.async.t_cljs$core$async49013.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async49013");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49013.
 */
cljs.core.async.__GT_t_cljs$core$async49013 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async49013(p__$1,ch__$1,meta49014){
return (new cljs.core.async.t_cljs$core$async49013(p__$1,ch__$1,meta49014));
});

}

return (new cljs.core.async.t_cljs$core$async49013(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__49026 = arguments.length;
switch (G__49026) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__47052__auto___50210 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47053__auto__ = (function (){var switch__46890__auto__ = (function (state_49047){
var state_val_49048 = (state_49047[(1)]);
if((state_val_49048 === (7))){
var inst_49043 = (state_49047[(2)]);
var state_49047__$1 = state_49047;
var statearr_49049_50211 = state_49047__$1;
(statearr_49049_50211[(2)] = inst_49043);

(statearr_49049_50211[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49048 === (1))){
var state_49047__$1 = state_49047;
var statearr_49050_50212 = state_49047__$1;
(statearr_49050_50212[(2)] = null);

(statearr_49050_50212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49048 === (4))){
var inst_49029 = (state_49047[(7)]);
var inst_49029__$1 = (state_49047[(2)]);
var inst_49030 = (inst_49029__$1 == null);
var state_49047__$1 = (function (){var statearr_49052 = state_49047;
(statearr_49052[(7)] = inst_49029__$1);

return statearr_49052;
})();
if(cljs.core.truth_(inst_49030)){
var statearr_49054_50213 = state_49047__$1;
(statearr_49054_50213[(1)] = (5));

} else {
var statearr_49055_50214 = state_49047__$1;
(statearr_49055_50214[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49048 === (6))){
var inst_49029 = (state_49047[(7)]);
var inst_49034 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_49029) : p.call(null,inst_49029));
var state_49047__$1 = state_49047;
if(cljs.core.truth_(inst_49034)){
var statearr_49056_50216 = state_49047__$1;
(statearr_49056_50216[(1)] = (8));

} else {
var statearr_49057_50217 = state_49047__$1;
(statearr_49057_50217[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49048 === (3))){
var inst_49045 = (state_49047[(2)]);
var state_49047__$1 = state_49047;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49047__$1,inst_49045);
} else {
if((state_val_49048 === (2))){
var state_49047__$1 = state_49047;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49047__$1,(4),ch);
} else {
if((state_val_49048 === (11))){
var inst_49037 = (state_49047[(2)]);
var state_49047__$1 = state_49047;
var statearr_49058_50220 = state_49047__$1;
(statearr_49058_50220[(2)] = inst_49037);

(statearr_49058_50220[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49048 === (9))){
var state_49047__$1 = state_49047;
var statearr_49059_50222 = state_49047__$1;
(statearr_49059_50222[(2)] = null);

(statearr_49059_50222[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49048 === (5))){
var inst_49032 = cljs.core.async.close_BANG_(out);
var state_49047__$1 = state_49047;
var statearr_49060_50223 = state_49047__$1;
(statearr_49060_50223[(2)] = inst_49032);

(statearr_49060_50223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49048 === (10))){
var inst_49040 = (state_49047[(2)]);
var state_49047__$1 = (function (){var statearr_49061 = state_49047;
(statearr_49061[(8)] = inst_49040);

return statearr_49061;
})();
var statearr_49062_50224 = state_49047__$1;
(statearr_49062_50224[(2)] = null);

(statearr_49062_50224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49048 === (8))){
var inst_49029 = (state_49047[(7)]);
var state_49047__$1 = state_49047;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49047__$1,(11),out,inst_49029);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46891__auto__ = null;
var cljs$core$async$state_machine__46891__auto____0 = (function (){
var statearr_49063 = [null,null,null,null,null,null,null,null,null];
(statearr_49063[(0)] = cljs$core$async$state_machine__46891__auto__);

(statearr_49063[(1)] = (1));

return statearr_49063;
});
var cljs$core$async$state_machine__46891__auto____1 = (function (state_49047){
while(true){
var ret_value__46892__auto__ = (function (){try{while(true){
var result__46893__auto__ = switch__46890__auto__(state_49047);
if(cljs.core.keyword_identical_QMARK_(result__46893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46893__auto__;
}
break;
}
}catch (e49064){var ex__46894__auto__ = e49064;
var statearr_49065_50225 = state_49047;
(statearr_49065_50225[(2)] = ex__46894__auto__);


if(cljs.core.seq((state_49047[(4)]))){
var statearr_49066_50226 = state_49047;
(statearr_49066_50226[(1)] = cljs.core.first((state_49047[(4)])));

} else {
throw ex__46894__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50227 = state_49047;
state_49047 = G__50227;
continue;
} else {
return ret_value__46892__auto__;
}
break;
}
});
cljs$core$async$state_machine__46891__auto__ = function(state_49047){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46891__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46891__auto____1.call(this,state_49047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46891__auto____0;
cljs$core$async$state_machine__46891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46891__auto____1;
return cljs$core$async$state_machine__46891__auto__;
})()
})();
var state__47054__auto__ = (function (){var statearr_49067 = f__47053__auto__();
(statearr_49067[(6)] = c__47052__auto___50210);

return statearr_49067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47054__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__49069 = arguments.length;
switch (G__49069) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__47052__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47053__auto__ = (function (){var switch__46890__auto__ = (function (state_49134){
var state_val_49135 = (state_49134[(1)]);
if((state_val_49135 === (7))){
var inst_49130 = (state_49134[(2)]);
var state_49134__$1 = state_49134;
var statearr_49137_50239 = state_49134__$1;
(statearr_49137_50239[(2)] = inst_49130);

(statearr_49137_50239[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49135 === (20))){
var inst_49097 = (state_49134[(7)]);
var inst_49108 = (state_49134[(2)]);
var inst_49109 = cljs.core.next(inst_49097);
var inst_49083 = inst_49109;
var inst_49084 = null;
var inst_49085 = (0);
var inst_49086 = (0);
var state_49134__$1 = (function (){var statearr_49138 = state_49134;
(statearr_49138[(8)] = inst_49083);

(statearr_49138[(9)] = inst_49085);

(statearr_49138[(10)] = inst_49086);

(statearr_49138[(11)] = inst_49084);

(statearr_49138[(12)] = inst_49108);

return statearr_49138;
})();
var statearr_49140_50240 = state_49134__$1;
(statearr_49140_50240[(2)] = null);

(statearr_49140_50240[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49135 === (1))){
var state_49134__$1 = state_49134;
var statearr_49142_50241 = state_49134__$1;
(statearr_49142_50241[(2)] = null);

(statearr_49142_50241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49135 === (4))){
var inst_49072 = (state_49134[(13)]);
var inst_49072__$1 = (state_49134[(2)]);
var inst_49073 = (inst_49072__$1 == null);
var state_49134__$1 = (function (){var statearr_49143 = state_49134;
(statearr_49143[(13)] = inst_49072__$1);

return statearr_49143;
})();
if(cljs.core.truth_(inst_49073)){
var statearr_49144_50242 = state_49134__$1;
(statearr_49144_50242[(1)] = (5));

} else {
var statearr_49145_50243 = state_49134__$1;
(statearr_49145_50243[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49135 === (15))){
var state_49134__$1 = state_49134;
var statearr_49149_50244 = state_49134__$1;
(statearr_49149_50244[(2)] = null);

(statearr_49149_50244[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49135 === (21))){
var state_49134__$1 = state_49134;
var statearr_49150_50245 = state_49134__$1;
(statearr_49150_50245[(2)] = null);

(statearr_49150_50245[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49135 === (13))){
var inst_49083 = (state_49134[(8)]);
var inst_49085 = (state_49134[(9)]);
var inst_49086 = (state_49134[(10)]);
var inst_49084 = (state_49134[(11)]);
var inst_49093 = (state_49134[(2)]);
var inst_49094 = (inst_49086 + (1));
var tmp49146 = inst_49083;
var tmp49147 = inst_49085;
var tmp49148 = inst_49084;
var inst_49083__$1 = tmp49146;
var inst_49084__$1 = tmp49148;
var inst_49085__$1 = tmp49147;
var inst_49086__$1 = inst_49094;
var state_49134__$1 = (function (){var statearr_49151 = state_49134;
(statearr_49151[(8)] = inst_49083__$1);

(statearr_49151[(9)] = inst_49085__$1);

(statearr_49151[(10)] = inst_49086__$1);

(statearr_49151[(14)] = inst_49093);

(statearr_49151[(11)] = inst_49084__$1);

return statearr_49151;
})();
var statearr_49152_50247 = state_49134__$1;
(statearr_49152_50247[(2)] = null);

(statearr_49152_50247[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49135 === (22))){
var state_49134__$1 = state_49134;
var statearr_49153_50248 = state_49134__$1;
(statearr_49153_50248[(2)] = null);

(statearr_49153_50248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49135 === (6))){
var inst_49072 = (state_49134[(13)]);
var inst_49081 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_49072) : f.call(null,inst_49072));
var inst_49082 = cljs.core.seq(inst_49081);
var inst_49083 = inst_49082;
var inst_49084 = null;
var inst_49085 = (0);
var inst_49086 = (0);
var state_49134__$1 = (function (){var statearr_49154 = state_49134;
(statearr_49154[(8)] = inst_49083);

(statearr_49154[(9)] = inst_49085);

(statearr_49154[(10)] = inst_49086);

(statearr_49154[(11)] = inst_49084);

return statearr_49154;
})();
var statearr_49155_50250 = state_49134__$1;
(statearr_49155_50250[(2)] = null);

(statearr_49155_50250[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49135 === (17))){
var inst_49097 = (state_49134[(7)]);
var inst_49101 = cljs.core.chunk_first(inst_49097);
var inst_49102 = cljs.core.chunk_rest(inst_49097);
var inst_49103 = cljs.core.count(inst_49101);
var inst_49083 = inst_49102;
var inst_49084 = inst_49101;
var inst_49085 = inst_49103;
var inst_49086 = (0);
var state_49134__$1 = (function (){var statearr_49165 = state_49134;
(statearr_49165[(8)] = inst_49083);

(statearr_49165[(9)] = inst_49085);

(statearr_49165[(10)] = inst_49086);

(statearr_49165[(11)] = inst_49084);

return statearr_49165;
})();
var statearr_49166_50255 = state_49134__$1;
(statearr_49166_50255[(2)] = null);

(statearr_49166_50255[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49135 === (3))){
var inst_49132 = (state_49134[(2)]);
var state_49134__$1 = state_49134;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49134__$1,inst_49132);
} else {
if((state_val_49135 === (12))){
var inst_49117 = (state_49134[(2)]);
var state_49134__$1 = state_49134;
var statearr_49172_50261 = state_49134__$1;
(statearr_49172_50261[(2)] = inst_49117);

(statearr_49172_50261[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49135 === (2))){
var state_49134__$1 = state_49134;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49134__$1,(4),in$);
} else {
if((state_val_49135 === (23))){
var inst_49128 = (state_49134[(2)]);
var state_49134__$1 = state_49134;
var statearr_49173_50262 = state_49134__$1;
(statearr_49173_50262[(2)] = inst_49128);

(statearr_49173_50262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49135 === (19))){
var inst_49112 = (state_49134[(2)]);
var state_49134__$1 = state_49134;
var statearr_49174_50263 = state_49134__$1;
(statearr_49174_50263[(2)] = inst_49112);

(statearr_49174_50263[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49135 === (11))){
var inst_49097 = (state_49134[(7)]);
var inst_49083 = (state_49134[(8)]);
var inst_49097__$1 = cljs.core.seq(inst_49083);
var state_49134__$1 = (function (){var statearr_49175 = state_49134;
(statearr_49175[(7)] = inst_49097__$1);

return statearr_49175;
})();
if(inst_49097__$1){
var statearr_49176_50264 = state_49134__$1;
(statearr_49176_50264[(1)] = (14));

} else {
var statearr_49177_50265 = state_49134__$1;
(statearr_49177_50265[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49135 === (9))){
var inst_49119 = (state_49134[(2)]);
var inst_49120 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_49134__$1 = (function (){var statearr_49178 = state_49134;
(statearr_49178[(15)] = inst_49119);

return statearr_49178;
})();
if(cljs.core.truth_(inst_49120)){
var statearr_49179_50266 = state_49134__$1;
(statearr_49179_50266[(1)] = (21));

} else {
var statearr_49180_50267 = state_49134__$1;
(statearr_49180_50267[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49135 === (5))){
var inst_49075 = cljs.core.async.close_BANG_(out);
var state_49134__$1 = state_49134;
var statearr_49187_50268 = state_49134__$1;
(statearr_49187_50268[(2)] = inst_49075);

(statearr_49187_50268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49135 === (14))){
var inst_49097 = (state_49134[(7)]);
var inst_49099 = cljs.core.chunked_seq_QMARK_(inst_49097);
var state_49134__$1 = state_49134;
if(inst_49099){
var statearr_49195_50269 = state_49134__$1;
(statearr_49195_50269[(1)] = (17));

} else {
var statearr_49196_50270 = state_49134__$1;
(statearr_49196_50270[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49135 === (16))){
var inst_49115 = (state_49134[(2)]);
var state_49134__$1 = state_49134;
var statearr_49203_50271 = state_49134__$1;
(statearr_49203_50271[(2)] = inst_49115);

(statearr_49203_50271[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49135 === (10))){
var inst_49086 = (state_49134[(10)]);
var inst_49084 = (state_49134[(11)]);
var inst_49091 = cljs.core._nth(inst_49084,inst_49086);
var state_49134__$1 = state_49134;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49134__$1,(13),out,inst_49091);
} else {
if((state_val_49135 === (18))){
var inst_49097 = (state_49134[(7)]);
var inst_49106 = cljs.core.first(inst_49097);
var state_49134__$1 = state_49134;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49134__$1,(20),out,inst_49106);
} else {
if((state_val_49135 === (8))){
var inst_49085 = (state_49134[(9)]);
var inst_49086 = (state_49134[(10)]);
var inst_49088 = (inst_49086 < inst_49085);
var inst_49089 = inst_49088;
var state_49134__$1 = state_49134;
if(cljs.core.truth_(inst_49089)){
var statearr_49204_50274 = state_49134__$1;
(statearr_49204_50274[(1)] = (10));

} else {
var statearr_49205_50277 = state_49134__$1;
(statearr_49205_50277[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__46891__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__46891__auto____0 = (function (){
var statearr_49206 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49206[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__46891__auto__);

(statearr_49206[(1)] = (1));

return statearr_49206;
});
var cljs$core$async$mapcat_STAR__$_state_machine__46891__auto____1 = (function (state_49134){
while(true){
var ret_value__46892__auto__ = (function (){try{while(true){
var result__46893__auto__ = switch__46890__auto__(state_49134);
if(cljs.core.keyword_identical_QMARK_(result__46893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46893__auto__;
}
break;
}
}catch (e49211){var ex__46894__auto__ = e49211;
var statearr_49215_50283 = state_49134;
(statearr_49215_50283[(2)] = ex__46894__auto__);


if(cljs.core.seq((state_49134[(4)]))){
var statearr_49216_50284 = state_49134;
(statearr_49216_50284[(1)] = cljs.core.first((state_49134[(4)])));

} else {
throw ex__46894__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50285 = state_49134;
state_49134 = G__50285;
continue;
} else {
return ret_value__46892__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__46891__auto__ = function(state_49134){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__46891__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__46891__auto____1.call(this,state_49134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__46891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__46891__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__46891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__46891__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__46891__auto__;
})()
})();
var state__47054__auto__ = (function (){var statearr_49220 = f__47053__auto__();
(statearr_49220[(6)] = c__47052__auto__);

return statearr_49220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47054__auto__);
}));

return c__47052__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__49229 = arguments.length;
switch (G__49229) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__49235 = arguments.length;
switch (G__49235) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__49241 = arguments.length;
switch (G__49241) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__47052__auto___50294 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47053__auto__ = (function (){var switch__46890__auto__ = (function (state_49267){
var state_val_49268 = (state_49267[(1)]);
if((state_val_49268 === (7))){
var inst_49262 = (state_49267[(2)]);
var state_49267__$1 = state_49267;
var statearr_49270_50298 = state_49267__$1;
(statearr_49270_50298[(2)] = inst_49262);

(statearr_49270_50298[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49268 === (1))){
var inst_49242 = null;
var state_49267__$1 = (function (){var statearr_49271 = state_49267;
(statearr_49271[(7)] = inst_49242);

return statearr_49271;
})();
var statearr_49272_50299 = state_49267__$1;
(statearr_49272_50299[(2)] = null);

(statearr_49272_50299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49268 === (4))){
var inst_49245 = (state_49267[(8)]);
var inst_49245__$1 = (state_49267[(2)]);
var inst_49248 = (inst_49245__$1 == null);
var inst_49249 = cljs.core.not(inst_49248);
var state_49267__$1 = (function (){var statearr_49274 = state_49267;
(statearr_49274[(8)] = inst_49245__$1);

return statearr_49274;
})();
if(inst_49249){
var statearr_49275_50304 = state_49267__$1;
(statearr_49275_50304[(1)] = (5));

} else {
var statearr_49279_50305 = state_49267__$1;
(statearr_49279_50305[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49268 === (6))){
var state_49267__$1 = state_49267;
var statearr_49280_50309 = state_49267__$1;
(statearr_49280_50309[(2)] = null);

(statearr_49280_50309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49268 === (3))){
var inst_49264 = (state_49267[(2)]);
var inst_49265 = cljs.core.async.close_BANG_(out);
var state_49267__$1 = (function (){var statearr_49281 = state_49267;
(statearr_49281[(9)] = inst_49264);

return statearr_49281;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49267__$1,inst_49265);
} else {
if((state_val_49268 === (2))){
var state_49267__$1 = state_49267;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49267__$1,(4),ch);
} else {
if((state_val_49268 === (11))){
var inst_49245 = (state_49267[(8)]);
var inst_49256 = (state_49267[(2)]);
var inst_49242 = inst_49245;
var state_49267__$1 = (function (){var statearr_49282 = state_49267;
(statearr_49282[(7)] = inst_49242);

(statearr_49282[(10)] = inst_49256);

return statearr_49282;
})();
var statearr_49283_50310 = state_49267__$1;
(statearr_49283_50310[(2)] = null);

(statearr_49283_50310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49268 === (9))){
var inst_49245 = (state_49267[(8)]);
var state_49267__$1 = state_49267;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49267__$1,(11),out,inst_49245);
} else {
if((state_val_49268 === (5))){
var inst_49242 = (state_49267[(7)]);
var inst_49245 = (state_49267[(8)]);
var inst_49251 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_49245,inst_49242);
var state_49267__$1 = state_49267;
if(inst_49251){
var statearr_49285_50311 = state_49267__$1;
(statearr_49285_50311[(1)] = (8));

} else {
var statearr_49286_50312 = state_49267__$1;
(statearr_49286_50312[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49268 === (10))){
var inst_49259 = (state_49267[(2)]);
var state_49267__$1 = state_49267;
var statearr_49287_50313 = state_49267__$1;
(statearr_49287_50313[(2)] = inst_49259);

(statearr_49287_50313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49268 === (8))){
var inst_49242 = (state_49267[(7)]);
var tmp49284 = inst_49242;
var inst_49242__$1 = tmp49284;
var state_49267__$1 = (function (){var statearr_49288 = state_49267;
(statearr_49288[(7)] = inst_49242__$1);

return statearr_49288;
})();
var statearr_49289_50314 = state_49267__$1;
(statearr_49289_50314[(2)] = null);

(statearr_49289_50314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46891__auto__ = null;
var cljs$core$async$state_machine__46891__auto____0 = (function (){
var statearr_49290 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49290[(0)] = cljs$core$async$state_machine__46891__auto__);

(statearr_49290[(1)] = (1));

return statearr_49290;
});
var cljs$core$async$state_machine__46891__auto____1 = (function (state_49267){
while(true){
var ret_value__46892__auto__ = (function (){try{while(true){
var result__46893__auto__ = switch__46890__auto__(state_49267);
if(cljs.core.keyword_identical_QMARK_(result__46893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46893__auto__;
}
break;
}
}catch (e49291){var ex__46894__auto__ = e49291;
var statearr_49292_50315 = state_49267;
(statearr_49292_50315[(2)] = ex__46894__auto__);


if(cljs.core.seq((state_49267[(4)]))){
var statearr_49293_50316 = state_49267;
(statearr_49293_50316[(1)] = cljs.core.first((state_49267[(4)])));

} else {
throw ex__46894__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50317 = state_49267;
state_49267 = G__50317;
continue;
} else {
return ret_value__46892__auto__;
}
break;
}
});
cljs$core$async$state_machine__46891__auto__ = function(state_49267){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46891__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46891__auto____1.call(this,state_49267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46891__auto____0;
cljs$core$async$state_machine__46891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46891__auto____1;
return cljs$core$async$state_machine__46891__auto__;
})()
})();
var state__47054__auto__ = (function (){var statearr_49294 = f__47053__auto__();
(statearr_49294[(6)] = c__47052__auto___50294);

return statearr_49294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47054__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__49297 = arguments.length;
switch (G__49297) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__47052__auto___50319 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47053__auto__ = (function (){var switch__46890__auto__ = (function (state_49339){
var state_val_49340 = (state_49339[(1)]);
if((state_val_49340 === (7))){
var inst_49335 = (state_49339[(2)]);
var state_49339__$1 = state_49339;
var statearr_49343_50320 = state_49339__$1;
(statearr_49343_50320[(2)] = inst_49335);

(statearr_49343_50320[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49340 === (1))){
var inst_49302 = (new Array(n));
var inst_49303 = inst_49302;
var inst_49304 = (0);
var state_49339__$1 = (function (){var statearr_49344 = state_49339;
(statearr_49344[(7)] = inst_49304);

(statearr_49344[(8)] = inst_49303);

return statearr_49344;
})();
var statearr_49345_50321 = state_49339__$1;
(statearr_49345_50321[(2)] = null);

(statearr_49345_50321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49340 === (4))){
var inst_49307 = (state_49339[(9)]);
var inst_49307__$1 = (state_49339[(2)]);
var inst_49308 = (inst_49307__$1 == null);
var inst_49309 = cljs.core.not(inst_49308);
var state_49339__$1 = (function (){var statearr_49346 = state_49339;
(statearr_49346[(9)] = inst_49307__$1);

return statearr_49346;
})();
if(inst_49309){
var statearr_49347_50322 = state_49339__$1;
(statearr_49347_50322[(1)] = (5));

} else {
var statearr_49348_50323 = state_49339__$1;
(statearr_49348_50323[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49340 === (15))){
var inst_49329 = (state_49339[(2)]);
var state_49339__$1 = state_49339;
var statearr_49349_50327 = state_49339__$1;
(statearr_49349_50327[(2)] = inst_49329);

(statearr_49349_50327[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49340 === (13))){
var state_49339__$1 = state_49339;
var statearr_49351_50328 = state_49339__$1;
(statearr_49351_50328[(2)] = null);

(statearr_49351_50328[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49340 === (6))){
var inst_49304 = (state_49339[(7)]);
var inst_49325 = (inst_49304 > (0));
var state_49339__$1 = state_49339;
if(cljs.core.truth_(inst_49325)){
var statearr_49353_50330 = state_49339__$1;
(statearr_49353_50330[(1)] = (12));

} else {
var statearr_49354_50331 = state_49339__$1;
(statearr_49354_50331[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49340 === (3))){
var inst_49337 = (state_49339[(2)]);
var state_49339__$1 = state_49339;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49339__$1,inst_49337);
} else {
if((state_val_49340 === (12))){
var inst_49303 = (state_49339[(8)]);
var inst_49327 = cljs.core.vec(inst_49303);
var state_49339__$1 = state_49339;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49339__$1,(15),out,inst_49327);
} else {
if((state_val_49340 === (2))){
var state_49339__$1 = state_49339;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49339__$1,(4),ch);
} else {
if((state_val_49340 === (11))){
var inst_49319 = (state_49339[(2)]);
var inst_49320 = (new Array(n));
var inst_49303 = inst_49320;
var inst_49304 = (0);
var state_49339__$1 = (function (){var statearr_49358 = state_49339;
(statearr_49358[(10)] = inst_49319);

(statearr_49358[(7)] = inst_49304);

(statearr_49358[(8)] = inst_49303);

return statearr_49358;
})();
var statearr_49359_50335 = state_49339__$1;
(statearr_49359_50335[(2)] = null);

(statearr_49359_50335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49340 === (9))){
var inst_49303 = (state_49339[(8)]);
var inst_49317 = cljs.core.vec(inst_49303);
var state_49339__$1 = state_49339;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49339__$1,(11),out,inst_49317);
} else {
if((state_val_49340 === (5))){
var inst_49312 = (state_49339[(11)]);
var inst_49304 = (state_49339[(7)]);
var inst_49307 = (state_49339[(9)]);
var inst_49303 = (state_49339[(8)]);
var inst_49311 = (inst_49303[inst_49304] = inst_49307);
var inst_49312__$1 = (inst_49304 + (1));
var inst_49313 = (inst_49312__$1 < n);
var state_49339__$1 = (function (){var statearr_49360 = state_49339;
(statearr_49360[(12)] = inst_49311);

(statearr_49360[(11)] = inst_49312__$1);

return statearr_49360;
})();
if(cljs.core.truth_(inst_49313)){
var statearr_49361_50336 = state_49339__$1;
(statearr_49361_50336[(1)] = (8));

} else {
var statearr_49362_50337 = state_49339__$1;
(statearr_49362_50337[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49340 === (14))){
var inst_49332 = (state_49339[(2)]);
var inst_49333 = cljs.core.async.close_BANG_(out);
var state_49339__$1 = (function (){var statearr_49364 = state_49339;
(statearr_49364[(13)] = inst_49332);

return statearr_49364;
})();
var statearr_49365_50338 = state_49339__$1;
(statearr_49365_50338[(2)] = inst_49333);

(statearr_49365_50338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49340 === (10))){
var inst_49323 = (state_49339[(2)]);
var state_49339__$1 = state_49339;
var statearr_49366_50339 = state_49339__$1;
(statearr_49366_50339[(2)] = inst_49323);

(statearr_49366_50339[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49340 === (8))){
var inst_49312 = (state_49339[(11)]);
var inst_49303 = (state_49339[(8)]);
var tmp49363 = inst_49303;
var inst_49303__$1 = tmp49363;
var inst_49304 = inst_49312;
var state_49339__$1 = (function (){var statearr_49367 = state_49339;
(statearr_49367[(7)] = inst_49304);

(statearr_49367[(8)] = inst_49303__$1);

return statearr_49367;
})();
var statearr_49368_50340 = state_49339__$1;
(statearr_49368_50340[(2)] = null);

(statearr_49368_50340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46891__auto__ = null;
var cljs$core$async$state_machine__46891__auto____0 = (function (){
var statearr_49369 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49369[(0)] = cljs$core$async$state_machine__46891__auto__);

(statearr_49369[(1)] = (1));

return statearr_49369;
});
var cljs$core$async$state_machine__46891__auto____1 = (function (state_49339){
while(true){
var ret_value__46892__auto__ = (function (){try{while(true){
var result__46893__auto__ = switch__46890__auto__(state_49339);
if(cljs.core.keyword_identical_QMARK_(result__46893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46893__auto__;
}
break;
}
}catch (e49370){var ex__46894__auto__ = e49370;
var statearr_49371_50341 = state_49339;
(statearr_49371_50341[(2)] = ex__46894__auto__);


if(cljs.core.seq((state_49339[(4)]))){
var statearr_49372_50343 = state_49339;
(statearr_49372_50343[(1)] = cljs.core.first((state_49339[(4)])));

} else {
throw ex__46894__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50344 = state_49339;
state_49339 = G__50344;
continue;
} else {
return ret_value__46892__auto__;
}
break;
}
});
cljs$core$async$state_machine__46891__auto__ = function(state_49339){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46891__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46891__auto____1.call(this,state_49339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46891__auto____0;
cljs$core$async$state_machine__46891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46891__auto____1;
return cljs$core$async$state_machine__46891__auto__;
})()
})();
var state__47054__auto__ = (function (){var statearr_49377 = f__47053__auto__();
(statearr_49377[(6)] = c__47052__auto___50319);

return statearr_49377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47054__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__49383 = arguments.length;
switch (G__49383) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__47052__auto___50346 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47053__auto__ = (function (){var switch__46890__auto__ = (function (state_49428){
var state_val_49429 = (state_49428[(1)]);
if((state_val_49429 === (7))){
var inst_49424 = (state_49428[(2)]);
var state_49428__$1 = state_49428;
var statearr_49430_50347 = state_49428__$1;
(statearr_49430_50347[(2)] = inst_49424);

(statearr_49430_50347[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49429 === (1))){
var inst_49384 = [];
var inst_49385 = inst_49384;
var inst_49386 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_49428__$1 = (function (){var statearr_49432 = state_49428;
(statearr_49432[(7)] = inst_49386);

(statearr_49432[(8)] = inst_49385);

return statearr_49432;
})();
var statearr_49434_50348 = state_49428__$1;
(statearr_49434_50348[(2)] = null);

(statearr_49434_50348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49429 === (4))){
var inst_49389 = (state_49428[(9)]);
var inst_49389__$1 = (state_49428[(2)]);
var inst_49390 = (inst_49389__$1 == null);
var inst_49391 = cljs.core.not(inst_49390);
var state_49428__$1 = (function (){var statearr_49435 = state_49428;
(statearr_49435[(9)] = inst_49389__$1);

return statearr_49435;
})();
if(inst_49391){
var statearr_49436_50349 = state_49428__$1;
(statearr_49436_50349[(1)] = (5));

} else {
var statearr_49437_50350 = state_49428__$1;
(statearr_49437_50350[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49429 === (15))){
var inst_49385 = (state_49428[(8)]);
var inst_49416 = cljs.core.vec(inst_49385);
var state_49428__$1 = state_49428;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49428__$1,(18),out,inst_49416);
} else {
if((state_val_49429 === (13))){
var inst_49411 = (state_49428[(2)]);
var state_49428__$1 = state_49428;
var statearr_49438_50351 = state_49428__$1;
(statearr_49438_50351[(2)] = inst_49411);

(statearr_49438_50351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49429 === (6))){
var inst_49385 = (state_49428[(8)]);
var inst_49413 = inst_49385.length;
var inst_49414 = (inst_49413 > (0));
var state_49428__$1 = state_49428;
if(cljs.core.truth_(inst_49414)){
var statearr_49442_50356 = state_49428__$1;
(statearr_49442_50356[(1)] = (15));

} else {
var statearr_49443_50357 = state_49428__$1;
(statearr_49443_50357[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49429 === (17))){
var inst_49421 = (state_49428[(2)]);
var inst_49422 = cljs.core.async.close_BANG_(out);
var state_49428__$1 = (function (){var statearr_49444 = state_49428;
(statearr_49444[(10)] = inst_49421);

return statearr_49444;
})();
var statearr_49445_50358 = state_49428__$1;
(statearr_49445_50358[(2)] = inst_49422);

(statearr_49445_50358[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49429 === (3))){
var inst_49426 = (state_49428[(2)]);
var state_49428__$1 = state_49428;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49428__$1,inst_49426);
} else {
if((state_val_49429 === (12))){
var inst_49385 = (state_49428[(8)]);
var inst_49404 = cljs.core.vec(inst_49385);
var state_49428__$1 = state_49428;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49428__$1,(14),out,inst_49404);
} else {
if((state_val_49429 === (2))){
var state_49428__$1 = state_49428;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49428__$1,(4),ch);
} else {
if((state_val_49429 === (11))){
var inst_49389 = (state_49428[(9)]);
var inst_49393 = (state_49428[(11)]);
var inst_49385 = (state_49428[(8)]);
var inst_49401 = inst_49385.push(inst_49389);
var tmp49446 = inst_49385;
var inst_49385__$1 = tmp49446;
var inst_49386 = inst_49393;
var state_49428__$1 = (function (){var statearr_49447 = state_49428;
(statearr_49447[(7)] = inst_49386);

(statearr_49447[(12)] = inst_49401);

(statearr_49447[(8)] = inst_49385__$1);

return statearr_49447;
})();
var statearr_49448_50360 = state_49428__$1;
(statearr_49448_50360[(2)] = null);

(statearr_49448_50360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49429 === (9))){
var inst_49386 = (state_49428[(7)]);
var inst_49397 = cljs.core.keyword_identical_QMARK_(inst_49386,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_49428__$1 = state_49428;
var statearr_49449_50361 = state_49428__$1;
(statearr_49449_50361[(2)] = inst_49397);

(statearr_49449_50361[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49429 === (5))){
var inst_49386 = (state_49428[(7)]);
var inst_49394 = (state_49428[(13)]);
var inst_49389 = (state_49428[(9)]);
var inst_49393 = (state_49428[(11)]);
var inst_49393__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_49389) : f.call(null,inst_49389));
var inst_49394__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_49393__$1,inst_49386);
var state_49428__$1 = (function (){var statearr_49450 = state_49428;
(statearr_49450[(13)] = inst_49394__$1);

(statearr_49450[(11)] = inst_49393__$1);

return statearr_49450;
})();
if(inst_49394__$1){
var statearr_49451_50362 = state_49428__$1;
(statearr_49451_50362[(1)] = (8));

} else {
var statearr_49452_50363 = state_49428__$1;
(statearr_49452_50363[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49429 === (14))){
var inst_49389 = (state_49428[(9)]);
var inst_49393 = (state_49428[(11)]);
var inst_49406 = (state_49428[(2)]);
var inst_49407 = [];
var inst_49408 = inst_49407.push(inst_49389);
var inst_49385 = inst_49407;
var inst_49386 = inst_49393;
var state_49428__$1 = (function (){var statearr_49453 = state_49428;
(statearr_49453[(7)] = inst_49386);

(statearr_49453[(14)] = inst_49408);

(statearr_49453[(15)] = inst_49406);

(statearr_49453[(8)] = inst_49385);

return statearr_49453;
})();
var statearr_49454_50365 = state_49428__$1;
(statearr_49454_50365[(2)] = null);

(statearr_49454_50365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49429 === (16))){
var state_49428__$1 = state_49428;
var statearr_49455_50366 = state_49428__$1;
(statearr_49455_50366[(2)] = null);

(statearr_49455_50366[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49429 === (10))){
var inst_49399 = (state_49428[(2)]);
var state_49428__$1 = state_49428;
if(cljs.core.truth_(inst_49399)){
var statearr_49456_50367 = state_49428__$1;
(statearr_49456_50367[(1)] = (11));

} else {
var statearr_49457_50368 = state_49428__$1;
(statearr_49457_50368[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49429 === (18))){
var inst_49418 = (state_49428[(2)]);
var state_49428__$1 = state_49428;
var statearr_49458_50369 = state_49428__$1;
(statearr_49458_50369[(2)] = inst_49418);

(statearr_49458_50369[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49429 === (8))){
var inst_49394 = (state_49428[(13)]);
var state_49428__$1 = state_49428;
var statearr_49459_50370 = state_49428__$1;
(statearr_49459_50370[(2)] = inst_49394);

(statearr_49459_50370[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46891__auto__ = null;
var cljs$core$async$state_machine__46891__auto____0 = (function (){
var statearr_49460 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49460[(0)] = cljs$core$async$state_machine__46891__auto__);

(statearr_49460[(1)] = (1));

return statearr_49460;
});
var cljs$core$async$state_machine__46891__auto____1 = (function (state_49428){
while(true){
var ret_value__46892__auto__ = (function (){try{while(true){
var result__46893__auto__ = switch__46890__auto__(state_49428);
if(cljs.core.keyword_identical_QMARK_(result__46893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46893__auto__;
}
break;
}
}catch (e49461){var ex__46894__auto__ = e49461;
var statearr_49462_50375 = state_49428;
(statearr_49462_50375[(2)] = ex__46894__auto__);


if(cljs.core.seq((state_49428[(4)]))){
var statearr_49463_50376 = state_49428;
(statearr_49463_50376[(1)] = cljs.core.first((state_49428[(4)])));

} else {
throw ex__46894__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50377 = state_49428;
state_49428 = G__50377;
continue;
} else {
return ret_value__46892__auto__;
}
break;
}
});
cljs$core$async$state_machine__46891__auto__ = function(state_49428){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46891__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46891__auto____1.call(this,state_49428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46891__auto____0;
cljs$core$async$state_machine__46891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46891__auto____1;
return cljs$core$async$state_machine__46891__auto__;
})()
})();
var state__47054__auto__ = (function (){var statearr_49464 = f__47053__auto__();
(statearr_49464[(6)] = c__47052__auto___50346);

return statearr_49464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47054__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
