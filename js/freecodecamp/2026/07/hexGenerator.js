export function generateHex(color) {
  const colors = {
    red: null,
    green: null,
    blue: null,
  };

  if (!Object.hasOwn(colors, color)) {
    return "Invalid color";
  }

  colors[color] = getRandomRGBColor(255, 1);

  for (const rgbColor in colors) {
    colors[rgbColor] ??= getRandomRGBColor(colors[color] - 1);
  }

  return Object.values(colors)
    .map((rgb) => rgb.toString(16).padStart(2, "0"))
    .join("")
    .toUpperCase();
}

function getRandomRGBColor(maxRange, minRange = 0) {
  return minRange + Math.floor(Math.random() * (maxRange - minRange + 1));
}
