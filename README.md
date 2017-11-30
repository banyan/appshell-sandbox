# appshell-sandbox

```
yarn start
yarn run build
```

An attempt to verify following [statement](https://blog.usejournal.com/when-should-i-server-side-render-c2a383ff2d0f):

>Does your app require a sign-in to view most content (e.g. GMail)?
>If so, you don’t need SSR. Build a static app shell that pops up the login page with as fast of Time-To-Interactive as you can, and preload all of your app's assets and scripts while the user types in their credentials. Use a service worker to cache your app shell so subsequent loads remain super-speedy.

* Login page
* Dashboard
* About

### Features

- [x] App Shell pattern
- [x] Service Worker by sw-precache
- [x] Critical CSS
- [x] PRPL, route-based chunking
- [x] Preload link headers using [preload-webpack-plugin](https://github.com/GoogleChrome/preload-webpack-plugin)
  - It's very lazy way right now :(
- [ ] HTTP/2 server push
- [ ] CommonsChunkPlugin by webpack
- [ ] Brotli and Zopfli
