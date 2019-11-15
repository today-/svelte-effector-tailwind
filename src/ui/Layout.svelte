<script>
  import MainMenu from "./MainMenu.svelte";
  import { Link } from "svelte-routing";
</script>

<div class="layout">
  <header>
    <div class="logo">
      <Link to="/">Svelte+Effector</Link>
    </div>
    <MainMenu/>
  </header>
  <div class="container">
    <slot/>
  </div>
</div>


<style>
  :global(body) {
    @apply antialiased font-sans bg-gray-200;
  }

  .layout {
    @apply h-screen flex flex-col;
  }

  header {
    @apply flex flex-shrink-0;
  }

  .logo {
    @apply flex-shrink-0 px-4 py-3 bg-gray-800 font-medium text-white w-40;
  }

  .container {
    @apply p-3 flex-1 overflow-y-auto
  }
</style>
