goog.provide('server.app');
server.app.str__GT_int = (function server$app$str__GT_int(s){
return (s | (0));
});
server.app.optional = (function server$app$optional(pattern){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pattern),"?"].join('');
});
server.app.alphabet_pattern = "[A-z0-9_]+";
server.app.operator_pattern = "('*'|'+'|'-')";
server.app.operator_re = "[\\*\\+\\-\\(]";
server.app.unary_negation_pattern = "('*'|'+'|'-'|'(')'-'+";
server.app.letter_pattern = "[A-z_]";
server.app.natural_pattern = "[1-9]";
server.app.literal_pattern = "-?([1-9]+[0-9]*)|0";
server.app.matches_pattern_QMARK_ = (function server$app$matches_pattern_QMARK_(pattern){
return (function (p1__44218_SHARP_){
var input = cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__44218_SHARP_);
var matches = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),((input).length)))?null:cljs.core.re_matches(cljs.core.re_pattern(pattern),input));
var something_QMARK_ = (!((matches == null)));
return something_QMARK_;
});
});
server.app.matches_literal_QMARK_ = server.app.matches_pattern_QMARK_(server.app.literal_pattern);
server.app.matches_operator_QMARK_ = server.app.matches_pattern_QMARK_(server.app.operator_re);
server.app.re__GT_gram = (function server$app$re__GT_gram(pattern){
return ["#'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pattern),"'"].join('');
});
server.app.op_precedence = (function server$app$op_precedence(op){
try{if((op === "*")){
return (2);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44220){if((e44220 instanceof Error)){
var e__43159__auto__ = e44220;
if((e__43159__auto__ === cljs.core.match.backtrack)){
try{if((op === "-")){
return (1);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44221){if((e44221 instanceof Error)){
var e__43159__auto____$1 = e44221;
if((e__43159__auto____$1 === cljs.core.match.backtrack)){
try{if((op === "+")){
return (1);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44222){if((e44222 instanceof Error)){
var e__43159__auto____$2 = e44222;
if((e__43159__auto____$2 === cljs.core.match.backtrack)){
try{if((op === "(")){
return (0);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44223){if((e44223 instanceof Error)){
var e__43159__auto____$3 = e44223;
if((e__43159__auto____$3 === cljs.core.match.backtrack)){
return (-1);
} else {
throw e__43159__auto____$3;
}
} else {
throw e44223;

}
}} else {
throw e__43159__auto____$2;
}
} else {
throw e44222;

}
}} else {
throw e__43159__auto____$1;
}
} else {
throw e44221;

}
}} else {
throw e__43159__auto__;
}
} else {
throw e44220;

}
}});
server.app.sigma_pattern = ["('*'|'+'|'-'|'('|')'|",server.app.re__GT_gram(server.app.alphabet_pattern),")"].join('');
server.app.w_STAR_ = " <#'\\s*'> ";
server.app.wrap_w_STAR_ = (function server$app$wrap_w_STAR_(t){
return [server.app.w_STAR_,cljs.core.str.cljs$core$IFn$_invoke$arity$1(t),server.app.w_STAR_].join('');
});
server.app.lang_grammar = ["\n                      <Program> = Assignment*\n                      Assignment = Identifier",server.app.wrap_w_STAR_("<'='>"),"Exp <';'>",server.app.w_STAR_,"\n                      <Exp> = Exp ",server.app.wrap_w_STAR_("'+'")," Term | Exp ",server.app.wrap_w_STAR_("'-'")," Term | Term\n                      <Term> = Term ",server.app.wrap_w_STAR_("'*'")," Fact | Fact\n                      <Fact> = ",server.app.wrap_w_STAR_("'('")," Exp ",server.app.wrap_w_STAR_("')'")," | '-' Fact | <'+'> Fact | Literal | Identifier \n                      Identifier = Letter (Letter | Digit)*\n                      Literal = '0' | (NonZeroDigit Digit*)\n                      <Letter> = ",server.app.re__GT_gram(server.app.letter_pattern),"\n                      <NonZeroDigit> = ",server.app.re__GT_gram(server.app.natural_pattern),"\n                      <Digit> = '0'|NonZeroDigit"].join('');
server.app.unary_grammar = ["<Root> = (S|Rest)*\n                    <S> = Rest* Unary Rest+\n                    Unary = ",server.app.unary_negation_pattern,"\n                    <Rest> = '('* ",server.app.wrap_w_STAR_(server.app.re__GT_gram(server.app.alphabet_pattern))," ')'* ",server.app.wrap_w_STAR_(server.app.optional(server.app.operator_pattern))," Rest* "].join('');
server.app.handle_negation = (function server$app$handle_negation(acc,token){
var tokens_processed = cljs.core.count(acc);
var start_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),tokens_processed);
try{if(((cljs.core.vector_QMARK_(token)) && ((cljs.core.count(token) >= (2))))){
try{var token_left__44225 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(token,(0),(2));
if(((cljs.core.vector_QMARK_(token_left__44225)) && ((cljs.core.count(token_left__44225) === (2))))){
try{var token_left__44225_0__44227 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(token_left__44225,(0));
if(cljs.core.keyword_identical_QMARK_(token_left__44225_0__44227,new cljs.core.Keyword(null,"Unary","Unary",1552162988))){
var head = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(token_left__44225,(1));
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
}catch (e44266){if((e44266 instanceof Error)){
var e__43159__auto__ = e44266;
if((e__43159__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43159__auto__;
}
} else {
throw e44266;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44250){if((e44250 instanceof Error)){
var e__43159__auto__ = e44250;
if((e__43159__auto__ === cljs.core.match.backtrack)){
try{if((negation_QMARK_ === false)){
try{if((start_QMARK_ === true)){
return acc;
} else {
throw cljs.core.match.backtrack;

}
}catch (e44263){if((e44263 instanceof Error)){
var e__43159__auto____$1 = e44263;
if((e__43159__auto____$1 === cljs.core.match.backtrack)){
try{if((addition_head_QMARK_ === false)){
try{if((negation_head_QMARK_ === false)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [head], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44265){if((e44265 instanceof Error)){
var e__43159__auto____$2 = e44265;
if((e__43159__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43159__auto____$2;
}
} else {
throw e44265;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44264){if((e44264 instanceof Error)){
var e__43159__auto____$2 = e44264;
if((e__43159__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43159__auto____$2;
}
} else {
throw e44264;

}
}} else {
throw e__43159__auto____$1;
}
} else {
throw e44263;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44251){if((e44251 instanceof Error)){
var e__43159__auto____$1 = e44251;
if((e__43159__auto____$1 === cljs.core.match.backtrack)){
try{if((negation_QMARK_ === true)){
try{if((addition_head_QMARK_ === false)){
try{if((negation_head_QMARK_ === false)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [head,"~"], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44262){if((e44262 instanceof Error)){
var e__43159__auto____$2 = e44262;
if((e__43159__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43159__auto____$2;
}
} else {
throw e44262;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44261){if((e44261 instanceof Error)){
var e__43159__auto____$2 = e44261;
if((e__43159__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43159__auto____$2;
}
} else {
throw e44261;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44252){if((e44252 instanceof Error)){
var e__43159__auto____$2 = e44252;
if((e__43159__auto____$2 === cljs.core.match.backtrack)){
try{if((negation_QMARK_ === false)){
try{if((negation_head_QMARK_ === true)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-"], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44260){if((e44260 instanceof Error)){
var e__43159__auto____$3 = e44260;
if((e__43159__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43159__auto____$3;
}
} else {
throw e44260;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44253){if((e44253 instanceof Error)){
var e__43159__auto____$3 = e44253;
if((e__43159__auto____$3 === cljs.core.match.backtrack)){
try{if((negation_QMARK_ === true)){
try{if((addition_head_QMARK_ === true)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-"], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44259){if((e44259 instanceof Error)){
var e__43159__auto____$4 = e44259;
if((e__43159__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43159__auto____$4;
}
} else {
throw e44259;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44254){if((e44254 instanceof Error)){
var e__43159__auto____$4 = e44254;
if((e__43159__auto____$4 === cljs.core.match.backtrack)){
try{if((negation_QMARK_ === false)){
try{if((addition_head_QMARK_ === true)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+"], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44258){if((e44258 instanceof Error)){
var e__43159__auto____$5 = e44258;
if((e__43159__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43159__auto____$5;
}
} else {
throw e44258;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44255){if((e44255 instanceof Error)){
var e__43159__auto____$5 = e44255;
if((e__43159__auto____$5 === cljs.core.match.backtrack)){
try{if((negation_QMARK_ === true)){
try{if((negation_head_QMARK_ === true)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+"], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44257){if((e44257 instanceof Error)){
var e__43159__auto____$6 = e44257;
if((e__43159__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43159__auto____$6;
}
} else {
throw e44257;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44256){if((e44256 instanceof Error)){
var e__43159__auto____$6 = e44256;
if((e__43159__auto____$6 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_QMARK_)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(negation_QMARK_)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(addition_head_QMARK_)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(negation_head_QMARK_)].join('')));
} else {
throw e__43159__auto____$6;
}
} else {
throw e44256;

}
}} else {
throw e__43159__auto____$5;
}
} else {
throw e44255;

}
}} else {
throw e__43159__auto____$4;
}
} else {
throw e44254;

}
}} else {
throw e__43159__auto____$3;
}
} else {
throw e44253;

}
}} else {
throw e__43159__auto____$2;
}
} else {
throw e44252;

}
}} else {
throw e__43159__auto____$1;
}
} else {
throw e44251;

}
}} else {
throw e__43159__auto__;
}
} else {
throw e44250;

}
}})());
} else {
throw cljs.core.match.backtrack;

}
}catch (e44231){if((e44231 instanceof Error)){
var e__43159__auto__ = e44231;
if((e__43159__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43159__auto__;
}
} else {
throw e44231;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44230){if((e44230 instanceof Error)){
var e__43159__auto__ = e44230;
if((e__43159__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43159__auto__;
}
} else {
throw e44230;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44229){if((e44229 instanceof Error)){
var e__43159__auto__ = e44229;
if((e__43159__auto__ === cljs.core.match.backtrack)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(acc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [token], null));
} else {
throw e__43159__auto__;
}
} else {
throw e44229;

}
}});
server.app.process_unary = (function server$app$process_unary(source){
var parse_unary = instaparse.core.parser(server.app.unary_grammar);
var wrapped_src = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("(",cljs.core.first(source))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(")",cljs.core.last(source)))))?source:["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(source),")"].join(''));
var unary_ast = (parse_unary.cljs$core$IFn$_invoke$arity$1 ? parse_unary.cljs$core$IFn$_invoke$arity$1(wrapped_src) : parse_unary.call(null,wrapped_src));
var left_parens = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__44267_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__44267_SHARP_,"(");
}),unary_ast));
var right_parens = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__44268_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__44268_SHARP_,")");
}),unary_ast));
var trim_ast = (((left_parens >= right_parens))?cljs.core.rest(unary_ast):(((left_parens < right_parens))?unary_ast:null));
return cljs.core.butlast(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(server.app.handle_negation,cljs.core.PersistentVector.EMPTY,trim_ast));
});
server.app.convert_postfix = (function server$app$convert_postfix(p__44271,token){
var map__44272 = p__44271;
var map__44272__$1 = cljs.core.__destructure_map(map__44272);
var stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44272__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var postfix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44272__$1,new cljs.core.Keyword(null,"postfix","postfix",-571724593));
var literal_QMARK_ = server.app.matches_literal_QMARK_(token);
if(cljs.core.truth_(literal_QMARK_)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stack","stack",-793405930),stack,new cljs.core.Keyword(null,"postfix","postfix",-571724593),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(postfix,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [token], null))], null);
} else {
try{if((token === "~")){
if((cljs.core.count(postfix) > (0))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stack","stack",-793405930),stack,new cljs.core.Keyword(null,"postfix","postfix",-571724593),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(postfix,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),"*"], null))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(stack,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*"], null)),new cljs.core.Keyword(null,"postfix","postfix",-571724593),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(postfix,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1)], null))], null);
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e44274){if((e44274 instanceof Error)){
var e__43159__auto__ = e44274;
if((e__43159__auto__ === cljs.core.match.backtrack)){
try{if((token === "(")){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(stack,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [token], null)),new cljs.core.Keyword(null,"postfix","postfix",-571724593),postfix], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44275){if((e44275 instanceof Error)){
var e__43159__auto____$1 = e44275;
if((e__43159__auto____$1 === cljs.core.match.backtrack)){
try{if((token === ")")){
var paren_cond = (function (p1__44269_SHARP_){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("(",p1__44269_SHARP_)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("$",p1__44269_SHARP_)));
});
var popped = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(paren_cond,cljs.core.reverse(stack));
var remaining = cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((cljs.core.count(popped) + (1)),stack);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stack","stack",-793405930),remaining,new cljs.core.Keyword(null,"postfix","postfix",-571724593),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(postfix,popped)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44276){if((e44276 instanceof Error)){
var e__43159__auto____$2 = e44276;
if((e__43159__auto____$2 === cljs.core.match.backtrack)){
var prec_stack = server.app.op_precedence(cljs.core.last(stack));
var prec_token = server.app.op_precedence(token);
var res = (((prec_token > prec_stack))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(stack,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [token], null)),new cljs.core.Keyword(null,"postfix","postfix",-571724593),postfix], null):(function (){var prec_cond = (function (p1__44270_SHARP_){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("$",p1__44270_SHARP_)) && ((prec_token <= server.app.op_precedence(p1__44270_SHARP_))));
});
var popped = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(prec_cond,cljs.core.reverse(stack));
var remaining = cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2(cljs.core.count(popped),stack);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(remaining,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [token], null)),new cljs.core.Keyword(null,"postfix","postfix",-571724593),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(postfix,popped)], null);
})());
return res;
} else {
throw e__43159__auto____$2;
}
} else {
throw e44276;

}
}} else {
throw e__43159__auto____$1;
}
} else {
throw e44275;

}
}} else {
throw e__43159__auto__;
}
} else {
throw e44274;

}
}}
});
server.app.reduce_postfix = (function server$app$reduce_postfix(input){
var map__44277 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(server.app.convert_postfix,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stack","stack",-793405930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["$"], null),new cljs.core.Keyword(null,"postfix","postfix",-571724593),cljs.core.PersistentVector.EMPTY], null),input);
var map__44277__$1 = cljs.core.__destructure_map(map__44277);
var stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44277__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var postfix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44277__$1,new cljs.core.Keyword(null,"postfix","postfix",-571724593));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(stack))){
return postfix;
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(postfix,cljs.core.reverse(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),stack)));
}
});
server.app.solve_postfix = (function server$app$solve_postfix(s,v){
var digit_QMARK_ = cljs.core.integer_QMARK_(v);
if(digit_QMARK_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null));
} else {
var res = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(v,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last(cljs.core.butlast(s)),cljs.core.last(s)], null));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(cljs.core.butlast(s)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
}
});
server.app.to_primitive = (function server$app$to_primitive(t){
var token = cljs.core.str.cljs$core$IFn$_invoke$arity$1(t);
var digit_QMARK_ = server.app.matches_literal_QMARK_(token);
if(cljs.core.truth_(digit_QMARK_)){
return server.app.str__GT_int(token);
} else {
try{if((t === "+")){
return (function (p1__44278_SHARP_,p2__44279_SHARP_){
return (p1__44278_SHARP_ + p2__44279_SHARP_);
});
} else {
throw cljs.core.match.backtrack;

}
}catch (e44285){if((e44285 instanceof Error)){
var e__43159__auto__ = e44285;
if((e__43159__auto__ === cljs.core.match.backtrack)){
try{if((t === "-")){
return (function (p1__44280_SHARP_,p2__44281_SHARP_){
return (p1__44280_SHARP_ - p2__44281_SHARP_);
});
} else {
throw cljs.core.match.backtrack;

}
}catch (e44286){if((e44286 instanceof Error)){
var e__43159__auto____$1 = e44286;
if((e__43159__auto____$1 === cljs.core.match.backtrack)){
try{if((t === "*")){
return (function (p1__44282_SHARP_,p2__44283_SHARP_){
return (p1__44282_SHARP_ * p2__44283_SHARP_);
});
} else {
throw cljs.core.match.backtrack;

}
}catch (e44287){if((e44287 instanceof Error)){
var e__43159__auto____$2 = e44287;
if((e__43159__auto____$2 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join('')));
} else {
throw e__43159__auto____$2;
}
} else {
throw e44287;

}
}} else {
throw e__43159__auto____$1;
}
} else {
throw e44286;

}
}} else {
throw e__43159__auto__;
}
} else {
throw e44285;

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
try{if(((cljs.core.vector_QMARK_(et)) && ((cljs.core.count(et) >= (1))))){
try{var et_left__44289 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(et,(0),(1));
if(((cljs.core.vector_QMARK_(et_left__44289)) && ((cljs.core.count(et_left__44289) === (1))))){
try{var et_left__44289_0__44291 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(et_left__44289,(0));
if(cljs.core.keyword_identical_QMARK_(et_left__44289_0__44291,new cljs.core.Keyword(null,"Literal","Literal",-641820482))){
var lit = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(et,(1));
return server.app.str__GT_int(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,lit));
} else {
throw cljs.core.match.backtrack;

}
}catch (e44294){if((e44294 instanceof Error)){
var e__43159__auto__ = e44294;
if((e__43159__auto__ === cljs.core.match.backtrack)){
try{var et_left__44289_0__44291 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(et_left__44289,(0));
if(cljs.core.keyword_identical_QMARK_(et_left__44289_0__44291,new cljs.core.Keyword(null,"Identifier","Identifier",1495725166))){
var id = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(et,(1));
return server.app.resolve_id(vars,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,id));
} else {
throw cljs.core.match.backtrack;

}
}catch (e44295){if((e44295 instanceof Error)){
var e__43159__auto____$1 = e44295;
if((e__43159__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43159__auto____$1;
}
} else {
throw e44295;

}
}} else {
throw e__43159__auto__;
}
} else {
throw e44294;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44293){if((e44293 instanceof Error)){
var e__43159__auto__ = e44293;
if((e__43159__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43159__auto__;
}
} else {
throw e44293;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44292){if((e44292 instanceof Error)){
var e__43159__auto__ = e44292;
if((e__43159__auto__ === cljs.core.match.backtrack)){
return et;
} else {
throw e__43159__auto__;
}
} else {
throw e44292;

}
}}),exp_terms);
});
server.app.matcher = (function server$app$matcher(variable_map,assignment){
try{if(((cljs.core.vector_QMARK_(assignment)) && ((cljs.core.count(assignment) === 3)))){
try{var assignment_0__44297 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(assignment,(0));
if(cljs.core.keyword_identical_QMARK_(assignment_0__44297,new cljs.core.Keyword(null,"Assignment","Assignment",241990793))){
try{var assignment_1__44298 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(assignment,(1));
if(((cljs.core.vector_QMARK_(assignment_1__44298)) && ((cljs.core.count(assignment_1__44298) >= (1))))){
try{var assignment_1__44298_left__44300 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(assignment_1__44298,(0),(1));
if(((cljs.core.vector_QMARK_(assignment_1__44298_left__44300)) && ((cljs.core.count(assignment_1__44298_left__44300) === (1))))){
try{var assignment_1__44298_left__44300_0__44302 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(assignment_1__44298_left__44300,(0));
if(cljs.core.keyword_identical_QMARK_(assignment_1__44298_left__44300_0__44302,new cljs.core.Keyword(null,"Identifier","Identifier",1495725166))){
try{var assignment_2__44299 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(assignment,(2));
if(((cljs.core.vector_QMARK_(assignment_2__44299)) && ((cljs.core.count(assignment_2__44299) >= (1))))){
try{var assignment_2__44299_left__44303 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(assignment_2__44299,(0),(1));
if(((cljs.core.vector_QMARK_(assignment_2__44299_left__44303)) && ((cljs.core.count(assignment_2__44299_left__44303) === (1))))){
try{var assignment_2__44299_left__44303_0__44305 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(assignment_2__44299_left__44303,(0));
if(cljs.core.keyword_identical_QMARK_(assignment_2__44299_left__44303_0__44305,new cljs.core.Keyword(null,"Literal","Literal",-641820482))){
var rest = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(assignment_2__44299,(1));
var name = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(assignment_1__44298,(1));
return server.app.assign_lit(variable_map,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,rest));
} else {
throw cljs.core.match.backtrack;

}
}catch (e44326){if((e44326 instanceof Error)){
var e__43159__auto__ = e44326;
if((e__43159__auto__ === cljs.core.match.backtrack)){
try{var assignment_2__44299_left__44303_0__44305 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(assignment_2__44299_left__44303,(0));
if(cljs.core.keyword_identical_QMARK_(assignment_2__44299_left__44303_0__44305,new cljs.core.Keyword(null,"Identifier","Identifier",1495725166))){
var id = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(assignment_2__44299,(1));
var name = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(assignment_1__44298,(1));
return server.app.assign_lit(variable_map,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,name),server.app.resolve_id(variable_map,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,id)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e44327){if((e44327 instanceof Error)){
var e__43159__auto____$1 = e44327;
if((e__43159__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43159__auto____$1;
}
} else {
throw e44327;

}
}} else {
throw e__43159__auto__;
}
} else {
throw e44326;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44325){if((e44325 instanceof Error)){
var e__43159__auto__ = e44325;
if((e__43159__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43159__auto__;
}
} else {
throw e44325;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44324){if((e44324 instanceof Error)){
var e__43159__auto__ = e44324;
if((e__43159__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43159__auto__;
}
} else {
throw e44324;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44323){if((e44323 instanceof Error)){
var e__43159__auto__ = e44323;
if((e__43159__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43159__auto__;
}
} else {
throw e44323;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44322){if((e44322 instanceof Error)){
var e__43159__auto__ = e44322;
if((e__43159__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43159__auto__;
}
} else {
throw e44322;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44321){if((e44321 instanceof Error)){
var e__43159__auto__ = e44321;
if((e__43159__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43159__auto__;
}
} else {
throw e44321;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44320){if((e44320 instanceof Error)){
var e__43159__auto__ = e44320;
if((e__43159__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43159__auto__;
}
} else {
throw e44320;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44313){if((e44313 instanceof Error)){
var e__43159__auto__ = e44313;
if((e__43159__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(assignment)) && ((cljs.core.count(assignment) >= (2))))){
try{var assignment_left__44306 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(assignment,(0),(2));
if(((cljs.core.vector_QMARK_(assignment_left__44306)) && ((cljs.core.count(assignment_left__44306) === (2))))){
try{var assignment_left__44306_0__44308 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(assignment_left__44306,(0));
if(cljs.core.keyword_identical_QMARK_(assignment_left__44306_0__44308,new cljs.core.Keyword(null,"Assignment","Assignment",241990793))){
try{var assignment_left__44306_1__44309 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(assignment_left__44306,(1));
if(((cljs.core.vector_QMARK_(assignment_left__44306_1__44309)) && ((cljs.core.count(assignment_left__44306_1__44309) >= (1))))){
try{var assignment_left__44306_1__44309_left__44310 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(assignment_left__44306_1__44309,(0),(1));
if(((cljs.core.vector_QMARK_(assignment_left__44306_1__44309_left__44310)) && ((cljs.core.count(assignment_left__44306_1__44309_left__44310) === (1))))){
try{var assignment_left__44306_1__44309_left__44310_0__44312 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(assignment_left__44306_1__44309_left__44310,(0));
if(cljs.core.keyword_identical_QMARK_(assignment_left__44306_1__44309_left__44310_0__44312,new cljs.core.Keyword(null,"Identifier","Identifier",1495725166))){
var name = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(assignment_left__44306_1__44309,(1));
var r = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(assignment,(2));
var resolved_ids = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,server.app.resolve_all(variable_map,r));
var resolved_unary = server.app.process_unary(resolved_ids);
var postfix_transform = server.app.reduce_postfix(resolved_unary);
var primitive_transform = cljs.core.map.cljs$core$IFn$_invoke$arity$2(server.app.to_primitive,postfix_transform);
var result = cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(server.app.solve_postfix,cljs.core.PersistentVector.EMPTY,primitive_transform));
return server.app.assign_lit(variable_map,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,name),result);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44319){if((e44319 instanceof Error)){
var e__43159__auto____$1 = e44319;
if((e__43159__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43159__auto____$1;
}
} else {
throw e44319;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44318){if((e44318 instanceof Error)){
var e__43159__auto____$1 = e44318;
if((e__43159__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43159__auto____$1;
}
} else {
throw e44318;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44317){if((e44317 instanceof Error)){
var e__43159__auto____$1 = e44317;
if((e__43159__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43159__auto____$1;
}
} else {
throw e44317;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44316){if((e44316 instanceof Error)){
var e__43159__auto____$1 = e44316;
if((e__43159__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43159__auto____$1;
}
} else {
throw e44316;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44315){if((e44315 instanceof Error)){
var e__43159__auto____$1 = e44315;
if((e__43159__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43159__auto____$1;
}
} else {
throw e44315;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44314){if((e44314 instanceof Error)){
var e__43159__auto____$1 = e44314;
if((e__43159__auto____$1 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(assignment)].join('')));
} else {
throw e__43159__auto____$1;
}
} else {
throw e44314;

}
}} else {
throw e__43159__auto__;
}
} else {
throw e44313;

}
}});
server.app.parser = instaparse.core.parser(server.app.lang_grammar);
server.app.interpreter = (function server$app$interpreter(source){
var AST = (server.app.parser.cljs$core$IFn$_invoke$arity$1 ? server.app.parser.cljs$core$IFn$_invoke$arity$1(source) : server.app.parser.call(null,source));
var variables = cljs.core.PersistentArrayMap.EMPTY;
if(cljs.core.truth_(new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(AST))){
return ["Syntax Error: Expecting { ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__44328_SHARP_,p2__44329_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__44328_SHARP_)," or ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"expecting","expecting",-57706705).cljs$core$IFn$_invoke$arity$1(p2__44329_SHARP_))].join('');
}),"",new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(AST)))))," }"].join('');
} else {
try{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(server.app.matcher,variables,AST);
}catch (e44330){var e = e44330;
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
})], null),"Submit"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Output: "], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),(function (){var output = cljs.core.deref(server.app.output_state);
var output_string_QMARK_ = typeof output === 'string';
if(output_string_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),output], null);
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__44331){
var vec__44332 = p__44331;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44332,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44332,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')], null);
}),cljs.core.seq(output));
}
})()], null);
});
server.app._main = (function server$app$_main(){
var root = document.getElementById("root");
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [server.app.app], null),root);
});
server.app._main();

//# sourceMappingURL=server.app.js.map
