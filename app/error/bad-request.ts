import { KoaError } from './koa-error';

export class BadRequest extends KoaError {
  constructor(message: string) {
    super(400, message);
  }
}

export default BadRequest;
