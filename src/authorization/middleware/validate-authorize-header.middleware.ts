import { createMiddleware } from '../../../app/middleware/create-middleware';
import { Parameter } from '../../../app/middleware/parameter';
import { Response } from '../../../app/middleware/response';
import { Unauthorized } from '../../../app/error/unauthorized';
import { decodeToken } from '../function/decode-token';

async function extractHeader(ctx, header: string) {
  const [type, token] = header.split(' ');

  if (type.toLowerCase() !== 'basic') throw new Unauthorized(`Authorization type "${type}" is not support`);

  return decodeToken(token);
}

export const validateAuthorizeHeader = createMiddleware(
  extractHeader,
  [
    Parameter.HEADER('Authorization'),
  ],
  Response.CONTEXT('token'),
);

export default validateAuthorizeHeader;
