goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___52626 = arguments.length;
var i__4819__auto___52627 = (0);
while(true){
if((i__4819__auto___52627 < len__4818__auto___52626)){
args__4824__auto__.push((arguments[i__4819__auto___52627]));

var G__52629 = (i__4819__auto___52627 + (1));
i__4819__auto___52627 = G__52629;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq52285){
var G__52286 = cljs.core.first(seq52285);
var seq52285__$1 = cljs.core.next(seq52285);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52286,seq52285__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__52297 = cljs.core.seq(sources);
var chunk__52298 = null;
var count__52299 = (0);
var i__52300 = (0);
while(true){
if((i__52300 < count__52299)){
var map__52314 = chunk__52298.cljs$core$IIndexed$_nth$arity$2(null,i__52300);
var map__52314__$1 = cljs.core.__destructure_map(map__52314);
var src = map__52314__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52314__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52314__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52314__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52314__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e52315){var e_52632 = e52315;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_52632);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_52632.message)].join('')));
}

var G__52633 = seq__52297;
var G__52634 = chunk__52298;
var G__52635 = count__52299;
var G__52636 = (i__52300 + (1));
seq__52297 = G__52633;
chunk__52298 = G__52634;
count__52299 = G__52635;
i__52300 = G__52636;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__52297);
if(temp__5753__auto__){
var seq__52297__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52297__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__52297__$1);
var G__52637 = cljs.core.chunk_rest(seq__52297__$1);
var G__52638 = c__4638__auto__;
var G__52639 = cljs.core.count(c__4638__auto__);
var G__52640 = (0);
seq__52297 = G__52637;
chunk__52298 = G__52638;
count__52299 = G__52639;
i__52300 = G__52640;
continue;
} else {
var map__52323 = cljs.core.first(seq__52297__$1);
var map__52323__$1 = cljs.core.__destructure_map(map__52323);
var src = map__52323__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52323__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52323__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52323__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52323__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e52325){var e_52642 = e52325;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_52642);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_52642.message)].join('')));
}

var G__52643 = cljs.core.next(seq__52297__$1);
var G__52644 = null;
var G__52645 = (0);
var G__52646 = (0);
seq__52297 = G__52643;
chunk__52298 = G__52644;
count__52299 = G__52645;
i__52300 = G__52646;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__52337 = cljs.core.seq(js_requires);
var chunk__52347 = null;
var count__52349 = (0);
var i__52350 = (0);
while(true){
if((i__52350 < count__52349)){
var js_ns = chunk__52347.cljs$core$IIndexed$_nth$arity$2(null,i__52350);
var require_str_52649 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_52649);


var G__52650 = seq__52337;
var G__52651 = chunk__52347;
var G__52652 = count__52349;
var G__52653 = (i__52350 + (1));
seq__52337 = G__52650;
chunk__52347 = G__52651;
count__52349 = G__52652;
i__52350 = G__52653;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__52337);
if(temp__5753__auto__){
var seq__52337__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52337__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__52337__$1);
var G__52654 = cljs.core.chunk_rest(seq__52337__$1);
var G__52655 = c__4638__auto__;
var G__52656 = cljs.core.count(c__4638__auto__);
var G__52657 = (0);
seq__52337 = G__52654;
chunk__52347 = G__52655;
count__52349 = G__52656;
i__52350 = G__52657;
continue;
} else {
var js_ns = cljs.core.first(seq__52337__$1);
var require_str_52658 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_52658);


var G__52659 = cljs.core.next(seq__52337__$1);
var G__52660 = null;
var G__52661 = (0);
var G__52662 = (0);
seq__52337 = G__52659;
chunk__52347 = G__52660;
count__52349 = G__52661;
i__52350 = G__52662;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__52425){
var map__52426 = p__52425;
var map__52426__$1 = cljs.core.__destructure_map(map__52426);
var msg = map__52426__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52426__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52426__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52427(s__52428){
return (new cljs.core.LazySeq(null,(function (){
var s__52428__$1 = s__52428;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__52428__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__52433 = cljs.core.first(xs__6308__auto__);
var map__52433__$1 = cljs.core.__destructure_map(map__52433);
var src = map__52433__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52433__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52433__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4607__auto__ = ((function (s__52428__$1,map__52433,map__52433__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__52426,map__52426__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52427_$_iter__52429(s__52430){
return (new cljs.core.LazySeq(null,((function (s__52428__$1,map__52433,map__52433__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__52426,map__52426__$1,msg,info,reload_info){
return (function (){
var s__52430__$1 = s__52430;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__52430__$1);
if(temp__5753__auto____$1){
var s__52430__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__52430__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__52430__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__52432 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__52431 = (0);
while(true){
if((i__52431 < size__4610__auto__)){
var warning = cljs.core._nth(c__4609__auto__,i__52431);
cljs.core.chunk_append(b__52432,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__52663 = (i__52431 + (1));
i__52431 = G__52663;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52432),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52427_$_iter__52429(cljs.core.chunk_rest(s__52430__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52432),null);
}
} else {
var warning = cljs.core.first(s__52430__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52427_$_iter__52429(cljs.core.rest(s__52430__$2)));
}
} else {
return null;
}
break;
}
});})(s__52428__$1,map__52433,map__52433__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__52426,map__52426__$1,msg,info,reload_info))
,null,null));
});})(s__52428__$1,map__52433,map__52433__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__52426,map__52426__$1,msg,info,reload_info))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(warnings));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52427(cljs.core.rest(s__52428__$1)));
} else {
var G__52664 = cljs.core.rest(s__52428__$1);
s__52428__$1 = G__52664;
continue;
}
} else {
var G__52665 = cljs.core.rest(s__52428__$1);
s__52428__$1 = G__52665;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__52437_52666 = cljs.core.seq(warnings);
var chunk__52438_52667 = null;
var count__52439_52668 = (0);
var i__52440_52669 = (0);
while(true){
if((i__52440_52669 < count__52439_52668)){
var map__52450_52670 = chunk__52438_52667.cljs$core$IIndexed$_nth$arity$2(null,i__52440_52669);
var map__52450_52671__$1 = cljs.core.__destructure_map(map__52450_52670);
var w_52672 = map__52450_52671__$1;
var msg_52673__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52450_52671__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_52674 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52450_52671__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_52675 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52450_52671__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_52676 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52450_52671__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_52676)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_52674),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_52675),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_52673__$1)].join(''));


var G__52677 = seq__52437_52666;
var G__52678 = chunk__52438_52667;
var G__52679 = count__52439_52668;
var G__52680 = (i__52440_52669 + (1));
seq__52437_52666 = G__52677;
chunk__52438_52667 = G__52678;
count__52439_52668 = G__52679;
i__52440_52669 = G__52680;
continue;
} else {
var temp__5753__auto___52681 = cljs.core.seq(seq__52437_52666);
if(temp__5753__auto___52681){
var seq__52437_52683__$1 = temp__5753__auto___52681;
if(cljs.core.chunked_seq_QMARK_(seq__52437_52683__$1)){
var c__4638__auto___52684 = cljs.core.chunk_first(seq__52437_52683__$1);
var G__52685 = cljs.core.chunk_rest(seq__52437_52683__$1);
var G__52686 = c__4638__auto___52684;
var G__52687 = cljs.core.count(c__4638__auto___52684);
var G__52688 = (0);
seq__52437_52666 = G__52685;
chunk__52438_52667 = G__52686;
count__52439_52668 = G__52687;
i__52440_52669 = G__52688;
continue;
} else {
var map__52451_52689 = cljs.core.first(seq__52437_52683__$1);
var map__52451_52690__$1 = cljs.core.__destructure_map(map__52451_52689);
var w_52691 = map__52451_52690__$1;
var msg_52692__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52451_52690__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_52693 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52451_52690__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_52694 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52451_52690__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_52695 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52451_52690__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_52695)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_52693),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_52694),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_52692__$1)].join(''));


var G__52696 = cljs.core.next(seq__52437_52683__$1);
var G__52697 = null;
var G__52698 = (0);
var G__52699 = (0);
seq__52437_52666 = G__52696;
chunk__52438_52667 = G__52697;
count__52439_52668 = G__52698;
i__52440_52669 = G__52699;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__52424_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__52424_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4210__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4210__auto__){
var and__4210__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4210__auto____$1){
return new$;
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__52464){
var map__52465 = p__52464;
var map__52465__$1 = cljs.core.__destructure_map(map__52465);
var msg = map__52465__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52465__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__52466 = cljs.core.seq(updates);
var chunk__52468 = null;
var count__52469 = (0);
var i__52470 = (0);
while(true){
if((i__52470 < count__52469)){
var path = chunk__52468.cljs$core$IIndexed$_nth$arity$2(null,i__52470);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__52525_52701 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__52529_52702 = null;
var count__52530_52703 = (0);
var i__52531_52704 = (0);
while(true){
if((i__52531_52704 < count__52530_52703)){
var node_52705 = chunk__52529_52702.cljs$core$IIndexed$_nth$arity$2(null,i__52531_52704);
if(cljs.core.not(node_52705.shadow$old)){
var path_match_52706 = shadow.cljs.devtools.client.browser.match_paths(node_52705.getAttribute("href"),path);
if(cljs.core.truth_(path_match_52706)){
var new_link_52707 = (function (){var G__52549 = node_52705.cloneNode(true);
G__52549.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_52706),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__52549;
})();
(node_52705.shadow$old = true);

(new_link_52707.onload = ((function (seq__52525_52701,chunk__52529_52702,count__52530_52703,i__52531_52704,seq__52466,chunk__52468,count__52469,i__52470,new_link_52707,path_match_52706,node_52705,path,map__52465,map__52465__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_52705);
});})(seq__52525_52701,chunk__52529_52702,count__52530_52703,i__52531_52704,seq__52466,chunk__52468,count__52469,i__52470,new_link_52707,path_match_52706,node_52705,path,map__52465,map__52465__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_52706], 0));

goog.dom.insertSiblingAfter(new_link_52707,node_52705);


var G__52708 = seq__52525_52701;
var G__52709 = chunk__52529_52702;
var G__52710 = count__52530_52703;
var G__52711 = (i__52531_52704 + (1));
seq__52525_52701 = G__52708;
chunk__52529_52702 = G__52709;
count__52530_52703 = G__52710;
i__52531_52704 = G__52711;
continue;
} else {
var G__52712 = seq__52525_52701;
var G__52713 = chunk__52529_52702;
var G__52714 = count__52530_52703;
var G__52715 = (i__52531_52704 + (1));
seq__52525_52701 = G__52712;
chunk__52529_52702 = G__52713;
count__52530_52703 = G__52714;
i__52531_52704 = G__52715;
continue;
}
} else {
var G__52716 = seq__52525_52701;
var G__52717 = chunk__52529_52702;
var G__52718 = count__52530_52703;
var G__52719 = (i__52531_52704 + (1));
seq__52525_52701 = G__52716;
chunk__52529_52702 = G__52717;
count__52530_52703 = G__52718;
i__52531_52704 = G__52719;
continue;
}
} else {
var temp__5753__auto___52720 = cljs.core.seq(seq__52525_52701);
if(temp__5753__auto___52720){
var seq__52525_52721__$1 = temp__5753__auto___52720;
if(cljs.core.chunked_seq_QMARK_(seq__52525_52721__$1)){
var c__4638__auto___52723 = cljs.core.chunk_first(seq__52525_52721__$1);
var G__52724 = cljs.core.chunk_rest(seq__52525_52721__$1);
var G__52725 = c__4638__auto___52723;
var G__52726 = cljs.core.count(c__4638__auto___52723);
var G__52727 = (0);
seq__52525_52701 = G__52724;
chunk__52529_52702 = G__52725;
count__52530_52703 = G__52726;
i__52531_52704 = G__52727;
continue;
} else {
var node_52728 = cljs.core.first(seq__52525_52721__$1);
if(cljs.core.not(node_52728.shadow$old)){
var path_match_52729 = shadow.cljs.devtools.client.browser.match_paths(node_52728.getAttribute("href"),path);
if(cljs.core.truth_(path_match_52729)){
var new_link_52730 = (function (){var G__52551 = node_52728.cloneNode(true);
G__52551.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_52729),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__52551;
})();
(node_52728.shadow$old = true);

(new_link_52730.onload = ((function (seq__52525_52701,chunk__52529_52702,count__52530_52703,i__52531_52704,seq__52466,chunk__52468,count__52469,i__52470,new_link_52730,path_match_52729,node_52728,seq__52525_52721__$1,temp__5753__auto___52720,path,map__52465,map__52465__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_52728);
});})(seq__52525_52701,chunk__52529_52702,count__52530_52703,i__52531_52704,seq__52466,chunk__52468,count__52469,i__52470,new_link_52730,path_match_52729,node_52728,seq__52525_52721__$1,temp__5753__auto___52720,path,map__52465,map__52465__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_52729], 0));

goog.dom.insertSiblingAfter(new_link_52730,node_52728);


var G__52732 = cljs.core.next(seq__52525_52721__$1);
var G__52733 = null;
var G__52734 = (0);
var G__52735 = (0);
seq__52525_52701 = G__52732;
chunk__52529_52702 = G__52733;
count__52530_52703 = G__52734;
i__52531_52704 = G__52735;
continue;
} else {
var G__52736 = cljs.core.next(seq__52525_52721__$1);
var G__52737 = null;
var G__52738 = (0);
var G__52739 = (0);
seq__52525_52701 = G__52736;
chunk__52529_52702 = G__52737;
count__52530_52703 = G__52738;
i__52531_52704 = G__52739;
continue;
}
} else {
var G__52740 = cljs.core.next(seq__52525_52721__$1);
var G__52741 = null;
var G__52742 = (0);
var G__52743 = (0);
seq__52525_52701 = G__52740;
chunk__52529_52702 = G__52741;
count__52530_52703 = G__52742;
i__52531_52704 = G__52743;
continue;
}
}
} else {
}
}
break;
}


var G__52744 = seq__52466;
var G__52745 = chunk__52468;
var G__52746 = count__52469;
var G__52747 = (i__52470 + (1));
seq__52466 = G__52744;
chunk__52468 = G__52745;
count__52469 = G__52746;
i__52470 = G__52747;
continue;
} else {
var G__52748 = seq__52466;
var G__52749 = chunk__52468;
var G__52750 = count__52469;
var G__52751 = (i__52470 + (1));
seq__52466 = G__52748;
chunk__52468 = G__52749;
count__52469 = G__52750;
i__52470 = G__52751;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__52466);
if(temp__5753__auto__){
var seq__52466__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52466__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__52466__$1);
var G__52752 = cljs.core.chunk_rest(seq__52466__$1);
var G__52753 = c__4638__auto__;
var G__52754 = cljs.core.count(c__4638__auto__);
var G__52755 = (0);
seq__52466 = G__52752;
chunk__52468 = G__52753;
count__52469 = G__52754;
i__52470 = G__52755;
continue;
} else {
var path = cljs.core.first(seq__52466__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__52552_52756 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__52556_52757 = null;
var count__52557_52758 = (0);
var i__52558_52759 = (0);
while(true){
if((i__52558_52759 < count__52557_52758)){
var node_52760 = chunk__52556_52757.cljs$core$IIndexed$_nth$arity$2(null,i__52558_52759);
if(cljs.core.not(node_52760.shadow$old)){
var path_match_52761 = shadow.cljs.devtools.client.browser.match_paths(node_52760.getAttribute("href"),path);
if(cljs.core.truth_(path_match_52761)){
var new_link_52762 = (function (){var G__52567 = node_52760.cloneNode(true);
G__52567.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_52761),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__52567;
})();
(node_52760.shadow$old = true);

(new_link_52762.onload = ((function (seq__52552_52756,chunk__52556_52757,count__52557_52758,i__52558_52759,seq__52466,chunk__52468,count__52469,i__52470,new_link_52762,path_match_52761,node_52760,path,seq__52466__$1,temp__5753__auto__,map__52465,map__52465__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_52760);
});})(seq__52552_52756,chunk__52556_52757,count__52557_52758,i__52558_52759,seq__52466,chunk__52468,count__52469,i__52470,new_link_52762,path_match_52761,node_52760,path,seq__52466__$1,temp__5753__auto__,map__52465,map__52465__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_52761], 0));

goog.dom.insertSiblingAfter(new_link_52762,node_52760);


var G__52763 = seq__52552_52756;
var G__52764 = chunk__52556_52757;
var G__52765 = count__52557_52758;
var G__52766 = (i__52558_52759 + (1));
seq__52552_52756 = G__52763;
chunk__52556_52757 = G__52764;
count__52557_52758 = G__52765;
i__52558_52759 = G__52766;
continue;
} else {
var G__52767 = seq__52552_52756;
var G__52768 = chunk__52556_52757;
var G__52769 = count__52557_52758;
var G__52770 = (i__52558_52759 + (1));
seq__52552_52756 = G__52767;
chunk__52556_52757 = G__52768;
count__52557_52758 = G__52769;
i__52558_52759 = G__52770;
continue;
}
} else {
var G__52771 = seq__52552_52756;
var G__52772 = chunk__52556_52757;
var G__52773 = count__52557_52758;
var G__52774 = (i__52558_52759 + (1));
seq__52552_52756 = G__52771;
chunk__52556_52757 = G__52772;
count__52557_52758 = G__52773;
i__52558_52759 = G__52774;
continue;
}
} else {
var temp__5753__auto___52775__$1 = cljs.core.seq(seq__52552_52756);
if(temp__5753__auto___52775__$1){
var seq__52552_52776__$1 = temp__5753__auto___52775__$1;
if(cljs.core.chunked_seq_QMARK_(seq__52552_52776__$1)){
var c__4638__auto___52777 = cljs.core.chunk_first(seq__52552_52776__$1);
var G__52778 = cljs.core.chunk_rest(seq__52552_52776__$1);
var G__52779 = c__4638__auto___52777;
var G__52780 = cljs.core.count(c__4638__auto___52777);
var G__52781 = (0);
seq__52552_52756 = G__52778;
chunk__52556_52757 = G__52779;
count__52557_52758 = G__52780;
i__52558_52759 = G__52781;
continue;
} else {
var node_52782 = cljs.core.first(seq__52552_52776__$1);
if(cljs.core.not(node_52782.shadow$old)){
var path_match_52783 = shadow.cljs.devtools.client.browser.match_paths(node_52782.getAttribute("href"),path);
if(cljs.core.truth_(path_match_52783)){
var new_link_52784 = (function (){var G__52574 = node_52782.cloneNode(true);
G__52574.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_52783),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__52574;
})();
(node_52782.shadow$old = true);

(new_link_52784.onload = ((function (seq__52552_52756,chunk__52556_52757,count__52557_52758,i__52558_52759,seq__52466,chunk__52468,count__52469,i__52470,new_link_52784,path_match_52783,node_52782,seq__52552_52776__$1,temp__5753__auto___52775__$1,path,seq__52466__$1,temp__5753__auto__,map__52465,map__52465__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_52782);
});})(seq__52552_52756,chunk__52556_52757,count__52557_52758,i__52558_52759,seq__52466,chunk__52468,count__52469,i__52470,new_link_52784,path_match_52783,node_52782,seq__52552_52776__$1,temp__5753__auto___52775__$1,path,seq__52466__$1,temp__5753__auto__,map__52465,map__52465__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_52783], 0));

goog.dom.insertSiblingAfter(new_link_52784,node_52782);


var G__52785 = cljs.core.next(seq__52552_52776__$1);
var G__52786 = null;
var G__52787 = (0);
var G__52788 = (0);
seq__52552_52756 = G__52785;
chunk__52556_52757 = G__52786;
count__52557_52758 = G__52787;
i__52558_52759 = G__52788;
continue;
} else {
var G__52789 = cljs.core.next(seq__52552_52776__$1);
var G__52790 = null;
var G__52791 = (0);
var G__52792 = (0);
seq__52552_52756 = G__52789;
chunk__52556_52757 = G__52790;
count__52557_52758 = G__52791;
i__52558_52759 = G__52792;
continue;
}
} else {
var G__52793 = cljs.core.next(seq__52552_52776__$1);
var G__52794 = null;
var G__52795 = (0);
var G__52796 = (0);
seq__52552_52756 = G__52793;
chunk__52556_52757 = G__52794;
count__52557_52758 = G__52795;
i__52558_52759 = G__52796;
continue;
}
}
} else {
}
}
break;
}


var G__52797 = cljs.core.next(seq__52466__$1);
var G__52798 = null;
var G__52799 = (0);
var G__52800 = (0);
seq__52466 = G__52797;
chunk__52468 = G__52798;
count__52469 = G__52799;
i__52470 = G__52800;
continue;
} else {
var G__52801 = cljs.core.next(seq__52466__$1);
var G__52802 = null;
var G__52803 = (0);
var G__52804 = (0);
seq__52466 = G__52801;
chunk__52468 = G__52802;
count__52469 = G__52803;
i__52470 = G__52804;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__52579){
var map__52580 = p__52579;
var map__52580__$1 = cljs.core.__destructure_map(map__52580);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52580__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__52589){
var map__52590 = p__52589;
var map__52590__$1 = cljs.core.__destructure_map(map__52590);
var _ = map__52590__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52590__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__52593,done,error){
var map__52594 = p__52593;
var map__52594__$1 = cljs.core.__destructure_map(map__52594);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52594__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__52599,done,error){
var map__52601 = p__52599;
var map__52601__$1 = cljs.core.__destructure_map(map__52601);
var msg = map__52601__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52601__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52601__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52601__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__52603){
var map__52604 = p__52603;
var map__52604__$1 = cljs.core.__destructure_map(map__52604);
var src = map__52604__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52604__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4210__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4210__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__52606 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__52606) : done.call(null,G__52606));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__52610){
var map__52611 = p__52610;
var map__52611__$1 = cljs.core.__destructure_map(map__52611);
var msg__$1 = map__52611__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52611__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e52612){var ex = e52612;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__52615){
var map__52616 = p__52615;
var map__52616__$1 = cljs.core.__destructure_map(map__52616);
var env = map__52616__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52616__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__52618){
var map__52619 = p__52618;
var map__52619__$1 = cljs.core.__destructure_map(map__52619);
var msg = map__52619__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52619__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__52620){
var map__52622 = p__52620;
var map__52622__$1 = cljs.core.__destructure_map(map__52622);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52622__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52622__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__52623){
var map__52624 = p__52623;
var map__52624__$1 = cljs.core.__destructure_map(map__52624);
var svc = map__52624__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52624__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
