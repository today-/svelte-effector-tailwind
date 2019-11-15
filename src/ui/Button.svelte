<button class="button" on:click>
  <slot/>
</button>

<style type="text/postcss">
  .button {
    @apply font-bold py-2 px-4 rounded bg-blue-500 text-white transition-bg cursor-pointer;

    &:hover {
      @apply bg-blue-600;
    }

    &:active {
      @apply bg-blue-700;
    }

    &:focus {
      outline: 0;
    }
  }
</style>
