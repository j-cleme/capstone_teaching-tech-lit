<script lang="ts">
	import { ChevronDown } from 'lucide-svelte';
	import NextLesson from '$lib/NextLesson.svelte';
	import { Modals, closeModal } from 'svelte-modals';
	import { base } from '$app/paths';

	import { openModal } from 'svelte-modals';
	import ImageModal from '$lib/ImageModal.svelte';
	import GetStarted from '$lib/GetStarted.svelte';

	function handleClick(index: number) {
		switch (index) {
			case 1:
				openModal(ImageModal, {
					image: '/devices/MacOS_desktop.jpg',
					caption: 'This is a nice caption'
				});
				break;
			case 2:
				openModal(ImageModal, {
					image: '/devices/windows_desktop.png',
					caption: 'This is a nice caption'
				});
				break;
			case 3:
				openModal(ImageModal, {
					image: '/devices/Finder.png',
					caption: 'This is a nice caption'
				});
				break;
			case 4:
				openModal(ImageModal, {
					image: '/devices/File_Explorer.png',
					caption: 'This is a nice caption'
				});
				break;

			default:
				break;
		}
	}
</script>

<svelte:head>
	<title>Lesson 1 - Devices</title>
</svelte:head>

<Modals>
	<div
		slot="backdrop"
		class="fixed top-0 left-0 right-0 bottom-0 bg-black/50"
		on:click={closeModal}
		on:keypress={closeModal}
	/>
</Modals>

<main class="flex flex-col justify-center m-auto">
	<div
		class="h-[91vh] flex flex-col items-center justify-items-center justify-center w-full border-b"
	>
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
		<GetStarted />
	</div>
	<div class="flex flex-col w-full">
		<div class="flex md:flex-row flex-col mt-8 items-center h-full mr-4">
			<section class="md:max-w-[40ch]">
				<h1 class=" text-3xl text-slate-800 font-semibold ">Taskbars</h1>
				<p class=" pt-2 text-base text-slate-600 mb-3.5 ">
					Almost all devices have a top and/or bottom bar, these allow you to access things you need
					often quickly and easily.
				</p>
			</section>
			<section class="md:grid md:grid-cols-2 flex flex-col justify-items-center w-full">
				<picture>
					<img
						on:click={() => handleClick(1)}
						on:keypress={() => handleClick(1)}
						src="assets/devices/MacOS_desktop.jpg"
						alt="MacOS desktop"
						class=" m-auto mb-4 max-w-md"
					/>
				</picture>
				<picture>
					<img
						on:click={() => handleClick(2)}
						on:keypress={() => handleClick(2)}
						src="assets/devices/windows_desktop.png"
						alt="Windows desktop"
						class=" m-auto mb-4 max-w-md"
					/>
				</picture>
			</section>
		</div>
		<section class=" flex flex-row items-center my-14 w-full">
			<section class="mr-12">
				<h2 class="text-3xl text-slate-800 font-semibold">Start Buttons</h2>
				<p class="text-base text-slate-600 w-[40ch] pt-2 ">
					A start button can be used to search a device for programs or files, its look and <span
						class="text-[#ec598b]">location</span
					>
					differ depending on device.
				</p>
			</section>
			<div class="flex flex-col justify-center items-center w-full">
				<img
					src="assets/devices/apple_logo.png"
					alt="Apple logo"
					class="max-w-[10rem] h-auto mb-4"
				/>
				<p class="text-base text-slate-600 text-center">
					Located - <span class="text-[#ec598b]">Top Left</span>
				</p>
			</div>
			<div class="flex flex-col justify-center items-center w-full">
				<img src="assets/devices/windows_logo.png" alt="" class="max-w-[10rem] h-auto mb-4" />
				<p class="text-base text-slate-600 text-center">
					Located - <span class="text-[#ec598b]">Bottom Left</span> or
					<span class="text-[#ec598b]"> Center</span>
				</p>
			</div>
		</section>
		<section class="flex flex-row items-center">
			<section class=" mr-12">
				<h2 class="text-3xl text-slate-800 font-semibold">File Explorers</h2>
				<p class="text-base text-slate-600 w-[40ch] pt-2 ">
					The file explorer is comprised of folders and files. Folders can hold your files to keep
					them organized. There are some default folders such as pictures, documents, and downloads
					as well as folders you can make yourself.
				</p>
			</section>
			<section class="md:grid md:grid-cols-2 flex flex-col justify-items-center w-full">
				<picture class="flex items-center h-full">
					<img
						on:click={() => handleClick(3)}
						on:keypress={() => handleClick(3)}
						src="assets/devices/Finder.png"
						alt="MacOS Finder"
						class=" m-auto mb-4 max-w-md"
					/>
				</picture>
				<picture class="flex flex-col items-center">
					<img
						on:click={() => handleClick(4)}
						on:keypress={() => handleClick(4)}
						src="assets/devices/File_Explorer.png"
						alt="Windows desktop"
						class=" m-auto mb-4 border max-w-md"
					/>
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
