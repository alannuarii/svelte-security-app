<script>
	import Laporan from '../../Laporan.svelte';
	// import TitleDate from '../../TitleDate.svelte';

	const shifts = [
		{
			waktu: 'Malam',
			path: '/buku-tamu',
			icon: 'bi-moon-stars'
		},
		{
			waktu: 'Pagi',
			path: '/patroli',
			icon: 'bi-sun'
		},
		{
			waktu: 'Sore',
			path: '/apel',
			icon: 'bi-sunset'
		}
	];
</script>

<section class="p-3 text-center">
	<!-- <TitleDate title={'pemantauan CCTV'} /> -->
	{#each shifts as shift}
		<Laporan path={shift.path} icon={shift.icon} waktu={shift.waktu} />
	{/each}
</section>
