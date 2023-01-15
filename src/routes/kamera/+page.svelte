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
		// snapshots.push(imgUrl.length);
		snapshots = [...snapshots, imgUrl];
	}

	function stopWebcam() {
		const tracks = videoEl.srcObject.getTracks();
		tracks.forEach((track) => track.stop());
		videoEl.srcObject = null;
	}

	function deletePhoto(index) {
		snapshots.splice(index, 1);
		snapshots = [...snapshots];
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
	<div class="d-flex flex-column align-items-center border p-3 m-3 rounded-2 overflow-y-hidden">
		<div class="foto-border d-flex justify-content-center p-2">
			<!-- svelte-ignore a11y-media-has-caption -->
			<video bind:this={videoEl} />
			<canvas class="d-none" width="240" height="320" />
		</div>
		<div class="box position-relative">
			<button
				class="btn snapshot position-absolute top-50 start-50 translate-middle"
				on:click={takeSnapshot}><i class="bi-circle-fill text-danger" /></button
			>
		</div>
	</div>
	<div />

	<div class="row row-cols-3 gy-4 m-3">
		{#each snapshots as snap, i}
			<div class="col position-relative">
				<img class="img-fluid" src={snap} alt="" />
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div
					class="btn position-absolute top-0 start-50 translate-middle"
					on:click={() => deletePhoto(i)}
				>
					<i class="bi-x-circle-fill text-danger" />
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	.foto-border {
		width: 100%;
	}
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
	.bi-x-circle-fill {
		font-size: 30px;
	}
	.snapshot {
		z-index: 99;
	}
	img {
		opacity: 0.9;
	}
</style>
