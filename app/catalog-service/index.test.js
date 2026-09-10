const request = require("supertest");
const app = require("./index");

describe("Catalog Service", () => {
  test("GET /health returns service status", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("UP");
    expect(response.body.service).toBe("catalog-service");
  });

  test("GET /products returns products", async () => {
    const response = await request(app).get("/products");

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveLength(2);
  });
});