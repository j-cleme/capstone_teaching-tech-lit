<script lang="ts">
	import { CheckCircle2, XCircle } from 'lucide-svelte';
	import { lessonTracking } from '$lib/stores';

	export let indicatorIconSize: number;
	export let lessonNumber: string;
	let complete: boolean = false;

	const checkLessonCompletion = (): void => {
		if (completeLessons.includes(lessonNumber)) {
			complete = true;
		} else {
			complete = false;
		}
	};

	let completeLessons: string;
	lessonTracking.subscribe((value: string) => {
		completeLessons = value;
		checkLessonCompletion();
	});
</script>

<div class="flex flex-row justify-center items-center">
	<slot />
	<span class="inline-block pl-2 {complete ? 'stroke-emerald-500' : 'stroke-stone-400'}">
		{#if complete}
			<CheckCircle2 size={indicatorIconSize} color="" />
		{:else}
			<XCircle size={indicatorIconSize} color="" />
		{/if}
	</span>
</div>
