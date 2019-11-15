<script>
  import { Link } from "svelte-routing";
</script>

<nav class="menu">
  <Link to="/">News</Link>
  <Link to="/404">404 page</Link>
</nav>

<style type="text/postcss">
  .menu {
    @apply flex-1 flex flex-1 flex items-center pl-2 pr-6 bg-gray-700;

    :global(a) {
      @apply ml-2 inline-block px-3 py-2 rounded-lg leading-none text-sm font-medium text-white transition-all ease-out transition-medium;

      &[aria-current] {
        @apply inline-block px-3 py-2 bg-gray-800 rounded-lg leading-none text-sm font-medium text-white;
      }

      &:hover {
        @apply bg-gray-600;
      }
    }
  }
</style>
