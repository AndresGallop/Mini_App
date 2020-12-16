-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 16, 2020 at 10:25 PM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_mini`
--

-- --------------------------------------------------------

--
-- Table structure for table `cars`
--

DROP TABLE IF EXISTS `cars`;
CREATE TABLE IF NOT EXISTS `cars` (
  `id` int(18) NOT NULL AUTO_INCREMENT,
  `name` varchar(40) NOT NULL,
  `description` varchar(400) NOT NULL,
  `image` varchar(150) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cars`
--

INSERT INTO `cars` (`id`, `name`, `description`, `image`) VALUES
(1, '2021 MINI COOPER 3 DOOR', 'The third-generation Mini Cooper came out as a late 2014 model, with all the personality of its predecessor but improved, the key point being its larger dimensions.', 'Mini3Door.png'),
(2, '2021 MINI COOPER COUNTRYMAN', 'The Mini Countryman Cooper S has front-wheel drive and a turbo-four engine. The Cooper S All4 has the same 189-horsepower engine but adds all-wheel drive, and the John Cooper Works model boosts output to 301 horsepower and also has AWD.', 'MiniCountryman.png'),
(3, '2021 MINI COOPER CONVERTIBLE', 'The perfect catalyst for opening yourself up to all life has to offer. The newest MINI Convertible improves on its predecessor with the latest performance engineering, a more spacious, high-end interior, and – as always – unlimited headroom. ', 'MiniConvertible.png');

-- --------------------------------------------------------

--
-- Table structure for table `videos`
--

DROP TABLE IF EXISTS `videos`;
CREATE TABLE IF NOT EXISTS `videos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  `thumb` varchar(60) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `videos`
--

INSERT INTO `videos` (`id`, `name`, `thumb`) VALUES
(1, 'mini1.mp4', 'thumb1.jpg'),
(2, 'mini2.mp4', 'thumb2.jpg'),
(3, 'mini3.mp4', 'thumb3.jpg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
