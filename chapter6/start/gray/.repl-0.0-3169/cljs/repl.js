// Compiled by ClojureScript 0.0-3169 {}
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
var seq__11961_11973 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__11962_11974 = null;
var count__11963_11975 = (0);
var i__11964_11976 = (0);
while(true){
if((i__11964_11976 < count__11963_11975)){
var f_11977 = cljs.core._nth.call(null,chunk__11962_11974,i__11964_11976);
cljs.core.println.call(null,"  ",f_11977);

var G__11978 = seq__11961_11973;
var G__11979 = chunk__11962_11974;
var G__11980 = count__11963_11975;
var G__11981 = (i__11964_11976 + (1));
seq__11961_11973 = G__11978;
chunk__11962_11974 = G__11979;
count__11963_11975 = G__11980;
i__11964_11976 = G__11981;
continue;
} else {
var temp__4126__auto___11982 = cljs.core.seq.call(null,seq__11961_11973);
if(temp__4126__auto___11982){
var seq__11961_11983__$1 = temp__4126__auto___11982;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11961_11983__$1)){
var c__5473__auto___11984 = cljs.core.chunk_first.call(null,seq__11961_11983__$1);
var G__11985 = cljs.core.chunk_rest.call(null,seq__11961_11983__$1);
var G__11986 = c__5473__auto___11984;
var G__11987 = cljs.core.count.call(null,c__5473__auto___11984);
var G__11988 = (0);
seq__11961_11973 = G__11985;
chunk__11962_11974 = G__11986;
count__11963_11975 = G__11987;
i__11964_11976 = G__11988;
continue;
} else {
var f_11989 = cljs.core.first.call(null,seq__11961_11983__$1);
cljs.core.println.call(null,"  ",f_11989);

var G__11990 = cljs.core.next.call(null,seq__11961_11983__$1);
var G__11991 = null;
var G__11992 = (0);
var G__11993 = (0);
seq__11961_11973 = G__11990;
chunk__11962_11974 = G__11991;
count__11963_11975 = G__11992;
i__11964_11976 = G__11993;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__4688__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4688__auto__)){
return or__4688__auto__;
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
var seq__11965 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__11966 = null;
var count__11967 = (0);
var i__11968 = (0);
while(true){
if((i__11968 < count__11967)){
var vec__11969 = cljs.core._nth.call(null,chunk__11966,i__11968);
var name = cljs.core.nth.call(null,vec__11969,(0),null);
var map__11970 = cljs.core.nth.call(null,vec__11969,(1),null);
var map__11970__$1 = ((cljs.core.seq_QMARK_.call(null,map__11970))?cljs.core.apply.call(null,cljs.core.hash_map,map__11970):map__11970);
var arglists = cljs.core.get.call(null,map__11970__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__11970__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__11994 = seq__11965;
var G__11995 = chunk__11966;
var G__11996 = count__11967;
var G__11997 = (i__11968 + (1));
seq__11965 = G__11994;
chunk__11966 = G__11995;
count__11967 = G__11996;
i__11968 = G__11997;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__11965);
if(temp__4126__auto__){
var seq__11965__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11965__$1)){
var c__5473__auto__ = cljs.core.chunk_first.call(null,seq__11965__$1);
var G__11998 = cljs.core.chunk_rest.call(null,seq__11965__$1);
var G__11999 = c__5473__auto__;
var G__12000 = cljs.core.count.call(null,c__5473__auto__);
var G__12001 = (0);
seq__11965 = G__11998;
chunk__11966 = G__11999;
count__11967 = G__12000;
i__11968 = G__12001;
continue;
} else {
var vec__11971 = cljs.core.first.call(null,seq__11965__$1);
var name = cljs.core.nth.call(null,vec__11971,(0),null);
var map__11972 = cljs.core.nth.call(null,vec__11971,(1),null);
var map__11972__$1 = ((cljs.core.seq_QMARK_.call(null,map__11972))?cljs.core.apply.call(null,cljs.core.hash_map,map__11972):map__11972);
var arglists = cljs.core.get.call(null,map__11972__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__11972__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__12002 = cljs.core.next.call(null,seq__11965__$1);
var G__12003 = null;
var G__12004 = (0);
var G__12005 = (0);
seq__11965 = G__12002;
chunk__11966 = G__12003;
count__11967 = G__12004;
i__11968 = G__12005;
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
