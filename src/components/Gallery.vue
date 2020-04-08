<template>
	<section v-if="images.length" class="gallery">
		<div v-for="(img, key) in images" :key="key">
			<img :src="img.links[0].href" :alt="img.data[0].title" />
		</div>
	</section>
</template>

<script>
export default {
	name: 'Gallery',
	props: {
		images: Array
	}
};
</script>

<style scoped>
.gallery {
	width: 940px;
	margin: 0 auto;
}
.gallery > div {
	position: relative;
	float: left;
	padding: 5px;
	min-height: 220px;
}
.gallery > div > img {
	width: 300px;
	vertical-align: middle;
	transition: 0.1s transform;
	transform: translateZ(0); /* hack */
}
.gallery > div:hover {
	z-index: 1;
}
.gallery > div:hover > img {
	transform: scale(1.8, 1.8);
	transition: 0.3s transform;
}
.cf:before,
.cf:after {
	display: table;
	content: "";
	line-height: 0;
}
.cf:after {
	clear: both;
}
</style>