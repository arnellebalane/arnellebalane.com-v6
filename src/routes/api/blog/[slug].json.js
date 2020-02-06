import path from 'path';
import { promises as fs } from 'fs';
import pick from 'lodash/pick';
import frontmatter from 'front-matter';
import marked from 'marked';

// process.cwd() will _usually_ point to the project's root directory.
// TODO: This seems very fragile though, hoping to improve this soon.
const articlesDir = path.join(process.cwd(), 'src/routes/_articles');

export async function get(req, res) {
  const { slug } = req.params;
  const content = await fs.readFile(path.join(articlesDir, `${slug}.md`), 'utf8');
  const extracted = frontmatter(content);
  const response = {
    meta: pick(extracted.attributes, ['title', 'description', 'image', 'categories', 'tags', 'date']),
    html: marked(extracted.body)
  };

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(response));
}
