<script>
	import './styles.css';
	import Header from './Header.svelte';
	import Bottom from './Bottom.svelte';
</script>

<div>
	<Header />
	<main class="border">
		<slot />
	</main>
	<Bottom />
</div>

<style>
	main{
		height: 540px;
	}
</style>
