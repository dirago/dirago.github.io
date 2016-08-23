var selectedLang = document.getElementById('selected-lang');
var hiddenLang = document.getElementById('hidden-lang');

selectedLang.onclick = function() {
    if (hiddenLang.style.display === "none") {
        hiddenLang.style.display = "block";
    } else if (hiddenLang.style.display === "block"){
        hiddenLang.style.display = "none";
    }
}
selectedLang.onblur = function() {

}
