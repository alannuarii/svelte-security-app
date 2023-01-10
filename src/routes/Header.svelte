<script>
	import logo from '../lib/img/shield.png';
	import ShiftDrodown from './ShiftDrodown.svelte';
</script>

<nav class="navbar">
	<div class="container d-flex">
		<a class="navbar-brand flex-grow-1" href="/">
			<h5>SecurityApp</h5>
		</a>
		<div class="dropdown">
			<i class="bi-people me-4 " data-bs-toggle="dropdown" />
			<ShiftDrodown />
		</div>

		<a href="/"><i class="bi-box-arrow-right" /></a>
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
