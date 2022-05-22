goog.provide('instaparse.util');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__4824__auto__ = [];
var len__4818__auto___52079 = arguments.length;
var i__4819__auto___52080 = (0);
while(true){
if((i__4819__auto___52080 < len__4818__auto___52079)){
args__4824__auto__.push((arguments[i__4819__auto___52080]));

var G__52082 = (i__4819__auto___52080 + (1));
i__4819__auto___52080 = G__52082;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_runtime_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq52061){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52061));
}));

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__4824__auto__ = [];
var len__4818__auto___52083 = arguments.length;
var i__4819__auto___52084 = (0);
while(true){
if((i__4819__auto___52084 < len__4818__auto___52083)){
args__4824__auto__.push((arguments[i__4819__auto___52084]));

var G__52085 = (i__4819__auto___52084 + (1));
i__4819__auto___52084 = G__52085;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_illegal_argument_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq52064){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52064));
}));

instaparse.util.regexp_flags = (function instaparse$util$regexp_flags(re){
var G__52070 = "";
var G__52070__$1 = (cljs.core.truth_(re.ignoreCase)?[G__52070,"i"].join(''):G__52070);
var G__52070__$2 = (cljs.core.truth_(re.multiline)?[G__52070__$1,"m"].join(''):G__52070__$1);
if(cljs.core.truth_(re.unicode)){
return [G__52070__$2,"u"].join('');
} else {
return G__52070__$2;
}
});

//# sourceMappingURL=instaparse.util.js.map
