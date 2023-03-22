<script>
	import { ChevronDown, User, Lock } from 'lucide-svelte';
	import NextLesson from '../NextLesson.svelte';
</script>

<svelte:head>
	<title>Lesson 5 - Safety</title>
</svelte:head>

<main class="flex flex-col justify-center m-auto">
	<div class="h-[91vh] flex flex-col items-center justify-items-center justify-center w-full">
		<div class="flex flex-col md:flex-row lg:items-center">
			<div class="mr-16">
				<p class=" tracking-wide text-[#ec598b] text-2xl">Lesson 5</p>
				<h1 class="text-6xl text-slate-800 font-semibold">
					Safety<span class="text-[#3549A6]">.</span>
				</h1>
				<p class="pt-3.5 lg:max-w-[47ch] text-xl text-slate-600 mb-3.5">Blurb about Safety</p>
			</div>
			<!-- svelte-ignore a11y-img-redundant-alt -->
			<img
				src="assets/safety/safety.svg"
				alt="Safety Hero Image"
				class="max-w-[28rem] max-h-[28rem]"
			/>
		</div>
		<div class="flex flex-col items-center">
			<p class=" tracking-widest text-2xl text-slate-600 font-light mt-10">GET STARTED</p>
			<ChevronDown size={50} style="color:rgb(71, 85, 105);" />
		</div>
	</div>
	<div class="flex flex-row jusify-center w-full items-center justify-center">
			<div class="flex flex-col p-4">
				<div class="p-2 w-[300px] border border-gray-800 rounded-sm flex flex-row items-center">
					<Lock size={40} />
					<p class="text-slate-600 text-lg mx-2">Password</p>
				</div>
				<h1 class=" text-3xl text-slate-800 font-semibold ">Passwords</h1>
				<p class="text-slate-600 max-w-[60ch]">
					It is important to create <span class="text-[#ec598b]">strong</span> passwords on websites that have your personal
					information. Don't use the same password for multiple websites, because if one is compromised they
					all are! The easiest way to keep your passwords safe is to write them down, you can't hack
					paper!
				</p>
			</div>

			
			<div class="flex flex-col p-4">
				<User size={58} class=""/>
				<h1 class=" text-3xl text-slate-800 font-semibold ">Personal Info</h1>
				<p class="text-slate-600 max-w-[60ch]">
					Unless you are on a website you <span class="text-[#ec598b]">trust</span>, it's safer not to submit your personal
					information, also it's important to know that personal information can be faked by others.
					Remember, what you put on the internet is always available on the internet.
				</p>
			</div>
	</div>
	<p>
		Personal Info - Unless you are on a website you trust, it's safer not to submit your personal
		information, also it's important to know that personal information can be faked by others.
		Remember, what you put on the internet is always available on the internet.
	</p>
	<p>
		Passwords - It is important to create strong passwords on websites that have your personal
		information. Most websites have requirements for passwords including numbers capitalization and
		symbols. Don't use the same password for multiple websites, because if one is compromised they
		all are! The easiest way to keep your passwords safe is to write them down, you can't hack
		paper. Also there are online services called password managers that can make the creation and
		storage of passwords much easier for you. When it comes to passwords, longer is better.
	</p>
	<p>
		Lock icon - This is a lock icon, when seen on the search bar in most browsers it means that the
		webpage you are on is a secure connection, and you're not being monitored by a third party..
	</p>
	<p>
		Ads - internet ads are on every webpage, most are on the sides of the pages, or snuck into the
		middle of a webpage. You can usually tell it's an ad, because it is trying to sell you something
		unrelated to what you are currently doing, or trying to make you click on it. Ads very often
		have malware attached to them, if you see something you want to buy or investigate it is safer
		to google search it.
	</p>
	<p>
		Cookies - Cookies are internet files that track what you do on the internet. THESE ARE NOT BAD
		THINGS. Cookies are typically used to keep you logged into websites without you having to
		re-login on every page. They can be used by certain websites and advertisers to give you ads and
		information based on your personal browsing history, many sites require your consent for this.
	</p>
	<p>
		Pop ups - A pop up is usually an ad on a webpage used to trick you into clicking it so it can
		put malware on your computer. It is OK to click the X button on the browser window it appears
		on.
	</p>
	<p>
		Phishing - Phishing is one of the most common internet scams, usually in an email or some other
		form of internet communication, you might receive a message claiming to be your boss, friend or
		family member. They then either ask for money, gift cards, passwords, or other sensitive
		information. It is always good to double check through other means of communication if you
		expect a message might be a phishing attempt.
	</p>
	<p>Uninstalling extensions browser</p>
</main>
<section class="flex items-center justify-center my-5">
	<NextLesson lessonNumber={'5'} nextPageLink="/" />
</section>
