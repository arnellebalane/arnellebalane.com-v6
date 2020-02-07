<script context="module">
  export async function preload() {
    const response = await this.fetch('api/articles.json');
    const articles = await response.json();

    return { articles };
  }
</script>

<script>
  import Articles from '@components/Articles.svelte';

  export let articles = [];
</script>

<svelte:head>
  <title>Blog | Arnelle Balane</title>
</svelte:head>

<div class="mb-20 sm:mb-40">
  <Articles {articles} />
</div>
