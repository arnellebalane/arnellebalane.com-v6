<script>
  import ArticlesItem from './ArticlesItem.svelte';

  export let articles = [];
</script>

{#each articles as article}
  <ArticlesItem {article} />
{/each}
