let quantasCartas = prompt("Digite o número de cartas (par de 4 a 14)");

while(quantasCartas%2!=0||quantasCartas<4||quantasCartas>14){quantasCartas = prompt("Digite o número de cartas (par de 4 a 14)");}
alert("Agora sim");

function myFlipFunction(classecarta) {
    const elemento = document.querySelector(classecarta);
    elemento.classList.toggle("thecardselecionado")}