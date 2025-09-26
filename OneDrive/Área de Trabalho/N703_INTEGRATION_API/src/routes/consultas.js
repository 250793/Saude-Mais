const express = require("express");
const router = express.Router();
const db = require("../db/mockDb");
const fcm = require("../services/fcmService");

// POST /consultas
router.post("/", async (req, res, next) => {
  try {
    const { paciente, posto, data } = req.body;
    if (!paciente || !posto || !data)
      return res.status(400).json({ error: "dados incompletos" });
    const id = db.nextId.consultas++;
    const consulta = { id, paciente, posto, data, status: "agendada" };
    db.consultas.push(consulta);

    // Integração #1: enviar notificação via FCM (assincrono)
    try {
      await fcm.sendNotification({
        user: paciente,
        title: "Consulta agendada",
        body: `Consulta em ${data}`,
      });
    } catch (e) {
      console.warn("Falha ao notificar FCM:", e.message);
    }

    res.status(201).json(consulta);
  } catch (err) {
    next(err);
  }
});

// GET /consultas
router.get("/", (req, res) => {
  res.json(db.consultas);
});

module.exports = router;
