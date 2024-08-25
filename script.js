let showImage = document.getElementById("show-product");
let ClickImage = document.getElementById("click-product");
let continer = document.querySelector(".continer");
let clickimg = document.querySelector(".click-img");
let closeImg = document.getElementById("close-img");
let pre = document.getElementById("pre");
let nex = document.getElementById("nex");
let page = 1;
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let number = document.getElementById("number");
let addCart = document.querySelector(".add-cart");
let num = number.innerHTML ;
let empty = document.getElementById("empty");
let fiha = document.getElementById("fiha");
let info = document.getElementById("info");
let div = document.querySelectorAll(".cart");
let cart = document.querySelectorAll(".cArt");
let del = document.getElementById("delete");
let content = document.querySelector(".content");
let head = document.querySelector(".head");
let headMobile = document.querySelector(".head-mobile");
let nxt = document.getElementById("prv");
let prv = document.getElementById("nxt");
let pagesmobile = 1;
let chifre = 0 ;
let turn = 0;
let gg=false;
let mode;
/*media */

let mediaQuery = window.matchMedia('(max-width: 627px)');
let mediaquery = window.matchMedia('(max-width: 490px)');
let closeMobile = document.getElementById("close-mobile");
let menu = document.getElementById("menu");
let ulMobile = document.querySelector(".ul-mobile");

/*media */
function change(e){
    if(e.matches) {
       headMobile.style.display = "flex" ;
       head.style.display = "none";
       
    }
    else{
        headMobile.style.display = "none" ;
       head.style.display = "flex";
       ulMobile.style.opacity = "0";
  ulMobile.style.visibility = "hidden";
  continer.style.visibility = "hidden";
  

    }
}
change(mediaQuery);
mediaQuery.addListener(change);

function img(s){
    if(s.matches){
        mode ="mobile";
        
    }
    else{
        mode ="pc";
        
    }
}
img(mediaquery);
mediaquery.addEventListener('change', img);


menu.onclick = function() {
    ulMobile.style.opacity = "1";
  ulMobile.style.visibility = "visible";
  continer.style.visibility = "visible";
}
closeMobile.onclick = function(){
    ulMobile.style.opacity = "0";
  ulMobile.style.visibility = "hidden";
  continer.style.visibility = "hidden";
}


/* show image */

function get(id){
    
    showImage.src = `images/image-product-${id}.jpg` ;
    let element = document.getElementById(`${id}`);
    element.classList.add("active");
    for(let i=1 ;i<5; i++ ){
        if(`${i}` !== id){
            let element = document.getElementById(`${i}`);
            element.classList.remove("active");
        }
    }
    page = +id ;
} 
function bet(name){
    ClickImage.src = `images/image-product-${name}.jpg` ;
    let element = document.getElementById(`active${name}`);
    element.classList.add("active");
    for(let i=1 ;i<5; i++ ){
        if(`${i}` !== name){
            let element = document.getElementById(`active${i}`);
            element.classList.remove("active");
        }
    }
    page = +name; 
}

    
showImage.onclick = function() {
    if(mode === "pc"){
    ClickImage.src = showImage.src ;
    for(let i=1 ; i<5 ; i++){
        let element = document.getElementById(`active${i}`);
        if( i !== page){
            element.classList.remove("active");
        } else element.classList.add("active");

    }
    continer.style.visibility = "visible";
    clickimg.style.visibility = "visible";
    clickimg.style.opacity = "1";
} }

closeImg.onclick = function() {
    showImage.src = ClickImage.src ;
    for(let i=1 ; i<5 ; i++){
        let element = document.getElementById(`${i}`);
        if( i !== page){
            element.classList.remove("active");
        } else element.classList.add("active");
    }
    continer.style.visibility = "hidden";
    clickimg.style.visibility = "hidden";
    clickimg.style.opacity = "0";
}

nex.onclick = function() {
    if(page<4){
    page++;
   ClickImage.src = `images/image-product-${page}.jpg`;
   let element = document.getElementById(`active${page}`);
    element.classList.add("active");
    let element2 = document.getElementById(`active${page-1}`)
    element2.classList.remove("active");
        }
    }
pre.onclick = function() {
    if(page>1){
        page-- ;
        ClickImage.src = `images/image-product-${page}.jpg`;
        let element = document.getElementById(`active${page}`);
    element.classList.add("active");
    let element2 = document.getElementById(`active${page+1}`)
    element2.classList.remove("active");
    }
}

/* plus number minus */
minus.onclick = function() {
    if( +num > 0){
        +num--;;
    } 
    number.innerHTML = `${num}`;
    chifre = +num ;
}
plus.onclick = function() {
    +num ++ ;
    number.innerHTML = `${num}`;
    chifre = +num ;
}

/* add cart */
addCart.onclick = function() {
    if(chifre>0){
    info.innerHTML = `Fall Limited Edition Sneakers $125.00 * ${chifre} <span>$${chifre*125}.00</span>`;
    for(let i=0 ; i<2 ; i++){
        div[i].classList.add("cartt");
        div[i].setAttribute('data-count', chifre);
    }
    gg = true ;
    fiha.style.visibility = "visible";
       fiha.style.opacity = "1";
    setTimeout(() => {
        fiha.style.visibility = "hidden";
        fiha.style.opacity = "0";
    }, 1000);
    }
    if(chifre === 0){
        for(let i=0 ; i<2 ; i++){
            div[i].classList.remove("cartt");
        }
        gg = false ;
    }
}

/* cart */
for(let i=0 ; i<2 ; i++){
    cart[i].onclick = function() {
   
        if(!gg && turn === 0 ){
           empty.style.opacity = "1";
           empty.style.visibility = "visible";
           turn = 1;
        }
        else if( gg && turn === 0){
            fiha.style.visibility = "visible";
           fiha.style.opacity = "1";
           turn = 1;
        }
        else if(turn === 1){
            fiha.style.visibility = "hidden";
            fiha.style.opacity = "0";
            empty.style.visibility = "hidden";
            empty.style.opacity = "0";
            turn = 0;
        }
    }
}

del.onclick = function() {
    chifre = 0 ;
    num = chifre ;
    number.innerHTML = `0`;
    for(let i=0 ; i<2 ; i++){
        div[i].classList.remove("cartt");
    }
    
    empty.style.opacity = "1";
       empty.style.visibility = "visible";
       fiha.style.visibility = "hidden";
        fiha.style.opacity = "0";
        gg = false ;
        setTimeout(() => {
            empty.style.visibility = "hidden";
        empty.style.opacity = "0";
        }, 800);
}

nxt.onclick = function() {
    if(pagesmobile < 4){
        pagesmobile++;
        showImage.src = `images/image-product-${pagesmobile}.jpg`
    }
}
prv.onclick = function(){
    if(pagesmobile > 1){
        pagesmobile--;
        showImage.src = `images/image-product-${pagesmobile}.jpg`;
    }
}