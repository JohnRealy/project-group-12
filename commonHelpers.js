import{a as w,A as b,i as g,S as h,N as M}from"./assets/vendor-09312bac.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const p of r.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&n(p)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();async function S(e,t){const o={email:e,comment:t};try{return(await w.post("https://portfolio-js.b.goit.study/api/requests",o)).data}catch(n){console.error(n)}}async function B(){try{return(await w.get("https://portfolio-js.b.goit.study/api/reviews")).data}catch(e){return e}}document.addEventListener("DOMContentLoaded",function(){new b(" .accordion-about-container"),new b(" .accordion-faq-container")});const f={formFooter:document.querySelector(".js_form_footer"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),elementModal:document.querySelector(".modal")};f.formFooter.addEventListener("submit",q);async function q(e){e.preventDefault();const t=e.target.elements.email.value.trim(),o=e.target.elements.message.value.trim();if(t.length===0||o.length===0){console.log("input filds"),g.info({position:"topRight",message:"INPUT EMAIL E MESSAGE"});return}else{const n=await S(t,o);console.log(n),k(n),O()}}function O(){const e=document.querySelector("[data-modal]"),t=document.querySelector("[data-modal-close]");f.formFooter.reset(),e.classList.remove("is-hidden"),e.addEventListener("click",n=>{n.target===n.currentTarget&&o()}),t.addEventListener("click",()=>o());function o(){e.classList.add("is-hidden")}}function k(e){const{title:t,message:o}=e,n=`<button type="button" class="modal-close-btn" data-modal-close>
        <svg class="modal-icon-close">
          <use href="../img/icons.svg#icon-close"></use>
        </svg>
      </button>
      <h2 class="modal-title">${t}</h2>
      <p class="modal-text">${o}</p>`;f.elementModal.innerHTML=n}const x=document.getElementById("mobile-menu-close"),N=document.getElementById("mobile-menu-open"),a=document.getElementById("main-modal-menu-open"),u=document.getElementById("mobile-menu-id"),j=document.querySelectorAll("mobile-menu-nav-list-item"),I=document.getElementById("main-modal-menu-id"),R=document.querySelectorAll("main-modal-list-item"),m=document.getElementsByTagName("body"),v=document.querySelector(".main-modal-menu");for(let e of j)e.addEventListener("click",()=>{u.classList.remove("is-open"),m[0].classList.remove("no-scroll")});for(let e of R)e.addEventListener("click",()=>{I.classList.remove("is-open"),m[0].classList.remove("no-scroll")});N.addEventListener("click",()=>{u.classList.add("is-open"),m[0].classList.add("no-scroll")});x.addEventListener("click",()=>{u.classList.remove("is-open"),m[0].classList.remove("no-scroll")});a.addEventListener("click",y);function y(){a.addEventListener("click",L),C(),a.removeEventListener("click",y)}function C(){v.classList.add("is-open2")}function L(){v.classList.remove("is-open2"),a.addEventListener("click",y)}document.addEventListener("click",e=>{!v.contains(e.target)&&!a.contains(e.target)&&(console.log("clicked outside menu"),L(),console.log(u))});document.querySelector(".projects-section > .swiper");const i=document.querySelector(".projects-next-btn"),c=document.querySelector(".projects-prev-btn");new Swiper(".mySwiper",{navigation:{nextEl:".projects-next-btn",prevEl:".projects-prev-btn"}});const A=new MutationObserver(e=>{e.forEach(t=>{t.attributeName==="class"&&(i.classList.contains("swiper-button-disabled")?(i.style.opacity="0.5",i.style.cursor="not-allowed"):(i.style.opacity="1",i.style.cursor="pointer"))})});A.observe(i,{attributes:!0});const P=new MutationObserver(e=>{e.forEach(t=>{t.attributeName==="class"&&(c.classList.contains("swiper-button-disabled")?(c.style.opacity="0.5",c.style.cursor="not-allowed"):(c.style.opacity="1",c.style.cursor="pointer"))})});P.observe(c,{attributes:!0});const E=document.querySelector(".reviews-list"),T=document.querySelector(".reviews-swiper"),l=document.querySelector(".reviews-next-btn"),d=document.querySelector(".reviews-prev-btn");function $({avatar_url:e,author:t,review:o}){return`<li class="reviews-item swiper-slide">
              <img class="reviews-item-img" src="${e}" alt="Ihor Trachuk" width="48" height="48" />
              <h3 class="reviews-item-title">${t}</h3>
              <p class="reviews-item-text">
                ${o}
              </p>
          </li>`}function F(e){return e.map($).join("")}function V(){const e=document.createElement("li"),t=document.createElement("span");e.classList.add("reviews-item-error"),t.textContent="Not found",t.classList.add("reviews-text-error"),e.appendChild(t),E.appendChild(e)}document.addEventListener("DOMContentLoaded",D);async function D(){try{const e=await B(),t=F(e);E.insertAdjacentHTML("beforeend",t)}catch(e){console.error("Error :",e),V(),g.info({close:!1,position:"topRight",message:"Error!"})}}new h(T,{modules:[M],slidesPerView:1,spaceBetween:16,keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{768:{slidesPerView:2,spaceBetween:18},1440:{slidesPerView:4,spaceBetween:16}},direction:"horizontal",navigation:{nextEl:".reviews-next-btn",prevEl:".reviews-prev-btn"}});const z=new MutationObserver(e=>{e.forEach(t=>{t.attributeName==="class"&&(l.classList.contains("swiper-button-disabled")?l.style.opacity="0.5":l.style.opacity="1")})});z.observe(l,{attributes:!0});const H=new MutationObserver(e=>{e.forEach(t=>{t.attributeName==="class"&&(d.classList.contains("swiper-button-disabled")?d.style.opacity="0.5":d.style.opacity="1")})});H.observe(d,{attributes:!0});
//# sourceMappingURL=commonHelpers.js.map
