<template>
	<picture>
		<source
			v-if="isMobile"
			type="image/webp"
			media="(max-width: 767px)"
			:srcset="require(`./../assets/img/webp/${name}-mob.webp`)"
		/>
		<source
			v-if="isMobile"
			media="(max-width: 767px)"
			:srcset="require(`./../assets/img/${name}-mob.${type}`)"
		/>
		<source
			type="image/webp"
			media="(min-width: 1px)"
			:srcset="require(`./../assets/img/webp/${name}.webp`)"
		/>
		<source
			media="(min-width: 768px)"
			:srcset="require(`./../assets/img/${name}.${type}`)"
		/>
		<img
			width="400"
			:src="require(`./../assets/img/${name}.${type}`)"
			:alt="imgAlt"
		/>
	</picture>
</template>

<script setup>
import { computed } from "vue";

const props = {
	name: {
		required: true,
	},
	alt: {
		type: String,
		required: true,
	},
	isMobile: {
		type: Boolean,
		required: false,
	},
};
const name = computed(() => {
	return `${props.name}`;
});

const imgAlt = computed(() => {
	return `${props.alt}`;
});
</script>