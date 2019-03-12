window.onload = ()=>{
    const cardsList = document.querySelectorAll('.card');
    const cards = Array.from(cardsList)

    const desList = document.querySelectorAll('.des');
    const descriptions = Array.from(desList)


    document.querySelector(".team-cards").addEventListener('click', (e)=> {
        var w = window.innerWidth;
        var cardClicekd = e.target.closest('.card');
         if (cardClicekd){
            var cardOppened = cardClicekd.classList.contains("opened-card");
            for (card of cards) {
                card.classList.remove("opened-card");
            }
            for (des of descriptions) {
                des.classList.remove("display");
            }
            if (w > 960) {
                console.log("big")
                cardClicekd.classList.add("opened-card")
                for (des of descriptions) {
                    if (des.id.includes(cardClicekd.id)) {
                        des.classList.add("display");
                    }
                }
            }
            else if (!cardOppened) {
                cardClicekd.classList.add("opened-card")
                console.log("oppened");
                for (des of descriptions) {
                    if (des.id.includes(cardClicekd.id)) {
                        des.classList.add("display");
                    }
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
        menuButton.classList.remove("button-pressed");
    }
    else {
        menuList.style.display = "flex";
        menuButton.classList.add("button-pressed");
    }
}

window.addEventListener('resize', function () {
    restoreMenu();

});


function restoreMenu() {
    var menuList = document.querySelector(".top-menu-links");
    var menuButton = document.getElementById("menu-button");

    var w = window.innerWidth;
    if (w > 960) {
        menuList.style.display = "";
        menuButton.classList.remove("button-pressed");
    }
}