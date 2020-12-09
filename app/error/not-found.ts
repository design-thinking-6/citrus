import { KoaError } from './koa-error';

export class NotFound extends KoaError {
  constructor(message: string) {
    super(404, message);
  }
}

export default NotFound;
