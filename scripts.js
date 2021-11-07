let quantasCartas = prompt("Digite o número de cartas (par de 4 a 14)");

while(quantasCartas%2!=0||quantasCartas<4||quantasCartas>14){quantasCartas = prompt("Digite o número de cartas (par de 4 a 14)");}
//alert("Agora sim");//

let minhaArray=['bobrossparrot','bobrossparrot','explodyparrot','explodyparrot','fiestaparrot','fiestaparrot','metalparrot','metalparrot','revertitparrot','revertitparrot','tripletsparrot','tripletsparrot','unicornparrot','unicornparrot']
let contador1=0;
while (contador1<14-quantasCartas){minhaArray.pop();contador1++;}
minhaArray.sort(comparador);
function comparador() {return Math.random() - 0.5;}

let contador2=1;
let contador3=0
while(contador2<=quantasCartas){
    let elemento1 = document.querySelector(".carta"+contador2+" .theback");
    elemento1.innerHTML = `<img src='assets/${minhaArray[contador3]}.gif'>`;
    let elemento2 = document.querySelector(".container"+contador2);
    elemento2.classList.toggle("containerOn");
    contador2++;
    contador3++;
}


function myFlipFunction(classecarta) {
    const elemento = document.querySelector(classecarta);
    elemento.classList.toggle("thecardselecionado");}