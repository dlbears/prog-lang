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
return (function (p1__44397_SHARP_){
var matches = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(p1__44397_SHARP_)))?null:cljs.core.re_matches(cljs.core.re_pattern(pattern),p1__44397_SHARP_));
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
server.app.handle_negation = (function server$app$handle_negation(acc,token){
var tokens_processed = cljs.core.count(acc);
var start_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),tokens_processed);
try{if(((cljs.core.vector_QMARK_(token)) && ((cljs.core.count(token) >= (2))))){
try{var token_left__44399 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(token,(0),(2));
if(((cljs.core.vector_QMARK_(token_left__44399)) && ((cljs.core.count(token_left__44399) === (2))))){
try{var token_left__44399_0__44401 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(token_left__44399,(0));
if(cljs.core.keyword_identical_QMARK_(token_left__44399_0__44401,new cljs.core.Keyword(null,"Unary","Unary",1552162988))){
var head = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(token_left__44399,(1));
var rest = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(token,(2));
var addition_head_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(head,"+");
var negation_head_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(head,"-");
var negation_count = cljs.core.count(rest);
var negation_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.mod(negation_count,(2)));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(acc,(function (){try{if((negation_QMARK_ === false)){
try{if((start_QMARK_ === true)){
try{if((addition_head_QMARK_ === false)){
try{if((negation_head_QMARK_ === true)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["~"], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44446){if((e44446 instanceof Error)){
var e__43179__auto__ = e44446;
if((e__43179__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43179__auto__;
}
} else {
throw e44446;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44445){if((e44445 instanceof Error)){
var e__43179__auto__ = e44445;
if((e__43179__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43179__auto__;
}
} else {
throw e44445;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44444){if((e44444 instanceof Error)){
var e__43179__auto__ = e44444;
if((e__43179__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43179__auto__;
}
} else {
throw e44444;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44424){if((e44424 instanceof Error)){
var e__43179__auto__ = e44424;
if((e__43179__auto__ === cljs.core.match.backtrack)){
try{if((negation_QMARK_ === true)){
try{if((start_QMARK_ === true)){
try{if((addition_head_QMARK_ === false)){
try{if((negation_head_QMARK_ === true)){
return acc;
} else {
throw cljs.core.match.backtrack;

}
}catch (e44443){if((e44443 instanceof Error)){
var e__43179__auto____$1 = e44443;
if((e__43179__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43179__auto____$1;
}
} else {
throw e44443;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44442){if((e44442 instanceof Error)){
var e__43179__auto____$1 = e44442;
if((e__43179__auto____$1 === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["~"], null);
} else {
throw e__43179__auto____$1;
}
} else {
throw e44442;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44441){if((e44441 instanceof Error)){
var e__43179__auto____$1 = e44441;
if((e__43179__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43179__auto____$1;
}
} else {
throw e44441;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44425){if((e44425 instanceof Error)){
var e__43179__auto____$1 = e44425;
if((e__43179__auto____$1 === cljs.core.match.backtrack)){
try{if((negation_QMARK_ === false)){
try{if((start_QMARK_ === true)){
return acc;
} else {
throw cljs.core.match.backtrack;

}
}catch (e44438){if((e44438 instanceof Error)){
var e__43179__auto____$2 = e44438;
if((e__43179__auto____$2 === cljs.core.match.backtrack)){
try{if((addition_head_QMARK_ === false)){
try{if((negation_head_QMARK_ === false)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [head], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44440){if((e44440 instanceof Error)){
var e__43179__auto____$3 = e44440;
if((e__43179__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43179__auto____$3;
}
} else {
throw e44440;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44439){if((e44439 instanceof Error)){
var e__43179__auto____$3 = e44439;
if((e__43179__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43179__auto____$3;
}
} else {
throw e44439;

}
}} else {
throw e__43179__auto____$2;
}
} else {
throw e44438;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44426){if((e44426 instanceof Error)){
var e__43179__auto____$2 = e44426;
if((e__43179__auto____$2 === cljs.core.match.backtrack)){
try{if((negation_QMARK_ === true)){
try{if((addition_head_QMARK_ === false)){
try{if((negation_head_QMARK_ === false)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [head,"~"], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44437){if((e44437 instanceof Error)){
var e__43179__auto____$3 = e44437;
if((e__43179__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43179__auto____$3;
}
} else {
throw e44437;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44436){if((e44436 instanceof Error)){
var e__43179__auto____$3 = e44436;
if((e__43179__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43179__auto____$3;
}
} else {
throw e44436;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44427){if((e44427 instanceof Error)){
var e__43179__auto____$3 = e44427;
if((e__43179__auto____$3 === cljs.core.match.backtrack)){
try{if((negation_QMARK_ === false)){
try{if((negation_head_QMARK_ === true)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-"], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44435){if((e44435 instanceof Error)){
var e__43179__auto____$4 = e44435;
if((e__43179__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43179__auto____$4;
}
} else {
throw e44435;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44428){if((e44428 instanceof Error)){
var e__43179__auto____$4 = e44428;
if((e__43179__auto____$4 === cljs.core.match.backtrack)){
try{if((negation_QMARK_ === true)){
try{if((addition_head_QMARK_ === true)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-"], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44434){if((e44434 instanceof Error)){
var e__43179__auto____$5 = e44434;
if((e__43179__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43179__auto____$5;
}
} else {
throw e44434;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44429){if((e44429 instanceof Error)){
var e__43179__auto____$5 = e44429;
if((e__43179__auto____$5 === cljs.core.match.backtrack)){
try{if((negation_QMARK_ === false)){
try{if((addition_head_QMARK_ === true)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+"], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44433){if((e44433 instanceof Error)){
var e__43179__auto____$6 = e44433;
if((e__43179__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43179__auto____$6;
}
} else {
throw e44433;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44430){if((e44430 instanceof Error)){
var e__43179__auto____$6 = e44430;
if((e__43179__auto____$6 === cljs.core.match.backtrack)){
try{if((negation_QMARK_ === true)){
try{if((negation_head_QMARK_ === true)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+"], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44432){if((e44432 instanceof Error)){
var e__43179__auto____$7 = e44432;
if((e__43179__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43179__auto____$7;
}
} else {
throw e44432;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44431){if((e44431 instanceof Error)){
var e__43179__auto____$7 = e44431;
if((e__43179__auto____$7 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_QMARK_)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(negation_QMARK_)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(addition_head_QMARK_)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(negation_head_QMARK_)].join('')));
} else {
throw e__43179__auto____$7;
}
} else {
throw e44431;

}
}} else {
throw e__43179__auto____$6;
}
} else {
throw e44430;

}
}} else {
throw e__43179__auto____$5;
}
} else {
throw e44429;

}
}} else {
throw e__43179__auto____$4;
}
} else {
throw e44428;

}
}} else {
throw e__43179__auto____$3;
}
} else {
throw e44427;

}
}} else {
throw e__43179__auto____$2;
}
} else {
throw e44426;

}
}} else {
throw e__43179__auto____$1;
}
} else {
throw e44425;

}
}} else {
throw e__43179__auto__;
}
} else {
throw e44424;

}
}})());
} else {
throw cljs.core.match.backtrack;

}
}catch (e44405){if((e44405 instanceof Error)){
var e__43179__auto__ = e44405;
if((e__43179__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43179__auto__;
}
} else {
throw e44405;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44404){if((e44404 instanceof Error)){
var e__43179__auto__ = e44404;
if((e__43179__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43179__auto__;
}
} else {
throw e44404;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44403){if((e44403 instanceof Error)){
var e__43179__auto__ = e44403;
if((e__43179__auto__ === cljs.core.match.backtrack)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(acc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [token], null));
} else {
throw e__43179__auto__;
}
} else {
throw e44403;

}
}});
server.app.process_unary = (function server$app$process_unary(source){
var parse_unary = instaparse.core.parser(server.app.unary_grammar);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(server.app.handle_negation,cljs.core.PersistentVector.EMPTY,(parse_unary.cljs$core$IFn$_invoke$arity$1 ? parse_unary.cljs$core$IFn$_invoke$arity$1(source) : parse_unary.call(null,source)));
});
server.app.convert_postfix = (function server$app$convert_postfix(p__44450,litOrOp){
var map__44451 = p__44450;
var map__44451__$1 = cljs.core.__destructure_map(map__44451);
var stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44451__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var postfix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44451__$1,new cljs.core.Keyword(null,"postfix","postfix",-571724593));
try{if((litOrOp === "~")){
if((cljs.core.count(postfix) > (0))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stack","stack",-793405930),stack,new cljs.core.Keyword(null,"postfix","postfix",-571724593),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(postfix,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),"*"], null))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(stack,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*"], null)),new cljs.core.Keyword(null,"postfix","postfix",-571724593),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(postfix,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1)], null))], null);
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e44453){if((e44453 instanceof Error)){
var e__43179__auto__ = e44453;
if((e__43179__auto__ === cljs.core.match.backtrack)){
try{if((litOrOp === "(")){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(stack,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [litOrOp], null)),new cljs.core.Keyword(null,"postfix","postfix",-571724593),postfix], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44454){if((e44454 instanceof Error)){
var e__43179__auto____$1 = e44454;
if((e__43179__auto____$1 === cljs.core.match.backtrack)){
try{if((litOrOp === ")")){
var popped = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__44447_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("(",p1__44447_SHARP_);
}),cljs.core.reverse(stack));
var remaining = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__44448_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("(",p1__44448_SHARP_);
}),stack);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stack","stack",-793405930),remaining,new cljs.core.Keyword(null,"postfix","postfix",-571724593),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(postfix,popped)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44455){if((e44455 instanceof Error)){
var e__43179__auto____$2 = e44455;
if((e__43179__auto____$2 === cljs.core.match.backtrack)){
var next_pf = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(postfix,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [litOrOp], null));
var op_pf_QMARK_ = (cljs.core.count(next_pf) > (1));
var op_stack_QMARK_ = server.app.matches_operator_QMARK_(cljs.core.last(stack));
var paren_stack_QMARK_ = (!((cljs.core.some((function (p1__44449_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("(",p1__44449_SHARP_);
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
}catch (e44475){if((e44475 instanceof Error)){
var e__43179__auto____$3 = e44475;
if((e__43179__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43179__auto____$3;
}
} else {
throw e44475;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44474){if((e44474 instanceof Error)){
var e__43179__auto____$3 = e44474;
if((e__43179__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43179__auto____$3;
}
} else {
throw e44474;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44473){if((e44473 instanceof Error)){
var e__43179__auto____$3 = e44473;
if((e__43179__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43179__auto____$3;
}
} else {
throw e44473;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44466){if((e44466 instanceof Error)){
var e__43179__auto____$3 = e44466;
if((e__43179__auto____$3 === cljs.core.match.backtrack)){
try{if((is_lit_QMARK_ === false)){
try{if((op_stack_QMARK_ === true)){
try{if((op_pf_QMARK_ === true)){
try{if((paren_stack_QMARK_ === false)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(stack),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [litOrOp], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e44472){if((e44472 instanceof Error)){
var e__43179__auto____$4 = e44472;
if((e__43179__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43179__auto____$4;
}
} else {
throw e44472;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44471){if((e44471 instanceof Error)){
var e__43179__auto____$4 = e44471;
if((e__43179__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43179__auto____$4;
}
} else {
throw e44471;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44470){if((e44470 instanceof Error)){
var e__43179__auto____$4 = e44470;
if((e__43179__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43179__auto____$4;
}
} else {
throw e44470;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44467){if((e44467 instanceof Error)){
var e__43179__auto____$4 = e44467;
if((e__43179__auto____$4 === cljs.core.match.backtrack)){
try{if((is_lit_QMARK_ === true)){
return stack;
} else {
throw cljs.core.match.backtrack;

}
}catch (e44468){if((e44468 instanceof Error)){
var e__43179__auto____$5 = e44468;
if((e__43179__auto____$5 === cljs.core.match.backtrack)){
try{if((is_lit_QMARK_ === false)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(stack,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [litOrOp], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e44469){if((e44469 instanceof Error)){
var e__43179__auto____$6 = e44469;
if((e__43179__auto____$6 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op_stack_QMARK_)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op_pf_QMARK_)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(paren_stack_QMARK_)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(is_lit_QMARK_)].join('')));
} else {
throw e__43179__auto____$6;
}
} else {
throw e44469;

}
}} else {
throw e__43179__auto____$5;
}
} else {
throw e44468;

}
}} else {
throw e__43179__auto____$4;
}
} else {
throw e44467;

}
}} else {
throw e__43179__auto____$3;
}
} else {
throw e44466;

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
}catch (e44499){if((e44499 instanceof Error)){
var e__43179__auto____$3 = e44499;
if((e__43179__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43179__auto____$3;
}
} else {
throw e44499;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44498){if((e44498 instanceof Error)){
var e__43179__auto____$3 = e44498;
if((e__43179__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43179__auto____$3;
}
} else {
throw e44498;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44497){if((e44497 instanceof Error)){
var e__43179__auto____$3 = e44497;
if((e__43179__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43179__auto____$3;
}
} else {
throw e44497;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44486){if((e44486 instanceof Error)){
var e__43179__auto____$3 = e44486;
if((e__43179__auto____$3 === cljs.core.match.backtrack)){
try{if((is_lit_QMARK_ === true)){
try{if((op_stack_QMARK_ === true)){
try{if((op_pf_QMARK_ === true)){
try{if((paren_stack_QMARK_ === false)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(next_pf,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last(stack)], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e44496){if((e44496 instanceof Error)){
var e__43179__auto____$4 = e44496;
if((e__43179__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43179__auto____$4;
}
} else {
throw e44496;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44495){if((e44495 instanceof Error)){
var e__43179__auto____$4 = e44495;
if((e__43179__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43179__auto____$4;
}
} else {
throw e44495;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44494){if((e44494 instanceof Error)){
var e__43179__auto____$4 = e44494;
if((e__43179__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43179__auto____$4;
}
} else {
throw e44494;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44487){if((e44487 instanceof Error)){
var e__43179__auto____$4 = e44487;
if((e__43179__auto____$4 === cljs.core.match.backtrack)){
try{if((is_lit_QMARK_ === false)){
try{if((op_stack_QMARK_ === true)){
try{if((op_pf_QMARK_ === true)){
try{if((paren_stack_QMARK_ === false)){
return next_pf;
} else {
throw cljs.core.match.backtrack;

}
}catch (e44493){if((e44493 instanceof Error)){
var e__43179__auto____$5 = e44493;
if((e__43179__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43179__auto____$5;
}
} else {
throw e44493;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44492){if((e44492 instanceof Error)){
var e__43179__auto____$5 = e44492;
if((e__43179__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43179__auto____$5;
}
} else {
throw e44492;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44491){if((e44491 instanceof Error)){
var e__43179__auto____$5 = e44491;
if((e__43179__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43179__auto____$5;
}
} else {
throw e44491;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44488){if((e44488 instanceof Error)){
var e__43179__auto____$5 = e44488;
if((e__43179__auto____$5 === cljs.core.match.backtrack)){
try{if((is_lit_QMARK_ === true)){
return next_pf;
} else {
throw cljs.core.match.backtrack;

}
}catch (e44489){if((e44489 instanceof Error)){
var e__43179__auto____$6 = e44489;
if((e__43179__auto____$6 === cljs.core.match.backtrack)){
try{if((is_lit_QMARK_ === false)){
return postfix;
} else {
throw cljs.core.match.backtrack;

}
}catch (e44490){if((e44490 instanceof Error)){
var e__43179__auto____$7 = e44490;
if((e__43179__auto____$7 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op_stack_QMARK_)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op_pf_QMARK_)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(paren_stack_QMARK_)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(is_lit_QMARK_)].join('')));
} else {
throw e__43179__auto____$7;
}
} else {
throw e44490;

}
}} else {
throw e__43179__auto____$6;
}
} else {
throw e44489;

}
}} else {
throw e__43179__auto____$5;
}
} else {
throw e44488;

}
}} else {
throw e__43179__auto____$4;
}
} else {
throw e44487;

}
}} else {
throw e__43179__auto____$3;
}
} else {
throw e44486;

}
}})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stack","stack",-793405930),newStack,new cljs.core.Keyword(null,"postfix","postfix",-571724593),newPostFix], null);
} else {
throw e__43179__auto____$2;
}
} else {
throw e44455;

}
}} else {
throw e__43179__auto____$1;
}
} else {
throw e44454;

}
}} else {
throw e__43179__auto__;
}
} else {
throw e44453;

}
}});
server.app.reduce_postfix = (function server$app$reduce_postfix(input){
var map__44500 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(server.app.convert_postfix,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"postfix","postfix",-571724593),cljs.core.PersistentVector.EMPTY], null),input);
var map__44500__$1 = cljs.core.__destructure_map(map__44500);
var stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44500__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var postfix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44500__$1,new cljs.core.Keyword(null,"postfix","postfix",-571724593));
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
return (function (p1__44501_SHARP_,p2__44502_SHARP_){
return (p1__44501_SHARP_ + p2__44502_SHARP_);
});
} else {
throw cljs.core.match.backtrack;

}
}catch (e44508){if((e44508 instanceof Error)){
var e__43179__auto__ = e44508;
if((e__43179__auto__ === cljs.core.match.backtrack)){
try{if((t === "-")){
return (function (p1__44503_SHARP_,p2__44504_SHARP_){
return (p1__44503_SHARP_ - p2__44504_SHARP_);
});
} else {
throw cljs.core.match.backtrack;

}
}catch (e44509){if((e44509 instanceof Error)){
var e__43179__auto____$1 = e44509;
if((e__43179__auto____$1 === cljs.core.match.backtrack)){
try{if((t === "*")){
return (function (p1__44505_SHARP_,p2__44506_SHARP_){
return (p1__44505_SHARP_ * p2__44506_SHARP_);
});
} else {
throw cljs.core.match.backtrack;

}
}catch (e44510){if((e44510 instanceof Error)){
var e__43179__auto____$2 = e44510;
if((e__43179__auto____$2 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join('')));
} else {
throw e__43179__auto____$2;
}
} else {
throw e44510;

}
}} else {
throw e__43179__auto____$1;
}
} else {
throw e44509;

}
}} else {
throw e__43179__auto__;
}
} else {
throw e44508;

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
throw ["Lookup Error: Undeclared Variable ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
}
});
server.app.resolve_all = (function server$app$resolve_all(vars,exp_terms){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (et){
try{if(((cljs.core.vector_QMARK_(et)) && ((cljs.core.count(et) === 2)))){
try{var et_0__44512 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(et,(0));
if(cljs.core.keyword_identical_QMARK_(et_0__44512,new cljs.core.Keyword(null,"Literal","Literal",-641820482))){
var lit = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(et,(1));
return server.app.str__GT_int(lit);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44515){if((e44515 instanceof Error)){
var e__43179__auto__ = e44515;
if((e__43179__auto__ === cljs.core.match.backtrack)){
try{var et_0__44512 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(et,(0));
if(cljs.core.keyword_identical_QMARK_(et_0__44512,new cljs.core.Keyword(null,"Identifier","Identifier",1495725166))){
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(et,(1));
return server.app.resolve_id(vars,id);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44516){if((e44516 instanceof Error)){
var e__43179__auto____$1 = e44516;
if((e__43179__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43179__auto____$1;
}
} else {
throw e44516;

}
}} else {
throw e__43179__auto__;
}
} else {
throw e44515;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44514){if((e44514 instanceof Error)){
var e__43179__auto__ = e44514;
if((e__43179__auto__ === cljs.core.match.backtrack)){
return et;
} else {
throw e__43179__auto__;
}
} else {
throw e44514;

}
}}),exp_terms);
});
server.app.matcher = (function server$app$matcher(variable_map,assignment){
try{if(((cljs.core.vector_QMARK_(assignment)) && ((cljs.core.count(assignment) === 3)))){
try{var assignment_0__44518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(assignment,(0));
if(cljs.core.keyword_identical_QMARK_(assignment_0__44518,new cljs.core.Keyword(null,"Assignment","Assignment",241990793))){
try{var assignment_1__44519 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(assignment,(1));
if(((cljs.core.vector_QMARK_(assignment_1__44519)) && ((cljs.core.count(assignment_1__44519) === 2)))){
try{var assignment_1__44519_0__44521 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(assignment_1__44519,(0));
if(cljs.core.keyword_identical_QMARK_(assignment_1__44519_0__44521,new cljs.core.Keyword(null,"Identifier","Identifier",1495725166))){
try{var assignment_2__44520 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(assignment,(2));
if(((cljs.core.vector_QMARK_(assignment_2__44520)) && ((cljs.core.count(assignment_2__44520) >= (1))))){
try{var assignment_2__44520_left__44523 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(assignment_2__44520,(0),(1));
if(((cljs.core.vector_QMARK_(assignment_2__44520_left__44523)) && ((cljs.core.count(assignment_2__44520_left__44523) === (1))))){
try{var assignment_2__44520_left__44523_0__44525 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(assignment_2__44520_left__44523,(0));
if(cljs.core.keyword_identical_QMARK_(assignment_2__44520_left__44523_0__44525,new cljs.core.Keyword(null,"Literal","Literal",-641820482))){
var rest = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(assignment_2__44520,(1));
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(assignment_1__44519,(1));
return server.app.assign_lit(variable_map,name,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,rest));
} else {
throw cljs.core.match.backtrack;

}
}catch (e44547){if((e44547 instanceof Error)){
var e__43179__auto__ = e44547;
if((e__43179__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43179__auto__;
}
} else {
throw e44547;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44546){if((e44546 instanceof Error)){
var e__43179__auto__ = e44546;
if((e__43179__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43179__auto__;
}
} else {
throw e44546;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44543){if((e44543 instanceof Error)){
var e__43179__auto__ = e44543;
if((e__43179__auto__ === cljs.core.match.backtrack)){
try{var assignment_2__44520 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(assignment,(2));
if(((cljs.core.vector_QMARK_(assignment_2__44520)) && ((cljs.core.count(assignment_2__44520) === 2)))){
try{var assignment_2__44520_0__44526 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(assignment_2__44520,(0));
if(cljs.core.keyword_identical_QMARK_(assignment_2__44520_0__44526,new cljs.core.Keyword(null,"Identifier","Identifier",1495725166))){
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(assignment_2__44520,(1));
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(assignment_1__44519,(1));
return server.app.assign_lit(variable_map,name,server.app.resolve_id(variable_map,id));
} else {
throw cljs.core.match.backtrack;

}
}catch (e44545){if((e44545 instanceof Error)){
var e__43179__auto____$1 = e44545;
if((e__43179__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43179__auto____$1;
}
} else {
throw e44545;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44544){if((e44544 instanceof Error)){
var e__43179__auto____$1 = e44544;
if((e__43179__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43179__auto____$1;
}
} else {
throw e44544;

}
}} else {
throw e__43179__auto__;
}
} else {
throw e44543;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44542){if((e44542 instanceof Error)){
var e__43179__auto__ = e44542;
if((e__43179__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43179__auto__;
}
} else {
throw e44542;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44541){if((e44541 instanceof Error)){
var e__43179__auto__ = e44541;
if((e__43179__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43179__auto__;
}
} else {
throw e44541;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44540){if((e44540 instanceof Error)){
var e__43179__auto__ = e44540;
if((e__43179__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43179__auto__;
}
} else {
throw e44540;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44534){if((e44534 instanceof Error)){
var e__43179__auto__ = e44534;
if((e__43179__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(assignment)) && ((cljs.core.count(assignment) >= (2))))){
try{var assignment_left__44528 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(assignment,(0),(2));
if(((cljs.core.vector_QMARK_(assignment_left__44528)) && ((cljs.core.count(assignment_left__44528) === (2))))){
try{var assignment_left__44528_0__44530 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(assignment_left__44528,(0));
if(cljs.core.keyword_identical_QMARK_(assignment_left__44528_0__44530,new cljs.core.Keyword(null,"Assignment","Assignment",241990793))){
try{var assignment_left__44528_1__44531 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(assignment_left__44528,(1));
if(((cljs.core.vector_QMARK_(assignment_left__44528_1__44531)) && ((cljs.core.count(assignment_left__44528_1__44531) === 2)))){
try{var assignment_left__44528_1__44531_0__44532 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(assignment_left__44528_1__44531,(0));
if(cljs.core.keyword_identical_QMARK_(assignment_left__44528_1__44531_0__44532,new cljs.core.Keyword(null,"Identifier","Identifier",1495725166))){
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(assignment_left__44528_1__44531,(1));
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
}catch (e44539){if((e44539 instanceof Error)){
var e__43179__auto____$1 = e44539;
if((e__43179__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43179__auto____$1;
}
} else {
throw e44539;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44538){if((e44538 instanceof Error)){
var e__43179__auto____$1 = e44538;
if((e__43179__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43179__auto____$1;
}
} else {
throw e44538;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44537){if((e44537 instanceof Error)){
var e__43179__auto____$1 = e44537;
if((e__43179__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43179__auto____$1;
}
} else {
throw e44537;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44536){if((e44536 instanceof Error)){
var e__43179__auto____$1 = e44536;
if((e__43179__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43179__auto____$1;
}
} else {
throw e44536;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44535){if((e44535 instanceof Error)){
var e__43179__auto____$1 = e44535;
if((e__43179__auto____$1 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(assignment)].join('')));
} else {
throw e__43179__auto____$1;
}
} else {
throw e44535;

}
}} else {
throw e__43179__auto__;
}
} else {
throw e44534;

}
}});
server.app.parser = instaparse.core.parser(server.app.lang_grammar);
server.app.interpreter = (function server$app$interpreter(source){
var AST = (server.app.parser.cljs$core$IFn$_invoke$arity$1 ? server.app.parser.cljs$core$IFn$_invoke$arity$1(source) : server.app.parser.call(null,source));
var variables = cljs.core.PersistentArrayMap.EMPTY;
if(cljs.core.truth_(new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(AST))){
return ["Syntax Error: Expecting { ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__44548_SHARP_,p2__44549_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__44548_SHARP_)," or ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"expecting","expecting",-57706705).cljs$core$IFn$_invoke$arity$1(p2__44549_SHARP_))].join('');
}),"",new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(AST)))))," }"].join('');
} else {
try{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(server.app.matcher,variables,AST);
}catch (e44550){var e = e44550;
return e;
}
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
server.app._main();

//# sourceMappingURL=server.app.js.map
