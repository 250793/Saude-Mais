const axios = require("axios");

const REGISTRY_BASE =
  process.env.REGISTRY_BASE || "https://mock-registry.example.com";

async function registerCampaign(campanha) {
  // Em avaliação, esse endpoint pode ser mockado (aqui simulamos via FAKE)
  if (REGISTRY_BASE.includes("mock-registry.example.com")) {
    // simular sucesso
    return Promise.resolve({ ok: true, simulated: true });
  }
  const resp = await axios.post(`${REGISTRY_BASE}/campaigns`, campanha);
  return resp.data;
}

module.exports = { registerCampaign };
