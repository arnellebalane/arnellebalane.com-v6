<script>
  import OtherProject from './OtherProject.svelte';

  export let projects = [];
</script>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
    grid-gap: 1.25rem;
  }
</style>

<section class="my-24 sm:my-56">
  <h1 class="text-2xl sm:text-3xl font-black text-center mb-10">Other Projects</h1>

  <div class="grid">
    {#each projects as project}
      <OtherProject {project} />
    {/each}
  </div>

  <footer class="text-center mt-8">
    <a href="projects" class="inline-block px-6 py-3 font-mono text-sm text-white bg-primary rounded">
      View all projects
    </a>
  </footer>
</section>
