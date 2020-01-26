<script context="module">
  export async function preload() {
    const projects = await this.fetch('api/projects.json').then(response => response.json());

    return { projects };
  }
</script>

<script>
  import Projects from '@components/Projects.svelte';

  export let projects = [];
</script>

<svelte:head>
  <title>Projects | Arnelle Balane</title>
</svelte:head>

<div class="mb-20 sm:mb-40">
  <h1 class="text-2xl sm:text-3xl font-black mb-2 sm:mb-4">Projects</h1>
  <p class="mb-10 sm:mb-20">A list of things that I've built and worked on</p>

  <Projects {projects} />
</div>
