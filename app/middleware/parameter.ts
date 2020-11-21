export interface MiddlewareParameter<T> {
  type: ParameterType;
  value?: T;
}

export interface ParameterCookie {
  name: string;
}

export interface ParameterParams {
  name: string;
}

export interface ParameterQuery {
  name: string;
}

export interface ParameterHeader {
  name: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ParameterBody {}

export enum ParameterType {
  COOKIE,
  PARAMS,
  QUERY,
  HEADER,
  BODY,
  CUSTOM,
}

export class Parameter {
  static COOKIE(name: string): MiddlewareParameter<ParameterCookie> {
    return {
      type: ParameterType.COOKIE,
      value: {
        name,
      },
    };
  }

  static PARAMS(name: string): MiddlewareParameter<ParameterParams> {
    return {
      type: ParameterType.PARAMS,
      value: {
        name,
      },
    };
  }

  static QUERY(name: string): MiddlewareParameter<ParameterQuery> {
    return {
      type: ParameterType.QUERY,
      value: {
        name,
      },
    };
  }

  static HEADER(name: string): MiddlewareParameter<ParameterHeader> {
    return {
      type: ParameterType.HEADER,
      value: {
        name,
      },
    };
  }

  static get BODY(): MiddlewareParameter<ParameterBody> {
    return {
      type: ParameterType.BODY,
    };
  }

  static CUSTOM<T>(value: T): MiddlewareParameter<T> {
    return {
      type: ParameterType.CUSTOM,
      value,
    };
  }

  static isCookie(parameter: MiddlewareParameter<any>): parameter is MiddlewareParameter<ParameterCookie> {
    return parameter.type === ParameterType.COOKIE;
  }

  static isParams(parameter: MiddlewareParameter<any>): parameter is MiddlewareParameter<ParameterParams> {
    return parameter.type === ParameterType.PARAMS;
  }

  static isQuery(parameter: MiddlewareParameter<any>): parameter is MiddlewareParameter<ParameterQuery> {
    return parameter.type === ParameterType.QUERY;
  }

  static isHeader(parameter: MiddlewareParameter<any>): parameter is MiddlewareParameter<ParameterHeader> {
    return parameter.type === ParameterType.HEADER;
  }

  static isBody(parameter: MiddlewareParameter<any>): parameter is MiddlewareParameter<ParameterBody> {
    return parameter.type === ParameterType.BODY;
  }
}

export default Parameter;
