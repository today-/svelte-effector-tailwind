<nav class="menu">
  <slot/>
</nav>

<style type="text/postcss">
  .menu {
    @apply flex-1 flex flex-1 flex items-center pl-2 pr-6 bg-gray-700;

    :global(a) {
      @apply ml-2 inline-block px-3 py-2 rounded-lg leading-none text-sm font-medium text-white transition-all;

      &[aria-current] {
        @apply inline-block px-3 py-2 bg-gray-800 rounded-lg leading-none text-sm font-medium text-white;
      }

      &:hover {
        @apply bg-gray-600;
      }
    }
  }
</style>
