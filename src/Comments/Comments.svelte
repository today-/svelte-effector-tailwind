<script>
  import Comment from "./Comment.svelte";

  /** @type IComment[] */
  export let list = [];
</script>

{#each list as comment}
  <Comment comment={comment}/>
{/each}
