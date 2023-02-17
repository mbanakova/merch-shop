<template>
	<header class="bg-black text-white sticky top-0 z-10">
		<div class="container relative p-2 px-4 mx-auto flex justify-between">
			<router-link class="nav__link" to="/">Главная</router-link>
			<TheNav />
			<button
				v-if="store.isMobile"
				class="hamburger"
				@click="store.toggleMenu()"
				:class="{ 'is-active': store.menuOpen }"
			>
				<div class="bar"></div>
			</button>
		</div>
		<section
			id="mobile-menu"
			class="
				absolute
				top-68
				bg-gray-900
				w-full
				text-5xl
				flex-col
				justify-content-center
				origin-top
				animate-open-menu
			"
			:class="{ flex: store.menuOpen, hidden: !store.menuOpen }"
		>
			<nav
				class="flex flex-col min-h-screen items-center py-8"
				aria-label="mobile"
			>
				<router-link
					@click="store.toggleMenu()"
					class="nav__link text-center text-xl w-full"
					to="/delivery"
					>Доставка</router-link
				>
				<router-link
					@click="store.toggleMenu()"
					class="nav__link text-center text-xl w-full"
					to="/return"
					>Обмен</router-link
				>
				<router-link
					@click="store.toggleMenu()"
					class="nav__link text-center text-xl w-full"
					to="/contacts"
					>Контакты</router-link
				>
				<div class="flex justify-between items-center mt-8">
					<router-link to="/cart" @click="store.toggleMenu()"
						><svg-icon
							name="cart"
							class="
								w-20
								h-20
								p-2
								text-gray-300
								hover:text-white
								transition-all
							"
						/>
					</router-link>
					<button @click="store.toggleMenu()">
						<svg-icon
							name="favourites"
							class="
								w-20
								h-20
								p-2
								text-gray-300
								hover:text-white
								transition-all
							"
						/>
					</button>
				</div>
			</nav>
		</section>
	</header>
</template>

 <script setup>
import TheNav from "./TheNav";
import SvgIcon from "./SvgIcon";
import { useMenuStore } from "./../pinia/menuStore";

const store = useMenuStore();
</script>
