<script>
	import Button from './Button.svelte';
	import Heading from './Heading.svelte';

	export let name;
</script>

<div class="shadow">
	<Heading>
		{name}!
	</Heading>

	<Button>
		Kek
	</Button>
</div>

<style>
	.shadow {
		@apply shadow;
	}
</style>
