<script>
  import {onMount} from 'svelte';
  import Spinner from "../ui/Spinner.svelte";
  import Observer from "./Observer.svelte";
  import Conditional from "../ui/Conditional.svelte";

  export let onLoadMore = () => {};
  export let error;
  export let loading;
  let page = 1;

  function handleScroll() {
    page += 1;
    onLoadMore(page);
  }

  onMount(() => onLoadMore(page));
</script>

<Conditional
  error={error}
  loading={loading && page <= 1}
>
  <slot/>

  {#if loading}
    <Spinner/>
  {/if}

  <Observer on:message={handleScroll}/>
</Conditional>

