<template>
  <nav class="navbar navbar-expand-md navbar-light bg-primary">
  	<ul class="navbar-nav mr-auto">
  		<li class="nav-item">
        <router-link :to="{name: 'Dashboard'}" class="nav-link">Dashboard</router-link>
  		</li>
  		<li class="nav-item">
        <router-link :to="{name: 'TicTacToe'}" class="nav-link">TicTacToe</router-link>
  		</li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'navbar',
  };
</script>
