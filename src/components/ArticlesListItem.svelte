<style>
  article {
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.05);
  }

  img {
    width: calc(100% + 2.5rem); /* 2.5rem = 2 * .mx-5 */
  }

  /* Responsive breakpoint based on Tailwind's "sm" and "xl" breakpoints. */
  @media (min-width: 640px) and (max-width: 1279px) {
    img {
      width: calc(100% + 5rem); /* 5rem = 2 * .mx-10 */
    }
  }

  /* Responsive breakpoint based on Tailwind's "xl" breakpoint. */
  @media (max-width: 1279px) {
    img {
      max-width: initial;
    }
  }

  /* Responsive breakpoint based on Tailwind's "xl" breakpoint. */
  @media (min-width: 1280px) {
    img {
      top: 50%;
      transform: translateY(-50%);
    }
  }
</style>

<article class="relative p-5 mb-6 sm:p-10 sm:mb-12 border border-solid border-gray-100 rounded-lg xl:pr-56 xl:mr-48">
  <header class="mb-4 sm:mb-8">
    <img
      src="/article.jpg"
      alt=""
      class="xl:w-full -m-5 mb-5 sm:-m-10 sm:mb-10 rounded-t-lg xl:rounded-b-lg xl:absolute xl:right-0 xl:m-0 xl:-mr-48
      xl:max-w-sm xl:shadow-xl"
    />

    <a href="#">
      <h1 class="text-2xl sm:text-3xl font-bold">Async Clipboard API: Accessing the clipboard using JavaScript</h1>
    </a>
  </header>

  <p>
    Accessing the system clipboard has not been the most elegant thing to do for a long time. But this is about to
    change with the new Async Clipboard API, which allows us to programatically write to and read from the clipboard
    both text and image data.
  </p>

  <footer class="flex flex-wrap mt-6 sm:mt-12 -mx-4 text-gray-600">
    <time datetime="2019-09-06" class="mx-4">September 6, 2019</time>
    <a href="#" class="mx-4">Read more</a>
  </footer>
</article>
