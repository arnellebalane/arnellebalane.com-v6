import pick from 'lodash/pick';
import _get from 'lodash/get';
import contentful from '@lib/contentful';

export async function get(req, res) {
  const entries = await contentful.getEntries({
    order: '-fields.date',
    content_type: 'project',
  });

  const data = entries.items.map(({ fields }) => ({
    ...pick(fields, ['name', 'description', 'url', 'repository', 'tags', 'is_featured']),
    image: _get(fields, 'image.fields.file.url'),
  }));

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(data));
}
