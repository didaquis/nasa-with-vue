<template>
	<section>
		<form v-on:submit.prevent="doRequest(query)">
			<input v-model="query" autofocus required />
		</form>
		<ResultsCounter :counter="numberOfImages" />
		<Gallery :results="results" />
	</section>
</template>

<script>
import axios from 'axios';

import ResultsCounter from './ResultsCounter';
import Gallery from './Gallery';

export default {
	name: 'Search',
	components: {
		ResultsCounter,
		Gallery,
	},
	data() {
		return {
			numberOfImages: 0,
			query: '',
			results: [],
		};
	},
	methods: {
		doRequest(query) {
			axios.get('https://images-api.nasa.gov/search?media_type=image&q=' + query)
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

<style scopped>
input {
	padding: 6px;
	margin-bottom: 12px;
	font-size: 18px;
}
</style>