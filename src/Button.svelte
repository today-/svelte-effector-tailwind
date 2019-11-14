<button class="button" on:click>
    <slot></slot>
</button>

<style>
    .button {
        @apply font-bold py-2 px-4 rounded bg-blue-500 text-white transition-bg cursor-pointer;
    }
    .button:hover {
        @apply bg-blue-600;
    }
    .button:active {
        @apply bg-blue-700;
    }
</style>
