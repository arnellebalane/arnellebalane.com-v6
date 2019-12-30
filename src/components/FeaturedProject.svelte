<script>
  import FeaturedProjectLink from './FeaturedProjectLink.svelte';

  export let project;
  export let layout = 'left';

  const reverse = layout === 'right';
</script>

<style>
  img {
    border-color: rgba(240, 240, 240, 0.5);
  }
</style>

<div class="flex py-20" class:flex-row-reverse={reverse}>
  <div class="w-1/2" class:text-right={reverse} class:pl-10={reverse} class:pr-10={!reverse}>
    <small class="font-mono text-sm text-primary block mt-10">Featured Project</small>
    <h1 class="text-3xl font-black mb-5">{project.name}</h1>

    <p class="mb-8">{project.description}</p>

    <ul class="inline-flex -mx-3">
      {#each project.tags as tag}
        <li class="font-mono text-sm text-gray-600 mx-3">{tag}</li>
      {/each}
    </ul>
  </div>

  <div class="w-1/2" class:pr-10={reverse} class:pl-10={!reverse}>
    <img src={project.image} alt={project.title} class="border-solid border-4 rounded" />

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
