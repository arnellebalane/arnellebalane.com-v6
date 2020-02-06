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

<div>
  {@html article.html}
</div>
