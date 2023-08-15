//this function returns an object that will be used on matchComponents() plugin function of tailwind css
//some day, i will also clean up some mess here and organize all styles so that it will be easier to read
//also stucked between using js variable for some styles or using a hard-coded value, dunno if it will impact performance but
//will definetely impact code readability
//i think i need to put !important on all styles here

import { ShadeHexColor, LightOrDark } from "./misc"

const MatchComponents = (shades) => {
  return (
    {
      //badge class
      "badge": (color) => ({
        
        //badge
        "--badge-bg-color": color,
        "--badge-border-color": color,
        "--badge-font-color": ShadeHexColor(color, LightOrDark(color) === 'light' ? shades[10] : shades[90]),

        //badge-outline
        "--badge-outline-bg-color": "transparent",
        "--badge-outline-border-color": color,
        "--badge-outline-font-color": color,
      }),
  
  

      //button class
      "btn": (color) => ({

        //btn
        "--btn-bg-color": color,
        "--btn-border-color": color,
        "--btn-font-color": ShadeHexColor(color, LightOrDark(color) === 'light' ? shades[10] : shades[90]),
        "--btn-hovered-bg-color": ShadeHexColor(color, LightOrDark(color) === 'light' ? -0.1 : 0.1),
        "--btn-hovered-border-color": ShadeHexColor(color, LightOrDark(color) === 'light' ? -0.1 : 0.1),
        "--btn-clicked-bg-color": ShadeHexColor(color, LightOrDark(color) === 'light' ? -0.3 : 0.3),
        "--btn-clicked-border-color": ShadeHexColor(color, LightOrDark(color) === 'light' ? -0.3 : 0.3),
        "--btn-active-bg-color": color,
        "--btn-active-border-color": color,
        "--btn-active-font-color": ShadeHexColor(color, LightOrDark(color) === 'light' ? shades[10] : shades[90]),
        "--btn-disabled-bg-color": "rgba(0,0,0,0.075)",
        "--btn-disabled-border-color": "transparent",
        "--btn-disabled-font-color": ShadeHexColor(color, shades[10]),

        //btn-outline
        "--btn-outline-bg-color": "transparent",
        "--btn-outline-border-color": ShadeHexColor(ShadeHexColor(color, shades[10]), shades[90]),
        "--btn-outline-font-color": color,
        "--btn-outline-hovered-bg-color": color,
        "--btn-outline-hovered-border-color": color,
        "--btn-outline-hovered-font-color": ShadeHexColor(color, LightOrDark(color) === 'light' ? shades[10] : shades[90]),
        "--btn-outline-clicked-bg-color": ShadeHexColor(color, LightOrDark(color) === 'light' ? -0.3 : 0.3),
        "--btn-outline-clicked-border-color": ShadeHexColor(color, LightOrDark(color) === 'light' ? -0.3 : 0.3),

        //btn-ghost
        "--btn-ghost-bg-color": "transparent",
        "--btn-ghost-border-color": "transparent",
        "--btn-ghost-font-color": color,
        "--btn-ghost-hovered-bg-color": "rgba(0,0,0,0.05)",
        "--btn-ghost-hovered-border-color": "transparent",
        "--btn-ghost-clicked-bg-color": "rgba(0,0,0,0.1)",
        "--btn-ghost-active-bg-color": "rgba(0,0,0,0.05)",
        "--btn-ghost-active-border-color": "transparent",
        "--btn-ghost-active-font-color": color,
      }),
  
  
      
      //card class
      "card": (color) => ({
        //card
        "--card-bg-color": color,
        "--card-font-color": ShadeHexColor(color, shades[10]),

        "&.card-outline": {
          "--card-outline-border-color": color,
          "--card-bg-color": ShadeHexColor(color, shades[90]),
        },
      }),



      //checkbox class
      "check": (color) =>  ({
        //checkbox
        "--checkbox-border-color-off": ShadeHexColor(ShadeHexColor(color, shades[10]), shades[80]),
        "--checkbox-border-color-on": color,
        "--checkbox-disabled-bg-color": ShadeHexColor(ShadeHexColor(color, shades[10]), shades[80]),
        "--checkbox-indeterminate-bg-color": ShadeHexColor(color, LightOrDark(color) === 'light' ? shades[10] : shades[90]),
        "--checkbox-indeterminate-border-color": color,

        "& .check": {
          "&::after": { //my own check :>
            content: `url('data:image/svg+xml; utf8, <svg width="14" height="14" viewBox="0 0 172 139" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="172" height="139" fill="none"/><rect x="19.6274" y="63" width="80" height="32" rx="8" transform="rotate(45 19.6274 63)" fill="${ ShadeHexColor(color, LightOrDark(color) === 'light' ? shades[10] : shades[90]).replace("#", "%23") }"/><rect x="31" y="119.279" width="172" height="32" rx="8" transform="rotate(-45 31 119.279)" fill="${ ShadeHexColor(color, LightOrDark( color) === 'light' ? shades[10] : shades[90]).replace("#", "%23") }"/></svg>')`,
          },

          //checkbox sizes
          "&.check-sm": {
            "&::after": { 
              content: `url('data:image/svg+xml; utf8, <svg width="10" height="10" viewBox="0 0 172 139" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="172" height="139" fill="none"/><rect x="19.6274" y="63" width="80" height="32" rx="8" transform="rotate(45 19.6274 63)" fill="${ ShadeHexColor(color, LightOrDark(color) === 'light' ? shades[10] : shades[90]).replace("#", "%23") }"/><rect x="31" y="119.279" width="172" height="32" rx="8" transform="rotate(-45 31 119.279)" fill="${ ShadeHexColor(color, LightOrDark(color) === 'light' ? shades[10] : shades[90]).replace("#", "%23") }"/></svg>')`,
            },
          },

          "&.check-md": { //default size for checkbox
            "&::after": { 
              content: `url('data:image/svg+xml; utf8, <svg width="14" height="14" viewBox="0 0 172 139" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="172" height="139" fill="none"/><rect x="19.6274" y="63" width="80" height="32" rx="8" transform="rotate(45 19.6274 63)" fill="${ ShadeHexColor(color, LightOrDark(color) === 'light' ? shades[10] : shades[90]).replace("#", "%23") }"/><rect x="31" y="119.279" width="172" height="32" rx="8" transform="rotate(-45 31 119.279)" fill="${ ShadeHexColor(color, LightOrDark(color) === 'light' ? shades[10] : shades[90]).replace("#", "%23") }"/></svg>')`,
            },
          },

          "&.check-lg": {
            "&::after": { 
              content: `url('data:image/svg+xml; utf8, <svg width="18" height="18" viewBox="0 0 172 139" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="172" height="139" fill="none"/><rect x="19.6274" y="63" width="80" height="32" rx="8" transform="rotate(45 19.6274 63)" fill="${ ShadeHexColor(color, LightOrDark(color) === 'light' ? shades[10] : shades[90]).replace("#", "%23") }"/><rect x="31" y="119.279" width="172" height="32" rx="8" transform="rotate(-45 31 119.279)" fill="${ShadeHexColor(color, LightOrDark(color) === 'light' ? shades[10] : shades[90]).replace("#", "%23") }"/></svg>')`,
            },
          },

          "&.check-xl": {
            "&::after": { 
              content: `url('data:image/svg+xml; utf8, <svg width="22" height="22" viewBox="0 0 172 139" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="172" height="139" fill="none"/><rect x="19.6274" y="63" width="80" height="32" rx="8" transform="rotate(45 19.6274 63)" fill="${ ShadeHexColor(color, LightOrDark(color) === 'light' ? shades[10] : shades[90]).replace("#", "%23") }"/><rect x="31" y="119.279" width="172" height="32" rx="8" transform="rotate(-45 31 119.279)" fill="${ ShadeHexColor(color, LightOrDark(color) === 'light' ? shades[10] : shades[90]).replace("#", "%23") }"/></svg>')`,
            },
          },
        },
      }),



      //divider class
      "divider": (color) => ({
        //divider
        "--divider-bg-color": ShadeHexColor(color, shades[10]),
      }),



      //input class
      "input": (color) => ({ 
        //input
        "--input-bg-color": `${ ShadeHexColor(color, shades[20]) }10`,
        "--input-underline-color": ShadeHexColor(ShadeHexColor(color, shades[20]), shades[70]),
        "--input-focused-underline-color": color,
        "--input-font-color": ShadeHexColor(color, shades[10]),
      }),



      //menu class
      "menu": (color) => ({
        //menu
        "--menu-font-color": ShadeHexColor(color, shades[10]),
        "--menu-title-font-color": ShadeHexColor(color, shades[10]),
        "--menu-sideline-color": ShadeHexColor(color, shades[10]),
        "--menu-item-hovered-bg-color": "rgba(0,0,0,0.05)",
        "--menu-item-clicked-bg-color": "rgba(0,0,0,0.1)",
        "--menu-item-active-bg-color": color,
        "--menu-item-active-font-color": ShadeHexColor(color, LightOrDark(color) === 'light' ? shades[10] : shades[90]),
        "--menu-details-open-bg-color": "rgba(0,0,0,0.1)",

        //menu-horizontal
        "--menu-horizontal-bg-color": ShadeHexColor(color, shades[90]),
      }),



      //progress class
      "progress": (color) => ({
        //progress
        "--progress-bg-color": ShadeHexColor(color, shades[99]),
        "--progress-fg-color": color,
      }),



      //radio class
      "radio": (color) => ({
        //radio
        "--radio-border-color-off": ShadeHexColor(ShadeHexColor(color, shades[10]), shades[80]),
        "--radio-border-color-on": color,
      }),
  
  
      
      //slider class
      "slider": (color) => ({
        //slider
        "--slider-track-color": ShadeHexColor(ShadeHexColor(color, shades[95]), shades[30]),
        "--slider-thumb-color": ShadeHexColor(color, shades[20]),
        "--slider-progress-color": color,
  
      }),



      //switch class
      "switch": (color) => ({
        "--switch-bg-color-off": ShadeHexColor(color, shades[95]),
        "--switch--lever-bg-color-off": ShadeHexColor(color, shades[10]),
        "--switch-bg-color-on": color,
        "--switch--lever-bg-color-on": ShadeHexColor(color, shades[95]),
      })
    }
  )
}

export default MatchComponents