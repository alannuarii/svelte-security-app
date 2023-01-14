<script>
	import Webcam from '../Webcam.svelte';
	import Buttons from '../Buttons.svelte';
	let atribut = false;

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
			<div class="mb-4">
				<label for="exampleRadios1" class="form-label">Atribut</label>
				<div class="form-check">
					<input
						class="form-check-input"
						type="radio"
						name="atribut"
						id="exampleRadios1"
						value="Lengkap"
						bind:group={atribut}
					/>
					<label class="form-check-label" for="exampleRadios2"> Lengkap </label>
				</div>
				<div class="form-check">
					<input
						class="form-check-input"
						type="radio"
						name="atribut"
						id="exampleRadios2"
						value="Tidak Lengkap"
						bind:group={atribut}
					/>
					<label class="form-check-label" for="exampleRadios1"> Tidak Lengkap </label>
				</div>
				{#if atribut === 'Tidak Lengkap'}
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
