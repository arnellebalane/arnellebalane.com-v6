import pick from 'lodash/pick';
import contentful from '@lib/contentful';

export async function get(req, res) {
  const entries = await contentful.getEntries({
    order: '-fields.date',
    content_type: 'project',
    'fields.is_featured': false,
  });

  const data = entries.items.map(({ fields }) => pick(fields, ['name', 'description', 'repository', 'tags']));

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(data));
}
