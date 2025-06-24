def analizar_datos(data):
    ventas = data.get('ventas', [])
    if not ventas:
        return 'No hay ventas para analizar'

    promedio = sum(ventas) / len(ventas)
    maximo = max(ventas)
    minimo = min(ventas)

    return {
        'promedio': promedio,
        'maximo': maximo,
        'minimo': minimo,
        'recomendacion': 'Sigue analizando tus picos de ventas máximas'
    }
