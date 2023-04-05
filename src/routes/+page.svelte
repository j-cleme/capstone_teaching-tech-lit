<script>
	import Arrow from '$lib/Arrow.svelte';
	import { base } from '$app/paths';
	import GetStarted from '$lib/GetStarted.svelte';
</script>

<svelte:head>
	<title>Teaching Tech Lit</title>
</svelte:head>
<main class="flex flex-col justify-center m-auto">
	<div
		class="h-[91vh] max-h-screen flex flex-col items-center justify-items-center justify-center w-full border-b"
	>
		<div class="flex flex-col md:flex-row lg:items-center mb-20">
			<div class="mr-16">
				<p class=" tracking-wide text-[#ec598b] text-2xl">Home</p>
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
				</a>
			</div>
			<!-- svelte-ignore a11y-img-redundant-alt -->
			<img
				src="{base}/assets/educator.svg"
				alt="Educators svg"
				class="max-w-[35rem] max-h-[35rem]"
			/>
		</div>
		<GetStarted />
	</div>
	<section class="flex flex-row justify-center items-center my-8">
		<picture>
			<img src="{base}/assets/attention.svg" alt="Attention SVG" />
		</picture>
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
