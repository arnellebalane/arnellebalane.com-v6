import pick from 'lodash/pick';
import _get from 'lodash/get';
import contentful from '../_lib/contentful';

export async function get(req, res) {
  const entries = await contentful.getEntries({
    order: '-fields.date',
    content_type: 'article'
  });

  const data = entries.items.map(({ fields }) => ({
    ...pick(fields, ['title', 'description', 'date', 'url', 'source', 'categories']),
    cover_image: _get(fields, 'cover_image.fields.file.url')
  }));

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(data));
}
