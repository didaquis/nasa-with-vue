<template>
	<section>
		<form v-on:submit.prevent="doRequest(query)">
			<input v-model="query" />
		</form>
		<span>Found Images({{numberOfImages}})</span>
	</section>
</template>

<script>
import axios from "axios";

export default {
	name: 'Search',
	data() {
		return {
			numberOfImages: 0,
			query: '',
		};
	},
	methods: {
		doRequest(query) {
			axios.get("https://images-api.nasa.gov/search?media_type=image&q=" + query)
				.then(response => {
					this.results = response.data.collection.items;
					this.numberOfImages = this.results.length;
				}).catch(error => {
					console.error(error);
				});
		}
	}
};
</script>