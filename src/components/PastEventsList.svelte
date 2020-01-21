<script>
  import PastEventsListItem from './PastEventsListItem.svelte';

  export let events = [];
</script>

<style>
  section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
    grid-gap: 1.25rem;
  }
</style>

<section>
  {#each events as event}
    <PastEventsListItem {event} />
  {/each}
</section>
