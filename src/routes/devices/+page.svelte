<script lang="ts">
	import NextLesson from '$lib/NextLesson.svelte';
	import { base } from '$app/paths';

	import GetStarted from '$lib/GetStarted.svelte';
</script>

<svelte:head>
	<title>Lesson 1 - Devices</title>
</svelte:head>

<main class="flex flex-col justify-center m-auto items-center">
	<div
		class="h-[91vh] md:mt-0 mt-10 flex flex-col items-center justify-items-center justify-center w-full border-b"
	>
		<div class="flex flex-col md:flex-row md:items-center mb-20">
			<div class="md:mr-16">
				<p class=" tracking-wide text-[#ec598b] text-2xl">Lesson 1</p>
				<h1 class="text-6xl text-slate-800 font-semibold">
					Devices<span class="text-[#3549A6]">.</span>
				</h1>
				<p class="pt-3.5 lg:max-w-[47ch] text-xl text-slate-600 mb-3.5">
					All devices are different, but some functions are seen across all platforms. Let's explore
					them.
				</p>
			</div>
			<!-- svelte-ignore a11y-img-redundant-alt -->
			<img
				src="{base}/assets/devices/devices.svg"
				alt="Devices Hero Image"
				class="md:max-w-[35rem] md:max-h-[35rem] w-5/6 h-auto"
			/>
		</div>
		<GetStarted />
	</div>
	<div class="flex flex-col w-full  items-center">
		<div class="flex md:flex-row flex-col mt-8 items-center justify-evenly w-full h-full mr-4">
			<section class="md:max-w-[40ch]">
				<h1 class=" text-3xl text-slate-800 font-semibold ">Taskbars</h1>
				<p class=" pt-2 text-xl text-slate-600 mb-3.5 ">
					Almost all devices have a top and/or bottom taskbar, these allow you to access things you
					need often quickly and easily.
				</p>
			</section>
			<section class="md:grid md:grid-cols-2 flex flex-col justify-items-center">
				<picture class="md:mt-0 mt-10">
					<img
						src="assets/devices/MacOS_desktop.jpg"
						alt="MacOS desktop"
						class=" m-auto mb-4 md:max-w-md w-5/6 h-auto"
					/>
					<p class="text-base text-slate-600 text-center">
						MacOS - <span class="text-[#ec598b]">Top</span> and
						<span class="text-[#ec598b]">Bottom</span> Taskbars
					</p>
				</picture>
				<picture class="md:my-0 my-4">
					<img
						src="assets/devices/windows_desktop.png"
						alt="Windows desktop"
						class=" m-auto mb-4 md:max-w-md w-5/6 h-auto"
					/>
					<p class="text-base text-slate-600 text-center">
						Windows - <span class="text-[#ec598b]">Bottom</span> Taskbar
					</p>
				</picture>
			</section>
		</div>
		<hr class="w-3/6 m-auto my-8" />
		<section class=" flex md:flex-row flex-col items-center my-14 w-full justify-evenly">
			<section class="md:mr-12">
				<h2 class="text-3xl text-slate-800 font-semibold">Start Buttons</h2>
				<p class="text-xl text-slate-600 md:w-[40ch] pt-2 ">
					A start button can be used to search a device for programs or files, its look and location
					differ depending on device.
				</p>
			</section>
			<div class="md:my-0 my-4 flex flex-col justify-center items-centermd:mt-0 mt-10">
				<img
					src="assets/devices/apple_logo.png"
					alt="Apple logo"
					class="max-w-[10rem] h-auto mb-4"
				/>
				<p class="text-base text-slate-600 text-center">
					Located - <span class="text-[#ec598b]">Top Left</span>
				</p>
			</div>
			<div class="md:my-0 my-4 flex flex-col justify-center items-center">
				<img src="assets/devices/windows_logo.png" alt="" class="max-w-[10rem] h-auto mb-4" />
				<p class="text-base text-slate-600 text-center">
					Located - <span class="text-[#ec598b]">Bottom Left</span> or
					<span class="text-[#ec598b]"> Center</span>
				</p>
			</div>
		</section>
		<hr class="w-3/6 m-auto my-8" />
		<section class="flex md:flex-row flex-col items-center">
			<section class=" md:mr-12">
				<h2 class="text-3xl text-slate-800 font-semibold">File Explorers</h2>
				<p class="text-xl text-slate-600 md:w-[40ch] pt-2 ">
					The file explorer is comprised of folders and files. Folders can hold your files to keep
					them organized. There are some default folders such as pictures, documents, and downloads
					as well as folders you can make yourself.
				</p>
			</section>
			<section class="md:grid md:grid-cols-2 flex flex-col justify-items-center w-full mb-4">
				<picture class="flex flex-col items-center md:h-full md:mt-0 mt-10">
					<img
						src="assets/devices/Finder.png"
						alt="MacOS Finder"
						class=" m-auto mb-4 md:max-w-md w-5/6 h-auto"
					/>
					<p class="text-base text-slate-600 text-center">
						MacOS - <span class="text-[#ec598b]">Finder</span>
					</p>
				</picture>
				<picture class="flex flex-col items-center md:my-0 my-4">
					<img
						src="assets/devices/File_Explorer.png"
						alt="Windows desktop"
						class=" m-auto mb-4 border md:max-w-md w-5/6 h-auto"
					/>
					<p class="text-base text-slate-600 text-center">
						Windows - <span class="text-[#ec598b]">Windows File Explorer</span>
					</p>
				</picture>
			</section>
		</section>
	</div>
	<section class="flex items-center justify-center my-5">
		<NextLesson lessonNumber={'1'} nextPageLink="/icons" />
	</section>
</main>

<style>
</style>
