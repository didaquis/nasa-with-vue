<template>
	<img :alt="alt" :src="src" >
</template>

<script>
export default {
	name: 'Logo',
	data: () => {
		return { 
			alt: 'Nasa logo',
			src: require('../assets/logo_nasa.png'),
		};
	}
};
</script>

<style scopped>
img {
  width:100%;
  max-width:360px;
}
</style>