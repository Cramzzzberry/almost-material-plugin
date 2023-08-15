/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
import { ShadeHexColor } from "./misc"

import { AddBase, themeStyles } from "./add-base"
import AddComponents from "./add-components"
import MatchComponents from "./match-components"

const plugin = require("tailwindcss/plugin")

//shade presets for palettes
const shades = {
	0: "-1",
	10: "-0.75",
	20: "-0.5",
	30: "-0.25",
	40: "0",
	50: "0.17",
	60: "0.34",
	70: "0.51",
	80: "0.68",
	90: "0.85",
	95: "0.93",
	99: "0.98",
	100: "1",
}

const defaultPalette = {
  primary: "#4fc1e9",
   
  secondary: "#ec87c0",
      
  tertiary: "#ac92ec",
      
  info: "#5d9cec",
      
  warning: "#ffce54",
      
  success: "#a0d468",
      
  error: "#ed5565",
}

//creates a palette based on the shades given and the palette that will be used
const CreateShades = (palette = defaultPalette) => {
	let colorsAndShades = {} //an object for storing all color shades of the userPalette

	for (const color of Object.keys(palette)) {
		colorsAndShades[`${ color }-0`] = ShadeHexColor(palette[color], shades[0])
		colorsAndShades[`${ color }-10`] = ShadeHexColor(palette[color], shades[10])
		colorsAndShades[`${ color }-20`] = ShadeHexColor(palette[color], shades[20])
		colorsAndShades[`${ color }-30`] = ShadeHexColor(palette[color], shades[30])
		colorsAndShades[`${ color }-40`] = ShadeHexColor(palette[color], shades[40])
		colorsAndShades[`${ color }-50`] = ShadeHexColor(palette[color], shades[50])
		colorsAndShades[`${ color }-60`] = ShadeHexColor(palette[color], shades[60])
		colorsAndShades[`${ color }-70`] = ShadeHexColor(palette[color], shades[70])
		colorsAndShades[`${ color }-80`] = ShadeHexColor(palette[color], shades[80])
		colorsAndShades[`${ color }-90`] = ShadeHexColor(palette[color], shades[90])
		colorsAndShades[`${ color }-95`] = ShadeHexColor(palette[color], shades[95])
		colorsAndShades[`${ color }-99`] = ShadeHexColor(palette[color], shades[99])
		colorsAndShades[`${ color }-100`] = ShadeHexColor(palette[color], shades[100])
		colorsAndShades[`${ color }`] = ShadeHexColor(palette[color], shades[40])
	}

	return colorsAndShades
}

const ThemeColorsBreakdown = (colors) => { //breakes down the preset colors of tailwind and returns with a format 'color-shade'
  let brokenDownColors = {}

  for (const key of Object.keys(colors)) {
    if (typeof(colors[key]) === "string") {
      brokenDownColors[`${ key }`] = colors[key]
    } else {
      for (const nestedKey of Object.keys(colors[key])) {
        brokenDownColors[`${ key }-${ nestedKey }`] = colors[key][nestedKey]
      }
    }
	}

  return brokenDownColors
}

const almostMaterial = plugin(
  
	function({addComponents, matchComponents, theme, addBase}) {
		let userPalette = {}

		try {
			userPalette = theme("almostMaterial") //get the palette from tailwind config
		} catch (error) {
			userPalette = defaultPalette
		}

		addComponents(AddComponents(shades))

		matchComponents(MatchComponents(shades), { values: {...CreateShades(userPalette), ...ThemeColorsBreakdown(theme("colors"))} })

		addBase({...AddBase(shades), ...themeStyles(CreateShades(userPalette), shades)});
		addBase({
			"@font-face": {
        fontFamily: "'PlusJakartaSans'",
        src: "url('node_modules/almost-material/src/PlusJakartaSans.ttf') format('truetype-variations')",
				fontWeight: "100 900",
			},
		});
	}
)

module.exports = { almostMaterial, CreateShades }