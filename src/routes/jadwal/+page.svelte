<script>
	import TitleDate from '../components/TitleDate.svelte';
	import { jadwalPiket } from '../../lib/js/jadwal';


	let tanggal = new Date().toISOString().slice(0, 10);

	function handleEvent(event) {
		tanggal = event.detail;
	}

	$: console.log(jadwalPiket(tanggal));
</script>

<section class="p-3 text-center">
	<TitleDate title={'jadwal piket'} on:tanggal={handleEvent} />
</section>
