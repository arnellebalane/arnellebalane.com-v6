<script>
  import FeaturedProject from './FeaturedProject.svelte';

  export let projects = [];

  function getLayout(index) {
    return index % 2 === 0 ? 'left' : 'right';
  }
</script>

<div class="overflow-hidden">
  {#each projects as project, i}
    <FeaturedProject {project} layout={getLayout(i)} />
  {/each}
</div>
