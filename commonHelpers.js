import{a as b,S as w,i as d}from"./assets/vendor-b42c18af.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();function x(i){return i.map(({webformatURL:t,largeImageURL:r,tags:l,likes:e,views:s,comments:a,downloads:L})=>`<li class="gallery-item">
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
          <p class="specific-quantity">${s}</p>
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
    </li>`).join("")}async function u(i,t){const e="https://pixabay.com"+"/api/",s={key:"42127236-8bfdbbfbeed8a2dadaca720e8",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t};return(await b.get(e,{params:s})).data}const v=new w(".gallery-list a",{captionDelay:250,captionsData:"alt"}),S={message:"Please fill out the input field.",backgroundColor:"#FFA000",titleColor:"#fff",titleSize:"16px",titleLineHeight:"1.5",messageColor:"#fff",messageSize:"16px",messageLineHeight:"1.5",position:"topRight",timeout:3e3,progressBar:!1},T={message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",titleColor:"#fff",titleSize:"16px",titleLineHeight:"1.5",messageColor:"#fff",messageSize:"16px",messageLineHeight:"1.5",position:"topRight",timeout:3e3,progressBar:!1,maxWidth:400},E={message:"We're sorry, but you've reached the end of search results.",titleColor:"#fff",titleSize:"16px",titleLineHeight:"1.5",messageColor:"#fff",messageSize:"16px",messageLineHeight:"1.5",position:"topRight",timeout:3e3,progressBar:!1,maxWidth:350},o={form:document.querySelector(".gallery-form"),loader:document.querySelector(".loader"),gallery:document.querySelector(".gallery-list"),btnLoadMore:document.querySelector(".gallery-load-more"),scrollToTopBtn:document.querySelector(".scroll-up")};let n="",c=1;const g=15;o.form.addEventListener("submit",q);o.btnLoadMore.addEventListener("click",C);async function q(i){if(i.preventDefault(),n=i.target.elements.text.value.trim(),!n){i.target.reset(),d.warning(S);return}o.gallery.innerHTML="",p(),h();try{const t=await u(n,c);if(t.hits.length===0){d.warning(T),f(),i.target.reset();return}m(t.hits),t.totalHits<=g?p():y()}catch(t){console.error("Error loading data:",t)}f(),i.target.reset()}async function C(){c+=1,p(),h();const i=await u(n,c),t=Math.ceil(i.totalHits/g);if(c>=t){d.info(E),p(),f();return}m(i.hits);const r=o.gallery.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:r*3,behavior:"smooth"}),f(),y()}function m(i){const t=x(i);o.gallery.insertAdjacentHTML("beforeend",t),v.refresh()}function h(){o.loader.classList.add("in-active")}function f(){o.loader.classList.remove("in-active")}function y(){o.btnLoadMore.classList.add("in-active")}function p(){o.btnLoadMore.classList.remove("in-active")}window.addEventListener("scroll",()=>{window.scrollY>120?o.scrollToTopBtn.classList.add("show"):o.scrollToTopBtn.classList.remove("show")});o.scrollToTopBtn.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers.js.map
