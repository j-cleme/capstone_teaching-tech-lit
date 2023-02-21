<script>
	import { Maximize, Minimize, X } from 'lucide-svelte';
</script>

<main>
	<h1 id="Icons">Lesson - Icons</h1>
	<p>
		To start lets go over the most common icons, some of these appeared in the pamphlet but lets go
		over them again
	</p>

	<p>In the top left or right corner of any program there will likely be three icons:</p>
	<div class="w-4/5 m-auto grid grid-cols-3 grid-rows-1 gap-16 items-center justify-around my-8">
		<div class="flex flex-col w-full border-2 border-black rounded-lg h-80">
			<div class="flex h-40 w-full justify-center items-center">
				<X size="64" />
			</div>
			<div class="flex flex-col h-40 w-full justify-start items-start p-5 pt-0">
				<h2>Close</h2>
				<p>this will close the program.</p>
			</div>
		</div>
		<div class="flex flex-col w-full border-2 border-black rounded-lg h-80">
			<div class="flex h-40 w-full justify-center items-center">
				<Maximize size="64" />
			</div>
			<div class="flex flex-col h-40 w-full justify-start items-start p-5 pt-0">
				<h2>Maximize</h2>
				<p>this will make the window full screen or exit full screen.</p>
			</div>
		</div>
		<div class="flex flex-col w-full border-2 border-black rounded-lg h-80">
			<div class="flex h-40 w-full justify-center items-center">
				<Minimize size="64" />
			</div>
			<div class="flex flex-col h-40 w-full justify-start items-start p-5 pt-0">
				<h2>Minimize</h2>
				<p>this will minimize the program.</p>
			</div>
		</div>
	</div>
	<br />
	<hr />
	<br />
	<h2>Cursor</h2>
	<p>
		The cursor is the icon that moves around the screen with your mouse or trackpad. It has many
		different icons that each mean something different
	</p>
	<div class="">
		<img src="/assets/cursor/default.gif" alt="The default cursor icon." />
		<p class="ml-2">Cursor arrow: this is the default cursor icon</p>
	</div>

	<div class="">
		<img src="/assets/cursor/pointer.gif" alt="The pointer cursor icon." />
		<p class="ml-2">
			Pointer: this looks like a little hand pointing its finger and it usually denotes an option to
			select
		</p>
	</div>
	<div class="">
		<img src="/assets/cursor/text.gif" alt="The text input cursor icon." />
		<p class="ml-2">Type I: This icon means this space is for typing</p>
	</div>
	<div class="">
		<img src="/assets/cursor/grab.gif" alt="The grabber cursor icon." />
		<p class="ml-2">Hand: this allows you to 'grab' by clicking and move things around</p>
	</div>
	<div class="">
		<img src="/assets/cursor/resize.gif" alt="The resize cursor icon." />
		<p class="ml-2">
			Resize: arrows going in both directions in any orientation will allow you to resize an object
			like a window or image
		</p>
	</div>
	<div class="">
		<!-- TODO -->
		<img src="/assets/cursor/??????" alt="The ????? cursor icon." />
		<p class="ml-2">Arrow cross: this allows you to move things around or scroll on a page</p>
	</div>
	<br />
	<hr />
	<br />
	<h2>Other good to knows</h2>
	<div class="">
		<img src="/assets/gear.png" alt="A 'gear' or 'settings' icon." />
		<p>Gear: gear icons are used to denote settings in programs as well as for devices</p>
	</div>
	<div class="">
		<img src="/assets/logo.png" alt="The Teaching Tech Lit logo." />
		<p>
			Site logo: by clicking on the logo for a website it will usually take you to the home page
		</p>
	</div>
	<div class="">
		<img src="/assets/app.png" alt="A random selection of icons from different apps." />
		<p>App icons: app icons are unique to each app and are used to start the program</p>
	</div>
</main>
