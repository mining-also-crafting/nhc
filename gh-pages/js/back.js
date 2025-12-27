document.addEventListener("DOMContentLoaded", function(event) { 
    document.querySelector(".back") && document.querySelector(".back").addEventListener("click", function() {
        document.referrer && window.history.length > 1 ? window.history.back() : (this.textContent = "Redirecting...", setTimeout(() => {
            window.location.href = "https://nhc.gg"
        }, 500))
    });
});