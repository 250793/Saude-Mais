# Saude-Mais

📌 Problema Abordado e Justificativa

Em bairros como Edson Queiroz, Barroso e Passaré, moradores enfrentam dificuldades no acesso às consultas médicas, prontuários, campanhas de vacinação e informações sobre serviços dos postos de saúde comunitários.
A falta de organização e comunicação resulta em filas, consultas perdidas e baixa adesão às campanhas preventivas.

Este projeto busca oferecer uma solução digital multiplataforma para melhorar o acesso, a eficiência e a transparência na gestão da saúde comunitária.

🎯 Objetivos do Sistema

- Facilitar o agendamento de consultas.
- Permitir que pacientes acessem seu prontuário simplificado.
- Disponibilizar receitas digitais para acompanhamento de tratamentos.
- Divulgar e gerenciar campanhas de saúde e vacinação.
- Enviar notificações automáticas sobre consultas e campanhas.
- Fornecer relatórios e dashboards para gestores de postos.

  📚 Escopo do Projeto

A plataforma atenderá três perfis de usuário:
- Paciente: consultas, prontuário, receitas e notificações.
- Profissional de Saúde: registros de atendimentos, receitas e prontuários.
- Gestor: relatórios, gerenciamento de campanhas e monitoramento da eficiência do posto.

  🏗️ Visão Geral da Arquitetura

O sistema será baseado em arquitetura Cliente-Servidor:

flowchart TD
    A[Usuário] -->|Web/Mobile| B[Frontend React/React Native]
    B --> C[API REST - Node.js/Express]
    C --> D[(Banco de Dados - PostgreSQL)]
    C --> E[Serviços Externos - Firebase, Google Maps]

- Frontend Web: React.js
- Frontend Mobile: React Native
- Backend: Node.js + Express
- Banco de Dados: PostgreSQL
- Notificações: Firebase Cloud Messaging
- Mapas: Google Maps API

🛠️ Tecnologias Propostas
- Frontend: React.js, React Native
- Backend: Node.js, Express
- Banco de Dados: PostgreSQL
- APIs Externas: Firebase, Google Maps
- Ferramentas de Documentação: Markdown, Swagger, Draw.io, Figma

  ✅ Cronograma – Etapa 2 (N708)
Etapa	Atividade	Período
1	Implementação do Backend (APIs, banco de dados)	Semana 1-3
2	Desenvolvimento do Frontend Web	Semana 4-6
3	Desenvolvimento do App Mobile	Semana 7-9
4	Integração com APIs externas	Semana 10
5	Testes e Validação	Semana 11
6	Ajustes finais e entrega	Semana 12

  👥 Integrantes da Equipe

Nome Fabricio da Silva Santos - 2319166  – Função: Arquitetura do software
Nome Ana Rebeca Pereira dos Santos - 2326244 – Função: Front-end
Nome Maria Tainá Leitão de Castro - 23232806 – Função: Front-end
Nome José Eliezer de Almeida Alves - 2326192– Função: Back-end
Nome Erisvan da Silva Ximenes - 2317584 – Função: Back-end
