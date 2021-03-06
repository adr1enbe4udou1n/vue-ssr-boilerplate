require('dotenv').config()

const express = require('express')
const LRU = require('lru-cache')
const path = require('path')
const resolve = (file) => path.resolve(__dirname, file)

const { createBundleRenderer } = require('vue-server-renderer')

const production = process.env.NODE_ENV === 'production'

const app = express()
const serve = (path, cache) => express.static(resolve(path))

let renderer
let readyPromise

if (production) {
  const serverBundle = require('./dist/vue-ssr-server-bundle.json')
  const clientManifest = require('./dist/vue-ssr-client-manifest.json')
  renderer = createBundleRenderer(serverBundle, {
    runInNewContext: false,
    clientManifest
  })
} else {
  readyPromise = require('./build/setup-dev-server')(app, (bundle, options) => {
    renderer = createBundleRenderer(bundle, Object.assign(options, {
      cache: LRU({
        max: 1000,
        maxAge: 1000 * 60 * 15
      }),
      runInNewContext: false
    }))
  })
}

app.use('/dist', serve('./dist', true))

const microCache = LRU({
  max: 100,
  maxAge: 1000
})

function render (req, res) {
  const hit = microCache.get(req.url)
  if (hit) {
    return res.end(hit)
  }

  const context = {
    url: req.url
  }

  renderer.renderToString(context, (err, html) => {
    if (err) {
      if (err.url) {
        res.redirect(err.url)
      } else if (err.code === 404) {
        res.status(404).send('404 | Page Not Found')
      } else {
        res.status(500).send('500 | Internal Server Error')
        console.error(`error during render : ${req.url}`)
        console.error(err.stack)
      }
      return
    }

    const {
      title, htmlAttrs, bodyAttrs, link, meta
    } = context.meta.inject()

    html = `
<!DOCTYPE html>
<html data-vue-meta-server-rendered ${htmlAttrs.text()}>
  <head>
    ${meta.text()}
    ${title.text()}
    ${link.text()}
    ${context.renderResourceHints()}
    ${context.renderStyles()}
  </head>
  <body ${bodyAttrs.text()}>
    ${html}
    ${context.renderState()}
    ${context.renderScripts()}
  </body>
</html>
    `

    microCache.set(req.url, html)
    return res.send(html)
  })
}

app.get('*', production ? render : (req, res) => {
  readyPromise.then(() => render(req, res))
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`server started at localhost:${port}`)
})
