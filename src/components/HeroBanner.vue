<script setup lang="ts">
import ButtonDecorative from '@/components/ButtonDecorative.vue';
</script>

<template>
	<div class="hero-banner">
		<div class="hero-content flex-centered">
			<div class="brand flex-centered">
				<h1 class="flex-centered">Messy by Nature</h1>
			</div>
			<div class="info">
				<h2>Welcome!</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Excepteur sint occaecat cupidatat non proident, sunt
					in culpa qui officia deserunt mollit anim id est laborum.
				</p>
				<p>
					Ut enim ad minim veniam, quis nostrud exercitation ullamco
					laboris nisi ut aliquip ex ea commodo consequat. Duis aute
					irure dolor in reprehenderit in voluptate velit esse cillum
					dolore eu fugiat nulla pariatur.
				</p>
			</div>
		</div>
		<div class="hero-actions flex-centered">
			<ButtonDecorative
				label="Explore!"
				@click="$emit('heroButtonClicked')"
			/>
		</div>
	</div>
</template>

<style scoped>
.hero-banner {
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 4rem 0;
}

.brand {
	aspect-ratio: 1 / 1;
	border-radius: 100%;
	background-image: url('@/assets/banner-background.jpg');
	background-repeat: no-repeat;
	background-size: 100%;

	color: var(--text-off);
	text-align: center;

	h1 {
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

.hero-actions {
	margin-top: 2rem;
}

@media screen and (max-width: 768px) {
	.hero-content {
		flex-direction: column;
	}

	.info {
		margin: 2rem 2rem 0 2rem;
		max-width: 25rem;
	}
}
</style>
