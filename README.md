# post_front
Proyecto que consume un api en laravel para la creacion de post y categorias asociadas a estos.
## desarrollado por  :

- Edison Fabian Molina Herrera-TDS0032
- Diego Arturo Vellojin Martínez- TDS0033
- Laury Alejandra Mayorga Chaparro-TDS0032

<br>

### Opción elegida para la entrega :"" Opcion 2 ""

## Project setup

npm install

### IMPORTANTE:

Se debe correr el Api de laravel del siguiente repositorio:

- https://github.com/Edisonmolinah/final-back

- recuerde realizar las configuraciones alli descritas
- es muy importante crear la base de datos, aisgnar los puertos indicados
- recuerde crear los roles mencionados

## una vez se tenga arriba la api del paso anterior Correr el proyecto vue

- npm run serve


- el proyecto correra en : http://localhost:8080/

## Las rutas para hacer uso de la app vue

### se debe registrar un usuario :

con rol 1 para admin, 2 para viewer

- post: http://localhost:8080/register

al registrarse obtendremos un token 


<div align="center">
    <img src="src/images/singup.jpeg" width="400px"</img> 
</div>

al registrarse obtendremos un token 


#### se debe iniciar sesion con el usuario creado:

- post: http://localhost:8080/login
<div align="center">
    <img src="src/images/login.jpeg" width="400px"</img> 
</div>

al hacer login obtendremos nuevamente el token

<div align="center">
    <img src="src/images/login-token.jpeg" width="400px"</img> 
</div>



### CRUD para categorias .
Aqui podremos listar y administrar nuestras categorias, crear, editar o eliminar.
- get : http://localhost:8080/categorie

<div align="center">
    <img src="src/images/lista-categorias.jpeg" width="400px"</img> 
</div>
podremos crear las categorias necesarias para crear nuestros post

- post: http://localhost:8080/create-categories
<div align="center">
    <img src="src/images/crearC.jpeg" width="400px"</img> 
</div>
 al editar obtendremos por id la info almacenada en la db
- put: http://localhost:8080/edit-categories/:id
<div align="center">
    <img src="src/images/editar-categoria.jpeg" width="400px"</img> 
</div>

### CRUD para Posts

en este apartado podemos listar los posts creados y arministrarlos,crearlos, editarlos o eliminarlos
     
- get: http://localhost:8080/posts 
<div align="center">
    <img src="src/images/lista-post.jpeg" width="400px"</img> 
</div>
  
- post: http://localhost:8080/create-post
aqui podemos crear un post y podemos seleccionar una categoria que creamos previamente, asignarle un estado y demas

<div align="center">
    <img src="src/images/crear-post.jpeg" width="400px"</img> 
</div>
 
- put: http://localhost:8080/edit-post/:id

 al editar obtendremos por id la info almacenada en la db


podemos ver que el estado del post sobre peliculas de accion ahora es Publicado y anteriormente estaba como No Publicado
<div align="center">
    <img src="src/images/lista-post2.jpeg" width="400px"</img> 
</div>
    
