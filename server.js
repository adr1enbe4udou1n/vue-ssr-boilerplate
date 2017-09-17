require('dotenv').config()

const express = require('express')
const fs = require('fs')
const path = require('path')
const resolve = file => path.resolve(__dirname, file)

const { createBundleRenderer } = require('vue-server-renderer')
const template = fs.readFileSync('./index.html', 'utf-8')
const serverBundle = require('./dist/vue-ssr-server-bundle.json')
const clientManifest = require('./dist/vue-ssr-client-manifest.json')

const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false,
  template,
  clientManifest
})

const app = express()
const serve = (path, cache) => express.static(resolve(path))

app.use('/dist', serve('./dist', true))

app.get('*', (req, res) => {
  const context = {
    title: 'Vue SSR Boilerplate',
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
    res.end(html)
  })
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`server started at localhost:${port}`)
})
