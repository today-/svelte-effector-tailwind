<script>
  import Conditional from "../ui/Conditional.svelte";
  import {onMount} from 'svelte';
  import {loading, error, result, effect as getDetails} from './news-details'

  export let id;

  onMount(() => getDetails(id));
</script>

<Conditional
    loading={$loading}
    error={$error}
>
  <pre>{JSON.stringify($result, null, 2)}</pre>
</Conditional>

