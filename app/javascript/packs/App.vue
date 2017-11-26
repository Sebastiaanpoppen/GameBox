<style @import "./assets/custom.css"></style>

<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
    <!-- <div>
      <p>{{ message }}</p>
    </div>
    <tictactoe></tictactoe> -->
  </div>
</template>

<script>
import Tictactoe from './components/TicTacToe';
import Navbar from './components/Navbar';

export default {
  components: {
      Tictactoe,
      Navbar,
  },
};
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
