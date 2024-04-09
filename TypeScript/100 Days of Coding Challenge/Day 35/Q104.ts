
function getRandomHexColor(): string {
    const color = '#' + ('00000' + (Math.random() * 0xFFFFFF << 0).toString(16)).slice(-6);
    return color;
}

console.log(getRandomHexColor());





