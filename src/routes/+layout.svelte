<script>
	import '../app.css';
	import { Menu } from 'lucide-svelte';
</script>

<header class="bg-neutral-300 sticky w-full h-12 m-0 flex flex-row justify-start items-center">
	<!-- <Menu size="50" class="mx-2 my-2 md:hover:rotate-90 duration-75 text-neutral-600 " /> -->
</header>
<nav
	class="bg-neutral-300 w-full h-12 fixed top-0 text-center text-sm font-semibold justify-around items-center grid grid-cols-12 grid-rows-1"
>
	<a href="/" class="flex flex-row w-full m-0 justify-center items-center col-start-1 col-end-3">
		<img src="/assets/logo.png" alt="Teaching Tech Lit logo" class="h-6 w-6" />
		<h1 class="mx-1 md:px-2 py-2 text-lg font-semibold text-neutral-900">Teaching Tech Lit</h1>
	</a>
	<!-- <a class="px-2 py-4 hover:bg-neutral-100 col-start-6" href="/">Home </a> -->
	<a class="px-2 py-4 hover:bg-neutral-100 col-start-8" href="/buttons">Buttons </a>
	<a class="px-2 py-4 hover:bg-neutral-100" href="/icons">Icons </a>
	<a class="px-2 py-4 hover:bg-neutral-100" href="/browsers">Browsers </a>
	<a class="px-2 py-4 hover:bg-neutral-100" href="/devices">Devices</a>
	<a class="px-2 py-4 hover:bg-neutral-100" href="/safety">Safety</a>
</nav>

<slot />
