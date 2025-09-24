consultas = []

def validar(criterio, valor):
    return criterio(valor)

usuarios = [{"nome": n, "tipo": "paciente"} for n in ["Ana", "Carlos", "João"]]

def adicionar_consulta(paciente, data):
    consultas.append({"paciente": paciente, "data": data, "status": "agendada"})
    return f"Consulta para {paciente} em {data} cadastrada."

def cancelar_consulta(paciente, data):
    for c in consultas:
        if c["paciente"] == paciente and c["data"] == data:
            c["status"] = "cancelada"
            return f"Consulta de {paciente} em {data} cancelada."
    return "Consulta não encontrada."

def listar_consultas(paciente):
    return [c for c in consultas if c["paciente"] == paciente]

def criar_prontuario(paciente):
    registros = []
    def adicionar_registro(descricao):
        registros.append(descricao)
        return f"Prontuário {paciente}: {registros}"
    return adicionar_registro

def notificar(gerador, paciente):
    return gerador(paciente)

if __name__ == "__main__":
    print("=== Testes Saúde+ (Funcional) ===")
    print(validar(lambda e: "@" in e, "teste@email.com"))
    print(adicionar_consulta("Ana", "2025-09-20"))
    print(cancelar_consulta("Ana", "2025-09-20"))
    print(listar_consultas("Ana"))
    prontuario_ana = criar_prontuario("Ana")
    print(prontuario_ana("Consulta de rotina"))
    msg = notificar(lambda p: f"Olá {p}, você tem uma consulta amanhã!", "Ana")
    print(msg)
