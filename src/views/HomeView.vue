<script setup lang="ts">
import { type Ref, ref } from 'vue';
import ButtonDecorative from '@/components/ButtonDecorative.vue';

const gallerySection: Ref<HTMLElement | null> = ref(null);

const scrollToGallery = () => {
	if (gallerySection.value) {
		gallerySection.value.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
			inline: 'nearest',
		});
	}
};
</script>

<template>
	<div class="home-container">
		<div class="hero-banner">
			<div class="hero-content">
				<div class="brand">
					<h1>Messy by Nature</h1>
				</div>
				<div class="info">
					<h2>Welcome!</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Excepteur sint occaecat cupidatat non
						proident, sunt in culpa qui officia deserunt mollit anim
						id est laborum.
					</p>
					<p>
						Ut enim ad minim veniam, quis nostrud exercitation
						ullamco laboris nisi ut aliquip ex ea commodo consequat.
						Duis aute irure dolor in reprehenderit in voluptate
						velit esse cillum dolore eu fugiat nulla pariatur.
					</p>
				</div>
			</div>
			<div class="hero-actions">
				<ButtonDecorative label="Explore!" @click="scrollToGallery" />
			</div>
		</div>
		<div class="gallery" ref="gallerySection">
			<h2>Gallery</h2>
			<div>
				<p>Under construction!</p>
			</div>
		</div>
	</div>
</template>

<style>
.home-container {
	display: flex;
	flex-direction: column;

	.hero-banner {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 4rem 0;

		.hero-content {
			display: flex;
			align-items: center;
			justify-content: center;

			.brand {
				display: flex;
				justify-content: center;
				align-items: center;

				aspect-ratio: 1 / 1;
				border-radius: 100%;
				background-image: url('@/assets/banner-background.jpg');
				background-repeat: no-repeat;
				background-size: 100%;

				color: var(--text-off);
				text-align: center;
				font-size: 2rem;

				h1 {
					display: flex;
					justify-content: center;
					align-items: center;

					background-color: var(--secondary);
					border-radius: 25%;
					height: 4rem;
					width: 20rem;
				}
			}

			.info {
				max-width: 20rem;
				margin-left: 4rem;
			}
		}

		@media screen and (max-width: 768px) {
			.hero-content {
				flex-direction: column;

				.info {
					margin: 2rem 2rem 0 2rem;
					max-width: 25rem;
				}
			}
		}

		.hero-actions {
			display: flex;
			justify-content: center;
			align-items: center;
			margin-top: 2rem;
		}
	}

	.gallery {
		padding: 4rem;
		background-color: var(--background-light);
		height: 80rem;
	}
}
</style>
