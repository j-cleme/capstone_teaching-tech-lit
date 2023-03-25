<script>
	import Arrow from './Arrow.svelte';
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Teaching Tech Lit</title>
</svelte:head>

<main class="flex flex-col">
	<section
		class="flex flex-wrap justify-center items-center gap-x-10 m-auto p-8 min-h-[50vh] max-h-screen border-2 rounded-lg
	my-8 shadow"
	>
		<section class="rounded-lg p-8">
			<h1 class="text-6xl text-slate-800 font-semibold">
				Teaching Tech Lit<span class="text-[#3549A6]">.</span>
			</h1>
			<p class="pt-3.5 lg:max-w-[47ch] text-xl text-slate-600 mb-3.5">
				A guided introduction to the internet for adults looking to learn tech intuition and
				literacy.
			</p>
			<a
				href="{base}/devices"
				class="group inline-flex whitespace-nowrap rounded-md bg-[#ec598a] text-xl font-semibold text-white py-2 px-3 -translate-x-1 -translate-y-1 hover:translate-x-0 hover:translate-y-0 items-center justify-center transition duration-100"
			>
				Get Started <span class="px-2"><Arrow /></span>
				<!-- <span class="absolute -z-10 w-full h-full bg-black" /> -->
			</a>
		</section>
		<aside>
			<img src="{base}/assets/educator.svg" alt="Educators svg" />
		</aside>
	</section>
	<section
		class="flex flex-wrap justify-center items-center m-auto p-6 gap-x-2 rounded-lg border-2 mb-8"
	>
		<aside>
			<img src="{base}/assets/attention.svg" alt="Attention SVG" />
		</aside>
		<section class="p-8">
			<h3 class="text-3xl text-slate-800 font-semibold">
				What Is Teaching Tech Lit<span class="text-[#3549A6]">?</span>
			</h3>
			<p class="text-base lg:max-w-[70ch] text-slate-600 pt-1.5 ">
				Current technological literacy programs are for young children (6-12) or if it is for adults
				it is only job skills training. We are instead looking to teach adults tech intuition and
				literacy, rather than focusing on programs like Office or Adobe. Older people who did not
				grow up with computers and tech face the biggest gap in technological literacy.
			</p>
		</section>
	</section>
</main>
