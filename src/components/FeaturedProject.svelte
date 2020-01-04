<script>
  import FeaturedProjectLink from './FeaturedProjectLink.svelte';

  export let project;
  export let layout = 'left';

  const reverse = layout === 'right';
</script>

<div class="sm:flex py-10 sm:py-16 sm:-mx-5 xl:-mx-10" class:sm:flex-row-reverse={reverse}>
  <div class="sm:w-1/2 sm:px-5 xl:px-10" class:sm:text-right={reverse}>
    <small class="font-mono text-sm text-primary block md:mt-10">Featured Project</small>
    <h1 class="text-2xl sm:text-3xl font-black mb-5">{project.name}</h1>

    <p class="mb-8">{project.description}</p>

    <ul class="inline-flex -mx-3">
      {#each project.tags as tag}
        <li class="font-mono text-sm text-gray-700 mx-3">{tag}</li>
      {/each}
    </ul>
  </div>

  <div class="w-4/5 sm:w-1/2 sm:px-5 xl:px-10 mx-auto mt-8 sm:m-0">
    <img src={project.image} alt={project.title} class="border-4 border-solid border-gray-100 rounded" />

    <div class="text-center -mt-4">
      {#if project.repo}
        <FeaturedProjectLink href={project.repo}>Repo</FeaturedProjectLink>
      {/if}
      {#if project.url}
        <FeaturedProjectLink href={project.url}>Visit Site</FeaturedProjectLink>
      {/if}
    </div>
  </div>
</div>
