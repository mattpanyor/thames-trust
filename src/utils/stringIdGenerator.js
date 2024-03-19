export function stringIdGenerator(size) {
  const allowedCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = allowedCharacters.length;
  for (let i = 0; i < size; i++) {
    result += allowedCharacters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}
