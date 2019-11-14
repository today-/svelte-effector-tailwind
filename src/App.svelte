<script>
	import Counter from "./Counter.svelte";
	import Heading from './Heading.svelte';

	export let name;
</script>

<div class="shadow">
	<Heading>
		{name}!
	</Heading>

	<Counter/>
</div>

<style>
	.shadow {
		@apply shadow;
	}
</style>
