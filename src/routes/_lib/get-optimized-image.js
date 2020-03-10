let { BASE_URL, CLOUDINARY_BASE_URL } = process.env;

if (BASE_URL) {
  BASE_URL = BASE_URL.replace(/\/$/, '');
}

if (CLOUDINARY_BASE_URL) {
  CLOUDINARY_BASE_URL = CLOUDINARY_BASE_URL.replace(/\/$/, '');
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
    /* eslint-disable-next-line no-param-reassign */
    url = `https:${url}`;
  } else {
    /* eslint-disable-next-line no-param-reassign */
    url = `${BASE_URL}/${url.replace(/^\//, '')}`;
  }

  return [CLOUDINARY_BASE_URL, 'image/fetch', transforms, url].filter(Boolean).join('/');
}
