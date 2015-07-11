# P2PModulo6
quiz proyecto miriadaX, despliegue en HEROKU
#Apartados de esta práctica.


El proyecto debe rehacer  el servidor Quiz desde cero, repitiendo los mismos pasos descritos en las transparencias de clase. No se permite clonar el repositorio oficial de la asignatura que aloja el servidor Quiz. Debe repetirse el desarrollo desde cero.

Además se deben añadir los siguientes cambios a Quiz:

1) Modificar el servidor Quiz para añadir un enlace en el píe de página <footer> del marco de las páginas renderizadas que apunte a la página de su proyecto en GitHub.

2) Modificar el servidor Quiz para que sirva una nueva página con los datos de los autores de la práctica. Este desarrollo se realizará en una rama llamada créditos. Cree la rama creditos y cámbiese a ella para hacer el desarrollo pedido en este apartado.

Crear un nuevo enlace en la barra de navegación que apunte a la página de créditos. La ruta de acceso a esta página debe ser /author.
Modifique el router (routers/index.js) para que atienda las peticiones "GET /author" y sirva una nueva vista views/author.ejs con los datos de los autores o autor de la página, mostrando el nombre de los autores, su fotografía y un pequeño video (opcional) de 30 seg.
Cuando se haya terminado este desarrollo, integrelo en la rama master, y súbalo a GitHub.

Una vez realizados y probados estos cambios, debe crearse una cuenta en heroku para desplegar allí el servidor desarrollado en esta práctica.
