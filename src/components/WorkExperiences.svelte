<script>
  import WorkExperiencesItem from './WorkExperiencesItem.svelte';

  export let experiences = [];
</script>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
    grid-gap: 1.25rem;
  }

  @media (min-width: 640px) {
    .grid {
      grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
    }
  }
</style>

<div class="grid">
  {#each experiences as experience}
    <WorkExperiencesItem {experience} />
  {/each}
</div>
