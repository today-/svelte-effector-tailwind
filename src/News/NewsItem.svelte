<script>
  import Info from "../ui/Info.svelte";
  import {Link} from "svelte-routing";
  import Card from "../ui/Card.svelte";
  import Heading from "../ui/Heading.svelte";

  /** @type {INewsItem} */
  export let item;
</script>

<Link to={`/news/${item.id}`}>
  <Card>
    <Heading>
      {item.title}
    </Heading>
    <Info>
      by {item.user}
    </Info>
    <Info small>
      {item.time_ago}
    </Info>
  </Card>
</Link>

