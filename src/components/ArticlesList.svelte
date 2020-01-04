<script>
  import ArticlesListItem from './ArticlesListItem.svelte';

  export let articles = [];
</script>

<div class="mb-20 sm:mb-40">
  {#each articles as article}
    <ArticlesListItem {article} />
  {/each}
</div>
