<script>
	let active = true;
	let constraints = { video: { facingMode: 'environment' } };
	let stream;

	function handleSuccess(stream) {
		video.srcObject = stream;
	}

	function handleError(error) {
		console.log('navigator.getUserMedia error: ', error);
	}

	function takeSnapshot() {
		let canvas = document.createElement('canvas');
		canvas.width = video.videoWidth;
		canvas.height = video.videoHeight;
		canvas.getContext('2d').drawImage(video, 0, 0);
		// you can now save the image from the canvas
	}

	function switchCamera() {
		if (constraints.video.facingMode === 'environment') {
			constraints.video.facingMode = 'user';
		} else {
			constraints.video.facingMode = 'environment';
		}
		navigator.mediaDevices.getUserMedia(constraints).then(handleSuccess).catch(handleError);
	}

	function stopCamera() {
		video.srcObject = null;
		active = false;
	}

	function startCamera() {
		navigator.mediaDevices.getUserMedia(constraints).then(handleSuccess).catch(handleError);
		active = true;
	}

	navigator.mediaDevices.getUserMedia(constraints).then(handleSuccess).catch(handleError);
</script>

<section id="camera" class="p-3">
	<!-- svelte-ignore a11y-media-has-caption -->
	<video id="video" autoplay playsinline bing:this={stream} />

	<button on:click={takeSnapshot} disabled={!active}>Take snapshot</button>
	<button on:click={switchCamera} disabled={!active}>Switch Camera</button>
	<button on:click={stopCamera}>Stop Camera</button>
	<button on:click={startCamera} disabled={active}>Start Camera</button>
</section>
