<script lang="ts">
	import '../app.css';
	import { CheckCircle2, Menu, XCircle } from 'lucide-svelte';

	const indicatorIconSize = 20;

	let navVisibleState: Boolean = false;

	function toggleMobileNav(): void {
		navVisibleState = navVisibleState ? false : true;
		// console.log(navVisibleState);
	}
</script>

<nav
	class="w-11/12 m-auto mb-0 flex justify-between items-center py-8 h-18 md:h-12 text-sm font-semibold border-b"
>
	<div on:click={toggleMobileNav} on:keypress={toggleMobileNav} class="md:hidden">
		<Menu
			size={40}
			class="mx-2 my-2 duration-75 text-neutral-600 {navVisibleState ? 'rotate-90' : ''} "
		/>
	</div>
	<a href="/" class="flex flex-row w-full m-0 md:justify-start items-center">
		<img src="/assets/logo.png" alt="Teaching Tech Lit logo" class="group h-6 w-6" />
		<h1 class="group mx-1 md:px-2 py-2 text-lg font-semibold text-neutral-900">
			Teaching Tech Lit<span
				class="block bg-[#3549A6] max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5"
			/>
		</h1>
	</a>
	<a class="group px-2 py-2 min-w-max {navVisibleState ? '' : 'hidden md:inline'}" href="/"
		>Home
		<span
			class="block bg-[#3549A6] max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5"
		/>
	</a>
	<a class="group px-2 py-2 min-w-max {navVisibleState ? '' : 'hidden md:inline'}" href="/devices"
		>Lesson 1 <span class="inline-block stroke-red-600"
			><XCircle size={indicatorIconSize} color="stroke-red-600" />
			<!-- <CheckCircle2 size={14} color="stroke-emerald-800"  /> -->
		</span>
		<span
			class="block bg-[#3549A6] max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5"
		/>
	</a>
	<a class="group px-2 py-2 min-w-max {navVisibleState ? '' : 'hidden md:inline'}" href="/icons"
		>Lesson 2<span class="inline-block stroke-emerald-500">
			<!-- <XCircle size={14} color="stroke-red-600" /> -->
			<CheckCircle2 size={indicatorIconSize} color="stroke-emerald-500" />
		</span>
		<span
			class="block bg-[#3549A6] max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5"
		/>
	</a>
	<a
		class="group px-2 py-2 min-w-max {navVisibleState ? '' : 'hidden md:inline'}"
		href="/accessibility"
		>Lesson 3
		<span
			class="block bg-[#3549A6] max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5"
		/>
	</a>
	<a class="group px-2 py-2 min-w-max {navVisibleState ? '' : 'hidden md:inline'}" href="/browsers"
		>Lesson 4
		<span
			class="block bg-[#3549A6] max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5"
		/>
	</a>
	<a class="group px-2 py-2 min-w-max {navVisibleState ? '' : 'hidden md:inline'}" href="/safety"
		>Lesson 5
		<span
			class="block bg-[#3549A6] max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5"
		/>
	</a>
</nav>
<slot />
