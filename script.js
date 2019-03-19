window.onload = () => {
    const cardsList = document.querySelectorAll('.card');
    const cards = Array.from(cardsList)

    const desList = document.querySelectorAll('.des');
    const descriptions = Array.from(desList)

    // Funckja usuwająca wiszące spójniki
    var unbrakeConjuctions = (function() {
        var elements = document.querySelectorAll('p');
        Array.prototype.forEach.call(elements, function (el, i) {
            var textReplace = el.innerHTML;
            var lettersToReplace = ["a","i","o","u","w","z","A","I","O","U","W","Z"];
            var arrayLength = lettersToReplace.length;
            for (var i = 0; i < arrayLength; i++) {
              var textSplit = textReplace.split(' ' + lettersToReplace[i] + ' ');
              var textReplace = textSplit.join(' ' + lettersToReplace[i] + '&nbsp;');
            }
            el.innerHTML = '';
            el.innerHTML = textReplace;
        });
    })();

    var cookieHandler = (function(){
        // var galTable= new Array(); var galx = 0;</script><script type="text/javascript">function simplecookienotification_v01_create_cookie(name,value,days) { if (days) { var date = new Date(); date.setTime(date.getTime()+(days*24*60*60*1000)); var expires = "; expires="+date.toGMTString(); } else var expires = ""; document.cookie = name+"="+value+expires+"; path=/"; document.getElementById("simplecookienotification_v01").style.display = "none"; } function simplecookienotification_v01_read_cookie(name) { var nameEQ = name + "="; var ca = document.cookie.split(";"); for(var i=0;i < ca.length;i++) { var c = ca[i]; while (c.charAt(0)==" ") c = c.substring(1,c.length); if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length); }return null;}var simplecookienotification_v01_jest = simplecookienotification_v01_read_cookie("simplecookienotification_v01");if(simplecookienotification_v01_jest==1){ document.getElementById("simplecookienotification_v01").style.display = "none"; }
    })();

    document.querySelector(".team-cards").addEventListener('click', (e) => {
        var w = window.innerWidth;
        var cardClicekd = e.target.closest('.card');
        if (cardClicekd) {
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