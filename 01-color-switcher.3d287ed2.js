function t(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}console.log(t());const e=document.querySelector("body"),o=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]");let d=null;o.addEventListener("click",(function(){e.classList.add("bgcolor"),setTimeout((()=>{e.style.backgroundColor=t()}),1e3),d=setInterval((()=>{e.style.backgroundColor=t()}),1e3),o.disabled=!0,n.disabled=!1})),n.addEventListener("click",(function(){clearInterval(d),o.disabled=!1,n.disabled=!0}));
//# sourceMappingURL=01-color-switcher.3d287ed2.js.map