document.addEventListener("DOMContentLoaded",function(event){document.querySelector(".deeper")?.addEventListener("click",function(){this.disabled=!0,this.style.cssText="opacity: 0.5; pointer-events: none;",this.innerHTML='<img class="icon" src="images/icons/pickaxe.svg" alt="pickaxe"> Mining...';var h2=document.querySelector(".container h2"),h2=(h2&&(h2.textContent="You found Diamonds!"),document.querySelector(".avatar")),h2=(h2&&(h2.src="images/misc/404/wow.png"),document.querySelector(".steve"));h2&&(h2.src="images/misc/404/1.png"),Array.from({length:30}).forEach(()=>{let diamond=document.createElement("img");diamond.src="images/misc/404/diamond.png",diamond.style.cssText=`
            position: fixed;
            width: ${20+30*Math.random()}px;
            pointer-events: none;
            z-index: 9999;
            left: ${Math.random()*window.innerWidth}px;
            top: -50px;
            opacity: 1.0;
        `,diamond.animate([{transform:"translateY(0px) rotate(0deg)"},{transform:`translateY(${window.innerHeight+50}px) rotate(${360*Math.random()}deg)`}],{duration:3e3+2e3*Math.random(),easing:"linear"}).onfinish=()=>diamond.remove(),document.body.appendChild(diamond)}),setTimeout(()=>window.location.href="https://nhc.gg",2500)})});