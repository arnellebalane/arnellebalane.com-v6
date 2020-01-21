<script>
  import UpcomingEventsListItem from './UpcomingEventsListItem.svelte';

  export let events = [];
</script>

{#each events as event}
  <UpcomingEventsListItem {event} />
{/each}
