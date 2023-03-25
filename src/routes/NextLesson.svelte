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
	class="bg-[#3549A6] text-xl font-semibold text-white py-2 px-4 rounded border-b-4 border-blue-900 border-r-4"
>
	{textDisplay} <span>&#10148;</span>
</a>
