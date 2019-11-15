<script>
  import Card from "../ui/Card.svelte";
  import Heading from "../ui/Heading.svelte";

  export let item;
</script>

<Card>
  <Heading>
    {item.title}
  </Heading>
  <span class="author"> by {item.user}</span>
  <div class="date">
    {item.time_ago}
  </div>
</Card>

<style>
  .author {
    @apply text-gray-600;
  }

  .date {
    @apply text-gray-600 text-sm;
  }
</style>
