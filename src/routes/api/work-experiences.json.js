import pick from 'lodash';
import contentful from '../_lib/contentful';

export async function get(req, res) {
  const entries = await contentful.getEntries({
    order: '-fields.startDate',
    content_type: 'workExperience'
  });

  const data = entries.items.map(({ fields }) =>
    pick(fields, ['company', 'position', 'startDate', 'endDate', 'isCurrent', 'description'])
  );

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(data));
}
