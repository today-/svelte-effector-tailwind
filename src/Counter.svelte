<script>
    import { counter, increment } from './counter';
    import Button from './Button.svelte';
</script>

<div>
    Count: {$counter}
    <br />
    <Button on:click={increment}>
        Increment
    </Button>
</div>

