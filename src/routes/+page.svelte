<script>
	import TeachingContainer from './TeachingContainer.svelte';
	import { Menu, Search, BeanOff } from 'lucide-svelte';

	let sections = [
		{
			title: 'Menu Icon',
			icon: Menu,
			textContent:
				'This is a menu icon, sometimes called a "Hamburger Menu" due to its horizontal layers.'
		},
		{
			title: 'Search Icon',
			icon: Search,
			textContent: 'This is a search icon, indicating a searchable field.'
		},
		{
			title: 'Bean Icon',
			icon: BeanOff,
			textContent: 'This indicates that your bean has been disabled.'
		}
	];
</script>

<main class="flex flex-col justify-center m-5 mx-auto justify-self-center md:w-1/2 border p-4">
	{#each sections as item}
		<TeachingContainer {...item} />
	{/each}
</main>
