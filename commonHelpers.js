import{a as g,A as b,i as w,S as B,N as M}from"./assets/vendor-09312bac.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const v of r.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&n(v)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();async function k(e,t){const s={email:e,comment:t};try{return(await g.post("https://portfolio-js.b.goit.study/api/requests",s)).data}catch(n){console.error(n)}}async function S(){try{return(await g.get("https://portfolio-js.b.goit.study/api/reviews")).data}catch(e){return e}}document.addEventListener("DOMContentLoaded",function(){new b(" .accordion-about-container"),new b(" .accordion-faq-container")});const f={formFooter:document.querySelector(".js_form_footer"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),elementModal:document.querySelector(".modal")};f.formFooter.addEventListener("submit",O);async function O(e){e.preventDefault();const t=e.target.elements.email.value.trim(),s=e.target.elements.message.value.trim();if(t.length===0||s.length===0){console.log("input filds"),w.info({position:"topRight",message:"INPUT EMAIL E MESSAGE"});return}else{const n=await k(t,s);console.log(n),x(n),q()}}function q(){const e=document.querySelector("[data-modal]"),t=document.querySelector("[data-modal-close]");f.formFooter.reset(),e.classList.remove("is-hidden"),e.addEventListener("click",n=>{n.target===n.currentTarget&&s()}),t.addEventListener("click",()=>s());function s(){e.classList.add("is-hidden")}}function x(e){const{title:t,message:s}=e,n=`<button type="button" class="modal-close-btn" data-modal-close>
        <svg class="modal-icon-close">
          <use href="./img/icons.svg#icon-close"></use>
        </svg>
      </button>
      <h2 class="modal-title">${t}</h2>
      <p class="modal-text">${s}</p>`;f.elementModal.innerHTML=n}const N=document.getElementById("mobile-menu-close"),C=document.getElementById("mobile-menu-open"),l=document.getElementById("main-modal-menu-open"),d=document.getElementById("mobile-menu-id"),j=document.getElementsByClassName("mobile-menu-nav-list-item"),I=document.getElementById("main-modal-menu-id"),L=document.getElementsByClassName("main-modal-list-item"),a=document.getElementsByTagName("body"),p=document.querySelector(".main-modal-menu"),R=document.getElementsByClassName("order-btn-text");for(let e of j)e.addEventListener("click",()=>{d.classList.remove("is-open"),a[0].classList.remove("no-scroll")});for(let e of L)e.addEventListener("click",()=>{p.classList.remove("is-open"),a[0].classList.remove("no-scroll")});for(let e of L)e.addEventListener("click",()=>{I.classList.remove("is-open"),a[0].classList.remove("no-scroll")});for(let e of R)e.addEventListener("click",()=>{d.classList.remove("is-open"),a[0].classList.remove("no-scroll")});C.addEventListener("click",()=>{d.classList.add("is-open"),a[0].classList.add("no-scroll")});N.addEventListener("click",()=>{d.classList.remove("is-open"),a[0].classList.remove("no-scroll")});l.addEventListener("click",y);function y(){l.addEventListener("click",E),P(),l.removeEventListener("click",y)}function P(){p.classList.add("is-open2")}function E(){p.classList.remove("is-open2"),l.addEventListener("click",y)}document.addEventListener("click",e=>{!p.contains(e.target)&&!l.contains(e.target)&&!d.contains(e.target)&&(console.log("clicked outside menu"),E())});document.querySelector(".projects-section > .swiper");const i=document.querySelector(".projects-next-btn"),c=document.querySelector(".projects-prev-btn");new Swiper(".mySwiper",{navigation:{nextEl:".projects-next-btn",prevEl:".projects-prev-btn"}});const T=new MutationObserver(e=>{e.forEach(t=>{t.attributeName==="class"&&(i.classList.contains("swiper-button-disabled")?(i.style.opacity="0.5",i.style.cursor="not-allowed"):(i.style.opacity="1",i.style.cursor="pointer"))})});T.observe(i,{attributes:!0});const A=new MutationObserver(e=>{e.forEach(t=>{t.attributeName==="class"&&(c.classList.contains("swiper-button-disabled")?(c.style.opacity="0.5",c.style.cursor="not-allowed"):(c.style.opacity="1",c.style.cursor="pointer"))})});A.observe(c,{attributes:!0});const h=document.querySelector(".reviews-list"),$=document.querySelector(".reviews-swiper"),u=document.querySelector(".reviews-next-btn"),m=document.querySelector(".reviews-prev-btn");function F({avatar_url:e,author:t,review:s}){return`<li class="reviews-item swiper-slide">
              <img class="reviews-item-img" src="${e}" alt="Ihor Trachuk" width="48" height="48" />
              <h3 class="reviews-item-title">${t}</h3>
              <p class="reviews-item-text">
                ${s}
              </p>
          </li>`}function V(e){return e.map(F).join("")}function D(){const e=document.createElement("li"),t=document.createElement("span");e.classList.add("reviews-item-error"),t.textContent="Not found",t.classList.add("reviews-text-error"),e.appendChild(t),h.appendChild(e)}document.addEventListener("DOMContentLoaded",z);async function z(){try{const e=await S(),t=V(e);h.insertAdjacentHTML("beforeend",t)}catch(e){console.error("Error :",e),D(),w.info({close:!1,position:"topRight",message:"Error!"})}}new B($,{modules:[M],slidesPerView:1,spaceBetween:16,keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{768:{slidesPerView:2,spaceBetween:18},1440:{slidesPerView:4,spaceBetween:16}},direction:"horizontal",navigation:{nextEl:".reviews-next-btn",prevEl:".reviews-prev-btn"}});const H=new MutationObserver(e=>{e.forEach(t=>{t.attributeName==="class"&&(u.classList.contains("swiper-button-disabled")?u.style.opacity="0.5":u.style.opacity="1")})});H.observe(u,{attributes:!0});const _=new MutationObserver(e=>{e.forEach(t=>{t.attributeName==="class"&&(m.classList.contains("swiper-button-disabled")?m.style.opacity="0.5":m.style.opacity="1")})});_.observe(m,{attributes:!0});
//# sourceMappingURL=commonHelpers.js.map
