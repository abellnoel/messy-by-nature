<script setup lang="ts">
import { type Ref, ref } from 'vue';
import HeroBanner from '@/components/HeroBanner.vue';

const gallerySection: Ref<HTMLElement | null> = ref(null);

function scrollToGallery() {
	if (gallerySection.value) {
		gallerySection.value.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
			inline: 'nearest',
		});
	}
}
</script>

<template>
	<div class="home-container">
		<HeroBanner @hero-button-clicked="scrollToGallery" />
		<div class="gallery" ref="gallerySection">
			<h2>Gallery</h2>
			<div>
				<p>Under construction!</p>
			</div>
		</div>
	</div>
</template>

<style scoped>
.home-container {
	display: flex;
	flex-direction: column;
}

.gallery {
	padding: 4rem;
	background-color: var(--background-light);
	height: 80rem;
}
</style>
