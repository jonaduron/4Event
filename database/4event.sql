CREATE DATABASE 4event;

USE 4event;

CREATE TABLE usuario(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(40) NOT NULL,
    telefono VARCHAR(16) NOT NULL, 
    correo_electronico VARCHAR(40) UNIQUE NOT NULL,
    direccion VARCHAR(200),
    foto BLOB
);

CREATE TABLE login(
    usuario VARCHAR(20) PRIMARY KEY,
    contraseña VARCHAR(40) NOT NULL,
    id_usuario INT UNIQUE NOT NULL
);

CREATE TABLE paquete(
    id INT(11) PRIMARY KEY,
    nombre VARCHAR(20) NOT NULL,
    precio DECIMAL(5, 2) NOT NULL,
    disponibilidad INT NOT NULL,
    descripcion VARCHAR(250) NOT NULL,
    id_proveedor INT NOT NULL
);

CREATE TABLE evento(
    id INT PRIMARY KEY,
    fecha DATETIME NOT NULL,
    descripcion VARCHAR(100),
    tipo VARCHAR(50),
    id_proveedor INT NOT NULL,
    id_cliente INT NOT NULL,
    FOREIGN KEY id_proveedor REFERENCES usuario(id),
    FOREIGN KEY id_cliente REFERENCES usuario(id)    
);