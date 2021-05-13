<script context="module">
  export async function preload() {
    const projects = await this.fetch('api/projects.json').then((response) => response.json());
    const featuredProjects = projects.filter((project) => project.is_featured).slice(0, 2);
    const otherProjects = projects.filter((project) => !project.is_featured).slice(0, 6);

    return { featuredProjects, otherProjects };
  }
</script>

<script>
  import HeroSection from '@components/HeroSection.svelte';
  import FeaturedProjectsSection from '@components/FeaturedProjectsSection.svelte';
  import OtherProjectsSection from '@components/OtherProjectsSection.svelte';
  import ContactSection from '@components/ContactSection.svelte';

  export let featuredProjects = [];
  export let otherProjects = [];
</script>

<svelte:head>
  <title>Arnelle Balane</title>
</svelte:head>

<HeroSection />
<FeaturedProjectsSection projects={featuredProjects} />
<OtherProjectsSection projects={otherProjects} />
<ContactSection />
