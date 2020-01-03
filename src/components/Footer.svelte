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
  /* Responsive breakpoint based on Tailwind's "md" breakpoint. */
  @media (max-width: 767px) {
    .links {
      filter: grayscale(1) brightness(10);
      mix-blend-mode: screen;
    }
  }

  /* Responsive breakpoint based on Tailwind's "md" breakpoint. */
  @media (min-width: 768px) {
    footer {
      min-height: 7.5rem;
    }

    .links::after {
      content: '';
      width: 2px;
      height: 7.5rem;
      margin-top: 2rem;
      margin-left: 11px;
      background-color: #1a202c;
    }
  }
</style>

<footer class="p-6 sm:p-8 font-mono text-center bg-gray-900 text-white">
  <ul
    class="links md:fixed md:left-0 md:bottom-0 -mx-3 md:mx-12 mb-8 md:mb-0 flex md:flex-col flex-wrap justify-center"
  >
    {#each links as link}
      <li class="mx-3 md:mx-0 md:my-3">
        <a href={link.url} target="_blank" rel="noopener noreferrer">
          <img src={link.icon} alt="" />
        </a>
      </li>
    {/each}
  </ul>

  <small class="block my-1 text-xs sm:text-sm">Designed and built by Arnelle Balane</small>
  <small class="block my-1 text-xs sm:text-sm">Built using Sapper and TailwindCSS</small>
</footer>
