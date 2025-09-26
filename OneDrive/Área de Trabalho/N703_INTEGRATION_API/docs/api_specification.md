# Especificação da API REST (N703)

Todos os endpoints utilizam o protocolo **REST** e aceitam/retornam dados em formato **JSON**.

## 1. Agendamento de Consultas

### POST /consultas

Cria um novo agendamento de consulta e notifica o paciente via FCM.

| Campo      | Tipo     | Obrigatório | Descrição                           |
| :--------- | :------- | :---------- | :---------------------------------- |
| `paciente` | `string` | Sim         | Nome do paciente.                   |
| `posto`    | `string` | Sim         | Posto de saúde.                     |
| `data`     | `string` | Sim         | Data e hora da consulta (ISO 8601). |

**Request Body Example:**

```json
{
  "paciente": "Ana Silva",
  "posto": "UBS Centro",
  "data": "2025-10-01T09:00:00"
}
```
