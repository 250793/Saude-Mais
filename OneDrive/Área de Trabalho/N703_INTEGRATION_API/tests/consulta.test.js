const request = require("supertest");
const app = require("../src/app");

describe("Consultas API", () => {
  it("POST /consultas cria consulta e retorna 201", async () => {
    const resp = await request(app)
      .post("/consultas")
      .send({ paciente: "Ana", posto: "Posto A", data: "2025-10-01T09:00:00" });
    expect(resp.statusCode).toBe(201);
    expect(resp.body).toHaveProperty("id");
    expect(resp.body.status).toBe("agendada");
  });

  it("GET /consultas retorna array", async () => {
    const resp = await request(app).get("/consultas");
    expect(resp.statusCode).toBe(200);
    expect(Array.isArray(resp.body)).toBe(true);
  });
});
