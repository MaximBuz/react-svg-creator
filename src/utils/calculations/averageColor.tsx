export function averageColor (color1: string, color2:string) {
  var color = '#';
  for (var i = 0; i < 3; i++) {
    var sub1 = color1.substring(1 + 2 * i, 3 + 2 * i);
    var sub2 = color2.substring(1 + 2 * i, 3 + 2 * i);
    var v1 = parseInt(sub1, 16);
    var v2 = parseInt(sub2, 16);
    var v = Math.floor((v1 + v2) / 2);
    var sub = v.toString(16).toUpperCase();
    var padsub = ('0' + sub).slice(-2);
    color += padsub;
  }
  return color;
}