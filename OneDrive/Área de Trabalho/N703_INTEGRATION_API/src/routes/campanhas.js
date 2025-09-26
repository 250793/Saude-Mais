const express = require("express");
const router = express.Router();
const db = require("../db/mockDb");
const registry = require("../services/registryService");
const fcm = require("../services/fcmService");

// POST /campanhas  -> cria campanha e registra no Registry (integração #2)
router.post("/", async (req, res, next) => {
  try {
    const { titulo, descricao, inicio, fim } = req.body;
    if (!titulo || !inicio || !fim)
      return res.status(400).json({ error: "dados incompletos" });

    const id = db.nextId.campanhas++;
    const campanha = { id, titulo, descricao, inicio, fim, status: "pendente" };
    db.campanhas.push(campanha);

    // Registrar campanha em sistema municipal (integração externa)
    try {
      await registry.registerCampaign(campanha);
    } catch (e) {
      console.warn("Falha ao registrar campanha no Registry:", e.message);
    }

    res.status(201).json(campanha);
  } catch (err) {
    next(err);
  }
});

// PUT /campanhas/:id/approve
router.put("/:id/approve", async (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const campanha = db.campanhas.find((c) => c.id === id);
    if (!campanha)
      return res.status(404).json({ error: "Campanha não encontrada" });

    campanha.status = "ativa";

    // Notificar usuários (exemplo)
    try {
      await fcm.sendNotification({
        user: "all",
        title: "Nova campanha ativa",
        body: campanha.titulo,
      });
    } catch (e) {
      console.warn("Falha ao notificar FCM:", e.message);
    }

    res.json(campanha);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
