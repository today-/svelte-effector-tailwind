<script>
  import Spinner from "./Spinner.svelte";

  export let loading = false;
  export let error = null;
</script>

{#if loading}
  <Spinner/>
{:else if error}
  <div>{error}</div>
{:else}
  <slot/>
{/if}

