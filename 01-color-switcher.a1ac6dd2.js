!function(){function t(){return"#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}var e=document.querySelector("body"),n=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]"),a=null;n.addEventListener("click",(function(){e.classList.add("bgcolor"),setTimeout((function(){e.style.backgroundColor=t()}),1e3),a=setInterval((function(){e.style.backgroundColor=t()}),1e3),n.disabled=!0,o.disabled=!1})),o.addEventListener("click",(function(){clearInterval(a),n.disabled=!1,o.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.a1ac6dd2.js.map
