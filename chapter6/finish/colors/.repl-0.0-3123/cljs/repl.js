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
var seq__12344_12356 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12345_12357 = null;
var count__12346_12358 = (0);
var i__12347_12359 = (0);
while(true){
if((i__12347_12359 < count__12346_12358)){
var f_12360 = cljs.core._nth.call(null,chunk__12345_12357,i__12347_12359);
cljs.core.println.call(null,"  ",f_12360);

var G__12361 = seq__12344_12356;
var G__12362 = chunk__12345_12357;
var G__12363 = count__12346_12358;
var G__12364 = (i__12347_12359 + (1));
seq__12344_12356 = G__12361;
chunk__12345_12357 = G__12362;
count__12346_12358 = G__12363;
i__12347_12359 = G__12364;
continue;
} else {
var temp__4126__auto___12365 = cljs.core.seq.call(null,seq__12344_12356);
if(temp__4126__auto___12365){
var seq__12344_12366__$1 = temp__4126__auto___12365;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12344_12366__$1)){
var c__5399__auto___12367 = cljs.core.chunk_first.call(null,seq__12344_12366__$1);
var G__12368 = cljs.core.chunk_rest.call(null,seq__12344_12366__$1);
var G__12369 = c__5399__auto___12367;
var G__12370 = cljs.core.count.call(null,c__5399__auto___12367);
var G__12371 = (0);
seq__12344_12356 = G__12368;
chunk__12345_12357 = G__12369;
count__12346_12358 = G__12370;
i__12347_12359 = G__12371;
continue;
} else {
var f_12372 = cljs.core.first.call(null,seq__12344_12366__$1);
cljs.core.println.call(null,"  ",f_12372);

var G__12373 = cljs.core.next.call(null,seq__12344_12366__$1);
var G__12374 = null;
var G__12375 = (0);
var G__12376 = (0);
seq__12344_12356 = G__12373;
chunk__12345_12357 = G__12374;
count__12346_12358 = G__12375;
i__12347_12359 = G__12376;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__4614__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4614__auto__)){
return or__4614__auto__;
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
var seq__12348 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12349 = null;
var count__12350 = (0);
var i__12351 = (0);
while(true){
if((i__12351 < count__12350)){
var vec__12352 = cljs.core._nth.call(null,chunk__12349,i__12351);
var name = cljs.core.nth.call(null,vec__12352,(0),null);
var map__12353 = cljs.core.nth.call(null,vec__12352,(1),null);
var map__12353__$1 = ((cljs.core.seq_QMARK_.call(null,map__12353))?cljs.core.apply.call(null,cljs.core.hash_map,map__12353):map__12353);
var arglists = cljs.core.get.call(null,map__12353__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__12353__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__12377 = seq__12348;
var G__12378 = chunk__12349;
var G__12379 = count__12350;
var G__12380 = (i__12351 + (1));
seq__12348 = G__12377;
chunk__12349 = G__12378;
count__12350 = G__12379;
i__12351 = G__12380;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12348);
if(temp__4126__auto__){
var seq__12348__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12348__$1)){
var c__5399__auto__ = cljs.core.chunk_first.call(null,seq__12348__$1);
var G__12381 = cljs.core.chunk_rest.call(null,seq__12348__$1);
var G__12382 = c__5399__auto__;
var G__12383 = cljs.core.count.call(null,c__5399__auto__);
var G__12384 = (0);
seq__12348 = G__12381;
chunk__12349 = G__12382;
count__12350 = G__12383;
i__12351 = G__12384;
continue;
} else {
var vec__12354 = cljs.core.first.call(null,seq__12348__$1);
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

var G__12385 = cljs.core.next.call(null,seq__12348__$1);
var G__12386 = null;
var G__12387 = (0);
var G__12388 = (0);
seq__12348 = G__12385;
chunk__12349 = G__12386;
count__12350 = G__12387;
i__12351 = G__12388;
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
