<script>

  import {onMount} from 'svelte';
  import NewsItem from "./NewsItem.svelte";
  import Button from "../ui/Button.svelte";
  import Spinner from "../ui/Spinner.svelte";
  import Observer from "../ui/Observer.svelte";
  import Conditional from "../ui/Conditional.svelte";
  import {loading, error, result, effect as getNews} from './news.ts'

  let page = 1;

  function handleScroll() {
    page += 1;
    getNews(page);
  }

  function reload() {
    page = 1;
    getNews(page);
  }

  onMount(reload);
</script>

<Button on:click={reload}>
  RELOAD
</Button>

<Conditional
  error={$error}
  loading={$loading && page < 2}
>
  {#each $result as item}
    <NewsItem item={item} />
  {/each}

  {#if $loading}
    <Spinner/>
  {/if}

  <Observer on:message={handleScroll}/>
</Conditional>

