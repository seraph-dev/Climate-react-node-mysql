/*
 Navicat Premium Data Transfer

 Source Server         : MySQL
 Source Server Type    : MySQL
 Source Server Version : 100424
 Source Host           : localhost:3306
 Source Schema         : climate

 Target Server Type    : MySQL
 Target Server Version : 100424
 File Encoding         : 65001

 Date: 13/07/2022 15:17:33
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for city
-- ----------------------------
DROP TABLE IF EXISTS `city`;
CREATE TABLE `city`  (
  `id` int(2) NOT NULL AUTO_INCREMENT,
  `state` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `state_url` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `city` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `city_url` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `temp` int(1) NULL DEFAULT NULL,
  `rain` int(1) NULL DEFAULT NULL,
  `river` int(1) NULL DEFAULT NULL,
  `coast` int(1) NULL DEFAULT NULL,
  `pluvial` int(1) NULL DEFAULT NULL,
  `fire` int(1) NULL DEFAULT NULL,
  `water` int(1) NULL DEFAULT NULL,
  `disease` int(1) NULL DEFAULT NULL,
  `storm` int(1) NULL DEFAULT NULL,
  `infra` int(1) NULL DEFAULT NULL,
  PRIMARY KEY (`id`, `state`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 14 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of city
-- ----------------------------
INSERT INTO `city` VALUES (1, 'US, New York', 'us-new-york', 'New York City', 'new-york-city', 5, 4, 6, 6, 6, 0, 6, 6, 7, 7);
INSERT INTO `city` VALUES (2, 'US, Washington', 'us-washington', 'Seattle', 'seattle', 5, 8, 8, 6, 8, 5, 5, 6, 7, 7);
INSERT INTO `city` VALUES (3, 'US, Michigan', 'us-michigan', 'Chicago', 'chicago', 8, 5, 7, 8, 7, 5, 7, 6, 8, 7);
INSERT INTO `city` VALUES (4, 'US, California', 'us-california', 'Los Angeles', 'los-angeles', 8, 6, 6, 8, 6, 8, 8, 6, 7, 8);
INSERT INTO `city` VALUES (5, 'US, California', 'us-california', 'San Diego', 'san-diego', 7, 7, 7, 7, 7, 7, 6, 7, 7, 7);
INSERT INTO `city` VALUES (6, 'US, California', 'us-california', 'San Francisco', 'san-francisco', 7, 4, 4, 8, 7, 8, 8, 8, 8, 9);
INSERT INTO `city` VALUES (7, 'US, Arizona', 'us-arizona', 'Phoenix', 'phoenix', 8, 4, 4, 3, 3, 8, 8, 6, 3, 5);
INSERT INTO `city` VALUES (8, 'US, Nevada', 'us-nevada', 'Las Vegas', 'las-vegas', 9, 8, 8, 0, 8, 8, 8, 6, 6, 8);
INSERT INTO `city` VALUES (9, 'US, North Carolina', 'us-north-carolina', 'Charlotte', 'charlotte', 5, 7, 7, 0, 7, 2, 3, 5, 7, 5);
INSERT INTO `city` VALUES (10, 'US, Pennsylvania', 'us-pennsylvania', 'Philadelphia', 'philadelphia', 6, 7, 7, 7, 7, 5, 7, 6, 7, 7);
INSERT INTO `city` VALUES (11, 'US, Texas', 'us-texas', 'Houston', 'houston', 7, 6, 7, 8, 6, 2, 6, 6, 5, 6);
INSERT INTO `city` VALUES (12, 'Canada', 'canada', 'Montreal', 'montreal', 8, 5, 7, 8, 7, 5, 7, 6, 8, 7);
INSERT INTO `city` VALUES (13, 'Canada', 'canada', 'Toronto', 'toronto', 8, 6, 6, 8, 6, 8, 8, 6, 7, 8);

-- ----------------------------
-- Table structure for impact
-- ----------------------------
DROP TABLE IF EXISTS `impact`;
CREATE TABLE `impact`  (
  `id` int(2) NOT NULL,
  `impact` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `text1` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `text2` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of impact
-- ----------------------------
INSERT INTO `impact` VALUES (1, 'low', 'have little to no in', 'low');
INSERT INTO `impact` VALUES (2, 'mild', 'increase midly', 'not severe');
INSERT INTO `impact` VALUES (3, 'medium', 'increase moderately', 'medium');
INSERT INTO `impact` VALUES (4, 'high', 'increase severely', 'high');
INSERT INTO `impact` VALUES (5, 'critical', 'increase critically', 'at the highest');

SET FOREIGN_KEY_CHECKS = 1;
