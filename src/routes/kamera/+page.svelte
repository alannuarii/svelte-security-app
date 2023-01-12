<script>
	import { onMount, onDestroy } from 'svelte';
	let mediaStream;
	let videoEl;
	let currentFacingMode = 'environment';
	let snapshots = [];

	async function getWebcam() {
		mediaStream = await navigator.mediaDevices.getUserMedia({
			video: { facingMode: { exact: currentFacingMode } }
		});
		videoEl.srcObject = mediaStream;
		videoEl.play();
	}

	function takeSnapshot() {
		const canvas = document.querySelector('canvas');
		const ctx = canvas.getContext('2d');
		ctx.drawImage(videoEl, 0, 0, canvas.width, canvas.height);
		const imgUrl = canvas.toDataURL();
		// document.querySelector('img').src = imgUrl;

		// add snapshot to the array
		snapshots.push(imgUrl.length);
		snapshots = snapshots;
	}

	function stopWebcam() {
		const tracks = videoEl.srcObject.getTracks();
		tracks.forEach((track) => track.stop());
		videoEl.srcObject = null;
	}

	//Event onMount and onDestroy
	onMount(() => {
		getWebcam();
	});
	onDestroy(() => {
		stopWebcam();
	});
</script>

<section>
	<button on:click={takeSnapshot}>Take Snapshot</button>

	<!-- svelte-ignore a11y-media-has-caption -->
	<video bind:this={videoEl} />

	<canvas width="240" height="320" />

	<h1>{snapshots.length}</h1>
</section>

<style>
</style>
