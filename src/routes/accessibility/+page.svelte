<script>
	import { ChevronDown } from 'lucide-svelte';
	import NextLesson from '../NextLesson.svelte';
</script>

<svelte:head>
	<title>Lesson 3 - Accessibility</title>
</svelte:head>

<main class="flex flex-col justify-center m-auto">
	<div class="h-[91vh] flex flex-col items-center justify-items-center justify-center w-full">
		<div class="flex flex-col lg:flex-row md:items-center">
			<div class="mr-16">
				<p class=" tracking-wide text-[#ec598b] text-2xl">Lesson 3</p>
				<h1 class="text-6xl text-slate-800 font-semibold">
					Accessibility<span class="text-[#3549A6]">.</span>
				</h1>
				<p class="pt-3.5 lg:max-w-[47ch] text-xl text-slate-600 mb-3.5">
					Blurb about Accessibility
				</p>
			</div>
			<!-- svelte-ignore a11y-img-redundant-alt -->
			<img
				src="assets/accessibility/accessibility.svg"
				alt="Accessibility Hero Image"
				class="max-w-[35rem] max-h-[35rem]"
			/>
		</div>
		<div class="flex flex-col items-center">
			<p class=" tracking-widest text-2xl text-slate-600 font-light mt-10">GET STARTED</p>
			<ChevronDown size={50} style="color:rgb(71, 85, 105);" />
		</div>
	</div>

	<div class="md:grid md:grid-cols-3">
		<div>Arrows</div>

		<div>Refresh</div>

		<div>Bookmarks</div>
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
