<template>
	<section
		class="
			absolute
			bg-white
			z-10
			p-4
			min-w-min
			text-gray-900
			min-h-screen
			top-0
			right-0
		"
	>
		<h2 class="py-2 border-b-2 border-gray-500">Избранное</h2>
		<ul>
			<li v-for="item in favourites" :key="item.id">{{ item }}</li>
		</ul>
	</section>
</template>


<script setup>
import { useFavouritesStore } from "./../pinia/favouritesStore";
const favouritesStore = useFavouritesStore();
const favourites = favouritesStore.favourites;

// const addToFavourites = (item) => {
// 	const fav = {
// 		id: item.id,
// 		title: item.title,
// 		price: item.price,
// 		size: item.size,
// 	};

// 	console.log(fav);
// };
</script>
