CREATE DATABASE 4event;

USE 4event;

CREATE TABLE usuario(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(40) NOT NULL,
    telefono VARCHAR(16) NOT NULL, 
    correo_electronico VARCHAR(40) UNIQUE,
    direccion VARCHAR(200),
    foto BLOB
);

CREATE TABLE login(
    usuario VARCHAR(20) PRIMARY KEY,
    contraseña VARCHAR(40) NOT NULL,
    id_usuario INT UNIQUE 
);

CREATE TABLE paquetes(
    codigo VARCHAR(15) PRIMARY KEY,
    nombre VARCHAR(20) NOT NULL,
    precio DECIMAL(5, 2) NOT NULL,
    disponibilidad INT NOT NULL,
    descripcion VARCHAR(250),
    foto BLOB,
    id_proveedor INT NOT NULL
);

CREATE TABLE eventos(
    id INT PRIMARY KEY,
    fecha DATETIME NOT NULL,
    descripcion VARCHAR(100),
    id_proveedor INT NOT NULL,
    id_cliente INT NOT NULL
);