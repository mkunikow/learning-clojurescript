// Compiled by ClojureScript 0.0-3123 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__12346_12358 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12347_12359 = null;
var count__12348_12360 = (0);
var i__12349_12361 = (0);
while(true){
if((i__12349_12361 < count__12348_12360)){
var f_12362 = cljs.core._nth.call(null,chunk__12347_12359,i__12349_12361);
cljs.core.println.call(null,"  ",f_12362);

var G__12363 = seq__12346_12358;
var G__12364 = chunk__12347_12359;
var G__12365 = count__12348_12360;
var G__12366 = (i__12349_12361 + (1));
seq__12346_12358 = G__12363;
chunk__12347_12359 = G__12364;
count__12348_12360 = G__12365;
i__12349_12361 = G__12366;
continue;
} else {
var temp__4126__auto___12367 = cljs.core.seq.call(null,seq__12346_12358);
if(temp__4126__auto___12367){
var seq__12346_12368__$1 = temp__4126__auto___12367;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12346_12368__$1)){
var c__5401__auto___12369 = cljs.core.chunk_first.call(null,seq__12346_12368__$1);
var G__12370 = cljs.core.chunk_rest.call(null,seq__12346_12368__$1);
var G__12371 = c__5401__auto___12369;
var G__12372 = cljs.core.count.call(null,c__5401__auto___12369);
var G__12373 = (0);
seq__12346_12358 = G__12370;
chunk__12347_12359 = G__12371;
count__12348_12360 = G__12372;
i__12349_12361 = G__12373;
continue;
} else {
var f_12374 = cljs.core.first.call(null,seq__12346_12368__$1);
cljs.core.println.call(null,"  ",f_12374);

var G__12375 = cljs.core.next.call(null,seq__12346_12368__$1);
var G__12376 = null;
var G__12377 = (0);
var G__12378 = (0);
seq__12346_12358 = G__12375;
chunk__12347_12359 = G__12376;
count__12348_12360 = G__12377;
i__12349_12361 = G__12378;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__4616__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4616__auto__)){
return or__4616__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
cljs.core.prn.call(null,cljs.core.second.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m)));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__12350 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12351 = null;
var count__12352 = (0);
var i__12353 = (0);
while(true){
if((i__12353 < count__12352)){
var vec__12354 = cljs.core._nth.call(null,chunk__12351,i__12353);
var name = cljs.core.nth.call(null,vec__12354,(0),null);
var map__12355 = cljs.core.nth.call(null,vec__12354,(1),null);
var map__12355__$1 = ((cljs.core.seq_QMARK_.call(null,map__12355))?cljs.core.apply.call(null,cljs.core.hash_map,map__12355):map__12355);
var arglists = cljs.core.get.call(null,map__12355__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__12355__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__12379 = seq__12350;
var G__12380 = chunk__12351;
var G__12381 = count__12352;
var G__12382 = (i__12353 + (1));
seq__12350 = G__12379;
chunk__12351 = G__12380;
count__12352 = G__12381;
i__12353 = G__12382;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12350);
if(temp__4126__auto__){
var seq__12350__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12350__$1)){
var c__5401__auto__ = cljs.core.chunk_first.call(null,seq__12350__$1);
var G__12383 = cljs.core.chunk_rest.call(null,seq__12350__$1);
var G__12384 = c__5401__auto__;
var G__12385 = cljs.core.count.call(null,c__5401__auto__);
var G__12386 = (0);
seq__12350 = G__12383;
chunk__12351 = G__12384;
count__12352 = G__12385;
i__12353 = G__12386;
continue;
} else {
var vec__12356 = cljs.core.first.call(null,seq__12350__$1);
var name = cljs.core.nth.call(null,vec__12356,(0),null);
var map__12357 = cljs.core.nth.call(null,vec__12356,(1),null);
var map__12357__$1 = ((cljs.core.seq_QMARK_.call(null,map__12357))?cljs.core.apply.call(null,cljs.core.hash_map,map__12357):map__12357);
var arglists = cljs.core.get.call(null,map__12357__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__12357__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__12387 = cljs.core.next.call(null,seq__12350__$1);
var G__12388 = null;
var G__12389 = (0);
var G__12390 = (0);
seq__12350 = G__12387;
chunk__12351 = G__12388;
count__12352 = G__12389;
i__12353 = G__12390;
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
}
});
