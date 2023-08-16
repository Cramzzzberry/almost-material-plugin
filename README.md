# Almost Material Plugin
The documentation for this plugin is still in development, but if you want to install for experimentation purposes, make sure you install [TailwindCSS](https://tailwindcss.com/docs/installation) first, then run:
```
npm install @cramzzzberry/almost-material-plugin
```
Then you need to import the plugin in your `tailwind.config.js` like this:
```
const plugin = require('@cramzzzberry/almost-material-plugin')

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
  },
  plugins: [plugin.almostMaterial],
}
```

## Custom palette for almost-material-plugin
Almost Material Plugin has a default palette of 7 colors:
#### 3 main colors
- Primary
- Secondary
- Tertiary
#### 4 status colors:
- Info
- Warning
- Success
- Error

You can override the default palette by making your own palette `Object` and pass it to `almostMaterial` key under `theme` like this:
```
const plugin = require('@cramzzzberry/almost-material-plugin')

const myPalette = {
  primary: "#4fc1e9",
   
  secondary: "#ec87c0",
      
  tertiary: "#ac92ec",
      
  info: "#5d9cec",
      
  warning: "#ffce54",
      
  success: "#a0d468",
      
  error: "#ed5565",
}

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    almostMaterial: myPalette,
  },
  plugins: [plugin.almostMaterial],
}
```

## Extend and automatically create shades based user's palette
Almost Material Plugin has 10 shades for each color in the palette:
- 0
- 10
- 20
- 30
- 40 (Default Color)
- 50
- 60
- 70
- 80
- 90
- 95
- 99
- 100

Use the function `createShades(yourPalette)` to produce these shades and `extend` it via `theme` like this:
```
const plugin = require('@cramzzzberry/almost-material-plugin')

const myPalette = {
  primary: "#4fc1e9",
   
  secondary: "#ec87c0",
      
  tertiary: "#ac92ec",
      
  info: "#5d9cec",
      
  warning: "#ffce54",
      
  success: "#a0d468",
      
  error: "#ed5565",
}

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: plugin.CreateShades(myPalette)
    },
    almostMaterial: myPalette,
  },
  plugins: [plugin.almostMaterial],
}
```

##About the plugin
The plugin's purpose is to help myself understand CSS more and to expose myself more to TailwindCSS plugin
