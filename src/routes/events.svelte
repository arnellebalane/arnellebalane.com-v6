<script context="module">
  export async function preload() {
    const events = await this.fetch('api/events.json').then(response => response.json());

    return { events };
  }
</script>

<script>
  import UpcomingEvents from '@components/UpcomingEvents.svelte';
  import PastEvents from '@components/PastEvents.svelte';

  export let events = [];

  const now = new Date();
  const upcomingEvents = events.filter(event => new Date(event.date) >= now);
  const pastEvents = events.filter(event => new Date(event.date) < now);
</script>

<svelte:head>
  <title>Events | Arnelle Balane</title>
</svelte:head>

<UpcomingEvents events={upcomingEvents} />

<h4 class="mt-12 sm:mt-24 mb-8 text-base sm:text-lg font-black">Past events</h4>
<PastEvents events={pastEvents} />
