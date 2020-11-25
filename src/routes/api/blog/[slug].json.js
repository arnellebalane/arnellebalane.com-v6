import getArticles from '@lib/get-articles';

export async function get(req, res) {
  const { slug } = req.params;
  const articles = await getArticles();

  const response = articles.find((article) => article.meta.slug === slug);

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(response));
}
