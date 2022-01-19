const truncate = (str, n) => {
    // Return the string (str) cut at the given index (n)
    return str.length > n ? str.substr(0, n - 1) + "..." : str;
};

export default truncate;