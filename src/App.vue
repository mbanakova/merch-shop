<template>
	<Sprite />
	<TheHeader />
	<main class="container p-4 px-5 mx-auto flex-grow">
		<router-view />
	</main>
	<Favourites />
	<TheFooter />
</template>
<script setup>
import TheHeader from "./components/TheHeader";
import TheFooter from "./components/TheFooter";
import Favourites from "./components/Favourites";
import Sprite from "./components/Sprite";
import { useMenuStore } from "./pinia/menuStore";

const store = useMenuStore();
store.checkScreenWidth(); // контролирует бургер-меню и body-scroll-lock при открытом меню
window.addEventListener("resize", store.checkScreenWidth);
</script>

<style src="./assets/tailwind.css" />
<style  >
#app {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	position: relative;
}
</style>
