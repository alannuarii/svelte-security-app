<script>
	import '../lib/css/styles.css';
	import Header from './Header.svelte';
</script>

<div id="master">
	<Header />
	<main>
		<slot />
	</main>
</div>

<style>
	#master {
		overflow-x: hidden;
		overflow-y: auto;
	}
</style>
