<script>
	$: shifts = [
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
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	{#each shifts as shift}
		<div class="mb-2">
			<div class="border p-4 shift" data-bs-toggle="collapse" data-bs-target="#{shift.waktu}">
				<i class="{shift.icon} me-2" />Shift {shift.waktu}
			</div>
			<div class="collapse mb-3" id={shift.waktu}>
				<div class="list-group">
					<a href="/" class="list-group-item list-group-item-action p-3">A second link item</a>
					<a href="/" class="list-group-item list-group-item-action p-3">A third link item</a>
					<a href="/" class="list-group-item list-group-item-action p-3">A fourth link item</a>
				</div>
			</div>
		</div>
	{/each}
</section>

<style>
    .shift{
        font-size: 18px;
        font-weight: 700;
    }
</style>
