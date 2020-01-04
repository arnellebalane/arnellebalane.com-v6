<script>
  import { stores } from '@sapper/app';
  import NavMenuButton from './NavMenuButton.svelte';

  export let segment;

  const links = [
    { label: 'Blog', href: 'blog' },
    { label: 'Events', href: 'events' },
    { label: 'Projects', href: 'projects' },
    { label: 'About', href: 'about' }
  ];

  let menuOpen = false;

  function toggleMenu() {
    menuOpen = !menuOpen;
  }

  const { page } = stores();
  page.subscribe(() => {
    menuOpen = false;
  });
</script>

<style>
  ul {
    counter-reset: number;
  }

  li a::before {
    content: '0' counter(number) '. ';
    counter-increment: number;

    color: var(--primary-color);
  }
</style>

<nav class="flex justify-between items-center p-5 md:p-12">
  <a href="/">
    <h1 class="font-black text-lg">arnellebalane</h1>
  </a>

  <NavMenuButton open={menuOpen} on:click={toggleMenu} />

  <ul class="sm:flex -mr-2 md:-mr-4 py-12 px-6 sm:p-0 fixed sm:static inset-0 z-40 bg-white" class:hidden={!menuOpen}>
    {#each links as link (link.href)}
      <li class="font-mono text-sm py-4 sm:p-0 mx-2 md:mx-4">
        <a href={link.href} class="block" class:selected={segment === link.href}>{link.label}</a>
      </li>
    {/each}
  </ul>
</nav>
