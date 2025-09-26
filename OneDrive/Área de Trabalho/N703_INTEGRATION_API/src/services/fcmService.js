// src/services/fcmService.js

// Aqui usamos axios para mandar uma requisição HTTP para FCM.
// Em produção usar SDK e gerenciar credenciais (server key).
const axios = require("axios");
const FCM_SERVER_KEY = process.env.FCM_SERVER_KEY || "FAKE_KEY";

async function sendNotification({ user, title, body }) {
  // para demo: se FAKE_KEY -> simular sucesso
  if (FCM_SERVER_KEY === "FAKE_KEY")
    return Promise.resolve({ ok: true, simulated: true });

  const payload = {
    // tópico para broadcast ou token específico
    to: "/topics/all",
    notification: { title, body },
  };
  const resp = await axios.post(
    "https://fcm.googleapis.com/fcm/send",
    payload,
    {
      headers: {
        Authorization: `key=${FCM_SERVER_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );
  return resp.data;
}

module.exports = { sendNotification };
