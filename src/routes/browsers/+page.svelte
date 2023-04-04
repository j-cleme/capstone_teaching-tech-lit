<script>
	import { ChevronDown, ArrowLeftRight, Bookmark, RotateCw, Menu, Search } from 'lucide-svelte';
	import NextLesson from '$lib/NextLesson.svelte';
	import { base } from '$app/paths';
	import GetStarted from '$lib/GetStarted.svelte';
</script>

<svelte:head>
	<title>Lesson 4 - Broswers</title>
</svelte:head>

<main class="flex flex-col justify-center items-center m-auto">
	<div
		class="h-[91vh] flex flex-col items-center justify-items-center justify-center w-full border-b mb-4"
	>
		<div class="flex flex-col lg:flex-row md:items-center">
			<div class="md:mr-16">
				<p class=" tracking-wide text-[#ec598b] text-2xl">Lesson 4</p>
				<h1 class="text-6xl text-slate-800 font-semibold">
					Browsers<span class="text-[#3549A6]">.</span>
				</h1>
				<p class="pt-3.5 lg:max-w-[47ch] text-xl text-slate-600 mb-3.5">
					A web browser is an application that lets you navigate the internet. This is how you will
					access websites and online services. By using a browser, you can search for information,
					shop online, connect with others, and countless other things.
				</p>
			</div>
			<!-- svelte-ignore a11y-img-redundant-alt -->
			<img
				src="{base}/assets/browsers/browser.svg"
				alt="Browser Hero Image"
				class="md:max-w-[35rem] md:max-h-[35rem]"
			/>
		</div>
		<GetStarted />
	</div>
	<h2 class="text-slate-800 text-4xl font-semibold">
		Common Internet Browsers<span class="text-[#3549A6]">.</span>
	</h2>
	<p class="text-slate-600 my-4 text-lg">
		Below are some of the most commonly used Internet Browsers today.
	</p>
	<div class="md:grid md:grid-cols-4 w-full content-center items-center my-6">
		<div class="p-4 m-auto h-full grid">
			<div class="place-self-center">
				<img
					src="{base}/assets/browsers/Chrome_logo.svg"
					alt="Chrome Logo"
					class="max-w-[150px] h-auto m-auto"
				/>
				<h1 class=" text-center text-2xl text-slate-800 font-semibold my-4">Google Chrome</h1>
			</div>
		</div>
		<div class="p-4 m-auto h-full grid">
			<div class="place-self-center">
				<img
					src="{base}/assets/icons/Edge_logo.png"
					alt="Edge Logo"
					class="max-w-[150px] h-auto m-auto"
				/>
				<h1 class=" text-center text-2xl text-slate-800 font-semibold my-4 ">Microsoft Edge</h1>
			</div>
		</div>
		<div class="p-4 m-auto h-full grid">
			<div class="place-self-center">
				<img
					src="{base}/assets/browsers/Firefox_logo.png"
					alt="Firefox Logo"
					class="max-w-[150px] max-h-[150px] m-auto"
				/>
				<h1 class=" text-center text-2xl text-slate-800 font-semibold my-4">Firefox</h1>
			</div>
		</div>
		<div class="p-4 m-auto h-full grid">
			<div class="place-self-center">
				<img
					src="{base}/assets/browsers/Safari_logo.png"
					alt="Safari Logo"
					class="max-w-[150px] max-h-[150px] m-auto"
				/>
				<h1 class=" text-center text-2xl text-slate-800 font-semibold my-4">Safari</h1>
			</div>
		</div>
	</div>
	<hr class="my-2 mb-12 w-3/6" />
	<h2 class="text-slate-800 text-4xl font-semibold">
		Navigation Menus<span class="text-[#3549A6]">.</span>
	</h2>
	<p class="text-slate-600 my-4 text-lg">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. In magna leo, vestibulum a condimentum
		posuere, mattis id magna.
	</p>
	<div class="md:grid md:grid-cols-3 w-full content-center items-center my-6">
		<div class="p-4 m-auto h-full grid">
			<div class="place-self-center">
				<div class=" bg-gray-900 flex flex-row justify-around p-2 rounded-sm">
					<!-- svelte-ignore a11y-invalid-attribute -->
					<a
						href="#"
						aria-hidden="true"
						class="text-white py-1 px-2 mx-1 bg-blue-600 rounded hover:bg-blue-500">Example</a
					>
					<!-- svelte-ignore a11y-invalid-attribute -->
					<a href="#" class="text-white py-1 px-2 mx-1 hover:bg-blue-600 hover:rounded">Example</a>
					<!-- svelte-ignore a11y-invalid-attribute -->
					<a href="#" class="text-white py-1 px-2 mx-1 hover:bg-blue-600 hover:rounded">Example</a>
				</div>
				<h1 class=" text-2xl text-slate-800 font-semibold ">Top Nav</h1>
				<p class="text-slate-600 max-w-[45ch]">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. In magna leo, vestibulum a
					condimentum posuere, mattis id magna. Mauris pretium id eros in imperdiet.
				</p>
			</div>
		</div>
		<div class="p-4 m-auto h-full">
			<div class=" bg-gray-900 flex flex-col justify-around rounded-sm w-[300px]">
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a href="#" class="text-white py-1 px-2 bg-blue-600 hover:bg-blue-500 rounded-t-sm"
					>Example</a
				>
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a href="#" class="text-white py-1 px-2 hover:bg-blue-600">Example</a>
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a href="#" class="text-white py-1 px-2 hover:bg-blue-600 hover:rounded-b-sm">Example</a>
			</div>
			<h1 class=" text-2xl text-slate-800 font-semibold ">Side Nav</h1>
			<p class="text-slate-600 max-w-[45ch]">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. In magna leo, vestibulum a
				condimentum posuere, mattis id magna. Mauris pretium id eros in imperdiet.
			</p>
		</div>
		<div class="p-4 m-auto h-full grid">
			<div class="place-self-center">
				<Menu size={50} />
				<h1 class=" text-2xl text-slate-800 font-semibold ">Collapsed Nav</h1>
				<p class="text-slate-600 max-w-[45ch]">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. In magna leo, vestibulum a
					condimentum posuere, mattis id magna. Mauris pretium id eros in imperdiet.
				</p>
			</div>
		</div>
	</div>
	<hr class="my-2 mb-12 w-3/6" />
	<h2 class="text-slate-800 text-4xl font-semibold">
		Common Browser <span class="text-[#ec598b]">Elements</span>
	</h2>
	<p class="text-slate-600 my-4 text-lg">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. In magna leo, vestibulum a condimentum
		posuere, mattis id magna.
	</p>
	<div class="md:grid md:grid-cols-3 w-full my-6">
		<div class="flex flex-col p-4 m-auto h-full">
			<div class="p-2 w-[300px] border border-gray-800 rounded-sm flex flex-row">
				<Search size={25} />
				<p class="text-slate-600 text-lg mx-2">Search</p>
			</div>
			<h1 class=" text-3xl text-slate-800 font-semibold ">Search Bar</h1>
			<p class="text-slate-600 max-w-[45ch]">
				The <span class="text-[#ec598b]">search bar</span> is a text box that lets you search a website
				or the internet for information. Typically the textbox will have a magnifying glass as an icon.
			</p>
		</div>

		<div class="flex flex-col p-4 m-auto h-full">
			<div class="overflow-x-scroll w-[300px] h-[46px] border border-gray-800 rounded-sm">
				<p class="whitespace-nowrap text-white w-full cursor-default">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac risus ut neque laoreet
					consequat vitae eget justo.
				</p>
			</div>
			<h1 class=" text-3xl text-slate-800 font-semibold ">Scroll Bar</h1>
			<p class="text-slate-600 max-w-[45ch]">
				A <span class="text-[#ec598b]">scroll bar</span> is a visual representation of how far down a
				webpage you are. They are typically shown as a thin dark colored bar.
			</p>
		</div>

		<div class="flex flex-col p-4 m-auto h-full">
			<div
				class="h-[46px] w-[300px] bg-gray-600 text-white flex flex-row justify-around items-center rounded-sm border-b-4 border-gray-800"
			>
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a
					href="#"
					class=" bg-gray-800 w-full text-center align-middle leading-[42px] rounded-tr-lg drop-shadow-md"
					>Example</a
				>
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a
					href="#"
					class="w-full text-center hover:leading-[42px] hover:rounded-t-lg hover:bg-gray-700"
					>Example</a
				>
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a
					href="#"
					class="w-full text-center hover:leading-[42px] hover:rounded-tl-lg hover:bg-gray-700"
					>Example</a
				>
			</div>
			<h1 class=" text-3xl text-slate-800 font-semibold ">Tabs</h1>
			<p class="text-slate-600 max-w-[45ch]">
				Many browsers use <span class="text-[#ec598b]">tabs</span> to help moving back and forth between
				multiple webpages quick and easy.
			</p>
		</div>
	</div>

	<div class="md:grid md:grid-cols-3 w-full justify-center items-center my-6">
		<div class="flex flex-col p-4 m-auto h-full">
			<ArrowLeftRight size={65} />
			<h1 class=" text-3xl text-slate-800 font-semibold ">Arrows</h1>
			<p class="text-slate-600 max-w-[45ch]">
				These are the <span class="text-[#ec598b]">navigation arrows</span>. The back arrow will
				take you back to the previous webpage you were on if possible. The forward arrow will return
				you to the page you were on before.
			</p>
		</div>

		<div class="flex flex-col p-4 m-auto h-full">
			<Bookmark size={65} />
			<h1 class=" text-3xl text-slate-800 font-semibold ">Bookmarks</h1>
			<p class="text-slate-600 max-w-[45ch]">
				<span class="text-[#ec598b]">Bookmarks</span> are a very useful feature of browsers that allow
				you to remember web pages you like to go to often.
			</p>
		</div>

		<div class="flex flex-col p-4 m-auto h-full">
			<RotateCw size={65} />
			<h1 class=" text-3xl text-slate-800 font-semibold ">Refresh</h1>
			<p class="text-slate-600 max-w-[45ch]">
				This is a <span class="text-[#ec598b]">refresh</span> button, it can be found on most browsers,
				and it is usually shown by an arrow circling back on itself.
			</p>
		</div>
	</div>
</main>
<section class="flex items-center justify-center my-5">
	<NextLesson lessonNumber={'4'} nextPageLink="/safety" />
</section>
