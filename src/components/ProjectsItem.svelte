<script>
  export let project;
</script>

<div class="flex flex-col px-6 py-5 bg-gray-100 rounded">
  <a href={project.repo} target="_blank" rel="noopener noreferrer" class="mb-2">
    <h1 class="text-xl font-black">{project.name}</h1>
  </a>
  <p class="text-base mb-6">{project.description}</p>

  <ul class="flex flex-wrap -mx-3 mt-auto">
    {#each project.tags as tag}
      <li class="mx-3 font-mono text-xs text-gray-700">{tag}</li>
    {/each}
  </ul>
</div>
