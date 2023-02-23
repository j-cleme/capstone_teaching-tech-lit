<script>
	import { Settings, MoveHorizontal, Grab, TextCursor, Pointer, MousePointer, Maximize, Minimize, X, Mouse } from 'lucide-svelte';
</script>

<div class="hero">
	<div class="content-area">
		<h1 class="text-white" id="Icons">Lesson - Icons</h1>
	</div>
</div>
<div class="content-area">
	<div class="mt-10 mb-4">
		<p class="text-xl font-thin">
			To start lets go over the most common icons, some of these appeared in the pamphlet but lets go
			over them again.
		</p>
		<br/>
	<p class="text-xl font-thin">In the top left or right corner of any program there will likely be three icons:</p>
	</div>
	<div
		class=" m-auto inline-grid grid-cols-1 lg:grid-cols-3 grid-rows-3 lg:grid-rows-1 items-center justify-around my-4"
		style="height: 300px;"
	>
		<div class="cards rounded overflow-hidden shadow border py-2 px-2 h-full">
			<div class="">
			<div class="font-bold text-3xl py-4 mb-2 text-gray-800">Close</div>
			<X size="64" class="responsive"/>
			</div>
			<div class="pt-2 pb-4">
				<p>
					This will close the program.
				</p>
			</div>
		</div>
		<div class="cards rounded overflow-hidden shadow border py-2 px-2 h-full">
			<div class="">
			<div class="font-bold text-3xl py-4 mb-2 text-gray-800">Maximize</div>
			<Maximize size="64" class="responsive"/>
			</div>
			<div class="pt-2 pb-4">
				<p>
					This will make the window full screen or exit full screen.
				</p>
			</div>
		</div>
		<div class="cards rounded overflow-hidden shadow border py-2 px-2 h-full">
			<div class="">
			<div class="font-bold text-3xl py-4 mb-2 text-gray-800">Minimize</div>
			<Minimize size="64" class="responsive"/>
			</div>
			<div class="pt-2 pb-4">
				<p>
					This will minimize the program.
				</p>
			</div>
		</div>
	</div>
	<hr class="my-10"/>
	<h1 class="text-5xl md:text-6xlmd:text-left font-semibold mb-2" style="color: #3549A6;">
		Cursors
	</h1>
	<p class="text-xl font-thin mt-4 mb-6">
		The cursor is the icon that moves around the screen with your mouse or trackpad. It has many
		different icons that each mean something different.
	</p>
	<div class="px-7 py-4 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6 my-4">
		<MousePointer size="64"/>
		<div class="space-y-2">
		  <p class="text-xl font-bold text-slate-800">Cursor Arrow</p>
		  <p class="text-lg font-thin">
			This is the default cursor icon.
		</p>
		</div>
	  </div>
	  <div class="px-7 py-4 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6 my-4">
		<Pointer size="64"/>
		<div class="space-y-2">
		  <p class="text-xl font-bold text-slate-800">Pointer</p>
		  <p class="text-lg font-thin">
			This looks like a little hand pointing its finger and usually denotes an option to select.
		</p>
		</div>
	  </div>
	  <div class="px-7 py-4 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6 my-4">
		<TextCursor size="64"/>
		<div class="space-y-2">
		  <p class="text-xl font-bold text-slate-800">Type</p>
		  <p class="text-lg font-thin">
			This icon means this space is for typing.
		</p>
		</div>
	  </div>
	  <div class="px-7 py-4 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6 my-4">
		<Grab size="64"/>
		<div class="space-y-2">
		  <p class="text-xl font-bold text-slate-800">Hand / Grab</p>
		  <p class="text-lg font-thin">
			This allows you to grab by clicking and move things around.
		</p>
		</div>
	</div>
	<div class="px-7 py-4 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6 my-4">
		<MoveHorizontal size="64" class="my-auto"/>
		<div class="space-y-2">
		  <p class="text-xl font-bold text-slate-800">Resize</p>
		  <p class="text-lg font-thin">
			Arrows going in both directions in any orientation will allow you to resize an object like a window or image.
		</p>
		</div>
	</div>

	<hr class="mt-16 mb-10"/>
	<h1 class="text-5xl md:text-6xlmd:text-left font-semibold mb-2" style="color: #3549A6;">
		Additonal Icons
	</h1>

	<div class="mt-8 mb-16">
		<div class="px-7 py-4 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6 my-4">
			<Settings size="64" class="my-auto"/>
			<div class="space-y-2">
			  <p class="text-xl font-bold text-slate-800">Gear</p>
			  <p class="text-lg font-thin">
				Gear icons are used to denote settings in programs as well as for devices.
			</p>
			</div>
		</div>
	
		<div class="px-7 py-4 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6 my-4">
			<img src="/assets/logo.png" alt="The Teaching Tech Lit logo." style="width: 64px; height:64px"/>
			<div class="space-y-2">
			  <p class="text-xl font-bold text-slate-800">Site Logo</p>
			  <p class="text-lg font-thin">
				Clicking on the logo for a website will usually take you to the home page.
			</p>
			</div>
		</div>
	
		<div class="px-7 py-4 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6 my-4">
			<img src="/assets/Edge_logo.png" alt="Microsoft Edge Logo" style="width: 64px; height:64px"/>
			<div class="space-y-2">
			  <p class="text-xl font-bold text-slate-800">App Icons</p>
			  <p class="text-lg font-thin">
				App icons are unique to each app and are used to start the program.
			</p>
			</div>
		</div>
	</div>
</div>
