## Sesion

### POST /sesion/

Parámetros:

Body:

- usuario* - string

- contrasenya* - string

Respuestas:

200 OK
````
{
    "id":1,
    "nombre": Usuario,
    "rol": admin
}
````

401 NO AUTORIZADO

### GET /sesion/

### DELETE /sesion/