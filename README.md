# sheffield-tenants-union.org.uk

Website for Sheffield Tenants' Union

(copied from <https://github.com/Sheffield-TU/website/> and turned into static site)

not currently hosted on `sheffield-tenants-union.org.uk`, only on example site:

<https://sheffield-tenants-union.surge.sh/>

when a domain entry is created, it can also be put on the pages settings -> <https://github.com/sheffield-tenants-union/sheffield-tenants-union.org.uk/settings/pages> (1)

## Changing content

images are in [`./images/`](./images/)

site information (URLs etc) is in [`./_data/site.yaml`](./_data/site.yaml)

front page content is at the top of [`./homepage.hbs`](./homepage.hbs)

the site is not currently automatically re-built. see above (1)

## Development

to develop, install [npm](https://www.npmjs.com/), clone the repository, and:

```bash
# install
npm install
# develop (hot reload and serve)
npm run dev
# build (into _site)
npm run build
```
