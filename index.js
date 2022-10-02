const randomColor = (format) => {
    var randomInteger = Math.floor(0x100000000 * Math.random());
    var h = Math.round(Math.random() * (360 - 1) + 360);
    var s = Math.round(Math.random() * (100 - 0) + 100);
    var l = Math.round(Math.random() * (100 - 0) + 100);
    switch (format) {
        case 'hex': // Hexadecimal Color
            return '#' + ('00000' + randomInteger.toString(16)).slice(-6).toUpperCase();
        case 'hexa': // Hexadecimal Color With Transparency
            return '#' + ('0000000' + randomInteger.toString(16)).slice(-8).toUpperCase();
        case 'rgb': // Red Green Blue Color
            return 'rgb(' + (randomInteger & 255) + ', ' + (randomInteger >> 8 & 255) + ', ' + (randomInteger >> 16 & 255) + ')';
        case 'rgba': // Red Green Blue Color With Transparency
            return 'rgba(' + (randomInteger & 255) + ', ' + (randomInteger >> 8 & 255) + ', ' + (randomInteger >> 16 & 255) + ', ' + Math.round((randomInteger >> 24 & 255) / 255 * 10) / 10 + ')';
        case 'hsl': // Hue Saturation Lightness Color
            return 'hsl(' + h + ', ' + s + '%, ' + l + '%)';
        case 'hsla': // Hue Saturation Lightness Color With Transparency
            return 'hsla(' + h + ', ' + s + '%, ' + l + '%, '+ Math.round((randomInteger >> 24 & 255) / 255 * 10) / 10 +')';
        default:
            return randomInteger;
    }
}

export default randomColor;