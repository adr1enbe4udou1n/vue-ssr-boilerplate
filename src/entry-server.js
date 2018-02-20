import { createApp } from './main'

export default (context) => {
  return new Promise((resolve, reject) => {
    const { app, router, store } = createApp()

    router.push(context.url)
    context.meta = app.$meta()

    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()
      if (!matchedComponents.length) {
        // eslint-disable-next-line prefer-promise-reject-errors
        return reject({ code: 404 })
      }

      context.state = store.state
      resolve(app)
    }, reject)
  })
}
