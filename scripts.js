// função para embaralhar as cartas
function comparador() { 
	return Math.random() - 0.5; 
}

//certifica que o número de cartas é valido
let numeroDeCartas;
function verificaNumeroDeCartas() {
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
}
    


//cria a array de cartas de acordo com o numero de cartas selecionado
let cartas = [];
function criaCartas() {
    let gifs = ["bobrossparrot.gif", "explodyparrot.gif", "fiestaparrot.gif", "metalparrot.gif", "revertitparrot.gif", "tripletsparrot.gif", "unicornparrot.gif"];
    let n = numeroDeCartas/2;
    let i = 0;
    while (i < n) {
        cartas.push({conteudo: `
                <div class="carta" onclick="viraCarta(this)">
                    <div class="face frente">
                        <img src="images/front.png" />
                    </div>
                    <div class="face verso">
                        <img src="images/${gifs[i]}" />
                    </div>
                </div>`});

        cartas.push({conteudo: `
                <div class="carta" onclick="viraCarta(this)">
                    <div class="face frente">
                        <img src="images/front.png" />
                    </div>
                    <div class="face verso">
                        <img src="images/${gifs[i]}" />
                    </div>
                </div>`});
        i++
    }
}

//embaralha as cartas
cartas.sort(comparador);

//adiciona as cartas viradas
let container;
function adicionaCartas() {
    let j = 0;
    container = document.querySelector(".container-cartas");
    while (j < numeroDeCartas) {
        container.innerHTML += cartas[j].conteudo;
        j++;
    }
}

//estabelece a largura adequada do container de acordo com o numero de cartas
function defineLargura () {
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
}


//vira carta
let cartasSelecionadasNaRodada = [];
function viraCarta(cartaSelecionada) {
    let frente = cartaSelecionada.querySelector(".frente");
    let verso = cartaSelecionada.querySelector(".verso");
    verso.classList.add("vira-frente");
    frente.classList.add("vira-verso");

    cartasSelecionadasNaRodada.push(cartaSelecionada);
    if (cartasSelecionadasNaRodada.length === 2) {
        if (cartasSelecionadasNaRodada[0].innerHTML !== cartasSelecionadasNaRodada[1].innerHTML) {
            setTimeout(desviraCartas, 1000);
        } else {
            cartasSelecionadasNaRodada = [];
        }
    }
}

//desvira cartas se diferentes
function desviraCartas() {
    let frente1 = cartasSelecionadasNaRodada[0].querySelector(".frente");
    let verso1 = cartasSelecionadasNaRodada[0].querySelector(".verso");
    verso1.classList.remove("vira-frente");
    frente1.classList.remove("vira-verso");

    let frente2 = cartasSelecionadasNaRodada[1].querySelector(".frente");
    let verso2 = cartasSelecionadasNaRodada[1].querySelector(".verso");
    verso2.classList.remove("vira-frente");
    frente2.classList.remove("vira-verso");
    cartasSelecionadasNaRodada = [];
}


verificaNumeroDeCartas();
criaCartas();
adicionaCartas();
defineLargura();