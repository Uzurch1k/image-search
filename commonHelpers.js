import{i as n,S as u}from"./assets/vendor-7659544d.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const m={message:"Please fill out the input field.",backgroundColor:"#FFA000",titleColor:"#fff",titleSize:"16px",titleLineHeight:"1.5",messageColor:"#fff",messageSize:"16px",messageLineHeight:"1.5",position:"topRight",timeout:3e3,progressBar:!1},g={message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",titleColor:"#fff",titleSize:"16px",titleLineHeight:"1.5",messageColor:"#fff",messageSize:"16px",messageLineHeight:"1.5",position:"topRight",timeout:3e3,progressBar:!1,maxWidth:400},a=document.querySelector(".gallery-form"),c=document.querySelector(".loader"),f=document.querySelector(".gallery-list");a.addEventListener("submit",d);function d(r){r.preventDefault();const i=a.elements.text.value.trim();if(!i){a.reset(),n.warning(m);return}f.innerHTML="",b(),h(i).then(s=>{if(s.hits.length===0){n.warning(g);return}L(s.hits)}).catch(s=>console.error("Error loading data:",s)).finally(x),a.reset()}function h(r){const i="https://pixabay.com",s="/api/",o=`?key=42127236-8bfdbbfbeed8a2dadaca720e8
	&q=${r}
	&image_type=photo
	&orientation=horizontal
	&safesearch=true
	&per_page=21`,e=i+s+o;return fetch(e).then(t=>{if(t.ok)return t.json();throw new Error(t.status)})}function y(r){return r.map(({webformatURL:i,largeImageURL:s,tags:o,likes:e,views:t,comments:l,downloads:p})=>`<li class="gallery-item">
      <a class="gallery-link" href="${s}">
        <img class="gallery-image" src="${i}" alt="${o}" />
      </a>
      <ul class="specific-list">
        <li class="specific-item">
          <p class="specific-text">Likes</p>
          <p class="specific-quantity">${e}</p>
        </li>
        <li class="specific-item">
          <p class="specific-text">Views</p>
          <p class="specific-quantity">${t}</p>
        </li>
        <li class="specific-item">
          <p class="specific-text">Comments</p>
          <p class="specific-quantity">${l}</p>
        </li>
        <li class="specific-item">
          <p class="specific-text">Downloads</p>
          <p class="specific-quantity">${p}</p>
        </li>
      </ul>
    </li>`).join("")}function L(r){const i=y(r);f.innerHTML=i,new u(".gallery-list a",{captionDelay:250,captionsData:"alt"}).refresh()}function b(){c.classList.add("in-active")}function x(){c.classList.remove("in-active")}
//# sourceMappingURL=commonHelpers.js.map
