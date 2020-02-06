import pick from 'lodash/pick';
import contentful from '../_lib/contentful';

export async function get(req, res) {
  const entries = await contentful.getEntries({
    order: '-fields.date',
    content_type: 'project',
    'fields.is_featured': true
  });

  const data = entries.items.map(({ fields }) => ({
    ...pick(fields, ['name', 'description', 'url', 'repository', 'tags']),
    image: `${fields.image.fields.file.url}?fm=webp&q=80`
  }));

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(data));
}
