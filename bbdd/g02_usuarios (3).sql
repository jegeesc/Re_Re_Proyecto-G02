-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-05-2021 a las 10:44:38
-- Versión del servidor: 10.4.18-MariaDB
-- Versión de PHP: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `g02_usuarios`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `campos`
--

CREATE TABLE `campos` (
  `idUsuario` int(11) NOT NULL,
  `idCampos` int(11) NOT NULL,
  `color` varchar(11) NOT NULL,
  `lat` double NOT NULL,
  `long` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `campos`
--

INSERT INTO `campos` (`idUsuario`, `idCampos`, `color`, `lat`, `long`) VALUES
(2, 1, 'orange', 39.00984, -0.18315),
(2, 2, 'blue', 39.03142, -0.20039);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contacto`
--

CREATE TABLE `contacto` (
  `id_contacto` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `apellido` varchar(255) DEFAULT NULL,
  `mail` varchar(255) DEFAULT NULL,
  `motivo` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `datos_usuarios`
--

CREATE TABLE `datos_usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellidos` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `nSondas` int(255) NOT NULL,
  `multiRecinto` enum('Sí','No') NOT NULL,
  `tipoUsuario` enum('admin','usuario') NOT NULL,
  `ubicacion` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `datos_usuarios`
--

INSERT INTO `datos_usuarios` (`id`, `nombre`, `apellidos`, `email`, `nSondas`, `multiRecinto`, `tipoUsuario`, `ubicacion`) VALUES
(1, 'Clara', 'Lopez Segura', 'admin@admin.com', 0, '', 'admin', 'C/Pedro Pompilo,3,Alzira'),
(2, 'Angel', 'Perez Llobet', 'user@user.com', 50, 'Sí', 'usuario', 'C/La Encina,8,Granada'),
(3, 'María', 'Alcazar Sanchez', 'marcazar@gmail.com', 25, 'Sí', 'usuario', 'Polígono Industrial Alcodar');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `esquinas`
--

CREATE TABLE `esquinas` (
  `idCampo` int(11) NOT NULL,
  `latitud` float NOT NULL,
  `longitud` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `esquinas`
--

INSERT INTO `esquinas` (`idCampo`, `latitud`, `longitud`) VALUES
(2, 39.0364, -0.19829),
(2, 39.0331, -0.20684),
(2, 39.025, -0.20299),
(2, 39.0306, -0.19213),
(1, 39.0104, -0.19026),
(1, 39.015, -0.18354),
(1, 39.0095, -0.17823),
(1, 39.0051, -0.1836);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mediciones`
--

CREATE TABLE `mediciones` (
  `idSensor` int(11) NOT NULL,
  `idMedicion` int(11) NOT NULL,
  `humedad` float NOT NULL,
  `salinidad` float NOT NULL,
  `temperatura` float NOT NULL,
  `luminosidad` enum('Noche','Muy Nublado','Escasamente Nublado','Soleado') NOT NULL,
  `hora` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `mediciones`
--

INSERT INTO `mediciones` (`idSensor`, `idMedicion`, `humedad`, `salinidad`, `temperatura`, `luminosidad`, `hora`) VALUES
(1, 1, 34, 21, 20.31, 'Soleado', '2021-05-28 12:00:00'),
(2, 2, 33, 22, 20.6, 'Soleado', '2021-05-28 12:00:00'),
(3, 3, 30, 21, 20, 'Soleado', '2021-05-28 12:00:00'),
(4, 4, 29, 22, 20.2, 'Soleado', '2021-05-28 12:00:00'),
(5, 5, 15, 10, 16.3, 'Escasamente Nublado', '2021-05-28 12:00:00'),
(6, 6, 16, 12, 16.6, 'Escasamente Nublado', '2021-05-28 12:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sensor`
--

CREATE TABLE `sensor` (
  `longitud` float NOT NULL,
  `latitud` float NOT NULL,
  `estado` enum('activo','fallo','','') NOT NULL,
  `idSensor` int(11) NOT NULL,
  `idCampos` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `sensor`
--

INSERT INTO `sensor` (`longitud`, `latitud`, `estado`, `idSensor`, `idCampos`) VALUES
(39.0107, -0.189467, 'activo', 1, 1),
(39.0126, -0.183438, 'activo', 2, 1),
(39.0072, -0.183881, 'activo', 3, 1),
(39.0093, -0.178492, 'activo', 4, 1),
(39.034, -0.20442, 'activo', 5, 2),
(39.0295, -0.19828, 'activo', 6, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sondas`
--

CREATE TABLE `sondas` (
  `id_usuario` int(11) NOT NULL,
  `id_sonda` varchar(255) NOT NULL,
  `nombre_sonda` varchar(255) NOT NULL,
  `Lat` double DEFAULT NULL,
  `Long` double DEFAULT NULL,
  `temperatura` double NOT NULL,
  `humedad` double NOT NULL,
  `salinidad` double NOT NULL,
  `iluminacion` enum('Soleado','Parcialmente Nublado','Muy Nublado','Noche') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `sondas`
--

INSERT INTO `sondas` (`id_usuario`, `id_sonda`, `nombre_sonda`, `Lat`, `Long`, `temperatura`, `humedad`, `salinidad`, `iluminacion`) VALUES
(2, 'ang1', '', -12.785379, 10.342468, 15.53, 43, 65, 'Soleado'),
(2, 'ang2', '', 10.438723, 4.437267, 20.31, 34, 41, 'Parcialmente Nublado'),
(3, 'mar1', '', -12.785379, -31.372643, 11.43, 67, 23, 'Parcialmente Nublado'),
(3, 'mar2', '', 44.384443, 21.654852, 22.42, 45, 12, 'Soleado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuariosregistrados`
--

CREATE TABLE `usuariosregistrados` (
  `id` int(11) NOT NULL,
  `usuario` varchar(255) NOT NULL,
  `contrasenya` varchar(255) NOT NULL,
  `tipoUsuario` enum('Admin','User') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuariosregistrados`
--

INSERT INTO `usuariosregistrados` (`id`, `usuario`, `contrasenya`, `tipoUsuario`) VALUES
(1, 'admin', '1234', 'Admin'),
(2, 'angel', '1234', 'User'),
(3, 'maria', '1234', 'User');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `campos`
--
ALTER TABLE `campos`
  ADD PRIMARY KEY (`idCampos`),
  ADD KEY `idUsuario` (`idUsuario`);

--
-- Indices de la tabla `contacto`
--
ALTER TABLE `contacto`
  ADD PRIMARY KEY (`id_contacto`);

--
-- Indices de la tabla `datos_usuarios`
--
ALTER TABLE `datos_usuarios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `esquinas`
--
ALTER TABLE `esquinas`
  ADD KEY `idCampo` (`idCampo`);

--
-- Indices de la tabla `mediciones`
--
ALTER TABLE `mediciones`
  ADD PRIMARY KEY (`idMedicion`),
  ADD KEY `mediciones_ibfk_1` (`idSensor`);

--
-- Indices de la tabla `sensor`
--
ALTER TABLE `sensor`
  ADD PRIMARY KEY (`idSensor`),
  ADD KEY `sensor_ibfk_1` (`idCampos`);

--
-- Indices de la tabla `sondas`
--
ALTER TABLE `sondas`
  ADD PRIMARY KEY (`id_sonda`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `usuariosregistrados`
--
ALTER TABLE `usuariosregistrados`
  ADD UNIQUE KEY `usuario` (`usuario`),
  ADD KEY `id` (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `contacto`
--
ALTER TABLE `contacto`
  MODIFY `id_contacto` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `datos_usuarios`
--
ALTER TABLE `datos_usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `mediciones`
--
ALTER TABLE `mediciones`
  MODIFY `idMedicion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `campos`
--
ALTER TABLE `campos`
  ADD CONSTRAINT `campos_ibfk_1` FOREIGN KEY (`idUsuario`) REFERENCES `datos_usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `esquinas`
--
ALTER TABLE `esquinas`
  ADD CONSTRAINT `esquinas_ibfk_1` FOREIGN KEY (`idCampo`) REFERENCES `campos` (`idCampos`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `mediciones`
--
ALTER TABLE `mediciones`
  ADD CONSTRAINT `mediciones_ibfk_1` FOREIGN KEY (`idSensor`) REFERENCES `sensor` (`idSensor`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `sensor`
--
ALTER TABLE `sensor`
  ADD CONSTRAINT `sensor_ibfk_1` FOREIGN KEY (`idCampos`) REFERENCES `campos` (`idCampos`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `sondas`
--
ALTER TABLE `sondas`
  ADD CONSTRAINT `sondas_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `datos_usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `usuariosregistrados`
--
ALTER TABLE `usuariosregistrados`
  ADD CONSTRAINT `usuariosregistrados_ibfk_1` FOREIGN KEY (`id`) REFERENCES `datos_usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
