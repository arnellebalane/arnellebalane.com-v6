export async function get(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.end(
    JSON.stringify([
      {
        name: 'Streaks',
        description:
          'A Web app for tracking habits using a GitHub-like calendar chart. All data is stored locally on the browser.',
        tags: ['Vue.js', 'IndexedDB'],
        url: 'https://streaks.patootie.app/',
        repo: 'https://github.com/arnellebalane/streaks',
        image: '/projects/streaks.jpg'
      },
      {
        name: 'Endpoints',
        description:
          'Built the frontend of a Web app for creating URL endpoints with customizable responses, useful as dummy APIs when developing other apps.',
        tags: ['Vue.js', 'WebSockets'],
        url: 'https://endpoints.uncaughexception.wtf/',
        repo: 'https://github.com/uncaughtxcptn/endpoints',
        image: '/projects/endpoints.jpg'
      }
    ])
  );
}
