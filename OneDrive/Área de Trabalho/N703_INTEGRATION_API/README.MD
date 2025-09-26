# N703 - Integration API (Serviços de Saúde)

Este repositório contém a implementação de uma API RESTful em Node.js com foco em **Integração de Sistemas**, demonstrando a comunicação com serviços externos (Firebase Cloud Messaging e um Mock de Registro de Saúde).

## 🚀 Requisitos e Funcionalidades

- **API REST:** Implementada com Node.js e Express.
- **Integrações:**
  - **Firebase Cloud Messaging (FCM):** Usado para envio de notificações (emulação via HTTP request).
  - **Mock Health Registry API:** Serviço externo simulado para registro de campanhas.
- **Banco de Dados:** Mock em memória (`mockDb.js`) pronto para futura substituição por um PostgreSQL.
- **Testes:** Cobertura de testes unitários/integração usando **Jest** e **Supertest**.
- **Tratamento de Erros:** Middleware global de erro com respostas JSON padronizadas.

## ⚙️ Configuração e Execução

### Pré-requisitos

- Node.js (versão 16+)
- npm

### 1. Instalação de Dependências

```bash
npm install
```
