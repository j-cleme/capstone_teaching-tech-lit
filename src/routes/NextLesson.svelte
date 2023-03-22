<script lang="ts">
	import { lessonTracking } from '$lib/stores';

	export let lessonNumber: string;
	export let nextPageLink: string;

	let nextLessonNumber: number = +lessonNumber + 1;

	function complete() {
		lessonTracking.update((value: string) => value + lessonNumber);
		console.log('function to update value sucessfully called');
		console.log('store value:' + $lessonTracking);
	}
</script>

<a
	on:click={complete}
	href={nextPageLink}
	class="bg-[#3549A6] text-xl font-semibold text-white py-2 px-4 rounded border-b-4 border-blue-900 border-r-4"
>
	Lesson {nextLessonNumber} <span>&#10148;</span>
</a>
