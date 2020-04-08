<template>
	<section>
		<div v-if="results.length == 0">No items found</div>
		<div>

		</div>
	</section>
</template>

<script>
export default {
	name: 'Gallery',
	props: {
		results: Array
	}
};
</script>