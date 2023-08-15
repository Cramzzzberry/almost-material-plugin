import { ShadeHexColor, LightOrDark } from "./misc"

const AddBase = (shades) => {
  return {
    //:root
    ":root": {
      //badge
      "--badge-bg-color": "#000000",
      "--badge-border-color": "#000000",
      "--badge-font-color": ShadeHexColor("#000000", shades[90]),

      //badge-outline
      "--badge-outline-bg-color": "transparent",
      "--badge-outline-border-color": "#000000",
      "--badge-outline-font-color": "#000000",



      //btn
      "--btn-bg-color": "#000000",
      "--btn-border-color": "#000000",
      "--btn-font-color": ShadeHexColor("#000000", LightOrDark("#000000") === 'light' ? shades[10] : shades[90]),
      "--btn-hovered-bg-color": ShadeHexColor("#000000", LightOrDark("#000000") === 'light' ? -0.1 : 0.1),
      "--btn-hovered-border-color": ShadeHexColor("#000000", LightOrDark("#000000") === 'light' ? -0.1 : 0.1),
      "--btn-clicked-bg-color": ShadeHexColor("#000000", LightOrDark("#000000") === 'light' ? -0.3 : 0.3),
      "--btn-clicked-border-color": ShadeHexColor("#000000", LightOrDark("#000000") === 'light' ? -0.3 : 0.3),
      "--btn-active-bg-color": "#000000",
      "--btn-active-border-color": "#000000",
      "--btn-active-font-color": ShadeHexColor("#000000", LightOrDark("#000000") === 'light' ? shades[10] : shades[90]),
      "--btn-disabled-bg-color": "rgba(0,0,0,0.075)",
      "--btn-disabled-border-color": "transparent",
      "--btn-disabled-font-color": ShadeHexColor("#000000", shades[10]),

      //btn-outline
      "--btn-outline-bg-color": "transparent",
      "--btn-outline-border-color": ShadeHexColor("#000000", shades[80]),
      "--btn-outline-font-color": ShadeHexColor("#000000", shades[10]),
      "--btn-outline-hovered-bg-color": "#000000",
      "--btn-outline-hovered-border-color": "#000000",
      "--btn-outline-hovered-font-color": ShadeHexColor("#000000", LightOrDark("#000000") === 'light' ? shades[10] : shades[90]),
      "--btn-outline-clicked-bg-color": ShadeHexColor("#000000", LightOrDark("#000000") === 'light' ? -0.3 : 0.3),
      "--btn-outline-clicked-border-color": ShadeHexColor("#000000", LightOrDark("#000000") === 'light' ? -0.3 : 0.3),

      //btn-ghost
      "--btn-ghost-bg-color": "transparent",
      "--btn-ghost-border-color": "transparent",
      "--btn-ghost-font-color": ShadeHexColor("#000000", shades[10]),
      "--btn-ghost-hovered-bg-color": "rgba(0,0,0,0.05)",
      "--btn-ghost-hovered-border-color": "transparent",
      "--btn-ghost-clicked-bg-color": "rgba(0,0,0,0.1)",
      "--btn-ghost-active-bg-color": "rgba(0,0,0,0.05)",
      "--btn-ghost-active-border-color": "transparent",
      "--btn-ghost-active-font-color": ShadeHexColor("#000000", shades[10]),



      //card
      "--card-bg-color": "#FFFFFF",
      "--card-border-color": "#000000",
      "--card-font-color": ShadeHexColor("#FFFFFF", shades[10]),



      //checkbox
      "--checkbox-border-color-off": ShadeHexColor("#000000", shades[80]),
      "--checkbox-border-color-on": "#000000",
      "--checkbox-disabled-bg-color": "#C7C7C7",
      "--checkbox-indeterminate-bg-color": ShadeHexColor("#000000", LightOrDark("#000000") === 'light' ? shades[10] : shades[90]),
      "--checkbox-indeterminate-border-color": "#000000",



      //divider
      "--divider-bg-color": "#0000000",



      //drawer
      "--drawer-sidebar-content-bg-color": "#FFFFFF",
      "--drawer-overlay-bg-color": "rgba(0,0,0,0.5)",



      //input
      "--input-bg-color": "#FFFFFF",
      "--input-border-color": "rgba(0,0,0,0.5)",
      "--input-focused-border-color": "#000000",



      //menu
      "--menu-font-color": "#000000",
      "--menu-title-font-color": "#000000",
      "--menu-sideline-color": "#000000",
      "--menu-item-hovered-bg-color": "rgba(0,0,0,0.05)",
      "--menu-item-clicked-bg-color": "rgba(0,0,0,0.1)",
      "--menu-item-active-bg-color": "#000000",
      "--menu-item-active-font-color": ShadeHexColor("#000000", shades[90]),
      "--menu-details-open-bg-color": "rgba(0,0,0,0.1)",

      //menu-horizontal
      "--menu-horizontal-bg-color": "#FFFFFF",



      //modal
      "--modal-overlay-bg-color": "rgba(0,0,0,0.2)",



      //navbar
      "--navbar-bg-color": "#FFFFFF",
      
      //navbar-bottom
      "--navbar-item-icon-hovered-bg-color": "rgba(0,0,0,0.05)",
      "--navbar-item-icon-clicked-bg-color": "rgba(0,0,0,0.1)",
      "--navbar-item-icon-active-bg-color": "#000000",
      "--navbar-item-icon-active-font-color": ShadeHexColor("#000000", shades[90]),



      //progress
      "--progress-bg-color": ShadeHexColor("#000000", shades[95]),
      "--progress-fg-color": "#000000",



      //rail
      "--rail-bg-color": "#FFFFFF",



      //radio
      "--radio-border-color-off": ShadeHexColor("#000000", shades[80]),
      "--radio-border-color-on": "#000000",



      //slider
      "--slider-track-color": ShadeHexColor(ShadeHexColor("#000000", shades[95]), shades[30]),
      "--slider-thumb-color": "#000000",
      "--slider-progress-color": "#000000",



      //switch
      "--switch-bg-color-off": ShadeHexColor("#000000", shades[95]),
      "--switch--lever-bg-color-off": ShadeHexColor("#000000", shades[10]),
      "--switch-bg-color-on": ShadeHexColor("#000000", shades[10]),
      "--switch--lever-bg-color-on": ShadeHexColor("#000000", shades[95]),
    },

    "html": {
      fontSize: "1rem",
      color: ShadeHexColor("#000000", shades[10]),
      backgroundColor: ShadeHexColor("#000000", shades[99]),
      fontFamily: "'PlusJakartaSans'",
    },
    
    "h1": {
      fontSize: "6rem",
      lineHeight: "7rem",
    },
    
    "h2": {
      fontSize: "3.75rem",
      lineHeight: "4.25rem",
    },
    
    "h3": {
      fontSize: "2.25rem",
      lineHeight: "2.5rem",
    },
    
    "h4": {
      fontSize: "1.5rem",
      lineHeight: "2rem",
    },
    
    "h5": {
      fontSize: "1.25rem",
      lineHeight: "1.75rem",
    },

    "h6": {
      fontSize: "1.125rem",
      lineHeight: "1.75rem",
    },
    
    //scrollbars
    "::-webkit-scrollbar": {
      width: "6px",
      height: "6px",
    },
    
    "::-webkit-scrollbar-track": {
      borderRadius: "6px",
    },
    
    "::-webkit-scrollbar-thumb": {
      background: "#999999",
      borderRadius: '6px',
    },
  }
}

const themeStyles = (palette, shades) => {
  let themeStyleSheet = {}

	for(const color of Object.keys(palette)) {
		themeStyleSheet[`html[data-color="${ color }"]`] = {
      color: ShadeHexColor(palette[color], shades[10]),
      backgroundColor: ShadeHexColor(palette[color], shades[95]),

      //placeholders
      "::placeholder": {
        color: ShadeHexColor(palette[color], shades[10]),
        opacity: "0.5",
      },
  
      ":-ms-input-placeholder": {
        opacity: "0.5",
      },
  
      "::-ms-input-placeholder": {
        opacity: "0.5",
      },



      //badge
      "--badge-bg-color": ShadeHexColor(palette[color], shades[10]),
      "--badge-border-color": ShadeHexColor(palette[color], shades[10]),
      "--badge-font-color": ShadeHexColor(ShadeHexColor(palette[color], shades[10]), shades[90]),

      //badge-outline
      "--badge-outline-bg-color": "transparent",
      "--badge-outline-border-color": ShadeHexColor(palette[color], shades[10]),
      "--badge-outline-font-color": ShadeHexColor(palette[color], shades[10]),



      //btn
      "--btn-bg-color": palette[color],
      "--btn-border-color": palette[color],
      "--btn-font-color": ShadeHexColor(palette[color], LightOrDark(palette[color]) === 'light' ? shades[10] : shades[90]),
      "--btn-hovered-bg-color": ShadeHexColor(palette[color], LightOrDark(palette[color]) === 'light' ? -0.1 : 0.1),
      "--btn-hovered-border-color": ShadeHexColor(palette[color], LightOrDark(palette[color]) === 'light' ? -0.1 : 0.1),
      "--btn-clicked-bg-color": ShadeHexColor(palette[color], LightOrDark(palette[color]) === 'light' ? -0.3 : 0.3),
      "--btn-clicked-border-color": ShadeHexColor(palette[color], LightOrDark(palette[color]) === 'light' ? -0.3 : 0.3),
      "--btn-active-bg-color": palette[color],
      "--btn-active-border-color": palette[color],
      "--btn-active-font-color": ShadeHexColor(palette[color], LightOrDark(palette[color]) === 'light' ? shades[10] : shades[90]),
      "--btn-disabled-bg-color": "rgba(0,0,0,0.075)",
      "--btn-disabled-border-color": "transparent",
      "--btn-disabled-font-color": ShadeHexColor(palette[color], LightOrDark(palette[color]) === 'light' ? shades[10] : shades[90]),

      //btn-outline
      "--btn-outline-bg-color": "transparent",
      "--btn-outline-border-color": ShadeHexColor(ShadeHexColor(palette[color], shades[10]), shades[80]),
      "--btn-outline-font-color": ShadeHexColor(palette[color], shades[10]),
      "--btn-outline-hovered-bg-color": palette[color],
      "--btn-outline-hovered-border-color": palette[color],
      "--btn-outline-hovered-font-color": ShadeHexColor(palette[color], LightOrDark(palette[color]) === 'light' ? shades[10] : shades[90]),
      "--btn-outline-clicked-bg-color": ShadeHexColor(palette[color], LightOrDark(palette[color]) === 'light' ? -0.3 : 0.3),
      "--btn-outline-clicked-border-color": ShadeHexColor(palette[color], LightOrDark(palette[color]) === 'light' ? -0.3 : 0.3),

      //btn-ghost
      "--btn-ghost-bg-color": "transparent",
      "--btn-ghost-border-color": "transparent",
      "--btn-ghost-font-color": ShadeHexColor(palette[color], shades[10]),
      "--btn-ghost-hovered-bg-color": "rgba(0,0,0,0.05)",
      "--btn-ghost-hovered-border-color": "transparent",
      "--btn-ghost-clicked-bg-color": "rgba(0,0,0,0.1)",
      "--btn-ghost-active-bg-color": "rgba(0,0,0,0.05)",
      "--btn-ghost-active-border-color": "transparent",
      "--btn-ghost-active-font-color": ShadeHexColor(palette[color], shades[10]),



      //card
      "--card-bg-color": ShadeHexColor(palette[color], shades[90]),
      "--card-border-color": ShadeHexColor(palette[color], shades[90]),
      "--card-font-color": ShadeHexColor(ShadeHexColor(palette[color], shades[90]), shades[10]),

      //card outline
      "--card-outline-border-color": palette[color],



      //checkbox
      "--checkbox-border-color-off": ShadeHexColor(ShadeHexColor(palette[color], shades[10]), shades[80]),
      "--checkbox-border-color-on": palette[color],
      "--checkbox-disabled-bg-color": ShadeHexColor(ShadeHexColor(palette[color], shades[10]), shades[80]),
      "--checkbox-indeterminate-bg-color": ShadeHexColor(palette[color], LightOrDark(palette[color]) === 'light' ? shades[10] : shades[90]),
      "--checkbox-indeterminate-border-color": palette[color],

      "& .check": {
        "&::after": { //my own check :>
          content: `url('data:image/svg+xml; utf8, <svg width="14" height="14" viewBox="0 0 172 139" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="172" height="139" fill="none"/><rect x="19.6274" y="63" width="80" height="32" rx="8" transform="rotate(45 19.6274 63)" fill="${ ShadeHexColor(palette[color], LightOrDark(palette[color]) === 'light' ? shades[10] : shades[90]).replace("#", "%23") }"/><rect x="31" y="119.279" width="172" height="32" rx="8" transform="rotate(-45 31 119.279)" fill="${ ShadeHexColor(palette[color], LightOrDark( palette[color]) === 'light' ? shades[10] : shades[90]).replace("#", "%23") }"/></svg>')`,
        },

        //checkbox sizes
        "&.check-sm": {
          "&::after": { 
            content: `url('data:image/svg+xml; utf8, <svg width="10" height="10" viewBox="0 0 172 139" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="172" height="139" fill="none"/><rect x="19.6274" y="63" width="80" height="32" rx="8" transform="rotate(45 19.6274 63)" fill="${ ShadeHexColor(palette[color], LightOrDark(palette[color]) === 'light' ? shades[10] : shades[90]).replace("#", "%23") }"/><rect x="31" y="119.279" width="172" height="32" rx="8" transform="rotate(-45 31 119.279)" fill="${ ShadeHexColor(palette[color], LightOrDark(palette[color]) === 'light' ? shades[10] : shades[90]).replace("#", "%23") }"/></svg>')`,
          },
        },

        "&.check-md": { //default size for checkbox
          "&::after": { 
            content: `url('data:image/svg+xml; utf8, <svg width="14" height="14" viewBox="0 0 172 139" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="172" height="139" fill="none"/><rect x="19.6274" y="63" width="80" height="32" rx="8" transform="rotate(45 19.6274 63)" fill="${ ShadeHexColor(palette[color], LightOrDark(palette[color]) === 'light' ? shades[10] : shades[90]).replace("#", "%23") }"/><rect x="31" y="119.279" width="172" height="32" rx="8" transform="rotate(-45 31 119.279)" fill="${ ShadeHexColor(palette[color], LightOrDark(palette[color]) === 'light' ? shades[10] : shades[90]).replace("#", "%23") }"/></svg>')`,
          },
        },

        "&.check-lg": {
          "&::after": { 
            content: `url('data:image/svg+xml; utf8, <svg width="18" height="18" viewBox="0 0 172 139" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="172" height="139" fill="none"/><rect x="19.6274" y="63" width="80" height="32" rx="8" transform="rotate(45 19.6274 63)" fill="${ ShadeHexColor(palette[color], LightOrDark(palette[color]) === 'light' ? shades[10] : shades[90]).replace("#", "%23") }"/><rect x="31" y="119.279" width="172" height="32" rx="8" transform="rotate(-45 31 119.279)" fill="${ShadeHexColor(palette[color], LightOrDark(palette[color]) === 'light' ? shades[10] : shades[90]).replace("#", "%23") }"/></svg>')`,
          },
        },

        "&.check-xl": {
          "&::after": { 
            content: `url('data:image/svg+xml; utf8, <svg width="22" height="22" viewBox="0 0 172 139" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="172" height="139" fill="none"/><rect x="19.6274" y="63" width="80" height="32" rx="8" transform="rotate(45 19.6274 63)" fill="${ ShadeHexColor(palette[color], LightOrDark(palette[color]) === 'light' ? shades[10] : shades[90]).replace("#", "%23") }"/><rect x="31" y="119.279" width="172" height="32" rx="8" transform="rotate(-45 31 119.279)" fill="${ ShadeHexColor(palette[color], LightOrDark(palette[color]) === 'light' ? shades[10] : shades[90]).replace("#", "%23") }"/></svg>')`,
          },
        },
      },



      //divider
      "--divider-bg-color": ShadeHexColor(palette[color], shades[10]),



      //drawer
      "--drawer-sidebar-content-bg-color": ShadeHexColor(palette[color], shades[90]),
      "--drawer-overlay-bg-color": "rgba(0,0,0,0.5)",



      //input
      "--input-bg-color": `${ ShadeHexColor(palette[color], shades[20]) }10`,
      "--input-underline-color": ShadeHexColor(ShadeHexColor(palette[color], shades[20]), shades[70]),
      "--input-focused-underline-color": ShadeHexColor(palette[color], shades[20]),
      "--input-font-color": ShadeHexColor(palette[color], shades[10]),



      //menu
      "--menu-font-color": ShadeHexColor(palette[color], shades[10]),
      "--menu-title-font-color": ShadeHexColor(palette[color], shades[10]),
      "--menu-sideline-color": ShadeHexColor(palette[color], shades[10]),
      "--menu-item-hovered-bg-color": "rgba(0,0,0,0.05)",
      "--menu-item-clicked-bg-color": "rgba(0,0,0,0.1)",
      "--menu-item-active-bg-color": palette[color],
      "--menu-item-active-font-color": ShadeHexColor(palette[color], LightOrDark(palette[color]) === 'light' ? shades[10] : shades[90]),
      "--menu-details-open-bg-color": "rgba(0,0,0,0.1)",

      //menu-horizontal
      "--menu-horizontal-bg-color": ShadeHexColor(palette[color], shades[90]),



      //modal
      "--modal-overlay-bg-color": "rgba(0,0,0,0.2)",



      //navbar
      "--navbar-bg-color": ShadeHexColor(palette[color], shades[80]),
      
      //navbar-bottom
      "--navbar-item-icon-hovered-bg-color": "rgba(0,0,0,0.05)",
      "--navbar-item-icon-clicked-bg-color": "rgba(0,0,0,0.1)",
      "--navbar-item-icon-active-bg-color": palette[color],
      "--navbar-item-icon-active-font-color": ShadeHexColor(palette[color], LightOrDark(palette[color]) === 'light' ? shades[10] : shades[90]),



      //progress
      "--progress-bg-color": ShadeHexColor(palette[color], shades[99]),
      "--progress-fg-color": palette[color],



      //rail
      "--rail-bg-color": ShadeHexColor(palette[color], shades[80]),



      //radio
      "--radio-border-color-off": ShadeHexColor(ShadeHexColor(palette[color], shades[10]), shades[80]),
      "--radio-border-color-on": palette[color],



      //slider
      "--slider-track-color": ShadeHexColor(ShadeHexColor(palette[color], shades[95]), shades[30]),
      "--slider-thumb-color": ShadeHexColor(palette[color], shades[20]),
      "--slider-progress-color": palette[color],


      
      //switch
      "--switch-bg-color-off": ShadeHexColor(palette[color], shades[95]),
      "--switch--lever-bg-color-off": ShadeHexColor(palette[color], shades[10]),
      "--switch-bg-color-on": ShadeHexColor(palette[color], shades[10]),
      "--switch--lever-bg-color-on": ShadeHexColor(palette[color], shades[95]),
    }
	}

	return themeStyleSheet
}

export default { AddBase, themeStyles } 