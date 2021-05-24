-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-05-2021 a las 18:35:19
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
-- Base de datos: `mapas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `campos`
--

CREATE TABLE `campos` (
  `idCampos` int(11) NOT NULL,
  `color` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `esquinas`
--

CREATE TABLE `esquinas` (
  `idCampos` int(11) NOT NULL,
  `IdEsquina` int(11) NOT NULL,
  `longiutd` float NOT NULL,
  `latitud` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
  `luminosidad` int(11) NOT NULL,
  `hora` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `campos`
--
ALTER TABLE `campos`
  ADD PRIMARY KEY (`idCampos`);

--
-- Indices de la tabla `esquinas`
--
ALTER TABLE `esquinas`
  ADD PRIMARY KEY (`IdEsquina`),
  ADD KEY `idCampos` (`idCampos`);

--
-- Indices de la tabla `mediciones`
--
ALTER TABLE `mediciones`
  ADD PRIMARY KEY (`idMedicion`);

--
-- Indices de la tabla `sensor`
--
ALTER TABLE `sensor`
  ADD PRIMARY KEY (`idSensor`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `esquinas`
--
ALTER TABLE `esquinas`
  ADD CONSTRAINT `esquinas_ibfk_1` FOREIGN KEY (`idCampos`) REFERENCES `campos` (`idCampos`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `mediciones`
--
ALTER TABLE `mediciones`
  ADD CONSTRAINT `mediciones_ibfk_1` FOREIGN KEY (`idMedicion`) REFERENCES `sensor` (`idSensor`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `sensor`
--
ALTER TABLE `sensor`
  ADD CONSTRAINT `sensor_ibfk_1` FOREIGN KEY (`idSensor`) REFERENCES `campos` (`idCampos`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
