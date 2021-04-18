const getDomNodes = () =>{
    return document.getElementsByClassName("card-container")[0];
};

const shuffleCards = () =>{
    let cardList = getDomNodes();
    let i=0;
    for (i = cardList.children.length; i >= 0; i--) {
        cardList.appendChild(cardList.children[Math.random() * i | 0]);
    }
    return cardList;
}

const sortCards = () =>{
    let cardList = getDomNodes();
    return [...cardList.children]
            .sort((initialItem,nextItem) =>
                    initialItem.innerText > nextItem.innerText ? 1: -1)
            .forEach(item=>cardList.appendChild(item));
}