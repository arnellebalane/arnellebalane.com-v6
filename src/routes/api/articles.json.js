import contentful from '../_lib/contentful';

export async function get(req, res) {
  const entries = await contentful.getEntries({
    order: '-fields.date',
    content_type: 'article'
  });
  const data = entries.items.map(({ fields }) => {
    const entry = {
      title: fields.title,
      description: fields.description,
      date: fields.date,
      url: fields.url,
      source: fields.source,
      categories: fields.categories
    };
    if (fields.cover_image) {
      entry.cover_image = `${fields.cover_image.fields.file.url}?fm=webp&q=80`;
    }
    return entry;
  });

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(data));
}
