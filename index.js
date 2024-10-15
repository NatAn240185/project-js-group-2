import{A as L}from"./assets/vendor-CTqzIL4Y.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();(()=>{const a={openModalBtn:document.querySelectorAll("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};a.openModalBtn.forEach(i=>{i.addEventListener("click",s)}),a.closeModalBtn.addEventListener("click",s),a.modal.addEventListener("click",t);function t(i){i.target===i.currentTarget&&a.modal.classList.add("is-hidden")}function s(){a.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();document.addEventListener("DOMContentLoaded",()=>{const a="https://portfolio-js.b.goit.study/api/requests",t=document.querySelector(".wt-input"),s=document.querySelector(".wt-textarea"),i=document.querySelector(".wt-form"),e=document.querySelector(".wt-button"),o=document.getElementById("email-valid-icon"),r=document.createElement("p");r.textContent="Invalid email, try again",r.style.color="#E74A3B",r.style.display="none",r.classList.add("error-message"),t.insertAdjacentElement("afterend",r);function m(){return/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(t.value)?(t.classList.remove("invalid-mail"),o.style.display="inline",r.style.display="none",!0):(t.classList.add("invalid-mail"),o.style.display="none",r.style.display="block",!1)}t.addEventListener("blur",m),i.addEventListener("submit",function(l){if(l.preventDefault(),!m()){alert("Please enter a valid email address");return}const c={email:t.value,comment:s.value||""};console.log(c),fetch(a,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}).then(n=>{if(n.ok)return n.json();throw new Error("Something went wrong on the server")}).then(n=>{console.log(n),openModal(),i.reset(),o.style.display="none"}).catch(n=>{console.error("Error:",n),alert("Error: "+n.message+". Please correct your data and try again.")})}),e.addEventListener("click",function(l){l.preventDefault();const c=m(),n=s.value.trim()!=="";c&&n?j():alert("Please fill in all required fields correctly.")});function j(){const l=document.body,c=document.createElement("div");c.classList.add("backdrop");const n=document.createElement("div");n.classList.add("wt-modal");const d=document.createElement("button");d.classList.add("modal-close-btn"),d.setAttribute("type","button");const g=document.createElement("svg");g.classList.add("modal-close-icon"),g.innerHTML='<use href="../img/work_together_icons.svg#icon-wt_modal_x-2"></use>',d.appendChild(g),n.appendChild(d);const u=document.createElement("h2");u.classList.add("wt-modal-title"),u.textContent="Thank you for your interest in cooperation!";const p=document.createElement("p");p.classList.add("wt-modal-text"),p.textContent="The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.",n.appendChild(u),n.appendChild(p),c.appendChild(n),l.appendChild(c);function h(){l.removeChild(c)}d.addEventListener("click",h),c.addEventListener("click",function(y){y.target===c&&(l.removeChild(c),h())}),document.addEventListener("keydown",function(y){y.key==="Escape"&&(h(),l.removeChild(c))})}});new L(".accordion-container",{openOnInit:[0]});const v=[{img:"./img/my-projects/Rectangle 11-min.png",title:"wallet webservice ",technologies:"React, JavaScript, Node JS, Git",github:"https://github.com/NatAn240185/project-js-group-2"},{img:"./img/my-projects/Rectangle 12-min.png",title:"English excellence webservice ",technologies:"React, JavaScript, Node JS, Git",github:"https://github.com/NatAn240185/project-js-group-2"},{img:"./img/my-projects/Rectangle 9-min.png",title:"green harvest online store",technologies:"React, JavaScript, Node JS, Git",github:"https://github.com/NatAn240185/project-js-group-2"},{img:"./img/my-projects/first screen 1-min.png",title:"starlight studio landing page",technologies:"React, JavaScript, Node JS, Git",github:"https://github.com/NatAn240185/project-js-group-2"},{img:"./img/my-projects/Rectangle 10-min.png",title:"power pulse webservice ",technologies:"React, JavaScript, Node JS, Git",github:"https://github.com/NatAn240185/project-js-group-2"},{img:"./img/my-projects/Rectangle 4-min.png",title:"energy flow webservice ",technologies:"React, JavaScript, Node JS, Git",github:"https://github.com/NatAn240185/project-js-group-2"},{img:"./img/my-projects/Rectangle 5-min.png",title:"fruitbox online store",technologies:"React, JavaScript, Node JS, Git",github:"https://github.com/NatAn240185/project-js-group-2"},{img:"./img/my-projects/Rectangle 6-min.png",title:"chego jewelry website",technologies:"React, JavaScript, Node JS, Git",github:"https://github.com/NatAn240185/project-js-group-2"},{img:"./img/my-projects/Rectangle 7-min.png",title:"mimino website",technologies:"React, JavaScript, Node JS, Git",github:"https://github.com/NatAn240185/project-js-group-2"},{img:"./img/my-projects/Rectangle 8-min.png",title:"vyshyvanka vibes Landing Page",technologies:"React, JavaScript, Node JS, Git",github:"https://github.com/NatAn240185/project-js-group-2"}];let f=0;const E=3;function b(){const a=document.getElementById("project-list");for(let t=0;t<E;t++){if(f>=v.length){document.getElementById("load-more").style.display="none";break}const s=v[f],i=document.createElement("li");i.classList.add("project-item"),i.innerHTML=`
      <img src="${s.img}" alt="${s.title}" class="img">
      <div class="item-text">
        <p class="text">${s.technologies}</p>
        <h3 class="label">${s.title}</h3>
  
        <a href="${s.github}" class="visit" target="_blank">Visit<svg class="visit-icon" width="15" height="15">
        <use href="../img/my-projects/symbol-defs.svg#icon-visit">
        </svg></a>
      </div>
    `,a.appendChild(i),f++}}b();document.getElementById("load-more").addEventListener("click",b);
//# sourceMappingURL=index.js.map
