<script>
  import dayjs from 'dayjs';

  export let event;

  function formatDate(date) {
    return dayjs(date).format('MMMM D, YYYY');
  }
</script>

<article class="py-10 mb-12">
  <a href={event.url} target="_blank" rel="noopener noreferrer">
    <h1 class="mb-6 text-2xl sm:text-3xl font-bold leading-snug">{event.name}</h1>
  </a>

  <small
    class="block font-mono text-sm text-gray-700 uppercase"
    class:text-pink-800={event.type === 'talk'}
    class:text-orange-800={event.type === 'workshop'}
  >
    {event.type}
  </small>
  <h2 class="text-lg sm:text-xl font-normal">{event.session}</h2>

  <footer class="mt-8 font-mono text-base text-gray-700">
    <time datetime={event.date}>{formatDate(event.date)}</time>
    <p>{event.location}</p>
  </footer>
</article>
