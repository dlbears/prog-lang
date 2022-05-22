goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__50603){
var map__50605 = p__50603;
var map__50605__$1 = cljs.core.__destructure_map(map__50605);
var m = map__50605__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50605__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50605__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4212__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__50612_50972 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50613_50973 = null;
var count__50614_50974 = (0);
var i__50615_50975 = (0);
while(true){
if((i__50615_50975 < count__50614_50974)){
var f_50976 = chunk__50613_50973.cljs$core$IIndexed$_nth$arity$2(null,i__50615_50975);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_50976], 0));


var G__50977 = seq__50612_50972;
var G__50978 = chunk__50613_50973;
var G__50979 = count__50614_50974;
var G__50980 = (i__50615_50975 + (1));
seq__50612_50972 = G__50977;
chunk__50613_50973 = G__50978;
count__50614_50974 = G__50979;
i__50615_50975 = G__50980;
continue;
} else {
var temp__5753__auto___50981 = cljs.core.seq(seq__50612_50972);
if(temp__5753__auto___50981){
var seq__50612_50982__$1 = temp__5753__auto___50981;
if(cljs.core.chunked_seq_QMARK_(seq__50612_50982__$1)){
var c__4638__auto___50983 = cljs.core.chunk_first(seq__50612_50982__$1);
var G__50984 = cljs.core.chunk_rest(seq__50612_50982__$1);
var G__50985 = c__4638__auto___50983;
var G__50986 = cljs.core.count(c__4638__auto___50983);
var G__50987 = (0);
seq__50612_50972 = G__50984;
chunk__50613_50973 = G__50985;
count__50614_50974 = G__50986;
i__50615_50975 = G__50987;
continue;
} else {
var f_50988 = cljs.core.first(seq__50612_50982__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_50988], 0));


var G__50989 = cljs.core.next(seq__50612_50982__$1);
var G__50990 = null;
var G__50991 = (0);
var G__50992 = (0);
seq__50612_50972 = G__50989;
chunk__50613_50973 = G__50990;
count__50614_50974 = G__50991;
i__50615_50975 = G__50992;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_50993 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4212__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_50993], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_50993)))?cljs.core.second(arglists_50993):arglists_50993)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__50623_50994 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50624_50995 = null;
var count__50625_50996 = (0);
var i__50626_50997 = (0);
while(true){
if((i__50626_50997 < count__50625_50996)){
var vec__50649_50998 = chunk__50624_50995.cljs$core$IIndexed$_nth$arity$2(null,i__50626_50997);
var name_50999 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50649_50998,(0),null);
var map__50652_51000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50649_50998,(1),null);
var map__50652_51001__$1 = cljs.core.__destructure_map(map__50652_51000);
var doc_51002 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50652_51001__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_51003 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50652_51001__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_50999], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_51003], 0));

if(cljs.core.truth_(doc_51002)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_51002], 0));
} else {
}


var G__51005 = seq__50623_50994;
var G__51006 = chunk__50624_50995;
var G__51007 = count__50625_50996;
var G__51008 = (i__50626_50997 + (1));
seq__50623_50994 = G__51005;
chunk__50624_50995 = G__51006;
count__50625_50996 = G__51007;
i__50626_50997 = G__51008;
continue;
} else {
var temp__5753__auto___51009 = cljs.core.seq(seq__50623_50994);
if(temp__5753__auto___51009){
var seq__50623_51010__$1 = temp__5753__auto___51009;
if(cljs.core.chunked_seq_QMARK_(seq__50623_51010__$1)){
var c__4638__auto___51011 = cljs.core.chunk_first(seq__50623_51010__$1);
var G__51012 = cljs.core.chunk_rest(seq__50623_51010__$1);
var G__51013 = c__4638__auto___51011;
var G__51014 = cljs.core.count(c__4638__auto___51011);
var G__51015 = (0);
seq__50623_50994 = G__51012;
chunk__50624_50995 = G__51013;
count__50625_50996 = G__51014;
i__50626_50997 = G__51015;
continue;
} else {
var vec__50658_51016 = cljs.core.first(seq__50623_51010__$1);
var name_51017 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50658_51016,(0),null);
var map__50661_51018 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50658_51016,(1),null);
var map__50661_51019__$1 = cljs.core.__destructure_map(map__50661_51018);
var doc_51020 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50661_51019__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_51021 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50661_51019__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_51017], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_51021], 0));

if(cljs.core.truth_(doc_51020)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_51020], 0));
} else {
}


var G__51024 = cljs.core.next(seq__50623_51010__$1);
var G__51025 = null;
var G__51026 = (0);
var G__51027 = (0);
seq__50623_50994 = G__51024;
chunk__50624_50995 = G__51025;
count__50625_50996 = G__51026;
i__50626_50997 = G__51027;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__50673 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__50674 = null;
var count__50675 = (0);
var i__50676 = (0);
while(true){
if((i__50676 < count__50675)){
var role = chunk__50674.cljs$core$IIndexed$_nth$arity$2(null,i__50676);
var temp__5753__auto___51028__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___51028__$1)){
var spec_51029 = temp__5753__auto___51028__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_51029)], 0));
} else {
}


var G__51030 = seq__50673;
var G__51031 = chunk__50674;
var G__51032 = count__50675;
var G__51033 = (i__50676 + (1));
seq__50673 = G__51030;
chunk__50674 = G__51031;
count__50675 = G__51032;
i__50676 = G__51033;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__50673);
if(temp__5753__auto____$1){
var seq__50673__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__50673__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__50673__$1);
var G__51034 = cljs.core.chunk_rest(seq__50673__$1);
var G__51035 = c__4638__auto__;
var G__51036 = cljs.core.count(c__4638__auto__);
var G__51037 = (0);
seq__50673 = G__51034;
chunk__50674 = G__51035;
count__50675 = G__51036;
i__50676 = G__51037;
continue;
} else {
var role = cljs.core.first(seq__50673__$1);
var temp__5753__auto___51041__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___51041__$2)){
var spec_51042 = temp__5753__auto___51041__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_51042)], 0));
} else {
}


var G__51045 = cljs.core.next(seq__50673__$1);
var G__51046 = null;
var G__51047 = (0);
var G__51048 = (0);
seq__50673 = G__51045;
chunk__50674 = G__51046;
count__50675 = G__51047;
i__50676 = G__51048;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__51050 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__51051 = cljs.core.ex_cause(t);
via = G__51050;
t = G__51051;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__50888 = datafied_throwable;
var map__50888__$1 = cljs.core.__destructure_map(map__50888);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50888__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50888__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50888__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__50889 = cljs.core.last(via);
var map__50889__$1 = cljs.core.__destructure_map(map__50889);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50889__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50889__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50889__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__50890 = data;
var map__50890__$1 = cljs.core.__destructure_map(map__50890);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50890__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50890__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50890__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__50891 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__50891__$1 = cljs.core.__destructure_map(map__50891);
var top_data = map__50891__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50891__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__50892 = phase;
var G__50892__$1 = (((G__50892 instanceof cljs.core.Keyword))?G__50892.fqn:null);
switch (G__50892__$1) {
case "read-source":
var map__50893 = data;
var map__50893__$1 = cljs.core.__destructure_map(map__50893);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50893__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50893__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__50894 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__50894__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50894,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__50894);
var G__50894__$2 = (cljs.core.truth_((function (){var fexpr__50896 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50896.cljs$core$IFn$_invoke$arity$1 ? fexpr__50896.cljs$core$IFn$_invoke$arity$1(source) : fexpr__50896.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50894__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__50894__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50894__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__50894__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__50897 = top_data;
var G__50897__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50897,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__50897);
var G__50897__$2 = (cljs.core.truth_((function (){var fexpr__50898 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50898.cljs$core$IFn$_invoke$arity$1 ? fexpr__50898.cljs$core$IFn$_invoke$arity$1(source) : fexpr__50898.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50897__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__50897__$1);
var G__50897__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50897__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__50897__$2);
var G__50897__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50897__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__50897__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50897__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__50897__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__50900 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50900,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50900,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50900,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50900,(3),null);
var G__50903 = top_data;
var G__50903__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50903,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__50903);
var G__50903__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50903__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__50903__$1);
var G__50903__$3 = (cljs.core.truth_((function (){var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50903__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__50903__$2);
var G__50903__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50903__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__50903__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50903__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__50903__$4;
}

break;
case "execution":
var vec__50905 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50905,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50905,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50905,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50905,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__50886_SHARP_){
var or__4212__auto__ = (p1__50886_SHARP_ == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var fexpr__50908 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50908.cljs$core$IFn$_invoke$arity$1 ? fexpr__50908.cljs$core$IFn$_invoke$arity$1(p1__50886_SHARP_) : fexpr__50908.call(null,p1__50886_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4212__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return line;
}
})();
var G__50910 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__50910__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50910,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__50910);
var G__50910__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50910__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__50910__$1);
var G__50910__$3 = (cljs.core.truth_((function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50910__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__50910__$2);
var G__50910__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50910__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__50910__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50910__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__50910__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50892__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__50917){
var map__50918 = p__50917;
var map__50918__$1 = cljs.core.__destructure_map(map__50918);
var triage_data = map__50918__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50918__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50918__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50918__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50918__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50918__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50918__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50918__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50918__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = source;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = line;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4212__auto__ = class$;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__50924 = phase;
var G__50924__$1 = (((G__50924 instanceof cljs.core.Keyword))?G__50924.fqn:null);
switch (G__50924__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__50925 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__50926 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50927 = loc;
var G__50928 = (cljs.core.truth_(spec)?(function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50929_51141 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50930_51142 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50931_51143 = true;
var _STAR_print_fn_STAR__temp_val__50932_51144 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50931_51143);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50932_51144);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50914_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__50914_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50930_51142);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50929_51141);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__50925,G__50926,G__50927,G__50928) : format.call(null,G__50925,G__50926,G__50927,G__50928));

break;
case "macroexpansion":
var G__50933 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__50934 = cause_type;
var G__50935 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50936 = loc;
var G__50937 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50933,G__50934,G__50935,G__50936,G__50937) : format.call(null,G__50933,G__50934,G__50935,G__50936,G__50937));

break;
case "compile-syntax-check":
var G__50938 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__50939 = cause_type;
var G__50940 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50941 = loc;
var G__50942 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50938,G__50939,G__50940,G__50941,G__50942) : format.call(null,G__50938,G__50939,G__50940,G__50941,G__50942));

break;
case "compilation":
var G__50943 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__50944 = cause_type;
var G__50945 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50946 = loc;
var G__50947 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50943,G__50944,G__50945,G__50946,G__50947) : format.call(null,G__50943,G__50944,G__50945,G__50946,G__50947));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__50948 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__50949 = symbol;
var G__50950 = loc;
var G__50951 = (function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50952_51193 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50953_51194 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50954_51195 = true;
var _STAR_print_fn_STAR__temp_val__50955_51196 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50954_51195);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50955_51196);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50916_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__50916_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50953_51194);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50952_51193);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__50948,G__50949,G__50950,G__50951) : format.call(null,G__50948,G__50949,G__50950,G__50951));
} else {
var G__50960 = "Execution error%s at %s(%s).\n%s\n";
var G__50961 = cause_type;
var G__50962 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50963 = loc;
var G__50964 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50960,G__50961,G__50962,G__50963,G__50964) : format.call(null,G__50960,G__50961,G__50962,G__50963,G__50964));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50924__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
