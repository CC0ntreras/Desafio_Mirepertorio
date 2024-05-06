# Desafio Mi Repertorio.

###Descripción
La escuela de música “E-Sueño” está motivando a sus estudiantes de canto a presentarse en vivo y se puso en contacto con el restaurante del sector para usar su tarima e iniciar un calendario de presentaciones. Para conocer y gestionar las canciones que cantarán sus estudiantes, la escuela contrató a un desarrollador freelance para la creación de una aplicación tipo CRUD.
En este desafío deberás desarrollar un servidor con Express que utilice el paquete pg para conectarse con PostgreSQL y utilice funciones asíncronas para hacer las consultas a la base de datos.

## Empezando 🚀
Estas instrucciones te guiarán para obtener una copia de este proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.

## Prerrequisitos 📋
Lista de software y herramientas, incluyendo versiones, que necesitas para instalar y ejecutar este proyecto:

"axios": "^1.6.8",
 "express": "^4.19.2",
 "pg": "^8.11.5"


## Instalación 🔧
Una guía paso a paso sobre cómo configurar el entorno de desarrollo e instalar todas las dependencias.

**Paso 1 instalar las dependencias con npm i creando la carpeta node_modules.**

**Paso 2 Crear una DB con la siguiente estructura**

CREATE DATABASE repertorio;

CREATE TABLE canciones (id SERIAL, titulo VARCHAR(50), artista VARCHAR(50), tono VARCHAR(10));

**Paso 3 utilizar la siguiente configuración para la DB**

const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres', // usuario de postgres
    host: 'localhost',
    database: 'repertorio', //nombre sugerido de la base de datos creada en tu pc
    password: '', // pass de postgres
    port: 5432,
});

module.exports = pool;

##Despliegue 📦
Se desplega a travez de la consola de visual studio con power shell.

##Construido Con 🛠️
Explica qué tecnologías usaste para construir este proyecto. Aquí algunos ejemplos:

JavaScript - El lenguaje utilizado
Express- El framework web utilizado
postgres - Gestor de Base de Datos

##Autores ✒️
Cristian Contreras - CC0ntreras

# FIN.
