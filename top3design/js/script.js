var home = document.getElementsByClassName('elt-menu')[0];
var akaruLink = document.getElementsByClassName('elt-menu')[1];
var jam3Link = document.getElementsByClassName('elt-menu')[2];
var diadoraLink = document.getElementsByClassName('elt-menu')[3];
var header = document.getElementsByTagName('header')[0];
var body = document.getElementsByTagName('body')[0];
var eltsMenu = document.getElementsByClassName('elt-menu');
var eltsImg = document.getElementsByClassName('apercu');
var eltsComment = document.getElementsByClassName('comment');
var main = document.getElementsByTagName('main')[0];

home.onclick =function() {
    header.style.backgroundColor = '#b7b7b7'
    body.style.backgroundColor = '#cdcdcd'
    for (var i = 0; i < eltsMenu.length; i++){
        eltsMenu[i].style.borderBottom = ''
        eltsMenu[i].style.color = '#FFF'
    }
    for (var j = 0; j < eltsImg.length; j++){
        eltsImg[j].classList.add('is-visible')
        eltsImg[j].classList.remove('is-hidden')
    }
    for (var k = 0; k < eltsComment.length; k++){
        eltsComment[k].classList.remove('is-visible')
    }
    main.classList.remove('focus')
    eltsImg[0].classList.remove('apercu-akaru--clicked')
    eltsImg[0].classList.remove('apercu-akaru--clicked2')
    eltsImg[1].classList.remove('apercu-jam--clicked')
    eltsImg[1].classList.remove('apercu-jam--clicked2')
    eltsImg[2].classList.remove('apercu-diadora--clicked')
    eltsImg[2].classList.remove('apercu-diadora--clicked2')
}

akaruLink.onclick = function() {
    header.style.backgroundColor = '#bdb8b1'
    header.style.boxShadow = '0 0 10px #807a73'
    body.style.backgroundColor = '#e3e1dd'
    for (var i = 0; i < eltsMenu.length; i++){
        eltsMenu[i].style.borderBottom = '0px'
        eltsMenu[i].style.color = '#e3e1dd'
    }
    for (var k = 0; k < eltsComment.length; k++){
        eltsComment[k].classList.remove('is-visible')
    }
    this.style.color = '#f91d66'
    this.style.borderBottom = '1px solid #f91d66'
    setTimeout(function(){
        for (var j = 0; j < eltsImg.length; j++){
            eltsImg[0].classList.add('apercu-akaru--clicked')
            eltsImg[j].classList.remove('is-visible')
            eltsImg[j].classList.add('is-hidden')
            eltsImg[j].classList.remove('apercu-jam--clicked')
            eltsImg[j].classList.remove('apercu-jam--clicked2')
            eltsImg[j].classList.remove('apercu-diadora--clicked')
            eltsImg[j].classList.remove('apercu-diadora--clicked2')
        }
    }, 1200)
    main.classList.remove('focus')
    setTimeout(function(){
        eltsImg[0].classList.add('apercu-akaru--clicked2')
    }, 1800)
    setTimeout(function(){
        main.classList.add('focus')
    }, 2300)
    setTimeout(function(){
        eltsComment[0].classList.add('is-visible')
    }, 3500)
}
eltsImg[0].onclick = function() {
    header.style.backgroundColor = '#bdb8b1'
    header.style.boxShadow = '0 0 10px #807a73'
    body.style.backgroundColor = '#e3e1dd'
    for (var i = 0; i < eltsMenu.length; i++){
        eltsMenu[i].style.borderBottom = '0px'
        eltsMenu[i].style.color = '#e3e1dd'
    }
    for (var k = 0; k < eltsComment.length; k++){
        eltsComment[k].classList.remove('is-visible')
    }
    eltsMenu[1].style.color = '#f91d66'
    eltsMenu[1].style.borderBottom = '1px solid #f91d66'
    setTimeout(function(){
        for (var j = 0; j < eltsImg.length; j++){
            eltsImg[0].classList.add('apercu-akaru--clicked')
            eltsImg[j].classList.remove('is-visible')
            eltsImg[j].classList.add('is-hidden')
            eltsImg[j].classList.remove('apercu-jam--clicked')
            eltsImg[j].classList.remove('apercu-jam--clicked2')
            eltsImg[j].classList.remove('apercu-diadora--clicked')
            eltsImg[j].classList.remove('apercu-diadora--clicked2')
        }
    }, 1200)
    main.classList.remove('focus')
    setTimeout(function(){
        eltsImg[0].classList.add('apercu-akaru--clicked2')
    }, 1800)
    setTimeout(function(){
        main.classList.add('focus')
    }, 2300)
    setTimeout(function(){
        eltsComment[0].classList.add('is-visible')
    }, 3500)
}

jam3Link.onclick = function() {
    header.style.backgroundColor = '#E3E3E3'
    header.style.boxShadow = '0 0 6px #B7B7B7'
    body.style.backgroundColor = '#F3F3F3'
    for (var i = 0; i < eltsMenu.length; i++){
        eltsMenu[i].style.borderBottom = '0px'
        eltsMenu[i].style.color = '#B7B7B7'
    }
    for (var k = 0; k < eltsComment.length; k++){
        eltsComment[k].classList.remove('is-visible')
    }
    this.style.color = 'black'
    this.style.borderBottom = '1px solid black'
    setTimeout(function(){
        for (var j = 0; j < eltsImg.length; j++){
            eltsImg[1].classList.add('apercu-jam--clicked')
            eltsImg[j].classList.remove('is-visible')
            eltsImg[j].classList.add('is-hidden')
            eltsImg[j].classList.remove('apercu-akaru--clicked')
            eltsImg[j].classList.remove('apercu-diadora--clicked')
            eltsImg[j].classList.remove('apercu-diadora--clicked2')
        }
    }, 1200)
    main.classList.remove('focus')
    setTimeout(function(){
        eltsImg[1].classList.add('apercu-jam--clicked2')
    }, 1800)
    setTimeout(function(){
        main.classList.add('focus')
    }, 2300)
    setTimeout(function(){
        eltsComment[1].classList.add('is-visible')
    }, 3500)

}
eltsImg[1].onclick = function() {
    header.style.backgroundColor = '#E3E3E3'
    header.style.boxShadow = '0 0 6px #B7B7B7'
    body.style.backgroundColor = '#F3F3F3'
    for (var i = 0; i < eltsMenu.length; i++){
        eltsMenu[i].style.borderBottom = '0px'
        eltsMenu[i].style.color = '#B7B7B7'
    }
    for (var k = 0; k < eltsComment.length; k++){
        eltsComment[k].classList.remove('is-visible')
    }
    eltsMenu[2].style.color = 'black'
    eltsMenu[2].style.borderBottom = '1px solid black'
    setTimeout(function(){
        for (var j = 0; j < eltsImg.length; j++){
            eltsImg[1].classList.add('apercu-jam--clicked')
            eltsImg[j].classList.remove('is-visible')
            eltsImg[j].classList.add('is-hidden')
            eltsImg[j].classList.remove('apercu-akaru--clicked')
            eltsImg[j].classList.remove('apercu-diadora--clicked')
            eltsImg[j].classList.remove('apercu-diadora--clicked2')
        }
    }, 1200)
    main.classList.remove('focus')
    setTimeout(function(){
        eltsImg[1].classList.add('apercu-jam--clicked2')
    }, 1800)
    setTimeout(function(){
        main.classList.add('focus')
    }, 2300)
    setTimeout(function(){
        eltsComment[1].classList.add('is-visible')
    }, 3500)
}

diadoraLink.onclick = function() {
    header.style.backgroundColor = '#393144'
    header.style.boxShadow = '0 0 6px #393144'
    body.style.backgroundColor = '#8D7D87'
    for (var i = 0; i < eltsMenu.length; i++){
        eltsMenu[i].style.borderBottom = '0px'
        eltsMenu[i].style.color = '#8D7D87'
    }
    for (var k = 0; k < eltsComment.length; k++){
        eltsComment[k].classList.remove('is-visible')
    }
    this.style.color = '#F9ED35'
    this.style.borderBottom = '1px solid #F9ED35'
    setTimeout(function(){
        for (var j = 0; j < eltsImg.length; j++){
            eltsImg[2].classList.add('apercu-diadora--clicked')
            eltsImg[j].classList.remove('is-visible')
            eltsImg[j].classList.add('is-hidden')
            eltsImg[j].classList.remove('apercu-jam--clicked')
            eltsImg[j].classList.remove('apercu-jam--clicked2')
            eltsImg[j].classList.remove('apercu-akaru--clicked')
        }
    }, 1200)
    main.classList.remove('focus')
    setTimeout(function(){
        eltsImg[2].classList.add('apercu-diadora--clicked2')
    }, 1800)
    setTimeout(function(){
        main.classList.add('focus')
    }, 2300)
    setTimeout(function(){
        eltsComment[2].classList.add('is-visible')
    }, 3500)
}
eltsImg[2].onclick = function() {
    header.style.backgroundColor = '#393144'
    header.style.boxShadow = '0 0 6px #393144'
    body.style.backgroundColor = '#8D7D87'
    for (var i = 0; i < eltsMenu.length; i++){
        eltsMenu[i].style.borderBottom = '0px'
        eltsMenu[i].style.color = '#8D7D87'
    }
    for (var k = 0; k < eltsComment.length; k++){
        eltsComment[k].classList.remove('is-visible')
    }
    eltsMenu[3].style.color = '#F9ED35'
    eltsMenu[3].style.borderBottom = '1px solid #F9ED35'
    setTimeout(function(){
        for (var j = 0; j < eltsImg.length; j++){
            eltsImg[2].classList.add('apercu-diadora--clicked')
            eltsImg[j].classList.remove('is-visible')
            eltsImg[j].classList.add('is-hidden')
            eltsImg[j].classList.remove('apercu-jam--clicked')
            eltsImg[j].classList.remove('apercu-jam--clicked2')
            eltsImg[j].classList.remove('apercu-akaru--clicked')
        }
    }, 1200)
    main.classList.remove('focus')
    setTimeout(function(){
        eltsImg[2].classList.add('apercu-diadora--clicked2')
    }, 1800)
    setTimeout(function(){
        main.classList.add('focus')
    }, 2300)
    setTimeout(function(){
        eltsComment[2].classList.add('is-visible')
    }, 3500)
}
