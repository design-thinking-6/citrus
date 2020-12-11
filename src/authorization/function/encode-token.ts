export function encodeToken(id: string, password: string) {
  return Buffer.from(`${id}:${password}`).toString('base64');
}

export default encodeToken;
