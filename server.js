require('dotenv').config()

const server = require('express')()

const { createBundleRenderer } = require('vue-server-renderer')
const template = require('fs').readFileSync('./index.template.html', 'utf-8')
const serverBundle = require('./vue-ssr-server-bundle.json')
const clientManifest = require('./vue-ssr-client-manifest.json')

const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false,
  template,
  clientManifest
})

server.get('*', (req, res) => {
  const context = { url: req.url }

  renderer.renderToString(context, (err, html) => {
    if (err) {
      if (err.code === 404) {
        res.status(404).end('Not Found')
      } else {
        res.status(500).end('Internal error')
      }
    } else {
      res.end(html)
    }
  })
})

server.listen(process.env.PORT)
