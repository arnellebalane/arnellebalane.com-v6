import getOptimizedImage from './get-optimized-image';

export default function optimizeHtmlImages(html) {
  const articleImagePattern = /\/articles\/[^\s"]+(\?cloudinary=([\s"]+))?/g;

  return html.replace(articleImagePattern, (match) => {
    const [url, transforms] = match.split('?cloudinary=');
    return getOptimizedImage(url, transforms);
  });
}
