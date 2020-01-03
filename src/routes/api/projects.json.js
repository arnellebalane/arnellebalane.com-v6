export async function get(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.end(
    JSON.stringify([
      {
        name: 'mdi-cli',
        description: 'A command-line tool for generating Material Design icons.',
        tags: ['Node', 'Puppeteer'],
        repo: 'https://github.com/arnellebalane/mdi-cli'
      },
      {
        name: 'hermes',
        description: 'Client-side messaging channel for sending data from one browser tab to another.',
        tags: ['BroadcastChannel', 'LocalStorage', 'SharedWorkers'],
        repo: 'https://github.com/arnellebalane/hermes'
      },
      {
        name: 'vue-intersect',
        description: 'A Vue.js plugin that reports element intersections using the Intersection Observer API.',
        tags: ['Vue.js', 'IntersectionObserver'],
        repo: 'https://github.com/arnellebalane/vue-intersect'
      },
      {
        name: 'imgur-upload-cli',
        description: 'Upload images to imgur.com from the command-line.',
        tags: ['Node', 'Imgur API'],
        repo: 'https://github.com/arnellebalane/imgur-upload-cli'
      },
      {
        name: 'parcel-plugin-data-src',
        description: 'A ParcelJS plugin to bundle resources defined in data-src and data-srcset attributes.',
        tags: ['ParcelJS'],
        repo: 'https://github.com/arnellebalane/parcel-plugin-data-src'
      },
      {
        name: 'snippets',
        description: 'A Web app for hosting code snippets online. Inspired by putco.de.',
        tags: ['Vue.js'],
        repo: 'https://github.com/arnellebalane/snippets'
      }
    ])
  );
}
