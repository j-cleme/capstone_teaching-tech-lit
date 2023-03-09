<script>
	import { Lightbox, LightboxGallery, GalleryThumbnail, GalleryImage } from 'svelte-lightbox';

	let lightboxProgrammaticController;
</script>

<svelte:head>
	<title>Lesson 1 - Devices</title>
</svelte:head>
<main>
	<section
		class="flex flex-wrap justify-center items-center gap-x-10 p-8 w-fit
	m-auto"
		role="banner"
	>
		<div class="rounded p-8">
			<h1 class="text-6xl text-slate-800 font-semibold">
				Lesson 1 <span class="text-[#3549A6]">-</span> Devices
			</h1>
			<p class="pt-3.5 lg:max-w-[47ch] text-xl text-slate-600 mb-3.5">
				All devices are different, but some functions are seen across all platforms. Let's explore
				them.
			</p>
		</div>
		<aside>
			<img src="assets/devices/devices.svg" alt="Devices Hero" />
		</aside>
	</section>
	<hr class=" w-4/5 m-auto " />
	<section class=" p-8 flex flex-wrap justify-center items-center">
		<div class=" mr-14">
			<h2 class="text-4xl text-slate-800 font-semibold">Taskbars</h2>
			<p class="text-base text-slate-600 w-[50ch]">
				Almost all devices have a top and/or bottom bar, these allow you to access things you need
				often quickly and easily.
			</p>
		</div>
		<div class="mx-4 border-r px-4">
			<Lightbox description="MacOS Desktop" style="max-width: !important none;">
				<img
					src="assets/devices/MacOS_desktop.jpg"
					alt="MacOS desktop"
					class=" m-auto mb-4 w-100 h-100"
				/>
			</Lightbox>
			<p class="text-base text-slate-600 w-[55ch] text-center">
				For MacOS there is both a top and bottom bar, the top bar is a menu and the bottom bar is
				used to hold your computer's apps.
			</p>
		</div>
		<div class="mx-4 px-4">
			<Lightbox description="Windows 10 Desktop" style="max-width: !important none;">
				<img src="assets/devices/windows_desktop.png" alt="Windows desktop" class=" m-auto mb-4" />
			</Lightbox>
			<p class="text-base text-slate-600 w-[55ch] text-center">
				Windows only has a bottom bar that holds your open and most used apps as well as the start
				button.
			</p>
		</div>
	</section>
	<section class="flex items-center justify-center my-5">
		<a
			href="/icons"
			class="bg-[#3549A6] text-xl font-semibold text-white py-2 px-4 rounded border-b-4 border-blue-900 border-r-4"
		>
			Lesson 2 <span>&#10148;</span>
		</a>
	</section>
</main>
