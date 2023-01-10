<script>
	import BottomOffcanvas from './BottomOffcanvas.svelte';
</script>

<nav class="navbar fixed-bottom">
	<div class="container position-relative">
		<a href="/"><i class="camera bi-camera-fill" /></a>
		<div
			class="menu"
			data-bs-toggle="offcanvas"
			data-bs-target="#offcanvasBottom"
			aria-controls="offcanvasBottom"
		>
			<i class="bi-three-dots" />
		</div>
		<BottomOffcanvas />
	</div>
</nav>

<style>
	.navbar {
		background-color: var(--color-theme-1);
		height: 50px;
		border-radius: 50px 0 0 0;
	}
	.navbar .camera {
		font-size: 40px;
		color: var(--color-text-1);
		background: var(--color-theme-1);
		position: absolute;
		bottom: -20px;
		left: 70%;
		border-radius: 50%;
		border: 15px solid var(--color-text-2);
		padding: 10px 20px;
	}
	.navbar .menu {
		position: absolute;
		left: 35%;
		font-size: 35px;
		text-decoration: none;
		color: var(--color-text-1);
	}
</style>
