<template>
	<footer class="bg-black text-white">
		<div class="container relative p-2 px-4 mx-auto flex justify-between">
			<div class="flex flex-col gap-2 w-1/3">
				<ul class="flex flex-col gap-2">
					<li v-for="(item, index) in legal" :key="index">{{ item }}</li>
				</ul>
				<a href="#" class="text-green-500 text-xs"
					>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
					perferendis nesciunt delectus odit, distinctio aliquam eos eligendi
					velit quae vitae aspernatur repellat ipsam magni quibusdam?</a
				>
				<ul class="flex gap-2">
					<li
						v-for="(item, index) in social"
						:key="index"
						class="p-0 m-0 list-none"
					>
						<a
							:href="item.link"
							class="
								w-10
								h-10
								rounded-full
								bg-gray-700
								flex
								justify-center
								items-center
							"
						>
							<svg-icon
								:name="item.icon"
								class="
									w-10
									h-10
									p-2
									flex
									justify-center
									items-center
									text-gray-300
									hover:text-white
									transition-all
								"
						/></a>
					</li>
				</ul>
			</div>
			<div class="w-1/3 flex flex-col gap-2">
				<p class="text-s text-gray-300">© Все права защищены {{ year }}</p>
				<p class="text-xs text-gray-300">
					Авторские права принадлежат нашей Компании. Все права защищены.
					Тексты, рисунки, фотографии, звуковые и видео файлы, размещенные на
					нашем Сайте, защищены законом № 5846 «Об авторском праве и
					интеллектуальной собственности» и прочими законами о защите
					интеллектуальной собственности. Перепечатка, распечатка, копирование,
					распространение или использование материалов с данного Сайта в
					коммерческих или иных целях допускается только с разрешения Компании.
					Пожалуйста, свяжитесь с нашей Компанией в случае нарушения авторских
					прав в отношении материалов Сайта.
				</p>
			</div>
		</div>
	</footer>
</template>

<script setup>
import { useOwnerStore } from "./../pinia/ownerStore";
import SvgIcon from "./SvgIcon";
const ownerStore = useOwnerStore();
const legal = ownerStore.legal;
const social = ownerStore.social;

const calend = new Date();
const year = calend.getFullYear();
</script>

<style>
</style>