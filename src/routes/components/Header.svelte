<script>
	import ShiftDrodown from './ShiftDrodown.svelte';
	import ModalLogout from './ModalLogout.svelte';
	import { page } from '$app/stores';

	$: path = $page.url.pathname;

	function refresh() {
		window.location.reload();
	}
</script>

<nav class="navbar">
	<div class="container d-flex">
		{#if path === '/'}
			<a class="navbar-brand flex-grow-1" href="/">
				<h5>SecurityApp</h5>
			</a>
			<div class="dropdown">
				<i class="bi-people me-4 " data-bs-toggle="dropdown" />
				<ShiftDrodown />
			</div>

			<a href="/"
				><i class="bi-box-arrow-right" data-bs-toggle="modal" data-bs-target="#modalLogout" /></a
			>
			<ModalLogout />
		{:else}
			<a class="navbar-brand flex-grow-1" href="/">
				<h5><i class="bi-arrow-left me-2" />SecurityApp</h5>
			</a>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div on:click={refresh}><i class="bi-arrow-clockwise" /></div>
		{/if}
	</div>
</nav>

<style>
	.navbar {
		background-color: var(--color-theme-1);
		border-radius: 0 0 50px 0;
		border-bottom: 10px solid var(--color-theme-2);
	}
	.navbar i {
		color: var(--color-text-1);
		font-size: 25px;
		margin-right: 20px;
	}
	.navbar h5 {
		margin-bottom: -2px;
		margin: 0;
		margin: 0;
		font-size: 25px;
		font-weight: 900;
		font-family: 'Poppins', sans-serif;
		color: var(--color-text-1);
	}
</style>
