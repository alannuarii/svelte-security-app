<script>
	import TitleDate from '../../TitleDate.svelte';
	const shifts = [
		{
			waktu: 'Malam',
			path: '/buku-tamu',
			icon: 'bi-moon-stars',
			hours: ['00:00 – 02:59', '03:00 – 05:59', '06:00 – 07:59']
		},
		{
			waktu: 'Pagi',
			path: '/patroli',
			icon: 'bi-sun',
			hours: ['08:00 – 10:59', '11:00 – 13:59', '14:00 – 15:59']
		},
		{
			waktu: 'Sore',
			path: '/apel',
			icon: 'bi-sunset',
			hours: ['16:00 – 18:59', '19:00 – 21:59', '22:00 – 23:59']
		}
	];
</script>

<section class="p-3 text-center">
	<TitleDate title={'patroli'} />
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	{#each shifts as shift}
		<div class="mb-2">
			<div class="border p-4 shift" data-bs-toggle="collapse" data-bs-target="#{shift.waktu}">
				<i class="{shift.icon} me-2" />Shift {shift.waktu}
			</div>
			<div class="collapse mb-3" id={shift.waktu}>
				<div class="list-group">
					{#each shift.hours as hour}
						<a href="/" class="list-group-item list-group-item-action p-3">Pukul {hour} WITA</a>
					{/each}
				</div>
			</div>
		</div>
	{/each}
</section>

<style>
	.shift {
		font-size: 18px;
		font-weight: 700;
		color: var(--color-text-1);
	}
</style>
