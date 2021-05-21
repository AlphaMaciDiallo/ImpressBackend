-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  ven. 21 mai 2021 à 05:20
-- Version du serveur :  10.1.34-MariaDB
-- Version de PHP :  7.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `angularnode`
--

-- --------------------------------------------------------

--
-- Structure de la table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(1, 'Category1'),
(2, 'Category2');

-- --------------------------------------------------------

--
-- Structure de la table `compagnie`
--

CREATE TABLE `compagnie` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `adess` varchar(200) NOT NULL,
  `telephone` varchar(200) NOT NULL,
  `mail` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `compagnie`
--

INSERT INTO `compagnie` (`id`, `name`, `adess`, `telephone`, `mail`) VALUES
(1, 'company_name', 'company_dress', 'company_Telephone', 'Company_email');

-- --------------------------------------------------------

--
-- Structure de la table `impress`
--

CREATE TABLE `impress` (
  `id` int(11) NOT NULL,
  `amount` varchar(200) NOT NULL,
  `startD` varchar(200) NOT NULL,
  `endD` varchar(200) NOT NULL,
  `userName` varchar(200) NOT NULL,
  `permit` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `impress`
--

INSERT INTO `impress` (`id`, `amount`, `startD`, `endD`, `userName`, `permit`) VALUES
(1, '5000', '2021-05-12', '2021-05-26', 'Alpha', 0),
(2, '6000', '2021-05-27', '2021-05-30', 'Yaya', 0);

-- --------------------------------------------------------

--
-- Structure de la table `operation`
--

CREATE TABLE `operation` (
  `id` int(11) NOT NULL,
  `description` text NOT NULL,
  `category` varchar(200) NOT NULL,
  `sCategory` varchar(200) NOT NULL,
  `cost` varchar(200) NOT NULL,
  `dateIsuue` varchar(200) NOT NULL,
  `IssuedBy` varchar(200) NOT NULL,
  `receivedBy` varchar(200) NOT NULL,
  `idImprss` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `operation`
--

INSERT INTO `operation` (`id`, `description`, `category`, `sCategory`, `cost`, `dateIsuue`, `IssuedBy`, `receivedBy`, `idImprss`) VALUES
(1, 'This is an operation that concerns orphans\' school fees.', 'Category1', 'subCategory1', '3000', 'May 20, 2021, 7: 29:58: PM', 'Yaya', 'Danso', 0),
(2, 'This operation concerns the insurance of all the companies\' cars.', 'Category2', 'subCategory2', '4000', 'May 20, 2021, 7: 31:45: PM', 'Alpha', 'Sow', 0);

-- --------------------------------------------------------

--
-- Structure de la table `subcategory`
--

CREATE TABLE `subcategory` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `idCategory` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `subcategory`
--

INSERT INTO `subcategory` (`id`, `name`, `idCategory`) VALUES
(1, 'subCategory1', 1),
(2, 'subCategory1', 1),
(3, 'subCategory2', 2),
(4, 'subCategory2', 2);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `iduser` int(11) NOT NULL,
  `Name` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`iduser`, `Name`, `email`, `password`) VALUES
(1, 'Yaya', 'yaya@gmail.com', '$2a$12$eH5K.NEA.spTpv1yH3NFZesU.NcppyJAyksBJ9tMMtzjuSajMpm0W'),
(2, 'Alpha', 'alpha@gmail.com', '$2a$12$COtxlTiq4rEGBf3CiPTYYOEZWLM0aknv6BQcIm8aSjMjbNFdpc6d.');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `compagnie`
--
ALTER TABLE `compagnie`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `impress`
--
ALTER TABLE `impress`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `operation`
--
ALTER TABLE `operation`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `subcategory`
--
ALTER TABLE `subcategory`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`iduser`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `compagnie`
--
ALTER TABLE `compagnie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `impress`
--
ALTER TABLE `impress`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `operation`
--
ALTER TABLE `operation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `subcategory`
--
ALTER TABLE `subcategory`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `iduser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
