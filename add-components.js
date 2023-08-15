//this function returns an object that will be used on addComponents() plugin function of tailwind css
//some day, i will clean up some mess here and organize all styles so that it will be easier to read
//stucked between using js variable for some styles or using a hard-coded value, dunno if it will impact performance but
//will definetely impact code readability

import { ShadeHexColor, LightOrDark } from "./misc"

const AddComponents = (shades) => {
  const easeInOut = "cubic-bezier(0.5, 0, 0.2, 1)"
  return (
    {
      //badge class
      ".badge": {
        //badge related variables
        "--badge-height": "1.25rem",
        "--badge-padding-x": "0.625rem",
        "--badge-font-size": "0.875rem",

        minHeight: "var(--badge-height)",
        maxHeight: "var(--badge-height)",
        paddingLeft: "calc(var(--badge-padding-x) - 1px)",
        paddingRight: "calc(var(--badge-padding-x) - 1px)",
        
        fontSize: "var(--badge-font-size) !important",
        lineHeight: "var(--badge-height)",

        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",

        width: "fit-content",
        borderRadius: "9999px",
        borderWidth: "1px",

        fontWeight: "600",
        textTransform: "capitalize",

        backgroundColor: "var(--badge-bg-color)",
        borderColor: "var(--badge-border-color)",
        color: "var(--badge-font-color)",

        "&.badge-outline": { //badge-outlined
          fontWeight: "400",

          backgroundColor: "var(--badge-outline-bg-color)",
          borderColor: "var(--badge-outline-border-color)",
          color: "var(--badge-outline-font-color)",
        },

        "&.badge-dot": { //badge-dot
          "--badge-dot-size": "0.875rem",

          minWidth: "var(--badge-dot-size)",
          maxWidth: "var(--badge-dot-size)",
          maxHeight: "var(--badge-dot-size)",
          minHeight: "var(--badge-dot-size)",

          padding: "0",
        },
  
        //sizes for badge
        "&.badge-sm": {
          "--badge-height": "1rem",
          "--badge-padding-x": "0.5rem",
          "--badge-font-size": "0.625rem",
        },

        "&.badge-md": { //default badge size
          "--badge-height": "1.25rem",
          "--badge-padding-x": "0.625rem",
          "--badge-font-size": "0.875rem",
        },
  
        "&.badge-lg": {
          "--badge-height": "1.5rem",
          "--badge-padding-x": "0.75rem",
          "--badge-font-size": "1.125rem",
        },
  
        "&.badge-xl": {
          "--badge-height": "1.75rem",
          "--badge-padding-x": "0.875rem",
          "--badge-font-size": "1.375rem",
        },
      },
  
  
  
      //btn class
      //this class is complicated for me, but all :active class does is display the style "when clicked"
      //I made the button height based on set max and min heights (instead of its own, like padding-based size), using this
      //method made all buttons uniformed, this is the same method used for input sizes
      ".btn": {
        "--btn-height": "3.25rem",
        "--btn-padding-x": "1.25rem",
        "--btn-gap": "0.5rem",
        "--btn-font-size": "1rem !important",
        "--btn-icon-size": "1.5rem !important",

        minHeight: "var(--btn-height)",
        maxHeight: "var(--btn-height)",
        paddingLeft: "var(--btn-padding-x)",
        paddingRight: "var(--btn-padding-x)",
        gap: "var(--btn-gap)",
        fontSize: "var(--btn-font-size)",
        "& > *": {
          fontSize: "var(--btn-icon-size)",
        },

        display: "inline-grid",
        gridAutoFlow: "column",
        gridAutoColumns: "max-content auto max-content",
        alignItems: "center",
        cursor: "pointer",

        width: "fit-content",
        borderWidth: "1px",
        borderRadius: "9999px",

        fontWeight: "600",
        textTransform: "capitalize",
        textAlign: "start",
        whiteSpace: "nowrap",

        backgroundColor: "var(--btn-bg-color)",
        borderColor: "var(--btn-border-color)",
        color: "var(--btn-font-color)",

        "-webkit-user-select": "none",
        "-ms-user-select": "none",
        "user-select": "none",

        "&:hover:not([disabled])": {
          backgroundColor: "var(--btn-hovered-bg-color)",
          borderColor: "var(--btn-hovered-border-color)",
        },

        "&:active:not([disabled])": {
          backgroundColor: "var(--btn-clicked-bg-color)",
          borderColor: "var(--btn-clicked-border-color)",
        },
  
        "&.btn-outline": { //btn-outlined
          backgroundColor: "var(--btn-outline-bg-color)",
          borderColor: "var(--btn-outline-border-color)",
          color: "var(--btn-outline-font-color)",

          "&:hover": {
            backgroundColor: "var(--btn-outline-hovered-bg-color)",
            borderColor: "var(--btn-outline-hovered-border-color)",
            color: "var(--btn-outline-hovered-font-color)",
             
            // opacity: "1",
          },

          "&:active": {
            backgroundColor: "var(--btn-outline-clicked-bg-color)",
            borderColor: "var(--btn-outline-clicked-border-color)",
          },
        },
  
        "&.btn-ghost": { //btn-ghost
          backgroundColor: "var(--btn-ghost-bg-color)",
          borderColor: "var(--btn-ghost-border-color)",
          color: "var(--btn-ghost-font-color)",

          "&:hover:not([disabled])": {
            backgroundColor: "var(--btn-ghost-hovered-bg-color)",
            borderColor: "var(--btn-ghost-hovered-border-color)",
          },

          "&:active:not([disabled])": {
            backgroundColor: "var(--btn-ghost-clicked-bg-color)",
          },
  
          "&.btn-active": { //btn-active
            backgroundColor: "var(--btn-ghost-active-bg-color) !important",
            borderColor: "var(--btn-ghost-active-border-color) !important",
            color: "var(--btn-ghost-active-font-color) !important",
          },
        },
  
        "&.btn-circle": { //btn-circle
          "--btn-circle-size": "3.25rem",
          "--btn-font-size": "1.5rem !important",
          "--btn-padding-x": "0",

          minHeight: "var(--btn-circle-size)",
          maxHeight: "var(--btn-circle-size)",
          minWidth: "var(--btn-circle-size)",
          maxWidth: "var(--btn-circle-size)",
          
          fontSize: "var(--btn-font-size)",
          "& > *": { fontSize: "var(--btn-font-size)" },

          borderRadius: "100%",
          justifyContent: "center",

          //sizes for btn-circle
          "&.btn-sm": {
            "--btn-circle-size": "2.5rem",
            "--btn-font-size": "1.375rem !important",
          },

          "&.btn-md": { //default btn size
            "--btn-circle-size": "3.25rem",
            "--btn-font-size": "1.5rem !important",
          },

          "&.btn-lg": {
            "--btn-circle-size": "3.75rem",
            "--btn-font-size": "1.625rem !important",
          },

          "&.btn-xl": {
            "--btn-circle-size": "4.5rem",
            "--btn-font-size": "2rem !important",
          },
        },
  
        "&.btn-active": { //btn with active state
          backgroundColor: "var(--btn-active-bg-color) !important",
          borderColor: "var(--btn-active-border-color) !important",
          color: "var(--btn-active-font-color) !important",
        },
  
        "&:disabled": { //disabled btn
          backgroundColor: "var(--btn-disabled-bg-color) !important",
          borderColor: "var(--btn-disabled-border-color) !important",
          color: "var(--btn-disabled-font-color) !important",

          opacity: "70%",
          cursor: "not-allowed",
        },
  
        //sizes for different buttons except btn-circle
        "&.btn-sm": {
          "--btn-height": "2.5rem",
          "--btn-padding-x": "1rem",
          "--btn-gap": "0.25rem",
          "--btn-font-size": "0.875rem !important",
          "--btn-icon-size": "1.375rem !important",
        },

        "&.btn-md": {
          "--btn-height": "3.25rem",
          "--btn-padding-x": "1.25rem",
          "--btn-gap": "0.5rem",
          "--btn-font-size": "1rem !important",
          "--btn-icon-size": "1.5rem !important",
        },
  
        "&.btn-lg": {
          "--btn-height": "3.75rem",
          "--btn-padding-x": "1.5rem",
          "--btn-gap": "0.5rem",
          "--btn-font-size": "1.375rem !important",
          "--btn-icon-size": "1.625rem !important",
        },
  
        "&.btn-xl": {
          "--btn-height": "4.5rem",
          "--btn-padding-x": "2rem",
          "--btn-gap": "0.5rem",
          "--btn-font-size": "1.5rem !important",
          "--btn-icon-size": "2rem !important",
        },
      },
  
  
  
      //card class
      ".card": {
        width: "auto",
        height: "fit-content",
        borderWidth: "1px",
        borderRadius: "1rem",
        borderColor: "var(--card-bg-color)",
        backgroundColor: "var(--card-bg-color)",
        color: "var(--card-font-color)",

        "&.card-horizontal": {
          display: "flex",
          flexDirection: "row",

          "& > .image.image-card": {
            width: "16rem",
            height: "100%",
            flexShrink: "0",
          },
        },

        "&.card-outline": {
          borderColor: "var(--card-outline-border-color)",
          backgroundColor: "var(--card-bg-color)",
        },

        "& .card-body": { //for card body
          padding: "1.25rem",

          "&.layout-spaced": {
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          },
        },

        "& .card-title": { fontWeight: "bold" },

        "& .card-actions": {
          padding: "0 1.25rem 1.25rem 1.25rem",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "0.5rem",
        },
      },



      //checkbox class
      ".check": {
        "--checkbox-size": "1.25rem",
        "--checkbox-border-width-checked": "10px",
        "--check-top": "1px",
        "--check-size": "1.25rem",
        "--check-indeterminate-border-x": "4px",
        "--check-indeterminate-border-y": "9px",

        minWidth: "var(--checkbox-size)",
        maxWidth: "var(--checkbox-size)",
        minHeight: "var(--checkbox-size)",
        maxHeight: "var(--checkbox-size)",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
        cursor: "pointer",
        position: "relative",
        appearance: "none",
        "-webkit-appearance": "none",

        borderWidth: "2px",
        borderRadius: "4px",
        borderColor: "var(--checkbox-border-color-off)",

        transition: `border-width 100ms ${ easeInOut }, border-color 100ms ${ easeInOut }`,

        "&:checked": {
          borderWidth: "var(--checkbox-border-width-checked)",
          borderColor: "var(--checkbox-border-color-on)",

          "&::after": { opacity: "1" },
        },
        
        "&::after": { //my own check :>
          top: "var(--check-top)",
          height: "var(--check-size)",
          width: "var(--check-size)",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          position: "relative",

          opacity: "0",
          content: `url('data:image/svg+xml; utf8, <svg width="14" height="14" viewBox="0 0 172 139" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="172" height="139" fill="none"/><rect x="19.6274" y="63" width="80" height="32" rx="8" transform="rotate(45 19.6274 63)" fill="${ ShadeHexColor("#000000", LightOrDark("#000000") === 'light' ? shades[10] : shades[90]).replace("#", "%23") }"/><rect x="31" y="119.279" width="172" height="32" rx="8" transform="rotate(-45 31 119.279)" fill="${ ShadeHexColor("#000000", LightOrDark("#000000") === 'light' ? shades[10] : shades[90]).replace("#", "%23") }"/></svg>')`,
        },

        "&:disabled": {//disabled checkbox
          backgroundColor: "var(--checkbox-disabled-bg-color)",
          opacity: "70%",
          cursor: "not-allowed",
        },

        "&:checked:disabled": {//checked and disabled checkbox
          opacity: "70%",
          cursor: "not-allowed",
        },

        "&:indeterminate": {//indeterminate checkbox
          borderWidth: "var(--check-indeterminate-border-y) var(--check-indeterminate-border-x)",
          backgroundColor: "var(--checkbox-indeterminate-bg-color)",
          borderColor: "var(--checkbox-indeterminate-border-color)",

          "&::after": {
            content: "''",
          }
        },

        //checkbox sizes
        "&.check-sm": {
          "--checkbox-size": "0.875rem",
          "--checkbox-border-width-checked": "7px",
          "--check-top": "-1px",
          "--check-size": "0.875rem",
          "--check-indeterminate-border-x": "3px",
          "--check-indeterminate-border-y": "6px",
        
          "&::after": { 
            content: `url('data:image/svg+xml; utf8, <svg width="10" height="10" viewBox="0 0 172 139" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="172" height="139" fill="none"/><rect x="19.6274" y="63" width="80" height="32" rx="8" transform="rotate(45 19.6274 63)" fill="${ ShadeHexColor("#000000", LightOrDark("#000000") === 'light' ? shades[10] : shades[90]).replace("#", "%23") }"/><rect x="31" y="119.279" width="172" height="32" rx="8" transform="rotate(-45 31 119.279)" fill="${ ShadeHexColor("#000000", LightOrDark("#000000") === 'light' ? shades[10] : shades[90]).replace("#", "%23") }"/></svg>')`,
          },

          "&:indeterminate": {//indeterminate checkbox
            "&::after": {
              content: "''",
            }
          },
        },

        "&.check-md": { //default size for checkbox
          "--checkbox-size": "1.25rem",
          "--checkbox-border-width-checked": "10px",
          "--check-top": "1px",
          "--check-size": "1.25rem",
          "--check-indeterminate-border-x": "4px",
          "--check-indeterminate-border-y": "9px",
        
          "&::after": { 
            content: `url('data:image/svg+xml; utf8, <svg width="14" height="14" viewBox="0 0 172 139" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="172" height="139" fill="none"/><rect x="19.6274" y="63" width="80" height="32" rx="8" transform="rotate(45 19.6274 63)" fill="${ ShadeHexColor("#000000", LightOrDark("#000000") === 'light' ? shades[10] : shades[90]).replace("#", "%23") }"/><rect x="31" y="119.279" width="172" height="32" rx="8" transform="rotate(-45 31 119.279)" fill="${ ShadeHexColor("#000000", LightOrDark("#000000") === 'light' ? shades[10] : shades[90]).replace("#", "%23") }"/></svg>')`,
          },

          "&:indeterminate": {//indeterminate checkbox
            "&::after": {
              content: "''",
            }
          },
        },

        "&.check-lg": {
          "--checkbox-size": "1.625rem",
          "--checkbox-border-width-checked": "13px",
          "--check-top": "3px",
          "--check-size": "1.625rem",
          "--check-indeterminate-border-x": "4px",
          "--check-indeterminate-border-y": "11px",
        
          "&::after": { 
            content: `url('data:image/svg+xml; utf8, <svg width="18" height="18" viewBox="0 0 172 139" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="172" height="139" fill="none"/><rect x="19.6274" y="63" width="80" height="32" rx="8" transform="rotate(45 19.6274 63)" fill="${ ShadeHexColor("#000000", LightOrDark("#000000") === 'light' ? shades[10] : shades[90]).replace("#", "%23") }"/><rect x="31" y="119.279" width="172" height="32" rx="8" transform="rotate(-45 31 119.279)" fill="${ShadeHexColor("#000000", LightOrDark("#000000") === 'light' ? shades[10] : shades[90]).replace("#", "%23") }"/></svg>')`,
          },

          "&:indeterminate": {//indeterminate checkbox
            "&::after": {
              content: "''",
            }
          },
        },

        "&.check-xl": {
          "--checkbox-size": "2rem",
          "--checkbox-border-width-checked": "16px",
          "--check-top": "3px",
          "--check-size": "2rem",
          "--check-indeterminate-border-x": "4px",
          "--check-indeterminate-border-y": "14px",
        
          "&::after": { 
            content: `url('data:image/svg+xml; utf8, <svg width="22" height="22" viewBox="0 0 172 139" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="172" height="139" fill="none"/><rect x="19.6274" y="63" width="80" height="32" rx="8" transform="rotate(45 19.6274 63)" fill="${ ShadeHexColor("#000000", LightOrDark("#000000") === 'light' ? shades[10] : shades[90]).replace("#", "%23") }"/><rect x="31" y="119.279" width="172" height="32" rx="8" transform="rotate(-45 31 119.279)" fill="${ ShadeHexColor("#000000", LightOrDark("#000000") === 'light' ? shades[10] : shades[90]).replace("#", "%23") }"/></svg>')`,
          },

          "&:indeterminate": {//indeterminate checkbox
            "&::after": {
              content: "''",
            }
          },
        },
      },
  
  
  
      //divider class
      ".divider": {
        display: "flex",
        alignItems: "center",

        width: "100%",
        // height: "100%",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        paddingLeft: "0",
        paddingRight: "0",

        "&.divider-horizontal": {
          flexDirection: "column",

          width: "0%",
          paddingTop: "0",
          paddingBottom: "0",
          paddingLeft: "1rem",
          paddingRight: "1rem",
        },
        "&::before, &::after": { //the line itself
          flex: "1",
          backgroundColor: "var(--divider-bg-color)",
          content: "''",
          borderRadius: "9999px",
          padding: "1px",				
          opacity: "0.15",
        },
      },



      //drawer class
      ".drawer": {
        display: "flex",
        flexDirection: "row-reverse",
        height: "100vh",

        "& > .drawer-page-content": { //wrapper for the page content
          width: "100%",
          overflowY: "auto",
        },

        "& > .drawer-sidebar": { //sidebar wrapper
          position: "absolute",
          top: "0",
          left: "0",
          height: "100vh",
          opacity: "0",
          visibility: "hidden",
          zIndex: "98",

          transition: `opacity 250ms ${ easeInOut }, visibility 250ms ${ easeInOut }, left 300ms ${ easeInOut }`,

          "& > .drawer-sidebar-content": {  //wrapper for the sidebar content
            position: "absolute",
            left: "-23rem",
            width: "23rem",
            height: "100vh",
            zIndex: "1",
            transition: `left 250ms ${ easeInOut }`,

            "& > *": {
              height: "100%",
              overflowY: "auto",
              backgroundColor: "var(--drawer-sidebar-content-bg-color)",
            },
          },
          
          "&.drawer-compact > .drawer-sidebar-content": { //compact drawer!
            width: "23rem",
          },
          
          "&.drawer-fullscreen > .drawer-sidebar-content": { //fullscreen drawer!
            width: "100vw",
          },

          "& > .drawer-overlay": { //the transparent background
            position: "absolute",
            top: "0",
            left: "0",
            width: "100vw",
            height: "100vh",
            backgroundColor: "var(--drawer-overlay-bg-color)",
            cursor: "pointer",

            transition: `width 300ms ${ easeInOut }`,
          },
        },

        "& > input[type='checkbox'].drawer-toggle": { //the checkbox toggle for drawer
          position: "absolute",
          top: "-2.5rem",

          "&:checked ~ .drawer-sidebar": {
            opacity: "1",
            visibility: "visible",

            "& > .drawer-sidebar-content": {
              left: "0%",
            },
          }
        },

        //opened drawer
        "&.drawer-open": { // forever opened drawer :>
          "& > .drawer-content": {
            width: "100%",
            overflowY: "auto",
            flexGrow: "1",
          },
  
          "& > .drawer-sidebar": { //drawer sidebar opened
            position: "static",
            height: "100vh",
            opacity: "1",
            visibility: "visible",
            zIndex: "0",
  
            "& > .drawer-sidebar-content": { //drawer sdebar content fitted to its content
              position: "static",
              flexBasis: "23rem",
              height: "100vh",
              zIndex: "0",
            },
  
            "& > .drawer-overlay": {
              visibility: "hidden",
            },
          },
        },
      },



      //dropdown class
      ".dropdown": {
        position: "relative",
        width: "fit-content",

        "& > .dropdown-content": { //default position
          transformOrigin: "10% 10%",
          top: "calc(100% + 8px)",
          bottom: "auto",
          left: "auto",
          right: "auto",
          overflowY: "auto",
          position: "absolute",
          opacity: "0",
          visibility: "hidden",
          transition: `transform 125ms ${ easeInOut }, opacity 125ms ${ easeInOut }, visibility 125ms ${ easeInOut }`,
          transform: "scale(0.85, 0.85)",
          "--tw-drop-shadow": "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))", //drop shadow came from tailwind css dropshadow-md
          filter: "var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)",
        },

        "& > label:focus ~ .dropdown-content": { transform: "scale(1, 1)", opacity: "1", visibility: "visible" },

        "&:focus-within > .dropdown-content": { //this is important so that the dropdown doesnt close when you click the contents
          transform: "scale(1, 1)",
          opacity: "1",
          visibility: "visible",
        },

        "& > .dropdown-content > li > a": {
          display: "flex",
          padding: "1.5rem",
          paddingTop: "1.25rem",
          paddingBottom: "1.25rem",
          flexDirection: "row",
          width: "100%",
        },

        "& > .dropdown-content > li > a:hover": { cursor: "pointer", backgroundColor: "rgba(0,0,0,0.06)", top: "calc(100% + 8px)" },

        "&.dropdown-top": { //top dropdown
          "& > .dropdown-content": { transformOrigin: "10% 90%", top: "auto", bottom: "calc(100% + 8px)" },
          "&.dropdown-end > .dropdown-content": { transformOrigin: "90% 90%", top: "auto", right: "0%" },
        },

        "&.dropdown-bottom": { //bottom dropdown
          "& > .dropdown-content": { top: "calc(100% + 8px)", bottom: "auto", },
          "&.dropdown-end > .dropdown-content": { transformOrigin: "90% 10%", top: "calc(100% + 8px)", right: "0%" },
        },

        "&.dropdown-left": { //left dropdown
          "& > .dropdown-content": { transformOrigin: "90% 10%", top: "0%", right: "calc(100% + 8px)" },
          "&.dropdown-end > .dropdown-content": { transformOrigin: "90% 90%", top: "auto", bottom: "0%", right: "calc(100% + 8px)" },
        },

        "&.dropdown-right": { //right dropdown
          "& > .dropdown-content": { transformOrigin: "10% 10%", top: "0%", left: "calc(100% + 8px)" },
          "&.dropdown-end > .dropdown-content": { transformOrigin: "10% 90%", top: "auto", bottom: "0%", left: "calc(100% + 8px)" },
        },
      },



      //image class
      ".image": {
        display: "block",
        width: "150px",
        height: "150px",

        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",

        backgroundImage: "var(--image-url)",

        "&.image-circle": {
          borderRadius: "50%",
        },

        "&.image-card": {
          width: "100%",
          height: "16rem",
          borderRadius: "1rem",

          "&.image-horizontal": {
            width: "16rem",
            height: "100%",
          },
        },
      },



      //indicator class
      ".indicator": {
        "--translate-x": "35%",
        "--translate-y": "-35%",
        "--indicator-top": "0%",
        "--indicator-bottom": "auto",
        "--indicator-left": "auto",
        "--indicator-right": "0%",

        position: "relative",
        display: "inline-flex",

        "& > .indicator-item": {
          position: "absolute",
          top: "var(--indicator-top)",
          bottom: "var(--indicator-bottom)",
          left: "var(--indicator-left)",
          right: "var(--indicator-right)",

          transform: "translate(var(--translate-x), var(--translate-y))",

          "&.indicator-top": {
            "--indicator-top": "0%",
            "--indicator-bottom": "auto",

            "&.indicator-start": {
              "--indicator-left": "0%",
              "--indicator-right": "auto",
              "--translate-x": "-35%",
              "--translate-y": "-35%",
            },

            "&.indicator-center": {
              "--indicator-left": "50%",
              "--indicator-right": "auto",
              "--translate-x": "-50%",
              "--translate-y": "-35%",
            },

            "&.indicator-end": {
              "--indicator-left": "auto",
              "--indicator-right": "0%",
              "--translate-x": "35%",
              "--translate-y": "-35%",
            },
          },

          "&.indicator-middle": {
            "--indicator-top": "50%",
            "--indicator-bottom": "auto",

            "&.indicator-start": {
              "--indicator-left": "0%",
              "--indicator-right": "auto",
              "--translate-x": "-35%",
              "--translate-y": "-50%",
            },

            "&.indicator-center": {
              "--indicator-left": "50%",
              "--indicator-right": "auto",
              "--translate-x": "-50%",
              "--translate-y": "-50%",
            },

            "&.indicator-end": {
              "--indicator-left": "auto",
              "--indicator-right": "0%",
              "--translate-x": "35%",
              "--translate-y": "-50%",
            },
          },

          "&.indicator-bottom": {
            "--indicator-top": "auto",
            "--indicator-bottom": "0%",

            "&.indicator-start": {
              "--indicator-left": "0%",
              "--indicator-right": "auto",
              "--translate-x": "-35%",
              "--translate-y": "35%",
            },

            "&.indicator-center": {
              "--indicator-left": "50%",
              "--indicator-right": "auto",
              "--translate-x": "-50%",
              "--translate-y": "35%",
            },

            "&.indicator-end": {
              "--indicator-left": "auto",
              "--indicator-right": "0%",
              "--translate-x": "35%",
              "--translate-y": "35%",
            },
          },
        }
      },



      //input class
      ".input": {
        "--input-height": "3.75rem",
        "--input-padding-x": "1.25rem",
        "--input-font-size": "1rem !important",

        padding: "0 var(--input-padding-x)",
        borderRadius: "0.25rem 0.25rem 0 0",
        borderColor: "var(--input-focused-underline-color)",
        borderBottomWidth: "2px",

        backgroundColor: "var(--input-bg-color)",
        caretColor: "var(--input-focused-underline-color)",
        color: "var(--input-font-color)",
        outline: "none",

        cursor: "text",

        height: "var(--input-height)",
        
        //for date input
        "&::-webkit-datetime-edit-text, &::-webkit-datetime-edit-day-field, &::-webkit-datetime-edit-month-field, &::-webkit-datetime-edit-year-field": {
          color: "var(--input-focused-underline-color)",
        },

        // for time input
        "&::-webkit-datetime-edit-hour-field, &::-webkit-datetime-edit-minute-field, &::-webkit-datetime-edit-ampm-field": {
          color: "var(--input-focused-underline-color)",
        },

        "&.input-text": {
          position: "relative",
          display: "flex",
          alignItems: "flex-end",

          padding: "0",
          borderRadius: "0",
          borderColor: "transparent",
          borderBottomWidth: "0",

          backgroundColor: "transparent",
          caretColor: "transparent",
          color: "transparent",

          "& > input": { 
            width: "100%",
            height: "100%",
            padding: "1rem var(--input-padding-x) 0 var(--input-padding-x)",
            borderRadius: "0.25rem 0.25rem 0 0",
            borderColor: "var(--input-focused-underline-color)",
            borderBottomWidth: "2px",

            backgroundColor: "var(--input-bg-color)",
            caretColor: "var(--input-focused-underline-color)",
            color: "var(--input-font-color)",
            outline: "none",

            transition: `border-color 125ms ${ easeInOut }`,

            "&:placeholder-shown": {
              borderColor: "var(--input-underline-color)",

              "& + label": {
                top: "calc(50% - 1rem/2)",
                padding: "0 0.375rem",
                fontSize: "1rem",
  
                color: "var(--input-underline-color)",
              },
            },

            "&:focus": {
              borderColor: "var(--input-focused-underline-color)",

              "& + label": {
                top: "calc(0% - 0.875rem/2 + 1rem)",
                padding: "0 0.375rem",
                fontSize: "0.875rem",

                color: "var(--input-focused-underline-color)",
              }
            },

            "&:disabled": {
              cursor: "not-allowed",
              opacity: "0.5",

              "& + label.input-placeholder": {
                opacity: "0.5",
              },
            }
          },
          "& > label.input-placeholder": { 
            position: "absolute",
            display: "flex",
            alignItems: "center",

            top: "calc(0% - 0.875rem/2 + 1rem)",
            left: "calc(var(--input-padding-x) - 0.375rem)",
            padding: "0 0.375rem",
            borderRadius: "0.5rem",

            fontSize: "0.875rem",
            lineHeight: "1rem",

            color: "var(--input-focused-underline-color)",
            pointerEvents: "none",

            transition: `top 125ms ${ easeInOut }, font-size 125ms ${ easeInOut }, color 125ms ${ easeInOut }`
          },
        },
        "&:disabled": {
          borderColor: "var(--input-underline-color)",
          color: "var(--input-underline-color)",
          
          cursor: "not-allowed",
          opacity: "0.5",
        },
      },



      //menu class
      //much more complicated than button
      ".menu": {
        "--menu-title-height": "2.5rem",
        "--menu-padding-x": "1.25rem",
        "--menu-title-font-size": "1rem",
        "--menu-title-margin-top": "1rem",

        "--menu-list-item-gap": "1rem",
        "--menu-list-item-height": "3.25rem",
        "--menu-list-item-font-size": "1rem",
        "--menu-list-item-icon-size": "1.5rem",

        display: "flex",
        flexDirection: "column",
        padding: "0.5rem",
        fontWeight: "600",
        textTransform: "capitalize",

        "& > *": { fontSize: "1rem" },
        color: "var(--menu-font-color)",

        "&.menu-horizontal": { //horizontal menu
          flexDirection: "row",

          "& > li": {
            "& > details": { //collapsible list under menu
              position: "relative",

              "& > ul, & > ol": { //sub ul and/or ol under li element
                position: "absolute",
                top: "calc(100% + 8px)",
                left: "0",
                // paddingTop: "0.5rem",
                // paddingBottom: "0.5rem",
                // paddingRight: "0.5rem",
                // paddingLeft: "2.25rem",
                padding: "0.5rem",
                marginLeft: "0",
                borderRadius: "1rem",
                backgroundColor: "var(--menu-horizontal-bg-color)",
                "--tw-drop-shadow": "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))", //drop shadow came from tailwind css dropshadow-md
                filter: "var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)",

                "&::before": { //line on the left side of sub-ul
                  width: "0",
                },
              },
            }
          },
        },

        "& .menu-title": { //menu title in almost all wrapper elements
          minHeight: "var(--menu-title-height)",
          maxHeight: "var(--menu-title-height)",
          padding: "0 var(--menu-padding-x)",
          fontSize: "var(--menu-title-font-size)",

          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          color: "var(--menu-title-font-color)",
          opacity: "0.5",
        },

        "& li": {
          "& + .menu-title": {
            marginTop: "var(--menu-title-margin-top)",
          },

          "& > ul, & > ol": { //sub ul and/or ol under li element
            position: "relative",
            display: "flex",
            flexDirection: "column",
            marginLeft: "1.25rem",
            paddingLeft: "1rem",
  
            "&::before": { //line on the left side of sub-ul
              position: "absolute",
              left: "0",
              top: "1.25rem",
              bottom: "1.25rem",
              content: "''",
              width: "2px",
              backgroundColor: "var(--menu-sideline-color)",
              opacity: "0.15"
            },
            
            "& + .menu-title": {
              marginTop: "var(--menu-title-margin-top)",
            },
          },

          "& > a, & > label": { //list items under menu
            gap: "var(--menu-list-item-gap)",
            minHeight: "var(--menu-list-item-height)",
            maxHeight: "var(--menu-list-item-height)",
            padding: "0 var(--menu-padding-x)",
            fontSize: "var(--menu-list-item-font-size)",

            "& > *": {
              fontSize: "var(--menu-list-item-icon-size)",
            },

            display: "grid",
            gridAutoFlow: "column",
            gridAutoColumns: "max-content auto max-content",
            alignItems: "center",
            borderRadius: "9999px",
            whiteSpace: "nowrap",
            cursor: "pointer",
            "-webkit-user-select": "none",
            "-ms-user-select": "none",
            "user-select": "none",
  
            "&:hover": { backgroundColor: "var(--menu-item-hovered-bg-color)" },
  
            "&:active": { backgroundColor: "var(--menu-item-clicked-bg-color)" },
  
            "&.menu-active": { backgroundColor: "var(--menu-item-active-bg-color)", color: "var(--menu-item-active-font-color)" },
          },

          "& > details": { //collapsible list under menu
            "& > ul, & > ol": { //sub ul and/or ol under li element
              position: "relative",
              display: "flex",
              flexDirection: "column",
              marginLeft: "1.25rem",
              paddingLeft: "1rem",
    
              "&::before": { //line on the left side of sub-ul
                position: "absolute",
                left: "0",
                top: "1.25rem",
                bottom: "1.25rem",
                content: "''",
                width: "2px",
                backgroundColor: "var(--menu-sideline-color)",
                opacity: "0.15"
              },
            },

            "& > summary": { //the summary tag
              gap: "var(--menu-list-item-gap)",
              minHeight: "var(--menu-list-item-height)",
              maxHeight: "var(--menu-list-item-height)",
              padding: "0 var(--menu-padding-x)",
              fontSize: "var(--menu-list-item-font-size)",
  
              "& > *": {
                fontSize: "var(--menu-list-item-icon-size)",
              },

              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              borderRadius: "9999px",
              width: "100%",
              whiteSpace: "nowrap",
              cursor: "pointer",
              "-webkit-user-select": "none",
              "-ms-user-select": "none",
              "user-select": "none",
              listStyle: "none",
              "&::-webkit-details-marker": { display: "none" },
    
              "&:hover": { backgroundColor: "var(--menu-item-hovered-bg-color)" },
    
              "&:active": { backgroundColor: "var(--menu-item-clicked-bg-color)" },
            },

            //summary styled when details is open
            "&[open] > summary": { backgroundColor: "var(--menu-details-open-bg-color)" }
          }
        },

        //menu sizes
        "&.menu-sm": {
          "--menu-title-height": "1.75rem",
          "--menu-padding-x": "1rem",
          "--menu-title-font-size": "0.875rem",
          "--menu-title-margin-top": "0.875rem",

          "--menu-list-item-gap": "0.25rem",
          "--menu-list-item-height": "2.5rem",
          "--menu-list-item-font-size": "0.875rem",
          "--menu-list-item-icon-size": "1.375rem",
        },

        //menu sizes
        "&.menu-md": {
          "--menu-title-height": "2.5rem",
          "--menu-padding-x": "1.25rem",
          "--menu-title-font-size": "1rem",
          "--menu-title-margin-top": "1rem",

          "--menu-list-item-gap": "1rem",
          "--menu-list-item-height": "3.25rem",
          "--menu-list-item-font-size": "1rem",
          "--menu-list-item-icon-size": "1.5rem",
        },
        
        "&.menu-lg": {
          "--menu-title-height": "3.25rem",
          "--menu-padding-x": "1.5rem",
          "--menu-title-font-size": "1.375rem",
          "--menu-title-margin-top": "1.375rem",

          "--menu-list-item-gap": "1rem",
          "--menu-list-item-height": "3.75rem",
          "--menu-list-item-font-size": "1.375rem",
          "--menu-list-item-icon-size": "1.625rem",
        },
        
        "&.menu-xl": {
          "--menu-title-height": "4rem",
          "--menu-padding-x": "2rem",
          "--menu-title-font-size": "1.5rem",
          "--menu-title-margin-top": "1.5rem",

          "--menu-list-item-gap": "1rem",
          "--menu-list-item-height": "4.5rem",
          "--menu-list-item-font-size": "1.5rem",
          "--menu-list-item-icon-size": "2rem",
        },
      },



      //modal class
      ".modal": {
        position:"absolute",
        top:"0",
        left:"0",
        width:"100vw",
        height:"100vh",
        backgroundColor: "var(--modal-overlay-bg-color)",
        opacity: "0",
        visibility: "hidden",
        zIndex: "100",
        transition: `opacity 125ms ${ easeInOut }, visibility 125ms ${ easeInOut }`,

        "& > .modal-content": { //wrapper for the content
          "display": "flex",
          "justifyContent": "center",
          "alignItems": "center",
          width:"100%",
          height:"100%",
          transition: `transform 125ms ${ easeInOut }`,
          transform: "scale(0.9, 0.9)",

          "& > .modal-backdrop": { //the transparent background
            position:"absolute",
            top:"0",
            left:"0",
            width:"100vw",
            height:"100vh",
            zIndex: "-1",
          }
        }
      },

      "input[type='checkbox'].modal-toggle": { //the one that will trigger modal opening
        position: "absolute",
        top: "-100px",
        "&:checked+.modal": { opacity: "1", visibility: "visible" },
        "&:checked+.modal > .modal-content": { transform: "scale(1, 1)" },
      },



      //navbar class
      ".navbar": {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        position: "sticky",
        top: "0",
        width: "100%",
        minHeight: "4.25rem",
        maxHeight: "4.25rem",
        fontWeight: "600",
        zIndex: "97",
        backgroundColor: "var(--navbar-bg-color)",

        "&.navbar-bottom": { //bottom nav bar
          padding: "0",
          minHeight: "4.75rem",
          maxHeight: "4.75rem",

          position: "fixed",
          top: "auto",
          bottom: "0",

          "& > .menu": {
            padding: "0",

            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",

            width: "100%",

            "& > li": {
              minWidth: "3.75rem",
              width: "4.75rem",

              "& > a, & > label": { //list items under menu
                gap: "0",
                width: "100%",
                minHeight: "initial",
                maxHeight: "initial",
                padding: "0",
                fontSize: "0.75rem",
    
                "& > *:first-child": {
                  width: "90%",
                  textAlign: "center",
                  padding: "0.125rem 0",
                  borderRadius: "9999px",
                },
    
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "0",
                whiteSpace: "noWrap",
      
                "&:hover": { 
                  background: "transparent",

                  "& > *:first-child": {
                    backgroundColor: "var(--navbar-item-icon-hovered-bg-color)",
                  }, 
                },
      
                "&:active": { 
                  background: "transparent",

                  "& > *:first-child": {
                    background: "var(--navbar-item-icon-clicked-bg-color)",
                  }, 
                },
      
                "&.menu-active": { 
                  backgroundColor: "transparent",
                  color: "#000000",

                  "& > *:first-child": {
                    backgroundColor: "var(--navbar-item-icon-active-bg-color)",
                    color: "var(--navbar-item-icon-active-font-color)",
                  },
                },
              },
            }
          },
        }
      },

      //navbar item positions
      //I put these all outside so that hidden utility class is not overridden
      ".navbar-start": {
        display: "flex",
        flexDirection: "row",
        flexGrow: "1",
        flexBasis: "0",
        justifyContent: "flex-start",
        alignItems: "center",
        order: "0",
      },
      
      ".navbar-center": {
        display: "flex",
        flexDirection: "row",
        flexGrow: "1",
        flexBasis: "0",
        justifyContent: "center",
        alignItems: "center",
        order: "1",
      },
      
      ".navbar-end": {
        display: "flex",
        flexDirection: "row",
        flexGrow: "1",
        flexBasis: "0",
        justifyContent: "flex-end",
        alignItems: "center",
        order: "2",
      },



      //progress class
      ".progress": {
        "--max": "1",
        "--value": "0",
        "--progress-height": "8px",

        height: "var(--progress-height)",

        position: "relative",
        display: "inline-block",
        width: "256px",
        borderRadius: "9999px",
        backgroundColor: "var(--progress-bg-color)",

        "&::after": {
          height: "var(--progress-height)",

          content: "''",
          position: "absolute",
          width: "clamp(0%, calc((var(--value)/var(--max)) * 100%), 100%)", //clamping for minimum and maximun values
          borderRadius: "9999px",
          backgroundColor: "var(--progress-fg-color)",
        },

        "&.progress-sm": {
          "--progress-height": "4px",
        },

        "&.progress-md": {
          "--progress-height": "8px",
        },

        "&.progress-lg": {
          "--progress-height": "12px",
        },

        "&.progress-xl": {
          "--progress-height": "16px",
        },
      },



      //rail class
      ".rail": {
        display: "flex",
        padding: "0.5rem 0.25rem",
        flexDirection: "column",
        order: "1",
        alignItems: "flex-start",
        minWidth: "5rem",
        maxWidth: "5rem",
        height: "100vh",

        backgroundColor: "var(--rail-bg-color)",

        transition: `padding 300ms ${ easeInOut }, min-width 300ms ${ easeInOut }, max-width 300ms ${ easeInOut }`,

        "& > div.rail-top, & > div.rail-middle, & > div.rail-bottom": {
          "& > .btn": {
            "--btn-padding-x": "1.5rem", //initial value for animation purposes
            "--btn-gap": "1.75rem", //initial value for animation purposes

            width: "100%",
            overflowX: "hidden",

            transition: `gap 300ms ${ easeInOut }`,
          },

          "& > .menu": {
            "--menu-list-item-width": "2.5rem", //initial value for animation purposes
            "--menu-list-item-height": "2.5rem", //initial value for animation purposes
            "--menu-padding-x": "0.5rem", //initial value for animation purposes
            "--menu-list-margin-y": "0.375rem", //initial value for animation purposes
            "--menu-list-item-gap": "1.75rem", //initial value for animation purposes
  
            padding: "0",
            width: "100%",
            overflowX: "hidden",
    
            "& li": {
              width: "var(--menu-list-item-width)",
              marginTop: "var(--menu-list-margin-y)",
              marginBottom: "var(--menu-list-margin-y)",
              marginLeft: "calc(1.5rem - 0.5rem)",
              // overflowX: "hidden",

              transition: `width 300ms ${ easeInOut }, margin-top 150ms ${ easeInOut }, margin-bottom 150ms ${ easeInOut }, margin-left 300ms ${ easeInOut }`,

              "& > ul, & > ol": { //sub ul and/or ol under li element
                marginLeft: "3.5rem",
                paddingLeft: "1rem",
                opacity: "0",
                overflowX: "hidden",
                overflowY: "auto",

                transition: `margin-left 300ms ${ easeInOut }, opacity 300ms ${ easeInOut }`,

                "&::before": { //line on the left side of sub-ul
                  display: "none",
                },
              },
    
              "& > a, & > label": { //list items under menu
                minHeight: "var(--menu-list-item-height)",
                maxHeight: "var(--menu-list-item-height)",
                padding: "0 var(--menu-padding-x)",
                
                transition: `gap 300ms ${ easeInOut }, padding 300ms ${ easeInOut }, min-height 150ms ${ easeInOut }, max-height 150ms ${ easeInOut }`,
              },

              "& > details": { //collapsible list under menu
                "& > ul, & > ol": { //sub ul and/or ol under li element
                  marginLeft: "3.5rem",
                  paddingLeft: "1rem",
                  opacity: "0",
                  overflowX: "hidden",
  
                  transition: `margin-left 300ms ${ easeInOut }, opacity 300ms ${ easeInOut }`,
                },

                "& > summary": { //the summary tag
                  minHeight: "var(--menu-list-item-height)",
                  maxHeight: "var(--menu-list-item-height)",
                  padding: "0 var(--menu-padding-x)",
                  
                  transition: `gap 300ms ${ easeInOut }, padding 300ms ${ easeInOut }, min-height 150ms ${ easeInOut }, max-height 150ms ${ easeInOut }`,
                },
              }
            },
          },
        },

        "&.rail-open": {
          minWidth: "23rem",
          maxWidth: "23rem",
          padding: "0.25rem 0.5rem",
          
          "& > div.rail-top, & > div.rail-middle, & > div.rail-bottom": {
            "& > .btn": {
              "--btn-gap": "1.25rem",
            },

            "& > .menu": {
              "--menu-list-item-width": "100%",
              "--menu-list-item-height": "3.25rem",
              "--menu-padding-x": "1.5rem",
              "--menu-list-item-gap": "1.25rem",
              "--menu-list-gap": "0",
              
              "& li" : {
                marginLeft: "0",

                "& > ul, & ol": {
                  marginLeft: "2.25rem",
                  opacity: "1",
                }
              },

              "& li > details": { //collapsible list under menu
                "& > ul, & > ol": { //sub ul and/or ol under li element
                  marginLeft: "2.25rem",
                  opacity: "1",
                },
              }
            },
          },
        },
      },

      "input[type='checkbox'].rail-toggle": {
        position: "absolute",
        top: "-100px",
        "&:checked + .rail": {
          minWidth: "23rem",
          maxWidth: "23rem",
          padding: "0.5rem 0.5rem",

          "& > div.rail-top, & > div.rail-middle, & > div.rail-bottom": {
            "& > .btn": {
              "--btn-gap": "1.25rem",
            },

            "& > .menu": {
              "--menu-list-item-width": "100%",
              "--menu-list-item-height": "3.25rem",
              "--menu-padding-x": "1.5rem",
              "--menu-list-item-gap": "1.25rem",
              "--menu-list-margin-y": "0",
              
              "& li" : {
                marginLeft: "0",

                "& > ul, & ol": {
                  marginLeft: "0.25rem",
                  opacity: "1",
                }
              },

              "& li > details": { //collapsible list under menu
                "& > ul, & > ol": { //sub ul and/or ol under li element
                  marginLeft: "0.25rem",
                  opacity: "1",
                },
              }
            },
          }
        }
      },

      ".rail-top": {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
      },

      ".rail-middle": {
        width: "100%",
        display: "flex",
        alignItems: "flex-start",
        marginTop: "0.5rem",
        flexGrow: "1",
      },

      ".rail-bottom": {
        width: "100%",
        display: "flex",
        alignItems: "flex-end",
        flexBasis: "100%",
        marginTop: "0.5rem",
      },



      //radio class
      ".radio": {
        "--radio-size": "1.25rem",
        "--radio-border-width-checked": "6px",

        minWidth: "var(--radio-size)",
        maxWidth: "var(--radio-size)",
        minHeight: "var(--radio-size)",
        maxHeight: "var(--radio-size)",

        "&:checked": {
          borderWidth: "var(--radio-border-width-checked)",
          borderColor: "var(--radio-border-color-on)",
        },

        appearance: "none",
        "-webkit-appearance": "none",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
        borderWidth: "2px",
        borderColor: "var(--radio-border-color-off)",
        borderRadius: "100%",
        cursor: "pointer",
        transition: `border-width 75ms ${ easeInOut }, borderColor 75ms ${ easeInOut }`,

        //radio sizes
        "&.radio-sm": {
          "--radio-size": "0.875rem",
          "--radio-border-width-checked": "4px",
        },

        "&.radio-md": {
          "--radio-size": "1.25rem",
          "--radio-border-width-checked": "6px",
        },

        "&.radio-lg": {
          "--radio-size": "1.625rem",
          "--radio-border-width-checked": "8px",
        },

        "&.radio-xl": {
          "--radio-size": "2rem",
          "--radio-border-width-checked": "10px",
        },

        "&:disabled": {//disabled radio
          backgroundColor: "#C7C7C7",
          opacity: "70%",
          cursor: "not-allowed",
        },

        "&:checked:disabled": {//checked and disabled radio
          backgroundColor: "transparent",
          opacity: "70%",
          cursor: "not-allowed",
        },
      },



      //slider class
      "input[type=range].slider": {
        // base style
        "-webkit-appearance": "none",
        "--track-height": "1rem",
        "--thumb-height": "1rem",
        height: "0.125rem",
        marginTop: "0.5rem",
        marginBottom: "0.5rem",
        backgroundColor: "var(--slider-track-color)",
        borderRadius: "4px",
        cursor: "pointer",

        "&::-webkit-slider-runnable-track": {
          height: "var(--track-height)",
          marginTop: "calc((var(--track-height)/2) - (var(--thumb-height)/2))",
          // backgroundColor: "var(--slider-track-color)",
          backgroundColor: "transparent",

          borderRadius: "8rem",
          overflow: "hidden",
        },

        "&::-moz-range-track": {

        },
        
        "&::-webkit-slider-thumb": {
          "-webkit-appearance": "none",
          height: "1rem",
          width: "1rem",
          borderRadius: "100%",
          backgroundColor: "var(--slider-thumb-color)",
          boxShadow: "-9999px 0 0 calc(9999px - (var(--thumb-height)/2)) var(--slider-progress-color)",
        },
        
        "&::-moz-range-thumb": {
          "-webkit-appearance": "none",
          height: "1rem",
          width: "1rem",
          border: "none",
          borderRadius: "100%",
          backgroundColor: "var(--slider-thumb-color)"
        },
        
        "&::-ms-thumb": {
          "-webkit-appearance": "none",
          height: "1rem",
          width: "1rem",
          borderRadius: "100%",
          backgroundColor: "var(--slider-thumb-color)",
          boxShadow: "",
        },
        
        "&:focus": {
          outline: "none",
        },
      },



      //swap class
      ".swap": {
        position: "relative",
        display: "inline-grid",
        // justifyItems: "center",
        alignContent: "center",
        "-webkit-user-select": "none",
        "-ms-user-select": "none",
        "user-select": "none",
        cursor: "pointer",

        //all elements will position in 1,1
        "& > *": {
          gridColumnStart: "1",
          gridRowStart: "1",
          // transition: `opacity 75ms ${ easeInOut }`,
        },

        //swap with fade transition
        "&.swap-fade": {
          "& > *": {
            transition: `opacity 125ms ${ easeInOut }`,
          },
        },

        //swap with rotate and fade transition
        "&.swap-rotate": {
          "& > *": {
            transition: `opacity 125ms ${ easeInOut }, transform 125ms ${ easeInOut }`,
          },

          "& > input[type='checkbox']": {
            appearance: "none",
            "-webkit-appearance": "none",
          
            "& ~ .swap-on": {
              opacity: "0",
              transform: "rotate(-45deg)"
            },
            "& ~ .swap-off": {
              opacity: "1",
              transform: "rotate(0deg)"
            },
  
            "&:checked": {
              "& ~ .swap-on": {
                opacity: "1",
                transform: "rotate(0deg)"
              },
              "& ~ .swap-off": {
                opacity: "0",
                transform: "rotate(45deg)"
              },
            }
          },
        },

        "& > input[type='checkbox']": {
          appearance: "none",
          "-webkit-appearance": "none",
        
          "& ~ .swap-on": {
            opacity: "0",
          },
          "& ~ .swap-off": {
            opacity: "1",
          },

          "&:checked": {
            "& ~ .swap-on": {
              opacity: "1",
            },
            "& ~ .swap-off": {
              opacity: "0",
            },
          }
        },
      },



      //switch class
      ".switch": {
        "--switch-width": "2.25rem",
        "--switch-height": "1.25rem",
        "--switch-circle-size": "0.875rem",

        minWidth: "var(--switch-width)",
        maxWidth: "var(--switch-width)",
        minHeight: "var(--switch-height)",
        maxHeight: "var(--switch-height)",

        display: "flex",
        position: "relative",
        flexDirection: "row",
        alignItems: "center",
        appearance: "none",
        "-webkit-appearance": "none",
        backgroundColor: "var(--switch-bg-color-off)",
        borderRadius: "9999px",
        cursor: "pointer",
        transition: `background-color 150ms ${ easeInOut }`,

        "&::after": {
          minHeight: "var(--switch-circle-size)",
          maxHeight: "var(--switch-circle-size)",
          minWidth: "var(--switch-circle-size)",
          maxWidth: "var(--switch-circle-size)",

          content: "''",
          position: "absolute",
          top: "3px",
          left: "3px",
          borderRadius: "100%",
          backgroundColor: "var(--switch--lever-bg-color-off)",
          transition: `left 150ms ${ easeInOut }, background-color 150ms ${ easeInOut }`,
        },

        "&:checked": {
          backgroundColor: "var(--switch-bg-color-on)",

          "&::after": {
            backgroundColor: "var(--switch--lever-bg-color-on)",
            left: "calc(100% - var(--switch-circle-size) - 3px)",
          }
        },

        "&:disabled": {//disabled switch
          opacity: "70%",
          cursor: "not-allowed",
        },

        "&:checked:disabled": {//checked and disabled switch
          opacity: "70%",
          cursor: "not-allowed",
        },

        "&:indeterminate": {//indeterminate switch
          "&::after": {
            left: "calc(50% - var(--switch-circle-size)/2)",
          }
        },

        //checkbox sizes
        "&.switch-sm": {
          "--switch-width": "1.625rem",
          "--switch-height": "0.875rem",
          "--switch-circle-size": "0.5rem",
        },

        "&.switch-md": {
          "--switch-width": "2.25rem",
          "--switch-height": "1.25rem",
          "--switch-circle-size": "0.875rem",
        },

        "&.switch-lg": {
          "--switch-width": "2.7375rem",
          "--switch-height": "1.625rem",
          "--switch-circle-size": "1.25rem",
        },

        "&.switch-xl": {
          "--switch-width": "3.45rem",
          "--switch-height": "2rem",
          "--switch-circle-size": "1.625rem",
        },
      }
    }
  )
}

export default AddComponents