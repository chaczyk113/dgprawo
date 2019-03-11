window.onload = ()=>{
    const cardsList = document.querySelectorAll('.card');
    const cards = Array.from(cardsList)

    const desList = document.querySelectorAll('.des');
    const descriptions = Array.from(desList)


    document.querySelector(".team-cards").addEventListener('click', (e)=> {
        cardClicekd = e.target.closest('.card');
         if (cardClicekd){
            for (card of cards) {
                card.classList.remove("opened-card");
            }
            cardClicekd.classList.add("opened-card")
            for (des of descriptions) {
                des.classList.remove("display");
                if (des.id.includes(cardClicekd.id)) {
                    des.classList.add("display");
                }
            }


         }
    })
};

function showMenu() {
    var menuList = document.querySelector(".top-menu-links");
    var menuButton = document.getElementById("menu-button");
    var menuBar = document.querySelector("nav");
    var menuLogo = document.querySelector(".logo img");

    // console.log(menuList.style.display);
    if (menuList.style.display == "flex") {
        menuList.style.display = "none";
    }
    else {
        menuList.style.display = "flex";
    }
}

window.addEventListener('resize', function () {
    resize_product_img();
    resize_description_img();
    move_dropdown();
    restoreMenu();

});


function restoreMenu() {
    var menuList = document.querySelector(".top-menu-links");
    var menuButton = document.getElementById("menu-button");
    var menuBar = document.querySelector("nav");
    var menuLogo = document.querySelector(".logo img");

    var w = window.innerWidth;
    if (w > 1260) {
        menuList.style.display = "";
        menuButton.innerHTML = "MENU";
        menuButton.classList.remove("button-black");
        menuBar.classList.remove("bg-drop-menu");
        menuLogo.src = "../images/logo-white.png"
    }
}