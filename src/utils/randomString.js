const randomStringBySize = (size) => {
    const allowed_characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    let result = '';
    const charactersLength = allowed_characters.length;
    for (let i = 0; i < size; i++) {
        result += allowed_characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

export default randomStringBySize;