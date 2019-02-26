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
