export function parseString(string) {
    return string.replace(/[ /-]/g, '_').replace(/'/g, '').toLowerCase();
}

export function reverseParseString(string) {
    return string.replace(/[_]/g, ' ').replace(/(^\w{1})|(\s+\w{1})/g, char => char.toUpperCase());
}

export function parseSearch(string) {
    return string.toLowerCase();
}