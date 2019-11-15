<script>
  import {onMount} from 'svelte';
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
  <Heading>{$result.title}</Heading>
  <pre>{JSON.stringify($result, null, 2)}</pre>
</Conditional>

