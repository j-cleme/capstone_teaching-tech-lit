<script>
	import {
		Settings,
		MoveHorizontal,
		Grab,
		TextCursor,
		Pointer,
		MousePointer,
		Maximize,
		Minimize,
		X,
		Mouse
	} from 'lucide-svelte';
</script>

<svelte:head>
	<title>Lesson 2 - Icons</title>
</svelte:head>

<main>
	<section
		class="flex flex-wrap justify-center items-center gap-x-10 p-8 border-2 rounded-lg w-fit
	m-auto"
		role="banner"
	>
		<section class="rounded p-8">
			<h1 class="text-6xl text-slate-800 font-semibold">
				Lesson 2 <span class="text-[#3549A6]">-</span> Icons
			</h1>
			<p class="pt-3.5 lg:max-w-[47ch] text-xl text-slate-600 mb-3.5">
				A lesson about the most common icons you'll encounter. Some of these appeared in your
				pamphlet and will be reviewed.
			</p>
		</section>
		<aside>
			<img src="assets/icons/icons.svg" alt="Icon Hero Image" />
		</aside>
	</section>

	<section class=" flex flex-col p-8 border-2 rounded-lg m-auto text-center w-fit ">
		<h1 class=" text-5xl text-slate-800 font-semibold ">Window Control Buttons</h1>
		<p class=" pt-3.5 text-xl text-slate-600 mb-3.5 ">
			In the top left or right corner of any program there will likely be three icons
		</p>
		<section role="contentinfo" class=" flex flex-wrap justify-center items-center ">
			<div
				class=" w-[150px] h-[150px] p-4 border rounded-lg m-auto flex flex-col justify-center items-center"
			>
				<X size="64" />
				<h3 class=" text-slate-600 text-3xl">Close</h3>
			</div>
			<div
				class=" w-[150px] h-[150px] p-4 border rounded-lg m-auto flex flex-col justify-center items-center"
			>
				<Maximize size="64" class="responsive" />
				<h3 class=" text-slate-600 text-3xl">Maximize</h3>
			</div>
			<div
				class=" w-[150px] h-[150px] p-4 border rounded-lg m-auto flex flex-col justify-center items-center"
			>
				<Minimize size="64" class="responsive" />
				<h3 class=" text-slate-600 text-3xl">Minimize</h3>
			</div>
		</section>
	</section>
</main>
<section class="flex items-center justify-center my-5">
	<a
		href="/accessibility"
		class="bg-[#3549A6] text-xl font-semibold text-white py-2 px-4 rounded border-b-4 border-blue-900 border-r-4"
	>
		Lesson 3 <span>&#10148;</span>
	</a>
</section>
