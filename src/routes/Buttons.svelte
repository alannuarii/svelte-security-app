<script>
	export let type1;
	export let type2;
	export let button1;
	export let button2;
</script>

<div class="modal-footer justify-content-center mt-3">
	<button type={type1} class="btn btn-button1 me-2">{button1}</button>
	<button type={type2} class="btn btn-button2">{button2}</button>
</div>

<style>
	.btn-button2 {
		background: var(--color-theme-1);
		border: 1px solid var(--color-theme-1);
	}

	.btn-button2:hover {
		background: var(--color-theme-1-hover);
		border: 1px solid var(--color-theme-1-hover);
	}

	.btn-button1 {
		border: 1px solid var(--color-theme-2);
		color: var(--color-text-1);
	}

	.btn-button1:hover {
		background: var(--color-theme-2);
		border: 1px solid var(--color-theme-2);
		color: var(--color-text-2);
	}
</style>
