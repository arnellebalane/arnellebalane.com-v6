<script>
  import ArticlesListItem from './ArticlesListItem.svelte';

  export let articles = [];
</script>

{#each articles as article}
  <ArticlesListItem {article} />
{/each}
