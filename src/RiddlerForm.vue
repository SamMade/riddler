<template>
	<div>
		<h1>{{ msg }}</h1>
		<riddler-text id="fname" label="First Name"></riddler-text>
	</div>
</template>

<script>
import riddlerText from './components/form/text';
export default {
	name: 'riddlerForm',
	data () {
		return {
			msg: 'Start Form'
		};
	},
	components: {
		riddlerText
	}
};
</script>

<style>
</style>