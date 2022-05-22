goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__55998 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__55999 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__55999);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__56004 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__56005 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__56005);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__56004);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__55998);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__56019 = arguments.length;
switch (G__56019) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__56037 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56037,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56037,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__56046_56065 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__56047_56066 = null;
var count__56048_56067 = (0);
var i__56049_56068 = (0);
while(true){
if((i__56049_56068 < count__56048_56067)){
var vec__56056_56069 = chunk__56047_56066.cljs$core$IIndexed$_nth$arity$2(null,i__56049_56068);
var container_56070 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56056_56069,(0),null);
var comp_56071 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56056_56069,(1),null);
reagent.dom.re_render_component(comp_56071,container_56070);


var G__56072 = seq__56046_56065;
var G__56073 = chunk__56047_56066;
var G__56074 = count__56048_56067;
var G__56075 = (i__56049_56068 + (1));
seq__56046_56065 = G__56072;
chunk__56047_56066 = G__56073;
count__56048_56067 = G__56074;
i__56049_56068 = G__56075;
continue;
} else {
var temp__5753__auto___56076 = cljs.core.seq(seq__56046_56065);
if(temp__5753__auto___56076){
var seq__56046_56077__$1 = temp__5753__auto___56076;
if(cljs.core.chunked_seq_QMARK_(seq__56046_56077__$1)){
var c__4638__auto___56078 = cljs.core.chunk_first(seq__56046_56077__$1);
var G__56079 = cljs.core.chunk_rest(seq__56046_56077__$1);
var G__56080 = c__4638__auto___56078;
var G__56081 = cljs.core.count(c__4638__auto___56078);
var G__56082 = (0);
seq__56046_56065 = G__56079;
chunk__56047_56066 = G__56080;
count__56048_56067 = G__56081;
i__56049_56068 = G__56082;
continue;
} else {
var vec__56059_56083 = cljs.core.first(seq__56046_56077__$1);
var container_56084 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56059_56083,(0),null);
var comp_56085 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56059_56083,(1),null);
reagent.dom.re_render_component(comp_56085,container_56084);


var G__56086 = cljs.core.next(seq__56046_56077__$1);
var G__56087 = null;
var G__56088 = (0);
var G__56089 = (0);
seq__56046_56065 = G__56086;
chunk__56047_56066 = G__56087;
count__56048_56067 = G__56088;
i__56049_56068 = G__56089;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
