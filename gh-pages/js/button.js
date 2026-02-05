document.addEventListener("DOMContentLoaded", function(event) {
    document.querySelector(".deeper")?.addEventListener("click", function() {
        this.disabled = true;
        this.style.cssText = "opacity: 0.5; pointer-events: none;";
        this.innerHTML = `<img class="icon" src="images/icons/pickaxe.svg" alt="pickaxe"> Mining...`;

        const h2 = document.querySelector(".container h2");
        if (h2) h2.textContent = "You found Diamonds!";

        const avatar = document.querySelector(".avatar");
        if (avatar) avatar.src = "images/misc/404/wow.png";

        const steve = document.querySelector(".steve");
        if (steve) steve.src = "images/misc/404/1.png";

        Array.from({
            length: 30
        }).forEach(() => {
            let diamond = document.createElement("img");
            diamond.src = "images/misc/404/diamond.png";
            diamond.style.cssText = `
            position: fixed;
            width: ${20 + Math.random() * 30}px;
            pointer-events: none;
            z-index: 9999;
            left: ${Math.random() * window.innerWidth}px;
            top: -50px;
            opacity: 1.0;
        `;

            diamond.animate(
                [{
                        transform: "translateY(0px) rotate(0deg)"
                    },
                    {
                        transform: `translateY(${window.innerHeight + 50}px) rotate(${Math.random() * 360}deg)`
                    }
                ], {
                    duration: 3000 + Math.random() * 2000,
                    easing: "linear"
                }
            ).onfinish = () => diamond.remove();

            document.body.appendChild(diamond);
        });

        setTimeout(() => window.location.href = "https://nhc.gg", 2500);
    });
});