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

    criaCartas();
}
    


//cria a array de cartas de acordo com o numero de cartas selecionado
let cartas = [];
function criaCartas() {
    let gifs = ["bobrossparrot.gif", "explodyparrot.gif", "fiestaparrot.gif", "metalparrot.gif", "revertitparrot.gif", "tripletsparrot.gif", "unicornparrot.gif"];
    let n = numeroDeCartas/2;
    let i = 0;
    while (i < n) {
        cartas.push({conteudo: `
                <div class="carta nao-encontrada" onclick="viraCarta(this)">
                    <div class="face frente">
                        <img src="images/front.png" />
                    </div>
                    <div class="face verso">
                        <img src="images/${gifs[i]}" />
                    </div>
                </div>`});

        cartas.push({conteudo: `
                <div class="carta nao-encontrada" onclick="viraCarta(this)">
                    <div class="face frente">
                        <img src="images/front.png" />
                    </div>
                    <div class="face verso">
                        <img src="images/${gifs[i]}" />
                    </div>
                </div>`});
        i++
    }

    adicionaCartas();
}

//embaralha e adiciona as cartas viradas
let container;
function adicionaCartas() {
    cartas.sort(comparador);
    let j = 0;
    container = document.querySelector(".container-cartas");
    while (j < numeroDeCartas) {
        container.innerHTML += cartas[j].conteudo;
        j++;
    }

    defineLargura();
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
let contagemJogadas = 0;
function viraCarta(cartaSelecionada) {
    if (cartaSelecionada.classList.contains("nao-encontrada")) {
        if(cartasSelecionadasNaRodada.length < 2) {
            let frente = cartaSelecionada.querySelector(".frente");
            let verso = cartaSelecionada.querySelector(".verso");
            verso.classList.add("vira-frente");
            frente.classList.add("vira-verso");

            cartasSelecionadasNaRodada.push(cartaSelecionada);
            if (cartasSelecionadasNaRodada.length === 2) {
                if (cartasSelecionadasNaRodada[0].innerHTML !== cartasSelecionadasNaRodada[1].innerHTML) {
                    setTimeout(desviraCartas, 1000);
                } else {
                    cartasSelecionadasNaRodada[0].classList.remove("nao-encontrada");
                    cartasSelecionadasNaRodada[1].classList.remove("nao-encontrada");
                    cartasSelecionadasNaRodada = [];
                }
            }

            contagemJogadas++;
            setTimeout(fimDeJogo, 200);
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

function fimDeJogo() {
    let cartasNaoEncontradas = document.querySelectorAll(".nao-encontrada");
    if (cartasNaoEncontradas.length === 0) {
        alert(`Você ganhou em ${contagemJogadas} jogadas!`)
        let reiniciar = prompt("Você gostaria de jogar novamente?");
        if (reiniciar === "sim") {
            reiniciarJogo();
        }
    }
}

function reiniciarJogo() {
    cartas = [];
    contagemJogadas = 0;
    container.innerHTML = "";

    if (numeroDeCartas === 4) {
        container.classList.remove("largura1");
    } else if (numeroDeCartas === 6) {
        container.classList.remove("largura2");
    } else if (numeroDeCartas === 8) {
        container.classList.remove("largura3");
    } else if (numeroDeCartas === 10) {
        container.classList.remove("largura4");
    } else if (numeroDeCartas === 12) {
        container.classList.remove("largura5");
    } else if (numeroDeCartas === 14) {
        container.classList.remove("largura6");
    }

    verificaNumeroDeCartas();
}


verificaNumeroDeCartas();
