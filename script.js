function escape(string) {
    return string.replace(/[^A-Za-z0-9]+/g, "");
}

function palindrome(string) {
    const safeString = escape(string);
    const reverseString = Array.from(safeString).reverse().join("");
    return safeString.toLowerCase() === reverseString.toLowerCase();
};