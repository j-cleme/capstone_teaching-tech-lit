<script>
	import { ChevronDown } from 'lucide-svelte';
	function scroll() {
		window.scrollTo(0, 612);
	}
</script>

<div class="flex flex-col items-center">
	<p class=" tracking-widest text-2xl text-slate-600 font-light mt-10">LEARN MORE</p>
	<div on:click={scroll} on:keypress={scroll} class="animate-bounce py-4">
		<ChevronDown size={50} style="color:rgb(71, 85, 105);" />
	</div>
</div>
