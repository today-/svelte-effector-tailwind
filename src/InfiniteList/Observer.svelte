<script>
  import { createEventDispatcher, onMount } from 'svelte';

  const dispatch = createEventDispatcher();

  let intersecting = false;
  let container;

  onMount(() => {
    const observer = new IntersectionObserver(entries => {
      intersecting = entries[0].isIntersecting;

      if (intersecting) {
        dispatch('message', intersecting);
      }
    });

    observer.observe(container);
    return () => observer.unobserve(container);
  });
</script>

<div bind:this={container}></div>
