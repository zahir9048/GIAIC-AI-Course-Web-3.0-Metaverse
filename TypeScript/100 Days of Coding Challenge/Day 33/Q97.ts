function getCurrentDateFormatted(): string {
    const now = new Date();
    const day = ('0' + now.getDate()).slice(-2);
    const month = ('0' + (now.getMonth() + 1)).slice(-2);
    const year = now.getFullYear();
    return `${day}-${month}-${year}`;
}

console.log(getCurrentDateFormatted());
