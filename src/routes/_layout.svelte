<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style>
  main {
    max-width: 68rem;
  }
</style>

<Nav {segment} />

<main class="relative p-5 mx-auto">
  <slot></slot>
</main>
