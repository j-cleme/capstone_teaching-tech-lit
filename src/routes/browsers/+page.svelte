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
		class="h-[91vh] md:mt-0 mt-10 flex flex-col items-center justify-items-center justify-center w-full border-b mb-4"
	>
		<div class="flex flex-col md:flex-row md:items-center">
			<div class="md:mr-16">
				<p class=" tracking-wide text-[#ec598b] text-2xl">Lesson 4</p>
				<h1 class="text-6xl text-slate-800 font-semibold">Browsers</h1>
				<p class="pt-3.5 md:max-w-[47ch] text-xl text-slate-600 mb-3.5">
					A web browser is an application that lets you navigate the internet. This is how you will
					access websites and online services. By using a browser, you can search for information,
					shop online, connect with others, and countless other things.
				</p>
			</div>
			<!-- svelte-ignore a11y-img-redundant-alt -->
			<img
				src="{base}/assets/browsers/browser.svg"
				alt="Browser Hero Image"
				class="md:max-w-[35rem] md:max-h-[35rem] w-5/6 h-auto"
			/>
		</div>
		<GetStarted />
	</div>
	<h2 class="text-slate-800 text-4xl font-semibold">
		Common Internet <span class="text-[#ec598b]">Browsers</span>
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
		Navigation <span class="text-[#ec598b]">Menus</span>
	</h2>
	<p class="text-slate-600 my-4 text-lg max-w-[110ch] md:text-center">
		Navigation menus are an important part of using a website. They provide a way to quickly move
		between different sections and pages. There are a few different ways that navigation menus can
		look and be used.
	</p>
	<div class="md:grid md:grid-cols-3 w-full content-center items-center my-6">
		<div class="p-4 m-auto h-full grid">
			<div class="place-self-center">
				<div class=" bg-gray-900 flex flex-row justify-around p-2 rounded-sm md:w-full w-fit">
					<!-- svelte-ignore a11y-invalid-attribute -->
					<p
						aria-hidden="true"
						class="text-white py-1 px-2 mx-1 bg-blue-600 rounded hover:bg-blue-500 cursor-pointer"
					>
						Example
					</p>
					<!-- svelte-ignore a11y-invalid-attribute -->
					<p class="text-white py-1 px-2 mx-1 hover:bg-blue-600 hover:rounded cursor-pointer">
						Example
					</p>
					<!-- svelte-ignore a11y-invalid-attribute -->
					<p class="text-white py-1 px-2 mx-1 hover:bg-blue-600 hover:rounded cursor-pointer">
						Example
					</p>
				</div>
				<h1 class=" text-2xl text-slate-800 font-semibold ">Top Nav</h1>
				<p class="text-slate-600 max-w-[45ch]">
					This menu is <span class="text-[#ec598b]">located at the top of the webpage</span> and typically
					has the most important sections of the website. This menu can include other drop-down options
					within it for more specific subcategories.
				</p>
			</div>
		</div>
		<div class="p-4 m-auto h-full">
			<div class=" bg-gray-900 flex flex-col justify-around rounded-sm md:w-[300px] w-[250px]">
				<!-- svelte-ignore a11y-invalid-attribute -->
				<p class="text-white py-1 px-2 bg-blue-600 hover:bg-blue-500 rounded-t-sm cursor-pointer">
					Example
				</p>
				<!-- svelte-ignore a11y-invalid-attribute -->
				<p class="text-white py-1 px-2 hover:bg-blue-600 cursor-pointer">Example</p>
				<!-- svelte-ignore a11y-invalid-attribute -->
				<p class="text-white py-1 px-2 hover:bg-blue-600 hover:rounded-b-sm cursor-pointer">
					Example
				</p>
			</div>
			<h1 class=" text-2xl text-slate-800 font-semibold ">Side Nav</h1>
			<p class="text-slate-600 max-w-[45ch]">
				This type of navigation is very similar to a top navigation bar but is <span
					class="text-[#ec598b]">located on the side of the webpage</span
				> and can be used to go through different parts or sections of a website. This type of menu is
				usually used to show a lot of similar content or on websites with multiple levels of menus.
			</p>
		</div>
		<div class="p-4 m-auto h-full grid">
			<div class="place-self-center">
				<Menu size={50} />
				<h1 class=" text-2xl text-slate-800 font-semibold ">Collapsed Nav</h1>
				<p class="text-slate-600 max-w-[45ch]">
					This type of menu is often hidden away until you try to use it. This menu tends to look
					like <span class="text-[#ec598b]">three horizontal lines stacked onto each other</span> that
					can be clicked to show navigation options. Collapsed navigation icons tend to be in the upper
					corners of a webpage and are very common on mobile devices.
				</p>
			</div>
		</div>
	</div>
	<hr class="my-2 mb-12 w-3/6" />
	<h2 class="text-slate-800 text-4xl font-semibold">
		Common Browser <span class="text-[#ec598b]">Elements</span>
	</h2>
	<p class="text-slate-600 my-4 text-lg max-w-[110ch] text-center">
		When browsing the internet there are some things that can help you navigate easier. Knowing what
		they look like and do will help you become more familiar and comfortable with any website.
	</p>
	<div class="md:grid md:grid-cols-3 w-full my-6">
		<div class="flex flex-col p-4 m-auto h-full">
			<label class="relative block">
				<span class="sr-only">Search</span>
				<span class="absolute inset-y-0 left-0 flex items-center pl-2">
					<Search size={40} />
				</span>
				<input
					class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-14 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm h-[60px] w-[300px]"
					placeholder="Search for anything..."
					type="text"
					name="search"
				/>
			</label>
			<h1 class=" text-3xl text-slate-800 font-semibold ">Search Bar</h1>
			<p class="text-slate-600 max-w-[45ch]">
				The <span class="text-[#ec598b]">search bar</span> is a text box that lets you search a website
				or the internet for information. Typically the textbox will have a magnifying glass as an icon.
			</p>
		</div>

		<div class="flex flex-col p-4 m-auto h-full">
			<div
				class="overflow-x-scroll md:w-[300px] w-[250px] h-[46px] border border-gray-800 rounded-sm"
			>
				<p class="whitespace-nowrap w-full cursor-default">
					This is an example of a scrollbar! Usually they're vertically aligned and on the side of
					the webpage but in this case it's a horizontal scrollbar for text!
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
				class="h-[46px] md:w-[300px] w-[250px] bg-gray-600 text-white flex flex-row justify-around items-center rounded-sm border-b-4 border-gray-800"
			>
				<!-- svelte-ignore a11y-invalid-attribute -->
				<p
					class=" bg-gray-800 w-full text-center align-middle leading-[42px] rounded-tr-lg drop-shadow-md cursor-pointer"
				>
					Example
				</p>
				<!-- svelte-ignore a11y-invalid-attribute -->
				<p
					class="w-full text-center hover:leading-[42px] hover:rounded-t-lg hover:bg-gray-700 cursor-pointer"
				>
					Example
				</p>
				<!-- svelte-ignore a11y-invalid-attribute -->
				<p
					class="w-full text-center hover:leading-[42px] hover:rounded-tl-lg hover:bg-gray-700 cursor-pointer"
				>
					Example
				</p>
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
