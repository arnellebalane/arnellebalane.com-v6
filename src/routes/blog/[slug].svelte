<script context="module">
  export async function preload(page) {
    const { slug } = page.params;

    const response = await this.fetch(`/api/blog/${slug}.json`);
    const article = await response.json();

    return { article };
  }
</script>

<script>
  export let article;
</script>

<style>
  div {
    max-width: 70ch;
  }
</style>

<div class="mx-auto">
  <h1 class="mb-8 sm:mb-16 text-3xl sm:text-4xl font-black">{article.meta.title}</h1>

  {@html article.html}
</div>
