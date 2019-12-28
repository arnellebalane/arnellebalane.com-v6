<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style>
  main {
    max-width: 56em;
  }
</style>

<Nav {segment} />

<main class="relative p-8 mx-auto">
  <slot />
</main>
