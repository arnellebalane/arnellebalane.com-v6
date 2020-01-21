import contentful from '../_lib/contentful';

export async function get(req, res) {
  const entries = await contentful.getEntries({
    order: '-sys.createdAt',
    content_type: 'event'
  });
  const data = entries.items.map(({ fields }) => {
    const entry = {
      name: fields.name,
      session: fields.session,
      url: fields.url,
      type: fields.type,
      location: fields.location,
      date: fields.date
    };
    if (fields.image) {
      entry.image = fields.image.fields.file.url;
    }
    return entry;
  });

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(data));
}
