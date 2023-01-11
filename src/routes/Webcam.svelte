<script>
	import { onMount } from 'svelte';
	let mediaStream;
	let videoEl;
	let hiddenInput;
	let isWebcamOn = true;
	let resetBtn = true;
	let activateBtn = true;
	let takeSnapshotBtn = true;

	async function getWebcam() {
		mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
		videoEl.srcObject = mediaStream;
		videoEl.play();
		isWebcamOn = true;
		resetBtn = true;
		activateBtn = false;
		takeSnapshotBtn = true;
	}

	function takeSnapshot() {
		const canvas = document.querySelector('canvas');
		const ctx = canvas.getContext('2d');
		ctx.drawImage(videoEl, 0, 0, canvas.width, canvas.height);
		const imgUrl = canvas.toDataURL();
		hiddenInput.value = imgUrl;
	}

	function stopWebcam() {
		const tracks = mediaStream.getTracks();
		tracks.forEach((track) => track.stop());
		videoEl.srcObject = null;
		isWebcamOn = false;
		resetBtn = false;
		activateBtn = true;
		takeSnapshotBtn = false;
	}

	function resetSnapshot() {
		if (isWebcamOn) {
			const canvas = document.querySelector('canvas');
			const ctx = canvas.getContext('2d');
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			hiddenInput.value = '';
		}
	}

	onMount(() => {
		getWebcam();
	});
</script>

<div class="d-flex flex-column align-items-center border p-3 rounded-2">
	<!-- svelte-ignore a11y-media-has-caption -->
	<video bind:this={videoEl} />
	<canvas class="d-none" width="320" height="240" />
	<input type="hidden" bind:this={hiddenInput} />
	<!-- svelte-ignore a11y-missing-attribute -->
	<div class="box position-relative">
		<button
			class="btn snapshot position-absolute top-50 start-50 translate-middle"
			disabled={!takeSnapshotBtn}
			on:click={takeSnapshot}><i class="bi-circle-fill text-danger" /></button
		>
		<button class="btn reset ps-4 pe-2 py-1" disabled={!resetBtn} on:click={resetSnapshot}
			>Reset</button
		>
	</div>
</div>

<!-- <button>Take Snapshot</button>
<button>Reset Snapshot</button> -->
<!-- <button on:click={stopWebcam}>Stop Webcam</button>
<button disabled={!activateBtn} on:click={getWebcam}>Aktifkan Kamera</button> -->

<style>
	video {
		width: 100%;
	}
	.box {
		height: 70px;
		width: 70px;
	}
	.btn {
		background: none;
		color: inherit;
		border: none;
		padding: 0;
		font: inherit;
		cursor: pointer;
		outline: inherit;
	}
	.bi-circle-fill {
		font-size: 50px;
		cursor: pointer;
	}
	.snapshot {
		z-index: 99;
	}
	.reset {
		position: absolute;
		left: 70%;
		top: 35%;
		border: 1px solid var(--color-text-1);
	}
</style>
