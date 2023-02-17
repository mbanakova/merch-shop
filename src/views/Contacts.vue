<template>
	<section class="flex flex-col pt-6 self-center justify-center">
		<h1 class="mb-6 text-xl">This is contacts page</h1>
		<p>
			Email:
			<a class="text-green-500" :href="`mailto: ${contacts.email}`">{{
				contacts.email
			}}</a>
		</p>
		<p>
			Phone:
			<a class="text-green-500" :href="`tel: ${contacts.phone}`">{{
				contacts.phone
			}}</a>
		</p>
	</section>
</template>

<script setup>
import { useOwnerStore } from "./../pinia/ownerStore";
const ownerStore = useOwnerStore();
const contacts = ownerStore.contacts;
</script>
