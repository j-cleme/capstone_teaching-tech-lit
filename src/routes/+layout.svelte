<script>
	import '../app.css';
	import { Menu } from 'lucide-svelte';

	let navOpen = false;
	let navBaseStyles =
		'bg-neutral-200 grid grid-cols-1 grid-flow-row auto-rows-max justify-around h-screen duration-100 absolute z-10 ';
	let navStyleOpen = 'w-3/4';
	let navStyleClosed = 'w-0';
	let navStyles;

	let navLinkBaseStyle = 'px-4 py-2 text-lg font-semibold text-neutral-900 duration-100 ';
	let hiddenStyle = 'hidden';
	let navLinkStyle = navLinkBaseStyle + hiddenStyle;
	if (navOpen) {
	} else {
	}

	function toggleNav() {
		// let sidenav = document.getElementById('sidenav');
		console.log('toggleNav got called');
		switch (navOpen) {
			case true:
				navOpen = false;
				navStyles = navBaseStyles + navStyleClosed;
				navLinkStyle = navLinkBaseStyle + hiddenStyle;
				console.log('set navOpen to false');
				break;

			case false:
				navOpen = true;
				navStyles = navBaseStyles + navStyleOpen;
				navLinkStyle = navLinkBaseStyle;
				console.log('set navOpen to true');
				break;
		}
	}
</script>

<header class="bg-neutral-300 sticky w-full h-16 m-0 flex flex-row justify-start items-center">
	<div on:click={toggleNav} on:keypress={toggleNav}>
		<Menu size="50" class="mx-2 my-2 md:hover:rotate-90 duration-75 text-neutral-600 " />
	</div>
	<h1 class="mx-1 md:px-2 py-2 text-lg font-semibold text-neutral-900">Teaching Tech Lit</h1>
</header>
<nav class={navStyles} id="sidenav">
	<a on:click={toggleNav} on:keypress={toggleNav} href="/" class={navLinkStyle}>Home </a>
	<a on:click={toggleNav} on:keypress={toggleNav} href="/quiztest" class={navLinkStyle}
		>quiztest
	</a>
	<a on:click={toggleNav} on:keypress={toggleNav} href="/" class={navLinkStyle}>Home2 </a>
	<a on:click={toggleNav} on:keypress={toggleNav} href="/" class={navLinkStyle}>Lorem Ipsone </a>
	<a on:click={toggleNav} on:keypress={toggleNav} href="/" class={navLinkStyle}>Lorem Ipstwo </a>
	<a on:click={toggleNav} on:keypress={toggleNav} href="/" class={navLinkStyle}>Lorem Ipsthree </a>
	<a on:click={toggleNav} on:keypress={toggleNav} href="/" class={navLinkStyle}>Lorem Ipsfour </a>
</nav>

<slot />
