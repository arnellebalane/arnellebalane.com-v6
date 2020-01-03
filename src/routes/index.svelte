<script context="module">
  export async function preload() {
    const [featuredProjects, otherProjects] = await Promise.all([
      this.fetch('api/featured-projects.json').then(response => response.json()),
      this.fetch('api/projects.json').then(response => response.json())
    ]);

    return {
      featuredProjects: featuredProjects.slice(0, 2),
      otherProjects: otherProjects.slice(0, 6)
    };
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
