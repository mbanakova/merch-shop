<template>
	<nav
		class="hidden md:flex justify-between items-center gap-5"
		aria-label="main"
		:class="{ open: store.menuOpen }"
	>
		<div class="flex justify-between items-center gap-2" id="nav">
			<router-link class="nav__link" to="/delivery">Доставка</router-link>
			<router-link class="nav__link" to="/return">Обмен</router-link>
			<router-link class="nav__link" to="/contacts">Контакты</router-link>
		</div>
		<div class="flex justify-between items-center">
			<router-link to="/cart"
				><svg-icon
					name="cart"
					class="w-10 h-10 p-2 text-gray-300 hover:text-white transition-all"
				/>
			</router-link>
			<button
				class="relative"
				:class="{ 'text-red-600': hasFavs }"
				@click="favouritesStore.toggleFavourites()"
			>
				<svg-icon
					name="favourites"
					class="w-10 h-10 p-2 hover:text-white transition-all"
				/>
				<span
					v-if="hasFavs"
					class="
						bg-gray-600
						rounded-full
						text-white
						w-4
						h-4
						absolute
						text-center
						top-0
						right-0
						text-xs
						transition-all
					"
					>{{ favouritesQuantity }}</span
				>
			</button>
		</div>
	</nav>
</template>

<script setup>
import { computed } from "vue";
import SvgIcon from "./SvgIcon";
import { useMenuStore } from "./../pinia/menuStore";
import { useFavouritesStore } from "./../pinia/favouritesStore";
const store = useMenuStore();
const favouritesStore = useFavouritesStore();

const hasFavs = computed(function () {
	return favouritesStore.hasFavourites;
});

const favouritesQuantity = computed(function () {
	return favouritesStore.getFavouritesQuantiity;
});
</script>
