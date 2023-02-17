<template>
	<section
		class="
			absolute
			bg-white
			z-10
			p-4
			w-96
			text-gray-900
			min-h-screen
			top-0
			right-0
		"
		:class="{
			block: favouritesStore.favouritesOpen,
			hidden: !favouritesStore.favouritesOpen,
		}"
	>
		<div
			class="
				flex
				justify-between
				pb-2
				items-start
				border-b-2 border-gray-500
				mb-4
			"
		>
			<h2 class="text-xl">Избранное:</h2>
			<button
				@click="favouritesStore.toggleFavourites()"
				aria-label="удалить вещь"
			>
				<svg-icon name="cross" class="w-6 h-6" />
			</button>
		</div>
		<ul class="flex flex-col gap-6" v-if="hasFavs">
			<li
				v-for="item in favourites"
				:key="item.id"
				class="flex gap-5 items-center"
			>
				<img
					class="w-16 h-auto object-cover object-top"
					:src="require(`./../assets/img/${item.img}.png`)"
					:alt="item.title"
				/>
				<div class="flex flex-col flex-1">
					<p class="text-xs">{{ item.price }} ₽</p>
					<h3 class="uppercase font-bold">{{ item.title }}</h3>
					<p class="text-xs">{{ item.size }}</p>
				</div>
				<button class="css-button">В корзину</button>
				<button
					@click="favouritesStore.deleteFromFavs(item.id)"
					class="
						border-gray-500 border-2
						rounded-full
						hover:bg-red-500
						transition
					"
					aria-label="удалить вещь"
				>
					<svg-icon name="cross" class="w-4 h-4" />
				</button>
			</li>
		</ul>
		<h3 v-else>You have no items in favourites</h3>
	</section>
</template>


<script setup>
import { computed } from "vue";
import SvgIcon from "./SvgIcon";
import { useFavouritesStore } from "./../pinia/favouritesStore";
const favouritesStore = useFavouritesStore();

const favourites = computed(function () {
	return favouritesStore.getFavourites;
});
const hasFavs = computed(function () {
	return favouritesStore.hasFavourites;
});
</script>
