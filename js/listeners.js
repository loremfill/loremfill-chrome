var contextElement = null;
document.addEventListener("contextmenu", function(event) {
    if (event && event.target) {
        contextElement = event.target;
    }
});