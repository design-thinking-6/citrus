import { KoaError } from './koa-error';

export class Unauthorized extends KoaError {
  constructor(message: string) {
    super(401, message);
  }
}

export default Unauthorized;
