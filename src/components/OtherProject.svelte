<script>
  export let project;
</script>

<style>
  li:first-child a::before {
    content: '> ';
  }
</style>

<div class="flex flex-col px-6 py-5 bg-gray-100 rounded">
  <h1 class="text-xl font-black mb-2">{project.name}</h1>
  <p class="text-base mb-6">{project.description}</p>

  <ul class="flex flex-wrap -mx-3 mt-auto">
    <li class="mx-3 font-mono text-xs text-primary uppercase">
      <a href={project.repo} target="_blank" rel="noopener noreferrer">View</a>
    </li>
    {#each project.tags as tag}
      <li class="mx-3 font-mono text-xs text-gray-700">{tag}</li>
    {/each}
  </ul>
</div>
