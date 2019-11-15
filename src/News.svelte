<script>
  import { onMount } from 'svelte';
  import { news, getNews } from './news'

  onMount(getNews);
</script>

<style>

</style>

<div>
  <pre>{JSON.stringify($news, null, 2)}</pre>
  <button on:click={getNews}>567567</button>
</div>
