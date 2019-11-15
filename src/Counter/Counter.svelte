<script>
  import {counter, increment} from './counter';
  import Button from '../ui/Button.svelte';
</script>

<div>
  Count: {$counter}
  <br/>
  <Button on:click={increment}>
    Increment
  </Button>
</div>

