(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{317:function(e,t,s){"use strict";(function(o){s(175);s(293);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var i=s(292);const r="lazy-background";true;{class e extends HTMLElement{loadImage(){if(!this.loaded){this.loaded=true;this.observer&&this.observer.unobserve(this);window.clearTimeout(this.timeout);this.setAttribute("data-lazy-should-load",true)}}connectedCallback(){this.observer=new IntersectionObserver(async([e])=>{if(!e.isIntersecting)return;this.loadImage()},{rootMargin:(this.getAttribute("lazyloadoffset")||0)+"px"});this.observer.observe(this);this.timeout=window.setTimeout(()=>this.loadImage(),1e4)}disconnectedCallback(){this.observer&&this.observer.unobserve(this);window.clearTimeout(this.timeout)}}window.customElements.define(r,e)}var a=(0,i.reactCustomElement)(r,o);t.default=a;e.exports=t.default}).call(this,"src/components/customElements/LazyLoad/BackgroundImage.js")}}]);