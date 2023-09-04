"use-strict";

const customName = document.getElementById("customname");
const randomize = document.querySelector(".randomize");
const story = document.querySelector(".story");

// valor do dollar no dia 03/09/2023 em relação ao real
//real / dollar
const dollar = 1 / 4.98;

function randomValueFromArray(array) {
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

let stories = [
    ":jogador foi contratado pelo :time por um valor de R$ 10000 mil reais, para jogar a :competição. A torcida elogia o diretor do Flamengo, Bob. E grita o nome dele no Maracanã.",
    "Bob faz um pênalti no melhor jogador do mundo, :jogador. Ele acerta e o :time ganha a :competição com um prêmio de R$ 10000 mil reais"
]

let players = [ "Messi", "CR7", "Ronaldinho"]

let teams = ["Flamengo", "Manaus FC", "Pysandu"]

let leagues = ["Mundial", "Libertadores", "Copa do Brasil"]

randomize.addEventListener('click', result);

function result() {
    let newStory = stories;
    newStory = randomValueFromArray(newStory);

    if(customName.value !== "") {
        const name = customName.value;
        newStory = newStory.replace("Bob", name);
    }

    if(document.getElementById("dollar").checked) {
        const price = dollar * 10000;
        console.log(price);
        newStory = newStory.replace("R$ 10000 mil reais", "US$ " + price + " mil dólares");
    }

    // let player = randomValueFromArray(players);
    // let team = randomValueFromArray(teams);
    // let league = randomValueFromArray(leagues);

    story.textContent = newStory;
    story.getElementsByClassName.visibility = "visible";
}