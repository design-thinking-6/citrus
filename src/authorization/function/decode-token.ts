export function decodeToken(token: string) {
  const decode = Buffer.from(token, 'base64').toString('ascii');
  const [id, password] = decode.split(' ');

  return { id, password };
}

export default decodeToken;
