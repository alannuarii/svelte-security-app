<script>
	import TitleDate from '../../components/TitleDate.svelte'

	let tanggal = '';

	function handleEvent(event) {
		tanggal = event.detail;
	}

	const guests = [
		{
			nama: 'Alan Nuari',
			instansi: 'PT PLN Nusantara Power'
		},
		{
			nama: 'Asep Kusmiadi',
			instansi: 'PT PLN Nusantara Power'
		},
		{
			nama: 'Bahar Sudrajat',
			instansi: 'PT PLN Nusantara Power'
		}
	];
</script>

<section class="p-3 text-center">
	<TitleDate title={'penerimaan tamu'} on:tanggal={handleEvent} />
	{#each guests as guest}
		<div class="row mb-2 mx-1">
			<div class="col-10 text-start border py-3 px-4">
				<h5>{guest.nama}</h5>
				<h6><i class="bi-buildings me-1" /> {guest.instansi}</h6>
			</div>
			<div class="col-2 border d-flex justify-content-center align-items-center">
				<a href="/buku-tamu/laporan/{tanggal}"><i class="bi-chevron-right" /></a>
			</div>
		</div>
	{/each}
</section>

<style>
	h6 {
		font-weight: 300;
		margin-bottom: 0px;
	}
	.bi-chevron-right{
		font-size: 25px;
		/* color: var(--color-text-2); */
	}
</style>
