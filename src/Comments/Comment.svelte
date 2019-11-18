<script>
  import Comments from "./Comments.svelte";
          import Heading from "../ui/Heading.svelte";
  import Info from "../ui/Info.svelte";
  import Card from "../ui/Card.svelte";

  /** @type IComment */
  export let comment;
</script>

<Card>
  <Heading>
    {comment.user}
  </Heading>
  <Info small>
    {@html comment.content}
  </Info>

  <Comments
    list={comment.comments}
  />
</Card>

