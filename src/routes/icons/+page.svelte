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
	import NextLesson from '$lib/NextLesson.svelte';
	import { base } from '$app/paths';
	import GetStarted from '$lib/GetStarted.svelte';
</script>

<svelte:head>
	<title>Lesson 2 - Icons</title>
</svelte:head>

<main class="flex flex-col justify-center m-auto">
	<div class="h-[91vh] flex flex-col items-center justify-items-center justify-center w-full">
		<div class="flex flex-col md:flex-row lg:items-center mb-20">
			<div class="mr-16">
				<p class=" tracking-wide text-[#ec598b] text-2xl">Lesson 2</p>
				<h1 class="text-6xl text-slate-800 font-semibold">
					Icons<span class="text-[#3549A6]">.</span>
				</h1>
				<p class="pt-3.5 lg:max-w-[47ch] text-xl text-slate-600 mb-3.5">
					A lesson about the most common icons you'll encounter. Some of these appeared in your
					pamphlet and will be reviewed.
				</p>
			</div>
			<!-- svelte-ignore a11y-img-redundant-alt -->
			<img
				src="{base}/assets/icons/icons.svg"
				alt="Icon Hero Image"
				class="max-w-[35rem] max-h-[35rem]"
			/>
		</div>
		<GetStarted />
	</div>
	<div class="border-t w-full flex flex-col">
		<div class="flex md:flex-row flex-col mt-8">
			<section class="md:max-w-[40ch]">
				<h1 class=" text-3xl text-slate-800 font-semibold ">
					Window <span class="text-[#ec598b]">Action</span> Buttons
				</h1>
				<p class=" pt-2 text-base text-slate-600 mb-3.5 ">
					In the top left or right corner of any program there will likely be three icons.
				</p>
			</section>

			<div class="flex md:flex-row flex-col m-auto ">
				<div class="flex flex-row md:items-center md:border-r md:py-0 py-4 md:px-4">
					<X size={45} enable-background={'false'} />
					<div class="flex flex-col ml-2">
						<h3 class=" text-xl text-slate-800">Close</h3>
						<p class="text-slate-600">
							This will <span class="text-[#ec598b]">close</span> the program.
						</p>
					</div>
				</div>

				<div class="flex flex-row md:items-center md:border-r md:px-4 md:py-0 py-4">
					<Maximize size={45} enable-background={'false'} />
					<div class="flex flex-col ml-2">
						<h3 class=" text-xl text-slate-800">Maximize</h3>
						<p class="text-slate-600 md:max-w-[30ch]">
							This will make the window <span class="text-[#ec598b]">maximize</span> or return to its
							normal state.
						</p>
					</div>
				</div>

				<div class="flex flex-row md:items-center md:px-4 md:py-0 py-4">
					<Minimize size={45} enable-background={'false'} />
					<div class="flex flex-col ml-2">
						<h3 class=" text-xl text-slate-800">Minimize</h3>
						<p class="text-slate-600 md:max-w-[45ch]">
							This will <span class="text-[#ec598b]">minimize</span> the program.
						</p>
					</div>
				</div>
			</div>
		</div>
		<!-- End of Windows Action Buttons -->

		<div class="flex lg:flex-row flex-col my-14 items-center">
			<section class="md:max-w-[35ch] md:mr-14" role="contentinfo">
				<h1 class=" text-3xl text-slate-800 font-semibold ">Cursors</h1>
				<p class=" pt-2 text-base text-slate-600 mb-3.5 ">
					The cursor is the icon that moves around the screen with your mouse or trackpad. It has
					many different icons that each mean something different.
				</p>
			</section>

			<div class="lg:grid lg:grid-cols-3 m-auto">
				<div
					class="px-4 pb-4 flex flex-row h-full lg:border-r lg:border-b items-center cursor-default"
				>
					<MousePointer size={50} />
					<div class="flex flex-col ml-3">
						<h3 class=" text-xl text-slate-800">Cursor Arrow</h3>
						<p class="text-slate-600 md:max-w-[45ch]">This is the default cursor icon.</p>
					</div>
				</div>
				<div
					class="px-4 pb-4 flex flex-row items-center lg:border-r lg:border-b h-full cursor-pointer"
				>
					<Pointer size={50} />
					<div class="flex flex-col ml-3">
						<h3 class=" text-xl text-slate-800">Pointer</h3>
						<p class="text-slate-600 md:max-w-[45ch]">
							This looks like a little hand pointing its finger and usually denotes an option to
							select.
						</p>
					</div>
				</div>
				<div class="px-4 pb-4 flex flex-row items-center h-full lg:border-b cursor-text">
					<TextCursor size={50} />
					<div class="flex flex-col ml-3">
						<h3 class=" text-xl text-slate-800">Type</h3>
						<p class="text-slate-600 md:max-w-[45ch]">This icon means this space is for typing.</p>
					</div>
				</div>
				<div class=" p-4 flex flex-row items-center h-full lg:border-r cursor-grab">
					<Grab size={50} />
					<div class="flex flex-col ml-3">
						<h3 class=" text-xl text-slate-800">Hand / Grab</h3>
						<p class="text-slate-600 md:max-w-[45ch]">
							This allows you to grab by clicking and move things.
						</p>
					</div>
				</div>
				<div class=" p-4 flex flex-row items-center h-full lg:border-r cursor-e-resize">
					<MoveHorizontal size={50} />
					<div class="flex flex-col ml-3">
						<h3 class=" text-xl text-slate-800">Resize</h3>
						<p class="text-slate-600 md:max-w-[45ch]">
							Arrows going in both directions will allow you to resize an object.
						</p>
					</div>
				</div>
				<div class=" p-4 flex flex-row items-center h-full cursor-move">
					<Move size={50} />
					<div class="flex flex-col ml-3">
						<h3 class=" text-xl text-slate-800">Move</h3>
						<p class="text-slate-600 md:max-w-[45ch]">
							This allows you to move things around on a page.
						</p>
					</div>
				</div>
			</div>
		</div>
		<!-- End of Cursors -->

		<div class="flex md:flex-row flex-col mt-8">
			<section class="md:max-w-[40ch] md:mr-14">
				<h1 class=" text-3xl text-slate-800 font-semibold ">Additonal Icons</h1>
				<p class=" pt-2 text-base text-slate-600 mb-3.5 ">
					These are some addtional icons that you may encounter across devices.
				</p>
			</section>

			<div class="flex md:flex-row flex-col m-auto ">
				<div class="flex flex-row md:items-center md:border-r md:py-0 py-4 md:px-4">
					<Settings size={45} />
					<div class="flex flex-col ml-2">
						<h3 class=" text-xl text-slate-800">Gear</h3>
						<p class="text-slate-600 lg:max-w-[45ch]">
							Gear icons are used to denote settings in programs and devices.
						</p>
					</div>
				</div>

				<div class="flex flex-row items-center md:border-r md:px-4 md:py-0 py-4">
					<img
						src="{base}/assets/icons/Edge_logo.png"
						alt="Edge Logo"
						class="max-w-[50px] h-auto"
					/>
					<div class="flex flex-col ml-2">
						<h3 class=" text-xl text-slate-800">App Icons</h3>
						<p class="text-slate-600 lg:max-w-[45ch]">
							App icons are unique to each app and are used to start the program.
						</p>
					</div>
				</div>
				<div class="flex flex-row items-center md:px-4 md:py-0 py-4">
					<img src="{base}/assets/icons/logo.png" alt="Edge Logo" class="max-w-[50px] h-auto" />
					<div class="flex flex-col ml-2">
						<h3 class=" text-xl text-slate-800">Site Logo</h3>
						<p class="text-slate-600 lg:max-w-[45ch]">
							Clicking on the logo for a website will take you to the home page.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</main>
<section class="flex items-center justify-center my-5">
	<NextLesson lessonNumber={'2'} nextPageLink="/accessibility" />
</section>
