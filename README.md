# straight-react-starter-kit
> Keep everything straight forward and explained.

## Why another starter kit?
I have been looking for an up-to-date, activly-developing React starter kit (web only), and I found [davezuko/react-redux-starter-kit](https://github.com/davezuko/react-redux-starter-kit). It's great, but 

- there are always some parts to be tailored 
- it's introduing more and more packages I am not familiar with

So I decide to build my own starter kit, for my own usage and show how I build it.

## References
It is build based on [davezuko/react-redux-starter-kit](https://github.com/davezuko/react-redux-starter-kit).

## Features

- [React](https://github.com/facebook/react) (`^0.14.0`)
    * Includes react-addons-test-utils (`^0.14.0`)
- [Redux](https://github.com/gaearon/redux) 
    * react-redux 
    * ~~redux-devtools~~ use Chrome extention [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension) instead
    * redux-thunk middleware
- [react-router](https://github.com/rackt/react-router) (`^1.0.0`)
- [redux-simple-router](https://github.com/jlongster/redux-simple-router) (`^1.0.0`)
- [Webpack](https://github.com/webpack/webpack)
    * sass-loader
    * postcss-loader with [cssnano](https://github.com/ben-eb/cssnano) for style autoprefixing and minification
    * Separate vendor-only bundle for common dependencies
    * CSS extraction during production builds
    * Loader support for fonts and images
- [Express](https://github.com/strongloop/express)
    * webpack-dev-middleware
    * webpack-hot-middleware
- [Babel](https://github.com/babel/babel) (`^6.3.0`)
    * `react-transform-hmr` for hot reloading
    * `react-transform-catch-errors` with `redbox-react` for more visible error reporting
    * Uses babel runtime rather than inline transformations


