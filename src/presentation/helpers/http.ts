import { HttpResponse } from "../protocols";

const OK = 200;

const CREATED = 201;

const BAD_REQUEST = 400;

export const created = (body: any): HttpResponse => ({
  statusCode: CREATED,
  body,
});

export const ok = (body: any): HttpResponse => ({
  statusCode: OK,
  body,
});

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: BAD_REQUEST,
  body: error,
});
