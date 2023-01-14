<script>
	import Webcam from '../Webcam.svelte';
	import Buttons from '../Buttons.svelte';

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
				<label for="" class="form-label">Nama Lengkap</label>
				<input class="form-control" type="text" />
			</div>
			<div class="mb-3">
				<label for="" class="form-label">Perusahaan / Instansi</label>
				<input class="form-control" type="text" />
			</div>
			<div class="mb-3">
				<label for="" class="form-label">Nomor Handphone</label>
				<input class="form-control" type="number" />
			</div>
			<div class="mb-3">
				<label for="" class="form-label">Tujuan Berkunjung</label>
				<input class="form-control" type="text" />
			</div>
			<div class="mb-4">
				<label for="exampleRadios1" class="form-label">Kondisi Kesehatan</label>
				<div class="form-check">
					<input
						class="form-check-input"
						type="radio"
						name="kondisi"
						id="exampleRadios1"
						value="Sehat"
						bind:group={kondisi}
					/>
					<label class="form-check-label" for="exampleRadios2"> Sehat </label>
				</div>
				<div class="form-check">
					<input
						class="form-check-input"
						type="radio"
						name="kondisi"
						id="exampleRadios2"
						value="Tidak Sehat"
						bind:group={kondisi}
					/>
					<label class="form-check-label" for="exampleRadios1"> Tidak Sehat </label>
				</div>
				{#if kondisi === 'Tidak Sehat'}
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
