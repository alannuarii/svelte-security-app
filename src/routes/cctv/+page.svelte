<script>
	import Buttons from "../Buttons.svelte";
	let kondisi = false;
	let lokasi = false;

	const button = {
		type1: 'reset',
		type2: 'submit',
		button1: 'Reset',
		button2: 'Kirim'
	};
</script>

<section class="p-3">
	<div>
		<form>
			<div class="mb-3">
				<label for="" class="form-label">Nama Security</label>
				<div class="form-check">
					<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
					<label class="form-check-label" for="flexCheckDefault"> Default checkbox </label>
				</div>
				<div class="form-check">
					<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
					<label class="form-check-label" for="flexCheckChecked"> Checked checkbox </label>
				</div>
			</div>
			<div class="mb-3">
				<label for="exampleRadios1" class="form-label">Lokasi Pantau</label>
				<div class="form-check">
					<input
						class="form-check-input"
						type="radio"
						name="lokasi"
						id="exampleRadios1"
						value="Semua"
						bind:group={lokasi}
					/>
					<label class="form-check-label" for="exampleRadios2"> Semua Titik</label>
				</div>
				<div class="form-check">
					<input
						class="form-check-input"
						type="radio"
						name="lokasi"
						id="exampleRadios2"
						value="Tertentu"
						bind:group={lokasi}
					/>
					<label class="form-check-label" for="exampleRadios1"> Titik Tertentu </label>
				</div>
				{#if lokasi === 'Tertentu'}
					<div>
						<input class="form-control" type="text" />
					</div>
				{/if}
			</div>
			<div class="mb-3">
				<label for="exampleRadios1" class="form-label">Kondisi</label>
				<div class="form-check">
					<input
						class="form-check-input"
						type="radio"
						name="kondisi"
						id="exampleRadios1"
						value="Aman"
						bind:group={kondisi}
					/>
					<label class="form-check-label" for="exampleRadios2"> Aman </label>
				</div>
				<div class="form-check">
					<input
						class="form-check-input"
						type="radio"
						name="kondisi"
						id="exampleRadios2"
						value="Tidak Aman"
						bind:group={kondisi}
					/>
					<label class="form-check-label" for="exampleRadios1"> Tidak Aman </label>
				</div>
				{#if kondisi === 'Tidak Aman'}
					<div>
						<input class="form-control" type="text" />
					</div>
				{/if}
			</div>

			<Buttons {...button} />
		</form>
	</div>
</section>
