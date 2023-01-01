<script>
	export let title;
	export let icon;
	export let textContent;

	function clickHandler(title) {
		// happens when you click on the icon(?) and the relevant element needs to appear elsewhere
		// alert(title);
	}
</script>

<article
	class="border border-neutral-600 p-4 m-4 grid grid-cols-2 grid-rows-2 items-center justify-center gap-2"
	on:click={clickHandler(title)}
	on:keypress={clickHandler(title)}
>
	<h1>
		{title}
	</h1>
	<p class="row-span-2">
		{textContent}
	</p>
	<svelte:component this={icon} />
</article>
