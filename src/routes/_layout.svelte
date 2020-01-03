<script>
  import Nav from '@components/Nav.svelte';
  import Footer from '@components/Footer.svelte';

  export let segment;
</script>

<style>
  main {
    max-width: 68rem;
  }
</style>

<Nav {segment} />

<main class="relative p-5 md:px-32 xl:px-5 mx-auto">
  <slot />
</main>

<Footer />
