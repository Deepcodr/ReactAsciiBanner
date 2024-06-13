# `reactasciibanner`

React-Ascii-Banner is a JavaScript package for providing a custom way to display your Ascii banner in react application. It will be visible while running application in console and other command line interfaces.

The `react-ascii-banner` package contains files and utilities for running react dev server and displaying text ascii banner. It is uses cross-spawn and chalk as dependencies.

**Note:** Currently this package is in development and provides a simple way to present a ascii banner in react development server. More upgraded builds and versions will be available in future . Don't forget to use the react-scripts when deploying your application until upgraded versions of this package are available.

## Usage
install the package using npm at latest version

```
npm i @deepcodr/reactasciibanner
```

the package binary will be registered globally once package is installed.

Put the ReactAsciiBanner.txt file containing your Ascii banner in `src` folder of your react project.

Update the package.json scripts to use `react-banner ` instead of react-scripts

```js
"scripts": {
    "start": "react-banner start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```

**Note:** Currently only react-scripts start is supported by this package.

Run the application using npm start
```
npm start
```

## Contributions

Contributing is highly appreciated. Fork the code and then Create a Valid PR on Github.
