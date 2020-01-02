<script>
  import FeaturedProject from './FeaturedProject.svelte';

  export let projects = [];

  function getLayout(index) {
    return index % 2 === 0 ? 'left' : 'right';
  }
</script>

<section>
  {#each projects as project, i}
    <FeaturedProject {project} layout={getLayout(i)} />
  {/each}
</section>
