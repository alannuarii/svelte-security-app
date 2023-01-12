<script>
	let numbers = [];

	const tambah = () => {
		numbers = [...numbers, 1];
	};

	$: console.log(numbers);
</script>

<button on:click={tambah}> Clicked </button>

<h1>{numbers.length}</h1>
