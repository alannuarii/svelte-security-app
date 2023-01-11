<script>
	import Buttons from './Buttons.svelte';

	const name = {
		button1: 'Cancel',
		button2: 'Logout'
	};
</script>

<div class="modal" tabindex="-1" id="modalLogout">
	<div class="modal-dialog modal-dialog-centered">
		<div class="modal-content">
			<div class="modal-body text-center">
				<p>Apakah Anda yakin akan <strong>Logout</strong>?</p>
			</div>
			<Buttons {...name} />
		</div>
	</div>
</div>
