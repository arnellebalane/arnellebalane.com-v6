const htmlparser2 = require('htmlparser2');

const shouldIgnore = tag => {
  if (tag.length) {
    if (tag.startsWith('svelte:')) {
      return true;
    }
    if (tag === 'script' || tag === 'style') {
      return true;
    }
  }
  return false;
};

const extract = content => {
  let selectors = [];
  const customAttributes = ['wrapperClass', 'imageClass'];

  const parser = new htmlparser2.Parser(
    {
      onopentag: (tag, attribs) => {
        if (shouldIgnore(tag)) {
          return;
        }
        selectors.push(tag);
        if (attribs) {
          if (attribs.class) {
            const classes = attribs.class.match(/[A-Za-z0-9-_:/]+/g) || [];
            selectors = selectors.concat(classes);
          }

          Object.keys(attribs).forEach(attr => {
            if (attr.startsWith('class:')) {
              selectors.push(attr.substring('class:'.length));
            }
            if (customAttributes.includes(attr)) {
              const classes = attribs[attr].match(/[A-Za-z0-9-_:/]+/g) || [];
              selectors = selectors.concat(classes);
            }
          });
          if (attribs.id) {
            selectors.push(attribs.id);
          }
        }
      }
    },
    {
      decodeEntities: true,
      lowerCaseAttributeNames: false,
      lowerCaseTags: false
    }
  );
  parser.write(content);
  parser.end();

  return [...new Set(selectors)];
};

module.exports = extract;
