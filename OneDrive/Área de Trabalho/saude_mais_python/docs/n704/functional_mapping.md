# 📄 Functional Mapping — N704 Programação Funcional  

## Login e Autenticação  
Alta ordem + Lambda  
```python
def validar(criterio, valor):
    return criterio(valor)
validar(lambda e: "@" in e, "teste@email.com")
```

## Cadastro de Usuários  
List comprehension  
```python
usuarios = [{"nome": n, "tipo": "paciente"} for n in ["Ana", "Carlos", "João"]]
```

## Dashboard do Paciente  
List comprehension + filter  
```python
[c for c in consultas if c["paciente"] == "Ana"]
```

## Prontuário Simplificado  
Closure  
```python
def criar_prontuario(paciente):
    registros = []
    def adicionar_registro(descricao):
        registros.append(descricao)
        return f"Prontuário {paciente}: {registros}"
    return adicionar_registro
```

## Notificações  
Alta ordem + Lambda  
```python
def notificar(gerador, paciente):
    return gerador(paciente)

notificar(lambda p: f"Olá {p}, você tem uma consulta amanhã!", "Ana")
```
