export function parseString(string) {
    return string.replace(/[ /-]/g, '_').replace(/'/g, '').toLowerCase();
}