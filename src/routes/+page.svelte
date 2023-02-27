<script>
	import { MousePointer, Settings } from 'lucide-svelte';
</script>

<!-- Hero/Landing section -->
<div class="bg-[#3549A6]">
	<div class="grid lg:grid-cols-2 content-area">
		<div class="flex flex-col justify-center leading-loose justify-items-center px-4 text-white">
			<h1 class="text-6xl md:text-6xlmd:text-left font-semibold pb-4">Teaching Tech Lit</h1>
			<h2 class="text-2xl md:text-left py-4 font-thin px-2 ">
				A guided introduction to the internet for adults looking to learn tech intuition and
				literacy.
			</h2>
			<button
				class=" bg-transparent mt-4 py-2 px-4 border border-white text-white rounded w-52 text-2xl hover:bg-white hover:text-[#3549A6] font-normal"
				onclick="location.href='/buttons'"
			>
				Click Here to Get Started &#10140;
			</button>
		</div>
		<div class="flex flex-col justify-end items-end">
			<img src="/assets/T_Logo_White.png" alt="the Teaching Tech Lit logo." />
		</div>
	</div>
</div>
<!-- What is teaching tech lit section -->
<div class="content-area">
	<div class="my-14">
		<div class="flex flex-col">
			<h1 class="text-5xl md:text-6xlmd:text-left font-semibold pb-3" style="color: #3549A6;">
				What is Teaching Tech Lit?
			</h1>

			<div class="mr-32">
				<p class="text-xl font-thin pt-3">
					Current technological literacy programs are for young children (6-12) or if it is for
					adults it is only job skills training. We are instead looking to teach adults tech
					intuition and literacy, rather than focusing on programs like Office or Adobe. Older
					people who did not grow up with computers and tech face the biggest gap in technological
					literacy.
				</p>
			</div>
		</div>
	</div>

	<hr />
	<!-- Lessons section -->
	<h1 class="text-5xl md:text-6xlmd:text-left font-semibold mt-10 pb-3" style="color: #3549A6;">
		Lessons
	</h1>
	<div class="grid lg:grid-cols-3 mt-8 mb-10">
		<div class="cards rounded overflow-hidden shadow border py-2 ">
			<div class="">
				<div class="font-bold text-3xl py-4 mb-2 text-gray-800">Browsers</div>
				<img src="/assets/Edge_logo.png" alt="edge logo" class="responsive pb-4" />
			</div>
			<div class="py-2">
				<span
					class="inline-block px-4 bg-gray-200 rounded-full text-base font-semibold text-gray-700"
					>Not Completed</span
				>
			</div>
			<button
				class="p-2 border card-btn text-2xl text-white rounded hover:bg-blue-600 hover:border-blue-600"
				>Start</button
			>
		</div>
		<div class="cards rounded overflow-hidden shadow border py-2 lg:my-0 my-4">
			<div class="lg:h-full">
				<div class="font-bold text-3xl py-4 mb-2 text-gray-800 ">Icons</div>
				<Settings size="64" class="responsive" />
			</div>
			<div class="py-2">
				<span
					class="inline-block px-4 bg-gray-200 rounded-full text-base font-semibold text-gray-700"
					>Not Completed</span
				>
			</div>
			<button
				class="p-2 border card-btn text-2xl text-white rounded hover:bg-blue-600 hover:border-blue-600"
				onclick="location.href='/icons'">Start</button
			>
		</div>
		<div class="cards rounded overflow-hidden shadow border py-2 lg:my-0 my-4">
			<div class="">
				<div class="font-bold text-3xl py-4 mb-2 text-gray-800">Devices</div>
				<img src="/assets/windows_logo.png" alt="Windows logo" class="responsive pb-4" />
			</div>
			<div class="py-2">
				<span
					class="inline-block px-4 bg-gray-200 rounded-full text-base font-semibold text-gray-700"
					>Not Completed</span
				>
			</div>
			<button
				class="p-2 border card-btn text-2xl text-white rounded hover:bg-blue-600 hover:border-blue-600"
				onclick="location.href='/devices'">Start</button
			>
		</div>
	</div>
</div>
