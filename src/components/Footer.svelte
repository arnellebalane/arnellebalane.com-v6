<script>
  const links = [
    {
      icon: '/icons/github.svg',
      url: 'https://github.com/arnellebalane'
    },
    {
      icon: '/icons/twitter.svg',
      url: 'https://twitter.com/arnellebalane'
    },
    {
      icon: '/icons/linkedin.svg',
      url: 'https://www.linkedin.com/in/arnellebalane/'
    },
    {
      icon: '/icons/instagram.svg',
      url: 'https://www.instagram.com/arnellebalane/'
    },
    {
      icon: '/icons/devto.svg',
      url: 'https://dev.to/arnellebalane'
    },
    {
      icon: '/icons/codepen.svg',
      url: 'https://codepen.io/arnellebalane'
    }
  ];
</script>

<style>
  .links {
    filter: grayscale(1) brightness(10);
    mix-blend-mode: screen;
  }
</style>

<footer class="p-6 sm:p-8 font-mono text-center bg-gray-900 text-white">
  <ul class="links flex flex-wrap justify-center -mx-3 mb-8">
    {#each links as link}
      <li class="mx-3">
        <a href={link.url} target="_blank" rel="noopener noreferrer">
          <img src={link.icon} alt="" />
        </a>
      </li>
    {/each}
  </ul>

  <small class="block my-1 text-xs sm:text-sm">Designed and built by Arnelle Balane</small>
  <small class="block my-1 text-xs sm:text-sm">Built using Sapper and TailwindCSS</small>
</footer>
