<script>
	let numbers = [];

	console.log(numbers);

	const tambah = () => {
		numbers.push(1);
		numbers = numbers;
	};
</script>

<button on:click={tambah}> Clicked </button>

<h1>{numbers.length}</h1>
