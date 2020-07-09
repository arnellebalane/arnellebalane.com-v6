<script>
  import { onMount } from 'svelte';
  import Nav from '@components/Nav.svelte';
  import Footer from '@components/Footer.svelte';

  export let segment;

  onMount(() => {
    /* eslint-disable-next-line global-require */
    require('quicklink').listen();
  });
</script>

<style>
  main {
    max-width: 68rem;
  }
</style>

<div class="flex flex-col min-h-screen">
  <Nav {segment} />

  <main class="flex-grow w-full relative px-5 md:px-32 xl:px-5 py-12 md:py-24 mx-auto">
    <slot />
  </main>

  <Footer />
</div>
