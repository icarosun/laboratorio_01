"use-strict";

const customName = document.getElementById("customname");
const randomize = document.querySelector(".randomize");
const story = document.querySelector(".story");

// valor do dollar no dia 04/09/2023 em relação ao real
//real / dollar
const dollar = 4.92;

function randomValueFromArray(array) {
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

let stories = [
    "Na final :league, Bob comete um pênalti contra o melhor jogador do mundo, :player, que se prepara para cobrar. Bob se redime ao fazer uma defesa incrível, inspirando o :team a marcar o gol da vitória e conquistar o título, além de um prêmio de R$ 10000 mil reais! Bob se torna o herói do dia.",
    "O jogador estrela, :player, foi contratado pelo :team por um contrato impressionante de R$ 10000 mil reais, tornando-se o herói dos torcedores. A jogada audaciosa do diretor Bob, que investiu na promessa de sucesso, provou-se acertada. No Maracanã, os torcedores, gratos pelo êxito da contratação, entoavam o nome de Bob, demonstrando sua devoção tanto ao diretor quanto ao talentoso jogador."
];

let players = ["Messi", "CR7", "Ronaldinho"];

let teams = ["Flamengo", "Manaus FC", "Pysandu"];

let leagues = ["Mundial", "Libertadores", "Copa do Brasil"];

randomize.addEventListener("click", result);

function result() {
    let newStory = stories;
    newStory = randomValueFromArray(newStory);

    if(customName.value !== "") {
        const name = customName.value;
        newStory = newStory.replaceAll("Bob", name);
    }

    if(document.getElementById("dollar").checked) {
        const price = 10000 / dollar; 

        newStory = newStory.replace("R$ 10000 mil reais", "US$ " + price.toFixed(2) + " mil dólares");
    }

    let player = randomValueFromArray(players);
    newStory = newStory.replace(":player", player)

    let team = randomValueFromArray(teams);
    newStory = newStory.replace(":team", team);

    let league = randomValueFromArray(leagues);
    newStory = newStory.replace(":league", league);

    story.textContent = newStory;
    story.style.visibility = "visible";
}