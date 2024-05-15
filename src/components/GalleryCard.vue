<script setup lang="ts">
defineProps(['image']);
</script>

<template>
	<div class="gallery-card">
		<img
			class="image"
			src="https://picsum.photos/1000/2000"
			alt="TODO:ADD ALT TEXT"
		/>
		<h3>Temp Title</h3>
	</div>
</template>

<style scoped>
.gallery-card {
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 20rem;
	height: 30rem;
	background-color: var(--text);
	box-shadow: 10px 5px 20px black;
}

.image {
	margin: 1.5rem 1.5rem 0 1.5rem;
	height: 80%;
}

h3 {
	text-align: center;
}
</style>
