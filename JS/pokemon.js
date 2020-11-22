document.addEventListener("DOMContentLoaded", () => {
  getTwoPokes();
  battle();
});

let player1 = null;
let player2 = null;

const getTwoPokes = () => {
  let getPokeButton = document.querySelector("#getPoke");
  getPokeButton.addEventListener("click", () => {
    player1 = null;
    player2 = null;
    getPoke("player1");
    getPoke("player2");
  });
};

const battle = () => {
  let battleBtn = document.querySelector("#battleBtn");
  battleBtn.addEventListener("click", () => {
    getScore();
  });
};

const getPoke = async (player) => {
  let dataDiv = document.querySelector("#data");
  let prevArena = document.querySelector("#arena");
  if (prevArena) {
    dataDiv.removeChild(prevArena);
  }

  let arena = document.createElement("div");
  arena.id = "arena";
  dataDiv.appendChild(arena);
  let id = Math.ceil(Math.random() * 10);
  let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  try {
    let response = await axios.get(url);
    let data = response.data;
    getMoveUrl(data, player);
  } catch (err) {
    console.log(err);
  }
};

const getMoveUrl = async (data, player) => {
  let arr = [];
  for (let i = 0; i <= 4; i++) {
    arr.push(data.moves[i].move.url);
  }
  displayPoke(data, arr, player);
};

const displayPoke = async (data, arr, player) => {
  let arena = document.querySelector("#arena");
  let card = document.createElement("div");
  card.className = "card";
  let playerName = document.createElement("h2");
  let baseHP = document.createElement("h4");
  baseHP.id = "baseHP";
  playerName.innerText = data.name.toUpperCase();
  baseHP.innerText = `Base HP: ${data.base_experience}`;
  let player1Img = document.createElement("img");
  player1Img.src = data.sprites.front_default;
  card.appendChild(playerName);
  card.appendChild(player1Img);
  card.append(baseHP);
  arena.appendChild(card);
  let attSum = 0;
  for (let i = 0; i <= 4; i++) {
    try {
      let response = await axios.get(arr[i]);
      let data = response.data;
      let moveName = document.createElement("p");
      moveName.innerText = `${data.name}: ${data.accuracy || 80}`;
      attSum += data.accuracy || 80;
      card.appendChild(moveName);
    } catch (err) {
      console.log(err);
    }
  }
  if (player === "player2") {
    player2 = attSum;
  } else {
    player1 = attSum;
  }
  console.log("player1", player1);
  console.log("player2", player2);
};

const getScore = () => {
  let resultDiv = document.querySelector("#scoreBoard");
  let player1Title = document.createElement("h3");
  player1Title.className = "player";
  player1Title.innerText = "Player 1";
  resultDiv.appendChild(player1Title);
  let player2Title = document.createElement("h3");
  player2Title.className = "player";
  player2Title.innerText = "Player 2";
  resultDiv.appendChild(player2Title);
  let player1Score = document.createElement("h4");
  player1Score.innerText = player1;
  player1Title.appendChild(player1Score);
  let player2Score = document.createElement("h4");
  player2Score.innerText = player2;
  player2Title.appendChild(player2Score);
};
