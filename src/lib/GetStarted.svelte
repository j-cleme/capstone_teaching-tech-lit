<script>
	import { ChevronDown } from 'lucide-svelte';
	function scroll() {
		window.scrollTo(0, 612);
		// onclick = "document.getElementById('features').scrollIntoView({behavior: 'smooth'})";
	}
</script>

<div class="flex flex-col items-center">
	<p class=" tracking-widest text-2xl text-slate-600 font-light mt-10">GET STARTED</p>
	<div aria-hidden="true" on:click={scroll} on:keypress={scroll} class="animate-bounce py-4">
		<ChevronDown size={50} style="color:rgb(71, 85, 105);" />
	</div>
</div>
