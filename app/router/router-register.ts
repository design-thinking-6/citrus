import Router from 'koa-router';

const routers: Router<any, any>[] = [];

export function register(router: Router<any, any>) {
  routers.push(router);
}

export function get() {
  return routers;
}

export default {
  register,
  get,
};
