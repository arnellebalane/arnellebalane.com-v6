let { CLOUDINARY_BASE_URL } = process.env;

if (CLOUDINARY_BASE_URL) {
  CLOUDINARY_BASE_URL = CLOUDINARY_BASE_URL.replace(/\/$/, '/');
}

export default function getOptimizedImage(url, transforms) {
  if (!url) {
    return null;
  }
  if (!CLOUDINARY_BASE_URL) {
    return url;
  }

  // Image is coming from third-party image hosting, and has no URL scheme
  if (url.startsWith('//')) {
    url = `https:${url}`; /* eslint-disable-line no-param-reassign */
  }

  return [CLOUDINARY_BASE_URL, 'image/fetch', transforms, url].filter(Boolean).join('/');
}
