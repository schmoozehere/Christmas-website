(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(t){if(t.ep)return;t.ep=!0;const e=o(t);fetch(t.href,e)}})();function m(){const s=document.querySelector(".snow-container"),r=50;for(let o=0;o<r;o++){const n=document.createElement("div");n.classList.add("snowflake");const t=Math.random()*5+2,e=Math.random()*window.innerWidth,a=Math.random()*5,i=Math.random()*3+2;n.style.width=`${t}px`,n.style.height=`${t}px`,n.style.left=`${e}px`,n.style.animationDelay=`${a}s`,n.style.animationDuration=`${i}s`,s.appendChild(n)}}m();function l(){const s=new Date(new Date().getFullYear(),11,25).getTime(),r=new Date().getTime(),o=s-r;if(o<0){const n=new Date().getFullYear()+1,e=new Date(n,11,25).getTime()-r,a=Math.floor(e/(1e3*60*60*24)),i=Math.floor(e%(1e3*60*60*24)/(1e3*60*60)),d=Math.floor(e%(1e3*60*60)/(1e3*60)),u=Math.floor(e%(1e3*60)/1e3);c(a,i,d,u)}else{const n=Math.floor(o/864e5),t=Math.floor(o%(1e3*60*60*24)/(1e3*60*60)),e=Math.floor(o%(1e3*60*60)/(1e3*60)),a=Math.floor(o%(1e3*60)/1e3);c(n,t,e,a)}}function c(s,r,o,n){document.getElementById("days").textContent=String(s).padStart(2,"0"),document.getElementById("hours").textContent=String(r).padStart(2,"0"),document.getElementById("minutes").textContent=String(o).padStart(2,"0"),document.getElementById("seconds").textContent=String(n).padStart(2,"0")}setInterval(l,1e3);l();document.getElementById("wishForm").addEventListener("submit",s=>{s.preventDefault(),s.target.querySelector("input").value,alert("Your Christmas wish has been sent to Santa! 🎅"),s.target.reset()});document.querySelector(".cta-button").addEventListener("click",()=>{document.querySelector(".activities").scrollIntoView({behavior:"smooth"})});