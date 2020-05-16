<script context="module">
  export async function preload() {
    const response = await this.fetch('api/work-experiences.json');
    const experiences = await response.json();

    return { experiences };
  }
</script>

<script>
  import WorkExperiences from '@components/WorkExperiences.svelte';
  import Image from '@components/Image.svelte';

  export let experiences = [];
</script>

<svelte:head>
  <title>About | Arnelle Balane</title>
</svelte:head>

<div class="flex justify-between items-start mb-32">
  <div class="max-w-xl">
    <h1 class="mb-6 text-2xl sm:text-3xl font-black">About Me</h1>

    <p class="mb-6">
      Hello! I’m Arnelle, a software developer based in Cebu, Philippines. I enjoy building things using good old HTML,
      CSS, JavaScript, and Web Platform APIs.
    </p>
    <p class="mb-6">
      I'm a Google Developers Expert in Web Technologies, and an active volunteer and speaker for local tech
      communities, giving talks and conducting workshops about various technical topics.
    </p>
    <p>
      When not busy experimenting with new Web APIs, I like to spend my time taking photos, playing video games, or
      practicing my card tricks.
    </p>
  </div>

  <Image
    src="speaking.jpg"
    alt="Arnelle Balane"
    width={350}
    height={386}
    wrapperClass="hidden sm:block w-1/4 lg:w-1/3 mt-10 lg:mt-5 ml-10"
    imageClass="rounded-lg"
  />
</div>

<div class="mb-32">
  <h2 class="mb-6 text-xl sm:text-2xl font-black">Experience</h2>

  <WorkExperiences {experiences} />
</div>

<div class="mb-32">
  <h2 id="biography" class="mb-6 text-xl sm:text-2xl font-black">Biography</h2>

  <div class="flex flex-col-reverse sm:flex-row items-center sm:items-start">
    <Image
      src="arnelle-avatar.jpg"
      alt="Arnelle Balane"
      width={192}
      height={192}
      wrapperClass="w-1/2 sm:w-1/3 lg:w-48 mr-5 md:mr-10"
      imageClass="rounded-lg"
    />

    <p class="max-w-xl mb-5">
      Arnelle is a Web developer from Cebu, Philippines and a Google Developers Expert for Web Technologies who enjoys
      building things with good old HTML, CSS, JavaScript, and Web Platform APIs. He is an active volunteer and speaker
      for GDG Cebu and other local JavaScript communities. When not busy experimenting with new Web APIs, he can also be
      seen taking photos, playing video games, or practicing his card tricks.
    </p>
  </div>
</div>
