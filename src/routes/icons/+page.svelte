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
		Mouse,
		Move
	} from 'lucide-svelte';
</script>

<svelte:head>
	<title>Lesson 2 - Icons</title>
</svelte:head>

<main>
	<section class="flex flex-wrap justify-center items-center gap-x-10 p-8 w-fit
	m-auto" role="banner">
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
	<hr>
	<section class=" flex flex-row p-8 m-auto">
		<section class="lg:max-w-[45ch] p-4 mr-8 pr-8">
			<h1 class=" text-3xl text-slate-800 font-semibold ">
				Window <span class="text-[#ec598b]">Action</span> Buttons
			</h1>
			<p class=" pt-2 text-base text-slate-600 mb-3.5 ">
				In the top left or right corner of any program there will likely be three icons.
			</p>
		</section>
		<section role="contentinfo" class="flex flex-wrap justify-center items-center ">
			<div class=" p-4 flex flex-col h-full border-r">
				<!-- <X size={70} enable-background={false}/> -->
				<h3 class=" text-xl text-slate-800">Close</h3>
				<p class="text-slate-600">
					This will <span class="text-[#ec598b]">close</span> the program.
				</p>
			</div>
			<div class=" p-4 flex flex-col border-r h-full">
				<h3 class=" text-xl text-slate-800">Maximize</h3>
				<p class="text-slate-600 lg:max-w-[28ch]">
					This will make the window <span class="text-[#ec598b]">maximize</span> or return to its normal state.
				</p>
			</div>
			<div class=" p-4 flex flex-col h-full ">
				<h3 class=" text-xl text-slate-800">Minimize</h3>
				<p class="text-slate-600 lg:max-w-[28ch]">
					This will <span class="text-[#ec598b]">minimize</span> the program.
				</p>
			</div>
		</section>

	</section>
	<hr>
	<section class="flex flex-row p-8 items-center justify-center">
		<section class="lg:max-w-[45ch] mr-8 pr-8"role="contentinfo"> 
			<h1 class=" text-3xl text-slate-800 font-semibold ">
				Cursors
			</h1>
			<p class=" pt-2 text-base text-slate-600 mb-3.5 ">
				The cursor is the icon that moves around the screen with your mouse or trackpad. It has many different icons that each mean something different.
			</p>
		</section>

		<section role="contentinfo" class="grid grid-cols-3">
			<div class="px-4 pb-4 flex flex-wrap h-full border-r border-b items-center">
				<!-- <X size={70} enable-background={false}/> -->
				<MousePointer size={70}/>
				<div class="flex flex-col ml-3">
					<h3 class=" text-xl text-slate-800">Cursor Arrow</h3>
				<p class="text-slate-600">
					This is the default cursor icon
				</p>
				</div>
			</div>
			<div class="px-4 pb-4 flex flex-wrap items-center border-r border-b h-full">
				<Pointer size={70}/>
				<div class="flex flex-col ml-3">
				<h3 class=" text-xl text-slate-800">Pointer</h3>
				<p class="text-slate-600 lg:max-w-[28ch]">
					This looks like a little hand pointing its finger and usually denotes an option to select
				</p>
				</div>
			</div>
			<div class="px-4 pb-4 flex flex-wrap items-center h-full border-b">
				<TextCursor size={70}/>
				<div class="flex flex-col ml-3">
					<h3 class=" text-xl text-slate-800">Type</h3>
				<p class="text-slate-600 lg:max-w-[28ch]">
					This icon means this space is for typing
				</p>
				</div>
			</div>
			<div class=" p-4 flex flex-wrap items-center h-full border-r">
				<Grab size={70}/>
				<div class="flex flex-col ml-3">
					<h3 class=" text-xl text-slate-800">Hand / Grab</h3>
				<p class="text-slate-600 lg:max-w-[28ch]">
					This allows you to grab by clicking and move things around
				</p>
				</div>
			</div>
			<div class=" p-4 flex flex-wrap items-center h-full border-r">
				<MoveHorizontal size={70}/>
				
				<div class="flex flex-col ml-3">
					<h3 class=" text-xl text-slate-800">Resize</h3>
					<p class="text-slate-600 lg:max-w-[28ch]">
						Arrows going in both directions in any orientation will allow you to resize an object
					</p>
				</div>
			</div>
			<div class=" p-4 flex flex-wrap items-center h-full ">
				<Move size={70}/>
				<div class="flex flex-col ml-3">
					<h3 class=" text-xl text-slate-800">Move</h3>
				<p class="text-slate-600 lg:max-w-[28ch]">
					This allows you to move things around on a page
				</p>
				</div>
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
