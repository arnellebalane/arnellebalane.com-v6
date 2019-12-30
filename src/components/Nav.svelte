<script>
  import NavMenuButton from './NavMenuButton.svelte';

  export let segment;

  const links = [
    { label: 'Blog', href: 'blog', prefetch: true },
    { label: 'Events', href: 'events', prefetch: true },
    { label: 'Projects', href: 'projects', prefetch: true },
    { label: 'About', href: 'about' }
  ];

  let menuOpen = false;

  function toggleMenu() {
    menuOpen = !menuOpen;
  }
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

<nav class="flex justify-between items-center p-5 md:px-20 md:py-12">
  <a href="/">
    <h1 class="font-black text-lg">arnellebalane</h1>
  </a>

  <NavMenuButton open={menuOpen} on:click={toggleMenu} />

  <ul
    class="sm:flex -mr-2 md:-mr-4 fixed sm:static top-0 left-0 right-0 bottom-0 z-40 bg-white py-12 px-6 sm:p-0"
    class:hidden={!menuOpen}>
    <!-- For the links to pages that contain dynamic data, we're using
         rel="prefetch" so that Sapper prefetches the blog data when we hover
         over the  link or tap on it on a touchscreen. -->

    {#each links as link (link.href)}
      <li class="font-mono text-sm py-4 sm:p-0 mx-2 md:mx-4">
        <a href={link.href} class:selected={segment === link.href} rel={link.prefetch ? 'prefetch' : ''}>
          {link.label}
        </a>
      </li>
    {/each}
  </ul>
</nav>
