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

🌍 Relação do projeto com o ODS 11

O ODS 11 – Cidades e Comunidades Sustentáveis busca tornar as cidades e os assentamentos humanos inclusivos, seguros, resilientes e sustentáveis.

Nosso projeto se conecta ao ODS 11 pelos seguintes aspectos:

1. Acesso inclusivo à saúde básica

   - A plataforma facilita que moradores de bairros como Edson Queiroz, Barroso e Passaré tenham acesso organizado a consultas, prontuários e campanhas, reduzindo desigualdades urbanas.

2. Redução de deslocamentos e filas

   - Com agendamento digital e notificações automáticas, os pacientes não precisam esperar horas em filas nos postos, diminuindo congestionamentos e melhorando a mobilidade urbana local.

3. Gestão inteligente e sustentável dos serviços públicos

   - O sistema fornece relatórios para gestores avaliarem a demanda dos postos, permitindo melhor distribuição de recursos e planejamentos mais eficientes para a comunidade.

4. Promoção da saúde preventiva

   - Ao divulgar campanhas de vacinação e prevenção, a plataforma apoia políticas de saúde comunitária que fortalecem a resiliência social, um dos pilares do ODS 11.

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
  Etapa Atividade Período
  1 Implementação do Backend (APIs, banco de dados) Semana 1-3
  2 Desenvolvimento do Frontend Web Semana 4-6
  3 Desenvolvimento do App Mobile Semana 7-9
  4 Integração com APIs externas Semana 10
  5 Testes e Validação Semana 11
  6 Ajustes finais e entrega Semana 12

🖼️ Protótipos de Interface

Telas previstas:

- Login/Cadastro – autenticação de pacientes, profissionais e gestores.
- Dashboard do Paciente – consultas agendadas, receitas, notificações.
- Agendamento de Consultas – escolha de posto, data e horário, cancelamento.
- Prontuário Simplificado – visualização pelo paciente e edição por médicos.
- Receitas Digitais – emissão por profissionais e acesso pelos pacientes.
- Campanhas de Saúde – listagem pública e aprovação pelo gestor.
- Painel do Gestor – relatórios e gerenciamento de campanhas.

👥 Integrantes da Equipe

Nome Fabricio da Silva Santos - 2319166 – Função: Arquitetura do software
Nome Ana Rebeca Pereira dos Santos - 2326244 – Função: Front-end
Nome Maria Tainá Leitão de Castro - 23232806 – Função: Front-end
Nome José Eliezer de Almeida Alves - 2326192– Função: Back-end
Nome Erisvan da Silva Ximenes - 2317584 – Função: Back-end
