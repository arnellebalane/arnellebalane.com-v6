<script context="module">
  export async function preload() {
    const featuredProjects = await this.fetch('api/featured-projects.json').then(response => response.json());
    return { featuredProjects };
  }
</script>

<script>
  import HeroSection from '../components/HeroSection.svelte';
  import FeaturedProjectsSection from '../components/FeaturedProjectsSection.svelte';

  export let featuredProjects = [];
</script>

<svelte:head>
  <title>Arnelle Balane</title>
</svelte:head>

<HeroSection />
<FeaturedProjectsSection projects={featuredProjects} />
