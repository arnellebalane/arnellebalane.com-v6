import path from 'path';
import { promises as fs } from 'fs';
import pick from 'lodash/pick';
import frontmatter from 'front-matter';
import marked from 'marked';
import dayjs from 'dayjs';

// process.cwd() will _usually_ point to the project's root directory.
// TODO: This seems very fragile though, hoping to improve this soon.
const articlesDir = path.join(process.cwd(), 'src/routes/_articles');

let articles = [];

export default async function getArticles() {
  if (articles.length === 0) {
    const fileNames = await fs.readdir(articlesDir);

    articles = await Promise.all(
      fileNames.map(async fileName => {
        const filePath = path.join(articlesDir, fileName);
        const fileContent = await fs.readFile(filePath, 'utf8');
        const slug = fileName.replace(/\.md$/, '');
        const extracted = frontmatter(fileContent);
        const article = {
          meta: {
            ...pick(extracted.attributes, ['title', 'description', 'date', 'categories', 'cover_image']),
            date: dayjs(extracted.attributes.date).format('YYYY-MM-DD'),
            url: `/blog/${slug}`,
            slug
          },
          html: marked(extracted.body)
        };
        return article;
      })
    );
  }

  return articles;
}
