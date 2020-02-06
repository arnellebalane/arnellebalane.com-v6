import path from 'path';
import { promises as fs } from 'fs';

// process.cwd() will _usually_ point to the project's root directory.
// This seems very fragile though, hoping to improve this soon.
const articlesDir = path.join(process.cwd(), 'src/routes/_articles');

export async function get(req, res) {
  const { slug } = req.params;
  const markdown = await fs.readFile(path.join(articlesDir, `${slug}.md`), 'utf8');

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ html: markdown }));
}
