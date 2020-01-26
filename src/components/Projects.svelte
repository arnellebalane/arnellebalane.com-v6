<script>
  import ProjectsItem from './ProjectsItem.svelte';

  export let projects = [];
</script>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
    grid-gap: 1.25rem;
  }
</style>

<div class="grid">
  {#each projects as project}
    <ProjectsItem {project} />
  {/each}
</div>
