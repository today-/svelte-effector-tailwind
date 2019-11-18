<script>
  export let small = false;
</script>

<div class="info" class:small>
  <slot/>
</div>

<style>
  .info {
    @apply text-gray-600;
  }
  .small {
    @apply text-sm;
  }
</style>
