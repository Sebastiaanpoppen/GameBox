<template>
<div class="container-fluid">
  <div class="row margin-tp-100">
    <div class="col-sm-12">
      <div v-for="i in Math.ceil(Object.keys(squares).length / 3)" class="row justify-content-center">
        <div v-for="square in Object.keys(squares).slice((i-1) * 3, i * 3)" v-bind:class="{active: isActive}" @click="squareClicked(square)" class="col-sm-4 squared">
          <div class="clicked-square">
            <div class="square-letter">
              {{squares[square]}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row margin-tp-50">
    <div class="col-sm-12">
      <div v-if="!winner" class="row justify-content-center">
        <h1>Current Player: {{playerTurn}}</h1>
      </div>
    </div>
  </div>
  <div class="row">
    <div v-if="winner" class="col-sm-12">
      <div class="row justify-content-center">
        <h1>The winner is player: {{winner}}</h1>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-12">
      <div class="row justify-content-center">
        <button class="btn btn-primary" @click="resetGame()">New Game</button>
      </div>
    </div>
  </div>
  <div class="row margin-tp-50 justify-content-center">
    <div class="col-sm-12">
      <div class="row justify-content-center">
        <h1>Score</h1>
      </div>
    </div>
    <div class="col-sm-12">
      <div class="row justify-content-center">
        Player One: {{playerScore["One"]}}
      </div>
    </div>
    <div class="col-sm-12">
      <div class="row justify-content-center">
        Player Two: {{playerScore["Two"]}}
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      playerTurn: "Two",
      SquaresClickedPlayer: {
        One: [],
        Two: [],
      },
      SquaresClickedPlayerOne: [],
      SquaresClickedPlayerTwo: [],
      playerScore: {
        One: 0,
        Two: 0,
      },

      winner: "",
      isActive: false,
      squares: {
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
        6: "",
        7: "",
        8: "",
        9: "",
      },
      winningArrays: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7],
      ]
    }
  },
  methods: {
    squareClicked(number) {
      this.winner = "";
      this.playerTurn = (this.playerTurn === "Two") ? "One" : "Two";
      this.squares[number] = (this.playerTurn === "One") ? "X" : "O";
      this.SquaresClickedPlayer[this.playerTurn].push(number);
      this.checkScore(this.SquaresClickedPlayer[this.playerTurn]);
    },
    checkScore(playerSquaresClicked) {
      const playerSquaresClickedNumbers = playerSquaresClicked.map(Number);
      const playerSquaresClickedString = JSON.stringify(playerSquaresClickedNumbers)
      const playerwins = this.winningArrays.some((winningArray) => {
        const scoreArray = []
        winningArray.forEach((element) => {
          const squareClicked = playerSquaresClickedString.includes(element)
          scoreArray.push(squareClicked)
        })
        if (!scoreArray.includes(false)) {
          this.winner = this.playerTurn;
          this.playerScore[this.playerTurn] += +1;
        }
      })
    },
    resetGame() {
      Object.keys(this.squares).forEach(key => {
        this.squares[key] = "";
      })
      this.winner = "";
      this.SquaresClickedPlayer["One"] = [];
      this.SquaresClickedPlayer["Two"] = [];
    }
  },
};
</script>
