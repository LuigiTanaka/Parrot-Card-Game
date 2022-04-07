// função para embaralhar as cartas
function comparador() { 
	return Math.random() - 0.5; 
}

//certifica que o número de cartas é valido
let numeroDeCartas;
let começar = false;
numeroDeCartas = Number(prompt("Com quantas cartas você deseja jogar?"));
while (começar !== true) {
    if (numeroDeCartas > 14 || numeroDeCartas < 4) {
        alert("Por favor, escolha um número entre 4 e 14");
        numeroDeCartas = Number(prompt("Com quantas cartas você deseja jogar?"));
    } else if (numeroDeCartas % 2 !== 0) {
        alert("O número de cartas deve ser par!");
        numeroDeCartas = Number(prompt("Com quantas cartas você deseja jogar?"));
    } else {
        começar = true;
    }
}

//cria a array de cartas de acordo com o numero de cartas selecionado
let gifs = ["bobrossparrot.gif", "explodyparrot.gif", "fiestaparrot.gif", "metalparrot.gif", "revertitparrot.gif", "tripletsparrot.gif", "unicornparrot.gif"];
let n = numeroDeCartas/2;
let i = 0;
let cartas = [];
while (i < n) {
    cartas.push(gifs[i]);
    cartas.push(gifs[i]);
    i++
}

//embaralha as cartas
cartas.sort(comparador);

//adiciona as cartas viradas
let j = 0;
let container = document.querySelector(".container-cartas");
while (j < numeroDeCartas) {
    container.innerHTML += `
        <div class="carta">
            <div class="frente face">
                <img src="images/front.png" />
            </div>
            <div class="verso face">
                <img src="images/${cartas[j]}" />
            </div>
        </div>`
    j++;
}

//estabelece a largura adequada do container de acordo com o numero de cartas
if (numeroDeCartas === 4) {
    container.classList.add("largura1");
} else if (numeroDeCartas === 6) {
    container.classList.add("largura2");
} else if (numeroDeCartas === 8) {
    container.classList.add("largura3");
} else if (numeroDeCartas === 10) {
    container.classList.add("largura4");
} else if (numeroDeCartas === 12) {
    container.classList.add("largura5");
} else if (numeroDeCartas === 14) {
    container.classList.add("largura6");
}
