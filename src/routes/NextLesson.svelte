<script lang="ts">
	import { browser } from '$app/environment';

	export let lessonNumber: string;
	export let nextPageLink: string;

	function complete() {}

	let completeLessons: string;
	if (browser) {
		completeLessons = localStorage.getItem('completeLessons');
	}

	export const lessonComplete = (lessonNumber: string): void => {
		console.log('called lessonComplete');
		if (browser) {
			if (localStorage.getItem('completeLessons') === null) {
				completeLessons = '';
				localStorage.setItem('completeLessons', completeLessons);
			} else {
				completeLessons = localStorage.getItem('completeLessons');
				return;
			}
			if (completeLessons.includes(lessonNumber)) {
				return;
			}
			completeLessons = completeLessons.concat(this, lessonNumber);
			localStorage.setItem('completeLessons', completeLessons);
		}
	};
</script>

<a
	on:click={complete}
	href={nextPageLink}
	class="bg-[#3549A6] text-xl font-semibold text-white py-2 px-4 rounded border-b-4 border-blue-900 border-r-4"
>
	Lesson {lessonNumber} <span>&#10148;</span>
</a>
