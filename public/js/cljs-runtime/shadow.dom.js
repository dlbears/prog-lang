goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_50620 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_50620(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_50622 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_50622(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__49685 = coll;
var G__49686 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__49685,G__49686) : shadow.dom.lazy_native_coll_seq.call(null,G__49685,G__49686));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4212__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__49710 = arguments.length;
switch (G__49710) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__49721 = arguments.length;
switch (G__49721) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__49727 = arguments.length;
switch (G__49727) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__49734 = arguments.length;
switch (G__49734) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__49751 = arguments.length;
switch (G__49751) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__49761 = arguments.length;
switch (G__49761) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e49775){if((e49775 instanceof Object)){
var e = e49775;
return console.log("didnt support attachEvent",el,e);
} else {
throw e49775;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__49786 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__49787 = null;
var count__49788 = (0);
var i__49789 = (0);
while(true){
if((i__49789 < count__49788)){
var el = chunk__49787.cljs$core$IIndexed$_nth$arity$2(null,i__49789);
var handler_50653__$1 = ((function (seq__49786,chunk__49787,count__49788,i__49789,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__49786,chunk__49787,count__49788,i__49789,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_50653__$1);


var G__50654 = seq__49786;
var G__50655 = chunk__49787;
var G__50656 = count__49788;
var G__50657 = (i__49789 + (1));
seq__49786 = G__50654;
chunk__49787 = G__50655;
count__49788 = G__50656;
i__49789 = G__50657;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__49786);
if(temp__5753__auto__){
var seq__49786__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49786__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__49786__$1);
var G__50662 = cljs.core.chunk_rest(seq__49786__$1);
var G__50663 = c__4638__auto__;
var G__50664 = cljs.core.count(c__4638__auto__);
var G__50665 = (0);
seq__49786 = G__50662;
chunk__49787 = G__50663;
count__49788 = G__50664;
i__49789 = G__50665;
continue;
} else {
var el = cljs.core.first(seq__49786__$1);
var handler_50666__$1 = ((function (seq__49786,chunk__49787,count__49788,i__49789,el,seq__49786__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__49786,chunk__49787,count__49788,i__49789,el,seq__49786__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_50666__$1);


var G__50667 = cljs.core.next(seq__49786__$1);
var G__50668 = null;
var G__50669 = (0);
var G__50670 = (0);
seq__49786 = G__50667;
chunk__49787 = G__50668;
count__49788 = G__50669;
i__49789 = G__50670;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__49822 = arguments.length;
switch (G__49822) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__49847 = cljs.core.seq(events);
var chunk__49848 = null;
var count__49849 = (0);
var i__49850 = (0);
while(true){
if((i__49850 < count__49849)){
var vec__49859 = chunk__49848.cljs$core$IIndexed$_nth$arity$2(null,i__49850);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49859,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49859,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__50677 = seq__49847;
var G__50678 = chunk__49848;
var G__50679 = count__49849;
var G__50680 = (i__49850 + (1));
seq__49847 = G__50677;
chunk__49848 = G__50678;
count__49849 = G__50679;
i__49850 = G__50680;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__49847);
if(temp__5753__auto__){
var seq__49847__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49847__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__49847__$1);
var G__50681 = cljs.core.chunk_rest(seq__49847__$1);
var G__50682 = c__4638__auto__;
var G__50683 = cljs.core.count(c__4638__auto__);
var G__50684 = (0);
seq__49847 = G__50681;
chunk__49848 = G__50682;
count__49849 = G__50683;
i__49850 = G__50684;
continue;
} else {
var vec__49862 = cljs.core.first(seq__49847__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49862,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49862,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__50685 = cljs.core.next(seq__49847__$1);
var G__50686 = null;
var G__50687 = (0);
var G__50688 = (0);
seq__49847 = G__50685;
chunk__49848 = G__50686;
count__49849 = G__50687;
i__49850 = G__50688;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__49868 = cljs.core.seq(styles);
var chunk__49869 = null;
var count__49870 = (0);
var i__49871 = (0);
while(true){
if((i__49871 < count__49870)){
var vec__49887 = chunk__49869.cljs$core$IIndexed$_nth$arity$2(null,i__49871);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49887,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49887,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__50689 = seq__49868;
var G__50690 = chunk__49869;
var G__50691 = count__49870;
var G__50692 = (i__49871 + (1));
seq__49868 = G__50689;
chunk__49869 = G__50690;
count__49870 = G__50691;
i__49871 = G__50692;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__49868);
if(temp__5753__auto__){
var seq__49868__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49868__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__49868__$1);
var G__50693 = cljs.core.chunk_rest(seq__49868__$1);
var G__50694 = c__4638__auto__;
var G__50695 = cljs.core.count(c__4638__auto__);
var G__50696 = (0);
seq__49868 = G__50693;
chunk__49869 = G__50694;
count__49870 = G__50695;
i__49871 = G__50696;
continue;
} else {
var vec__49894 = cljs.core.first(seq__49868__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49894,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49894,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__50697 = cljs.core.next(seq__49868__$1);
var G__50698 = null;
var G__50699 = (0);
var G__50700 = (0);
seq__49868 = G__50697;
chunk__49869 = G__50698;
count__49870 = G__50699;
i__49871 = G__50700;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__49904_50701 = key;
var G__49904_50702__$1 = (((G__49904_50701 instanceof cljs.core.Keyword))?G__49904_50701.fqn:null);
switch (G__49904_50702__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_50705 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4212__auto__ = goog.string.startsWith(ks_50705,"data-");
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return goog.string.startsWith(ks_50705,"aria-");
}
})())){
el.setAttribute(ks_50705,value);
} else {
(el[ks_50705] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__49931){
var map__49932 = p__49931;
var map__49932__$1 = cljs.core.__destructure_map(map__49932);
var props = map__49932__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49932__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__49934 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49934,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49934,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49934,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__49937 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__49937,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__49937;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__49942 = arguments.length;
switch (G__49942) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__49945){
var vec__49946 = p__49945;
var seq__49947 = cljs.core.seq(vec__49946);
var first__49948 = cljs.core.first(seq__49947);
var seq__49947__$1 = cljs.core.next(seq__49947);
var nn = first__49948;
var first__49948__$1 = cljs.core.first(seq__49947__$1);
var seq__49947__$2 = cljs.core.next(seq__49947__$1);
var np = first__49948__$1;
var nc = seq__49947__$2;
var node = vec__49946;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__49949 = nn;
var G__49950 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__49949,G__49950) : create_fn.call(null,G__49949,G__49950));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__49951 = nn;
var G__49952 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__49951,G__49952) : create_fn.call(null,G__49951,G__49952));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__49955 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49955,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49955,(1),null);
var seq__49958_50708 = cljs.core.seq(node_children);
var chunk__49959_50709 = null;
var count__49960_50710 = (0);
var i__49961_50711 = (0);
while(true){
if((i__49961_50711 < count__49960_50710)){
var child_struct_50712 = chunk__49959_50709.cljs$core$IIndexed$_nth$arity$2(null,i__49961_50711);
var children_50713 = shadow.dom.dom_node(child_struct_50712);
if(cljs.core.seq_QMARK_(children_50713)){
var seq__50014_50714 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_50713));
var chunk__50016_50715 = null;
var count__50017_50716 = (0);
var i__50018_50717 = (0);
while(true){
if((i__50018_50717 < count__50017_50716)){
var child_50718 = chunk__50016_50715.cljs$core$IIndexed$_nth$arity$2(null,i__50018_50717);
if(cljs.core.truth_(child_50718)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_50718);


var G__50719 = seq__50014_50714;
var G__50720 = chunk__50016_50715;
var G__50721 = count__50017_50716;
var G__50722 = (i__50018_50717 + (1));
seq__50014_50714 = G__50719;
chunk__50016_50715 = G__50720;
count__50017_50716 = G__50721;
i__50018_50717 = G__50722;
continue;
} else {
var G__50723 = seq__50014_50714;
var G__50724 = chunk__50016_50715;
var G__50725 = count__50017_50716;
var G__50726 = (i__50018_50717 + (1));
seq__50014_50714 = G__50723;
chunk__50016_50715 = G__50724;
count__50017_50716 = G__50725;
i__50018_50717 = G__50726;
continue;
}
} else {
var temp__5753__auto___50727 = cljs.core.seq(seq__50014_50714);
if(temp__5753__auto___50727){
var seq__50014_50728__$1 = temp__5753__auto___50727;
if(cljs.core.chunked_seq_QMARK_(seq__50014_50728__$1)){
var c__4638__auto___50729 = cljs.core.chunk_first(seq__50014_50728__$1);
var G__50730 = cljs.core.chunk_rest(seq__50014_50728__$1);
var G__50731 = c__4638__auto___50729;
var G__50732 = cljs.core.count(c__4638__auto___50729);
var G__50733 = (0);
seq__50014_50714 = G__50730;
chunk__50016_50715 = G__50731;
count__50017_50716 = G__50732;
i__50018_50717 = G__50733;
continue;
} else {
var child_50734 = cljs.core.first(seq__50014_50728__$1);
if(cljs.core.truth_(child_50734)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_50734);


var G__50735 = cljs.core.next(seq__50014_50728__$1);
var G__50736 = null;
var G__50737 = (0);
var G__50738 = (0);
seq__50014_50714 = G__50735;
chunk__50016_50715 = G__50736;
count__50017_50716 = G__50737;
i__50018_50717 = G__50738;
continue;
} else {
var G__50739 = cljs.core.next(seq__50014_50728__$1);
var G__50740 = null;
var G__50741 = (0);
var G__50742 = (0);
seq__50014_50714 = G__50739;
chunk__50016_50715 = G__50740;
count__50017_50716 = G__50741;
i__50018_50717 = G__50742;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_50713);
}


var G__50743 = seq__49958_50708;
var G__50744 = chunk__49959_50709;
var G__50745 = count__49960_50710;
var G__50746 = (i__49961_50711 + (1));
seq__49958_50708 = G__50743;
chunk__49959_50709 = G__50744;
count__49960_50710 = G__50745;
i__49961_50711 = G__50746;
continue;
} else {
var temp__5753__auto___50747 = cljs.core.seq(seq__49958_50708);
if(temp__5753__auto___50747){
var seq__49958_50748__$1 = temp__5753__auto___50747;
if(cljs.core.chunked_seq_QMARK_(seq__49958_50748__$1)){
var c__4638__auto___50749 = cljs.core.chunk_first(seq__49958_50748__$1);
var G__50752 = cljs.core.chunk_rest(seq__49958_50748__$1);
var G__50753 = c__4638__auto___50749;
var G__50754 = cljs.core.count(c__4638__auto___50749);
var G__50755 = (0);
seq__49958_50708 = G__50752;
chunk__49959_50709 = G__50753;
count__49960_50710 = G__50754;
i__49961_50711 = G__50755;
continue;
} else {
var child_struct_50756 = cljs.core.first(seq__49958_50748__$1);
var children_50757 = shadow.dom.dom_node(child_struct_50756);
if(cljs.core.seq_QMARK_(children_50757)){
var seq__50033_50758 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_50757));
var chunk__50035_50759 = null;
var count__50036_50760 = (0);
var i__50037_50761 = (0);
while(true){
if((i__50037_50761 < count__50036_50760)){
var child_50762 = chunk__50035_50759.cljs$core$IIndexed$_nth$arity$2(null,i__50037_50761);
if(cljs.core.truth_(child_50762)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_50762);


var G__50763 = seq__50033_50758;
var G__50764 = chunk__50035_50759;
var G__50765 = count__50036_50760;
var G__50766 = (i__50037_50761 + (1));
seq__50033_50758 = G__50763;
chunk__50035_50759 = G__50764;
count__50036_50760 = G__50765;
i__50037_50761 = G__50766;
continue;
} else {
var G__50769 = seq__50033_50758;
var G__50770 = chunk__50035_50759;
var G__50771 = count__50036_50760;
var G__50772 = (i__50037_50761 + (1));
seq__50033_50758 = G__50769;
chunk__50035_50759 = G__50770;
count__50036_50760 = G__50771;
i__50037_50761 = G__50772;
continue;
}
} else {
var temp__5753__auto___50773__$1 = cljs.core.seq(seq__50033_50758);
if(temp__5753__auto___50773__$1){
var seq__50033_50774__$1 = temp__5753__auto___50773__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50033_50774__$1)){
var c__4638__auto___50775 = cljs.core.chunk_first(seq__50033_50774__$1);
var G__50776 = cljs.core.chunk_rest(seq__50033_50774__$1);
var G__50777 = c__4638__auto___50775;
var G__50778 = cljs.core.count(c__4638__auto___50775);
var G__50779 = (0);
seq__50033_50758 = G__50776;
chunk__50035_50759 = G__50777;
count__50036_50760 = G__50778;
i__50037_50761 = G__50779;
continue;
} else {
var child_50780 = cljs.core.first(seq__50033_50774__$1);
if(cljs.core.truth_(child_50780)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_50780);


var G__50781 = cljs.core.next(seq__50033_50774__$1);
var G__50782 = null;
var G__50783 = (0);
var G__50784 = (0);
seq__50033_50758 = G__50781;
chunk__50035_50759 = G__50782;
count__50036_50760 = G__50783;
i__50037_50761 = G__50784;
continue;
} else {
var G__50785 = cljs.core.next(seq__50033_50774__$1);
var G__50786 = null;
var G__50787 = (0);
var G__50788 = (0);
seq__50033_50758 = G__50785;
chunk__50035_50759 = G__50786;
count__50036_50760 = G__50787;
i__50037_50761 = G__50788;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_50757);
}


var G__50789 = cljs.core.next(seq__49958_50748__$1);
var G__50790 = null;
var G__50791 = (0);
var G__50792 = (0);
seq__49958_50708 = G__50789;
chunk__49959_50709 = G__50790;
count__49960_50710 = G__50791;
i__49961_50711 = G__50792;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__50099 = cljs.core.seq(node);
var chunk__50100 = null;
var count__50101 = (0);
var i__50102 = (0);
while(true){
if((i__50102 < count__50101)){
var n = chunk__50100.cljs$core$IIndexed$_nth$arity$2(null,i__50102);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__50793 = seq__50099;
var G__50794 = chunk__50100;
var G__50795 = count__50101;
var G__50796 = (i__50102 + (1));
seq__50099 = G__50793;
chunk__50100 = G__50794;
count__50101 = G__50795;
i__50102 = G__50796;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50099);
if(temp__5753__auto__){
var seq__50099__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50099__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__50099__$1);
var G__50797 = cljs.core.chunk_rest(seq__50099__$1);
var G__50798 = c__4638__auto__;
var G__50799 = cljs.core.count(c__4638__auto__);
var G__50800 = (0);
seq__50099 = G__50797;
chunk__50100 = G__50798;
count__50101 = G__50799;
i__50102 = G__50800;
continue;
} else {
var n = cljs.core.first(seq__50099__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__50801 = cljs.core.next(seq__50099__$1);
var G__50802 = null;
var G__50803 = (0);
var G__50804 = (0);
seq__50099 = G__50801;
chunk__50100 = G__50802;
count__50101 = G__50803;
i__50102 = G__50804;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__50126 = arguments.length;
switch (G__50126) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__50133 = arguments.length;
switch (G__50133) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__50143 = arguments.length;
switch (G__50143) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4212__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4824__auto__ = [];
var len__4818__auto___50809 = arguments.length;
var i__4819__auto___50810 = (0);
while(true){
if((i__4819__auto___50810 < len__4818__auto___50809)){
args__4824__auto__.push((arguments[i__4819__auto___50810]));

var G__50812 = (i__4819__auto___50810 + (1));
i__4819__auto___50810 = G__50812;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__50155_50814 = cljs.core.seq(nodes);
var chunk__50156_50815 = null;
var count__50157_50816 = (0);
var i__50158_50817 = (0);
while(true){
if((i__50158_50817 < count__50157_50816)){
var node_50818 = chunk__50156_50815.cljs$core$IIndexed$_nth$arity$2(null,i__50158_50817);
fragment.appendChild(shadow.dom._to_dom(node_50818));


var G__50819 = seq__50155_50814;
var G__50820 = chunk__50156_50815;
var G__50821 = count__50157_50816;
var G__50822 = (i__50158_50817 + (1));
seq__50155_50814 = G__50819;
chunk__50156_50815 = G__50820;
count__50157_50816 = G__50821;
i__50158_50817 = G__50822;
continue;
} else {
var temp__5753__auto___50823 = cljs.core.seq(seq__50155_50814);
if(temp__5753__auto___50823){
var seq__50155_50824__$1 = temp__5753__auto___50823;
if(cljs.core.chunked_seq_QMARK_(seq__50155_50824__$1)){
var c__4638__auto___50825 = cljs.core.chunk_first(seq__50155_50824__$1);
var G__50826 = cljs.core.chunk_rest(seq__50155_50824__$1);
var G__50827 = c__4638__auto___50825;
var G__50828 = cljs.core.count(c__4638__auto___50825);
var G__50829 = (0);
seq__50155_50814 = G__50826;
chunk__50156_50815 = G__50827;
count__50157_50816 = G__50828;
i__50158_50817 = G__50829;
continue;
} else {
var node_50831 = cljs.core.first(seq__50155_50824__$1);
fragment.appendChild(shadow.dom._to_dom(node_50831));


var G__50832 = cljs.core.next(seq__50155_50824__$1);
var G__50833 = null;
var G__50834 = (0);
var G__50835 = (0);
seq__50155_50814 = G__50832;
chunk__50156_50815 = G__50833;
count__50157_50816 = G__50834;
i__50158_50817 = G__50835;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq50152){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50152));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__50163_50836 = cljs.core.seq(scripts);
var chunk__50164_50837 = null;
var count__50165_50838 = (0);
var i__50166_50839 = (0);
while(true){
if((i__50166_50839 < count__50165_50838)){
var vec__50180_50840 = chunk__50164_50837.cljs$core$IIndexed$_nth$arity$2(null,i__50166_50839);
var script_tag_50841 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50180_50840,(0),null);
var script_body_50842 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50180_50840,(1),null);
eval(script_body_50842);


var G__50843 = seq__50163_50836;
var G__50844 = chunk__50164_50837;
var G__50845 = count__50165_50838;
var G__50846 = (i__50166_50839 + (1));
seq__50163_50836 = G__50843;
chunk__50164_50837 = G__50844;
count__50165_50838 = G__50845;
i__50166_50839 = G__50846;
continue;
} else {
var temp__5753__auto___50847 = cljs.core.seq(seq__50163_50836);
if(temp__5753__auto___50847){
var seq__50163_50848__$1 = temp__5753__auto___50847;
if(cljs.core.chunked_seq_QMARK_(seq__50163_50848__$1)){
var c__4638__auto___50849 = cljs.core.chunk_first(seq__50163_50848__$1);
var G__50850 = cljs.core.chunk_rest(seq__50163_50848__$1);
var G__50851 = c__4638__auto___50849;
var G__50852 = cljs.core.count(c__4638__auto___50849);
var G__50853 = (0);
seq__50163_50836 = G__50850;
chunk__50164_50837 = G__50851;
count__50165_50838 = G__50852;
i__50166_50839 = G__50853;
continue;
} else {
var vec__50186_50854 = cljs.core.first(seq__50163_50848__$1);
var script_tag_50855 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50186_50854,(0),null);
var script_body_50856 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50186_50854,(1),null);
eval(script_body_50856);


var G__50857 = cljs.core.next(seq__50163_50848__$1);
var G__50858 = null;
var G__50859 = (0);
var G__50860 = (0);
seq__50163_50836 = G__50857;
chunk__50164_50837 = G__50858;
count__50165_50838 = G__50859;
i__50166_50839 = G__50860;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__50193){
var vec__50194 = p__50193;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50194,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50194,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__50219 = arguments.length;
switch (G__50219) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__50251 = cljs.core.seq(style_keys);
var chunk__50252 = null;
var count__50253 = (0);
var i__50254 = (0);
while(true){
if((i__50254 < count__50253)){
var it = chunk__50252.cljs$core$IIndexed$_nth$arity$2(null,i__50254);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__50868 = seq__50251;
var G__50869 = chunk__50252;
var G__50870 = count__50253;
var G__50871 = (i__50254 + (1));
seq__50251 = G__50868;
chunk__50252 = G__50869;
count__50253 = G__50870;
i__50254 = G__50871;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50251);
if(temp__5753__auto__){
var seq__50251__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50251__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__50251__$1);
var G__50873 = cljs.core.chunk_rest(seq__50251__$1);
var G__50874 = c__4638__auto__;
var G__50875 = cljs.core.count(c__4638__auto__);
var G__50876 = (0);
seq__50251 = G__50873;
chunk__50252 = G__50874;
count__50253 = G__50875;
i__50254 = G__50876;
continue;
} else {
var it = cljs.core.first(seq__50251__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__50877 = cljs.core.next(seq__50251__$1);
var G__50878 = null;
var G__50879 = (0);
var G__50880 = (0);
seq__50251 = G__50877;
chunk__50252 = G__50878;
count__50253 = G__50879;
i__50254 = G__50880;
continue;
}
} else {
return null;
}
}
break;
}
});

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
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k50273,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__50289 = k50273;
var G__50289__$1 = (((G__50289 instanceof cljs.core.Keyword))?G__50289.fqn:null);
switch (G__50289__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50273,else__4464__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__50300){
var vec__50306 = p__50300;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50306,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50306,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50272){
var self__ = this;
var G__50272__$1 = this;
return (new cljs.core.RecordIter((0),G__50272__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50275,other50276){
var self__ = this;
var this50275__$1 = this;
return (((!((other50276 == null)))) && ((((this50275__$1.constructor === other50276.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50275__$1.x,other50276.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50275__$1.y,other50276.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50275__$1.__extmap,other50276.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k50273){
var self__ = this;
var this__4468__auto____$1 = this;
var G__50329 = k50273;
var G__50329__$1 = (((G__50329 instanceof cljs.core.Keyword))?G__50329.fqn:null);
switch (G__50329__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k50273);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__50272){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__50332 = cljs.core.keyword_identical_QMARK_;
var expr__50333 = k__4470__auto__;
if(cljs.core.truth_((pred__50332.cljs$core$IFn$_invoke$arity$2 ? pred__50332.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__50333) : pred__50332.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__50333)))){
return (new shadow.dom.Coordinate(G__50272,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50332.cljs$core$IFn$_invoke$arity$2 ? pred__50332.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__50333) : pred__50332.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__50333)))){
return (new shadow.dom.Coordinate(self__.x,G__50272,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__50272),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__50272){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__50272,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__50282){
var extmap__4501__auto__ = (function (){var G__50342 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50282,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__50282)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50342);
} else {
return G__50342;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__50282),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__50282),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

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
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k50353,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__50364 = k50353;
var G__50364__$1 = (((G__50364 instanceof cljs.core.Keyword))?G__50364.fqn:null);
switch (G__50364__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50353,else__4464__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__50371){
var vec__50372 = p__50371;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50372,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50372,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Size{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50352){
var self__ = this;
var G__50352__$1 = this;
return (new cljs.core.RecordIter((0),G__50352__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50354,other50355){
var self__ = this;
var this50354__$1 = this;
return (((!((other50355 == null)))) && ((((this50354__$1.constructor === other50355.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50354__$1.w,other50355.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50354__$1.h,other50355.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50354__$1.__extmap,other50355.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k50353){
var self__ = this;
var this__4468__auto____$1 = this;
var G__50385 = k50353;
var G__50385__$1 = (((G__50385 instanceof cljs.core.Keyword))?G__50385.fqn:null);
switch (G__50385__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k50353);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__50352){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__50386 = cljs.core.keyword_identical_QMARK_;
var expr__50387 = k__4470__auto__;
if(cljs.core.truth_((pred__50386.cljs$core$IFn$_invoke$arity$2 ? pred__50386.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__50387) : pred__50386.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__50387)))){
return (new shadow.dom.Size(G__50352,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50386.cljs$core$IFn$_invoke$arity$2 ? pred__50386.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__50387) : pred__50386.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__50387)))){
return (new shadow.dom.Size(self__.w,G__50352,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__50352),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__50352){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__50352,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__50359){
var extmap__4501__auto__ = (function (){var G__50390 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50359,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__50359)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50390);
} else {
return G__50390;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__50359),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__50359),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4692__auto__ = opts;
var l__4693__auto__ = a__4692__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4693__auto__)){
var G__51043 = (i + (1));
var G__51044 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__51043;
ret = G__51044;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__50405){
var vec__50406 = p__50405;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50406,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50406,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__50410 = arguments.length;
switch (G__50410) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__51053 = ps;
var G__51054 = (i + (1));
el__$1 = G__51053;
i = G__51054;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__50418 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50418,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50418,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50418,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__50421_51064 = cljs.core.seq(props);
var chunk__50422_51065 = null;
var count__50423_51066 = (0);
var i__50424_51067 = (0);
while(true){
if((i__50424_51067 < count__50423_51066)){
var vec__50432_51068 = chunk__50422_51065.cljs$core$IIndexed$_nth$arity$2(null,i__50424_51067);
var k_51069 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50432_51068,(0),null);
var v_51070 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50432_51068,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_51069);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_51069),v_51070);


var G__51071 = seq__50421_51064;
var G__51072 = chunk__50422_51065;
var G__51073 = count__50423_51066;
var G__51074 = (i__50424_51067 + (1));
seq__50421_51064 = G__51071;
chunk__50422_51065 = G__51072;
count__50423_51066 = G__51073;
i__50424_51067 = G__51074;
continue;
} else {
var temp__5753__auto___51075 = cljs.core.seq(seq__50421_51064);
if(temp__5753__auto___51075){
var seq__50421_51076__$1 = temp__5753__auto___51075;
if(cljs.core.chunked_seq_QMARK_(seq__50421_51076__$1)){
var c__4638__auto___51077 = cljs.core.chunk_first(seq__50421_51076__$1);
var G__51078 = cljs.core.chunk_rest(seq__50421_51076__$1);
var G__51079 = c__4638__auto___51077;
var G__51080 = cljs.core.count(c__4638__auto___51077);
var G__51081 = (0);
seq__50421_51064 = G__51078;
chunk__50422_51065 = G__51079;
count__50423_51066 = G__51080;
i__50424_51067 = G__51081;
continue;
} else {
var vec__50435_51082 = cljs.core.first(seq__50421_51076__$1);
var k_51083 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50435_51082,(0),null);
var v_51084 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50435_51082,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_51083);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_51083),v_51084);


var G__51085 = cljs.core.next(seq__50421_51076__$1);
var G__51086 = null;
var G__51087 = (0);
var G__51088 = (0);
seq__50421_51064 = G__51085;
chunk__50422_51065 = G__51086;
count__50423_51066 = G__51087;
i__50424_51067 = G__51088;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__50442 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50442,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50442,(1),null);
var seq__50445_51090 = cljs.core.seq(node_children);
var chunk__50447_51091 = null;
var count__50448_51092 = (0);
var i__50449_51093 = (0);
while(true){
if((i__50449_51093 < count__50448_51092)){
var child_struct_51095 = chunk__50447_51091.cljs$core$IIndexed$_nth$arity$2(null,i__50449_51093);
if((!((child_struct_51095 == null)))){
if(typeof child_struct_51095 === 'string'){
var text_51098 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_51098),child_struct_51095].join(''));
} else {
var children_51099 = shadow.dom.svg_node(child_struct_51095);
if(cljs.core.seq_QMARK_(children_51099)){
var seq__50466_51100 = cljs.core.seq(children_51099);
var chunk__50468_51101 = null;
var count__50469_51102 = (0);
var i__50470_51103 = (0);
while(true){
if((i__50470_51103 < count__50469_51102)){
var child_51104 = chunk__50468_51101.cljs$core$IIndexed$_nth$arity$2(null,i__50470_51103);
if(cljs.core.truth_(child_51104)){
node.appendChild(child_51104);


var G__51105 = seq__50466_51100;
var G__51106 = chunk__50468_51101;
var G__51107 = count__50469_51102;
var G__51108 = (i__50470_51103 + (1));
seq__50466_51100 = G__51105;
chunk__50468_51101 = G__51106;
count__50469_51102 = G__51107;
i__50470_51103 = G__51108;
continue;
} else {
var G__51109 = seq__50466_51100;
var G__51110 = chunk__50468_51101;
var G__51111 = count__50469_51102;
var G__51112 = (i__50470_51103 + (1));
seq__50466_51100 = G__51109;
chunk__50468_51101 = G__51110;
count__50469_51102 = G__51111;
i__50470_51103 = G__51112;
continue;
}
} else {
var temp__5753__auto___51113 = cljs.core.seq(seq__50466_51100);
if(temp__5753__auto___51113){
var seq__50466_51114__$1 = temp__5753__auto___51113;
if(cljs.core.chunked_seq_QMARK_(seq__50466_51114__$1)){
var c__4638__auto___51115 = cljs.core.chunk_first(seq__50466_51114__$1);
var G__51116 = cljs.core.chunk_rest(seq__50466_51114__$1);
var G__51117 = c__4638__auto___51115;
var G__51118 = cljs.core.count(c__4638__auto___51115);
var G__51119 = (0);
seq__50466_51100 = G__51116;
chunk__50468_51101 = G__51117;
count__50469_51102 = G__51118;
i__50470_51103 = G__51119;
continue;
} else {
var child_51120 = cljs.core.first(seq__50466_51114__$1);
if(cljs.core.truth_(child_51120)){
node.appendChild(child_51120);


var G__51121 = cljs.core.next(seq__50466_51114__$1);
var G__51122 = null;
var G__51123 = (0);
var G__51124 = (0);
seq__50466_51100 = G__51121;
chunk__50468_51101 = G__51122;
count__50469_51102 = G__51123;
i__50470_51103 = G__51124;
continue;
} else {
var G__51125 = cljs.core.next(seq__50466_51114__$1);
var G__51126 = null;
var G__51127 = (0);
var G__51128 = (0);
seq__50466_51100 = G__51125;
chunk__50468_51101 = G__51126;
count__50469_51102 = G__51127;
i__50470_51103 = G__51128;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_51099);
}
}


var G__51130 = seq__50445_51090;
var G__51131 = chunk__50447_51091;
var G__51132 = count__50448_51092;
var G__51133 = (i__50449_51093 + (1));
seq__50445_51090 = G__51130;
chunk__50447_51091 = G__51131;
count__50448_51092 = G__51132;
i__50449_51093 = G__51133;
continue;
} else {
var G__51134 = seq__50445_51090;
var G__51135 = chunk__50447_51091;
var G__51136 = count__50448_51092;
var G__51137 = (i__50449_51093 + (1));
seq__50445_51090 = G__51134;
chunk__50447_51091 = G__51135;
count__50448_51092 = G__51136;
i__50449_51093 = G__51137;
continue;
}
} else {
var temp__5753__auto___51138 = cljs.core.seq(seq__50445_51090);
if(temp__5753__auto___51138){
var seq__50445_51139__$1 = temp__5753__auto___51138;
if(cljs.core.chunked_seq_QMARK_(seq__50445_51139__$1)){
var c__4638__auto___51140 = cljs.core.chunk_first(seq__50445_51139__$1);
var G__51145 = cljs.core.chunk_rest(seq__50445_51139__$1);
var G__51146 = c__4638__auto___51140;
var G__51147 = cljs.core.count(c__4638__auto___51140);
var G__51148 = (0);
seq__50445_51090 = G__51145;
chunk__50447_51091 = G__51146;
count__50448_51092 = G__51147;
i__50449_51093 = G__51148;
continue;
} else {
var child_struct_51149 = cljs.core.first(seq__50445_51139__$1);
if((!((child_struct_51149 == null)))){
if(typeof child_struct_51149 === 'string'){
var text_51151 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_51151),child_struct_51149].join(''));
} else {
var children_51155 = shadow.dom.svg_node(child_struct_51149);
if(cljs.core.seq_QMARK_(children_51155)){
var seq__50472_51156 = cljs.core.seq(children_51155);
var chunk__50474_51157 = null;
var count__50475_51158 = (0);
var i__50476_51159 = (0);
while(true){
if((i__50476_51159 < count__50475_51158)){
var child_51160 = chunk__50474_51157.cljs$core$IIndexed$_nth$arity$2(null,i__50476_51159);
if(cljs.core.truth_(child_51160)){
node.appendChild(child_51160);


var G__51161 = seq__50472_51156;
var G__51162 = chunk__50474_51157;
var G__51163 = count__50475_51158;
var G__51164 = (i__50476_51159 + (1));
seq__50472_51156 = G__51161;
chunk__50474_51157 = G__51162;
count__50475_51158 = G__51163;
i__50476_51159 = G__51164;
continue;
} else {
var G__51165 = seq__50472_51156;
var G__51166 = chunk__50474_51157;
var G__51167 = count__50475_51158;
var G__51168 = (i__50476_51159 + (1));
seq__50472_51156 = G__51165;
chunk__50474_51157 = G__51166;
count__50475_51158 = G__51167;
i__50476_51159 = G__51168;
continue;
}
} else {
var temp__5753__auto___51169__$1 = cljs.core.seq(seq__50472_51156);
if(temp__5753__auto___51169__$1){
var seq__50472_51170__$1 = temp__5753__auto___51169__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50472_51170__$1)){
var c__4638__auto___51171 = cljs.core.chunk_first(seq__50472_51170__$1);
var G__51172 = cljs.core.chunk_rest(seq__50472_51170__$1);
var G__51173 = c__4638__auto___51171;
var G__51174 = cljs.core.count(c__4638__auto___51171);
var G__51175 = (0);
seq__50472_51156 = G__51172;
chunk__50474_51157 = G__51173;
count__50475_51158 = G__51174;
i__50476_51159 = G__51175;
continue;
} else {
var child_51176 = cljs.core.first(seq__50472_51170__$1);
if(cljs.core.truth_(child_51176)){
node.appendChild(child_51176);


var G__51177 = cljs.core.next(seq__50472_51170__$1);
var G__51178 = null;
var G__51179 = (0);
var G__51180 = (0);
seq__50472_51156 = G__51177;
chunk__50474_51157 = G__51178;
count__50475_51158 = G__51179;
i__50476_51159 = G__51180;
continue;
} else {
var G__51181 = cljs.core.next(seq__50472_51170__$1);
var G__51182 = null;
var G__51183 = (0);
var G__51184 = (0);
seq__50472_51156 = G__51181;
chunk__50474_51157 = G__51182;
count__50475_51158 = G__51183;
i__50476_51159 = G__51184;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_51155);
}
}


var G__51185 = cljs.core.next(seq__50445_51139__$1);
var G__51186 = null;
var G__51187 = (0);
var G__51188 = (0);
seq__50445_51090 = G__51185;
chunk__50447_51091 = G__51186;
count__50448_51092 = G__51187;
i__50449_51093 = G__51188;
continue;
} else {
var G__51189 = cljs.core.next(seq__50445_51139__$1);
var G__51190 = null;
var G__51191 = (0);
var G__51192 = (0);
seq__50445_51090 = G__51189;
chunk__50447_51091 = G__51190;
count__50448_51092 = G__51191;
i__50449_51093 = G__51192;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___51197 = arguments.length;
var i__4819__auto___51198 = (0);
while(true){
if((i__4819__auto___51198 < len__4818__auto___51197)){
args__4824__auto__.push((arguments[i__4819__auto___51198]));

var G__51199 = (i__4819__auto___51198 + (1));
i__4819__auto___51198 = G__51199;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq50486){
var G__50487 = cljs.core.first(seq50486);
var seq50486__$1 = cljs.core.next(seq50486);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50487,seq50486__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__50489 = arguments.length;
switch (G__50489) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4210__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4210__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4210__auto__;
}
})())){
var c__47052__auto___51201 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47053__auto__ = (function (){var switch__46890__auto__ = (function (state_50501){
var state_val_50502 = (state_50501[(1)]);
if((state_val_50502 === (1))){
var state_50501__$1 = state_50501;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50501__$1,(2),once_or_cleanup);
} else {
if((state_val_50502 === (2))){
var inst_50498 = (state_50501[(2)]);
var inst_50499 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_50501__$1 = (function (){var statearr_50604 = state_50501;
(statearr_50604[(7)] = inst_50498);

return statearr_50604;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_50501__$1,inst_50499);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__46891__auto__ = null;
var shadow$dom$state_machine__46891__auto____0 = (function (){
var statearr_50608 = [null,null,null,null,null,null,null,null];
(statearr_50608[(0)] = shadow$dom$state_machine__46891__auto__);

(statearr_50608[(1)] = (1));

return statearr_50608;
});
var shadow$dom$state_machine__46891__auto____1 = (function (state_50501){
while(true){
var ret_value__46892__auto__ = (function (){try{while(true){
var result__46893__auto__ = switch__46890__auto__(state_50501);
if(cljs.core.keyword_identical_QMARK_(result__46893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46893__auto__;
}
break;
}
}catch (e50609){var ex__46894__auto__ = e50609;
var statearr_50610_51205 = state_50501;
(statearr_50610_51205[(2)] = ex__46894__auto__);


if(cljs.core.seq((state_50501[(4)]))){
var statearr_50611_51206 = state_50501;
(statearr_50611_51206[(1)] = cljs.core.first((state_50501[(4)])));

} else {
throw ex__46894__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51207 = state_50501;
state_50501 = G__51207;
continue;
} else {
return ret_value__46892__auto__;
}
break;
}
});
shadow$dom$state_machine__46891__auto__ = function(state_50501){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__46891__auto____0.call(this);
case 1:
return shadow$dom$state_machine__46891__auto____1.call(this,state_50501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__46891__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__46891__auto____0;
shadow$dom$state_machine__46891__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__46891__auto____1;
return shadow$dom$state_machine__46891__auto__;
})()
})();
var state__47054__auto__ = (function (){var statearr_50616 = f__47053__auto__();
(statearr_50616[(6)] = c__47052__auto___51201);

return statearr_50616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47054__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
