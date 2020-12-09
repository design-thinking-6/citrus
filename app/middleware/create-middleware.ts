import { IMiddleware } from 'koa-router';
import { Parameter, MiddlewareParameter } from './parameter';
import { MiddlewareResponse, Response } from './response';
import { logger } from '../../util/logger';

export type Middleware<T> = (ctx: T, ...args: any[]) => Promise<unknown>;

export function createMiddleware<T = any>(
  func: Middleware<T>,
  parameters: MiddlewareParameter<any>[],
  response: MiddlewareResponse<any> | null,
): IMiddleware {
  if (Math.max(func.length - 1, 0) !== parameters.length) throw new Error('Parameter length is not equal to Functions parameter length');

  return async (ctx, next) => {
    const params = parameters.map((parameter) => {
      if (Parameter.isCookie(parameter)) return ctx.cookies.get(parameter.value?.name ?? '');
      if (Parameter.isParams(parameter)) return ctx.params[parameter.value?.name ?? ''];
      if (Parameter.isQuery(parameter)) return ctx.query[parameter.value?.name ?? ''];
      if (Parameter.isHeader(parameter)) return ctx.headers[parameter.value?.name ?? ''];
      if (Parameter.isBody(parameter)) return ctx.request.body;

      return null;
    });

    try {
      const result = await func(ctx.state, ...params);

      if (response) {
        if (Response.isCookie(response)) {
          const name: string = response.value?.name ?? '';
          const value: string = result as string;

          if (name) ctx.cookies.set(name, value);
          else ctx.throw(500, 'Cookie name is empty');
        }
        if (Response.isContext(response)) {
          const name = response.value?.name;

          if (name) ctx.state[name] = result;
          else ctx.state = result;
        }
        if (Response.isBody(response)) {
          ctx.status = response.value?.status ?? 500;
          ctx.response.body = result;
        }
      }
    } catch (err) {
      logger.error(`Error: ${err} at: ${func}`);
      if (err.status) ctx.throw(err.status, err);
      ctx.throw(500, `failed to running: ${err}`);
    }

    await next();
  };
}

export default createMiddleware;
