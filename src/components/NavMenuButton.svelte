<script>
  export let open = false;
</script>

<button class="sm:hidden relative z-50" aria-label="Nav menu button" on:click>
  {#if open}
    <svg viewBox="0 0 24 24" class="w-5 h-5 text-gray-900">
      <path
        d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
      />
    </svg>
  {:else}
    <svg viewBox="0 0 24 24" class="w-5 h-5 text-gray-900">
      <path
        d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1
        14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"
      />
    </svg>
  {/if}
</button>
