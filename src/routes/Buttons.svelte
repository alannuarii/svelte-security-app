<script>
	export let button1;
	export let button2;
</script>

<div class="modal-footer border justify-content-center">
	<button type="button" class="btn btn-outline-secondary btn-button1" data-bs-dismiss="modal"
		>{button1}</button
	>
	<button type="button" class="btn btn-primary btn-button2">{button2}</button>
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
	}

	.btn-button1:hover {
		background: var(--color-theme-2);
		border: 1px solid var(--color-theme-2);
	}
</style>
