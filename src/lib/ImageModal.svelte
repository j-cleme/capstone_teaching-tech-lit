<script lang="ts">
	import { base } from '$app/paths';
	import { closeModal } from 'svelte-modals';

	/** provided by <Modals /> */
	export let isOpen: boolean;

	/** Name of the image file (including extension) in the assets folder. */
	export let image: string;
	/** Caption to caption the image with. */
	export let caption: string;
</script>

{#if isOpen}
	<div
		role="dialog"
		class="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center pointer-events-none"
	>
		<div
			on:click={closeModal}
			on:keypress={closeModal}
			class="min-h-fit min-w-fit rounded-md p-4 bg-white flex flex-col justify-between pointer-events-auto"
		>
			<img src="{base}/assets/{image}" alt="" class="scale-150" />
			<p class="text-center mt-4 select-none">{caption}</p>
		</div>
	</div>
{/if}
