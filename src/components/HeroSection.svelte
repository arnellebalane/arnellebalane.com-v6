<script>
  import Image from './Image.svelte';
</script>

<section class="flex flex-col-reverse sm:flex-row mb-24 sm:mb-56">
  <Image
    src="arnelle-avatar.jpg"
    alt="Arnelle Balane"
    width={256}
    height="320"
    wrapperClass="w-32 md:w-64 h-40 md:h-80 mx-auto sm:mx-0 sm:mr-5 md:mr-8"
    imageClass="rounded-lg"
  />

  <div class="max-w-lg my-4">
    <p class="mb-2">👋 Hello! My name is</p>
    <h1 class="text-3xl sm:text-4xl md:text-5xl font-black mb-8">Arnelle Balane</h1>

    <p class="mb-4">
      I'm a software developer based in Cebu, Philippines focused on building fast and high-quality Web applications.
    </p>
    <p class="mb-4">
      I'm also a Google Developers Expert for Web Technologies, passionate in sharing about and showing how awesome the
      Web platform is.
    </p>
  </div>
</section>
