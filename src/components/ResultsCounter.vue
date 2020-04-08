<template>
	<section>
		<p v-if="counter == 0">No items found</p>
		<p v-else>Number of images found: {{counter}}</p>
	</section>
</template>

<script>
export default {
	name: 'ResultsCounter',
	props: {
		counter: {
			type: Number,
			required: true,
			validator: function (value) {
				return value >= 0;
			}
		}
	}
};
</script>