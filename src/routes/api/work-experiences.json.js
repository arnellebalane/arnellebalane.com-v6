import contentful from '../_lib/contentful';

export async function get(req, res) {
  const entries = await contentful.getEntries({
    order: '-fields.startDate',
    content_type: 'workExperience'
  });
  const data = entries.items.map(({ fields }) => ({
    company: fields.company,
    position: fields.position,
    startDate: fields.startDate,
    endDate: fields.endDate,
    isCurrent: fields.isCurrent,
    description: fields.description
  }));

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(data));
}
