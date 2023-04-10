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

<main class="flex flex-col justify-center m-auto md:px-20">
	<div
		class="h-[91vh] md:mt-0 mt-10  flex flex-col items-center justify-items-center justify-center w-full border-b"
	>
		<div class="flex flex-col md:flex-row lg:items-center mb-20">
			<div class="mr-16">
				<p class=" tracking-wide text-[#ec598b] text-2xl">Lesson 2</p>
				<h1 class="text-6xl text-slate-800 font-semibold">Icons</h1>
				<p class="pt-3.5 lg:max-w-[47ch] text-xl text-slate-600 mb-3.5">
					A lesson about the most common icons you'll encounter. Some of these appeared in your
					pamphlet and will be reviewed.
				</p>
			</div>
			<!-- svelte-ignore a11y-img-redundant-alt -->
			<img
				src="{base}/assets/icons/icons.svg"
				alt="Icon Hero Image"
				class="md:max-w-[35rem] md:max-h-[35rem] w-5/6 h-auto"
			/>
		</div>
		<GetStarted />
	</div>
	<div class="w-full flex flex-col my-10">
		<div class="flex md:flex-row flex-col my-8 ">
			<section class="md:max-w-[40ch]">
				<h1 class=" text-3xl text-slate-800 font-semibold ">Window Action Buttons</h1>
				<p class=" pt-2 text-base text-slate-600 mb-3.5 ">
					In the top left or right corner of any program there will likely be three icons.
				</p>
			</section>

			<div class="flex md:flex-row flex-col m-auto ">
				<div class="flex md:flex-row flex-col md:items-center md:border-r md:py-0 py-4 md:px-4">
					<X size={50} enable-background={'false'} />
					<div class="flex flex-col ml-2">
						<h3 class=" text-xl text-slate-800">Close</h3>
						<p class="text-slate-600">
							This will <span class="text-[#ec598b] font-semibold">close</span> the program.
						</p>
					</div>
				</div>

				<div class="flex md:flex-row flex-col md:items-center md:border-r md:px-4 md:py-0 py-4">
					<Maximize size={50} enable-background={'false'} />
					<div class="flex flex-col ml-2">
						<h3 class=" text-xl text-slate-800">Maximize</h3>
						<p class="text-slate-600 max-w-[30ch]">
							This will make the window <span class="text-[#ec598b] font-semibold">maximize</span> or
							return to its normal state.
						</p>
					</div>
				</div>

				<div class="flex md:flex-row flex-col md:items-center md:px-4 md:py-0 py-4">
					<Minimize size={50} enable-background={'false'} />
					<div class="flex flex-col ml-2">
						<h3 class=" text-xl text-slate-800">Minimize</h3>
						<p class="text-slate-600 md:max-w-[45ch]">
							This will <span class="text-[#ec598b] font-semibold">minimize</span> the program.
						</p>
					</div>
				</div>
			</div>
		</div>
		<!-- End of Windows Action Buttons -->
		<hr class="w-3/6 m-auto my-8" />
		<div class="flex lg:flex-row flex-col my-14 items-center m-auto">
			<section class="md:max-w-[35ch] md:mr-14" role="contentinfo">
				<h1 class=" text-3xl text-slate-800 font-semibold ">Cursors</h1>
				<p class=" pt-2 text-base text-slate-600 mb-3.5 ">
					The cursor is the icon that moves around the screen with your mouse or trackpad. It has
					many different icons that each mean something different.
				</p>
			</section>

			<div class="lg:grid lg:grid-cols-3 m-auto">
				<div
					class="px-4 pb-4 flex md:flex-row flex-col h-full lg:border-r lg:border-b md:items-center cursor-default"
				>
					<MousePointer size={50} />
					<div class="flex flex-col ml-3">
						<h3 class=" text-xl text-slate-800">Cursor Arrow</h3>
						<p class="text-slate-600 md:max-w-[45ch]">
							This is the <span class="text-[#ec598b] font-semibold">default</span> cursor icon.
						</p>
					</div>
				</div>
				<div
					class="px-4 pb-4 flex md:flex-row flex-col md:items-center lg:border-r lg:border-b h-full cursor-pointer"
				>
					<Pointer size={50} />
					<div class="flex flex-col ml-3">
						<h3 class=" text-xl text-slate-800">Pointer</h3>
						<p class="text-slate-600 md:max-w-[45ch]">
							This looks like a little hand <span class="text-[#ec598b] font-semibold"
								>pointing</span
							> its finger and usually denotes an option to select.
						</p>
					</div>
				</div>
				<div
					class="px-4 pb-4 flex md:flex-row flex-col md:items-center h-full lg:border-b cursor-text"
				>
					<TextCursor size={50} />
					<div class="flex flex-col ml-3">
						<h3 class=" text-xl text-slate-800">Type</h3>
						<p class="text-slate-600 md:max-w-[45ch]">
							This icon means this space is for <span class="text-[#ec598b] font-semibold"
								>typing</span
							>.
						</p>
					</div>
				</div>
				<div class=" p-4 flex md:flex-row flex-col md:items-center h-full lg:border-r cursor-grab">
					<Grab size={50} />
					<div class="flex flex-col ml-3">
						<h3 class=" text-xl text-slate-800">Hand / Grab</h3>
						<p class="text-slate-600 md:max-w-[45ch]">
							This allows you to <span class="text-[#ec598b] font-semibold">grab</span> by clicking and
							move things.
						</p>
					</div>
				</div>
				<div
					class=" p-4 flex md:flex-row flex-col md:items-center h-full lg:border-r cursor-e-resize"
				>
					<MoveHorizontal size={50} />
					<div class="flex flex-col ml-3">
						<h3 class=" text-xl text-slate-800">Resize</h3>
						<p class="text-slate-600 md:max-w-[45ch]">
							Arrows going in both directions will allow you to <span
								class="text-[#ec598b] font-semibold">resize</span
							> an object.
						</p>
					</div>
				</div>
				<div class=" p-4 flex md:flex-row flex-col md:items-center h-full cursor-move">
					<Move size={50} />
					<div class="flex flex-col ml-3">
						<h3 class=" text-xl text-slate-800">Move</h3>
						<p class="text-slate-600 md:max-w-[45ch]">
							This allows you to <span class="text-[#ec598b] font-semibold">move</span> things around
							on a page.
						</p>
					</div>
				</div>
			</div>
		</div>
		<!-- End of Cursors -->
		<hr class="w-3/6 m-auto my-8" />
		<div class="flex md:flex-row flex-col mt-8 m-auto">
			<section class="md:max-w-[40ch] md:mr-14">
				<h1 class=" text-3xl text-slate-800 font-semibold ">Additonal Icons</h1>
				<p class=" pt-2 text-base text-slate-600 mb-3.5 ">
					These are some addtional icons that you may encounter across devices.
				</p>
			</section>

			<div class="flex md:flex-row flex-col m-auto ">
				<div class="flex md:flex-row flex-col md:items-center md:border-r md:py-0 py-4 md:px-4">
					<Settings size={50} />
					<div class="flex flex-col ml-2">
						<h3 class=" text-xl text-slate-800">Gear</h3>
						<p class="text-slate-600 lg:max-w-[45ch]">
							Gear icons are used to denote <span class="text-[#ec598b] font-semibold"
								>settings</span
							> in programs and devices.
						</p>
					</div>
				</div>

				<div class="flex md:flex-row flex-col md:items-center md:border-r md:px-4 md:py-0 py-4">
					<img
						src="{base}/assets/icons/Edge_logo.png"
						alt="Edge Logo"
						class="max-w-[50px] h-auto"
					/>
					<div class="flex flex-col ml-2">
						<h3 class=" text-xl text-slate-800">App Icons</h3>
						<p class="text-slate-600 lg:max-w-[45ch]">
							App icons are unique to each app and are used to <span
								class="text-[#ec598b] font-semibold">start</span
							> the program.
						</p>
					</div>
				</div>
				<div class="flex md:flex-row flex-col md:items-center md:px-4 md:py-0 py-4">
					<img src="{base}/assets/icons/logo.png" alt="Tech Lit Logo" class="max-w-[50px] h-auto" />
					<div class="flex flex-col ml-2">
						<h3 class=" text-xl text-slate-800">Site Logo</h3>
						<p class="text-slate-600 lg:max-w-[45ch]">
							Clicking on the logo for a website will take you to the <span
								class="text-[#ec598b] font-semibold">home page</span
							>.
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
