<script context="module">
  export async function preload() {
    const featuredProjects = await this.fetch('api/featured-projects.json')
      .then(response => response.json());
    return { featuredProjects };
  }
</script>

<script>
  import Hero from '../components/Hero.svelte';
  import FeaturedProjects from '../components/FeaturedProjects.svelte';

  export let featuredProjects = [];
</script>

<svelte:head>
  <title>Arnelle Balane</title>
</svelte:head>

<Hero />
<FeaturedProjects projects={featuredProjects} />
