export interface MiddlewareResponse<T> {
  type: ResponseType;
  value?: T;
}

export interface ResponseCookie {
  name: string;
}

export interface ResponseContext {
  name: string;
}

export interface ResponseBody {
  status: number;
}

export enum ResponseType {
  COOKIE,
  CONTEXT,
  BODY,
}

export class Response {
  static COOKIE(name: string): MiddlewareResponse<ResponseCookie> {
    return {
      type: ResponseType.COOKIE,
      value: {
        name,
      },
    };
  }

  static CONTEXT(name: string): MiddlewareResponse<ResponseContext> {
    return {
      type: ResponseType.CONTEXT,
      value: {
        name,
      },
    };
  }

  static BODY(status: number): MiddlewareResponse<ResponseBody> {
    return {
      type: ResponseType.BODY,
      value: {
        status,
      },
    };
  }

  static isCookie(response: MiddlewareResponse<any>): response is MiddlewareResponse<ResponseCookie> {
    return response.type === ResponseType.COOKIE;
  }

  static isContext(response: MiddlewareResponse<any>): response is MiddlewareResponse<ResponseContext> {
    return response.type === ResponseType.CONTEXT;
  }

  static isBody(response: MiddlewareResponse<any>): response is MiddlewareResponse<ResponseBody> {
    return response.type === ResponseType.BODY;
  }
}

export default Response;
