<script>
	let active = true;
	let constraints = { video: { facingMode: 'environment' } };
	let stream;
	let hiddenInput;

	function handleSuccess(stream) {
		video.srcObject = stream;
	}

	function handleError(error) {
		console.log('navigator.getUserMedia error: ', error);
	}

	function takeSnapshot() {
		const canvas = document.querySelector('canvas');
		const ctx = canvas.getContext('2d');
		ctx.drawImage(videoEl, 0, 0, canvas.width, canvas.height);
		const imgUrl = canvas.toDataURL();
		document.querySelector('img').src = imgUrl;
		hiddenInput.value = imgUrl;
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
		let tracks = stream.getTracks();
		tracks.forEach(function (track) {
			track.stop();
		});
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
	<input type="hidden" bind:this={hiddenInput} />
</section>
