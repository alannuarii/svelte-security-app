<script>
	let constraints = { video: { facingMode: 'environment' } };
	let stream;
	let mediaRecorder;

	function handleSuccess(stream) {
		video.srcObject = stream;
		mediaRecorder = new MediaRecorder(stream);
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

	function startRecording() {
		mediaRecorder.start();
	}

	function stopRecording() {
		mediaRecorder.stop();
	}

	navigator.mediaDevices.getUserMedia(constraints).then(handleSuccess).catch(handleError);
</script>

<section id="camera" class="p-3">
	<!-- svelte-ignore a11y-media-has-caption -->
	<video id="video" autoplay playsinline bing:this={stream} />

	<button on:click={takeSnapshot}>Take snapshot</button>
	<button on:click={startRecording}>Start Recording</button>
	<button on:click={stopRecording}>Stop Recording</button>
</section>
