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

teste