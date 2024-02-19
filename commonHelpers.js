import{a as b,S as w,i as d}from"./assets/vendor-b42c18af.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(e){if(e.ep)return;e.ep=!0;const i=r(e);fetch(e.href,i)}})();function x(s){return s.map(({webformatURL:t,largeImageURL:r,tags:l,likes:e,views:i,comments:a,downloads:L})=>`<li class="gallery-item">
      <a class="gallery-link" href="${r}">
        <img class="gallery-image" src="${t}" alt="${l}" />
      </a>
      <ul class="specific-list">
        <li class="specific-item">
          <p class="specific-text">Likes</p>
          <p class="specific-quantity">${e}</p>
        </li>
        <li class="specific-item">
          <p class="specific-text">Views</p>
          <p class="specific-quantity">${i}</p>
        </li>
        <li class="specific-item">
          <p class="specific-text">Comments</p>
          <p class="specific-quantity">${a}</p>
        </li>
        <li class="specific-item">
          <p class="specific-text">Downloads</p>
          <p class="specific-quantity">${L}</p>
        </li>
      </ul>
    </li>`).join("")}async function g(s,t){const e="https://pixabay.com"+"/api/",i={key:"42127236-8bfdbbfbeed8a2dadaca720e8",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t};return(await b.get(e,{params:i})).data}const v=new w(".gallery-list a",{captionDelay:250,captionsData:"alt"}),S={message:"Please fill out the input field.",backgroundColor:"#FFA000",titleColor:"#fff",titleSize:"16px",titleLineHeight:"1.5",messageColor:"#fff",messageSize:"16px",messageLineHeight:"1.5",position:"topRight",timeout:3e3,progressBar:!1},T={message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",titleColor:"#fff",titleSize:"16px",titleLineHeight:"1.5",messageColor:"#fff",messageSize:"16px",messageLineHeight:"1.5",position:"topRight",timeout:3e3,progressBar:!1,maxWidth:400},E={message:"We're sorry, but you've reached the end of search results.",titleColor:"#fff",titleSize:"16px",titleLineHeight:"1.5",messageColor:"#fff",messageSize:"16px",messageLineHeight:"1.5",position:"topRight",timeout:3e3,progressBar:!1,maxWidth:350},o={form:document.querySelector(".gallery-form"),loader:document.querySelector(".loader"),gallery:document.querySelector(".gallery-list"),btnLoadMore:document.querySelector(".gallery-load-more"),scrollToTopBtn:document.querySelector(".scroll-up")};let n="",c=1,u=1;o.form.addEventListener("submit",q);o.btnLoadMore.addEventListener("click",C);async function q(s){if(s.preventDefault(),n=s.target.elements.text.value.trim(),!n){s.target.reset(),d.warning(S);return}o.gallery.innerHTML="",p(),h();try{const t=await g(n,c);if(t.hits.length===0){d.warning(T),f(),s.target.reset();return}m(t.hits),t.totalHits<=15?p():y()}catch(t){console.error("Error loading data:",t)}f(),s.target.reset()}async function C(){c+=1,p(),h();const s=15,t=await g(n,c);if(u=Math.ceil(t.totalHits/s),c>=u){d.info(E),p(),f();return}m(t.hits);const r=o.gallery.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:r*3,behavior:"smooth"}),f(),y()}function m(s){const t=x(s);o.gallery.insertAdjacentHTML("beforeend",t),v.refresh()}function h(){o.loader.classList.add("in-active")}function f(){o.loader.classList.remove("in-active")}function y(){o.btnLoadMore.classList.add("in-active")}function p(){o.btnLoadMore.classList.remove("in-active")}window.addEventListener("scroll",()=>{window.scrollY>120?o.scrollToTopBtn.classList.add("show"):o.scrollToTopBtn.classList.remove("show")});o.scrollToTopBtn.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers.js.map
