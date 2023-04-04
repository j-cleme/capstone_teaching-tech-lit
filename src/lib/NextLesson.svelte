<script lang="ts">
	import { lessonTracking } from '$lib/stores';
	import { base } from '$app/paths';

	export let lessonNumber: string;
	export let nextPageLink: string;

	let nextLessonNumber: number = +lessonNumber + 1;
	let textDisplay: string = 'Lesson ' + nextLessonNumber;
	if (nextLessonNumber == 6) {
		textDisplay = 'Back to Home';
	}

	function complete() {
		lessonTracking.update((value: string) => value + lessonNumber);
	}
</script>

<a
	on:click={complete}
	href={base + nextPageLink}
	class="group inline-flex whitespace-nowrap rounded-md bg-[#ec598a] text-xl font-semibold text-white py-2 px-3 -translate-x-1 -translate-y-1 hover:translate-x-0 hover:translate-y-0 items-center justify-center transition duration-100"
>
	{textDisplay} <span class="pl-2">&#10148;</span>
</a>
