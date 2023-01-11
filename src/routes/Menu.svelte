<script>
	import guestbook from '../lib/img/guestbook.png';
	import patrol from '../lib/img/patrol.png';
	import apel from '../lib/img/apel.png';
	import cctv from '../lib/img/cctv.png';

	const icons = [
		{
			img: guestbook,
			name: 'Buku Tamu'
		},
		{
			img: patrol,
			name: 'Patroli'
		},
		{
			img: apel,
			name: 'Apel'
		},
		{
			img: cctv,
			name: 'CCTV'
		}
	];
</script>

<section id="menu" class="mt-1">
	<div class="container text-center px-3">
		<div class="row row-cols-2 gy-4">
			{#each icons as icon}
				<div class="col flex-column d-flex align-items-center">
					<div class="icon-box border shadow">
						<a href="/patroli"><img src={icon.img} class="img-fluid" alt="" /></a>
					</div>
					<h6>{icon.name}</h6>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	#menu {
		overflow: hidden;
	}
	#menu .icon-box {
		padding: 30px 20px;
		transition: ease-in-out 0.3s;
		/* border: 1px solid rgba(255, 255, 255, 0.3); */
		/* height: 100%; */
		width: 130px;
		text-align: center;
		border-radius: 20px 50px;
	}
	#menu h6 {
		font-weight: 300;
		font-size: 20px;
		margin-top: 15px;
	}
</style>
