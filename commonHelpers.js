import{a as b,S as w,i as d}from"./assets/vendor-b42c18af.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();function x(i){return i.map(({webformatURL:t,largeImageURL:n,tags:a,likes:e,views:s,comments:r,downloads:L})=>`<li class="gallery-item">
      <a class="gallery-link" href="${n}">
        <img class="gallery-image" src="${t}" alt="${a}" />
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
          <p class="specific-quantity">${r}</p>
        </li>
        <li class="specific-item">
          <p class="specific-text">Downloads</p>
          <p class="specific-quantity">${L}</p>
        </li>
      </ul>
    </li>`).join("")}async function g(i,t){const e="https://pixabay.com"+"/api/",s={key:"42127236-8bfdbbfbeed8a2dadaca720e8",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t};return(await b.get(e,{params:s})).data}const v=new w(".gallery-list a",{captionDelay:250,captionsData:"alt"}),S={message:"Please fill out the input field.",backgroundColor:"#FFA000",titleColor:"#fff",titleSize:"16px",titleLineHeight:"1.5",messageColor:"#fff",messageSize:"16px",messageLineHeight:"1.5",position:"topRight",timeout:3e3,progressBar:!1},T={message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",titleColor:"#fff",titleSize:"16px",titleLineHeight:"1.5",messageColor:"#fff",messageSize:"16px",messageLineHeight:"1.5",position:"topRight",timeout:3e3,progressBar:!1,maxWidth:400},E={message:"We're sorry, but you've reached the end of search results.",titleColor:"#fff",titleSize:"16px",titleLineHeight:"1.5",messageColor:"#fff",messageSize:"16px",messageLineHeight:"1.5",position:"topRight",timeout:3e3,progressBar:!1,maxWidth:350},o={form:document.querySelector(".gallery-form"),loader:document.querySelector(".loader"),gallery:document.querySelector(".gallery-list"),btnLoadMore:document.querySelector(".gallery-load-more"),scrollToTopBtn:document.querySelector(".scroll-up")};let c,l,u;o.form.addEventListener("submit",q);o.btnLoadMore.addEventListener("click",C);async function q(i){if(i.preventDefault(),c=i.target.elements.text.value.trim(),l=1,!c){i.target.reset(),d.warning(S);return}o.gallery.innerHTML="",p(),h();try{const t=await g(c,l);if(t.hits.length===0){d.warning(T),f(),i.target.reset();return}m(t.hits),t.totalHits<=15?p():y()}catch(t){console.error("Error loading data:",t)}f(),i.target.reset()}async function C(){l+=1,p(),h();const i=await g(c,l);if(u=Math.ceil(i.totalHits/15),l>=u){d.info(E),p(),f();return}m(i.hits);const t=o.gallery.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:t*3,behavior:"smooth"}),f(),y()}function m(i){const t=x(i);o.gallery.insertAdjacentHTML("beforeend",t),v.refresh()}function h(){o.loader.classList.add("in-active")}function f(){o.loader.classList.remove("in-active")}function y(){o.btnLoadMore.classList.add("in-active")}function p(){o.btnLoadMore.classList.remove("in-active")}window.addEventListener("scroll",()=>{window.scrollY>120?o.scrollToTopBtn.classList.add("show"):o.scrollToTopBtn.classList.remove("show")});o.scrollToTopBtn.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers.js.map
