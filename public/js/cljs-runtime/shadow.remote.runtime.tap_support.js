goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__51390,p__51391){
var map__51392 = p__51390;
var map__51392__$1 = cljs.core.__destructure_map(map__51392);
var svc = map__51392__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51392__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51392__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51392__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__51393 = p__51391;
var map__51393__$1 = cljs.core.__destructure_map(map__51393);
var msg = map__51393__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51393__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51393__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51393__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51393__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__51410,p__51411){
var map__51414 = p__51410;
var map__51414__$1 = cljs.core.__destructure_map(map__51414);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51414__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__51416 = p__51411;
var map__51416__$1 = cljs.core.__destructure_map(map__51416);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51416__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__51419,p__51420){
var map__51423 = p__51419;
var map__51423__$1 = cljs.core.__destructure_map(map__51423);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51423__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51423__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__51424 = p__51420;
var map__51424__$1 = cljs.core.__destructure_map(map__51424);
var msg = map__51424__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51424__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__51428,tid){
var map__51429 = p__51428;
var map__51429__$1 = cljs.core.__destructure_map(map__51429);
var svc = map__51429__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51429__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__51440 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__51441 = null;
var count__51442 = (0);
var i__51443 = (0);
while(true){
if((i__51443 < count__51442)){
var vec__51458 = chunk__51441.cljs$core$IIndexed$_nth$arity$2(null,i__51443);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51458,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51458,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__51486 = seq__51440;
var G__51487 = chunk__51441;
var G__51488 = count__51442;
var G__51489 = (i__51443 + (1));
seq__51440 = G__51486;
chunk__51441 = G__51487;
count__51442 = G__51488;
i__51443 = G__51489;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__51440);
if(temp__5753__auto__){
var seq__51440__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51440__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__51440__$1);
var G__51490 = cljs.core.chunk_rest(seq__51440__$1);
var G__51491 = c__4638__auto__;
var G__51492 = cljs.core.count(c__4638__auto__);
var G__51493 = (0);
seq__51440 = G__51490;
chunk__51441 = G__51491;
count__51442 = G__51492;
i__51443 = G__51493;
continue;
} else {
var vec__51461 = cljs.core.first(seq__51440__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51461,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51461,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__51494 = cljs.core.next(seq__51440__$1);
var G__51495 = null;
var G__51496 = (0);
var G__51497 = (0);
seq__51440 = G__51494;
chunk__51441 = G__51495;
count__51442 = G__51496;
i__51443 = G__51497;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__51435_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__51435_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__51436_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__51436_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__51437_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__51437_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__51438_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__51438_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__51473){
var map__51474 = p__51473;
var map__51474__$1 = cljs.core.__destructure_map(map__51474);
var svc = map__51474__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51474__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51474__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
