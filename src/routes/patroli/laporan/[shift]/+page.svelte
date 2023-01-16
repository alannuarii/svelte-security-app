<script>
	import alan from '../../../../lib/img/Alan Nuari.jpg';
	import xx from '../../../../lib/img/xx.jpeg';
	import xxx from '../../../../lib/img/xx.jpeg';
	import xxxx from '../../../../lib/img/xx.jpeg';

	const photos = [xx, xxx, xxxx];
</script>

<section class="p-3">
	<div class="text-center mb-4">
		<h3>LAPORAN PATROLI</h3>
		<h5>Selasa, 17 Januari 2023 Pukul 08.00</h5>
	</div>
	<div class="px-3 mb-4">
		<div class="mb-3">
			<label for="">Shift</label>
			<h6>Pagi</h6>
		</div>
		<div class="mb-3">
			<label for="">Lokasi Patroli</label>
			<h6>ULPLTD Kotamobagu</h6>
		</div>
		<div class="mb-3">
			<label for="">Kondisi</label>
			<h6>Aman</h6>
		</div>
		<div class="mb-3 text-center">
			<label for="" class="mb-1">Petugas Patroli</label>
			<img src={alan} alt="" class="img-thumbnail rounded-5 p-3" />
			<h6 class="mt-2">Imran Mokodompit</h6>
		</div>
	</div>
	<div class="px-2 text-center">
		<label for="" class="mb-1">Dokumentasi</label>
		{#each photos as photo}
			<img src={photo} class="img-fluid mb-2 rounded-4" alt="" />
		{/each}
	</div>
</section>

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
		font-weight: 600;
	}
</style>
