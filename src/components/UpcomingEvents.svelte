<script>
  import UpcomingEventsItem from './UpcomingEventsItem.svelte';

  export let events = [];
</script>

{#each events as event}
  <UpcomingEventsItem {event} />
{/each}
