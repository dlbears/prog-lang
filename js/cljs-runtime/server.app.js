goog.provide('server.app');
server.app.str__GT_int = (function server$app$str__GT_int(s){
return (s | (0));
});
server.app.optional = (function server$app$optional(pattern){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pattern),"?"].join('');
});
server.app.alphabet_pattern = "[A-z0-9_]+";
server.app.operator_pattern = "('*'|'+'|'-')";
server.app.operator_re = "[\\*\\+\\-]";
server.app.unary_negation_pattern = "('*'|'+'|'-'|'(')'-'+";
server.app.letter_pattern = "[A-z_]";
server.app.natural_pattern = "[1-9]";
server.app.literal_pattern = "-?([1-9]+[0-9]*)|0";
server.app.matches_pattern_QMARK_ = (function server$app$matches_pattern_QMARK_(pattern){
return (function (p1__59662_SHARP_){
var matches = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(p1__59662_SHARP_)))?null:cljs.core.re_matches(cljs.core.re_pattern(pattern),p1__59662_SHARP_));
var something_QMARK_ = (!((matches == null)));
return something_QMARK_;
});
});
server.app.matches_literal_QMARK_ = server.app.matches_pattern_QMARK_(server.app.literal_pattern);
server.app.matches_operator_QMARK_ = server.app.matches_pattern_QMARK_(server.app.operator_re);
server.app.re__GT_gram = (function server$app$re__GT_gram(pattern){
return ["#'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pattern),"'"].join('');
});
server.app.w_STAR_ = " <#'\\s*'> ";
server.app.wrap_w_STAR_ = (function server$app$wrap_w_STAR_(t){
return [server.app.w_STAR_,cljs.core.str.cljs$core$IFn$_invoke$arity$1(t),server.app.w_STAR_].join('');
});
server.app.lang_grammar = ["\n                      <Program> = Assignment*\n                      Assignment = Identifier",server.app.wrap_w_STAR_("<'='>"),"Exp <';'>",server.app.w_STAR_,"\n                      <Exp> = Exp ",server.app.wrap_w_STAR_("'+'")," Term | Exp ",server.app.wrap_w_STAR_("'-'")," Term | Term\n                      <Term> = Term ",server.app.wrap_w_STAR_("'*'")," Fact | Fact\n                      <Fact> = ",server.app.wrap_w_STAR_("'('")," Exp ",server.app.wrap_w_STAR_("')'")," | '-' Fact | <'+'> Fact | Literal | Identifier \n                      Identifier = Letter (Letter | Digit)*\n                      Literal = '0' | (NonZeroDigit Digit*)\n                      <Letter> = ",server.app.re__GT_gram(server.app.letter_pattern),"\n                      <NonZeroDigit> = ",server.app.re__GT_gram(server.app.natural_pattern),"\n                      <Digit> = '0'|NonZeroDigit"].join('');
server.app.unary_grammar = ["<Root> = (S|Rest)*\n                    <S> = Rest* Unary Rest+\n                    Unary = ",server.app.unary_negation_pattern,"\n                    <Rest> = '('? ",server.app.wrap_w_STAR_(server.app.re__GT_gram(server.app.alphabet_pattern))," ')'? ",server.app.wrap_w_STAR_(server.app.optional(server.app.operator_pattern))," Rest* "].join('');
cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(["<Root> = (S|Rest)*\n                    <S> = Rest* Unary Rest+\n                    Unary = ",server.app.unary_negation_pattern,"\n                    <Rest> = '('? ",server.app.wrap_w_STAR_(server.app.re__GT_gram(server.app.alphabet_pattern))," ')'? ",server.app.wrap_w_STAR_(server.app.optional(server.app.operator_pattern))," Rest* "].join(''));
server.app.handle_negation = (function server$app$handle_negation(acc,token){
var tokens_processed = cljs.core.count(acc);
var start_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),tokens_processed);
try{if(((cljs.core.vector_QMARK_(token)) && ((cljs.core.count(token) >= (2))))){
try{var token_left__59664 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(token,(0),(2));
if(((cljs.core.vector_QMARK_(token_left__59664)) && ((cljs.core.count(token_left__59664) === (2))))){
try{var token_left__59664_0__59666 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(token_left__59664,(0));
if(cljs.core.keyword_identical_QMARK_(token_left__59664_0__59666,new cljs.core.Keyword(null,"Unary","Unary",1552162988))){
var head = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(token_left__59664,(1));
var rest = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(token,(2));
var addition_head_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(head,"+");
var negation_head_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(head,"-");
var negation_count = cljs.core.count(rest);
var negation_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.mod(negation_count,(2)));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(acc,(function (){try{if((negation_QMARK_ === true)){
try{if((start_QMARK_ === true)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["~"], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e59705){if((e59705 instanceof Error)){
var e__54880__auto__ = e59705;
if((e__54880__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54880__auto__;
}
} else {
throw e59705;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e59689){if((e59689 instanceof Error)){
var e__54880__auto__ = e59689;
if((e__54880__auto__ === cljs.core.match.backtrack)){
try{if((negation_QMARK_ === false)){
try{if((start_QMARK_ === true)){
return acc;
} else {
throw cljs.core.match.backtrack;

}
}catch (e59702){if((e59702 instanceof Error)){
var e__54880__auto____$1 = e59702;
if((e__54880__auto____$1 === cljs.core.match.backtrack)){
try{if((addition_head_QMARK_ === false)){
try{if((negation_head_QMARK_ === false)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [head], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e59704){if((e59704 instanceof Error)){
var e__54880__auto____$2 = e59704;
if((e__54880__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54880__auto____$2;
}
} else {
throw e59704;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e59703){if((e59703 instanceof Error)){
var e__54880__auto____$2 = e59703;
if((e__54880__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54880__auto____$2;
}
} else {
throw e59703;

}
}} else {
throw e__54880__auto____$1;
}
} else {
throw e59702;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e59690){if((e59690 instanceof Error)){
var e__54880__auto____$1 = e59690;
if((e__54880__auto____$1 === cljs.core.match.backtrack)){
try{if((negation_QMARK_ === true)){
try{if((addition_head_QMARK_ === false)){
try{if((negation_head_QMARK_ === false)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [head,"~"], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e59701){if((e59701 instanceof Error)){
var e__54880__auto____$2 = e59701;
if((e__54880__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54880__auto____$2;
}
} else {
throw e59701;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e59700){if((e59700 instanceof Error)){
var e__54880__auto____$2 = e59700;
if((e__54880__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54880__auto____$2;
}
} else {
throw e59700;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e59691){if((e59691 instanceof Error)){
var e__54880__auto____$2 = e59691;
if((e__54880__auto____$2 === cljs.core.match.backtrack)){
try{if((negation_QMARK_ === false)){
try{if((negation_head_QMARK_ === true)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-"], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e59699){if((e59699 instanceof Error)){
var e__54880__auto____$3 = e59699;
if((e__54880__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54880__auto____$3;
}
} else {
throw e59699;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e59692){if((e59692 instanceof Error)){
var e__54880__auto____$3 = e59692;
if((e__54880__auto____$3 === cljs.core.match.backtrack)){
try{if((negation_QMARK_ === true)){
try{if((addition_head_QMARK_ === true)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-"], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e59698){if((e59698 instanceof Error)){
var e__54880__auto____$4 = e59698;
if((e__54880__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54880__auto____$4;
}
} else {
throw e59698;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e59693){if((e59693 instanceof Error)){
var e__54880__auto____$4 = e59693;
if((e__54880__auto____$4 === cljs.core.match.backtrack)){
try{if((negation_QMARK_ === false)){
try{if((addition_head_QMARK_ === true)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+"], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e59697){if((e59697 instanceof Error)){
var e__54880__auto____$5 = e59697;
if((e__54880__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54880__auto____$5;
}
} else {
throw e59697;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e59694){if((e59694 instanceof Error)){
var e__54880__auto____$5 = e59694;
if((e__54880__auto____$5 === cljs.core.match.backtrack)){
try{if((negation_QMARK_ === true)){
try{if((negation_head_QMARK_ === true)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+"], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e59696){if((e59696 instanceof Error)){
var e__54880__auto____$6 = e59696;
if((e__54880__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54880__auto____$6;
}
} else {
throw e59696;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e59695){if((e59695 instanceof Error)){
var e__54880__auto____$6 = e59695;
if((e__54880__auto____$6 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_QMARK_)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(negation_QMARK_)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(addition_head_QMARK_)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(negation_head_QMARK_)].join('')));
} else {
throw e__54880__auto____$6;
}
} else {
throw e59695;

}
}} else {
throw e__54880__auto____$5;
}
} else {
throw e59694;

}
}} else {
throw e__54880__auto____$4;
}
} else {
throw e59693;

}
}} else {
throw e__54880__auto____$3;
}
} else {
throw e59692;

}
}} else {
throw e__54880__auto____$2;
}
} else {
throw e59691;

}
}} else {
throw e__54880__auto____$1;
}
} else {
throw e59690;

}
}} else {
throw e__54880__auto__;
}
} else {
throw e59689;

}
}})());
} else {
throw cljs.core.match.backtrack;

}
}catch (e59670){if((e59670 instanceof Error)){
var e__54880__auto__ = e59670;
if((e__54880__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54880__auto__;
}
} else {
throw e59670;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e59669){if((e59669 instanceof Error)){
var e__54880__auto__ = e59669;
if((e__54880__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54880__auto__;
}
} else {
throw e59669;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e59668){if((e59668 instanceof Error)){
var e__54880__auto__ = e59668;
if((e__54880__auto__ === cljs.core.match.backtrack)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(acc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [token], null));
} else {
throw e__54880__auto__;
}
} else {
throw e59668;

}
}});
server.app.process_unary = (function server$app$process_unary(source){
var parse_unary = instaparse.core.parser(server.app.unary_grammar);
cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1((parse_unary.cljs$core$IFn$_invoke$arity$1 ? parse_unary.cljs$core$IFn$_invoke$arity$1(source) : parse_unary.call(null,source)));

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(server.app.handle_negation,cljs.core.PersistentVector.EMPTY,(parse_unary.cljs$core$IFn$_invoke$arity$1 ? parse_unary.cljs$core$IFn$_invoke$arity$1(source) : parse_unary.call(null,source)));
});
server.app.convert_postfix = (function server$app$convert_postfix(p__59709,litOrOp){
var map__59710 = p__59709;
var map__59710__$1 = cljs.core.__destructure_map(map__59710);
var stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59710__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var postfix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59710__$1,new cljs.core.Keyword(null,"postfix","postfix",-571724593));
try{if((litOrOp === "~")){
if((cljs.core.count(postfix) > (0))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stack","stack",-793405930),stack,new cljs.core.Keyword(null,"postfix","postfix",-571724593),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(postfix,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),"*"], null))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(stack,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*"], null)),new cljs.core.Keyword(null,"postfix","postfix",-571724593),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(postfix,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1)], null))], null);
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e59712){if((e59712 instanceof Error)){
var e__54880__auto__ = e59712;
if((e__54880__auto__ === cljs.core.match.backtrack)){
try{if((litOrOp === "(")){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(stack,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [litOrOp], null)),new cljs.core.Keyword(null,"postfix","postfix",-571724593),postfix], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e59713){if((e59713 instanceof Error)){
var e__54880__auto____$1 = e59713;
if((e__54880__auto____$1 === cljs.core.match.backtrack)){
try{if((litOrOp === ")")){
var popped = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__59706_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("(",p1__59706_SHARP_);
}),cljs.core.reverse(stack));
var remaining = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__59707_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("(",p1__59707_SHARP_);
}),stack);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stack","stack",-793405930),remaining,new cljs.core.Keyword(null,"postfix","postfix",-571724593),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(postfix,popped)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e59714){if((e59714 instanceof Error)){
var e__54880__auto____$2 = e59714;
if((e__54880__auto____$2 === cljs.core.match.backtrack)){
var next_pf = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(postfix,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [litOrOp], null));
var op_pf_QMARK_ = (cljs.core.count(next_pf) > (1));
var op_stack_QMARK_ = server.app.matches_operator_QMARK_(cljs.core.last(stack));
var paren_stack_QMARK_ = (!((cljs.core.some((function (p1__59708_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("(",p1__59708_SHARP_);
}),stack) == null)));
var is_lit_QMARK_ = server.app.matches_literal_QMARK_(litOrOp);
var newStack = (function (){try{if((is_lit_QMARK_ === true)){
try{if((op_stack_QMARK_ === true)){
try{if((op_pf_QMARK_ === true)){
try{if((paren_stack_QMARK_ === false)){
return cljs.core.butlast(stack);
} else {
throw cljs.core.match.backtrack;

}
}catch (e59734){if((e59734 instanceof Error)){
var e__54880__auto____$3 = e59734;
if((e__54880__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54880__auto____$3;
}
} else {
throw e59734;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e59733){if((e59733 instanceof Error)){
var e__54880__auto____$3 = e59733;
if((e__54880__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54880__auto____$3;
}
} else {
throw e59733;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e59732){if((e59732 instanceof Error)){
var e__54880__auto____$3 = e59732;
if((e__54880__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54880__auto____$3;
}
} else {
throw e59732;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e59725){if((e59725 instanceof Error)){
var e__54880__auto____$3 = e59725;
if((e__54880__auto____$3 === cljs.core.match.backtrack)){
try{if((is_lit_QMARK_ === false)){
try{if((op_stack_QMARK_ === true)){
try{if((op_pf_QMARK_ === true)){
try{if((paren_stack_QMARK_ === false)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(stack),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [litOrOp], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e59731){if((e59731 instanceof Error)){
var e__54880__auto____$4 = e59731;
if((e__54880__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54880__auto____$4;
}
} else {
throw e59731;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e59730){if((e59730 instanceof Error)){
var e__54880__auto____$4 = e59730;
if((e__54880__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54880__auto____$4;
}
} else {
throw e59730;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e59729){if((e59729 instanceof Error)){
var e__54880__auto____$4 = e59729;
if((e__54880__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54880__auto____$4;
}
} else {
throw e59729;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e59726){if((e59726 instanceof Error)){
var e__54880__auto____$4 = e59726;
if((e__54880__auto____$4 === cljs.core.match.backtrack)){
try{if((is_lit_QMARK_ === true)){
return stack;
} else {
throw cljs.core.match.backtrack;

}
}catch (e59727){if((e59727 instanceof Error)){
var e__54880__auto____$5 = e59727;
if((e__54880__auto____$5 === cljs.core.match.backtrack)){
try{if((is_lit_QMARK_ === false)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(stack,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [litOrOp], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e59728){if((e59728 instanceof Error)){
var e__54880__auto____$6 = e59728;
if((e__54880__auto____$6 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op_stack_QMARK_)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op_pf_QMARK_)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(paren_stack_QMARK_)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(is_lit_QMARK_)].join('')));
} else {
throw e__54880__auto____$6;
}
} else {
throw e59728;

}
}} else {
throw e__54880__auto____$5;
}
} else {
throw e59727;

}
}} else {
throw e__54880__auto____$4;
}
} else {
throw e59726;

}
}} else {
throw e__54880__auto____$3;
}
} else {
throw e59725;

}
}})();
var newPostFix = (function (){try{if((is_lit_QMARK_ === false)){
try{if((op_stack_QMARK_ === true)){
try{if((op_pf_QMARK_ === true)){
try{if((paren_stack_QMARK_ === true)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(postfix,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last(stack)], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e59758){if((e59758 instanceof Error)){
var e__54880__auto____$3 = e59758;
if((e__54880__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54880__auto____$3;
}
} else {
throw e59758;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e59757){if((e59757 instanceof Error)){
var e__54880__auto____$3 = e59757;
if((e__54880__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54880__auto____$3;
}
} else {
throw e59757;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e59756){if((e59756 instanceof Error)){
var e__54880__auto____$3 = e59756;
if((e__54880__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54880__auto____$3;
}
} else {
throw e59756;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e59745){if((e59745 instanceof Error)){
var e__54880__auto____$3 = e59745;
if((e__54880__auto____$3 === cljs.core.match.backtrack)){
try{if((is_lit_QMARK_ === true)){
try{if((op_stack_QMARK_ === true)){
try{if((op_pf_QMARK_ === true)){
try{if((paren_stack_QMARK_ === false)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(next_pf,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last(stack)], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e59755){if((e59755 instanceof Error)){
var e__54880__auto____$4 = e59755;
if((e__54880__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54880__auto____$4;
}
} else {
throw e59755;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e59754){if((e59754 instanceof Error)){
var e__54880__auto____$4 = e59754;
if((e__54880__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54880__auto____$4;
}
} else {
throw e59754;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e59753){if((e59753 instanceof Error)){
var e__54880__auto____$4 = e59753;
if((e__54880__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54880__auto____$4;
}
} else {
throw e59753;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e59746){if((e59746 instanceof Error)){
var e__54880__auto____$4 = e59746;
if((e__54880__auto____$4 === cljs.core.match.backtrack)){
try{if((is_lit_QMARK_ === false)){
try{if((op_stack_QMARK_ === true)){
try{if((op_pf_QMARK_ === true)){
try{if((paren_stack_QMARK_ === false)){
return next_pf;
} else {
throw cljs.core.match.backtrack;

}
}catch (e59752){if((e59752 instanceof Error)){
var e__54880__auto____$5 = e59752;
if((e__54880__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54880__auto____$5;
}
} else {
throw e59752;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e59751){if((e59751 instanceof Error)){
var e__54880__auto____$5 = e59751;
if((e__54880__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54880__auto____$5;
}
} else {
throw e59751;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e59750){if((e59750 instanceof Error)){
var e__54880__auto____$5 = e59750;
if((e__54880__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54880__auto____$5;
}
} else {
throw e59750;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e59747){if((e59747 instanceof Error)){
var e__54880__auto____$5 = e59747;
if((e__54880__auto____$5 === cljs.core.match.backtrack)){
try{if((is_lit_QMARK_ === true)){
return next_pf;
} else {
throw cljs.core.match.backtrack;

}
}catch (e59748){if((e59748 instanceof Error)){
var e__54880__auto____$6 = e59748;
if((e__54880__auto____$6 === cljs.core.match.backtrack)){
try{if((is_lit_QMARK_ === false)){
return postfix;
} else {
throw cljs.core.match.backtrack;

}
}catch (e59749){if((e59749 instanceof Error)){
var e__54880__auto____$7 = e59749;
if((e__54880__auto____$7 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op_stack_QMARK_)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op_pf_QMARK_)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(paren_stack_QMARK_)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(is_lit_QMARK_)].join('')));
} else {
throw e__54880__auto____$7;
}
} else {
throw e59749;

}
}} else {
throw e__54880__auto____$6;
}
} else {
throw e59748;

}
}} else {
throw e__54880__auto____$5;
}
} else {
throw e59747;

}
}} else {
throw e__54880__auto____$4;
}
} else {
throw e59746;

}
}} else {
throw e__54880__auto____$3;
}
} else {
throw e59745;

}
}})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stack","stack",-793405930),newStack,new cljs.core.Keyword(null,"postfix","postfix",-571724593),newPostFix], null);
} else {
throw e__54880__auto____$2;
}
} else {
throw e59714;

}
}} else {
throw e__54880__auto____$1;
}
} else {
throw e59713;

}
}} else {
throw e__54880__auto__;
}
} else {
throw e59712;

}
}});
server.app.reduce_postfix = (function server$app$reduce_postfix(input){
var map__59759 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(server.app.convert_postfix,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"postfix","postfix",-571724593),cljs.core.PersistentVector.EMPTY], null),input);
var map__59759__$1 = cljs.core.__destructure_map(map__59759);
var stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59759__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var postfix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59759__$1,new cljs.core.Keyword(null,"postfix","postfix",-571724593));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(stack))){
return postfix;
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(postfix,cljs.core.reverse(stack));
}
});
server.app.solve_postfix = (function server$app$solve_postfix(s,v){
var digit_QMARK_ = cljs.core.integer_QMARK_(v);
if(digit_QMARK_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null));
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(cljs.core.butlast(s)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$2(v,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last(cljs.core.butlast(s)),cljs.core.last(s)], null))], null));
}
});
server.app.to_primitive = (function server$app$to_primitive(t){
var token = cljs.core.str.cljs$core$IFn$_invoke$arity$1(t);
var digit_QMARK_ = server.app.matches_literal_QMARK_(token);
if(cljs.core.truth_(digit_QMARK_)){
return server.app.str__GT_int(token);
} else {
try{if((t === "+")){
return (function (p1__59760_SHARP_,p2__59761_SHARP_){
return (p1__59760_SHARP_ + p2__59761_SHARP_);
});
} else {
throw cljs.core.match.backtrack;

}
}catch (e59767){if((e59767 instanceof Error)){
var e__54880__auto__ = e59767;
if((e__54880__auto__ === cljs.core.match.backtrack)){
try{if((t === "-")){
return (function (p1__59762_SHARP_,p2__59763_SHARP_){
return (p1__59762_SHARP_ - p2__59763_SHARP_);
});
} else {
throw cljs.core.match.backtrack;

}
}catch (e59768){if((e59768 instanceof Error)){
var e__54880__auto____$1 = e59768;
if((e__54880__auto____$1 === cljs.core.match.backtrack)){
try{if((t === "*")){
return (function (p1__59764_SHARP_,p2__59765_SHARP_){
return (p1__59764_SHARP_ * p2__59765_SHARP_);
});
} else {
throw cljs.core.match.backtrack;

}
}catch (e59769){if((e59769 instanceof Error)){
var e__54880__auto____$2 = e59769;
if((e__54880__auto____$2 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join('')));
} else {
throw e__54880__auto____$2;
}
} else {
throw e59769;

}
}} else {
throw e__54880__auto____$1;
}
} else {
throw e59768;

}
}} else {
throw e__54880__auto__;
}
} else {
throw e59767;

}
}}
});
server.app.assign_lit = (function server$app$assign_lit(vars,name,lit){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(vars,name,server.app.str__GT_int(lit));
});
server.app.resolve_id = (function server$app$resolve_id(vars,id){
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,id);
var value_QMARK_ = (!((value == null)));
if(value_QMARK_){
return value;
} else {
throw "LookupError: Undeclared Variable";
}
});
server.app.resolve_all = (function server$app$resolve_all(vars,exp_terms){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (et){
try{if(((cljs.core.vector_QMARK_(et)) && ((cljs.core.count(et) === 2)))){
try{var et_0__59771 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(et,(0));
if(cljs.core.keyword_identical_QMARK_(et_0__59771,new cljs.core.Keyword(null,"Literal","Literal",-641820482))){
var lit = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(et,(1));
return server.app.str__GT_int(lit);
} else {
throw cljs.core.match.backtrack;

}
}catch (e59774){if((e59774 instanceof Error)){
var e__54880__auto__ = e59774;
if((e__54880__auto__ === cljs.core.match.backtrack)){
try{var et_0__59771 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(et,(0));
if(cljs.core.keyword_identical_QMARK_(et_0__59771,new cljs.core.Keyword(null,"Identifier","Identifier",1495725166))){
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(et,(1));
return server.app.resolve_id(vars,id);
} else {
throw cljs.core.match.backtrack;

}
}catch (e59775){if((e59775 instanceof Error)){
var e__54880__auto____$1 = e59775;
if((e__54880__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54880__auto____$1;
}
} else {
throw e59775;

}
}} else {
throw e__54880__auto__;
}
} else {
throw e59774;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e59773){if((e59773 instanceof Error)){
var e__54880__auto__ = e59773;
if((e__54880__auto__ === cljs.core.match.backtrack)){
return et;
} else {
throw e__54880__auto__;
}
} else {
throw e59773;

}
}}),exp_terms);
});
server.app.matcher = (function server$app$matcher(variable_map,assignment){
try{if(((cljs.core.vector_QMARK_(assignment)) && ((cljs.core.count(assignment) === 3)))){
try{var assignment_0__59777 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(assignment,(0));
if(cljs.core.keyword_identical_QMARK_(assignment_0__59777,new cljs.core.Keyword(null,"Assignment","Assignment",241990793))){
try{var assignment_1__59778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(assignment,(1));
if(((cljs.core.vector_QMARK_(assignment_1__59778)) && ((cljs.core.count(assignment_1__59778) === 2)))){
try{var assignment_1__59778_0__59780 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(assignment_1__59778,(0));
if(cljs.core.keyword_identical_QMARK_(assignment_1__59778_0__59780,new cljs.core.Keyword(null,"Identifier","Identifier",1495725166))){
try{var assignment_2__59779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(assignment,(2));
if(((cljs.core.vector_QMARK_(assignment_2__59779)) && ((cljs.core.count(assignment_2__59779) >= (1))))){
try{var assignment_2__59779_left__59782 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(assignment_2__59779,(0),(1));
if(((cljs.core.vector_QMARK_(assignment_2__59779_left__59782)) && ((cljs.core.count(assignment_2__59779_left__59782) === (1))))){
try{var assignment_2__59779_left__59782_0__59784 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(assignment_2__59779_left__59782,(0));
if(cljs.core.keyword_identical_QMARK_(assignment_2__59779_left__59782_0__59784,new cljs.core.Keyword(null,"Literal","Literal",-641820482))){
var rest = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(assignment_2__59779,(1));
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(assignment_1__59778,(1));
return server.app.assign_lit(variable_map,name,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,rest));
} else {
throw cljs.core.match.backtrack;

}
}catch (e59806){if((e59806 instanceof Error)){
var e__54880__auto__ = e59806;
if((e__54880__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54880__auto__;
}
} else {
throw e59806;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e59805){if((e59805 instanceof Error)){
var e__54880__auto__ = e59805;
if((e__54880__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54880__auto__;
}
} else {
throw e59805;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e59802){if((e59802 instanceof Error)){
var e__54880__auto__ = e59802;
if((e__54880__auto__ === cljs.core.match.backtrack)){
try{var assignment_2__59779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(assignment,(2));
if(((cljs.core.vector_QMARK_(assignment_2__59779)) && ((cljs.core.count(assignment_2__59779) === 2)))){
try{var assignment_2__59779_0__59785 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(assignment_2__59779,(0));
if(cljs.core.keyword_identical_QMARK_(assignment_2__59779_0__59785,new cljs.core.Keyword(null,"Identifier","Identifier",1495725166))){
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(assignment_2__59779,(1));
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(assignment_1__59778,(1));
return server.app.assign_lit(variable_map,name,server.app.resolve_id(variable_map,id));
} else {
throw cljs.core.match.backtrack;

}
}catch (e59804){if((e59804 instanceof Error)){
var e__54880__auto____$1 = e59804;
if((e__54880__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54880__auto____$1;
}
} else {
throw e59804;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e59803){if((e59803 instanceof Error)){
var e__54880__auto____$1 = e59803;
if((e__54880__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54880__auto____$1;
}
} else {
throw e59803;

}
}} else {
throw e__54880__auto__;
}
} else {
throw e59802;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e59801){if((e59801 instanceof Error)){
var e__54880__auto__ = e59801;
if((e__54880__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54880__auto__;
}
} else {
throw e59801;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e59800){if((e59800 instanceof Error)){
var e__54880__auto__ = e59800;
if((e__54880__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54880__auto__;
}
} else {
throw e59800;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e59799){if((e59799 instanceof Error)){
var e__54880__auto__ = e59799;
if((e__54880__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54880__auto__;
}
} else {
throw e59799;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e59793){if((e59793 instanceof Error)){
var e__54880__auto__ = e59793;
if((e__54880__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(assignment)) && ((cljs.core.count(assignment) >= (2))))){
try{var assignment_left__59787 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(assignment,(0),(2));
if(((cljs.core.vector_QMARK_(assignment_left__59787)) && ((cljs.core.count(assignment_left__59787) === (2))))){
try{var assignment_left__59787_0__59789 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(assignment_left__59787,(0));
if(cljs.core.keyword_identical_QMARK_(assignment_left__59787_0__59789,new cljs.core.Keyword(null,"Assignment","Assignment",241990793))){
try{var assignment_left__59787_1__59790 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(assignment_left__59787,(1));
if(((cljs.core.vector_QMARK_(assignment_left__59787_1__59790)) && ((cljs.core.count(assignment_left__59787_1__59790) === 2)))){
try{var assignment_left__59787_1__59790_0__59791 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(assignment_left__59787_1__59790,(0));
if(cljs.core.keyword_identical_QMARK_(assignment_left__59787_1__59790_0__59791,new cljs.core.Keyword(null,"Identifier","Identifier",1495725166))){
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(assignment_left__59787_1__59790,(1));
var r = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(assignment,(2));
var resolved_ids = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,server.app.resolve_all(variable_map,r));
var resolved_unary = server.app.process_unary(resolved_ids);
var postfix_transform = server.app.reduce_postfix(resolved_unary);
var primitive_transform = cljs.core.map.cljs$core$IFn$_invoke$arity$2(server.app.to_primitive,postfix_transform);
var result = cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(server.app.solve_postfix,cljs.core.PersistentVector.EMPTY,primitive_transform));
return server.app.assign_lit(variable_map,name,result);
} else {
throw cljs.core.match.backtrack;

}
}catch (e59798){if((e59798 instanceof Error)){
var e__54880__auto____$1 = e59798;
if((e__54880__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54880__auto____$1;
}
} else {
throw e59798;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e59797){if((e59797 instanceof Error)){
var e__54880__auto____$1 = e59797;
if((e__54880__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54880__auto____$1;
}
} else {
throw e59797;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e59796){if((e59796 instanceof Error)){
var e__54880__auto____$1 = e59796;
if((e__54880__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54880__auto____$1;
}
} else {
throw e59796;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e59795){if((e59795 instanceof Error)){
var e__54880__auto____$1 = e59795;
if((e__54880__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54880__auto____$1;
}
} else {
throw e59795;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e59794){if((e59794 instanceof Error)){
var e__54880__auto____$1 = e59794;
if((e__54880__auto____$1 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(assignment)].join('')));
} else {
throw e__54880__auto____$1;
}
} else {
throw e59794;

}
}} else {
throw e__54880__auto__;
}
} else {
throw e59793;

}
}});
server.app.parser = instaparse.core.parser(server.app.lang_grammar);
server.app.interpreter = (function server$app$interpreter(source){
var AST = (server.app.parser.cljs$core$IFn$_invoke$arity$1 ? server.app.parser.cljs$core$IFn$_invoke$arity$1(source) : server.app.parser.call(null,source));
var variables = cljs.core.PersistentArrayMap.EMPTY;
if(cljs.core.truth_(new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(AST))){
return ["Syntax Error: Expecting { ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__59807_SHARP_,p2__59808_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__59807_SHARP_)," or ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"expecting","expecting",-57706705).cljs$core$IFn$_invoke$arity$1(p2__59808_SHARP_))].join('');
}),"",new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(AST)))))," }"].join('');
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(server.app.matcher,variables,AST);
}
});
server.app.input_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");

server.app.output_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
server.app.app = (function server$app$app(props){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Source Code: ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (evt){
return cljs.core.reset_BANG_(server.app.input_state,evt.target.value);
}),new cljs.core.Keyword(null,"rows","rows",850049680),"10",new cljs.core.Keyword(null,"columns","columns",1998437288),"50"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(server.app.output_state,server.app.interpreter(cljs.core.deref(server.app.input_state)));
})], null),"Submit"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Output: "], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(server.app.output_state))], null)], null);
});
server.app._main = (function server$app$_main(){
var root = document.getElementById("root");
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [server.app.app], null),root);
});
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Running...!"], 0));

server.app._main();

//# sourceMappingURL=server.app.js.map
