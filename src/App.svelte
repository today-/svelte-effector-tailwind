<script>
	export let name;
</script>

<div class="shadow">
	<h1>
		{name}!
	</h1>

	<div class="button">
		Kek
	</div>
</div>

<style>
	.shadow {
		@apply shadow;
	}
	h1 {
		@apply font-bold py-2 px-4 rounded;
	}
	.button {
		@apply font-bold py-2 px-4 rounded bg-blue-500 text-white transition-bg cursor-pointer;
	}
	.button:hover {
		@apply bg-blue-700;
	}
</style>
