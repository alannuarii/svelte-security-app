<script>
	import Webcam from '../components/Webcam.svelte'
	import Buttons from '../components/Buttons.svelte'
	let kondisi = false;

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
				<select class="form-select" aria-label="Default select example">
					<option selected>Open this select menu</option>
					<option value="1">One</option>
					<option value="2">Two</option>
					<option value="3">Three</option>
				</select>
			</div>
			<div class="mb-3">
				<label for="" class="form-label">Lokasi Patroli</label>
				<input class="form-control" type="text" />
			</div>
			<div class="mb-4">
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

			<Webcam />
			<Buttons {...button} />
		</form>
	</div>
</section>
