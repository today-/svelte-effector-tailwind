<script lang="ts">
  import {Link} from "svelte-routing";
  import Card from "../ui/Card.svelte";
  import Heading from "../ui/Heading.svelte";

  export let item: INewsItem;
</script>

<Link to={`/news/${item.id}`}>
  <Card>
    <Heading>
      {item.title}
    </Heading>
    <div class="author">
      by {item.user}
    </div>
    <div class="date">
      {item.time_ago}
    </div>
  </Card>
</Link>

<style>
  .author {
    @apply text-gray-600;
  }

  .date {
    @apply text-gray-600 text-sm;
  }
</style>
