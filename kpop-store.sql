-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Počítač: 127.0.0.1
-- Vytvořeno: Pát 13. led 2023, 20:42
-- Verze serveru: 10.4.24-MariaDB
-- Verze PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Databáze: `kpop-store`
--

-- --------------------------------------------------------

--
-- Struktura tabulky `cleni`
--

CREATE TABLE `cleni` (
  `id_clena` int(11) NOT NULL,
  `id_skup` int(32) NOT NULL,
  `jmeno` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Vypisuji data pro tabulku `cleni`
--

INSERT INTO `cleni` (`id_clena`, `id_skup`, `jmeno`) VALUES
(1, 1, 'Nayeon'),
(2, 1, 'Momo'),
(3, 1, 'Jihyo'),
(4, 1, 'Mina'),
(5, 1, 'Sana'),
(6, 1, 'Tzuyu'),
(7, 1, 'Jeongyeon'),
(8, 1, 'Dahyun'),
(9, 1, 'Chaeyoung'),
(10, 2, 'Winter'),
(11, 2, 'Karina'),
(12, 2, 'Giselle'),
(13, 2, 'Ningning');

-- --------------------------------------------------------

--
-- Struktura tabulky `objednavky`
--

CREATE TABLE `objednavky` (
  `id_obj` int(11) NOT NULL,
  `id_zak` int(32) NOT NULL,
  `id_stavu` int(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktura tabulky `obj_pro`
--

CREATE TABLE `obj_pro` (
  `id_pro` int(11) NOT NULL,
  `id_obj` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktura tabulky `prihla_udaje`
--

CREATE TABLE `prihla_udaje` (
  `id_udaje` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Vypisuji data pro tabulku `prihla_udaje`
--

INSERT INTO `prihla_udaje` (`id_udaje`) VALUES
(1);

-- --------------------------------------------------------

--
-- Struktura tabulky `produkty`
--

CREATE TABLE `produkty` (
  `id_pro` int(11) NOT NULL,
  `id_clena` int(11) NOT NULL,
  `cena` varchar(32) NOT NULL,
  `image` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Vypisuji data pro tabulku `produkty`
--

INSERT INTO `produkty` (`id_pro`, `id_clena`, `cena`, `image`) VALUES
(1, 8, '29.99', '123456'),
(2, 2, '145.90', 'asda');

-- --------------------------------------------------------

--
-- Struktura tabulky `role`
--

CREATE TABLE `role` (
  `id_role` int(11) NOT NULL,
  `nazev` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Vypisuji data pro tabulku `role`
--

INSERT INTO `role` (`id_role`, `nazev`) VALUES
(1, 'admin'),
(2, 'uzivatel');

-- --------------------------------------------------------

--
-- Struktura tabulky `skupiny`
--

CREATE TABLE `skupiny` (
  `id_skup` int(11) NOT NULL,
  `jmeno_skup` varchar(32) NOT NULL,
  `pocet_clenu` int(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Vypisuji data pro tabulku `skupiny`
--

INSERT INTO `skupiny` (`id_skup`, `jmeno_skup`, `pocet_clenu`) VALUES
(1, 'Twice', 9),
(2, 'aespa', 4);

-- --------------------------------------------------------

--
-- Struktura tabulky `stav_obj`
--

CREATE TABLE `stav_obj` (
  `id_stavu` int(11) NOT NULL,
  `stav` char(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Vypisuji data pro tabulku `stav_obj`
--

INSERT INTO `stav_obj` (`id_stavu`, `stav`) VALUES
(1, 'vyrizena'),
(2, 'nevyrizena');

-- --------------------------------------------------------

--
-- Struktura tabulky `zakaznici`
--

CREATE TABLE `zakaznici` (
  `id_zak` int(11) NOT NULL,
  `id_udaje` int(32) NOT NULL,
  `id_role` int(32) NOT NULL,
  `jmeno` varchar(64) NOT NULL,
  `email` varchar(32) NOT NULL,
  `heslo` varchar(32) NOT NULL,
  `telefon` int(32) NOT NULL,
  `adresa` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexy pro exportované tabulky
--

--
-- Indexy pro tabulku `cleni`
--
ALTER TABLE `cleni`
  ADD PRIMARY KEY (`id_clena`),
  ADD KEY `ahoj5` (`id_skup`);

--
-- Indexy pro tabulku `objednavky`
--
ALTER TABLE `objednavky`
  ADD PRIMARY KEY (`id_obj`),
  ADD KEY `ahoj6` (`id_zak`),
  ADD KEY `ahoj7` (`id_stavu`);

--
-- Indexy pro tabulku `obj_pro`
--
ALTER TABLE `obj_pro`
  ADD KEY `ahoj8` (`id_pro`),
  ADD KEY `ahoj9` (`id_obj`);

--
-- Indexy pro tabulku `prihla_udaje`
--
ALTER TABLE `prihla_udaje`
  ADD PRIMARY KEY (`id_udaje`);

--
-- Indexy pro tabulku `produkty`
--
ALTER TABLE `produkty`
  ADD PRIMARY KEY (`id_pro`),
  ADD KEY `ahoj4` (`id_clena`);

--
-- Indexy pro tabulku `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id_role`);

--
-- Indexy pro tabulku `skupiny`
--
ALTER TABLE `skupiny`
  ADD PRIMARY KEY (`id_skup`);

--
-- Indexy pro tabulku `stav_obj`
--
ALTER TABLE `stav_obj`
  ADD PRIMARY KEY (`id_stavu`);

--
-- Indexy pro tabulku `zakaznici`
--
ALTER TABLE `zakaznici`
  ADD PRIMARY KEY (`id_zak`),
  ADD UNIQUE KEY `id_role` (`id_role`);

--
-- AUTO_INCREMENT pro tabulky
--

--
-- AUTO_INCREMENT pro tabulku `cleni`
--
ALTER TABLE `cleni`
  MODIFY `id_clena` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT pro tabulku `objednavky`
--
ALTER TABLE `objednavky`
  MODIFY `id_obj` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pro tabulku `prihla_udaje`
--
ALTER TABLE `prihla_udaje`
  MODIFY `id_udaje` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pro tabulku `produkty`
--
ALTER TABLE `produkty`
  MODIFY `id_pro` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pro tabulku `role`
--
ALTER TABLE `role`
  MODIFY `id_role` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pro tabulku `skupiny`
--
ALTER TABLE `skupiny`
  MODIFY `id_skup` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pro tabulku `stav_obj`
--
ALTER TABLE `stav_obj`
  MODIFY `id_stavu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pro tabulku `zakaznici`
--
ALTER TABLE `zakaznici`
  MODIFY `id_zak` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Omezení pro exportované tabulky
--

--
-- Omezení pro tabulku `cleni`
--
ALTER TABLE `cleni`
  ADD CONSTRAINT `ahoj5` FOREIGN KEY (`id_skup`) REFERENCES `skupiny` (`id_skup`);

--
-- Omezení pro tabulku `objednavky`
--
ALTER TABLE `objednavky`
  ADD CONSTRAINT `ahoj6` FOREIGN KEY (`id_zak`) REFERENCES `zakaznici` (`id_zak`),
  ADD CONSTRAINT `ahoj7` FOREIGN KEY (`id_stavu`) REFERENCES `stav_obj` (`id_stavu`);

--
-- Omezení pro tabulku `obj_pro`
--
ALTER TABLE `obj_pro`
  ADD CONSTRAINT `ahoj8` FOREIGN KEY (`id_pro`) REFERENCES `produkty` (`id_pro`),
  ADD CONSTRAINT `ahoj9` FOREIGN KEY (`id_obj`) REFERENCES `objednavky` (`id_obj`);

--
-- Omezení pro tabulku `produkty`
--
ALTER TABLE `produkty`
  ADD CONSTRAINT `ahoj4` FOREIGN KEY (`id_clena`) REFERENCES `cleni` (`id_clena`);

--
-- Omezení pro tabulku `zakaznici`
--
ALTER TABLE `zakaznici`
  ADD CONSTRAINT `ahoj1` FOREIGN KEY (`id_role`) REFERENCES `role` (`id_role`),
  ADD CONSTRAINT `ahoj2` FOREIGN KEY (`id_udaje`) REFERENCES `prihla_udaje` (`id_udaje`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
