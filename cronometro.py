import time

def cronometro(segundos):
    while True:
        print(f"Tiempo transcurrido: {segundos} segundos")
        time.sleep(15)
        segundos += 1

segundos = 0
cronometro(segundos)