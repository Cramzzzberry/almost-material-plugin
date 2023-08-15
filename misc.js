// used to check the luminosity of a color
export function LightOrDark(color) {
	var r, g, b, hsp;

	// Check the format of the color, HEX or RGB?
	if (color.match(/^rgb/)) {
		// If HEX --> store the red, green, blue values in separate variables
		color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
	
		r = color[1];
		g = color[2];
		b = color[3];
	} 
	else {
		// If RGB --> Convert it to HEX: http://gist.github.com/983661
		color = +("0x" + color.slice(1).replace( 
			color.length < 5 && /./g, "$&$&"
		)
				);

		r = color >> 16;
		g = color >> 8 & 255;
		b = color & 255;
	}
  
	// HSP equation from http://alienryderflex.com/hsp.html
	hsp = Math.sqrt(
		0.299 * (r * r) +
		0.587 * (g * g) +
		0.114 * (b * b)
	);
  
	// Using the HSP value, determine whether the color is light or dark
	if (hsp>127.5) {
		return "light";
	} 
	else {
		return "dark";
	}
}

// this is used to change the luminosity of a color
export function ShadeHexColor(color, percent) {
  const f=parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
  return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
}