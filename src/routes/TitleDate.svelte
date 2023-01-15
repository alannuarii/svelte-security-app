<script>
	export let title;
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let tanggal = '';

	function selectDate(event) {
		tanggal = event.target.value;
		dispatch('tanggal', tanggal);
	}
</script>

<div class="mb-4">
	<h3>LAPORAN {title.toUpperCase()}</h3>
	<h5><i class="bi-calendar3 me-2" /> {tanggal}</h5>
</div>
<form action="" class="mb-4">
	<h6>Masukkan tanggal {title}</h6>
	<input type="date" class="form-control" on:change={selectDate} />
</form>

<style>
	h3 {
		color: var(--color-theme-1);
		font-weight: 900;
	}
	h5 {
		font-size: 18px;
		color: var(--color-theme-2);
	}
	h6 {
		font-weight: 300;
	}
</style>
