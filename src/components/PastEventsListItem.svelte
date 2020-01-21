<script>
  import dayjs from 'dayjs';

  export let event;

  function formatDate(date) {
    return dayjs(date).format('YYYY/MM/DD');
  }
</script>

<article class="flex flex-col py-4 px-5 bg-gray-100 rounded">
  <a href={event.url} target="_blank" rel="noopener noreferrer">
    <h1 class="mb-6 text-base sm:text-lg font-black">{event.name}</h1>
  </a>

  <small
    class="block font-mono text-xs text-gray-700 uppercase"
    class:text-pink-800={event.type === 'talk'}
    class:text-orange-800={event.type === 'workshop'}
  >
    {event.type}
  </small>
  <h2 class="mb-auto text-base sm:text-lg font-normal">{event.session}</h2>

  <footer class="flex flex-wrap mt-10 font-mono text-sm text-gray-700">
    <time datetime={event.date}>{formatDate(event.date)}</time>
    <span class="mx-3">&middot;</span>
    <p>{event.location}</p>
  </footer>
</article>
