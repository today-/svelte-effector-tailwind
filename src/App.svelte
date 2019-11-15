<script>
  import News from "./News.svelte";
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

  <News/>
</div>

<style>
  .shadow {
    @apply shadow;
  }
</style>
