<template>
	<main class="faq">
		<h1>Frenquently Asked Questions</h1>
		
		<div class="error" v-if="hasRemoteErrors">
			Cant't load the Questions
		</div>
		
		<Loading v-if="remoteDataBusy" />
		
		<section class="list">
			<article v-for="question in questionList">
				<h2 v-html="question.title"></h2>
				<p v-html="question.content"></p>
			</article>
		</section>
	</main>
</template>

<script>
	import RemoteData from '../mixins/RemoteData.js'
	
	export default{
		mixins:[
			RemoteData({
				questionList:'questions',
			}),
		],		
	}
</script>

<style>
</style>
