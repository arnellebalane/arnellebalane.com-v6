<script>
  export let segment;

  let links = [
    { label: 'Blog', href: 'blog', prefetch: true },
    { label: 'Events', href: 'events', prefetch: true },
    { label: 'Projects', href: 'projects', prefetch: true },
    { label: 'About', href: 'about' }
  ];
</script>

<style>
ul {
  counter-reset: number;
}

li a::before {
  content: "0" counter(number) ". ";
  counter-increment: number;

  color: var(--primary-color);
}
</style>

<nav class="flex justify-between items-center px-20 py-12">
  <a href="/">
    <h1 class="font-black text-lg">arnellebalane</h1>
  </a>

  <ul class="flex -mr-4">
    <!-- For the links to pages that contain dynamic data, we're using
         rel="prefetch" so that Sapper prefetches the blog data when we hover
         over the  link or tap on it on a touchscreen. -->

    {#each links as link (link.href)}
      <li class="font-mono text-sm mx-4">
        <a
          href={link.href}
          class:selected={segment === link.href}
          rel={link.prefetch ? 'prefetch' : ''}
        >
          {link.label}
        </a>
      </li>
    {/each}
  </ul>
</nav>
