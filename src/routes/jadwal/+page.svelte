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
	<div class="border p-3 text-center mb-2">
		<h6 class="mb-3"><i class="bi-moon-stars me-2" /> Piket Malam</h6>
		<div class="border p-2 mb-2">
			<h6><i class="bi-person-circle me-2" /> Imran Mokodompit</h6>
		</div>
		<div class="border p-2">
			<h6><i class="bi-person-circle me-2" /> Imran Mokodompit</h6>
		</div>
	</div>
	<div class="border p-3 text-center mb-2">
		<h6 class="mb-3"><i class="bi-moon-stars me-2" /> Piket Malam</h6>
		<div class="border p-2 mb-2">
			<h6><i class="bi-person-circle me-2" /> Imran Mokodompit</h6>
		</div>
		<div class="border p-2">
			<h6><i class="bi-person-circle me-2" /> Imran Mokodompit</h6>
		</div>
	</div>
	<div class="border p-3 text-center mb-2">
		<h6 class="mb-3"><i class="bi-moon-stars me-2" /> Piket Malam</h6>
		<div class="border p-2 mb-2">
			<h6><i class="bi-person-circle me-2" /> Imran Mokodompit</h6>
		</div>
		<div class="border p-2">
			<h6><i class="bi-person-circle me-2" /> Imran Mokodompit</h6>
		</div>
	</div>
</section>

<style>
	h6 {
		font-size: 12px;
		margin-bottom: -1px;
	}
</style>
