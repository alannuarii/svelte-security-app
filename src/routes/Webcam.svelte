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
		document.querySelector('img').src = imgUrl;
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
			document.querySelector('img').src = '';
			hiddenInput.value = '';
		}
	}

	onMount(() => {
		getWebcam();
	});
</script>

<button disabled={!takeSnapshotBtn} on:click={takeSnapshot}>Take Snapshot</button>
<button disabled={!resetBtn} on:click={resetSnapshot}>Reset Snapshot</button>
<button on:click={stopWebcam}>Stop Webcam</button>
<button disabled={!activateBtn} on:click={getWebcam}>Aktifkan Kamera</button>
<!-- svelte-ignore a11y-media-has-caption -->
<video bind:this={videoEl} width="320" height="240" />
<canvas width="320" height="240" />
<!-- svelte-ignore a11y-missing-attribute -->
<img width="320" height="240" />
<input type="hidden" bind:this={hiddenInput} />
