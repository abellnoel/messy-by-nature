<script setup lang="ts">
import { type Ref, ref } from 'vue';
import HeroBanner from '@/components/HeroBanner.vue';
import GalleryCard from '@/components/GalleryCard.vue';

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
			<div class="gallery-grid">
				<template v-for="card in 12">
					<GalleryCard />
				</template>
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
	padding: 2rem 0;
	background-color: var(--background-light);

	h2 {
		text-align: center;
		margin-bottom: 4rem;
	}
}

.gallery-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
	justify-items: center;
	align-items: center;
	column-gap: 5rem;
	row-gap: 5rem;
}

@media screen and (min-width: 600px) {
	.gallery {
		padding: 2rem 4rem;
	}

	.gallery-grid {
		grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
	}
}
</style>
