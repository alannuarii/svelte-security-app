<script>
	import TitleDate from '../components/TitleDate.svelte';
	import { jadwalPiket } from '../../lib/js/jadwal';
	import { namaSecurity } from '../../lib/js/nama';
	import { onMount } from 'svelte';

	let tanggal = new Date().toISOString().slice(0, 10);
	let pagi = [];
	let sore = [];
	let malam = [];
	let jadwal = jadwalPiket(tanggal);

	function handleEvent(event) {
		tanggal = event.detail;
		pagi = [];
		sore = [];
		malam = [];
		jadwal = jadwalPiket(tanggal);
		getName();
	}

	function getName() {
		Object.entries(jadwal).forEach(([key, value]) => {
			if (value === 'p') {
				pagi.push(key);
				pagi = [...pagi];
			} else if (value === 's') {
				sore.push(key);
				sore = [...sore];
			} else if (value === 'm') {
				malam.push(key);
				malam = [...malam];
			}
		});
	}

	onMount(() => {
		getName();
	});
</script>

<section class="p-3">
	<TitleDate title={'jadwal piket'} on:tanggal={handleEvent} />
	<div class="border p-3 text-center mb-2 shadow-sm">
		<h5><i class="bi-moon-stars me-2" /> Piket Malam</h5>
		<p>(Pukul 24:00 - 08:00 WITA)</p>
		{#each malam as m}
			<div class="p-3 mb-2 bg-body-secondary">
				<h6><i class="bi-person-circle me-2" /> {namaSecurity(m)}</h6>
			</div>
		{/each}
	</div>
	<div class="border p-3 text-center mb-2 shadow-sm">
		<h5><i class="bi-moon-stars me-2" /> Piket Pagi</h5>
		<p>(Pukul 08:00 - 16:00 WITA)</p>
		{#each pagi as p}
			<div class="p-3 mb-2 bg-body-secondary">
				<h6><i class="bi-person-circle me-2" /> {namaSecurity(p)}</h6>
			</div>
		{/each}
	</div>
	<div class="border p-3 text-center mb-2 shadow-sm">
		<h5><i class="bi-moon-stars me-2" /> Piket Sore</h5>
		<p>(Pukul 16:00 - 24:00 WITA)</p>
		{#each sore as s}
			<div class="p-3 mb-2 bg-body-secondary">
				<h6><i class="bi-person-circle me-2" /> {namaSecurity(s)}</h6>
			</div>
		{/each}
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
	p {
		font-size: 10px;
		margin-top: -3px;
		margin-bottom: 10px;
	}
</style>
