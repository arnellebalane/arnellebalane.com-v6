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

  function getImageSrcset(image) {
    return `
      ${image}?fm=webp&q=80&w=400 400w,
      ${image}?fm=webp&q=80&w=560 560w,
      ${image}?fm=webp&q=80&w=730 730w,
      ${image}?fm=webp&q=80&w=840 840w
    `;
  }
</script>

<style>
  article {
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.05);
  }

  img {
    width: calc(100% + 2.5rem); /* 2.5rem = 2 * .mx-5 */
  }

  /* Responsive breakpoint based on Tailwind's "sm" and "xl" breakpoints. */
  @media (min-width: 640px) and (max-width: 1279px) {
    img {
      width: calc(100% + 5rem); /* 5rem = 2 * .mx-10 */
    }
  }

  /* Responsive breakpoint based on Tailwind's "xl" breakpoint. */
  @media (max-width: 1279px) {
    img {
      max-width: initial;
    }
  }

  /* Responsive breakpoint based on Tailwind's "xl" breakpoint. */
  @media (min-width: 1280px) {
    img {
      top: 50%;
      transform: translateY(-50%);
    }
  }
</style>

<article class="relative p-5 mb-6 sm:p-10 sm:mb-12 border border-solid border-gray-100 rounded-lg xl:pr-56 xl:mr-48">
  <header class="mb-4 sm:mb-8">
    {#if article.cover_image}
      <img
        src={`${article.cover_image}?fm=webp&q=80&w=400`}
        srcset={getImageSrcset(article.cover_image)}
        sizes="(min-width: 1280px) 400px, (min-width: 768px) 80vw, 100vw"
        alt={article.title}
        class="xl:w-full -m-5 mb-5 sm:-m-10 sm:mb-10 rounded-t-lg xl:rounded-b-lg xl:absolute xl:right-0 xl:m-0
        xl:-mr-48 xl:max-w-sm xl:shadow-xl"
      />
    {/if}

    <a href={article.url} target={article.source ? '_blank' : ''} rel={article.source ? 'noopener noreferrer' : ''}>
      <h1 class="text-2xl sm:text-3xl font-bold leading-snug">{article.title}</h1>
    </a>
  </header>

  <p>{article.description}</p>

  <footer class="flex flex-wrap mt-6 sm:mt-12 -mx-4 font-mono text-sm text-gray-600">
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
</article>
