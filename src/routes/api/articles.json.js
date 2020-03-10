import pick from 'lodash/pick';
import _get from 'lodash/get';
import sortBy from 'lodash/sortBy';
import contentful from '@lib/contentful';
import getArticles from '@lib/get-articles';

const baseUrl = process.env.BASE_URL.replace(/\/$/, '');

export async function get(req, res) {
  const [remoteEntries, localEntries] = await Promise.all([
    contentful.getEntries({
      order: '-fields.date',
      content_type: 'article'
    }),
    getArticles()
  ]);

  let data = [].concat(
    remoteEntries.items.map(({ fields }) => ({
      ...pick(fields, ['title', 'description', 'date', 'url', 'source', 'categories']),
      cover_image: _get(fields, 'cover_image.fields.file.url')
    })),
    localEntries.map(entry => ({
      ...entry.meta,
      cover_image: baseUrl + entry.meta.cover_image
    }))
  );

  // Lodash's sortBy always sorts in ascending order, so we take the negative
  // value of the date so that the latest article comes first.
  data = sortBy(data, entry => -new Date(entry.date).valueOf());

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(data));
}
