# Site Template
Webpack + React edition

-----

### Development

* Webpack
* Hot Module Replacement / React Hot Loader

### Build

* JS uglified
* CSS minified and optimised

### JavaScript

* Pre-configured with React
* ES6+ transpilation using Babel
* ESLint using Airbnb rules (extended)

### CSS

* SASS
* React CSS Modules (module CSS is namespaced, no need to use BEM)
* Reset, grid, and utility classes (the only global CSS)
* PostCSS configured with:
  * Autoprefixer
  * Easy media queries (e.g. `@below xs {}`)
  * PostCSS Assets (inline images in CSS, get dimensions, cachebusting, etc.)

-----

### Getting started

* Clone the repository
* `npm install`
* To start the dev server:
  * `npm run dev`
  * Visit http://0.0.0.0:8080/
* To build the assets for distribution:
  * `npm run build`
  * Files are output to `./dist`

-----

#### Breakpoints

##### Values

* `xs`: 544px
* `sm`: 768px
* `md`: 992px
* `lg`: 1200px

##### Options

* `@above`
* `@from-width` (min inclusive)
* `@below`
* `@to-width` (max inclusive)
* `@between`
* `@between-from` (min inclusive)
* `@between-to` (max inclusive)
* `@breakpoint` for defining a breakpoint
