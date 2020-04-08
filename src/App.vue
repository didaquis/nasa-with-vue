<template>
	<div id="app">
		<Logo />
		<MainTitle text="Search images from NASA" />
		<Search />
	</div>
</template>

<script>
import Logo from './components/Logo.vue';
import MainTitle from './components/MainTitle.vue';
import Search from './components/Search.vue';

export default {
	name: 'App',
	components: {
		Logo,
		MainTitle,
		Search,
	}
};
</script>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	background: #e5e5e5;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}
</style>
