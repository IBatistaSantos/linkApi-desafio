export type HttpResponse = {
  statusCode: number;
  body: any;
};

export type HttpRequest = {
  headers?: any;
  body?: any;
  params?: any;
  accountId?: string;
};

const makeResponse = (statusCode: number, body: any): HttpResponse => ({
  statusCode,
  body,
});
export const created = (body: any): HttpResponse => makeResponse(201, body);
