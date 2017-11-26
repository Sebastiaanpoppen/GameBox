import Vue from 'vue'
import VueRouter from 'vue-router';
import Dashboard from './../components/Dashboard';
import TicTacToe from './../components/TicTacToe';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      path: '/tictactoe',
      name: 'TicTacToe',
      component: TicTacToe,
    },
  ],
});
