<script lang="ts">
	import { CheckCircle2, XCircle } from 'lucide-svelte';

	export let indicatorIconSize: number;
	export let lessonCompleted: boolean = false;
</script>

<div class="flex flex-row justify-center items-center">
	<slot />
	<span class="inline-block pl-2 {lessonCompleted ? 'stroke-emerald-500' : 'stroke-stone-400'}">
		{#if lessonCompleted}
			<CheckCircle2 size={indicatorIconSize} color="" />
		{:else}
			<XCircle size={indicatorIconSize} color="" />
		{/if}
	</span>
</div>
