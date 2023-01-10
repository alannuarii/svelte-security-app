<script>
	import './styles.css';
	import Header from './Header.svelte';
	import Bottom from './Bottom.svelte';
</script>

<div>
	<Header />
	<main>
		<slot />
	</main>
	<Bottom />
</div>

<style>
</style>
