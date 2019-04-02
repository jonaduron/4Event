CREATE DATABASE 4event;

USE 4event;

CREATE TABLE login(
    usuario VARCHAR(20) PRIMARY KEY,
    contrasena VARCHAR(20) NOT NULL
);

CREATE TABLE cliente(
	id INT(11) PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(40) NOT NULL,
    apellidoPaterno VARCHAR(30) NOT NULL,
    apellidoMaterno VARCHAR(30),
    telefono VARCHAR(20) NOT NULL,
    correo_electronico VARCHAR(40) UNIQUE NOT NULL,
    direccion VARCHAR(200) NOT NULL,
    foto LONGBLOB,
    usuario VARCHAR(20) UNIQUE NOT NULL,
    FOREIGN KEY (usuario) REFERENCES login(usuario)
);

CREATE TABLE proveedor(
	id INT(11) PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    rama VARCHAR(30) NOT NULL,
    descripcion VARCHAR(250) NOT NULL,
    telefono VARCHAR(10) NOT NULL,
    correo_electronico VARCHAR(40) NOT NULL,
    direccion VARCHAR(100) NOT NULL,
    foto LONGBLOB,
    usuario VARCHAR(20) UNIQUE NOT NULL,
    FOREIGN KEY (usuario) REFERENCES login(usuario)
);

CREATE TABLE paquete(
    id INT(11) PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(20) NOT NULL,
    precio DECIMAL(13, 2) NOT NULL,
    disponibilidad INT NOT NULL,
    descripcion VARCHAR(250),
    id_proveedor INT NOT NULL,
	FOREIGN KEY (id_proveedor) REFERENCES proveedor(id)
);

CREATE TABLE evento(
    id INT PRIMARY KEY AUTO_INCREMENT,
    fecha DATE NOT NULL,
    descripcion VARCHAR(100),
    tipo VARCHAR(20),
    id_proveedor INT(11) NOT NULL,
    id_cliente INT(11) NOT NULL,
    id_paquete INT(11) NOT NULL,
    FOREIGN KEY (id_proveedor) REFERENCES proveedor(id),
    FOREIGN KEY (id_cliente) REFERENCES cliente(id),
    FOREIGN KEY (id_paquete) REFERENCES paquete(id)
);

/*----------------------- DATOS DE PRUEBA ----------------------------------*/

INSERT INTO login VALUES('papichulo', '12345');
INSERT INTO login VALUES('donjulian', '12345');

INSERT INTO cliente(id, nombre, apellidoPaterno, apellidoMaterno, telefono, correo_electronico, direccion, usuario) 
VALUES(0000001, 'Alfonso', 'Gonzalez', 'Martínez', '4493813097', 'alfonsin@gmail.com', 'Alemania 6540, Aguascalientes, Ags.', 'papichulo');

INSERT INTO proveedor(id, nombre, rama, descripcion, telefono, correo_electronico, direccion, usuario) 
VALUES(1000001, 'Carnitas Don Julián', 'Comida', 'Negocio proveedor de comida: carnitas, carne asada, birria, tacos, tortas, etc.', '4491203902', 'carnitasdonjulian@gmail.com', 'Américas 301, San Francisco de los Romo, Ags.', 'donjulian');

INSERT INTO paquete(id, nombre, precio, disponibilidad, descripcion, id_proveedor)
VALUES(000000001, 'Carnitas x 50', 800.00, 7, 'Paquete de carnitas creado para 50 personas', 1000001);

INSERT INTO evento(id, fecha, tipo, id_proveedor, id_cliente, id_paquete) 
VALUES(000000001, '2019-04-01', 'Graduación', 1000001, 0000001, 000000001);
