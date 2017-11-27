<template>
  <div class="container h-100">
    <div class="row margin-tp-75">
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
      <div class="col-sm-12" v-if="!winner">
          <h1 class="text-center">Current Player: {{playerTurn}}</h1>
      </div>
      <div v-if="winner" class="col-sm-12">
          <h1 class="text-center">The winner is player: {{winner}}</h1>
      </div>
      <div class="col-sm-12 center">
          <button class="btn btn-primary text-center" @click="resetGame()">New Game</button>
      </div>
    </div>
    <div class="row margin-tp-50">
      <div class="col-12 center">
          <h1 class="text-center">Score:</h1>
      </div>
      <div class="col-12 center">
          Player One: {{players["One"].score}}
        </div>
      <div class="col-12 center">
          Player Two: {{players["Two"].score}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      playerTurn: "Two",
      players: {
        One: {
          score: 0,
          squaresClicked: [],
        },
        Two: {
          score: 0,
          squaresClicked: [],
        },
      },
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
      ],
      winner: "",
    }
  },
  methods: {
    squareClicked(number) {
      this.winner = "";
      this.playerTurn = (this.playerTurn === "Two") ? "One" : "Two";
      this.squares[number] = (this.playerTurn === "One") ? "X" : "O";
      this.players[this.playerTurn].squaresClicked.push(number)
      this.checkScore(this.players[this.playerTurn].squaresClicked);
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
          this.players[this.playerTurn].score += +1;
        }
      })
    },
    resetGame() {
      Object.keys(this.squares).forEach(key => {
        this.squares[key] = "";
      })
      this.winner = "";
      this.players["One"].squaresClicked = [];
      this.players["Two"].squaresClicked = [];
    }
  },
};
</script>
