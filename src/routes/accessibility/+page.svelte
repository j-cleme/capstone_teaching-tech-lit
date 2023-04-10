<script>
	import { ChevronDown, ZoomIn, Type, Palette, Ear, MousePointer2, Keyboard } from 'lucide-svelte';
	import NextLesson from '$lib/NextLesson.svelte';
	import { base } from '$app/paths';
	import GetStarted from '$lib/GetStarted.svelte';
</script>

<svelte:head>
	<title>Lesson 3 - Accessibility</title>
</svelte:head>

<main class="flex flex-col justify-center m-auto w-full">
	<div
		class="h-[91vh] md:mt-0 mt-10 flex flex-col items-center justify-items-center justify-center w-full border-b"
	>
		<div class="flex flex-col md:flex-row items-center">
			<div class="md:mr-16">
				<p class=" tracking-wide text-[#ec598b] text-2xl">Lesson 3</p>
				<h1 class="text-6xl text-slate-800 font-semibold">Accessibility</h1>
				<p class="pt-3.5 md:max-w-[47ch] text-xl text-slate-600 mb-3.5">
					Accessibility, also known as ease of access, refers to the features and settings that can
					help make technology more accessible for people with disabilities or impairments.
				</p>
			</div>
			<!-- svelte-ignore a11y-img-redundant-alt -->
			<img
				src="{base}/assets/accessibility/accessibility.svg"
				alt="Accessibility Hero Image"
				class="md:max-w-[35rem] md:max-h-[35rem] w-5/6 h-auto"
			/>
		</div>
		<GetStarted />
	</div>
	<h2 class="text-slate-800 text-4xl font-semibold mt-8">
		Accessibility <span class="text-[#ec598b] font-semibold">Options</span>
	</h2>
	<p class="text-slate-600 my-4 text-lg">
		Many devices and applications offer a range of options that can help users customize their
		experience and make it easier to use.
	</p>
	<div class="md:grid md:grid-cols-3 w-full justify-items-center my-6">
		<div class="my-6">
			<ZoomIn size={50} />
			<h1 class=" text-2xl text-slate-800 font-semibold ">Zoom</h1>
			<p class="text-slate-600 max-w-[50ch]">
				Many web browsers have built in zoom capabilities, these can be found in the settings on the
				browser, signified by a magnifying glass. This allows you to <span
					class="text-[#ec598b] font-semibold">enlarge</span
				> any text, images, or icons and make them easier to see. On a trackpad, you may be able to use
				pinch gestures to zoom in and out.
			</p>
		</div>

		<div class="my-6">
			<Ear size={50} />
			<h1 class=" text-2xl text-slate-800 font-semibold ">Narrator</h1>
			<p class="text-slate-600 max-w-[50ch]">
				The narrator feature gives you an <span class="text-[#ec598b] font-semibold"
					>audio description</span
				> of what is currently happening on the screen. It is used for things such as reading out text
				or describing actions. This can be useful for people with visual impairments or those who prefer
				to listen rather than read.
			</p>
		</div>

		<div class="my-6">
			<Type size={50} />
			<h1 class=" text-2xl text-slate-800 font-semibold ">Adjustable Text Size</h1>
			<p class="text-slate-600 max-w-[50ch]">
				This feature allows you to <span class="text-[#ec598b] font-semibold">adjust the size</span>
				of the text on the screen to make it bigger or smaller, depending on your preference. It is particularly
				useful for people with visual impairments or those who prefer larger text.
			</p>
		</div>

		<div class="my-6">
			<Palette size={50} />
			<h1 class=" text-2xl text-slate-800 font-semibold ">Color Filters</h1>
			<p class="text-slate-600 max-w-[50ch]">
				Color filters are used to <span class="text-[#ec598b]">adjust the color scheme</span> of a screen
				to make it easier to see and more comfortable for your eyes. It is most useful for people with
				color blindness, low vision, or sensitivity to certain colors
			</p>
		</div>

		<div class="my-6">
			<MousePointer2 size={50} />
			<h1 class=" text-2xl text-slate-800 font-semibold ">Cursor Size</h1>
			<p class="text-slate-600 max-w-[50ch]">
				This allows you to <span class="text-[#ec598b] font-semibold">adjust the size</span> of the cursor
				to make it easier to see and track.
			</p>
		</div>

		<div class="my-6">
			<Keyboard size={50} />
			<h1 class=" text-2xl text-slate-800 font-semibold ">Sticky Keys</h1>
			<p class="text-slate-600 max-w-[50ch]">
				This allows the user to <span class="text-[#ec598b] font-semibold"
					>press one key at a time</span
				> for keyboard shortcuts, rather than needing to press multiple keys at once.
			</p>
		</div>
	</div>
</main>
<section class="flex items-center justify-center my-5">
	<NextLesson lessonNumber={'3'} nextPageLink="/browsers" />
</section>
