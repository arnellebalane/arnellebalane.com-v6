<script>
  import Projects from './Projects.svelte';

  export let projects = [];
</script>

<section class="my-24 sm:my-56">
  <h1 class="text-2xl sm:text-3xl font-black text-center mb-10">Other Projects</h1>

  <Projects {projects} />

  <footer class="text-center mt-8">
    <a href="projects" class="inline-block px-6 py-3 font-mono text-sm text-white bg-primary rounded">
      View all projects
    </a>
  </footer>
</section>
