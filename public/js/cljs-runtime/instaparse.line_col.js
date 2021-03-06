goog.provide('instaparse.line_col');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
instaparse.line_col.Cursor = (function (index,line,column,__meta,__extmap,__hash){
this.index = index;
this.line = line;
this.column = column;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(instaparse.line_col.Cursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(instaparse.line_col.Cursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k53925,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__53933 = k53925;
var G__53933__$1 = (((G__53933 instanceof cljs.core.Keyword))?G__53933.fqn:null);
switch (G__53933__$1) {
case "index":
return self__.index;

break;
case "line":
return self__.line;

break;
case "column":
return self__.column;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k53925,else__4464__auto__);

}
}));

(instaparse.line_col.Cursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__53943){
var vec__53944 = p__53943;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53944,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53944,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(instaparse.line_col.Cursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#instaparse.line-col.Cursor{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"index","index",-1531685915),self__.index],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"line","line",212345235),self__.line],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"column","column",2078222095),self__.column],null))], null),self__.__extmap));
}));

(instaparse.line_col.Cursor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__53924){
var self__ = this;
var G__53924__$1 = this;
return (new cljs.core.RecordIter((0),G__53924__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(instaparse.line_col.Cursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(instaparse.line_col.Cursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new instaparse.line_col.Cursor(self__.index,self__.line,self__.column,self__.__meta,self__.__extmap,self__.__hash));
}));

(instaparse.line_col.Cursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(instaparse.line_col.Cursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (-1036355234 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(instaparse.line_col.Cursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this53926,other53927){
var self__ = this;
var this53926__$1 = this;
return (((!((other53927 == null)))) && ((((this53926__$1.constructor === other53927.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53926__$1.index,other53927.index)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53926__$1.line,other53927.line)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53926__$1.column,other53927.column)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53926__$1.__extmap,other53927.__extmap)))))))))));
}));

(instaparse.line_col.Cursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),null,new cljs.core.Keyword(null,"column","column",2078222095),null,new cljs.core.Keyword(null,"line","line",212345235),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new instaparse.line_col.Cursor(self__.index,self__.line,self__.column,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(instaparse.line_col.Cursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k53925){
var self__ = this;
var this__4468__auto____$1 = this;
var G__53954 = k53925;
var G__53954__$1 = (((G__53954 instanceof cljs.core.Keyword))?G__53954.fqn:null);
switch (G__53954__$1) {
case "index":
case "line":
case "column":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k53925);

}
}));

(instaparse.line_col.Cursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__53924){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__53957 = cljs.core.keyword_identical_QMARK_;
var expr__53958 = k__4470__auto__;
if(cljs.core.truth_((pred__53957.cljs$core$IFn$_invoke$arity$2 ? pred__53957.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"index","index",-1531685915),expr__53958) : pred__53957.call(null,new cljs.core.Keyword(null,"index","index",-1531685915),expr__53958)))){
return (new instaparse.line_col.Cursor(G__53924,self__.line,self__.column,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53957.cljs$core$IFn$_invoke$arity$2 ? pred__53957.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"line","line",212345235),expr__53958) : pred__53957.call(null,new cljs.core.Keyword(null,"line","line",212345235),expr__53958)))){
return (new instaparse.line_col.Cursor(self__.index,G__53924,self__.column,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53957.cljs$core$IFn$_invoke$arity$2 ? pred__53957.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"column","column",2078222095),expr__53958) : pred__53957.call(null,new cljs.core.Keyword(null,"column","column",2078222095),expr__53958)))){
return (new instaparse.line_col.Cursor(self__.index,self__.line,G__53924,self__.__meta,self__.__extmap,null));
} else {
return (new instaparse.line_col.Cursor(self__.index,self__.line,self__.column,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__53924),null));
}
}
}
}));

(instaparse.line_col.Cursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"index","index",-1531685915),self__.index,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"line","line",212345235),self__.line,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"column","column",2078222095),self__.column,null))], null),self__.__extmap));
}));

(instaparse.line_col.Cursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__53924){
var self__ = this;
var this__4460__auto____$1 = this;
return (new instaparse.line_col.Cursor(self__.index,self__.line,self__.column,G__53924,self__.__extmap,self__.__hash));
}));

(instaparse.line_col.Cursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(instaparse.line_col.Cursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"int","int",-100885395,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"line","line",1852876762,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"column","column",-576213674,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
}));

(instaparse.line_col.Cursor.cljs$lang$type = true);

(instaparse.line_col.Cursor.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"instaparse.line-col/Cursor",null,(1),null));
}));

(instaparse.line_col.Cursor.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"instaparse.line-col/Cursor");
}));

/**
 * Positional factory function for instaparse.line-col/Cursor.
 */
instaparse.line_col.__GT_Cursor = (function instaparse$line_col$__GT_Cursor(index,line,column){
return (new instaparse.line_col.Cursor(index,line,column,null,null,null));
});

/**
 * Factory function for instaparse.line-col/Cursor, taking a map of keywords to field values.
 */
instaparse.line_col.map__GT_Cursor = (function instaparse$line_col$map__GT_Cursor(G__53928){
var extmap__4501__auto__ = (function (){var G__53981 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__53928,new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095)], 0));
if(cljs.core.record_QMARK_(G__53928)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__53981);
} else {
return G__53981;
}
})();
return (new instaparse.line_col.Cursor(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(G__53928),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(G__53928),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(G__53928),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

instaparse.line_col.advance_cursor = (function instaparse$line_col$advance_cursor(cursor,text,new_index){
var new_index__$1 = (new_index | (0));
if((cursor.index <= new_index__$1)){
} else {
throw (new Error("Assert failed: (<= (.-index cursor) new-index)"));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cursor.index,new_index__$1)){
return cursor;
} else {
var index = cursor.index;
var line = cursor.line;
var column = cursor.column;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,new_index__$1)){
return (new instaparse.line_col.Cursor(index,line,column,null,null,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(text.charAt(index),"\n")){
var G__54006 = (index + (1));
var G__54007 = (line + (1));
var G__54008 = (1);
index = G__54006;
line = G__54007;
column = G__54008;
continue;
} else {
var G__54009 = (index + (1));
var G__54010 = line;
var G__54011 = (column + (1));
index = G__54009;
line = G__54010;
column = G__54011;
continue;

}
}
break;
}
}
});
/**
 * Given a string `text`, returns a function that takes an index into the string,
 * and returns a cursor, including line and column information.  For efficiency,
 * inputs must be fed into the function in increasing order.
 */
instaparse.line_col.make_line_col_fn = (function instaparse$line_col$make_line_col_fn(text){
var cursor_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((new instaparse.line_col.Cursor((0),(1),(1),null,null,null)));
return (function instaparse$line_col$make_line_col_fn_$_line_col(i){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cursor_state,instaparse.line_col.advance_cursor,text,i);

return cljs.core.deref(cursor_state);
});
});
instaparse.line_col.hiccup_add_line_col_spans = (function instaparse$line_col$hiccup_add_line_col_spans(line_col_fn,parse_tree){
var m = cljs.core.meta(parse_tree);
var start_index = new cljs.core.Keyword("instaparse.gll","start-index","instaparse.gll/start-index",404653620).cljs$core$IFn$_invoke$arity$1(m);
var end_index = new cljs.core.Keyword("instaparse.gll","end-index","instaparse.gll/end-index",-1851404441).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var and__4210__auto__ = start_index;
if(cljs.core.truth_(and__4210__auto__)){
return end_index;
} else {
return and__4210__auto__;
}
})())){
var start_cursor = (line_col_fn.cljs$core$IFn$_invoke$arity$1 ? line_col_fn.cljs$core$IFn$_invoke$arity$1(start_index) : line_col_fn.call(null,start_index));
var children = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(instaparse.line_col.hiccup_add_line_col_spans,line_col_fn),cljs.core.next(parse_tree)));
var end_cursor = (line_col_fn.cljs$core$IFn$_invoke$arity$1 ? line_col_fn.cljs$core$IFn$_invoke$arity$1(end_index) : line_col_fn.call(null,end_index));
return cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(parse_tree)], null),children),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.meta(parse_tree),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("instaparse.gll","start-line","instaparse.gll/start-line",768862483),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(start_cursor),new cljs.core.Keyword("instaparse.gll","start-column","instaparse.gll/start-column",-1490883898),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(start_cursor),new cljs.core.Keyword("instaparse.gll","end-line","instaparse.gll/end-line",-1706020282),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(end_cursor),new cljs.core.Keyword("instaparse.gll","end-column","instaparse.gll/end-column",942330297),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(end_cursor)], null)], 0)));
} else {
return parse_tree;
}
});
instaparse.line_col.enlive_add_line_col_spans = (function instaparse$line_col$enlive_add_line_col_spans(line_col_fn,parse_tree){
var m = cljs.core.meta(parse_tree);
var start_index = new cljs.core.Keyword("instaparse.gll","start-index","instaparse.gll/start-index",404653620).cljs$core$IFn$_invoke$arity$1(m);
var end_index = new cljs.core.Keyword("instaparse.gll","end-index","instaparse.gll/end-index",-1851404441).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var and__4210__auto__ = start_index;
if(cljs.core.truth_(and__4210__auto__)){
return end_index;
} else {
return and__4210__auto__;
}
})())){
var start_cursor = (line_col_fn.cljs$core$IFn$_invoke$arity$1 ? line_col_fn.cljs$core$IFn$_invoke$arity$1(start_index) : line_col_fn.call(null,start_index));
var children = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(instaparse.line_col.enlive_add_line_col_spans,line_col_fn),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(parse_tree)));
var end_cursor = (line_col_fn.cljs$core$IFn$_invoke$arity$1 ? line_col_fn.cljs$core$IFn$_invoke$arity$1(end_index) : line_col_fn.call(null,end_index));
return cljs.core.with_meta(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parse_tree,new cljs.core.Keyword(null,"content","content",15833224),children),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.meta(parse_tree),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("instaparse.gll","start-line","instaparse.gll/start-line",768862483),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(start_cursor),new cljs.core.Keyword("instaparse.gll","start-column","instaparse.gll/start-column",-1490883898),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(start_cursor),new cljs.core.Keyword("instaparse.gll","end-line","instaparse.gll/end-line",-1706020282),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(end_cursor),new cljs.core.Keyword("instaparse.gll","end-column","instaparse.gll/end-column",942330297),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(end_cursor)], null)], 0)));
} else {
return parse_tree;
}
});
/**
 * Given a string `text` and a `parse-tree` for text, return parse tree
 * with its metadata annotated with line and column info. The info can
 * then be found in the metadata map under the keywords:
 *  
 * :instaparse.gll/start-line, :instaparse.gll/start-column,
 * :instaparse.gll/end-line, :instaparse.gll/end-column
 * 
 * The start is inclusive, the end is exclusive. Lines and columns are 1-based.
 */
instaparse.line_col.add_line_col_spans = (function instaparse$line_col$add_line_col_spans(text,parse_tree){
var line_col_fn = instaparse.line_col.make_line_col_fn(text);
if((parse_tree == null)){
return null;
} else {
if(cljs.core.truth_((function (){var and__4210__auto__ = cljs.core.map_QMARK_(parse_tree);
if(and__4210__auto__){
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(parse_tree);
} else {
return and__4210__auto__;
}
})())){
return instaparse.line_col.enlive_add_line_col_spans(line_col_fn,parse_tree);
} else {
if(((cljs.core.vector_QMARK_(parse_tree)) && ((cljs.core.first(parse_tree) instanceof cljs.core.Keyword)))){
return instaparse.line_col.hiccup_add_line_col_spans(line_col_fn,parse_tree);
} else {
if(cljs.core.truth_((function (){var and__4210__auto__ = cljs.core.sequential_QMARK_(parse_tree);
if(and__4210__auto__){
var and__4210__auto____$1 = cljs.core.map_QMARK_(cljs.core.first(parse_tree));
if(and__4210__auto____$1){
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.first(parse_tree));
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
})())){
return instaparse.transform.map_preserving_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(instaparse.line_col.enlive_add_line_col_spans,line_col_fn),parse_tree);
} else {
if(((cljs.core.sequential_QMARK_(parse_tree)) && (((cljs.core.vector_QMARK_(cljs.core.first(parse_tree))) && ((cljs.core.first(cljs.core.first(parse_tree)) instanceof cljs.core.Keyword)))))){
return instaparse.transform.map_preserving_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(instaparse.line_col.hiccup_add_line_col_spans,line_col_fn),parse_tree);
} else {
if((parse_tree instanceof instaparse.gll.Failure)){
return parse_tree;
} else {
return instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid parse-tree, not recognized as either enlive or hiccup format."], 0));

}
}
}
}
}
}
});

//# sourceMappingURL=instaparse.line_col.js.map
