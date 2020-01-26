<script>
  import PastEventsItem from './PastEventsItem.svelte';

  export let events = [];
</script>

<style>
  section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
    grid-gap: 1.25rem;
  }
</style>

<section>
  {#each events as event}
    <PastEventsItem {event} />
  {/each}
</section>
