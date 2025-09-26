const request = require("supertest");
const app = require("../src/app");

describe("Campanhas API", () => {
  it("POST /campanhas cria campanha (201)", async () => {
    const resp = await request(app)
      .post("/campanhas")
      .send({
        titulo: "Vacina X",
        descricao: "Campanha",
        inicio: "2025-09-20",
        fim: "2025-10-01",
      });
    expect(resp.statusCode).toBe(201);
    expect(resp.body).toHaveProperty("id");
    expect(resp.body.status).toBe("pendente");
  });

  it("PUT /campanhas/:id/approve aprova campanha", async () => {
    // criar primeiro
    const create = await request(app)
      .post("/campanhas")
      .send({
        titulo: "Campanha 2",
        descricao: "Campanha",
        inicio: "2025-09-20",
        fim: "2025-10-01",
      });
    const id = create.body.id;
    const resp = await request(app).put(`/campanhas/${id}/approve`);
    expect(resp.statusCode).toBe(200);
    expect(resp.body.status).toBe("ativa");
  });
});
