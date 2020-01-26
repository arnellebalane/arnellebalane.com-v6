<script>
  import ArticlesItem from './ArticlesItem.svelte';

  export let articles = [];
</script>

<div class="mb-20 sm:mb-40">
  {#each articles as article}
    <ArticlesItem {article} />
  {/each}
</div>
