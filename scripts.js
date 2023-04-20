let numberOfCards = prompt("Digite o número de cartas (par de 4 a 14)");
while(numberOfCards%2!=0||numberOfCards<4||numberOfCards>14){
    numberOfCards = prompt("Digite o número de cartas (par de 4 a 14)");
}
let myArray=['bobrossparrot','bobrossparrot','explodyparrot','explodyparrot','fiestaparrot','fiestaparrot','metalparrot','metalparrot','revertitparrot','revertitparrot','tripletsparrot','tripletsparrot','unicornparrot','unicornparrot']
let i=0;
while(i<14-numberOfCards){
    myArray.pop();
    i++;
}
myArray.sort(comparador);
function comparador(){
    return Math.random() - 0.5;
}
let cardNumber=1;
while(cardNumber<=numberOfCards){
    let card = document.querySelector(".carta"+cardNumber+" .theback");
    card.innerHTML = `<img src='assets/${myArray[cardNumber-1]}.gif'>`;
    let container = document.querySelector(".container"+cardNumber);
    container.classList.toggle("containerOn");
    cardNumber++;
}
let sourceCheck = '';
let attempts = 0;
let matches = 0;
function myFlipFunction(cardClass) {
    const thisCard = document.querySelector(cardClass);
    const thisCardSource = thisCard.children[1].children[0].src;
    if(sourceCheck===''){
        sourceCheck = thisCardSource;
        thisCard.classList.toggle("selectedCard");
    } else if(sourceCheck===thisCardSource){
        sourceCheck = '';
        thisCard.classList.toggle("selectedCard");
        const selectedCards = document.querySelectorAll(".selectedCard");
        selectedCards[1].classList.toggle("matchedCards");
        selectedCards[0].classList.toggle("matchedCards");
        selectedCards[1].classList.toggle("selectedCard");
        selectedCards[0].classList.toggle("selectedCard");
        attempts++;
        matches++;
    } else{
        sourceCheck = '';
        thisCard.classList.toggle("selectedCard");
        const selectedCards = document.querySelectorAll(".selectedCard");
        setTimeout(() => {
            selectedCards[1].classList.toggle("selectedCard");
            selectedCards[0].classList.toggle("selectedCard");
        }, "1000");
        attempts++;
    };
    if(matches===numberOfCards/2){
        setTimeout(() => {
            alert(`Você ganhou em ${attempts} jogadas!`);
            let restart = confirm("Gostaria de reiniciar a partida?");
            if(restart){
                location.reload();
            }
        }, "1000");
    }
}