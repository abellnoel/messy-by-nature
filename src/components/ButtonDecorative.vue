<script setup lang="ts">
defineProps(['label']);
</script>

<template>
	<button type="button">{{ label }}</button>
</template>

<style scoped>
button {
	background-color: transparent;
	border: 1px solid #837e76;
	box-sizing: border-box;
	color: var(--text);
	font-size: 1rem;
	font-weight: bold;
	line-height: 1.5rem;
	padding: 1rem 2rem;
	position: relative;
}

button:before {
	background-color: var(--primary);
	content: '';
	height: calc(100% + 3px);
	position: absolute;
	right: -7px;
	top: -9px;
	transition: background-color 300ms ease-in;
	width: 100%;
	z-index: -1;
}

button:hover:before {
	background-color: #314331;
}
</style>
