<script>
	import TitleDate from '../components/TitleDate.svelte';
	import { jadwalPiket } from '../../lib/js/jadwal';

	let tanggal = new Date().toISOString().slice(0, 10);

	function handleEvent(event) {
		tanggal = event.detail;
	}

	$: console.log(jadwalPiket(tanggal));
</script>

<section class="p-3">
	<TitleDate title={'jadwal piket'} on:tanggal={handleEvent} />
	<div class="border p-3 text-center mb-2 shadow-sm">
		<h5 class="mb-3"><i class="bi-moon-stars me-2" /> Piket Malam</h5>
		<div class="p-3 mb-2 bg-dark-subtle">
			<h6><i class="bi-person-circle me-2" /> Imran Mokodompit</h6>
		</div>
		<div class="bg-dark-subtle p-3">
			<h6><i class="bi-person-circle me-2" /> Imran Mokodompit</h6>
		</div>
	</div>
	<div class="border p-3 text-center mb-2 shadow-sm">
		<h5 class="mb-3"><i class="bi-moon-stars me-2" /> Piket Malam</h5>
		<div class="bg-dark-subtle p-3 mb-2">
			<h6><i class="bi-person-circle me-2" /> Imran Mokodompit</h6>
		</div>
		<div class="bg-dark-subtle p-3">
			<h6><i class="bi-person-circle me-2" /> Imran Mokodompit</h6>
		</div>
	</div>
	<div class="border p-3 text-center mb-2 shadow-sm">
		<h5 class="mb-3"><i class="bi-moon-stars me-2" /> Piket Malam</h5>
		<div class="bg-dark-subtle p-3 mb-2">
			<h6><i class="bi-person-circle me-2" /> Imran Mokodompit</h6>
		</div>
		<div class="bg-dark-subtle p-3">
			<h6><i class="bi-person-circle me-2" /> Imran Mokodompit</h6>
		</div>
	</div>
</section>

<style>
	h5 {
		font-size: 15px;
		font-weight: 700;
	}
	h6 {
		font-size: 12px;
		margin-bottom: -1px;
	}
</style>
