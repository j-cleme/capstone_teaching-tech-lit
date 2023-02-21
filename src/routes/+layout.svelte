<script lang="ts">
	import '../app.css';
	import { Menu } from 'lucide-svelte';

	let navVisibleState: Boolean = false;

	function toggleMobileNav(): void {
		navVisibleState = navVisibleState ? false : true;
	}
</script>

<nav
	id="nav"
	class="bg-teal-300 w-full h-18 md:h-12 fixed top-0 text-center text-sm font-semibold justify-around items-center grid grid-cols-12 grid-rows-8 md:grid-rows-1"
>
	<div on:click={toggleMobileNav} on:keypress={toggleMobileNav} class=" md:hidden">
		<Menu
			size={40}
			class="mx-2 my-2 duration-75 text-neutral-600 {navVisibleState ? 'rotate-90' : ''} "
		/>
	</div>
	{#if navVisibleState}
		<a
			on:click={toggleMobileNav}
			on:keypress={toggleMobileNav}
			href="/"
			class="flex flex-row w-full m-0 justify-center items-center col-start-7 col-end-13 md:col-start-1 md:col-end-3"
		>
			<img src="/assets/logo.png" alt="Teaching Tech Lit logo" class="h-6 w-6" />
			<h1 class="mx-1 md:px-2 py-2 text-lg font-semibold text-neutral-900">Teaching Tech Lit</h1>
		</a>
	{/if}
	{#if !navVisibleState}
		<a
			href="/"
			class="flex flex-row w-full m-0 justify-center items-center col-start-7 col-end-13 md:col-start-1 md:col-end-3"
		>
			<img src="/assets/logo.png" alt="Teaching Tech Lit logo" class="h-6 w-6" />
			<h1 class="mx-1 md:px-2 py-2 text-lg font-semibold text-neutral-900">Teaching Tech Lit</h1>
		</a>
	{/if}
	<a
		on:click={toggleMobileNav}
		on:keypress={toggleMobileNav}
		class="px-2 py-4 hover:bg-teal-400 row-start-3 md:row-start-1 col-span-12 md:col-span-1 {navVisibleState
			? ''
			: 'hidden md:inline'} md:row-start-1 md:col-start-8"
		href="/buttons"
		>Buttons
	</a>
	<a
		on:click={toggleMobileNav}
		on:keypress={toggleMobileNav}
		class="px-2 py-4 hover:bg-teal-400 row-start-4 md:row-start-1 col-span-12 md:col-span-1 {navVisibleState
			? ''
			: 'hidden md:inline'} md:row-start-1 md:col-start-9"
		href="/icons"
		>Icons
	</a>
	<a
		on:click={toggleMobileNav}
		on:keypress={toggleMobileNav}
		class="px-2 py-4 hover:bg-teal-400 row-start-5 md:row-start-1 col-span-12 md:col-span-1 {navVisibleState
			? ''
			: 'hidden md:inline'} md:row-start-1 md:col-start-10"
		href="/browsers"
		>Browsers
	</a>
	<a
		on:click={toggleMobileNav}
		on:keypress={toggleMobileNav}
		class="px-2 py-4 hover:bg-teal-400 row-start-6 md:row-start-1 col-span-12 md:col-span-1 {navVisibleState
			? ''
			: 'hidden md:inline'} md:row-start-1 md:col-start-11"
		href="/devices">Devices</a
	>
	<a
		on:click={toggleMobileNav}
		on:keypress={toggleMobileNav}
		class="px-2 py-4 hover:bg-teal-400 row-start-7 md:row-start-1 col-span-12 md:col-span-1 {navVisibleState
			? ''
			: 'hidden md:inline'} md:row-start-1 md:col-start-12"
		href="/safety">Safety</a
	>
</nav>

<slot />
