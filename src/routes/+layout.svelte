<script lang="ts">
	import '../app.css';
	import { Menu } from 'lucide-svelte';
	import { page } from '$app/stores';
	import NavItem from './NavItem.svelte';
	import { browser } from '$app/environment';
	import { lessonTracking } from '$lib/lessonTracking';

	const indicatorIconSize: number = 20;

	let navVisibleState: Boolean = false;

	function toggleMobileNav(): void {
		navVisibleState = navVisibleState ? false : true;
	}

	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	/** @type {import('./$types').LayoutData} */ export let data;
	// Create a store and update it when necessary...  const user = writable();
	$: lessonTracking.set(data.user);
	// ...and add it to the context for child components to access  setContext('user', user);

	let completeLessons: string = '';
	if (browser) {
		if (localStorage.getItem('completeLessons') !== null) {
			completeLessons = localStorage.getItem('completeLessons');
		}
	}

	export const lessonComplete = (lessonNumber: string): void => {
		console.log('called lessonComplete');
		if (browser) {
			if (localStorage.getItem('completeLessons') === null) {
				completeLessons = '';
				localStorage.setItem('completeLessons', completeLessons);
			} else {
				completeLessons = localStorage.getItem('completeLessons');
				return;
			}
			if (completeLessons.includes(lessonNumber)) {
				return;
			}
			completeLessons = completeLessons.concat(this, lessonNumber);
			localStorage.setItem('completeLessons', completeLessons);
		}
	};

	const checkLessonCompletion = (lessonNumber: string): boolean => {
		if (browser) {
			if (localStorage.getItem('completeLessons') === null) {
				completeLessons = '';
				localStorage.setItem('completeLessons', completeLessons);
			} else {
				completeLessons = localStorage.getItem('completeLessons');
				return;
			}
		}
		if (completeLessons.includes(lessonNumber)) {
			return true;
		}
		return false;
	};
</script>

<nav
	class="w-11/12 m-auto mb-0 flex justify-between items-center py-8 h-18 md:h-12 text-sm
	font-semibold border-b"
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
			class="block bg-[#3549A6] max-w-0 group-hover:max-w-full {$page.route.id == '/'
				? 'max-w-full bg-[#ec598a]'
				: ''} transition-all duration-300 h-0.5"
		/>
	</a>
	<a class="group px-2 py-2 min-w-max {navVisibleState ? '' : 'hidden md:inline'}" href="/devices"
		>Lesson 1
		<span
			class="block bg-[#3549A6] max-w-0 group-hover:max-w-full {$page.route.id == '/devices'
				? 'max-w-full bg-[#ec598a]'
				: ''} transition-all duration-300 h-0.5"
		/>
	</a>
	<a class="group px-2 py-2 min-w-max {navVisibleState ? '' : 'hidden md:inline'}" href="/icons"
		>Lesson 2
		<span
			class="block bg-[#3549A6] max-w-0 group-hover:max-w-full {$page.route.id == '/icons'
				? 'max-w-full bg-[#ec598a]'
				: ''} transition-all duration-300 h-0.5"
		/>
	</a>
	<a
		class="group px-2 py-2 min-w-max {navVisibleState ? '' : 'hidden md:inline'}"
		href="/accessibility"
		>Lesson 3
		<span
			class="block bg-[#3549A6] max-w-0 group-hover:max-w-full {$page.route.id == '/accessibility'
				? 'max-w-full bg-[#ec598a]'
				: ''} transition-all duration-300 h-0.5"
		/>
	</a>
	<a class="group px-2 py-2 min-w-max {navVisibleState ? '' : 'hidden md:inline'}" href="/browsers"
		>Lesson 4
		<span
			class="block bg-[#3549A6] max-w-0 group-hover:max-w-full {$page.route.id == '/browsers'
				? 'max-w-full bg-[#ec598a]'
				: ''} transition-all duration-300 h-0.5"
		/>
	</a>
	<a class="group px-2 py-2 min-w-max {navVisibleState ? '' : 'hidden md:inline'}" href="/safety"
		>Lesson 5
		<span
			class="block bg-[#3549A6] max-w-0 group-hover:max-w-full {$page.route.id == '/safety'
				? 'max-w-full bg-[#ec598a]'
				: ''} transition-all duration-300 h-0.5"
		/>
	</a>
</nav>
<slot />

<footer class="w-full mt-10 bg-[#3549A6] text-white p-8 flex flex-col">
	<p>this is a beautiful, well crafted footer.</p>

	<a href="/" class="underline max-w-fit">back to home <span>&#10148;</span></a>
</footer>
