<script lang="ts">
	import { ChevronDown } from 'lucide-svelte';
	import NextLesson from '../NextLesson.svelte';
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Lesson 1 - Devices</title>
</svelte:head>
<main class="flex flex-col justify-center m-auto">
	<div class="h-[91vh] flex flex-col items-center justify-items-center justify-center w-full">
		<div class="flex flex-col lg:flex-row md:items-center mb-20">
			<div class="mr-16">
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
				class="max-w-[35rem] max-h-[35rem]"
			/>
		</div>
		<div class="flex flex-col items-center">
			<p class=" tracking-widest text-2xl text-slate-600 font-light mt-10">GET STARTED</p>
			<ChevronDown size={50} style="color:rgb(71, 85, 105);" />
		</div>
	</div>
	<div class="border-t flex flex-col w-full">
		<div class="flex md:flex-row flex-col mt-8 items-center h-full">
			<section class="md:max-w-[40ch]">
				<h1 class=" text-3xl text-slate-800 font-semibold ">Taskbars</h1>
				<p class=" pt-2 text-base text-slate-600 mb-3.5 ">
					Almost all devices have a top and/or bottom bar, these allow you to access things you need
					often quickly and easily.
				</p>
			</section>
		</div>
	</div>
	<!-- <section class=" p-8 flex flex-row items-center">
		<section class=" mr-12">
			<h2 class="text-4xl text-slate-800 font-semibold">Taskbars</h2>
			<p class="text-base text-slate-600 w-[50ch] pt-2 ">
				Almost all devices have a top and/or bottom bar, these allow you to access things you need
				often quickly and easily.
			</p>
		</section>
		<section class="border-r flex flex-col pr-8 items-center">
			<!-- <Lightbox> -->
			<img src="assets/devices/MacOS_desktop.jpg" alt="MacOS desktop" class=" m-auto mb-4" />
			<!-- </Lightbox> -->
			<p class="text-base text-slate-600 w-[55ch] text-center">
				For MacOS there is both a top and bottom bar, the top bar is a menu and the bottom bar is
				used to hold your computer's apps.
			</p>
		</section>
		<section class="ml-8 flex flex-col items-center">
			<!-- <Lightbox> -->
			<img src="assets/devices/windows_desktop.png" alt="Windows desktop" class=" m-auto mb-4" />
			<!-- </Lightbox> -->
			<p class="text-base text-slate-600 w-[55ch] text-center">
				Windows only has a bottom bar that holds your open and most used apps as well as the start
				button.
			</p>
		</section>
	</section>
	<hr class=" w-4/5 m-auto " />
	<section class=" p-8 flex flex-row-reverse items-center">
		<section class="ml-12">
			<h2 class="text-4xl text-slate-800 font-semibold">Start Buttons</h2>
			<p class="text-base text-slate-600 w-[50ch] pt-2 ">
				A start button can be used to search a device for programs or files, its look and <span
					class="text-[#ec598b]">location</span
				>
				differ depending on device.
			</p>
		</section>
		<div class="flex flex-col justify-center items-center border-l">
			<img src="assets/devices/apple_logo.png" alt="Apple logo" class="max-w-[50%] h-auto mb-4" />
			<p class="text-base text-slate-600 w-[55ch] text-center">
				Located - <span class="text-[#ec598b]">Top Left</span>
			</p>
		</div>
		<div class="flex flex-col justify-center items-center">
			<img src="assets/devices/windows_logo.png" alt="" class="max-w-[50%] h-auto mb-4" />
			<p class="text-base text-slate-600 w-[55ch] text-center">
				Located - <span class="text-[#ec598b]">Bottom Left</span> or
				<span class="text-[#ec598b]"> Center</span>
			</p>
		</div>
	</section>
	<hr class=" w-4/5 m-auto " />
	<section class=" p-8 flex flex-row items-center">
		<section class=" mr-12">
			<h2 class="text-4xl text-slate-800 font-semibold">File Explorers</h2>
			<p class="text-base text-slate-600 w-[50ch] pt-2 ">
				The file explorer is based on folders and files. Folders can hold your files to keep them
				organized and find them easily. There are some default folders such as pictures, documents,
				and downloads as well as folders you can make yourself.
			</p>
		</section>
		<section class="border-r flex flex-col pr-8 items-center justify-center">
			<!-- <Lightbox> -->
			<img src="assets/devices/Finder.png" alt="MacOS Finder" class=" m-auto mb-4" />
			<!-- </Lightbox> -->
			<p class="text-base text-slate-600 w-[55ch] text-center">
				MacOS users have a File Explorer called Finder.
			</p>
		</section>
		<section class="ml-8 flex flex-col items-center">
			<!-- <Lightbox> -->
			<img
				src="assets/devices/File_Explorer.png"
				alt="Windows desktop"
				class=" m-auto mb-4 border"
			/>
			<!-- </Lightbox> -->
			<p class="text-base text-slate-600 w-[55ch] text-center">
				Windows users have a File Explorer called Windows File Explorer.
			</p>
		</section>
	</section>
	<section class="flex items-center justify-center my-5">
		<NextLesson lessonNumber={'1'} nextPageLink="/icons" />
	</section>
</main>

<style>
</style>
