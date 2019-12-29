<script>
  export let projects = [];
</script>

<ul>
  {#each projects as project}
    <li>{project}</li>
  {/each}
</ul>
