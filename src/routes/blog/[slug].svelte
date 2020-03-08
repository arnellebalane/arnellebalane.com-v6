<script context="module">
  export async function preload(page) {
    const { slug } = page.params;

    const response = await this.fetch(`/api/blog/${slug}.json`);
    const article = await response.json();

    return { article };
  }
</script>

<script>
  import dayjs from 'dayjs';

  export let article;

  const postedOn = dayjs(article.meta.date).format('MMMM DD, YYYY');
  const url = location.origin + location.pathname;

  function tweetArticle() {
    const tweetText = `"${document.title}" by @arnellebalane: ${url}`;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
    window.open(tweetUrl, 'new-tweet');
  }

  function shareArticle() {
    const UNSUPPORTED_WEB_SHARE_ERROR = 'Internal error: could not connect to Web Share interface.';

    navigator.share({ text: document.title, title: document.title, url }).catch(error => {
      if (error.message === UNSUPPORTED_WEB_SHARE_ERROR) {
        tweetArticle();
      }
    });
  }

  const shareLabel = navigator.share ? 'Share this article' : 'Tweet this article';
  const shareHandler = navigator.share ? shareArticle : tweetArticle;
</script>

<style>
  div {
    max-width: 70ch;
  }
</style>

<svelte:head>
  <title>{article.meta.title}</title>
</svelte:head>

<div class="article mx-auto">
  <header class="mb-24 sm:mb-16">
    <h1 class="mb-4 text-3xl sm:text-4xl font-black leading-normal">{article.meta.title}</h1>
    <div>
      <time class="mr-12 text-gray-700" datetime="article.date">{postedOn}</time>
      <button class="underline text-primary" on:click={shareHandler}>{shareLabel}</button>
    </div>
  </header>

  {@html article.html}
</div>
