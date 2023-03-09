<svelte:head>
	<title>Lesson 1 - Devices</title>
</svelte:head>
<script>
    import { 
        Lightbox,
        LightboxGallery,
        GalleryThumbnail,
        GalleryImage
    } from 'svelte-lightbox'
    
    let lightboxProgrammaticController
</script>
<style>
	


</style>
<main class="flex flex-col px-16 m-auto">
	<section class="flex items-center gap-x-10 p-8 my-10" role="banner">
		<section class="">
			<h1 class="text-6xl text-slate-800 font-semibold">
				Lesson 1 <span class="text-[#3549A6]">-</span> Devices
			</h1>
			<p class="pt-3.5 lg:max-w-[47ch] text-xl text-slate-600 mb-3.5">
				All devices are different, but some functions are seen across all platforms. 
				Let's explore them.
			</p>
		</section>
		<img src="assets/devices/devices.svg" alt="Devices Hero Image" class="">

	</section>
	<hr class=" w-4/5 m-auto ">
	<section class=" p-8 flex flex-row items-center">
		<section class=" mr-12">
			<h2 class="text-4xl text-slate-800 font-semibold">
				Taskbars
			</h2>
			<p class="text-base text-slate-600 w-[50ch] pt-2 ">
				Almost all devices have a top and/or bottom bar, these allow you to access things you need often quickly and easily.
			</p>
		</section>
		<section class="border-r flex flex-col pr-8 items-center">
			<Lightbox>
				<img src="assets/devices/MacOS_desktop.jpg" alt="MacOS desktop" class=" m-auto mb-4">
			</Lightbox>
			<p class="text-base text-slate-600 w-[55ch] text-center">
				For MacOS there is both a top and bottom bar, the top bar is a menu and the bottom bar is used to hold your computer's apps.
			</p>
		</section>
		<section class="ml-8 flex flex-col items-center">
			<Lightbox>
				<img src="assets/devices/windows_desktop.png" alt="Windows desktop" class=" m-auto mb-4">
			</Lightbox>					
			<p class="text-base text-slate-600 w-[55ch] text-center">
				Windows only has a bottom bar that holds your open and most used apps as well as the start button.
			</p>
		</section>
	</section>
	<hr class=" w-4/5 m-auto ">
	<section class=" p-8 flex flex-row-reverse items-center">
		<section class="ml-12">
			<h2 class="text-4xl text-slate-800 font-semibold">
				Start Buttons
			</h2>
			<p class="text-base text-slate-600 w-[50ch] pt-2 ">
				A start button can be used to search a device for programs or files, its look and <span class="text-[#ec598b]">location</span>
			differ depending on device.
			</p>
		</section>
		<div class="flex flex-col justify-center items-center border-l">
			<img src="assets/devices/apple_logo.png" alt="Apple logo" class="max-w-[50%] h-auto mb-4">
			<p class="text-base text-slate-600 w-[55ch] text-center">
				Located - <span class="text-[#ec598b]">Top Left</span>
			</p>
		</div>
		<div class="flex flex-col justify-center items-center">
			<img src="assets/devices/windows_logo.png" alt="" class="max-w-[50%] h-auto mb-4">
			<p class="text-base text-slate-600 w-[55ch] text-center">
				Located - <span class="text-[#ec598b]">Bottom Left</span> or <span class="text-[#ec598b]"> Center</span>
			</p>
		</div>
		
	</section>
</main>

<!--<div class="bg-[#3549A6]">
	<div class="content-area">
		<h1 class="text-white" id="Icons">Lesson 1 - Devices</h1>
	</div>
</div>
<div class="content-area">
	<div class="mt-10 mb-16">
		<p class="text-xl font-thin">
			All devices are different, but some functions are seen across all platforms. Almost all
			devices have a top and/or bottom bar, these allow you to access things you need often quickly
			and easily.
		</p>
		<br />
		<div class="grid grid-cols lg:grid-cols-2">
			<div class="m-auto">
				<div class="cards rounded overflow-hidden shadow border p-6 h-full">
					<p class="text-xl font-semibold">
						For Apple there is both a top and bottom bar, the top bar is a menu and the bottom bar
						is used to hold your computer's apps:
					</p>
					<br />
					<img src="/assets/MacOS_desktop.jpg" alt="MacOS Desktop" class="m-auto" />
					<p class="mt-2 text-sm font-semibold">MacOS - Desktop</p>
				</div>
			</div>

			<div class="m-auto">
				<div class="cards rounded overflow-hidden shadow border p-6 h-full">
					<p class="text-xl font-semibold">
						Windows only has a bottom bar that holds your open and most used apps as well as the
						start button, which we will expand on.
					</p>
					<br />
					<img src="/assets/windows_desktop.png" alt="Windows Desktop" class="m-auto" />
					<p class="mt-2 text-sm font-semibold">Windows 11 - Desktop</p>
				</div>
			</div>
		</div>
	</div>
	<hr />
	<div class="mt-10 mb-4">
		<h1 class="text-5xl md:text-6xlmd:text-left font-semibold mb-2" style="color: #3549A6;">
			Start Buttons
		</h1>
		<p class="text-xl font-thin mt-4 mb-6">
			A start button can be used to search a device for programs or files, its look and location
			differ depending on device.
		</p>
		<div class="grid grid-cols lg:grid-cols-3">
			<div class="flex flex-col text-center w-72 rounded overflow-hidden shadow border p-6 h-full">
				<p class="text-xl font-semibold mt-4 mb-6">MacOS</p>
				<img src="assets/apple_logo.png" alt="Apple logo" class="m-auto w-2/6 mb-8" />
				<p class="text-sm font-semibold m-auto">Located - Top Left</p>
			</div>
			<div class="flex flex-col text-center w-72 rounded overflow-hidden shadow border p-6">
				<p class="text-xl font-semibold mt-4 mb-6">Windows</p>
				<img src="assets/windows_logo.png" alt="Apple logo" class="m-auto w-2/6 mb-8" />
				<p class="text-sm font-semibold m-auto">Located - Bottom Left or Center</p>
			</div>
		</div>
	</div>
	<hr />
	<div class="mt-10 mb-16">
		<h1 class="text-5xl md:text-6xlmd:text-left font-semibold mb-2" style="color: #3549A6;">
			File Explorers
		</h1>
		<p class="text-xl font-thin mt-4 mb-6">
			Every device will have a file explorer that allows you to search for and organize your files.
		</p>
		<div class="grid grid-cols lg:grid-cols-2">
			<div class="cards rounded overflow-hidden shadow border p-6 h-full">
				<p class="text-xl font-semibold mt-4 mb-6">
					On MacOS you have Finder which looks like this:
				</p>
				<img src="assets/Finder.png" alt="MacOS Finder" class="m-auto" />
				<p class="text-sm font-semibold m-auto">MacOS Ventura - Finder</p>
			</div>
			<div class="cards rounded overflow-hidden shadow border p-6 h-full">
				<p class="text-xl font-semibold mt-4 mb-6">
					On Windows you have File Explorer which looks like this:
				</p>
				<img src="assets/File_Explorer.png" alt="Windows File Explorer" class="m-auto" />
				<p class="text-sm font-semibold mt-6 m-auto">Windows 11 - File Explorer</p>
			</div>
		</div>
	</div>
	<section class="flex items-center justify-center my-5">
		<a
			href="/icons"
			class="bg-[#3549A6] text-xl font-semibold text-white py-2 px-4 rounded border-b-4 border-blue-900 border-r-4"
		>
			Lesson 2 <span>&#10148;</span>
		</a>
	</section>
</div>-->
