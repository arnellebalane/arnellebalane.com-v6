<script>
  import UpcomingEventsItem from './UpcomingEventsItem.svelte';

  export let events = [];

  const hasEvents = events.length > 0;
</script>

{#each events as event}
  <UpcomingEventsItem {event} />
{/each}

{#if !hasEvents}
  <p class="max-w-2xl">
    <strong class="font-black">No upcoming events, for now.</strong>
    I give talks and workshops about JavaScript and Web topics - Performance, Progressive Web Apps, Project Fugu,
    Firebase, and others. You can
    <a class="text-primary font-bold" href="mailto:arnellebalane@gmail.com">send me an email</a>
    if you want me to share about those topics in your event. Cheers!
  </p>
{/if}
