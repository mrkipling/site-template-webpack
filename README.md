# Site Template

Webpack + React edition

---

### Development

- Webpack
- Hot Module Replacement / React Hot Loader
- Hygen for component code generation

### Build

- JS uglified
- Assets optimised

### JavaScript

- Pre-configured with React
- ES6+ transpilation using Babel, pre-configured with stage-1 (transformation of ES7 class properties, etc.)
- Configured with simple, not overly-restrictive ESLint and Prettier rules, with the view that you will use them in your editor (not in Webpack)

### CSS

- Uses styled-components
- Sensible global reset
- Theme provider with theme template

---

### Getting started

- Clone the repository
- `npm install`
- To start the dev server:
  - `npm run dev`
  - Visit http://0.0.0.0:8080/
- To build the assets for distribution:
  - `npm run build`
  - Files are output to `./dist`
