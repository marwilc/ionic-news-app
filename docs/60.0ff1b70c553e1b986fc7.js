(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{uMfO:function(n,t,e){"use strict";e.r(t),e.d(t,"Tab1PageModule",function(){return f});var s=e("ofXK"),i=e("3Pt+"),o=e("TEn/"),r=e("j1ZV"),a=e("HGan"),c=e("tyNb"),b=e("quSY"),l=e("fXoL"),u=e("Ado8"),p=e("WTWz");const d=[{path:"",component:(()=>{class n{constructor(n){this._news=n,this.news=[],this._subscription=new b.a}ngOnDestroy(){this._subscription.unsubscribe()}ngOnInit(){this.loadNews()}loadData(n){this.loadNews(n)}loadNews(n){this._subscription.add(this._news.getTopHeadLines().subscribe(t=>{if(0===t.articles.length)return n.target.disabled=!0,void n.target.complete();this.news.push(...t.articles),n&&n.target.complete()}))}}return n.\u0275fac=function(t){return new(t||n)(l.Jb(u.a))},n.\u0275cmp=l.Db({type:n,selectors:[["app-tab1"]],decls:8,vars:3,consts:[[3,"translucent"],[3,"fullscreen"],[3,"news"],["threshold","150px","position","bottom",3,"ionInfinite"],["loadingSpinner","crescent","loadingText","Loading more data..."]],template:function(n,t){1&n&&(l.Mb(0,"ion-header",0),l.Mb(1,"ion-toolbar"),l.Mb(2,"ion-title"),l.fc(3," Marwil's News "),l.Lb(),l.Lb(),l.Lb(),l.Mb(4,"ion-content",1),l.Kb(5,"app-news",2),l.Mb(6,"ion-infinite-scroll",3),l.Ub("ionInfinite",function(n){return t.loadData(n)}),l.Kb(7,"ion-infinite-scroll-content",4),l.Lb(),l.Lb()),2&n&&(l.Zb("translucent",!0),l.zb(4),l.Zb("fullscreen",!0),l.zb(1),l.Zb("news",t.news))},directives:[o.l,o.B,o.A,o.j,p.a,o.o,o.p],styles:[""]}),n})()}];let w=(()=>{class n{}return n.\u0275mod=l.Hb({type:n}),n.\u0275inj=l.Gb({factory:function(t){return new(t||n)},imports:[[c.i.forChild(d)],c.i]}),n})(),f=(()=>{class n{}return n.\u0275mod=l.Hb({type:n}),n.\u0275inj=l.Gb({factory:function(t){return new(t||n)},imports:[[o.C,s.b,i.a,a.a,w,r.a]]}),n})()}}]);