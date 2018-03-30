# Yet Another React Circular Progress

Yes! Another circular progress for React, but only because I couldn't find all I wanted in the exisiting solutions.

### How is this one different?

* Use Aphrodite to generate dynamic styles based on the props
* Support for react 15 and 16
* Use only `transform` css property for the animations
* No SVG animations with weird bugs
* Is under 3k gzipped
* Really nice UX
* Animation for the numbers
* Very customizable (see examples)

## Screenshot

![React Circular Progress](/screenshot.png?raw=true 'Screenshot')

## Demos

https://tomsarduy.github.io/react-circular-progress/

## Install

`npm install react-yet-another-progress-bar`

`yarn install react-yet-another-progress-bar`

## Installing without npm or yarn

If you think you want to make some changes or want to add the component as part of your repository, you just need to copy/paste `src/index.js` and `src/index.styles.js` into your project if you are already using Aphrodite.

## Usage

1. Import the component:

   `import ProgressTracker from 'react-yet-another-progress-bar';`

2. Render and pass props:

   `<ProgressTracker progress={percentageValue} />`

## Running this repo locally

1. Clone the repo
2. Run `npm install`
3. Run `npm start`

## Structure

The basic structure of the project is given in the following way:

```
├── demo/
│   ├── dist
│   │    ├── index.html
│   │    ├── demo.js
│   │    ├── demo.js.map
│   │    ├── manifiest.js
│   │    └── manifiest.js.map
│   └── src
│        ├── index.js
│        └── index.styles.js
├── lib/
│   ├── index.js
│   └── index.styles.js
├── src/
│   ├── index.js
│   └── index.styles.js
├── es/
│   ├── index.js
│   └── index.styles.js
├── .eslintrc.js
├── .travis.yml
├── .gitignore
├── nwb.config.js
├── CONTRIBUTING.md
├── package.json
├── package-lock.json
├── LICENSE
└── README.md
```

## Authors

[Tom Sarduy](https://github.com/tomsarduy)

## Contributing

Create a pull request, issue or send me a message [@TomSarduy](https://twitter.com/TomSarduy)

## License

[Apache License](https://github.com/tomsarduy/react-yet-another-progress-bar/blob/master/LICENSE) © Tom Sarduy
