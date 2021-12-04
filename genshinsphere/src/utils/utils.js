export function parseString(string) {
    return string.replace(/[ /-]/g, '_').replace(/'/g, '').toLowerCase();
}

export function parseSearch(string) {
    return string.toLowerCase();
}