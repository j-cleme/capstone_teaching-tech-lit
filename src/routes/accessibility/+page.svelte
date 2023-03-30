<script>
	import { ChevronDown,ZoomIn,Type } from 'lucide-svelte';
	import NextLesson from '$lib/NextLesson.svelte';
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Lesson 3 - Accessibility</title>
</svelte:head>

<main class="flex flex-col justify-center m-auto">
	<div class="h-[91vh] flex flex-col items-center justify-items-center justify-center w-full border-b">
		<div class="flex flex-col lg:flex-row md:items-center">
			<div class="mr-16">
				<p class=" tracking-wide text-[#ec598b] text-2xl">Lesson 3</p>
				<h1 class="text-6xl text-slate-800 font-semibold">
					Accessibility<span class="text-[#3549A6]">.</span>
				</h1>
				<p class="pt-3.5 lg:max-w-[47ch] text-xl text-slate-600 mb-3.5">
					Accessibility, also known as ease of access, refers to the features and settings that can help make technology more accessible for people with disabilities or impairments.
				</p>
			</div>
			<!-- svelte-ignore a11y-img-redundant-alt -->
			<img
				src="{base}/assets/accessibility/accessibility.svg"
				alt="Accessibility Hero Image"
				class="max-w-[35rem] max-h-[35rem]"
			/>
		</div>
		<div class="flex flex-col items-center">
			<p class=" tracking-widest text-2xl text-slate-600 font-light mt-10">GET STARTED</p>
			<ChevronDown size={50} style="color:rgb(71, 85, 105);" />
		</div>
	</div>

	<div class="md:grid md:grid-cols-3 w-full justify-items-center items-center my-6">
		<div>
			<ZoomIn size={50} />
			<h1 class=" text-2xl text-slate-800 font-semibold ">Zoom</h1>
			<p class="text-slate-600 max-w-[45ch]">
				Many web browsers have built in zoom capabilities, these can be found in the settings on the browser, signified by a magnifying glass. This allows you to enlarge any text, images, or icons and make them easier to see. If you are on a laptop with a trackpad you can change the zoom by putting two fingers on the pad, and moving them away from each other to zoom in. To zoom out with this method put two fingers on the trackpad and bring your fingers together.
			</p>
		</div>

		<div>
			<Type size={50} />
			<h1 class=" text-2xl text-slate-800 font-semibold ">Adjustable Text Size</h1>
			<p class="text-slate-600 max-w-[45ch]">
				This feature allows you to adjust the size of the text on the screen to make it bigger or smaller, depending on your preference. It is particularly useful for people with visual impairments or those who prefer larger text. 
			</p>
		</div>

		<div>
			<Type size={50} />
			<h1 class=" text-2xl text-slate-800 font-semibold ">Color Filters</h1>
			<p class="text-slate-600 max-w-[45ch]">
				This feature allows you to adjust the size of the text on the screen to make it bigger or smaller, depending on your preference. It is particularly useful for people with visual impairments or those who prefer larger text. 
			</p>
		</div>
	</div>
	<p>
		Blurb about the options with accessibility and what it is called(ease of access in settings on
		windows)
	</p>
	<p>
		Zoom in - many web browsers have built in zoom capabilities, these can be found in the settings
		on the browser, signified by a magnifying glass. If you are on a laptop with a trackpad you can
		change the zoom by putting two fingers on the pad, and moving them away from each other to zoom
		in. To zoom out with this method put two fingers on the trackpad and bring your fingers
		together.
	</p>
	<p>Adjustable text size</p>
	<p>Color filters</p>
	<p>Cursor size</p>
	<p>Motion</p>
	<p>Narrator</p>
	<p>Sticky keys</p>
</main>
<section class="flex items-center justify-center my-5">
	<NextLesson lessonNumber={'3'} nextPageLink="/browsers" />
</section>
