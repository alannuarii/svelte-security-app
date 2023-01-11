<script>
	let video;
	let canvas;
	let context;
	let stream;
	let constraints = {
		video: { facingMode: 'environment' },
		audio: false
	};

	function successCallback(stream) {
		video.srcObject = stream;
	}

	function errorCallback(error) {
		console.log('navigator.getUserMedia error: ', error);
	}

	function start() {
		navigator.mediaDevices.getUserMedia(constraints).then(successCallback).catch(errorCallback);
	}

	function switchCamera() {
		constraints.video.facingMode =
			constraints.video.facingMode == 'environment' ? 'user' : 'environment';
		start();
	}

	function snapshot() {
		context.drawImage(video, 0, 0, canvas.width, canvas.height);
	}

	function stop() {
		if (stream) {
			stream.getTracks().forEach(function (track) {
				track.stop();
			});
		}
	}
</script>

<section id="camera" class="p-3">
	<button on:click={switchCamera}>switch camera</button>
	<button on:click={snapshot}>take snapshot</button>
	<button on:click={stop}>stop camera</button>
	<button on:click={start}>start camera</button>
	<!-- svelte-ignore a11y-media-has-caption -->
	<video id="video" autoplay playsinline ref={video} />
	<canvas id="canvas" ref={canvas} />
</section>
