<script context="module">
  export async function preload() {
    const response = await this.fetch('api/events.json');
    const events = await response.json();

    return { events };
  }
</script>

<script>
  import sortBy from 'lodash/sortBy';
  import UpcomingEvents from '@components/UpcomingEvents.svelte';
  import PastEvents from '@components/PastEvents.svelte';

  export let events = [];

  const now = new Date();
  const upcomingEvents = sortBy(
    events.filter((event) => new Date(event.date) >= now),
    (event) => new Date(event.date).valueOf()
  );
  const pastEvents = sortBy(
    events.filter((event) => new Date(event.date) < now),
    (event) => -new Date(event.date).valueOf()
  );
</script>

<svelte:head>
  <title>Events | Arnelle Balane</title>
</svelte:head>

<div class="mb-20 sm:mb-40">
  <UpcomingEvents events={upcomingEvents} />

  <h4 class="mt-12 sm:mt-24 mb-8 text-base sm:text-lg font-black">Past events</h4>
  <PastEvents events={pastEvents} />
</div>
