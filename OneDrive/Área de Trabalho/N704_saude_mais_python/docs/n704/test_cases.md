# 📄 Test Cases — N704 Programação Funcional  

## Teste 01 — Login  
Entrada: validar(lambda e: "@" in e, "teste@email.com")  
Saída Esperada: True  

## Teste 02 — Cadastro de Consulta  
Entrada: adicionar_consulta("Ana", "2025-09-20")  
Saída Esperada: "Consulta para Ana em 2025-09-20 cadastrada."  

## Teste 03 — Cancelamento de Consulta  
Entrada: cancelar_consulta("Ana", "2025-09-20")  
Saída Esperada: "Consulta de Ana em 2025-09-20 cancelada."  

## Teste 04 — Listagem de Consultas  
Entrada: listar_consultas("Ana")  
Saída Esperada: [{"paciente": "Ana", "data": "2025-09-20", "status": "cancelada"}]  

## Teste 05 — Prontuário (Closure)  
Entrada: prontuario_ana("Consulta de rotina")  
Saída Esperada: "Prontuário Ana: ['Consulta de rotina']"  

## Teste 06 — Notificação  
Entrada: notificar(lambda p: f"Olá {p}, você tem uma consulta amanhã!", "Ana")  
Saída Esperada: "Olá Ana, você tem uma consulta amanhã!"  
