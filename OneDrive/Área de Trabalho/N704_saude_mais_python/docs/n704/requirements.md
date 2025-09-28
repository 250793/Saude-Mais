# 📄 Documento de Requisitos — N704 Programação Funcional  

**Projeto:** Saúde+ (versão funcional simplificada)  
**Disciplina:** N704 – Programação Funcional  

## 1. Integrantes da Equipe  
- Fabricio da Silva Santos – 2319166 – Arquitetura e documentação  
- Ana Rebeca Pereira dos Santos – 2326244 – Front-end / prototipação  
- Maria Tainá Leitão de Castro – 23232806 – Front-end / prototipação  
- José Eliezer de Almeida Alves – 2326192 – Back-end / programação funcional  
- Erisvan da Silva Ximenes – 2317584 – Back-end / testes e validação  

## 2. Papéis Definidos  
- **Arquitetura:** definição de requisitos e rastreabilidade.  
- **Front-end:** adaptação dos protótipos para testes.  
- **Back-end:** implementação do código em paradigma funcional.  
- **Testes:** execução e registro dos resultados.  

## 3. Requisitos  

### 3.1 Requisitos Funcionais (RF)  
- **RF01:** Cadastro de consultas  
- **RF02:** Cancelamento de consultas  
- **RF03:** Listagem de consultas por paciente  
- **RF04:** Registro e consulta de prontuário simplificado  
- **RF05:** Envio de notificações personalizadas  

### 3.2 Requisitos Não Funcionais (RNF)  
- **RNF01:** Implementado em Python (linguagem com suporte a FP)  
- **RNF02:** Execução sem erros  
- **RNF03:** Código simples e legível  
- **RNF04:** Uso de construções funcionais (lambda, list comprehension, closure, alta ordem)  

## 4. Rastreabilidade  

| Requisito | Implementação no código |
|-----------|--------------------------|
| RF01 | `adicionar_consulta()` |
| RF02 | `cancelar_consulta()` |
| RF03 | `listar_consultas()` |
| RF04 | `criar_prontuario()` (closure) |
| RF05 | `notificar()` + `lambda` |
| RNF01 | Python 3 |
| RNF02 | Validado com `test_cases.md` |
| RNF03 | Código legível |
| RNF04 | Lambda, list comprehension, closure, alta ordem |
