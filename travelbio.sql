/*
Navicat MySQL Data Transfer

Source Server         : ICC
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : travelbio

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2024-03-30 20:26:43
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for booking
-- ----------------------------
DROP TABLE IF EXISTS `booking`;
CREATE TABLE `booking` (
  `id` bigint(255) NOT NULL AUTO_INCREMENT,
  `number` varchar(255) DEFAULT NULL,
  `post` varchar(255) DEFAULT NULL,
  `time` varchar(255) DEFAULT NULL,
  `cost` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `createddate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of booking
-- ----------------------------
INSERT INTO `booking` VALUES ('5', '12', 'B', '13:30', '5', 'National', null, '2024-02-12 09:15:00');
INSERT INTO `booking` VALUES ('6', '125', 'A', '19:30', '1', 'National', null, '2024-02-12 09:15:00');
INSERT INTO `booking` VALUES ('7', '12', 'A', '16:30', '2', 'National', null, '2024-02-12 09:15:00');

-- ----------------------------
-- Table structure for location
-- ----------------------------
DROP TABLE IF EXISTS `location`;
CREATE TABLE `location` (
  `id` bigint(255) NOT NULL AUTO_INCREMENT,
  `idlocation` bigint(255) DEFAULT NULL,
  `iduser` bigint(11) NOT NULL,
  `country` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `postcode` varchar(255) DEFAULT NULL,
  `imglocation` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`,`iduser`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of location
-- ----------------------------
INSERT INTO `location` VALUES ('1', '1', '13', 'USA', 'New York', '123341', null);
INSERT INTO `location` VALUES ('2', '1', '14', 'UK', 'London', 'egr4542', null);
INSERT INTO `location` VALUES ('3', '1', '15', 'Italy', 'Roma', 'erw234', null);
INSERT INTO `location` VALUES ('4', '1', '16', 'Russia', 'Moscow', '567s', null);

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phonenumber` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `refreshToken` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `userrole` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', 'Nado Gemi', 'nado@email.com', '$2b$10$WqrvrYNgQO7EVuUAYfrjEuy6Uhmg0vKdU4g66vpq7vjWCAsf3NFY2', null, null, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5hZG9AZW1haWwuY29tIiwiaWF0IjoxNzExNTY1MzIyfQ.2hPUrDLhjgOAtKNzMT-pBXsL198veMefzHGjytA7Im0', null, null, '2024-03-28 01:48:43');
INSERT INTO `users` VALUES ('3', 'Nado Afa', 'karam@exequt.com', '$2b$10$vO.8z3GoJ.GOcfEAeGFl/e.oX7PTpQyifJRNB4Wh9iXlBjlsRpE7y', null, null, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImthcmFtQGV4ZXF1dC5jb20iLCJpYXQiOjE3MTE3MTI2MjV9.9PRDQPkR_-YSl5oL7jleSWmpGFegjdrQiXL50ZeH3pA', null, null, '2024-03-29 18:43:45');
