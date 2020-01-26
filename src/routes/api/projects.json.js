import contentful from '../_lib/contentful';

export async function get(req, res) {
  const entries = await contentful.getEntries({
    order: '-fields.date',
    content_type: 'project',
    'fields.is_featured': false
  });
  const data = entries.items.map(({ fields }) => ({
    name: fields.name,
    description: fields.description,
    repo: fields.repository,
    tags: fields.tags
  }));

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(data));
}
