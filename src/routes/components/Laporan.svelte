<script>
	export let path;
	export let icon;
	export let waktu;
</script>

<div class="mb-2 border p-4 ">
	<a href={path} class="shift">
		<i class="{icon} me-2" />Shift {waktu}
	</a>
</div>

<style>
	.shift {
		font-size: 18px;
		font-weight: 700;
        text-decoration: none;
        color: var(--color-text-1);
	}
</style>
