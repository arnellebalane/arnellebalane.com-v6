<script>
  export let segment;
</script>

<style>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 5rem 8rem;
}

a {
  text-decoration: none;
}

h1 {
  margin: 0;

  font-size: 1.8rem;
  font-weight: 900;
}

ul {
  display: flex;
  margin: 0 -1.6rem 0 0;
  padding: 0;

  list-style: none;
}

li {
  margin: 0 1.6rem;
}
</style>

<nav>
  <a href="/">
    <h1>arnellebalane</h1>
  </a>

  <ul>
    <!-- For the links to pages that contain dynamic data, we're using
         rel="prefetch" so that Sapper prefetches the blog data when we hover
         over the  link or tap on it on a touchscreen. -->

    <li>
      <a class:selected={segment === 'blog'} rel="prefetch" href="blog">Blog</a>
    </li>
    <li>
      <a class:selected={segment === 'events'} rel="prefetch" href="events">Events</a>
    </li>
    <li>
      <a class:selected={segment === 'projects'} rel="prefetch" href="projects">Projects</a>
    </li>
    <li>
      <a class:selected={segment === 'about'} href="about">About</a>
    </li>
  </ul>
</nav>
