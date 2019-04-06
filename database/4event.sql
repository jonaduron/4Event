CREATE DATABASE 4event;

USE 4event;

CREATE TABLE usuario(
	id INT(11) PRIMARY KEY AUTO_INCREMENT,
    usuario VARCHAR(30) UNIQUE NOT NULL,
    contrasena VARCHAR(30) NOT NULL,
    nombre VARCHAR(60) NOT NULL,
    apellidos VARCHAR(30),
    telefono VARCHAR(10) NOT NULL,
    correo_electronico VARCHAR(40) NOT NULL,
    direccion VARCHAR(100),
    tipo VARCHAR(30),
    detalles VARCHAR(250),
    esProveedor BOOLEAN,
    foto LONGBLOB
);

CREATE TABLE paquete(
    id INT(11) PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    precio DECIMAL(13, 2) NOT NULL,
    disponibilidad INT NOT NULL,
    descripcion VARCHAR(250),
    id_proveedor INT NOT NULL,
	FOREIGN KEY (id_proveedor) REFERENCES usuario(id)
);

CREATE TABLE evento(
    id INT PRIMARY KEY AUTO_INCREMENT,
    fecha DATE NOT NULL,
    tipo VARCHAR(40),
    estado VARCHAR(15) NOT NULL DEFAULT 'Pendiente',
    id_proveedor INT(11) NOT NULL,
    id_cliente INT(11) NOT NULL,
    id_paquete INT(11) NOT NULL,
    FOREIGN KEY (id_proveedor) REFERENCES usuario(id),
    FOREIGN KEY (id_cliente) REFERENCES usuario(id),
    FOREIGN KEY (id_paquete) REFERENCES paquete(id)
);

/*------------------------------------------------ DATOS DE PRUEBA ------------------------------------------------------*/

/* --------------------------------------- CLIENTES ----------------------------------------------------- */
INSERT INTO usuario(id, usuario, contrasena, nombre, apellidos, telefono, correo_electronico, direccion, esProveedor)
VALUES(1000, 'scrappy', '12345', 'Scrappy', 'Coco', '4491012395', 'scrappycoco@gmail.com', 'Las Jacarandas 524, Aguascalientes, Ags.', false);
INSERT INTO usuario(usuario, contrasena, nombre, apellidos, telefono, correo_electronico, direccion, esProveedor)
VALUES('coco', '12345', 'Coco', 'Estrellado', '4496281023', 'cocoestrellado@gmail.com', 'El Alamo 122, Jesús María, Ags.', false);

/* ------------------------------------- PROVEEDORES ----------------------------------------------------- */
INSERT INTO usuario(usuario, contrasena, nombre, telefono, correo_electronico, direccion, tipo, detalles, esProveedor)
VALUES('strecci', '12345', 'Tacos Strecci', '4493482012', 'tacostrecci@gmail.com', 'El Gallero 520, Jesús María, Ags.', 'Comida', 'Vendedor de tacos de bisteck, pastor, chorizo, etc.', true);
INSERT INTO usuario(usuario, contrasena, nombre, telefono, correo_electronico, direccion, tipo, detalles, esProveedor)
VALUES('sanpancho', '12345', 'Carnitas San Pancho', '4490752914', 'carnitasanpancho@gmail.com', 'Revolución 582, San Francisco de los Romo, Ags.', 'Comida', 'Proveedor carnitas elaboradas de distintos tipos para cualquier evento', true);
 
/* --------------------------------------- PAQUETES -------------------------------------------------------- */
INSERT INTO paquete(id, nombre, precio, disponibilidad, descripcion, id_proveedor)
VALUES(1000, 'Tacos x 50', 1800.00, 8, 'Paquete de tacos creado para un evento de 50 personas', 1002);
INSERT INTO paquete(nombre, precio, disponibilidad, descripcion, id_proveedor)
VALUES('Tacos x 100', 1600.00, 4, 'Paquete de tacos creado para un evento de 100 personas', 1002);
INSERT INTO paquete(nombre, precio, disponibilidad, descripcion, id_proveedor)
VALUES('Tacos x 200', 3200.00, 4, 'Paquete de tacos creado para un evento de 200 personas', 1002);
INSERT INTO paquete(nombre, precio, disponibilidad, descripcion, id_proveedor)
VALUES('Carnitas x 50', 2600.00, 4, 'Paquete de carnitas creado para un evento de 50 personas', 1003);
INSERT INTO paquete(nombre, precio, disponibilidad, descripcion, id_proveedor)
VALUES('Carnitas x 100', 4000.00, 6, 'Paquete de carnitas creado para un evento de 100 personas', 1003);
INSERT INTO paquete(nombre, precio, disponibilidad, descripcion, id_proveedor)
VALUES('Carnitas x 200', 9000.00, 0, 'Paquete de carnitas creado para un evento de 200 personas', 1003);

/* -------------------------------------------- EVENTOS --------------------------------------------------------- */
INSERT INTO evento(id, fecha, tipo, id_proveedor, id_cliente, id_paquete) 
VALUES(1000, '2019-04-01', 'Graduación', 1002, 1000, 1000);
INSERT INTO evento(fecha, tipo, id_proveedor, id_cliente, id_paquete) 
VALUES('2019-04-01', 'Boda', 1003, 1001, 1001);
INSERT INTO evento(fecha, tipo, id_proveedor, id_cliente, id_paquete) 
VALUES('2019-04-01', 'XV años', 1002, 1000, 1002);
INSERT INTO evento(fecha, tipo, id_proveedor, id_cliente, id_paquete) 
VALUES('2019-04-01', 'Bautizo', 1003, 1001, 1003);
INSERT INTO evento(fecha, tipo, id_proveedor, id_cliente, id_paquete) 
VALUES('2019-04-01', 'Graduación', 1002, 1000, 1004);
INSERT INTO evento(fecha, tipo, id_proveedor, id_cliente, id_paquete) 
VALUES('2019-04-01', 'Primera comunión', 1003, 1001, 1005);

SELECT e.id, e.fecha, e.tipo, e.estado, u1.nombre as 'proveedor', p.nombre as 'paquete', u2.nombre as 'cliente'
FROM evento e
LEFT JOIN usuario u1 ON e.id_proveedor = u1.id 
LEFT JOIN usuario u2 ON e.id_cliente = u2.id
JOIN paquete p ON e.id_paquete = p.id
ORDER BY e.id;

SELECT p.id, p.nombre, p.precio, p.disponibilidad, us.nombre
FROM paquete p
JOIN usuario us ON p.id_proveedor = us.id;

SELECT us.nombre, pa.nombre, pa.precio, ev.tipo
FROM usuario us
JOIN paquete pa ON us.id = pa.id_proveedor
JOIN evento ev ON pa.id = ev.id_paquete;

SELECT ev.id, us1.nombre, us1.apellidos, us1.direccion, us2.nombre, us2.direccion
FROM evento ev
LEFT JOIN usuario us1 ON ev.id_cliente = us1.id
LEFT JOIN usuario us2 ON ev.id_proveedor = us2.id;

