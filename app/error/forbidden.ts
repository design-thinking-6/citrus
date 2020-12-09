import { KoaError } from './koa-error';

export class Forbidden extends KoaError {
  constructor(message: string) {
    super(403, message);
  }
}

export default Forbidden;
