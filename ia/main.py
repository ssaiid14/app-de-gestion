from fastapi import FastAPI
from analisis import analizar_datos

app = FastAPI()

@app.get('/')
def inicio():
    return {'mensaje': 'Servidor IA activo'}

@app.post('/analizar')
def analizar(data: dict):
    resultado = analizar_datos(data)
    return {'resultado': resultado}
