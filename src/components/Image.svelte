<script>
  import getOptimizedImage from '@lib/get-optimized-image';

  export let src;
  export let alt;
  export let width;
  export let height;
  export let aspectRatio = `100% / ${width} * ${height}`;
  export let wrapperClass = '';
  export let imageClass = '';

  const aspectRatioFormatted = `calc(${aspectRatio})`;
</script>

<div class="relative {wrapperClass}">
  <div style="padding-top: {aspectRatioFormatted}">
    <picture>
      <source srcset={getOptimizedImage(src, `w_${width},f_webp,q_85`)} type="image/webp" />
      <img
        src={getOptimizedImage(src, `w_${width},q_85`)}
        {alt}
        {width}
        {height}
        loading="lazy"
        class="absolute inset-0 w-full h-full object-cover object-center {imageClass}"
      />
    </picture>
  </div>
</div>
