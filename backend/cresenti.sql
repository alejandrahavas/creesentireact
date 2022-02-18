-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 18-02-2022 a las 14:52:07
-- Versión del servidor: 5.5.24-log
-- Versión de PHP: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `cresenti`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contacto_cresenti`
--

CREATE TABLE IF NOT EXISTS `contacto_cresenti` (
  `id` int(80) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(80) NOT NULL,
  `email` varchar(80) NOT NULL,
  `telefono` varchar(50) NOT NULL,
  `comentario` varchar(1000) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- Volcado de datos para la tabla `contacto_cresenti`
--

INSERT INTO `contacto_cresenti` (`id`, `nombre`, `email`, `telefono`, `comentario`) VALUES
(1, 'Maria Linares', 'mlinares@tumail.com', '038777', 'Hola quisiera que me contactes para una consulta'),
(2, 'Marta Gomez', 'mgomez@tumail.com', '35438777', 'buen día cuanto vale una consulta? tambien quisiera saber si esto me puede ayudar con un problema de mi empresa'),
(3, 'Raul Morales', 'rmorales@tumail.com', '0351-8777', 'Hola, puede ser via Skype?');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL,
  `img_id` varchar(3500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`, `img_id`) VALUES
(1, 'El coaching, la mejor forma de preparar tus proyectos', 'A la hora de conseguir sacar adelante un proyecto, no sólo necesitamos formación y conocimientos, sino que además también es necesario que tengamos al alcance de nuestras manos un sistema a través del cual podamos realizar una correcta organización, de manera que nos ayude a tomar decisiones en función del modo en que vayamos evolucionando.', 'El coaching es una técnica a través de la cual se asesora a personas y grupos así como organizaciones con el objetivo de que realicen cambios, gracias a los cuales puedan conseguir alcanzar sus metas, todo ello siguiendo una serie de pasos que se adaptan a las necesidades en función de los objetivos concretos de dicho equipo.\r\n\r\nCabe destacar que el coach es un profesional externo al grupo, empresa, asociación, etc. que se encargará de ser el tutor o guía a través de todo el proceso, transmitiendo sus conocimientos y analizando los detalles que deben ser tenidos en cuenta para conseguir alcanzar los mejores resultados.', ''),
(2, 'Coaching para Padres', '¿Qué es el coaching para padres o coaching parental?', 'El coaching para padres es un proceso transformacional que está orientado a conseguir que estéis más presentes/conscientes en la educación y crianza de tus hijos y que tengáis más capacidades y recursos para ejercer vuestro rol de padres.\r\n\r\nEl coaching  para padres es un proceso para: empoderarte como padre o madre, sentirte capaz y competente como padre, mejorar tus habilidades parentales, aumentar tu manejo de la frustración y, por tanto, mejorar el control emocional en la relación con tus hijos, contrastar y resolver dudas sobre tu forma de educar.\r\n\r\nEn el coaching parental no es necesario que ambos progenitores estéis involucrados, podéis venir uno solo a las sesiones, aunque lo ideal es que acudáis los dos.', ''),
(4, 'prueba', 'prueba', 'prueba', 'cjipordkfrphpu55i6o5'),
(6, 'pruebaimagen', 'pimg', 'pimg', ''),
(7, 'pajaritos', 'pajaritos', 'pajaritos', 'lytyohebxddiujzpjvmq'),
(8, 'menu', 'menu ', 'menu', 'vyycjcyn9xjmyatjyy8e');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'alejandra', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'laura', '81dc9bdb52d04dc20036dbd8313ed055');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
