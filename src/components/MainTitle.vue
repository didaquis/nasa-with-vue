<template>
	<h1>{{ text }}</h1>
</template>

<script>
export default {
	name: 'MainTitle',
	props: {
		text: String
	}
};
</script>

<style scopped>
h1 {
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}
</style>