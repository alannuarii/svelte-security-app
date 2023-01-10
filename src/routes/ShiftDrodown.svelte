<script>
	const securities = [
		'Imran Mokodompit',
		'Faisal Manopode',
		'Karter Tanduk',
		'Jerry Legoh',
		'Michael Baranoy',
		'Jonly Tulandi'
	];
</script>

<ul class="dropdown-menu p-3">
	{#each securities as sec}
		<li class="py-2"><i class="bi-person-circle me-1" /> {sec}</li>
	{/each}
</ul>

<style>
	.dropdown-menu {
		margin-top: 10px;
		margin-left: -130px;
        width: 200px;
	}
</style>
