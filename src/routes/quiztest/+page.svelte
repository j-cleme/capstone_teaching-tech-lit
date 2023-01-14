<script>
	export let quiz = [
		{
			question: 'Which of these options is correct?',
			options: ['one', 'two', 'three', 'four'],
			answers: ['one', 'four']
		},
		{
			question: 'a very well thought out second question',
			options: ['good answer', 'bad answer', 'not good enough answer'],
			answers: ['good answer']
		}
	];
</script>

<main class="flex flex-col justify-center m-5 mx-auto justify-self-center md:w-1/2 border p-4">
	{#each quiz as question}
		<section class="min-w-full bg-neutral-200 p-4 m-4">
			<h2 class="text-lg font-semibold">Question 1</h2>
			{#each question.options as option}
				<form
					multiple
					name="q1"
					id="q1"
					class="flex flex-col justify-center items-center min-w-full"
				>
					<label for="option">{option}</label>
					<input
						type="radio"
						id={option}
						class="p-8 bg-neutral-500 border border-neutral-900 min-w-full"
					/>
				</form>
			{/each}
		</section>
	{/each}
</main>
