<script>
  import {onMount} from 'svelte';
  import Info from "../ui/Info.svelte";
  import Comments from "../Comments/Comments.svelte";
  import Heading from "../ui/Heading.svelte";
  import Conditional from "../ui/Conditional.svelte";
  import {loading, error, result, effect as getDetails} from './news-details'

  export let id;

  onMount(() => getDetails(id));
</script>

<Conditional
  loading={$loading}
  error={$error}
>
  <Heading>
    {$result.title}
  </Heading>
  <Info>
    by {$result.user}
  </Info>
  <Info small>
    {$result.time_ago}
  </Info>

  {#if $result.comments_count}
    <Comments list={$result.comments}/>
  {/if}
</Conditional>
