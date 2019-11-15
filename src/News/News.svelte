<script>
  import {onMount} from 'svelte';
  import NewsItem from "./NewsItem.svelte";
  import Button from "../ui/Button.svelte";
  import Conditional from "../ui/Conditional.svelte";
  import {loading, error, result, effect as getNews} from './news'

  onMount(getNews);
</script>

<Button on:click={getNews}>
  RELOAD
</Button>

<Conditional
  loading={$loading}
  error={$error}
>
  {#each $result as item}
    <NewsItem item={item} />
  {/each}
</Conditional>

