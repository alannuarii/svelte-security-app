<script>
	import { onMount } from 'svelte';

	let kondisi = false;
	let mediaStream;
	let videoEl;
	let foto;

	async function getWebcam() {
		mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
		videoEl.srcObject = mediaStream;
		videoEl.play();
	}

	function takeSnapshot() {
		const canvas = document.querySelector('canvas');
		const ctx = canvas.getContext('2d');
		ctx.drawImage(videoEl, 0, 0, canvas.width, canvas.height);
		const imgUrl = canvas.toDataURL();
		document.querySelector('img').src = imgUrl;
		foto = imgUrl;
		// console.log(imgUrl);
	}

	function stopWebcam() {
		const tracks = mediaStream.getTracks();
		tracks.forEach((track) => track.stop());
		videoEl.srcObject = null;
	}

	function resetSnapshot() {
		document.querySelector('img').src = '';
		foto = '';
	}
	onMount(() => {
		getWebcam();
	});
</script>

<div id="FormPatrol">
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
	<div>
		<input type="hidden" name="foto" bind:value={foto} />
		<button on:click={takeSnapshot}>Take Snapshot</button>
		<button on:click={resetSnapshot}>Reset Snapshot</button>
		<button on:click={stopWebcam}>Stop Webcam</button>
		<!-- svelte-ignore a11y-media-has-caption -->
		<video bind:this={videoEl} width="320" height="240" />
		<!-- svelte-ignore a11y-missing-attribute -->
		<canvas width="320" height="240" />
		<!-- svelte-ignore a11y-missing-attribute -->
		<img width="320" height="240" />
	</div>
</div>
