function afficherMenu() {
    nav = document.getElementsByTagName("nav")[0];
    return isHidden(nav) ? nav.classList.remove("is-hidden") : nav.classList.add("is-hidden")
}
function isHidden(el) {
    var style = window.getComputedStyle(el);
    return style.display === "none"
}
