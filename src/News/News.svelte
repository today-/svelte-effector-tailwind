<script>
  import Button from "../ui/Button.svelte";
  import NewsItem from "./NewsItem.svelte";
  import InfiniteList from "../InfiniteList/InfiniteList.svelte";
  import {loading, error, result, effect as getNews} from './news.ts'
</script>

<Button on:click={getNews}>
  RELOAD
</Button>

<InfiniteList
  onLoadMore={getNews}
  error={$error}
  loading={$loading}
>
  {#each $result as item}
    <NewsItem item={item} />
  {/each}
</InfiniteList>
