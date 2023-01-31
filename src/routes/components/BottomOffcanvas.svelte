<script>
	const menus = [
		{
			name: 'Jadwal Piket',
			path: '/jadwal',
			icon: 'bi-calendar3'
		},
		{
			name: 'Laporan Patroli',
			path: '/patroli/laporan',
			icon: 'bi-arrow-repeat'
		},
		{
			name: 'Laporan Apel',
			path: '/apel/laporan',
			icon: 'bi-people'
		},
		{
			name: 'Laporan CCTV',
			path: '/cctv/laporan',
			icon: 'bi-camera-video'
		},
		{
			name: 'Laporan Penerimaan Tamu',
			path: '/buku-tamu/laporan',
			icon: 'bi-person-square'
		}
	];
</script>

<div
	class="offcanvas offcanvas-bottom"
	tabindex="-1"
	id="offcanvasBottom"
	aria-labelledby="offcanvasBottomLabel"
>
	<div class="offcanvas-header shadow">
		<h5 class="offcanvas-title" id="offcanvasBottomLabel">Menu</h5>
		<button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
	</div>
	<div class="offcanvas-body small">
		<div class="list-group list-group-flush">
			{#each menus as menu}
				<a href={menu.path} class="list-group-item list-group-item-action"
					><i class="{menu.icon} me-2" /> {menu.name}</a
				>
			{/each}
		</div>
	</div>
</div>

<style>
	a {
		text-decoration: none;
		font-size: 17px;
	}
	.offcanvas {
		border-radius: 20px 20px 0 0;
		height: 350px;
	}
	.offcanvas .offcanvas-body {
		overflow: hidden;
	}
</style>
