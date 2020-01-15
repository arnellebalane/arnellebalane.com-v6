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

<article class="mb-24 sm:mb-32">
  <div class="max-w-2xl">
    <header class="mb-4 sm:mb-8">
      <a href={article.url} target={article.source ? '_blank' : ''} rel={article.source ? 'noopener noreferrer' : ''}>
        <h1 class="text-2xl sm:text-3xl font-bold leading-snug">{article.title}</h1>
      </a>
    </header>

    <p>{article.description}</p>

    <footer class="flex flex-wrap mt-4 sm:mt-8 -mx-4 font-mono text-base text-gray-600">
      <time datetime={article.date} class="mx-4">{formatDate(article.date)}</time>
      <a
        href={article.url}
        class="mx-4"
        class:text-medium-green={article.source === 'medium'}
        class:text-devto-purple={article.source === 'devto'}
        target={article.source ? '_blank' : ''}
        rel={article.source ? 'noopener noreferrer' : ''}
      >
        Read more {formatSource(article.source)}
      </a>
    </footer>
  </div>
</article>
