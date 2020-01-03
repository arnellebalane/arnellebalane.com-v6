import contentful from '../_lib/contentful';

export async function get(req, res) {
  const entries = await contentful.getEntries({
    order: '-sys.createdAt',
    content_type: 'project',
    'fields.is_featured': true
  });
  const data = entries.items.map(({ fields }) => ({
    name: fields.name,
    description: fields.description,
    url: fields.url,
    repo: fields.repository,
    tags: fields.tags,
    image: `${fields.image.fields.file.url}?fm=webp&q=80`
  }));

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(data));
}
