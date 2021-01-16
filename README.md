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
  
# Instalaciones y Comandos necesarios
ionic start examen blank --type=angular (inicializacion del proyecto)
npm install -g @ionic/cli native-run cordova-res   (actualizar dependencias)
npm install firebase @angular/fire --save (para usar firebase con nuestro proyecto)
npm install crypto-js (para poder encriptar lo que son )
npm i -S @angular/fire firebase (actualziación global)
ionic cordova build android (crear APK)

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


Se utilizó guards como componente tanto para un logeo y un no logeo, ya que permiten proteger las rutas e indican al enrutador si se permitirá la navegación a una ruta o no

![15](https://user-images.githubusercontent.com/49683647/104793322-02365180-5770-11eb-8788-060b654ca572.PNG)


![16](https://user-images.githubusercontent.com/49683647/104793379-49bcdd80-5770-11eb-91f6-d079edfdfb5b.PNG)



Comprobamos el funciaonamiento dle Login y Registro a través del aplicativo

![17](https://user-images.githubusercontent.com/49683647/104793407-69ec9c80-5770-11eb-9783-bda0dc930d0a.png)


![18](https://user-images.githubusercontent.com/49683647/104793413-7244d780-5770-11eb-879f-03a03e620b36.png)



Comprobamos los datos registrados en la base de datos Firestore

![19](https://user-images.githubusercontent.com/49683647/104793425-78d34f00-5770-11eb-8d70-4ec5639c1c86.PNG)


Creamos un servicio de firestore, para poder realziar directamente la colección donde se almacenarán los datos, estos deben ser de tipo ROOT

![root](https://user-images.githubusercontent.com/49683647/104808834-cd99b880-57b6-11eb-8cd4-e314bbd67e9b.PNG)


Creamos la función "uploadfile" la cual servirá para subir los archivos (multimedia ) más conocido como transferencia de los mismos, esta será llamada a través de un boton

![10](https://user-images.githubusercontent.com/49683647/104808937-79db9f00-57b7-11eb-89ba-84bfde8a0b62.png)


Función "uploadFile" para la carga de archivos

![11 (2)](https://user-images.githubusercontent.com/49683647/104808962-a68fb680-57b7-11eb-8af9-0c4510501402.png)


En la misma función utilziamos la librería "crypto" esta encriptará la "data" en este caso imagen, que se suba y lo alojará en un array encriptado en Firestore

![11 (3)](https://user-images.githubusercontent.com/49683647/104808984-e0f95380-57b7-11eb-8928-bf106c56a0fc.png)


Validaciones de regisrtro

![13](https://user-images.githubusercontent.com/49683647/104809037-5c5b0500-57b8-11eb-97c6-0a13858b4ec9.png)


Comprobamos funcionamiento 

![14](https://user-images.githubusercontent.com/49683647/104809066-8c0a0d00-57b8-11eb-9f7a-5fe1983febfe.png)

![15](https://user-images.githubusercontent.com/49683647/104809078-a348fa80-57b8-11eb-8567-1f813e461851.png)


Corroboramos los datos encriptados en tiempo real en Firestore

![16](https://user-images.githubusercontent.com/49683647/104809137-0e92cc80-57b9-11eb-90e6-8fdf894d1f6e.png)


Fnalmente, generamos el APK, con el comando : "ionic cordova build android"
![12 (2)](https://user-images.githubusercontent.com/49683647/104809097-cffd1200-57b8-11eb-8d60-37f291793b21.png)

![13 (2)](https://user-images.githubusercontent.com/49683647/104809111-e4d9a580-57b8-11eb-8207-bbf338cdfb63.png)


Comprobamos que la APK funcione correctamente, puede ser en un emulador o en un celular directamente

Se realizó un SPLASH para la API
![1](https://user-images.githubusercontent.com/49683647/104809218-a4c6f280-57b9-11eb-8d88-352ec931e883.jpeg)


Logeo y Registro
![3](https://user-images.githubusercontent.com/49683647/104809227-b6a89580-57b9-11eb-8a59-f52eb15b869f.jpeg)


![4](https://user-images.githubusercontent.com/49683647/104809230-bd370d00-57b9-11eb-9243-92662780d644.jpeg)


Chat
![5](https://user-images.githubusercontent.com/49683647/104809241-cfb14680-57b9-11eb-9baa-4a8ba7a292e5.jpeg)


Archivos Guardados
![6](https://user-images.githubusercontent.com/49683647/104809246-d8a21800-57b9-11eb-9928-1eb2d7416e5c.jpeg)


Funcionamiento
![7](https://user-images.githubusercontent.com/49683647/104809254-ebb4e800-57b9-11eb-88d5-f7cc2906f0db.jpeg)


# Video de Explicación
📹 https://www.youtube.com/watch?v=NfOMLeYGIcU 

# Autor

Gabriel Ibujés
