var selectedLang = document.getElementById('lang');
var hiddenLang = document.getElementById('hidden-lang');
var liElmts = document.querySelectorAll('li');

selectedLang.onclick = function() {
    if (hiddenLang.style.display === "none") {
        hiddenLang.style.display = "block";
    } else if (hiddenLang.style.display === "block"){
        hiddenLang.style.display = "none";
    }
};
function disappear(x) {
    return x ? x.style.display = "none" : hiddenLang.style.display = "none";
};

function deploy(x) {
    x.classList.toggle('hoverLi');
    if (document.documentElement.lang === "fr") {
        switch (x.id) {
            case "li1": x.innerHTML = "Notre métier"; break;
            case "li2": x.innerHTML = "L'offre Econet"; break;
            case "li3": x.innerHTML = "Nos références"; break;
            case "li4": x.innerHTML = "Nos missions"; break;
            case "li5": x.innerHTML = "Eco-responsables"; break;
            default: console.log("erreur")
        }
    } else {
        switch (x.id) {
            case "li1e": x.innerHTML = "Our job"; break;
            case "li2e": x.innerHTML = "The Econet solution"; break;
            case "li3e": x.innerHTML = "Our references"; break;
            case "li4e": x.innerHTML = "Our missions"; break;
            case "li5e": x.innerHTML = "Eco-friendly"; break;
            default: console.log("error")
        }
    }
}

function reduce(x) {
    x.classList.toggle('hoverLi');
    x.innerHTML = ""
}
