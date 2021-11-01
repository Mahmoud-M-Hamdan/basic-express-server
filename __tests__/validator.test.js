"use strict";

const validatorMiddleware = require("../src/middleware/validator");
const { server } = require("../src/server");
const supertest = require("supertest");
const mockRequest = supertest(server);

describe("validator middleware", () => {
  test("person path without qeury check", async () => {
    const res = await mockRequest.get("/person");
    expect(res.status).toBe(500);
  });

  test("correct qeury ", async () => {
    const res = await mockRequest.get("/person?name=mahmoud");
    expect(res.status).toBe(200);
  });

  test("check next line", async () => {
    let next = jest.fn();
    let req = {
      query: {},
    };
    let res = {};

    await validatorMiddleware(req, res, next);
    expect(next).toHaveBeenCalled();
  });
});