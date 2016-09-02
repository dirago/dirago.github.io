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
function scrollAnchor(n) {
    window.scrollTo(0, n);
}

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

// API Google maps

// function initialisation(){
//     var map = new google.maps.Map( document.getElementById("map"), {
// 		zoom: 11,
// 		center: new google.maps.LatLng( 43.609521, 3.910730 ),
//         scrollwheel: false
// 	});
//     var polyCoords = [
//         new google.maps.LatLng(43.54687,3.83766),
// new google.maps.LatLng(43.54778,3.82614),
// new google.maps.LatLng(43.54938,3.8157),
// new google.maps.LatLng(43.55185,3.80612),
// new google.maps.LatLng(43.5558,3.79649),
// new google.maps.LatLng(43.5606,3.78789),
// new google.maps.LatLng(43.56448,3.78204),
// new google.maps.LatLng(43.5696,3.77558),
// new google.maps.LatLng(43.57377,3.77075),
// new google.maps.LatLng(43.57621,3.76816),
// new google.maps.LatLng(43.57931,3.76549),
// new google.maps.LatLng(43.58228,3.76347),
// new google.maps.LatLng(43.58522,3.7617),
// new google.maps.LatLng(43.58932,3.75933),
// new google.maps.LatLng(43.59435,3.7573),
// new google.maps.LatLng(43.59931,3.75579),
// new google.maps.LatLng(43.60253,3.75505),
// new google.maps.LatLng(43.60575,3.75438),
// new google.maps.LatLng(43.60941,3.75413),
// new google.maps.LatLng(43.61296,3.75419),
// new google.maps.LatLng(43.61611,3.75451),
// new google.maps.LatLng(43.62025,3.75506),
// new google.maps.LatLng(43.62372,3.75572),
// new google.maps.LatLng(43.62682,3.75655),
// new google.maps.LatLng(43.62947,3.75743),
// new google.maps.LatLng(43.63184,3.75849),
// new google.maps.LatLng(43.63388,3.75959),
// new google.maps.LatLng(43.6358,3.76065),
// new google.maps.LatLng(43.63759,3.76197),
// new google.maps.LatLng(43.63933,3.76347),
// new google.maps.LatLng(43.64118,3.76527),
// new google.maps.LatLng(43.64298,3.76758),
// new google.maps.LatLng(43.64656,3.77285),
// new google.maps.LatLng(43.65052,3.78078),
// new google.maps.LatLng(43.65459,3.79088),
// new google.maps.LatLng(43.65809,3.79994),
// new google.maps.LatLng(43.66147,3.8097),
// new google.maps.LatLng(43.66484,3.82022),
// new google.maps.LatLng(43.66785,3.83058),
// new google.maps.LatLng(43.67184,3.84484),
// new google.maps.LatLng(43.67572,3.85927),
// new google.maps.LatLng(43.67915,3.8743),
// new google.maps.LatLng(43.68209,3.8883),
// new google.maps.LatLng(43.68536,3.9036),
// new google.maps.LatLng(43.68839,3.91992),
// new google.maps.LatLng(43.68966,3.92792),
// new google.maps.LatLng(43.69068,3.93489),
// new google.maps.LatLng(43.6918,3.94271),
// new google.maps.LatLng(43.69274,3.95031),
// new google.maps.LatLng(43.6933,3.95701),
// new google.maps.LatLng(43.69381,3.9641),
// new google.maps.LatLng(43.6941,3.97132),
// new google.maps.LatLng(43.69419,3.97923),
// new google.maps.LatLng(43.6941,3.98713),
// new google.maps.LatLng(43.69362,3.99518),
// new google.maps.LatLng(43.69281,4.00319),
// new google.maps.LatLng(43.69158,4.01169),
// new google.maps.LatLng(43.68961,4.02166),
// new google.maps.LatLng(43.68739,4.03024),
// new google.maps.LatLng(43.68503,4.03668),
// new google.maps.LatLng(43.68261,4.04235),
// new google.maps.LatLng(43.67961,4.04711),
// new google.maps.LatLng(43.67611,4.05136),
// new google.maps.LatLng(43.6733,4.0542),
// new google.maps.LatLng(43.6703,4.05661),
// new google.maps.LatLng(43.66621,4.05958),
// new google.maps.LatLng(43.66237,4.06152),
// new google.maps.LatLng(43.6584,4.06294),
// new google.maps.LatLng(43.65403,4.06414),
// new google.maps.LatLng(43.64936,4.06488),
// new google.maps.LatLng(43.64465,4.06539),
// new google.maps.LatLng(43.63955,4.06542),
// new google.maps.LatLng(43.63633,4.06526),
// new google.maps.LatLng(43.63285,4.06492),
// new google.maps.LatLng(43.62971,4.06426),
// new google.maps.LatLng(43.62627,4.06334),
// new google.maps.LatLng(43.62312,4.06214),
// new google.maps.LatLng(43.6197,4.06052),
// new google.maps.LatLng(43.61731,4.05932),
// new google.maps.LatLng(43.6148,4.05786),
// new google.maps.LatLng(43.61192,4.05593),
// new google.maps.LatLng(43.60892,4.05383),
// new google.maps.LatLng(43.60614,4.05161),
// new google.maps.LatLng(43.60334,4.04904),
// new google.maps.LatLng(43.60046,4.04578),
// new google.maps.LatLng(43.59671,4.04046),
// new google.maps.LatLng(43.59256,4.03343),
// new google.maps.LatLng(43.58849,4.0264),
// new google.maps.LatLng(43.58375,4.01731),
// new google.maps.LatLng(43.57663,4.00237),
// new google.maps.LatLng(43.57039,3.98847),
// new google.maps.LatLng(43.56494,3.9749),
// new google.maps.LatLng(43.55963,3.9579),
// new google.maps.LatLng(43.55498,3.93795),
// new google.maps.LatLng(43.55169,3.91851),
// new google.maps.LatLng(43.54941,3.90053),
// new google.maps.LatLng(43.54812,3.88324),
// new google.maps.LatLng(43.54726,3.87041),
// new google.maps.LatLng(43.54678,3.85878),
// new google.maps.LatLng(43.54667,3.84912),
//     ];
//
//     var poly = new google.maps.Polygon({
//         paths:polyCoords,
//         strokeColor: "#FF0000",
//         strokeOpacity: 0.8,
//         strokeWeight: 2,
//         fillColor: "#FF0000",
//         fillOpacity: 0.35
//     });
//     poly.setMap(map);
// }
google.maps.event.addDomListener(window, 'load', initialisation);
