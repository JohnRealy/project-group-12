import{a as l,A as i,i as d}from"./assets/vendor-68e23513.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();async function u(o,s){const r={email:o,comment:s};try{return(await l.post("https://portfolio-js.b.goit.study/api/requests",r)).data}catch(t){console.error(t)}}document.addEventListener("DOMContentLoaded",function(){new i(" .accordion-about-container"),new i(" .accordion-faq-container")});const a={formFooter:document.querySelector(".js_form_footer"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),elementModal:document.querySelector(".modal")};a.formFooter.addEventListener("submit",m);async function m(o){o.preventDefault();const s=o.target.elements.email.value.trim(),r=o.target.elements.message.value.trim();if(s.length===0||r.length===0){console.log("input filds"),d.info({position:"topRight",message:"INPUT EMAIL E MESSAGE"});return}else{const t=await u(s,r);console.log(t),p(t),f()}}function f(){const o=document.querySelector("[data-modal]"),s=document.querySelector("[data-modal-close]");a.formFooter.reset(),o.classList.remove("is-hidden"),o.addEventListener("click",t=>{t.target===t.currentTarget&&r()}),s.addEventListener("click",()=>r());function r(){o.classList.add("is-hidden")}}function p(o){const{title:s,message:r}=o,t=` <button type="button" class="modal-close-btn" data-modal-close>
            <svg class="modal-icon-close" >
                <use href="./img/icons.svg#icon-close"></use>
            </svg>
        </button>
        <h2 class="modal-title">${s}</h2>
        <p class="modal-text">${r}</p>`;a.elementModal.innerHTML=t}
//# sourceMappingURL=commonHelpers.js.map
