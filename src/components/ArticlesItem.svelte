<script>
  import dayjs from 'dayjs';
  import Image from './Image.svelte';

  export let article;

  function formatDate(date) {
    return dayjs(date).format('MMMM D, YYYY');
  }

  function formatSource(source) {
    switch (source) {
      case 'medium':
        return 'on Medium';
      case 'devto':
        return 'on DEV';
      default:
        return '';
    }
  }
</script>

<article class="flex items-start py-10 mb-12">
  {#if article.cover_image}
    <Image
      src={article.cover_image}
      alt={article.title}
      width={350}
      height={156}
      aspectRatio="100% / 16 * 9"
      wrapperClass="hidden sm:block order-1 w-1/2 lg:w-1/3 max-w-sm ml-6"
      imageClass="rounded shadow-2xl"
    />
  {/if}

  <div class="max-w-2xl">
    <header class="mb-4 sm:mb-8">
      <a href={article.url} target={article.source ? '_blank' : ''} rel={article.source ? 'noopener noreferrer' : ''}>
        <h1 class="text-2xl sm:text-3xl font-black leading-snug">{article.title}</h1>
      </a>
    </header>

    <p>{article.description}</p>

    <footer class="flex flex-wrap mt-4 sm:mt-8 -mx-4 font-mono text-base text-gray-700">
      <time datetime={article.date} class="mx-4">{formatDate(article.date)}</time>
      <a
        href={article.url}
        class="mx-4"
        class:text-green-700={article.source === 'medium'}
        class:text-indigo-700={article.source === 'devto'}
        target={article.source ? '_blank' : ''}
        rel={article.source ? 'noopener noreferrer' : ''}
      >
        Read more
        {formatSource(article.source)}
      </a>
    </footer>
  </div>
</article>
