const customName = document.getElementById("customname");
const randomize = document.querySelector(".randomize");
const story = document.querySelector(".story");

// valor do dollar no dia 03/09/2023 em relação ao real
const valueDollar = 4.98;

function randomValueFromArray(array) {
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

let stories = [
    ":jogador foi contratado pelo :time por um valor de 10000, para jogar a :competição. A torcida elogia o diretor do Flamengo, Bob. E grita o nome dele no Maracanã.",
    "Bob faz um pênalti no melhor jogador do mundo, :jogador. Ele acerta e o :time ganha a :competição com um prêmio de 10000"
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
    }

    

    if(document.getElementById("dollar").checked) {
        const dollar = valueDollar * 10000;
    }

    let player = randomValueFromArray(players);
    let team = randomValueFromArray(teams);
    let league = randomValueFromArray(leagues);

    story.textContent = "";
    story.getElementsByClassName.visibility = "visible";
}