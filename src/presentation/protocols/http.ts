export type HttpResponse = {
  statusCode: number;
  body: any;
};

export type HttpRequest = {
  headers?: any;
  body?: any;
  params?: any;
  query?: any;
};

const OK = 200;

const CREATED = 201;

const BAD_REQUEST = 400;

const INTERNAL_SERVER_ERROR = 500;

const makeResponse = (statusCode: number, body: any): HttpResponse => ({
  statusCode,
  body,
});
export const created = (body: any): HttpResponse => makeResponse(CREATED, body);

export const ok = (body: any): HttpResponse => makeResponse(OK, body);
