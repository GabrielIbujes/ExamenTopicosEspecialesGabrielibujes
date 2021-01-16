# ExamenTopicosEspecialesGabrielibujes

# Escuela Politécnica Nacional
# ESFOT
# Tópicos Especiales

Ing. Juan Pablo Zladumbide🧒

# Examen Bimestral
Desarrollar en ionic una aplicación que me permita chatear y que guarde todos los mensajes de cada usuario, los mensajes deben guardarse cifrados. 
Se debe registrar el texto escrito y el usuario que ingresa dicho texto, es decir se dbe implementar un login.

El chat permitirá subir imágenes, las cuales también deben ser protegidas.

# Requisitos

- Ionic:

  - Ionic CLI                     : 6.12.3 
  - Ionic Framework               : @ionic/angular 5.5.2
  - @angular-devkit/build-angular : 0.1000.8
  - @angular-devkit/schematics    : 10.0.8
  - @angular/cli                  : 10.0.8
  - @ionic/angular-toolkit        : 2.3.3

- Utility:

  - cordova-res : 0.15.2
  - native-run  : 1.3.0

- System:

  - NodeJS : v14.15.1 (C:\Program Files\nodejs\node.exe)
  - npm    : 6.14.8
  - OS     : Windows 10

# Desarrollo
Creación de proyecto en blanco
![2 (2)](https://user-images.githubusercontent.com/49683647/104792820-d1551d00-576d-11eb-9c40-b2b455d193bb.png)


Creación de componentes y servicios
![3](https://user-images.githubusercontent.com/49683647/104792834-ddd97580-576d-11eb-8689-682344712dac.PNG)


Credenciales de Firestore - Firebase
![5](https://user-images.githubusercontent.com/49683647/104792883-019cbb80-576e-11eb-9086-6fae9fb2fef0.png)



Registramos un usuario directamente en nuestra base
![6](https://user-images.githubusercontent.com/49683647/104792974-73750500-576e-11eb-9f49-7edfd6325fe3.png)


Realizamos el tipeo de como se vería nuestra interfaz, y comprobamos que se registra directamente los datos ya quemados en la base
![8](https://user-images.githubusercontent.com/49683647/104793124-26ddf980-576f-11eb-91b3-b911e306e37d.png)


Validamos
![9](https://user-images.githubusercontent.com/49683647/104793133-35c4ac00-576f-11eb-9ccd-1c28c6e68a30.png)


El siguiente paso es realizar un registro a través del aplicativo, donde definimos alertas y realziamos la funcion "registro" donde se almacenará los datos de email y user
![10](https://user-images.githubusercontent.com/49683647/104793179-60166980-576f-11eb-9c1c-f0f2b985b809.png)


utilizamos una irectiva de ionic, "ngModel" para que los parámetros email y password se puedan obtener en la interfáz, y también decalramos la función registro, y salir - volver
![11](https://user-images.githubusercontent.com/49683647/104793033-b800a080-576e-11eb-9f02-3e012a0e1d8f.png)


Comprobamos
![12](https://user-images.githubusercontent.com/49683647/104793370-3873d100-5770-11eb-839c-a8220ad7189c.png)


Se utilizó guards como componente tanto para un logeo y un no logeo, ya que permiten proteger las rutas e indican al enrutador si se permitirá la navegación a una ruta o no.
![15](https://user-images.githubusercontent.com/49683647/104793322-02365180-5770-11eb-8788-060b654ca572.PNG)


![16](https://user-images.githubusercontent.com/49683647/104793379-49bcdd80-5770-11eb-91f6-d079edfdfb5b.PNG)


Comprobamos el funciaonamiento dle Login y Registro a través del aplicativo
![17](https://user-images.githubusercontent.com/49683647/104793407-69ec9c80-5770-11eb-9783-bda0dc930d0a.png)


![18](https://user-images.githubusercontent.com/49683647/104793413-7244d780-5770-11eb-879f-03a03e620b36.png)



Comprobamos los datos registrados en la base de datos Firestore
![19](https://user-images.githubusercontent.com/49683647/104793425-78d34f00-5770-11eb-8d70-4ec5639c1c86.PNG)



# Video de Explicación
📹

# Autor

Gabriel Ibujés
