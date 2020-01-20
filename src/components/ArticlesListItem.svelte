<script>
  import dayjs from 'dayjs';

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

<style>
  .cover-image::before {
    content: '';
    display: block;
    padding-top: calc(100% / 16 * 9);
  }
</style>

<article class="flex items-start py-10 mb-12">
  <div class="hidden sm:block cover-image order-1 relative w-3/6 lg:w-2/6 max-w-sm ml-6">
    {#if article.cover_image}
      <picture>
        <source srcset={`${article.cover_image}?w=350&fm=webp&q=85`} type="image/webp" />
        <img
          src={`${article.cover_image}?w=350&fm=jpg&fl=progressive&q=80`}
          alt={article.title}
          loading="lazy"
          class="absolute inset-0 w-full h-full object-cover object-center rounded shadow-2xl"
        />
      </picture>
    {/if}
  </div>

  <div class="max-w-2xl">
    <header class="mb-4 sm:mb-8">
      <a href={article.url} target={article.source ? '_blank' : ''} rel={article.source ? 'noopener noreferrer' : ''}>
        <h1 class="text-2xl sm:text-3xl font-bold leading-snug">{article.title}</h1>
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
        Read more {formatSource(article.source)}
      </a>
    </footer>
  </div>
</article>
