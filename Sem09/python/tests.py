# num1=int(input("ingrese primer valor:"))
# num2=int(input("ingrese segundo valor:"))
num1=2
num2=3
suma=num1+num2
producto=num1*num2
print("La suma de los dos valores es")
print(suma)
print("El producto de los dos valores es")
print(producto) 

sueldo=int(input("Sueldo: "))
if sueldo>3000:
    print ("Debe pagar impuestos")
else: 
    print ("NO debe pagar impuestos") 

mes=int(input("Ingrese numero de mes: "))
if mes>12 or mes<1:
    print("El mes ingresado es incorrecto. No existe el mes " + str(mes))
else: 
    if mes <=3:
        print("primer trimestre")