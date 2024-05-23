<script>
	import Arrow from '$lib/Arrow.svelte';
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Teaching Tech Lit</title>
</svelte:head>
<main class="flex flex-col justify-center m-auto">
	<div
		class="min-h-[80vh] md:mt-0 mt-14 md:max-h-[90vh] flex flex-col items-center justify-items-center justify-center w-full"
	>
		<div class="flex flex-col md:flex-row md:items-center">
			<div class="md:mr-16">
				<p class=" tracking-wide text-[#ec598b] text-2xl">Home</p>
				<h1 class="text-6xl text-slate-800 font-semibold">Teaching Tech Lit</h1>
				<p class="pt-3.5 lg:max-w-[47ch] text-xl text-slate-600 mb-3">
					A guided introduction to the internet for adults looking to learn tech intuition and
					literacy.
				</p>
				<a
					href="{base}/devices"
					class="group inline-flex whitespace-nowrap rounded-md bg-[#ec598a] text-xl font-semibold text-white py-2 px-3 -translate-x-1 -translate-y-1 hover:translate-x-0 hover:translate-y-0 items-center justify-center transition duration-100"
				>
					Get Started <span class="px-2"><Arrow /></span>
				</a>
			</div>
			<img
				src="{base}/assets/teaching.svg"
				alt="Man pointing at a presentation"
				class="md:max-w-[35rem] md:max-h-[35rem] md:my-0 my-4 w-5/6 h-auto"
			/>
		</div>
	</div>
</main>
