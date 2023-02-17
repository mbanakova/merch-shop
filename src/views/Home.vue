<template>
	<div class="container p-4 px-5 mx-auto">
		<ul class="flex gap-4">
			<li
				v-for="product in products"
				:key="product.id"
				class="relative flex flex-col gap-2 w-96"
			>
				<img
					class="w-full h-96 object-cover object-top"
					:src="require(`./../assets/img/${product.img}.png`)"
					:alt="product.title"
				/>
				<h3 class="text-l text-white">{{ product.title }}</h3>
				<p class="text-l text-white">{{ product.description }}</p>
				<p class="price">{{ product.price }} ₽</p>
				<h4 class="text-m text-white">Size</h4>
				<select v-model="product.size">
					<option v-for="size in product.size" :key="size" :value="size">
						{{ size }}
					</option>
				</select>
				<div>
					<a
						href="#"
						class="block bg-gray-200 text-gray-900 p-2 px-4 mb-2 text-center"
						>More info</a
					>
					<div class="flex justify-between gap-2">
						<div
							class="
								flex
								items-center
								flex-grow
								w-2/4
								bg-gray-200
								text-gray-900
							"
						>
							<button class="p-2 text-xl">-</button>
							<div class="p-2 text-xl text-center flex-grow">1</div>
							<button class="p-2 text-xl">+</button>
						</div>
						<button
							class="block bg-gray-200 w-2/4 text-gray-900 p-2 px-4 text-center"
						>
							To Cart
						</button>
					</div>
				</div>
				<div
					class="
						rounded-full
						bg-red-500
						text-white text-xs text-center text-capitalize
						w-12
						h-12
						absolute
						top-2
						left-2
						flex
						items-center
						justify-center
						p-2
						cursor-pointer
					"
				>
					<span>NEW</span>
				</div>
				<button
					@click="favouritesStore.addToFavs(product)"
					class="
						rounded-full
						text-white text-xs text-center text-capitalize
						w-12
						h-12
						flex
						items-center
						justify-center
						absolute
						top-2
						right-2
						cursor-pointer
					"
				>
					<svg-icon
						name="favourites"
						class="
							w-16
							h-16
							p-2
							text-gray-300
							hover:text-red-500
							transition-all
						"
					/>
				</button>
			</li>
		</ul>
	</div>
</template>

<script setup>
import SvgIcon from "./../components/SvgIcon";
import { useProductsStore } from "./../pinia/productsStore";
import { useFavouritesStore } from "./../pinia/favouritesStore";
const productsStore = useProductsStore();
const favouritesStore = useFavouritesStore();
const products = productsStore.products;
// const favourites = favouritesStore.favourites;

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
