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
		Move,
		ChevronDown
	} from 'lucide-svelte';
</script>

<svelte:head>
	<title>Lesson 2 - Icons</title>
</svelte:head>

<main class="flex flex-col justify-center m-auto">
	<div class="h-[91vh] flex flex-col items-center justify-items-center justify-center w-full">
		<div class="flex flex-col md:flex-row md:items-center mb-20">
			<div class="">
				<p class=" tracking-wide text-[#ec598b] text-2xl">Lesson 2</p>
				<h1 class="text-6xl text-slate-800 font-semibold">
					Icons<span class="text-[#3549A6]">.</span>
				</h1>
				<p class="pt-3.5 lg:max-w-[47ch] text-xl text-slate-600 mb-3.5">
					A lesson about the most common icons you'll encounter. Some of these appeared in your
					pamphlet and will be reviewed.
				</p>
			</div>
			<img src="assets/icons/icons.svg" alt="Icon Hero Image" class="max-w-[30rem] max-h-[30rem]"/>
		</div>
		<div class="flex flex-col items-center">
		<p class=" tracking-widest text-2xl text-slate-600 font-light mt-10">GET STARTED</p>
		<ChevronDown size={50} style="color:rgb(71, 85, 105);"/>
		</div>
	</div>
	<div class="border-t w-full flex flex-col">
		<div class="flex md:flex-row flex-col mt-8">
			<section class="lg:max-w-[35ch]">
				<h1 class=" text-3xl text-slate-800 font-semibold ">
					Window <span class="text-[#ec598b]">Action</span> Buttons
				</h1>
				<p class=" pt-2 text-base text-slate-600 mb-3.5 ">
					In the top left or right corner of any program there will likely be three icons.
				</p>
			</section>

			<div class="flex md:flex-row flex-col m-auto">
				<div class="flex flex-row md:items-center md:border-r px-4">
					<X size={45} enable-background={false}/>
					<div class="flex flex-col ml-2">
						<h3 class=" text-xl text-slate-800">Close</h3>
					<p class="text-slate-600">
						This will <span class="text-[#ec598b]">close</span> the program.
					</p>
					</div>
				</div>
	
				<div class="flex flex-row md:items-center md:border-r px-4">
					<Maximize size={45} enable-background={false}/>
					<div class="flex flex-col ml-2">
						<h3 class=" text-xl text-slate-800">Maximize</h3>
						<p class="text-slate-600 md:max-w-[20ch]">
							This will make the window <span class="text-[#ec598b]">maximize</span> or return to its normal state.
						</p>
					</div>
				</div>
	
				<div class="flex flex-row md:items-center px-4">
					<Minimize size={45} enable-background={false}/>
					<div class="flex flex-col ml-2">
						<h3 class=" text-xl text-slate-800">Minimize</h3>
						<p class="text-slate-600 md:max-w-[20ch]">
							This will <span class="text-[#ec598b]">minimize</span> the program.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</main>
	<!-- <section class=" flex flex-row p-8 m-auto">
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
				<X size={70} enable-background={false}/>
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
	<section class="flex flex-row p-8 items-center">
		<section class="lg:max-w-[45ch] mr-8 p-4"role="contentinfo"> 
			<h1 class=" text-3xl text-slate-800 font-semibold ">
				Cursors
			</h1>
			<p class=" pt-2 text-base text-slate-600 mb-3.5 ">
				The cursor is the icon that moves around the screen with your mouse or trackpad. It has many different icons that each mean something different.
			</p>
		</section>

		<section role="contentinfo" class="grid grid-cols-3">
			<div class="px-4 pb-4 flex flex-wrap h-full border-r border-b items-center">
				<X size={70} enable-background={false}/>
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
	<hr>
	<section class=" flex flex-row p-8 m-auto">
		<section class="lg:max-w-[45ch] p-4">
			<h1 class=" text-3xl text-slate-800 font-semibold ">
				Additonal Icons
			</h1>
			<p class=" pt-2 text-base text-slate-600 mb-3.5 ">
				These are some addtional icons that you may encounter across devices.
			</p>
		</section>
		<section role="contentinfo" class="flex flex-wrap items-center ">
			<div class=" p-4 flex flex-wrap items-center h-full border-r">
				<Settings size={70}/>
				<div class="flex flex-col">
					<h3 class=" text-xl text-slate-800">Gear</h3>
				<p class="text-slate-600 lg:max-w-[28ch]">
					Gear icons are used to denote settings in programs and devices
				</p>
				</div>
			</div>
			<div class=" p-4 flex flex-wrap items-center h-full w-fit border-r">
				<img src="assets/icons/Edge_logo.png" alt="Edge Logo" class="max-w-[80px] h-auto">
				<div class="flex flex-col ml-3">
					<h3 class=" text-xl text-slate-800">App Icons</h3>
				<p class="text-slate-600 lg:max-w-[28ch]">
					App icons are unique to each app and are used to start the program
				</p>
				</div>
			</div>
			<div class=" p-4 flex flex-wrap items-center h-full w-fit">
				<img src="assets/icons/logo.png" alt="Edge Logo" class="max-w-[100px] h-auto">
				<div class="flex flex-col ml-3">
					<h3 class=" text-xl text-slate-800">Site Logo</h3>
				<p class="text-slate-600 lg:max-w-[28ch]">
					Clicking on the logo for a website will take you to the home page
				</p>
				</div>
			</div>
			
		</section>

	</section> -->

<section class="flex items-center justify-center my-5">
	<a
		href="/accessibility"
		class="bg-[#3549A6] text-xl font-semibold text-white py-2 px-4 rounded border-b-4 border-blue-900 border-r-4"
	>
		Lesson 3 <span>&#10148;</span>
	</a>
</section>
