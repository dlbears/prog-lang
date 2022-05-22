goog.provide('instaparse.failure');
/**
 * Takes an index into text, and determines the line and column info
 */
instaparse.failure.index__GT_line_column = (function instaparse$failure$index__GT_line_column(index,text){
var line = (1);
var col = (1);
var counter = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,counter)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),col], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.get.cljs$core$IFn$_invoke$arity$2(text,counter))){
var G__52013 = (line + (1));
var G__52014 = (1);
var G__52015 = (counter + (1));
line = G__52013;
col = G__52014;
counter = G__52015;
continue;
} else {
var G__52016 = line;
var G__52017 = (col + (1));
var G__52018 = (counter + (1));
line = G__52016;
col = G__52017;
counter = G__52018;
continue;

}
}
break;
}
});
instaparse.failure.get_line = (function instaparse$failure$get_line(n,text){
var chars = cljs.core.seq(clojure.string.replace(text,"\r\n","\n"));
var n__$1 = n;
while(true){
if(cljs.core.empty_QMARK_(chars)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n__$1,(1))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["\n",null], null), null)),chars));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.first(chars))){
var G__52019 = cljs.core.next(chars);
var G__52020 = (n__$1 - (1));
chars = G__52019;
n__$1 = G__52020;
continue;
} else {
var G__52021 = cljs.core.next(chars);
var G__52022 = n__$1;
chars = G__52021;
n__$1 = G__52022;
continue;

}
}
}
break;
}
});
/**
 * Creates string with caret at nth position, 1-based
 */
instaparse.failure.marker = (function instaparse$failure$marker(n){
if(cljs.core.integer_QMARK_(n)){
if((n <= (1))){
return "^";
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - (1))," "),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^"], null)));
}
} else {
return null;
}
});
/**
 * Adds text, line, and column info to failure object.
 */
instaparse.failure.augment_failure = (function instaparse$failure$augment_failure(failure,text){
var lc = instaparse.failure.index__GT_line_column(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(failure),text);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([failure,lc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),instaparse.failure.get_line(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(lc),text)], null)], 0));
});
/**
 * Provides special case for printing negative lookahead reasons
 */
instaparse.failure.print_reason = (function instaparse$failure$print_reason(r){
if(cljs.core.truth_(new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r))){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NOT "], 0));

return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r)], 0));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"char-range","char-range",1443391389).cljs$core$IFn$_invoke$arity$1(r))){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.print.char_range__GT_str(r)], 0));
} else {
if((r instanceof RegExp)){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.print.regexp__GT_str(r)], 0));
} else {
return cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r], 0));

}
}
}
});
/**
 * Takes an augmented failure object and prints the error message
 */
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__51981){
var map__51982 = p__51981;
var map__51982__$1 = cljs.core.__destructure_map(map__51982);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51982__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51982__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51982__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51982__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Parse error at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column),":"].join('')], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([text], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.failure.marker(column)], 0));

var full_reasons = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"full","full",436801220),reason)));
var partial_reasons = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(new cljs.core.Keyword(null,"full","full",436801220)),reason)));
var total = (cljs.core.count(full_reasons) + cljs.core.count(partial_reasons));
if((total === (0))){
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),total)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected:"], 0));
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected one of:"], 0));

}
}

var seq__51987_52026 = cljs.core.seq(full_reasons);
var chunk__51989_52027 = null;
var count__51990_52028 = (0);
var i__51991_52029 = (0);
while(true){
if((i__51991_52029 < count__51990_52028)){
var r_52030 = chunk__51989_52027.cljs$core$IIndexed$_nth$arity$2(null,i__51991_52029);
instaparse.failure.print_reason(r_52030);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__52031 = seq__51987_52026;
var G__52032 = chunk__51989_52027;
var G__52033 = count__51990_52028;
var G__52034 = (i__51991_52029 + (1));
seq__51987_52026 = G__52031;
chunk__51989_52027 = G__52032;
count__51990_52028 = G__52033;
i__51991_52029 = G__52034;
continue;
} else {
var temp__5753__auto___52035 = cljs.core.seq(seq__51987_52026);
if(temp__5753__auto___52035){
var seq__51987_52036__$1 = temp__5753__auto___52035;
if(cljs.core.chunked_seq_QMARK_(seq__51987_52036__$1)){
var c__4638__auto___52037 = cljs.core.chunk_first(seq__51987_52036__$1);
var G__52038 = cljs.core.chunk_rest(seq__51987_52036__$1);
var G__52039 = c__4638__auto___52037;
var G__52040 = cljs.core.count(c__4638__auto___52037);
var G__52041 = (0);
seq__51987_52026 = G__52038;
chunk__51989_52027 = G__52039;
count__51990_52028 = G__52040;
i__51991_52029 = G__52041;
continue;
} else {
var r_52042 = cljs.core.first(seq__51987_52036__$1);
instaparse.failure.print_reason(r_52042);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__52044 = cljs.core.next(seq__51987_52036__$1);
var G__52045 = null;
var G__52046 = (0);
var G__52047 = (0);
seq__51987_52026 = G__52044;
chunk__51989_52027 = G__52045;
count__51990_52028 = G__52046;
i__51991_52029 = G__52047;
continue;
}
} else {
}
}
break;
}

var seq__52008 = cljs.core.seq(partial_reasons);
var chunk__52009 = null;
var count__52010 = (0);
var i__52011 = (0);
while(true){
if((i__52011 < count__52010)){
var r = chunk__52009.cljs$core$IIndexed$_nth$arity$2(null,i__52011);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__52048 = seq__52008;
var G__52049 = chunk__52009;
var G__52050 = count__52010;
var G__52051 = (i__52011 + (1));
seq__52008 = G__52048;
chunk__52009 = G__52049;
count__52010 = G__52050;
i__52011 = G__52051;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__52008);
if(temp__5753__auto__){
var seq__52008__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52008__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__52008__$1);
var G__52052 = cljs.core.chunk_rest(seq__52008__$1);
var G__52053 = c__4638__auto__;
var G__52054 = cljs.core.count(c__4638__auto__);
var G__52055 = (0);
seq__52008 = G__52052;
chunk__52009 = G__52053;
count__52010 = G__52054;
i__52011 = G__52055;
continue;
} else {
var r = cljs.core.first(seq__52008__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__52056 = cljs.core.next(seq__52008__$1);
var G__52057 = null;
var G__52058 = (0);
var G__52059 = (0);
seq__52008 = G__52056;
chunk__52009 = G__52057;
count__52010 = G__52058;
i__52011 = G__52059;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=instaparse.failure.js.map
