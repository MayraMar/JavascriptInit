import random

def inicializar_juego():

    # creo la lista de listas de 4 * 4 con valor inicial 0

    juego = [[0 for c in range(0, 4)] for f in range(0, 4)]
             
    fila = random.randint(0, 3)
    columna = random.randint(0, 3)
    juego[fila][columna] = random.randrange(2, 5, 2)

    return juego


def mostrar_juego(juego):
    print("--------------------------------------")
    for c in range(len(juego)):
        print("|", end = " ")
        for f in range(len(juego)):
            if juego[c][f] != 0:
                print(juego[c][f],"   |", end = " ")
            else:
                print("     |", end = " ")
        print()
        print("--------------------------------------")

    return


def juego_ganado(juego):
    for c in range(len(juego)):
        for f in range(len(juego)):
            if juego[c][f] == 2048: #antes 2048
                return True
                
    for f in range(len(juego)):
        for c in range(len(juego)):
            if juego[c][f] == 2048: #antes 2048
                return True
                
               
                

def juego_perdido(juego):
    contador_0 = 0
    contador_2048 = 0
    for c in range(len(juego)):
        for f in range(len(juego)):
            if juego[c][f] == 0:
                contador_0 += 1
            if juego[c][f] == 2048: #antes 2048
                contador_2048 += 1
    
    if contador_0 == 0 and contador_2048 < 1:               
        return True



def pedir_direccion():
    dir = input("Indique una direccion (w,s,a,d):")
    return dir



def actualizar_juego(juego, dir):

    # creo una lista de listas de 4*4 auxiliar para guardar el juego actualizado 

    juego_auxiliar = [[0 for c in range(0, 4)] for f in range(0, 4)]

    # recorro juego y guardo los valores en juego_auxiliar
    
    for c in range(len(juego)):
            for f in range(len(juego)):
                juego_auxiliar[f][c] = juego[f][c]

                
    if dir == 'w':
        for c in range(len(juego)):

            #0N00 a N000

            if juego[0][c] == 0 and juego[1][c] != 0 and juego[2][c] == 0 and juego[3][c] == 0:
                juego_auxiliar[0][c]= juego[1][c]
                juego_auxiliar[1][c] = 0
                juego_auxiliar[2][c] = 0
                juego_auxiliar[3][c] = 0

            #00N0 a N000

            elif juego[0][c] == 0 and juego[1][c] == 0 and juego[2][c] != 0 and juego[3][c] == 0:
                juego_auxiliar[0][c]= juego[2][c]
                juego_auxiliar[1][c] = 0
                juego_auxiliar[2][c] = 0
                juego_auxiliar[3][c] = 0

            #000N a N000

            elif juego[0][c] == 0 and juego[1][c] == 0 and juego[2][c] == 0 and juego[3][c] != 0:
                juego_auxiliar[0][c]= juego[3][c]
                juego_auxiliar[1][c] = 0
                juego_auxiliar[2][c] = 0
                juego_auxiliar[3][c] = 0

            #0NN0 a NN00

            elif juego[0][c] == 0 and juego[1][c] != 0 and juego[2][c] != 0 and juego[3][c] == 0 and juego[1][c] != juego[2][c]:
                juego_auxiliar[0][c]= juego[1][c]
                juego_auxiliar[1][c] = juego[2][c]
                juego_auxiliar[2][c] = 0
                juego_auxiliar[3][c] = 0

            #0N0N a NN00

            elif juego[0][c] == 0 and juego[1][c] != 0 and juego[2][c] == 0 and juego[3][c] != 0 and juego[1][c] != juego[3][c]:
                juego_auxiliar[0][c]= juego[1][c]
                juego_auxiliar[1][c] = juego[3][c]
                juego_auxiliar[2][c] = 0
                juego_auxiliar[3][c] = 0

            #00NN a NN00

            elif juego[0][c] == 0 and juego[1][c] == 0 and juego[2][c] != 0 and juego[3][c] != 0 and juego[2][c] != juego[3][c]:
                juego_auxiliar[0][c]= juego[2][c]
                juego_auxiliar[1][c] = juego[3][c]
                juego_auxiliar[2][c] = 0
                juego_auxiliar[3][c] = 0

            #0NNN a NNN0

            elif juego[0][c] == 0 and juego[1][c] != 0 and juego[2][c] != 0 and juego[3][c] != 0 and juego[1][c] != juego[2][c] and juego[2][c] != juego[3][c]:
                juego_auxiliar[0][c]= juego[1][c]
                juego_auxiliar[1][c] = juego[2][c]
                juego_auxiliar[2][c] = juego[3][c]
                juego_auxiliar[3][c] = 0

            #N0N0 a NN00

            elif juego[0][c] != 0 and juego[1][c] == 0 and juego[2][c] != 0 and juego[3][c] == 0 and juego[0][c] != juego[2][c]:
                juego_auxiliar[0][c]= juego[0][c]
                juego_auxiliar[1][c] = juego[2][c]
                juego_auxiliar[2][c] = 0
                juego_auxiliar[3][c] = 0

            #N00N a NN00 ok

            elif juego[0][c] != 0 and juego[1][c] == 0 and juego[2][c] == 0 and juego[3][c] != 0 and juego[0][c] != juego[3][c]:
                juego_auxiliar[0][c]= juego[0][c]
                juego_auxiliar[1][c] = juego[3][c]
                juego_auxiliar[2][c] = 0
                juego_auxiliar[3][c] = 0

            #NN0N a NNN0

            elif juego[0][c] != 0 and juego[1][c] != 0 and juego[2][c] == 0 and juego[3][c] != 0 and juego[1][c] != juego[3][c] and juego[0][c] != juego[1][c]:
                juego_auxiliar[0][c]= juego[0][c]
                juego_auxiliar[1][c] = juego[1][c]
                juego_auxiliar[2][c] = juego[3][c]
                juego_auxiliar[3][c] = 0

            #N0NN a NNN0

            elif juego[0][c] != 0 and juego[1][c] == 0 and juego[2][c] != 0 and juego[3][c] != 0 and juego[0][c] != juego[2][c] and juego[2][c] != juego[3][c]:
                juego_auxiliar[0][c]= juego[0][c]
                juego_auxiliar[1][c] = juego[2][c]
                juego_auxiliar[2][c] = juego[3][c]
                juego_auxiliar[3][c] = 0


            #220N a 4N00

            elif juego[0][c] == juego[1][c] and juego[0][c] != 0 and juego[2][c] == 0 and juego[3][c] != 0:
                juego_auxiliar[0][c]= juego[0][c] + juego[1][c]
                juego_auxiliar[1][c] = juego[3][c]
                juego_auxiliar[2][c] = 0
                juego_auxiliar[3][c] = 0

            #22N0 a 4N00 ok

            elif juego[0][c] == juego[1][c] and juego[0][c] != 0 and juego[2][c] != 0 and juego[2][c] != juego[1][c] and juego[3][c] == 0:
                juego_auxiliar[0][c]= juego[0][c] + juego[1][c]
                juego_auxiliar[1][c] = juego[2][c]
                juego_auxiliar[2][c] = 0
                juego_auxiliar[3][c] = 0

            
            #NN22 a NN40 ok

            elif juego[0][c] != 0 and juego[1][c] != 0 and juego[0][c] != juego[1][c] and juego[1][c] != juego[2][c] and juego[2][c] == juego[3][c]:
                juego_auxiliar[0][c]= juego[0][c]
                juego_auxiliar[1][c] = juego[1][c]
                juego_auxiliar[2][c] = juego[2][c] + juego[3][c]
                juego_auxiliar[3][c] = 0



            #22NN a 4NN0 okok

            elif juego[0][c] == juego[1][c] and juego[0][c] != 0 and juego[2][c] != 0 and juego[3][c] != 0 and juego[1][c] != juego[2][c] and juego[2][c] != juego[3][c]:
                juego_auxiliar[0][c]= juego[0][c] + juego[1][c]
                juego_auxiliar[1][c] = juego[2][c]
                juego_auxiliar[2][c] = juego[3][c]
                juego_auxiliar[3][c] = 0

            #2200 a 4000

            elif juego[0][c] == juego[1][c] and juego[0][c] != 0 and juego[2][c] == 0 and juego[3][c] == 0:
                juego_auxiliar[0][c]= juego[0][c] + juego[1][c]
                juego_auxiliar[1][c] = 0
                juego_auxiliar[2][c] = 0
                juego_auxiliar[3][c] = 0


            #202N a 4N00

            elif juego[0][c] == juego[2][c] and juego[0][c] != 0 and juego[1][c] == 0 and juego[3][c] != juego[2][c]:
                juego_auxiliar[0][c]= juego[0][c] + juego[2][c]
                juego_auxiliar[1][c] = juego[3][c]
                juego_auxiliar[2][c] = 0
                juego_auxiliar[3][c] = 0


            #2002 a 4000 ok

            elif juego[0][c] == juego[3][c] and juego[0][c] != 0 and juego[1][c] == 0 and juego[2][c] == 0:
                juego_auxiliar[0][c]= juego[0][c] + juego[3][c]
                juego_auxiliar[1][c] = 0
                juego_auxiliar[2][c] = 0
                juego_auxiliar[3][c] = 0

            #022N a 4N00

            elif juego[0][c] == 0 and juego[1][c] != 0 and juego[1][c] == juego[2][c] and juego[3][c] != 0:
                juego_auxiliar[0][c]= juego[1][c] + juego[2][c]
                juego_auxiliar[1][c] = juego[3][c]
                juego_auxiliar[2][c] = 0
                juego_auxiliar[3][c] = 0

             #0202 a 8000

            elif juego[0][c] == 0 and juego[1][c] != 0 and juego[1][c] == juego[3][c] and juego[2][c] == 0:
                juego_auxiliar[0][c]= juego[1][c] + juego[3][c]
                juego_auxiliar[1][c] = 0
                juego_auxiliar[2][c] = 0
                juego_auxiliar[3][c] = 0

            #N22N a N4N0 ok

            elif juego[0][c] != 0 and juego[1][c] != 0 and juego[1][c] == juego[2][c] and juego[2][c] != 0 and  juego[1][c] != juego[0][c]:
                juego_auxiliar[0][c]= juego[0][c]
                juego_auxiliar[1][c] = juego[1][c] + juego[2][c]
                juego_auxiliar[2][c] = juego[3][c]
                juego_auxiliar[3][c] = 0

            #N202 a N400 ok

            elif juego[0][c] != 0 and juego[1][c] != 0 and juego[1][c] == juego[3][c] and juego[2][c] == 0 and juego[0][c] != juego[1][c]:
                juego_auxiliar[0][c]= juego[0][c]
                juego_auxiliar[1][c] = juego[1][c] + juego[3][c]
                juego_auxiliar[2][c] = 0
                juego_auxiliar[3][c] = 0

            #0022 a 4000

            elif juego[0][c] == 0 and juego[1][c] == 0 and juego[2][c] == juego[3][c] and juego[3][c] != 0:
                juego_auxiliar[0][c]= juego[2][c] + juego[3][c]
                juego_auxiliar[1][c] = 0
                juego_auxiliar[2][c] = 0
                juego_auxiliar[3][c] = 0

            #0N22 a N400

            elif juego[0][c] == 0 and juego[1][c] != 0 and juego[2][c] == juego[3][c] and juego[3][c] != 0:
                juego_auxiliar[0][c]= juego[1][c]
                juego_auxiliar[1][c] = juego[2][c] + juego[3][c]
                juego_auxiliar[2][c] = 0
                juego_auxiliar[3][c] = 0

             #NN22 a N400

            elif juego[0][c] != 0 and juego[0][c] == juego[1][c] and juego[2][c] == juego[3][c] and juego[3][c] != 0:
                juego_auxiliar[0][c]= juego[0][c] + juego[1][c]
                juego_auxiliar[1][c] = juego[2][c] + juego[3][c]
                juego_auxiliar[2][c] = 0
                juego_auxiliar[3][c] = 0

            #2222 a 4400 ok

            elif juego[0][c] != 0 and juego[0][c] == juego[1][c] and juego[2][c] == juego[3][c] and juego[3][c] != 0 and juego[2][c] == juego[1][c]:
                juego_auxiliar[0][c]= juego[0][c] + juego[1][c]
                juego_auxiliar[1][c] = juego[2][c] + juego[3][c]
                juego_auxiliar[2][c] = 0
                juego_auxiliar[3][c] = 0

            #2244 a 4800 ok

            elif juego[0][c] != 0 and juego[0][c] == juego[1][c] and juego[2][c] == juego[3][c] and juego[3][c] != 0 and juego[1][c] != juego[2][c]:
                juego_auxiliar[0][c]= juego[0][c] + juego[1][c]
                juego_auxiliar[1][c] = juego[2][c] + juego[3][c]
                juego_auxiliar[2][c] = 0
                juego_auxiliar[3][c] = 0


             #N222 a N420 okok

            elif juego[0][c] != 0 and juego[0][c] != juego[1][c] and juego[1][c] == juego[2][c] and juego[2][c] == juego[3][c] and juego[3][c] != 0:
                juego_auxiliar[0][c]= juego[0][c]
                juego_auxiliar[1][c] = juego[1][c] + juego[2][c]
                juego_auxiliar[2][c] = juego[3][c]
                juego_auxiliar[3][c] = 0

             #N022 a N400 okok

            elif juego[0][c] != 0 and juego[1][c] == 0 and juego[2][c] == juego[3][c] and juego[0][c] != juego[2][c]:
                juego_auxiliar[0][c]= juego[0][c]
                juego_auxiliar[1][c] = juego[3][c] + juego[2][c]
                juego_auxiliar[2][c] = 0
                juego_auxiliar[3][c] = 0


             #2220 a 4200 ok

            elif juego[0][c] != 0 and juego[0][c] == juego[1][c] and juego[1][c] == juego[2][c] and juego[2][c] != juego[3][c]:
                juego_auxiliar[0][c]= juego[0][c] + juego[1][c]
                juego_auxiliar[1][c] = juego[2][c]
                juego_auxiliar[2][c] = juego[3][c]
                juego_auxiliar[3][c] = 0





    else:    
        if dir == 's':
           for c in range(len(juego)):

            #0N00 a 000N

            if juego[0][c] == 0 and juego[1][c] != 0 and juego[2][c] == 0 and juego[3][c] == 0:
                juego_auxiliar[0][c]= 0
                juego_auxiliar[1][c] = 0
                juego_auxiliar[2][c] = 0
                juego_auxiliar[3][c] = juego[1][c]

            #00N0 a 000N

            elif juego[0][c] == 0 and juego[1][c] == 0 and juego[2][c] != 0 and juego[3][c] == 0:
                juego_auxiliar[0][c]= 0
                juego_auxiliar[1][c] = 0
                juego_auxiliar[2][c] = 0
                juego_auxiliar[3][c] = juego[2][c]

            #N000 a 000N

            elif juego[0][c] != 0 and juego[1][c] == 0 and juego[2][c] == 0 and juego[3][c] == 0:
                juego_auxiliar[0][c]= 0
                juego_auxiliar[1][c] = 0
                juego_auxiliar[2][c] = 0
                juego_auxiliar[3][c] = juego[0][c]

            #0NN0 a 00NN

            elif juego[0][c] == 0 and juego[1][c] != 0 and juego[2][c] != 0 and juego[3][c] == 0 and juego[1][c] != juego[2][c]:
                juego_auxiliar[0][c]= 0
                juego_auxiliar[1][c] = 0
                juego_auxiliar[2][c] = juego[1][c]
                juego_auxiliar[3][c] = juego[2][c]

            #0N0N a 00NN

            elif juego[0][c] == 0 and juego[1][c] != 0 and juego[2][c] == 0 and juego[3][c] != 0 and juego[1][c] != juego[3][c]:
                juego_auxiliar[0][c]= 0
                juego_auxiliar[1][c] = 0
                juego_auxiliar[2][c] = juego[1][c]
                juego_auxiliar[3][c] = juego[3][c]

            #NN00 a 00NN

            elif juego[0][c] != 0 and juego[1][c] != 0 and juego[2][c] == 0 and juego[3][c] == 0 and juego[1][c] != juego[0][c]:
                juego_auxiliar[0][c]= 0
                juego_auxiliar[1][c] = 0
                juego_auxiliar[2][c] = juego[0][c]
                juego_auxiliar[3][c] = juego[1][c]

            #NNN0 a 0NNN

            elif juego[0][c] != 0 and juego[1][c] != 0 and juego[2][c] != 0 and juego[3][c] == 0 and juego[1][c] != juego[2][c] and juego[0][c] != juego[1][c]:
                juego_auxiliar[0][c]= 0
                juego_auxiliar[1][c] = juego[0][c]
                juego_auxiliar[2][c] = juego[1][c]
                juego_auxiliar[3][c] = juego[2][c]

            #N0N0 a 00NN

            elif juego[0][c] != 0 and juego[1][c] == 0 and juego[2][c] != 0 and juego[3][c] == 0 and juego[0][c] != juego[2][c]:
                juego_auxiliar[0][c]= 0
                juego_auxiliar[1][c] = 0
                juego_auxiliar[2][c] = juego[0][c]
                juego_auxiliar[3][c] = juego[2][c]

            #N00N a 00NN ok

            elif juego[0][c] != 0 and juego[1][c] == 0 and juego[2][c] == 0 and juego[3][c] != 0 and juego[0][c] != juego[3][c]:
                juego_auxiliar[0][c]= 0
                juego_auxiliar[1][c] = 0
                juego_auxiliar[2][c] = juego[0][c]
                juego_auxiliar[3][c] = juego[3][c]

            #NN0N a 0NNN

            elif juego[0][c] != 0 and juego[1][c] != 0 and juego[2][c] == 0 and juego[3][c] != 0 and juego[1][c] != juego[3][c] and juego[0][c] != juego[1][c]:
                juego_auxiliar[0][c]= 0
                juego_auxiliar[1][c] = juego[0][c]
                juego_auxiliar[2][c] = juego[1][c]
                juego_auxiliar[3][c] = juego[3][c]

            #N0NN a 0NNN

            elif juego[0][c] != 0 and juego[1][c] == 0 and juego[2][c] != 0 and juego[3][c] != 0 and juego[0][c] != juego[2][c] and juego[2][c] != juego[3][c]:
                juego_auxiliar[0][c]= 0
                juego_auxiliar[1][c] = juego[0][c]
                juego_auxiliar[2][c] = juego[2][c]
                juego_auxiliar[3][c] = juego[3][c]

 

            #220N a 004N

            elif juego[0][c] == juego[1][c] and juego[0][c] != 0 and juego[2][c] == 0 and juego[3][c] != 0:
                juego_auxiliar[0][c]= 0
                juego_auxiliar[1][c] = 0
                juego_auxiliar[2][c] = juego[0][c] + juego[1][c]
                juego_auxiliar[3][c] = juego[3][c]

            #22N0 a 004N ok

            elif juego[0][c] == juego[1][c] and juego[0][c] != 0 and juego[2][c] != 0 and juego[2][c] != juego[1][c] and juego[3][c] == 0:
                juego_auxiliar[0][c]= 0
                juego_auxiliar[1][c] = 0
                juego_auxiliar[2][c] = juego[0][c] + juego[1][c]
                juego_auxiliar[3][c] = juego[2][c]

            
            #NN22 a 0NN4

            elif juego[2][c] == juego[3][c] and juego[2][c] != 0 and juego[0][c] != 0 and juego[1][c] != 0 and juego[0][c] != juego[1][c]:
                juego_auxiliar[0][c]= 0
                juego_auxiliar[1][c] = juego[0][c]
                juego_auxiliar[2][c] = juego[1][c]
                juego_auxiliar[3][c] = juego[2][c] + juego[3][c]



            #22NN a 04NN

            elif juego[0][c] == juego[1][c] and juego[0][c] != 0 and juego[2][c] != 0 and juego[3][c] != 0 and juego[1][c] != juego[2][c] and juego[2][c] != juego[3][c]:
                juego_auxiliar[0][c]= 0
                juego_auxiliar[1][c] = juego[0][c] + juego[1][c]
                juego_auxiliar[2][c] = juego[2][c]
                juego_auxiliar[3][c] = juego[3][c]

            #2200 a 0004

            elif juego[0][c] == juego[1][c] and juego[0][c] != 0 and juego[2][c] == 0 and juego[3][c] == 0:
                juego_auxiliar[0][c]= 0
                juego_auxiliar[1][c] = 0
                juego_auxiliar[2][c] = 0
                juego_auxiliar[3][c] = juego[0][c] + juego[1][c]


            #202N a 004N

            elif juego[0][c] == juego[2][c] and juego[0][c] != 0 and juego[1][c] == 0 and juego[3][c] != juego[2][c] and juego[3][c] != 0:
                juego_auxiliar[0][c]= 0
                juego_auxiliar[1][c] = 0
                juego_auxiliar[2][c] = juego[0][c] + juego[2][c]
                juego_auxiliar[3][c] = juego[3][c]


            #2002 a 0004

            elif juego[0][c] == juego[3][c] and juego[0][c] != 0 and juego[1][c] == 0 and juego[2][c] == 0:
                juego_auxiliar[0][c]= 0
                juego_auxiliar[1][c] = 0
                juego_auxiliar[2][c] = 0
                juego_auxiliar[3][c] = juego[0][c] + juego[3][c]


            #0220 a 0004

            elif juego[0][c] == 0 and juego[1][c] == juego[2][c] and juego[1][c] != 0 and juego[3][c] == 0:
                juego_auxiliar[0][c]= 0
                juego_auxiliar[1][c] = 0
                juego_auxiliar[2][c] = 0
                juego_auxiliar[3][c] = juego[1][c] + juego[2][c]


            #022N a 004N ok

            elif juego[0][c] == 0 and juego[1][c] != 0 and juego[1][c] == juego[2][c] and juego[3][c] != 0 and juego[2][c] != juego[3][c]:
                juego_auxiliar[0][c]= 0
                juego_auxiliar[1][c] = 0
                juego_auxiliar[2][c] = juego[1][c] + juego[2][c]
                juego_auxiliar[3][c] = juego[3][c]

             #0202 a 0004

            elif juego[0][c] == 0 and juego[1][c] != 0 and juego[1][c] == juego[3][c] and juego[2][c] == 0:
                juego_auxiliar[0][c]= 0
                juego_auxiliar[1][c] = 0
                juego_auxiliar[2][c] = 0
                juego_auxiliar[3][c] = juego[1][c] + juego[3][c]

            #N22N a 0N4N

            elif juego[0][c] != 0 and juego[1][c] != 0 and juego[1][c] == juego[2][c] and juego[3][c] != 0 and juego[2][c] != juego[3][c]:
                juego_auxiliar[0][c] = 0
                juego_auxiliar[1][c] = juego[0][c]
                juego_auxiliar[2][c] = juego[1][c] + juego[2][c]
                juego_auxiliar[3][c] = juego[3][c]

             #N220 a 00N4

            elif juego[0][c] != 0 and juego[1][c] != 0 and juego[1][c] == juego[2][c] and juego[3][c] == 0:
                juego_auxiliar[0][c] = 0
                juego_auxiliar[1][c] = 0
                juego_auxiliar[2][c] = juego[0][c]
                juego_auxiliar[3][c] = juego[2][c] + juego[1][c]


            #N202 a 00N4

            elif juego[0][c] != 0 and juego[1][c] != 0 and juego[1][c] == juego[3][c] and juego[2][c] == 0 and juego[0][c] != juego[1][c]:
                juego_auxiliar[0][c]= 0
                juego_auxiliar[1][c] = 0
                juego_auxiliar[2][c] = juego[0][c]
                juego_auxiliar[3][c] = juego[1][c] + juego[3][c]

            #0022 a 0004

            elif juego[0][c] == 0 and juego[1][c] == 0 and juego[2][c] == juego[3][c] and juego[3][c] != 0:
                juego_auxiliar[0][c]= 0
                juego_auxiliar[1][c] = 0
                juego_auxiliar[2][c] = 0
                juego_auxiliar[3][c] = juego[2][c] + juego[3][c]

            #0222 a 0024

            elif juego[0][c] == 0 and juego[1][c] != 0 and juego[1][c] == juego[2][c] and juego[2][c] == juego[3][c]:
                juego_auxiliar[0][c]= 0
                juego_auxiliar[1][c] = 0
                juego_auxiliar[2][c] = juego[1][c]
                juego_auxiliar[3][c] = juego[2][c] + juego[3][c]


            #0N22 a 00N4

            elif juego[0][c] == 0 and juego[1][c] != 0 and juego[2][c] == juego[3][c] and juego[3][c] != 0:
                juego_auxiliar[0][c]= 0
                juego_auxiliar[1][c] = 0
                juego_auxiliar[2][c] = juego[1][c]
                juego_auxiliar[3][c] = juego[2][c] + juego[3][c]

             #4422 a 0084

            elif juego[0][c] != 0 and juego[0][c] == juego[1][c] and juego[2][c] == juego[3][c] and juego[3][c] != 0 and juego[2][c] != juego[1][c]:
                juego_auxiliar[0][c]= 0
                juego_auxiliar[1][c] = 0
                juego_auxiliar[2][c] = juego[0][c] + juego[1][c]
                juego_auxiliar[3][c] = juego[2][c] + juego[3][c]

            #2222 a 0044

            elif juego[0][c] != 0 and juego[0][c] == juego[1][c] and juego[2][c] == juego[3][c] and juego[2][c] == juego[1][c]:
                juego_auxiliar[3][c]= juego[0][c] + juego[1][c]
                juego_auxiliar[4][c] = juego[2][c] + juego[3][c]
                juego_auxiliar[0][c] = 0
                juego_auxiliar[1][c] = 0

            #NN22 a 0NN4

            elif juego[0][c] != 0 and juego[0][c] != juego[1][c] and juego[2][c] == juego[3][c] and juego[3][c] != 0 and juego[1][c] != juego[2][c] and juego[1][c] != 0:
                juego_auxiliar[0][c]= 0
                juego_auxiliar[1][c] = juego[0][c]
                juego_auxiliar[2][c] = juego[1][c]
                juego_auxiliar[3][c] = juego[2][c] + juego[3][c]


             #N222 a 0N24

            elif juego[0][c] != 0 and juego[0][c] != juego[1][c] and juego[1][c] == juego[2][c] and juego[2][c] == juego[3][c] and juego[3][c] != 0:
                juego_auxiliar[0][c]= 0
                juego_auxiliar[1][c] = juego[0][c]
                juego_auxiliar[2][c] = juego[1][c]
                juego_auxiliar[3][c] = juego[2][c] + juego[3][c]

             #2220 a 0024

            elif juego[0][c] != 0 and juego[0][c] == juego[1][c] and juego[1][c] == juego[2][c] and juego[2][c] != juego[3][c]:
                juego_auxiliar[0][c]= 0
                juego_auxiliar[1][c] = 0
                juego_auxiliar[2][c] = juego[0][c]
                juego_auxiliar[3][c] = juego[1][c] + juego[2][c]

            
            #222N a 024N

            elif juego[0][c] != 0 and juego[0][c] == juego[1][c] and juego[1][c] == juego[2][c] and juego[2][c] != juego[3][c] and juego[3][c] != 0:
                juego_auxiliar[0][c]= 0
                juego_auxiliar[1][c] = juego[0][c]
                juego_auxiliar[2][c] = juego[2][c] + juego[1][c]
                juego_auxiliar[3][c] = juego[3][c]

            #N022 a 00N4

            elif juego[0][c] != 0 and juego[0][c] != juego[1][c] and juego[1][c] != juego[2][c] and juego[2][c] == juego[3][c] and juego[3][c] != 0 and juego[1][c] != juego[3][c]:
                juego_auxiliar[0][c]= 0
                juego_auxiliar[1][c] = 0
                juego_auxiliar[2][c] = juego[0][c]
                juego_auxiliar[3][c] = juego[3][c] + juego[2][c]

            #2022 a 0024

            elif juego[0][c] != 0 and juego[0][c] != juego[1][c] and juego[0][c] == juego[2][c] and juego[2][c] == juego[3][c] and juego[3][c] != 0:
                juego_auxiliar[0][c]= 0
                juego_auxiliar[1][c] = 0
                juego_auxiliar[2][c] = juego[0][c]
                juego_auxiliar[3][c] = juego[3][c] + juego[2][c]





    if dir == 'a':
         for f in range(len(juego)):

            #0N00 a N000

            if juego[f][0] == 0 and juego[f][1] != 0 and juego[f][2] == 0 and juego[f][3] == 0:
                juego_auxiliar[f][0]= juego[f][1]
                juego_auxiliar[f][1] = 0
                juego_auxiliar[f][2] = 0
                juego_auxiliar[f][3] = 0

            #00N0 a N000

            elif juego[f][0] == 0 and juego[f][1] == 0 and juego[f][2] != 0 and juego[f][3] == 0:
                juego_auxiliar[f][0]= juego[f][2]
                juego_auxiliar[f][1] = 0
                juego_auxiliar[f][2] = 0
                juego_auxiliar[f][3] = 0

            #000N a N000

            elif juego[f][0] == 0 and juego[f][1] == 0 and juego[f][2] == 0 and juego[f][3] != 0:
                juego_auxiliar[f][0]= juego[f][3]
                juego_auxiliar[f][1] = 0
                juego_auxiliar[f][2] = 0
                juego_auxiliar[f][3] = 0

            #0NN0 a NN00

            elif juego[f][0] == 0 and juego[f][1] != 0 and juego[f][2] != 0 and juego[f][3] == 0 and juego[f][1] != juego[f][2]:
                juego_auxiliar[f][0]= juego[f][1]
                juego_auxiliar[f][1] = juego[f][2]
                juego_auxiliar[f][2] = 0
                juego_auxiliar[f][3] = 0

            #0N0N a NN00

            elif juego[f][0] == 0 and juego[f][1] != 0 and juego[f][2] == 0 and juego[f][3] != 0 and juego[f][1] != juego[f][3]:
                juego_auxiliar[f][0]= juego[f][1]
                juego_auxiliar[f][1] = juego[f][3]
                juego_auxiliar[f][2] = 0
                juego_auxiliar[f][3] = 0

            #00NN a NN00

            elif juego[f][0] == 0 and juego[f][1] == 0 and juego[f][2] != 0 and juego[f][3] != 0 and juego[f][2] != juego[f][3]:
                juego_auxiliar[f][0]= juego[f][2]
                juego_auxiliar[f][1] = juego[f][3]
                juego_auxiliar[f][2] = 0
                juego_auxiliar[f][3] = 0

#2220 a 0024

            elif juego[f][0] != 0 and juego[f][0] == juego[f][1] and juego[f][1] == juego[f][2] and juego[f][2] != juego[f][3] and juego[f][3] == 0:
                juego_auxiliar[f][3]= juego[f][2] + juego[f][1]
                juego_auxiliar[f][1] = 0
                juego_auxiliar[f][2] = juego[f][0]
                juego_auxiliar[f][0] = 0
            #0NNN a NNN0

            elif juego[f][0] == 0 and juego[f][1] != 0 and juego[f][2] != 0 and juego[f][3] != 0 and juego[f][1] != juego[f][2] and juego[f][2] != juego[f][3]:
                juego_auxiliar[f][0]= juego[f][1]
                juego_auxiliar[f][1] = juego[f][2]
                juego_auxiliar[f][2] = juego[f][3]
                juego_auxiliar[f][3] = 0

            #N0N0 a NN00

            elif juego[f][0] != 0 and juego[f][1] == 0 and juego[f][2] != 0 and juego[f][3] == 0 and juego[f][0] != juego[f][2]:
                juego_auxiliar[f][0]= juego[f][0]
                juego_auxiliar[f][1] = juego[f][2]
                juego_auxiliar[f][2] = 0
                juego_auxiliar[f][3] = 0


            #2220 a 0024

            elif juego[f][0] != 0 and juego[f][0] == juego[f][1] and juego[f][1] == juego[f][2] and juego[f][2] != juego[f][3] and juego[f][3] == 0:
                juego_auxiliar[f][3]= juego[f][2] + juego[f][1]
                juego_auxiliar[f][1] = 0
                juego_auxiliar[f][2] = juego[f][0]
                juego_auxiliar[f][0] = 0
                

            #N00N a NN00 ok

            elif juego[f][0] != 0 and juego[f][1] == 0 and juego[f][2] == 0 and juego[f][3] != 0 and juego[f][0] != juego[f][3]:
                juego_auxiliar[f][0]= juego[f][0]
                juego_auxiliar[f][1] = juego[f][3]
                juego_auxiliar[f][2] = 0
                juego_auxiliar[f][3] = 0

            #NN0N a NNN0

            elif juego[f][0] != 0 and juego[f][1] != 0 and juego[f][2] == 0 and juego[f][3] != 0 and juego[f][1] != juego[f][3] and juego[f][0] != juego[f][1]:
                juego_auxiliar[f][0]= juego[f][0]
                juego_auxiliar[f][1] = juego[f][1]
                juego_auxiliar[f][2] = juego[f][3]
                juego_auxiliar[f][3] = 0

            #N0NN a NNN0

            elif juego[f][0] != 0 and juego[f][1] == 0 and juego[f][2] != 0 and juego[f][3] != 0 and juego[f][0] != juego[f][2] and juego[f][2] != juego[f][3]:
                juego_auxiliar[f][0]= juego[f][0]
                juego_auxiliar[f][1] = juego[f][2]
                juego_auxiliar[f][2] = juego[f][3]
                juego_auxiliar[f][3] = 0


            #220N a 4N00

            elif juego[f][0] == juego[f][1] and juego[f][0] != 0 and juego[f][2] == 0 and juego[f][3] != 0:
                juego_auxiliar[f][0]= juego[f][0] + juego[f][1]
                juego_auxiliar[f][1] = juego[f][3]
                juego_auxiliar[f][2] = 0
                juego_auxiliar[f][3] = 0


            #22N0 a 4N00 ok

            elif juego[f][0] == juego[f][1] and juego[f][0] != 0 and juego[f][2] != 0 and juego[f][2] != juego[f][1] and juego[f][3] == 0:
                juego_auxiliar[f][0]= juego[f][0] + juego[f][1]
                juego_auxiliar[f][1] = juego[f][2]
                juego_auxiliar[f][2] = 0
                juego_auxiliar[f][3] = 0

            
            #NN22 a NN40 ok

            elif juego[f][0] != 0 and juego[f][1] != 0 and juego[f][0] != juego[f][1] and juego[f][1] != juego[f][2] and juego[f][2] == juego[f][3] and juego[f][3] != 0:
                juego_auxiliar[f][0]= juego[f][0]
                juego_auxiliar[f][1] = juego[f][1]
                juego_auxiliar[f][2] = juego[f][2] + juego[f][3]
                juego_auxiliar[f][3] = 0


            #N022 a N400 ok

            elif juego[f][0] != 0 and juego[f][1] == 0 and juego[f][2] == juego[f][3] and juego[f][0] != juego[f][2] and juego[f][2] != 0:
                juego_auxiliar[f][0]= juego[f][0]
                juego_auxiliar[f][1] = juego[f][2] + juego[f][3]
                juego_auxiliar[f][2] = 0
                juego_auxiliar[f][3] = 0



            #22NN a 4NN0 okok

            elif juego[f][0] == juego[f][1] and juego[f][0] != 0 and juego[f][2] != 0 and juego[f][3] != 0 and juego[f][1] != juego[f][2] and juego[f][2] != juego[f][3]:
                juego_auxiliar[f][0]= juego[f][0] + juego[f][1]
                juego_auxiliar[f][1] = juego[f][2]
                juego_auxiliar[f][2] = juego[f][3]
                juego_auxiliar[f][3] = 0


            #2200 a 4000

            elif juego[f][0] == juego[f][1] and juego[f][0] != 0 and juego[f][2] == 0 and juego[f][3] == 0:
                juego_auxiliar[f][0]= juego[f][0] + juego[f][1]
                juego_auxiliar[f][1] = 0
                juego_auxiliar[f][2] = 0
                juego_auxiliar[f][3] = 0


            #202N a 4N00

            elif juego[f][0] == juego[f][2] and juego[f][0] != 0 and juego[f][1] == 0 and juego[f][3] != juego[f][2]:
                juego_auxiliar[f][0]= juego[f][0] + juego[f][2]
                juego_auxiliar[f][1] = juego[f][3]
                juego_auxiliar[f][2] = 0
                juego_auxiliar[f][3] = 0


            #2002 a 4000 ok

            elif juego[f][0] == juego[f][3] and juego[f][0] != 0 and juego[f][1] == 0 and juego[f][2] == 0:
                juego_auxiliar[f][0]= juego[f][0] + juego[f][3]
                juego_auxiliar[f][1] = 0
                juego_auxiliar[f][2] = 0
                juego_auxiliar[f][3] = 0


            #022N a 4N00

            elif juego[f][0] == 0 and juego[f][1] != 0 and juego[f][1] == juego[f][2] and juego[f][3] != juego[f][1]:
                juego_auxiliar[f][0]= juego[f][1] + juego[f][2]
                juego_auxiliar[f][1] = juego[f][3]
                juego_auxiliar[f][2] = 0
                juego_auxiliar[f][3] = 0


             #0202 a 4000

            elif juego[f][0] == 0 and juego[f][1] != 0 and juego[f][1] == juego[f][3] and juego[f][2] == 0:
                juego_auxiliar[f][0]= juego[f][1] + juego[f][3]
                juego_auxiliar[f][1] = 0
                juego_auxiliar[f][2] = 0
                juego_auxiliar[f][3] = 0


            #N22N a N4N0 ok

            elif juego[f][0] != 0 and juego[f][1] != 0 and juego[f][1] == juego[f][2] and juego[f][2] != 0 and  juego[f][1] != juego[f][0]:
                juego_auxiliar[f][0]= juego[f][0]
                juego_auxiliar[f][1] = juego[f][1] + juego[f][2]
                juego_auxiliar[f][2] = juego[f][3]
                juego_auxiliar[f][3] = 0


            #N202 a N400 ok

            elif juego[f][0] != 0 and juego[f][1] != 0 and juego[f][1] == juego[f][3] and juego[f][2] == 0 and juego[f][0] != juego[f][1]:
                juego_auxiliar[f][0]= juego[f][0]
                juego_auxiliar[f][1] = juego[f][1] + juego[f][3]
                juego_auxiliar[f][2] = 0
                juego_auxiliar[f][3] = 0


            #0022 a 4000

            elif juego[f][0] == 0 and juego[f][1] == 0 and juego[f][2] == juego[f][3] and juego[f][3] != 0:
                juego_auxiliar[f][0]= juego[f][2] + juego[f][3]
                juego_auxiliar[f][1] = 0
                juego_auxiliar[f][2] = 0
                juego_auxiliar[f][3] = 0


            #0N22 a N400

            elif juego[f][0] == 0 and juego[f][1] != 0 and juego[f][2] == juego[f][3] and juego[f][3] != 0:
                juego_auxiliar[f][0]= juego[f][1]
                juego_auxiliar[f][1] = juego[f][2] + juego[f][3]
                juego_auxiliar[f][2] = 0
                juego_auxiliar[f][3] = 0


             #NN22 a N400

            elif juego[f][0] != 0 and juego[f][0] == juego[f][1] and juego[f][2] == juego[f][3] and juego[f][3] != 0:
                juego_auxiliar[f][0]= juego[f][0] + juego[f][1]
                juego_auxiliar[f][1] = juego[f][2] + juego[f][3]
                juego_auxiliar[f][2] = 0
                juego_auxiliar[f][3] = 0


            #2222 a 4400 ok

            elif juego[f][0] != 0 and juego[f][0] == juego[f][1] and juego[f][2] == juego[f][3] and juego[f][3] != 0 and juego[f][2] == juego[f][1]:
                juego_auxiliar[f][0]= juego[f][0] + juego[f][1]
                juego_auxiliar[f][1] = juego[f][2] + juego[f][3]
                juego_auxiliar[f][2] = 0
                juego_auxiliar[f][3] = 0


            #2244 a 4800 ok

            elif juego[0][c] != 0 and juego[0][c] == juego[1][c] and juego[2][c] == juego[3][c] and juego[3][c] != 0 and juego[1][c] != juego[2][c]:
                juego_auxiliar[0][c]= juego[0][c] + juego[1][c]
                juego_auxiliar[1][c] = juego[2][c] + juego[3][c]
#2220 a 0024

            elif juego[f][0] != 0 and juego[f][0] == juego[f][1] and juego[f][1] == juego[f][2] and juego[f][2] != juego[f][3] and juego[f][3] == 0:
                juego_auxiliar[f][3]= juego[f][2] + juego[f][1]
                juego_auxiliar[f][1] = 0
                juego_auxiliar[f][2] = juego[f][0]
                juego_auxiliar[f][0] = 0
                juego_auxiliar[2][c] = 0
                juego_auxiliar[3][c] = 0
#2220 a 0024

            elif juego[f][0] != 0 and juego[f][0] == juego[f][1] and juego[f][1] == juego[f][2] and juego[f][2] != juego[f][3] and juego[f][3] == 0:
                juego_auxiliar[f][3]= juego[f][2] + juego[f][1]
                juego_auxiliar[f][1] = 0
                juego_auxiliar[f][2] = juego[f][0]
                juego_auxiliar[f][0] = 0
#2220 a 0024

            elif juego[f][0] != 0 and juego[f][0] == juego[f][1] and juego[f][1] == juego[f][2] and juego[f][2] != juego[f][3] and juego[f][3] == 0:
                juego_auxiliar[f][3]= juego[f][2] + juego[f][1]
                juego_auxiliar[f][1] = 0
                juego_auxiliar[f][2] = juego[f][0]
                juego_auxiliar[f][0] = 0


             #N222 a N420 okok

            elif juego[f][0] != 0 and juego[f][0] != juego[f][1] and juego[f][1] == juego[f][2] and juego[f][2] == juego[f][3] and juego[f][3] != 0:
                juego_auxiliar[f][0]= juego[f][0]
                juego_auxiliar[f][1] = juego[f][1] + juego[f][2]
                juego_auxiliar[f][2] = juego[f][3]
                juego_auxiliar[f][3] = 0


             #N022 a N400 okok

            elif juego[0][c] != 0 and juego[1][c] == 0 and juego[2][c] == juego[3][c] and juego[0][c] != juego[2][c]:
                juego_auxiliar[0][c]= juego[0][c]
                juego_auxiliar[1][c] = juego[3][c] + juego[2][c]
                juego_auxiliar[2][c] = 0
                juego_auxiliar[3][c] = 0


             #2220 a 4200 ok

            elif juego[f][0] != 0 and juego[f][0] == juego[f][1] and juego[f][1] == juego[f][2] and juego[f][2] != juego[f][3]:
                juego_auxiliar[f][0]= juego[f][0] + juego[f][1]
                juego_auxiliar[f][1] = juego[f][2]
                juego_auxiliar[f][2] = juego[f][3]
                juego_auxiliar[f][3] = 0

                
    if dir == 'd':
        for f in range(len(juego)):

            #0N00 a 000N

            if juego[f][0] == 0 and juego[f][1] != 0 and juego[f][2] == 0 and juego[f][3] == 0:
                juego_auxiliar[f][0]= 0
                juego_auxiliar[f][1] = 0
                juego_auxiliar[f][2] = 0
                juego_auxiliar[f][3] = juego[f][1]

            #00N0 a 000N

            elif juego[f][0] == 0 and juego[f][1] == 0 and juego[f][2] != 0 and juego[f][3] == 0:
                juego_auxiliar[f][0]= 0
                juego_auxiliar[f][1] = 0
                juego_auxiliar[f][2] = 0
                juego_auxiliar[f][3] = juego[f][2]

            #N000 a 000N 

            elif juego[f][0] != 0 and juego[f][1] == 0 and juego[f][2] == 0 and juego[f][3] == 0:
                juego_auxiliar[f][0]= 0
                juego_auxiliar[f][1] = 0
                juego_auxiliar[f][2] = 0
                juego_auxiliar[f][3] = juego[f][0]

            #0NN0 a 00NN

            elif juego[f][0] == 0 and juego[f][1] != 0 and juego[f][2] != 0 and juego[f][3] == 0 and juego[f][1] != juego[f][2]:
                juego_auxiliar[f][0]= 0
                juego_auxiliar[f][1] = 0
                juego_auxiliar[f][2] = juego[f][1]
                juego_auxiliar[f][3] = juego[f][2]

            #0N0N a 00NN

            elif juego[f][0] == 0 and juego[f][1] != 0 and juego[f][2] == 0 and juego[f][3] != 0 and juego[f][1] != juego[f][3]:
                juego_auxiliar[f][0]= 0
                juego_auxiliar[f][1] = 0
                juego_auxiliar[f][2] = juego[f][1]
                juego_auxiliar[f][3] = juego[f][3]

            #NN00 a 00NN

            elif juego[f][0] != 0 and juego[f][1] != 0 and juego[f][2] == 0 and juego[f][3] == 0 and juego[f][0] != juego[f][1]:
                juego_auxiliar[f][0]= 0
                juego_auxiliar[f][1] = 0
                juego_auxiliar[f][2] = juego[f][0]
                juego_auxiliar[f][3] = juego[f][1]

            #NNN0 a 0NNN

            elif juego[f][0] != 0 and juego[f][1] != 0 and juego[f][2] != 0 and juego[f][3] == 0 and juego[f][0] != juego[f][1] and juego[f][1] != juego[f][2]:
                juego_auxiliar[f][0]= 0
                juego_auxiliar[f][1] = juego[f][0]
                juego_auxiliar[f][2] = juego[f][1]
                juego_auxiliar[f][3] = juego[f][2]

            #N0N0 a 00NN

            elif juego[f][0] != 0 and juego[f][1] == 0 and juego[f][2] != 0 and juego[f][3] == 0 and juego[f][0] != juego[f][2]:
                juego_auxiliar[f][0]= 0
                juego_auxiliar[f][1] = 0
                juego_auxiliar[f][2] = juego[f][0]
                juego_auxiliar[f][3] = juego[f][2]

            #N00N a 00NN

            elif juego[f][0] != 0 and juego[f][1] == 0 and juego[f][2] == 0 and juego[f][3] != 0 and juego[f][0] != juego[f][3]:
                juego_auxiliar[f][0]= 0
                juego_auxiliar[f][1] = 0
                juego_auxiliar[f][2] = juego[f][0]
                juego_auxiliar[f][3] = juego[f][3]

            #NN0N a 0NNN

            elif juego[f][0] != 0 and juego[f][1] != 0 and juego[f][2] == 0 and juego[f][3] != 0 and juego[f][1] != juego[f][3] and juego[f][0] != juego[f][1]:
                juego_auxiliar[f][0]= 0
                juego_auxiliar[f][1] = juego[f][0]
                juego_auxiliar[f][2] = juego[f][1]
                juego_auxiliar[f][3] = juego[f][3]

            #N0NN a 0NNN

            elif juego[f][0] != 0 and juego[f][1] == 0 and juego[f][2] != 0 and juego[f][3] != 0 and juego[f][0] != juego[f][2] and juego[f][2] != juego[f][3]:
                juego_auxiliar[f][0]= 0
                juego_auxiliar[f][1] = juego[f][0]
                juego_auxiliar[f][2] = juego[f][2]
                juego_auxiliar[f][3] = juego[f][3]


            #220N a 004N

            elif juego[f][0] == juego[f][1] and juego[f][0] != 0 and juego[f][2] == 0 and juego[f][3] != 0:
                juego_auxiliar[f][0]= 0
                juego_auxiliar[f][1] = 0
                juego_auxiliar[f][2] = juego[f][0] + juego[f][1]
                juego_auxiliar[f][3] = juego[f][3]


            #22N0 a 004N

            elif juego[f][0] == juego[f][1] and juego[f][0] != 0 and juego[f][2] != 0 and juego[f][2] != juego[f][1] and juego[f][3] == 0:
                juego_auxiliar[f][0]= 0
                juego_auxiliar[f][1] = 0
                juego_auxiliar[f][2] = juego[f][0] + juego[f][1]
                juego_auxiliar[f][3] = juego[f][2]

            
            #NN22 a 0NN4 ok

            elif juego[f][0] != 0 and juego[f][1] != 0 and juego[f][0] != juego[f][1] and juego[f][1] != juego[f][2] and juego[f][2] == juego[f][3]:
                juego_auxiliar[f][0]= 0
                juego_auxiliar[f][1] = juego[f][0]
                juego_auxiliar[f][2] = juego[f][1]
                juego_auxiliar[f][3] = juego[f][2] + juego[f][3]


            #N022 a 00N4

            elif juego[f][0] != 0 and juego[f][1] == 0 and juego[f][2] == juego[f][3] and juego[f][0] != juego[f][2] and juego[f][2] != 0:
                juego_auxiliar[f][0]= 0
                juego_auxiliar[f][1] = 0
                juego_auxiliar[f][2] = juego[f][0]
                juego_auxiliar[f][3] = juego[f][2] + juego[f][3]



            #22NN a 04NN

            elif juego[f][0] == juego[f][1] and juego[f][0] != 0 and juego[f][2] != 0 and juego[f][3] != 0 and juego[f][1] != juego[f][2] and juego[f][2] != juego[f][3]:
                juego_auxiliar[f][0]= 0
                juego_auxiliar[f][1] = juego[f][0] + juego[f][1]
                juego_auxiliar[f][2] = juego[f][2]
                juego_auxiliar[f][3] = juego[f][3]



            #2220 a 0024

            elif juego[f][0] != 0 and juego[f][0] == juego[f][1] and juego[f][1] == juego[f][2] and juego[f][2] != juego[f][3] and juego[f][3] == 0:
                juego_auxiliar[f][3]= juego[f][2] + juego[f][1]
                juego_auxiliar[f][1] = 0
                juego_auxiliar[f][2] = juego[f][0]
                juego_auxiliar[f][0] = 0
 

            #2200 a 0004

            elif juego[f][0] == juego[f][1] and juego[f][0] != 0 and juego[f][2] == 0 and juego[f][3] == 0:
                juego_auxiliar[f][0] = 0
                juego_auxiliar[f][1] = 0
                juego_auxiliar[f][2] = 0
                juego_auxiliar[f][3] = juego[f][0] + juego[f][1]



            #202N a 004N

            elif juego[f][0] == juego[f][2] and juego[f][0] != 0 and juego[f][1] == 0 and juego[f][3] != juego[f][2]:
                juego_auxiliar[f][0]= 0
                juego_auxiliar[f][1] = 0
                juego_auxiliar[f][2] = juego[f][0] + juego[f][2]
                juego_auxiliar[f][3] = juego[f][3]

             #2022 a 0024

            elif juego[f][0] == juego[f][2] and juego[f][0] != 0 and juego[f][1] == 0 and juego[f][3] == juego[f][2]:
                juego_auxiliar[f][0]= 0
                juego_auxiliar[f][1] = 0
                juego_auxiliar[f][2] = juego[f][0]
                juego_auxiliar[f][3] = juego[f][3] + juego[f][2]


            
             #2202 a 0024

            elif juego[f][0] == juego[f][1] and juego[f][0] != 0 and juego[f][2] == 0 and juego[f][3] == juego[f][1]:
                juego_auxiliar[f][0]= 0
                juego_auxiliar[f][1] = 0
                juego_auxiliar[f][2] = juego[f][0]
                juego_auxiliar[f][3] = juego[f][3] + juego[f][1]


            #2002 a 0004

            elif juego[f][0] == juego[f][3] and juego[f][0] != 0 and juego[f][1] == 0 and juego[f][2] == 0:
                juego_auxiliar[f][0]= 0
                juego_auxiliar[f][1] = 0
                juego_auxiliar[f][2] = 0
                juego_auxiliar[f][3] = juego[f][0] + juego[f][3]


            #022N a 004N

            elif juego[f][0] == 0 and juego[f][1] != 0 and juego[f][1] == juego[f][2] and juego[f][3] != juego[f][1]:
                juego_auxiliar[f][0]= 0
                juego_auxiliar[f][1] = 0
                juego_auxiliar[f][2] = juego[f][1] + juego[f][2]
                juego_auxiliar[f][3] = juego[f][3]


             #0202 a 0004

            elif juego[f][0] == 0 and juego[f][1] != 0 and juego[f][1] == juego[f][3] and juego[f][2] == 0:
                juego_auxiliar[f][0]= 0
                juego_auxiliar[f][1] = 0
                juego_auxiliar[f][2] = 0
                juego_auxiliar[f][3] = juego[f][1] + juego[f][3]


            #N22N a 0N4N

            elif juego[f][0] != 0 and juego[f][1] != 0 and juego[f][1] == juego[f][2] and juego[f][2] != 0 and  juego[f][1] != juego[f][0] and juego[f][3] != 0:
                juego_auxiliar[f][0] = 0
                juego_auxiliar[f][1] = juego[f][0]
                juego_auxiliar[f][2] = juego[f][1] + juego[f][2]
                juego_auxiliar[f][3] = juego[f][3]

            #0220 a 0004

            elif juego[f][0] == 0 and juego[f][1] != 0 and juego[f][1] == juego[f][2] and juego[f][3] == 0:
                juego_auxiliar[f][0] = 0
                juego_auxiliar[f][1] = 0
                juego_auxiliar[f][2] = 0
                juego_auxiliar[f][3] = juego[f][1] + juego[f][2]



            #N202 a 00N4

            elif juego[f][0] != 0 and juego[f][1] != 0 and juego[f][1] == juego[f][3] and juego[f][2] == 0 and juego[f][0] != juego[f][1]:
                juego_auxiliar[f][0] = 0
                juego_auxiliar[f][1] = 0
                juego_auxiliar[f][2] = juego[f][0]
                juego_auxiliar[f][3] = juego[f][1] + juego[f][3]


            #0022 a 0004

            elif juego[f][0] == 0 and juego[f][1] == 0 and juego[f][2] == juego[f][3] and juego[f][3] != 0:
                juego_auxiliar[f][0] = 0
                juego_auxiliar[f][1] = 0
                juego_auxiliar[f][2] = 0
                juego_auxiliar[f][3] = juego[f][2] + juego[f][3]


            #0N22 a 00N4

            elif juego[f][0] == 0 and juego[f][1] != 0 and juego[f][2] == juego[f][3] and juego[f][3] != 0:
                juego_auxiliar[f][0] = 0
                juego_auxiliar[f][1] = 0
                juego_auxiliar[f][2] = juego[f][1]
                juego_auxiliar[f][3] = juego[f][2] + juego[f][3]


             #NN22 a 00N4

            elif juego[f][0] != 0 and juego[f][0] == juego[f][1] and juego[f][2] == juego[f][3] and juego[f][3] != 0:
                juego_auxiliar[f][0] = 0
                juego_auxiliar[f][1] = 0
                juego_auxiliar[f][2] = juego[f][0] + juego[f][1]
                juego_auxiliar[f][3] = juego[f][2] + juego[f][3]


            #2222 a 0044 ok

            elif juego[f][0] != 0 and juego[f][0] == juego[f][1] and juego[f][2] == juego[f][3] and juego[f][3] != 0 and juego[f][2] == juego[f][1]:
                juego_auxiliar[f][2]= juego[f][0] + juego[f][1]
                juego_auxiliar[f][3] = juego[f][2] + juego[f][3]
                juego_auxiliar[f][0] = 0
                juego_auxiliar[f][1] = 0


            #2244 a 0048 ok

            elif juego[f][0] != 0 and juego[f][0] == juego[f][1] and juego[f][2] == juego[f][3] and juego[f][3] != 0 and juego[f][1] != juego[f][2]:
                juego_auxiliar[f][2]= juego[f][0] + juego[f][1]
                juego_auxiliar[f][3] = juego[f][2] + juego[f][3]
                juego_auxiliar[f][0] = 0
                juego_auxiliar[f][1] = 0


             #N222 a 0N24

            elif juego[f][0] != 0 and juego[f][0] != juego[f][1] and juego[f][1] == juego[f][2] and juego[f][2] == juego[f][3] and juego[f][3] != 0:
                juego_auxiliar[f][1]= juego[f][0]
                juego_auxiliar[f][3] = juego[f][3] + juego[f][2]
                juego_auxiliar[f][2] = juego[f][1]
                juego_auxiliar[f][0] = 0


             #N022 a 00N4

            elif juego[f][0] != 0 and juego[f][1] == 0 and juego[f][2] == juego[f][3] and juego[f][0] != juego[f][2]:
                juego_auxiliar[f][2]= juego[f][0]
                juego_auxiliar[f][3] = juego[f][3] + juego[f][2]
                juego_auxiliar[f][1] = 0
                juego_auxiliar[f][0] = 0


             #2220 a 0024

            elif juego[f][0] != 0 and juego[f][0] == juego[f][1] and juego[f][1] == juego[f][2] and juego[f][2] != juego[f][3] and juego[f][3] == 0:
                juego_auxiliar[f][3]= juego[f][2] + juego[f][1]
                juego_auxiliar[f][1] = 0
                juego_auxiliar[f][2] = juego[f][0]
                juego_auxiliar[f][0] = 0

            #222N a 024N

            elif juego[f][0] != 0 and juego[f][0] == juego[f][1] and juego[f][1] == juego[f][2] and juego[f][2] != juego[f][3] and juego[f][3] != 0:
                juego_auxiliar[f][3]= juego[f][3]
                juego_auxiliar[f][1] = juego[f][0]
                juego_auxiliar[f][2] = juego[f][1] + juego[f][2]
                juego_auxiliar[f][0] = 0



    # guardo el juego actualizado en juego_auxiliar

    return juego_auxiliar
                     

def insertar_nuevo_random(nuevo_juego):
    fila = random.randint(0, 3)
    columna = random.randint(0, 3)
    while nuevo_juego[fila][columna] != 0:
        fila = random.randint(0, 3)
        columna = random.randint(0, 3)
        
    nuevo_juego[fila][columna] = random.randrange(2, 5, 2)
    return nuevo_juego

    

def main():

    # esta funcion es dato y no se puede modificar

    juego = inicializar_juego()
    while True:
        mostrar_juego(juego)
        if juego_ganado(juego):
            print("Felicidades! Sos lo mas")
            return
        if juego_perdido(juego):
            print("Lola, volve a intentar")
            return
        dir = pedir_direccion()
        nuevo_juego = actualizar_juego(juego, dir)
        if nuevo_juego != juego:
            juego = insertar_nuevo_random(nuevo_juego)

main()
