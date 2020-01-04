<script context="module">
  export async function preload() {
    const articles = await this.fetch('api/articles.json').then(response => response.json());

    return { articles };
  }
</script>

<script>
  import ArticlesList from '@components/ArticlesList.svelte';

  export let articles = [];
</script>

<svelte:head>
  <title>Blog | Arnelle Balane</title>
</svelte:head>

<ArticlesList {articles} />
