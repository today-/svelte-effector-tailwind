<script>
  import Todos from "./Todos.svelte";
  import Counter from "./Counter.svelte";
  import Heading from './Heading.svelte';
</script>

<div class="shadow">
  <Heading>
    !
  </Heading>

  <Counter/>

  <Todos/>
</div>

<style>
  .shadow {
    @apply shadow;
  }
</style>
