<script context="module">
  export async function preload() {
    const articles = await this.fetch('api/articles.json').then(response => response.json());

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
