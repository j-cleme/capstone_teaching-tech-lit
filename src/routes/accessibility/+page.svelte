<script>
	import { ChevronDown,ZoomIn,Type,Palette,Ear,MousePointer2,Keyboard } from 'lucide-svelte';
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
	<h2 class="text-slate-800 text-4xl font-semibold mt-8">
		Accessibility Options<span class="text-[#3549A6]">.</span>
	</h2>
	<p class="text-slate-600 my-4 text-lg">
		Many devices and applications offer a range of options that can help users customize their experience and make it easier to use.

	</p>
	<div class="md:grid md:grid-cols-2 w-full justify-items-center items-center my-2">
		<div class="my-4">
			<ZoomIn size={50} />
			<h1 class=" text-2xl text-slate-800 font-semibold ">Zoom</h1>
			<p class="text-slate-600 max-w-[45ch]">
				Many web browsers have built in zoom capabilities, these can be found in the settings on the browser, signified by a magnifying glass. This allows you to enlarge any text, images, or icons and make them easier to see. If you are on a laptop with a trackpad you can change the zoom by putting two fingers on the pad, and moving them away from each other to zoom in. To zoom out with this method put two fingers on the trackpad and bring your fingers together.
			</p>
		</div>

		<div class="my-4">
			<Ear size={50} />
			<h1 class=" text-2xl text-slate-800 font-semibold ">Narrator</h1>
			<p class="text-slate-600 max-w-[45ch]">
				The narrator feature gives you an audio description of what is currently happening on the screen. It is used for things such as reading out text or describing actions. This can be useful for people with visual impairments or those who prefer to listen rather than read.
			</p>
		</div>

		<div class="my-4">
			<Type size={50} />
			<h1 class=" text-2xl text-slate-800 font-semibold ">Adjustable Text Size</h1>
			<p class="text-slate-600 max-w-[45ch]">
				This feature allows you to adjust the size of the text on the screen to make it bigger or smaller, depending on your preference. It is particularly useful for people with visual impairments or those who prefer larger text. 
			</p>
		</div>

		<div class="my-4">
			<Palette size={50} />
			<h1 class=" text-2xl text-slate-800 font-semibold ">Color Filters</h1>
			<p class="text-slate-600 max-w-[45ch]">
				Color filters are used to adjust the color scheme of a screen to make it easier to see and more comfortable for your eyes. It is most useful for people with color blindness, low vision, or sensitivity to certain colors
			</p>
		</div>

		<div class="my-4">
			<MousePointer2 size={50} />
			<h1 class=" text-2xl text-slate-800 font-semibold ">Cursor Size</h1>
			<p class="text-slate-600 max-w-[45ch]">
				This allows you to adjust the size of the cursor to make it easier to see and track. 
			</p>
		</div>

		<div class="my-4">
			<Keyboard size={50} />
			<h1 class=" text-2xl text-slate-800 font-semibold ">Sticky Keys</h1>
			<p class="text-slate-600 max-w-[45ch]">
				This allows the user to press one key at a time for keyboard shortcuts, rather than needing to press multiple keys at once. 			</p>
		</div>


	</div>
</main>
<section class="flex items-center justify-center my-5">
	<NextLesson lessonNumber={'3'} nextPageLink="/browsers" />
</section>
